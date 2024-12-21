"use client";
import Map from "../../components/Map";
import List from "./List";
import { useState } from "react";

export default function BookshopSearch({ parisBookshops }) {
  const [district, setDistrict] = useState(null);
  console.log(district);
  return (
    <>
      <Map
        parisBookshops={parisBookshops}
        district={district}
        setDistrict={setDistrict}
      />
      <List
        parisBookshops={parisBookshops}
        district={district}
        setDistrict={setDistrict}
      />
    </>
  );
}
