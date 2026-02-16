import styled from "styled-components"

export const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(20px)"};

  transition: all 0.6s ease;
`