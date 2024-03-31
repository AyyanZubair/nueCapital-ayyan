export default function PriceSection() {
  return (
    <section className="flex sticky top-16 flex-col gap-5 lg:p-8 p-4 rounded-xl border border-gray-300 lg:max-w-md w-full mx-auto h-max">
      <section className="flex flex-col gap-2.5 text-center">
        <span className="text-gray-600 font-medium lg:text-lg">
          Property Price
        </span>
        <div className="flex items-end justify-center gap-2 text-green-500">
          <span className="lg:text-2xl font-medium">SAR</span>
          <span className="lg:text-4xl text-2xl font-medium">2,390,000</span>
        </div>
      </section>
      <div className="flex flex-col gap-2 pt-8 font-medium">
        <div className="h-3 w-full bg-green-500 rounded-full"></div>
        <span className="text-gray-600">100% funded</span>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-between font-medium">
        <span className="flex gap-1 items-center">
          <span className="font-semibold text-green-500 text-lg">604</span>
          <span className="text- text-gray-600">investors</span>
        </span>
        {/* <div className="lg:text-lg text-red-500">Closed on Mar 11,2024</div> */}
      </div>

      <div className="lg:p-4 p-2 rounded-xl bg-gray-200/70 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="lg:text-lg text-sm text-gray-600">
            Annualised return
          </span>
          <span className="lg:text-lg text-sm font-[600] text-gray-800">
            9.9%
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="lg:text-lg text-sm text-gray-600">Funded date</span>
          <span className="lg:text-lg text-sm font-[600] text-gray-800">
            12 Mar,2024
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="lg:text-lg text-sm text-gray-600">
            Current Evaluation
          </span>
          <span className="lg:text-lg text-sm font-[600] text-gray-800">
            SAR 24,000,00
          </span>
        </div>
      </div>
    </section>
  );
}
