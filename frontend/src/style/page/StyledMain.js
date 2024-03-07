import styled from "styled-components";

export const StyledSection = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

export const StyeldTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 4rem;
    color: var(--Font);
    h1 {
        font-weight: bolder;
        font-size: 3rem;
    }

    span {
        color: var(--Pink);
    }
`;

export const StyledCardSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 50px;
    margin-top: 2rem;
    background-color: var(--Background);
    border-radius: 10px;
`;
