/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var executed = false;

function f(){
if (!executed){
   console.log(document.getElementById("nosaukums").value);
    let n = document.getElementById("nosaukums").value;
    
    
    for(let a =0;a<n;a++){
        
         document.getElementById("divtags").appendChild(document.createElement("br"));
        for(let b =0;b<n;b++){
            let x=document.createElement("button");
            x.innerHTML=(a)*(n)+(b+1);
            document.getElementById("divtags").appendChild(x);
           
        }
    }
    
    executed=true;
}
}
