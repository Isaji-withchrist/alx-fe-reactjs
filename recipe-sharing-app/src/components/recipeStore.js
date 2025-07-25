import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [
    {
        id: 1,
        title:"Sample Recipe",
        description: "Test description",
        ingredients: ['Salt, Water'],
        instruction: "Mix and boil for 5 minutes."
    }
  ],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id)=> set((state)=>({recipes: state.recipes.filter((recipe)=> recipe.id !== id),})),
  updateRecipe: (updateRecipe)=> set((state)=>({recipes: state.recipes.map((recipe)=>recipe.id === updateRecipe.id?
    {...recipe, ...updateRecipe} : recipe),
})),
setRecipe: (recipes)=> set({recipes}),
}));
export default useRecipeStore;