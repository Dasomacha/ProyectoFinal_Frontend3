const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getCharacters = async (limit = 180) => {
	try {
		const response = await fetch(`${baseUrl}?limit=${limit}`);
		const data = await response.json();

		const detailedData = await Promise.all(
			data.results.map(async (character, index) => {
				const characterDetails = await fetch(character.url).then((res) =>
					res.json()
				);
				return {
					id: index,
					name: character.name,
					image: characterDetails.sprites.front_default,
					types: characterDetails.types,
					abilities: characterDetails.abilities,
					stats: characterDetails.stats,
					height: characterDetails.height,
				};
			})
		);

		return detailedData;
	} catch (error) {
		console.error("Error fetching Pokémon data:", error);
		return [];
	}
};
