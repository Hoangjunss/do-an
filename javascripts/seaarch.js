const categories = [...new Set(list_products.map((item) => { return item }))]

const displayItem = (items) => {
    
    document.getElementById('root').innerHTML = items.map((item) => {
        var { img, name, price , masp} = item;
        var chitietSp='chitietsanpham.html?' +name.split(' ').join('-');
        console.log(masp);
        return (
            `<div class='box col-sm-5'>
            <a href="` + chitietSp + `">
                <div class='img-box'>
                    <img class='images' src=${img}></img>
                </div> 
                <div class='bottom'>
                    <p name='name'>${name}</p>
                    <h2>$ ${price}.00</h2>
                <button class='btn'  >Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});
function getcompany(){
     const searchData = document.getElementById('list-company').value.toLowerCase();
     console.log(searchData);
    
     const filteredData = categories.filter((item) => {
        return (
            item.company.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
}
function getprice(){
    const searchData = document.getElementById('list-price').value.toLowerCase();
    console.log(searchData);
    const filteredData = categories.filter((item) => {
        return (
           item.listprice && item.listprice.includes(searchData)
        )
    })
    console.log(filteredData);
    displayItem(filteredData)
    
}
function getsearch(){
    const searchDataprice = document.getElementById('list-price').value.toLowerCase();
    
    const searchDatacompany = document.getElementById('list-company').value.toLowerCase();
    
    if(searchDatacompany!="company" && searchDataprice!="price"){
        console.log("1");
        const filteredData = categories.filter((item) => {
            return (
                 item.company.includes(searchDatacompany)&& item.listprice && item.listprice.includes(searchDataprice)
            )
        })
        
        displayItem(filteredData)
    }else
    if(searchDataprice && searchDatacompany=="company"){
        console.log("2");
        const filteredData = categories.filter((item) => {
            return (
               item.listprice && item.listprice.includes(searchDataprice)
            )
        })
        
        displayItem(filteredData)
    }else if(searchDatacompany ){
        console.log("3");
            const filteredData = categories.filter((item) => {
                return (
                    item.company.includes(searchDatacompany)
                )
            })
            console.log(filteredData)
            displayItem(filteredData)
        }
    
}

/*function getma(e){
    e.preventDefault();
    const searchData = e.querySelector('.name');
    console.log(searchData);
    const filteredData = categories.filter((item) => {
        return (
            item.listprice.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
}*/
function them(masp,name){
    console.log(name);
}

