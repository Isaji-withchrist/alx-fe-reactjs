// src/App.jsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  return (
    <BrowserRouter>
    <div className="p-4">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path='/favorites' element={<FavoritesList/>}/>
        <Route path='/recommendations' element={<RecommendationsList/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
