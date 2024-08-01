import { getQuizQuestions, Answer, Question } from "../getQuizQuestions/getQuizQuestions";
import { Quiz } from "../Quiz/Quiz";

interface QuestionDisplayProp{
    question: Question;
}

export function QuestionDisplay(props: QuestionDisplayProp) {
    // const questions = getQuizQuestions();

    // const question = questions[Math.floor(Math.random() * questions.length)];

    // function updateCurrentIndex() {
    //     setCurrentIndex(currentIndex + 1);
    // }

    return (
        <div>
            {props.question.question} <br/>
            <input type="radio" name="answer" id="radio-button1" value="0" /> {props.question.answers[0].answer} <br/>
            <input type="radio" name="answer" id="radio-button2" value="1" /> {props.question.answers[1].answer} <br/>
            <input type="radio" name="answer" id="radio-button3" value="2" /> {props.question.answers[2].answer} <br/>
            {/* <button type="submit" className="submit-answer" onClick={() => updateCurrentIndex() }>Submit</button> */}
        </div>

    )
}