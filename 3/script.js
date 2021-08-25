// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
    $(function() {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have 
        // two entries: an across entry and a down entry
        var puzzleData = [{
                clue: "What is compared with salt?",
                answer: "humans",
                position: 1,
                orientation: "down",
                startx: 3,
                starty: 1
            },
            {
                clue: "Human beings are the world's ____ .",
                answer: "light",
                position: 2,
                orientation: "across",
                startx: 6,
                starty: 1
            },
            {
                clue: "What happens to salt as it looses it's saltiness?",
                answer: "trampled",
                position: 3,
                orientation: "down",
                startx: 10,
                starty: 1
            },
            {
                clue: "Which is the place where the city is not hidden?",
                answer: "hil",
                position: 4,
                orientation: "across",
                startx: 3,
                starty: 1
            },
            {
                clue: "Where will one place the lamp that is lit?",
                answer: "stand",
                position: 5,
                orientation: "down",
                startx: 6,
                starty: 3
            },
            {
                clue: "A lamp that is lit, is not put under a ____ .",
                answer: "bowl",
                position: 6,
                orientation: "across",
                startx: 7,
                starty: 6
            },
            {
                clue: "Lamp will give light to _____ .",
                answer: "everyone",
                position: 7,
                orientation: "down",
                startx: 2,
                starty: 3
            },
            {
                clue: " Before whom should our light shine?",
                answer: "men",
                position: 8,
                orientation: "across",
                startx: 1,
                starty: 5
            },
            {
                clue: " Men must see our good ____ .",
                answer: "deeds",
                position: 9,
                orientation: "across",
                startx: 1,
                starty: 10
            },
            {
                clue: "What will father in heaven receive because of our good behaviour?",
                answer: "praise",
                position: 10,
                orientation: "across",
                startx: 4,
                starty: 5
            }
        ]

        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)