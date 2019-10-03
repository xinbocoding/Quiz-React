import React from 'react';

const Form2 = () => {
        return (
            <div>
                <h2>This is the content of the seconde question</h2>
                <form method="post">
                    <ul>
                        <h3>question 1</h3>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-A" value="A" />
                            <label htmlFor="question-1-answers-A">A answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-B" value="B" />
                            <label htmlFor="question-1-answers-B">B answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-C" value="C" />
                            <label htmlFor="question-1-answers-A">C answer</label>
                        </div>
                        <h3>question 2</h3>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-A" value="A" />
                            <label htmlFor="question-1-answers-A">A answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-B" value="B" />
                            <label htmlFor="question-1-answers-B">B answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-C" value="C" />
                            <label htmlFor="question-1-answers-A">C answer</label>
                        </div>
                        <h3>question 3</h3>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-A" value="A" />
                            <label htmlFor="question-1-answers-A">A answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-B" value="B" />
                            <label htmlFor="question-1-answers-B">B answer</label>
                        </div>
                        <div>
                            <input type='radio' name="question-1-answers" id="question-1-answers-C" value="C" />
                            <label htmlFor="question-1-answers-A">C answer</label>
                        </div>
                    </ul>
                </form>
            </div>
        )
    }

export default Form2;