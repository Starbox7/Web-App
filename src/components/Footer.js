import styled from "styled-components"

import forest from "../asset/forest.png"


const Under = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Copyright = styled.p`
    @media (max-width: 768px) {
        font-size: 10px;
    }
`


export default function Footer() {
    return (
        <Under>
            <img src={forest} alt="forest" />
            <Copyright>Copyright (c) 2023, starbox918@naver.com | workspace version 0.0.1</Copyright>
        </Under>
    )
}