import React from 'react'

const RecipeList = ({recipes}) => {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col gap-6 w-full">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipe.uri}
          className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col justify-between w-full"
        >
          <h3 className="text-xl font-bold mb-2">{recipe.recipe.label}</h3>
          <img
            className="w-full h-48 object-cover mb-4"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />
          <h4 className="text-gray-700 mb-4">
            {recipe.recipe.calories.toFixed(3)} kcal
          </h4>
          <ul className="mb-4">
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                {ingredient.text}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              Tarifi Görüntüle
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RecipeList

