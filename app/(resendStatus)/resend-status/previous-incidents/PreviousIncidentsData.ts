// File: app/(resendStatus)/resend-status/previous-incidents/PreviousIncidentsData.ts
export const incidents = [
  {
    title: "Email delivery delay",
    description:
      "Some users experienced email delays due to a temporary server issue. The problem has been resolved and systems are stable.",
    date: "October 25, 2025",
    resolved: true,
  },
  {
    title: "Message queue latency",
    description:
      "Some users may experience message delays as we scale new servers. Monitoring continues.",
    date: "March 19, 2025",
    resolved: false,
  },
  {
    title: "API downtime",
    description:
      "API requests were failing intermittently for around 15 minutes due to maintenance. Service has been restored.",
    date: "September 12, 2025",
    resolved: true,
  },
  {
    title: "Email bounce spike",
    description:
      "We are currently investigating higher-than-usual bounce rates affecting a subset of users.",
    date: "June 30, 2025",
    resolved: false,
  },
  {
    title: "SMTP authentication issue",
    description:
      "SMTP connections were failing for a subset of users. The issue was identified and resolved promptly.",
    date: "August 03, 2025",
    resolved: true,
  },
  {
    title: "Webhook delivery interruption",
    description:
      "Webhook deliveries were temporarily paused due to queue congestion. The backlog has been cleared.",
    date: "July 22, 2025",
    resolved: true,
  },
  
  {
    title: "DNS propagation delay",
    description:
      "DNS record updates took longer than expected, causing temporary domain verification issues. The issue has been resolved.",
    date: "May 18, 2025",
    resolved: true,
  },
  {
    title: "Attachment upload failure",
    description:
      "File uploads larger than 5MB are currently failing. Our team is working to restore functionality.",
    date: "April 05, 2025",
    resolved: false,
  },
];
