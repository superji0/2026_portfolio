function filterMore(){
    $("#filterBox").toggleClass('open');
    $("#filter_more").toggleClass('close');
}

function floatingShow(){
    $("#asideTool").toggleClass('open');
}

$(function(){
    $("#shareGoods .btn_share").click(function(){
        $(this).next().toggle("show");
        $("#shareGoods .btn_close").click(function(){
            $(".item_share").toggle("hide");
        });
    });

    $(".btn_pick").click(function(){
        $(this).toggleClass("active");
    });

    $('.btn_minus').click(function(e){
        e.preventDefault();
        var stat = $(this).siblings('.order_num').val();
        var num = parseInt(stat,10);
        num--;
        if(num<=0){
            alert('1개 미만은 주문할 수 없습니다.');
            num =1;
        }
        $(this).siblings('.order_num').val(num);
    });

    $('.btn_plus').click(function(e){
        e.preventDefault();
        var stat = $(this).siblings('.order_num').val();
        var num = parseInt(stat,10);
        num++;

        if(num>999){
            alert('더이상 늘릴수 없습니다.');
            num=999;
        }
        $(this).siblings('.order_num').val(num);
    });
});

$(document).ready(function(){
    var fileTarget = $('.input_file .filebox_hide');
    
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.file_nm').val(filename);
    });
});

$(function(){
    $('.btn_layer_show').click(function(){
        var activeLayer = $(this).prop('name');
        
        $('body').removeClass('dim');
        $('.layer_wrap').removeClass('show');

        $('body').toggleClass('dim');
        $('.layer_wrap' + '.' + activeLayer).toggleClass('show');
    })

    $('.layer_wrap .btn_closed').click(function(){
        $('body').toggleClass('dim');
        $(this).closest('.layer_wrap').toggleClass('show');
    })

    $('#chk_all').click(function(){
        if($('#chk_all').prop('checked')) {
            $('input[name=goods_chk]').prop('checked',true);
            $('#chk_all_bot').prop('checked',true);
        } else {
            $('input[name=goods_chk]').prop('checked',false);
            $('#chk_all_bot').prop('checked',false);
        }
    })

    $('#chk_all_bot').click(function(){
        if($('#chk_all_bot').prop('checked')) {
            $('input[name=goods_chk]').prop('checked',true);
            $('#chk_all').prop('checked',true);
        } else {
            $('input[name=goods_chk]').prop('checked',false);
            $('#chk_all').prop('checked',false);
        }
    })

    $('#brand_chk_all').click(function(){
        $('input[name=brand_chk]').prop('checked',true);
        $('#brand_chk_all').prop('checked',true);
    })
})