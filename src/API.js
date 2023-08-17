import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getPersonajes = async () => {
  const url = "/character";
  const response = await instance.get(url);
  console.log(response.data.results);
  return response.data.results;
};
