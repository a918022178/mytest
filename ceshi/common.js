// 评分方法
export const grade = function(ele1,ele2){
    var comment = document.querySelectorAll(ele1)[0];
    var score = document.querySelector(ele2)
    var li = comment.children;
    for(let i =0;i<li.length;i++){
        li[i].index = i;
        li[i].onclick=function(){
        for(let i=0;i<li.length;i++){
            li[i].className='';
        }
        for(let i =0;i<=this.index;i++){
            li[i].className='ratestar'
        }
        score.innerHTML=this.getAttribute("data-id")+'.0'
    }
  } 
}
// 图片滑动函数
export const banner= function (clickIndex,length){
        var banner = document.querySelector('.swiper');
        var span = document.querySelector('.span');
        var width = window.innerWidth;
        var imageBox = banner.querySelector('ul');
        var addTransition = function(){
            imageBox.style.webkitTransition = "all .2s";
            imageBox.style.transition = "all .2s";
        }
        var removeTransition = function(){
            imageBox.style.webkitTransition = "none";
            imageBox.style.transition = "mone";
        }
        var setTranslateX = function(x){
            imageBox.style.webkitTransform = "translateX("+x+"px)";
            imageBox.style.transform = "translateX("+x+"px)";
        }
        var index = clickIndex;
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        var isMove = false;
        imageBox.addEventListener('touchstart',function(e){
            startX = e.touches[0].clientX;
        });
        imageBox.addEventListener('touchmove',function(e){
            isMove = true;
            moveX = e.touches[0].clientX;
            distanceX = moveX - startX;   
            removeTransition();
            setTranslateX(-index*width+distanceX);
        });
        window.addEventListener('touchend',function(e){
            if(Math.abs(distanceX) > (width/3) && isMove){
                    if(distanceX>0){
                        index --;
                    }else{
                        index ++;
                    }
                    if(index<=0) index=0;
                    if(index>=length) index=length-1;
                    addTransition();
                    setTranslateX(-index*width);
                }else{
                    addTransition();
                    setTranslateX(-index*width);            
            }
            span.innerText=index+1;
            startX = 0;
            moveX = 0;
            distanceX = 0;
            isMove = false;
        });  
}
// 双手机滑动放大
export const mscale= function(el) {
            var c=1;//先定义一个初始值
            el.addEventListener('touchstart',function (ev) {//手指点下
                var oldC=c;//把初始值放到oldC里面
                function getC(ev) {
                    var x1=ev.targetTouches[0].pageX;
                    var y1=ev.targetTouches[0].pageY;//两根手指缩放肯定需要两根手指，【0】第一根手指的Xy的坐标

                    var x2=ev.targetTouches[1].pageX;//第二根手指的坐标
                    var y2=ev.targetTouches[1].pageY;

                    var a=x1-x2;//第一根手指的pageX-第二根手指的pageX，这样正好是一个之间三角形 得到两个直角边；
                    var b=y1-y2;//同上
                    return Math.sqrt(a*a+b*b)//已知两个直角边开平方得出 斜角边
                }
                if(ev.targetTouches.length==2){//判断是否是两根手指 是的话 把两根手指点上去的时候的 斜脚边的初始值 放到 downC里面
                    var downC=getC(ev);
                }
                el.addEventListener('touchmove',function (ev) { //手指移动的时候
                    if(ev.targetTouches.length==2){//判断移动的时候是否是两根手指
                        c=getC(ev)/downC+oldC;//这个时候的getC(ev)是move时候的，用移动后的斜脚边的值除没移动的值加上他的初始值，
                        el.style.transform='scale('+c+')';//通过scale----2D缩放转换
                    }
                },false)
            },false)
}
export function setItem(key,value){
    // 获取json格式
    var jsonString =  localStorage.getItem(key);
    var val = jsonString || value;
    // var arr =   JSON.parse(jsonString);
    // // 将value追加进入arr
    // arr.push(value);
    // 将arr 转换成json字符串保存起来
    // localStorage.setItem(key,JSON.stringify(val));
    localStorage.setItem(key,val);
}
export function getItem(key){
   var jsonString =  localStorage.getItem(key);
    // 将json格式字符串转换成 js对象
    // jsonString：是一个标准的json格式
    jsonString = jsonString || '';

    // console.log(jsonString)
    // return JSON.parse(jsonString);
    return jsonString;
}
// 搜索条件排他
 export  function exclusive(param) { 
        for (var i = 0; i < param.length; i++) {
            param[i].onclick=function () {
                for (var i = 0; i < param.length; i++){
                    param[i].className='unactive'
                }
                this.className='active'
              }           
        }
     }
