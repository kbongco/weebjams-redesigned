import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Components/Card";

const SearchResultsHeader = styled.h1` 
color: white;
`

export default function Results() {
  const location = useLocation();
const searchedAnime = location.state?.searchedAnime;
  console.log(searchedAnime);

  return ( 
    <>
      <SearchResultsHeader>Search Results</SearchResultsHeader>
      <Card/>
    </>
  )
}