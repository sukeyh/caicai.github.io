
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/caicai08.jpg'){
        myImage.setAttribute('src','images/caicai01.jpg');
    }else{
        myImage.setAttribute('src','image/caicai08.jpg');
    }
}

function setHeading(name){ /*setHeading根据name参数设置页面标题*/
    let myHeading=document.querySelector('h1');/*将h1元素的引用保存在myHeading变量中*/
    myHeading.textContent='招财酷毙了，'+name+'！';
}
function setUserName(){/*为页面设置用户信息*/
    let myName=prompt('请输入你的名字');/*prompt函数需要用户输入数据，并将数据存储在myName变量里*/
    localStorage.setItem('name',myName);/*localStorageAPI可将数据存储在浏览器中供后续获取*/
    setHeading(myName);
}
let storedName=localStorage.getItem('name');/*尝试获取浏览器中保存的数据项*/
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}
let myButton=document.querySelector('button');
myButton.onclick=setUserName;