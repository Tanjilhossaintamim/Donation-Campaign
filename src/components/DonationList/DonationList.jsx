import { useContext, useEffect } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useState } from "react";
import Donation from "./Donation";
import { SearchContext } from "../../Provider/ContextProvider";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // deside what to render
  let content = null;
  if (donations.length > 0) {
    content = donations.filter((don) => {
      if (searchValue) {
        return don.category.toLowerCase().startsWith(searchValue.toLowerCase());
      }
      return true;
    });
    if (content.length > 0) {
      content = content.map((donation) => (
        <Donation key={donation.id} donation={donation} />
      ));
    } else {
      content = <div className="text-2xl text-center">No Data Found !</div>;
    }
  }
  return (
    <section className="py-32">
      <ContentWrapper>
        <div className="grid gap-6 md:ml-10 lg:ml-0 place-content-center md:grid-cols-2  lg:grid-cols-4 ">
          {content}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default DonationList;
