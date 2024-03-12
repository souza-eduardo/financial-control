import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1120px;
  gap: 20px;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: -20px;
    gap: 15px;
  }
`;