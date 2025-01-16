// Project page ----------------------------------------------------------------
var ltbs = document.getElementsByClassName("link_tabs");
var contentstabs = document.getElementsByClassName("contents__tab");
var ofstas = document.getElementsByClassName("off_state");
var offframes = document.getElementsByClassName("off_frame");

// index page ----------------------------------------------------------------

var tablinks = document.getElementsByClassName("tab__links")
var tabcontents = document.getElementsByClassName("tab__contents")

// Project page - search ----------------------------------------------------------------

function search_Box() {
    let filter = document.getElementById("find").value.toUpperCase();

    let item = document.querySelectorAll(".box");

    let l = document.getElementsByTagName("h3");

    for(var i = 0; i<=l.length; i++) {
        let a = item[i].getElementsByTagName("h3")[0];

        let value = a.innerHTML || a.textContent || a.innerText;

        if(value.toUpperCase().indexOf(filter) >  -1) {
            item[i].style.display = "";
        }
        else{
            item[i].style.display = "none";
        }
    }
}


    function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active__link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active__tab");
            }
        event.currentTarget.classList.add("active__link");
        document.getElementById(tabname).classList.add("active__tab");
    }

    var sidemenu = document.getElementById("sideMenu");

    function openMenu(){
        sidemenu.style.right = "0";
    }
    function closeMenu(){
        sidemenu.style.right = "-300px";
    }
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwhzOqyraDGB4PIr9l3zI0KIp0AuZ27t2NTotsd6wk9sv72nrHnYUPjKA4zJvRYZU0Wtw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    
    
    
    // Project page ----------------------------------------------------------------
    
    
    function mainopentab(tabs){
        for(ofsta of ofstas){
            ofsta.classList.remove("active_state");
        }
        for(offframe of offframes){
            offframe.classList.remove("active_frame");
        }
    
        event.currentTarget.classList.add("active_state");
        document.getElementById(tabs).classList.add("active_frame");
    }
    
    function tabopen(nametab) {
        for(ltb of ltbs){
            ltb.classList.remove("link__active");
        } 
    
        for(contentstab of contentstabs){
            contentstab.classList.remove("tab__active");
        }
        event.currentTarget.classList.add("link__active");
             document.getElementById(nametab).classList.add("tab__active");
    }