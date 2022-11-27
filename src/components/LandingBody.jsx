import React from "react";
import styled from "styled-components";
import m1 from "./assets/m1.jpg";
import m2 from "./assets/m2.jpg";
import m3 from "./assets/m3.jpg";
import m4 from "./assets/m4.jpg";
import m5 from "./assets/m5.jpg";
import m6 from "./assets/m6.jpg";

const MainContainer = styled.div`
  margin: 50px;
`;
const CategoryDiv = styled.div`
  position: relative;
  opacity: 0.9;
`;
const Button = styled.button`
  position: absolute;
  top: 55%;
  left: 39%;
  /* transform: translate(-50%, -50%); */
  border: none;
  background-color: black;
  color: white;
  padding: 15px;
  :hover {
    background-color: #000000ad;
    cursor: pointer;
    transition: 0.8s ease-in;
    transform: scale(1.1);
  }
`;
const MainCategoryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const MainCategoryImgDiv = styled.img`
  width: 400px;
  height: 500px;
  padding-left: 20px;
  padding-right: 20px;
  object-fit: cover;
  :hover {
    transform: scale(1.01);
  }
  @media screen and (max-width: 480px) {
    width: 350px;
  height: 400px;
  }
`;

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MainCategoryTitle = styled.h1``;
const NewArrivals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;
const NewArrivalsImg = styled.img`
  width: 300px;
  height: 500px;
  padding-left: 20px;
  padding-right: 20px;
  object-fit: cover;
  :hover {
    transform: scale(1.01);
  }
`;

const NewArrivalsHeader = styled.h1`
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const NewArrivalsP = styled.p`
  margin-bottom: 50px;
  @media screen and (max-width: 480px) {
    /* display: none; */
  }
`;
const ArrivalMainDiv = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const ArrivalDiv = styled.div`
  position: relative;
`;
const ArrivalButton = styled.button`
  position: absolute;
  top: 80%;
  left: 26%;
  /* transform: translate(-20%, -80%); */
  border: none;
  background-color: black;
  color: white;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  :hover {
    background-color: #000000ad;
    cursor: pointer;
    transition: 0.2s ease-in;
    display: block;
    transform: scale(1.1);
  }
`;

const LandingBody = () => {
  return (
    <MainContainer>
      <MainCategoryDiv>
        <CategoryDiv>
          <Div1>
            <MainCategoryTitle>Shirts</MainCategoryTitle>
          </Div1>
          <MainCategoryImgDiv src={m1}></MainCategoryImgDiv>
          <Button>SHOP NOW</Button>
        </CategoryDiv>
        <CategoryDiv>
          <Div1>
            <MainCategoryTitle>Tops</MainCategoryTitle>
          </Div1>
          <MainCategoryImgDiv src={m2}></MainCategoryImgDiv>
          <Button>SHOP NOW</Button>
        </CategoryDiv>
      </MainCategoryDiv>
      <NewArrivals>
        <NewArrivalsHeader>NEW ARRIVALS</NewArrivalsHeader>
        <NewArrivalsP>
          Watch this space for all new arrivals and to keep up with what’s next
          in line
        </NewArrivalsP>
        <ArrivalMainDiv>
          <ArrivalDiv>
            <NewArrivalsImg src={m3}></NewArrivalsImg>
            <ArrivalButton>VIEW ITEM</ArrivalButton>
          </ArrivalDiv>
          <ArrivalDiv>
            <NewArrivalsImg src={m4}></NewArrivalsImg>
            <ArrivalButton>VIEW ITEM</ArrivalButton>
          </ArrivalDiv>
          <ArrivalDiv>
            <NewArrivalsImg src={m5}></NewArrivalsImg>
            <ArrivalButton>VIEW ITEM</ArrivalButton>
          </ArrivalDiv>
          <ArrivalDiv>
            <NewArrivalsImg src={m6}></NewArrivalsImg>
            <ArrivalButton>VIEW ITEM</ArrivalButton>
          </ArrivalDiv>
        </ArrivalMainDiv>
      </NewArrivals>
    </MainContainer>
  );
};

export default LandingBody;
