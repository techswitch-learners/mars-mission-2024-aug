// questions = [{"Where is Mars in the solar system?" : [{"Fourth planet from the sun" : true}, {"Next to Pluto" : false}, {"Closer to the sun than Earth" : false}]},
// {"What is a rover?": [{"A dog" : false}, {"A robotic space vehicle" : true}, {"A type of car" : false}]},
// {"How many rovers have NASA sent to Mars?": [{"5": true}, {"4": false}, {"20": false}]},
// {"Which of these lists real Mars rover names?": [{"Resilience, Curiosity, Perseverance": false}, {"Sojourner, Oppertunity, Perseverance" : true}, {"Discovery, Searcher, Pioneer" : false}]},
// {"What are the Mars rovers looking for?": [{"Ares God of War": false}, {"Dead rovers": false}, {"Water": true}]}]
// import getQuestions from './somewhere';

export function QuestionDisplay() {
    // const questions = getQuestions();
    const questions = [{"Where is Mars in the solar system?" : [{"Fourth planet from the sun" : true}, {"Next to Pluto" : false}, {"Closer to the sun than Earth" : false}]},
    {"What is a rover?": [{"A dog" : false}, {"A robotic space vehicle" : true}, {"A type of car" : false}]},
    {"How many rovers have NASA sent to Mars?": [{"5": true}, {"4": false}, {"20": false}]},
    {"Which of these lists real Mars rover names?": [{"Resilience, Curiosity, Perseverance": false}, {"Sojourner, Opportunity, Perseverance" : true}, {"Discovery, Searcher, Pioneer" : false}]},
    {"What are the Mars rovers looking for?": [{"Ares God of War": false}, {"Dead rovers": false}, {"Water": true}]}];

    const question = questions[Math.floor(Math.random() * questions.length)];

    return (
        <></>
    )

}