// ==UserScript==
// @name         dxonline插件Hook版
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动16倍速连播，静音、可以切出多开页面同时刷课
// @author       Ivan_Zhang
// @match        https://dxonline.xidian.edu.cn/jjfz/play*
// @icon         data:image/jpeg;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/90ABAAR/+4ADkFkb2JlAGTAAAAAAf/AABEIAIIAggMAEQABEQECEQH/xACsAAACAwEBAAMBAQAAAAAAAAAICQYHCgUEAQIDCwABAAICAwEBAAAAAAAAAAAAAAMEAgUBBgcACBAAAQQBAgUDAgMGBAUFAQAAAgEDBAUGBxEACBITIRQi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
// @grant        none
// @run-at       document-start
// ==/UserScript==


//Hook劫持addEventListener和removeEventListener
//油猴默认是在DOM加载完毕后加载插件脚本，这时候想Hook拿到监听器的数据已经晚了 
//需要用@run-at       document-start 指定脚本加载时机
let oldadd=EventTarget.prototype.addEventListener
EventTarget.prototype.addEventListener=function (...args){
    var type=args[0];
    var listener=args[1];
   // console.log("[ADDListener] object:");
    //console.log(this);
    //console.log("type:"+type+" listner:"+listener);
    if(this.eventList){
        if(this.eventList[type]){
            this.eventList[type].push({listener: listener});
        }else{
            this.eventList[type]=[{listener: listener}];
        }
    }else{
        this.eventList={};
        this.eventList[type] = [{ listener: listener }];
    }
    oldadd.call(this,...args)

}

let oldremove=EventTarget.prototype.removeEventListener
EventTarget.prototype.removeEventListener=function (...args){
    var type=args[0];
    var listener=args[1];
    // console.log("[REMOVEListner] object:");
    // console.log(this);
    // console.log("type:"+type+" listner:"+listener);
    if(this.eventList){
        if(this.eventList[type]){
            var newArr=[];
            for(var i=0;i<this.eventList.length;i++){
                if(this.eventList[type][i].listner!=listener){
                    newArr.push(this.eventList[type][i]);
                }
            }
            if(newArr.length==this.eventList[type].length){
                console.log("No such Listners of type "+type);
            }else{
                this.eventList[type]=newArr;
            }
        }else{
            console.log("No EventListners of type "+type);
        }
    }else{
        console.log("No EventList on this object");
    }
    oldremove.call(this,...args)

}
//自定义getEventListeners
function getEventListeners(object,type) {
    if(object.eventList){
        if(object.eventList[type]){
            return object.eventList[type];
        }else{
            return null;
        }

    }else{
        return null;
    }
}
function removeAllEventListeners(object,type) {
    var listeners=getEventListeners(object,type);
    for(var i=0;i<listeners.length;i++){
        object.removeEventListener(type,listeners[i].listener);
    }
}
//解锁逻辑
function Ivan_Start(){
    console.log("Ivan:脚本已启动")
    removeAllEventListeners(document,"visibilitychange");
    console.log("Ivan:窗体限制器已解除");
    var video=document.getElementById("video");
    removeAllEventListeners(video,"ratechange");
    console.log("Ivan:速率限制器已解除");
    video.playbackRate=16;
    console.log("Ivan:速率已重新设置为16倍速");
    setInterval(checkAlert,1000);//1秒检测一次
    console.log(("Ivan:周期检测任务已提交"));
}
//设置延迟启动，保证DOM加载完毕
setTimeout(Ivan_Start,3000);

function checkAlert(){
    //检测弹窗（我知道了、继续观看、继续）并自动点击
    if(document.getElementsByClassName("public_submit").length!=0 &&document.getElementsByClassName("public_submit")[0].text!="从头开始"){
        document.getElementsByClassName("public_submit")[0].click(); //如果出现弹窗，自动点确定
    }
    if(document.getElementsByClassName("public_cancel").length!=0 &&document.getElementsByClassName("public_cancel")[0].text=="继续观看"){
        document.getElementsByClassName("public_cancel")[0].click();
    }
    var video=document.getElementById("video");
    if(video.paused==true){
           video.play();
    }
//播放完毕，完成页面重定向到下一个视频
    if(document.getElementsByClassName("public_text").length!=0 &&document.getElementsByClassName("public_text")[0].children[1].textContent=="当前视频播放完毕！"){
        //获取当前正在播放的视频对应右侧列表中的标签
        var present_video=document.getElementsByClassName("video_red1")[0];
        //取出下一个视频对应的元素 (可能为null)
        var next_video=present_video.nextElementSibling;
        if(next_video!=null){
            window.location=next_video.children[0].href;//跳转到下一视频
        }else{
            alert("已播放全部视频");
        }
    }
}
