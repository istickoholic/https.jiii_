document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTS
    // =========================

    const welcome = document.getElementById("welcome");
    const quiz = document.getElementById("quiz");
    const heartGame = document.getElementById("heartGame");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const letterScreen = document.getElementById("letterScreen");

    const startBtn = document.getElementById("startBtn");
    const openLetterBtn = document.getElementById("openLetterBtn");

    const questionText = document.getElementById("questionText");
    const questionNumber = document.getElementById("questionNumber");
    const answers = document.getElementById("answers");
    const quizMessage = document.getElementById("quizMessage");
    const progressBar = document.getElementById("progressBar");

    const gameArea = document.getElementById("gameArea");
    const scoreText = document.getElementById("score");


    // =========================
    // SCREEN SWITCHER
    // =========================

    function showScreen(screen) {

        document.querySelectorAll(".screen").forEach(function (item) {
            item.classList.remove("active");
        });

        screen.classList.add("active");
    }


    // =========================
    // START BUTTON
    // =========================

    startBtn.addEventListener("click", function () {

        showScreen(quiz);

        currentQuestion = 0;

        showQuestion();

    });


    // =========================
    // QUIZ DATA
    // =========================

    const questions = [

        {
            question: "Who usually gets tampo first? 👀",

            answers: [
                "Me 😭",
                "You 😭",
                "Both of us 😂"
            ],

            correct: 2
        },

        {
            question: "What's one thing I love doing with you? 💗",

            answers: [
                "Watching movies & playing games🎬",
                "Ignoring you 😭",
                "Nothing 😂"
            ],

            correct: 0
        },

        {
            question: "Who do I love the most? ❤️",

            answers: [
                "Myself 😂",
                "You ❤️",
                "My phone 📱"
            ],

            correct: 1
        }

    ];


    // =========================
    // SHOW QUESTION
    // =========================

    function showQuestion() {

        const question = questions[currentQuestion];

        questionNumber.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;

        questionText.textContent =
            question.question;

        progressBar.style.width =
            ((currentQuestion) / questions.length * 100) + "%";

        answers.innerHTML = "";

        quizMessage.textContent = "";


        question.answers.forEach(function (answer, index) {

            const button = document.createElement("button");

            button.textContent = answer;

            button.className = "answer-button";

            button.addEventListener("click", function () {

                checkAnswer(index);

            });

            answers.appendChild(button);

        });

    }


    // =========================
    // CHECK ANSWER
    // =========================

    function checkAnswer(selectedAnswer) {

        const correctAnswer =
            questions[currentQuestion].correct;


        if (selectedAnswer === correctAnswer) {

            currentQuestion++;

            if (currentQuestion >= questions.length) {

                progressBar.style.width = "100%";

                questionText.textContent =
                    "You know us so well! 🥹❤️";

                answers.innerHTML = "";

                quizMessage.textContent =
                    "Okay baby... next challenge! 💕";


                setTimeout(function () {

                    startHeartGame();

                }, 1500);

            } else {

                quizMessage.textContent =
                    "Correct! 🥹❤️";

                setTimeout(function () {

                    showQuestion();

                }, 600);

            }

        } else {

            quizMessage.textContent =
                "Hmmmm... Pst huy baby, maliii. 😭❤️";

        }

    }


    // =========================
    // HEART GAME
    // =========================

    let score = 0;


    function startHeartGame() {

        showScreen(heartGame);

        score = 0;

        scoreText.textContent = score;

        gameArea.innerHTML = "";

        createHeart();

    }


    function createHeart() {

        if (score >= 10) {

            finishHeartGame();

            return;

        }


        const heart = document.createElement("div");

        heart.className = "game-heart";

        heart.textContent = "❤️";


        const maxX =
            gameArea.clientWidth - 45;

        const maxY =
            gameArea.clientHeight - 45;


        heart.style.left =
            Math.random() * maxX + "px";

        heart.style.top =
            Math.random() * maxY + "px";


        heart.addEventListener("click", function () {

            score++;

            scoreText.textContent = score;

            heart.remove();


            if (score >= 10) {

                finishHeartGame();

            } else {

                createHeart();

            }

        });


        gameArea.appendChild(heart);

    }


    // =========================
    // FINISH HEART GAME
    // =========================

    function finishHeartGame() {

        gameArea.innerHTML =
            '<div style="text-align:center;padding-top:140px;font-size:22px;">' +
            'You caught all my hearts! 🥹❤️' +
            '</div>';


        setTimeout(function () {

            showScreen(envelopeScreen);

        }, 1800);

    }


    // =========================
    // OPEN LETTER
    // =========================

    openLetterBtn.addEventListener("click", function () {

        showScreen(letterScreen);

        createExtraHearts();

    });


    // =========================
    // FLOATING HEARTS
    // =========================

    function createExtraHearts() {

        const container =
            document.querySelector(".floating-hearts");


        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            heart.textContent =
                Math.random() > 0.5 ? "❤️" : "💕";


            heart.style.left =
                Math.random() * 100 + "%";


            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";


            heart.style.animationDuration =
                (5 + Math.random() * 6) + "s";


            heart.style.animationDelay =
                Math.random() * 5 + "s";


            container.appendChild(heart);

        }

    }


    // Create background hearts immediately
    createExtraHearts();

});