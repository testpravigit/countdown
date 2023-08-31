
var endDate="31 August 2023 10:17 AM";
const d=document.getElementById('date');
const input=document.querySelectorAll("input")
d.innerHTML=endDate;

function clock(){
    const end=new Date(endDate)
    const now =new Date()
    const diff=(end-now)/1000
    console.log(end)
    console.log(end)
    if(diff<0)return;
     
    

    
    

   input[0].value=Math.floor(diff/3600/24);
  input[1].value=Math.floor(diff/3600)%24;

  input[2].value=Math.floor(diff/60)%60;
  input[3].value=Math.floor(diff)%60;
  
}
clock()
setInterval(()=>{
  clock()
},1000)












