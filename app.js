const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1key" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h2key" }, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "h12key" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h22key" }, "I am an h2 tag"),
  ]),
]);

// JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
