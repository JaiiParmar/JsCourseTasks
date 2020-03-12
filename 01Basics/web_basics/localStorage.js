

localStorage.setItem('hero','Thor')
localStorage.setItem('todo', 'Buy Ice Tea')

let myHero = localStorage.getItem('hero')
console.log(myHero);

let myTodo = localStorage.getItem('todo')
console.log(myTodo);

localStorage.setItem('todo', 'You Update this')


localStorage.removeItem('hero')

localStorage.setItem('hero', 'Thor')    

localStorage.clear();