const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Leo'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

const filter = (...args) => {
    return args.filter(element => element === 1);
}

console.log(filter(1,2,3));
