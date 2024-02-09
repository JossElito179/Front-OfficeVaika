import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TypeVoiture';
import PrimaryButton from '../buttons/PrimaryButton';
import { link } from '../../BackConfig';
import axios from 'axios';

// team member images
import Login from '../../Login';

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
  const [allAnnonces, setAllAnnonces] = useState([]);
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const fetchAllAnnonces = async () => {
      try {
        const response = await axios.get(`${link}annonce/findAllAnnonceValide`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllAnnonces(response.data.allAnnonces);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors de la récupération des données.');
        setIsLoading(false);
      }
    };
    fetchAllAnnonces();
  }, []);
  if (sessionStorage.getItem('token') !== null) {
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
            {/* <TeamMemberItem
              img={allAnnonces[0].detailsAnnonce.urls[0]}
              name={allAnnonces[0].marque}
              title={allAnnonces[0].modeles}
            /> */}
            {/* <TeamMemberItem
              img={allAnnonces[1].detailsAnnonce.urls[0]}
              name={allAnnonces[1].marque}
              title={allAnnonces[1].modeles}
            /> */}
            {/* <TeamMemberItem
              img={ImageCar3}
              name="Voiture 1"
              title="Nom"
            /> */}
          </div>

        </div>

      </div>
    </TeamSectionStyles>

  );
  }else{
    return <Login></Login>
  }
}

export default TeamSection;
