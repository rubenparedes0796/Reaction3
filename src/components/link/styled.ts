import styled from "styled-components";

interface StyledLinkProps {
    disabled: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    display: inline-block;
    box-sizing: border-box;
    color: #0d18cf;
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-size: 18px;

    &:active, &:visited {
        color: #6718cf;
        text-decoration: none;
    }
    &:focus, &:hover {
        color: #6974dc;
    }

    ${pr => pr.disabled ? `
        cursor: not-allowed;
        &, &:focus, &:visited, &:hover {
            color: #5e6e5e;
        }
    ` : ''} 
`