  var doneButton = document.querySelector('.doneButton');
  var runCode = document.querySelector('.runcode');
  var blockCode = document.querySelector('textarea');
  var checkButton1 = document.querySelector('.checkButton');
  var infobox = document.querySelector('.infobox');


  // Setup Ace
  let codeEditor = ace.edit("editor");

  let exercise1 ='<h1>Hello World</h1>';
  let exercise2 ='<p> hello </p>';

  let exercise3 ='<p> bye </p>';
  let exercise4 ='<p> morning </p>';

  let check = document.querySelector(".nextExercise");

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
      codeEditor.setValue(exercise1);

        nextExercise();
        checkUserCode();

      // codeEditor.firstLineNumber(defaultCode3);

    }
  }

  function nextExercise(){
    document.querySelector(".nextExercise").addEventListener("click", function(){
      codeEditor.setValue(exercise2);
    })
  }
  // var currentExcise = 

  // alert("well done G");
  // codeEditor.setValue(" ");
  function checkUserCode(){
    document.querySelector(".checkButton").addEventListener("click", function(){
      var userCode = codeEditor.getValue();
      if (userCode === exercise1) {
        alert("well done G");
        codeEditor.setValue(" ");

      }else{
        alert("its wrong fam")
      }
    })
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

  doneButton.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(' ');
    doneButton.style.display='none';
    checkButton1.hidden= false;

  })


  /// this is where the code runs
  editorLib.init();
  noCheating();
