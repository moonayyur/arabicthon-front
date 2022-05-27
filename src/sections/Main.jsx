export function Main() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="hidden lg:block absolute -bottom-[400px] -right-[500px]">
        <img src="./background.png" alt="" className="relative scale-125" />
      </div>
      <div className="relative z-20">
        <div className="flex z-10 h-screen items-center justify-center overflow-hidden">
          <div className="hidden lg:block">
            <img
              src="./book.png"
              alt=""
              className="max-w-[100em] max-mr-[50em] mt-52"
            />
          </div>
          {/* text */}
          <div className="text-right mr-52 mb-32">
            <div className="text-3xl mb-10 text-[#A58453]">الشاعر الآلي</div>
            <div className="">
              الشاعر الآلي موقع الكتروني لتأليف و تحليل القصائد آليا باستعمال
              الذكاء الاصطناعي بناء على مختلف خصائصه
            </div>
            <a href="/create-analyse">
              <button className="btn rounded-md mt-16 py-3 px-6 text-white text-lg bg-[#A58453]">
                تجريب
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
