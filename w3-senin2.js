function dataHandling(arr) {
    // Your code here
  for(var i = 0;i < data.length ;i++){
    console.log('nomor ID : '+ data[i][0]);
    console.log('nama lengkap :' + data[i][1]) ;
    console.log('TTL : ' + data[i][2]+' '+ data[i][3]);
    console.log('Hobi : ' + data[i][4]);
  }
  return ""
  }

  
  var data = [
      ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
      ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
      ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
      ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
              
  console.log(dataHandling(data))