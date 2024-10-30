document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
    let modal = document.querySelectorAll('.modal');
    let instances_modal = M.Modal.init(modal);
    let car = document.querySelectorAll('.carousel');
    let instances_car = M.Carousel.init(car);
  });