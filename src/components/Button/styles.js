import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px;
  border: 1px solid #cdcdcd;
  background-color: transparent;
  border-radius: 100%;
  color: #352761;

  font-size: 1rem;
  font-weight: 700;
  width: 65px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px black;
  height: 65px;
  margin: 12px;
  text-align: center;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
