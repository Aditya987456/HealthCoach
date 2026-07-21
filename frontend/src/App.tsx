import { useState } from "react";
import { backendUrl } from "./config";
import axios from "axios";
import type { Report } from "./types";
import SectionCard from "./components/SectionCard";




function App() {


  const [conversation, setConversation] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<Report | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<"approved" | "rejected" | null>(null);
  const [editedRecommendation, setEditedRecommendation] = useState("");



  // -------- backend call to analyze route and ai calls then...
  const HandleAnalyze = async ()=>{

    try {

      if (!conversation.trim()) {
          alert("Please enter the conversation.");
          return;
      }

      setLoading(true)
      const response = await axios.post(`${backendUrl}/analyze`,
        {
        conversation
      })

      //console.log(response.data)

      setReport(response.data.report);

      setEditedRecommendation(
        response.data.report.recommendedNextAction.summary
      );

      setReviewStatus(null);
      setIsEditing(false);



    } catch (error) {
      console.error(error)

    }finally{
      setLoading(false)
    }
  }


//------ for all the sections card renedering no need to write whole sectioncard code for each...
  const sections = report
  ? [
      {
        title: "Nutrition Adherence",
        data: report.nutrition,
      },
      {
        title: "Exercise / Steps",
        data: report.exercise,
      },
      {
        title: "Sleep",
        data: report.sleep,
      },
      {
        title: "Water Intake",
        data: report.waterIntake,
      },
      {
        title: "Symptoms / Stress",
        data: report.symptomsStress,
      },
      {
        title: "Engagement Level",
        data: report.engagementLevel,
      },
      {
        title: "Key Barriers",
        data: report.keyBarriers,
      },
      {
        title: "Pending Actions",
        data: report.pendingActions,
      },
      {
        title: "Risk / Attention Flags",
        data: report.riskFlags,
      },
      //----becz this need to be editable...
      // {
      //   title: "Recommended Next Action",
      //   data: report.recommendedNextAction,
      // },
    ]
  : [];




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
            onClick={HandleAnalyze}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            {loading ? "Analyzing..." : "Analyze Conversation"}
          </button>
        </div>



{/* here when ai generated the result then this section will came... */}

{report && (
  <div
    className="mt-10 rounded-xl border border-gray-200 bg-white p-8 shadow-lg"
  >
    {/*--------- Weekly Summary */}

    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Weekly Client Summary
      </h2>

      <p className="mt-4 leading-7 text-gray-700">
        {report.weeklySummary}
      </p>
    </div>

    <hr className="my-8" />

    {/*---- All Report Sections */}
    <div className="space-y-6">
      {sections.map((section) => (
        <SectionCard
          key={section.title}
          title={section.title}
          summary={section.data.summary}
          informationType={section.data.informationType}
          supportingEvidence={section.data.supportingEvidence}
        />
      ))}
    </div>

    <hr className="my-8" />

   
    {/* ------------ Recommended Next Action -----------------*/}

  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

    <h3 className="text-xl font-semibold">
      Recommended Next Action
    </h3>

    {!isEditing ? (

      <p className="mt-4 leading-7">
        {editedRecommendation}
      </p>

    ) : (

      <textarea
        rows={5}
        value={editedRecommendation}
        onChange={(e) => setEditedRecommendation(e.target.value)}
        className="mt-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
      />

    )}

  </div>

<hr className="my-8" />

  {/* ------------ Human Review -----------------*/}

  <div>

    <h2 className="text-2xl font-bold text-gray-900">
      Human Review
    </h2>

    <p className="mt-2 text-gray-600">
      Review the AI-generated recommendation before finalizing it.
    </p>

    <div className="mt-6 flex flex-wrap gap-4">

      {/* Approve */}

      <button
        onClick={() => setReviewStatus("approved")}
        className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
      >
        Approve
      </button>

      {/* Edit */}

      {!isEditing ? (

        <button
          onClick={() => setIsEditing(true)}
          className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-white hover:bg-yellow-600"
        >
          Edit
        </button>

      ) : (

        <button
          onClick={() => {

            setReport((prev) => {

              if (!prev) return prev;

              return {
                ...prev,

                recommendedNextAction: {

                  ...prev.recommendedNextAction,

                  summary: editedRecommendation,

                },

              };

            });

            setIsEditing(false);

          }}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Save
        </button>

      )}

      {/* Reject */}

      <button
        onClick={() => setReviewStatus("rejected")}
        className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
      >
        Reject
      </button>

    </div>

    {reviewStatus === "approved" && (

      <div className="mt-6 rounded-lg bg-green-100 p-4 text-green-700">

        Report Approved

      </div>

    )}

    {reviewStatus === "rejected" && (

      <div className="mt-6 rounded-lg bg-red-100 p-4 text-red-700">

        Report Rejected.

        Please review the conversation or regenerate the analysis.

      </div>

    )}

  </div>


  </div>
)}


      </div>
    </div>
  );
  
}

export default App;