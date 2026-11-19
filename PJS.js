// رسالة ترحيب عند دخول الصفحة
window.onload = function () {
    console.log("Welcome to Abiah Stable!");
};

// تغيير اللون (داكن / فاتح)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// تنبيه عند الضغط على لينك الحجز
document.addEventListener("DOMContentLoaded", function () {
    const bookingLink = document.querySelector('a[href="index.html"]');

    if (bookingLink) {
        bookingLink.addEventListener("click", function () {
            alert("Redirecting you to the booking page...");
        });
    }
});

// إضافة تأثير عند تمرير الماوس على العناوين
const headers = document.querySelectorAll("h1, h2, h3");
headers.forEach(h => {
    h.addEventListener("mouseover", () => {
        h.style.color = "#efb35f";
    });

    h.addEventListener("mouseout", () => {
        h.style.color = "";
    });
});
