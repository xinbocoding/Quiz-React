import React from 'react';
import Question from './Question';
import { Text1 } from './Text';

const Form = props => {
  if(props.currentForm !== props.formCount){
    return null;
  }
  const lenNum = props.len_questions;
  var elements = [];
  for (let i = 1; i <= lenNum; i++) {
    elements.push(
      <Question
        currentQuestion={props.currentQuestion}
        count={i}
        key={i}
        questionName={props.quizquestions[i-1].question}
        name={`form-${props.currentForm}-question-${i}-answers`}
        quizquestions={props.quizquestions[i-1].answers}
        handleChange={props.handleChange}
      />)
  }
  return (
    <div className="form-group">
      <Text1 />
      {elements}
    </div>
  )
}

export default Form;