import React from 'react';
import { quizQuestions1, quizQuestions2 } from './data/QuizData';
import FormIndex from './components/FormIndex';

const len_questions1 = quizQuestions1.length;
const len_questions2 = quizQuestions2.length;

class App extends React.Component {
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
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { answer1 } = this.state
    console.log(answer1)
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
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

export default App;
