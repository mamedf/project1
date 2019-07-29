var box = document.getElementById('box')
var boxh = box.offsetHeight;
var boxw = box.offsetWidth;

//choosing random coordinates
var targetx = Math.random() * boxw;
var targety = Math.random() * boxh;

console.log(`targetX: ${targetx}`);
console.log(`targety: ${targety}`);

function loc(event){
  console.log(`mousex: ${event.clientX}\nmousey:
  ${event.clientY}`);
}

box.addEventListener("mousemove", loc)

function distance(targetx, targety, mousex, mousey){
  var x = targetx - mousex;
  var y = targety - mousey;
  var z = Math.sqrt(Math.pow(x,2)+ Math.pow(y,2))
  return z
};
if z <= 30{
  box.setAttribute("style", "background-color: green";)
}
if z >= 30{
  box.setAttribute("style", "background-color: black")
}
