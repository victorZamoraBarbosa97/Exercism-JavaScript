export const commands = (numBer = undefined) => {
  if (!numBer) return [];
  let resp = [];
  const B = numBer.toString(2);

  for (let i = B.length - 1; i >= 0; i--) {
    let n = B.length - 1;
    // console.log("n = ", n);
    // console.log("I = ", i);
    // console.log(B[i]);
    if (B[i] === "1") {
      switch (i) {
        case n:
          resp.push("wink");
          break;
        case n - 1:
          resp.push("double blink");
          break;
        case n - 2:
          resp.push("close your eyes");
          break;
        case n - 3:
          resp.push("jump");
          break;
        case n - 4:
          resp = resp.reverse();
          break;
      }
    }
  }
  return resp;
};
