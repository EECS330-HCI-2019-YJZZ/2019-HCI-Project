// clone the repeated structure many times
function render(node) {
    var cnt = localStorage.getItem("count");
    if (cnt === null) {
        document.getElementById('0').style.visibility = "hidden";
        return;
    }
    else {
        document.getElementById('0').style.visibility = "visible";
        cnt = parseInt(cnt);
        cnt++;
        for (var i = 0; i < cnt - 1; i++) {
            copy = node.cloneNode(true);
            var child = document.getElementById(copy.id).children[0].children;
            console.log(child);
            copy.id = i + 1;
            var jsonString = localStorage.getItem(i.toString());
            var json = JSON.parse(jsonString);
            console.log("current index", i);
            console.log("current json name)", json.name);
            // change name
            // child[0].innerHTML = json.name;
            // change event location
            var name = copy.getElementsByClassName("event-name");
            var time = copy.getElementsByClassName("event-time");
            var location = copy.getElementsByClassName("event-location");
            if (json.name !== null) {
                name[0].innerHTML = json.name;
            }
            if (json.hour !== null) {
                time[0].innerHTML = json.hour;
            }
            if (json.loca !== null) {
                location[0].innerHTML = json.loca;
            }
            console.log(name, time, location);
            console.log("change", child[0]);
            node.parentNode.insertBefore(copy, node);
        }
        document.getElementById('0').style.visibility = "hidden";
    }
}

// refresh the main page
// this function should rendering all element in main page
function refresh_main() {
    render(document.querySelector('.main-event'));
}

// save the variable to localStorage and redirect to main page
function save(){
    var each_info = new Object();
    each_info.date = document.getElementById("date").value;
    each_info.hour = document.getElementById("hour").value;
    each_info.minute = document.getElementById("minute").value;
    each_info.loca = document.getElementById("event_location").value;
    each_info.name = document.getElementById("event_name").value;
    each_info.memo = document.getElementById("event_memo").value;
    var cnt = localStorage.getItem("count");
    if (cnt == null) {
        cnt = 0;
    }
    var jsonString = JSON.stringify(each_info);
    console.log("jsonString", jsonString);
    localStorage.setItem(cnt, jsonString);
    cnt = parseInt(cnt);
    localStorage.setItem("count", cnt + 1);
    window.location = "./main.html";
}

function save_edit() {
    window.location.href = "./main.html";
}

function add(){
    window.location.href = "./add.html";
}

function edit(e){
    // get the id of which should be edit
    console.log("print", e.path[4].id);
    var id = parseInt(e.path[4].id) - 1;
    localStorage.setItem("edit_page", id.toString());
    window.location.href = "./edit.html";
    render_edit();
}

function render_edit() {
    var id = localStorage.getItem("edit_page");
    console.log(localStorage.getItem(id.toString()));
    var element = JSON.parse(localStorage.getItem(id.toString()));
    document.getElementById("date").value = element.date;
    document.getElementById("hour").value = element.hour;
    document.getElementById("minute").value = element.minute;
    document.getElementById("event_name").value = element.name;
    document.getElementById("event_location").value = element.loca;
    document.getElementById("event_memo").value = element.memo;
}

function delete_item(){

}

// $( "#edit" ).onclick(function( event ) {
//     console.log(event.target);
// });


function planning() {
    console.log("hello");
    window.location.href="planning.html";
}








