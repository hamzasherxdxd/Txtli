import React from "react";
import Terms from "@/components/Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",

};

const PrivacyPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Terms />
    </div>
  );
};

export default PrivacyPage;
