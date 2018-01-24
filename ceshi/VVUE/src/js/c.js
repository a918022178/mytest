//接口地址
export const apiUrl = "http://test-api.shijian666.com"
// export const apiUrl="http://api.shijian666.com" 跳转地址
export const linkUrl = "http://test.shijian666.com"
// export const linkUrl="http://www.shijian666.com" 缓动函数
export function pscroll(start, end, that) {
    var target = end,
        leader = start,
        timer = null;
    clearInterval(timer);
    timer = setInterval(function () {
        // target 目标值 leader初始时是滚动的高度
        var step = (target - leader) / 10;
        // 如果大于0向上取整小于0向下取整
        step = step > 0
            ? Math.ceil(step)
            : Math.floor(step);
        // leader发生改变 console.log(step)
        leader = leader + step;
        // 返回到哪一个地方
        window.scrollTo(0, leader);
        if (leader == target) {
            that.flag = 1;
            clearInterval(timer);
        }
    }, 10)
    // clearInterval(timer);
}

// 获取url参数
export function GetRequest() {
    var a = window.location.href;
    var b = a.split('?');
    b.shift();
    var url = '?';
    for (var i = 0; i < b.length; i++) {
        url += b[i] + '&';
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//操作cookie
export function setCookie(key, value, time) {

    var cookie_key = 'B1_' + key;
    var oDate = new Date();
    oDate.setTime(oDate.getTime() + time);
    document.cookie = cookie_key + '=' + value + ';expires=' + oDate.toGMTString() + ';path=/';
}

export function getCookie(name) {

    var arr,
        reg = new RegExp("(^| )B1_" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

export function removeCookie(key) {
    var cookie_key = key;
    document.cookie = cookie_key + '= ;expires=-1; path=/';
}
