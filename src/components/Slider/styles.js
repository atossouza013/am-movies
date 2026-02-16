import styled from "styled-components";

export const Container = styled.div`
     background: #000;
     padding: 0 20px;
     overflow-x: hidden;  

     h2{
          color: #fff;
          font-size: 32px;
          margin: 30px 0 15px 15px;
     }
    .swiper-wrapper{
     display: flex;

    } 

    @media (max-width: 630px){
          

          h2{
               font-size: 20px;
          }

      }

`