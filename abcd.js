var arr=[
    {name:"Aashish",photo:"https://images.unsplash.com/photo-1610984337706-502e91441759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",prof:"Coder",status:"Stranger"},
    {name:"Harsh",photo:"https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",prof:"professional",status:"Stranger"},
    {name:"Ratnesh",photo:"https://images.unsplash.com/photo-1594877580790-299161e73ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",prof:"Dancer",status:"Stranger"},
    {name:"Aastha",photo:"https://images.unsplash.com/photo-1606542758304-820b04394ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",prof:"Programmer",status:"Stranger"}
]


function cardmaker(){
    var clutter="";

for(var i=0;i<4;i++)
{
    clutter += `<div id="card">
    <div id="photo">
        <img src="${arr[i].photo}">
    </div>
    <h3>${arr[i].name}</h3>
    <h5>${arr[i].prof}</h5>
    <h1 id="${arr[i].status.split(" ").join("")}">${arr[i].status}</h1>
    <p>Lorem ipsum,  amet consectetur adipisicing elit. At, vel neque libero incidunt dignissimos dolor sitnon.</p>
    <button class="${arr[i].status ==="Stranger"?"blue":"red"}" id=${i}>${arr[i].status ==="Stranger"?"Add Friend":"Remove Friend"}</button>
</div>`
};
document.querySelector("#main").innerHTML=clutter;
}
cardmaker();


document.querySelector("#main").addEventListener("click",function(details){

    arr[details.target.id].status="Friend request sent";
    
    cardmaker();

    setTimeout(function(){
        arr[details.target.id].status="Friends";
        arr[details.target.id]
        cardmaker();
    },Math.floor(Math.random()*10)*1000)
    
})