var x=prompt("What do want ? \nadd\nlist\nquit");
var y=[];
while(x!=="quit")
{

  if(x==="list")
  {
    console.log(y);
  }
  //y.push(prompt("Add a To do"));
  else if(x==="add")
  {

    y.push(prompt("What do you want to add?"));
  }
  x=promp t("What do you want \nadd\nlist\nquit");
}
console.log("you are out off the app");
