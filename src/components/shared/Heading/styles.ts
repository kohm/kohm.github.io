import styled from "styled-components";

export const StyledHeading = styled.h1`
    color: ${props => props.theme.palette.primary.contrastText};
    margin: 0 0 16px;
`;
//
// const themeHandler = () => {
//     return styled.button<StyleProps>`
//         border: none;
//         border-radius: ${props => props.theme.borderRadius};
//         background-color: ${props => props.primary ? props.theme.palette.primary.main: props.theme.palette.secondary.main};
//         color: ${props => props.primary ? props.theme.palette.primary.contrastText: props.theme.palette.secondary.contrastText};
//         padding: 8px 16px;
//     `
// }
//
// export default themeHandler;
