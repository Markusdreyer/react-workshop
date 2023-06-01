import React, { useState } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import {Typography } from '@mui/material';
import MagicButton from './Components/MagicButton';
import Background from './Components/Background';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Recipe from './Components/Recipe';
import { RecipeData } from './Components/Query'

function App() {
  const [ingredients, setIngredients] = useState([] as string[])
  const [recipe, setRecipe] = useState({} as RecipeData)
  const [loading, setLoading] = useState(false)

  return (
    <Typography component="div">
      <Background/>
      <Layout
        loading={loading} 
        Header={
          <Header 
            name={"Codepub"} 
            fontSize={"28px"} 
            color={"#232323"}
          />
        } 
        SearchBox={
          <SearchBox
            setIngredients={setIngredients} 
            chipColor={{
              text: '#232323',
              background: '#94b0d1',
              border: '#232323'
            }} 
            searchColor={{
              text: '#232323',
              background: '#f3f3f3',
              border: '#232323'
            }}
          />
        }
        Button={
          <MagicButton 
            ingredients={ingredients}
            setRecipe={setRecipe}
            setLoading={setLoading}
            buttonColor={{
              text: '#232323',
              background: '#f0b67f',
              border: '#232323'
            }} 
            borderSize={'1px'}
          />
        }
        Recipe={
          <Recipe 
            description={recipe.description} 
            ingredients={recipe.ingredients}
            steps={recipe.steps} 
            title={recipe.title}
          />
        }
      />
    </Typography>
  );
}

export default App;
