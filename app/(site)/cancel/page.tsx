"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="max-w-lg mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">❌ Payment Cancelled</h1>
      <p className="mb-4 text-gray-700">
        Your checkout was cancelled. Don’t worry — you haven’t been charged.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}