import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
    const { id } = useParams(); // Get the recipe ID from the URL
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const foundRecipe = recipesData.find(r => r.id === parseInt(id));
      setRecipe(foundRecipe);
    }, [id]);
  
    if (!recipe) {
      return <p className="text-center mt-10 text-lg">Loading recipe...</p>;
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold my-4">{recipe.title}</h1>
          <p className="text-gray-700">{recipe.summary}</p>
  
          {recipe.ingredients && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
          )}
  
          {recipe.instructions && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default RecipeDetail;
  