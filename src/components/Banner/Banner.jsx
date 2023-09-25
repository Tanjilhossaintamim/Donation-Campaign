import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Banner = () => {
  return (
    <section className="banner w-full h-[600px] flex justify-center items-center">
      <ContentWrapper>
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-center text-5xl font-bold not-italic text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <form className="w-[582px] mt-10">
            <input
              type="text"
              placeholder="Search here..."
              className="w-[470px] h-12 border border-[#DEDEDE] outline-none rounded-l-lg px-7"
            />
            <input
              type="submit"
              value="Search"
              className="w-28 h-12 bg-color-rose text-white rounded-r-lg"
            />
          </form>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Banner;
