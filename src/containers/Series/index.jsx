import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import RevealOnScroll from "../../components/RevealOnScroll"
import PageWrapper from "../../components/PageWrapper"

import {
  getTopSeries,
  getPopularSeries,
  getOnTheAirSeries,
} from "../../services/getData";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function Movies() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [heroSerie, setHeroSerie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const [pop, top, up] = await Promise.all([
        getTopSeries(),
        getPopularSeries(),
        getOnTheAirSeries(),
      ]);

      setPopular(pop);
      setTopRated(top);
      setUpcoming(up);

      // escolhe um filme aleatório para banner
      const random = pop[Math.floor(Math.random() * pop.length)];

      setHeroSerie(random);
    }

    loadData();
  }, []);

  if (!heroSerie) return null;

  return (
    <PageWrapper>
      <Container $backdrop={getImages(heroSerie.backdrop_path)}>
        {showModal && (
          <Modal setShowModal={setShowModal} id={heroSerie.id} type="movie" />
        )}
        <div className="hero">
          <div className="hero-content">
            <h1>{heroSerie.name}</h1>
            <p>{heroSerie.overview}</p>
            <div className="buttons">
              <Button
                theme="primary"
                onClick={() => navigate(`/detail/tv/${heroSerie.id}`)}
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
              title="Séries Populares"
              info={popular}
              onClick={(serie) => navigate(`/detail/tv/${serie.id}`)}
            />
            <Slider
              title="Mais Bem Avaliados"
              info={topRated}
              onClick={(serie) => navigate(`/detail/tv/${serie.id}`)}
            />
            <Slider
              title="No Ar"
              info={upcoming}
              onClick={(serie) => navigate(`/detail/tv/${serie.id}`)}
            />
          </section>
        </RevealOnScroll>
      </Container>
    </PageWrapper>
  );
}
