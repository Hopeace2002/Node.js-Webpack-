// async的基本语法
// 普通函数
async function doSomething(a,b) {
    return a + b;
}
// 箭头函数
const doSomething2 = async (a, b) => {
    return a + b;
};
// 类函数
class Demo {
    async test(a, b) {
        return a + b;
    }
}

const data = doSomething(1, 2); // [object Promise]
doSomething(1, 2).then(function(result) {
    console.log(result); // 3
});