import React from 'react'

function Task1() {
    
const [ name, setName ] = React.useState("Иван")
const [ surname, setSurname ] = React.useState("Иванов")
const [ age, setAge ] = React.useState(16)
const [ ban, setBan ] = React.useState(false)

return (
    <div>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{age}</p>
        <button onClick = {() => setName("Петр")}>Петр</button>
        <button onClick = {() => setSurname("Петров")}>Петров</button>
        <p>{ban ? "забанен" : "не забанен"}</p>
        <button onClick = {() => (setBan(!ban))}>{ban ? "разбанить" : "забанить"}</button><br></br>
        <button onClick = {() => setAge((prev) => prev + 1)}>+1</button>
        <button onClick = {() => setAge((prev) => prev - 1)}>-1</button>
    </div>
  )
}

export default Task1
