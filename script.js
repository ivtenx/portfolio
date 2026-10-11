const files = [
    {
        name: "DAY_1",
        description: "Basic Packet Tracer networking lab.",
        file: "files/DAY_1.pkt",
        categories: ["packet-tracer", "switching"],
        tags: ["PACKET TRACER", "SWITCHING"]
    },
    {
        name: "DAY_2",
        description: "Router and switch configuration practice.",
        file: "files/DAY_2.pkt",
        categories: ["packet-tracer", "routing"],
        tags: ["PACKET TRACER", "ROUTING"]
    },
    {
        name: "DAY_3",
        description: "Advanced Packet Tracer networking lab.",
        file: "files/DAY_3.pkt",
        categories: ["packet-tracer", "switching"],
        tags: ["PACKET TRACER", "SWITCHING"]
    }
];

const writings = [
    {
        title: "Understanding Networks",
        preview:
            "Networking starts with curiosity: send a packet, trace its path, break the configuration, then rebuild it.",
        text: `
            Networking is not only about connecting devices. It is about understanding how information travels from one place to another.

            Every lab begins with a small idea: connect two devices, configure an IP address, test a ping, and observe the result. As the network grows, routing, switching, VLANs, subnetting, and security become part of the picture.

            Packet Tracer makes it possible to learn by experimenting. A broken configuration is not a failure; it is an opportunity to trace the problem, understand the cause, and build a stronger solution.

            The goal is simple: build networks, break them safely, and understand how they work.
        `,
        tags: ["NETWORKING", "CCNA", "LEARNING"]
    }
];

const fileGrid = document.getElementById("fileGrid");
const writingGrid = document.getElementById("writingGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";

function displayFiles() {
    const search = searchInput.value.toLowerCase().trim();

    const filtered = files.filter(file => {
        const filterMatch =
            currentFilter === "all" ||
            file.categories.includes(currentFilter);

        const searchMatch =
            file.name.toLowerCase().includes(search) ||
            file.description.toLowerCase().includes(search);

        return filterMatch && searchMatch;
    });

    fileGrid.innerHTML = "";

    if (filtered.length === 0) {
        fileGrid.innerHTML = `<div class="empty">No files found.</div>`;
        return;
    }

    filtered.forEach((file, index) => {
        const card = document.createElement("div");
        const filename = file.file.split("/").pop();

        card.className = "file-card";

        card.innerHTML = `
            <div class="file-number">${String(index + 1).padStart(2, "0")}</div>

            <div>
                <div class="file-name">${file.name}.pkt</div>

                <div class="file-description">${file.description}</div>

                <div class="file-tags">
                    ${file.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>
            </div>

            <a
                href="${file.file}"
                class="download-button"
                download="${filename}"
            >
                DOWNLOAD ↓
            </a>
        `;

        fileGrid.appendChild(card);
    });
}

function displayWritings() {
    writingGrid.innerHTML = "";

    writings.forEach((writing, index) => {
        const note = document.createElement("article");

        note.className = "writing-card";

        note.innerHTML = `
            <div class="file-number">${String(index + 1).padStart(2, "0")}</div>

            <div>
                <h3>${writing.title}</h3>

                <p>${writing.preview}</p>

                <div class="file-tags">
                    ${writing.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>

                <button class="view-note" data-index="${index}">
                    VIEW NOTE →
                </button>
            </div>
        `;

        writingGrid.appendChild(note);
    });

    document.querySelectorAll(".view-note").forEach(button => {
        button.addEventListener("click", () => {
            const writing = writings[button.dataset.index];
            openNote(writing);
        });
    });
}

function openNote(writing) {
    const modal = document.createElement("div");

    modal.className = "note-modal";

    modal.innerHTML = `
        <div class="note-modal-content">
            <button class="close-note" aria-label="Close note">×</button>

            <p class="small-title">NETWORK NOTE</p>

            <h2>${writing.title}</h2>

            <div class="note-text">
                ${writing.text
            .trim()
            .split("\n\n")
            .map(paragraph => `<p>${paragraph.trim()}</p>`)
            .join("")}
            </div>

            <div class="file-tags">
                ${writing.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".close-note").addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.remove();
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
        currentFilter = button.dataset.filter;

        displayFiles();
    });
});

searchInput.addEventListener("input", displayFiles);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        document.querySelector(".note-modal")?.remove();
    }
});

displayFiles();
displayWritings();