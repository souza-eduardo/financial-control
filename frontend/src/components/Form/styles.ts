import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  background-color: white;
  width: 1040px;
  height: 80px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 20px;
  outline: none;
`;  

export const RadioButton = styled.input`
  margin-right: -35px;
`;

export const SubmitButton = styled.button`
  width: 90px;
  height: 50px;
  font-size: 0.95rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #4EC61F;
  color: white;
  cursor: pointer;
`;