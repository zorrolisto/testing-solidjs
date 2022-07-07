import { render } from "solid-js/web";

function HelloWorld() {
  const name: string = "SolidJS";
  const style = { "background-color": "#2c4c7c", color: "#FFF" };
  return <div style={style}>Hello world from {name}</div>;
}

const root = document.getElementById("root");

if (root) {
  render(() => <HelloWorld />, root);
}
