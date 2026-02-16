import { useEffect, useState } from "react";
import {
  Container,
  Background,
  Cover,
  Info,
  SectionSlider,
  Wrapper,
  TrailerSection,
} from "./styles";
import {
  getDetails,
  getCredits,
  getVideos,
  getSimilar,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Slider from "../../components/Slider";
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "../../components/RevealOnScroll";

function Detail() {
  const { type, id } = useParams();

  const [data, setData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        const [details, videosData, creditsData, similarData] =
          await Promise.all([
            getDetails(type, id),
            getVideos(type, id),
            getCredits(type, id),
            getSimilar(type, id),
          ]);

        setData(details);
        setVideos(videosData);
        setCredits(creditsData);
        setSimilar(similarData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getAllData();
  }, [type, id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const trailer = videos.find((video) => video.type === "Trailer");

  return (
    <Wrapper>
      {data && (
        <>
          <Background $image={getImages(data.backdrop_path)} />

          <RevealOnScroll>
            <Container $loading={loading}>
              <Cover>
                <img
                  src={getImages(data.poster_path)}
                  alt={data.title || data.name}
                />
              </Cover>
              <Info>
                {/* Filme usa title | Série usa name */}
                <h2>{data.title || data.name}</h2>
                <h1>
                  Lançamento:{" "}
                  {format(
                    parseISO(data.first_air_date || data.release_date),
                    "dd 'de' MMMM 'de' yyyy",
                    {
                      locale: ptBR,
                    },
                  )}
                </h1>
                <SpanGenres genres={data.genres} />
                <p>{data.overview}</p>
                <Credits credits={credits} />
              </Info>
            </Container>
            {trailer && (
              <TrailerSection>
                <h2>Trailer</h2>
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="Trailer"
                  allowFullScreen
                />
              </TrailerSection>
            )}
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionSlider>
              {similar.length > 0 && (
                <Slider
                  info={similar}
                  title="Talvez você goste também"
                  onClick={(item) => navigate(`/detail/${type}/${item.id}`)}
                />
              )}
            </SectionSlider>
          </RevealOnScroll>
        </>
      )}
    </Wrapper>
  );
}

export default Detail;
