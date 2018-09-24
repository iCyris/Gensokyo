function ShowHide(obj)
{
    if(obj.style.display === "block")
    {
        obj.style.display = 'none';
    }
    else
    {
        obj.style.display = 'block';
    }
}
function quq(obj)
{
    var textNode = obj.childNodes[0];
    if(textNode.nodeValue === "Welcome")
    {
        textNode.nodeValue = 'Close';
    }
    else
    {
        textNode.nodeValue = 'Welcome';
    }
}
window.onload=function()
{
    var btn = document.getElementById("site__button");
    var about = document.getElementById("site__about");
    var hi = document.getElementById("hi");
    btn.onclick = function()
    {
        quq(hi);
        ShowHide(about);
        return false;
    };
};