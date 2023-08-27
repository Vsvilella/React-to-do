import {useState} from "react";

const Hooks = () => {
    
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    function changeAge(){
        idade = 31;
        console.log(idade);
    }

    function changeNewAge (){
        setNovaIdade(45);
    }
    return (
        <div>
            <p> Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p> Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar idade</button>
        </div>
    )
}
export default Hooks