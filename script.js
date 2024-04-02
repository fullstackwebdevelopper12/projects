let x = document.getElementById("nav");
function showmenu()
{
    x.style.top="0";
    x.style.display="block";
    x.style.zIndex="99";
    x.style.backgroundColor=" #060608";
}
function closemenu()
{
    x.style.top="-200%";
    x.style.display="none";
}