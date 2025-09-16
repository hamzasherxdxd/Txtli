"use client";

import { Suspense } from "react";
import Success from "../../../components/Success"; // or "@/app/components/Success"

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Success />
    </Suspense>
  );
}