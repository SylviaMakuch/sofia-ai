'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { aboutConfig } from '../config/aboutConfig';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(to right, #BE54F8 0%, #FA772C 51%);
    color: white;
    height: 20rem;
    padding: 6.5rem;
    font-family: 'Jura', sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 1.5rem;
`;

export default function About( props: any) {
    return (
        <PageContainer>
            {/* <h1>{props.aboutConfig.title}</h1>
            <p>{props. aboutConfig.description}</p> */}
            <p>Sofia is a virtual assistant powered by advanced natural language processing (NLP) and machine learning (ML) algorithms. With Sofia, you can have intelligent conversations about a wide range of topics, from simple greetings to complex problem-solving. Sofia is designed to learn from your interactions and adapt to your needs, making her the perfect companion for your daily life. Whether you're looking for a friend, a tutor, or a personal assistant, Sofia is here to help you every step of the way.</p>
        </PageContainer>
    );
};