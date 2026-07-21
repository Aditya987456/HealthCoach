type SectionCardProps = {
  title: string;
  summary: string;
  informationType: string;
  supportingEvidence: string[];
};

function SectionCard({
  title,
  summary,
  informationType,
  supportingEvidence,
}: SectionCardProps) {
  
    return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-500">
          Summary
        </p>

        <p className="mt-1 text-gray-700">
          {summary}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-gray-500">
          Information Type
        </p>

        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {informationType}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-gray-500">
          Supporting Evidence
        </p>

        {supportingEvidence.length > 0 ? (
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700">
            {supportingEvidence.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">
            No supporting evidence available.
          </p>
        )}
      </div>
    </div>
  );
}

export default SectionCard;