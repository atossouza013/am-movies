import styled from "styled-components";


export const Background = styled.div`
      height: 100vh;
      width: 100vw;
      z-index: 2000;
      background-color: rgba(0, 0, 0, 0.71);   
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99; 

`

export const Container = styled.div`
      background: #000;
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
      max-width: 1000px;
      overflow-y: hidden;
      position: relative;
      z-index:99 ;
      
      iframe{
          border: none;
          overflow-x: hidden;
          width: 100%;
          height: 500px;
      }

      img{
            margin: 10px ;
            position: absolute;
            top: 0px;
            right: 0px;
            cursor: pointer;
      }

      @media(max-width: 630px ){
            iframe{
                  height:200px;
            }
      }

`