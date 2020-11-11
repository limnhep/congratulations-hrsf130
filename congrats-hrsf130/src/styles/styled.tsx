import styled from 'styled-components';

export const Header = styled.div`
  font-weight: 700;
  font-size: 115px;
  z-index: 1000;
  top: 0.001px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 650px;
  background-color: white;
  position: sticky;
  background-image: linear-gradient(to right,#232526, #61dafb, #232526);
`;

export const Title = styled.div`
  grid-column-start: 2;
  text-align: center;
  color: white;
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;
  align-self: center;
  grid-column-start: 2;
  border-radius: 50%;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-template-columns: 20% 60% 20%;
  height: 1000px;

`;

export const Body = styled.div`
  grid-column-start: 2;
  text-align: center;
`;

export const DisplayName = styled.div`
  height: 75px;
  user-select: none;
  grid-column-start: 2;
  align-items: center;
  font-weight: 500;
  text-align: center;
  font-size: 50px;
  justify-content: center;
`;

