"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animateTitle;
function animateTitle(selector) {
  var title = document.querySelector(selector); // Используем переданный селектор

  var moveDuration = 500; // Длительность перемещения в миллисекундах
  var scaleDuration = 180; // Длительность увеличения в миллисекундах
  var initialTranslateY = -100; // Начальное смещение по Y
  var finalTranslateY = 0; // Конечное положение по Y
  var initialScale = 0.5; // Начальный размер
  var finalScale = 1; // Конечный размер

  var startMove = null;
  var startScale = null;
  function move(timestamp) {
    if (!startMove) startMove = timestamp;
    var progress = timestamp - startMove;
    var percentage = Math.min(progress / moveDuration, 1);

    // Вычисление текущего значения translateY
    var currentTranslateY = initialTranslateY + (finalTranslateY - initialTranslateY) * percentage;
    title.style.transform = "translateY(".concat(currentTranslateY, "px) scale(").concat(initialScale, ")");
    if (progress < moveDuration) {
      requestAnimationFrame(move);
    } else {
      // После завершения перемещения, запускаем анимацию увеличения
      startScale = null; // Обнуляем startScale перед запуском увеличения
      requestAnimationFrame(scale);
    }
  }
  function scale(timestamp) {
    if (!startScale) startScale = timestamp;
    var progress = timestamp - startScale;
    var percentage = Math.min(progress / scaleDuration, 1);

    // Вычисление текущего значения scale
    var currentScale = initialScale + (finalScale - initialScale) * percentage;
    title.style.transform = "translateY(".concat(finalTranslateY, "px) scale(").concat(currentScale, ")");
    if (progress < scaleDuration) {
      requestAnimationFrame(scale);
    }
  }
  requestAnimationFrame(move);
}