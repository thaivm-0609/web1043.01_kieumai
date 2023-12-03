function validateForm() {
    let username = event.target.form[0].value;
    let oldPassword = event.target.form[1].value;
    let newPassword = event.target.form[2].value;
    let confirmPassword = event.target.form[3].value;

    let errorCount = 0;
    //validate bỏ trống
    if (username == '') {
        document.getElementById('errorUserName').textContent = 'Tên đăng nhập không được bỏ trống';
        errorCount++;
    } else {
        document.getElementById('errorUserName').textContent = '';
    }

    if (oldPassword == '') {
        document.getElementById('errorOldPassword').textContent = 'Mật khẩu cũ không được bỏ trống';
        errorCount++;
    } else {
        document.getElementById('errorOldPassword').textContent = '';
    }

    if (newPassword == '') {
        document.getElementById('errorNewPassword').textContent = 'Mật khẩu mới không được bỏ trống';
        errorCount++;
    } else {
        document.getElementById('errorNewPassword').textContent = '';
    }
    if (confirmPassword == '') {
        document.getElementById('errorConfirmPassword').textContent = 'Xác nhận mật khẩu không được bỏ trống';
        errorCount++;
    } else {
        document.getElementById('errorConfirmPassword').textContent = '';
    }

    //validate mật khẩu cũ phải là 123@abc123
    if (oldPassword != '' && oldPassword != '123@abc123') {
        document.getElementById('errorOldPassword').textContent = 'Mật khẩu cũ không chính xác';
        errorCount++;
    } else if (oldPassword != '') {
        document.getElementById('errorOldPassword').textContent = '';
    }

    //validate mật khẩu mạnh
    if (newPassword.length < 3) {
        document.getElementById('errorNewPassword').textContent = "Mật khẩu yếu";
        document.getElementById('errorNewPassword').style.color = "red";
        event.target.form[2].style.backgroundColor = "red";
    } else if (newPassword.length < 8) {
        document.getElementById('errorNewPassword').textContent = "Mật khẩu trung bình";
        document.getElementById('errorNewPassword').style.color = "yellow";
        event.target.form[2].style.backgroundColor = "yellow";
    } else {
        document.getElementById('errorNewPassword').textContent = "Mật khẩu mạnh";
        document.getElementById('errorNewPassword').style.color = "green";
        event.target.form[2].style.backgroundColor = "white";
    }

    //validate mật khẩu mới và mật khẩu nhập lại phải trùng khớp
    if (newPassword != confirmPassword) {
        document.getElementById('errorConfirmPassword').textContent = "Mật khẩu nhập lại không khớp với mật khẩu mới";
        errorCount++;
    } else if (confirmPassword != '') {
        document.getElementById('errorConfirmPassword').textContent = "";
    }

    return false;
}