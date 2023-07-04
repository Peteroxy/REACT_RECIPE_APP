import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

function Home() {
  return (
    <div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
