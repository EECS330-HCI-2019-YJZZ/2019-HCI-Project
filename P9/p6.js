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
            if (json.hour !== "") {
                if (json.minute === "") {
                    time[0].innerHTML = json.hour+":00";
                }
                else {
                    time[0].innerHTML = json.hour+":"+json.minute;
                }
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

    if(each_info.name == ""){
        alert("Event name cannot be empty!");
    }
    else{
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
}

function save_edit() {
    var each_info = new Object();
    each_info.date = document.getElementById("date").value;
    each_info.hour = document.getElementById("hour").value;
    each_info.minute = document.getElementById("minute").value;
    each_info.loca = document.getElementById("event_location").value;
    each_info.name = document.getElementById("event_name").value;
    each_info.memo = document.getElementById("event_memo").value;

    if(each_info.name == ""){
        alert("Event name cannot be empty!");
    }
    else{
        var id = localStorage.getItem("edit_page");
        var jsonString = JSON.stringify(each_info);
        localStorage.setItem(id, jsonString);
        window.location.href = "./main.html";
    }  
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

function delete_item(e){
    if(window.confirm('Are you sure you want to delete this event?')){         
        console.log("print", e.path[4].id);
        var id = parseInt(e.path[4].id) - 1;
        var cnt = localStorage.getItem("count");
        console.log("count", localStorage.getItem("count"));
        for (var i = id + 1; i < cnt; i++) {
            localStorage.setItem((i-1).toString(), localStorage.getItem(i));
        }
        localStorage.removeItem(cnt);
        cnt = parseInt(cnt);
        cnt--;
        localStorage.setItem("count", cnt);
        window.location.href = "./main.html";
    }else{
        return false;
    }
}


function planning(e){
    // get the id of which should be edit
    console.log("print", e.path[4].id);
    var id = parseInt(e.path[4].id) - 1;
    localStorage.setItem("edit_page", id.toString());
    render_plan();
}

function render_plan() {
    var id = localStorage.getItem("edit_page");
    console.log(localStorage.getItem(id.toString()));
    var element = JSON.parse(localStorage.getItem(id.toString()));

    if(element.name == "Classes"){
        window.location.href = "./planning.html";
    }

    else if(element.name == "Meeting"){
        window.location.href = "./planning2.html";
    }

    else if(element.name == "Dating"){
        window.location.href = "./planning3.html";
    }
    else{
        window.location.href = "./planning4.html";
    }
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}










