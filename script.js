document.addEventListener("DOMContentLoaded", () => {
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const progressBar = document.getElementById("progress-bar");
    let currentStep = 0;

    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = index === step ? "block" : "none";
        });
        updateProgressBar();
    }

    document.querySelectorAll(".next-step").forEach(button => {
        button.addEventListener("click", () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll(".prev-step").forEach(button => {
        button.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    function validateStep(step) {
        const inputs = steps[step].querySelectorAll("input, select");
        for (const input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    document.getElementById("applicationForm").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("applicationForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
    });

    showStep(currentStep);
});
