window.addEventListener('load', () => {

    //===========반응형==========//
    const mobile_cat=320;
    const tablet_cat=768;
    const semi_cat=1200;
    const huge_cat=1600; 

    //===========톤앤매너==========//
    const identity$='#e87d9e';
    const background$='#000620'; 

    //===========헤더 padding==========//
    const header_margin_mobile$=10;
    const header_margin_tablet$=15;
    const header_margin_semi$=20;


    //===========querySelector, getElement==========//

    //window, document
    let w_height=window.innerHeight;
    let h_height=window.innerWidth;

    //body, html, bighead
    let html$=document.querySelector('html');
    let bighead$=document.querySelector('.bighead');
    let bighead_width=bighead$.offsetWidth;

    //header(logo)
    let header$=document.querySelector('header');
    let header_logo=document.querySelector('.header_logo'); 
    let header_letter_h3 = document.querySelector('.header_logo .text_area h3');
    let header_letter_h4 = document.querySelector('.header_logo .text_area h4');

    //header(gnb_menu)
    let gnb_main_li =  document.querySelectorAll('.gnb_main li');
    let gnb_nyan=document.querySelector('.gnb_nyan'); //3
    let gnb_icon=document.querySelector('.gnb_icon');
    let gnb_width=gnb_nyan.offsetWidth;
    let gnb_height=gnb_nyan.offsetHeight;
    let gnb_mobiles=document.querySelectorAll('.gnb_mobile img'); //1번
    let gnb_list_li = document.querySelectorAll('.gnb_list li'); //2번
    let gnb_base_bottom=document.querySelector('.base_bottom'); //3번
    let gnb_light=document.querySelector('.gaussian_light'); //4번
    let gnb_bead=document.querySelector('.gnb_bead'); // 5번
    let gnb_kitty=document.querySelector('.gnb_kitty'); //6번
    let gnb_kitty_width=gnb_kitty.offsetWidth;
    let gnb_mobile=document.querySelectorAll('.gnb_mobile img'); // 4

    //header(gnb_bar)
    let gnb_base = document.querySelector('.gnb_base');
    let gnb_over = document.querySelector('.gnb_over');
    let gnb_base_width=gnb_base.offsetWidth;
    let window_y_axis=window.scrollY+window.innerHeight;
    let html_height=html$.offsetHeight;

    //main(intro)
    let main_intro$=document.querySelector('.main_intro');
    let intro_images=document.querySelector('.intro_images');
    let intro_kitty=document.querySelector('.intro_kitty');
    let intro_lines_img=document.querySelectorAll('.intro_lines img');
    let intro_kitty_width=intro_kitty.offsetWidth;
    let intro_kitty_axis= bighead_width/2+intro_kitty_width/2;

    let intro_title_h2 = document.querySelector('.intro_h2 h2');
    let intro_title_h1 = document.querySelector('.intro_h1 h1');

    //===========resize에 따라 변하는 요소==========//
    window.addEventListener('resize', ()=> {
        bighead_width=bighead$.offsetWidth;
        w_height=window.innerHeight;
        h_height=window.innerWidth;
    });
    


    ////===========효과 부여==========////


    //===========header==========//



    // 헤더 로고 클릭 시 링크 이동

    header_logo.addEventListener('click', function() {
        location.href='../index.html';
    })

    // 헤더 로고 글자 효과

    header_letter_h3.innerHTML = header_letter_h3.textContent.replace(/\S/g, "<span class='hletter'>$&</span>");
    header_letter_h4.innerHTML = header_letter_h4.textContent.replace(/\S/g, "<span class='hletter'>$&</span>");

    let header_letter=document.querySelectorAll('.hletter');

    setInterval(() => {
        for(let i=0;i<header_letter.length;i++) {
            setTimeout(()=> {
                header_letter[i].animate([
                { transform: 'translate(0, 0)'},
                { transform: 'translate(0, -40%)'},
                { transform: 'translate(0, -20%)'},
                { transform: 'translate(0, -10%)'},
                { transform: 'translate(0, -5%)'},
                { transform: 'translate(0, -0%)'},
            ],{
                duration : 600,
                delay: 0
            })
        },i*100);
        } 
    },3000);

    // 헤더 스크롤 시 고정

    window.addEventListener('scroll', () => {
        if(window.scrollY>0) {
            header$.classList.add('header_fix');
            // [].forEach.call(gnb_main_li,function(gnb_main_li){
            //     gnb_main_li.style.display='none';
            // }); 
            
        }

        else {
            header$.classList.remove('header_fix');
            // [].forEach.call(gnb_main_li,function(gnb_main_li){
            //     gnb_main_li.style.display='block';
            // }); 
        }
    });


    // GNB 슬라이드 효과

    if(window.innerWidth<tablet_cat) {
        gnb_nyan.style.top=`-${gnb_height}px`;
    }

    else {
        gnb_nyan.style.right=`-${gnb_width}px`;
    }

    window.addEventListener('resize', () => {
        
        gnb_width=gnb_nyan.offsetWidth;
        gnb_height=gnb_nyan.offsetHeight;

        if(!gnb_nyan.classList.contains('gnb_on')) {
            if(window.innerWidth<tablet_cat) {
                gnb_nyan.style.top=`-${gnb_height}px`;
                gnb_nyan.style.left=0;
                gnb_nyan.style.right='auto';
            }

            else{
                gnb_nyan.style.top=0;
                gnb_nyan.style.left='auto';
                gnb_nyan.style.right=`-${gnb_width}px`;
            }
        }

        else {
            if(window.innerWidth<tablet_cat) {
                gnb_nyan.style.top=0;
                gnb_nyan.style.left=0;
                gnb_nyan.style.right='auto';
            }

            else{
                gnb_nyan.style.top=0;
                gnb_nyan.style.left='auto';
                gnb_nyan.style.right=0;
            }
        }

    })

    gnb_icon.addEventListener('click', () => {
        if(!gnb_nyan.classList.contains('gnb_on'))
            {
                if(innerWidth<tablet_cat) {
                    gnb_nyan.animate({top:0},
                        {duration: 500,
                        fill: 'forwards'}
                    );
                }

                else {
                    gnb_nyan.animate({right:0},
                        {duration: 500,
                        fill: 'forwards'}
                    );
                }
                gnb_nyan.classList.add('gnb_on');
                gnb_icon.src="./img/header/jelly_back_short.png";
            }
        
        else 
            {
                if(innerWidth<tablet_cat) {
                    gnb_nyan.animate({top:`-${gnb_height}px`},
                        {duration: 500,
                        fill: 'forwards'}
                    );
                }

                else {
                    gnb_nyan.animate({right:`-${gnb_width}px`},
                        {duration: 500,
                        fill: 'forwards'}
                    );
                }
                gnb_nyan.classList.remove('gnb_on');
                gnb_icon.src="./img/header/jelly_front_short.png";
            }
    });

    // GNB 애니메이션


    gnb_icon.addEventListener('click', () => {
        for(let j=0;j<gnb_mobiles.length;j++) {
            gnb_mobiles[j].style.opacity=0;
            setTimeout(()=> {
                gnb_mobiles[j].animate([
                { opacity: '1'}
            ],{
                duration: 500,
                easing: 'ease-in',
                fill: "forwards"
            })
            },500+j*200);
        }

        for(let k=0;k<gnb_list_li.length;k++) {
            gnb_list_li[k].style.opacity=0;
            gnb_list_li[k].style.top='20px';

            setTimeout(()=> {
                gnb_list_li[k].animate([
                {   
                    top: 0,
                    opacity: '1'
                }
            ],{
                duration: 500,
                easing: 'ease-in',
                fill: "forwards"
            })
            },1500+k*200);
        }

        gnb_base_bottom.style.bottom='-36px';
        setTimeout(()=> {
            gnb_base_bottom.animate({bottom: 0},{
                duration: 500,
                easing: 'linear',
                fill: "forwards"
            })
            },500);

        gnb_light.style.opacity=0;
        setTimeout(()=> {
            gnb_light.animate([
                {opacity: 1}
            ],{
                duration: 500,
                easing: 'linear',
                fill: "forwards"
            })
            },1000);

        gnb_kitty.style.right=`-${gnb_kitty_width}px`;
        setTimeout(()=>{
            gnb_kitty.animate([
                { right: '20px'},
            ],{
                duration : 1500,
                delay: 0,
                fill: "forwards"
            })
        }, 1500);



        gnb_bead.style.right=`${gnb_width}px`;
        setTimeout(()=>{
            gnb_bead.animate([
                { transform: 'rotateZ(720deg)', right: '200px'},
            ],{
                duration : 1000,
                delay: 0,
                fill: "forwards"
            })
        }, 2000);

        setTimeout(()=> {
            gnb_bead.animate([
            { transform: 'translateY(0)'},
            { transform: 'translateY(-10px)'},
            { transform: 'translateY(0)'},
            { transform: 'translateY(-5px)'},
            { transform: 'translateY(0)'}
        ],{
            duration : 2000,
            delay: 0,
            iterations: 'Infinity'
        })
        },3000);


    });

    
    // GNB 모빌 Y축 회전 효과


    [].forEach.call(gnb_mobile,function(gnb_mobile){
        gnb_mobile.addEventListener('mouseover', function() {
            this.animate(
                [
                    { transform: 'RotateY(0)'},
                    { transform: 'RotateY(180deg)'},
                    { transform: 'RotateY(360deg)'}
                ], 500)
        });

    }); 

    // GNB 크레용 고양이 애니메이션
    const crayon_cat='<img class="cat_img" src="./img/header/gnb_hover.png" alt="gnb_cat"></img>';

    [].forEach.call(gnb_list_li, gnb_list_li => {
        gnb_list_li.addEventListener('mouseover', () =>{
            gnb_list_li.firstChild.innerHTML=crayon_cat;

            let gnb_cat = gnb_list_li.querySelector('span');
            let gnb_crayon_ani=[
                { transform: 'RotateZ(0)', offset: 0},
                { transform: 'RotateZ(0)', offset: 0.24},
                { transform: 'RotateZ(5deg)', offset: 0.25},
                { transform: 'RotateZ(5deg)', offset: 0.49},
                { transform: 'RotateZ(0)', offset: 0.50},
                { transform: 'RotateZ(0)', offset: 0.74},
                { transform: 'RotateZ(-5deg)', offset: 0.75},
                { transform: 'RotateZ(-5deg)', offset: 0.99},
                { transform: 'RotateZ(0)', offset: 1}
            ];

            gnb_cat.animate( gnb_crayon_ani, {
                duration: 70,
                easing: 'linear',
                iterations: 'Infinity'
            })
        })

        gnb_list_li.addEventListener('mouseleave', () =>{
            gnb_list_li.firstChild.innerHTML='';
        })
    });

    // GNB 네비게이션 바 효과


    gnb_over.style.width=`${(window_y_axis)*100/(html_height)}%`;

    
    let gnb_bar =() => {
        let window_y_axis=window.scrollY+window.innerHeight;
        let html_height=html$.offsetHeight;
        gnb_over.style.width=`${(window_y_axis)*100/(html_height)}%`;
    }

    gnb_bar();
    
    window.addEventListener('scroll', ()=>{
        gnb_bar();
    });
    
    window.addEventListener('resize', () => {
        gnb_base_width=gnb_base.offsetWidth;
    })
    
    gnb_base.addEventListener('click', (e)=> {
        
        let gnb_base_x_axis=(e.offsetX/gnb_base_width);
        
        let gnb_base_scroll_axis=(gnb_base_x_axis*html$.offsetHeight)-window.innerHeight;
        window.scrollTo({top:gnb_base_scroll_axis, behavior:'smooth'});
    });
    
    // GNB 링크(모바일, 태블릿)
    [].forEach.call(gnb_list_li, (gnb_list_li, idx) => {
        gnb_list_li.addEventListener('click', () => {
            if(innerWidth<tablet_cat) {
                gnb_nyan.animate({top:`-${gnb_height}px`},
                    {duration: 500,
                    fill: 'forwards'}
                );
            }

            else {
                gnb_nyan.animate({right:`-${gnb_width}px`},
                    {duration: 500,
                    fill: 'forwards'}
                );
            }
            gnb_nyan.classList.remove('gnb_on');
            gnb_icon.src="./img/header/jelly_front_short.png";
            const main_axis = document.getElementById(`main_${idx}`);

            if(idx==0) {
                window.scrollTo({top:0, behavior:'smooth'});
            }
            else {
                window.scrollTo({top:main_axis.offsetTop-header$.offsetHeight, behavior:'smooth'});
            }

        })
    });


    // GNB 링크(세미, 휴즈)


    [].forEach.call(gnb_main_li, (gnb_main_li, idx) => {
        gnb_main_li.addEventListener('click', () => {

            const main_axis = document.getElementById(`main_${idx}`);

            if(idx==0) {
                window.scrollTo({top:0, behavior:'smooth'});
            }
            else {
                window.scrollTo({top:main_axis.offsetTop-header$.offsetHeight, behavior:'smooth'});
            }
        })
    });

    // 메인1 최대 높이 설정

    // let header_fixpad;
    // if(bighead_width<tablet_cat) header_fixpad=header_margin_mobile$;
    // else if(bighead_width<semi_cat) header_fixpad=header_margin_tablet$;
    // else header_fixpad=header_margin_semi$;

    // let header_fixed_solved=window.innerHeight-2*header_fixpad;
    // main_intro$.style.minHeight=`${header_fixed_solved}px`;

    // window.addEventListener('resize', () => {
    //     let header_fixed_solved=window.innerHeight-2*header_fixpad;
    //     main_intro$.style.minHeight=`${header_fixed_solved}px`;
    // });
    

    // 메인 고양이 애니메이션



    intro_images.style.left=`-${intro_kitty_axis}px`;
    intro_images.style.cursor=`pointer`;

    
    intro_images.animate(
        { transform: 'rotateZ(720deg)',
        left: `${intro_kitty_axis}px`}
        ,{
            duration : 3000,
            delay: 0,
            fill: "forwards"
        });


    setTimeout(()=> {
        intro_images.animate(
            { transform: 'rotateZ(360deg)',
            left: `0px`}
    ,{
        duration : 2000,
        delay: 0,
        fill: "forwards"
    })
    },3000);

    [].forEach.call(intro_lines_img, (intro_lines_img, idx)=> {
        intro_lines_img.style.opacity=0;
    });


    for(let l=0;l<intro_lines_img.length;l++) {
        setTimeout(()=> {
            intro_lines_img[l].animate([
                { 
                    
                    opacity: 1,
                }
            ],{
                duration: 200,
                fill: "forwards"
            })


        },5000+200*l);
    }

    setTimeout(()=> {
        intro_images.animate([
            {transform: 'rotateZ(5deg)'},
            {transform: 'rotateZ(-5deg)'},
            {transform: 'rotateZ(5deg)'},
            {transform: 'rotateZ(15deg)'},
            {transform: 'rotateZ(5deg)'}
        ],
        {
            duration: 3000,
            iterations: 'Infinity'
        })
    },5600);


    intro_images.addEventListener('click', ()=> {
        let kitty_meow_id=Math.floor((Math.random()*8));
        let audio = new Audio(`../audio/kitty_meow_${kitty_meow_id}.wav`);
        audio.play();

        let kitty_jump;

        if(window.innerWidth<tablet_cat) {
            kitty_jump=-30;
        }

        else if(window.innerWidth<semi_cat) {
            kitty_jump=-40;
        }

        else if(window.innerWidth<huge_cat) {
            kitty_jump=-55;
        }

        else kitty_jump=-70;


        setTimeout(()=> {
            intro_images.animate([
                {top: '0'},
                {top: `${kitty_jump}px`},
                {top: `${kitty_jump*(2/3)}px`},
                {top: `${kitty_jump*(1/3)}px`},
                {top: `${kitty_jump*(1/6)}px`},
                {top: '0', offset: 0.3},
                {top: `${kitty_jump*(1/3)}px`},
                {top: `${kitty_jump*(1/6)}px`},
                {top: '0px'}
            ],
            {
                duration: 1000,
                easing: 'ease-in'
            })
        });
    });

    // 메인 인트로 타이틀 애니메이션
    

    intro_title_h2.innerHTML = intro_title_h2.textContent.replace(/\S/g, "<span class='intro_title_letter'>$&</span>");
    intro_title_h1.innerHTML = intro_title_h1.textContent.replace(/\S/g, "<span class='intro_title_letter'>$&</span>");

    let intro_title_letter=document.querySelectorAll('.intro_title_letter');
    let intro_kitty_stroke=document.querySelector('.intro_kitty_stroke');

    [].forEach.call(intro_title_letter,(intro_title_letter) => {
        intro_title_letter.style.position='relative';
    })

    intro_title_letter[2].style.transform='rotateX(200deg)'


    for(let m=0;m<intro_title_letter.length;m++) {

        setTimeout(()=> {
            intro_title_letter[m].animate(
                {color: identity$}
            , {
                duration: 600
            })
        }, m*50);

        setTimeout(()=> {
            setTimeout(()=> {
                intro_title_letter[m].animate(
                    {color: identity$}
                , {
                    duration: 200,
                    fill: "forwards"

                })
            }, m*50);
        }, 1300);
    } 

    setTimeout(()=> {

            intro_kitty_stroke.animate(
                [
                    {opacity:1},
                    {opacity:0}
                ]
            , {
                duration: 300,
                fill: "forwards"
            })


        setTimeout(()=> {
            intro_kitty_stroke.src="./img/main/intro_kitty_picto_pink.png";
            intro_kitty_stroke.animate(
                [
                    {opacity:0},
                    {opacity:1}
                ]
            , {
                duration: 300,
                fill: "forwards"
            })

        },300)

        setTimeout(()=> {
            intro_kitty_stroke.animate(
                [
                    {transform: 'rotateZ(0) translateY(0)'},
                    {transform: 'rotateZ(-30deg) translateY(-10%)'},
                    {transform: 'rotateZ(30deg) translateY(-30%)'},
                    {transform: 'rotateZ(-30deg) translateY(-50%)'},
                    {transform: 'rotateZ(30deg) translateY(-50%)'},
                    {transform: 'rotateZ(-30deg) translateY(-30%)'},
                    {transform: 'rotateZ(30deg) translateY(-10%)'},
                    {transform: 'rotateZ(0) translateY(0)'}

                ]
            , {
                duration: 1000,
                fill: "forwards"
            })

        },300)

        

    }, intro_title_letter.length*50+1300)

});
