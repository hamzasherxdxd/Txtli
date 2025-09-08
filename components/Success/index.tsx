"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSession(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [sessionId]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center mt-10 text-red-500">No session found.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Payment Successful!</h1>
      <p className="mb-2">Thank you for your subscription.</p>
      <p className="text-gray-600">We've sent you a confirmation message on your email with the next instructions!</p>
    </div>
  );
}

export default SuccessPage;