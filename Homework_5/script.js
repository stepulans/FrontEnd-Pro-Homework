let users = [ 
{id: 1, name: 'Steven', salary: '5000'}, 
{id: 2, name: 'Neena', salary: '10000'}, 
{id: 3, name: 'John', salary: '4500'} 
]

function addUser(name, salary){
   let id = users.length + 1
    users.push({id, name, salary})
}
addUser('Mark', 1200)
console.log(users);

function removeUsers(id){
    let index = users.findIndex(users => users.id === id)
    if(!index === -1){
        users.slice(index, 1)
    }else{
        console.error("Error: That id doesn't exist")
    }
}
removeUsers(4)
console.log(users);

function changeUser(id, name, salary){
    let index = users.findIndex(users => users.id === id)
    if(index !== -1){
        users[index].name = name
        users[index].salary = salary
    }else{
        console.error("Error: That id doesn't exist"); 
    }
}

changeUser(2, 'Nina', 150)
console.log(users);