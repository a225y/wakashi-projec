// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
// 捲軸移動時toggle CSS

// function scrollHeader() {
//     const header = document.querySelector("#header");
//     if (window.scrollY >= 60 ){
//         header.classList.add('scroll-header')   
//     }else{
//         header.classList.remove('scroll-header')
//     }
//     window.addEventListener('scroll', scrollHeader);
// }

window.addEventListener("scroll", function () {
  var header = document.querySelector("#header");
  header.classList.toggle("scroll-header", window.scrollY >= 50);
});
window.addEventListener("scroll", function () {
  var navItem = document.querySelectorAll('.nav-item a');
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].classList.toggle("scroll-color", window.scrollY >= 50);
  }
});
window.addEventListener("scroll", function () {
  var navBtns = document.querySelectorAll('.nav__btns i');
  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].classList.toggle("scroll-color", window.scrollY >= 50);
  }
});
window.addEventListener("scroll", function () {
  var navLogo = document.querySelector(".nav__logo");
  navLogo.classList.toggle("show-logo", window.scrollY >= 50);
});

// 主頁swiper
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// 新品swiper
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 15,
  centeredSlides: true,
  loop: "true",
  slidesPerView: 'auto'
});
//縮小時menu
var navMenu = document.querySelector('#nav-menu');
var navLink = navMenu.querySelectorAll('.nav__link');
var navToggle = document.querySelector('#nav-toggle');
var navClose = document.querySelector('#nav-close');

//open
if (navToggle) {
  // for(let i=0;navLink.length;i++){
  //     navLink[i].className('second__color');
  // }
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}
;
//close
if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}
//購物車
var cart = document.querySelector('#cart');
var cartShop = document.querySelector('#cart-shop');
var cartClose = document.querySelector('#cart-close');
//open
if (cartShop) {
  cartShop.addEventListener('click', function () {
    cart.classList.add('show-car');
  });
}
;
//close
if (cartClose) {
  cartClose.addEventListener('click', function () {
    cart.classList.remove('show-car');
  });
}

//登入框
var login = document.querySelector('#login');
var loginToggle = document.querySelector('#login-toggle');
var loginClose = document.querySelector('#login-close');
//open
if (loginToggle) {
  loginToggle.addEventListener('click', function () {
    login.classList.add('show-login');
  });
}
;
//close
if (loginClose) {
  loginClose.addEventListener('click', function () {
    login.classList.remove('show-login');
  });
}
function goTop() {
  var scrollUP = document.querySelector('#scroll-up');
  if (window.scrollY >= 350) scrollUP.classList.add('show-scrollup');else scrollUP.classList.remove('show-scrollup');
}
window.addEventListener('scroll', goTop);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b61ebe65.js.map