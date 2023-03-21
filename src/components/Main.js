import styled from "styled-components"
import { Link } from "react-router-dom";


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
    @media (max-width: 768px) {
        font-size: 21px;
    }
`
const Content = styled.h2`
    display: flex;
    justify-content: center;
    margin: 1px;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`
const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const WebAppDevelopment = styled.p`
    color: white;
    background-color: #FFA15B;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    padding: 10px;
    text-decoration: none;
    display: flex;
    width: 190px;
    justify-content: center;
    font-weight: bold;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const CodeforDCU = styled.p`
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
    font-weight: bold;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const WeSaveTogether = styled.p`
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
    font-weight: bold;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`
const HashTag = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    color: blue;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`



export default function Main() {
    return (
        <Container>
            <Intro>
                <Title>별 한가득, 별나라, 별상자의 모든것.</Title>
                <Content>꿈과 희망이 넘치는 별나라를 만들기 위한</Content>
                <Content>연결된 워크스페이스입니다.</Content>
                <HashTag>#HTML5 #Responsive-w3css #Javascript #styled-component</HashTag>
            </Intro>
            <ButtonContainer>
                <Link to="/WebApp" style={{ textDecoration: 'none' }}>
                    <WebAppDevelopment>웹 앱 개발 실습 바로가기</WebAppDevelopment>
                </Link>
                <Link to="/CFD" style={{ textDecoration: 'none' }}>
                    <CodeforDCU>코드forDCU 바로가기</CodeforDCU>
                </Link>
                <Link to="/WST" style={{ textDecoration: 'none' }}>
                    <WeSaveTogether>우리함께해요 바로가기</WeSaveTogether>
                </Link>
            </ButtonContainer>
        </Container>
    )
}