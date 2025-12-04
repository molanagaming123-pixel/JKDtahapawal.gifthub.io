document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value
    };

    // Simpan data ke localStorage biar bisa dipake halaman lain
    localStorage.setItem("userdata", JSON.stringify(user));

   window.location.href = "home.html";

});
// LOAD DATA DI HOME PAGE
function loadUserData() {
    let data = localStorage.getItem("userdata");
    if (data) {
        let user = JSON.parse(data);

        // pastikan elemen span nya ada
        const nameSpan = document.getElementById("usernameDisplay");
        if (nameSpan) {
            nameSpan.innerText = user.name;
        }
    }
}
// FUNGSI REKOMENDASI
function showRecommendation() {
    let data = JSON.parse(localStorage.getItem("userdata"));

    if (!data) return;

    let height = parseInt(data.height);
    let weight = parseInt(data.weight);

    let resultType = "";
    let focus = "";
    let advice = "";

    // Tentukan tipe tubuh sederhana
    let bmi = weight / ((height / 100) ** 2);

    if (bmi < 18.5) {
        resultType = "Kamu memiliki tubuh ringan.";
        focus = "Fokus latihan: meningkatkan kekuatan pukulan dan stabilitas footwork.";
        advice = "Lakukan latihan conditioning ringan + teknik lead straight.";
    }
    else if (bmi < 25) {
        resultType = "Tubuh kamu ideal untuk kecepatan dan mobilitas!";
        focus = "Fokus latihan: footwork, intercept, dan lead straight.";
        advice = "Gunakan kecepatanmu untuk bermain jarak dan counter.";
    }
    else {
        resultType = "Tubuh kamu kuat dan bertenaga!";
        focus = "Fokus latihan: power striking dan close-range intercepting.";
        advice = "Latih kombinasi pukulan dan gerakan pendulum untuk efisiensi.";
    }

    document.getElementById("bodyType").innerText = resultType;
    document.getElementById("techFocus").innerText = focus;
    document.getElementById("tips").innerText = advice;
}
