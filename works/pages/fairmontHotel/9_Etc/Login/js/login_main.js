$(document).ready(function() {

    let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/


    $('.dive_sec .login_main .login').on('click', function(e) {
        e.preventDefault();

        if($('input#aid').val().length<1) {
            alert('아이디를 입력해 주세요');
        }

        else if($('input#apw').val().length<1) {
            alert('패스워드를 입력해 주세요');
        }

        else if(!idPass.test($('input#aid').val())||!pwPass.test($('input#apw').val())) alert('존재하지 않는 회원입니다.')

        else {
            alert('환영합니다. 회원님!');
            location.href='../../index.html';
        }
    });


        //start
        $('.dive_sec>div').hide();
        $('.dive_sec .login_main').slideDown(500);
    
        //common_back
    
        $('.login_sec .back').on('click', function(){
            $(this).parent().fadeOut(500);
            $('.dive_sec .login_main').delay(500).slideDown(500);
        });
    
        $('.id_find .back, .pw_find .back').on('click', function(){
            $(this).parent().parent().fadeOut(500);
        });
    
        //login_main
    
        $('.dive_sec .login_main .inner_btn:first-child').on('click', function() {
            $('.dive_sec .login_main').fadeOut(500);
            $('.dive_sec .login_idpwfind').delay(500).slideDown(500);
        });
    
        $('.dive_sec .login_main .inner_btn:last-child').on('click', function() {
            $('.dive_sec .login_main').fadeOut(500);
            $('.dive_sec .semi_sign_up').delay(500).slideDown(500);
        });
    
        // $('.dive_sec .login_main .login').on('click', function() {
        //     location.href='../../index.html';
        // });
    
        //login_idpwfind
    
        $('.dive_sec .login_idpwfind ul li:first-child').on('click', function() {
            $(this).parent().parent().fadeOut(500);
            $('.id_find').delay(500).slideDown(500);
        });
    
        $('.dive_sec .login_idpwfind ul li:last-child').on('click', function() {
            $(this).parent().parent().fadeOut(500);
            $('.pw_find').delay(500).slideDown(500);
        });
    
        //semi_sign_up
    
        $('.semi_sign_up button[type=submit]').on('click', function() {
            if($('input#tos').is(":checked")==false){
                alert("이용 약관에 동의해주세요!");
            }
    
            else if($('input#ind').is(":checked")==false){
                alert("개인정보 수집 및 이용에 동의해 주세요!");
            }
    
            else {
                location.href='../../9_Etc/Sign_Up/Sign_up.html';
            }
            
        });

});