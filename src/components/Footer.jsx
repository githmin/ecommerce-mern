import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #000000;
  color: white;
  padding: 70px;
`;

const Spacer = styled.div`
  background-color: white;
  padding: 1px;
  opacity: 0.2;
  width: 250px;
`;
const SpacerTwo = styled.div`
  background-color: white;
  padding: 1px;
  opacity: 0.2;
  margin-top: 40px;
`;

const Container = styled.div`
  justify-content: space-around;
  display: flex;
`;
const MiniContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
  /* border: 1px solid red; */
`;

const CategoryNav = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const CategoryItem = styled.p`
  cursor: pointer;
  font-size: 12px;
`;

const NavTitle = styled.p`
  font-size: 20px;
`;

const CopyrightContiner = styled.div`
  font-size: 15px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CopyrightName = styled.a`
  text-decoration: none;
`;
const CPRSubContainer = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 480px) {
    margin: 10px;
  }
`;
const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <MiniContainer>
          <NavTitle>SHOP</NavTitle>
          <Spacer />
          <CategoryNav>
            <CategoryItem>NEW ARRIVALS</CategoryItem>
            <CategoryItem>SETS</CategoryItem>
            <CategoryItem>DRESSES</CategoryItem>
            <CategoryItem>SKIRTS</CategoryItem>
            <CategoryItem>TOPS</CategoryItem>
            <CategoryItem>ALL</CategoryItem>
            <CategoryItem>SALE</CategoryItem>
            <CategoryItem>T-SHIRTS</CategoryItem>
            <CategoryItem>SHORTS</CategoryItem>
          </CategoryNav>
        </MiniContainer>

        <MiniContainer>
          <NavTitle>CUSTOMER AREA</NavTitle>
          <Spacer />
          <CategoryItem>Sign in</CategoryItem>
          <CategoryItem>Create an account</CategoryItem>
          <CategoryItem>Cart</CategoryItem>
          <CategoryItem>Contact us</CategoryItem>
        </MiniContainer>

        <MiniContainer>
          <NavTitle>INFORMATION</NavTitle>
          <Spacer />
          <CategoryItem>Privacy Policy</CategoryItem>
          <CategoryItem>Returns & Refunds</CategoryItem>
          <CategoryItem>Delivery</CategoryItem>
          <CategoryItem>Order Placement</CategoryItem>
        </MiniContainer>

        <MiniContainer>
          <NavTitle>LOCATE US</NavTitle>
          <Spacer />
          <CategoryItem>No.325</CategoryItem>
          <CategoryItem>Not a real address road</CategoryItem>
          <CategoryItem>Localhost</CategoryItem>
          <CategoryItem>Port 3000</CategoryItem>
          <CategoryItem>+94 77 127 0001</CategoryItem>
        </MiniContainer>
      </Container>

      <SpacerTwo />
      <CopyrightContiner>
        <CPRSubContainer>
          &#169; {new Date().getFullYear()} React BrandX Frontend. <br />
          &nbsp; &nbsp; &nbsp;By{" "}
          <CopyrightName href="https://github.com/githmin">
            Githmin Jayawardhana
          </CopyrightName>
        </CPRSubContainer>
      </CopyrightContiner>
    </MainContainer>
  );
};

export default Footer;
