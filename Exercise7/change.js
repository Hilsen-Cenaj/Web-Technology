window.onload = function(){
    document.getElementById("date").addEventListener("change", showDate(date));
    document.getElementById("font-icon").addEventListener("click", changeText);
};

var active = false;

function changeText(){

    if(active === false){
        document.body.style.fontFamily = "Courier New";
        active = true;
    }
    else{

        document.body.style.fontFamily = "Kabrio Abarth";
        active = false;
    }
}

function showDate(paragraph){

    var date = new Date();
    var day = date.getDay();

    const monthNames = ["Ιαν.", "Φεβρ.", "Μαρτ.", "Απρ.", "Μαι", "Ιουν.",
    "Ιουλ.", "Αυγ.", "Σεπτ.", "Οκτ.", "Νοεμβ.", "Δεκ."
    ];

    if(day === 0){

        paragraph.textContent = "Κυριακή, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else if(day === 1){

        paragraph.textContent = "Δευτέρα, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else if(day === 2){

        paragraph.textContent = "Τρίτη, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else if(day === 3){

        paragraph.textContent = "Τετάρτη, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else if(day === 4){

        paragraph.textContent = "Πέμπτη, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else if(day === 5){

        paragraph.textContent = "Παρασκευή, " + date.getDate() + " " + monthNames[date.getMonth()];

    } else{

        paragraph.textContent = "Σάββατο, " + date.getDate() + " " + monthNames[date.getMonth()];

    }
}