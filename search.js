// searcgh module
// brings the search functionality into th documet
const userInput = () => {
    let searchInput = document.querySelector('.search-component__input')
    
    let text = searchInput.value
    
    if(text.length >= 2) {
       
        let resultUsers = searchByName(text, users)
       console.log(resultUsers)
       renderSearchResults(resultUsers, ".search-component__results")
    }
}

//filter users
const searchByName = (partialName, users) => {
    let resultUsers = [];

users.forEach( (user) => {

    if(  user.name.toLowerCase().startsWith(partialName.toLowerCase())  ) {
        resultUsers.push( user );
}})
    return resultUsers; 
}

const renderSearchResults = (resultUsers, rootSelector) => {
    const rootElement = document.querySelector(rootSelector)
    let html = `<ul class="search-component__results-list">`;
    resultUsers.forEach( user => {
        
        

        html += `<li class="search-component__results-list__item">
                 <img src="${user.avatar}"/> ${status(user.lastOnline.slice(0, 2))} ${user.name}  </li>`           
                 });
    html +=`</ul>`;
    rootElement.innerHTML = html;
    
}

const status = (minutes) => {

       if(minutes <= 5) {
           return '<div id="dotStatusGreen"></div>'
       }
        else {
            return '<div id="dotStatusGray"></div>'
        }
        
        
}










/*for (let i = 0; i < resultUsers.length; i++) {
             html += `<li class="search-component__results-list__item">
                 <img src="${resultUsers[i].avatar}"/> ${resultUsers[i].name}</li>`

    } */




    /*for (let i = 0; i < users.length; i++) {
        if(  users[i].name.toLowerCase().startsWith(partialName.toLowerCase())  ) {
            resultUsers.push( users[i] )
        } 
    }
*/