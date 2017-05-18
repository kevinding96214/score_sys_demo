window.onload = function () {
    var card = document.getElementById('card');
    var sys = document.getElementById('sys');
    var begin = document.getElementById('begin');
    var close = document.getElementById('close');
    var up = 1000;
    var down=0;
    begin.onclick = function () {
        card.style.display = 'none';
        sys.style.display = 'block';
        sys.style.top = '1000px';
        var upp = setInterval(function () {
            up -= 10;
            sys.style.top = up + 'px';
            if (up <= 0) {
                sys.style.top = '0px';
                clearInterval(upp);
            }
        }, 1);
    }
    close.onclick = function () {
        card.style.display = 'block';
        var dd = setInterval(function () {
            down += 10;
            sys.style.top = down + 'px';
            if (down >= 1000) {
                sys.style.display = 'none';
                clearInterval(dd);
                window.location.replace('index.aspx');
            }
        }, 1);
    }
    var stunum = document.getElementById('stuNum');
    var stunam=document.getElementById('stuName');
    var chi = document.getElementById('chinese');
    var math = document.getElementById('math');
    var en = document.getElementById('english');
    var phy = document.getElementById('physical');
    var che = document.getElementById('chemistry');
    var pol = document.getElementById('political');
    var sub=document.getElementById('submit');
    stunum.onblur = function () {
        var reg = /[0-9]{12}/;
        if (reg.test(stunum.value) != true) {
            stunum.className = "text-danger";
            stunum.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            stunum.className = "text-success";
            stunum.style.boxShadow = null;
        }
    }
    stunam.onblur = function () {
        var reg = /^[\u4e00-\u9fa5a-z]+$/gi;
        if (reg.test(stunam.value) != true) {
            stunam.className = "text-danger";
            stunam.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            stunam.className = "text-success";
            stunam.style.boxShadow = null;
        }
    }
    chi.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(chi.value) != true) {
            chi.className = "text-danger";
            chi.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            chi.className = "text-success";
            chi.style.boxShadow = null;
        }
    }
    math.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(math.value) != true) {
            math.className = "text-danger";
            math.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            math.className = "text-success";
            math.style.boxShadow = null;
        }
    }
    en.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(en.value) != true) {
            en.className = "text-danger";
            en.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            en.className = "text-success";
            en.style.boxShadow = null;
        }
    }
    phy.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(phy.value) != true) {
            phy.className = "text-danger";
            phy.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            phy.className = "text-success";
            phy.style.boxShadow = null;
        }
    }
    che.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(che.value) != true) {
            che.className = "text-danger";
            che.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            che.className = "text-success";
            che.style.boxShadow = null;
        }
    }
    pol.onblur = function () {
        var reg = /[0-9]{1,3}/;
        if (reg.test(pol.value) != true) {
            pol.className = "text-danger";
            pol.style.boxShadow = '0 0 5px 1px red';
        }
        else {
            pol.className = "text-success";
            pol.style.boxShadow = null;
        }
    }
}