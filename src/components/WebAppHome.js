import styled from "styled-components"

import forest from "../asset/forest.png"
import dcu from "../asset/dcu.png"

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;
const Intro = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-top: 20px;
    margin-bottom: 13px;
`
const Content = styled.h2`
    display: flex;
    justify-content: center;
    margin: 1px;
`
const Footer = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const OrangeButton = styled.a`
    color: white;
    background-color: #FFA15B;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
    display: flex;
    width: 190px;
    justify-content: center;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const SkyButton = styled.a`
    color: white;
    background-color: #34D1FF;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
    display: flex;
    width: 190px;
    justify-content: center;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const PupleButton = styled.a`
    color: white;
    background-color: #D25BFF;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
    display: flex;
    width: 190px;
    justify-content: center;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const HashTag = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    color: blue;
`
const DCULogo = styled.h1`
    display: flex;
    justify-content: center;
    color: blue;
    font-size: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
`



export default function WebAppHome() {
    return (
        <Container>
            <Intro>
                <DCULogo>DCU</DCULogo>
                <Title>[웹앱 실습]</Title>
                <Content>성명 : 김범준</Content>
                <Content>URL : http://starbox918.dothome.co.kr/</Content>
                <HashTag>#HTML5 #Responsive-w3css #Javascript #styled-component</HashTag>
            </Intro>
            <ButtonContainer>
                <OrangeButton href="/WebApp">1. 실습환경구축</OrangeButton>
                <SkyButton href="/">2. 404 not Found!!</SkyButton>
                <PupleButton href="/">3. 404 not Found!!</PupleButton>
            </ButtonContainer>
            <ButtonContainer>
                <OrangeButton href="/WebApp">4. 404 not Found!!</OrangeButton>
                <SkyButton href="/">5. 404 not Found!!</SkyButton>
                <PupleButton href="/">6. 404 not Found!!</PupleButton>
            </ButtonContainer>
            <ButtonContainer>
                <OrangeButton href="/WebApp">7. 404 not Found!!</OrangeButton>
                <SkyButton href="/">8. 404 not Found!!</SkyButton>
                <PupleButton href="/">9. 404 not Found!!</PupleButton>
            </ButtonContainer>
            <ButtonContainer>
                <OrangeButton href="/WebApp">10. 404 not Found!!</OrangeButton>
                <SkyButton href="/">11. 404 not Found!!</SkyButton>
                <PupleButton href="/">12. 404 not Found!!</PupleButton>
            </ButtonContainer>
            <Footer>
                <p>모든 권한은 대구가톨릭대학교 모바일 소프트웨어 전공 소속 김범준에게 있습니다.</p>
                <img src={forest} alt="forest" />
                <p>Copyright (c) 2023, starbox918@naver.com | workspace version 0.0.1</p>
            </Footer>
        </Container>
    )
}