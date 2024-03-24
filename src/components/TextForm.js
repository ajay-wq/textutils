import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was Clicked' + text);
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to UpperCase", "Success");
    }
    const handleLoClick = () => {
        // console.log('Uppercase was Clicked' + text);
        let newText =  text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to LowerCase", "Success");
    }
    const findString = () => {
        if (text.match(text2)) {
            setText2('Matched');
            props.showAlert("String Matched", "Success");
        }else {
            setText2('Not Matched')
            props.showAlert("String is not Matching", "Success");
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
        <div className="container" style={{color: props.mode === 'dark'?'white':'#2b2c47'}}>
            <h1>{props.heading}</h1>
            <div className="string-match mb-3">
                {/* <label for="fname">First name:</label>? */}
                <h5>Enter String here</h5>
                <input type="text" id="fname" value={text2} onChange={handleOnChange2} name="fname"/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#2b2c47'}} rows="8"></textarea>
            </div>
            <button  disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button  disabled={text.length === 0}className="btn btn-primary mx-2 my-1" onClick={findString}>String Matching</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#2b2c47'}}>
            <h1>Your Text Summary here</h1>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words, and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Nothing to Preview'}</p>
        </div>
    </div>
  )
}
