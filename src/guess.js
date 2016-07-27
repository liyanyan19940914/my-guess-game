'use strict'
const AnswerGenerator=require('./answer-generate');
const CompareNUmber=require('./compare-number');
class Guess{
    static guess(input){
        const answer=AnswerGenerator.generate();
        return CompareNUmber.compare(input,answer);
    }
}
module.exports=Guess;