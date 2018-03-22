

function openNav() {
    document.getElementById("myTopnav").style.width = "270px";
    document.getElementById("container1").style.marginLeft = "250px";
   
   
    
}
function closeNav() {
    document.getElementById("myTopnav").style.width = "0";
    document.getElementById("container1").style.marginLeft = "0";

}function myvideoFunction() {
    var x = document.getElementById("myVideo").duration;
    document.getElementById("demo").innerHTML = x;
}