import axios from "axios";

const url = "http://localhost:2001/api/recipes";

export const createRecipes = async (recipes: any) => {
  return await axios
    .post(`${url}/createrecipe`, recipes)
    .then((res) => res.data);
};
