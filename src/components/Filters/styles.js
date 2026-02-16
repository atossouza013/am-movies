import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

export const FilterButton = styled.button`
  background: ${({ $active }) => $active ? "#ff005c" : "transparent"};
  border: 2px solid #ff005c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff005c;
  }
`