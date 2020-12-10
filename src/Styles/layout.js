import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    font-family: 'Raleway', sans-serif;
    padding: 4rem;
    max-width: 1200px;
    margin 0 auto;
    background: #F6F1F0;
`;

export const Projects = styled.div`
    
`;

export const FooterWrapper = styled.footer`
    margin: 1rem 0;
    div {
        margin: .5rem 0;
        a{
            color: black;
            font-weight: bolder;
            text-decoration: none;
            transition: opacity 250ms ease;
            &:hover, &:focus {
                opacity: 0.8;
            }
        }
    }
`;

export const GridContainer = styled.div` 
display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

export const PullQuote = styled.div`
    padding: 4rem 0;
    text-align: center;
    font-family: 'Dancing Script', cursive;
    blockquote {
        fontsize: 3rem;
        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
    }
`;

export const Section = styled.section`
    margin: 3rem auto;
    @media screen and (min-width: 768px) {
        margin: 1rem auto;
    }
`;



