import { Container, Content, Overlay } from "./styles"

export default function HeroBanner() {
  return (
    <Container>
      <Overlay />
      <Content>
        <h1>Explore os Melhores Filmes</h1>
        <p>
          Descubra os filmes mais populares, bem avaliados
          e lançamentos mais recentes.
        </p>
        <button>Ver Populares</button>
      </Content>
    </Container>
  )
}