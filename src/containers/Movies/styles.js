import styled from "styled-components"


export const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;

  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
    background: url(${({ $backdrop }) => $backdrop});
    background-size: cover;
    background-position: center;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 30%,
      rgba(0, 0, 0, 0.5) 60%,
      transparent
    );
  }

  .hero-content {
    position: relative;
    max-width: 600px;
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    gap: 15px;
  }



  section {
    padding: 40px 5%;
  }

  @media (max-width: 1024px) {
  .hero {
    padding: 0 40px;
  }

  .hero-content {
    max-width: 500px;
  }

  h1 {
    font-size: 38px;
  }

  p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 80vh;
    padding: 120px 20px 60px;
    align-items: flex-end;
  }

  .hero::before {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 20%,
      rgba(0, 0, 0, 0.6) 60%,
      transparent
    );
  }

  .hero-content {
    max-width: 100%;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .buttons {
    flex-wrap: wrap;
    gap: 10px;
  }

  section {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 100px 15px 50px;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  .buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
`