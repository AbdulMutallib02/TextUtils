import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className = "container" style={{color: props.mode===`dark`?`white`:`black`}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
             <textarea className="form-control" value = {text} onChange ={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`,
            cursor:`pointer`}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to uppercase</button>
           <button className="btn btn-primary mx-2" onClick= {handleLoClick}>Convert to lowercase</button>
           <button className="btn btn-primary mx-2" onClick= {handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode===`dark`?`white`:`black`}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
