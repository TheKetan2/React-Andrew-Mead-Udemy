console.log("App.js is running");

// var template = <p>THis is JSX from app.js</p>;

ReactDOM.render(
  React.createElement("h1", { id: "title" }, "Hi this is compiled jsx"),
  document.getElementById("root")
);
