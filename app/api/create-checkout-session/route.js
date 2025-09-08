// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const {
//       priceId,
//       fullName,
//       email,
//       organization,
//       phone,
//       address,
//       city,
//       state,
//       country,
//       postalCode,
//       packageName,
//     } = await req.json();

//     const session = await stripe.checkout.sessions.create({
//       mode: "subscription",
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: priceId,
//           quantity: 1,
//         },
//       ],
//       customer_email: email,
//       customer_phone: phone,
//       customer_creation: "always", // ensures a customer is created
//       metadata: {
//         fullName,
//         organization,
//         phone,
//         address,
//         city,
//         state,
//         country,
//         postalCode,
//         packageName,
//       },
//       success_url: `${req.headers.get(
//         "origin"
//       )}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${req.headers.get("origin")}/cancel`,
//     });

//     return NextResponse.json({ sessionId: session.id });
//   } catch (error) {
//     console.error("❌ Error creating checkout session:", error.message);
//     return NextResponse.json(
//       { error: "Error creating checkout session" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const {
      fullName,
      email,
      organization,
      phone,
      address,
      city,
      state,
      country,
      postalCode,
      packageName,
      priceId,
    } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email, // Stripe auto-creates customer
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
      metadata: {
        fullName,
        organization,
        phone,
        address,
        city,
        state,
        country,
        postalCode,
        packageName,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("❌ Error creating checkout session:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
