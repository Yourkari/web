//добавление карты
function initMap() {
  //локация
  const loc = { lat: 55.763537, lng: 37.600908 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  //ставим маркер
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//закрепление меню навигации
window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

//скроллинг
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
