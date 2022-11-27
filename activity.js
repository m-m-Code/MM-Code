  var doneButton = document.querySelector('.doneButton');
  var runCode = document.querySelector('.runcode');
  var blockCode = document.querySelector('textarea');
  var checkButton1 = document.querySelector('.checkButton');
  var infobox = document.querySelector('.infobox');


  // Setup Ace
  let codeEditor = ace.edit("editor");

  let defaultCode ='<h1> Hello World </h1>';
  let defaultCode1 ='<p> hello </p>';

  let userCode = ' ';

  //let defaultCode2 = '<p> this is a paragraph </p>'

  let editorLib = {
    init() {
      // Configure Ace

      // Theme
      codeEditor.setTheme("ace/theme/clouds_midnight");

      // Set language
      codeEditor.session.setMode("ace/mode/html");

      // Set Options
      codeEditor.setOptions({
        highlightSelectedWord: false,
        fontSize: '12pt',
        newLineMode: "auto",
        highlightGutterLine: true,
        selectionStyle: 'line',


      });
      // Set Default Code
      codeEditor.setValue(defaultCode + "hell");

      // codeEditor.firstLineNumber(defaultCode3);

    }
  }

  function noCheating() {
    codeEditor.onCopy = function() {
      alert("This is cheating, focus on writing it out")
    };
    codeEditor.onCut = function() {
      alert("This is cheating, focus on writing it out")
    };
    codeEditor.onPaste = function() {
      alert("This is cheating, focus on writing it out")
    };
    codeEditor.getCopyText = function() {
      alert("This is cheating, focus on writing it out")
    };

  }

  // doneButton.addEventListener('click', () => {
  //   // Clear ace editor
  //   codeEditor.setValue(' ');
  //   doneButton.style.display='none';
  //   checkButton1.hidden= false;
  //   infobox.hidden=true;
  // })


  /// this is where the code runs
  editorLib.init();
  noCheating();
