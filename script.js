const horizontal_line = document.getElementById("horizontal-line");
const vertical_line = document.getElementById("vertical-line");

const pillsContainer = document.getElementById("pills-container");

function randomColorGenerator() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomIdGenerator() {
    const letter = "0123456789abcdef";
    let id = "pill-";
    for (let i = 0; i < 6; i++) {
        id += letter[Math.floor(Math.random() * 16)];
    }
    return id;
}

window.addEventListener("mousedown", (e) => {
    const targetElement = e.target.className.includes("pill")

    if (targetElement) {
        console.log("Move it");

    } else {
        const element = document.createElement("div");
        const id = randomIdGenerator();
        const color = randomColorGenerator();

        element.className = `pill ${id} bg-[${color}]`;
        element.style.top = `${e.pageY}px`;
        element.style.left = `${e.pageX}px`;

        pillsContainer.appendChild(element);

        function onMouseMove(event) {
            updatePill(event, element);
        }

        window.addEventListener("mousemove", onMouseMove);

        window.addEventListener("mouseup", function onMouseUp() {
            if (
                element.style.height.split("px")[0] < 30 &&
                element.style.width.split("px")[0] < 30
            ) {
                pillsContainer.removeChild(element);
            }

            this.window.removeEventListener("mousemove", onMouseMove);
            this.window.removeEventListener("mouseup", onMouseUp);
        });
    }
});

function updatePill(event, element) {
    element.style.height = `${Math.abs(event.pageY - element.offsetTop)}px`;
    element.style.width = `${Math.abs(event.pageX - element.offsetLeft)}px`;
}

// Moving Vertical & Horizontal Lines Functionalities

window.addEventListener("mousemove", controlLines);

window.removeEventListener("mouseout", controlLines);

function controlLines(event) {
    const x = event.pageX;
    const y = event.pageY;

    horizontal_line.style.top = `${y}px`;
    vertical_line.style.left = `${x}px`;
}
