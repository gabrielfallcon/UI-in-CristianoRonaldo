import styled from 'styled-components'
import img from '../../assets/banner.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 645px) {
        
        flex-direction: column;
        
    }
`
export const BannerCr7 = styled.div`
    width: 35%;
    height: 100%;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    nav img {
        width: 100px;
        padding: 5px; 
    }

    main {
        width: 450px;
        height: 450px;

        img {
            width: 500px;
            position: absolute;
            margin-top: -32%;
            margin-left: 23%;
            margin-top: 10%;

            @media(max-width: 645px) {
                width: 300px;
                height: auto;
                margin-top: 0;
                margin-left: 10%;
            }
        }

        @media(max-width: 645px) {
            width: 95%;
            margin-top: 220%;
            display: flex;
            align-items: flex-end;
        }
    }

    @media(max-width: 645px) {
        width: 100%;
        min-height: 700px;
        background-size: cover;
    }
`

export const Content = styled.div`
    width: 65%;
    height: 100vh;
    background-image: linear-gradient(to right, black, #F74326);
    color: #0d1212;

    @media(max-width: 645px) {
        width: 100%;
        height: 100%;
        background-color: #000000;
        background-image: none;
    }
    
`

export const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 2px 20px #0d1212;
    color: #F74326;
    margin: 0;

    ul {
        width: 40%;
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;

        li {
            cursor: pointer; 
            :hover {
                cursor: pointer;
                border-bottom: 3px solid #F74326;
            }
        }

    }

    @media(max-width: 645px) {
        display: none;
    }
`

export const Carrinho = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
`

export const Section = styled.section`
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-height: 400px;
    margin-top: 20%;
    margin-left: 40%;
    font-weight: 400;

    h1 {
        font-weight: 500;
        font-size: 40pt;
        margin: 0;
        font-family: 'Julius Sans One', sans-serif;
        color: #000;

        @media(max-width: 645px) {
            color: #fff;
            width: 80%;
    }
    }

    p {
        font-weight: 400;
    }

    @media(max-width: 645px) {
        width: 90vw;
        height: 100vh;
        color: #fff;
        justify-content: start;
        align-items: center;
        margin: 0;
    }
`

export const Button = styled.button`
    padding: 15px;
    width: 180px;
    border: none;
    background-color: black;
    color: white;
    transition: .4s;
    letter-spacing: 2px;
    margin-bottom: 5px;
    cursor: pointer;

    ::before {
        content: '';
        width: 180px;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        position: absolute;
        margin-top: 32px;
        margin-left: -28px;
    }

    @media(max-width: 645px) {
        border: 1px solid #fff;
    }
`
export const Figure = styled.div`
    width: 250px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 50px;
        transition: .1s;

        :hover{
            width: 70px;
            cursor: pointer;
        }
    }
`