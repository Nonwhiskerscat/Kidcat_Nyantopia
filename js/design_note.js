function design_note(cat) {
    let kitty='';
    kitty+=
    `
    <div class="design_note dn_${cat.tag_name}">
    <div class="dn_matte" />
    <div class="nyan_zone">
        <div class="close_flex">
            <svg data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 47.59">
                <path class="tone_kitty" d="M47.74,14.65c-.39-4.56-1.85-13.73-5.83-14.58-3.3-.7-7.6,3.75-10.39,7.23,0,0,0,0,0,0-.66-.07-1.27-.14-1.85-.2-.6-.06-1.16-.11-1.72-.15-.69-.05-1.37-.09-2.09-.1-.28,0-.56,0-.85,0h0c-.29,0-.58,0-.85,0-.73,.02-1.41,.05-2.1,.1-.56,.04-1.12,.1-1.72,.16-.57,.06-1.18,.13-1.84,.2,0,0,0,0,0,0C15.69,3.82,11.39-.63,8.08,.07,4.1,.92,2.65,10.09,2.26,14.65,.88,18.63,.12,21.78,0,27.21c-.27,13.31,11.19,20.38,24.99,20.38h0c13.8,0,25.26-7.07,24.99-20.38-.11-5.43-.87-8.58-2.25-12.56Z"/>
            </svg>
            <h4>CLOSE</h4>
        </div>
        <div class="design_bighead">
                <div class="design_header" style="background-color:${cat.backtone}">
                    <div class="semi_nyan_zone">
                        <div class="dh_flex">

                            <div class="dh_contents">
                                <h5>Website</h5>
                                <div class="dh_h4_flex">
                                    <h4 style="color: ${cat.color}">${cat.header.title}</h4>
                                    <span class="kitty_dhicon">${cat_svg(cat.color)}</span>
                                </div>
                                <div class="icon_entire">
                                    <div class="icon_flex link_git">
                                        <img src="./img/Design_note/design_github.png" alt="디자인 깃허브">
                                        <p>Github</p>
                                    </div>

                                    <div class="icon_flex link_web">
                                        <img src="./img/Design_note/design_link.png" alt="디자인 웹링크">
                                        <p>Weblink</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="dh_img">
                                <img src="./img/main/pj_${cat.tag_name}_mockup.png" alt="목업이미지">
                            </div>
                        </div>    
                    </div>

                </div>

                <div class="design_body">
                    <div class="dn_overview dover_${cat.tag_name}">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Overview</h2>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="semi_nyan_zone">
                            <div class="ov_flex">
                                <div class="ov_img_area ov${cat.dn_id}">
                                    <img src="./img/Design_note/overview_${cat.dn_id}_bd.png" alt="#">
                                    <img src="./img/Design_note/overview_${cat.dn_id}_hd.png" alt="#">
                                </div>

                                <div class="ov_cts_area">
                                    <div class="ov_h4_flex">
                                        <div class="h4_left"></div>
                                        <h4>Period</h4>
                                    </div>
                                    <p class="ov_period">${cat.ov.period[0]} ~ ${cat.ov.period[1]}(${cat.ov.date}일)</p>

                                    <div class="ov_h4_flex">
                                        <div class="h4_left"></div>
                                        <h4>Mission</h4>
                                    </div>
                                    <p class="ov_mission">${cat.ov.mission}</p>

                                    <div class="ov_h4_flex">
                                        <div class="h4_left"></div>
                                        <h4>Tools</h4>
                                    </div>
                                    <p class="ov_tool">${cat.ov.tools}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="dn_tnm dtnm_${cat.tag_name}" style="display: ${cat.tnm.contain};">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Tone</h2>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="semi_nyan_zone">
                            <div class="dn_tone_entire">
                                ${put_dtnm(cat.tnm.count, cat.tnm)}
                            </div>
                        </div>
                        


                    </div>

                    <div class="dn_font dfont_${cat.tag_name}" style="display: ${cat.font.contain};">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Font</h2>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="semi_nyan_zone">
                            <div class="dn_font_entire">

                                ${put_dfont(cat.font.count, cat.font)}

                            </div>


                        </div>
                    </div>

                    <div class="dn_grid dgrid_${cat.tag_name}" style="display: ${cat.grid.contain};">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Grid System</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="semi_nyan_zone">
                            <div class="dn_grid_entire">

                            ${put_dgrid(cat.grid.count, cat.grid)}

                            </div>

                        </div>
                    </div>

                    <div class="dn_bi dbi_${cat.tag_name}" style="display: ${cat.bi.contain};">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Bi / Ci</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="semi_nyan_zone">
                            <div class="dn_logo_entire">

                            ${put_dbi(cat, cat.bi.count, cat.bi)}

                            </div>

                        </div>

                    </div>

                    <div class="dn_result dres_${cat.tag_name}">
                        <div class="main_h2">
                            <div class="semi_nyan_zone">
                                <div class="nyan_h2_flex">
                                    <div class="title_trace_area">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                        <img src="./img/Design_note/title_trace_dn.svg" alt="고양이 발자국">
                                    </div>
                                    <div class="title_text_area">
                                        <h2>Result</h2>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div class="semi_nyan_zone">

                            <div class="dn_result_entire">
                                ${put_dres(cat, cat.result.count, cat.result)}

                            </div>

                        </div>

                    </div>
                </div>

                <div class="design_end" style="background-color: ${cat.backtone}">
                    <div class="de_flex">
                        <h4 style="color: ${cat.color}">Kidcat Nyantopia</h4>
                    </div>

                </div>
        </div>

        <div class="close_flex">
            <svg data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 47.59">
                <path class="tone_kitty" d="M47.74,14.65c-.39-4.56-1.85-13.73-5.83-14.58-3.3-.7-7.6,3.75-10.39,7.23,0,0,0,0,0,0-.66-.07-1.27-.14-1.85-.2-.6-.06-1.16-.11-1.72-.15-.69-.05-1.37-.09-2.09-.1-.28,0-.56,0-.85,0h0c-.29,0-.58,0-.85,0-.73,.02-1.41,.05-2.1,.1-.56,.04-1.12,.1-1.72,.16-.57,.06-1.18,.13-1.84,.2,0,0,0,0,0,0C15.69,3.82,11.39-.63,8.08,.07,4.1,.92,2.65,10.09,2.26,14.65,.88,18.63,.12,21.78,0,27.21c-.27,13.31,11.19,20.38,24.99,20.38h0c13.8,0,25.26-7.07,24.99-20.38-.11-5.43-.87-8.58-2.25-12.56Z"/>
            </svg>
            <h4>CLOSE</h4>
        </div>
    </div>
</div>

    `;

    return kitty;
}


function put_dtnm(meow, felis) { // meow: 루프 횟수, cat: 데이터 push 위치, felis: 데이터 이름
    let kitty='';
    for(let neko=0;neko<meow;neko++) {
        
        kitty+=`
        <div class="dn_tone_flex dtnm_${neko}">
            <div class="dn_tone_cat">
                <svg id="dn_tone_cat_${neko}" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 47.59">
                    <path style="fill: ${felis.colors[neko].hex}; stroke-width: 2px; stroke-linejoin:'round'" class="tone_kitty" d="M47.74,14.65c-.39-4.56-1.85-13.73-5.83-14.58-3.3-.7-7.6,3.75-10.39,7.23,0,0,0,0,0,0-.66-.07-1.27-.14-1.85-.2-.6-.06-1.16-.11-1.72-.15-.69-.05-1.37-.09-2.09-.1-.28,0-.56,0-.85,0h0c-.29,0-.58,0-.85,0-.73,.02-1.41,.05-2.1,.1-.56,.04-1.12,.1-1.72,.16-.57,.06-1.18,.13-1.84,.2,0,0,0,0,0,0C15.69,3.82,11.39-.63,8.08,.07,4.1,.92,2.65,10.09,2.26,14.65,.88,18.63,.12,21.78,0,27.21c-.27,13.31,11.19,20.38,24.99,20.38h0c13.8,0,25.26-7.07,24.99-20.38-.11-5.43-.87-8.58-2.25-12.56Z"/>
                </svg>
                <h5 class="dn_hex" style="color: ${felis.colors[neko].let_color};">${felis.colors[neko].hex}</h5>
            </div>

            <div class="dn_tone_txt">
                <h4>${felis.colors[neko].kor}</h4>
                <h5>${felis.colors[neko].eng}</h5>
                <p class="dn_rgb">RGB(${felis.colors[neko].rgb[0]}, ${felis.colors[neko].rgb[1]}, ${felis.colors[neko].rgb[2]})</p>
                <p class="dn_hsb">HSB(${felis.colors[neko].hsb[0]}, ${felis.colors[neko].hsb[1]}, ${felis.colors[neko].hsb[2]})</p>
            </div>
        </div>
        `;
    }

    return kitty;

}

function put_dfont(meow, felis) {
    let kitty='';
    for(let neko=0;neko<meow;neko++) {
        kitty+=
        `
        <div class="dn_font_kit dfont_${neko}">
            <div class="ov_h4_flex">
                <div class="h4_left"></div>
                <h4>${felis.family[neko].title}</h4>
            </div>
    
            <div class="kit_font" style="font-family: '${felis.family[neko].name}';">
                <div class="kit_title">
                    <p class="dn_kit_title">${felis.family[neko].title}</p>
                </div>
    
                <div class="kit_sub">
                    <p class="dn_kit_kor">다람쥐 헌 쳇바퀴에 타고파</p>
                    <p class="dn_kit_spc">1234567890&nbsp&nbsp!@#$%^&*₩</p>
                    <p class="dn_kit_eng">The quick brown fox jumps over a lazy dog.</p>
                </div>
            </div>
        </div>
        `;
    }

    return kitty;

    
}

function put_dgrid(meow, felis) {
    let kitty='';
    for(let neko=0;neko<meow;neko++) {
        kitty+=
        `
        <div class="dn_grid_kit dgrid_${neko}">
            <div class="ov_h4_flex">
                <div class="h4_left"></div>
                <h4>${felis.grid_entire[neko].screen}</h4>
            </div>

            <div class="kit_grid">
                <div class="kit_grid_flex dgrid_${neko}">
                    <div class="grid_break">
                        <p class="grid_title">
                            Break
                        </p>
                        <p class="grid_cts">
                            <span class="gird_break_val">${felis.grid_entire[neko].break[0]}</span>${felis.grid_entire[neko].break[1]}
                        </p>
                    </div>
                    <div class="grid_col">
                        <p class="grid_title">
                            Column
                        </p>
                        <p class="grid_cts">
                            <span class="gird_col_val">${felis.grid_entire[neko].col[0]}</span>${felis.grid_entire[neko].col[1]}
                        </p>
                    </div>
                    <div class="grid_gut">
                        <p class="grid_title">
                            Gutter
                        </p>
                        <p class="grid_cts">
                            <span class="gird_gut_val">${felis.grid_entire[neko].gut[0]}</span>${felis.grid_entire[neko].gut[1]}
                        </p>
                    </div>
                    <div class="grid_cols">
                        <p class="grid_title">
                            Columns
                        </p>
                        <p class="grid_cts">
                            <span class="gird_cols_val">${felis.grid_entire[neko].cols[0]}</span>${felis.grid_entire[neko].cols[1]}
                        </p>
                    </div>
                </div>
            </div>

        </div>

        `;
    }

    return kitty;

    
}

function put_dbi(cat, meow, felis) {
    let kitty='';
    for(let neko=0;neko<meow;neko++) {
        kitty+=
        `
        <div class="dn_logo_kit dbi_${neko}">
            <div class="ov_h4_flex">
                <div class="h4_left"></div>
                <h4>${felis.bi_tag[neko]}</h4>
            </div>
        
            <div class="dn_logo_img">
                <img src="./img/Design_note/${cat.tag_name}/${felis.bi_tag[neko]}_logo.png" alt="로고1">
            </div>
        
        </div>
        `;
    }

    return kitty;
}

function put_dres(cat, meow, felis) {
    let kitty='';
    for(let neko=0;neko<meow;neko++) {
        kitty+=
        `
        <div class="dn_result_kit dbi_${neko}">
            <div class="ov_h4_flex">
                <div class="h4_left"></div>
                <h4>${felis.result_tag[neko]} Page</h4>
            </div>

            <div class="dn_result_img">
                <img src="./img/Design_note/${cat.tag_name}/${felis.result_tag[neko]}_result.png" alt="결과1">
            </div>
        </div>
        `
    }

    return kitty;
}