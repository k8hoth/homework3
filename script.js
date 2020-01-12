
        //set up variables
        var yesalph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z"
        ];
        var yescaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
            "T", "U", "V", "W", "X", "Y", "Z"
        ];
        var yesnumb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var yesspec = [" ", "!", "*", "+", "-", "/", ":", ";", "<", "?", "@", "^", "_", "`", "~"];

        var pwlength = " ";


        //prompt questions/answers


        function getOptions() {
            var pwlength = prompt("Length? number");
            console.log(pwlength)
            var yesalph = confirm("lowercase?");
            console.log(yesalph)
            var yescaps = confirm("uppercase?");
            console.log(yescaps)
            var yesnumb = confirm("numbers?");
            console.log(yesnumb)
            var yesspec = confirm("specials?");
            console.log(yesspec)

            alert(
                `You chose ${pwlength}, ${yesalph} lowercase, ${yescaps} uppercase, ${yesnumb} numbers, and ${yesspec} special characters.`);
            console.log(getOptions);

            var passwordOptions = {
                pwlength: pwlength,
                yesalph: yesalph,
                yescaps: yescaps,
                yesnumb: yesnumb,
                yesspec: yesspec,
            }
            return passwordOptions;
        };

        function randomGen(Arr) {
            var randomIndex = (Math.floor(Math.random() * Arr.length));
            var resultX = Arr[randomIndex];
            return (resultX)
        }


        function makePw() {
            var options = getOptions()
            var finalPw = [];
            var Array1 = [];
            var Array2 = [];
            // for (var i = 0; i <= pwlength.length; i++){



            if (options.yesalph) {
                Array1 = Array1.concat(yesalph);
                Array2.push(randomGen(yesalph));
            }
            if (options.yescaps) {
                Array1 = Array1.concat(yescaps);
                Array2.push(randomGen(yescaps));
            }
            if (options.yesnumb) {
                Array1 = Array1.concat(yesnumb);
                Array2.push(randomGen(yesnumb));
            }
            if (options.yesspec) {
                Array1 = Array1.concat(yesspec);
                Array2.push(randomGen(yesspec));
            }

            for (var i = 0; i <= options.pwlength; i++) {
                var arrOptions = randomGen(Array1);
                finalPw.push(arrOptions);
            }

            for (var i = 0; i <= Array2.length; i++) {
                finalPw[i] = Array2[i];

            }


            console.log(finalPw);
            return finalPw.join("")


        }
    

        var button = document.querySelector("#generate");
        function showPassword(){
            var entryPw = makePw();
            var voila = document.querySelector("#password");
            voila.value = entryPw;
        }        
        button.addEventListener("click", showPassword);

