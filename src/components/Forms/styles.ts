import styled from 'styled-components'

export const Container = styled.main`

    @media only screen and (min-width: 781px) and (max-width: 1024px) {
        margin: 2rem auto;
        width: 70%;
    }

    @media only screen and (max-width: 780px) {
        margin: 2rem auto;
        width: 90%;
        padding: 1.4rem;
    }

    background-color: var(--dark-blue-light);
    padding: 2.8rem;
    border-radius: .6rem;
    width: 50%;
    margin: 2.8rem auto;
    font-weight: 400;
    box-shadow: 0 .5rem 2rem -.5rem #090F23;

    #form-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-bottom: 2.6rem;

        h1 {
            font-size: 2.25rem;
        }

        p {
            color: var(--light-cyan);
            font-weight: 400;
        }
    }

    input {
        border: none;
        background-color: var(--dark-blue-lighter);
        color: #fff;
        width: 100%;
        padding: .6rem;
        border-radius: .3rem;
        margin-bottom: 2rem;

        &::placeholder {
            color: var(--form-cyan);
            font-weight: 300;
            font-size: .95rem;
        }
        
        &:hover {
            filter: brightness(110%);
        }

        &:focus-visible {
            border: none;
            outline: none;
        }
    }

    .input-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
            width: 48%;
        }
    }

    button[type="submit"] {
        width: 100%;
        border-radius: .3rem;
        background-color: var(--light-cyan);
        color: var(--dark-blue);
        font-size: 1.6rem;
        font-weight: 400;
        border: none;
        height: 2.8rem;
        margin-top: .4rem;
        cursor: pointer;

        &:hover {
            filter: brightness(90%);
        }
    }

    label {
        .label { 
            margin: 0 0 .2rem .42rem;
            cursor: pointer;
        }
    }
`