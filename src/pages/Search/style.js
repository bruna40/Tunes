import styled from 'styled-components';

export const ContainerSearch = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;

    padding: 1rem;

`;

export const ContainerForm = styled.form`
    input {
        padding: 1rem 2rem;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        border: 0.1rem solid ${(props) => props.theme['gray-300']};
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #692083;
        }
    }

    button {
        padding: 1rem 2rem;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        border: 0.1rem solid ${(props) => props.theme['gray-300']};
        cursor: pointer;
        background-color: ${props => (props.disabled ? '#CCCCCC' : '#a861c2')};
    }

    @media(min-width: 768px) {
        input {
            width: 25rem;
        }

        button {
            width: 10rem;
        }
    }

`;

export const ResultsMusic = styled.section`

    margin-top: 2rem;


    span {
        margin-top:  2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    div {
        display: flex;
        align-items: center;
        margin: 1rem;

        border: 1px solid ${(props) => props.theme['gray-300']};
        border-radius: 0.5rem;

        padding: 1rem;
        gap: 1rem;

        a {
            text-decoration: none;
        }
    }

    @media (min-width: 768px) {
        span {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        a {
            flex-direction: row;
        }
    }
`;
