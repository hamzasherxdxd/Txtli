"use client";

import { motion } from "framer-motion";
import React from "react";

// If you use a custom Container or Typography component, import them here
// import Container from "@/components/Container";
// import Typography from "@/components/Typography";

const PrivacyPolicy = () => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 py-12 text-base text-neutral-800"
    >
        <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <p className="mb-2"><strong>Effective Date:</strong> 24/4/2025</p>
        <p className="mb-6">
            Refined Product LLC (<span className="font-semibold">"Company," "we," "us," or "our"</span>) respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.txtli.io" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">www.txtli.io</a> and use our services. Please read this policy carefully. If you do not agree with our practices, do not use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-2">We collect different types of information, including:</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">1.1 Personal Information</h3>
        <p className="mb-2">When you sign up for TXTLI, contact us, or use our services, we may collect personal details such as:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Payment information (if applicable)</li>
            <li>Any other details you provide through forms or communications</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">1.2 Non-Personal Information</h3>
        <p className="mb-2">We may collect non-identifiable data such as:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Website usage data (pages visited, time spent, etc.)</li>
            <li>Cookies and tracking technologies</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Provide and improve our CRM services</li>
            <li>Process transactions and payments</li>
            <li>Communicate with you regarding updates, promotions, and customer support via SMS</li>
            <li>Analyze website traffic and improve user experience</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Third-Party Disclosure</h2>
        <p className="mb-2">
            We do not sell, share, or distribute your mobile opt-in information to third parties for marketing or any other purposes. Your consent to receive SMS messages from Refined Product LLC is used exclusively for communications related to our business services and will not be shared outside of our organization, except as required by law.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Opt-Out & Support</h3>
        <p className="mb-2">
            You may opt out of SMS communications at any time by replying “STOP”, which will immediately remove you from our messaging list. For assistance, reply “HELP” to receive support information. Message frequency may vary. Msg and data rates may apply.
        </p>
        <p className="mb-4">
            <span className="font-semibold">Service Providers:</span> Third-party vendors that assist with website hosting, payment processing, analytics, and customer support.<br />
            <span className="font-semibold">Legal Compliance:</span> If required by law, we may disclose your information to authorities.<br />
            <span className="font-semibold">Business Transfers:</span> If TXTLI is involved in a merger, acquisition, or sale, your information may be transferred.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
            We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience and collect analytics. You can manage your cookie preferences in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
            We implement security measures to protect your information. However, no online transmission is 100% secure. We recommend using strong passwords and safeguarding your account.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Privacy Rights</h2>
        <p className="mb-2">
            Depending on your location, you may have rights regarding your data, such as:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Accessing the personal data we hold about you</li>
            <li>Requesting corrections or deletions</li>
            <li>Opting out of marketing communications</li>
            <li>Restricting certain types of data processing</li>
        </ul>
        <p className="mb-4">
            To exercise these rights, contact us at <a href="https://www.txtli.io" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">www.txtli.io</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Third-Party Links</h2>
        <p className="mb-4">
            Our website may contain links to third-party sites. We are not responsible for their privacy practices, so please review their policies before providing personal information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Effective Date.” Your continued use of TXTLI after changes constitutes your acceptance of the revised policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-2">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
            <span role="img" aria-label="email">📧</span> <strong>Email:</strong> <a href="mailto:info@txtli.io" className="text-green-600 underline">info@txtli.io</a>
        </p>
    </motion.section>
);

export default PrivacyPolicy;