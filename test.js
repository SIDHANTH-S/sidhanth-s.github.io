const run = async () => {
  const res = await fetch('https://framerusercontent.com/modules/D8gGqBQ1exPcQX21HXG5/mxOP9zughWqzCr7yH17p/Lmy5fz81C.js');
  const text = await res.text();
  console.log(text.substring(0, 1500));
}
run();
