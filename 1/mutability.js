const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

const clone1 = Object.assign({},person);
const clone2 = Object.assign({},person);
const samePerson = person;
samePerson.age += 1;
samePerson.country = 'FR';



console.log(person, clone1, clone2, samePerson, person);