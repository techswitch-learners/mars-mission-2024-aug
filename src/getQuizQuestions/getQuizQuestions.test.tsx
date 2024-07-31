import { getQuizQuestions } from "./getQuizQuestions";

test('quiz questions are returned by the function', () => {
    const questions = getQuizQuestions();
    expect(questions[0].question).toBe("Where is Mars in the solar system?")
})