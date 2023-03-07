const imgposition = document.querySelectorAll(".aspect-ratio-169 img")//khóa ảnh trang chủ
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotitem = document.querySelectorAll(".dot")//cái chấm chuyển ảnh
let imgNumber = imgposition.length
let index = 0
//console.log(imgposition)
imgposition.forEach(function (Image,index){//chuyển ảnh và nhấn nút để quay lại ảnh 
Image.style.left = index*100 + "%"
dotitem[index].addEventListener("click",function(){
    Slider(index)
    })    
})
function Slider(index){
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotitem[index].classList.add("active")//khi chuyển cảnh thì cái nút màu đen
}

var check = false;	// tạo biến check để check khi click vào (false là ẩn, true là hiện) mặc định là ẩn
function handleShowListWater(){		//hàm onclick ở thẻ h2 dòng 43
    var item = document.getElementById("list-water");	// bắt element id của thẻ ul dòng 44
    if(check===false){					// nếu check đang ẩn thì set display block cho nó hiện
        item.style.display = "block";
        check=true;
    }
    else {								// nếu đang hiện thì set display none cho nó ẩn
        item.style.display = "none";
        check=false
    }
}

