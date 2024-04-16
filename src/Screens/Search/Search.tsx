import { useEffect, useState } from "react"
import styled from "styled-components"

const SearchWelcome = styled.h1`
color: white;
font-size: 2.1rem;
`

const SearchInstructions = styled.p`
color: white;
font-size: 0.8rem;
`

const WelcomeContainer = styled.div`
display: flex;
align-items: center;
height: 100px;
`

const SearchContainer = styled.div` 
display: flex;
gap: 1rem;
`

const ButtonContainer = styled.div`
margin-left: 1rem;
`

export default function Search() {
  const [buttonPress, setButtonPress] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [top10Anime, setTop10Anime] = useState([]);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  }

  const searchSongs = () => {
    console.log(inputValue);
  }

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime').then((res) => {
      console.log(res);
      return res.json()
    }).then((data) => {
      console.log(data.data);
      setTop10Anime(data.data);
    })
  },[])
  
  return (
    <>
      <WelcomeContainer>
        <SearchWelcome>Welcome!</SearchWelcome>
      </WelcomeContainer>
      <SearchInstructions>You can search by anime or by song below</SearchInstructions>
      <SearchContainer>
        <input className="input is-rounded" type="text" placeholder="Text input" onChange={handleInputChange} />
        <ButtonContainer>
          <button className="button is-success is-rounded" onClick={searchSongs}>Search</button>
        </ButtonContainer>

      </SearchContainer>
    </>
  )
}