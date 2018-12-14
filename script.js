function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

    function deleteFromDom(evt) {
        var p = document.getElementsByTagName("p");
        for(var i in p){
            if(p.length>0)
            chatDiv.removeChild(p[i]);
        }
    }
    del.onclick = deleteFromDom;

socket.on('display message', handleMessage);
socket.on('de hima el duq jnjeq', deleteFromDom);
} // main closing bracket

window.onload = main;