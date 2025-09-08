// import { sql } from "@vercel/postgres";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   const rawBody = await req.text();
//   const sig = req.headers.get("stripe-signature");

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(
//       rawBody,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("❌ Webhook signature verification failed:", err.message);
//     return new Response("Webhook Error", { status: 400 });
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     const meta = session.metadata || {};

//     try {
//       await sql`
//         INSERT INTO subscribers (
//           full_name, email, organization, phone, address, city, state, country, postal_code, package_name,
//           stripe_customer_id, status
//         )
//         VALUES (
//           ${meta.fullName}, ${session.customer_email}, ${meta.organization}, ${meta.phone},
//           ${meta.address}, ${meta.city}, ${meta.state}, ${meta.country}, ${meta.postalCode}, ${meta.packageName},
//           ${session.customer}, 'active'
//         )
//         ON CONFLICT (email) DO UPDATE 
//         SET 
//           full_name = EXCLUDED.full_name,
//           organization = EXCLUDED.organization,
//           phone = EXCLUDED.phone,
//           address = EXCLUDED.address,
//           city = EXCLUDED.city,
//           state = EXCLUDED.state,
//           country = EXCLUDED.country,
//           postal_code = EXCLUDED.postal_code,
//           package_name = EXCLUDED.package_name,
//           stripe_customer_id = EXCLUDED.stripe_customer_id,
//           status = 'active'
//       `;
//       console.log("✅ Subscriber saved:", session.customer_email);
//     } catch (dbError) {
//       console.error("❌ DB insert error:", dbError.message);
//     }
//   }

//   return new Response("OK", { status: 200 });
// }

// import { headers } from "next/headers";
// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import prisma from "@/lib/prisma";


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   const body = await req.text();
//   const sig = (await headers()).get("stripe-signature");
//     console.log("🔥 Incoming webhook:", body); // <-- add this


//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("❌ Webhook signature verification failed:", err.message);
//     return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
//   }

//   try {
//     switch (event.type) {
//       case "checkout.session.completed": {
//         const session = event.data.object;

//         // metadata we passed when creating checkout session
//         const {
//           fullName,
//           organization,
//           phone,
//           address,
//           city,
//           state,
//           country,
//           postalCode,
//           packageName,
//         } = session.metadata;

//         // save to Neon via Prisma
//         await prisma.subscription.create({
//           data: {
//             stripeCustomerId: session.customer,
//             stripeSubscriptionId: session.subscription,
//             email: session.customer_email,
//             fullName,
//             organization,
//             phone,
//             address,
//             city,
//             state,
//             country,
//             postalCode,
//             packageName,
//             status: "active",
//           },
//         });

//         console.log("✅ Subscription stored in DB:", session.id);
//         break;
//       }

//       default:
//         console.log(`Unhandled event type ${event.type}`);
//     }

//     return NextResponse.json({ received: true });
//   } catch (err) {
//     console.error("❌ Error handling webhook:", err.message);
//     return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
//   }
// }


import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/lib/prisma"; // Prisma client

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  console.log("🔥 Webhook received");
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const customerDetails = session.customer_details || {};

        console.log("🔥 Checkout session completed:", session.id);

        try {
          await prisma.subscription.create({
            data: {
              stripeCustomerId: session.customer || null,
              stripeSubscriptionId: session.subscription || null,
              email: customerDetails.email,
              fullName: customerDetails.name,
              organization: session.metadata?.organization || null,
              phone: customerDetails.phone,
              address: customerDetails.address?.line1,
              city: customerDetails.address?.city,
              state: customerDetails.address?.state,
              country: customerDetails.address?.country,
              postalCode: customerDetails.address?.postal_code,
              packageName: session.metadata?.packageName || null,
              status: "active",
            },
          });

          console.log("✅ Subscription saved to DB:", session.id);
        } catch (dbError) {
          console.error("❌ DB insert failed:", dbError);
        }

        break;
      }

      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook handler failed:", err.message);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
