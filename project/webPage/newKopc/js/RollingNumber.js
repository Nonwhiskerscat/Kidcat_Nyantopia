window.addEventListener('load',function(){
    var memberCountConTxt= 144783;

    $({ val : 0 }).animate({ val : memberCountConTxt }, {
    duration: 4000,
    step: function() {
    var num = numberWithCommas(Math.floor(this.val));
        $(".dial").text(num);
    },
    
    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(".dial").text(num);
    }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    
}
);