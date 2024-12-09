const quizData = [
    {
        question: "What does HTML stand for?",

        a: "HyperText Markup Language",
        b: "Hyperlink Markup Language",
        c: "Hyper Tag Markup Language",
        d: "Home Tool Markup Language",
        correct: "a"
    },
    {
        question: "Which of the following is used to style a web page?",

        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "PHP",
        correct: "b"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",

        a: "<style>",
        b: "<css>",
        c: "<script>",
        d: "<link>",
        correct: "a"
    },
    {
        question: "Which attribute is used in HTML to provide alternate text for an image?",

        a: "src",
        b: "alt",
        c: "title",
        d: "href",
        correct: "b"
    },
    {
        question: "Which of the following is a JavaScript framework?",

        a: "React",
        b: "Django",
        c: "Laravel",
        d: "Ruby on Rails",
        correct: "a"
    },
    {
        question: "What is the correct syntax to link an external CSS file in HTML?",

        a: "<stylesheet>style.css</stylesheet>",
        b: "<link rel='stylesheet' href='style.css'>",
        c: "<css link='style.css'>",
        d: "<link stylesheet='style.css'>",
        correct: "b"
    },
    {
        question: "What does the 'DOM' stand for in JavaScript?",

        a: "Document Object Module",
        b: "Document Object Model",
        c: "Document Output Model",
        d: "Data Object Model",
        correct: "b"
    },
    {
        question: "Which HTTP method is used to send data to the server to create/update a resource?",

        a: "GET",
        b: "POST",
        c: "PUT",
        d: "DELETE",
        correct: "b"
    },
    {
        question: "In CSS, how can you make the text bold?",

        a: "font-weight: bold;",
        b: "text-style: bold;",
        c: "font-style: bold;",
        d: "font-weight: 500;",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define a table?",

        a: "<td>",
        b: "<tr>",
        c: "<table>",
        d: "<th>",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
