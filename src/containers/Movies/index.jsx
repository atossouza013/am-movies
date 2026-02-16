import { useEffect, useState } from "react";
import { Container} from "./styles";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import RevealOnScroll from "../../components/RevealOnScroll"
import PageWrapper from "../../components/PageWrapper"

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/getData";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function Movies() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const [pop, top, up] = await Promise.all([
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
      ]);

      setPopular(pop);
      setTopRated(top);
      setUpcoming(up);

      // escolhe um filme aleatório para banner
      const random = pop[Math.floor(Math.random() * pop.length)];

      setHeroMovie(random);
    }

    loadData();
  }, []);

  if (!heroMovie) return null;

  return (
    <PageWrapper>
      <Container $backdrop={getImages(heroMovie.backdrop_path)}>
        {showModal && (
          <Modal setShowModal={setShowModal} id={heroMovie.id} type="movie" />
        )}
        <div className="hero">
          <div className="hero-content">
            <h1>{heroMovie.title}</h1>
            <p>{heroMovie.overview}</p>
            <div className="buttons">
              <Button
                theme="primary"
                onClick={() => navigate(`/detail/movie/${heroMovie.id}`)}
              >
                Assista Agora
              </Button>
              <Button onClick={() => setShowModal(true)}>
                Assista o Trailer
              </Button>
            </div>
          </div>
        </div>
        <div className="fade-bottom" />
        <RevealOnScroll>
          <section>
            <Slider
              title="Populares"
              info={popular}
              onClick={(movie) => navigate(`/detail/movie/${movie.id}`)}
            />
            <Slider
              title="Mais Bem Avaliados"
              info={topRated}
              onClick={(movie) => navigate(`/detail/movie/${movie.id}`)}
            />
            <Slider
              title="Lançamentos"
              info={upcoming}
              onClick={(movie) => navigate(`/detail/movie/${movie.id}`)}
            />
          </section>
        </RevealOnScroll>
      </Container>
    </PageWrapper>
  );
}
