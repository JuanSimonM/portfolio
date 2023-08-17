import React from "react";
import Cards from "../components/Cards/Cards";
import { getPersonajes } from "../API";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const getDetails = async (id) => {
    try {
      const url = "https://rickandmortyapi.com/api/character/" + id;
      const response = await axios.get(url);
      setSelectedCharacter(response.data);
      setIsModalOpen(true);
      console.log("aca", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  console.log("Respuesta navbar", personajes);
  return (
    <div className="organismCardsContainer">
      {personajes.map((personaje) => (
        <div key={personaje.id} onClick={() => getDetails(personaje.id)}>
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
