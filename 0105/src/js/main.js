//main  
// ;
(function() {
  // Create an instance of Notyf
  // var notyf = new Notyf();

  window.onload = function() {

    FastClick.attach(document.body);

    PD(".nav-box").on("click", "li", function() {
      var navs = PD(".nav-box li").removeClass("on")
      var vm = PD(this)
      vm.addClass("on")
      var floors = PD(".floor")
      floors.hide()
      var index = PD(this).index() + 1
      PD("#floor_" + index).show()
    })
  }
})()

;
function LayerSpe(ele){
  var ele = ele || "#Lay-main-1";

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