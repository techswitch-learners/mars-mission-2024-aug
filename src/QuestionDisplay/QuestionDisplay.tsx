import { getQuizQuestions } from "../getQuizQuestions/getQuizQuestions";

export function QuestionDisplay() {
    const questions = getQuizQuestions();

    const question = questions[Math.floor(Math.random() * questions.length)];

    return (
        <div>
            {question.question}
            <input type="radio" id="radio-button" /> {question.answers[0].answer}
            <input type="radio" id="radio-button" /> {question.answers[1].answer}
            <input type="radio" id="radio-button" /> {question.answers[2].answer}
        </div>

    )
}