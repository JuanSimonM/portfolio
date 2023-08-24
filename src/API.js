import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getPersonajes = async () => {
  const url = "/character";
  const response = await instance.get(url);
  return response.data.results;
};

export const getLocations = async () => {
  const url = "/location";
  const response = await instance.get(url);
  return response.data.results;
};

export const getDetails = async (id) => {
  console.log("asdasdasdasdasdasdas", id);
  const url = "/character/" + id;
  const response = await instance.get(url);
  return response.data;
};
