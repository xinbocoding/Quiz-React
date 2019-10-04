import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';
import { quizQuestions } from '../../data/QuizData';

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

FormIndex.propTypes = {
  currentForm: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  len_questions: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default FormIndex;