import { ContainerBox } from "./style"

export default function Container({ children }) {
    return (
        // utilizando "children"(props) para passar componentes do pai para filho.
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}