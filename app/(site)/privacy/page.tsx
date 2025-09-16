import React from "react";
import Privacy from "@/components/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",

};

const PrivacyPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Privacy/>
    </div>
  );
};

export default PrivacyPage;
