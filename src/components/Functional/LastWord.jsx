import OutputResult from "./OutputResult";
import InputResult from "./InputResult";
import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

export default function LastWord() {
  const [show, setShow] = useState("false");

  return (
    <div className="h-screen flex flex-col justify-center pb-16">
      <div className="text-right mb-14 mr-64 text-3xl text-[#A58453]">
        إكمال آخر كلمة بيت بناء على وزن و حرف الروي
      </div>
      <div className="mx-96 grid grid-cols-4 grid-rows-4 gap-y-3">
        <div className="col-span-4">
          <InputResult minWidth={200} maxHeight={1} title="البيت" />
        </div>
        <div className="justify-self-start">
          <InputResult
            minWidth={20}
            maxHeight={1}
            title="حرف الروي"
            className="overflow-hidden"
          />
        </div>
        <div className="col-span-2 col-start-3">
          <InputResult
            minWidth={50}
            maxHeight={1}
            title="الوزن"
            className="overflow-hidden"
          />
        </div>
        <button
          onClick={() => {
            setShow("true");
          }}
          className="btn flex rounded-md items-center justify-center w-12 h-6 text-white text-lg bg-[#A58453] -mb-3 -mr-9"
        >
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </button>
        {show === "true" ? (
          <div className="col-span-4 row-start-4">
            <OutputResult minWidth={200} maxHeight={1} title="البيت" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
