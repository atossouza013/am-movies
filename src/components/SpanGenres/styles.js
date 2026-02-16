import styled from "styled-components";

export const Container = styled.button`
     display: flex;
     gap: 10px;
     margin-top: 30px;
     background-color: black;
     border: none;

     span{
          padding: 10px 10px;
          border: 2px solid #fff;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          background-color: #000;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
     }

     @media(max-width: 630px){
          span{
               font-size: 13px;
               font-weight: 500px;
               
          }
     }

`