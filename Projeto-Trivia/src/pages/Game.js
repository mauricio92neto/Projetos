import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestionsFromApi, getTokenFromApi } from '../services/requestApi';
import Timer from '../components/Timer';
import { scoreData, assertionsData } from '../redux/actions';
import Header from '../components/Header';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      nullToken: false,
      questions: [],
      index: 0,
      next: false,
      showNextButton: false,
    };
  }

  componentDidMount() {
    const { index } = this.state;
    if (localStorage.getItem('token') === null) {
      localStorage.removeItem('token');
      this.setState({ nullToken: true });
    } else {
      const token = localStorage.getItem('token');
      getQuestionsFromApi(token).then((response) => {
        const codeError = 3;
        if (response.response_code === codeError) {
          getTokenFromApi().then((tokenResponse) => {
            localStorage.setItem('token', tokenResponse.token);
            this.setState({ nullToken: true });
          });
        } else {
          const question = response.results[index];
          const newRandom = this
            .generateRandomNumber(question.incorrect_answers.length + 1);
          const answers = [...question.incorrect_answers];
          answers.splice(
            newRandom,
            0,
            question.correct_answer,
          );
          this.setState(() => ({
            questions: response.results,
            options: answers,
          }));
        }
      });
    }
  }

  generateRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

  getNextOptions = () => {
    const { questions, index } = this.state;
    const next = index + 1;
    const question = questions[next];
    const answers = [...question.incorrect_answers];
    const newRandom = this.generateRandomNumber(question.incorrect_answers.length + 1);
    answers.splice(
      newRandom,
      0,
      question.correct_answer,
    );
    this.setState({ options: answers });
  }

  nextQuestion = () => {
    const { index } = this.state;
    const num = 4;
    if (index === num) {
      const { history } = this.props;
      history.push('/feedback');
    } else {
      this.setState((prevState) => ({ index: prevState.index + 1, next: false }),
        this.getNextOptions());
    }
  }

  checkColor = () => {
    const { next } = this.state;
    this.setState({ next: !next, showNextButton: true });
  }

  render() {
    const { nullToken, questions, index, options, next, showNextButton } = this.state;
    const { userScore, userAssertions, timer } = this.props;
    let indexData = 0;
    return (
      <div>
        { nullToken && <Redirect to="/" />}
        <Header />
        {questions.length > 0 && (
          <div>
            <Timer />
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            <div data-testid="answer-options">
              {options.map((answer) => {
                let dataId = '';
                if (answer === questions[index].correct_answer) {
                  return (
                    <button
                      key={ answer }
                      id={ answer }
                      type="button"
                      data-testid="correct-answer"
                      style={ {
                        border: next ? '3px solid rgb(6, 240, 15)' : '' } }
                      onClick={ () => {
                        this.checkColor();
                        userScore();
                        userAssertions();
                      } }
                      disabled={ timer }
                    >
                      {answer}
                    </button>
                  );
                }
                dataId = `wrong-answer-${indexData}`;
                indexData += 1;
                return (
                  <button
                    key={ answer }
                    type="button"
                    data-testid={ dataId }
                    style={ {
                      border: next ? '3px solid red' : '' } }
                    onClick={ this.checkColor }
                    disabled={ timer }
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
            { showNextButton && (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ this.nextQuestion }
              >
                Next
              </button>

            ) }
          </div>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  timer: PropTypes.bool,
  userScore: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  timer: state.timer.secondTime,
});

const mapDispatchToProps = (dispatch) => ({
  userScore: (score) => dispatch(scoreData(score)),
  userAssertions: (assert) => dispatch(assertionsData(assert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
