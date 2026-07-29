import { apiFetch } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function LeadDetailPage({ params }) {
  const { id } = await params;

  const lead = await apiFetch(`/api/leads/${id}`);

  if (!lead || lead.error) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        {lead.name || lead.wa_phone}
      </h1>

      <div className="mt-4 space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Status:</span> {lead.status}
        </p>
        <p>
          <span className="font-medium">Source:</span>{" "}
          {lead.source || lead.channel || "—"}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {lead.wa_phone}
        </p>
      </div>
    </main>
  );
}
