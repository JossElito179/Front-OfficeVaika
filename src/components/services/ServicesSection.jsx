import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Nos Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Service 1"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula justo."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Service 2"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula justo."
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Service 3"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula justo."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
