var handler = {
    get: function(target, name, reciever) {
      let func;
      try {
        func = eval(${name});
      } catch (e) {
        if (e instanceof ReferenceError) return undefined;
        console.log("e: ", e);
      }
      const res = [];
      for (let i = 0; i < reciever; i++) {
        res.push(func(i));
      }
      return res;
    }
  };
  var p = new Proxy(Object, handler);
  Object.setPrototypeOf(Number.prototype, p);
  console.log(5[x => (5-x)])
  console.log(3[x => x])
  console.log(1[x => 5])
  
  
