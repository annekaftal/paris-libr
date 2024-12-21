"use client";

export default function List({ parisBookshops, district, setDistrict }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 p-4">
        {parisBookshops
          .filter((bookshop) =>
            district !== null
              ? bookshop.fields.code_postal == `750${district}`
              : true
          )
          .map((bookshop, index) => (
            <div key={index} className="card">
              <h4 className="font-black text-lg">
                {bookshop.fields.nom_structure}
              </h4>
              <hr></hr>
              <div className="p-1">
                <p>{bookshop.fields.adresse}</p>
                <div className="flex gap-1">
                  <p>{bookshop.fields.code_postal}</p>
                  <p>{bookshop.fields.ville}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
