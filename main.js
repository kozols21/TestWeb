/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var executed = false;

function f(){
if (!executed){
    let x=document.createElement("button");
    x.innerHTML="poga";
    document.getElementById("divtags").appendChild(x);
    executed=true;
}
}
