import styled, { keyframes } from "styled-components";

const scale = keyframes`
     from{
          transform: scale(0)
     }to{
          transform: scale(1)
     }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 50vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.63);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }

  @media (max-width: 1024px) {
  height: 40vh;
}

@media (max-width: 768px) {
  height: 35vh;
}
`;

export const Container = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;

   opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  transform: ${({ $loading }) =>
    $loading ? "translateY(20px)" : "translateY(0)"};

  transition: all 0.6s ease;

  @media (max-width: 1024px) {
  margin-top: -60px;
  padding: 0 30px;
}

@media (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: -40px;
  padding: 0 20px;
  gap: 20px;
}
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 3;

  img {
    width: 500px;
    border-radius: 30px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.58);
    animation: ${scale} 0.2s linear;
  }

  @media (max-width: 1024px) {
  img {
    width: 350px;
  }
}

@media (max-width: 768px) {
  img {
    width: 220px;
  }
}
`;

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }
  h1 {
    color: #fff;
    font-size: 15px;
    margin-top: 10px;
  }

  p {
    font-weight: 700;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
  width: 60%;
}

@media (max-width: 768px) {
  width: 100%;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 15px;
  }
}
`;

export const SectionSlider = styled.section`
  padding: 40px 5%;

  @media (max-width: 768px) {
  padding: 30px 20px;
}
`;

export const Wrapper = styled.div`
  animation: ${fadeIn} 0.6s ease forwards;
`;

export const TrailerSection = styled.div`
  padding: 40px 5%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: -200px;
  
  h2 {
    margin-bottom: 20px;
    color: #fff;
    text-align: right;
  }

  iframe {
    width: 50%;
    height: 500px;
    border-radius: 20px;
    border: none;
  }

  @media (max-width: 1024px) {
  iframe {
    width: 70%;
    height: 400px;
  }
}

@media (max-width: 768px) {
  align-items: center;
  margin-top: 40px;

  h2 {
    text-align: center;
  }

  iframe {
    width: 100%;
    height: 220px;
  }
}
`;
