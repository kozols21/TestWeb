/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function f(){
    var m = 0;
if (m!==document.getElementById("nosaukums").value){
    document.getElementById("divtags").innerHTML = '';
  // console.log(document.getElementById("nosaukums").value);
    let n = document.getElementById("nosaukums").value;
    var m =n;
    
    for(let a =0;a<n;a++){
        
         document.getElementById("divtags").appendChild(document.createElement("br"));
        for(let b =0;b<n;b++){
            let x=document.createElement("button");
           // x.innerHTML=(a)*(n)+(b+1);
            let y=document.createElement("img");
          
            y.src="b1.jpg";
            x.appendChild(y);
            document.getElementById("divtags").appendChild(x);
           
        }
    }
    
   
}
}
function y(z){
    //ja z ir lielaks par noteiktu vertibu aptur ciklu
    //PS ieprieks pievieno mainigo lai skaititu 0 vertibas atseviski
    //random skaitlis
    //pec rand nosaka bildes nummuru nr
    //ja sk masiva pie nr mazak par 2, tad
        //tad sk masiva pie nr++;
        //bilzu mas pie z = nr
        //y(z+1);
    //ja sk masiva pie nr = 2, tad
        //y(z);
}
