import { HeaderContainer, HeaderContent, TextHeader } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            {/* container total do header */}
            <HeaderContent>
                {/* SafeAreaView */}
                <TextHeader>
                    {/* título */}
                    Consumo da API ViaCep
                </TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}