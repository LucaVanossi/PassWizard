function switchVisible() {
    if (document.getElementById('HomePage')) {

        if (document.getElementById('HomePage').style.display == 'none') {
            document.getElementById('HomePage').style.display = 'block';
            document.getElementById('ManagePassword').style.display = 'none';
        }
        else {
            document.getElementById('HomePage').style.display = 'none';
            document.getElementById('ManagePassword').style.display = 'block';
        }
    }
}

function switchVisible1() {
    if (document.getElementById('ManagePassword')) {

        if (document.getElementById('ManagePassword').style.display == 'none') {
            document.getElementById('ManagePassword').style.display = 'block';
            document.getElementById('HomePage').style.display = 'none';
            document.getElementById('FormPassword').style.display = 'none';
        }
        else {
            document.getElementById('ManagePassword').style.display = 'none';
            document.getElementById('HomePage').style.display = 'block';
            document.getElementById('FormPassword').style.display = 'none';
        }
    }
    var form = document.getElementById("FormPassword");
    form.reset(); 
}

function OpenDiv() {
    if (document.getElementById('FormPassword')) {
        document.getElementById('FormPassword').style.display = 'block';
    }
}

function CloseDiv() {
    if (document.getElementById('FormPassword')) {
        document.getElementById('FormPassword').style.display = 'none';
    }
}

function CleanText() {
   var form = document.getElementById("FormPassword");
   form.reset(); 
}
