// File: app/(resendStatus)/resend-status/previous-incidents/PreviousIncidents.tsx
"use client";
import React from "react";
import { motion } from "motion/react";
import {
  staggerContainer,
  hoverPop,
  slideIn,
} from "@/components/animations/variants";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { incidents } from "./PreviousIncidentsData";

function PreviousIncidents() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto py-10 relative"
    >
      <div className="flex flex-col relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />

        {incidents.map((incident, i) => (
          <motion.div
            key={i}
            variants={slideIn("up", i * 0.1)}
            className="relative flex items-start gap-6 mb-8 pl-10"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-5">
              <div
                className={`relative w-3 h-3 rounded-full ring-2 ring-[#191C24] ${
                  incident.resolved ? "bg-green-400" : "bg-red-500"
                }`}
              >
                {/* Pulse effect */}
                <span
                  className={`absolute inset-0 rounded-full opacity-60 animate-ping ${
                    incident.resolved ? "bg-green-400" : "bg-red-500"
                  }`}
                />
              </div>
            </div>

            {/* Card */}
            <motion.div
              variants={hoverPop}
              initial="rest"
              whileHover="hover"
              className="flex-1"
            >
              <Card className="bg-[#191C24] border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    {incident.resolved ? (
                      <CheckCircle2 className="size-4 text-green-400" />
                    ) : (
                      <AlertCircle className="size-4 text-red-400" />
                    )}
                    <h3 className="text-sm font-medium text-gray-100">
                      {incident.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500">{incident.date}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {incident.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default PreviousIncidents;
