const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector('#layar')

tombol.addEventListener('click', function(n) {

      const tombolKlik = n.target;
      const nilaiTombol = tombolKlik.innerText;
      
   if( nilaiTombol == 'C' ) {
   	  layar.value = '';
   } else if(nilaiTombol == 'DEL') {
       layar.value = layar.value.slice(0,-1);
   }else if(nilaiTombol == '=') {
       layar.value = eval(layar.value);
   } else {
   	layar.value = layar.value + nilaiTombol;
   }
});
