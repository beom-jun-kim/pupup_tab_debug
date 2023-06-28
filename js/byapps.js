var localStorageEnable = true;
try { localStorage.setItem('BYAPPS_set_test', 'yes'); } catch (error) { localStorageEnable = false; }

var byapps_launch_block = document.querySelector("#byapps_launch_block");
var byapps_launch_button = document.querySelector("#byapps_launch_button");

// 기본 인스톨 팝업
function byapps_launch_install() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && !arguments[2]) return false;
    if (byapps_launch_block) byapps_launch_block.parentNode.removeChild(byapps_launch_block);
    if (byapps_launch_button) byapps_launch_button.parentNode.removeChild(byapps_launch_button);

    var style = document.createElement('style');
    style.innerHTML = "#byapps_launch_block { position:fixed;top:0;left:0;width:100%;height:100%;z-index:1002; }" +
        "#byapps_launch_block > div:nth-child(1) { position:fixed;top:0;left:0;background:#000;opacity:0.3;width:100%;height:100%; }" +
        "#byapps_wrapper { position:fixed; top:50%; left:50%; transform: translate(-50%, -50%); margin:auto; background-color:white; border-radius:20px; padding:20px; width:75%; box-shadow:0 0 20px rgba(0,0,0,0.5); text-align:center;z-index:9999; }" +
        "#byapps_launch_title { font-size:20px; margin-bottom:20px; font-weight:bold; color:#333; }" +
        "#byapps_launch_button { display:flex; flex-direction:column; align-items:center; margin-top:20px; }" +
        "#byapps_launch_button .download { background-color:#3897f0; }" +
        "#byapps_launch_button a { display: block; width: 90%; max-width: 300px; height: 40px; font-size: 16px; font-weight: bold; color: white; text-align: center; border-radius: 5px; cursor: pointer; line-height: 40px; margin-bottom: 10px; }" +
        "#byapps_launch_button .web { position:fixed; top:110%;background-color:rgba(0, 0, 0, 0); color:#FFF; border:0px solid #e5e5e5;font-size:14px }";
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
    var elem = "<div id='byapps_launch_block'><div></div>" +
        "<div id='byapps_wrapper' style='display:block;'>" +
        "<div id='byapps_launch_title'>앱으로 보면 더 편리해요!</div>" + 
        "<div id='byapps_launch_button'>" +
        "<a class='download' onclick=\"byapps_launch_action('app','" + arguments[0] + "','" + arguments[1] + "','" + arguments[2] + "')\">앱 설치하고 추가혜택도 받기 ></a>" +
        "<a class='web' onclick=\"byapps_launch_action('web')\">웹페이지로 계속하기 ></a>" +
        "</div></div>";
    document.body.insertAdjacentHTML('afterend', elem);
}

// 기본 이미지 팝업
function byapps_launch_popup() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && !arguments[2]) return false;
    if (byapps_launch_block) byapps_launch_block.parentNode.removeChild(byapps_launch_block);
    if (byapps_launch_button) byapps_launch_button.parentNode.removeChild(byapps_launch_button);

    var style = document.createElement('style');
    style.innerHTML = ".show { transition: opacity 300ms; }" +
        ".hide { opacity: 0; }" +
        "#byapps_launch_block { position:fixed; width:100%; height:100%; top:0; left:0; background-color:rgba(0, 0, 0, 0.7); z-index:1002; }" +
        "#byapps_launch_button { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); text-align:center; z-index:1002; }";
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

    var elem = "<div id='byapps_launch_block'></div>" +
        "<table id='byapps_launch_button' width='100%'><tr height='100%'><td>" +
        "<a onclick=\"byapps_launch_action('app','" + arguments[0] + "','" + arguments[1] + "','" + arguments[2] + "')\">" +
        "<img src='https://via.placeholder.com/600x400/FFF/000.png?text=APP+DOWNLOAD+600x400' width='60%' border='0'></a>" +
        "<a onclick=\"byapps_launch_action('web')\">" +
        "<img src='https://via.placeholder.com/600x40/0ec8a7/000.png?text=CLOSE' width='60%' border='0'></a>" +
        "</td></tr></table>";
    document.body.insertAdjacentHTML('afterend', elem);
    document.querySelector('#byapps_launch_button').classList.add('show');
    document.querySelector('#byapps_launch_button').classList.remove('hide');
}

// 얼럿 팝업
function byapps_launch_alert() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && !arguments[2]) return false;
    if (confirm(" 앱을 설치하시면 더욱 편리하게 이용할수 있습니다.\n설치하시겠습니까?")) byapps_launch_action('app', arguments[0], arguments[1], arguments[2]);
    else byapps_launch_action('web');
}

//강제 이관 팝업
function byapps_launch_update() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && !arguments[2]) return false;
    if (byapps_launch_block) byapps_launch_block.parentNode.removeChild(byapps_launch_block);
    if (byapps_launch_button) byapps_launch_button.parentNode.removeChild(byapps_launch_button);

    var style = document.createElement('style');
    style.innerHTML = "#byapps_launch_block { position:fixed;top:0;left:0;width:100%;height:100%;z-index:1002; }" +
        "#byapps_launch_block > div:nth-child(1) { position:fixed;top:0;left:0;background:#000;opacity:0.3;width:100%;height:100%; }" +
        "#byapps_wrapper { position:fixed; top:50%; left:50%; transform: translate(-50%, -50%); margin:auto; background-color:white; border-radius:20px; padding:20px; width:50%; box-shadow:0 0 20px rgba(0,0,0,0.5); text-align:center;z-index:9999; }" +
        "#byapps_launch_title { font-size:20px; margin-bottom:20px; font-weight:bold; color:#333; }" +
        "#byapps_launch_button { display:flex; flex-direction:column; align-items:center; margin-top:20px; }" +
        "#byapps_launch_button .go_update { background-color:#444; }" +
        "#byapps_launch_button a { display: block; width: 90%; max-width: 300px; height: 40px; font-size: 16px; font-weight: bold; color: white; text-align: center; border-radius: 5px; cursor: pointer; line-height: 40px; margin-bottom: 10px; }";
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
    var elem = "<div id='byapps_launch_block'><div></div>" +
        "<div id='byapps_wrapper' style='display:block;'>" +
        "<div id='byapps_launch_title'>앱 업데이트가 있습니다.</div>" + 
        "<div id='byapps_launch_button'>" +
        "<a class='go_update' onclick=\"byapps_launch_action('app','" + arguments[0] + "','" + arguments[1] + "','" + arguments[2] + "')\">확인</a>" +
        "</div></div>";
    document.body.insertAdjacentHTML('afterend', elem);
}

//강제 이관 이미지 팝업
function byapps_launch_img_update() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && !arguments[2]) return false;
    if (byapps_launch_block) byapps_launch_block.parentNode.removeChild(byapps_launch_block);
    if (byapps_launch_button) byapps_launch_button.parentNode.removeChild(byapps_launch_button);

    var style = document.createElement('style');
    style.innerHTML = ".show { transition: opacity 300ms; }" +
        ".hide { opacity: 0; }" +
        "#byapps_launch_block { position:fixed; width:100%; height:100%; top:0; left:0; background-color:rgba(0, 0, 0, 0.7); z-index:1002; }" +
        "#byapps_launch_button { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); text-align:center; z-index:1002; }";
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

    var elem = "<div id='byapps_launch_block'></div>" +
        "<table id='byapps_launch_button' width='100%'>" +
        "<tr height='100%'><td>" +
        "<a onclick=\"byapps_launch_action('app','" + arguments[0] + "','" + arguments[1] + "','" + arguments[2] + "')\">" +
        "<img src='https://via.placeholder.com/600x400/FFF/000.png?text=APP+DOWNLOAD+600x400' width='60%' border='0'></a>" +
        "<a onclick=\"byapps_launch_action('web')\"><img src='https://via.placeholder.com/600x40/0ec8a7/000.png?text=CLOSE' width='60%' border='0'></a>" +
        "</td></tr></table>";
    document.body.insertAdjacentHTML('afterend', elem);
    document.querySelector('#byapps_launch_button').classList.add('show');
    document.querySelector('#byapps_launch_button').classList.remove('hide');
}

//팝업 액션
function byapps_launch_action(op, schm, pn, aid, link) {
    if (op == "app") {
        if (navigator.userAgent.match(/Android/i)) {
            link = (link) ? "?openurl=" + encodeURIComponent(link) : "";
            if (navigator.userAgent.match("Android4.4") || navigator.userAgent.match("Android 4.4") || (navigator.userAgent.toLocaleLowerCase().search("chrome") > -1 && navigator.appVersion.match(/Chrome\/\d+.\d+/)[0].split("/")[1] > 25)) {
                self.location.href = "intent://" + schm + link + "#Intent;scheme=byapps://" + schm + ";action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=" + pn + ";S.browser_fallback_url=http%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3D" + pn + "%26referrer%3Dutm_source%3Dbyapps%26utm_medium%3Dlink%26utm_campaign%3Dinstall_popup;end";
            } else {
                var clickedAt = +new Date;
                setTimeout(function () {
                    if (+new Date - clickedAt < 1800) {
                        location.href = "market://details?id=" + pn + "&referrer=utm_source%3Dbyapps%26utm_medium%3Dlink%26utm_campaign%3Dinstall_popup";
                    }
                }, 1500);
                if (navigator.userAgent.match("Byapps")) location.href = "byapps://" + schm + link;
                else location.href = "market://details?id=" + pn + "&referrer=utm_source%3Dbyapps%26utm_medium%3Dlink%26utm_campaign%3Dinstall_popup";
            }
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            link = (link) ? "?openurl=" + encodeURIComponent(link) : "";
            var appstore_url = "http://itunes.apple.com/kr/app/id" + aid + "?mt=8";
            var clickedAt = +new Date;
            setTimeout(function () {
                if (+new Date - clickedAt < 2000) {
                    location.href = appstore_url;
                }
            }, 1500);
            location.href = "byapps" + schm + "://" + link;
        }
    } else {
        var visitnow = new Date();
        visitnow.setDate(visitnow.getDate() + 2); //취소 누르면 2일 후에 팝업뜨도록

        // 날짜 셋팅이 yyyy-mm-dd로 계산이 됨, 날짜 변경하기
        var mhMonth = (visitnow.getMonth() + 1 < 10) ? "0" + (visitnow.getMonth() + 1) : visitnow.getMonth() + 1;
        var mhDate = (visitnow.getDate() < 10) ? "0" + visitnow.getDate() : visitnow.getDate();
        var visit_todate = visitnow.getFullYear() + "/" + mhMonth + "/" + mhDate;
        byapps_setItem('BYAPPS_visit_date', visit_todate);

        var byapps_launch_block = document.querySelector("#byapps_launch_block");
        var byapps_launch_button = document.querySelector("#byapps_launch_button");
        if (byapps_launch_block) byapps_launch_block.parentNode.removeChild(byapps_launch_block);
        if (byapps_launch_button) byapps_launch_button.parentNode.removeChild(byapps_launch_button);
    }
}

function byapps_setItem(k, v) {
    if (localStorageEnable) localStorage.setItem(k, v);
    else byapps_setCookie(k, v);
}
function byapps_getItem(k) {
    if (localStorageEnable) return localStorage.getItem(k);
    else return byapps_getCookie(k);
}
function byapps_removeItem(k) {
    if (localStorageEnable) localStorage.removeItem(k);
    else byapps_setCookie(k, '', -100);
}
function byapps_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return decodeURIComponent(c.substring(name.length, c.length));
    }
    return "";
}
function byapps_setCookie(name, value, ex) {
    if (!ex) ex = 365;
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + ex);
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function byapps_getOrderInfo(id, pr) {
    if (navigator.userAgent.match('Byapps')) {
        var price = pr;
        price = Math.floor(price.replace(/[^0-9.]/g, ""));
        var order_info = '{"order_id":"' + id + '","amount":' + price + '}';
        alert('byapps://shopStat?' + order_info);
    }
}

window.addEventListener('load', function () {
    if (!navigator.userAgent.match('Byapps') && (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
        var visitnow = new Date();
        var BYAPPS_visit_count = byapps_getItem('BYAPPS_visit_count');
        var BYAPPS_visit_date = byapps_getItem('BYAPPS_visit_date');
        BYAPPS_visit_count = (!BYAPPS_visit_count) ? 1 : Number(BYAPPS_visit_count) + 1;

        // 날짜 셋팅이 yyyy-mm-dd로 계산이 됨, 날짜 변경하기
        var mhMonth = (visitnow.getMonth() + 1 < 10) ? "0" + (visitnow.getMonth() + 1) : visitnow.getMonth() + 1;
        var mhDate = (visitnow.getDate() < 10) ? "0" + visitnow.getDate() : visitnow.getDate();
        var visit_todate = visitnow.getFullYear() + "/" + mhMonth + "/" + mhDate;
        var BYAPPS_visit_date = localStorage.getItem('BYAPPS_visit_date');

        // BYAPPS_visit_count>2 3번클릭이동시 뜨도록
        if (BYAPPS_visit_count > 2 && (!BYAPPS_visit_date || visit_todate >= BYAPPS_visit_date)) {
            byapps_setItem('BYAPPS_visit_count', 0);                             // 카운팅 0 처리
            byapps_launch_install('mcnsports','kr.co.smartskin.mcnsportscokr','1458476455');          // 앱스키마, 패키지명, 앱스토어 id(레이어팝업)
            //byapps_launch_popup('앱아이디','패키지명','앱스토어 id');          //이미지팝업
            //byapps_launch_alert('앱아이디','패키지명','앱스토어 id');          //텍스트팝업
        } else {
            byapps_setItem('BYAPPS_visit_count', BYAPPS_visit_count);
        }

        // 뒤에 백그라운드 클릭시 2일 후에 다시 뜨도록 처리
        if (document.getElementById("byapps_launch_block") !== null) {
            window.addEventListener('click', function (e) {
                if (document.querySelector("#byapps_wrapper") != null && !document.querySelector("#byapps_wrapper").contains(e.target)) {
                    //byapps_launch_action('web');
                }
            });
        };
    }
}, false);
