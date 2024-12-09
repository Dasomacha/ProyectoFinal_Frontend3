import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; // Importamos useParams para acceder al parámetro de la URL
import DetailCard from '../components/DetailCard'; // Importamos el componente DetailCard
import { getCharacters } from '../services/getCharacters'; // Importamos el servicio para obtener los personajes

const CharacterInfo = () => {
  const { id } = useParams(); // Obtenemos el id del Pokémon desde la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacters();
      const selectedCharacter = data.find((char) => char.id === parseInt(id)); // Encontramos el Pokémon por id
      setCharacter(selectedCharacter);
    };

    fetchCharacter();
  }, [id]); // Actualiza cuando cambia el id

  return (
    <div className="character-info-container">
      {character ? (
        <>
          <h1>Pokémon Detalle</h1>
          <DetailCard card={character} /> {/* Renderizamos el DetailCard solo para el Pokémon seleccionado */}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CharacterInfo;
