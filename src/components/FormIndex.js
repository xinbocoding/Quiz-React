import React from 'react';
import Form from './Form';
import { quizQuestions } from '../data/QuizData';

const FormIndex = props => {
  const quizquestions = quizQuestions;

  var forms = [];
  for(let i=1; i<=props.currentForm; i++) {
    forms.push(
      <Form
        key={i}
        currentQuestion={props.currentQuestion}
        currentForm={props.currentForm}
        formCount={i}
        questionName={quizquestions}
        len_questions={props.len_questions}
        handleChange={props.handleChange}
        quizquestions={quizquestions[i-1]}
      />
    )
  }
  return (
    <div>
      {forms}
    </div>
  )
};

export default FormIndex;