$(function(){
    var marginTop = 0;
    $('.title').on('click',function(){
        console.log('aaaa');
        var rand = rmd();
        var text = fortune(rand);
        console.log(text);
        $(this).text(text);
    });
    function rmd(){
        var rand = Math.floor( Math.random() * 4 );
        return rand;
    }
    function fortune(rand){
        var text = '';
        switch (rand){
            case 0:
                text = '大吉！！！';
                break;
            case 1:
                text = '中吉';
                break;
            case 2:
                text = '小吉';
                break;
            case 3:
                text = '凶！！';
                break;
        }
        return text;
    }
});