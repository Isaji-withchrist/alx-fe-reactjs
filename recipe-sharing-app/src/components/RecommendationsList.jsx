// RecommendationsList.jsx
import useRecipeStore from './recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendedRecipes = useRecipeStore((state) => state.recommendedRecipes);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
      {recommendedRecipes.length === 0 ? (
        <p className="text-gray-600">No recommendations yet. Add favorites to get started.</p>
      ) : (
        <div className="space-y-4">
          {recommendedRecipes.map((recipe) => (
            <div key={recipe.id} className="border p-4 rounded shadow">
              <Link to={`/recipes/${recipe.id}`}>
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  {recipe.title}
                </h3>
              </Link>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
