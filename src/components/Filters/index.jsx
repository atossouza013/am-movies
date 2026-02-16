import { Container, FilterButton } from "./styles"

export default function Filters({ selected, setSelected }) {
  return (
    <Container>
      <FilterButton
        $active={selected === "popular"}
        onClick={() => setSelected("popular")}
      >
        Populares
      </FilterButton>

      <FilterButton
        $active={selected === "topRated"}
        onClick={() => setSelected("topRated")}
      >
        Mais Bem Avaliados
      </FilterButton>

      <FilterButton
        $active={selected === "upcoming"}
        onClick={() => setSelected("upcoming")}
      >
        Lançamentos
      </FilterButton>
    </Container>
  )
}