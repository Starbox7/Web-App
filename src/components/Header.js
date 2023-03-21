import React from 'react';
import styled from 'styled-components';

import DropdownMenu from './DropdownMenu';

import logo from '../asset/totoro.png';

const Container = styled.div`
  height: 50px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 90px;
  }
`;

const Logo = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const TextLogo = styled.div``;

const Menu = styled.div`
  flex: 14;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftMenu = styled.div``;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoText = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  margin-right: 17px;
`;

const MenuLink = styled.a`
  margin: 7px;
  text-decoration: none;
  color: black;
`;

const Line = styled.p`
  margin: 15px;
  @media (max-width: 768px) {
    margin: 3px;
  }
`;

const Button = styled.a`
  color: white;
  background-color: black;
  padding: 7px;
  border-radius: 5px;
  margin-left: 17px;
  margin-right: 5px;
  text-decoration: none;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const introItems = [
    { name: '별상자의 Workspace', link: '/about' },
    { name: '별상자의 포트폴리오', link: '/team' },
];

const projectItems = [
    {
        name: '진행중인 프로젝트',
        link: '/project1',
        subItems: [
            { name: 'We-save-Together', link: '/project1-1' },
            { name: 'Nailed-It', link: '/project1-2' },
            { name: 'NBA-rules', link: '/project1-2' },
            { name: 'Typing Knsnyo', link: '/project1-2' },
            { name: 'todoDiary', link: '/project1-2' },
            { name: 'Starbox-Workspace', link: '/project1-2' },
            { name: 'Uni-Share', link: '/project1-2' },
            { name: 'Alert History', link: '/project1-2' },
            { name: 'iOS Toy Project', link: '/project1-2' },
        ],
    },
    {
        name: '종료된 프로젝트',
        link: '/project2',
        subItems: [
            { name: 'Caddycom', link: '/project1-1' },
            { name: 'Knsnyo Blog', link: '/project1-2' },
            { name: 'Todo-list', link: '/project1-2' },
            { name: 'Unity Toy Project', link: '/project1-2' },
            { name: 'Minesweeper', link: '/project1-2' },
            { name: 'Data visualization', link: '/project1-2' },
        ],
    },
];

const noticeItems = [
    { name: '공지사항', link: '/notice' },
    { name: '이벤트', link: '/event' },
    { name: '자유게시판', link: '/event' },
    {
        name: '자료실', link: '/event',
        subItems: [
            { name: 'React-Native', link: '/project1-1' },
            { name: 'Native-Base', link: '/project1-2' },
            { name: 'Expo-cli', link: '/project1-2' },
            { name: 'React', link: '/project1-2' },
            { name: 'javascript', link: '/project1-2' },
            { name: 'Typescript', link: '/project1-2' },
            { name: 'Android-studio', link: '/project1-2' },
            { name: 'X-Code', link: '/project1-2' },
            { name: 'Express', link: '/project1-2' },
            { name: 'Unity', link: '/project1-2' },
            { name: 'Github', link: '/project1-2' },
            { name: 'Python3', link: '/project1-2' },
            { name: 'MariaDB & MySQL', link: '/project1-2' },
            { name: 'MongoDB', link: '/project1-2' },
            { name: 'C', link: '/project1-2' },
            { name: 'Flutter', link: '/project1-2' },
            { name: 'Job', link: '/project1-2' },
            { name: 'Computer science', link: '/project1-2' },
            { name: 'School', link: '/project1-2' },
            { name: 'Educations', link: '/project1-2' },
            { name: 'Others', link: '/project1-2' },
        ],
    },
];

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
                    <DropdownMenu title="소개" items={introItems} />
                    <DropdownMenu title="프로젝트" items={projectItems} />
                    <DropdownMenu title="게시판" items={noticeItems} />
                </LeftMenu>
                <RightMenu>
                    <MenuLink href="/">로그인</MenuLink>
                    <Line>|</Line>
                    <MenuLink href="/">회원가입</MenuLink>
                    <Button href="http://minji063.dothome.co.kr/">Moon's Workscapce 바로가기</Button>
                </RightMenu>
            </Menu>
        </Container>
    );
}
