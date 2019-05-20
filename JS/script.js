// more and less
$(document).ready(function () {
    $('#MoreAndLess').click(function () {
        $('#moreContent').fadeToggle("slow");
        if (document.getElementById("MoreAndLess").innerHTML == "SHOW MORE") {
            document.getElementById("MoreAndLess").innerHTML = "SHOW LESS";
        } else {
            document.getElementById("MoreAndLess").innerHTML = "SHOW MORE";
        }
    })
});
// video slide
$(document).ready(function () {
    var i = 0;
    var v1 = $('#video1');
    var v2 = $('#video2');
    var v3 = $('#video3');

    var videos = [v1, v2, v3];

    videos[i].css('display', 'block');

    $('#prevBtn').click(function () {
        videos[i].css('display', 'none');
        if (i == 0) {
            i = 2;
        }
        else {
            --i;
        }
        videos[i].css('display', 'block');
    })

    $('#nextBtn').click(function () {
        videos[i].css('display', 'none');
        if (i == 2) {
            i = 0;
        }
        else {
            ++i;
        }
        videos[i].css('display', 'block');
    })
});

// back button
function backOver(x) {
    x.innerHTML = "< Back";
}

function backLeave(x) {
    x.innerHTML = "Back";
}

// top button
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 800) {
        $('.buttons').css('display', 'block');
    } else {
        $('.buttons').css('display', 'none');
    }
});

function topOver(x) {
    x.innerHTML = "^ Top";
}

function topLeave(x) {
    x.innerHTML = "Top";
}

// typing information
var a = 0;
const contentXMEN = '반 돌연변이 체 로비스트 인 LYDIA NANCE와 ' +
    '지구상에서 가장 진보 된 센티넬인 0101의 만남! ' +
    '그들이 X-Men을 죽이려고 하는데!';

function typingXMEN() {
    if (a < contentXMEN.length) {
        document.getElementById('x-men-info').innerHTML += contentXMEN.charAt(a);
        ++a;
        setTimeout(typingXMEN, 30);
    }
}

var b = 0;
const contentDEADPOOL = '데드풀이 되길 원했던 적이 있나요? 지금이 기회입니다! ' +
    '이 시리즈는 단지 당신이 지금까지 읽었던 놀라운 만화책 중' +
    '하나가 아닙니다. 롤 플레잉 모험을 떠나보세요!';

function typingDEADPOOL() {
    if (b < contentDEADPOOL.length) {
        document.getElementById('deadpool-info').innerHTML += contentDEADPOOL.charAt(b);
        ++b;
        setTimeout(typingDEADPOOL, 30);
    }
}

var c = 0;
const contentCIVILWAR = '슈퍼 휴먼의 안전과 자유를 보장하는 비밀스런' +
    '정체성을 지킬 것인가, 아니면 찬성하여 국가안보와' +
    '법을 지킬 것인가?';

function typingCIVILWAR() {
    if (c < contentCIVILWAR.length) {
        document.getElementById('civilwar-info').innerHTML += contentCIVILWAR.charAt(c);
        ++c;
        setTimeout(typingCIVILWAR, 30);
    }
}

// ironman animation
$(document).ready(function () {
    var ironman = $('#ironmanAnimation');
    ironman.click(function () {
        ironman.animate({'bottom': '100px', 'right': '100px'}, 700);
        ironman.animate({'bottom': '10px', 'right': '10px'}, 1000);
    });
});