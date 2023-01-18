import React from 'react'



function Task3() {

    const [ value1, setValue1 ] = React.useState(null)
    const [ value2, setValue2 ] = React.useState(null)
    const [ value3, setValue3 ] = React.useState(null)
    const [ value4, setValue4 ] = React.useState(null)
    const [ value5, setValue5 ] = React.useState(null)
    const [ value6, setValue6 ] = React.useState(null)
    
    const [ resDate, setResDate ] = React.useState("-")
    const [ sum, setSum ] = React.useState(null)
    const [ pro, setPro ] = React.useState(null)
    const [ sum2, setSum2 ] = React.useState(null)
    const [ surname, setSurname ] = React.useState(null)

    function isPro(integer) {
        var result = 1;
        for (let i = 0; i <= integer; i++) {
          if (integer % i === 0) {
            result *= i;
          }
        }
    
        return result;
      }

    return (
    <div>
        <label>Введите 1 число:<br></br>
            <input  onChange = {event => setValue1(+event.target.value)}/>
        </label><br></br>
       
        
        <label>Введите 2 число:<br></br>
            <input  onChange = {event => setValue2(+event.target.value) } />
        </label><br></br>
        <button onClick = {() =>  setSum(value1 + value2)}>Вычислить сумму</button><br></br>
        <button onClick = {() =>  setSurname(value1 * value2)}>Вычислить произведение</button>

        <p>Сумма: {sum} </p>
        <p>Произведение: {surname}</p><hr></hr>

        <input type="date" value={value3} onChange={(event) => setValue3(event.target.value)}/>
        <input type="date" value={value4} onChange={(event) => setValue4(event.target.value)}/>
        <button onClick={() => setResDate((new Date(value4) - new Date(value3)) / (1000 * 60 * 60 * 24))}>Вычислить разницу</button>
        <p>Разница: {resDate} дней</p><hr></hr>

        <input value = {value5} onBlur={() =>setSum2(value5.toString().split('').reduce(function (a, b) {
                return a + parseInt(b);
              }, 0),)} 
              onChange = {event => setValue5(+event.target.value)}></input>
        <p>Сумма: {sum2}</p><hr></hr>

        <input value = {value6} onBlur = {(event) => setPro(isPro(event.target.value))} onChange = {event => setValue6(+event.target.value)}></input>
        <p>Произведение: {pro}</p>


    </div>
    )
}
export default Task3