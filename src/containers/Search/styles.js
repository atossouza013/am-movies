import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 120px 5% 60px;

  h1 {
    font-size: 32px;
    margin-bottom: 40px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 25px;

  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;
export const Card = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 270px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 12px 30px rgba(255, 0, 91, 0.5);
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 630px) {
    img {
      height: 220px;
    }
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    transparent
  );

  h3 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: #ff005b;
    font-weight: 600;
  }
`