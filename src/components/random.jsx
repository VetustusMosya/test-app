// import

function Random() {
  let randomInt = Math.floor(Math.random() * 4) + 1;
  if (randomInt !== +localStorage.getItem("int")) {
    localStorage.setItem("int", randomInt);
    return randomInt;
  } else {
    Random();
  }
}

function RenderAbuse(count) {
  let randomText = "";
  console.log(typeof Random());
  switch (Random()) {
    case 1:
      randomText = "PIDOR";
      break;
    case 2:
      randomText = "ASSHOLE";
      break;
    case 3:
      randomText = "GAY";
      break;
    case 4:
      randomText = "SHIT";
      break;
    default:
      randomText = "nothing";
      break;
  }
  return <h3>{randomText}</h3>;
}

export default RenderAbuse;
