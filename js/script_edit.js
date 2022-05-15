function view(employees) {
    // counter
    let i = 1
    // loop through employees array
    for (let employee of employees)  {
        console.log(`${i}. ${employee}`)
        i++ 
    }
    console.log('')
}

function add(employees) {
    let name = prompt('enter the employee name')
    let title = prompt('enter the employee title')
    employees.push(`${name} (${title})`)
    console.log(`${name} was successfully added`)
}

function del(employees) {
    // ask user which employee to delete
    let num = parseInt(prompt('enter employee number to delete'))
    // check and make sure it's a valid number
    if (num <1 || num > employees.length) {
        alert('invalid employee number')
    } else {
        let employee = employees.splice(num - 1, 1)
        console.log(`${employee} was successfully deleted.`)
        console.log('')
    }
}

function init() {
    // display command menu
    console.log('the employee management application')
    console.log('-------------------------------------')  
    console.log('command menu')
    console.log('show --show employees')
    console.log('add --add employee')
    console.log('del --delete employee')
    console.log('exit--exit app')
    console.log('-------------------------------------')  
    console.log('')  
    // start with empty array
    let arrEmployees = []
    async function fetchUsers() {
        try {
            const response = await fetch('../data/employees.json')
            const users = await response.json()
            console.log(users)
            for (let i=0; i < users['employees'].length; i++) {
                arrEmployees.push(`${users['employees'][i]['name']} (${users['employees'][i]['title']})`)
            }
        console.log(arrEmployees)
        do {
            // allow use to enter a command
            let command = prompt('enter command').toLocaleLowerCase()
            // check and make sure command is not null
            if (command !== null) {
                if (command === 'show') {
                    view(arrEmployees)
                } else if (command === 'add') {
                    add(arrEmployees)
                } else if (command ==='del') {
                    del(arrEmployees)
                } else if (command ==='exit') {
                    break
                } else {
                    alert('that is not a valid command')
                }
            } else {
                alert('please enter a command')
            }
        } while (true)
        // }
        } catch (error) {
            console.error(error)
        }
    }
    fetchUsers()
}

init()