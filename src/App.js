import React from 'react';
import QuizData from './data/QuizData';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Contents from './components/Contents';

const len_quesions = QuizData.length;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 1,
      len_quesions: len_quesions
    }
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
  }

  _next() {
    let currentForm = this.state.currentForm;
    let len = this.state.len_quesions;
    currentForm = currentForm > len ? len : currentForm + 1;
    this.setState({
      currentForm: currentForm
    })
  }

  get nextButton(){
    let currentForm = this.state.currentForm;
    let len = this.state.len_quesions;
    if(currentForm < len){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    } else if(currentForm == len){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" >
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
    const { answer1, answer2 } = this.state
    console.log(answer1)
  }

  render() {
    return (
      <React.Fragment>
        <Contents />
        <form onSubmit={this.handleSubmit}>
          <Form1
            currentForm={this.state.currentForm}
            len_quesions={this.state.len_quesions}
            handleChange={this.handleChange}
          />
          {this.nextButton}
        </form>
      </React.Fragment>
    );
  }
}

export default App;
