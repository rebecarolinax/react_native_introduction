import { useState } from "react";
import { ContainerInput } from "../../components/ContainerInput";
import { InputUFContainer } from "../../components/ContainerInput/style";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {

    // states - variáveis
    const [cep, setCep] = useState('09413200');
    const [logradouro, setLogradouro] = useState();
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    // useEffect - funções



    return (
        <ScrollForm>
            <ContainerForm>
                <ContainerInput
                    textLabel="Informar CEP"
                    placeholder="Cep..."
                    editable={true}
                    keyboardType="numeric"
                    maxLenght={9}
                    value={cep}
                    onChangeText={(e) => setCep(e)}
                />
                <ContainerInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldWidth={100}
                    value={logradouro}
                />
                <ContainerInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldWidth={100}
                    value={bairro}
                />
                <ContainerInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldWidth={100}
                    value={cidade}
                />
                <InputUFContainer>
                    <ContainerInput
                        textLabel="Estado"
                        maxLenght={9}
                        placeholder="Estado"
                        fieldWidth={60}
                        value={estado}
                    />
                    <ContainerInput
                        textLabel="UF"
                        maxLenght={9}
                        placeholder="UF"
                        fieldWidth={30}
                        value={uf}
                    />
                </InputUFContainer>
            </ContainerForm>
        </ScrollForm>
    )
}