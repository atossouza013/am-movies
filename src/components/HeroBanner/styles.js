import styled from "styled-components"

export const Container = styled.div`
  height: 60vh;
  background: url("https://image.tmdb.org/t/p/original/yourImage.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 5%;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #000 40%, transparent);
`

export const Content = styled.div`
  position: relative;
  max-width: 600px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    color: #ccc;
  }

  button {
    background: #ff005c;
    border: none;
    padding: 14px 30px;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #ff005c;
    }
  }
`