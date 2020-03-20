import React, { useState, useEffect } from 'react'

export default props => {
    const [status, setParOuImpar] = useState('Par')
    const [contador, setContador] = useState(100)

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') :
            setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h1>{status}</h1>
            <button onClick = { () => setContador(contador + 1)}>Inc</button>
            <button onClick = { () => setContador(contador - 1)}>Dec</button>
        </div>
    )
}