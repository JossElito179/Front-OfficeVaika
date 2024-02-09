import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TypeVoiture';
import PrimaryButton from '../buttons/PrimaryButton';
// team member images
import ImageCar3 from '../../assets/images/car3.jpg';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
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
`;

function TeamSection() {
  return (
    <TeamSectionStyles id="annonces">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Annonces
            </ParagraphText>

            <SectionTitle className="team__title">
              A vous de choisir

            </SectionTitle>

            <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="hero__cta"
            >
              Voir
            </PrimaryButton>
          </div>

          <div className="team__members">
            <TeamMemberItem
              img={ImageCar3}
              name="Voiture 1"
              title="Nom"
            />
            <TeamMemberItem
              img={ImageCar3}
              name="Voiture 2"
              title="Nom"
            />
            <TeamMemberItem
              img={ImageCar3}
              name="Voiture 1"
              title="Nom"
            />
          </div>

        </div>

      </div>
    </TeamSectionStyles>

  );
}

export default TeamSection;
