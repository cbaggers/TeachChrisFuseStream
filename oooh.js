const Observable = require('FuseJS/Observable')
const people = Observable()

function fetchPeople(observable){
    fetch("http://www.radfaces.com/public/radfaces.json")
        .then(result => result.json())
        .then(result => observable.replaceAll(result))
}

module.exports = {
    getPeople : () => { 
        if(people.length==0)
            fetchPeople(people)
        return people 
    }
}