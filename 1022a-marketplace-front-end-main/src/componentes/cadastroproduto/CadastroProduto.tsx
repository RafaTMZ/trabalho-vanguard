import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
function CadastroProduto(){
    const navigate = useNavigate()
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [modelo, setModelo] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [marca, setMarca] = useState("");
    const [iluminacaoRGB, setIluminacaoRGB] = useState("");
    const [peso, setPeso] = useState("");
    const [cor, setCor] = useState("");    
    async function handleForm(event:FormEvent){
        event.preventDefault()
        try{
            const resposta = await fetch("http://localhost:8000/produtos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id: id,
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    imagem: imagem,
                    modelo: modelo,
                    tamanho: tamanho,
                    marca: marca,
                    iluminacaoRGB: iluminacaoRGB,
                    peso: peso,
                    cor: cor
                })
            })
            if(resposta.status!=500){
                alert("Produto Cadastro com Sucesso")
                navigate("/")
            }
            else{
                const mensagem = await resposta.text()
                alert("Erro ao Cadastrar Produto - Error: "+mensagem)
            }
        }
        catch(e){
            alert("Servidor não está respondendo.")
        }
        
    }
    function handleId(event: ChangeEvent<HTMLInputElement>){
        setId(event.target.value);
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>){
        setNome(event.target.value);
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value);
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value);
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value);
    }
    function handleModelo(event: ChangeEvent<HTMLInputElement>){
        setModelo(event.target.value);
    }
    function handleTamanho(event: ChangeEvent<HTMLInputElement>){
        setTamanho(event.target.value);
    }
    function handleMarca(event: ChangeEvent<HTMLInputElement>){
        setMarca(event.target.value);
    }
    function handleIluminacaoRGB(event: ChangeEvent<HTMLInputElement>){
        setIluminacaoRGB(event.target.value);
    }
    function handlePeso(event: ChangeEvent<HTMLInputElement>){
        setPeso(event.target.value);
    }
    function handleCor(event: ChangeEvent<HTMLInputElement>){
        setCor(event.target.value);
    }
    
        <>
            <h1>Meu Componente de Cadastro de Produtos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                </div>
                <div>
                    <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                </div>
                <div>
                    <input placeholder="Descrição" type="text" name="descricao" id="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <input placeholder="Preço" type="text" name="preco" id="preco" onChange={handlePreco} />
                </div>
                <div>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                </div>
                <div>
                    <input placeholder="Modelo" type="text" name="modelo" id="modelo" onChange={handleModelo} />
                </div>
                <div>
                    <input placeholder="Tamanho" type="text" name="tamanho" id="tamanho" onChange={handleTamanho} />
                </div>
                <div>
                    <input placeholder="Marca" type="text" name="marca" id="marca" onChange={handleMarca} />
                </div>
                <div>
                    <input placeholder="Iluminação RGB" type="text" name="iluminacaoRGB" id="iluminacaoRGB" onChange={handleIluminacaoRGB} />
                </div>
                <div>
                    <input placeholder="Peso" type="text" name="peso" id="peso" onChange={handlePeso} />
                </div>
                <div>
                    <input placeholder="Cor" type="text" name="cor" id="cor" onChange={handleCor} />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default CadastroProduto