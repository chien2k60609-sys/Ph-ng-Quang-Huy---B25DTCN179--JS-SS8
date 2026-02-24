
const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
let chosse;
do {
    chosse = +prompt(`Nhập lựa chọn :
        0: Thoát chương trình
        1: Xem danh sách
        2: Tìm kiếm cầu thủ
        3: Lọc cầu thủ theo vị trí
        4: Tính tổng số bàn thắng
        5: Kiểm tra hiệu suất
        `);
    switch (chosse) {
        case 0:
            console.log("Thoát chương trình")
            break;
        case 1:
            console.log("Xem danh sách cầu thủ")
            show();
            break;
        case 2:
            console.log("Tìm kiếm cầu thủ")
            if(check()){
                console.log("cầu thủ tìm thấy");
            }else{
                console.log("cầu thủ không tìm thấy");
            }
            break;
        case 3:
            console.log("Lọc cầu thủ theo vị trí")
            vitri();
            break;
        case 4:
            console.log(`Tổng số bàn thắng : ${sum()}`)
            break;
        case 5:
            check()     
    }

}while(chosse != 0)

function show(){
    squad.forEach((value)=>{
        console.log(` tên cầu thủ : ${value[0]}  số bàn thắng : ${value[1]} vị trí : ${value[2]}`);
    })
}

function check(){
    let name = prompt("Nhập tên cầu thủ")
    let result = squad.find((value)=>{
        return value[0].toLowerCase() == name.toLowerCase()
    })
    return result
}

function vitri(){
    let name = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK)")
    let result = squad.filter((value)=>{
        return value[2].toLowerCase()== name.toLowerCase()
    })
    console.log(result);
    return result                                                                         
}

function sum(){
    let result = squad.reduce((acc,value)=>{
        return acc+value[1]
    },0)
    return result
}

function check(){
    let result = squad.some((value)=>{
        return value[1] === 0;
    })
    if(result){
        console.log("Có cầu thủ chưa ghi bàn");
    }
    let allghiban = squad.every((value)=>{
        return value[1] > 0;
    });
    if(allghiban){
        console.log("Tất cả câu thủ đã ghi bàn");
        
    }
}
