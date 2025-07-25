import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <Link to="/add" className="text-blue-600 underline">Add New Recipe</Link>

      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 my-2">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`} className="text-green-600 underline">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
