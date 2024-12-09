import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 
import DetailCard from '../components/DetailCard'; 
import { getCharacters } from '../services/getCharacters';

const CharacterInfo = () => {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacters();
      const selectedCharacter = data.find((char) => char.id === parseInt(id));
      setCharacter(selectedCharacter);
    };

    fetchCharacter();
  }, [id]); 

  return (
    <div className="character-info-container">
      {character ? (
        <>
          <h1>Pokémon Detalle</h1>
          <DetailCard card={character} />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CharacterInfo;
