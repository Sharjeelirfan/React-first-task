import { useState } from 'react'
import './App.css'

function App() {
  let [inputText , setInputText] = useState("")
  let [list , setList] = useState(["sharjeel" , "ahmed"])
  let [editIndex , setEditIndex] = useState(null)
  let [bgColor, setBgColor] = useState("#242424");
  let [theme , setTheme] = useState("")
  let [color , setColor] = useState("")
  let [inputColor , setInputColor] = useState("")

  let handleInput = (e) =>{
    setInputText(e.target.value)
  }
  let addText = () =>{
    let copyList = [...list]

    if(editIndex !== null){
      copyList[editIndex] = inputText
      setInputText(copyList)  
      setEditIndex(null)
    }else{
      if(inputText.trim()){
        copyList.push(inputText)
      }else{
        alert("enter text")
      }
    }
    setList(copyList)
    setInputText("")
  }
  

  let deleteText = (index) =>{
    // console.log("ok");
    let copyList = [...list]
    copyList.splice(index , 1)
    setList(copyList)
    
  }

  let editText = (index) =>{
    setInputText(list[index])
    setEditIndex(index)
    

  }

  let changeTheme = () =>{
    
    setTheme("dark")
    
    if(theme === "dark" ) {
      setTheme("light")
      setBgColor("#242424");
      setColor("white")
      setInputColor("white")
    }else{
      setTheme("dark")
      setBgColor("white")
      setColor("#242424");
      setInputColor("#242424");
    }


  }

  return (
    <>
      <div style={{ margin:"0px", padding: "0px ", textAlign: "center",height:"100vh", width: "100%", backgroundColor: bgColor  }}>
        <h1 style={{color : color}} >Todo List</h1>
        <button onClick={changeTheme}>{theme == "dark" ? "Dark" : "Light"}</button>

        <div>
          <input
            id="input"
            value={inputText}
            style={{backgroundColor: inputColor , color: bgColor}}
            onChange={handleInput}
            type="text"
          />
          <button id="addBtn" onClick={addText}>
            {editIndex === null ? "Add" : "Update"}
          </button>
        </div>

        <div id="listDiv">
          <ul id="list" style={{border : "3px solid" , borderColor: color}}>
            {list.map((data, index) => {
              return (
                <li style={{color:color  }} key={index}>
                  <span>{data}</span>
                  <div>
                    <button onClick={() => deleteText(index)}>Delete</button>
                    <button onClick={() => editText(index)}>Edit</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
