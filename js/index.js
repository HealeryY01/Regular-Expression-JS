var checkvalidation = function(){
    var valid = true;
    //Kiểm tra rỗng
    valid = kiemTraRong('firstname','error_firstname') & kiemTraRong('lastname','error_lastname') & 
    kiemTraRong('email','error_email') & kiemTraRong('password','error_password') & kiemTraRong('address','error_address') 
    &kiemTraRong('city','error_city') ;
   //Kiểm tra tất cả là chuỗi
   valid &= kiemTraTatCaLAChu('#firstname','#error_firstname_all_leter') & kiemTraTatCaLAChu('#lastname','#error_lastname_all_leter');
    //Kiểm tra tất cả là số 
    valid &= kiemTraTatCaLaSo('#phone','#error_phone');
    //Kiểm tra email
    valid &= kiemTraEmail('#email','#error_email');
    //Kiểm tra độ dài password
    valid &= kiemTraDoDai('#password','#error_password_min_max_length');
    //Kiểm tra giá trị
   //  valid &= kiemTraGiaTri('#phone','#error_phone_min_max_value',11,1);
    if(!valid){
        return false;
    } 
   return true;
}


 var kiemTraRong = function(idValue,idError){
    var inputText = document.getElementById(idValue);
     if(inputText.value.trim() ===''){
        document.getElementById(idError).innerHTML= inputText.name + ' không được bỏ trống';
        document.getElementById(idError).style.display = 'block';
        return false;
     }else{
        document.getElementById(idError).innerHTML= '';
        document.getElementById(idError).style.display ='none';
        return true;
     }
 }

 var kiemTraTatCaLAChu =function(selectorValue,selectorError){
   //Lấy giá trị người dùng nhập vào từ selecter
   var inputText = document.querySelector(selectorValue);
   var regexChu= /^[A-Za-z]+$/;
   if(regexChu.test( inputText.value)){
      //hợp lệ
      document.querySelector(selectorError).innerHTML= '';
      document.querySelector(selectorError).style.display='none';
      return true;
   }else{
      //không hợp lệ
      document.querySelector(selectorError).innerHTML= inputText.name + ' phải là chữ! ';
      document.querySelector(selectorError).style.display='block';
      return false;
   }
 }

 var kiemTraTatCaLaSo = function(selectorValue,selectorError){
   var inputText = document.querySelector(selectorValue);
   var regexNumber = /^[0-9]+$/;
   if(regexNumber.test(inputText.value)){
      document.querySelector(selectorError).innerHTML= '';
      document.querySelector(selectorError).style.display='none';
      return true;
   }else{
      document.querySelector(selectorError).innerHTML= inputText.name + ' yêu cầu nhập số !';
      document.querySelector(selectorError).style.display='block';
      return false;
   }
 }

 var kiemTraEmail = function(selectorValue,selectorError){
   var inputText = document.querySelector(selectorValue);
   var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(regexEmail.test(inputText.value)){
      document.querySelector(selectorError).innerHTML= '';
      document.querySelector(selectorError).style.display='none';
      return true;
   }else{
      document.querySelector(selectorError).innerHTML= inputText.name + ' không hợp lệ !';
      document.querySelector(selectorError).style.display='block';
      return false;
   }
 }
  var kiemTraDoDai = function(selectorValue,selectorError){
   var inputText = document.querySelector(selectorValue);
   if(inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength){
      document.querySelector(selectorError).innerHTML= '';
      document.querySelector(selectorError).style.display='none';
      return true; 
   }else{
      document.querySelector(selectorError).innerHTML= inputText.name + ' từ ' + inputText.minLength +' đến ' +inputText.maxLength+' ký tự !';
      document.querySelector(selectorError).style.display='block';
      return false;
   }
  }

//   var kiemTraGiaTri = function(selectorValue,selectorError,maxValue,minValue){
//      var inputText = document.querySelector(selectorValue);
//       if(inputText.value > Number( maxValue) || inputText.value < Number(minValue)){
//          document.querySelector(selectorError).innerHTML= inputText.name +' phải có ' + maxValue+' giá trị !';
//       document.querySelector(selectorError).style.display='block';
//       return false;
//       }else{
//          document.querySelector(selectorError).innerHTML= '';
//          document.querySelector(selectorError).style.display='none';
//          return true; 
//       }
//   }
 document.getElementById('firstname').onblur = checkvalidation;
 document.getElementById('lastname').onblur = checkvalidation;
 document.getElementById('btnDangKy').onclick = checkvalidation;