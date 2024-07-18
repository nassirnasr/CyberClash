'use strict';

$(window).on('load', function() {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
});

(function($) {
    $('.primary-menu').slicknav({
        appendTo: '.header-warp',
        closedSymbol: '<i class="fa fa-angle-down"></i>',
        openedSymbol: '<i class="fa fa-angle-up"></i>'
    });

    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText: ['', '<img src="img/icons/solid-right-arrow.png">'],
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        autoplayTimeout: 10000,
    });

    var dot = $('.hero-slider .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index + '.');
        } else {
            $(this).html(index + '.');
        }
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('#stickySidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 60
    });

    // Initialize SQLite database
    var db = new SQL.Database();

    // Create high_scores table if not exists with difficulty column
    db.run(`CREATE TABLE IF NOT EXISTS high_scores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        player_name TEXT NOT NULL,
        score INTEGER NOT NULL,
        difficulty TEXT NOT NULL,
        score_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    // Function to insert score into SQLite
    function insertScore(playerName, score, difficulty) {
        var stmt = db.prepare(`INSERT INTO high_scores (player_name, score, difficulty) VALUES (?, ?, ?)`);
        stmt.run(playerName, score, difficulty);
        stmt.free();
    }

    // Function to retrieve high scores from SQLite based on difficulty
    function getHighScores(difficulty) {
        var result = db.exec(`SELECT player_name, score FROM high_scores WHERE difficulty = ? ORDER BY score DESC LIMIT 10`, [difficulty]);
        return result[0] ? result[0].values : []; // Return array of [player_name, score] pairs
    }

    // Function to display high scores in the popup
    function displayHighScores() {
        var difficulties = ["Easy", "Medium", "Hard"];
        difficulties.forEach(function(difficulty) {
            var scores = getHighScores(difficulty);
            var highScoresList = document.getElementById(difficulty.toLowerCase() + "HighScoresList");

            // Clear existing list items
            highScoresList.innerHTML = "<h4>" + difficulty + " Scores</h4>";

            // Add scores to the list
            scores.forEach(function(score) {
                var li = document.createElement("li");
                li.textContent = score[0] + ": " + score[1]; // player_name: score
                highScoresList.appendChild(li);
            });
        });

        // Show the high scores popup
        openPopup('highScoresPopup');
    }

    // Add click event listener to scores button
    document.getElementById('scoresButton').addEventListener('click', function() {
        displayHighScores();
    });

})(jQuery);
