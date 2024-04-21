const regex = {
    nama: /^[A-Za-z\s]+$/,
    email: /^[A-Za-z0-9._%+-]+@students\.usu\.ac\.id$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
    telepon: /^(\+62|08)\d{8,15}$/
};

document.getElementById('nama').addEventListener('input', function() {
    const value = this.value.trim();
    const valid = regex.nama.test(value);
    document.getElementById('nama-error').textContent = valid ? '' : 'Nama hanya boleh berisi huruf dan spasi';
});

document.getElementById('email').addEventListener('input', function() {
    const value = this.value.trim();
    const valid = regex.email.test(value);
    document.getElementById('email-error').textContent = valid ? '' : 'Email harus menggunakan domain @students.usu.ac.id';
});

document.getElementById('password').addEventListener('input', function() {
    const value = this.value.trim();
    const valid = regex.password.test(value);
    document.getElementById('password-error').textContent = valid ? '' : 'Password harus terdiri dari minimal 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus';
});

document.getElementById('telepon').addEventListener('input', function() {
    const value = this.value.trim();
    const valid = regex.telepon.test(value);
    document.getElementById('telepon-error').textContent = valid ? '' : 'Format nomor telepon anda tidak valid';
});

document.getElementById('umur').addEventListener('input', function() {
    const value = parseInt(this.value.trim());
    const valid = value > 20;
    document.getElementById('umur-error').textContent = valid ? '' : 'Umur anda harus lebih dari 20 tahun';
});