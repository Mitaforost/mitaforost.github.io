"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var searchForm = document.getElementById('search_form');
  var inputForm = searchForm.querySelector('.form-control');
  var clearBtn = searchForm.querySelector('.clear');
  var resultsWrapper = searchForm.querySelector('.results-wrapper');
  inputForm.addEventListener('input', function () {
    if (this.value.length > 0) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
      resultsWrapper.innerHTML = '';
    }
  });
  clearBtn.addEventListener('click', function () {
    inputForm.value = '';
    clearBtn.style.display = 'none';
    resultsWrapper.innerHTML = '';
  });
  document.addEventListener('click', function (event) {
    if (!searchForm.contains(event.target)) {
      inputForm.value = '';
      clearBtn.style.display = 'none';
      resultsWrapper.innerHTML = '';
    }
  });
  searchForm.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});