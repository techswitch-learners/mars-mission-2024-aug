import { QuestionDisplay } from "../QuestionDisplay/QuestionDisplay"

interface getUserProp{
    username:string;
}

export function Quiz (props:getUserProp) {
    return (
        <div>
            User : {props.username}
            <QuestionDisplay/>
        </div>
    )
}