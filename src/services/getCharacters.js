export const getCharacters = async () => {
	const url = "https://rickandmortyapi.com/api/character";
	try {
	  const characterPromises = [];
	  
	  // Hacemos tres solicitudes para obtener 50 personajes
	  for (let i = 1; i <= 4; i++) {
		characterPromises.push(fetch(`${url}?page=${i}`).then(response => response.json()));
	  }
  
	  // Esperamos que todas las promesas se resuelvan
	  const responses = await Promise.all(characterPromises);
  
	  // Extraemos los resultados de cada página
	  const allCharacters = responses.flatMap(response => response.results);
  
	  return allCharacters; // Devolvemos los primeros 50 personajes
	} catch (error) {
	  console.error("Error al obtener los personajes:", error);
	  return [];
	}
  };
  