import { cn } from "@/utils";

export const NotebookBinderHoles = () => {
  return (
    <div
      className={cn(
        "min-w-[5vw]",
        "fixed top-0 left-[30vw]",
        "hidden print:hidden",
        "max-h-screen min-h-screen",
        "items-center justify-center",
        "resurgam:grid grid-rows-[1fr_40px_80px_4fr_80px_40px_1fr]"
      )}
    >
      <br />
      <div>
        <div className="w-6 h-6 rounded-full border-white border-dotted border-2 mb-10" />
        <div className="w-6 h-10 rounded-full border-white border-dotted border-2" />
      </div>
      <br />
      <div className="w-6 h-6 rounded-full border-white border-dotted border-2" />
      <br />
      <div>
        <div className="w-6 h-10 rounded-full border-white border-dotted border-2 mb-10" />
        <div className="w-6 h-6 rounded-full border-white border-dotted border-2" />
      </div>
      <br />
    </div>
  );
};
