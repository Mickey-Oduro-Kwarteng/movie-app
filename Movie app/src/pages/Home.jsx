import MovieCard from "../components/moviecard" 


function Home() {
    const movies = [
       { Id:1 , title:"John wick",release_date:"2020"},
        { Id:2 , title:"Terminator",release_date:"2020"},
         { Id:3 , title:"Black clover",release_date:"2020"},
          { Id:4 , title:"coach carter,release_date:"2020"}
    ]

    return <div classname="home">
<div className="movies-grid">
    {movies.map(movies=> <MovieCard movie={movie} key={movie.id}/>)}
</div>
    </div>
}
for(let i=0; 1<5; i++){
    console.log("hello world")
}

function happybirthday(username, age){
    console.log ("happy birthday to you")
      console.log ('happy birthday to you ${username}')
        console.log ("you are ${age} years old now")
}
happybirthday( "Patrick", 20);

function iseven(number){
if (number % 2 === 0 ){
return true;
}else {
    return false
}
}console.log(iseven(12))