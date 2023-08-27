function FirsComponent (){

const handleClick = () => {
    console.log("Clicou no botão!");
};

    return(
        //Nao posso ter 2 elementos pai no retorno do react
        <div className="FirsComponent">
            <p>Paragrafo</p>
            <button onClick={handleClick}>Clique aqui!</button>
            <hr></hr>
            <button onClick={() => console.log("Clicou no botao 2")}> Botao 2</button>
        </div>
    )
}

export default FirsComponent