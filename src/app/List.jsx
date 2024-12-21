"use client";

export default function List({ parisBookshops, district, setDistrict }) {
  return (
    <>
      <div className="flex flex-col gap-10">
        {parisBookshops
          .filter((bookshop) =>
            district !== null
              ? bookshop.fields.code_postal == `750${district}`
              : true
          )
          .map((bookshop, index) => (
            <div key={index}>
              <h4>{bookshop.fields.nom_structure}</h4>
              <p>{bookshop.fields.adresse}</p>
              <p>{bookshop.fields.code_postal}</p>
              <p>{bookshop.fields.ville}</p>
            </div>
          ))}
      </div>
    </>
  );
}
