//main  
// ;
(function() {
  window.onload = function() {
    FastClick.attach(document.body);
  }
})()

;
function LayerSpe(ele){
  var ele = "#Lay-main-"+ ele;

  var Lay = PD(ele).html();

  console.log(Lay)

  PL.open({
      type: 1,
      title: false,
      closeBtn: false,
      skin: 'layui-Pan-nobg', //没有背景色
      shadeClose: true,
      content: Lay
  });


  PD(".l-close").on("click",function(){
      PL.closeAll();
  })

}