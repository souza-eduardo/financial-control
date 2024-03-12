import styled from "styled-components";

export const Header = styled.header`
  background-color: #473BF0;
  text-align: center;
  height: 140px;
  box-shadow: 0px 3px 5px #00000050;

  @media screen and (max-width: 768px) {
    height: 110px;
  }
`;

export const Title = styled.h1`
  font-size:2.3rem;
  padding-top: 30px;  
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;