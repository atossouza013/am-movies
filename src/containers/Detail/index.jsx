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
  getPersonDetails,
  getPersonCredits,
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
        setLoading(true);

        if (type === "person") {
          const [details, creditsData] = await Promise.all([
            getPersonDetails(id),
            getPersonCredits(id),
          ]);

          setData(details);
          setCredits(creditsData);
          setVideos([]);
          setSimilar([]);
        } else {
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
        }

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
  const releaseDate = data?.first_air_date || data?.release_date;

return (
  <Wrapper>
    {data && (
      <>
        <Background
          $isPerson={type === "person"}
          $image={getImages(data.backdrop_path)}
        />

        <RevealOnScroll>
          <Container $loading={loading}>
            <Cover>
              <img
                src={getImages(
                  type === "person"
                    ? data.profile_path
                    : data.poster_path
                )}
                alt={data.title || data.name}
              />
            </Cover>

            <Info>
              <h2>{data.title || data.name}</h2>

              {type !== "person" ? (
                <>
                  {(data.first_air_date || data.release_date) && (
                    <h1>
                      Lançamento:{" "}
                      {format(
                        parseISO(
                          data.first_air_date ||
                            data.release_date
                        ),
                        "dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR }
                      )}
                    </h1>
                  )}

                  <SpanGenres genres={data.genres} />
                  <p>{data.overview}</p>
                  <Credits credits={credits} />
                </>
              ) : (
                <>
                  {data.birthday && (
                    <h1 className="birthday">
                      Nascimento:{" "}
                      {format(
                        parseISO(data.birthday),
                        "dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR }
                      )}
                    </h1>
                  )}

                  {data.place_of_birth && (
                    <p className="local-birth">
                      Local: {data.place_of_birth}
                    </p>
                  )}

                  <p>{data.biography}</p>
                </>
              )}
            </Info>
          </Container>

          {type !== "person" && trailer && (
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
            {type !== "person" && similar.length > 0 && (
              <Slider
                info={similar}
                title="Talvez você goste também"
                onClick={(item) =>
                  navigate(`/detail/${type}/${item.id}`)
                }
              />
            )}

            {type === "person" &&
              credits
                .filter(
                  (item) =>
                    item.media_type === "movie" ||
                    item.media_type === "tv"
                )
                .length > 0 && (
                <Slider
                  info={credits
                    .filter(
                      (item) =>
                        item.media_type === "movie" ||
                        item.media_type === "tv"
                    )
                    .slice(0, 20)}
                  title="Conhecido por"
                  onClick={(item) =>
                    navigate(
                      `/detail/${item.media_type}/${item.id}`
                    )
                  }
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
