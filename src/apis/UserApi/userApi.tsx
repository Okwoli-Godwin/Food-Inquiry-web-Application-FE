import axios from "axios";

const url = "http://localhost:2001/api/user";

export const createUser = async (user: any) => {
  return await axios.post(`${url}/createuser`, user).then((res) => res.data);
};
export const userLogin = async (user: any) => {
  return await axios.post(`${url}/userlogin`, user).then((res) => res.data);
};
