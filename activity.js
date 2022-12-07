    // Setup Ace
    let codeEditor = ace.edit("editor");
    let exercise1 = '<h1>Hello World</h1>';
    let check = document.querySelector(".nextExercise");
    // let userCode = ' ';

    var e = '<ul>\n <li>Coffee</li> \n <li>Tea</li> \n <li>Milk</li>\n</ul>'

    let editorLib = {
      init() {
        // Configure Ace
        // Theme
        codeEditor.setTheme("ace/theme/chaos");
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
        codeEditor.setValue(currentExcise);
        //currentExcise
        nextExercise();
        muscleMemory();
        // codeEditor.firstLineNumber(defaultCode3);

      }
    }

    let url = document.createElement('a');
    url

    function switchExericse(){
      if (url.href = '') {

      }
    }

    function ChooseRandomExcise(arr) {
      RandomExcise = Math.floor(Math.random() * 3);
      var item = arr[RandomExcise];
      return item
    }

    //this function get ridden of the checkButton and display the done doneButton
    //this function chooses a random exercise from the array we created
    function nextExercise() {
      document.querySelector(".nextExercise").addEventListener("click", function() {
        codeEditor.setValue(ChooseRandomExcise(exercises));
        doneButtonValue.style.display = 'block';
        checkButtonValue.hidden = true;
      });
    }

    //this var gets the currentExcise
    var currentExcise = ChooseRandomExcise(exercises);

    //check the users code only
    function checkUserCode() {
      document.querySelector(".checkButton").addEventListener("click", function() {
        var userCode = codeEditor.getValue();
        if (userCode === currentExcise) {
          console.log(currentExcise);
          alert("well done G");
          codeEditor.setValue('');
        } else {
          alert("its wrong fam")
        };
      });
    };

    function muscleMemory() {
      var memory = 1;
      for (var i = 0; i < memory; i++) {
        memory[checkUserCode()];
      }
    }

    // no cheating  function
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

    var doneButtonValue = document.querySelector('.doneButton');
    var checkButtonValue = document.querySelector(".checkButton");
    function beginExcises() {
      doneButtonValue.addEventListener('click', () => {
        codeEditor.setValue('');
        doneButtonValue.style.display = 'none';
        checkButtonValue.hidden = false;
      })
    }
    /// this is where the code runs
    editorLib.init();
    noCheating();
    beginExcises();
