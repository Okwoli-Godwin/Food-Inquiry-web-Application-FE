import axios from "axios";

const url = "https://food-inquiry.onrender.com/api/recipes";

export const createRecipes = async (recipes: any) => {
  return await axios
    .post(`${url}/createrecipe`, recipes)
    .then((res) => res.data);
};
export const searcheRcipes = async (searchValue: string) => {
  return await axios
    .get(
      `https://food-inquiry.onrender.com/api/recipes/viewAllSearchedRecipes?title=${searchValue}`
    )
    .then((res) => res);
};
