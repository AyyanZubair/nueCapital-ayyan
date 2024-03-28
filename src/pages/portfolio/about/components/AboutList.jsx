function AboutList() {
  return (
    <section className="xl:max-w-7xl lg:max-w-[62rem] md:max-w-[47rem] sm:max-w-[38rem] max-w-[32rem] mx-auto pl-4">
          <h3 className="text-themeDarkGreen mt-5 text-4xl font-bold mb-3">What is NUE!</h3>
          <div className="max-w-9xl mx-auto" >
            <ul className="list-disc px-3 lg:px-0" >
              <li className="text-themeDarkGreen text-base  leading-8">
                Many people are overly reliant on stock market for their
                investment opportunities.
              </li>
              <li className="text-themeDarkGreen text-base  leading-8 lg:w-[70%] w-full">
                Realizing the importance of diversification outside of public
                equities, combined with the rise of a new investment vehicle as
                crowdfunding, individual investors could have a better access to
                real estate, one of the largest asset class in the world.
              </li>
              <li className="text-themeDarkGreen text-base  leading-8 mt-1 lg:w-[70%] w-full">
                NUE is a crowd-investing platform that aims to generate suitable
                returns for investors through investing in small to medium real
                estate opportunities utilizing sukuk structures.
              </li>
            </ul>
          </div>
    </section>
  );
}

export default AboutList;
