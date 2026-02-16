import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  h2 {
    color: #ff005b;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  align-items: center;

  @media(max-width: 630px){
     grid-template-columns: repeat(2, 1fr);
     margin: 0px 20px;;
     gap: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  gap: 3px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover{
      transform: scale(1.05) rotate(0deg) translate(0px, -5px) skewX(0deg);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
  opacity: 1;
  filter: brightness(1); 
  }

  p {
    color: #ff005b;
    font-weight: 500;
    width: 200px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
  }

   @media(max-width: 630px){
     margin: 10px 10px;
     img{
          width: 150px;
     }

     p{
          font-size: 10px;
     }
  }
`;
