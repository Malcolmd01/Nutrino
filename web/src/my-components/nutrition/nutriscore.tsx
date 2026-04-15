
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

const nutriscoreTiers = [
  { grade: "A", color: "#008b4c", label: "Optimal", desc: "Best nutritional quality, high in fiber/protein." },
  { grade: "B", color: "#85bb2f", label: "Good", desc: "Good balance, suitable for regular consumption." },
  { grade: "C", color: "#fecb02", label: "Fair", desc: "Average quality, consume in moderation." },
  { grade: "D", color: "#ee8100", label: "Poor", desc: "Low nutritional quality, high in salt, sugar or fats." },
  { grade: "E", color: "#e63e11", label: "Low", desc: "Lowest quality, should be strictly limited." },
  { grade: "N/A", color: "#9ca3af", label: "N/A", desc: "Not Applicable." },
];

export const NutriscorePopup = ({ currentScore }: { currentScore?: string }) => {
  const activeTier = nutriscoreTiers.find(t => t.grade === currentScore?.toUpperCase());

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mt-3 ml-1 outline-none">
          <Info size={16} />
          <span>Understanding Nutri-Score</span>
        </button>
      </DialogTrigger>

      <DialogContent className=" h-fit ">
        <DialogHeader>
          <DialogTitle className="text-xl">Nutri-Score Summary</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 py-2">
          <div className="bg-gray-50 p-5 rounded-2xl border">
            <p className="text-sm text-gray-600 mb-1">Product Rating</p>
            <div className="flex items-center gap-4">
              <span
                className="text-5xl font-black "
                style={{ color: activeTier?.color || "#9ca3af" }}
              >
                {currentScore?.toUpperCase() || "—"}
              </span>
              <div>
                <p className="text-xl font-bold text-gray-800">
                  {activeTier ? activeTier.label : "Not Scanned"}
                </p>
                <p className="text-sm text-gray-500 italic leading-tight">
                  {activeTier?.desc || "Scan a product to see its rating."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const NutriscoreGuide = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 mb-12 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-3 mx-1">
        <p className="text-lg text-center font-bold text-gray-700 px-1 py-3">Nutri-Score Table</p>
        <div className="grid gap-2">
          {nutriscoreTiers.map((tier) => (
            <div
              key={tier.grade}
              className={`flex items-center gap-3 p-2 rounded-xl transition-all "bg-transparent border border-transparent opacity-60"
            }`}
              style={{ borderColor: "transparent" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg text-white font-black text-lg"
                style={{ backgroundColor: tier.color }}
              >
                {tier.grade}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: tier.color }}>
                  {tier.label}
                </p>
                <p className="text-[13px] text-gray-500 leading-none">
                  {tier.desc} {/* Shortened for list view */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}