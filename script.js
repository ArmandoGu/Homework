var wrap = document.body.querySelector(".wrapper");

var fireEle = document.body.querySelector(".fire");
var iceEle = document.body.querySelector(".ice");
var poisonEle = document.body.querySelector(".poison");

var damage =0;


function attack(dmg,att_type){
  damage = damage + dmg;
  var damage = document.createElement("div");
  att_type.innerHTML=Attack_Type;
  wrap.appendChild(damage);
}



document.body.querySelector(".fire").addEventListener("click", function(){
  attack(2);
})

document.body.querySelector(".ice").addEventListener("click", function(){
  attack(2);
})

document.body.querySelector(".poison").addEventListener("click", function(){
  attack(4);
})

if(damage >= 10){
  wrap.innerHTML = "User Damage:" + damage + "USER WINS!!!!";
}

for (var i=0; i<1; i++){
  attack(dmg,att_type);
}