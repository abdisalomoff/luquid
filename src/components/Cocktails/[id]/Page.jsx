"use client";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";

const CocktailsSingle = () => {
  const router = useRouter();
  const { id } = router.query;

  const { drink } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  console.log(drink);

  if (!drink) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{drink.strDrink}</h2>
      <p>{drink.strInstructions}</p>
    </div>
  );
};

export default CocktailsSingle;
