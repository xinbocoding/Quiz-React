import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor={`${props.name}-A`}>{props.quizquestions[0].content}</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-B`}
          value="B"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-B`}>{props.quizquestions[1].content}</label>
      </div>
      <div className="item">
        <input type='radio'
          name={props.name}
          id={`${props.name}-C`}
          value="C"
          onChange={props.handleChange} />
        <label htmlFor={`${props.name}-C`}>{props.quizquestions[2].content}</label>
      </div>
    </div>
  )
}

Question.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  questionName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  quizquestions: PropTypes.array.isRequired
}

export default Question;