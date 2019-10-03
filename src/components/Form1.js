import React from 'react';
import Question from './Question';

const Form1 = props => {
  const lenNum = props.len_quesions;
  var elements = [];
  for (let i = 0; i <= lenNum; i++) {
    elements.push(
      <Question
        currentForm={props.currentForm}
        count={i}
        questionName={`Question ${i}`}
        name={`question-${i}-answers`}
        handleChange={props.handleChange}
      />)
  }
  return (
    <div className="form-group">
      {elements}
    </div>
  )
}

export default Form1;