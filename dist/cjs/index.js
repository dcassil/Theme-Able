'use strict';

var React$1 = require('react');

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function getThemeData() {
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(testData);
        }, 100);
    });
    return promise;
}
function getComponentStyles$1(_a) {
    var themeItemData = _a.themeItemData;
    if (themeItemData === undefined) {
        return "";
    }
    return buildStylesString(themeItemData);
}
function buildStylesString(itemData) {
    var rulesString = "";
    if (itemData.instanceId !== undefined) {
        rulesString = "[data-theme-instanceId=".concat(itemData.instanceId, "] { ");
    } else {
        rulesString = "[data-theme-tag=".concat(itemData.tag, "]");
    }
    itemData.styles.forEach(function (style) {
        rulesString += "".concat(style.name, ": ").concat(style.value, " !important; ");
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

function NextComponentWrapper(_a) {
    var instanceId = _a.instanceId;
        _a.tag;
        var children = _a.children;
    var themeItemData = getThemeData().then(function (data) {
        return data.targets.find(function (themeItem) {
            return themeItem.instanceId === instanceId;
        });
    });
    return React.createElement(React.Fragment, null, React.createElement("style", { jsx: true }, getComponentStyles$1(themeItemData)), children);
}

function ComponentWrapper(_a) {
    var instanceId = _a.instanceId,
        children = _a.children;
    var _b = React$1.useState(),
        themeItemData = _b[0],
        setThemeItemData = _b[1];
    React$1.useEffect(function () {
        getThemeData().then(function (resData) {
            setThemeItemData(resData.find(function (themeItem) {
                return themeItem.instanceId === instanceId;
            }));
        });
    }, []);
    return React$1.createElement(React$1.Fragment, null, React$1.createElement("style", { jsx: true }, getComponentStyles(themeItemData)), children);
}

function WithTheme(Child) {
    return function (props) {
        var Wrapper = props.ssr ? NextComponentWrapper : ComponentWrapper;
        return function () {
            return React$1.createElement(Wrapper, { instanceId: props.instanceId, tag: props.tag }, React$1.createElement(Child, __assign({}, props)));
        };
    };
}

exports.WithTheme = WithTheme;
//# sourceMappingURL=index.js.map
