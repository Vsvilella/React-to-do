const List = () => {
    const items = [{
      id:1,
        nome:"Vinicius"
    },
    {
        id: 2,
        nome:"Joao"
    },
    {
        id:3,
        nome:"Pedro"
    }
]
    
    return(
        <div>
            {items.map((item) => (
                <p key={item.id}>{item.id} - {item.nome}</p>
            ))}
        </div>
    )
}

export default List;