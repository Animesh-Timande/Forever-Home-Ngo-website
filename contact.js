<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>


document.addEventListener("DOMContentLoaded", function () {

    const supabaseUrl = "https://mecetdwgvglqrppcxwbm.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lY2V0ZHdndmdscXJwcGN4d2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMjY0NjcsImV4cCI6MjA4NjgwMjQ2N30.Sj_QrkxMrHtm2TC-PdjONR5GLaT0dcdHOQHSoYKf09Y";

    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    const form = document.querySelector(".contact-card form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const fullName = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();
        const reason = form.querySelector("select").value;
        const message = form.querySelector("textarea").value.trim();

        if (!reason || reason === "Select reason") {
            alert("Please select a reason");
            return;
        }

        const { data, error } = await supabase
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

        if (error) {
            console.error("Insert Error:", error);
            alert("❌ Error saving data. Check console.");
        } else {
            alert("✅ Message saved successfully!");
            form.reset();
        }
    });

});