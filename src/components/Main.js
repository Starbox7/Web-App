import styled from "styled-components"

import forest from "../asset/forest.png"

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
    margin: 5px;
    margin-top: 100px;
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
`
const WebAppDevelopment = styled.a`
    color: white;
    background-color: #FFA15B;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
`
const CodeforDCU = styled.a`
    color: white;
    background-color: #34D1FF;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
`
const WeSaveTogether = styled.a`
    color: white;
    background-color: #D25BFF;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-underline-position: under;
`



export default function Main() {
    return (
        <Container>
            <Intro>
                <Title>별 한가득, 별나라, 별상자의 모든것.</Title>
                <Content>꿈과 희망이 넘치는 별나라를 만들기 위한</Content>
                <Content>연결된 워크스페이스입니다.</Content>
            </Intro>
            <ButtonContainer>
                <WebAppDevelopment href="/">웹 앱 개발 바로가기</WebAppDevelopment>
                <CodeforDCU href="/">코드forDCU 바로가기</CodeforDCU>
                <WeSaveTogether href="/">우리함께해요 바로가기</WeSaveTogether>
            </ButtonContainer>
            <Footer>
                <img src={forest} alt="forest" />
                <p>Copyright (c) 2023, starbox918@naver.com | workspace version 0.0.1</p>
            </Footer>
        </Container>
    )
}