import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";

const Details = () => {
  const [dontaions, setDonations] = useState([]);
  const { id } = useParams();
  const selectdDonation = dontaions?.find((donation) => donation.id == id);
  const { picture, title, description, price, text_and_button_bg } =
    selectdDonation || {};
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  const background = {
    background: `url(${picture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section>
      <ContentWrapper>
        <div
          className="w-full h-[700px] relative rounded-lg object-cover"
          style={picture ? background : {}}
        >
          <div className="w-full h-[130px] bg-[#0b0b0b80] absolute bottom-0 rounded-b-lg flex items-center">
            <button
              className="py-4 px-5 text-white font-semibold text-xl ml-10 rounded"
              style={{ background: text_and_button_bg }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
        {/* infodiv */}
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-[#0b0b0b]">{title}</h1>
          <p className="py-8 text-[#0b0b0bb3] text-[16px] font-normal text-justify leading-7">
            {description}
          </p>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Details;
