import BookshopSearch from "./BookshopSearch";

export default async function Home() {
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.data.gouv.fr/fr/datasets/r/a013e874-299b-4595-acfc-597ab539f09d`,
        {
          method: "GET",
          headers: {
            "X-API-KEY":
              "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiNjY5OGIyZmZhNGNmZDM3YTk5MDliOGE4IiwidGltZSI6MTcyMTI5MjI1MC4zNjI5MzQ0fQ.r_ZlBpSfgxxG5bSuNRxmOyjTCAoWKkJ4Ir7q6fIZpcWKedEKcIVEcJAoUXOrICOpDotVCi-hgsw6ygaI6u7XqA",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error while fetching");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const bookshops = await getData();
  const parisBookshops = bookshops.filter(
    (bookshop) =>
      bookshop.fields.ville === "PARIS" &&
      bookshop.fields.label_01 === "Label LiR"
  );

  return (
    <>
      <div className="h-96 m-10">
        <BookshopSearch parisBookshops={parisBookshops} />
      </div>
    </>
  );
}
