
  var doneButton = document.querySelector('.doneButton');
  var runCode = document.querySelector('.runcode');
  var blockCode = document.querySelector('textarea');
  var checkButton = document.querySelector('checkButton');
  
  // Setup Ace
  let codeEditor = ace.edit("editor");

  let defaultCode = '<h1> Hello World</h1>';

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


    }
  }



  // runCode.addEventListener('click', ()=>{
  //   var userCode = codeEditor.getValue();
  //
  //   try{
  //     new function(usercode)
  //   }catch (err){
  //     console.error(err);
  //   }
  // });




  doneButton.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(' ');
    doneButton.style.display='none';

    checkButton.style.display='visibility';
  })


  /// this is where the code runs
  editorLib.init();
