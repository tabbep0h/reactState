import React from 'react'

function Task2() {
  const [ value1, setValue1 ] = React.useState(null)
  const [ value2, setValue2 ] = React.useState(null)
  const [ value3, setValue3 ] = React.useState(null)
  const [ value4, setValue4 ] = React.useState(null)
  const [ value5, setValue5 ] = React.useState(null)

  const [ value6, setValue6 ] = React.useState(null)
  const [ value7, setValue7 ] = React.useState(null)
  const [ value8, setValue8 ] = React.useState(null)
  const [ value9, setValue9 ] = React.useState(null)
  const [ value10, setValue10 ] = React.useState(null)
  
  const [ name, setnName ] = React.useState(null)
  const [ surname, setSurname ] = React.useState(null)

  const [ ban, setBan ] = React.useState(false)

return (
  <div>
      <label>Введите имя:<br></br>
        <input  onChange = {event => setValue1(+event.target.value)}/>
      </label>
      <button onClick = {() => setnName(value1)}>Установить имя</button><br></br>
      
      <label>Введите фамилию:<br></br>
        <input  onChange = {event => setValue2(+event.target.value) } />
      </label>
      <button onClick = {() => setSurname(value2)}>Установить фамилию</button>

      <p>Имя: {name} </p>
      <p>Фамилия: {surname}</p>

      <p>Input1: {value1} </p>
      <p>Input2: {value2} </p><hr></hr>

      <input onChange = {event => setValue3(+event.target.value.length)}></input>
      <p>Length: {value3}</p>
      
      <button onClick = {() => (setBan(!ban))}>{ban ? "разбанить" : "забанить"}</button>
      <p>{ban ? "забанен" : "не забанен"}</p><hr></hr>

      <input onChange = { event => setValue4(+event.target.value) } type = "text"></input>
      <p>Year: {(2023 - value4)}</p><hr></hr>

      <label>°F:
        <input onChange = { event => setValue5(+event.target.value)  } type = "text"></input>
      </label>
      
      <p>{Math.round((5 / 9) * (value5- 32))}°С</p><hr></hr>
      
      <input onChange = {event => setValue6(+event.target.value) }/>
      <input onChange = {event => setValue7(+event.target.value) }/>
      <input onChange = {event => setValue8(+event.target.value)}/>
      <input onChange = {event => setValue9(+event.target.value) }/>
      <input onChange = {event => setValue10(+event.target.value) }/>
  
      <p>{(value6 + value7 + value8 + value9 + value10) / 5}</p>
      
  </div>
)

}

export default Task2