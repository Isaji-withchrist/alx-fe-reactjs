// src/components/RecipeDetails.jsx
import useRecipeStore from '../components/recipeStore';
import { useParams } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id.toString() === id)
  );

  if (!recipe) {
    return <p className='text-red-500 p-4'>Recipe not found or still loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
