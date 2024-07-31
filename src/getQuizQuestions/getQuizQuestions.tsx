// 1. Where is Mars in the solar system?
// a. Fourth planet from the sun
// b. Next to Pluto
// c. Closer to the sun than Earth

// 2. What is a rover?
// a. a dog
// b. a robotic space vehicle
// c. a type of car

// 3. How many rovers have NASA sent to Mars?
// a. 5
// b. 4
// c. 20

// 4. Which of these lists names Mars rovers only?
// a. Resilience, Curiosity, Perseverance
// b. Sojourner, Oppertunity, Perseverance
// c. Discovery, Searcher, Pioneer

// 5. What are the Mars rovers looking for?
// a. Ares God of War
// b. Dead rovers
// c. Water


type Answer = {
    answer: string,
    isCorrect: boolean
}

type Question = {
    question: string,
    answers: Array<Answer>
}

export function getQuizQuestions() {
    const questions: Array<Question> = [
        {
            question: "Where is Mars in the solar system?", 
            answers: [
                {answer: "Fourth planet from the sun", isCorrect: true}, 
                {answer: "Next to Pluto", isCorrect: false}, 
                {answer: "Closer to the sun than Earth", isCorrect: false}
            ],
        },
        {
            question: "What is a rover?", 
            answers: [
                {answer: "A dog", isCorrect: false},
                {answer: "A robotic space vehicle", isCorrect: true},
                {answer: "A type of car", isCorrect: false}
            ]
        },
        {
            question: "Which of these lists real Mars rover names?",
            answers: [
                {answer: "Resilience, Curiosity, Perseverance", isCorrect: false},
                {answer: "Sojourner, Opportunity, Perseverance", isCorrect: true},
                {answer: "Discovery, Searcher, Pioneer", isCorrect: false}
            ]
        },
        {
            question: "How many rovers have NASA sent to Mars?",
            answers: [
                {answer: "5", isCorrect: true},
                {answer: "4", isCorrect: false},
                {answer: "20", isCorrect: false}
            ]
        },
        {
            question: "What are the Mars rovers looking for?",
            answers: [
                {answer: "Ares, God of War", isCorrect: false},
                {answer: "Dead rovers", isCorrect: false},
                {answer: "Water", isCorrect: true}
            ]
        }
    ]
    return questions
}

