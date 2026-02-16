import styled from "styled-components";

export const Container = styled.div`
     display: flex;
     margin-top: 30px;
     gap: 10px;

     div{ 
          display: flex;
          flex-direction: column;

     }

     p{
          color: #fff;
     }

     img{
         height: 200px; 
     }

     @media (max-width: 630px){
          margin: 10px 0;
          align-items: center;
          
          img{
               height: 90px
          }
     }
`

export const Title = styled.h3`
    color: #fff;
    font-size: 28px;
    font-weight: 700;

     @media (max-width: 630px){
          font-size: 15px;
     }
`