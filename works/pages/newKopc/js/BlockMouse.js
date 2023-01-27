window.onload=function(){

    document.onselectstart = function(e) {
        Swal.fire({
            title: "<h5 style='color:#e7a335'>" + '텍스트 도둑질 금지!' + "</h5>",
            html: "<p style='color:#fff; font-size:18px'>"+'텍스트 퍼가려다 나한테 제대로 걸렸냥? <br>한 번만 더 걸리면 가만 안 둔다냥! ฅ(=ↀДↀ=)ฅ'+"</p>",
            imageUrl: './img/기타/alert1(다크).png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#333333',
            confirmButtonColor: '#e7a335',
            font: '#fff'
        })
        return false;
    }


    document.oncontextmenu = function (e) {
        Swal.fire({
            title: "<h5 style='color:#e7a335'>"+'오른쪽 마우스 클릭 금지!'+"</h5>",
            html: "<p style='color:#fff; font-size:18px'>"+'이미지 훔쳐 가지 말고 <br>우리 길고양이들 후원 좀 해주라냥! ฅ(=ↀᴥↀ=)ฅ'+"</p>",
            imageUrl: './img/기타/alert1(다크).png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#333333',
            confirmButtonColor: '#e7a335'
        })
        return false;
    }



}

