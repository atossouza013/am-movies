import { Container, Card } from "./styles"
import { getImages } from "../../utils/getImages"

export default function MovieGrid({ movies }) {
  return (
    <Container>
      {movies?.map(movie => (
        <Card key={movie.id}>
          <img
            src={getImages(movie.poster_path)}
            alt={movie.title}
          />
          <p>{movie.title}</p>
        </Card>
      ))}
    </Container>
  )
}