export default function OutputResult({
  value = "",
  className,
  cols = "40",
  rows = "3",
  title = "الشعر",
}) {
  return (
    <div className="flex relative items-start mt-5 gap-3">
      <textarea
        style={{ direction: "rtl" }}
        className={`${className} text-gray-600 overflow-y-scroll resize-none py-3 px-3 bg-[#FBFAF8] text-center rounded-md p-4`}
        cols={Math.min(
          Math.max(...value.split("\n").map((s) => s.length), cols),
          100
        )}
        rows={Math.max(value.split("\n").length, rows)}
        disabled
      >
        {value}
      </textarea>
      <h3 className="absolute text-xl -right-28 pt-2 text-[#A58453]">
        {title}
      </h3>
    </div>
  );
}
