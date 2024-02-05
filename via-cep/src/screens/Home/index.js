import { useEffect, useState } from "react";
import { ContainerInput } from "../../components/ContainerInput";
import { InputUFContainer } from "../../components/ContainerInput/style";
import { ContainerForm, ScrollForm } from "./style";
import axios from "axios";

export function Home() {

    // states - variáveis
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    // useEffect - funções
    useEffect(() => {
        const buscaApi = async () => {
            if (cep !== "") {
                try {
                    // responsável por fazer a requisição no site da ViaCep
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = response.data;
                    if (!data.erro) {
                        setLogradouro(data.logradouro);
                        setBairro(data.bairro);
                        setCidade(data.localidade);
                        setEstado(data.uf);
                        setUf(data.uf)
                    } else {
                        alert("Verifique o CEP");
                    }
                } catch (error) {
                    console.log("Erro ao buscar CEP", error);
                }
            }
        };
        buscaApi();
        // chamada do "cep" no array de dependências, afim que o aplicativo não fique sobrecarregado!
    }, [cep]);


    return (
        // retorno dos elementos na tela!
        <ScrollForm>
            <ContainerForm>
                <ContainerInput
                    textLabel="Informar CEP"
                    placeholder="Cep..."
                    editable={true}
                    keyboardType="numeric"
                    maxLenght={9}
                    value={cep}
                    // ao apertar do botão: 
                    onChangeText={(e) => setCep(e)}
                />
                <ContainerInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldWidth={100}
                    value={logradouro}
                    onChangeText={(e) => setCep(e)}
                />
                <ContainerInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldWidth={100}
                    value={bairro}
                    onChangeText={(e) => setCep(e)}
                />
                <ContainerInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldWidth={100}
                    value={cidade}
                    onChangeText={(e) => setCep(e)}
                />
                <InputUFContainer>
                    <ContainerInput
                        textLabel="Estado"
                        maxLenght={9}
                        placeholder="Estado"
                        fieldWidth={60}
                        value={estado}
                        onChangeText={(e) => setCep(e)}
                    />
                    <ContainerInput
                        textLabel="UF"
                        maxLenght={9}
                        placeholder="UF"
                        fieldWidth={30}
                        value={uf}
                        onChangeText={(e) => setCep(e)}
                    />
                </InputUFContainer>
            </ContainerForm>
        </ScrollForm>
    )
}