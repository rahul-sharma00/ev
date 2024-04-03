let services=document.getElementById("services");
let link=document.getElementById("ser");

function openServices(){
    if( services.style.visibility=="visible"){
        services.style.visibility="hidden";
        link.style.color="#fff";
    }else{
        services.style.visibility="visible";
        link.style.color="gray";
    }
   
}