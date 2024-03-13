import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was Clicked' + text);
        let newText =  text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    // text = "new text"; // Wrong way to change the state
    // setText('new text'); //Correct way to change the state
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text}  onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
