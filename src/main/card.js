import React from 'react';

const arr =[ {
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
{
  "albumId": 1,
  "id": 5,
  "title": "natus nisi omnis corporis facere molestiae rerum in",
  "url": "https://via.placeholder.com/600/f66b97",
  "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
},

{
  "albumId": 1,
  "id": 6,
  "title": "qui eius qui autem sed",
  "url": "https://via.placeholder.com/600/51aa97",
  "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
}

]


const main =()=>{

  
  return(
    
    <main className="body">
   {arr.map((item)=>{
     return (

      <main className="blog" key={item.id}>
      <div className="card" >
        <img src={item.thumbnailUrl} alt={item.title}/>
        </div>
        <div className="text-con">
        <h1>{item.title}</h1>
        </div>
      
        </main>

     );
   })}




    </main>
  );
}


export default main;