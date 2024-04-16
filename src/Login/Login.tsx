import styled from "styled-components";

const LoginContainer = styled.div`
display: flex;
justify-content: center;
`

const LoginContentContainer = styled.div`
width:400px;
`

const WeebHeader = styled.h1`
text-align:left;
color: white;
font-size: 1.4rem;
margin-top: 0.5rem;
`

const ImageContainer = styled.div`
display: flex;
flex-direction: column;
height: auto;
justify-content: center;
`
const WeebJamsImage = styled.img`
border-radius: 30px;
width: 210px;
`

const InformationParagraph = styled.p`
font-size: 0.9rem;
width: 250px;
text-align: left;
color: white;
`

const InformationButtonContainer = styled.div`
margin-top: 1rem;
width: 250px;
`
export default function Login() {

  const clientId = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_REACT_APP_REDIRECT_URI;
  const spotifyOAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&scope=user-read-private&response_type=token`;

  const testButtonFunction = () => {
    window.location.href = spotifyOAuthUrl;
  }
  return (<>
    <LoginContainer>
      <LoginContentContainer>
        <ImageContainer>
          <WeebJamsImage src="/weebjams.png" alt="WeebJams" />
          <WeebHeader>WeebJams</WeebHeader>
          <InformationParagraph>A responsive web application that utilizes the Jikan API and the Spotify APi to search for Anime openings and endings and find out if they are available for streaming and listening.</InformationParagraph>
        </ImageContainer>
        <InformationButtonContainer>
          <button className="button is-success is-rounded is-fullwidth" onClick={testButtonFunction}>Login with Spotify</button>
        </InformationButtonContainer>
      </LoginContentContainer>
    </LoginContainer>
  </>)
}