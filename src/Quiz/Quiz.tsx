import { QuestionDisplay } from "../QuestionDisplay/QuestionDisplay"
import { getQuizQuestions } from "../getQuizQuestions/getQuizQuestions"
import { useState, useEffect } from "react";


export function Quiz () {
    const listOfQuestions = getQuizQuestions();

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [buttonText, setButtonText] = useState<string>("Next");
    
    const question = listOfQuestions[currentIndex]
    
    useEffect(() => {
        if (currentIndex === listOfQuestions.length-1) {
            setButtonText("Finish")
        }
    }, [currentIndex]);
    

    let lastQuestion = false;
    
    function updateCurrentIndex() {
        if (currentIndex < listOfQuestions.length-1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <div>
            <QuestionDisplay question={question}/>
            <button type="submit" className="quiz-button" onClick={() => updateCurrentIndex()}>{buttonText}</button>
        </div>
    )
}