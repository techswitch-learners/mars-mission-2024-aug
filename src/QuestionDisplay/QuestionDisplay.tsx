import { getQuizQuestions } from "../getQuizQuestions/getQuizQuestions";

export function QuestionDisplay() {
    const questions = getQuizQuestions();

    const question = questions[Math.floor(Math.random() * questions.length)];

    return (
        <>
            
        </>

    )
}