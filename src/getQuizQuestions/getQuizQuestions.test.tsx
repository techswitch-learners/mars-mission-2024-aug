import { getQuizQuestions } from "./getQuizQuestions";

test('quiz questions are returned by the function', () => {
    const questions = getQuizQuestions();
    expect(questions[0].question).toBe("Where is Mars in the solar system?")
})

test('three answers are returned for a question by the function', () => {
    const questions = getQuizQuestions();
    expect(questions[2].answers.length).toBe(3);
})

test('that a false answer is returned by the function', () => {
    const questions = getQuizQuestions();
    expect(questions[1].answers[2].isCorrect).toBe(false);
})

test('that a true answer is returned by the function', () => {
    const questions = getQuizQuestions();
    expect(questions[1].answers[1].isCorrect).toBe(true);
})