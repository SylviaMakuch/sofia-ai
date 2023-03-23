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
    grid-column-gap: 2rem;
    grid-row-gap: 0px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Header = styled.h1`
    font-family: Orbitron;
    font-style: normal;
    font-weight: 400;
    color: #FC8CF1;
    size: 5rem;
    text-align: center;
    letter-spacing: 0.17em;
`;

const SubHeader = styled.h2`
    font-family: 'Jura';
    font-style: normal;
    font-weight: 400;
    color: #BE54F8;
    size: 2rem;
    text-align: center;
`;

const SubHeader2 = styled.h3`
    font-family: 'Jura';
    font-style: normal;
    font-weight: 500;
    color: #FA772C;
    size: 2rem;
    text-align: center;
`;

const Button = styled.button`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 400;
    color: white;
    height: 3rem;
    width: 10rem;
    text-align: center;
    background: linear-gradient(90.14deg, #EC3D71 10.31%, #A53C93 99.95%);
    border-radius: 6px; 

    &:hover {
        background: linear-gradient(90.14deg, #A53C93 10.31%, #EC3D71 99.95%);
    }
`;



export default function Hero() {
    return (
        <>
            <Image src={peakedhills} alt='' />
            <PageContainer>
                <TextContainer>
                    <Header>Sofia AI</Header>
                    <SubHeader>Your virtual best friend</SubHeader>
                    <SubHeader2> Empowering Intelligent Conversations with Machine Learning </SubHeader2>
                    <Button>Get Started</Button>
                </TextContainer>
                <Image src={redsofia} alt='' />
            </PageContainer>
        </>
    );
}