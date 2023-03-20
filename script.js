var penumpang = [] //ini array
var tambahPenumpang = function (namaPenumpang, penumpang){//isi function
    if (penumpang.length == 0){// untuk menghitung isi panjang datanya
        penumpang.push(namaPenumpang);//untuk menambah data ke dalam array
        return penumpang;//untuk menggulang isi array & keluar dari functionnya
    }else{
        for (var i=0; 1 < namaPenumpang.length; i++){ // untuk mencari isi ulang isi panjang data yang sudah di isi
            if(penumpang[i] == undefined){//jika isi penumpang kosong/undefined
                penumpang[i] = namaPenumpang;//menambahkan isi kursi penumpang yang kosong
                return penumpang// menggembalikan isi array & keluar dari function
            } else if (namaPenumpang == penumpang[i]){ //untuk mencari data sama yang telah di input datanya
                console.log(namaPenumpang + " sudah ada di dalam ")//memberikan informasi data yg sama
                return penumpang;//menggembalikan isi array & keluar dari function
            
             }
        }
    }    
}
