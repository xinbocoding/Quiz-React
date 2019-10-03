import React from 'react';

const Question = props => {
  if (props.currentForm != props.count) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="item">
        <h3>{props.questionName}</h3>
        <input
          type='radio'
          name={props.name}
          id={`${props.name}-A`}
          value="A"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-A`}>A answer</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-B`}
          value="B"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-B`}>B answer</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-C`}
          value="C"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-C`}>C answer</label>
      </div>
    </div>
  )
}

export default Question;