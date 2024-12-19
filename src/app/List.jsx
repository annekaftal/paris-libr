"use client";

export default function List({parisBookshops}) {
  console.log(parisBookshops);
  return <>
  <div className="flex flex-col gap-10"> 
  {parisBookshops.map((bookshop) => (
    <div>
    <h4>{bookshop.fields.nom_structure}</h4>
    <p>{bookshop.fields.adresse}</p>
    <p>{bookshop.fields.code_postal}</p>
    <p>{bookshop.fields.ville}</p>
    </div>

  ))}
  </div>
  </>
}
