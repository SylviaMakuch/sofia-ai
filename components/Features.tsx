'use client';

import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FeaturesContainer = styled.div`
    background: #2D2D2D;
    height: 75%;
    width: 75%;
    position: relative;
`;

const AccentContainer = styled.div`
  width: 65%; 
  height: 95%;
  background-image: linear-gradient(to right, #BE54F8 0%, #FA772C 51%);
  position: absolute;
  bottom: -3.5rem ;
  right: -3.5rem ;
  z-index: -1;
`;

export default function Features() {
    return (
        <PageContainer>
            <FeaturesContainer>
                <AccentContainer />
            </FeaturesContainer>
        </PageContainer>
    );
}