import { ContainerInput } from "../../components/ContainerInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
    return (
        <>
            <ScrollForm>
                <ContainerForm>
                    <ContainerInput
                        textLabel="Informar CEP"
                        maxLenght={9}
                        placeholder="Cep..."
                        keyboardType="numeric"
                        fieldWidth={100}
                    />

                    <ContainerInput
                        textLabel="Logradouro"
                        placeholder="Logradouro..."
                        fieldWidth={100}
                    />

                    <ContainerInput
                        textLabel="Bairro"
                        placeholder="Bairro..."
                        fieldWidth={100}
                    />

                    <ContainerInput
                        textLabel="Cidade"
                        placeholder="Cidade..."
                        fieldWidth={100}
                    />

                    <ContainerInput
                        textLabel="Estado"
                        maxLenght={9}
                        placeholder="Estado"
                        fieldWidth={60}
                    />
                    <ContainerInput
                        textLabel="UF"
                        maxLenght={9}
                        placeholder="UF"
                        fieldWidth={30}
                    />
                </ContainerForm>
            </ScrollForm>
        </>
    )
}