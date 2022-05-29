export default function OutputResult({
  value = "",
  className,
  minWidth = "40",
  maxWidth = "100",
  minHeight = "3",
  maxHeight = "50",
  title = "الشعر",
}) {
  return (
    <div className="flex relative items-start mt-5 gap-3">
      <textarea
        style={{ direction: "rtl" }}
        className={`${className} text-gray-600 text-xl resize-none bg-[#FBFAF8] text-right rounded-md p-3`}
        cols={Math.min(
          Math.max(...value.split("\n").map((s) => s.length), minWidth),
          maxWidth
        )}
        rows={Math.min(
          Math.max(value.split("\n").length, minHeight),
          maxHeight
        )}
        disabled
        value={value}
      ></textarea>
      <h3 className="absolute text-2xl -right-28 pt-2 text-[#A58453]">
        {title}
      </h3>
    </div>
  );
}
