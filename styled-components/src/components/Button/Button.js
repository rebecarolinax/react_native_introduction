import styled from "styled-components";

export const BtnIncrement = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    background: #210058;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: solid 3px white;
`

export const BtnDecrement = styled(BtnIncrement)`
background-color: #FF0082;
`