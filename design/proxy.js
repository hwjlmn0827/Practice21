// case 1
// 先通过一个loading图片占位置，等图片异步加载好了再放进来
var imgFunc = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

var proxyImage = (function () {
    var img = new Image();
    img.onload = function () {
        imgFunc.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            imgFunc.setSrc('./loading,gif');
            img.src = src;
        }
    }
})();
proxyImage.setSrc('./pic.png');


// case 1
// 定义一个鞋子类
var Shoes = function (name) {
    this.name = name;
};

Shoes.prototype.getName = function () {
    return this.name;
};

// 定义一个助理对象
var assistant = {
    buyShoes: function (shoes) {
        star.buyShoes(shoes.getName())
    }
};

// 定义一个明星对象
var star = {
    buyShoes: function (name) {
        console.log('买到了一双' + name);
    }

};

assistant.buyShoes(new Shoes('高跟鞋')); // "买到了一双高跟鞋"



// 代理者去做了被代理者要做的事，被代理者其实只是提供了一个占位，其实没干啥

