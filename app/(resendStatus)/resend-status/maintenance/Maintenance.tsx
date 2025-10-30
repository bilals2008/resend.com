// File: app/(resendStatus)/resend-status/maintenance/Maintenance.tsx
"use client";
import React from "react";
import { motion } from "motion/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wrench, CheckCircle2, Clock } from "lucide-react";
import {
  fadeUp,
  zoomIn,
  hoverPop,
  staggerContainer,
  rotateIn,
} from "@/components/animations/variants";
import { maintenanceData } from "./maintenanceData";
import { Card, CardContent } from "@/components/ui/card";

function Maintenance() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto my-10 p-4"
    >
      {/* 🔸 Alert Section */}
      <motion.div variants={zoomIn} className="mb-6">
        <Alert className="border-yellow-500/30 bg-yellow-500/10 transition-all">
          <motion.div variants={rotateIn} className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-yellow-500" />
            <AlertTitle className="text-yellow-400 font-semibold">
              Scheduled Maintenance
            </AlertTitle>
          </motion.div>
          <AlertDescription className="text-sm text-gray-300 mt-1">
            Some services may be temporarily unavailable during maintenance
            windows. Check details below for schedule and status.
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* 🔹 Maintenance Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        {maintenanceData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover="hover"
            className="flex-1"
          >
            <Card className="bg-[#191C24] border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.status === "Scheduled" ? (
                      <Clock className="size-4 text-yellow-400" />
                    ) : (
                      <CheckCircle2 className="size-4 text-green-400" />
                    )}
                    <h3 className="text-sm font-medium text-gray-100">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.status === "Scheduled"
                        ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        : "bg-green-500/10 text-green-400 border border-green-500/20"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-gray-500">{item.date}</p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-gray-400 italic">
                  Affected: {item.affected}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Maintenance;
