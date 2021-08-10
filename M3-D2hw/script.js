
albums = []
// window.onload = ()=>{
//     getAlbums("Pink Floyd")
//     getAlbums("Eric Clapton")
//     getAlbums("Jimi Hendrix")
// }

const getAlbums = (query)=>{
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e31d26db9msh44f4e715e5f5329p13828djsnc687b9fb17c2",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response =>  response.json())
.then(data=> {
    //const object = { title: query , albums:data.data}
    albums= data.data
   
    displayAlbum(albums)
    console.log(albums)
})
    
.catch(err => {
	console.error(err);
});

}
function showNumverOfAlbums (){
    alert (`The number of albums are ${albums.length}`)
}

function displayAlbum (albums) {
    const row = document.querySelector('.recently-played')
    row.innerHTML=""

    albums.forEach((ele) =>{
        row.innerHTML +=`<div class="col-sm-12 col-md-6 col-lg-2 mb-2 px-2">
                            <div class="card h-100">
                                <div class="card-img">
                                    <img src="${ele.album.cover}" height="150" width="auto" class="card-img-top"
                                        alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${ele.album.title}</h5>
                                   

                                </div>

                            </div>

                        </div>`

    })
    
}  




    
 


