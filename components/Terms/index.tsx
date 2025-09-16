"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Header />
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-12 text-base"
      style={{
        fontFamily: "var(--font-sans, 'Inter', 'Segoe UI', Arial, sans-serif)",
        color: "var(--color-text, #222)",
        background: "var(--color-bg, #fff)",
      }}
    >
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--color-primary, #2B6CB0)", fontFamily: "var(--font-heading, inherit)" }}>
        Terms and Conditions
      </h1>
      <p className="mb-2"><strong>Refined Product LLC Terms and Conditions</strong></p>
      <p className="mb-6"><strong>Last Updated:</strong> 24/4/2025</p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>1. Introduction</h2>
      <p className="mb-4">
        Welcome to TXTLI! These Terms and Conditions ("Terms") govern your access to and use of TXTLI's services, including but not limited to its CRM software, SMS communications, and lead management tools. By accessing or using TXTLI, you agree to comply with these Terms. If you do not agree, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>2. Services Provided</h2>
      <p className="mb-4">
        TXTLI provides customer relationship management (CRM) software and SMS messaging services designed to help businesses manage leads and client communications. Features may be updated or changed at any time at TXTLI’s discretion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>3. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>You agree to use TXTLI’s services in compliance with all applicable laws and regulations.</li>
        <li>You shall not use TXTLI for any unlawful, abusive, or fraudulent activities, including sending unauthorized or spam messages.</li>
        <li>You are responsible for maintaining the security of your account and all activities occurring under your account.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>4. Payment and Billing</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>If applicable, users agree to pay all fees associated with their use of TXTLI.</li>
        <li>Failure to make payments may result in the suspension or termination of services.</li>
        <li>Payments are non-refundable unless otherwise stated in a written agreement.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>5. SMS Communication and Disclosure</h2>
      <p className="mb-2">By using TXTLI’s SMS services, you agree to the following:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Consent:</strong> You affirm that you have obtained proper consent from recipients before sending SMS messages through TXTLI.</li>
        <li><strong>Opt-Out:</strong> Recipients may opt out of receiving SMS messages at any time by replying "STOP." Once opted out, messages will no longer be sent to that number.</li>
        <li><strong>Carrier Disclaimer:</strong> Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
        <li><strong>Compliance:</strong> Users must comply with all applicable laws, including but not limited to the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>6. Termination</h2>
      <p className="mb-4">
        TXTLI reserves the right to suspend or terminate your account at any time if you violate these Terms. You may also terminate your account at any time by contacting TXTLI support.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>7. Limitation of Liability</h2>
      <p className="mb-4">
        TXTLI is not liable for any indirect, incidental, special, or consequential damages arising out of your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the service in the past 12 months.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>8. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms at any time. Users will be notified of significant changes via email or platform notifications. Continued use of the service after changes constitutes acceptance of the revised Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>9. Contact Information</h2>
      <p className="mb-2">
        If you have any questions regarding these Terms, please contact us at <a href="mailto:info@txtli.io" className="text-green-600 underline">info@txtli.io</a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2" style={{ color: "var(--color-primary, #2B6CB0)" }}>Link to Privacy Policy</h2>
      <p>
        Please review our <Link href="/privacy" className="text-green-600 underline">Privacy Policy</Link> for information about how we collect, use, and protect your data.
      </p>
    </motion.section>
    <Footer />
  </>
);

export default Terms;