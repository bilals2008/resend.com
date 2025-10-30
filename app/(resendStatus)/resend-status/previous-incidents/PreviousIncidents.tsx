// File: app/(resendStatus)/previous-incidents/PreviousIncidents.tsx
import React from "react";
import { incidentsData } from "./PreviousIncidentsData";

function PreviousIncidents() {
  return (
    <div className="max-w-3xl mx-auto p-2 rounded-sm bg-[#191C24] my-5">
      <div>
        <p className="font-semibold mb-2">Incident History</p>
        {incidentsData.length === 0 ? (
          <p className="text-sm text-gray-400">No incidents reported.</p>
        ) : (
          incidentsData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 py-3 border-b border-gray-800"
            >
              <p className="font-light text-xs text-red-400">{item.status}</p>
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-gray-400">{item.affected}</p>
              <p className="text-xs">
                {item.date} — {item.duration}
              </p>
              <p className="text-xs text-gray-300">{item.details}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PreviousIncidents;
