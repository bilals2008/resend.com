// File: app/(resendStatus)/previous-incidents/page.tsx
import React from "react";
import PreviousIncidents from "./PreviousIncidents";

function PreviousIncidentsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      {/* 🔹 Heading + Description */}
      <div className="mb-10 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-100">
          Previous Incidents
        </h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          A historical record of service interruptions and resolved issues. You
          can review past incidents to understand uptime trends and
          improvements.
        </p>
      </div>

      {/* 🔹 Timeline component */}
      <PreviousIncidents />
    </div>
  );
}

export default PreviousIncidentsPage;
