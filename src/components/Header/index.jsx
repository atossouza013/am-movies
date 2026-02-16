import { useState } from "react";
import Logo from "../../assets/logo.png";
import {Container, Menu, Li, SearchInput} from "./styles";
import { Link, useLocation } from "react-router-dom";
import MenuLogo from "../../assets/menu.png";
import { useNavigate } from "react-router-dom";


function Header() {

  const [changeBackground, setChangeBackground] = useState(false)
  const {pathname} = useLocation()
  const [viewMenu, setViewMenu] = useState(false)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()
  

  window.onscroll = () =>{
    if(!changeBackground && window.pageYOffset > 144){
      setChangeBackground(true)
    }
    if(changeBackground && window.pageYOffset <= 150){
      setChangeBackground(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); // impede reload da página

    if (!search.trim()) return;

    navigate(`/search?q=${search}`);
    setSearch(""); // opcional: limpa input
  }

  return (
    <Container $changeBackground ={changeBackground}>
      <img src={Logo} alt="logo-dev-movies"/>
      <Menu $isOpen={viewMenu}>
        <form onSubmit={handleSubmit}>
          <SearchInput placeholder="Pesquise..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        <Li $isActive = {pathname === '/'}>
          <Link to='/'>Home</Link>
        </Li>
        <Li $isActive = {pathname.includes('movies')}>
          <Link to='/movies'>Filmes</Link>
        </Li>
        <Li $isActive = {pathname.includes('series')}>
          <Link to='/series'>Series</Link>
        </Li>

      </Menu>
      <img className='menu-logo' src={MenuLogo} onClick={()=>setViewMenu(prev=> !prev)}/>
      
    </Container>
  );
}

export default Header;
