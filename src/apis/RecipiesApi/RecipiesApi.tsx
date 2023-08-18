import axios from "axios";

const url = "https://food-inquiry.onrender.com/api/k";

export const createRecipes = async (recipes: any) => {
  return await axios
    .post(`${url}/createrecipe`, recipes)
    .then((res) => res.data);
};
export const searchRcipes = async (searchValue: string) => {
  return await axios
    .get(
      `https://food-inquiry.onrender.com/api/recipes/viewAllSearchedRecipes?title=${searchValue}`
    )
    .then((res) => res);
};
export const getAllRcipes = async () => {
  return await axios.get(`${url}/viewallrecipes`).then((res) => res);
};
export const viewAParticularRecipe = async (id: any) => {
  return await axios
    .get(`${url}/viewAParticularRecipe/${id}`)
    .then((res) => res);
};
