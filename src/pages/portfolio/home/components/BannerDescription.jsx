
// eslint-disable-next-line react/prop-types
function BannerDescription({  heading, description }) {
  return (
    <section>
        <div
          className="flex flex-col items-center justify-center border-0 rounded-0 bg-themelightgreen pt-7 pb-14  mb-7"
        >
          <h1 className="text-themeDarkGreen mt-5 text-4xl font-bold">{heading}</h1>
          <p className="text-themeDarkGreen mt-3 text-lg text-center">{description}</p>
        </div>
    </section>
  );
}

export default BannerDescription;
