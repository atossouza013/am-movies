
import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ info, title, onClick }) {
  return (
    <Container >
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
        scrollbar={false}
      >
          {info && info.map((item, index)=>(
           <SwiperSlide key={index}>
            <Card item ={item} onClick={()=>onClick?.(item)}/>
           </SwiperSlide>    
               
          ))}
        
      </Swiper>
    </Container>
  );
}

export default Slider;
