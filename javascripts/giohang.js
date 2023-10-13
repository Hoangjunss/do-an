var user=getCurrentUser();
listcart(user);
function listcart(user){
    var list =document.querySelector(".list-cart");
    var s = `
		<tbody>
			<tr>
				<th>STT</th>
				<th>Sản phẩm</th>
				<th>Giá</th>
				
			</tr>`;
    for (var i = 0; i < user.products.length; i++) {
		var namesp = user.products[i].name;
        var p=timKiemTheoMa(list_products,namesp);

		var soluongSp = user.products[i].soluong;
        console.log(p);
        s += `
			<tr>
				<td>` + (i + 1) + `</td>
				<td class="noPadding imgHide">
					<a target="_blank" href="chitietsanpham.html?` + p.name.split(' ').join('-') + `" title="Xem chi tiết">
						` + p.name + `
						<img src="` + p.img + `">
					</a>
				</td>
				<td class="alignRight">` + p.price + ` ₫</td>
				<td class="soluong" >
					
				</td>
			</tr>
		`;
}
list.innerHTML=s;
}
function timKiemTheoMa(list, ten) {
    for (var l of list) {
        if (l.name == ten) return l;
    }
}