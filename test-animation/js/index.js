"use strict";

function animateTitle(selector, onComplete) {
  var title = document.querySelector(selector);
  if (!title) {
    console.error('Element not found with selector:', selector);
    return;
  }
  var moveDuration = 500;
  var scaleDuration = 180;
  var initialTranslateY = -100;
  var finalTranslateY = 0;
  var initialScale = 0.5;
  var finalScale = 1;

  var startMove = null;
  var startScale = null;
  function move(timestamp) {
    if (!startMove) startMove = timestamp;
    var progress = timestamp - startMove;
    var percentage = Math.min(progress / moveDuration, 1);

    var currentTranslateY = initialTranslateY + (finalTranslateY - initialTranslateY) * percentage;
    title.style.transform = "translateY(".concat(currentTranslateY, "px) scale(").concat(initialScale, ")");
    if (progress < moveDuration) {
      requestAnimationFrame(move);
    } else {
      startScale = null;
      requestAnimationFrame(scale);
    }
  }
  function scale(timestamp) {
    if (!startScale) startScale = timestamp;
    var progress = timestamp - startScale;
    var percentage = Math.min(progress / scaleDuration, 1);

    var currentScale = initialScale + (finalScale - initialScale) * percentage;
    title.style.transform = "translateY(".concat(finalTranslateY, "px) scale(").concat(currentScale, ")");
    if (progress < scaleDuration) {
      requestAnimationFrame(scale);
    } else {
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  }
  requestAnimationFrame(move);
}
function animateSubtitle(selector) {
  var subtitle = document.querySelector(selector);
  if (!subtitle) {
    console.error('Element not found with selector:', selector);
    return;
  }
  var moveDuration = 500;
  var initialTranslateX = -100;
  var finalTranslateX = 0;

  var startMove = null;
  function move(timestamp) {
    if (!startMove) startMove = timestamp;
    var progress = timestamp - startMove;
    var percentage = Math.min(progress / moveDuration, 1);

    var currentTranslateX = initialTranslateX + (finalTranslateX - initialTranslateX) * percentage;
    subtitle.style.transform = "translateX(".concat(currentTranslateX, "%)");
    if (progress < moveDuration) {
      requestAnimationFrame(move);
    }
  }
  requestAnimationFrame(move);
}
function rotateAndReset(selector, initialRotation, finalRotation) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 800;
  var element = document.querySelector(selector);
  if (!element) {
    console.error('Element not found with selector:', selector);
    return;
  }
  var startRotate = null;
  function rotate(timestamp) {
    if (!startRotate) startRotate = timestamp;
    var progress = timestamp - startRotate;
    var percentage = Math.min(progress / duration, 1);

    var currentRotation;
    if (initialRotation < finalRotation) {
      currentRotation = initialRotation + (finalRotation - initialRotation) * percentage;
    } else {
      currentRotation = initialRotation - (initialRotation - finalRotation) * percentage;
    }
    element.style.transform = "rotate(".concat(currentRotation, "deg)");
    if (progress < duration) {
      requestAnimationFrame(rotate);
    }
  }
  requestAnimationFrame(rotate);
}
function animateBanner() {
  animateTitle('.banner__title', function () {
    animateSubtitle('.banner__subtitle');

    rotateAndReset('.banner-images__board', -160, 0);
    rotateAndReset('.banner-images__organic-shapes', 160, 0);

    rotateAndReset('.banner-images__school-elements', 160, 0);
    rotateAndReset('.banner-images__stationery', -160, 0);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  animateBanner(); // Запускаем анимацию при загрузке страницы

  var bannerBtn = document.querySelector('.banner__btn');
  if (bannerBtn) {
    bannerBtn.addEventListener('click', function () {
      var elementsToClear = ['.banner__title', '.banner__subtitle', '.banner-images__board', '.banner-images__organic-shapes', '.banner-images__school-elements', '.banner-images__stationery'];
      elementsToClear.forEach(function (selector) {
        var element = document.querySelector(selector);
        if (element) {
          element.style.transform = '';
        }
      });
      animateBanner();
    });
  }
});