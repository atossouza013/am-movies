import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMovies } from "../../services/getData";
import { Card, Container, Content } from "./styles";
import PageWrapper from "../../components/PageWrapper"

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
      <Container >
        <h2>Resultados para: {query}</h2>
        <Content>
          {results.map((item) => (
            <Card
              key={item.id}
              onClick={() => navigate(`/detail/${item.media_type}/${item.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title}
              />
              <p>{item.name||item.title}</p>
            </Card>
          ))}
        </Content>
      </Container>
    </PageWrapper>
  );
}

export default Search;