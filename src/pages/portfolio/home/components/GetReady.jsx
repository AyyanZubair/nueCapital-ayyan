import Link from "next/link";

function GetReady() {
  return (
    <section className="max-w-7xl bg-themeGreenL1 text-center rounded my-10 mx-auto flex gap-5 justify-center items-center flex-col py-10">
      <h1 className="text-themeDarkGreen text-2xl md:text-5xl font-bold">
        Ready to get started?
      </h1>
      <p className="text-themeDarkGreen  md:text-xl">
        Ready To Invest in Real Estate Properties and Landscapes so contact us
        now
      </p>

      <Link
        className="bg-themeDarkGreen text-white md:text-xl py-2 px-5 rounded font-bold "
        href="/portfolio/contact"
      >
        Contact Us
      </Link>
    </section>
  );
}

export default GetReady;
