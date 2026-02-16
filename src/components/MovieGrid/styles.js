import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`

export const Card = styled.div`
  cursor: pointer;
  transition: 0.3s;

  img {
    width: 100%;
    border-radius: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.05);
  }
`