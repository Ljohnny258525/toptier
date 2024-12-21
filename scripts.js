document.getElementById("bank-analysis-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch("/analyze", {
            method: "POST",
            body: formData,
        });
        if (response.ok) {
            const result = await response.json();
            alert(`Analysis Complete: ${result.details}`);
        } else {
            alert("Error analyzing the document. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
