'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import peakedhills from '../public/peakedhills.svg';
import redsofia from '../public/redsofia.png';

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 0px;
    justify-items: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #FC8CF1;
    font-size: 4.3rem;
    text-align: center;
    letter-spacing: 0.17em;
`;

const SubHeader = styled.h2`
    font-family: 'Jura', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #BE54F8;
    font-size: 2.5rem;
    text-align: center;
    margin: 1rem 0;
`;

const SubHeader2 = styled.h3`
    font-family: 'Jura', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #FA772C;
    font-size: 1.5rem;
    text-align: center;
    width: 65%;
`;

const Button = styled.button`
    font-family: 'K2D', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: white;
    height: 3rem;
    width: 10rem;
    font-size: 1.2rem;
    text-align: center;
    background-image: linear-gradient(to right, #BE54F8 0%, #FA772C 51%, #BE54F8 100%);
    background-size: 200% auto;
    border-radius: 6px; 
    margin: 1.2rem 0; 
    transition: all 0.4s ease-in-out;

 &:hover {
    background-position: right center;
    cursor: pointer;
`;

const StyledImage = styled(Image)`
    width: 110%;
    height: 120%%;
    z-index: -1;
    position: relative;
    bottom: 65px;
`;

const StyledHeaderImage = styled(Image)`
    width: 100vw;
    z-index: 1;
`;

export default function Hero() {
    return (
        <>
            <Image src={peakedhills} alt='' />
            <PageContainer>
                <InnerContainer>
                    <Header>Sofia AI</Header>
                    <SubHeader>Your virtual best friend</SubHeader>
                    <SubHeader2> Empowering Intelligent Conversations with Machine Learning </SubHeader2>
                    <Button>Chat Now</Button>
                </InnerContainer>
                <StyledImage src={redsofia} alt='' />
            </PageContainer>
        </>
    );
}