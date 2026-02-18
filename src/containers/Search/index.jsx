import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMovies } from "../../services/getData";
import { Card, CardInfo, Container, Content } from "./styles";
import PageWrapper from "../../components/PageWrapper";
import { getImages } from "../../utils/getImages";

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!query) return;

      const response = await searchMovies(query);
      setResults(response);
    }

    fetchData();
  }, [query]);

  return (
  <PageWrapper>
    <Container>
      <h1>Resultados para: {query}</h1>

      <Content>
        {results.map((item) => {
          const imagePath =
            item.media_type === "person"
              ? item.profile_path
              : item.poster_path;

          return (
            <Card
              key={`${item.media_type}-${item.id}`}
              onClick={() =>
                navigate(`/detail/${item.media_type}/${item.id}`)
              }
            >
              <img
                src={
                  imagePath
                    ? getImages(imagePath)
                    : "/placeholder.png"
                }
                alt={item.title || item.name}
              />

              <CardInfo>
                <h3>{item.title || item.name}</h3>

                <span>
                  {item.media_type === "person"
                    ? "Ator/Atriz"
                    : item.media_type === "movie"
                    ? "Filme"
                    : "Série"}
                </span>
              </CardInfo>
            </Card>
          );
        })}
      </Content>
    </Container>
  </PageWrapper>
);

}

export default Search;
