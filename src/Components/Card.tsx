import CardProps from "../interfaces/component-interface";
import styled from "styled-components";

const CardContainers = styled.div`
height:137px;
width: 365px;
background-color: #FFFFFF;
border-radius: 20px;
`

const CardHeaderContainer = styled.div`
display: flex;
justify-content: end;
`

const CardHeader = styled.h2`
color: black;
font-size: 1rem;
`

const ImageIcon = styled.img`
height: 90px;
width: 100px;
`

const ImageContainer = styled.div`
margin-left: 1rem;
`

const CardContentContainer = styled.div` 
display: flex;
gap: 1rem;
margin-top:1rem;
`

const CardBodyText = styled.p`
color: black;
`

const CardBodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

export default function Card({ header, cardBody, image }: CardProps) {
  return (
    <>
      <CardContainers>
        <CardHeaderContainer>
          <CardHeader>{header}</CardHeader>
        </CardHeaderContainer>
        <CardContentContainer>
          <ImageContainer>
            <ImageIcon src={image}/>
          </ImageContainer>
          <CardBodyContainer>
            <div>
              <CardBodyText>{cardBody}</CardBodyText>
            </div>
            <div>
              <CardBodyText>View More</CardBodyText>
            </div>
          </CardBodyContainer>
        </CardContentContainer>
      </CardContainers>
    </>
  )
}