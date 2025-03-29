
import React from "react";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LegalNavbar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <p className="text-lg text-muted-foreground">
          This is the features page. Content coming soon.
        </p>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Features;
