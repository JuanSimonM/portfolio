import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import { getPersonajes, getDetails } from "../API";
import CardDetailModal from "../atoms/CardDetailModal/CardDetailModal";

function OrganismInicio() {
  const [personajes, setPersonajes] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchPersonajes() {
      const personajesData = await getPersonajes();
      setPersonajes(personajesData);
    }

    fetchPersonajes();
  }, []);

  const openModal = async (id) => {
    const characterDetails = await getDetails(id);
    setSelectedCharacter(characterDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  };

  return (
    <div className="organismCardsContainer">
      {personajes.map((personaje) => (
        <div key={personaje.id} onClick={() => openModal(personaje.id)}>
          <Cards title={personaje.name} image={personaje.image} />
        </div>
      ))}
      <CardDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        characterDetails={selectedCharacter}
      />
    </div>
  );
}

export default OrganismInicio;