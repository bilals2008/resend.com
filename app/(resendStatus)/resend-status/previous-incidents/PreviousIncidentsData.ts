// File: app/(resendStatus)/previous-incidents/PreviousIncidentsData.ts
export const incidentsData = [
  {
    date: "Oct 20, 2025",
    affected: "Resend SMTP Relay",
    title: "Email delivery delays",
    duration: "45 minutes",
    status: "Resolved",
    details:
      "We experienced increased email latency due to a backend queue issue. The issue was resolved within 45 minutes.",
  },
  {
    date: "Sep 15, 2025",
    affected: "Resend API",
    title: "Intermittent API downtime",
    duration: "25 minutes",
    status: "Resolved",
    details:
      "An unexpected deployment caused intermittent downtime. All systems are operational now.",
  },
];
