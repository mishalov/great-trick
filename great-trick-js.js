var handler = {
  get: function(target, name, reciever) {
    const res = [];
    for(let i = 0; i < reciever; i++) {
      const func = eval(`${name}`);
      res.push(func(i));
      
    }
    return res
  }
}
var p = new Proxy(Object, handler);
Object.setPrototypeOf(Number.prototype, p);

console.log(5[x => (5-x)])


console.log(3[x => x])


console.log(1[x => 5])