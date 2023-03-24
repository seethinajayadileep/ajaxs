function click_b()
{
    var  request=new XMLHttpRequest();
    request.open("get","data.txt");
    request.onreadystatechange=function(){
        console.log(request.responseText);

        document.getElementById("data").innerText=request.responseText;
        console.log(request.status+ "connection established succesfully");

    }
    request.send();

}
document.getElementById("btn").addEventListener("click",click_b)