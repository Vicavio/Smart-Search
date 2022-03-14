let users = fakeUsers(50)


// search component event binding

let searchInput = document.querySelector('.search-component__input')

//Q1: querySelector() vs querySelectorAll() ??
//           v                    v
//     element{}-single     [element()] -collection
//           v                    v
//          null             [empty]

searchInput.onkeyup = userInput 