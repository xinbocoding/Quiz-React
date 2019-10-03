import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

const FormIndex = props => {
  return (
    <div>
      <Form1
        currentQuestion={props.currentQuestion}
        currentForm={props.currentForm}
        len_questions={props.len_questions}
        handleChange={props.handleChange}
      />

      <Form2
        currentQuestion={props.currentQuestion}
        currentForm={props.currentForm}
        len_questions={props.len_questions}
        handleChange={props.handleChange}
      />
    </div>
  )
};

export default FormIndex;