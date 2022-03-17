import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    background-color: #222;
    color: #fff;
`;

export const Wrapped = styled.div`
    width: 100%;
    max-width: 1440px;

    height: 100%;
    padding: 30px;

    display: flex;
    flex-direction: column;

    gap: 15px;
`;

export const InputHolder = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;

    border: solid 1px #fff;
    padding: 5px;
    border-radius: 5px;
`

export const ImagesHolder = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    gap: 15px;

    @media screen and (max-width: 600px){
        justify-content: center;
    }

`

export const Image = styled.div`
    min-width: 256px;
    min-height: 256px;

    max-width: 256px;
    max-height: 256px;


    @media screen and (max-width: 600px){
        min-width: 100%;
        max-width: 100%;
        width: 100%;
    }


    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center center;

        border: solid 1px #fff;
        border-radius: 5px;
    }
    
`