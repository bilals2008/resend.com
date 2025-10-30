// File: app/(main)/enterprise/EnterpriseSecurity.tsx/EnterpriseSecurity.tsx
import ContentSection from "@/components/common/ContentSection";
import React from "react";
import EnterpriseSecurityCard from "./EnterpriseSecurityCard";

function EnterpriseSecurity() {
    return (
        <div className="py-10">
            <div className="max-w-2xl mx-auto">
                <ContentSection
                    heading={
                        <>
                            All boxes checked,
                            <br /> without compromise
                        </>
                    }
                    desciption="The security that your mission-critical application needs. Take advantage of access control,
encryption, global redundancy, and uptime commitments that keeps your business moving forward."
                />
            </div>
            <EnterpriseSecurityCard/>
        </div>
    );
}

export default EnterpriseSecurity;
