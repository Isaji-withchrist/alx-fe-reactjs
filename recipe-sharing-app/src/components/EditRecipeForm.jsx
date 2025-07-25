// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id.toString() === id)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients.join(', ') || '');
  const [instructions, setInstructions] = useState(recipe?.instructions || '');

  const handleSubmit = (event) => {
    e.preventDefault();
    updateRecipe({
      id: recipe.id,
      title,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      instructions,
    });
    navigate(`/recipes/${recipe.id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        className="border p-2 w-full"
      />
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        className="border p-2 w-full"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
        className="border p-2 w-full"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default EditRecipeForm;
