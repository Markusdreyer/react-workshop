export interface RecipeData{
  description: string
  ingredients: string[]
  steps: string[]
  title: string
}

export const getRecipe = async (
  ingredients: string[], 
  setRecipe: React.Dispatch<React.SetStateAction<RecipeData>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>) => 
  {
  try {
    setLoading(true);
    const requestBody = JSON.stringify({ingredients: ingredients});
    await fetch("http://localhost:8000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  })
    .then((response) => response.json())
    .then((data) => setRecipe(data))
  }
  catch(error){
    console.log(error)
  }
  finally{
    setLoading(false);
  }
}