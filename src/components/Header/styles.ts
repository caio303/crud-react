import styled from 'styled-components';

export const Container = styled.header`
    height: 4.2rem;
    background-color: var(--dark-blue);
    padding: 1rem 2.6rem;
    border-bottom: .1rem solid var(--dark-blue-light);
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    #logo {
        font-size: 2.2rem;
    }

    nav {
        display: flex;
        gap: 1rem;
    }
`