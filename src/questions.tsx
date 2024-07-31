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

export function getQuizQuestions() {
    const questions : Array<Object> = [
        {"Where is Mars in the solar system?" : [{"Fourth planet from the sun" : true}, {"Next to Pluto" : false}, {"Closer to the sun than Earth" : false}]},
        {"What is a rover?": [{"A dog" : false}, {"A robotic space vehicle" : true}, {"A type of car" : false}]},
        {"How many rovers have NASA sent to Mars?": [{"5": true}, {"4": false}, {"20": false}]},
        {"Which of these lists real Mars rover names?": [{"Resilience, Curiosity, Perseverance": false}, {"Sojourner, Oppertunity, Perseverance" : true}, {"Discovery, Searcher, Pioneer" : false}]},
        {"What are the Mars rovers looking for?": [{"Ares God of War": false}, {"Dead rovers": false}, {"Water": true}]}
    ]
    return questions
}