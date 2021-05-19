'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var res = 0;
!function () {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(1);
    }, 1000);
  }).then(function (result) {
    alert(1, result);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve(result * 2);
      }, 2000);
    });
  }).then(function (result) {
    alert(2, result);
    return new Promise(function (resolve, reject) {
      var rand = Math.random();
      console.log(rand);
      qwe;
      var value = (rand * 1000).toFixed();
      resolve(result * value);
    });
  }).then(function (result) {
    return alert(result);
  })["catch"](function (error) {
    console.log('Error: ', error);
  });
};
!function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;

      script.onload = function () {
        return resolve(script);
      };

      script.onerror = function () {
        return reject(new Error("Wasn't able to load ".concat(script)));
      };

      document.head.append(script);
    });
  }

  loadScript('other1.js').then(function (script) {
    return loadScript('other2.js');
  }).then(function (script) {
    return loadScript('other3.js');
  }).then(function (script) {
    one();
    two();
    three();
  });
}; //()

var Thenable =
/*#__PURE__*/
function () {
  function Thenable(value) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1000';

    _classCallCheck(this, Thenable);

    this.value = value;
    this.delay = delay;
  }

  _createClass(Thenable, [{
    key: "then",
    value: function then(resolve, reject) {
      var _this = this;

      var condition = true;
      if (condition) setTimeout(function () {
        return resolve(_this.value);
      }, this.delay);else reject(new Error('something went wrong...'));
    }
  }]);

  return Thenable;
}();

!function () {
  var p = new Promise(function (resolve) {
    return resolve(100);
  }).then(function (result) {
    console.log(p);
    return new Thenable(result * 2);
  }, function (error) {
    alert('Error:' + error);
  }).then(function (result) {
    console.log(result);
    return new Thenable(result * 10);
  }).then(function (result) {
    console.log(p);
    console.log(result);
    setTimeout(function () {
      return 20000;
    });
  });
}; //()

function getGithubAvatarImage() {
  if (getGithubAvatarImage.invoked == true) return console.log('invoked!');
  var spinner = document.getElementById('spinner');
  spinner.style.visibility = 'visible';
  return fetch('/data.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    getGithubAvatarImage.invoked = true;
    console.log(data);
    return fetch("http://api.github.com/users/".concat(data.user.name));
  }).then(function (response) {
    return response.json();
  }).then(function (githubUser) {
    var img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'github-user-image';

    img.onload = function () {
      spinner.style.visibility = 'hidden';
    };

    document.getElementsByClassName('content')[0].append(img);
    setTimeout(function () {
      img.remove();
      getGithubAvatarImage.invoked = false;
    }, 4000);
  })["catch"](alert);
}

getGithubAvatarImage.invoked = false;