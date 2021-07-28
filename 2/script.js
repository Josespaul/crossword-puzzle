// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
    $(function() {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have 
        // two entries: an across entry and a down entry
        var puzzleData = [{
                clue: "What happens to branches that bears no fruit?",
                answer: "cut",
                position: 1,
                orientation: "across",
                startx: 1,
                starty: 3
            },
            {
                clue: "What happens to branches that bears Fruit?",
                answer: "PRUNED",
                position: 2,
                orientation: "down",
                startx: 2,
                starty: 1
            },
            {
                clue: "To bear fruit the branch must remain in ___",
                answer: "wine",
                position: 3,
                orientation: "across",
                startx: 5,
                starty: 6
            },
            {
                clue: " If we do not remain in Christ we can do ___",
                answer: "NOTHING",
                position: 4,
                orientation: "down",
                startx: 3,
                starty: 1
            },
            {
                clue: "Withered branches are picked and thrown into ___",
                answer: "FIRE",
                position: 5,
                orientation: "across",
                startx: 4,
                starty: 4
            },
            {
                clue: "As we bear fruit what do we bring to father? ",
                answer: "GLORY",
                position: 6,
                orientation: "down",
                startx: 6,
                starty: 1
            },
            {
                clue: "What does one do to his neighbour as per Christ command?",
                answer: "LOVE",
                position: 7,
                orientation: "across",
                startx: 5,
                starty: 3
            },
            {
                clue: " In order to remain in God's love keep his ___",
                answer: "COMMANDS",
                position: 8,
                orientation: "down",
                startx: 9,
                starty: 1
            },
            {
                clue: "We were chosen by whom?",
                answer: "CHRIST",
                position: 9,
                orientation: "across",
                startx: 5,
                starty: 8
            },
            {
                clue: "Who doesn't know master's business?",
                answer: "SERVANT",
                position: 10,
                orientation: "down",
                startx: 10,
                starty: 2
            }
        ]

        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)