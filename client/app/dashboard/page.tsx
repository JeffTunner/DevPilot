"use client";

import { RequireAuth } from "@/components/providers/require-auth";
import { AppShell } from "@/components/layout/app-shell";
//import { RepoDashboard } from "@/components/dashboard/repo-dashboard";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <AppShell hideHeader>
        <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-2xl font-bold">Welcome to DevPilot</h1>
        </div>
      </AppShell>
    </RequireAuth>
  );
}
    
