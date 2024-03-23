import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) // first letter to UpperCase and Rest of letter concatinated except first letter
    }
    const uncapitalize = (word)=> {
        let lower = word.toLowerCase();
        return lower;
    }

  return (
    // Here resolved Commulative Layout shift Problem on line 15 in alert.js , due to alert there was shifting up down
    <div style={{height: '50px'}}> 
      {props.alert && <div className={`alert alert-${uncapitalize(props.alert.type)} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
