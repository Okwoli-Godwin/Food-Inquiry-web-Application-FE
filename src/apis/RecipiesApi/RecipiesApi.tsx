import axios from "axios";

const url = "https://food-inquiry-web-79bv.onrender.com/api/recipes";

export const createRecipes = async (recipes: any) => {
  return await axios
    .post(`${url}/createrecipe`, recipes)
    .then((res) => res.data);
};
