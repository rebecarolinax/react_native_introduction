import styled from "styled-components";

export const HeaderContainer = styled.View`
    /*fundo do header*/
    background-color: #FECC2B;

    /* altura */
    height: 20%;

    /* circuferências das bordas (apenas as inferiores) */
    border-radius: 0 0 20px 20px;
    
    /* elevação das sombras */
    elevation: 10;

    /* alinhamento dos elementos flex */
    justify-content: center;
    align-items: center;
`

export const HeaderContent = styled.SafeAreaView`
`

export const TextHeader = styled.Text`
    color: #333E33;
    font-size: 20px;
    font-family: "Roboto_500Medium";
`