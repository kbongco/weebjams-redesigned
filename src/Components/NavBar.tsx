import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMusic } from '@fortawesome/free-solid-svg-icons';



const NavBarContainer = styled.nav`
height: 104px;
background-color: white;
width: 395px;
margin-top: 1rem;
border-radius: 20px;
border: 5px solid #000000;

@media(min-width: 768px){
  width: 100%;
}
`

const NavBarTitle = styled.h1`
color: black;
font-size: 1.5rem;
`

const NavBarTitleContainer = styled.div`
display: flex;
    gap: 1rem;
    margin-left: 1rem;
}`

const StyledIcon = styled(FontAwesomeIcon)`
height: 40px;
  color: black;
`;

const NavBarTitleTextContainer = styled.div`
display:flex;
align-items: center;
`

const HamburgerIcon = styled(FontAwesomeIcon)`
height: 40px;
color: black;

@media(min-width: 768px) {
  display: none;
}
`

const NavBarContentContainer = styled.div`
display: flex;
justify-content: space-between;
height: 90px;
align-items: center;
margin-right: 1rem;
`

const NavBarLinks = styled.ul`
display:none;

@media(min-width:768px) {
display: flex;
gap: 1.5rem;
color: black;
font-size: 2rem;
}
`

export default function NavBar() {

  return (
    <>
      <NavBarContainer>
        <NavBarContentContainer>
          <NavBarTitleContainer >
              <StyledIcon icon={faMusic} />
            <NavBarTitleTextContainer>
              <NavBarTitle>WeebJams</NavBarTitle>
            </NavBarTitleTextContainer>
          </NavBarTitleContainer> 
          <HamburgerIcon icon={faBars} />
          <NavBarLinks>
            <li>Home</li>
            <li>Anime</li>
            <li>About</li>
          </NavBarLinks>
        </NavBarContentContainer>
      </NavBarContainer>
    </>
  )
}