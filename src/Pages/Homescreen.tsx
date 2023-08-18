import Hero from "./Hero";
import Menus from "./Menus";
import Adventure from "./Adventure";
import Gallerydisplay from "./Gallerydisplay";
import React from "react";
import { Data } from "../apis/Allinterface";

const Homescreen = () => {
  const [data, setdata] = React.useState<Data[]>([]);

  return (
    <div>
      <Hero setsearchdata={setdata} />
      <Menus searchdata={data} setsearchdata={setdata} />
      <br />
      <br />
      <br />
      <Adventure />
      <br />
      <br />
      <br />
      <Gallerydisplay />
    </div>
  );
};

export default Homescreen;
