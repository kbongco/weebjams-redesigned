import { useEffect, useState } from "react"
import styled from "styled-components"
import { Anime } from "../../interfaces/anime-interface"
import { sendJikanData } from "../../constants/constants"
import { useNavigate } from 'react-router-dom';


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
const TopAnimeContainer = styled.div` 
text-align: left;
color: white;
margin-top: 1rem;
`

const Top10Header = styled.h1`
font-size: 1.4rem;
color: white;
`

const AnimePhoto = styled.img`
height: 100px;
width: 90px;
border-radius: 10px;
`

const Top10AnimeContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
`

const CurrentAnimeSznContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 1rem;
`;

const CurrentSznHeader = styled.h1`
font-size: 1.4rem;
color: white;
`

const AnimeNameContainer = styled.div` 
display: flex;
flex-wrap: wrap;
gap: 1rem;
`

const AnimeName = styled.p`
max-width: 10ch;
`

export default function Search() {
  const [buttonPress, setButtonPress] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [top10Anime, setTop10Anime] = useState<any>([]);
  const [currentSeason, setCurrentSeason] = useState([]);
  const [searchedAnime, setSearchedAnime] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topAnimeResponse, currentSeasonResponse] = await Promise.all([
          fetch('https://api.jikan.moe/v4/top/anime'),
          fetch('https://api.jikan.moe/v4/seasons/now')
        ]);

        if (!topAnimeResponse.ok || !currentSeasonResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [topAnimeData, currentSeasonData] = await Promise.all([
          topAnimeResponse.json(),
          currentSeasonResponse.json()
        ]);

        setTop10Anime(topAnimeData.data.slice(0, 10));
        setCurrentSeason(currentSeasonData.data.slice(0, 10));
        console.log(currentSeasonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e?.target?.value);
  }
  const searchAnime = async (query:string) => {
    try {
      const trimmedValue = typeof query === 'string' ? query.trim() : '';
      if (trimmedValue !== '') {
        const response = await fetch(sendJikanData(trimmedValue));
        const data = await response.json();
        setSearchedAnime(data.data);
        navigate('/results', { state: { searchedAnime: data.data } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Debounce the searchAnime function
    const debounceSearch = setTimeout(() => {
      searchAnime(inputValue);
    }, 500); // Adjust the delay as needed (e.g., 500 milliseconds)

    // Cleanup function to clear the timeout
    return () => clearTimeout(debounceSearch);
  }, [inputValue]);

  const handleSearch = () => {
    searchAnime(inputValue); // Call searchAnime when the button is clicked
  };

  

  return (
    <>
      <WelcomeContainer>
        <SearchWelcome>Welcome!</SearchWelcome>
      </WelcomeContainer>
      <SearchInstructions>You can search by anime or by song below</SearchInstructions>
      <SearchContainer>
        <input className="input is-rounded" type="text" placeholder="Text input" onChange={handleInputChange} />
        <ButtonContainer>
          <button className="button is-success is-rounded" onClick={handleSearch}>Search</button>
        </ButtonContainer>
      </SearchContainer>
      <TopAnimeContainer>
        <Top10Header>All time Top 10 </Top10Header>
        <Top10AnimeContainer>
          <AnimeNameContainer>
            {top10Anime.map((anime: Anime) => (
              <div>
                <AnimePhoto src={anime?.images?.jpg?.small_image_url
                } />
                <AnimeName>{anime.
                  title_english
                }</AnimeName>
              </div>
            ))}
          </AnimeNameContainer>
        </Top10AnimeContainer>
      </TopAnimeContainer>
      <CurrentAnimeSznContainer>
        <CurrentSznHeader>Current Anime This Season</CurrentSznHeader>
        <Top10AnimeContainer>
          {currentSeason.map((current: Anime) => (
            <AnimePhoto src={current?.images?.jpg?.small_image_url} />
          ))}
        </Top10AnimeContainer>
      </CurrentAnimeSznContainer>
    </>
  )
}