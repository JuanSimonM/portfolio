import React from "react";
import "./CardDetailModal.css";

function Modal({ isOpen, onClose, characterDetails }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <h2>{characterDetails.name}</h2>
        </div>
        <div>
          <img src={characterDetails.image} alt={characterDetails.name} className="cardDetailImage"/>
        </div>
        <div>
          <p>
            Lugar de origen: {characterDetails.origin.name}
          </p>
          <p>Ubicación actual: {characterDetails.location.name}</p>
          <p>Especie: {characterDetails.species}</p>
        </div>
        <button onClick={onClose}>Cerrar modal</button>
      </div>
    </div>
  );
}

export default Modal;
