import React from "react";
import styled from "styled-components";
import AccountIcon from "./assets/AccountIcon.png";
import CartIcon from "./assets/CartIcon.png";
import SearchIcon from "./assets/SearchIcon.png";

const MainContainer = styled.div``;
const Spacer = styled.div`
  background-color: black;
  padding: 1px;
  opacity: 0.2;
`;

const Div = styled.div``;

const TopNav = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    justify-content: inherit;
    align-items: center;
  }
`;
const TopNavF = styled.div`
  display: flex;
  opacity: 0.5;
  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TStyledP = styled.p`
  padding-left: 20px;
  cursor: pointer;
`;
const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`;
const BottomNavF = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Brand = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
const BStyledP = styled.p``;
const BStyledImg = styled.img`
  max-width: 30px;
  margin-left: 25px;
  cursor: pointer;
`;
const BStyledImgContainer = styled.div``;
const CategoryNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  color: white;
  background-color: black;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const CategoryItem = styled.p`
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 1px;
`;

const header = () => {
  return (
    <MainContainer>
      <TopNav>
        <Div></Div>
        <TopNavF>
          <TStyledP>Contact us</TStyledP>
          <TStyledP>Returns & Refunds</TStyledP>
          <TStyledP>Shipping</TStyledP>
        </TopNavF>
      </TopNav>
      <Spacer />
      <BottomNav>
        <Brand>.BrandX</Brand>
        <BottomNavF>
          <BStyledP>Home</BStyledP>
          <BStyledP>Create an account</BStyledP>
          <BStyledP>Sign in</BStyledP>
        </BottomNavF>
        <BStyledImgContainer>
          <BStyledImg src={AccountIcon} />
          <BStyledImg src={CartIcon} />
          <BStyledImg src={SearchIcon} />
        </BStyledImgContainer>
      </BottomNav>

      <CategoryNav>
        <CategoryItem>NEW ARRIVALS</CategoryItem>
        <CategoryItem>SETS</CategoryItem>
        <CategoryItem>DRESSES</CategoryItem>
        <CategoryItem>JUMPSUITS</CategoryItem>
        <CategoryItem>MAXI DRESSES</CategoryItem>
        <CategoryItem>PANTS</CategoryItem>
        <CategoryItem>SKIRTS</CategoryItem>
        <CategoryItem>TOPS</CategoryItem>
        <CategoryItem>ALL</CategoryItem>
        <CategoryItem>SALE</CategoryItem>
        <CategoryItem>T-SHIRTS</CategoryItem>
        <CategoryItem>SHORTS</CategoryItem>
      </CategoryNav>
    </MainContainer>
  );
};

export default header;
