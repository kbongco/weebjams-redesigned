import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Components/Card";
import { Anime } from "../../interfaces/anime-interface";

const SearchResultsHeader = styled.h1` 
color: white;
text-align:left;
font-size: 1.3rem;
margin-top: 1.5rem;
`

const SearchResultsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.3rem;
margin-top: 1.5rem;
align-items: center;
`

export default function Results() {
  const location = useLocation();
  const searchedAnime = location.state?.searchedAnime;
  console.log(searchedAnime);


  return (
    <>
      <SearchResultsHeader>Search Results</SearchResultsHeader>
      <SearchResultsContainer >
      {searchedAnime.map((anime:Anime) => (
        <Card
          key={anime.
            mal_id
          }
          cardBody={anime.title_english}
          image={anime?.images?.jpg?.small_image_url}
        />
      ))}
      </SearchResultsContainer >
    </>
  )
}