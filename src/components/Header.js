import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa";

import logo from "../asset/totoro.png"


const Container = styled.div`
    height: 50px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Logo = styled.div`
    flex : 2;
    display: flex;
    align-items: center;
`
const TextLogo = styled.div`

`
const Menu = styled.div`
flex: 14;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftMenu = styled.div`
    
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
`
const LogoImage = styled.img`
    width: 50px;
    height: 50px;
`
const LogoText = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    margin-right: 17px;
`
const MenuLink = styled.a`
    margin: 7px;
    text-decoration: none;
    color: black;
`
const Line = styled.p`
    margin: 15px;
`
const Button = styled.a`
    color: white;
    background-color: black;
    padding: 7px;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 5px;
    text-decoration: none;
`

export default function Header() {
    return (
        <Container>
            <Logo>
                <LogoImage src={logo} alt="Totoro" />
                <TextLogo>
                    <LogoText href="/">Starbox's</LogoText>
                </TextLogo>
            </Logo>
            <Menu>
                <LeftMenu>
                    <MenuLink href="/">소개<FaAngleDown size={13} /></MenuLink>
                    <MenuLink href="/">자료<FaAngleDown size={13} /></MenuLink>
                    <MenuLink href="/">게시판<FaAngleDown size={13} /></MenuLink>
                </LeftMenu>
                <RightMenu>
                    <MenuLink href="/">로그인</MenuLink>
                    <Line>|</Line>
                    <MenuLink href="/">회원가입</MenuLink>
                    <Button href="/">무료로 Starbox에게 물어보기</Button>
                </RightMenu>
            </Menu>
        </Container>
    )
}