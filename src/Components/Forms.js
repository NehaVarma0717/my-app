import React ,{useState}from 'react'

export default function Forms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext=text.toUpperCase();
    setText(newtext);
   props.showAlert("Converted to upperCase","success");
  }
  const cleartext = () => {
    let newtext=("");
    setText(newtext);

  }
 const handleCopy = () => {
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
       props.showAlert("Copy text to clipboard","success");

  }
  const handleSpace = () => {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
       props.showAlert("Remove the extra spacess","success");

  }

   const OnChangeEnvet = (event) => {
      setText(event.target.value);
   }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h5>{props.heading}</h5>
          <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white',
            color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="6" onChange={OnChangeEnvet}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra space</button>
      <button className="btn btn-primary mx-2" onClick={cleartext}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008 *text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preivew here"}</p>
    </div>
    </>
  )
}
