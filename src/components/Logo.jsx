import styled from 'styled-components';
import logo from "../assets/images/logo.png";
const LogoStyles = styled.div`
  max-width: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
      <img src={logo} />
    </LogoStyles>
  );
}
