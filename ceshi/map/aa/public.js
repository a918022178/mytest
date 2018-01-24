var niulock = 1;
var niunum = 1;

function getLocation() {
    navigator.geolocation.getCurrentPosition(Local);
}


function dingwei(page, lat, lng) {
    page = page.replace('llaatt', lat);
    page = page.replace('llnngg', lng);
    $.get(page, function (data) {}, 'html');
}


function Local(position) {
    var lng = position.coords.longitude;
    var lat = position.coords.latitude;
    var page = "/mobile/near/dingwei/lat/" + lat + "/lng/" + lng + ".html";
    $.get(page, function (data) {
        if (data == '1') {
            $("#local").html("闄勮繎");
        }
    }, 'html');
};


function showLoader(msg) {
    layer.load();
}

function hideLoader() {
    $("#loader").hide();
    layer.closeAll('loading');
}


function ajaxLogin() {
    window.location.href = "/mobile/passport/login.html";
}

function loaddata(page, obj, sc) {
    var link = page.replace('0000', niunum);
    showLoader('姝ｅ湪鍔犺浇涓�....');

    $.get(link, function (data) {
        if (data != 0) {
            obj.append(data);
        }
        niulock = 0;
        hideLoader();
    }, 'html');
    if (sc === true) {
        $(window).scroll(function () {
            var wh = $(window).scrollTop();
            var xh = $(document).height() - $(window).height() - 70;
            if (!niulock && wh >= xh) {
                niulock = 1;
                niunum++;
                var link = page.replace('0000', niunum);
                showLoader('姝ｅ湪鍔犺浇涓�....');
                var timeout = setTimeout(function () {
                    niulock = 0;
                    hideLoader();
                }, 5000);
                $.get(link, function (data) {
                    if (data != 0) {
                        if (timeout) { //娓呴櫎瀹氭椂鍣�
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        obj.append(data);
                    }
                    niulock = 0;
                    hideLoader();
                }, 'html');
            }
        });
    }
}

var input_array = Array();
$(document).ready(function () {
    $("input").each(function () {
        if (!$(this).val()) {
            $(this).val($(this).attr('placeholder'));
        }
        if ($(this).attr('type') == 'password') {
            input_array.push($(this).attr('name'));
            $(this).attr('type', 'text');
        }
    });
    $("input").focus(function () {
        if ($(this).val() == $(this).attr('placeholder')) {
            $(this).val('');
        }
        if (input_array.indexOf($(this).attr('name')) >= 0) {
            $(this).attr('type', 'password');
        }

    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val($(this).attr('placeholder'));
        }
        if ($(this).attr('type') == 'password' && $(this).val() == $(this).attr('placeholder')) {
            input_array.push($(this).attr('name'));
            $(this).attr('type', 'text');
        }
    });

    hideLoader();
});

function check_user_mobile(url1, url2) {
    layer.open({
        type: 1,
        title: '璇风粦瀹氭墜鏈哄悗鏀粯',
        skin: 'layer-ext-demo', //鍔犱笂杈规
        area: ['90%', '340px'], //瀹介珮
        content: '<div class="form-auto form-x"><div class="form-group"><div class="label"><label>鎵嬫満鍙�</label></div><div class="field form-inline"><input class="input input-auto" name="mobile" id="mobile" value="" placeholder="濉啓鎵嬫満鍙风爜" size="15" type="text"> <button class="button" id="jq_send">鑾峰彇楠岃瘉鐮�</button></div></div><div class="form-group"><div class="label"><label>楠岃瘉鐮�</label></div><div class="field"><input class="input input-auto" name="yzm" id="yzm" value="" size="10" placeholder="濉啓楠岃瘉鐮�" type="text"></div></div><div class="form-button"><button id="go_mobile" class="button" type="submit">绔嬪埢璁よ瘉</button></div></div>'
    });
    //鑾峰彇楠岃瘉鐮�
    var mobile_timeout;
    var mobile_count = 100;
    var mobile_lock = 0;
    $(function () {
        $("#jq_send").click(function () {

            if (mobile_lock == 0) {
                mobile_lock = 1;
                $.ajax({
                    url: url1,
                    data: 'mobile=' + $("#mobile").val(),
                    type: 'post',
                    success: function (data) {
                        if (data.status == 'success') {
                            mobile_count = 60;
                            layer.msg(data.msg, {
                                icon: 1
                            });
                            BtnCount();
                        } else {
                            mobile_lock = 0;
                            layer.msg(data.msg, {
                                icon: 2
                            });
                        }
                    }
                });
            }

        });
    });
    BtnCount = function () {
        if (mobile_count == 0) {
            $('#jq_send').html("閲嶆柊鍙戦€�");
            mobile_lock = 0;
            clearTimeout(mobile_timeout);
        } else {
            mobile_count--;
            $('#jq_send').html("閲嶆柊鍙戦€�(" + mobile_count.toString() + ")绉�");
            mobile_timeout = setTimeout(BtnCount, 1000);
        }
    };
    //鎻愪氦
    $('#go_mobile').click(function () {
        var ml = $('#mobile').val();
        var y = $('#yzm').val();
        $.post(url2, {
            mobile: ml,
            yzm: y
        }, function (result) {
            if (result.status == 'success') {
                layer.msg(result.msg);
                setTimeout(function () {
                    location.reload(true);
                }, 3000);
            } else {
                layer.msg(result.msg, {
                    icon: 2
                });
            }
        }, 'json');
    })

    $('.layui-layer-content').css('padding', '15px');

}


function change_user_mobile(url1, url2) {
    layer.open({
        type: 1,
        title: '璇风粦瀹氭墜鏈哄悗鏀粯',
        skin: 'layer-ext-demo', //鍔犱笂杈规
        area: ['90%', '280px'], //瀹介珮
        content: '<div class="padding-big">鎵嬫満鍙�<br /><input name="mobile" id="mobile" type="text" size="13" class="input input-auto" /> <button class="button" type="button" id="jq_send">鑾峰彇楠岃瘉鐮�</button><br /><div class="blank-10"></div>楠岃瘉鐮�<br /><input  class="input input-auto" size="10"  name="yzm" id="yzm" type="text" /> 杈撳叆楠岃瘉鐮�<br><div class="blank-20"></div><input type="submit" value="绔嬪埢璁よ瘉" class="button"  id="go_mobile" /></div>'
    });
    //鑾峰彇楠岃瘉鐮�
    var mobile_timeout;
    var mobile_count = 100;
    var mobile_lock = 0;
    $(function () {
        $("#jq_send").click(function () {
            if (mobile_lock == 0) {
                mobile_lock = 1;
                $.ajax({
                    url: url1,
                    data: 'mobile=' + $("#mobile").val(),
                    type: 'post',
                    success: function (data) {
                        if (data.status == 'success') {
                            mobile_count = 60;
                            layer.msg(data.msg, {
                                icon: 1
                            });
                            BtnCount();
                        } else {
                            mobile_lock = 0;
                            layer.msg(data.msg, {
                                icon: 2
                            });
                        }
                    }
                });
            }

        });
    });
    BtnCount = function () {
        if (mobile_count == 0) {
            $('#jq_send').html("閲嶆柊鍙戦€�");
            mobile_lock = 0;
            clearTimeout(mobile_timeout);
        } else {
            mobile_count--;
            $('#jq_send').html("閲嶆柊鍙戦€�(" + mobile_count.toString() + ")绉�");
            mobile_timeout = setTimeout(BtnCount, 1000);
        }
    };
    //鎻愪氦
    $('#go_mobile').click(function () {
        var ml = $('#mobile').val();
        var y = $('#yzm').val();
        $.post(url2, {
            mobile: ml,
            yzm: y
        }, function (result) {
            if (result.status == 'success') {
                layer.msg(result.msg, {
                    icon: 1
                });
                setTimeout(function () {
                    location.reload(true);
                }, 3000);
            } else {
                layer.msg(result.msg, {
                    icon: 2
                });
            }
        }, 'json');
    })


    $('.layui-layer-title').css('color', '#ffffff').css('background', '#2fbdaa');

}

//鑾峰彇鍩庡競銆佸湴鍖恒€佸晢鍦堢殑涓嬫媺鑿滃崟
function get_option() {

    var city_id = 0;
    var area_id = 0;
    var business_id = 0;

    var city_str = '<option value="0">璇烽€夋嫨...</option>';
    for (a in cityareas.city) {
        if (city_id == cityareas.city[a].city_id) {
            city_str += '<option selected="selected" value="' + cityareas.city[a].city_id + '">' + cityareas.city[a].name + '</option>';
        } else {
            city_str += '<option value="' + cityareas.city[a].city_id + '">' + cityareas.city[a].name + '</option>';
        }
    }

    $("#city_id").html(city_str);

    $("#city_id").change(function () {
        if ($("#city_id").val() > 0) {
            city_id = $("#city_id").val();
            var area_str = ' <option value="0">璇烽€夋嫨...</option>';
            for (a in cityareas.area) {
                if (cityareas.area[a].city_id == city_id) {
                    if (area_id == cityareas.area[a].area_id) {
                        area_str += '<option selected="selected" value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
                    } else {
                        area_str += '<option value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
                    }
                }
            }
            $("#area_id").html(area_str);
            $("#business_id").html('<option value="0">璇烽€夋嫨...</option>');
        } else {
            $("#area_id").html('<option value="0">璇烽€夋嫨...</option>');
            $("#business_id").html('<option value="0">璇烽€夋嫨...</option>');
        }

    });

    if (city_id > 0) {
        var area_str = ' <option value="0">璇烽€夋嫨...</option>';
        for (a in cityareas.area) {
            if (cityareas.area[a].city_id == city_id) {
                if (area_id == cityareas.area[a].area_id) {
                    area_str += '<option selected="selected" value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
                } else {
                    area_str += '<option value="' + cityareas.area[a].area_id + '">' + cityareas.area[a].area_name + '</option>';
                }
            }
        }
        $("#area_id").html(area_str);
    }


    $("#area_id").change(function () {
        if ($("#area_id").val() > 0) {
            area_id = $("#area_id").val();
            var business_str = ' <option value="0">璇烽€夋嫨...</option>';
            for (a in cityareas.business) {
                if (cityareas.business[a].area_id == area_id) {
                    if (business_id == cityareas.business[a].business_id) {
                        business_str += '<option selected="selected" value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
                    } else {
                        business_str += '<option value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
                    }
                }
            }
            $("#business_id").html(business_str);
        } else {
            $("#business_id").html('<option value="0">璇烽€夋嫨...</option>');
        }

    });

    if (area_id > 0) {
        var business_str = ' <option value="0">璇烽€夋嫨...</option>';
        for (a in cityareas.business) {
            if (cityareas.business[a].area_id == area_id) {
                if (business_id == cityareas.business[a].business_id) {
                    business_str += '<option selected="selected" value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
                } else {
                    business_str += '<option value="' + cityareas.business[a].business_id + '">' + cityareas.business[a].business_name + '</option>';
                }
            }
        }
        $("#business_id").html(business_str);
    }
    $("#business_id").change(function () {
        business_id = $(this).val();
    });

}




function changeCAB(c, a, b) {
    $("#city_ids").unbind('change');
    $("#area_ids").unbind('change');
    var city_ids = c;
    var area_ids = a;
    var business_ids = b;
    var city_str = ' <option value="0">璇烽€夋嫨...</option>';
    for (b in cityareas.city) {
        if (city_ids == cityareas.city[b].city_id) {
            city_str += '<option selected="selected" value="' + cityareas.city[b].city_id + '">' + cityareas.city[b].name + '</option>';
        } else {
            city_str += '<option value="' + cityareas.city[b].city_id + '">' + cityareas.city[b].name + '</option>';
        }
    }
    $("#city_ids").html(city_str);

    $("#city_ids").change(function () {
        if ($("#city_ids").val() > 0) {
            city_ids = $("#city_ids").val();
            var area_str = ' <option value="0">璇烽€夋嫨...</option>';
            for (b in cityareas.area) {
                if (cityareas.area[b].city_id == city_ids) {
                    if (area_ids == cityareas.area[b].area_id) {
                        area_str += '<option selected="selected" value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
                    } else {
                        area_str += '<option value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
                    }
                }
            }

            $("#area_ids").html(area_str);
            $("#business_ids").html('<option value="0">璇烽€夋嫨...</option>');


        } else {
            $("#area_ids").html('<option value="0">璇烽€夋嫨...</option>');
            $("#business_ids").html('<option value="0">璇烽€夋嫨...</option>');
        }

    });

    if (city_ids > 0) {
        var area_str = ' <option value="0">璇烽€夋嫨...</option>';
        for (b in cityareas.area) {
            if (cityareas.area[b].city_id == city_ids) {
                if (area_ids == cityareas.area[b].area_id) {
                    area_str += '<option selected="selected" value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
                } else {
                    area_str += '<option value="' + cityareas.area[b].area_id + '">' + cityareas.area[b].area_name + '</option>';
                }
            }
        }
        $("#area_ids").html(area_str);
    }


    $("#area_ids").change(function () {
        if ($("#area_ids").val() > 0) {
            area_ids = $("#area_ids").val();
            var business_str = ' <option value="0">璇烽€夋嫨...</option>';
            for (b in cityareas.business) {
                if (cityareas.business[b].area_id == area_ids) {
                    if (business_ids == cityareas.business[b].business_id) {
                        business_str += '<option selected="selected" value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
                    } else {
                        business_str += '<option value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
                    }
                }
            }
            $("#business_ids").html(business_str);
        } else {
            $("#business_ids").html('<option value="0">璇烽€夋嫨...</option>');
        }

    });

    if (area_ids > 0) {
        var business_str = ' <option value="0">璇烽€夋嫨...</option>';
        for (b in cityareas.business) {
            if (cityareas.business[b].area_id == area_ids) {
                if (business_ids == cityareas.business[b].business_id) {
                    business_str += '<option selected="selected" value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
                } else {
                    business_str += '<option value="' + cityareas.business[b].business_id + '">' + cityareas.business[b].business_name + '</option>';
                }
            }
        }
        $("#business_ids").html(business_str);
    }
    $("#business_ids").change(function () {
        business_ids = $(this).val();
    });
}



function boxmsg(msg, url, timeout, callback) { //淇℃伅,璺宠浆鍦板潃,鏃堕棿
    layer.msg(msg);
    if (url) {
        setTimeout(function () {
            window.location.href = url;
        }, timeout ? timeout : 3000);
    } else if (url === 0) {
        setTimeout(function () {
            location.reload(true);
        }, timeout ? timeout : 3000);
    } else {
        eval(callback);
    }

}

function boxopen(msg, close, style) {
    layer.open({
        type: 1,
        skin: style, //鏍峰紡绫诲悕
        closeBtn: close, //涓嶆樉绀哄叧闂寜閽�
        shift: 2,
        shadeClose: true, //寮€鍚伄缃╁叧闂�
        content: msg
    });

}