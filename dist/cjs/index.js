'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function getThemeData() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var promise;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(testData["userThemeRed"]);
                            }, 100);
                        });

                    case 2:
                        promise = _context.sent;
                        return _context.abrupt("return", promise);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}
function getComponentStyles(_ref) {
    var themeItemData = _ref.themeItemData;

    if (themeItemData === undefined) {
        return "";
    }
    return buildStylesString(themeItemData);
}
function buildStylesString(itemData) {
    var rulesString = "";
    if (itemData.instanceId !== undefined) {
        rulesString = "[data-theme-instanceId=" + itemData.instanceId + "] { ";
    } else {
        rulesString = "[data-theme-tag=" + itemData.tag + "]";
    }
    itemData.styles.forEach(function (style) {
        rulesString += style.name + ": " + style.value + " !important; ";
    });
    rulesString += "}";
    return rulesString;
}
var testData = {
    userThemeRed: {
        name: "User theme red",
        targets: [{
            tag: "textInput",
            instanceId: "button1",
            styles: [{ name: "color", value: "red" }]
        }]
    }
};
Object.assign({}, testData);
function setThemeData(newData) {
    Object.assign({}, newData);
}

function NextComponentWrapper(_ref) {
    var instanceId = _ref.instanceId;
        _ref.tag;
        var children = _ref.children;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var themeItemData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getThemeData();

                    case 2:
                        _context.t0 = function (themeItem) {
                            return themeItem.instanceId === instanceId;
                        };

                        themeItemData = _context.sent.targets.find(_context.t0);
                        return _context.abrupt("return", jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("style", Object.assign({ scoped: true }, { children: getComponentStyles({ themeItemData: themeItemData }) })), children] }));

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function ComponentWrapper(_ref) {
    var instanceId = _ref.instanceId,
        children = _ref.children;

    var _useState = react.useState(),
        _useState2 = slicedToArray(_useState, 2),
        themeItemData = _useState2[0],
        setThemeItemData = _useState2[1];

    react.useEffect(function () {
        getThemeData().then(function (resData) {
            setThemeItemData(resData.targets.find(function (themeTarget) {
                return themeTarget.instanceId === instanceId;
            }));
        });
    }, []);
    return jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("style", Object.assign({ scoped: true }, { children: getComponentStyles({ themeItemData: themeItemData }) })), children] });
}

function WithTheme(Child) {
    return function (props) {
        var Wrapper = props.ssr ? NextComponentWrapper : ComponentWrapper;
        return function () {
            return jsxRuntime.jsx(Wrapper, Object.assign({ instanceId: props.instanceId, tag: props.tag }, { children: jsxRuntime.jsx(Child, Object.assign({}, props, {
                    "data-theme-tag": props.tag,
                    "data-theme-id": props.instanceId
                })) }));
        };
    };
}

exports.WithTheme = WithTheme;
exports.setThemeData = setThemeData;
//# sourceMappingURL=index.js.map
