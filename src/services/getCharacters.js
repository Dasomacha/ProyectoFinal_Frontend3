export const getCharacters = async () => {
	const url = "https://rickandmortyapi.com/api/character";
  
	try {
	  const response = await fetch(url);
	  const data = await response.json();
  
	  if (data.error) {
		console.error("Error en la API:", data.error);
		return [];
	  }
  
	  return data.results; // Devuelve los resultados (personajes).
	} catch (error) {
	  console.error("Fetch Error:", error);
	  return [];
	}
  };  