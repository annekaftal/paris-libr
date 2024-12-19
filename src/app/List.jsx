"use client";

export default function List({ bookshops }) {
  console.log(bookshops);
  return <p>{bookshops[0].fields.nom_structure}</p>;
}
