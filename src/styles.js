import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #352761;

  width: min-content;
  border-radius: 3rem;
  padding: 1rem 1.5rem;
  box-shadow: 5px 5px 20px 10px black;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
`;
