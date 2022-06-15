import axios from "axios";
import {env} from '../config'
const loginUrl = `${env.backend}/api/auth/login`;

export const login = async (credentials) => {
  const { data } = await axios.post(loginUrl, credentials);
  return data;
};
