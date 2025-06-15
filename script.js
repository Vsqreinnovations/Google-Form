 const form = document.getElementById("courseForm");
        const popup = document.getElementById("popupMessage");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        popup.textContent = "✅ Registration Successful! Thank you.";
                        popup.classList.add("show");
                        form.reset();
                    } else {
                        popup.textContent = "❌ Something went wrong. Try again.";
                        popup.classList.add("show");
                    }
                })
                .catch(error => {
                    popup.textContent = "⚠️ Error submitting form.";
                    popup.classList.add("show");
                    console.error("Error:", error);
                });
        });
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const confirmSend = confirm("Have you sent your payment proof to our WhatsApp (+91 93422 45697)?");
            if (!confirmSend) return;

            const formData = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        popup.textContent = "✅ Registration Successful! Thank you.";
                        popup.classList.add("show");
                        form.reset();
                    } else {
                        popup.textContent = "❌ Something went wrong. Try again.";
                        popup.classList.add("show");
                    }
                })
                .catch(error => {
                    popup.textContent = "⚠️ Error submitting form.";
                    popup.classList.add("show");
                    console.error("Error:", error);
                });
        });
        popup.addEventListener("click", function () {
            popup.classList.remove("show");
        });