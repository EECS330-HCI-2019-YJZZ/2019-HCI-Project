var loca;
var memo;
var name;
var hour;
var minute;
var date;

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
            document.getElementById("event-name").innerHTML = json.name;
            child[0].innerHTML = json.name;
            console.log("change", child[0]);
            node.parentNode.insertBefore(copy, node);
        }
        document.getElementById('0').style.visibility = "hidden";
    }
}

// refresh the main page
// this function should rendering all element in main page
function refresh_main() {
    console.log("inside home", name);
    document.getElementById("event-name").innerHTML = name;
    console.log(localStorage);
    render(document.querySelector('.main-event'));
}

// save the variable to localStorage and redirect to main page
function save(){
    date=document.getElementById("date").value;
    hour=document.getElementById("hour").value;
    minute=document.getElementById("minute").value;
    name = document.getElementById("event_name").value;
    loca=document.getElementById("event_location").value;
    memo=document.getElementById("event_memo").value;
    var each_info = new Object();
    each_info.date = date;
    each_info.hour = hour;
    each_info.minute = minute;
    each_info.loca = loca;
    each_info.name = name;
    each_info.memo = memo;
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

function add(){
	// window.location.href='add.html?'+date_back+"&"+hour_back+"&"+minute_back+"&"+name_back+"&"+loca_back+"&"+memo_back;
    window.location.href = "./add.html";
}

function edit(){

}

function delete_item(){

}


function planning() {
    console.log("hello");
    window.location.href="planning.html";
}








