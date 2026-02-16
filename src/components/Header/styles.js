import styled from "styled-components";

export const Container = styled.div`
  z-index: 3000;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.$changeBackground ? "rgba(0, 0, 0, 0.87)" : "transparent"};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 30%;
  }

  .menu-logo {
    color: #ff005b;
    width: 30px;
    display: none;
    cursor: pointer;
    z-index: 4000;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 24px; /* mais respiro */
    height: 70px; /* define altura confortável */
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 180px; /* logo maior */
      max-width: 60%;
    }

    .menu-logo {
      display: block;
      width: 32px; /* ícone proporcional */
    }
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  padding: 80px 30px 30px;
  background-color: rgba(0, 0, 0, 0.95);

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.35s cubic-bezier(0.77, 0, 0.18, 1);
  z-index: 2000;
}
`;
export const Li = styled.li`
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: #ff005b;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  height: 30px;
  border: 2px solid #ff005b;
  background-color: rgba(44, 44, 44, 0.4);
  border-radius: 10px;
  padding: 3px;
  color: #fff;
  font-size: 16px;

  @media (max-width: 768px) {
    height: 38px;
    width: 60%;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);

  animation: fadeOverlay 0.3s ease forwards;
  z-index: 1500;

  @keyframes fadeOverlay {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`
