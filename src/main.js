let demo = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `
/**你好，我要演示一张太极图
* 首先准备一个div**/
#div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/**
 * 然后将这个div变成一个圆**/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/**
 * 太极是阴阳两极
 * 于是给圆内加上黑白两色**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**
 * 然后加上两个神秘的小圆**/
#div1::before{
    content:'';
    display:block;
    position:absolute;
    background:#000;
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background:#fff;
    width:100px;
    height:100px;
    border-radius:50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`
let string2 = '';
let n = 0;


let step = () => {
    setTimeout(() => {
        if (string[n] == '\n') { //判断如果是回车，就替换成br，一个个换会出现<
            string2 += '<br>'
        } else if (string[n] == ' ') {
            string2 += '&nbsp'
        } else {
            string2 += string[n];
        }
        // if (n > string.length) { return; }
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999); //自动滚动滚动条到最下方
        demo.scrollTo(0, 99999); //手机端滚动条自动到最下方
        if (n < string.length - 1) {
            n += 1;
            step(); //通过递归模拟setInterval,更方便的暂停定时器
        } else {

        }
    }, 50)
};
step()