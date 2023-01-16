
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

    //body, html, bighead
    let html$=document.querySelector('html');
    let bighead$=document.querySelector('.bighead');
    let bighead_width=bighead$.offsetWidth;

    //background(tile)
    let kit=document.querySelector('.tile_back');
    let kit_width=bighead$.offsetWidth;
    let kit_height=bighead$.offsetHeight;

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
    

    //main(my_specs)

    let my_specs_urban_img=document.querySelector('.my_specs_urban img');

    //footer(images)
    let footer_road=document.querySelector('.footer_road');


    //===========resize에 따라 변하는 요소==========//
    window.addEventListener('resize', ()=> {
        kit_width=bighead$.offsetWidth;
        kit_height=bighead$.offsetHeight;
        w_height=window.innerHeight;
        w_width=window.innerWidth;
        window_y_axis=window.scrollY+window.innerHeight;
    });

    //===========스크롤 애니메이션 수치============//

    function scroll_cat() {
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
    
    function createTile() {
        const el = document.createElement('img');
        let el_rand=Math.ceil(Math.random()*5);
        let el_rot=`${Math.random()*360}deg`
        el.src=`../img/etc/kidcat_back_${el_rand}.png`;
        el.classList.add('tile');
        el.style.marginLeft = `${randomPosition()-el.offsetWidth}px`;
        el.style.rotate=el_rot;
        kit.insertBefore(el, kit.firstChild);
    }

    function createTiles() {
        for(let i = 0; i<kit_height/10; i++) {
            createTile();
        }
    }

    function removeTiles() {
        kit.innerHTML='';
    }

    function randomPosition() {
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
        clearTimeout(mit_timer);
        kit_width=bighead$.offsetWidth;
        kit_height=bighead$.offsetHeight;
        kit.style.height=`${kit_height}px`;
        removeTiles();

        mit_timer=setTimeout(()=> {
            createTiles();
            tilesBlink();
            console.log('resize');
        },500)
    });

    kit.style.height=`${kit_height-footer_road.offsetHeight}px`;

    setTimeout(()=> {
        createTiles();
        tilesBlink();
        
    }, 6600);







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
    },6500);


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
            intro_click_hi.color=identity$;

            setTimeout(()=>{
                intro_click_hi.innerHTML='Click Me~';
                intro_click_hi.color='white';
            },1000);
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

    intro_title_letter[2].style.transform='rotateX(200deg)';


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
    }, intro_title_letter.length*50+2000);

    //h2_공통요소
    let trace_en=document.querySelectorAll('.title_trace_area');
    let trace_children=document.querySelectorAll('.title_trace_area img');

    [].forEach.call(trace_en, (trace_en, idx) => {
        trace_en.classList.add(`m${idx}_trace_en`);
    });

    let main_h2=document.querySelectorAll('.title_text_area h2');
    [].forEach.call(main_h2, (main_h2, idx)=> {
        main_h2.innerHTML = main_h2.textContent.replace(/\S/g, `<span class='m${idx}_h2_letter'>$&</span>`);
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
    let about_me$=document.querySelector('.main_aboutme');
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
    let descri_explain_div=document.querySelectorAll('.descri_explain div');
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
        idc_h3.innerHTML = idc_h3.textContent.replace(/\S/g, "<span class='idc_letter'>$&</span>");

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


    const am_contents_changer = () => {
        
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

    //정지 및 재생


    let am_interval=setInterval(am_contents_changer, am_timer);
    

    let gauge_toggle=document.querySelector('.gauge_toggle');
    let gauge_toggle_img=gauge_toggle.querySelector('img');

    let am_toggle=true;


    
    gauge_toggle.onclick=function(e) {
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
    }    

    //선택 및 재실행

    const semi_click = (current_idx, new_idx) => {

        rest_list[new_idx].addEventListener('click', ()=>{
            console.log(current_idx);
            console.log(new_idx);
            
            if(new_idx==current_idx) {
                null;
            }

            else {
                am_changer(current_idx, new_idx);
                am_gauge();
                am_h3_changer(new_idx);
            }
        },false)
    }

    //화면 너비에 따른 도시 야경 사진 변화

    const spec_urban = () => {
        if(w_width<semi_cat) my_specs_urban_img.src='../img/main/my_specs_urban.png';
        else my_specs_urban_img.src='../img/main/my_specs_urban_pc.png';
    }

    spec_urban();

    window.addEventListener('resize', () => {
        spec_urban();
    });

    // 폭죽 효과

    let main_myspecs$=document.querySelector('.main_myspecs');
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

    let main_myskills$=document.querySelector('.main_myskills');

    //아이콘 생성

    const mk_coding = document.querySelector('.mk_icons .mcl');
    const mk_graphic = document.querySelector('.mk_icons .mgl');    

    let mk_skills_cod='';
    let mk_skills_gph='';

    const mk_data_url="https://nonwhiskerscat.github.io/kidcat_nyantopia/json/my_skills.json";

    axios.get(mk_data_url)
    .then(
        (res) => {
            console.log("통신결과", '양호');
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
            });
        
            [].forEach.call(mk_skill_gph, (cat, idx) => {
                cat.querySelector('circle').style.stroke=`${mgl$[idx].tone}`;
        
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
                            mk_gauge_ani_entire();
                            mk_scroll=false;
                        }
                    }
        
                    else {
                        if(window.scrollY+w_height>main_myskills$.offsetTop+main_myskills$.offsetHeight/2) {
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
        
            //잠자는 고양이 효과
        
            let mk_kitty_entire=document.querySelector('.mk_kitty_entire');
            mk_kitty_entire.classList.add('mk_kitty_style');
            let mk_kitty_zzz=mk_kitty_entire.getElementsByTagName('p');
            console.log(mk_kitty_zzz)
        
            function mk_kitty_drop() {
                mk_kitty_entire.animate([
                    {transform: "translateY(-50%)", opacity: 0},
                    {transform: "translateY(0%)", opacity: 1},
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
                        {rotate: "0"},
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
        
            console.log(mk_gnb_kitty[0]);
            console.log(mk_gnb_kitty[1]);
        
            [].forEach.call(mk_gnb_all, (cat, idx) => {
                cat.addEventListener('click', ()=> {
                    mk_gauge_ani_entire();
        
                    if(idx) {
                        mk_toggle(mk_coding, mk_graphic);
                        mk_kitty_tag(mk_gnb_kitty[0], mk_gnb_kitty[1]);
                        mk_underbar(cat.previousElementSibling, cat);
                    }
        
                    else {
                        mk_toggle(mk_graphic, mk_coding);
                        mk_kitty_tag(mk_gnb_kitty[1], mk_gnb_kitty[0]);
                        mk_underbar(cat.nextElementSibling, cat);
        
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

            console.log("통신결과", '양호');

            let pj_frame='';
            console.log(res.data.Javascript[0].tag)

            function proj_generator(cat, kitty) {
                [].forEach.call(cat, (neko, idx) => {
                    console.log(neko);
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
                                                <div class="tone_cat">
                                                    <svg id="tone_cat_${neko.tag}_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 47.59">
                                                        <path class="tone_kitty" d="M47.74,14.65c-.39-4.56-1.85-13.73-5.83-14.58-3.3-.7-7.6,3.75-10.39,7.23,0,0,0,0,0,0-.66-.07-1.27-.14-1.85-.2-.6-.06-1.16-.11-1.72-.15-.69-.05-1.37-.09-2.09-.1-.28,0-.56,0-.85,0h0c-.29,0-.58,0-.85,0-.73,.02-1.41,.05-2.1,.1-.56,.04-1.12,.1-1.72,.16-.57,.06-1.18,.13-1.84,.2,0,0,0,0,0,0C15.69,3.82,11.39-.63,8.08,.07,4.1,.92,2.65,10.09,2.26,14.65,.88,18.63,.12,21.78,0,27.21c-.27,13.31,11.19,20.38,24.99,20.38h0c13.8,0,25.26-7.07,24.99-20.38-.11-5.43-.87-8.58-2.25-12.56Z"/>
                                                    </svg>
                                                </div>                                                   
                                            </div>
                                        </div>
    
                                        <div class="info_date">
                                            <h5>작업 기간</h5>
                                            <p class="p_date"><span class="info_highlight">${neko.peri}</span>일</p>
                                        </div>
    
                                        <div class="info_per">
                                            <h5>작업 인원</h5>
                                            <p class="p_per"><span class="info_highlight">${neko.con}</span>명</p>
                                        </div>
                                    </div>
    
    
                                    <div class="info_desc">
                                        <p class="desc_txt">
                                            ${neko.summ}
                                        </p>
                                    </div>
    
                                    <div class="info_btn_grp">
                                        <button class="btn_design">
                                            <p class="btn_txt">Design Note</p>
                                        </button>
    
                                        <button class="btn_web">
                                            <p class="btn_txt">Website</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                });
                return kitty;
        
            }

            document.querySelector('.projs').innerHTML=proj_generator(res.data.React, pj_frame);


            
        }
    ).catch(err=> {
        console.error('에러발생: ', err);
    });

    //==============footer==============//

    //발자국 svg 효과

    let footer_trace=document.querySelector('.footer_trace');
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
});