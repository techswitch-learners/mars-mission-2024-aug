import { Question } from "../getQuizQuestions/getQuizQuestions";

interface QuestionDisplayProp{
    question: Question;
}

export function QuestionDisplay(props: QuestionDisplayProp) {

    return (
        <div>
            {props.question.question} <br/>
            <input type="radio" name="answer" id="radio-button1" value="0" /> {props.question.answers[0].answer} <br/>
            <input type="radio" name="answer" id="radio-button2" value="1" /> {props.question.answers[1].answer} <br/>
            <input type="radio" name="answer" id="radio-button3" value="2" /> {props.question.answers[2].answer} <br/>
        </div>

    )
}