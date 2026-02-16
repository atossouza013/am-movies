import styled from "styled-components";

export const MainButton = styled.button`
     
     border: ${props => props.theme ==='primary'? 'solid #FF005B 3px' : 'solid white 3px'};
     background: ${props => props.theme ==='primary'? '#FF005B' : 'transparent'};
     color: #fff;
     border-radius: 30px;
     padding: 10px 20px;
     cursor: pointer;
     font-size: 20px;
     font-weight: 500;
     transition: all 0.3s ease;

     &:hover{
     transform: scale(1.05) rotate(0deg) translate(0px, -5px) skewX(0deg);
     box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
     opacity: 1;
     filter: brightness(1);
     background-color: #FF005B;
     color: #ffffff;
     }

      @media (max-width: 630px){
          font-size: 28px;
          padding: 8px 20px;
          border: solid 1px;
     }

`