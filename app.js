const buttons = document.querySelectorAll(".btn");
const up_display = document.querySelector(".calc");
const low_display = document.querySelector(".ans");
let value=0;
let first_num, second_num, ans, btn_pos;
buttons.forEach( btn =>{
    btn.addEventListener("click", function(){
        let btn_value = btn.innerText;
        up_display.classList.remove("screen-opacity");
        btn.classList.add("open");
        setTimeout( ()=>{
            btn.classList.remove("open");
        }, 100);
        // if (btn_value == '+' || btn_value == '-' || btn_value == '/' || btn_value == '*'){
        //     btn_pos = up_display.innerText.indexOf(btn_value);
        //     console.log();
        //     first_num = Number(up_display.innerText.slice(0,btn_pos+1));
        //     console.log(first_num);
        // }
        switch (btn_value) {
            case '=': 
                low_display.innerText = eval(up_display.innerText);
                // second_num = Number(up_display.innerText.slice(btn_pos,up_display.innerText.length));
                // ans = myfunc(up_display.innerText,btn_pos,first_num,second_num);
                // low_display.innerText = ans;
                up_display.classList.add("screen-opacity");
                break;
            case 'AC':
                up_display.innerText = '';
                low_display.innerText = '';
                break;
            case 'DE':
                up_display.innerText = up_display.innerText.slice(0,-1);
                break;
            default:
                up_display.innerText += btn_value + "";
                break;
        }
    });
});

// function myfunc(str, btn_pos,first_num,second_num){
//     if (str[btn_pos]=='+'){
//         ans = first_num + second_num;
//         console.log(typeof(second_num));
//         return ans;
//     }
//     else if (str[btn_pos]=='-'){
//         return first_num - second_num;
//     }
//     else if (str[btn_pos]=='/'){
//         return first_num / second_num;
//     }
//     else if (str[btn_pos]=='*'){
//         return first_num * second_num;
//     }
// }


