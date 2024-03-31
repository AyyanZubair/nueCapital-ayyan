// eslint-disable-next-line react/prop-types
export default function KYCLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto gap-5 xl:px-0 grid grid-cols-1 lg:grid-cols-2 py-10">
      <section>{children}</section>
      <section className="rounded overflow-hidden xl:h-[95vh] hidden lg:block">
        <img
          src="https://www.hoteliermiddleeast.com/cloud/2022/05/23/Saudi-hospitality-scaled.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </section>
    </div>
  );
}
