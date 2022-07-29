import styled from "styled-components";

export const StyledFormControl = styled.div`
    box-sizing: border-box;
    position: relative;
    margin-bottom: 24px;
`;

interface StyledLabelProps {
    focused: boolean;
    error: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
    display: block;
    position: relative;
    z-index: 2;
    transform: ${pr => pr.focused ? 'translateY(0)' : 'translateY(20px)'};
    opacity: ${pr => pr.focused ? 1 : 0};
    visibility: ${pr => pr.focused ? 'visible' : 'hidden'};
    transition: all 0.2s ease-in;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${pr => pr.error ? '#e93548' : '#000'};
`;

const StyledCaption = styled.span`
    position: absolute;
    font-size: 0.75em;
`;

export const StyledError = styled(StyledCaption)`
    color: #a93458;
`;
export const StyledHint = styled(StyledCaption)`
    color: #341454;
    font-style: italic;
`;