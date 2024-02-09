import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-responsive-modal';
import '../../assets/css/additional-styles/custom-animation.css';
import SectionTitle from '../titles/SectionTitle';
import TypeVoiture from './TypeVoiture'; // Importer le composant TypeVoiture
import FilterButton from '../../components/DropdownFilter';
import ImageCar3 from '../../assets/images/car3.jpg';
import AnnonceModal from '../../components/modal/ModalAnnonce';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .span.text-sm.font-medium.ml-2 {
    color: white; 
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
  svg {
    width: 40%;
    height: 40%;
    color: #fff;
  }
  #filter {
    width: 40%;
    height: 40%;
  }
`;

function LesAnnonces() {
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAnnonceClick = (annonce) => {
    setSelectedAnnonce(annonce);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <TeamSectionStyles id="annonces">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <SectionTitle className="team__title">Nos Annonces</SectionTitle>
            <FilterButton />
          </div>

          <div className="team__members">
            <TypeVoiture
              img={ImageCar3}
              title="Ford Mustang"
              name="Prix : 40 000 Ar "
              favoris="Ajouter aux favoris" // Passer l'état comme une prop
              onButtonClick={() => handleAnnonceClick("Ford Mustang")} // Passer la fonction de gestion du clic pour le bouton
            />

            <TypeVoiture
              img={ImageCar3}
              title="Toyota Camry"
              name="Prix : 40 000 Ar"
              favoris="Ajouter aux favoris" // Passer l'état comme une prop
              onButtonClick={() => handleAnnonceClick("Toyota Camry")} // Passer la fonction de gestion du clic pour le bouton
            />

            {/* Répéter pour chaque annonce */}
          </div>
        </div>
      </div>

  
    </TeamSectionStyles>
  );
}

export default LesAnnonces;
