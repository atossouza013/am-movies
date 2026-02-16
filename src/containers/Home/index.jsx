import Button from "../../components/Button";
import Slider from "../../components/Slider";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
  SectionSlider
} from "./styles";
import { useState, useEffect } from "react";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import {
  getPopularMovies,
  getPerson,
  getTopRatedMovies,
  getTopSeries,
} from "../../services/getData";
import PageWrapper from "../../components/PageWrapper"
import RevealOnScroll from "../../components/RevealOnScroll"

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [topPerson, setTopPerson] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getPopularMovies(), getTopRatedMovies(), getTopSeries(), getPerson()])
        .then(([movie, topMovies, topSeries, topPerson]) => {
          setMovie(movie[Math.floor(Math.random() * movie.length)]);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setTopPerson(topPerson);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <PageWrapper>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal setShowModal={setShowModal} id={movie.id} type="movie" />
          )}
            <Container>
              <Info>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <ContainerButtons>
                  <Button
                    theme="primary"
                    onClick={() => navigate(`/detail/movie/${movie.id}`)}
                  >
                    Assista Agora
                  </Button>
                  <Button onClick={() => setShowModal(true)}>
                    Assista o Trailer
                  </Button>
                </ContainerButtons>
              </Info>
              <Poster>
                <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
              </Poster>
            </Container>
        </Background>
      )}
      <RevealOnScroll>
        <SectionSlider>
          {topMovies && (
            <Slider
              info={topMovies}
              title={"Top Filmes"}
              onClick={(movie) => navigate(`/detail/movie/${movie.id}`)}
            />
          )}
          {topSeries && (
            <Slider
              info={topSeries}
              title={"Top Series"}
              onClick={(serie) => navigate(`/detail/tv/${serie.id}`)}
            />
          )}
        
        {topPerson && <Slider info={topPerson} title={"Top Atores e Atrizes"} />}
        </SectionSlider>
      </RevealOnScroll>
    </PageWrapper>
  );
}

export default Home;
