document.addEventListener('DOMContentLoaded', function () {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');
  
    fontSizeLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        fontSizeLinks.forEach(item => item.classList.remove('font-size_active'));
  
        this.classList.add('font-size_active');
  
        book.classList.remove('book_fs-small', 'book_fs-big');
  
        if (this.dataset.size === 'small') {
          book.classList.add('book_fs-small');
        } else if (this.dataset.size === 'big') {
          book.classList.add('book_fs-big');
        } else {
          book.classList.add('book');
        }
      });
    });
  });
  