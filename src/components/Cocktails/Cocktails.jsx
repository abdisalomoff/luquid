"use client";
import useFetch from "@/hooks/useFetch";
import "./Cocktails.css"
import Link from "next/link";

const Cocktails = () => {
  const { drinks } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
  );
  console.log(drinks);

  return (
    <div className="container">
      <h2>Cocktails menu</h2>
      {drinks && drinks.length > 0 ? (
        <ul>
          {drinks.map((cocktail) => (
            <li key={cocktail.idDrink}>
               <Link href={`/cocktail/${cocktail.idDrink}`}>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width={250} />
                  <p className="text">{cocktail.strDrink}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cocktails found</p>
      )}
    </div>
  );
};

export default Cocktails;
