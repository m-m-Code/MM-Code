
  var doneButton = document.querySelector('.doneButton');
  var runCode = document.querySelector('.runcode');
  var blockCode = document.querySelector('textarea');
  var checkButton1 = document.querySelector('.checkButton');
  var infobox = document.querySelector('.infobox');


  // Setup Ace
  let codeEditor = ace.edit("editor");

  //codeEditor.addEventListener("copy", stop, true)

  let defaultCode = '<h1> Hello World </h1>';
  let defaultCode3 = '<p> hello </p>'

  let userCode = ' ';

  //let defaultCode2 = '<p> this is a paragraph </p>'

  let editorLib = {
    init() {
      // Configure Ace

      // Theme
      codeEditor.setTheme("ace/theme/xcode");

      // Set language
      codeEditor.session.setMode("ace/mode/html");

      // Set Options
      codeEditor.setOptions({

      });

      // Set Default Code
      codeEditor.setValue(defaultCode);
      codeEditor.setValue(defaultCode3);
      codeEditor.onpaste ="return false";
    }
  }



  checkButton1.addEventListener('click', ()=>{

  })



  doneButton.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(' ');
    doneButton.style.display='none';
    checkButton1.hidden= false;
    infobox.hidden=true;
  })


  /// this is where the code runs
  editorLib.init();
