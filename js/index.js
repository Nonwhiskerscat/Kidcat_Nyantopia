
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
    let w_width=window.innerWidth;

    //body, html, bighead, nyan_zone
    let html$=document.querySelector('html');
    let bighead$=document.querySelector('.bighead');
    let bighead_width=bighead$.offsetWidth;
    let nyan_zone=document.querySelectorAll('.nyan_zone');
    let n_width=nyan_zone[0].offsetWidth;

    //header(logo)
    let header$=document.querySelector('header');
    let header_logo=document.querySelector('.header_logo'); 
    let header_letter_h3 = document.querySelector('.header_logo .text_area h3');
    let header_letter_h4 = document.querySelector('.header_logo .text_area h4');

    //header(gnb_menu)
    let gnb_main_li =  document.querySelectorAll('.gnb_main li');
    let gnb_nyan=document.querySelector('.gnb_nyan'); 
    let gnb_icon=document.querySelector('.gnb_icon');
    let gnb_width=gnb_nyan.offsetWidth;
    let gnb_height=gnb_nyan.offsetHeight;
    let gnb_mobiles=document.querySelectorAll('.gnb_mobile img'); 
    let gnb_list_li = document.querySelectorAll('.gnb_list li'); 
    let gnb_base_bottom=document.querySelector('.base_bottom'); 
    let gnb_light=document.querySelector('.gaussian_light'); 
    let gnb_bead=document.querySelector('.gnb_bead'); 
    let gnb_kitty=document.querySelector('.gnb_kitty'); 
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
    let intro_click_hi=document.querySelector('.intro_click_hi');
    let intro_title_h2 = document.querySelector('.intro_h2 h2');
    let intro_title_h1 = document.querySelector('.intro_h1 h1');
    let intro_wave=document.querySelector('.intro_wave');
    let intro_waves=document.querySelectorAll('.intro_waves');

    //main(title)
    let about_me$=document.querySelector('.main_aboutme');
    let main_myspecs$=document.querySelector('.main_myspecs');
    let main_myskills$=document.querySelector('.main_myskills');
    let main_projects$=document.querySelector('.main_projects');
    let main_contactme$=document.querySelector('.main_contactme');

    //main(my_specs)

    let my_specs_urban_img=document.querySelector('.my_specs_urban img');


    //footer(images)
    let footer_road=document.querySelector('.footer_road');
    let footer_kitty=document.querySelector('.footer_kitty');


    //===========resize에 따라 변하는 요소==========//
    window.addEventListener('resize', ()=> {
        let kit_height=bighead$.offsetHeight;
        let kit_width=bighead$.offsetWidth;

        kit_width=bighead$.offsetWidth;
        kit_height=bighead$.offsetHeight;
        w_height=window.innerHeight;
        w_width=window.innerWidth;
        window_y_axis=window.scrollY+window.innerHeight;
        n_width=nyan_zone[0].offsetWidth;
    });

    //===========스크롤 애니메이션 수치============//

    function nyan_cat() {
        if(w_width<tablet_cat) {
            return 200;
        }
    
        else if(w_width<semi_cat) {
            return 250;
        }
    
        else if(w_width<huge_cat) {
            return 300;
        }
    
        else {
            return 350;
        }
    }

    //===========배경화면 타일 애니메이션============//

    //background(tile)
    let kit=document.querySelector('.tile_back');

    
    function createTile() {

        const el = document.createElement('img');
        let el_rand=Math.ceil(Math.random()*5);
        let el_rot=`${Math.random()*360}deg`
        el.src=`./img/etc/kidcat_back_${el_rand}.png`;
        el.classList.add('tile');
        el.style.marginLeft = `${randomPosition()-el.offsetWidth}px`;
        el.style.rotate=el_rot;
        kit.insertBefore(el, kit.firstChild);
    }

    function createTiles() {
        let kit_height=bighead$.offsetHeight;
        kit.style.height=`${kit_height-footer_road.offsetHeight+footer_kitty.offsetHeight/1.2}px`;
        for(let i = 0; i<kit_height/10; i++) {
            createTile();
        }
    }

    function removeTiles() {
        kit.innerHTML='';
    }

    function randomPosition() {
        let kit_width=bighead$.offsetWidth;
        return (Math.random() * kit_width);
    }

    function tilesBlink() {
        let tiles=document.querySelectorAll('.tile');
        [].forEach.call(tiles, function(tiles) {
            tiles.animate([
                {opacity:0},
                {opacity:1},
                {opacity:0}
                ],
            {
                duration: Math.random()*3000+2000,
                delay: Math.random()*1000,
                easing: 'linear',
                iterations: Infinity
            })
        });
    }

    let mit_timer=null;

    window.addEventListener('resize', ()=> {
        let kit_width=bighead$.offsetWidth;
        let kit_height=bighead$.offsetHeight;

        clearTimeout(mit_timer);
        kit_width=bighead$.offsetWidth;
        kit_height=bighead$.offsetHeight;
        kit.style.height=`${kit_height}px`;
        removeTiles();

        mit_timer=setTimeout(()=> {
            createTiles();
            tilesBlink();
        },500)
    });


    setTimeout(()=> {

        createTiles();
        tilesBlink();
        
    }, 6600);


    ////===========효과 부여==========////

    function paja(cat, kitty) {
        cat.innerHTML=cat.textContent.replace(/\S/g, `<span class='${kitty}'>$&</span>`);
    }


    //===========header==========//



    // 헤더 로고 클릭 시 링크 이동

    let header_h=document.querySelector('header').offsetHeight;

    header_logo.addEventListener('click', function() {
        location.href='./index.html';
    })

    // 헤더 로고 글자 효과

    paja(header_letter_h3, 'hletter');
    paja(header_letter_h4, 'hletter');

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

    window.addEventListener('resize', () => {
        header_h=document.querySelector('header').offsetHeight;
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY>header_h) {
            header$.classList.add('header_fix');
        }

        else {
            header$.classList.remove('header_fix');
        }
    });


    // GNB 슬라이드 효과
    gnb_nyan.style.right=`-${gnb_width}px`;
    
    window.addEventListener('resize', () => {
        
        gnb_width=gnb_nyan.offsetWidth;
        // gnb_height=gnb_nyan.offsetHeight;

        if(!gnb_nyan.classList.contains('gnb_on')) {
                gnb_nyan.style.top=0;
                gnb_nyan.style.left='auto';
                gnb_nyan.style.right=`-${gnb_width}px`;
        }

        else {
            gnb_nyan.style.top=0;
            gnb_nyan.style.left='auto';
            gnb_nyan.style.right=0;
        }

    })

    gnb_icon.addEventListener('click', () => {
        if(!gnb_nyan.classList.contains('gnb_on'))
            {
                gnb_nyan.animate({right:0},
                    {duration: 500,
                    fill: 'forwards'}
                );

                gnb_nyan.classList.add('gnb_on');
                gnb_icon.src="./img/header/jelly_back_short.png";
            }
        
        else 
            {
                gnb_nyan.animate({right:`-${gnb_width}px`},
                {duration: 500,
                fill: 'forwards'}
            );
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

    let gnb_crayon_ani=[
        { transform: 'RotateZ(0)', offset: 0},
        { transform: 'RotateZ(0)', offset: 0.24},
        { transform: 'RotateZ(10deg)', offset: 0.25},
        { transform: 'RotateZ(10deg)', offset: 0.49},
        { transform: 'RotateZ(0)', offset: 0.50},
        { transform: 'RotateZ(0)', offset: 0.74},
        { transform: 'RotateZ(-10deg)', offset: 0.75},
        { transform: 'RotateZ(-10deg)', offset: 0.99},
        { transform: 'RotateZ(0)', offset: 1}
    ];

    let li_img=document.querySelectorAll('header .li_img');
    let li_txt=document.querySelectorAll('header .li_txt');
    console.log(li_img[0])



    function gnb_cat_push(kitty) {
        [].forEach.call(li_img, (cat, idx) => {
            cat.innerHTML='';
            
            if(idx%(li_img.length/2)==kitty) {
                cat.innerHTML = crayon_cat;
                cat.querySelector('img').animate(gnb_crayon_ani, {
                    duration: 70,
                    easing: 'linear',
                    iterations: 'Infinity'
                });
            }
        });

        [].forEach.call(li_txt, (cat, idx) => {
            cat.classList.remove('common_under');
            cat.style.color='white';
            if(idx%(li_txt.length/2)==kitty) {
                cat.classList.add('common_under');
                cat.style.color=identity$;
            }
        })
    }

    gnb_cat_push(0);


    window.addEventListener('scroll', () => {
        console.log(this.scrollY)
        if(this.scrollY<about_me$.offsetTop-header$.offsetHeight) {
            console.log('Intro');
            gnb_cat_push(0);
        }

        else if(this.scrollY<main_myspecs$.offsetTop-header$.offsetHeight) {
            console.log('About me');
            gnb_cat_push(1);
        }

        else if(this.scrollY<main_myskills$.offsetTop-header$.offsetHeight) {
            console.log('My Specs');
            gnb_cat_push(2);
        }

        else if(this.scrollY<main_projects$.offsetTop-header$.offsetHeight) {
            console.log('My Skills');
            gnb_cat_push(3);
        }

        else if(this.scrollY<main_contactme$.offsetTop-header$.offsetHeight) {
            console.log('Peojects');
            gnb_cat_push(4);

        }

        else {
            console.log('Contact Me');
            gnb_cat_push(5);
        }
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

            gnb_nyan.animate({right:`-${gnb_width}px`},
            {duration: 500,
            fill: 'forwards'}
        );
            
            gnb_nyan.classList.remove('gnb_on');
            gnb_icon.src="./img/header/jelly_front_short.png";
            const main_axis = document.getElementById(`main_${idx}`);

            if(idx==0) {
                window.scrollTo({top:0, behavior:'smooth'});
            }
            else {
                console.log(idx);
                window.scrollTo({top: main_axis.offsetTop-header$.offsetHeight, behavior:'smooth'});
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
    

    // 메인 고양이 애니메이션

    intro_images.style.left=`-${intro_kitty_axis}px`;
    intro_images.style.cursor=`pointer`;
    intro_wave.style.opacity= 0;

    
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
        intro_lines_img.style.transform='scale(0)';
    });

    let intro_scale_ani = [
        {transform: 'scale(1.0)'},
        {transform: 'scale(1.4)'},
        {transform: 'scale(1.3)'},
        {transform: 'scale(1.2)'},
        {transform: 'scale(1.0)'},
    ];


    for(let l=0;l<intro_lines_img.length;l++) {
        setTimeout(()=> {
            intro_lines_img[l].animate(intro_scale_ani,{
                duration: 1000,
                fill: "forwards"
            })
        },5000+200*l);
    }

    setTimeout(()=> {
        intro_click_hi.animate(
            intro_scale_ani
        , {
            duration: 1000,
            fill: "forwards"
        })
    },5600)

    setTimeout(()=> {
        intro_images.animate([
            {transform: 'rotateZ(5deg)', transformOrigin: 'bottom center'},
            {transform: 'rotateZ(-5deg)', transformOrigin: 'bottom center'},
            {transform: 'rotateZ(5deg)', transformOrigin: 'bottom center'},
            {transform: 'rotateZ(15deg)', transformOrigin: 'bottom center'},
            {transform: 'rotateZ(5deg)', transformOrigin: 'bottom center'}
        ],
        {
            duration: 3000,
            iterations: 'Infinity'
        })
    },6500);


    intro_images.addEventListener('click', ()=> {
        let kitty_meow_id=Math.floor((Math.random()*8));
        let audio = new Audio(`./audio/kitty_meow_${kitty_meow_id}.wav`);
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
            });

            intro_wave.animate([
                {opacity: 0.5},
                {opacity: 0.2, offset: 0.5},
                {opacity: 0.0, offset: 0.75}
            ], {
                duration: 1000,
                easing: 'linear'
            });
            
            [].forEach.call(intro_waves, (intro_waves, idx)=> {
                intro_waves.animate([
                    {scale: 0},
                    {scale: 2},
                ], {
                    duration: 1000,
                    delay: (idx*2000)
                });
            });

            intro_click_hi.innerHTML='Nyan~';
            intro_click_hi.style.color=identity$;

            setTimeout(()=>{
                intro_click_hi.innerHTML='Click Me~';
                intro_click_hi.style.color='white';
            },1000);
        });
    });

    // 메인 인트로 타이틀 애니메이션
    
    paja(intro_title_h2, 'intro_title_letter');
    paja(intro_title_h1, 'intro_title_letter');

    let intro_title_letter=document.querySelectorAll('.intro_title_letter');
    let intro_kitty_stroke=document.querySelector('.intro_kitty_stroke');

    [].forEach.call(intro_title_letter,(intro_title_letter) => {
        intro_title_letter.style.position='relative';
    })

    intro_title_letter[2].style.transform='rotateX(200deg)';

    let stroke_kitty_frame=[
        {transform: 'rotateZ(0) translateY(0)'},
        {transform: 'rotateZ(-30deg) translateY(-10%)'},
        {transform: 'rotateZ(30deg) translateY(-30%)'},
        {transform: 'rotateZ(-30deg) translateY(-50%)'},
        {transform: 'rotateZ(30deg) translateY(-50%)'},
        {transform: 'rotateZ(-30deg) translateY(-30%)'},
        {transform: 'rotateZ(30deg) translateY(-10%)'},
        {transform: 'rotateZ(0) translateY(0)'}

    ];


    for(let m=0;m<intro_title_letter.length;m++) {

        setTimeout(()=> {
            intro_title_letter[m].animate([
                {color: identity$}

            ]
            , {
                duration: 600
            })
        }, m*50);

        setTimeout(()=> {
            setTimeout(()=> {
                intro_title_letter[m].animate(
                    [
                        {color: identity$, top: '0em'},
                        {color: identity$, top: '-1em'},
                        {color: identity$, top: '-0.5em'},
                        {color: identity$, top: '-0.25em'},
                        {color: identity$, top: '-0em'}
                    ]
                , {
                    duration: 600,
                    fill: "forwards"

                })
            }, m*50);
        }, 2000);
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

        },300);

        setTimeout(()=> {
            intro_kitty_stroke.animate(
                stroke_kitty_frame
            , {
                duration: 1000,
                fill: "forwards"
            })

        },300)
    }, intro_title_letter.length*50+2000);

    //h2_공통요소
    let trace_en=document.querySelectorAll('.title_trace_area');

    [].forEach.call(trace_en, (trace_en, idx) => {
        trace_en.classList.add(`m${idx}_trace_en`);
    });

    let main_h2=document.querySelectorAll('.title_text_area h2');
    [].forEach.call(main_h2, (main_h2, idx)=> {
        paja(main_h2, `m${idx}_h2_letter`);
    })

    function h2_ani() {
            setInterval(()=> {
                if(w_width<tablet_cat) {
                    [].forEach.call(trace_en, (trace_en)=> {
                        trace_en.animate(
                            {transform: 'rotateY(360deg)'}
                        ,{
                            duration: 1500
                        });
                    });
                }

                else {
                    [].forEach.call(trace_en, (trace_en, idx)=> {
                        let semi_trace=document.querySelectorAll(`.m${idx}_trace_en img`);
                
                        [].forEach.call(semi_trace, (semi_trace, idx) => {
                            semi_trace.animate (
                            [
                                {opacity: 1, offset: 0},
                                {opacity: 0, offset: 0.000000001},
                                {opacity: 1, offset: 0.1},
                                {opacity: 1, offset: 1.0}
                            ]
                            ,{
                                duration: 5000-(500*idx),
                                delay: 500*idx,
                                fill: 'forwards'
                            })
                        
                        });
                    })
                }

                setTimeout(()=>{
                [].forEach.call(main_h2, (data,idx)=> {
                        let main_h2_letter=document.querySelectorAll(`.m${idx}_h2_letter`);
                        [].forEach.call(main_h2_letter,(main_h2_letter, idx) => {
                            main_h2_letter.style.display='inline-block';
                            main_h2_letter.style.transformOrigin='bottom center';
                            main_h2_letter.animate([
                                {transform: 'rotateY(0deg) scaleY(1.0)'},
                                {transform: 'rotateY(90deg) scaleY(0.75)'},
                                {transform: 'rotateY(180deg) scaleY(0.5)'},
                                {transform: 'rotateY(270deg) scaleY(0.75)'},
                                {transform: 'rotateY(360deg) scaleY(1)'}
                            ],1500+idx*100);
                        })
                    })
                },1500);

            },5000)

    }
    
    h2_ani();

    //About me
    
    //About me 고양이
    let about_me_back=document.querySelector('.about_me_back');
    let about_me_base=about_me_back.getElementsByClassName('about_me_base');

    [].forEach.call(about_me_base, (cat)=>{
        cat.style.opacity=0;
        cat.style.scale=0;
    });

    
    let about_me_front=document.querySelector('.about_me_front');
    let about_me_kitty=about_me_front.querySelector('img:nth-of-type(1)');
    let about_me_lines=about_me_front.querySelectorAll('img:nth-of-type(n+2)');
    
    
    function about_me_kitty_set() {
        let about_me_kitty_w=about_me_kitty.offsetWidth;
        about_me_kitty.style.transform=`translate(-${about_me_kitty_w}px, 0)`;
    }

    [].forEach.call(about_me_lines, (cat) => {
        cat.style.opacity=0;
        cat.style.scale=0;
    });

    about_me_kitty_set();
    
    
    const about_me_back_fadein = () => {
        [].forEach.call(about_me_base, (cat, idx)=>{
            cat.animate([
                {opacity: 1, scale: 1.0}
            ], {
                duration: 500,
                delay: idx*500,
                fill: 'forwards',
                easing: 'ease-in'
            })
        })
    }

    about_me_kitty.style.opacity=0;


    let about_me_kitty_move = () => {
        
        about_me_kitty.animate (
            {transform: 'translateX(0)', opacity: 1}
            ,
            {
                delay: 1000,
                duration: 2000,
                fill: 'forwards'
            }
        )

        setTimeout(()=> {
            about_me_kitty.style.transformOrigin='14% bottom'
            about_me_kitty.animate ([
                {transform: 'rotateZ(0deg)'},
                {transform: 'rotateZ(-5deg)'},
                {transform: 'rotateZ(0deg)'}
            ]
            , {
                duration: 2000,
                iterations: 'Infinity'
            });
        },3000)
    }

    //about_me 콘텐츠 박스
    let about_me_descri=document.querySelector('.about_me_descri');

    function am_minHeight() {
        if(w_width<tablet_cat) {
            about_me_descri.style.minHeight=`${about_me_descri.offsetHeight+20}px`;
        }
    
        else if(w_width<semi_cat) {
            about_me_descri.style.minHeight=`${about_me_descri.offsetHeight+40}px`;
        }
    
        else {
            about_me_descri.style.minHeight=`none`;
        }
    }
    
    am_minHeight();


    function about_me_descri_set() {
        let about_me_descri_w=about_me_descri.offsetWidth;
        about_me_descri.style.position=`relative`;
        about_me_descri.style.right=`${-about_me_descri_w}px`;
        about_me_descri.style.opacity=`0`
    }

    function about_me_descri_move() {
        about_me_descri.animate({
            right: 0, opacity: 1
        },
        {
            duration: 1000,
            easing: 'ease-in',
            fill: 'forwards'
        })
    }

    about_me_descri_set();
    

    //화면 너비 변경에 따른 about_me 위치 재선정
    window.addEventListener('resize', ()=>{
        about_me_kitty_set();
        about_me_descri_set();
    });

    //aboutme 최종 애니메이션
    
    let am_scroll=true;
    window.addEventListener('scroll', ()=> {
        if(am_scroll) {
            if(window.scrollY+w_height>about_me$.offsetTop+about_me$.offsetHeight/2) {
                about_me_back_fadein();
                about_me_kitty_move();
                about_me_descri_move();
                am_scroll=false;
            }
        }

    });

    //About me 콘텐츠

    let descri_explain=document.querySelectorAll('.descri_explain');
    let am_timer=5000;

    [].forEach.call(descri_explain, (cat, idx)=> {
        cat.classList.add(`de${idx}`);
    });

    
    let idc_h3_entire=document.querySelector('.idc_h3_entire');
    let idc_h3=idc_h3_entire.querySelector('h3');
    
    function am_changer(cat1, cat2) {
        let current=document.querySelector(`.de${cat1}`);
        let current_sub=current.querySelectorAll('div');

        let next=document.querySelector(`.de${cat2}`);
        let next_sub=next.querySelectorAll('div');

        [].forEach.call(next_sub, (cat) => {
            cat.classList.add('next_style');
        });

        [].forEach.call(current_sub, (cat, idx) => {
            cat.animate([
                {top: '0', opacity:1},
                {top: '2em', opacity:0}
            ],
            {
                duration: 500,
                delay: 500*idx,
                fill: 'forwards'
            });
        });

        setTimeout(()=> {
            current.style.display='none';
            next.style.display='block';
        },1000);

        setTimeout(()=> {
            [].forEach.call(next_sub, (cat, idx) => {
                cat.animate({top:'0', opacity:1},
                {
                    duration: 500,
                    delay: 500*idx,
                    fill: 'forwards'
                });
            });
        },1000)
    }

    const am_h3_arr=['접착제', '두더지', '일개미'];

    const am_h3_changer = (cat2) => {
        idc_h3.innerHTML = am_h3_arr[cat2];
        paja(idc_h3, 'idc_letter');

        let idc_letter=document.getElementsByClassName('idc_letter');

        [].forEach.call(idc_letter, (cat, idx)=> {
            cat.style.position='relative';
            cat.style.display='inline-block';
            cat.animate([
                {top: '-0.0em', rotate: '0deg'},
                {top: '-0.5em', rotate: '-10deg'},
                {top: '-0.5em', rotate: '-0deg'},
                {top: '-0.5em', rotate: '10deg'},
                {top: '-0.5em', rotate: '0deg'},
                {top: '-0.5em', rotate: '-10deg'},
                {top: '-0.5em', rotate: '0deg'},
                {top: '0', rotate: '0deg'}
            ]
            , {
                duration: 500,
                delay: 200*idx
            })
        });

    }

    //about me 게이지

    let gauge_current=document.querySelector('.gauge_current');
    

    const am_gauge = () => {
        gauge_current.animate([
            {width: '0%'},
            {width: '100%'} 
        ],
        {
            duration: am_timer
        })
    }

    am_gauge();

    //정지 및 재생


    let am_interval=setInterval(am_contents_changer, am_timer);


    let gauge_toggle=document.querySelector('.gauge_toggle');
    let gauge_toggle_img=gauge_toggle.querySelector('img');

    let am_toggle=true;


    
    gauge_toggle.addEventListener('click',function(e) {
        if(am_toggle) {
            gauge_current.style.display='none';
            clearInterval(am_interval);
            gauge_toggle_img.src='./img/main/about_me_play.png';
            am_toggle=false;
        }
        
        else {
            gauge_current.style.display='block';
            am_gauge();
            am_interval=setInterval(am_contents_changer, am_timer);
            gauge_toggle_img.src='./img/main/about_me_pause.png';
            am_toggle=true;
        }
    })

    //about me 세미타이틀

    let rest_list=document.getElementsByClassName('rest_list');
    [].forEach.call(rest_list, (cat,idx)=> {
        cat.querySelector('p').classList.add(`rest_list_${idx}`);
    });

    document.querySelector(`.rest_list_0`).classList.add('common_under');

    let am_idx=0;
    
    const am_semi_title = (cat1, cat2) => {
        document.querySelector(`.rest_list_${cat1}`).classList.remove('common_under');
        document.querySelector(`.rest_list_${cat2}`).classList.add('common_under');
    }


    function am_contents_changer() {
        
            if(am_idx==descri_explain.length-1) {
                am_changer(am_idx, 0);
                am_semi_title(am_idx, 0);
                am_idx=0;
            }
            else {
                am_changer(am_idx, am_idx+1);
                am_semi_title(am_idx, am_idx+1);
                am_idx++;
            }

            am_h3_changer(am_idx);
            am_gauge();
    }

    //선택 및 재실행
    let am_semi_click=false;

    [].forEach.call(rest_list, (cat, idx) => {
        cat.addEventListener('click',() => {
            clearInterval(am_interval);
            // 시간 정지
            gauge_current.style.display='none';
            gauge_toggle_img.src='./img/main/about_me_play.png';
            am_toggle=false;

            am_changer(am_idx, idx);
            gauge_current.style.display='none';
            gauge_toggle_img.src='./img/main/about_me_pause.png';
            setInterval(am_interval);

                        // idx 재설정
            // am_new_index=idx;

        })
    });


    //My Specs

    //화면 너비에 따른 도시 야경 사진 변화

    const spec_urban = () => {
        if(w_width<semi_cat) my_specs_urban_img.src='./img/main/msurban.png';
        else my_specs_urban_img.src='./img/main/msurbanpc.png';
    }

    spec_urban();

    window.addEventListener('resize', () => {
        spec_urban();
    });

    // 폭죽 효과

    let ms_kitty_img=document.querySelectorAll('.ms_contents_grp img');
    let ms_kitty_txt=document.querySelectorAll('.ms_kitty_txt');
    let ms_contents_fw=document.querySelectorAll('.ms_contents_fw');

    for(let ms=0;ms<ms_kitty_img.length;ms++) {
        ms_kitty_img[ms].classList.add('kitty_img_add');
        ms_kitty_txt[ms].classList.add('kitty_txt_add');
        ms_contents_fw[ms].classList.add('contents_fw_add');
    }

    const spec_fireworks = (cat) => {
        ms_contents_fw[cat].animate([
            {transform: 'translateY(150%)', opacity: 0, offset: 0},
            {transform: 'translateY(150%) scaleY(1)' , opacity: 1, offset: 0.0001},
            {transform: 'translateY(10%) scaleY(1)', opacity: 1, offset: 0.8},
            {transform: 'translateY(0) scaleY(0.1)', opacity: 1},
            {transform: 'translateY(0) scaleY(0.1)', opacity: 0},
        ]
        ,{
            duration: 1500,
            fill: 'forwards'
        });

        ms_kitty_img[cat].animate(
            {scale: 1, opacity: 1}
        ,{
            delay: 1500,
            duration: 500,
            fill: 'forwards'
        });

        ms_kitty_txt[cat].animate(
            {transform: 'translateY(0)', opacity: 1}
        ,{
            delay: 2000,
            duration: 500,
            fill: 'forwards'
        });
    }


    
    

    let ms_scroll=true;

    window.addEventListener('scroll', ()=> {
        if(ms_scroll) {
            if(window.scrollY+w_height>main_myspecs$.offsetTop+main_myspecs$.offsetHeight/2) {
            [].forEach.call(ms_kitty_img, (cat, idx) => {
                    setTimeout(()=>{spec_fireworks(idx)}, idx*500);
                });
            ms_scroll=false;
            }
        }
    });

    //my_skills


    //아이콘 생성

    const mk_coding = document.querySelector('.mk_icons .mcl');
    const mk_graphic = document.querySelector('.mk_icons .mgl');    

    let mk_skills_cod='';
    let mk_skills_gph='';

    const mk_data_url="https://nonwhiskerscat.github.io/kidcat_nyantopia/json/my_skills.json";

    axios.get(mk_data_url)
    .then(
        (res) => {
            let mcl$=res.data.mk_skills_coding;
            let mgl$=res.data.mk_skills_graphic;

            function mk_generator(cat, kitty) {
                kitty+=
                `
                    <div class="mk_skill mk_${cat.id}">
                    <img src="./img/main/my_specs_kitty.png" alt="#">
                        <div class="mk_chart">
                            <div class="chart">
                                <svg>
                                    <circle cx="50%" cy="50%" r="40%" />
                                </svg>
                                <div class="chart_data">
                                    <h4>${cat.tag}</h4>
                                    <p data-num="${cat.prof}"><span class="mk_percent">${cat.prof}</span>%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        
                return kitty;
        
            }
        
            for(let i=0;i<mcl$.length;i++) {
                mk_skills_cod=mk_generator(mcl$[i], mk_skills_cod);
            }
        
            for(let i=0;i<mgl$.length;i++) {
                mk_skills_gph=mk_generator(mgl$[i], mk_skills_gph);
            }
        
            mk_coding.innerHTML=mk_skills_cod;
            mk_graphic.innerHTML=mk_skills_gph;
            mk_graphic.style.display='none';

            let mk_skill_zone=document.querySelectorAll('.mk_skill_zone');

            [].forEach.call(mk_skill_zone, (cat)=> {
                cat.classList.add('ferris_first');
            })

        
            let mk_skill_cod=mk_coding.getElementsByClassName('mk_skill');
            let mk_skill_gph=mk_graphic.getElementsByClassName('mk_skill');
            let mk_skills_kitty=document.querySelector('.mk_skills_kitty');
        
            function svg_kitty(cat){
                if(cat<tablet_cat) {
                    return 'calc(calc(-20px + 30vw)';
                }
            
                else if(cat<semi_cat) {
                    return 'calc(calc(-10px + 20vw)';
                }
            
                else if(cat<huge_cat) {
                    return '120px';
                }
            
                return '160px';
            }
        
            function mk_gauge_ani(cat, kitty) {
                cat.animate([
                    {
                        strokeDashoffset: `calc(${svg_kitty(w_width)}*0.8*${Math.PI})`
                    },
                    {
                        strokeDashoffset: `calc(${svg_kitty(w_width)}*0.8*${Math.PI}*${1-(kitty.prof*0.01)})`
                    }
                ],
                {
                    duration: 3000,
                    fill: 'forwards'
                }
                )
            }
        
        
            [].forEach.call(mk_skill_cod, (cat, idx) => {
                cat.querySelector('circle').style.stroke=`${mcl$[idx].tone}`;
                cat.style.scale=0;
                cat.style.opacity=0;
            });
        
            [].forEach.call(mk_skill_gph, (cat, idx) => {
                cat.querySelector('circle').style.stroke=`${mgl$[idx].tone}`;
                cat.style.scale=0;
                cat.style.opacity=0;
            });
        
            function mk_gauge_ani_entire() {
                [].forEach.call(mk_skill_cod, (cat, idx) => {
                    mk_gauge_ani(cat.querySelector('circle'), mcl$[idx]);
                });
            
                [].forEach.call(mk_skill_gph, (cat, idx) => {
                    mk_gauge_ani(cat.querySelector('circle'), mgl$[idx]);
                });
            }
        
            let mk_scroll=true;

        
            document.addEventListener('scroll',() => {
                if(mk_scroll) {
                    if(w_width<semi_cat) {
                        if(window.scrollY+w_height>main_myskills$.offsetTop+main_myskills$.offsetHeight/2+mk_skills_kitty.offsetHeight) {
                            mk_icons_ani(mk_skill_cod);
                            mk_gauge_ani_entire();
                            mk_scroll=false;
                        }
                    }
        
                    else {
                        if(window.scrollY+w_height>main_myskills$.offsetTop+main_myskills$.offsetHeight/2) {
                            mk_icons_ani(mk_skill_cod);
                            mk_gauge_ani_entire();
                            mk_scroll=false;
                        }
                    }
        
                }
            });

            let lit_timer=null;
        
            window.addEventListener('resize', () => {
                
                clearTimeout(lit_timer);
                lit_timer=setTimeout(()=> {
                    mk_gauge_ani_entire();
                },0)
        
            });
        
            let mk_skills_big=document.querySelector('.mk_skills_big');
            
            mk_skills_big.style.opacity="0";
        
            //잠자는 고양이 효과 + 요소 나타내기 효과
        
            let mk_kitty_entire=document.querySelector('.mk_kitty_entire');
            mk_kitty_entire.classList.add('mk_kitty_style');
            let mk_kitty_zzz=mk_kitty_entire.getElementsByTagName('p');

            function mk_kitty_drop() {
                mk_kitty_entire.animate([
                    {transform: "translateY(-50%)", opacity: 0},
                    {transform: "translateY(0%)", opacity: 0.5},
                    {transform: "translateY(-20%)", opacity: 1},
                    {transform: "translateY(0%)", opacity: 1},
                    {transform: "translateY(-10%)", opacity: 1},
                    {transform: "translateY(0%)", opacity: 1},
                    {transform: "translateY(-5%)", opacity: 1},
                    {transform: "translateY(0%)", opacity: 1}
                ],
                {
                    duration: 3000,
                    easing: 'linear',
                    fill: 'forwards'
                });
        
                setTimeout(()=>{
                    mk_kitty_entire.style.transformOrigin="center bottom"
                    mk_kitty_entire.animate([
                        {rotate: "0deg"},
                        {rotate: "5deg"},
                        {rotate: "0deg"},
                        {rotate: "-5deg"},
                        {rotate: "0deg"}
                    ],
                    {
                        duration: 3000,
                        easing: 'linear',
                        iterations: 'Infinity'
                    });
        
                    setInterval(()=> {
                        [].forEach.call(mk_kitty_zzz, (cat, idx)=> {
                            cat.animate([
                                {opacity: 1},
                                {opacity: 1, offset: 0.99},
                                {opacity: 0}
                            ]
                                , {
                                duration: 2000-500*idx,
                                delay:500*idx,
                                fill:'forwards'
        
                            })
                        })
                    }, 2000);
        
                },3000);
        
        
            }
        
            let mk_kitty_scroll=true;
        
            window.addEventListener('scroll', ()=> {
                if(mk_kitty_scroll) {
                    if(window.scrollY+w_height>main_myskills$.offsetTop+main_myskills$.offsetHeight/2) {
                        mk_kitty_drop();
                        mk_kitty_scroll=false;
                    }
                }
            });

            function mk_icons_ani(kitty) {

                [].forEach.call(kitty, (cat, idx) => {

                    cat.animate([
                        {scale: 0, opacity: 0},
                        {scale: 1, opacity: 1}
                    ], {
                        fill: 'forwards',
                        easing: 'ease-in-out',
                        duration: 500,
                        delay: 200*idx
                    })
                })
            }

            //hover
        
            let mkd_name=document.querySelector('.mkd_name');
            let mkd_work=document.querySelector('.mkd_work');
            let mkd_summ=document.querySelector('.mkd_summ');
            let mkd_bcolor=document.querySelectorAll('.mkd_bcolor');
        
            function mkk_gauge_ani(kitty, prof, freq) {
                kitty[0].animate([
                    {width: `0`},
                    {width: `${prof}%`}
                ],
                    
                {
                    duration: 1000,
                    fill: 'forwards'
                });
        
                kitty[1].animate([
                    {width: `0`},
                    {width: `${freq}%`}
                ],
                {
                    duration: 1000,
                    fill: 'forwards'
                });
            }
        
            function mkk_changer(cat1, cat2) {
                [].forEach.call(cat1, (cat, idx)=> {
                    cat.addEventListener('click', () => {
                        if(w_width<semi_cat) window.scrollTo({top: main_myskills$.offsetTop, behavior:'smooth'});
                        mk_kitty_entire.style.display='none';
                        mk_skills_big.style.opacity=1;
                        mkd_work.innerHTML=`${cat2[idx].work}`;
                        mkd_summ.innerHTML=`${cat2[idx].summ}`;
                        mkd_name.innerHTML=`${cat2[idx].name}`;
            
                        [].forEach.call(mkd_bcolor, (cat, kitty)=> {
                            cat.style.backgroundColor=cat2[idx].tone;    
                        });
        
                        mkk_gauge_ani(mkd_bcolor,cat2[idx].prof, cat2[idx].freq)
            
                        // mkd_bcolor[0].style.width=`${cat2[idx].prof}%`;
                    });
                });
            }
        
            mkk_changer(mk_skill_cod, mcl$);
            mkk_changer(mk_skill_gph, mgl$);
        
            let mk_close=document.querySelector('.mk_close');
            
            mk_close.addEventListener('click', () => {
                mk_kitty_entire.style.display='block';
                mk_skills_big.style.opacity=0;
            });
        
            //skills gnb
        
            let mk_gnb_all = document.querySelectorAll('.mk_gnb_flex li');
            let mk_gnb_kitty = document.querySelectorAll('.mk_gnb_kitty');
            mk_gnb_all[0].classList.add('common_under');

        
            [].forEach.call(mk_gnb_all, (cat, idx) => {
                cat.addEventListener('click', ()=> {
                    mk_gauge_ani_entire();
                    if(w_width<semi_cat) window.scrollTo({top: main_myskills$.offsetTop+main_myskills$.offsetHeight/2, behavior:'smooth'});

                    if(idx) {

                        mk_toggle(mk_coding, mk_graphic);
                        mk_kitty_tag(mk_gnb_kitty[0], mk_gnb_kitty[1]);
                        mk_underbar(cat.previousElementSibling, cat);
                        [].forEach.call(mk_graphic.children,(cat)=> {
                            cat.animate({opacity: 0, scale: 0}, {
                                fill: 'forwards',
                                duration: 0
                            });
                        });
                        mk_icons_ani(mk_skill_gph);
                        
                    }
        
                    else {
                        mk_toggle(mk_graphic, mk_coding);
                        mk_kitty_tag(mk_gnb_kitty[1], mk_gnb_kitty[0]);
                        mk_underbar(cat.nextElementSibling, cat);
                        [].forEach.call(mk_coding.children,(cat)=> {
                            cat.animate({opacity: 0, scale: 0}, {
                                fill: 'forwards',
                                duration: 0
                            });
                        });
                        mk_icons_ani(mk_skill_cod);
        
                    }
                });
            });
        
            function mk_toggle(cat1, cat2) {
                cat1.style.display='none';
        
                if(w_width<semi_cat) {
                    cat2.style.display='flex';
                }
                else cat2.style.display='block';
                
            }
        
            function mk_underbar(cat1, cat2) {
                cat1.classList.remove('common_under');
                cat2.classList.add('common_under');
        
            }
        
            function mk_kitty_tag(cat1, cat2) {
                cat1.innerHTML='';
                cat2.innerHTML='<img src="./img/main/my_skills_gnb_cat.png" alt="GNB냥">'
            }
        
            //resize 버그 개선
        
            function mk_resize(cat) {
                if(cat.style.display!='none') {
                    if(w_width<semi_cat) {
                        cat.style.display='flex'
                    }
                    else cat.style.display='block'
                }
            }
        
            window.addEventListener('resize', () => {
                mk_resize(mk_coding);
                mk_resize(mk_graphic);
            });
        }
    ).catch(err=> {
        console.error('에러발생: ', err);
    });

    //Projects

    const pj_data_url="https://nonwhiskerscat.github.io/kidcat_nyantopia/json/my_projects.json";


    axios.get(pj_data_url)
    .then(
        (res) => {

            let pj_frame='';
            let projs=document.querySelector('.projs');

            let webp_dt=res.data.Webpage;
            let java_dt=res.data.Javascript;
            let react_dt=res.data.React;

            function proj_generator(cat, kitty) {
                [].forEach.call(cat, (neko, idx) => {

                    kitty+=
                    `
                    <div class="proj_${neko.tag}">
                        <div class="proj_flex">
                            <div class="proj_photo">
                                <img class="proj_mockup" src="./img/main/pj_${neko.tag}_mockup.png" alt="목업">
                                <img class="proj_nyanbal" src="./img/main/jelly_back_long.png" alt="냥발">
                                <img class="proj_back" src="./img/main/pj_${neko.tag}_back.png" alt="프로젝트 배경">
                                <img class="proj_back" src="./img/main/pj_${neko.tag}_line.png" alt="프로젝트 배경 라인">
                            </div>
    
                            <div class="proj_contents">
                                <div class="proj_title">
                                    <div class="title_img">
                                        <img src="./img/main/projects_title.png" alt="프로젝트 타이틀">
                                    </div>
                                    <div class="title_txt">
                                        <h4>
                                            ${neko.name}
                                        </h4>
                                    </div>
                                </div>
    
                                <div class="proj_info">
                                    <div class="proj_detail">
                                        <div class="info_tone">
                                            <h5>톤 앤 매너</h5>
                                            <div class="tone_flex">
                                                ${tone_genterator(neko)}
                                            </div>
                                        </div>
    
                                        <div class="info_date">
                                            <h5>작업 기간</h5>
                                            <p class="p_date"><span style="color:${neko.main_tone}" class="info_highlight">${neko.peri}</span>일</p>
                                        </div>
    
                                        <div class="info_per">
                                            <h5>작업 인원</h5>
                                            <p class="p_per"><span style="color:${neko.main_tone}" class="info_highlight">${neko.con}</span>명</p>
                                        </div>
                                    </div>
    
    
                                    <div class="info_desc">
                                        <p class="desc_txt">
                                            ${neko.summ}
                                        </p>
                                    </div>
    
                                    <div class="info_btn_grp">
                                        <button class="btn_design" style="border-color:${neko.main_tone};">
                                            <p class="btn_txt" style="color:${neko.main_tone}">Design Note</p>
                                            <span class="btn_after" style="background-color:${neko.main_tone}">
                                                <p class="btn_txt" style="color:${background$}">디자인 노트</p>
                                            </span>
                                        </button>
    
                                        <button class="btn_web" style="border-color:${neko.main_tone};">
                                            <p class="btn_txt" style="color:${neko.main_tone}">Website</p>
                                            <span class="btn_after" style="background-color:${neko.main_tone}">
                                                <p class="btn_txt" style="color:${background$}">웹사이트</p>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                });

                projs.innerHTML=kitty;
            }

            function tone_genterator(cat) {

                let kitty=''

                if(cat.tone_count) {
                    for(let pjt=0;pjt<cat.tone_count;pjt++) {
                        kitty+=`
                        <div class="tone_cat tone_${cat.tag}" style="width:${100/cat.tone_count}%">
                            <svg id="tone_cat_${cat.tag}_${pjt}" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 47.59">
                                <path style="fill: ${cat.tone[pjt]}; stroke: ${cat.stroke[pjt]}; stroke-width: 2px; stroke-linejoin:'round'" class="tone_kitty" d="M47.74,14.65c-.39-4.56-1.85-13.73-5.83-14.58-3.3-.7-7.6,3.75-10.39,7.23,0,0,0,0,0,0-.66-.07-1.27-.14-1.85-.2-.6-.06-1.16-.11-1.72-.15-.69-.05-1.37-.09-2.09-.1-.28,0-.56,0-.85,0h0c-.29,0-.58,0-.85,0-.73,.02-1.41,.05-2.1,.1-.56,.04-1.12,.1-1.72,.16-.57,.06-1.18,.13-1.84,.2,0,0,0,0,0,0C15.69,3.82,11.39-.63,8.08,.07,4.1,.92,2.65,10.09,2.26,14.65,.88,18.63,.12,21.78,0,27.21c-.27,13.31,11.19,20.38,24.99,20.38h0c13.8,0,25.26-7.07,24.99-20.38-.11-5.43-.87-8.58-2.25-12.56Z"/>
                            </svg>
                        </div>

                        `;
                    }
                }
                else kitty=`
                <div class="tone_cat tone_${cat.tag}">
                    <h1>X</h1>
                </div>
                `;

                return kitty;
            }

            proj_generator(webp_dt,pj_frame);

            let pj_gnb_li=document.querySelectorAll('.proj_gnb_flex li');

            [].forEach.call(pj_gnb_li, (cat2, idx2) => {
                let pj_gnb_kitty=cat2.querySelector('.proj_gnb_kitty');
                if(idx2==0) {
                    cat2.classList.add('common_under');
                    pj_gnb_kitty.innerHTML='<img src="./img/main/my_skills_gnb_cat.png" alt="gnb_kitty">';
                }

                cat2.addEventListener('click', ()=>{
                    let pj_scroll2=['','',''];
                    pj_scroll2.fill(true);
                    let pj_kitty=document.querySelectorAll('.proj_gnb_kitty');
                    [].forEach.call(pj_kitty, cat2=>{cat2.innerHTML=''});
                    [].forEach.call(pj_gnb_li, cat2=>{cat2.classList.remove('common_under')})
                    cat2.classList.add('common_under');
                    pj_gnb_kitty.innerHTML='<img src="./img/main/my_skills_gnb_cat.png" alt="gnb_kitty">';
                    if(idx2==0)  {
                        proj_generator(res.data.Webpage,pj_frame);
                        dnSetter(webp_dt);
                        webSetter(webp_dt);
                    }

                    else if(idx2==1)  {
                        proj_generator(res.data.Javascript,pj_frame);
                        dnSetter(java_dt);
                        webSetter(java_dt);
                    }

                    else {
                        proj_generator(res.data.React,pj_frame);
                        dnSetter(react_dt);
                        webSetter(react_dt);
                    }

                    cat2.classList.add('re-ani');
                    pj_ani_entire(pj_scroll2);
                })
            });
            
            let proj=projs.children;
            
            let pj_big_nyan=main_projects$.querySelector('.big_nyan');
            let pj_scroll=['', '', ''];
            pj_scroll.fill(true);

            function pj_ani_entire(pj_neko) {
                [].forEach.call(proj, (cat, idx)=> {
                    let proj_nyanbal=cat.querySelector('.proj_nyanbal');
                    let proj_photo=cat.querySelector('.proj_photo');
                    let proj_back=cat.querySelectorAll('.proj_back');
    
                    let pj_cont=cat.querySelector('.proj_contents');
                    let pj_title=pj_cont.querySelector('.proj_title');
                    let pj_info=pj_cont.querySelector('.proj_info');
                    let pj_infos=pj_info.children;
    
                    window.addEventListener('scroll', ()=> {
                        if(pj_neko[idx]) {
                            if(window.scrollY+w_height>pj_big_nyan.offsetTop+cat.offsetTop+cat.offsetHeight/2) {
                                pj_kitty_ani(idx);
                                pj_neko[idx]=false;
                            }
                        }
                    });
    
                    
    
                    function pj_idx_x(cat) {
                        let meow=0;
                        switch(cat%4) {
                            case 0: case 2:
                                meow= -n_width;
                                break;
    
                            default:
                                meow= n_width;
                                break;
                            
                        }
    
                        return meow;
                    }
    
                    function pj_idx_y(cat) {
    
                        let meow=0;
                        switch(cat%4) {
                            case 0: case 1:
                                meow= -nyan_cat();
                                break;
    
                            default:
                                meow= nyan_cat();
                                break;
                        }
    
                        return meow;
    
                    }
    
                    function pj_idx_deg(cat, kitty) {
                        let meow=0;
                        switch(cat%4) {
                            case 0: case 3:
                                meow= -kitty;
                                break;
    
                            default:
                                meow= kitty;
                                break;
                        }
    
                        return `${meow}deg`;
                    }
    
                    function pj_opacity() {
                        proj_photo.style.opacity=0;
                        pj_title.style.opacity=0;
                        [].forEach.call(pj_infos, (cat) => {
                            cat.style.opacity=0;
                        });
                    }
    
                    pj_opacity();
    
                    function pj_kitty_ani(neko) {
    
                        pj_opacity();
    
                        proj_photo.animate(
                        [
                            {transform: `translateX(${pj_idx_x(neko)}px) translateY(${pj_idx_y(neko)}px) rotate(${pj_idx_deg(neko,15)})`, opacity: 1},
                            {transform: 'translateX(0) translateY(0) rotate(0)', opacity: 1}
                        ], {
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'linear'
                        });
    
                        pj_title.animate([
                            {transform: `translateX(${-pj_idx_x(neko)}px)`, opacity: 1},
                            {transform: 'translateX(0)', opacity: 1}
                        ], {
                            easing: 'linear',
                            duration: 1000,
                            delay: 1000,
                            fill: 'forwards'
                        });
    
                        [].forEach.call(pj_infos, (cat, idx) => {
                            cat.animate([
                                {transform: `translateX(${-pj_idx_x(neko)}px)`, opacity: 1},
                                {transform: 'translateX(0)', opacity: 1}
                            ], {
                                easing: 'linear',
                                duration: 1000,
                                delay: 1200 + 200*idx,
                                fill: 'forwards'
                            });
                        });
    
                        [].forEach.call(proj_back, (cat, idx)=> {
                            cat.style.scale= 0;
                            cat.animate([
                                {scale: 0},
                                {scale: 1}
                            ], {
                                duration: 500,
                                delay: 1000+200*idx,
                                fill: 'forwards'
                            })
                        });
    
                        proj_nyanbal.animate(
                        [
                            {transform: `rotate(0) translateY(0)`},
                            {transform: `rotate(${pj_idx_deg(neko, 30)}) translateY(${n_width}px)`}
                        ],
                        {
                            duration: 2000,
                            delay: 1500,
                            fill: 'forwards',
                            easing: 'ease-in-out'
                        });
                    }
                });
            }

            pj_ani_entire(pj_scroll);

            let design_note_in=document.querySelector('.design_note');
            design_note_in.style.scale=0;


            function dnSetter(kitty) {
                let design_btns=document.querySelectorAll('.btn_design');
                dn_modal(design_btns, kitty);
            }


            function webSetter(kitty) {
                let link_btns=document.querySelectorAll('.btn_web');
                [].forEach.call(link_btns, (cat, idx) => {
                    cat.addEventListener('click', () => {
                        kitty[idx].web_link ? window.open(kitty[idx].web_link) : alert('미완성된 사이트입니다.');
                    })
                })
            }

            dnSetter(webp_dt);
            webSetter(webp_dt);

            function dn_modal(kitty, meow) {
                [].forEach.call(kitty, (cat, idx) => {
                    cat.addEventListener('click', function() {
                        let dn_top= document.querySelector('html').scrollTop;
                        let dnote=meow[idx].dnote;
                        design_note_in.innerHTML=design_note(dnote);
                        document.body.classList.add('not_scroll');
                        document.body.style.top=`-${dn_top}px`;

                        let design_bigheads=design_note_in.children;
                        [].forEach.call(design_bigheads, (cat) => {
                            cat.style.opacity= 0;

                        })

                        design_note_in.animate({scale: 1},{
                            duration: 500,
                            fill: "forwards"
                        });

                        setTimeout(() => {
                            [].forEach.call(design_bigheads, (cat, idx) => {
                                cat.animate({opacity: 1}, {
                                    duration: 500,
                                    delay: 200*idx,
                                    easing: 'ease-in-out',
                                    fill: 'forwards'
                                });
                            });

                        }, 500);

                        
                        let dn_close_btns=document.querySelectorAll('.design_note .close_flex');

                        [].forEach.call(dn_close_btns, (cat) => {
                            cat.addEventListener('click', function() {
                                document.body.classList.remove('not_scroll');
                                [].forEach.call(design_bigheads, (cat, idx) => {
                                    cat.animate({opacity: 0}, {
                                        duration: 200,
                                        delay: 200*idx,
                                        easing: 'ease-in-out',
                                        fill: 'forwards'
                                    })
                                });

                                setTimeout(() => {
                                    design_note_in.animate({scale: 0},{
                                        duration: 500,
                                        fill: "forwards"
                                    })

                                    design_note_in.innerHTML='';
                                }, 200)

                                window.scrollTo({top:dn_top});

                            });
                        });

                        let dn_git_link=document.querySelector('.link_git');
                        let dn_git_web=document.querySelector('.link_web');



                        dn_git_link.addEventListener('click', () => {
                            window.open(dnote.header.git_link);
                        });

                        dn_git_web.addEventListener('click', () => {
                            dnote.header.web_link? window.open(dnote.header.web_link) : alert('미완성된 사이트입니다.');
                        });
                    });
                });
            }
        }
    ).catch(err=> {
        console.error('에러발생: ', err);
    });

    //Contact Me

    let cm_img_area=main_contactme$.querySelector('.cm_img_area');
    let cm_contents_area=main_contactme$.querySelector('.cm_contents_area');
    let cm_main=cm_contents_area.querySelector('.cm_not_hidden');
    let cm_main_div=cm_main.children;
    let cm_sub=cm_contents_area.querySelector('.cm_hidden');
    let cm_sub_div=cm_sub.children;


    let cm_scroll=true;

    function cm_kitty_set() {
        let cm_img_area_w=cm_img_area.offsetWidth;
        cm_img_area.style.opacity=0;
        cm_img_area.style.transform=`translate(-${cm_img_area_w}px, -${nyan_cat()}px)`;
    }

    function cm_contents_set() {
        let cm_contents_area_w=cm_contents_area.offsetWidth;

        [].forEach.call(cm_main_div, cat => {
            cat.style.opacity=0;
            cat.style.transform=`translate(${cm_contents_area_w}px, ${nyan_cat()}px)`;
        });

        [].forEach.call(cm_sub_div, cat => {
            cat.style.opacity=0;
            cat.style.display='none';
            cat.style.transform=`translate(${cm_contents_area_w}px, ${nyan_cat()}px)`;
        });

    }

    cm_kitty_set();
    cm_contents_set();

    let cm_kitty_icon=document.querySelector('.cm_lower_flex img');

    window.addEventListener('scroll', () => {
        if(cm_scroll) {
            if(window.scrollY+w_height>main_contactme$.offsetTop+main_contactme$.offsetHeight/2) {
                cm_img_area.animate({transform: 'translate(0, 0)', opacity: 1},{
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease-in-out'
                });

                [].forEach.call(cm_main_div, (cat, idx) => {
                    cat.animate({transform: 'translate(0, 0)', opacity: 1},{
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'ease-in-out',
                        delay: 200*idx
                    });
                });

                setTimeout(()=> {
                    setInterval(()=> {
                        cm_kitty_icon.animate(
                            stroke_kitty_frame,
                            {               
                                duration: 1000,
                                fill: "forwards"
                            }
                        )
                    },3000)
                },1500)
                
                cm_scroll=false;
            }
        }
    });

    // 이메일 보내기

    let cm_btn_email=document.querySelector('.btn_send_email');

    function link_email(kitty) {
        kitty.addEventListener('click', () => {
            window.location.href="mailto:nonwhiskerscat@gmail.com?subject=키드캣님 질문 있습니다!";
        });
    }

    link_email(cm_btn_email);

    function cm_contents_toggle(kitty1, kitty2) {

        let cm_contents_area_w=cm_contents_area.offsetWidth;

        [].forEach.call(kitty1, (cat,idx) => {
            cat.animate({
                transform:`translate(${cm_contents_area_w}px, ${nyan_cat()}px)`, opacity: 0
            }, {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out',
                delay: 200*idx
            })

            setTimeout(() => {
                cat.style.display='none';
            }, 1000)
        });

        setTimeout(()=> {
            [].forEach.call(kitty2, (cat,idx) => {
                if(idx==2) {
                    cat.style.display='flex';
                }

                else cat.style.display='block';
                cat.animate({
                    transform:`translate(0,0)`, opacity: 1
                }, {
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease-in-out',
                    delay: 200*idx
                }) 
            });
        },1000)
    }


    let cm_btn_questio=document.querySelector('.btn_question');

    cm_btn_questio.addEventListener('click', () => {
        cm_contents_toggle(cm_main_div, cm_sub_div);
    });

    let cm_btn_cancel=document.querySelector('.btn_cancel');

    cm_btn_cancel.addEventListener('click', (e) => {
        e.preventDefault();
        cm_contents_toggle(cm_sub_div, cm_main_div);
    });

    window.addEventListener('resize', () => {
        cm_kitty_set();
        cm_contents_set();
    })

    //==============footer==============//

    //발자국 svg 효과
    let footer_trace=document.querySelector('.footer_trace');
    svgTraces(footer_trace);

    let traces_g=footer_trace.querySelectorAll('g');
    let traces_scroll=true;

    document.addEventListener('scroll', ()=> {
        if(traces_scroll) {
            if(window.scrollY+w_height>footer_trace.offsetTop) {
                [].forEach.call(traces_g, (cat, idx)=> {
                    cat.style.opacity=0;
                    
                    cat.animate({opacity: 1, offset: 1}, {
                        delay: 200*idx,
                        duration: 200,
                        fill: 'forwards',
                        easing: 'ease-in'
                    })
                });
                traces_scroll=false;
            }
        }
    });

    //일출 효과
    function ft_set() {
        let footer_kitty_h=footer_kitty.offsetHeight;
        footer_kitty.style.transform=`translateY(${footer_kitty_h/2}px)`;
    }

    function sun_rising() {
        footer_kitty.animate({transform: 'translateY(0)'}, {
            duration: 2000,
            easing: 'linear',
            fill: "forwards"
        });
    }

    ft_set();

    let ft_scroll=true;
    let footer_important=document.querySelector('.footer_important');

    function icon_ani(nyan, kitty, meow) {
        nyan.animate([
            {top: '0'},
            {top: `${meow*Math.pow(-1,kitty)}rem`},
            {top: '0'},
            {top: `${-meow*Math.pow(-1,kitty)}rem`},
            {top: '0'}
        ]
        , {
            iterations: "Infinity",
            duration: 2000,
            easing: 'linear'
        });
    }

    window.addEventListener('scroll', () => {
        if(ft_scroll) {
            if(window.scrollY+w_height>footer_important.offsetTop+footer_important.offsetHeight/2) {
                
                sun_rising();

                let footer_icons = document.querySelectorAll('.footer_icons .icon_flex img');

                [].forEach.call(footer_icons, (cat, idx) => {
    
                    icon_ani(cat, idx, 0.4);
    
                    cat.addEventListener('click', () => {
                        switch(idx) {
                            case 0: window.open('https://github.com/Nonwhiskerscat'); break;
                            case 1: window.open('https://open.kakao.com/o/sN6NzS0e'); break;
                            case 2: document.location.href='tel:010-9084-9222'; break;
                            case 3: window.scrollTo({top:0, behavior:'smooth'}); break;
                            case 4: window.open('https://kidcatnyantopia.tistory.com/'); break;
                        }
                    })
                });

                ft_scroll=false;
            }
        }
    });

    window.addEventListener('resize', () => {
        ft_set();
    });
    //footer 아이콘 

});