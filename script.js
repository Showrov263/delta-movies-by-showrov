const movies=[
{name:"Inception",year:2010,genre:"Sci-Fi",type:"Hollywood",rating:"8.8",desc:"A mind-bending science-fiction thriller about dreams within dreams.",watch:"https://www.youtube.com/results?search_query=Inception+official+trailer"},
{name:"Interstellar",year:2014,genre:"Sci-Fi",type:"Hollywood",rating:"8.7",desc:"A team travels through a wormhole searching for a future for humanity.",watch:"https://www.youtube.com/results?search_query=Interstellar+official+trailer"},
{name:"The Dark Knight",year:2008,genre:"Action",type:"Hollywood",rating:"9.0",desc:"Batman faces Gotham's most dangerous criminal mastermind.",watch:"https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer"},
{name:"3 Idiots",year:2009,genre:"Comedy",type:"Bollywood",rating:"8.4",desc:"Three friends navigate college, friendship and pressure to succeed.",watch:"https://www.youtube.com/results?search_query=3+Idiots+official+trailer"},
{name:"Dangal",year:2016,genre:"Drama",type:"Bollywood",rating:"8.3",desc:"A former wrestler trains his daughters to become competitive wrestlers.",watch:"https://www.youtube.com/results?search_query=Dangal+official+trailer"},
{name:"Pathaan",year:2023,genre:"Action",type:"Bollywood",rating:"5.9",desc:"An Indian spy returns to stop a dangerous threat.",watch:"https://www.youtube.com/results?search_query=Pathaan+official+trailer"},
{name:"Drishyam 2",year:2022,genre:"Thriller",type:"Bollywood",rating:"8.2",desc:"A family struggles to protect a secret when an old case resurfaces.",watch:"https://www.youtube.com/results?search_query=Drishyam+2+official+trailer"},
{name:"Avengers: Endgame",year:2019,genre:"Action",type:"Hollywood",rating:"8.4",desc:"The Avengers attempt to reverse the devastation caused by Thanos.",watch:"https://www.youtube.com/results?search_query=Avengers+Endgame+official+trailer"}
];
const grid=document.getElementById("grid"),count=document.getElementById("count"),search=document.getElementById("search");
function render(list){grid.innerHTML=list.map((m,i)=>`<article class="card" onclick="showMovie(${i})"><div class="poster"><span class="year">${m.year}</span></div><div class="card-info"><h3>${m.name}</h3><div class="meta">${m.type} · ${m.genre} · ⭐ ${m.rating}</div></div></article>`).join("");count.textContent=`${list.length} titles`;}
function showMovie(i){const m=movies[i];document.getElementById("details").innerHTML=`<p class="tag">${m.type}</p><h2>${m.name}</h2><p>${m.year} · ${m.genre} · ⭐ ${m.rating}</p><p>${m.desc}</p><a class="watch" target="_blank" rel="noopener" href="${m.watch}">▶ Watch Official Trailer</a>`;document.getElementById("modal").style.display="flex";}
document.getElementById("close").onclick=()=>document.getElementById("modal").style.display="none";
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.style.display="none"};
search.oninput=()=>{const q=search.value.toLowerCase();render(movies.filter(m=>(m.name+" "+m.type+" "+m.genre).toLowerCase().includes(q)))};
document.querySelectorAll(".chips button").forEach(b=>b.onclick=()=>{const g=b.dataset.genre;render(g==="All"?movies:movies.filter(m=>m.genre===g))});
render(movies);