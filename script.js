const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const canvas = document.getElementById("signatureCanvas");
const downloadBtn = document.getElementById("downloadBtn");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 150;
downloadBtn.style.display = "none";

nameInput.addEventListener("input", () => {
    // Prevent downloading an old signature after the input has changed.
    downloadBtn.style.display = "none";
});

generateBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert("Please enter a name!");
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Give the PNG an opaque background and dark ink so it remains visible
    // when downloaded or inserted into a document with a white background.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#172033";
    ctx.font = "italic 48px 'Brush Script MT', cursive";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Constrain long names to the canvas width instead of clipping them.
    ctx.fillText(name, canvas.width / 2, canvas.height / 2, canvas.width - 24);

    downloadBtn.href = canvas.toDataURL("image/png");
    downloadBtn.download = "signature.png";
    downloadBtn.style.display = "inline-block";
});
