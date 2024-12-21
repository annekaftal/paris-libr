"use client";
import Map from "../../components/Map";
import List from "./List";
import Filter from "./Filter";
import { useState } from "react";

export default function BookshopSearch({ parisBookshops }) {
  const [district, setDistrict] = useState(null);
  console.log(district);
  const handleChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
  };
  return (
    <>
      <div className="flex justify-between items-end mr-1">
        <h1 className="font-extrabold text-9xl">ParisLibr.</h1>
        <Filter handleChange={handleChange} />
      </div>
      <Map
        parisBookshops={parisBookshops}
        district={district}
        setDistrict={setDistrict}
      />
      <List parisBookshops={parisBookshops} district={district} />
    </>
  );
}
