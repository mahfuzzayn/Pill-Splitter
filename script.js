const horizontal_line = document.getElementById("horizontal-line");
const vertical_line = document.getElementById("vertical-line");

const pillsContainer = document.getElementById("pills-container");

window.addEventListener("mousedown", function onMouseDown(e) {
    const hAxisX = Number(horizontal_line.style.top.split("px")[0]);
    const vAxisY = Number(vertical_line.style.left.split("px")[0]);
    const pills = this.document.querySelectorAll(".pill");
    const isPill = e.target.className.includes("pill");
    let isMouseMoved = false;

    pills.forEach((pill) => {
        const pillX = Number(pill.style.left.split("px")[0]);
        const pillY = Number(pill.style.top.split("px")[0]);
        const pillWidth = Number(pill.style.width.split("px")[0]);
        const pillHeight = Number(pill.style.height.split("px")[0]);
        const isPillOnVAxis = vAxisY >= pillX && vAxisY <= pillX + pillWidth;
        const isPillOnHAxis = hAxisX >= pillY && hAxisX <= pillY + pillHeight;

        // On both Axis
        if (isPillOnVAxis && isPillOnHAxis) {
            // Divide into 4
            const mouseX = e.pageX - pill.offsetLeft;
            const mouseY = e.pageY - pill.offsetTop;

            function onMouseMove(event) {
                isMouseMoved = true;
                pill.style.top = `${event.pageY - mouseY}px`;
                pill.style.left = `${event.pageX - mouseX}px`;
            }

            function onMouseUp() {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);

                // Splitting Pill Here
                if (!isMouseMoved) {
                    const maxH = Number(pill.style.height.split("px")[0]);
                    const maxW = Number(pill.style.width.split("px")[0]);
                    const isCutPossible =
                        mouseY >= 20 &&
                        mouseY <= maxH - 20 &&
                        mouseX >= 20 &&
                        mouseX <= maxW - 20;

                    if (isCutPossible) {
                        const subP1H = mouseY;
                        const subP1W = mouseX;
                        const subP2H = mouseY;
                        const subP2W = maxW - mouseX;
                        const subP3H = maxH - mouseY;
                        const subP3W = mouseX;
                        const subP4H = maxH - mouseY;
                        const subP4W = maxW - mouseX;

                        const subP1t = Number(pill.style.top.split("px")[0]);
                        const subP1l = Number(pill.style.left.split("px")[0]);
                        const subP2t = subP1t;
                        const subP2l = subP1l + subP1W;
                        const subP3t = subP1t + subP1H;
                        const subP3l = subP1l;
                        const subP4t = subP3t;
                        const subP4l = subP3l + subP1W;

                        const subPillColor = pill.style.backgroundColor;

                        const subPillOne = document.createElement("div");
                        const subPillOneId = randomIdGenerator();

                        const availableBorderRadiuses = {
                            topLeft:
                                Number(
                                    pill.style.borderTopLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            topRight:
                                Number(
                                    pill.style.borderTopRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomLeft:
                                Number(
                                    pill.style.borderBottomLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomRight:
                                Number(
                                    pill.style.borderBottomRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                        };

                        subPillOne.className = `pill ${subPillOneId}]`;
                        subPillOne.style.borderTopLeftRadius =
                            availableBorderRadiuses.topLeft;
                        subPillOne.style.backgroundColor = subPillColor;
                        subPillOne.style.height = `${subP1H}px`;
                        subPillOne.style.width = `${subP1W}px`;
                        subPillOne.style.top = `${subP1t}px`;
                        subPillOne.style.left = `${subP1l}px`;
                        subPillOne.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        const subPillTwo = document.createElement("div");
                        const subPillTwoId = randomIdGenerator();

                        subPillTwo.className = `pill ${subPillTwoId}`;
                        subPillTwo.style.borderTopRightRadius =
                            availableBorderRadiuses.topRight;
                        subPillTwo.style.backgroundColor = subPillColor;
                        subPillTwo.style.height = `${subP2H}px`;
                        subPillTwo.style.width = `${subP2W}px`;
                        subPillTwo.style.top = `${subP2t}px`;
                        subPillTwo.style.left = `${subP2l}px`;
                        subPillTwo.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        const subPillThree = document.createElement("div");
                        const subPillThreeId = randomIdGenerator();

                        subPillThree.className = `pill ${subPillThreeId}`;
                        subPillThree.style.borderBottomLeftRadius =
                            availableBorderRadiuses.bottomLeft;
                        subPillThree.style.backgroundColor = subPillColor;
                        subPillThree.style.height = `${subP3H}px`;
                        subPillThree.style.width = `${subP3W}px`;
                        subPillThree.style.top = `${subP3t}px`;
                        subPillThree.style.left = `${subP3l}px`;
                        subPillThree.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        const subPillFour = document.createElement("div");
                        const subPillFourthId = randomIdGenerator();

                        subPillFour.className = `pill ${subPillFourthId}`;
                        subPillFour.style.borderBottomRightRadius =
                            availableBorderRadiuses.bottomRight;
                        subPillFour.style.backgroundColor = subPillColor;
                        subPillFour.style.height = `${subP4H}px`;
                        subPillFour.style.width = `${subP4W}px`;
                        subPillFour.style.top = `${subP4t}px`;
                        subPillFour.style.left = `${subP4l}px`;
                        subPillFour.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        pillsContainer.appendChild(subPillOne);
                        pillsContainer.appendChild(subPillTwo);
                        pillsContainer.appendChild(subPillThree);
                        pillsContainer.appendChild(subPillFour);

                        pillsContainer.removeChild(pill);
                    }
                }
            }

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        } else if (isPillOnVAxis) {
            // Divide into 2 Vertically
            const mouseX = e.pageX - pill.offsetLeft;

            function onMouseMove(event) {
                isMouseMoved = true;
            }

            function onMouseUp() {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);

                if (!isMouseMoved) {
                    // Splitting Pill Here
                    const pillHeight = Number(pill.style.height.split("px")[0]);
                    const pillWidth = Number(pill.style.width.split("px")[0]);
                    const isCutPossible =
                        mouseX >= 20 && mouseX <= pillWidth - 20;

                    if (isCutPossible) {
                        const subPillOneWidth = mouseX;
                        const subPillTwoWidth = pillWidth - subPillOneWidth;

                        const subPillOneTop = Number(
                            pill.style.top.split("px")[0]
                        );
                        const subPillOneLeft = Number(
                            pill.style.left.split("px")[0]
                        );
                        const subPillTwoTop = subPillOneTop;
                        const subPillTwoLeft = subPillOneLeft + subPillOneWidth;

                        const subPillColor = pill.style.backgroundColor;

                        const availableBorderRadiuses = {
                            topLeft:
                                Number(
                                    pill.style.borderTopLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            topRight:
                                Number(
                                    pill.style.borderTopRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomLeft:
                                Number(
                                    pill.style.borderBottomLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomRight:
                                Number(
                                    pill.style.borderBottomRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                        };

                        const subPillOne = document.createElement("div");
                        const subPillOneId = randomIdGenerator();

                        subPillOne.className = `pill ${subPillOneId}`;
                        subPillOne.style.borderTopLeftRadius =
                            availableBorderRadiuses.topLeft;
                        subPillOne.style.borderBottomLeftRadius =
                            availableBorderRadiuses.bottomLeft;
                        subPillOne.style.backgroundColor = subPillColor;
                        subPillOne.style.height = `${pillHeight}px`;
                        subPillOne.style.width = `${subPillOneWidth}px`;
                        subPillOne.style.top = `${subPillOneTop}px`;
                        subPillOne.style.left = `${subPillOneLeft}px`;
                        subPillOne.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        const subPillTwo = document.createElement("div");
                        const subPillTwoId = randomIdGenerator();

                        subPillTwo.className = `pill ${subPillTwoId}`;
                        subPillTwo.style.borderTopRightRadius =
                            availableBorderRadiuses.topRight;
                        subPillTwo.style.borderBottomRightRadius =
                            availableBorderRadiuses.bottomRight;
                        subPillTwo.style.backgroundColor = subPillColor;
                        subPillTwo.style.height = `${pillHeight}px`;
                        subPillTwo.style.width = `${subPillTwoWidth}px`;
                        subPillTwo.style.top = `${subPillTwoTop}px`;
                        subPillTwo.style.left = `${subPillTwoLeft}px`;
                        subPillTwo.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        pillsContainer.appendChild(subPillOne);
                        pillsContainer.appendChild(subPillTwo);

                        pillsContainer.removeChild(pill);
                    }
                }
            }

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        } else if (isPillOnHAxis) {
            // Divide into 2 Horizontally
            const mouseY = e.pageY - pill.offsetTop;

            function onMouseMove(event) {
                isMouseMoved = true;
            }

            function onMouseUp() {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);

                if (!isMouseMoved) {
                    // Splitting Pill Here
                    const pillHeight = Number(pill.style.height.split("px")[0]);
                    const pillWidth = Number(pill.style.width.split("px")[0]);
                    const isCutPossible =
                        mouseY >= 20 && mouseY <= pillHeight - 20;

                    if (isCutPossible) {
                        const subPillOneHeight = mouseY;
                        const subPillTwoHeight = pillHeight - subPillOneHeight;

                        const subPillOneTop = Number(
                            pill.style.top.split("px")[0]
                        );
                        const subPillOneLeft = Number(
                            pill.style.left.split("px")[0]
                        );
                        const subPillTwoTop = subPillOneTop + subPillOneHeight;
                        const subPillTwoLeft = subPillOneLeft;

                        const subPillColor = pill.style.backgroundColor;

                        const availableBorderRadiuses = {
                            topLeft:
                                Number(
                                    pill.style.borderTopLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            topRight:
                                Number(
                                    pill.style.borderTopRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomLeft:
                                Number(
                                    pill.style.borderBottomLeftRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                            bottomRight:
                                Number(
                                    pill.style.borderBottomRightRadius.split(
                                        "px"
                                    )[0]
                                ) >= 10
                                    ? "10px"
                                    : "0px",
                        };

                        const subPillOne = document.createElement("div");
                        const subPillOneId = randomIdGenerator();

                        subPillOne.className = `pill ${subPillOneId}`;
                        subPillOne.style.borderTopLeftRadius =
                            availableBorderRadiuses.topLeft;
                        subPillOne.style.borderTopRightRadius =
                            availableBorderRadiuses.topRight;
                        subPillOne.style.backgroundColor = subPillColor;
                        subPillOne.style.height = `${subPillOneHeight}px`;
                        subPillOne.style.width = `${pillWidth}px`;
                        subPillOne.style.top = `${subPillOneTop}px`;
                        subPillOne.style.left = `${subPillOneLeft}px`;
                        subPillOne.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        const subPillTwo = document.createElement("div");
                        const subPillTwoId = randomIdGenerator();

                        subPillTwo.className = `pill ${subPillTwoId}`;
                        subPillTwo.style.borderBottomLeftRadius =
                            availableBorderRadiuses.bottomLeft;
                        subPillTwo.style.borderBottomRightRadius =
                            availableBorderRadiuses.bottomRight;
                        subPillTwo.style.backgroundColor = subPillColor;
                        subPillTwo.style.height = `${subPillTwoHeight}px`;
                        subPillTwo.style.width = `${pillWidth}px`;
                        subPillTwo.style.top = `${subPillTwoTop}px`;
                        subPillTwo.style.left = `${subPillTwoLeft}px`;
                        subPillTwo.style.border = `2px solid ${lightenRgbColor(
                            subPillColor,
                            50
                        )}`;

                        pillsContainer.appendChild(subPillOne);
                        pillsContainer.appendChild(subPillTwo);

                        pillsContainer.removeChild(pill);
                    }
                }
            }

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        }
    });

    // Create a New Pill (Axes didn't detected any pills)
    if (!isPill) {
        const element = document.createElement("div");
        const id = randomIdGenerator();
        const color = randomColorGenerator();
        const elementStyles = {
            className: `pill ${id}`,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            top: `${e.pageY}px`,
            left: `${e.pageX}px`,
            border: `2px solid ${lightenHexColor(color, 50)}`,
            backgroundColor: color,
        };

        for (style in elementStyles) {
            if (style === "className") {
                element[style] = elementStyles[style];
                continue;
            }

            element.style[style] = elementStyles[style];
        }

        pillsContainer.appendChild(element);

        const startX = e.pageX;
        const startY = e.pageY;

        function onMouseMove(event) {
            const currentX = event.pageX;
            const currentY = event.pageY;

            const top = Math.min(currentY, startY);
            const left = Math.min(currentX, startX);
            const height = Math.abs(currentY - startY);
            const width = Math.abs(currentX - startX);

            element.style.top = `${top}px`;
            element.style.left = `${left}px`;
            element.style.height = `${height}px`;
            element.style.width = `${width}px`;
        }

        window.addEventListener("mousemove", onMouseMove);

        window.addEventListener("mouseup", function onMouseUp() {
            if (
                element.style.height.split("px")[0] < 20 &&
                element.style.width.split("px")[0] < 20
            ) {
                pillsContainer.removeChild(element);
            }

            this.window.removeEventListener("mousemove", onMouseMove);
            this.window.removeEventListener("mouseup", onMouseUp);
        });
    }
});

// Moving Vertical & Horizontal Lines Functionalities

window.addEventListener("mouseover", function onMouseEnter() {
    window.addEventListener("mousemove", controlAxes);
});

window.addEventListener("mouseout", function onMouseOut() {
    window.removeEventListener("mousemove", controlAxes);
});

// Usable Functions

function controlAxes(event) {
    const x = event.pageX;
    const y = event.pageY;

    horizontal_line.style.top = `${y}px`;
    vertical_line.style.left = `${x}px`;
}

function lightenRgbColor(rgbString, percent) {
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);

    const newRgb = [r, g, b].map((value) => {
        if (percent > 0) {
            return Math.min(
                255,
                Math.floor(value + (255 - value) * (percent / 100))
            );
        } else {
            return Math.max(0, Math.floor(value * (1 + percent / 100)));
        }
    });

    return "#" + newRgb.map((x) => x.toString(16).padStart(2, "0")).join("");
}

function lightenHexColor(hex, percent) {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((x) => x + x)
            .join("");
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

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
