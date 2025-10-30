// File: app/(resendStatus)/resend-status/maintenance/Maintenance.tsx
import React from "react";
import { maintenanceData } from "./maintenanceData";

function Maintenance() {
  return (
    <div className="max-w-3xl mx-auto p-2 rounded-sm bg-[#191C24] my-5">
      <div>
        <p className="font-semibold mb-2">Scheduled Maintenance</p>
        {maintenanceData.length === 0 ? (
          <p className="text-sm text-gray-400">
            No scheduled maintenance at this time.
          </p>
        ) : (
          maintenanceData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 py-3 border-b border-gray-800"
            >
              <p className="font-light text-xs text-green-400">{item.status}</p>
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-gray-400">{item.affected}</p>
              <p className="text-xs">{item.date}</p>
              <p className="text-xs text-gray-300">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Maintenance;
