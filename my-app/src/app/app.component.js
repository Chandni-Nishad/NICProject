
let images = document.querySelectorAll('#slideshow img')
            let currentImage = 0;
            function changeImage() {
                images.forEach(img => {
                    img.style.display = 'none'
                })
                currentImage = (currentImage + 1) % images.length;
                images[currentImage].style.display = 'block';
            }
            setInterval(changeImage, 3000);


            var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function showSlides(n) {
              var slides = document.getElementsByClassName("carousel-slide");
              if (n > slides.length) { slideIndex = 1 }
              if (n < 1) { slideIndex = slides.length }
              for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              slides[slideIndex - 1].style.display = "block";
            }