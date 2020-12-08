import React from "react";
import Party from "../../components/Party";
import Placeholder from "../../components/Placeholder";
import "./Home.scss";

const Home = () => {
  const nowDate = Date.now();
  const partyDate = new Date(2020, 11, 10, 15, 30);
  const queryString = window.location.search;
  const isPartyTime = queryString === "?party" || nowDate >= partyDate;

  return (
    <div className="Home">{isPartyTime ? <Party /> : <Placeholder />}</div>
  );
};

export default Home;
