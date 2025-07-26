import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((r) => {
        const matchTitle = r.title?.toLowerCase().includes(term.toLowerCase());
        const matchIngredients = r.ingredients?.some((i) =>
          i.toLowerCase().includes(term.toLowerCase())
        );
        const matchTime = String(r.cookingTime)?.includes(term);
        return matchTitle || matchIngredients || matchTime;
      }),
    })),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      const term = state.searchTerm.toLowerCase();
      const filtered = updated.filter((r) => {
        return (
          r.title?.toLowerCase().includes(term) ||
          r.ingredients?.some((i) => i.toLowerCase().includes(term)) ||
          String(r.cookingTime).includes(term)
        );
      });
      return { recipes: updated, filteredRecipes: filtered };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      const term = state.searchTerm.toLowerCase();
      const filtered = updated.filter((r) =>
        r.title?.toLowerCase().includes(term)
      );
      return { recipes: updated, filteredRecipes: filtered };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      );
      const term = state.searchTerm.toLowerCase();
      const filtered = updated.filter((r) =>
        r.title?.toLowerCase().includes(term)
      );
      return { recipes: updated, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
