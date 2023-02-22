window.onload = function() {

  let houseNumber = 12359;
  let streetName = "Hector Peterson";
  let region = "Phomolong";
  let province = "Northern Cape";

 

 document.getElementById("bio").innerHTML= 
 "<b>This is my house number:</b>" +
   houseNumber + ", " + streetName + ", " + region + ", " + province;
  
  



let skillsList = [
  { img: './background/html5.png' ,item: "HTML" },
  { img: 'background/css-3.png' ,item: "CSS" },
  { img: './background/javascript.png' ,item: "JAVAScript"},
  //{ img: '' ,item: "" },
 // { img: '' ,item: "Coffee" }

]

 
  let listUl = "<div>";
  for ( let i =0; i <skillsList.length; i++) {
   console.log(skillsList[i].item);
   listUl += 
    "<table border='1'><tr><td rowspan='3'><img src='"+skillsList[i].img+"' alt=''>" + skillsList[i].item + "</td></tr></table>";
   
  }
  listUl += "</div>"
 
  document.getElementById("listItems").innerHTML = listUl;
 
}