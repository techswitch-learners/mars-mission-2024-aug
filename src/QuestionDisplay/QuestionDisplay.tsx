import { getQuizQuestions } from "../getQuizQuestions/getQuizQuestions";

export function QuestionDisplay() {
    const questions = getQuizQuestions();

    const question = questions[Math.floor(Math.random() * questions.length)];

    return (
        <div>
            {question.question} <br/>
            <input type="radio" name="answer" id="radio-button1" value="0" /> {question.answers[0].answer} <br/>
            <input type="radio" name="answer" id="radio-button2" value="1" /> {question.answers[1].answer} <br/>
            <input type="radio" name="answer" id="radio-button3" value="2" /> {question.answers[2].answer} <br/>
        </div>

    )
}