import { QuestionDisplay } from "../QuestionDisplay/QuestionDisplay"

interface QuizProps{
    username:string;
}

export function Quiz (props:QuizProps) {
    return (
        <div>
            User : {props.username}
            <QuestionDisplay/>
        </div>
    )
}