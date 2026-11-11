const icons = {
    abacus: `<svg viewBox="0 0 64 64"><rect x="8" y="10" width="48" height="44" rx="4" fill="none" stroke="#854d0e" stroke-width="4"/><line x1="8" y1="22" x2="56" y2="22" stroke="#854d0e" stroke-width="2"/><line x1="8" y1="34" x2="56" y2="34" stroke="#854d0e" stroke-width="2"/><line x1="8" y1="46" x2="56" y2="46" stroke="#854d0e" stroke-width="2"/><circle cx="18" cy="22" r="4" fill="#d97706"/><circle cx="28" cy="22" r="4" fill="#d97706"/><circle cx="44" cy="34" r="4" fill="#d97706"/><circle cx="22" cy="46" r="4" fill="#d97706"/><circle cx="34" cy="46" r="4" fill="#d97706"/><circle cx="46" cy="46" r="4" fill="#d97706"/></svg>`,
    gears: `<svg viewBox="0 0 64 64"><circle cx="24" cy="24" r="10" fill="none" stroke="#475569" stroke-width="4" stroke-dasharray="5 3"/><circle cx="24" cy="24" r="4" fill="#475569"/><circle cx="44" cy="40" r="12" fill="none" stroke="#0284c7" stroke-width="4" stroke-dasharray="6 3"/><circle cx="44" cy="40" r="5" fill="#0284c7"/></svg>`,
    relay: `<svg viewBox="0 0 64 64"><rect x="12" y="16" width="40" height="32" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="3"/><line x1="16" y1="36" x2="30" y2="36" stroke="#dc2626" stroke-width="3"/><line x1="30" y1="36" x2="44" y2="24" stroke="#dc2626" stroke-width="3"/><circle cx="46" cy="36" r="3" fill="#334155"/><path d="M22 10 L22 16 M42 10 L42 16" stroke="#334155" stroke-width="3"/></svg>`,
    computer: `<svg viewBox="0 0 64 64"><rect x="10" y="12" width="44" height="30" rx="3" fill="#eff6ff" stroke="#1d4ed8" stroke-width="3"/><line x1="24" y1="42" x2="40" y2="42" stroke="#1d4ed8" stroke-width="3"/><line x1="32" y1="42" x2="32" y2="50" stroke="#1d4ed8" stroke-width="3"/><line x1="20" y1="50" x2="44" y2="50" stroke="#1d4ed8" stroke-width="3"/><polyline points="18,28 26,22 34,30 46,20" fill="none" stroke="#16a34a" stroke-width="2.5"/></svg>`,
    eom: `<svg viewBox="0 0 64 64"><rect x="14" y="10" width="36" height="44" rx="2" fill="#f1f5f9" stroke="#334155" stroke-width="3"/><circle cx="24" cy="20" r="2.5" fill="#22c55e"/><circle cx="32" cy="20" r="2.5" fill="#ef4444"/><circle cx="40" cy="20" r="2.5" fill="#eab308"/><rect x="20" y="28" width="24" height="8" fill="#94a3b8"/><line x1="20" y1="42" x2="44" y2="42" stroke="#334155" stroke-width="2"/><line x1="20" y1="47" x2="44" y2="47" stroke="#334155" stroke-width="2"/></svg>`,
    hand: `<svg viewBox="0 0 64 64"><path d="M22 50 V26 a3 3 0 0 1 6 0 V34 V18 a3 3 0 0 1 6 0 V34 V20 a3 3 0 0 1 6 0 V34 V25 a3 3 0 0 1 6 0 V42 C46 48 40 54 32 54 C25 54 22 50 22 50 Z" fill="#fed7aa" stroke="#9a3412" stroke-width="2.5"/></svg>`,
    calc: `<svg viewBox="0 0 64 64"><rect x="16" y="8" width="32" height="48" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="3"/><rect x="21" y="14" width="22" height="10" fill="#dcfce7" stroke="#334155" stroke-width="2"/><circle cx="24" cy="32" r="2.5" fill="#334155"/><circle cx="32" cy="32" r="2.5" fill="#334155"/><circle cx="40" cy="32" r="2.5" fill="#334155"/><circle cx="24" cy="40" r="2.5" fill="#334155"/><circle cx="32" cy="40" r="2.5" fill="#334155"/><circle cx="40" cy="40" r="2.5" fill="#334155"/><circle cx="24" cy="48" r="2.5" fill="#334155"/><circle cx="32" cy="48" r="2.5" fill="#334155"/><circle cx="40" cy="48" r="2.5" fill="#ef4444"/></svg>`,
    ada: `<svg viewBox="0 0 64 64"><rect x="14" y="10" width="36" height="44" rx="3" fill="#fefce8" stroke="#854d0e" stroke-width="2.5"/><text x="20" y="26" font-family="monospace" font-size="11" fill="#854d0e" font-weight="bold">01011</text><text x="20" y="38" font-family="monospace" font-size="11" fill="#854d0e" font-weight="bold">11001</text><path d="M40 44 L52 32 L55 35 L43 47 Z" fill="#2563eb"/></svg>`,
    tube: `<svg viewBox="0 0 64 64"><path d="M22 44 V22 a10 10 0 0 1 20 0 V44 Z" fill="#fef08a" fill-opacity="0.6" stroke="#475569" stroke-width="2.5"/><rect x="20" y="44" width="24" height="6" fill="#334155"/><line x1="25" y1="50" x2="25" y2="56" stroke="#334155" stroke-width="2.5"/><line x1="32" y1="50" x2="32" y2="56" stroke="#334155" stroke-width="2.5"/><line x1="39" y1="50" x2="39" y2="56" stroke="#334155" stroke-width="2.5"/><path d="M28 38 V26 L32 22 L36 26 V38" fill="none" stroke="#ea580c" stroke-width="2"/></svg>`,
    cpu: `<svg viewBox="0 0 64 64"><rect x="18" y="18" width="28" height="28" rx="3" fill="#1e293b" stroke="#0f172a" stroke-width="2"/><rect x="24" y="24" width="16" height="16" fill="#3b82f6"/><path d="M24 12 V18 M32 12 V18 M40 12 V18 M24 46 V52 M32 46 V52 M40 46 V52 M12 24 H18 M12 32 H18 M12 40 H18 M46 24 H52 M46 32 H52 M46 40 H52" stroke="#eab308" stroke-width="2.5"/></svg>`,
    ruler: `<svg viewBox="0 0 64 64"><rect x="8" y="22" width="48" height="20" rx="2" fill="#fef3c7" stroke="#92400e" stroke-width="2.5"/><line x1="8" y1="32" x2="56" y2="32" stroke="#92400e" stroke-width="1.5"/><path d="M16 22 V27 M24 22 V29 M32 22 V27 M40 22 V29 M48 22 V27" stroke="#92400e" stroke-width="2"/><text x="27" y="40" font-size="10" fill="#92400e" font-weight="bold">√x</text></svg>`,
    transistor: `<svg viewBox="0 0 64 64"><path d="M22 28 a10 10 0 0 1 20 0 V36 H22 Z" fill="#475569" stroke="#1e293b" stroke-width="2.5"/><line x1="25" y1="36" x2="25" y2="54" stroke="#94a3b8" stroke-width="3"/><line x1="32" y1="36" x2="32" y2="54" stroke="#94a3b8" stroke-width="3"/><line x1="39" y1="36" x2="39" y2="54" stroke="#94a3b8" stroke-width="3"/></svg>`,
    punchcard: `<svg viewBox="0 0 64 64"><polygon points="12,18 46,18 52,24 52,46 12,46" fill="#fef9c3" stroke="#854d0e" stroke-width="2.5"/><rect x="18" y="25" width="4" height="6" fill="#334155"/><rect x="26" y="33" width="4" height="6" fill="#334155"/><rect x="34" y="25" width="4" height="6" fill="#334155"/><rect x="42" y="33" width="4" height="6" fill="#334155"/></svg>`,
    ic: `<svg viewBox="0 0 64 64"><rect x="14" y="22" width="36" height="20" rx="2" fill="#1e293b" stroke="#0f172a" stroke-width="2"/><path d="M20 16 V22 M28 16 V22 M36 16 V22 M44 16 V22 M20 42 V48 M28 42 V48 M36 42 V48 M44 42 V48" stroke="#94a3b8" stroke-width="2.5"/><circle cx="19" cy="32" r="2" fill="#64748b"/></svg>`
};

const quizData = [
    {
        question: "Завдання 1. У домеханічний період для лічби використовували пальці, камінці, вузлики на мотузці, абак.",
        icon: icons.abacus,
        options: ["Так", "Ні"],
        correct: 0,
        explanation: "У найдавніші часи, до винайдення складних механізмів, люди використовували для підрахунків природні підручні засоби та найпростіші рахівниці — абаки."
    },
    {
        question: "Завдання 2. Логарифмічна лінійка, паскаліна, машина Лейбніца — це пристрої, схожі за функціями на калькулятори.",
        icon: icons.gears,
        options: ["Так", "Ні"],
        correct: 0,
        explanation: "Усі ці винаходи механічного періоду призначалися для автоматизації або полегшення арифметичних дій, тому вони є прямими попередниками сучасних калькуляторів."
    },
    {
        question: "Завдання 3. Протягом електромеханічного періоду створювалися механічні пристрої на електричних перемикачах.",
        icon: icons.relay,
        options: ["Так", "Ні"],
        correct: 0,
        explanation: "В електромеханічний період (кінець XIX — перша половина XX ст.) рухомі механічні деталі почали керуватися за допомогою електричних реле та перемикачів."
    },
    {
        question: "Завдання 4. Електронний період — це епоха комп'ютерів.",
        icon: icons.computer,
        options: ["Так", "Ні"],
        correct: 0,
        explanation: "Саме в електронний період (з 1940-х років) на зміну механічним частинам прийшли електронні компоненти, що започаткувало еру сучасних комп'ютерів."
    },
    {
        question: "Завдання 5. ЕОМ — це електромеханічна обчислювальна машина.",
        icon: icons.eom,
        options: ["Так", "Ні"],
        correct: 1,
        explanation: "Абревіатура ЕОМ розшифровується як «Електронна обчислювальна машина», а не електромеханічна."
    },
    {
        question: "Завдання 6. Період, коли ще не існувало обчислювальних машин, називають...",
        icon: icons.hand,
        options: ["механічним", "електромеханічним", "електронним", "домеханічним"],
        correct: 3,
        explanation: "Етап історії, коли люди рахували без використання складних механізмів (на пальцях, камінцях чи абаку), називають домеханічним."
    },
    {
        question: "Завдання 7. Протягом механічного періоду було винайдено багато пристроїв, схожих за функціями на...",
        icon: icons.calc,
        options: ["калькулятори", "рахівниці", "аналізатори", "перфоратори"],
        correct: 0,
        explanation: "Механічні пристрої XVII–XIX століть (Паскаліна, арифмометр Лейбніца) виконували арифметичні обчислення, подібно до калькуляторів."
    },
    {
        question: "Завдання 8. Приклади програм, які вважають першими програмами для обчислювальних пристроїв, британська математикиня Ада Лавлейс написала для...",
        icon: icons.ada,
        options: ["рахівниці", "паскаліни", "машини Лейбніца", "різницевої машини Беббіджа"],
        correct: 3,
        explanation: "Ада Лавлейс розробила перші алгоритми (програми) для проєкту обчислювальної машини британського винахідника Чарльза Беббіджа."
    },
    {
        question: "Завдання 9. Основа першого покоління комп'ютерів, яке з'явилося у 40-х роках XX століття, — це...",
        icon: icons.tube,
        options: ["транзистор", "інтегральна схема", "електровакуумна лампа", "мікропроцесор"],
        correct: 2,
        explanation: "Комп'ютери першого покоління (1940-ві роки) працювали на електровакуумних лампах, які займали цілі зали та сильно нагрівалися."
    },
    {
        question: "Завдання 10. Основа четвертого покоління комп'ютерів — це...",
        icon: icons.cpu,
        options: ["транзистор", "інтегральна схема", "електровакуумна лампа", "мікропроцесор"],
        correct: 3,
        explanation: "Четверте покоління комп'ютерів базується на мікропроцесорах, що дозволило створити компактні персональні комп'ютери."
    },
    {
        question: "Завдання 11. Уяви, що ти живеш у XVII столітті. Тобі потрібно обчислити корінь числа. Який пристрій ти вибереш?",
        icon: icons.ruler,
        options: ["Логарифмічна лінійка", "Паскаліна", "Машина Лейбніца", "Абак"],
        correct: 0,
        explanation: "Паскаліна вміла лише додавати й віднімати, абак не підходить для коренів, а логарифмічна лінійка (винайдена у XVII ст.) дозволяла обчислювати корені та множити."
    },
    {
        question: "Завдання 12. Уяви, що ти живеш у 1955 році. Тобі потрібно створити комп’ютер другого покоління на основі електронного перемикача для вмикання, вимикання і підсилення електричного сигналу. Що ти вибереш?",
        icon: icons.transistor,
        options: ["Електровакуумна лампа", "Транзистор", "Інтегральна схема", "Мікропроцесор"],
        correct: 1,
        explanation: "У середині 1950-х років на зміну громіздким лампам прийшли напівпровідникові транзистори, які стали основою другого покоління ЕОМ."
    },
    {
        question: "Завдання 13. Уяви, що ти живеш у 1890 році. Тобі потрібно опрацювати результати перепису населення. Який пристрій ти вибереш?",
        icon: icons.punchcard,
        options: ["Табулятор Голлеріта", "Машину Лейбніца", "Паскаліна", "Абак"],
        correct: 0,
        explanation: "Для автоматизованого опрацювання результатів перепису населення США 1890 року Герман Голлеріт винайшов електричний табулятор із перфокартами."
    },
    {
        question: "Завдання 14. Уяви, що ти працюєш у 1965 році в Інституті кібернетики. Тобі потрібно створити комп’ютер третього покоління. Що ти вибереш?",
        icon: icons.ic,
        options: ["Електровакуумна лампа", "Транзистор", "Інтегральна схема", "Мікропроцесор"],
        correct: 2,
        explanation: "У 1960-х роках комп'ютери третього покоління почали будувати на інтегральних схемах, які об'єднували багато транзисторів на одному кристалі."
    }
];

let questionStates = [];

function initStates() {
    questionStates = quizData.map(() => ({
        attempts: 0,
        solved: false,
        score: 0
    }));
}

function renderQuiz() {
    initStates();
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    quizData.forEach((item, qIndex) => {
        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "card-" + qIndex;

        const header = document.createElement("div");
        header.className = "question-header";

        const iconDiv = document.createElement("div");
        iconDiv.className = "illustration";
        iconDiv.innerHTML = item.icon;
        header.appendChild(iconDiv);

        const title = document.createElement("div");
        title.className = "question-title";
        title.textContent = item.question;
        header.appendChild(title);

        card.appendChild(header);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        item.options.forEach((opt, oIndex) => {
            const label = document.createElement("label");
            label.className = "option-label";
            label.id = "label-" + qIndex + "-" + oIndex;

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "question-" + qIndex;
            radio.value = oIndex;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });

        card.appendChild(optionsDiv);

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "q-actions";

        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "check-single-btn";
        checkBtn.id = "btn-check-" + qIndex;
        checkBtn.textContent = "Перевірити відповідь";
        checkBtn.onclick = () => checkQuestion(qIndex);

        const attemptSpan = document.createElement("span");
        attemptSpan.className = "attempt-badge";
        attemptSpan.id = "attempt-" + qIndex;
        attemptSpan.textContent = "Спроба 1 з 2";

        actionsDiv.appendChild(checkBtn);
        actionsDiv.appendChild(attemptSpan);
        card.appendChild(actionsDiv);

        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "feedback-box";
        feedbackDiv.id = "feedback-" + qIndex;
        card.appendChild(feedbackDiv);

        container.appendChild(card);
    });
}

function lockQuestion(qIndex) {
    const radios = document.querySelectorAll('input[name="question-' + qIndex + '"]');
    radios.forEach(r => {
        r.disabled = true;
        r.parentElement.classList.add("disabled");
    });
    const btn = document.getElementById("btn-check-" + qIndex);
    if (btn) btn.disabled = true;
}

function checkQuestion(qIndex) {
    const state = questionStates[qIndex];
    if (state.solved) return;

    const selected = document.querySelector('input[name="question-' + qIndex + '"]:checked');
    const feedbackDiv = document.getElementById("feedback-" + qIndex);
    const attemptSpan = document.getElementById("attempt-" + qIndex);

    if (!selected) {
        feedbackDiv.className = "feedback-box feedback-retry";
        feedbackDiv.textContent = "Спочатку оберіть один із варіантів відповіді!";
        return;
    }

    const userAnswer = parseInt(selected.value, 10);
    const item = quizData[qIndex];
    state.attempts++;

    if (userAnswer === item.correct) {
        state.solved = true;
        state.score = state.attempts === 1 ? 1 : 0.5;

        const correctLabel = document.getElementById("label-" + qIndex + "-" + userAnswer);
        correctLabel.classList.add("correct");

        feedbackDiv.className = "feedback-box feedback-success";
        feedbackDiv.textContent = state.attempts === 1
            ? "Правильно з першої спроби! (+1 бал)"
            : "Правильно з другої спроби! (+0.5 бала)";
        attemptSpan.textContent = "Зараховано";
        lockQuestion(qIndex);
    } else {
        const wrongLabel = document.getElementById("label-" + qIndex + "-" + userAnswer);
        wrongLabel.classList.add("incorrect");
        selected.disabled = true;
        selected.checked = false;
        wrongLabel.classList.add("disabled");

        if (state.attempts === 1) {
            feedbackDiv.className = "feedback-box feedback-retry";
            feedbackDiv.innerHTML = "<b>Неправильно!</b> У вас є друга спроба. Підказка: " + item.explanation;
            attemptSpan.textContent = "Спроба 2 з 2";
        } else {
            state.solved = true;
            state.score = 0;

            const correctLabel = document.getElementById("label-" + qIndex + "-" + item.correct);
            correctLabel.classList.add("correct");

            feedbackDiv.className = "feedback-box feedback-fail";
            feedbackDiv.innerHTML = "<b>Спроби вичерпано (0 балів).</b> " + item.explanation;
            attemptSpan.textContent = "Не зараховано";
            lockQuestion(qIndex);
        }
    }
}

function finishQuiz() {
    const nameInput = document.getElementById("student-name");
    const nameError = document.getElementById("name-error");
    const studentName = nameInput.value.trim();

    if (!studentName) {
        nameError.style.display = "block";
        nameInput.focus();
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }
    nameError.style.display = "none";

    quizData.forEach((item, qIndex) => {
        const state = questionStates[qIndex];
        if (!state.solved) {
            const selected = document.querySelector('input[name="question-' + qIndex + '"]:checked');
            if (selected) {
                const userAnswer = parseInt(selected.value, 10);
                if (userAnswer === item.correct) {
                    state.score = state.attempts === 0 ? 1 : 0.5;
                    document.getElementById("label-" + qIndex + "-" + userAnswer).classList.add("correct");
                } else {
                    state.score = 0;
                    document.getElementById("label-" + qIndex + "-" + userAnswer).classList.add("incorrect");
                    document.getElementById("label-" + qIndex + "-" + item.correct).classList.add("correct");
                }
            } else {
                state.score = 0;
                document.getElementById("label-" + qIndex + "-" + item.correct).classList.add("correct");
            }
            state.solved = true;
            const feedbackDiv = document.getElementById("feedback-" + qIndex);
            feedbackDiv.className = state.score > 0 ? "feedback-box feedback-success" : "feedback-box feedback-fail";
            feedbackDiv.textContent = state.score > 0 ? "Відповідь зараховано." : "Правильну відповідь виділено зеленим.";
            lockQuestion(qIndex);
        }
    });

    const totalRaw = questionStates.reduce((sum, st) => sum + st.score, 0);
    const maxGrade = 10;
    const finalGrade = ((totalRaw / quizData.length) * maxGrade).toFixed(1);

    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";
    resultBox.innerHTML =
        "<div class='student-result-name'>Учень: " + escapeHtml(studentName) + "</div>" +
        "Набрано балів за завдання: <b>" + totalRaw + "</b> із <b>" + quizData.length + "</b>" +
        "<span class='grade-highlight'>Підсумкова оцінка: " + finalGrade + " / 10 балів</span>";

    resultBox.scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
    renderQuiz();
    document.getElementById("result-box").style.display = "none";
    document.getElementById("name-error").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", renderQuiz);
