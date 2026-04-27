(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open2]"),
        closeModalBtn: document.querySelector("[data-modal-close2]"),
        modal: document.querySelector("[data-modal2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const modal = document.querySelector("[data-modal]");
    const closeBtn = document.querySelector("[data-close]");
    const title = document.querySelector("#title");
    const text = document.querySelector("#text");

    const data = {
        m1: { title: "Особлива", text: "Соус, сир, курка, гриби🍄‍🟫" },
        m2: { title: "Пепероні", text: "Соус, моцарела, пепероні 🍕" },
        m3: { title: "Маргарита", text: "Соус, моцарела, базилік 🍃" },
        m4: { title: "4 сезони", text: "Гриби, шинка, оливки🫛" },
        m5: { title: "М’ясна", text: "Ковбаса, бекон, шинка 🍖" },
        m6: { title: "4 сири", text: "Моцарела, чеддер, дорблю 🧀" }
    };

    document.querySelectorAll("[data-open]").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.dataset.open;

            title.textContent = data[key].title;
            text.textContent = data[key].text;

            modal.classList.remove("is-hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("is-hidden");
    });
})();