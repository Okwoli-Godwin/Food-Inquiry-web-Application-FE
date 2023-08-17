import axios from "axios";

const url = "https://food-inquiry.onrender.com/api/user";

export const createUser = async (user: any) => {
  return await axios.post(`${url}/createuser`, user).then((res) => res.data);
};
export const userLogin = async (user: any) => {
  return await axios.post(`${url}/userlogin`, user).then((res) => res.data);
};
export const DeactivateUser = async (id: string) => {
  return await axios.delete(`${url}/deleteuser/${id}`).then((res) => res.data);
};

export const viewAllUser = async () => {
  return await axios
    .get(`${url}/viewallregisteredusers`)
    .then((res) => res.data?.data);
};
