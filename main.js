/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var n;
var b0;
var ps;
var sk;
var bildes;

function f(){
    var m = 0;
if (m!==document.getElementById("nosaukums").value){
    document.getElementById("divtags").innerHTML = '';
  // console.log(document.getElementById("nosaukums").value);
     n = document.getElementById("nosaukums").value;
    var m =n;
    
    bildes=new Array(n*n);
 
    if((n*n-((n*n)%2))/2>9){
        sk = new Array(10);
        ps=9;
        b0 =n*n-18;
        
    }
    else{
        sk = new Array((n*n-((n*n)%2))/2+1);
        b0 =(n*n)%2;
        ps=(n*n-((n*n)%2))/2;
    }
    sk.fill(0);
    y(0);
    sk.fill(0);
    for(let a =0;a<n;a++){
        
         document.getElementById("divtags").appendChild(document.createElement("br"));
        for(let b =0;b<n;b++){
            let x=document.createElement("button");
           // x.innerHTML=(a)*(n)+(b+1);
           //x.innerHTML='onclick="maina();"';
           x.setAttribute("onclick","maina("+((a)*(n)+b)+");");
          
           let y=document.createElement("img");
           
         // (a)*(n)+b;
         y.setAttribute("id",(a)*(n)+b);
         y.setAttribute("style","width:0%");
         let r=Math.floor(Math.random() * Math.floor(2))+1;
         if(sk[bildes[(a)*(n)+b]]===0){
             if(r==1){
                y.src="a"+ bildes[(a)*(n)+b] +".jpg";
                sk[bildes[(a)*(n)+b]]=1;
             }
             else{
                 y.src="b"+ bildes[(a)*(n)+b] +".jpg";
                 sk[bildes[(a)*(n)+b]]=2;
             }
            
        }
        else if(sk[bildes[(a)*(n)+b]]===1){
            y.src="b"+ bildes[(a)*(n)+b] +".jpg";
        }
        else{
            y.src="a"+ bildes[(a)*(n)+b] +".jpg";
        }
            x.appendChild(y);
            document.getElementById("divtags").appendChild(x);
            
        }
    }
    
   
}
}
function maina(x){
    let y = document.getElementById(x); 
    console.log(y.getAttribute("style"));
    if(y.getAttribute("style")==="width:0%"){
        y.setAttribute("style","width:100%");
    }
    else{
        y.setAttribute("style","width:0%");
    }
    
}
function y(z){
    //ja z ir lielaks par noteiktu vertibu aptur ciklu
    if(z<n*n){
    //PS ieprieks pievieno mainigo lai skaititu 0 vertibas atseviski
    //random skaitlis
    let nr=Math.floor(Math.random() * Math.floor(ps+1));

    //pec rand nosaka bildes nummuru nr
    //iznemums pie nulles
    if(nr===0){
        if(sk[0]<b0){
            sk[0] = sk[0]+1;
            bildes[z]=nr;
            console.log(bildes[z]);
            y(z+1);
        }
        else{
            y(z);
        }
    }
    else{
            //ja sk masiva pie nr mazak par 2, tad
    if(sk[nr]<2){
        sk[nr] = sk[nr]+1;
            bildes[z]=nr;
            console.log(bildes[z]);
            y(z+1);
        //tad sk masiva pie nr++;
        //bilzu mas pie z = nr
        //y(z+1);
    }
    else{
    //ja sk masiva pie nr = 2, tad
        //y(z);
        y(z);
    }
    }
    }
        
}
