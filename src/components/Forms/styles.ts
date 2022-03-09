import styled from 'styled-components'

export const Container = styled.main`
    background-color: var(--dark-blue-light);
    padding: 2rem;
    border-radius: .6rem;
    width: 50%;
    margin: 3rem auto;

    #form-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-bottom: 2.6rem;

        h1 {
            font-size: 2rem;
        }

        p {
            color: var(--light-cyan);
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
        color: #000;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        height: 2.8rem;
        margin-top: .4rem;
    }
`