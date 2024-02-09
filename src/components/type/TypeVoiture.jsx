import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const TypeVoitureStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      border-radius: 18px;
    }
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  .teamMember__etat {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  .teamMember__subtitle {
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  .teamMember__button {
    // Styles pour le bouton
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        max-width: 250px;
      }
    }
  }
`;

function TypeVoiture({ img, name, title, favoris, onButtonClick }) {
  return (
    <TypeVoitureStyles>
      <div className="teamMember__img">
        <img src={img} alt="hello" />
      </div>
      <p className="teamMember__subtitle">{title}</p>
      <p className="teamMember__name">{name}</p>
      <button className="teamMember__button" onClick={onButtonClick}>{favoris}</button>
    
    </TypeVoitureStyles>
  );
}

export default TypeVoiture;
