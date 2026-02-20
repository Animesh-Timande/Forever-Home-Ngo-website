document.addEventListener("DOMContentLoaded", function () {

    const supabaseUrl = "https://mecetdwgvglqrppcxwbm.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lY2V0ZHdndmdscXJwcGN4d2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMjY0NjcsImV4cCI6MjA4NjgwMjQ2N30.Sj_QrkxMrHtm2TC-PdjONR5GLaT0dcdHOQHSoYKf09Y";

    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    const form = document.getElementById("contactForm");
    const statusText = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
        statusText.innerText = "";

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const reason = document.getElementById("reason").value;
        const message = document.getElementById("message").value.trim();

        try {
            const { error } = await supabase
                .from("contact_messages")
                .insert([
                    {
                        full_name: fullName,
                        email: email,
                        phone: phone,
                        reason: reason,
                        message: message
                    }
                ]);

            if (error) throw error;

            statusText.innerHTML = "✅ Message sent successfully!";
            statusText.style.color = "green";
            form.reset();

        } catch (error) {
            console.error("Insert Error:", error);
            statusText.innerHTML = "❌ " + error.message;
            statusText.style.color = "red";
        }

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message ❤️";
    });

});