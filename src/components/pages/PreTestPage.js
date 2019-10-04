import React from 'react';
import PropTypes from 'prop-types';
import {quizQuestions} from '../../data/QuizData';
import FormIndex from '../elements/FormIndex';

const len_questions1 = quizQuestions[0].length;
const len_questions2 = quizQuestions[1].length;

class PreTestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      currentForm: 1,
      len_questions: len_questions1,
    }
    this.handleChange = this.handleChange.bind(this);
    this._nextQuestion = this._nextQuestion.bind(this);
    this._nextForm = this._nextForm.bind(this);
  }

  _nextQuestion() {
    let currentQuestion = this.state.currentQuestion;
    let len = this.state.len_questions;
    currentQuestion = currentQuestion > len ? len : currentQuestion + 1;
    this.setState({
      currentQuestion: currentQuestion
    })
  }

  _nextForm() {
    let currentForm = this.state.currentForm;
    let currentQuestion = this.state.currentQuestion;
    if(currentForm >= 2) {
      currentForm = 2;
    }else{
      currentForm += 1;
      currentQuestion = 1;
    }
    this.setState({
      currentForm: currentForm,
      len_questions: len_questions2,
      currentQuestion: currentQuestion
    })
  }

  get nextButton(){
    let currentQuestion = this.state.currentQuestion;
    let len = this.state.len_questions;
    if(currentQuestion < len){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._nextQuestion}>
        Next
        </button>        
      )
    } else if(currentQuestion === len){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._nextForm}>
        Next content
        </button> 
      )
    }
    return null;
  }

  handleChange(event) {
    const { name, value } = event.target;
    localStorage.setItem(event.target.name, value);
    this.setState(
      { [name]: value })
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <FormIndex 
            currentQuestion={this.state.currentQuestion}
            currentForm={this.state.currentForm}
            len_questions={this.state.len_questions}
            handleChange={this.handleChange}
          />
          {this.nextButton}
        </form>
      </React.Fragment>
    );
  }
}

PreTestPage.propTypes = {
  currentQuestion: PropTypes.number,
  currentForm: PropTypes.number,
  len_questions: PropTypes.number,
  handleChange: PropTypes.func,
  _nextQuestion: PropTypes.func,
  _nextForm: PropTypes.func
}
export default PreTestPage;