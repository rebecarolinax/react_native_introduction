import styled from "styled-components";

export const FieldContent = styled.View`
    /* width: ${props => `${props.fieldWidth}%`}; */
    width: ${props => props.fieldWidth}%;
`
export const InputUFContainer = styled(FieldContent)`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
`