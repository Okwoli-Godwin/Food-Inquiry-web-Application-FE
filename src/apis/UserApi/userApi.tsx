import axios from "axios";

const url = "https://food-inquiry-web-79bv.onrender.com/api/admin";

export const createUser = async (user: any) => {
  return await axios.post(`${url}/createadmin`, user).then((res) => res.data);
};
export const userLogin = async (user: any) => {
  return await axios.post(`${url}/adminlogin`, user).then((res) => res.data);
};
