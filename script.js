var firstDropDown = document.querySelector('#f_dd');
var secondDropDown = document.querySelector('#s_dd');

showDDL = () => {
    let ddl_1 = document.querySelector('.dropdown_menu1');
    if(ddl_1.style.display == "none"){
        ddl_1.style.display="block";
    }
    else{
        ddl_1.style.display="none";
    }
    
}
showDDL2 = () => {
    let ddl_2 = document.querySelector('.dropdown_menu2');
    if(ddl_2.style.display == "none"){
        ddl_2.style.display="block";
        
    }
    else{
        ddl_2.style.display="none";
    }
}