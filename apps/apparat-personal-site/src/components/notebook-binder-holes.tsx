import { cn } from "@/utils";

export const NotebookBinderHoles = () => {
  return (
    <div
      className={cn(
        "hidden print:hidden",
        "max-h-screen min-h-screen",
        "sticky top-0",
        "items-center justify-center",
        "md:grid grid-rows-[1fr_40px_80px_4fr_80px_40px_1fr]"
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
