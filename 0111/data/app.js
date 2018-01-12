function FloorList(data) {
  var mlc = 10,
    fl1 = [],
    fl2 = [],
    fl3 = [],
    fl4 = [],
    fl5 = [],
    fl6 = [],
    fl7 = [],
    fl0 = [];

  for (var i = 0; i < mlc; i++) {
    fl0.push(data[i]);
  }
  for (var i = mlc; i < mlc * 2; i++) {
    fl1.push(data[i]);
  }
  for (var i = mlc * 2; i < mlc * 3; i++) {
    fl2.push(data[i]);
  }
  for (var i = mlc * 3; i < mlc * 4; i++) {
    fl3.push(data[i]);
  }
  for (var i = mlc * 4; i < mlc * 5; i++) {

    fl4.push(data[i]);
  }

  for (var i = mlc * 5; i < mlc * 6; i++) {

    fl5.push(data[i]);
  }

  for (var i = mlc * 6; i < mlc * 7; i++) {

    fl6.push(data[i]);
  }


  FloorAll(fl0, 'Sportswear', 1);
  FloorAll(fl1, 'Shoes', 2);
  FloorAll(fl2, 'Bag', 3);
  FloorAll(fl3, 'Accessories', 4);
  FloorAll(fl4, 'Equipments', 5);
  FloorAll(fl5, 'Equipments', 6);
  FloorAll(fl6, 'Equipments', 7);

}

function FloorAll(data, imgHead, id) {

  var str = '';
  for (var i = 0; i < data.length; i++) {
    var url = data[i]['链接'];
    var name = data[i]['店铺文案'];
    var img = `./build/css/img/list/${id}-${i+1}.png`;

    str += `<li class="li_${i+1}">
          <a href="${url}"  target="_black" title="${name}">
            <img src="${img}" alt="${name}">
          </a>
        </li>`

  };

  var floor = PD("#floor_" + id);

  floor.find('ul').html(str);

}