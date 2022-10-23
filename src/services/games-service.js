import axios from "axios";

const BASE_URI = "http://localhost:8000/api/games";

export async function getGames() {
  return await axios
    .get(BASE_URI)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}
