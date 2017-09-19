$(function(){
    var $main = $("#main");
    var $globalNav = $('#globalnav');
    var $globalNavButton = $globalNav.find(".globalnav__button");
    var $globalNavButtonWidth;
    var $globalNavButtonPos;
    var $globalNav_bar1 = $globalNavButton.find(".bar1");
    var $globalNav_bar2 = $globalNavButton.find(".bar2");
    var $globalNav_bar3 = $globalNavButton.find(".bar3");
    var $globalNavWidth;
    var $globalNavHeight;
    var $globalNav_bar1_pos;
    var $globalNav_bar2_pos;
    var $globalNav_bar3_pos;
    var openAnimetionTimeline;
    var closeAnimetionTimeline;

    //init
    $globalNavButtonWidth = parseInt($globalNavButton.width());
    $globalNavButtonPos = parseInt($globalNavButton.css("right"));
    $globalNav_bar1_pos = $globalNav_bar1.css("top");
    $globalNav_bar2_pos = $globalNav_bar2.css("top");
    $globalNav_bar3_pos = $globalNav_bar3.css("top");
    $globalNavWidth = $globalNav.css("width");
    $globalNavHeight = $(window).height();
    console.log($globalNavHeight);
    $globalNav.css("height",$globalNavHeight);

    //アニメーションをtimeline管理
    openAnimetionTimeline = new TimelineMax({paused:true,onComplete:function(){ $($main).toggleClass("anim");}});
    closeAnimetionTimeline = new TimelineMax({paused:true,onComplete:function(){ $($main).toggleClass("anim open");}});
    //openアニメーション
    openAnimetionTimeline.addLabel("open_anim1",0);
    openAnimetionTimeline.addLabel("open_anim2",0.2);
    openAnimetionTimeline.insertMultiple([
        //TweenMax.to(要素,x秒でアニメーションする,{style:変えたい値,アニメーション:アニメーションの仕方})
        TweenMax.to($main,0.3,{left:"-" + $globalNavWidth,ease:"Power3.easeOut"}),
        // TweenMax.to($globalNav,0.3,{right:-270,ease:"Power3.easeOut"}),
        TweenMax.to($globalNavButton,0.3,{right:320 - ($globalNavButtonWidth + $globalNavButtonPos),ease:"Power3.easeOut"}),
        TweenMax.to($globalNav_bar1,0.3,{top:$globalNav_bar2_pos,ease:"Power3.easeIn"}),
        TweenMax.to($globalNav_bar2,0.3,{opacity:0,ease:"Power3.easeIn"}),
        TweenMax.to($globalNav_bar3,0.3,{top:$globalNav_bar2_pos,ease:"Power3.easeIn"})
        ],
        "open_anim1"
    );

    openAnimetionTimeline.insertMultiple([
            TweenMax.to($globalNav_bar1,0.3,{rotation:45,ease:"Power3.easeIn"}),
            TweenMax.to($globalNav_bar3,0.3,{rotation:-45,ease:"Power3.easeIn"})
        ],
        "open_anim2"
    );
    //closeアニメーション
    closeAnimetionTimeline.addLabel("close_anim1",0);
    closeAnimetionTimeline.addLabel("close_anim2",0.2);
    closeAnimetionTimeline.insertMultiple([
            //TweenMax.to(要素,x秒でアニメーションする,{style:変えたい値,アニメーション:アニメーションの仕方})
            TweenMax.to($globalNav_bar1,0.2,{rotation:0,ease:"Power3.easeIn"}),
            TweenMax.to($globalNav_bar3,0.2,{rotation:0,ease:"Power3.easeIn"})
        ],
        "close_anim1"
    );

    closeAnimetionTimeline.insertMultiple([
            TweenMax.to($main,0.3,{left:0,ease:"Power3.easeOut"}),
            TweenMax.to($globalNavButton,0.3,{right:$globalNavButtonPos,ease:"Power3.easeOut"}),
            TweenMax.to($globalNav_bar1,0.3,{top:$globalNav_bar1_pos,ease:"Power3.easeIn"}),
            TweenMax.to($globalNav_bar2,0.3,{opacity:1,ease:"Power3.easeIn"}),
            TweenMax.to($globalNav_bar3,0.3,{top:$globalNav_bar3_pos,ease:"Power3.easeIn"})
        ],
        "close_anim2"
    );
    $globalNavButton.on('click',navClick);
    // $(window).resize('resize',resizeEvent);
    function navClick(e){
        if(!$main.hasClass("anim")){
            if($main.hasClass("open")){
                $($main).toggleClass("anim");
                animetion(false);
            }else{
                $($main).toggleClass("anim open");
                animetion(true);
            }
        }
    }

    // true = openAnimetion, false = closeAnimetion
    function animetion(flag){
        if(flag){
            openAnimetionTimeline.play("open_anim1","opan_anim2");
        }else{
            closeAnimetionTimeline.play("close_anim1","close_anim2")
        }
    }
});