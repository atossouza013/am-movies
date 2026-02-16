import styled from "styled-components";

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     box-shadow: 4px 2px 28px 10px rgba(0,0,0,0.6); 

 
     img{
          border-radius:30px;
          width: 200px;
          height: 100%;
          transition: all 0.3s ease;

          &:hover{
           transform: scale(1.05) rotate(0deg) translate(0px, -5px) skewX(0deg);
           box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
           opacity: 1;
          filter: brightness(1);
           background-color: #f51212;
          color: #ffffff;
     }
     }

     h3{
          color: #fff;
          margin-top: 15px;
     }

     @media (max-width: 630px){
          img{
               width: 150px;
          }

          h3{
               font-size: 12px;
          }
      }
   
`

export const CloseMenu = styled.img`
     
`