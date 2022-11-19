let editor = document.querySelector("#editor");

ace.edit(editor, {
  theme: "ace/theme/twilight",
  mode: "ace/mode/html",
});

var js = ace.createEditSession("some js code");
var css = ace.createEditSession(["some", "css", "code here"]);
// and then to load document into editor, just call
editor.setSession(js);

var showCode = document.querySelector("code p").innerText("hello");


//
// var noCopy= = document.querySelector(".coding-exercise-workplace");
//
//   noCopy.onpaste = returnfalse;
