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
    },

];

const fileGrid = document.getElementById("fileGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";

function displayFiles() {

    const search = searchInput.value
        .toLowerCase()
        .trim();

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
        fileGrid.innerHTML = `
            <div class="empty">
                No files found.
            </div>
        `;
        return;
    }

    filtered.forEach((file, index) => {

        const card = document.createElement("div");

        card.className = "file-card";

        const filename = file.file.split("/").pop();

        card.innerHTML = `

            <div class="file-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div>

                <div class="file-name">
                    ${file.name}.pkt
                </div>

                <div class="file-description">
                    ${file.description}
                </div>

                <div class="file-tags">

                    ${file.tags.map(tag => `
                        <span>${tag}</span>
                    `).join("")}

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


/* FILTER */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        displayFiles();
    });

});


/* SEARCH */

searchInput.addEventListener(
    "input",
    displayFiles
);


/* START */

displayFiles();