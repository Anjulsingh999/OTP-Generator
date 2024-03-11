function generate() {
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let a = Math.floor(Math.random() * 10); // Use Math.floor for integer values between 0 and 9
        arr[i] = a.toString();
    }

    var otpstr = arr.join(''); // Use array.join to concatenate array elements into a string
    result.innerHTML = otpstr;
    copy_txt(otpstr);

    let disply_area=document.getElementById("display_area");
    disply_area.style.visibility="visible"


    let cpy_btn=document.getElementById("copy_btn");
    cpy_btn.style.display="block"

    let generate_btn_animation=document.getElementById("generate_animation");
    generate_btn_animation.style.display="block"


    const gerenate_anim_Timeout = setTimeout(gerenate_anim, 900);

    function gerenate_anim() {
        let generate_btn_animation=document.getElementById("generate_animation");
        generate_btn_animation.style.display="none"
}
}

var txt = '';

function copy_txt(str) {
    txt = str;
}

function copy() {

    var copyText = document.createElement('textarea');
    copyText.value = txt;

    // Select the text field
    copyText.select();

    // For mobile devices
    copyText.setSelectionRange(0, 99999);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);

   
    let cpy_btn_animation=document.getElementById("copy_animation");
    cpy_btn_animation.style.display="block"

    const myTimeout = setTimeout(myGreeting, 1500);

function myGreeting() {
    let cpy_btn_animation=document.getElementById("copy_animation");
    cpy_btn_animation.style.display="none"
}

}
