// الوظيفة لتسجيل الدخول
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginError = document.getElementById('loginError');
    
    // تحقق بسيط من صحة المعلومات
    if (email === "user@example.com" && password === "123456") {
        loginError.textContent = "";
        showPage('assessmentPage');
        showToast('تم تسجيل الدخول بنجاح', 'success');
    } else {
        loginError.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
        showToast('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
    }
}

// إرسال التقييم النفسي
function submitAssessment() {
    var moods = document.getElementsByName('mood');
    var selectedMood;
    
    for (var i = 0; i < moods.length; i++) {
        if (moods[i].checked) {
            selectedMood = moods[i].value;
            break;
        }
    }
    
    if (selectedMood) {
        var resultMessage = document.getElementById('resultMessage');
        
        if (selectedMood === 'جيد') {
            resultMessage.textContent = "أنت في حالة جيدة! استمر في الاهتمام بنفسك.";
        } else if (selectedMood === 'متوسط') {
            resultMessage.textContent = "تشعر بأنك في حالة متوسطة. حاول الاسترخاء قليلاً.";
        } else {
            resultMessage.textContent = "تشعر بأنك في حالة سيئة. من الأفضل الحصول على بعض الراحة والدعم.";
        }
        
        showPage('resultPage');
        showToast('تم إرسال التقييم بنجاح', 'success');
    } else {
        alert("يرجى اختيار حالتك.");
        showToast('يرجى اختيار حالتك', 'error');
    }
}

// إعادة التقييم
function restart() {
    showPage('assessmentPage');
}

// عرض الصفحات
function showPage(pageId) {
    var pages = document.getElementsByClassName('page');
    
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    document.getElementById(pageId).classList.add('active');
}

// عرض صفحة تسجيل الدخول عند التحميل
window.onload = function() {
    showPage('loginPage');
};

// إظهار نافذة منبثقة
function showModal(message) {
    var modal = document.getElementById('modal');
    var modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = "block";
}

// إغلاق النافذة المنبثقة
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// إظهار إشعارات
function showToast(message, type) {
    if (type === 'success') {
        toastr.success(message);
    } else if (type === 'error') {
        toastr.error(message);
    }
}
