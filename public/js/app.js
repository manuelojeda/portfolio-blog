(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/404.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'error-404',
  data: function data() {
    return {
      lang: this.$store.getters.getLanguage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/About.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'about',
  props: ['text']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Blog',
  props: {
    blog: Object
  },
  data: function data() {
    return {
      tweet: '',
      content: null
    };
  },
  created: function created() {
    var md = new markdown_it__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.content = md.render(this.blog.content);
    this.tweet = "text=".concat(this.blog.title, "&url=https://manuelojeda.xyz/Blog/").concat(this.blog.seo);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlogCard',
  props: {
    blog: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./resources/js/Public/components/Blog/Card.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlogIndex',
  components: {
    BlogCard: _Card__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      blogs: [],
      filter: null,
      isLoading: true,
      result: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/blog/paginate');

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.data.data;

            case 6:
              _this.blogs = _context.sent;
              _context.next = 9;
              return response.data;

            case 9:
              _this.result = _context.sent;
              _this.isLoading = false;
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }))();
  },
  methods: {
    handlePageChanged: function handlePageChanged(page) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.isLoading = true;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/blog/paginate?page=".concat(page));

              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return response.data.data;

              case 7:
                _this2.blogs = _context2.sent;
                _context2.next = 10;
                return response.data;

              case 10:
                _this2.result = _context2.sent;
                _this2.isLoading = false;
                _context2.next = 16;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Contact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Contact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'contact',
  props: {
    text: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: Object
  },
  data: function data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  props: ['text'],
  methods: {
    setActive: function setActive(clase) {
      $('.nav-link').removeClass('active');
      $('.nav-link.' + clase).addClass('active');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selectedPortfolio: {
      type: Object
    },
    button_label: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'portfolio',
  props: {
    text: Object
  },
  data: function data() {
    return {
      portfolio_gallery: {
        type: Object
      },
      selected_portfolio: {
        evidence: {}
      }
    };
  },
  created: function created() {
    this.portfolio_gallery = this.text.projects;
  },
  methods: {
    showPortfolioDescription: function showPortfolioDescription(item) {
      this.selected_portfolio = item;
      this.$bvModal.show('modalPortfolioItem');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DesktopHeader',
  props: {
    header: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHeader */ "./resources/js/layouts/MobileHeader.vue");
/* harmony import */ var _DesktopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopHeader */ "./resources/js/layouts/DesktopHeader.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'partial-header',
  components: {
    MobileHeader: _MobileHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    DesktopHeader: _DesktopHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      header: {},
      lang: null
    };
  },
  created: function created() {
    this.header = this.$store.getters.getJson.header;
    this.lang = this.$store.getters.getLanguage;
  },
  methods: {
    setLang: function setLang(lang) {
      this.$store.commit('updateLanguage', lang);
      this.header = this.$store.getters.getJson.header;
      this.lang = this.$store.getters.getLanguage;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jeremyhamm_vue_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeremyhamm/vue-slider */ "./node_modules/@jeremyhamm/vue-slider/dist/vue-slider.common.js");
/* harmony import */ var _jeremyhamm_vue_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jeremyhamm_vue_slider__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileHeader',
  props: {
    header: Object
  },
  components: {
    Slider: _jeremyhamm_vue_slider__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {
    links: function links() {
      var headerLinks = Object.values(this.header);
      var links = headerLinks.map(function (link, index) {
        return {
          id: index + 1,
          text: link.label,
          url: "/#".concat(link.url)
        };
      });
      links.push({
        id: 5,
        text: 'Blog',
        url: '/Blog'
      });
      links.push({
        id: 6,
        text: 'My CV',
        url: '/en/Manuel-Ojeda-CV.pdf'
      });
      links.push({
        id: 7,
        text: 'Dev.to',
        url: 'https://dev.to/manuelojeda'
      });
      links.push({
        id: 8,
        text: 'Twitter',
        url: 'https://twitter.com/darkjeda'
      });
      links.push({
        id: 9,
        text: 'Linked In',
        url: 'https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/'
      });
      return links;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHeader */ "./resources/js/layouts/MobileHeader.vue");
/* harmony import */ var _DesktopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopHeader */ "./resources/js/layouts/DesktopHeader.vue");
//
//
//
//
//
//
//
// import { mapGetters, mapMutations } from "vuex";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'partial-header',
  components: {
    MobileHeader: _MobileHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    DesktopHeader: _DesktopHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      header: {},
      lang: null
    };
  },
  created: function created() {
    /* $(window).scroll(function() {
      if ($(window).scrollTop() > 98) {
        $("#header").addClass("fixed-top");
      } else {
        $("#header").removeClass("fixed-top");
      }
    });
     $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    }); */
    this.header = this.$store.getters.getJson.header;
    this.lang = this.$store.getters.getLanguage;
  },
  methods: {
    setActive: function setActive(clase) {// $(".nav-link").removeClass("active");
      // $(".nav-link." + clase).addClass("active");
      // navLinks.map((link) => {
      //   console.log(link)
      // })
    },
    setLang: function setLang(lang) {
      this.$store.commit('updateLanguage', lang);
      this.header = this.$store.getters.getJson.header;
      this.lang = this.$store.getters.getLanguage;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'partialHome',
  computed: {
    home: function home() {
      return this.$store.getters.getJson.home;
    },
    about: function about() {
      return this.$store.getters.getJson.about;
    },
    portfolio: function portfolio() {
      return this.$store.getters.getJson.portfolio;
    },
    contact: function contact() {
      return this.$store.getters.getJson.contact;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".errorTitle[data-v-56b034f7] {\n  font-size: 180px !important;\n  font-weight: 600 !important;\n}\n.cta-button[data-v-56b034f7] {\n  border: 2px solid;\n  padding: 15px;\n  border-radius: 50px;\n}\n.container[data-v-56b034f7] {\n  margin-top: 6rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid-skills[data-v-32326228] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 15px;\n}\n.grid-skills .fas[data-v-32326228], .grid-skills .fab[data-v-32326228] {\n  text-align: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card[data-v-7a4abd5c] {\n  height: 100%;\n  transition: all ease 0.2s;\n}\n.card .card-img[data-v-7a4abd5c] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.card .card-body[data-v-7a4abd5c] {\n  background-color: #0c5460;\n  color: #fff;\n  transition: all ease 0.2s;\n}\n.card[data-v-7a4abd5c]:hover {\n  box-shadow: 0px 0px 13px 2px #777;\n}\n.card:hover .card-body[data-v-7a4abd5c] {\n  background-color: #062c33;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid[data-v-9fb2fd94] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 30px;\n  align-items: center;\n}\n@media (min-width: 578px) {\n.grid[data-v-9fb2fd94] {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (min-width: 768px) {\n.grid[data-v-9fb2fd94] {\n    grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (min-width: 992px) {\n.grid[data-v-9fb2fd94] {\n    grid-template-columns: repeat(4, 1fr);\n}\n}\n.spinner-grid[data-v-9fb2fd94] {\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n  height: 80vh;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#home[data-v-05c113d0] {\n  margin-top: 10rem;\n}\n@media (min-width: 992px) {\n#home[data-v-05c113d0] {\n    margin-top: 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid[data-v-7bdcfb95] {\n  display: grid;\n  grid-template-columns: 33% 1fr;\n  align-items: center;\n}\n.grid .header-link a[data-v-7bdcfb95] {\n  transition: all ease 0.2s;\n  color: #017bb0;\n}\n.weight-500[data-v-7bdcfb95] {\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#header[data-v-5554ebb3] {\n  position: fixed;\n  width: 100%;\n  background-color: #fff;\n  top: 0;\n  z-index: 999;\n  border-bottom: 2px solid #00c9b6;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#header[data-v-55917aba] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n  background-color: #fff;\n  border-bottom: 2px solid #00c9b6;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("partial-header"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row errorRow align-items-center" }, [
          _vm.lang === "es"
            ? _c("div", { staticClass: "col-12 text-center" }, [
                _c("h1", { staticClass: "errorTitle" }, [_vm._v("404")]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary cta-button",
                    attrs: { href: "/" }
                  },
                  [_vm._v("Llevame de vuelta")]
                )
              ])
            : _c("div", { staticClass: "col-12 text-center" }, [
                _c("h1", { staticClass: "errorTitle" }, [_vm._v("404")]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary cta-button",
                    attrs: { href: "/" }
                  },
                  [_vm._v("Take me back")]
                )
              ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "mb-3" }, [
      _vm._v("\n          Oh no!\n          "),
      _c("br"),
      _vm._v("No debimos llegar hasta aquí\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "mb-3" }, [
      _vm._v("\n          Oh no!\n          "),
      _c("br"),
      _vm._v("We should not be here\n        ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "row align-items-center",
      attrs: { id: "about" },
      on: {
        focus: function($event) {
          return _vm.setActive("about")
        }
      }
    },
    [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", { staticClass: "title about_title", attrs: { id: "focus" } }, [
          _vm._v(_vm._s(_vm.text.main_title))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-lg-6 about_section" }, [
        _c("p", {
          staticClass: "text-left about_text",
          domProps: { innerHTML: _vm._s(_vm.text.about_me) }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-lg-6" }, [
        _c("h3", { staticClass: "medium text-center p-dark mb-3" }, [
          _vm._v(_vm._s(_vm.text.subtitles[0]))
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          { staticClass: "row dev-stack" },
          [
            _c("div", { staticClass: "col-12 my-4" }, [
              _c("h3", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.text.subtitles[1]))
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.text.stack, function(item, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-12 col-sm-6 col-lg-3 stack" },
                [
                  item.hasImage
                    ? _c("img", {
                        staticClass: "img-logo",
                        attrs: { src: item.imageUrl, alt: "" }
                      })
                    : _c("i", { class: item.class }),
                  _vm._v(" "),
                  _c("h4", [_vm._v(_vm._s(item.label))]),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "text-left",
                    domProps: { innerHTML: _vm._s(item.description) }
                  })
                ]
              )
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "grid-skills" }, [
      _c("i", { staticClass: "fas skills fa-laptop fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fab skills fa-js-square fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fab skills fa-css3-alt fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-headphones-alt fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-gamepad fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-book fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-mug-hot fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-dumbbell fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-film fa-3x" }),
      _vm._v(" "),
      _c("i", { staticClass: "fas skills fa-plane-departure fa-3x" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("partial-header"), _vm._v(" "), _c("partial-home")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "blog-main" },
    [
      _c("header-blog", { staticClass: "mb-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "container my-5 pt-5" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c("ol", { staticClass: "breadcrumb" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "breadcrumb-item active",
                    attrs: { "aria-current": "page" }
                  },
                  [_vm._v(_vm._s(_vm.blog.title))]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "btn btn-primary", attrs: { href: "/Blog" } },
              [_vm._v("Volver")]
            ),
            _vm._v(" "),
            _c("h1", { staticClass: "titulo mt-4" }, [
              _vm._v(_vm._s(_vm.blog.title))
            ]),
            _vm._v(" "),
            _c("p", [
              _c("b", [_vm._v("\n            Publicado:\n          ")]),
              _vm._v(
                "\n          " + _vm._s(_vm.blog.published_at) + "\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "fb-share-button d-inline",
                attrs: {
                  "data-href": "https://manuelojeda.xyz/Blog/" + _vm.blog.seo,
                  "data-layout": "button_count",
                  "data-size": "large"
                }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "fb-xfbml-parse-ignore",
                    attrs: {
                      target: "_blank",
                      href:
                        "https://www.facebook.com/sharer/sharer.php?u=https://manuelojeda.xyz/Blog/" +
                        _vm.blog.seo
                    }
                  },
                  [_vm._v("Compartir")]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-inline" }, [
              _c(
                "a",
                {
                  staticClass: "twitter-share-button",
                  attrs: {
                    target: "_blank",
                    href: "https://twitter.com/intent/tweet?" + _vm.tweet
                  }
                },
                [
                  _c("i", { staticClass: "fab fa-twitter mr-2" }),
                  _vm._v("Tweet\n          ")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "my-4 blog-body",
              domProps: { innerHTML: _vm._s(_vm.content) }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "comments" }, [_c("Disqus")], 1)
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/" } }, [_vm._v("Inicio")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/Blog" } }, [_vm._v("Blog")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "a",
      { attrs: { href: "/Blog/" + _vm.blog.seo } },
      [
        _c(
          "b-card",
          { attrs: { "img-src": _vm.blog.thumbnail } },
          [
            _c("b-card-text", [
              _c("h4", { staticClass: "font-weight-bold mb-4" }, [
                _vm._v("\n          " + _vm._s(_vm.blog.title) + "\n        ")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("b", [_vm._v("Fecha de publicación")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n          " + _vm._s(_vm.blog.published_at) + "\n        "
                )
              ])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "blog-main" },
    [
      _c("header-blog", { staticClass: "mb-3" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isLoading,
              expression: "!isLoading"
            }
          ],
          staticClass: "container my-5 pt-5"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.blogs.length > 0,
                  expression: "blogs.length > 0"
                }
              ]
            },
            [
              _c(
                "div",
                { staticClass: "grid mb-5" },
                _vm._l(_vm.blogs, function(blog, index) {
                  return _c("blog-card", { key: index, attrs: { blog: blog } })
                }),
                1
              ),
              _vm._v(" "),
              _c("b-pagination", {
                attrs: {
                  "current-page": _vm.result.current_page,
                  "total-rows": _vm.result.total,
                  "per-page": _vm.result.per_page,
                  align: "center"
                },
                on: { change: _vm.handlePageChanged }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.blogs.length === 0 ? _c("div", [_vm._m(1)]) : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", { staticClass: "container my-5 pt-5" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "spinner-grid" }, [
                  _c(
                    "div",
                    [
                      _c("b-spinner", {
                        staticStyle: { width: "8rem", height: "8rem" },
                        attrs: { label: "Loading...", variant: "info" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mb-4" }, [
        _c("h1", { staticClass: "titulo mb-5" }, [
          _vm._v("Bienvenido a mi blog")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-center my-5" }, [
      _vm._v("\n        Oops! "),
      _c("br"),
      _vm._v(" La búsqueda realizada no arrojó resultados\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "contact" } }, [
    _c("div", { staticClass: "row align-items-center text-center" }, [
      _c("div", { staticClass: "col-12 mb-4" }, [
        _c("h2", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm.text.main_title))
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 col-lg-3 py-3" }, [
      _c(
        "a",
        {
          staticClass: "contact-link linkedin",
          attrs: {
            href: "https://www.linkedin.com/in/manuel-ojeda-618753132/",
            target: "_blank",
            rel: "noopener noreferrer"
          }
        },
        [_c("i", { staticClass: "fab fa-linkedin fa-4x" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 col-lg-3 py-3" }, [
      _c(
        "a",
        {
          staticClass: "contact-link gmail",
          attrs: {
            href: "mailto:manuelojedasistemas@gmail.com",
            rel: "noopener noreferrer"
          }
        },
        [_c("i", { staticClass: "far fa-envelope fa-4x" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 col-lg-3 py-3" }, [
      _c(
        "a",
        {
          staticClass: "contact-link github",
          attrs: {
            href: "https://github.com/manuelojeda",
            rel: "noopener noreferrer",
            target: "_blank"
          }
        },
        [_c("i", { staticClass: "fab fa-github fa-4x" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-carousel",
        {
          attrs: {
            id: "carousel-1",
            interval: 4000,
            fade: "",
            controls: "",
            indicators: ""
          },
          on: {
            "sliding-start": _vm.onSlideStart,
            "sliding-end": _vm.onSlideEnd
          },
          model: {
            value: _vm.slide,
            callback: function($$v) {
              _vm.slide = $$v
            },
            expression: "slide"
          }
        },
        _vm._l(_vm.images, function(image, indexImage) {
          return _c("b-carousel-slide", { key: indexImage }, [
            _c("img", {
              staticClass: "d-block img-fluid",
              attrs: { slot: "img", src: image.img },
              slot: "img"
            })
          ])
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "home row align-items-center",
      attrs: { id: "home" },
      on: {
        focus: function($event) {
          return _vm.setActive("home")
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "hello" }, [
          _c("span", [_vm._v(_vm._s(_vm.text.hello))])
        ]),
        _vm._v(" "),
        _c("h1", { staticClass: "mainTitle" }, [
          _vm._v("\n      Manuel Ojeda\n      "),
          _c("br"),
          _vm._v(" "),
          _c("span", { domProps: { innerHTML: _vm._s(_vm.text.charge) } })
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6" }, [
      _c("img", {
        staticClass: "profilePic",
        attrs: { src: "/img/profile_pic.jpg", alt: "Profile Pic" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("blockquote", { staticClass: "blockquote" }, [
      _c("p", { staticClass: "mb-0 secondary" }, [
        _c("a", { attrs: { href: "mailto:manuelojedasistemas@gmail.com" } }, [
          _c("i", { staticClass: "fas fa-envelope mr-2" }),
          _vm._v("\n          manuelojedasistemas@gmail.com\n        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "modalPortfolioItem",
      attrs: {
        id: "modalPortfolioItem",
        centered: "",
        size: "lg",
        "hide-footer": "",
        "no-esc-close": ""
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("h3", { staticClass: "bold primary mb-0" }, [
              _vm._v(_vm._s(_vm.selectedPortfolio.work_title))
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "regular p-dark mb-0" }, [
              _vm._v(_vm._s(_vm.selectedPortfolio.work_done))
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "light p-dark" }, [
              _c("small", [_vm._v(_vm._s(_vm.selectedPortfolio.work_year))])
            ]),
            _vm._v(" "),
            _c("evidence-carousel", {
              attrs: { images: _vm.selectedPortfolio.evidence }
            }),
            _vm._v(" "),
            _c("pre", { staticClass: "text-justify" }, [
              _vm._v(_vm._s(_vm.selectedPortfolio.description))
            ]),
            _vm._v(" "),
            _vm.selectedPortfolio.hasUrl
              ? _c(
                  "a",
                  {
                    staticClass: "btn-visit",
                    attrs: { target: "_blank", href: _vm.selectedPortfolio.url }
                  },
                  [_vm._v(_vm._s(_vm.button_label))]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row", attrs: { id: "portfolio" } },
    [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm.text.main_title))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row align-items-start" },
          _vm._l(_vm.portfolio_gallery, function(item, index) {
            return _c(
              "div",
              { key: index, staticClass: "col-12 col-sm-6 col-lg-4 item" },
              [
                _c(
                  "figure",
                  {
                    on: {
                      click: function($event) {
                        return _vm.showPortfolioDescription(item)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "img-portfolio",
                      attrs: { src: item.background_img, alt: "" }
                    }),
                    _vm._v(" "),
                    _c("section", { staticClass: "work__description" }, [
                      _c("p", { staticClass: "work__title" }, [
                        _vm._v(_vm._s(item.work_title))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "work__year" }, [
                        _vm._v(_vm._s(item.work_year))
                      ])
                    ])
                  ]
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("portfolio-item", {
        attrs: {
          "selected-portfolio": _vm.selected_portfolio,
          button_label: _vm.text.visit
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "grid" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "menu-links" },
          [
            _c(
              "b-navbar",
              [
                _c(
                  "b-navbar-nav",
                  { staticClass: "ml-auto" },
                  [
                    _vm._l(_vm.header, function(menu, index) {
                      return _c(
                        "b-nav-item",
                        {
                          key: index,
                          staticClass: "weight-500",
                          class: menu.id,
                          attrs: { href: "/#" + menu.url }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(menu.label) +
                              "\n            "
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "b-nav-item",
                      { staticClass: "weight-500", attrs: { href: "/Blog" } },
                      [_vm._v("\n              Blog\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-nav-item",
                      {
                        staticClass: "weight-500",
                        attrs: {
                          href: "/en/Manuel-Ojeda-CV.pdf",
                          target: "_blank"
                        }
                      },
                      [_vm._v("\n              My CV\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-nav-item-dropdown",
                      { attrs: { text: "Social Media" } },
                      [
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              href: "https://dev.to/manuelojeda",
                              target: "_blank"
                            }
                          },
                          [_vm._v("Dev.to")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              href: "https://twitter.com/darkjeda",
                              target: "_blank"
                            }
                          },
                          [_vm._v("Twitter")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              href:
                                "https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/",
                              target: "_blank"
                            }
                          },
                          [_vm._v("Linked In")]
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-link" }, [
      _c("h4", { staticClass: "weight-500 d-inline" }, [
        _c("a", { attrs: { href: "/" } }, [
          _vm._v("\n            Manuel Ojeda's website\n          ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "header" } },
    [
      _c("mobile-header", {
        staticClass: "d-md-none",
        attrs: { header: _vm.header }
      }),
      _vm._v(" "),
      _c("desktop-header", {
        staticClass: "d-none d-md-block",
        attrs: { header: _vm.header }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container py-4 mobile-header" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c("slider", {
                attrs: {
                  width: 300,
                  format: "push",
                  direction: "left",
                  opacity: 0.15,
                  links: _vm.links
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "header" } },
    [
      _c("mobile-header", {
        staticClass: "d-md-none",
        attrs: { header: _vm.header }
      }),
      _vm._v(" "),
      _c("desktop-header", {
        staticClass: "d-none d-md-block",
        attrs: { header: _vm.header }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "content", staticClass: "container", attrs: { id: "nav-scroller" } },
    [
      _c("home", { attrs: { text: _vm.home } }),
      _vm._v(" "),
      _c("about", { attrs: { text: _vm.about } }),
      _vm._v(" "),
      _c("portfolio", { attrs: { text: _vm.portfolio } }),
      _vm._v(" "),
      _c("contact", { attrs: { text: _vm.contact } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Public/app.js":
/*!************************************!*\
  !*** ./resources/js/Public/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
/* harmony import */ var vue_disqus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-disqus */ "./node_modules/vue-disqus/dist/vue-disqus.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imports */ "./resources/js/Public/imports.js");







vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__["default"]);
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.get['Content-Type'] = 'application/json';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.get['Cache-Control'] = 'no-cache';
vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);

if (navigator.languages[1] === 'es') {
  _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('updateLanguage', 'es');
} else {
  _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('updateLanguage', 'en');
}

vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_disqus__WEBPACK_IMPORTED_MODULE_4__["default"], {
  shortname: "manuelojeda"
}); // eslint-disable-next-line no-new

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./resources/js/Public/components/404.vue":
/*!************************************************!*\
  !*** ./resources/js/Public/components/404.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=56b034f7&scoped=true& */ "./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& */ "./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56b034f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/404.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Public/components/404.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=style&index=0&id=56b034f7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_56b034f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=56b034f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/404.vue?vue&type=template&id=56b034f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_56b034f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/About.vue":
/*!**************************************************!*\
  !*** ./resources/js/Public/components/About.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=32326228&scoped=true& */ "./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& */ "./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32326228",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/About.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Public/components/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=style&index=0&id=32326228&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_32326228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=32326228&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/About.vue?vue&type=template&id=32326228&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_32326228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/App.vue":
/*!************************************************!*\
  !*** ./resources/js/Public/components/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=76e4e140& */ "./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Public/components/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=76e4e140& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/App.vue?vue&type=template&id=76e4e140&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_76e4e140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Blog.vue":
/*!*************************************************!*\
  !*** ./resources/js/Public/components/Blog.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=096595da& */ "./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Blog.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Public/components/Blog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da&":
/*!********************************************************************************!*\
  !*** ./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=096595da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog.vue?vue&type=template&id=096595da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_096595da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Blog/Card.vue":
/*!******************************************************!*\
  !*** ./resources/js/Public/components/Blog/Card.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=7a4abd5c&scoped=true& */ "./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& */ "./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a4abd5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Blog/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--5-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=style&index=0&id=7a4abd5c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_7a4abd5c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=7a4abd5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Card.vue?vue&type=template&id=7a4abd5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_7a4abd5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Blog/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Public/components/Blog/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=9fb2fd94&scoped=true& */ "./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& */ "./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9fb2fd94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Blog/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--5-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=style&index=0&id=9fb2fd94&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9fb2fd94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=9fb2fd94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Blog/Index.vue?vue&type=template&id=9fb2fd94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9fb2fd94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Contact.vue":
/*!****************************************************!*\
  !*** ./resources/js/Public/components/Contact.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=6a28cf82& */ "./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Public/components/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=6a28cf82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Contact.vue?vue&type=template&id=6a28cf82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6a28cf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/EvidenceCarousel.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Public/components/EvidenceCarousel.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvidenceCarousel.vue?vue&type=template&id=a7b4fb70& */ "./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70&");
/* harmony import */ var _EvidenceCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvidenceCarousel.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EvidenceCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/EvidenceCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EvidenceCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EvidenceCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EvidenceCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EvidenceCarousel.vue?vue&type=template&id=a7b4fb70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/EvidenceCarousel.vue?vue&type=template&id=a7b4fb70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EvidenceCarousel_vue_vue_type_template_id_a7b4fb70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Home.vue":
/*!*************************************************!*\
  !*** ./resources/js/Public/components/Home.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=05c113d0&scoped=true& */ "./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& */ "./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05c113d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Public/components/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=style&index=0&id=05c113d0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_05c113d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=05c113d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Home.vue?vue&type=template&id=05c113d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_05c113d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Modals/PortfolioItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Public/components/Modals/PortfolioItem.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortfolioItem.vue?vue&type=template&id=0d02fe3a& */ "./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a&");
/* harmony import */ var _PortfolioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioItem.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PortfolioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Modals/PortfolioItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--5-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PortfolioItem.vue?vue&type=template&id=0d02fe3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Modals/PortfolioItem.vue?vue&type=template&id=0d02fe3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioItem_vue_vue_type_template_id_0d02fe3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/components/Portfolio.vue":
/*!******************************************************!*\
  !*** ./resources/js/Public/components/Portfolio.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=a10340b2& */ "./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2&");
/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js& */ "./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Public/components/Portfolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--5-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=template&id=a10340b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Public/components/Portfolio.vue?vue&type=template&id=a10340b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_a10340b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Public/imports.js":
/*!****************************************!*\
  !*** ./resources/js/Public/imports.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('app', __webpack_require__(/*! ./components/App.vue */ "./resources/js/Public/components/App.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('error-404', __webpack_require__(/*! ./components/404.vue */ "./resources/js/Public/components/404.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('blogs', __webpack_require__(/*! ./components/Blog/Index.vue */ "./resources/js/Public/components/Blog/Index.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('blog', __webpack_require__(/*! ./components/Blog.vue */ "./resources/js/Public/components/Blog.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('partial-header', __webpack_require__(/*! @/layouts/PartialHeader.vue */ "./resources/js/layouts/PartialHeader.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('header-blog', __webpack_require__(/*! @/layouts/HeaderBlog.vue */ "./resources/js/layouts/HeaderBlog.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('partial-home', __webpack_require__(/*! @/layouts/PartialHome.vue */ "./resources/js/layouts/PartialHome.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('home', __webpack_require__(/*! ./components/Home.vue */ "./resources/js/Public/components/Home.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('about', __webpack_require__(/*! ./components/About.vue */ "./resources/js/Public/components/About.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('portfolio', __webpack_require__(/*! ./components/Portfolio.vue */ "./resources/js/Public/components/Portfolio.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('contact', __webpack_require__(/*! ./components/Contact.vue */ "./resources/js/Public/components/Contact.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('portfolio-item', __webpack_require__(/*! ./components/Modals/PortfolioItem.vue */ "./resources/js/Public/components/Modals/PortfolioItem.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('evidence-carousel', __webpack_require__(/*! ./components/EvidenceCarousel.vue */ "./resources/js/Public/components/EvidenceCarousel.vue")["default"]);

/***/ }),

/***/ "./resources/js/json/en.json":
/*!***********************************!*\
  !*** ./resources/js/json/en.json ***!
  \***********************************/
/*! exports provided: header, home, about, portfolio, contact, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"0\":{\"label\":\"Home\",\"id\":\"home\",\"url\":\"home\"},\"1\":{\"label\":\"About\",\"id\":\"about\",\"url\":\"about\"},\"2\":{\"label\":\"Portfolio\",\"id\":\"portfolio\",\"url\":\"portfolio\"},\"3\":{\"label\":\"Contact me\",\"id\":\"contact\",\"url\":\"contact\"}},\"home\":{\"hello\":\"Hi, i'm\",\"charge\":\"<i>Fullstack</i> web developer\"},\"about\":{\"main_title\":\"About me\",\"about_me\":\"Hi, I'm Manuel, my profession has been to develop web applications both frontend and backend. I do functions such as user needs analysis, database schema development, server code development and optimization, and visual part analysis and development to make the user have a pleasant experience. I currently live in La Paz, Baja California Sur, I like music (rock and metal), a good coffee and a good pizza. In my free time I usually write code, play competitive and cooperative video games, exercise in the afternoons and study at <span class='platzi'>Platzi</span>.\",\"subtitles\":{\"0\":\"Activities and skills\",\"1\":\"My dev stack\"},\"stack\":{\"0\":{\"label\":\"Figma\",\"hasImage\":true,\"imageUrl\":\"https://cdn.worldvectorlogo.com/logos/figma-1.svg\",\"class\":null,\"description\":\"Sometimes as a frontend developer I take the liberty to enter this app and make high level mockups of the apps I develop, in such a way that when I pass to the code I already have a base to accommodate the information.\"},\"1\":{\"label\":\"SASS/SCSS\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-sass\",\"description\":\"When I first entered the world of Web Development I was fascinated by using CSS, looking at how a web page took shape was very exciting. As I grew older I realized that pure CSS is not enough and I chose to use SASS to take advantage of the benefits of certain programming fundamentals to distribute styles into functions and variables.\"},\"2\":{\"label\":\"Vue.js\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-vuejs\",\"description\":\"This great framework quickly became my main JavaScript framework after seeing how fast and certain I could create interfaces.\"},\"3\":{\"label\":\"Laravel\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-laravel\",\"description\":\"One of the reasons why I learned Vue.js is Laravel, because knowing how to manipulate the back - end needed the best way to consume the information in the front - end. Laravel has become my favorite PHP framework for back-end development simply because I can do it quickly and make use of object-oriented programming to distribute the functionality within the app structure.\"}}},\"portfolio\":{\"main_title\":\"Portfolio\",\"visit\":\"Visit site\",\"projects\":{\"0\":{\"work_title\":\"Instituto Estatal Electoral de Baja California Sur\",\"work_done\":\"Mobile frontend and backend refactor\",\"work_year\":\"2019\",\"background_img\":\"/img/ieebcs2019.png\",\"url\":\"https://www.ieebcs.org.mx\",\"hasUrl\":true,\"description\":\"In this work we made a redesign for mobile devices and changed the internal code of the website from PHP 5 to Laravel 5.7, maintaining the database that has been used since its founding and creating models and controllers to use it.\\nWithin the functionality for the mobile front end the Bootstrap 4 was passed, using Material Design was adjusted to the standard of the same leaving the navigation the website from a cell phone to a tablet in a friendly way.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/ieebcs2019/home.png\"},\"1\":{\"img\":\"/img/evidencias/ieebcs2019/homeWithMenu.png\"},\"2\":{\"img\":\"/img/evidencias/ieebcs2019/sesiones.png\"},\"3\":{\"img\":\"/img/evidencias/ieebcs2019/noticia.png\"}}},\"1\":{\"work_title\":\"Intranet - IEEBCS\",\"work_done\":\"User interface redesign, and conversion from PHP5 to PHP7 and Laravel.\",\"work_year\":\"2019\",\"background_img\":\"/img/intranet2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"Here a total makeover to an internet app of the website was performed to perform Content management. Like the website, PHP5 was converted to PHP7 and Laravel maintaining the database that has been used since the first version of the institutional website.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/intranet2019/dashboard.png\"},\"1\":{\"img\":\"/img/evidencias/intranet2019/dashboard2.png\"},\"2\":{\"img\":\"/img/evidencias/intranet2019/consultas.png\"},\"3\":{\"img\":\"/img/evidencias/intranet2019/consultasConFiltro.png\"},\"4\":{\"img\":\"/img/evidencias/intranet2019/crear1.png\"},\"5\":{\"img\":\"/img/evidencias/intranet2019/crear2.png\"},\"6\":{\"img\":\"/img/evidencias/intranet2019/cargarDocumento.png\"}}},\"2\":{\"work_title\":\"Rediseño de Sistemas Internos\",\"work_done\":\"A redesign was carried out for a series of internal use systems to give a more modern touch.\",\"work_year\":\"2019\",\"background_img\":\"/img/rediee2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"Here a total redesign of the internal systems was done to give a better user experience and to improve the internal code of the user.\\nCreated with Laravel 5.7, Bootstrap 4 and SCSS.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/rediee2019/login.png\"},\"1\":{\"img\":\"/img/evidencias/rediee2019/dashboard.png\"}}},\"3\":{\"work_title\":\"Mini Sitio de Transparencia 2019\",\"work_done\":\"It was refactored from AngularJS to Vue.js.\",\"work_year\":\"2019\",\"background_img\":\"/img/dtaispe2019.png\",\"url\":\"https://www.ieebcs.org.mx/DTAISPE\",\"hasUrl\":true,\"description\":\"When the institutional website was passed completely, this mini site was reworked taking advantage of modern technologies such as Vue.js, ECMAScript 6 and Laravel 5.7.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/dtaispe2019/landing.png\"},\"1\":{\"img\":\"/img/evidencias/dtaispe2019/informacion.png\"},\"2\":{\"img\":\"/img/evidencias/dtaispe2019/art75.png\"},\"3\":{\"img\":\"/img/evidencias/dtaispe2019/informacionMovil.png\"},\"4\":{\"img\":\"/img/evidencias/dtaispe2019/art75Movil.png\"}}},\"4\":{\"work_title\":\"Mini Sitio de Cómputos Oficiales 2018\",\"work_done\":\"Creation of a mini site for the sample of the results obtained in the elections of the Local Electoral Process 2017 - 2018\",\"work_year\":\"2018\",\"background_img\":\"/img/computos2018.png\",\"url\":\"https://www.ieebcs.org.mx/ResultadosOficiales2018/#/\",\"hasUrl\":true,\"description\":\"In this mini site a site was created to display the results obtained in the elections of July 1, 2018. Made with AngularJS JSON type objects were collected for the automated deployment of information.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/computos2018/landing.png\"},\"1\":{\"img\":\"/img/evidencias/computos2018/resultadosGenerales.png\"},\"2\":{\"img\":\"/img/evidencias/computos2018/resultadoMunicipal.png\"},\"3\":{\"img\":\"/img/evidencias/computos2018/resultadosSecciones.png\"},\"4\":{\"img\":\"/img/evidencias/computos2018/resultadosCasillas.png\"}}},\"5\":{\"work_title\":\"Internal use apps 2018\",\"work_done\":\"Various applications generated during the Local Election Process 2017 - 2018\",\"work_year\":\"2018\",\"background_img\":\"/img/rediee2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"During the Electoral Process 2017 - 2018 I had to make various applications, from taking control of the sessions held in the various offices throughout the state of Baja California Sur, to the application to make the registration of candidates and candidates who participated in the committees of July 1.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/rediee2018/sisese1.png\"},\"1\":{\"img\":\"/img/evidencias/rediee2018/sisese2.png\"},\"2\":{\"img\":\"/img/evidencias/rediee2018/sisese3.png\"}}},\"6\":{\"work_title\":\"Instituto Estatal Electoral de Baja California Sur\",\"work_done\":\"Redesign of the institutional website\",\"work_year\":\"2017 - 2018\",\"background_img\":\"/img/ieebcs2018.png\",\"url\":\"https://heredado.ieebcs.org.mx\",\"hasUrl\":true,\"description\":\"In this work we made the conversion of a purely PHP site to a Vista-Controller Model capable separation, having as backend PHP and frontend AngularJS.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/ieebcs2018/homeDesktop.png\"},\"1\":{\"img\":\"/img/evidencias/ieebcs2018/sesiones.png\"},\"2\":{\"img\":\"/img/evidencias/ieebcs2018/noticias.png\"},\"3\":{\"img\":\"/img/evidencias/ieebcs2018/homeMovil.png\"},\"4\":{\"img\":\"/img/evidencias/ieebcs2018/sesionesMovil.png\"},\"5\":{\"img\":\"/img/evidencias/ieebcs2018/noticiasMovil.png\"}}}}},\"contact\":{\"main_title\":\"Contact me\"}}");

/***/ }),

/***/ "./resources/js/json/es.json":
/*!***********************************!*\
  !*** ./resources/js/json/es.json ***!
  \***********************************/
/*! exports provided: header, home, about, portfolio, contact, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"0\":{\"label\":\"Inicio\",\"id\":\"home\",\"url\":\"home\"},\"1\":{\"label\":\"Acerca\",\"id\":\"about\",\"url\":\"about\"},\"2\":{\"label\":\"Portafolio\",\"id\":\"portfolio\",\"url\":\"portfolio\"},\"3\":{\"label\":\"Contáctame\",\"id\":\"contact\",\"url\":\"contact\"}},\"home\":{\"hello\":\"Hola, yo soy\",\"charge\":\"Desarrollador <i>Fullstack</i> web\"},\"about\":{\"main_title\":\"Acerca de\",\"about_me\":\"Hola, soy Manuel, mi profesión ha sido desarrollar aplicaciones web tanto del lado <i> frontend </i> como del <i> backend </i>. Hago funciones como el análisis de las necesidades del usuario, desarrollo del esquema de la base de datos, desarrollo y optimización del código del servidor, y analisis y desarrollo de la parte visual para hacer que el usuario tenga una agradable experiencia. Actualmente vivo en La Paz, Baja California Sur, me gusta la música (rock y metal), un buen café y una buena pizza. En mi tiempo libre suelo escribir código, jugar videojuegos tanto competitivo como cooperativo, ejercitarme por las tardes y estudiar en <span class='platzi'>Platzi</span>.\",\"subtitles\":{\"0\":\"Actividades y habilidades\",\"1\":\"Mi stack de desarrollo\"},\"stack\":{\"0\":{\"label\":\"Figma\",\"hasImage\":true,\"imageUrl\":\"https://cdn.worldvectorlogo.com/logos/figma-1.svg\",\"class\":null,\"description\":\"Algunas veces como desarrollador frontend me tomo la libertad de entrar a esta app y hacer <i> mockups </i> de alto nivel de las apps que desarrollo, de tal manera que al pasar al código ya tengo una base para acomodar la información.\"},\"1\":{\"label\":\"SASS/SCSS\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-sass\",\"description\":\"Cuando entré por primera vez en el mundo del Desarrollo Web me fascinó utilizar CSS, el mirar como tomabá forma una página web me emocionaba mucho. A medida que crecía comprendí que el CSS puro no es suficiente y opté por utilizar <b> SASS </b> para aprovechar los beneficios de ciertos fundamentos de programación para distribuir los estilos en funciones y variables.\"},\"2\":{\"label\":\"Vue.js\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-vuejs\",\"description\":\"Este gran framework se convirtió rápidamente en mi framework <i> JavaScript </i> principal después de ver con qué velocidad y certeza podía crear interfaces.\"},\"3\":{\"label\":\"Laravel\",\"hasImage\":false,\"imageUrl\":null,\"class\":\"fab fa-laravel\",\"description\":\"Una de las razones por las que aprendí Vue.js es Laravel, ya que saber cómo manipular el <i> back - end </i> necesitaba la mejor manera de consumir la información en el <i> front - end </i>. Laravel se ha convertido en mi framework <b> PHP </b> favorito para el desarrollo de back-end por el simple hecho de poder hacerlo rápidamente y hacer uso de la <i> programación orientada a objetos </i> para distribuir la funcionalidad dentro de la estructura de la app.\"}}},\"portfolio\":{\"main_title\":\"Portafolio\",\"visit\":\"Visitar sitio\",\"projects\":{\"0\":{\"work_title\":\"Instituto Estatal Electoral de Baja California Sur\",\"work_done\":\"Rediseño Front-end movil y conversión de Back-end\",\"work_year\":\"2019\",\"background_img\":\"/img/ieebcs2019.png\",\"url\":\"https://www.ieebcs.org.mx\",\"hasUrl\":true,\"description\":\"En este trabajo se realizó un rediseño para dispositivos móviles y se hizo un cambió del código interno del sitio web de PHP 5 a Laravel 5.7, manteniendo la base de datos que ha sido utilizado desde su fundación y creando los modelos y controladores para poder uso del mismo.\\nDentro de la funcionalidad para el front - end móvil se pasó el a Bootstrap 4, utilizando Material Design se ajustó al estandar del mismo dejando la navegación el sitio web desde un teléfono celular hasta una tablet de manera amigable.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/ieebcs2019/home.png\"},\"1\":{\"img\":\"/img/evidencias/ieebcs2019/homeWithMenu.png\"},\"2\":{\"img\":\"/img/evidencias/ieebcs2019/sesiones.png\"},\"3\":{\"img\":\"/img/evidencias/ieebcs2019/noticia.png\"}}},\"1\":{\"work_title\":\"Intranet - IEEBCS\",\"work_done\":\"Resideño de la interfaz de usuario, y conversión de PHP5 a PHP7 y Laravel.\",\"work_year\":\"2019\",\"background_img\":\"/img/intranet2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"Aquí se realizó un makeover total a una app internet del sitio web para realizar la administración del Contenido. Al igual que el sitio web, se hizo conversión de PHP5 a PHP7 y Laravel manteniendo la base de datos que ha sido utilizada desde la realización de la primera versión de la web institucional.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/intranet2019/dashboard.png\"},\"1\":{\"img\":\"/img/evidencias/intranet2019/dashboard2.png\"},\"2\":{\"img\":\"/img/evidencias/intranet2019/consultas.png\"},\"3\":{\"img\":\"/img/evidencias/intranet2019/consultasConFiltro.png\"},\"4\":{\"img\":\"/img/evidencias/intranet2019/crear1.png\"},\"5\":{\"img\":\"/img/evidencias/intranet2019/crear2.png\"},\"6\":{\"img\":\"/img/evidencias/intranet2019/cargarDocumento.png\"}}},\"2\":{\"work_title\":\"Rediseño de Sistemas Internos\",\"work_done\":\"Se realizó un rediseño para una serie de sistemas de uso interno para dar un toque más moderno\",\"work_year\":\"2019\",\"background_img\":\"/img/rediee2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"Aquío se hizo un rediseño total a los sistemas de uso interno para dar una mejor experiencia al usuario y para mejorar el código interno del mismo.\\nCreado con Laravel 5.7, Bootstrap 4 y SCSS.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/rediee2019/login.png\"},\"1\":{\"img\":\"/img/evidencias/rediee2019/dashboard.png\"}}},\"3\":{\"work_title\":\"Mini Sitio de Transparencia 2019\",\"work_done\":\"Se refactorizó de AngularJS a Vue.js\",\"work_year\":\"2019\",\"background_img\":\"/img/dtaispe2019.png\",\"url\":\"https://www.ieebcs.org.mx/DTAISPE\",\"hasUrl\":true,\"description\":\"Al pasarse el sitio web institucional completamente, se rehizo este mini sitio aprovechando los usos de tecnologías modernas como Vue.js, ECMAScript 6 y Laravel 5.7\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/dtaispe2019/landing.png\"},\"1\":{\"img\":\"/img/evidencias/dtaispe2019/informacion.png\"},\"2\":{\"img\":\"/img/evidencias/dtaispe2019/art75.png\"},\"3\":{\"img\":\"/img/evidencias/dtaispe2019/informacionMovil.png\"},\"4\":{\"img\":\"/img/evidencias/dtaispe2019/art75Movil.png\"}}},\"4\":{\"work_title\":\"Mini Sitio de Cómputos Oficiales 2018\",\"work_done\":\"Creación de un mini sitio para la muestra de los resultados obtenidos en las elecciones del Proceso Local Electoral 2017 - 2018\",\"work_year\":\"2018\",\"background_img\":\"/img/computos2018.png\",\"url\":\"https://www.ieebcs.org.mx/ResultadosOficiales2018/#/\",\"hasUrl\":true,\"description\":\"En este mini sitio se realizó un sitio para desplegar los resultados obtenidos en los comicios del 1ero. de julio del 2018. Hecho con AngularJS se recabaron objetos del tipo JSON para el despliegue automatizado de la información.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/computos2018/landing.png\"},\"1\":{\"img\":\"/img/evidencias/computos2018/resultadosGenerales.png\"},\"2\":{\"img\":\"/img/evidencias/computos2018/resultadoMunicipal.png\"},\"3\":{\"img\":\"/img/evidencias/computos2018/resultadosSecciones.png\"},\"4\":{\"img\":\"/img/evidencias/computos2018/resultadosCasillas.png\"}}},\"5\":{\"work_title\":\"Aplicaciones Internas 2018\",\"work_done\":\"Diversas aplicaciones generadas durante el Proceso Local Electoral 2017 - 2018\",\"work_year\":\"2018\",\"background_img\":\"/img/rediee2019.png\",\"url\":null,\"hasUrl\":false,\"description\":\"Durante el Proceso Electoral 2017 - 2018 me tocó realizar diversas aplicaciones, desde llevar el control de las sesiones realizadas en las diversas oficinas a través del estado de Baja California Sur, hasta la aplicación para realizar el registro de las candidatas y los candidatos que participaron en los comicions del 1ero de julio.\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/rediee2018/sisese1.png\"},\"1\":{\"img\":\"/img/evidencias/rediee2018/sisese2.png\"},\"2\":{\"img\":\"/img/evidencias/rediee2018/sisese3.png\"}}},\"6\":{\"work_title\":\"Instituto Estatal Electoral de Baja California Sur\",\"work_done\":\"Rediseño del sitio web institucional\",\"work_year\":\"2017 - 2018\",\"background_img\":\"/img/ieebcs2018.png\",\"url\":\"https://heredado.ieebcs.org.mx\",\"hasUrl\":true,\"description\":\"En este trabajo se realizó la conversión de un sitio puramente PHP a separación de capaz de Modelo Vista-Controlador, teniendo como backend PHP y frontend AngularJS\",\"evidence\":{\"0\":{\"img\":\"/img/evidencias/ieebcs2018/homeDesktop.png\"},\"1\":{\"img\":\"/img/evidencias/ieebcs2018/sesiones.png\"},\"2\":{\"img\":\"/img/evidencias/ieebcs2018/noticias.png\"},\"3\":{\"img\":\"/img/evidencias/ieebcs2018/homeMovil.png\"},\"4\":{\"img\":\"/img/evidencias/ieebcs2018/sesionesMovil.png\"},\"5\":{\"img\":\"/img/evidencias/ieebcs2018/noticiasMovil.png\"}}}}},\"contact\":{\"main_title\":\"Contáctame\"}}");

/***/ }),

/***/ "./resources/js/layouts/DesktopHeader.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/DesktopHeader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true& */ "./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true&");
/* harmony import */ var _DesktopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopHeader.vue?vue&type=script&lang=js& */ "./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& */ "./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bdcfb95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/DesktopHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=style&index=0&id=7bdcfb95&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_style_index_0_id_7bdcfb95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DesktopHeader.vue?vue&type=template&id=7bdcfb95&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHeader_vue_vue_type_template_id_7bdcfb95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/HeaderBlog.vue":
/*!*********************************************!*\
  !*** ./resources/js/layouts/HeaderBlog.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true& */ "./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true&");
/* harmony import */ var _HeaderBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBlog.vue?vue&type=script&lang=js& */ "./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& */ "./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5554ebb3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/HeaderBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=style&index=0&id=5554ebb3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_style_index_0_id_5554ebb3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/HeaderBlog.vue?vue&type=template&id=5554ebb3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlog_vue_vue_type_template_id_5554ebb3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/MobileHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/MobileHeader.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHeader.vue?vue&type=template&id=2b384eb3& */ "./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3&");
/* harmony import */ var _MobileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileHeader.vue?vue&type=script&lang=js& */ "./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/MobileHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MobileHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/MobileHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MobileHeader.vue?vue&type=template&id=2b384eb3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/MobileHeader.vue?vue&type=template&id=2b384eb3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_template_id_2b384eb3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/PartialHeader.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/PartialHeader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartialHeader.vue?vue&type=template&id=55917aba&scoped=true& */ "./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true&");
/* harmony import */ var _PartialHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartialHeader.vue?vue&type=script&lang=js& */ "./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& */ "./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PartialHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55917aba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/PartialHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=style&index=0&id=55917aba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_style_index_0_id_55917aba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHeader.vue?vue&type=template&id=55917aba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHeader.vue?vue&type=template&id=55917aba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHeader_vue_vue_type_template_id_55917aba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/PartialHome.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/PartialHome.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartialHome.vue?vue&type=template&id=643fd568& */ "./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568&");
/* harmony import */ var _PartialHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartialHome.vue?vue&type=script&lang=js& */ "./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartialHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/PartialHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--5-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_5_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PartialHome.vue?vue&type=template&id=643fd568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/PartialHome.vue?vue&type=template&id=643fd568&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartialHome_vue_vue_type_template_id_643fd568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _json_es_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/es.json */ "./resources/js/json/es.json");
var _json_es_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/es.json */ "./resources/js/json/es.json", 1);
/* harmony import */ var _json_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/en.json */ "./resources/js/json/en.json");
var _json_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/en.json */ "./resources/js/json/en.json", 1);




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    json: {},
    language: null
  },
  getters: {
    getJson: function getJson(state) {
      return state.json;
    },
    getLanguage: function getLanguage(state) {
      return state.language;
    }
  },
  mutations: {
    updateJson: function updateJson(state, payload) {
      state.json = payload;
    },
    updateLanguage: function updateLanguage(state, payload) {
      state.language = payload;

      if (payload == 'es') {
        state.json = _json_es_json__WEBPACK_IMPORTED_MODULE_2__;
      } else {
        state.json = _json_en_json__WEBPACK_IMPORTED_MODULE_3__;
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./resources/js/Public/app.js ./resources/sass/app.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/dev/development/php/manuelojeda/resources/js/Public/app.js */"./resources/js/Public/app.js");
module.exports = __webpack_require__(/*! /home/dev/development/php/manuelojeda/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);