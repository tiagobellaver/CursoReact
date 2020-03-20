import React from "react"


export default props => {

    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    const geraItens = itens => {

        return itens.map(item => <li>{item}</li>)

    }

    return (
        <ul>
            {geraItens(aprovados)}
        </ul>
    )
}