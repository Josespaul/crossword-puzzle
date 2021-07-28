// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
    $(function() {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have 
        // two entries: an across entry and a down entry
        var puzzleData = [{
                clue: "Who Opens the Gate for Shepherd.",
                answer: "watchman",
                position: 1,
                orientation: "down",
                startx: 8,
                starty: 1
            },
            {
                clue: "Shepherd calls the sheep by _________.",
                answer: "name",
                position: 2,
                orientation: "across",
                startx: 7,
                starty: 2
            },
            {
                clue: "A person who enters through the gate of sheep pen",
                answer: "shepherd",
                position: 3,
                orientation: "down",
                startx: 1,
                starty: 1
            },
            {
                clue: "A person who dose not enters through the gate of sheep pen",
                answer: "robber",
                position: 4,
                orientation: "across",
                startx: 1,
                starty: 7
            },
            /* {
                clue: "To divide or use something with others.",
                answer: "share",
                position: 5,
                orientation: "across",
                startx: 12,
                starty: 2
            },  */
            {
                clue: "From whom will the sheep run away.",
                answer: "stranger",
                position: 5,
                orientation: "down",
                startx: 5,
                starty: 1
            },
            {
                clue: "Jesus is the ______ for the sheep.",
                answer: "gate",
                position: 6,
                orientation: "across",
                startx: 4,
                starty: 4
            },
            {
                clue: "He who enters through Jesus will find _________ .",
                answer: "pasture",
                position: 7,
                orientation: "down",
                startx: 10,
                starty: 3
            },
            {
                clue: "What does the good shepherd give for his sheep?",
                answer: "life",
                position: 8,
                orientation: "across",
                startx: 7,
                starty: 9
            },
            {
                clue: "What attacts the sheep?",
                answer: "wolf",
                position: 9,
                orientation: "across",
                startx: 8,
                starty: 1
            },
            {
                clue: "An hired stranger on seeing danger _________ the sheep.",
                answer: "abandons",
                position: 10,
                orientation: "down",
                startx: 2,
                starty: 2
            }
        ]

        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)