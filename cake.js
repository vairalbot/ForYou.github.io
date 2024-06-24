// Menggunakan JavaScript untuk menangani klik
document.addEventListener('DOMContentLoaded', function() {
  var spanElement = document.querySelector('.description span');

  spanElement.addEventListener('click', function() {
      // Toggle class 'clicked' saat di-klik
      this.classList.toggle('clicked');
  });
});

  
  