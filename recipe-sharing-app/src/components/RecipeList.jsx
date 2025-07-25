// RecipeList.jsx
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Search Recipes</h2>

      <SearchBar />

      {filteredRecipes.length > 0 ? (
        <div className="space-y-4 mt-6">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-700">{recipe.description}</p>
              {recipe.ingredients && (
                <p className="text-sm text-gray-500 mt-2">
                  Ingredients: {recipe.ingredients.join(', ')}
                </p>
              )}
              {recipe.cookingTime && (
                <p className="text-sm text-gray-500">
                  Cooking Time: {recipe.cookingTime} minutes
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">No matching recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
