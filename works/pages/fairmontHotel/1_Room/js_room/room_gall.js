
    
    $(document).ready(function() {

        let gall_scroll=true;

        $(window).scroll(function() {
            if(gall_scroll) {
                if($(this).scrollTop()+this.innerHeight>$('.gall_main').offset().top+$('.gall_main').innerHeight()/2) {
                    roomSlide();
                    gall_scroll=false;
                }
            }
        })

        function roomSlide() {
    
            let count=1;
            
            function auto() {
                
                $('.gall_main ul').animate({left:'-100vw'}, 1000, function() {
                    $('.gall_main ul').append($(".gall_main ul li:first-child")).css({'left':0});
                    
                });
    
        
                if(count==3) {
                    $(`.gall_navi li:nth-child(1) span`).addClass('longer');
                        
                    $(`.gall_navi li:nth-child(3) span`).removeClass('longer');
                }
        
                else {
                    $(`.gall_navi li:nth-child(${count+1}) span`).addClass('longer');
                    $(`.gall_navi li:nth-child(${count}) span`).removeClass('longer');
                }
                
                count++;
                if(count==4) count=1;
            }
            
            let timer=setInterval(auto,5000);

            return false;
        }
    
    });