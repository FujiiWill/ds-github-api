import axios from "axios";

export function searchUser(user: string) {
  return axios.get(`https://api.github.com/users/${user}`);
}
