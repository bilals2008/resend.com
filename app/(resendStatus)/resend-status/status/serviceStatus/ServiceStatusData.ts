// File: app/(resendStatus)/resend-status/status/serviceStatus/ServiceStatusData.ts
export const servicesStatus = [
  {
    name: "Resend Website",
    uptime: 98.806,
    status: "Operational",
    duration: "Last 90 days",
    statusBars: [...Array(12).fill("green"), "red", ...Array(75).fill("green")],
  },
  {
    name: "Resend API",
    uptime: 99.437,
    status: "Operational",
    duration: "Last 90 days",
    statusBars: [
      ...Array(45).fill("green"),
      "yellow",
      "orange",
      ...Array(15).fill("green"),
      "red",
      ...Array(25).fill("green"),
    ],
  },
  {
    name: "Resend SMTP Relay",
    uptime: 99.437,
    status: "Operational",
    duration: "Last 90 days",
    statusBars: [...Array(78).fill("green"), "red", ...Array(10).fill("green")],
  },
];
