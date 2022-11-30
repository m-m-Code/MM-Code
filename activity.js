    // Setup Ace
    let codeEditor = ace.edit("editor");
    let exercise1 = '<h1>Hello World</h1>';
    // let exercise2 = '<p> hello </p>';
    //
    // let exercise3 = '<p> bye </p>';
    // let exercise4 = '<p> morning </p>';

    let check = document.querySelector(".nextExercise");

    let userCode = ' ';

    var e = '<ul>\n <li>Coffee</li> \n <li>Tea</li> \n <li>Milk</li>\n</ul>'

    //let defaultCode2 = '<p> this is a paragraph </p>'

    let editorLib = {
      init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dracula");

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

    // '<h1>This is heading 1</h1>',
    // '<p>This is a paragraph.</p>',
    // '<a href="https://www.w3schools.com">This is a link</a>',
    // '<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">',
    // '<button>Click me</button>',
    // '<ul>\n <li>Coffee</li> \n <li>Tea</li> \n <li>Milk</li>\n</ul>',

    var exercises = [
      '<h1> hello </h1>',
      '<p> bye </p>',
      '<button> button </button>',
    ]

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
