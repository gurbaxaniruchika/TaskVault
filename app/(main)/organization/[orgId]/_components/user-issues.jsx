'use client';

import { Suspense } from "react";
import { getUserIssues } from "@/actions/organizations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IssueCard from "@/components/issue-card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export default async function UserIssues({ userId }) {
  const issues = await getUserIssues(userId);

  if (issues.length === 0) {
    return null;
  }

  const assignedIssues = issues.filter(
    (issue) => issue.assignee.clerkUserId === userId
  );
  const reportedIssues = issues.filter(
    (issue) => issue.reporter.clerkUserId === userId
  );

  const chartData = [
    {
      name: "Assigned",
      count: assignedIssues.length,
    },
    {
      name: "Reported",
      count: reportedIssues.length,
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold gradient-title mb-4">My Issues</h1>

      <div style={{ width: "100%", height: 300, marginBottom: "20px" }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Tabs defaultValue="assigned" className="w-full">
        <TabsList>
          <TabsTrigger value="assigned">Assigned to You</TabsTrigger>
          <TabsTrigger value="reported">Reported by You</TabsTrigger>
        </TabsList>
        <TabsContent value="assigned">
          <Suspense fallback={<div>Loading...</div>}>
            <IssueGrid issues={assignedIssues} />
          </Suspense>
        </TabsContent>
        <TabsContent value="reported">
          <Suspense fallback={<div>Loading...</div>}>
            <IssueGrid issues={reportedIssues} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </>
  );
}

function IssueGrid({ issues }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} showStatus />
      ))}
    </div>
  );
}
