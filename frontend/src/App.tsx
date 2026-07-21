import { useState } from "react";

function App() {
  const [conversation, setConversation] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">
          Client Intelligence Analyzer
        </h1>

        <p className="mt-2 text-gray-600">
          Analyze client-coach conversations using AI and generate a structured
          weekly report.
        </p>

        {/* Conversation Input */}
        <div className="mt-8">
          <label className="mb-2 block text-lg font-semibold text-gray-800">
            Conversation
          </label>

          <textarea
            rows={18}
            value={conversation}
            onChange={(e) => setConversation(e.target.value)}
            placeholder="Paste the complete client-coach conversation here..."
            className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => console.log(conversation)}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Analyze Conversation
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;