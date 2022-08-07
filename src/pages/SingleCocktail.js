import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDrinks = async (id) => {
    const response = await fetch(url + id);
    const data = await response.json();

    const newCocktail = {
      id: data.drinks[0].idDrink,
      name: data.drinks[0].strDrink,
      image: data.drinks[0].strDrinkThumb,
      glass: data.drinks[0].strGlass,
      info: data.drinks[0].strAlcoholic,
      category: data.drinks[0].strCategory,
      instructions: data.drinks[0].strInstructions,
      ingredients: [
        data.drinks[0].strIngredient1,
        data.drinks[0].strIngredient2,
        data.drinks[0].strIngredient3,
        data.drinks[0].strIngredient4,
        data.drinks[0].strIngredient5,
      ],
    };

    setCocktail(newCocktail);
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinks(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const { name, image, glass, info, ingredients, instructions, category } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>

      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
