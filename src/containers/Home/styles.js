import styled from 'styled-components'


export const Background = styled.div`
     background-image: url(${ props => props.$img});
     height: 100vh;
     background-position: center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;

     &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5)
     }


`
export const Container = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     height: 100%;
     max-width: 1500px;

     @media (max-width: 1024px){
          padding: 0 30px;
     }

     @media (max-width: 768px){
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 100px 20px 60px;
          gap: 30px;
     }
`
export const Info = styled.div`
     z-index: 2;
     padding: 20px;
     width: 50%;

     h1{
          font-size: 40px;
          font-weight: 700;
          color: white;
     }
     
     p{
          font-size: 20px;
          font-weight: 500;
          color: white;
          margin-top: 30px;
          margin-bottom: 20px;
     }

     @media (max-width: 1024px){
          width: 60%;
     }

     @media (max-width: 768px){
          width: 100%;
          max-width: 500px;

          h1{
               font-size: 28px;
               margin: 0;
          }

          p{
               font-size: 16px;
               margin-top: 15px;
          }
     }
`

export const Poster = styled.div`
     z-index: 3; 

     img{
        width: 250px;
        border-radius: 30px; 

        @media (max-width: 1024px){
          width: 220px;
        }

        @media (max-width: 768px){
          width: 180px;
        }
     }
`
export const ContainerButtons = styled.div`
     display: flex;
     gap: 20px;
     margin-top: 20px;

     @media (max-width: 768px){
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 25px;
     }
`
export const SectionSlider = styled.section`
     padding: 40px 5%;    

     @media (max-width: 768px){
          padding: 30px 20px;
     }
`

