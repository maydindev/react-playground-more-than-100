"use client"
import { useState } from "react";
import { fetchRecipes } from "../api/edamam";
import Search from "./Search";
import RecipeList from "./RecipeList";
import '../index.css';


export default function Home() {
  const [recipes,setRecipes] = useState([])

  const handleSearch = async (inputText) => {
    try {
      const data = await fetchRecipes(inputText)
      console.log(data)
      setRecipes(data.hits)
    } catch (error) {
      console.error("Hata oluştu", error)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-orange-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Project 9: Recipe App</h1>
      <Search onSearch={handleSearch}/>
      <RecipeList recipes={recipes}/>
    </div>
  );
}
