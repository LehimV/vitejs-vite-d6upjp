const API_URL = "https://rickandmortyapi.com/api/character/";
const character = "1,2,3,4,5,60,71,94,109,130,150,180,190,242,471,571";

export async function getAPI() {
  try {
    const response = await fetch(`${API_URL}${character}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}