import React from 'react';
import Question from './Question';
import { Text2 } from './Text';

const Form2 = props => {
  if(props.currentForm !== 2){
    return null;
  }
  const lenNum = props.len_questions;
  var elements = [];
  for (let i = 0; i <= lenNum; i++) {
    elements.push(
      <Question
        currentQuestion={props.currentQuestion}
        count={i}
        key={i}
        questionName={`Question ${i}`}
        name={`form-${props.currentForm}-question-${i}-answers`}
        handleChange={props.handleChange}
      />)
  }
  return (
    <div className="form-group">
      <Text2 />
      {elements}
    </div>
  )
}

export default Form2;