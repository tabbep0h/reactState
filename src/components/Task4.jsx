import React from 'react'
import img5 from  '../assets/img/kot5.jpg'
import img3 from  '../assets/img/kot3.jpg'
import img4 from  '../assets/img/kot4.jpg'
import img6 from  '../assets/img/kot6.jpg'
import img7 from  '../assets/img/kot7.jpg'
import img8 from  '../assets/img/kot8.jpg'
import img9 from  '../assets/img/kot9.jpg'
import img10 from  '../assets/img/kot10.jpg'
import img11 from  '../assets/img/kot11.jpg'
import img2 from  '../assets/img/kot2.jpg'
import img14 from  '../assets/img/steve.jpg'

function Task4() {

  const imgdiv = <div>
                      <img width = "500" src={img2}></img>
                      <img width = "500" src={img3}></img>
                      <img width = "500" src={img4}></img>
                      <img width = "500" src={img5}></img>
                      <img width = "500" src={img6}></img>
                      <img width = "500" src={img7}></img>
                      <img width = "500" src={img8}></img>
                      <img width = "500" src={img9}></img>
                      <img width = "500" src={img10}></img>
                      <img width = "500" src={img11}></img>
                      <img width = "500" src={img14}></img>
                  </div>

  const [ checked, setChecked ] = React.useState(false)
  const [ checked2, setChecked2 ] = React.useState(false)
  const [ checkedLang1, setCheckedLang1 ] = React.useState(false)
  const [ checkedLang2, setCheckedLang2 ] = React.useState(false)
  const [ checkedLang3, setCheckedLang3 ] = React.useState(false)

  const [ checkedAdult, setCheckedAdult ] = React.useState(false)

  const [ res, setRes ] = React.useState(false)

  return (
    <div>
        <input type="checkbox" checked = {checked} onChange={() => setChecked(!checked)}/>
        <button onClick={() => setRes(checked)}>Проверка</button>
        <p>{res ? "hi" : "bye"}</p><hr></hr>

        <label>
          <input type="checkbox" checked = {checkedLang1} onChange={() => setCheckedLang1(!checkedLang1)}></input>
          <input type="checkbox" checked = {checkedLang2} onChange={() => setCheckedLang2(!checkedLang2)}></input>
          <input type="checkbox" checked = {checkedLang3} onChange={() => setCheckedLang3(!checkedLang3)}></input>
          <p>{checkedLang1 ? "CSS" : ""} {checkedLang2 ? "HTML" : ""} {checkedLang3 ? "JS" : ""}</p><hr></hr>
        </label>

        <label>Вам есть 18?
          <input type="checkbox" checked = {checkedAdult} onChange={() => setCheckedAdult(!checkedAdult)}></input>
        </label>
        <p>{ checkedAdult ? "Проходи,не задерживайся" : "Топай отсюда" }</p><hr></hr>

        <label>Нажмите,чтобы разблокировать содержимое страницы
          <input type="checkbox" checked = {checked2} onChange={() => setChecked2(!checked2)}></input>
        </label>
        <p>{ checked2 ? imgdiv : "" }</p><hr></hr>
    </div>
  )
}

export default Task4