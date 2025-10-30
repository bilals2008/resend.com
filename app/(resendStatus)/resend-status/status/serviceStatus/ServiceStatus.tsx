// File: app/(resendStatus)/resend-status/status/serviceStatus/ServiceStatus.tsx
import React from "react";
import ServiceStatusTop from "./ServiceStatusTop";
import { Check } from "lucide-react";
import { servicesStatus } from "./ServiceStatusData";
function ServiceStatus() {
  const getBarColor = (status: string) => {
    switch (status) {
      case "green":
        return "bg-emerald-500";
      case "yellow":
        return "bg-yellow-400";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-emerald-500";
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-2 rounded-sm bg-[#191C24] my-5">
      <div>
        <ServiceStatusTop />
        {servicesStatus.map((service, index) => (
          <div key={index} className="flex flex-col gap-2 py-4">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <Check className="size-3 bg-green-400 rounded-full text-black font-bold p-0.5" />
                <span className="font-light text-xs">{service.name}</span>
              </p>
              <p className="font-light text-xs text-green-400">
                {service.uptime}% uptime
              </p>
            </div>
            <div className="flex gap-0.5 h-8 rounded overflow-hidden">
              {service.statusBars.map((status, barIndex) => (
                <div
                  key={barIndex}
                  className={`flex-1 ${getBarColor(status)}`}
                ></div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-light text-xs">
                {service.duration.split(" ")[1]} ago
              </p>
              <p className="font-light text-xs text-green-400">today</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServiceStatus;
