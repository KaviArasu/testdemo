function f1() {
  console.log(10);
  function f2() {
    console.log(9);
    function f3() {}
  }
  setTimeout(f2, 1000);
}

f1();
