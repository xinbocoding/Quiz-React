import React from 'react';

const Question = props => {
  if (props.currentQuestion !== props.count) {
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
        <label htmlFor={`${props.name}-A`}>His work</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-B`}
          value="B"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-B`}>His family</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-C`}
          value="C"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-C`}>His Children</label>
      </div>
    </div>
  )
}

export default Question;