import styled, { css } from "styled-components";

export const InputText = styled.TextInput`
    width: 100%;
    border: 2px solid #a1a1a1;
    padding: 20px;
    text-align: left;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Roboto_500Medium';

    ${props => props.editable && css`
    background-color: #f6f6f6;
    
    `}
`