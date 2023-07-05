const firstMovie = document.getElementById("firstMovie");

// Displays the first movie and its details
fetch("http://localhost:3000/films/1")
  .then((response) => {
    return response.json();
  })
  .then((movieDetails) => {
    
    let movie1Details = document.createElement("div");
    let availableTickets= movieDetails.capacity - movieDetails.tickets_sold
    movie1Details.innerHTML = `<h1>${movieDetails.title}</h1> 
    <img src="${movieDetails.poster}" alt="${movieDetails.title}" width = "250px" height = "200px"> 
    <p id="less1"><strong>Available Tickets : </strong>${movieDetails.capacity - movieDetails.tickets_sold}</p> 
    <p><strong>The Show Time is at : </strong>${movieDetails.showtime}</p>
    <p><strong>The Movie Runs for : </strong>${movieDetails.runtime}</p>
    <p><strong>The Description of the Movie : </strong>${movieDetails.description}</p> 
    <button onclick="reduceCounter(${availableTickets})" > Buy Ticket </button> `;
     firstMovie.appendChild(movie1Details)

  });

  function reduceCounter(tickets){
    let lessOne = document.getElementById("less1")
    if(tickets===0){
      alert("Show Is Sold Out")
    }
    else{
        tickets-=1
        lessOne.innerHTML = `<strong>Available Tickets : </strong>${tickets}`
    }
  }


  //Displays a list of all movies

fetch("http://localhost:3000/films")
.then((response) => {
    return response.json();
})
.then((movies) => { 
    let listItems= document.getElementById("listItems");
    movies.forEach(element => {
        console.log(element.title);
        let listItem = document.createElement('li');
        listItem.textContent = element.title
        listItems.appendChild(listItem)
        
    });
})
