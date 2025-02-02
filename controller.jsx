import { useState, useRef, useEffect } from "react"
import axios from 'axios';

function citation() {

// API citation du jour
  const API_citation  = fetch("https://api.adviceslip.com/advice");

  const getUsers = async () => {
    const response = await axios.get(API_citation);
    return response.data;
  };

  const result = API_citation
  .then(res => {
      return res.json()
  })
  .then(res => console.log(res))
}


function blague() {

// API blague du jour
  const API_blague = fetch("https://official-joke-api.appspot.com/random_joke");

  const getUsers = async () => {
    const response = await axios.get(API_blague);
    return response.data;
  };

  const result = API_blague
  .then(res => {
      return res.json()
  })
  .then(res => console.log(res))
}


function moktail() {

// API moktail du jour
  const API_moktail = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");

  const getUsers = async () => {
    const response = await axios.get(API_moktail);
    return response.data;
  };

  const result = API_moktail
  .then(res => {
      return res.json()
  })
  .then(res => console.log(res))
}


function recette() {

  // API recette du jour
  const API_recette= fetch("https://www.themealdb.com/api/json/v1/1/random.php");

  const getUsers = async () => {
    const response = await axios.get(API_recette);
    return response.data;
  };

  const result = API_recette
  .then(res => {
      return res.json()
  })
  .then(res => console.log(res))
}




