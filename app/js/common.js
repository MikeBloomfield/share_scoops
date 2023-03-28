document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('body').classList.remove('loaded');
  }, 400);

  let header = document.querySelector('.header');

  gsap.to('.hero__line', {
    height: 112,
    ease: 'power3',
    scrollTrigger: {
      trigger: '.hero__line',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
  });
  gsap.to('.light__top-line .draw', {
    strokeDashoffset: 0,
    ease: 'power3',
    scrollTrigger: {
      trigger: '.light__top-line',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
  });
  gsap.to('.light__top-line .circle', {
    ease: 'power3',
    scrollTrigger: {
      trigger: '.light__top-line svg',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
    motionPath: {
      path: '#motionPath1',
      align: '#motionPath1',
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    },
  });
  gsap.to('.light__bottom-line .draw', {
    strokeDashoffset: 0,
    ease: 'power3',
    scrollTrigger: {
      trigger: '.light__bottom-line',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
  });
  gsap.to('.light__bottom-line .circle', {
    ease: 'power3',
    scrollTrigger: {
      trigger: '.light__bottom-line svg',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
    motionPath: {
      path: '#motionPath2',
      align: '#motionPath2',
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    },
  });
  gsap.to('.community__item-abs-pic-5 .draw', {
    strokeDashoffset: 0,
    ease: 'power3',
    scrollTrigger: {
      trigger: '.community__item-abs-pic-5 .draw',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
  });
  gsap.to('.community__item-abs-pic-5 .circle', {
    ease: 'power3',
    scrollTrigger: {
      trigger: '.community__item-abs-pic-5 .draw',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
    motionPath: {
      path: '#motionPath3',
      align: '#motionPath3',
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    },
  });

  gsap.to('.community__arrow .draw', {
    strokeDashoffset: 0,
    stroke: '#fff',
    ease: 'power3',
    scrollTrigger: {
      trigger: '.community__arrow .draw',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
  });
  gsap.to('.community__arrow circle', {
    ease: 'power3',
    scrollTrigger: {
      trigger: '.community__arrow .draw',
      toggleActions: 'play pause resume none',
      start: 'top 60%',
      end: 'bottom 30%',
      scrub: true,
    },
    motionPath: {
      path: '#motionPath4',
      align: '#motionPath4',
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    },
  });

  const draw = document.querySelectorAll('circle');

  draw.forEach((item) => console.log(Math.trunc(item.getTotalLength())));

  if (window.pageYOffset > 20) {
    header.classList.add('header--active');
  }

  const imagesAndLinks = document.querySelectorAll('img, a');
  if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
      item.addEventListener('dragstart', function (e) {
        e.preventDefault();
      });
    });
  }

  const handlerResize = function () {
    let viewport_wid = viewport().width;
    let viewport_height = viewport().height;

    // if (viewport_wid <= 991) {

    // }
  };

  window.addEventListener('load', handlerResize);
  window.addEventListener('resize', handlerResize);
});

/* viewport width */
function viewport() {
  let e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
/* viewport width */
new WOW().init();

$(document).ready(function () {
  $('.feedback__container').slick({
    variableWidth: true,
    arrows: false,
    padding: 60,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var rellax = new Rellax('.rellax');

  $('.header__burger').on('click', function () {
    $(this).toggleClass('header__burger-active');
    $('#mobile').toggleClass('show');
    $('.mobile__left').toggleClass('fadein');
    $('.mobile__right').toggleClass('fadein');
    $('body').toggleClass('overflow');
  })(
    (function () {
      const header = document.querySelector('.header');
      window.onscroll = () => {
        if (window.pageYOffset > 20) {
          header.classList.add('header--active');
        } else {
          header.classList.remove('header--active');
        }
      };
    })(),
  );
});
