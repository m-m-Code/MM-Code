let editor = document.querySelector("#editor");

ace.edit(editor, {
  theme: "ace/theme/tomorrow1",
  mode: "ace/mode/html",
});


var css = ace.createEditSession(["some", "css", "code here"]);

ediotr.setSession(css);
