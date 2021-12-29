function Index(dom, use24Hours){
    this.use24Huors = use24Hours;
    this.classList = ['visible', 'close', 'far','far','distance','distance'];
    this.column = Array.from(dom);
}
Index.prototype.init = function(){
    this.createDom();
    this.satrt();
}
Index.prototype.satrt = function(){
    setInterval(() => {
        var timeStr = this.getClock();
        this.column.forEach((ele, index) => {
            var n = + timeStr[index];
            var num = n * 93;
            $(ele).css({
                'transform' : 'translateY(calc(50vh - ' + num + 'px - 35px)'
            });
            Array.from(ele.children).forEach((ele1, index1) =>{
                var className = this.getClass(n, index1);
                $(ele1).attr('class', className);
            });
        });
    }, 500);
}
Index.prototype.getClass = function(n, i){
    var className = this.classList.find((ele, index) => {
        return i - index === n || i + index === n;
    })
    return className || '';
}
Index.prototype.getClock = function(){
    var d = new Date();
    return [this.use24Huors ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes() ,d.getSeconds()].reduce(function(p,n){
        return p + ('0' + n).slice(-2);
    }, '');
}
Index.prototype.createDom = function(){
    for(var i = 0; i < 6; i ++){
        var oDiv = '<div>' + i + '</div>';
        $('.six').append(oDiv);
    }
    for (var j = 0; j < 10; j ++) {
        var iDiv = '<div>' + j + '</div>';
        $('.ten').append(iDiv);
    }
 }
var index = new Index($('.column'), true);
index.init();