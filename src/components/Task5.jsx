import React from 'react'

function Task5() {
  
  const texts = ["Москва","Соледар","Альбукерке","Вегас"]
  
  const ages = ["от 0 до 12","от 13 до 17","от 18 до 25","от 26 и старше"]


  const [ value ,setValue ] = React.useState('')
  const [ value2 ,setValue2 ] = React.useState('')
  const [ value3 ,setValue3 ] = React.useState('')
  const [ value4 ,setValue4 ] = React.useState('')

  const options = texts.map((text,index) => {
        return <option key = { index } value = { index }>{ text }</option>
  })

  const text = texts.map((text,index) => {
    return <p key = { index }>{ text }</p>
})

  const options2 = ages.map((text,index) => {
    return <option key = { index } value = { index }>{ text }</option>
 })

let text2
if (value3 == 1){
    text2 = "1-text-1"
}   else if (value3 == 2){
    text2 = "2-text-2"
}   else if (value3 == 3){
    text2 = "3-text-3"
}   else {
    text2 = ""
}

let text3 
if (value4 ==1){
    text3 = "Python"
}   else if (value4 == 2){
    text3 = "HTML"
}   else if (value4 == 3){
    text3 = "JS,отличный выбор"
}   else {
    text3 = ""
}
  return (
    <div>
        <select value = {value} onChange = {event => setValue(event.target.value)}>
            {options}
        </select>
        <p>ваш выбор:{texts[value]}</p><hr></hr>

        <p>{text}</p><hr></hr>

        <select value = {value2} onChange = {event => setValue2(event.target.value)}>
            {options2}
        </select>
        <p>ваш выбор:{ages[value2]}</p><hr></hr>

        <input type="radio" name='radio' value = "1" checked={value3 === '1' ? true : false} onChange = {event => setValue3(event.target.value)} />
        <input type="radio" name='radio' value = "2" checked={value3 === '2' ? true : false} onChange = {event => setValue3(event.target.value)} />
        <input type="radio" name='radio' value = "3" checked={value3 === '3' ? true : false} onChange = {event => setValue3(event.target.value)} />

        <p>{value3}</p><hr></hr>

        <input type="radio" name='radio' value = "1" checked={value4 === '1' ? true : false} onChange = {event => setValue4(event.target.value)} />
        <input type="radio" name='radio' value = "2" checked={value4 === '2' ? true : false} onChange = {event => setValue4(event.target.value)} />
        <input type="radio" name='radio' value = "3" checked={value4 === '3' ? true : false} onChange = {event => setValue4(event.target.value)} />

        <p>Ваш любимый язык программирования:{text3}</p>
    </div>
  )
}

export default Task5