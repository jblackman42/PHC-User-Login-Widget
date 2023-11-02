(()=>{
  "use strict";
  function e(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var t = null
    , n = function() {
      function n() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, n),
          this.SCRIPT_NAME = "/dist/MPWidgets."
      }
      var r, o;
      return r = n,
      (o = [{
          key: "GetAuthConfiguration",
          value: function(e) {
              if (!0 === e && null != t)
                  return Promise.resolve(t);
              var n = this.GetAppRoot();
              if ("" !== n) {
                  var r = "".concat(n, "/Api/Auth");
                  return fetch(r).then((function(e) {
                      return e.json().then((function(e) {
                          return t = e,
                          e
                      }
                      ))
                  }
                  ), (function(e) {
                      throw console.error("Unable to retrieve auth info!"),
                      console.error(e),
                      new Error(e)
                  }
                  ))
              }
          }
      }, {
          key: "GetAuthToken",
          value: function(e) {
              var t = this.GetAppRoot()
                , n = "".concat(t, "/Home/Tokens?cacheKey=").concat(e);
              return fetch(n).then((function(e) {
                  return e.json()
              }
              ), (function(e) {
                  throw console.error("Unable to retrieve auth token!"),
                  console.error(e),
                  new Error(e)
              }
              ))
          }
      }, {
          key: "GetCSRFToken",
          value: function() {
              var e = this.GetAppRoot()
                , t = "".concat(e, "/Home/CSRFToken");
              return fetch(t).then((function(e) {
                  return e.json()
              }
              ), (function(e) {
                  throw console.error("Unable to retrieve CSRF token!"),
                  console.error(e),
                  new Error(e)
              }
              ))
          }
      }, {
          key: "GetAppRoot",
          value: function() {
              if (null !== document.getElementById("MPWidgets") && void 0 !== document.getElementById("MPWidgets")) {
                  var e = document.getElementById("MPWidgets").src;
                  if (e) {
                      var t = e.substring(0, e.indexOf(this.SCRIPT_NAME));
                      return sessionStorage.appRoot = t,
                      t
                  }
                  console.log("Error: Could not find script in header of page with id='MPWidgets'")
              }
          }
      }, {
          key: "GetConfigurationSetting",
          value: function(e) {
              return fetch("".concat(this.GetAppRoot(), "/Api/ConfigurationApi/GetConfigurationSettingValue?keyName=").concat(e)).then((function(e) {
                  return e.text()
              }
              ))
          }
      }, {
          key: "GetCustomStyles",
          value: function() {
              return fetch("".concat(this.GetAppRoot(), "/Api/ConfigurationApi/GetCustomStyles")).then((function(e) {
                  return e.json()
              }
              ))
          }
      }, {
          key: "GetLocalCountryCode",
          value: function(e) {
              var t = "US";
              if (window.navigator && e && e.length) {
                  var n = (window.navigator.language || t).split("-")
                    , r = n[n.length - 1]
                    , o = e.filter((function(e) {
                      return e.abbreviation == r
                  }
                  ));
                  o && o.length > 0 && (t = r)
              }
              return t
          }
      }]) && e(r.prototype, o),
      n
  }()
    , r = new n;
  function o(e) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ,
      o(e)
  }
  function i(e, t, n, r, o, i, u) {
      try {
          var a = e[i](u)
            , c = a.value
      } catch (e) {
          return void n(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, o)
  }
  function u(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function a(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return a = function(e) {
          if (null === e || (n = e,
          -1 === Function.toString.call(n).indexOf("[native code]")))
              return e;
          var n;
          if ("function" != typeof e)
              throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
              if (t.has(e))
                  return t.get(e);
              t.set(e, r)
          }
          function r() {
              return c(e, arguments, f(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
              constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }),
          l(r, e)
      }
      ,
      a(e)
  }
  function c(e, t, n) {
      return c = s() ? Reflect.construct : function(e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r));
          return n && l(o, n.prototype),
          o
      }
      ,
      c.apply(null, arguments)
  }
  function s() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
      if (Reflect.construct.sham)
          return !1;
      if ("function" == typeof Proxy)
          return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
          ))),
          !0
      } catch (e) {
          return !1
      }
  }
  function l(e, t) {
      return l = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t,
          e
      }
      ,
      l(e, t)
  }
  function f(e) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      }
      ,
      f(e)
  }
  var p = function(e) {
      !function(e, t) {
          if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }),
          t && l(e, t)
      }(m, e);
      var t, r, a, c, p, h, y, d = (h = m,
      y = s(),
      function() {
          var e, t, n, r = f(h);
          if (y) {
              var i = f(this).constructor;
              e = Reflect.construct(r, arguments, i)
          } else
              e = r.apply(this, arguments);
          return t = this,
          !(n = e) || "object" !== o(n) && "function" != typeof n ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(t) : n
      }
      );
      function m() {
          var e;
          return function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, m),
          (e = d.call(this))._baseRoot = e.attachShadow({
              mode: "open"
          }),
          e._root = document.createElement("div"),
          e._baseRoot.appendChild(e._root),
          e._Init(),
          e
      }
      return t = m,
      r = [{
          key: "_Init",
          value: function() {
              this.setStyleFiles()
          }
      }, {
          key: "setStyleFiles",
          value: (c = regeneratorRuntime.mark((function e() {
              var t, r, o = this;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (this.customCssUrl = this.getAttribute("customCss"),
                          t = new n,
                          this._appRoot = t.GetAppRoot(),
                          this._appRoot) {
                              e.next = 5;
                              break
                          }
                          return e.abrupt("return");
                      case 5:
                          return e.next = 7,
                          t.GetCustomStyles().then((function(e) {
                              e.forEach((function(e) {
                                  var t = document.createElement("link");
                                  t.rel = "stylesheet",
                                  t.type = "text/css",
                                  t.media = "screen",
                                  t.href = e,
                                  o._baseRoot.appendChild(t)
                              }
                              ))
                          }
                          ));
                      case 7:
                          this.customCssUrl && ((r = document.createElement("link")).rel = "stylesheet",
                          r.type = "text/css",
                          r.media = "screen",
                          r.href = this.customCssUrl,
                          this._baseRoot.appendChild(r));
                      case 8:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, this)
          }
          )),
          p = function() {
              var e = this
                , t = arguments;
              return new Promise((function(n, r) {
                  var o = c.apply(e, t);
                  function u(e) {
                      i(o, n, r, u, a, "next", e)
                  }
                  function a(e) {
                      i(o, n, r, u, a, "throw", e)
                  }
                  u(void 0)
              }
              ))
          }
          ,
          function() {
              return p.apply(this, arguments)
          }
          )
      }],
      a = [{
          key: "registerComponent",
          value: function(e, t) {
              window.customElements.define(e, t),
              Array.from(document.getElementsByClassName(e + "-widget")).forEach((function(e) {
                  var n = new t;
                  t.observedAttributes.forEach((function(t) {
                      n.setAttribute(t, e.getAttribute(t))
                  }
                  )),
                  e.appendChild(n)
              }
              ))
          }
      }],
      r && u(t.prototype, r),
      a && u(t, a),
      m
  }(a(HTMLElement));
  function h(e) {
      return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ,
      h(e)
  }
  function y(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
  function d(e, t) {
      if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }),
      t && b(e, t)
  }
  function m(e) {
      var t = g();
      return function() {
          var n, r, o, i = k(e);
          if (t) {
              var u = k(this).constructor;
              n = Reflect.construct(i, arguments, u)
          } else
              n = i.apply(this, arguments);
          return r = this,
          !(o = n) || "object" !== h(o) && "function" != typeof o ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(r) : o
      }
  }
  function v(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return v = function(e) {
          if (null === e || (n = e,
          -1 === Function.toString.call(n).indexOf("[native code]")))
              return e;
          var n;
          if ("function" != typeof e)
              throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
              if (t.has(e))
                  return t.get(e);
              t.set(e, r)
          }
          function r() {
              return w(e, arguments, k(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
              constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }),
          b(r, e)
      }
      ,
      v(e)
  }
  function w(e, t, n) {
      return w = g() ? Reflect.construct : function(e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r));
          return n && b(o, n.prototype),
          o
      }
      ,
      w.apply(null, arguments)
  }
  function g() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
          return !1;
      if (Reflect.construct.sham)
          return !1;
      if ("function" == typeof Proxy)
          return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
          ))),
          !0
      } catch (e) {
          return !1
      }
  }
  function b(e, t) {
      return b = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t,
          e
      }
      ,
      b(e, t)
  }
  function k(e) {
      return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      }
      ,
      k(e)
  }
  var _ = function(e) {
      d(n, e);
      var t = m(n);
      function n(e) {
          return y(this, n),
          t.call(this, "Argument ".concat(e, " is invalid, null or undefined"))
      }
      return n
  }(v(Error))
    , S = function(e) {
      d(n, e);
      var t = m(n);
      function n(e) {
          return y(this, n),
          t.call(this, "Type of argument ".concat(e, " is invalid"))
      }
      return n
  }(v(Error));
  function R(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var C = function(e) {
      return "mpp-widgets_".concat(e)
  }
    , T = function() {
      function e() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e)
      }
      var t, n;
      return t = e,
      n = [{
          key: "setItem",
          value: function(e, t) {
              if (!e)
                  throw new _("key");
              if ("string" != typeof e)
                  throw new S("key");
              if (window.localStorage && window.localStorage.setItem) {
                  var n = C(e);
                  window.localStorage.setItem(n, t)
              }
          }
      }, {
          key: "getItem",
          value: function(e) {
              if (!e)
                  throw new _("key");
              if ("string" != typeof e)
                  throw new S("key");
              var t = null;
              if (window.localStorage && window.localStorage.getItem) {
                  var n = C(e);
                  t = window.localStorage.getItem(n) || null
              }
              return t
          }
      }, {
          key: "clear",
          value: function(e) {
              if (window.localStorage && window.localStorage.removeItem) {
                  var t = Object.keys(window.localStorage);
                  if (t.length) {
                      var n = C(e);
                      for (var r in t)
                          if (r) {
                              var o = t[r];
                              o && o.startsWith && o.startsWith(n) && window.localStorage.removeItem(o)
                          }
                  }
              }
          }
      }],
      null && R(t.prototype, null),
      n && R(t, n),
      e
  }();
  function A(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var I = function(e) {
      return "mpp-widgets_".concat(e)
  }
    , P = function() {
      function e() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e)
      }
      var t, n;
      return t = e,
      n = [{
          key: "setItem",
          value: function(e, t) {
              if (!e)
                  throw new _("key");
              if ("string" != typeof e)
                  throw new S("key");
              if (window.sessionStorage && window.sessionStorage.setItem) {
                  var n = I(e);
                  window.sessionStorage.setItem(n, t)
              }
          }
      }, {
          key: "getItem",
          value: function(e) {
              if (!e)
                  throw new _("key");
              if ("string" != typeof e)
                  throw new S("key");
              var t = null;
              if (window.sessionStorage && window.sessionStorage.getItem) {
                  var n = I(e);
                  t = window.sessionStorage.getItem(n) || null
              }
              return t
          }
      }, {
          key: "clear",
          value: function(e) {
              if (window.sessionStorage && window.sessionStorage.removeItem) {
                  var t = Object.keys(window.sessionStorage);
                  if (t.length) {
                      var n = I(e);
                      for (var r in t)
                          if (r) {
                              var o = t[r];
                              o && o.startsWith && o.startsWith(n) && window.sessionStorage.removeItem(o)
                          }
                  }
              }
          }
      }],
      null && A(t.prototype, null),
      n && A(t, n),
      e
  }();
  function x(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var O = {
      getUrlParameter: function(e, t) {
          t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
          return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
      }
  }
    , E = function() {
      function e(t) {
          return function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e),
          this._params = t,
          URLSearchParams && (this._urlSearchParams = new URLSearchParams(this._params)),
          this
      }
      var t, n;
      return t = e,
      (n = [{
          key: "get",
          value: function(e) {
              return "" === this._params ? "" : URLSearchParams ? this._urlSearchParams.get(e) : O.getUrlParameter.call(this._params, e)
          }
      }, {
          key: "has",
          value: function(e) {
              return "" !== this._params && (URLSearchParams ? this._urlSearchParams.has(e) : void 0 !== O.getUrlParameter.call(this._params, e))
          }
      }, {
          key: "toString",
          value: function() {
              return this._params ? this._params.substr(1) : ""
          }
      }, {
          key: "isValid",
          value: function() {
              return "" !== this._params
          }
      }]) && x(t.prototype, n),
      e
  }();
  function j(e, t, n, r, o, i, u) {
      try {
          var a = e[i](u)
            , c = a.value
      } catch (e) {
          return void n(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, o)
  }
  function L(e) {
      return function() {
          var t = this
            , n = arguments;
          return new Promise((function(r, o) {
              var i = e.apply(t, n);
              function u(e) {
                  j(i, r, o, u, a, "next", e)
              }
              function a(e) {
                  j(i, r, o, u, a, "throw", e)
              }
              u(void 0)
          }
          ))
      }
  }
  function U(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var M = "AuthToken"
    , G = "IdToken"
    , $ = "ExpiresAfter"
    , N = "CSRFToken";
  window.mppw_refreshTokenPromise = null;
  var F = function() {
      function e() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e)
      }
      var t, n, o, i, u;
      return t = e,
      null,
      n = [{
          key: "Token",
          get: function() {
              var e = T.getItem(M);
              return "null" === e ? null : e
          },
          set: function(e) {
              T.setItem(M, e)
          }
      }, {
          key: "IdToken",
          get: function() {
              var e = T.getItem(G);
              return "null" === e ? null : e
          },
          set: function(e) {
              T.setItem(G, e)
          }
      }, {
          key: "ExpiresAfter",
          get: function() {
              var e = T.getItem($);
              return "null" === e ? null : new Date(e)
          },
          set: function(e) {
              T.setItem($, e)
          }
      }, {
          key: "CSRFToken",
          get: function() {
              try {
                  return JSON.parse(P.getItem(N))
              } catch (e) {
                  return null
              }
          },
          set: function(e) {
              P.setItem(N, JSON.stringify(e))
          }
      }, {
          key: "SignIn",
          value: function() {
              r.GetAuthConfiguration().then((function(t) {
                  if (t) {
                      var n = "".concat(t.signInUrl, "?") + "response_type=".concat(t.responseType) + "&scope=".concat(t.scope) + "&client_id=".concat(t.clientId) + "&redirect_uri=".concat(t.redirectUrl) + "&nonce=".concat(t.nonce) + "&state=".concat(encodeURIComponent(window.location));
                      e.Token = null,
                      window.location.replace(n)
                  }
              }
              ))
          }
      }, {
          key: "SignOut",
          value: function() {
              r.GetAuthConfiguration(!0).then((function(t) {
                  if (t) {
                      var n = "".concat(t.signOutUrl, "?") + "id_token_hint=".concat(e.IdToken) + "&post_logout_redirect_uri=".concat(t.postLogoutRedirectUrl) + "&state=".concat(encodeURI(window.location));
                      e.Token = null,
                      e.IdToken = null,
                      window.location.replace(n)
                  }
              }
              ))
          }
      }, {
          key: "SaveCSRFTokenAsync",
          value: (u = L(regeneratorRuntime.mark((function t() {
              var n;
              return regeneratorRuntime.wrap((function(t) {
                  for (; ; )
                      switch (t.prev = t.next) {
                      case 0:
                          return t.next = 2,
                          r.GetCSRFToken();
                      case 2:
                          n = t.sent,
                          e.CSRFToken = n;
                      case 4:
                      case "end":
                          return t.stop()
                      }
              }
              ), t)
          }
          ))),
          function() {
              return u.apply(this, arguments)
          }
          )
      }, {
          key: "SaveAuthTokensAsync",
          value: (i = L(regeneratorRuntime.mark((function t() {
              var n, o, i, u, a;
              return regeneratorRuntime.wrap((function(t) {
                  for (; ; )
                      switch (t.prev = t.next) {
                      case 0:
                          if (n = "cacheKey",
                          o = new E(window.location.search),
                          !(i = o.get(n))) {
                              t.next = 9;
                              break
                          }
                          return window.history && window.history.replaceState && i && (u = (u = String(window.location)).replace("?" + n + "=", "").replace("&" + n + "=", "").replace(i, ""),
                          window.history.replaceState({}, document.title, u)),
                          t.next = 7,
                          r.GetAuthToken(i);
                      case 7:
                          a = t.sent,
                          e._SaveTokens(a);
                      case 9:
                      case "end":
                          return t.stop()
                      }
              }
              ), t)
          }
          ))),
          function() {
              return i.apply(this, arguments)
          }
          )
      }, {
          key: "RefreshTokensAsync",
          value: (o = L(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                  for (; ; )
                      switch (t.prev = t.next) {
                      case 0:
                          if (null == window.mppw_refreshTokenPromise) {
                              t.next = 2;
                              break
                          }
                          return t.abrupt("return", window.mppw_refreshTokenPromise);
                      case 2:
                          return window.mppw_refreshTokenPromise = new Promise((function(t) {
                              e.Token && e.IdToken && e.ExpiresAfter ? r.GetAuthConfiguration(!0).then((function(n) {
                                  if (n) {
                                      var r = "".concat(n.signInUrl, "?") + "response_type=".concat(n.responseType) + "&scope=".concat(n.scope) + "&client_id=".concat(n.clientId) + "&redirect_uri=".concat(n.redirectUrl) + "&nonce=".concat(n.nonce) + "&state=REAUTH";
                                      fetch(r, {
                                          credentials: "include"
                                      }).then((function(n) {
                                          return n.json().then((function(n) {
                                              e._SaveTokens(n),
                                              t()
                                          }
                                          )).catch((function() {
                                              e._ClearTokens(),
                                              t()
                                          }
                                          ))
                                      }
                                      )).catch((function() {
                                          e._ClearTokens(),
                                          t()
                                      }
                                      ))
                                  }
                              }
                              )) : t()
                          }
                          )).finally((function() {
                              window.mppw_refreshTokenPromise = null
                          }
                          )),
                          t.abrupt("return", window.mppw_refreshTokenPromise);
                      case 4:
                      case "end":
                          return t.stop()
                      }
              }
              ), t)
          }
          ))),
          function() {
              return o.apply(this, arguments)
          }
          )
      }, {
          key: "_SaveTokens",
          value: function(t) {
              e.Token = t.accessToken,
              e.IdToken = t.idToken;
              var n = new Date;
              n.setSeconds(n.getSeconds() + t.expiresIn - 60),
              e.ExpiresAfter = n
          }
      }, {
          key: "_ClearTokens",
          value: function() {
              e.Token = null,
              e.IdToken = null,
              e.ExpiresAfter = null
          }
      }],
      n && U(t, n),
      e
  }();
  function B(e, t, n, r, o, i, u) {
      try {
          var a = e[i](u)
            , c = a.value
      } catch (e) {
          return void n(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, o)
  }
  function D(e) {
      return function() {
          var t = this
            , n = arguments;
          return new Promise((function(r, o) {
              var i = e.apply(t, n);
              function u(e) {
                  B(i, r, o, u, a, "next", e)
              }
              function a(e) {
                  B(i, r, o, u, a, "throw", e)
              }
              u(void 0)
          }
          ))
      }
  }
  function q(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var W = function(e) {
      return e = e || {},
      F.Token && (e.credentials = "include",
      e.withCredentials = !0,
      e.headers = e.headers || {},
      e.headers.Authorization = "Bearer ".concat(F.Token)),
      e
  }
    , H = function(e) {
      return new Promise((function(t) {
          if ((e = e || {}).headers = e.headers || {},
          F.CSRFToken && F.CSRFToken.token && F.CSRFToken.expiresAfterUtc) {
              var n = new Date(F.CSRFToken.expiresAfterUtc);
              J() >= n ? F.SaveCSRFTokenAsync().then((function() {
                  e.headers["x-csrf-token"] = F.CSRFToken.token,
                  t(e)
              }
              )) : (e.headers["x-csrf-token"] = F.CSRFToken.token,
              t(e))
          } else
              t(e)
      }
      ))
  }
    , J = function() {
    var e = new Date;
    return Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
  }
    , K = function() {
      function e() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e)
      }
      var t, n, r, o;
      return t = e,
      null,
      n = [{
          key: "Get",
          value: function(t) {
              return e.RefreshTokensIfNeededAsync().then((function() {
                  return new Promise((function(e, n) {
                      var r = W();
                      fetch(t, r).then((function(t) {
                          t.ok ? e(t.json()) : 401 === t.status ? F.SignIn() : n(t)
                      }
                      ))
                  }
                  ))
              }
              ))
          }
      }, {
          key: "Post",
          value: (o = D(regeneratorRuntime.mark((function t(n, r, o) {
              var i, u, a, c = arguments;
              return regeneratorRuntime.wrap((function(t) {
                  for (; ; )
                      switch (t.prev = t.next) {
                      case 0:
                          return i = !(c.length > 3 && void 0 !== c[3]) || c[3],
                          t.next = 3,
                          e.RefreshTokensIfNeededAsync();
                      case 3:
                          return u = W({
                              method: "POST",
                              body: r
                          }),
                          o && Object.keys(o).forEach((function(e) {
                              u.headers[e] = o[e]
                          }
                          )),
                          t.next = 7,
                          H(u);
                      case 7:
                          return u = t.sent,
                          t.prev = 8,
                          t.next = 11,
                          fetch(n, u);
                      case 11:
                          if (!(a = t.sent).ok) {
                              t.next = 16;
                              break
                          }
                          return t.abrupt("return", a.json());
                      case 16:
                          return t.next = 18,
                          a.json();
                      case 18:
                          throw t.sent;
                      case 20:
                          t.next = 31;
                          break;
                      case 22:
                          if (t.prev = 22,
                          t.t0 = t.catch(8),
                          !i || !t.t0.SecondaryStatusCode || "CSRF" !== t.t0.SecondaryStatusCode) {
                              t.next = 30;
                              break
                          }
                          return t.next = 27,
                          F.SaveCSRFTokenAsync();
                      case 27:
                          return t.abrupt("return", this.Post(n, r, o, !1));
                      case 30:
                          throw t.t0;
                      case 31:
                      case "end":
                          return t.stop()
                      }
              }
              ), t, this, [[8, 22]])
          }
          ))),
          function(e, t, n) {
              return o.apply(this, arguments)
          }
          )
      }, {
          key: "RefreshTokensIfNeededAsync",
          value: (r = D(regeneratorRuntime.mark((function e() {
              var t, n;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (t = new Date,
                          n = F.ExpiresAfter,
                          !(t > n)) {
                              e.next = 5;
                              break
                          }
                          return e.next = 5,
                          F.RefreshTokensAsync();
                      case 5:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          function() {
              return r.apply(this, arguments)
          }
          )
      }],
      n && q(t, n),
      e
  }();
  function V(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var z = function() {
      function e(t) {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e),
          this._componentName = t,
          this._locale = e.GetCurrentLocale();
          var r = new n;
          return this._appRoot = r.GetAppRoot(),
          fetch("".concat(this._appRoot, "/Api/ConfigurationApi/GetLabels?componentName=").concat(this._componentName, "&locale=").concat(this._locale), {
              credentials: "include",
              mode: "cors",
              withCredentials: !0
          }).then((function(e) {
              return e.json()
          }
          ))
      }
      var t, r;
      return t = e,
      r = [{
          key: "GetCurrentLocale",
          value: function() {
              return localStorage.userLocale || "en"
          }
      }],
      null && V(t.prototype, null),
      r && V(t, r),
      e
  }();
  function Y(e, t, n, r, o, i, u) {
      try {
          var a = e[i](u)
            , c = a.value
      } catch (e) {
          return void n(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, o)
  }
  function Q(e) {
      return function() {
          var t = this
            , n = arguments;
          return new Promise((function(r, o) {
              var i = e.apply(t, n);
              function u(e) {
                  Y(i, r, o, u, a, "next", e)
              }
              function a(e) {
                  Y(i, r, o, u, a, "throw", e)
              }
              u(void 0)
          }
          ))
      }
  }
  function X(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  var Z = function() {
      function e() {
          !function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, e)
      }
      var t, n, o, i, u, a;
      return t = e,
      null,
      n = [{
          key: "GetCurrentUser",
          value: (a = Q(regeneratorRuntime.mark((function e() {
              var t, n, o, i, u, a;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          new z("mpp-user-service");
                      case 2:
                          return t = e.sent,
                          n = t.notAuthenticatedMessage,
                          o = t.userNotFound,
                          i = r.GetAppRoot(),
                          u = "".concat(i, "/Api/Auth/User"),
                          a = new Promise((function(e, t) {
                              K.Get(u).then((function(r) {
                                  r ? e(r) : (console.info(n),
                                  t(o))
                              }
                              ), (function() {
                                  console.info(n),
                                  t(o)
                              }
                              ))
                          }
                          )),
                          e.next = 10,
                          a;
                      case 10:
                          return e.abrupt("return", e.sent);
                      case 11:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          function() {
              return a.apply(this, arguments)
          }
          )
      }, {
          key: "GetCurrentUserAttributes",
          value: (u = Q(regeneratorRuntime.mark((function e() {
              var t, n, o;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return t = r.GetAppRoot(),
                          n = "".concat(t, "/Api/Attributes/ContactAttributes"),
                          o = new Promise((function(e, t) {
                              K.Get(n).then((function(n) {
                                  n ? e(n) : t(0)
                              }
                              ), (function() {
                                  t(0)
                              }
                              ))
                          }
                          )),
                          e.next = 5,
                          o;
                      case 5:
                          return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          function() {
              return u.apply(this, arguments)
          }
          )
      }, {
          key: "GetAllActiveAttributes",
          value: (i = Q(regeneratorRuntime.mark((function e() {
              var t, n, o;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return t = r.GetAppRoot(),
                          n = "".concat(t, "/Api/Attributes/Available"),
                          o = new Promise((function(e, t) {
                              K.Get(n).then((function(n) {
                                  n ? e(n) : t(0)
                              }
                              ), (function() {
                                  t(0)
                              }
                              ))
                          }
                          )),
                          e.next = 5,
                          o;
                      case 5:
                          return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          function() {
              return i.apply(this, arguments)
          }
          )
      }, {
          key: "SaveUserAttributes",
          value: (o = Q(regeneratorRuntime.mark((function e(t) {
              var n, o, i;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return n = r.GetAppRoot(),
                          o = "".concat(n, "/Api/Attributes"),
                          i = new Promise((function(e, n) {
                              K.Post(o, t, {
                                  "Content-Type": "application/json"
                              }).then((function() {
                                  e(1)
                              }
                              ), (function(e) {
                                  n(e)
                              }
                              ))
                          }
                          )),
                          e.next = 5,
                          i;
                      case 5:
                          return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          ))),
          function(e) {
              return o.apply(this, arguments)
          }
          )
      }],
      n && X(t, n),
      e
  }();
  function ee(e) {
      return ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ,
      ee(e)
  }
  function te(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                  if ("string" == typeof e)
                      return ne(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ne(e, t) : void 0
              }
          }(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var r = 0
                , o = function() {};
              return {
                  s: o,
                  n: function() {
                      return r >= e.length ? {
                          done: !0
                      } : {
                          done: !1,
                          value: e[r++]
                      }
                  },
                  e: function(e) {
                      throw e
                  },
                  f: o
              }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var i, u = !0, a = !1;
      return {
          s: function() {
              n = e[Symbol.iterator]()
          },
          n: function() {
              var e = n.next();
              return u = e.done,
              e
          },
          e: function(e) {
              a = !0,
              i = e
          },
          f: function() {
              try {
                  u || null == n.return || n.return()
              } finally {
                  if (a)
                      throw i
              }
          }
      }
  }
  function ne(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
          r[n] = e[n];
      return r
  }
  function re(e, t, n, r, o, i, u) {
      try {
          var a = e[i](u)
            , c = a.value
      } catch (e) {
          return void n(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, o)
  }
  function oe(e) {
      return function() {
          var t = this
            , n = arguments;
          return new Promise((function(r, o) {
              var i = e.apply(t, n);
              function u(e) {
                  re(i, r, o, u, a, "next", e)
              }
              function a(e) {
                  re(i, r, o, u, a, "throw", e)
              }
              u(void 0)
          }
          ))
      }
  }
  function ie(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function ue(e, t) {
      return ue = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t,
          e
      }
      ,
      ue(e, t)
  }
  function ae(e) {
      return ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      }
      ,
      ae(e)
  }
  var ce = function(e) {
      !function(e, t) {
          if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }),
          t && ue(e, t)
      }(c, e);
      var t, n, r, o, i, u, a = (i = c,
      u = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
              return !1;
          if (Reflect.construct.sham)
              return !1;
          if ("function" == typeof Proxy)
              return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
              ))),
              !0
          } catch (e) {
              return !1
          }
      }(),
      function() {
          var e, t, n, r = ae(i);
          if (u) {
              var o = ae(this).constructor;
              e = Reflect.construct(r, arguments, o)
          } else
              e = r.apply(this, arguments);
          return t = this,
          !(n = e) || "object" !== ee(n) && "function" != typeof n ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(t) : n
      }
      );
      function c() {
          return function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          }(this, c),
          a.call(this)
      }
      return t = c,
      n = [{
          key: "LoadChildren",
          value: (o = oe(regeneratorRuntime.mark((function e() {
              var t, n, r, o;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (this._$securedMenuItemList) {
                              for (; this._$securedMenuItemList.children.length > 2; )
                                  this._$securedMenuItemList.removeChild(this._$securedMenuItemList.lastChild);
                              t = te(this.children);
                              try {
                                  for (t.s(); !(n = t.n()).done; )
                                      r = n.value,
                                      (o = document.createElement("li")).setAttribute("class", "mppw-login--list-item"),
                                      o.appendChild(r.cloneNode(!0)),
                                      this._$securedMenuItemList.appendChild(o.cloneNode(!0))
                              } catch (e) {
                                  t.e(e)
                              } finally {
                                  t.f()
                              }
                          }
                      case 1:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, this)
          }
          ))),
          function() {
              return o.apply(this, arguments)
          }
          )
      }, {
          key: "createI18N",
          value: function() {
              return new z("mpp-user-login")
          }
      }, {
          key: "connectedCallback",
          value: (r = oe(regeneratorRuntime.mark((function e() {
              var t, n = this;
              return regeneratorRuntime.wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.prev = 0,
                          e.next = 3,
                          this.createI18N();
                      case 3:
                          t = e.sent,
                          e.next = 10;
                          break;
                      case 6:
                          return e.prev = 6,
                          e.t0 = e.catch(0),
                          e.t0.toString().startsWith("TypeError") ? this._root.innerHTML = "Unable to connect.  Please check Permitted URLs." : this._root.innerHTML = "".concat(e.t0),
                          e.abrupt("return");
                      case 10:
                          this._root.innerHTML = '\n            <link href="'.concat(this._appRoot, '/Content/mppw-widgetstyles.css" rel="stylesheet" type="text/css" />\n            <div class="mppw-component-container mppw-login">\n                <a href="#" id="loginButton" class="mppw-loggedout--username" style="display: none">\n                    <div class="mppw-icon-unlock"></div>\n                    <span class="mppw-loggedout--label">').concat(t.loginButtonLabel, '</span>\n                </a>\n                <a href="#" id="userNameContainer" class="mppw-login--container" style="display: none;">\n                    <div id="userImage" class="mppw-user-photo"></div>\n                    <div id="userDisplayName" class="mppw-login--username">').concat(t.loginButtonLabel, '</div>\n                </a>\n                <div id="userMenu" class="mppw-login--dropdown" style="display: none;">\n                    <div id="securedMenuItems" style="display: none;">\n                        <ul class="mppw-login--list" id="securedMenuItemList">\n                            <li class="mppw-login--list-item"><a id="logoutButton">').concat(t.logoutButtonLabel, '</a></li>\n                            <li class="mppw-login--list-item"><a id="userAccountLink" href="#">').concat(t.userAccountLabel, "</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        "),
                          this._$userNameContainer = this._root.querySelector("#userNameContainer"),
                          this._$userImage = this._root.querySelector("#userImage"),
                          this._$userDisplayName = this._root.querySelector("#userDisplayName"),
                          this._$userMenu = this._root.querySelector("#userMenu"),
                          this._$securedMenuItems = this._root.querySelector("#securedMenuItems"),
                          this._$securedMenuItemList = this._root.querySelector("#securedMenuItemList"),
                          this._$loginButton = this._root.querySelector("#loginButton"),
                          this._$logoutButton = this._root.querySelector("#logoutButton"),
                          this._$createAccountLink = this._root.querySelector("#createAccountLink"),
                          this._$userAccountLink = this._root.querySelector("#userAccountLink"),
                          this.LoadChildren(),
                          this._$loginButton.addEventListener("click", (function(e) {
                              e.preventDefault(),
                              F.SignIn()
                          }
                          )),
                          this._$logoutButton.addEventListener("click", (function(e) {
                              e.preventDefault(),
                              F.SignOut()
                          }
                          )),
                          this._$userNameContainer.addEventListener("click", (function(e) {
                              e.preventDefault();
                              var t = n._$userMenu.style.display;
                              n._$userMenu.style.display = "block" === t ? "none" : "block"
                          }
                          )),
                          Z.GetCurrentUser().then((function(e) {
                              return n.SetDisplayMode(e)
                          }
                          ), (function() {
                              return n.SetDisplayMode()
                          }
                          )),
                          new MutationObserver((function() {
                              n.LoadChildren()
                          }
                          )).observe(this, {
                              childList: !0,
                              subtree: !0
                          });
                      case 28:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, this, [[0, 6]])
          }
          ))),
          function() {
              return r.apply(this, arguments)
          }
          )
      }, {
          key: "SetDisplayMode",
          value: function(e) {
              e ? (e.imageUrl ? this._$userImage.setAttribute("style", "background-image: url('".concat(e.imageUrl, "?thumbnail=true');")) : (this._$userImage.classList.remove("mppw-icon-unlock"),
              this._$userImage.classList.add("mppw-icon-user-circle")),
              this._$userNameContainer.style.display = "",
              e.user && (this._$userDisplayName.innerHTML = (e.user.nickname || e.user.firstName) + " " + e.user.lastName,
              this._$securedMenuItems.style.display = "",
              this._$userAccountLink.setAttribute("href", e.profileUrl + "?profile")),
              this._$loginButton.style.display = "none") : (this._$userImage.classList.remove("mppw-icon-user-circle"),
              this._$userImage.classList.remove("mppw-user-photo"),
              this._$userImage.classList.add("mppw-icon-unlock"),
              this._$securedMenuItems.style.display = "none",
              this._$userNameContainer.style.display = "none",
              this._$loginButton.style.display = "")
          }
      }],
      n && ie(t.prototype, n),
      c
  }(p);
  ce.registerComponent("mpp-user-login", ce)
}
)();
//# sourceMappingURL=UserLogin.js.map
