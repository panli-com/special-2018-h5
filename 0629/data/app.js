function FloorList(data) {
  var mlc = 8,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl5 = [],
    fl6 = [],
    fl0 = [];

  for (var i = 0; i < mlc + 4; i++) {
    fl0.push(data[i]);
  }
  for (var i = mlc + 4; i < mlc * 2 + 4; i++) {
    fl1.push(data[i]);
  }
  for (var i = mlc * 2 + 4; i < mlc * 3 + 4; i++) {
    fl2.push(data[i]);
  }
  for (var i = mlc * 3 + 4; i < mlc * 4 + 4; i++) {
    fl3.push(data[i]);
  }
  for (var i = mlc * 4 + 4; i < mlc * 5 + 4; i++) {
    fl4.push(data[i]);
  }
  for (var i = mlc * 5 + 4; i < mlc * 6 + 4; i++) {
    fl5.push(data[i]);
  }
  // for (var i = mlc * 6; i < mlc * 7; i++) {
  //     fl6.push(data[i]);
  // }

  FloorAll(fl0, "cx", 1);
  FloorAll(fl1, "ts", 2);
  FloorAll(fl2, "rw", 3);
  FloorAll(fl3, "sh", 4);
  FloorAll(fl4, "sh", 5);
  // FloorAll(fl5, 'sh', 6);
  // FloorAll(fl6, 'sh', 7);
}

function FloorAll(data, imgHead, id) {
  var str = "";
  for (var i = 0; i < data.length; i++) {
    var name = data[i].店铺名称,
      price = data[i].价格,
      imgUrl = "./build/css/img/list/" + data[i].图片名称,
      Url = data[i].商品导购,
      shopUrl = data[i].店铺链接;

    str += `
      <li>
                    <div class="thumb">
                        <a href="${Url}"  target="_blank">
                            <img src="${imgUrl}" alt="" srcset="">
                        </a>
                    </div>
                    <div class="shop">
                        <a href="${shopUrl}"  target="_blank">
                            <p>${name}</p>
                            <p>满399减100</p>
                        </a>
                    </div>
                    <div class="go">
                        <a href="${shopUrl}"  target="_blank">
                            <span>进店疯抢</span>
                        </a>
                    </div>
                </li>
      `;
  }
  PD(".floor" + id)
    .find("ul")
    .html(str);
}
