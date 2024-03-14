import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was Clicked' + text);
        let newText =  text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log('Uppercase was Clicked' + text);
        let newText =  text.toLowerCase();
        setText(newText);
    }
    const findString = () => {
        if (text.match(text2)) {
            setText2('Matched');
        }else {
            setText2('Not Matched')
        }
    }
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }
    const handleOnChange2 = (event) => {
        console.log('On Change');
        setText2(event.target.value);
    }
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    // setText2('Matching');
    // text = "new text"; // Wrong way to change the state
    // setText('new text'); //Correct way to change the state
    return (
    <div>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="string-match mb-3">
                {/* <label for="fname">First name:</label>? */}
                <h5>Enter String here</h5>
                <input type="text" id="fname" value={text2} onChange={handleOnChange2} name="fname"/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text}  onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={findString}>String Matching</button>
        </div>
        <div className="container my-2">
            <h1>Your Text Summary here</h1>
            <p>{text.split(" ").length} words, and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
