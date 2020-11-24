/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/.ts/V3/app.ts":
/*!***************************!*\
  !*** ./www/.ts/V3/app.ts ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var filter_1 = __webpack_require__(/*! ./filter */ "./www/.ts/V3/filter.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var network_1 = __webpack_require__(/*! ./network */ "./www/.ts/V3/network.ts");
var inappbrowser_1 = __webpack_require__(/*! ./inappbrowser */ "./www/.ts/V3/inappbrowser.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var theme_1 = __webpack_require__(/*! ./theme */ "./www/.ts/V3/theme.ts");
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
__webpack_require__(/*! ./events */ "./www/.ts/V3/events.ts");
function onDeviceReady() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    calendar_1.Calendar.init();
                    return [4 /*yield*/, storage_1.Storage.init()];
                case 1:
                    _a.sent();
                    theme_1.Theme.set(storage_1.Storage.get(proxy_1.Proxy.storage.THEME));
                    return [4 /*yield*/, filter_1.Filter.loadFilter(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))];
                case 2:
                    _a.sent();
                    calendar_1.Calendar.drawFromCache(day_1.Day.today());
                    return [4 /*yield*/, startInappBrowser()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, calendar_1.Calendar.draw(day_1.Day.today())];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error('something bad happened !');
                    console.error(err_1);
                    notification_1.Notification.show('majorError');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function startInappBrowser() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, network_1.Network.whenOnline()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inappbrowser_1.InappBrowser.load(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, inappbrowser_1.InappBrowser.injectScript()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function init() {
    document.addEventListener('deviceready', onDeviceReady, false);
}
function restartInappBrowser() {
    return startInappBrowser();
}
;
var inst;
function createInstance() {
    inst = { init: init, restartInappBrowser: restartInappBrowser };
}
function App() {
    if (!inst)
        createInstance();
    return inst;
}
exports.App = App;


/***/ }),

/***/ "./www/.ts/V3/calendar.ts":
/*!********************************!*\
  !*** ./www/.ts/V3/calendar.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Calendar = void 0;
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var communication_1 = __webpack_require__(/*! ./communication */ "./www/.ts/V3/communication.ts");
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var network_1 = __webpack_require__(/*! ./network */ "./www/.ts/V3/network.ts");
var calendarDrawer_1 = __webpack_require__(/*! ./calendarDrawer */ "./www/.ts/V3/calendarDrawer.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function loadCache() {
    var cacheStr = storage_1.Storage.get(proxy_1.Proxy.storage.SAVED_DAYS);
    var cache;
    try {
        cache = JSON.parse(cacheStr);
    }
    catch (e) {
        console.warn('days cache is unset or invalid.');
        cache = {};
    }
    return cache;
}
function saveCache(cache) {
    storage_1.Storage.set(proxy_1.Proxy.storage.SAVED_DAYS, JSON.stringify(cache));
}
// -------------------------
var waitForData; // inappbrowser is loading
var cache;
var storage;
var pendingRequest;
var currentDay;
function updateNavigationButtons(dateString) {
    if (!waitForData && network_1.Network.online) {
        proxy_1.Proxy.$BUTTON_PREV.removeClass('disabled');
        proxy_1.Proxy.$BUTTON_NEXT.removeClass('disabled');
        return;
    }
    var prevDay = day_1.Day.add(dateString, -1);
    var nextDay = day_1.Day.add(dateString, 1);
    if (!(prevDay in cache) && !(dateString in cache)) {
        proxy_1.Proxy.$BUTTON_PREV.addClass('disabled');
    }
    else
        proxy_1.Proxy.$BUTTON_PREV.removeClass('disabled');
    if (!(nextDay in cache) && !(dateString in cache)) {
        proxy_1.Proxy.$BUTTON_NEXT.addClass('disabled');
    }
    else
        proxy_1.Proxy.$BUTTON_NEXT.removeClass('disabled');
}
function registerWeek(mini) {
    var dateString = mini.date; // date is a monday
    for (var i in mini.days) {
        storage[dateString] = mini.days[i];
        cache[dateString] = mini.days[i];
        dateString = day_1.Day.add(dateString, 1);
    }
    saveCache(cache);
}
function handleReceivedWeek(data) {
    registerWeek(data);
    handlePendingRequest();
}
function addPendingRequest(request) {
    cancelPendingRequest();
    pendingRequest = request;
    notification_1.Notification.show('loading');
    handlePendingRequest();
}
function cancelPendingRequest() {
    // if ('reject' in pendingRequest) pendingRequest.reject(new Error(P.err.REQUEST_CANCELLED)); // TODO: deprecated
    finishPendingRequest();
}
function finishPendingRequest() {
    pendingRequest = {};
    notification_1.Notification.hide('loading');
}
function handlePendingRequest() {
    return __awaiter(this, void 0, void 0, function () {
        var week, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!pendingRequest || !('dateString' in pendingRequest))
                        return [2 /*return*/]; // no pending request
                    if (!(pendingRequest.dateString in storage)) return [3 /*break*/, 1];
                    calendarDrawer_1.CalendarDrawer.draw(pendingRequest.dateString, cache);
                    pendingRequest.resolve();
                    finishPendingRequest();
                    return [3 /*break*/, 9];
                case 1:
                    if (!waitForData) return [3 /*break*/, 2];
                    console.warn('calendar update: already waiting for data');
                    return [3 /*break*/, 9];
                case 2:
                    console.log("hello");
                    waitForData = true;
                    week = void 0;
                    return [4 /*yield*/, network_1.Network.whenOnline()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, communication_1.Communication.requestWeek(pendingRequest.dateString)];
                case 5:
                    week = _a.sent();
                    console.log("here");
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    handleError(err_1);
                    waitForData = false;
                    return [2 /*return*/];
                case 7:
                    waitForData = false;
                    return [4 /*yield*/, handleReceivedWeek(week)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
function handleError(err) {
    if (err.message === proxy_1.Proxy.err.BUTTON_NOT_FOUND) {
        console.error(err);
        notification_1.Notification.show('dateError', { duration: 3000 });
        cancelPendingRequest();
    }
    else if (err.message === proxy_1.Proxy.err.WEBVIEW_NOT_LOADED) {
        console.error(err);
        notification_1.Notification.show('calendarError', { duration: 3000 });
    }
    else if (err.message === proxy_1.Proxy.err.CALENDAR_ERROR) {
        console.error(err);
        notification_1.Notification.show('calendarError', { duration: 3000 });
    }
    else if (err.message === proxy_1.Proxy.err.REQUEST_CANCELLED) {
        console.warn('A request was cancelled');
    }
    else {
        console.error(err);
        notification_1.Notification.show('majorError');
    }
}
function drawFromCache(dateString) {
    if (dateString in cache) {
        calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
    }
}
function draw(dateString) {
    currentDay = dateString;
    return new Promise(function (resolve, reject) {
        if (dateString in storage) {
            cancelPendingRequest();
            calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
            resolve();
        }
        else {
            addPendingRequest({ dateString: dateString, resolve: resolve, reject: reject });
            if (dateString in cache) {
                calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
            }
            else {
                calendarDrawer_1.CalendarDrawer.draw(dateString); // actually draws nothing
                updateNavigationButtons(dateString);
            }
        }
    })
        .catch(handleError); // pending request was probably cancelled
}
// -------------------------------------
function init() {
    waitForData = false;
    cache = loadCache();
    storage = {};
    pendingRequest = {};
    currentDay = null;
}
exports.Calendar = {
    init: init,
    draw: draw,
    drawFromCache: drawFromCache,
    getCurrentDay: function () {
        if (!currentDay)
            throw new Error('calendar has no current day');
        return currentDay;
    },
};


/***/ }),

/***/ "./www/.ts/V3/calendarDrawer.ts":
/*!**************************************!*\
  !*** ./www/.ts/V3/calendarDrawer.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarDrawer = void 0;
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var filter_1 = __webpack_require__(/*! ./filter */ "./www/.ts/V3/filter.ts");
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function drawLines() {
    var n_hours = proxy_1.Proxy.END_HOUR - proxy_1.Proxy.START_HOUR;
    for (var i = 0; i < n_hours; i++) {
        var hour = i + proxy_1.Proxy.START_HOUR;
        var $hour = $(proxy_1.Proxy.html.HOUR);
        $hour.html(hour + ' h');
        $hour.css({
            gridRow: (i * 4 + 1) + ""
        });
        proxy_1.Proxy.$COURSE_CONTAINER.append($hour);
        var $line = $(proxy_1.Proxy.html.HOUR_LINE);
        $line.css({
            gridRow: (i * 4 + 1) + ""
        });
        proxy_1.Proxy.$COURSE_CONTAINER.append($line);
    }
}
function expandData(mini) {
    var expanded = [];
    for (var i in mini) {
        expanded[i] = {
            start: { hour: mini[i][0][0], minute: mini[i][0][1] },
            end: { hour: mini[i][1][0], minute: mini[i][1][1] },
            title: mini[i][2], background: mini[i][3],
            unavailable: false, blacklisted: false
        };
        if (expanded[i].title === null) {
            expanded[i].title = 'FERMÉ';
            expanded[i].unavailable = true;
        }
        else {
            expanded[i].blacklisted = filter_1.Filter.filterElement(expanded[i]);
        }
    }
    expanded.sort(function (a, b) { return !a.blacklisted && b.blacklisted ? -1 : 0; }); // not blacklisted comes first (1 <=> b comes first)
    return expanded;
}
function createMatrix() {
    var matrix = [];
    var n_hours = proxy_1.Proxy.END_HOUR - proxy_1.Proxy.START_HOUR;
    for (var i = 0; i < 4 * n_hours; i++) {
        matrix[i] = [];
    }
    return matrix;
}
function getEmptySpace(matrix, el) {
    var startRow = (el.start.hour - proxy_1.Proxy.START_HOUR) * 4 + el.start.minute / 15;
    var endRow = (el.end.hour - proxy_1.Proxy.START_HOUR) * 4 + el.end.minute / 15;
    var width = el.blacklisted ? 1 : 2;
    var y = 0;
    while (matrix[startRow][y] === true)
        y++;
    var checkYOffset = function (y) {
        for (var j = y; j < y + width; j++) {
            for (var i = startRow; i < endRow; i++) {
                if (typeof matrix[i][j] === 'undefined')
                    matrix[i][j] = false;
                if (matrix[i][j] === true)
                    return false;
            }
        }
        return true;
    };
    while (!checkYOffset(y))
        y++;
    for (var j = y; j < y + width; j++) { // fill empty space
        for (var i = startRow; i < endRow; i++) {
            matrix[i][j] = true;
        }
    }
    return {
        x1: y,
        x2: y + width,
        y1: startRow + 1,
        y2: endRow + 1
    };
}
function collides($course1, $course2) {
    var start = parseInt($course1.css('grid-row-start'));
    var end = parseInt($course1.css('grid-row-end'));
    var otherStart = parseInt($course2.css('grid-row-start'));
    var otherEnd = parseInt($course2.css('grid-row-end'));
    return (start < otherEnd && otherStart < end);
}
function landscapeXalign($day) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
    var placed = [];
    var $courses = $day.children();
    $courses.data('x', 0);
    $courses.data('xMax', 0);
    try {
        // find x
        for (var $courses_1 = __values($courses), $courses_1_1 = $courses_1.next(); !$courses_1_1.done; $courses_1_1 = $courses_1.next()) {
            var course1 = $courses_1_1.value;
            var $course1 = $(course1);
            var x1 = $course1.data('x');
            try {
                for (var placed_1 = (e_2 = void 0, __values(placed)), placed_1_1 = placed_1.next(); !placed_1_1.done; placed_1_1 = placed_1.next()) {
                    var course2 = placed_1_1.value;
                    var $course2 = $(course2);
                    var x2 = $course2.data('x');
                    if (x1 === x2 && collides($course1, $course2)) {
                        x1++;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (placed_1_1 && !placed_1_1.done && (_b = placed_1.return)) _b.call(placed_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            $course1.data('x', x1);
            placed.push(course1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if ($courses_1_1 && !$courses_1_1.done && (_a = $courses_1.return)) _a.call($courses_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        // find xMax
        for (var $courses_2 = __values($courses), $courses_2_1 = $courses_2.next(); !$courses_2_1.done; $courses_2_1 = $courses_2.next()) {
            var course1 = $courses_2_1.value;
            var $course1 = $(course1);
            var xMax1 = $course1.data('x');
            try {
                for (var $courses_3 = (e_4 = void 0, __values($courses)), $courses_3_1 = $courses_3.next(); !$courses_3_1.done; $courses_3_1 = $courses_3.next()) {
                    var course2 = $courses_3_1.value;
                    var $course2 = $(course2);
                    var xMax2 = $course2.data('x');
                    if (collides($course1, $course2)) {
                        xMax1 = Math.max(xMax1, xMax2);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if ($courses_3_1 && !$courses_3_1.done && (_d = $courses_3.return)) _d.call($courses_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
            $course1.data('xMax', xMax1);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if ($courses_2_1 && !$courses_2_1.done && (_c = $courses_2.return)) _c.call($courses_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    try {
        for (var $courses_4 = __values($courses), $courses_4_1 = $courses_4.next(); !$courses_4_1.done; $courses_4_1 = $courses_4.next()) {
            var course = $courses_4_1.value;
            var $course = $(course);
            var x = $course.data('x');
            var xMax = $course.data('xMax') + 1;
            $course.css({
                'left': 100 / xMax * x + '%',
                'width': 'calc(' + 100 / xMax + '% + 1px)' // 1px for the css border
            });
            if (x + 1 === xMax) {
                $course.css({ 'width': 'calc(' + 100 / xMax + '%)' });
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if ($courses_4_1 && !$courses_4_1.done && (_e = $courses_4.return)) _e.call($courses_4);
        }
        finally { if (e_5) throw e_5.error; }
    }
}
function drawDate(dateString) {
    var d = new Date(dateString); // todo move to Day and proxy
    var days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    var str = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];
    proxy_1.Proxy.$DATE.html(str);
}
function drawCoursesPortrait(day) {
    var e_6, _a;
    var matrix = createMatrix();
    var maxColumn = 3;
    try {
        for (var day_2 = __values(day), day_2_1 = day_2.next(); !day_2_1.done; day_2_1 = day_2.next()) {
            var course = day_2_1.value;
            var $course = $(proxy_1.Proxy.html.COURSE);
            var pos = getEmptySpace(matrix, course);
            $course.css({
                'grid-row-start': pos.y1 + "",
                'grid-row-end': pos.y2 + "",
                'grid-column-start': pos.x1 + 2 + "",
                'grid-column-end': pos.x2 + 2 + ""
            });
            maxColumn = Math.max(pos.x2 + 2, maxColumn);
            if (course.blacklisted)
                $course.addClass('disabled');
            else
                $course.css('background', course.background);
            if (course.unavailable)
                $course.addClass('unavailable');
            var $textWrapper = $(proxy_1.Proxy.html.COURSE_CONTENT_WRAPPER);
            var $textContent = $(proxy_1.Proxy.html.COURSE_CONTENT);
            $textContent.html(course.title);
            $textWrapper.append($textContent);
            $course.append($textWrapper);
            proxy_1.Proxy.$COURSE_CONTAINER.append($course);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (day_2_1 && !day_2_1.done && (_a = day_2.return)) _a.call(day_2);
        }
        finally { if (e_6) throw e_6.error; }
    }
    $(proxy_1.Proxy.$.HOUR_LINES).css('grid-column-end', maxColumn + "");
}
function drawCoursesLandscape(day, dayNumber) {
    var e_7, _a;
    var $day = $(proxy_1.Proxy.html.LANDSCAPE_DAY);
    $day.css({
        gridColumn: dayNumber + 1 + "",
    });
    proxy_1.Proxy.$COURSE_CONTAINER.append($day);
    try {
        for (var day_3 = __values(day), day_3_1 = day_3.next(); !day_3_1.done; day_3_1 = day_3.next()) {
            var course = day_3_1.value;
            if (course.blacklisted)
                continue;
            var $course = $(proxy_1.Proxy.html.COURSE);
            if (course.unavailable)
                $course.addClass('unavailable');
            var startRow = (course.start.hour - proxy_1.Proxy.START_HOUR) * 4 + course.start.minute / 15;
            var endRow = (course.end.hour - proxy_1.Proxy.START_HOUR) * 4 + course.end.minute / 15;
            $course.css({
                background: course.background,
                'grid-row-start': startRow + 1 + "",
                'grid-row-end': endRow + 1 + ""
            });
            var $textWrapper = $(proxy_1.Proxy.html.COURSE_CONTENT_WRAPPER);
            var $textContent = $(proxy_1.Proxy.html.COURSE_CONTENT);
            $textContent.html(course.title);
            $textWrapper.append($textContent);
            $course.append($textWrapper);
            $day.append($course);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (day_3_1 && !day_3_1.done && (_a = day_3.return)) _a.call(day_3);
        }
        finally { if (e_7) throw e_7.error; }
    }
    landscapeXalign($day);
}
var drawMode = 'portrait';
function setDrawMode(mode) {
    drawMode = mode;
}
function drawLandscape(dateString, storage) {
    proxy_1.Proxy.$LANDSCAPE_CURRENT_DAY.css('grid-column', day_1.Day.day(dateString) + 1 + "");
    if (storage) {
        dateString = day_1.Day.monday(dateString);
        for (var i = 1; i < 6; i++) {
            var day = expandData(storage[dateString]);
            drawCoursesLandscape(day, i);
            dateString = day_1.Day.add(dateString, 1);
        }
    }
}
function drawPortrait(dateString, storage) {
    if (storage) {
        var day = expandData(storage[dateString]);
        drawCoursesPortrait(day);
    }
}
function draw(dateString, storage) {
    notification_1.Notification.hide('calendarError');
    $(proxy_1.Proxy.$.COURSE).remove();
    $(proxy_1.Proxy.$.LANDSCAPE_DAY).remove();
    $(proxy_1.Proxy.$CALENDAR).removeClass('portrait landscape').addClass(drawMode);
    if (drawMode === 'landscape')
        drawLandscape(dateString, storage);
    else
        drawPortrait(dateString, storage);
    if (storage !== null) {
        proxy_1.Proxy.$BUTTON_PREV.removeClass('disabled');
        proxy_1.Proxy.$BUTTON_NEXT.removeClass('disabled');
    }
    drawDate(dateString);
}
drawLines();
exports.CalendarDrawer = {
    draw: draw,
    setDrawMode: setDrawMode
};


/***/ }),

/***/ "./www/.ts/V3/communication.ts":
/*!*************************************!*\
  !*** ./www/.ts/V3/communication.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Communication = void 0;
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var inappbrowser_1 = __webpack_require__(/*! ./inappbrowser */ "./www/.ts/V3/inappbrowser.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function createStringRequest(functionName, args) {
    var e_1, _a;
    var strArgs = [];
    try {
        for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var arg = args_1_1.value;
            switch (typeof arg) {
                case 'string':
                    strArgs.push('"' + arg + '"');
                    break;
                case 'boolean':
                    strArgs.push(arg ? 'true' : 'false');
                    break;
                case 'number':
                    strArgs.push(arg.toString());
                    break;
                default:
                    console.error('request not supported');
                    break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return functionName + '(' + strArgs.join(',') + ')';
}
function request(functionName, args) {
    var req = createStringRequest(functionName, args);
    return inappbrowser_1.InappBrowser.eval(req);
}
function promiseTimeout(timeout) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
}
function waitUntil(functionName, args, expectedResult, frequency) {
    if (frequency === void 0) { frequency = proxy_1.Proxy.com.DEFAULT_UPDATE_INTERVAL; }
    var interval;
    return new Promise(function (resolve, reject) {
        function then(res) {
            if (res == expectedResult) {
                clearInterval(interval);
                resolve();
            }
            else
                setTimeout(in_, frequency);
        }
        function in_() {
            request(functionName, args)
                .then(then)
                .catch(function (err) {
                clearInterval(interval);
                reject(err);
            });
        }
        in_();
    });
}
function requestWeek(dateString) {
    return __awaiter(this, void 0, void 0, function () {
        var currentDate, res_1, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dateString = day_1.Day.monday(dateString);
                    return [4 /*yield*/, waitUntil('isWeekLoaded', [], true)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, request('getCurrentDate', [])];
                case 2:
                    currentDate = _a.sent();
                    if (!(currentDate !== dateString)) return [3 /*break*/, 9];
                    return [4 /*yield*/, request('clickButton', [dateString])];
                case 3:
                    res_1 = _a.sent();
                    if (!!res_1) return [3 /*break*/, 4];
                    throw new Error(proxy_1.Proxy.err.BUTTON_NOT_FOUND);
                case 4: return [4 /*yield*/, promiseTimeout(proxy_1.Proxy.com.TIMEOUT_AFTER_BUTTON_PRESS)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, waitUntil('getCurrentDate', [], dateString)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, waitUntil('isWeekLoaded', [], true)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [4 /*yield*/, request('parseThisWeek', [])];
                case 10:
                    res = _a.sent();
                    console.log('received week', res);
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.Communication = (function () {
    return {
        requestWeek: requestWeek
    };
})();


/***/ }),

/***/ "./www/.ts/V3/datepicker.ts":
/*!**********************************!*\
  !*** ./www/.ts/V3/datepicker.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatePicker = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
var week = ['L', 'M', 'M', 'J', 'V'];
function create(dateString) {
    var e_1, _a;
    drawnDate = dateString;
    proxy_1.Proxy.$DATE_PICKER.html("");
    try {
        for (var week_1 = __values(week), week_1_1 = week_1.next(); !week_1_1.done; week_1_1 = week_1.next()) {
            var day = week_1_1.value;
            proxy_1.Proxy.$DATE_PICKER.append('<div class="dayName">' + day + '</div>');
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (week_1_1 && !week_1_1.done && (_a = week_1.return)) _a.call(week_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var month = day_1.Day.month(dateString);
    var date = day_1.Day.firstDayOfMonth(dateString);
    proxy_1.Proxy.$DATE_PICKER_MONTH.html(months[month]);
    var offset = day_1.Day.day(date) - 1; // fri->1, thu->2, ...
    for (var i = 0; i < offset; i++) {
        proxy_1.Proxy.$DATE_PICKER.append('<div class="dayNumber disabled">' + day_1.Day.date(date) + '</div>');
    }
    var today = day_1.Day.today();
    var current = calendar_1.Calendar.getCurrentDay();
    while (day_1.Day.month(date) === month) {
        var $el = $('<div class="dayNumber" date="' + date + '">' + day_1.Day.date(date) + '</div>');
        if (date === current)
            $el.addClass('selected');
        if (date === today)
            $el.addClass('today');
        $el.click(function () {
            var $btn = $(this);
            $btn.addClass('selected');
            var dateString = $btn.attr('date');
            if (dateString)
                calendar_1.Calendar.draw(dateString);
            else
                throw new Error("missing attribute 'date' on datepicker button");
        });
        proxy_1.Proxy.$DATE_PICKER.append($el);
        date = day_1.Day.add(date, 1);
    }
}
var drawnDate;
function init() {
    drawnDate = day_1.Day.today();
    proxy_1.Proxy.$DATE_PICKER_PREV.click(function () {
        var d = new Date(drawnDate);
        d.setMonth(d.getMonth() - 1);
        create(d.toDateString());
    });
    proxy_1.Proxy.$DATE_PICKER_NEXT.click(function () {
        var d = new Date(drawnDate);
        d.setMonth(d.getMonth() + 1);
        create(d.toDateString());
    });
    proxy_1.Proxy.$DATE_PICKER_CONTAINER.click(function (e) {
        var $target = $(e.target);
        if (!$target.is(proxy_1.Proxy.$DATE_PICKER_PREV) && !$target.is(proxy_1.Proxy.$DATE_PICKER_NEXT)) {
            proxy_1.Proxy.$DATE_PICKER_CONTAINER.addClass('hidden');
        }
    });
}
init();
exports.DatePicker = {
    create: create
};


/***/ }),

/***/ "./www/.ts/V3/day.ts":
/*!***************************!*\
  !*** ./www/.ts/V3/day.ts ***!
  \***************************/
/*! flagged exports */
/*! export Day [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Day = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function addDay(d, days) {
    d.setDate(d.getDate() + days);
    if (d.getDay() === 0 || d.getDay() === 6) {
        if (days >= 0)
            addDay(d, 1);
        else
            addDay(d, -1);
    }
    return d;
}
function today() {
    var date = new Date();
    if (date.getHours() >= proxy_1.Proxy.TODAY_MAX_HOUR) // si passé TODAY_MAX_HOUR, passe a lendemain matin
        date.setHours(date.getHours() + 24 - proxy_1.Proxy.TODAY_MAX_HOUR + proxy_1.Proxy.START_HOUR);
    addDay(date, 0); // dimanche devient lundi
    return date.toDateString();
}
exports.Day = (function () {
    return {
        today: today,
        date: function (dateString) {
            return new Date(dateString).getDate();
        },
        month: function (dateString) {
            return new Date(dateString).getMonth();
        },
        day: function (dateString) {
            return new Date(dateString).getDay();
        },
        firstMondayOfMonth: function (dateString) {
            var d = new Date(dateString);
            d.setDate(1);
            var day = d.getDay();
            var diff = d.getDate() + (day == 0 ? 1 : day == 1 ? 0 : 7 - day);
            d.setDate(diff);
            return d.toDateString();
        },
        firstDayOfMonth: function (dateString) {
            var d = new Date(dateString);
            d.setDate(1);
            addDay(d, 0);
            return d.toDateString();
        },
        monday: function (dateString) {
            var d = new Date(dateString);
            var day = d.getDay();
            var diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            d.setDate(diff);
            return d.toDateString();
        },
        add: function (dateString, days) {
            var d = new Date(dateString);
            addDay(d, days);
            return d.toDateString();
        }
    };
})();


/***/ }),

/***/ "./www/.ts/V3/events.ts":
/*!******************************!*\
  !*** ./www/.ts/V3/events.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:14-18 */
/*! CommonJS bailout: this is used directly at 18:16-20 */
/*! CommonJS bailout: this is used directly at 22:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var settings_1 = __webpack_require__(/*! ./settings */ "./www/.ts/V3/settings.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var calendarDrawer_1 = __webpack_require__(/*! ./calendarDrawer */ "./www/.ts/V3/calendarDrawer.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var datepicker_1 = __webpack_require__(/*! ./datepicker */ "./www/.ts/V3/datepicker.ts");
$(document.body).on('touchmove', function (e) {
    var e_1, _a;
    var set = __spread([e.target], $(e.target).parents());
    try {
        for (var set_1 = __values(set), set_1_1 = set_1.next(); !set_1_1.done; set_1_1 = set_1.next()) {
            var el = set_1_1.value;
            if ((el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) && $(el).css('overflow') !== 'visible') {
                $(el).addClass('touched').one('touchend', function () {
                    $(this).removeClass('touched');
                });
                return;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (set_1_1 && !set_1_1.done && (_a = set_1.return)) _a.call(set_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
var landscape = (screen.orientation.type.indexOf('portrait') === -1);
calendarDrawer_1.CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
function onScreenOrientChange() {
    var landscape = (screen.orientation.type.indexOf('portrait') === -1);
    calendarDrawer_1.CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
    calendar_1.Calendar.draw(calendar_1.Calendar.getCurrentDay());
}
screen.orientation.addEventListener('change', onScreenOrientChange);
proxy_1.Proxy.$BUTTON_SETTINGS.click(function () {
    settings_1.Settings.show()
        .then(function () {
        calendar_1.Calendar.draw(calendar_1.Calendar.getCurrentDay()); // redraw with new filters
    });
});
proxy_1.Proxy.$BUTTON_PREV.click(function () {
    if (proxy_1.Proxy.$BUTTON_PREV.is('.disabled'))
        return;
    var day = day_1.Day.add(calendar_1.Calendar.getCurrentDay(), -1);
    calendar_1.Calendar.draw(day).then(function () {
        proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
});
proxy_1.Proxy.$BUTTON_NEXT.click(function () {
    if (proxy_1.Proxy.$BUTTON_NEXT.is('.disabled'))
        return;
    var day = day_1.Day.add(calendar_1.Calendar.getCurrentDay(), 1);
    calendar_1.Calendar.draw(day).then(function () {
        proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
});
proxy_1.Proxy.$DATE_CONTAINER.click(function () {
    proxy_1.Proxy.$DATE_PICKER_CONTAINER.removeClass('hidden');
    var day = calendar_1.Calendar.getCurrentDay();
    if (day === null) // solves bug when not yet loaded
        day = day_1.Day.today();
    datepicker_1.DatePicker.create(day);
});
// gifs rigolos
var gifRequest;
proxy_1.Proxy.$GIF_CONTAINER.click(function () {
    proxy_1.Proxy.$GIF_CONTAINER.hide();
    proxy_1.Proxy.$GIF_IMG.attr('src', '');
});
proxy_1.Proxy.$COURSE_CONTAINER.click(function (evt) {
    var $el = $(evt.target);
    var $clickedGrade = $el.parents().add($el).filter(proxy_1.Proxy.$.COURSE);
    if ($clickedGrade.length === 0)
        return;
    var text = $clickedGrade.find('b').html().toLowerCase();
    if (gifRequest)
        gifRequest.abort();
    gifRequest = $.post(proxy_1.Proxy.GIF_URL_PHP, { text: text }, function (data) {
        proxy_1.Proxy.$GIF_IMG.attr('src', data);
        proxy_1.Proxy.$GIF_CONTAINER.show();
    });
});
proxy_1.Proxy.$BUTTON_ABOUT.click(function () {
    proxy_1.Proxy.$ABOUT_CONTAINER.removeClass('hidden');
});
proxy_1.Proxy.$BUTTON_ABOUT_CLOSE.click(function () {
    proxy_1.Proxy.$ABOUT_CONTAINER.addClass('hidden');
});


/***/ }),

/***/ "./www/.ts/V3/filter.ts":
/*!******************************!*\
  !*** ./www/.ts/V3/filter.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Filter = void 0;
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var loadedFilter;
var filterName = '';
function checkList(classe, list) {
    var e_1, _a, e_2, _b;
    var contenu = classe.title.split('<br>');
    try {
        for (var contenu_1 = __values(contenu), contenu_1_1 = contenu_1.next(); !contenu_1_1.done; contenu_1_1 = contenu_1.next()) {
            var ligne = contenu_1_1.value;
            try {
                for (var list_1 = (e_2 = void 0, __values(list)), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var el = list_1_1.value;
                    if (expr_test(ligne, el))
                        return true;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_b = list_1.return)) _b.call(list_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (contenu_1_1 && !contenu_1_1.done && (_a = contenu_1.return)) _a.call(contenu_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
function expr_test(str, expression) {
    var e_3, _a;
    var replacement_regex = /\{[^\}]+\}/g;
    var matches = expression.match(replacement_regex);
    if (matches)
        try {
            for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                var match = matches_1_1.value;
                var variable = match.replace('{', '').replace('}', '');
                if (storage_1.Storage.has(variable))
                    expression = expression.replace(match, storage_1.Storage.get(variable));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    var regexp = new RegExp(expression);
    return regexp.test(str);
}
function fetchJSON(url) {
    return new Promise(function (resolve, reject) {
        $.getJSON(url, function (json) {
            resolve(json);
        }, reject);
    });
}
function filterElement(el, filter) {
    var e_4, _a;
    if (filter === void 0) { filter = loadedFilter; }
    var res = false; // whitelisté par défaut
    if (!(storage_1.Storage.has(filter.key)) || storage_1.Storage.get(filter.key) === 'false')
        return false;
    if (filter.whitelist) {
        if (checkList(el, filter.whitelist))
            res = false;
        else if (filter.blacklist) {
            if (checkList(el, filter.blacklist))
                return true; // TODO filtre doit matcher la whitelist ??
        }
    }
    if (typeof filter.subfilters !== 'undefined') {
        try {
            for (var _b = __values(filter.subfilters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subfilter = _c.value;
                if (filterElement(el, subfilter))
                    return true; // a été blacklisté
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    return res;
}
function loadFilter(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (name === filterName && name !== '')
                        return [2 /*return*/, Promise.resolve(loadedFilter)];
                    filterName = name;
                    return [4 /*yield*/, fetchJSON('filters/' + filterName + '.json')];
                case 1:
                    loadedFilter = (_a.sent());
                    return [2 /*return*/, loadedFilter];
            }
        });
    });
}
exports.Filter = (function () {
    return {
        filterElement: filterElement,
        loadFilter: loadFilter,
        get loadedFilter() {
            return loadedFilter;
        }
    };
})();


/***/ }),

/***/ "./www/.ts/V3/inappbrowser.ts":
/*!************************************!*\
  !*** ./www/.ts/V3/inappbrowser.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InappBrowser = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
var loaded = false;
var ref;
var webviewReferences = []; //cordova's inappbrowser has weird behaviour when it comes to closing / opening webviews...
var currentUrl;
function executeScript(textScript) {
    return __awaiter(this, void 0, void 0, function () {
        var connected, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promiseExecute(proxy_1.Proxy.com.FUNCTION_IS_CONNECTED)];
                case 1:
                    connected = _a.sent();
                    if (!(!connected && loaded)) return [3 /*break*/, 3];
                    console.warn('InAppBrowser is disconnected, reloading');
                    notification_1.Notification.show('restart'); // TODO rename to reload
                    return [4 /*yield*/, reload()];
                case 2:
                    _a.sent();
                    notification_1.Notification.hide('restart');
                    _a.label = 3;
                case 3: return [4 /*yield*/, promiseExecute(textScript)];
                case 4:
                    res = _a.sent();
                    if (typeof res === 'object' && 'packetified' in res && res.packetified === true) {
                        return [2 /*return*/, unpack()];
                    }
                    else
                        return [2 /*return*/, res];
                    return [2 /*return*/];
            }
        });
    });
}
function unpack() {
    return __awaiter(this, void 0, void 0, function () {
        var packets, packet, obj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    packets = '';
                    _a.label = 1;
                case 1: return [4 /*yield*/, promiseExecute('getPacket()')];
                case 2:
                    packet = _a.sent();
                    if (packet)
                        packets += packet;
                    _a.label = 3;
                case 3:
                    if (packet) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4:
                    try {
                        obj = JSON.parse(packets);
                    }
                    catch (e) {
                        console.warn('failed to resolve packets:', packets);
                        console.error(e);
                        throw new Error(proxy_1.Proxy.err.CALENDAR_ERROR);
                    }
                    console.log('resolved packet :', obj);
                    return [2 /*return*/, obj];
            }
        });
    });
}
function promiseExecute(textScript) {
    return new Promise(function (resolve, reject) {
        if (!loaded)
            reject(new Error(proxy_1.Proxy.err.WEBVIEW_NOT_LOADED));
        else {
            ref.executeScript({ code: textScript }, function (result) {
                resolve(result[0]);
            });
            setTimeout(function () {
                reject(new Error('timeout err'));
            }, proxy_1.Proxy.INAPPBROWSER_EXECUTE_TIMEOUT);
        }
    });
}
function fetchScript(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            dataType: "text",
            success: resolve,
            error: reject
        });
    });
}
function reload() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('reloading InAppBrowser');
                    // ref.close();
                    // ref = null;
                    return [4 /*yield*/, load(currentUrl)];
                case 1:
                    // ref.close();
                    // ref = null;
                    _a.sent();
                    return [4 /*yield*/, injectScript()];
                case 2:
                    _a.sent();
                    console.log('reload done.');
                    return [2 /*return*/];
            }
        });
    });
}
function keyIsValid(urlKey) {
    return urlKey in proxy_1.Proxy.url;
}
function load(urlKey) {
    return new Promise(function (resolve, reject) {
        loaded = false;
        if (keyIsValid(urlKey)) {
            currentUrl = urlKey;
            console.log(cordova, window.cordova);
            webviewReferences.push(cordova.InAppBrowser.open(proxy_1.Proxy.url[urlKey], '_blank', proxy_1.Proxy.INAPPBROWSER_SETTINGS));
            ref = webviewReferences[webviewReferences.length - 1];
            ref.addEventListener('loadstop', function () {
                console.log('inappbrower loaded');
                loaded = true;
                resolve();
            });
        }
        else
            reject(new Error('url key not recognized'));
    });
}
function injectScript() {
    return __awaiter(this, void 0, void 0, function () {
        var injection, jquery, jqueryText, injectionText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    injection = fetchScript(proxy_1.Proxy.script.INJECTION);
                    jquery = fetchScript(proxy_1.Proxy.script.JQUERY);
                    return [4 /*yield*/, jquery];
                case 1:
                    jqueryText = _a.sent();
                    return [4 /*yield*/, promiseExecute(jqueryText)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, injection];
                case 3:
                    injectionText = _a.sent();
                    return [4 /*yield*/, promiseExecute(injectionText)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.InappBrowser = (function () {
    return {
        reload: reload,
        load: load,
        injectScript: injectScript,
        eval: executeScript,
        getReference: function () {
            return ref;
        }
    };
})();


/***/ }),

/***/ "./www/.ts/V3/network.ts":
/*!*******************************!*\
  !*** ./www/.ts/V3/network.ts ***!
  \*******************************/
/*! flagged exports */
/*! export Network [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Network = void 0;
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
exports.Network = (function () {
    var state = 'online';
    function offline() {
        console.log('navigator now offline');
        state = 'offline';
        notification_1.Notification.hide('online');
        notification_1.Notification.show('offline');
    }
    function online() {
        console.log('navigator now online');
        state = 'online';
        notification_1.Notification.hide('offline');
        notification_1.Notification.show('online', { duration: 1500 });
    }
    window.addEventListener("offline", offline, false);
    window.addEventListener("online", online, false);
    setInterval(function () {
        if (navigator.connection.type === Connection.NONE && state === 'online')
            offline();
        if (navigator.connection.type !== Connection.NONE && state === 'offline')
            online();
    }, 1000);
    return {
        whenOnline: function () {
            if (state === 'online' || navigator.connection.type !== Connection.NONE) {
                return Promise.resolve();
            }
            return new Promise(function (resolve) {
                var interval = setInterval(function () {
                    if (state === 'online' || navigator.connection.type !== Connection.NONE) {
                        clearInterval(interval);
                        resolve();
                        return;
                    }
                }, 1000);
            });
        },
        get online() {
            return state === 'online';
        },
        get offline() {
            return state === 'offline';
        }
    };
})();


/***/ }),

/***/ "./www/.ts/V3/notification.ts":
/*!************************************!*\
  !*** ./www/.ts/V3/notification.ts ***!
  \************************************/
/*! flagged exports */
/*! export Notification [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notification = void 0;
var timeouts = {};
function show(notifName, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.duration, duration = _c === void 0 ? false : _c;
    console.debug('notification:', notifName);
    if (notifName in timeouts)
        clearTimeout(timeouts[notifName]);
    $('.notification#' + notifName).removeClass('hidden');
    if (duration && duration > 0) {
        timeouts[notifName] = setTimeout(function () {
            $('.notification#' + notifName).addClass('hidden');
        }, duration);
    }
}
function hide(notifName) {
    if (notifName in timeouts)
        clearTimeout(timeouts[notifName]);
    $('.notification#' + notifName).addClass('hidden');
}
exports.Notification = (function () {
    return {
        show: show,
        hide: hide
    };
})();


/***/ }),

/***/ "./www/.ts/V3/proxy.ts":
/*!*****************************!*\
  !*** ./www/.ts/V3/proxy.ts ***!
  \*****************************/
/*! flagged exports */
/*! export Proxy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Proxy = void 0;
exports.Proxy = {
    // APP_VERSION: 10060,
    STORAGE_VERSION: '8',
    $CALENDAR: $('#calendar'),
    $CALENDAR_CONTENT: $('#calendar .content'),
    $LANDSCAPE_CURRENT_DAY: $('#landscapeCurrentDay'),
    $COURSE_CONTAINER: $('#heures'),
    $DATE_CONTAINER: $('nav div'),
    $DATE: $('nav span'),
    $DATE_PICKER_CONTAINER: $('#datePicker'),
    $DATE_PICKER: $('#datePicker .dates'),
    $DATE_PICKER_PREV: $('#datePicker .prev'),
    $DATE_PICKER_NEXT: $('#datePicker .next'),
    $DATE_PICKER_MONTH: $('#datePicker .month'),
    $BUTTON_PREV: $('.veille'),
    $BUTTON_NEXT: $('.lendemain'),
    $BUTTON_SETTINGS: $('button.settings'),
    $BUTTON_ABOUT: $('button.about'),
    $BUTTON_ABOUT_CLOSE: $('#about button'),
    $SETTINGS_CONTAINER: $('#settings'),
    $SETTINGS_FILTER: $('#settings .filters'),
    $SETTINGS_APPEARANCE: $('#settings .appearance'),
    $SETTINGS_CANCEL: $('#settings .cancel'),
    $SETTINGS_SAVE: $('#settings .save'),
    $SETTINGS_RESET: $('#settings .reset'),
    $SETTINGS_THEME: $('#settings .theme'),
    $SETTINGS_GRADE: $('.classeDropDown'),
    $ABOUT_CONTAINER: $('#about'),
    $THEME_STYLESHEET: $('#themeStylesheet'),
    $GIF_CONTAINER: $('#gif-container'),
    $GIF_IMG: $('#gif-container img'),
    INAPPBROWSER_SETTINGS: 'location=no,zoom=no,hidden=yes,shouldPauseOnSuspend=no',
    INAPPBROWSER_EXECUTE_TIMEOUT: 5000,
    GIF_URL: 'https://polytech.thissma.fr/gifs/',
    GIF_URL_PHP: 'https://polytech.thissma.fr/nicegif.php',
    START_HOUR: 8,
    END_HOUR: 20,
    TODAY_MAX_HOUR: 21,
    $: {
        COURSE: '.classe',
        LANDSCAPE_DAY: '#heures .day',
        HOUR_LINES: '#heures .ligne',
        SETTINGS_FILTER: '#settings .filtre'
    },
    err: {
        BUTTON_NOT_FOUND: 'button not found',
        WEBVIEW_NOT_LOADED: 'webview not loaded',
        REQUEST_CANCELLED: 'request cancelled',
        CALENDAR_ERROR: 'calendar error'
    },
    html: {
        HOUR: '<div class="heure"></div>',
        HOUR_LINE: '<div class="ligne"></div>',
        COURSE: '<div class="classe"></div>',
        COURSE_CONTENT_WRAPPER: '<div class="wrapper"></div>',
        COURSE_CONTENT: '<div class="content"></div>',
        LANDSCAPE_DAY: '<div class="day"></div>',
        SETTINGS_CHECKBOX: '<input type=checkbox checked/>',
    },
    storage: {
        GRADE: 'classe',
        SAVED_DAYS: 'daysCache',
        THEME: 'theme',
        VERSION: 'version',
        ACKNOWLEDGED: 'ack'
    },
    day: {
        MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6, SUN: 0,
    },
    script: {
        INJECTION: 'injection.js',
        JQUERY: 'jquery.js'
    },
    dir: {
        THEMES: 'css/themes/'
    },
    com: {
        TIMEOUT_AFTER_BUTTON_PRESS: 200,
        DEFAULT_UPDATE_INTERVAL: 200,
        FUNCTION_IS_CONNECTED: 'isConnected()'
    },
    theme: {
        DEFAULT: 'default'
    },
    url: {
        'peip1': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87a9882e74a3f76e0b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peip2': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8e7485d9bee2c84dbb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peipc': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87b035ebf272a6adfb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peipd': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f80737eed5619a0432b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et3': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8a296a2ffb0037d5bb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et4': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8f04f4a6b90e17f71b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et5': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8c8df41a0a7ef48f7b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app3': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8b0da01d9866c6b06b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app4': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f824f1ecce698039f3b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app5': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f83efacf3364b3523fb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    },
};


/***/ }),

/***/ "./www/.ts/V3/settings.ts":
/*!********************************!*\
  !*** ./www/.ts/V3/settings.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
var filter_1 = __webpack_require__(/*! ./filter */ "./www/.ts/V3/filter.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var app_1 = __webpack_require__(/*! ./app */ "./www/.ts/V3/app.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var calendarDrawer_1 = __webpack_require__(/*! ./calendarDrawer */ "./www/.ts/V3/calendarDrawer.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function domAddField(filter, $parent) {
    var e_1, _a;
    try {
        for (var _b = __values(filter.subfilters), _c = _b.next(); !_c.done; _c = _b.next()) { // TODO nommage variables
            var filtre = _c.value;
            var $filtre = $('<div/>');
            $filtre.data('key', filtre.key);
            $filtre.addClass('element filtre');
            var $check = $(proxy_1.Proxy.html.SETTINGS_CHECKBOX);
            $check.click(function (e) {
                var $check = $(e.target);
                if ($check.is(':checked'))
                    $check.siblings().removeClass('disabled');
                else
                    $check.siblings().addClass('disabled');
            });
            var $label = $('<label/>');
            $label.html(filtre.display);
            var $dropdown = $('<select/>');
            for (var index in filtre.variable) {
                var option = index;
                if (Array.isArray(filtre.variable))
                    option = filtre.variable[index];
                $dropdown.append($('<option value="' + filtre.variable[index] + '"/>').html(option));
            }
            $filtre.append($check).append($label).append($dropdown);
            $parent.append($filtre);
            if ('subfilters' in filtre)
                domAddField(filtre, $filtre);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function applySettings() {
    var e_2, _a;
    try {
        for (var _b = __values($(proxy_1.Proxy.$.SETTINGS_FILTER)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var domFiltre = _c.value;
            var $filtre = $(domFiltre);
            var key = $filtre.data('key');
            if ($filtre.children('input[type=checkbox]').is(':checked')) {
                var select = $filtre.children('select').get(0);
                var value = select.options[select.selectedIndex].value;
                storage_1.Storage.set(key, value);
            }
            else {
                storage_1.Storage.set(key, '0');
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    proxy_1.Proxy.$SETTINGS_CONTAINER.addClass('hidden');
}
function setCurrentSettings() {
    var e_3, _a;
    if (storage_1.Storage.has(proxy_1.Proxy.storage.GRADE)) {
        proxy_1.Proxy.$SETTINGS_GRADE.val(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE));
    }
    if (storage_1.Storage.has(proxy_1.Proxy.storage.THEME)) {
        proxy_1.Proxy.$SETTINGS_THEME.val(storage_1.Storage.get(proxy_1.Proxy.storage.THEME));
    }
    try {
        for (var _b = __values($(proxy_1.Proxy.$.SETTINGS_FILTER)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var filter = _c.value;
            var $filter = $(filter);
            var key = $filter.data('key');
            if (storage_1.Storage.has(key)) {
                var $select = $filter.children('select');
                var val = storage_1.Storage.get(key);
                if (val === 'false') {
                    var $check = $filter.children('input[type=checkbox]');
                    if ($check.length === 1)
                        $check.trigger('click');
                }
                if ($select.children('option').is('[value="' + val + '"]')) {
                    $select.val(val);
                }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
}
function loadDOM(filter) {
    proxy_1.Proxy.$SETTINGS_FILTER.children().remove();
    domAddField(filter, proxy_1.Proxy.$SETTINGS_FILTER);
}
function show(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.cancelDisabled, cancelDisabled = _c === void 0 ? false : _c;
    return new Promise(function (resolve, reject) {
        proxy_1.Proxy.$SETTINGS_CONTAINER.removeClass('hidden');
        if (cancelDisabled)
            proxy_1.Proxy.$SETTINGS_CANCEL.hide();
        else
            proxy_1.Proxy.$SETTINGS_CANCEL.show();
        proxy_1.Proxy.$SETTINGS_CANCEL.one('click', function () {
            proxy_1.Proxy.$SETTINGS_CONTAINER.addClass('hidden');
            resolve();
        });
        proxy_1.Proxy.$SETTINGS_SAVE.one('click', function () {
            applySettings();
            resolve();
        });
        if (!storage_1.Storage.has(proxy_1.Proxy.storage.GRADE)) {
            proxy_1.Proxy.$SETTINGS_SAVE.hide();
            return;
        }
        else
            proxy_1.Proxy.$SETTINGS_SAVE.show();
        filter_1.Filter.loadFilter(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))
            .then(function () {
            loadDOM(filter_1.Filter.loadedFilter);
            setCurrentSettings();
        })
            .catch(reject);
    });
}
proxy_1.Proxy.$SETTINGS_GRADE.change(function () {
    var $sel = proxy_1.Proxy.$SETTINGS_GRADE.children().filter(':checked');
    var val = $sel.attr('value');
    if (val)
        storage_1.Storage.set(proxy_1.Proxy.storage.GRADE, val);
    else
        throw new Error("missing attribute 'value' on settings element");
    storage_1.Storage.set(proxy_1.Proxy.storage.SAVED_DAYS, ''); // try to delete currently drawn courses
    calendar_1.Calendar.init();
    calendarDrawer_1.CalendarDrawer.draw(day_1.Day.today());
    proxy_1.Proxy.$SETTINGS_SAVE.show(); // was maybe hidden
    filter_1.Filter.loadFilter(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))
        .then(function () {
        proxy_1.Proxy.$SETTINGS_CANCEL.hide();
        loadDOM(filter_1.Filter.loadedFilter);
        return app_1.App().restartInappBrowser();
    }).then(function () {
        calendar_1.Calendar.draw(day_1.Day.today());
    });
});
//-----------------------
exports.Settings = (function () {
    return {
        callbackOnce: function () { },
        loadDOM: loadDOM,
        show: show
    };
})();


/***/ }),

/***/ "./www/.ts/V3/storage.ts":
/*!*******************************!*\
  !*** ./www/.ts/V3/storage.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Storage = void 0;
var settings_1 = __webpack_require__(/*! ./settings */ "./www/.ts/V3/settings.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (storage.has(proxy_1.Proxy.storage.VERSION) && storage.get(proxy_1.Proxy.storage.VERSION) !== proxy_1.Proxy.STORAGE_VERSION) {
                        alert('L\'appli à été mise à jour !');
                        storage.clear();
                    }
                    // show welcome dialog (disabled feature for now...)
                    if (!storage.has(proxy_1.Proxy.storage.ACKNOWLEDGED)) {
                        // P.$ABOUT_CONTAINER.removeClass('hidden');
                        storage.set(proxy_1.Proxy.storage.ACKNOWLEDGED, '1');
                    }
                    if (!!storage.has(proxy_1.Proxy.storage.VERSION)) return [3 /*break*/, 2];
                    storage.clear();
                    return [4 /*yield*/, settings_1.Settings.show({ cancelDisabled: true })];
                case 1:
                    _a.sent();
                    storage.set(proxy_1.Proxy.storage.VERSION, proxy_1.Proxy.STORAGE_VERSION);
                    storage.set('root', '1'); // TODO
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
var storage = {
    init: init,
    set: function (key, val) {
        window.localStorage.setItem(key, val);
    },
    get: function (key) {
        return window.localStorage[key];
    },
    clear: function () {
        window.localStorage.clear();
    },
    has: function (key) {
        return key in window.localStorage;
    },
    get length() {
        return window.localStorage.length;
    }
};
exports.Storage = (function () {
    return storage;
})();


/***/ }),

/***/ "./www/.ts/V3/theme.ts":
/*!*****************************!*\
  !*** ./www/.ts/V3/theme.ts ***!
  \*****************************/
/*! flagged exports */
/*! export Theme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Theme = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
function set(themeName) {
    if (themeName) {
        proxy_1.Proxy.$THEME_STYLESHEET.attr('href', proxy_1.Proxy.dir.THEMES + themeName + '.css');
    }
    else {
        proxy_1.Proxy.$THEME_STYLESHEET.attr('href', proxy_1.Proxy.dir.THEMES + proxy_1.Proxy.theme.DEFAULT + '.css');
    }
}
proxy_1.Proxy.$SETTINGS_THEME.change(function () {
    var $sel = proxy_1.Proxy.$SETTINGS_THEME.children().filter(':checked');
    var val = $sel.attr('value');
    if (val) {
        storage_1.Storage.set(proxy_1.Proxy.storage.THEME, val);
        set(val);
    }
    else
        throw new Error("settings element is missing 'value' attribute.");
});
exports.Theme = {
    set: set
};


/***/ }),

/***/ "./www/.ts/index.ts":
/*!**************************!*\
  !*** ./www/.ts/index.ts ***!
  \**************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var app_1 = __webpack_require__(/*! ./V3/app */ "./www/.ts/V3/app.ts");
var app = app_1.App();
app.init();


/***/ }),

/***/ "./www/jquery.js":
/*!***********************!*\
  !*** ./www/jquery.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports, __webpack_exports__ */
/*! CommonJS bailout: this is used directly at 2:259-263 */
/*! CommonJS bailout: module.exports is used directly at 2:70-84 */
/*! CommonJS bailout: module.exports is used directly at 2:85-99 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict"; true&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return r}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./www/.ts/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9hcHAudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXJEcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY29tbXVuaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9kYXRlcGlja2VyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2RheS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZmlsdGVyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2luYXBwYnJvd3Nlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9uZXR3b3JrLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9wcm94eS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9zdG9yYWdlLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL3RoZW1lLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL2luZGV4LnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvanF1ZXJ5LmpzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBb0M7QUFFcEMsZ0ZBQW1DO0FBQ25DLDZFQUFpQztBQUNqQyxtRkFBcUM7QUFDckMsZ0ZBQW1DO0FBQ25DLCtGQUE2QztBQUM3QyxvRUFBMkI7QUFDM0IsMEVBQStCO0FBQy9CLCtGQUE2QztBQUU3Qyw4REFBaUI7QUFHakIsU0FBZSxhQUFhOzs7Ozs7O29CQUV4QixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQixxQkFBTSxpQkFBTyxDQUFDLElBQUksRUFBRTs7b0JBQXBCLFNBQW9CLENBQUM7b0JBQ3JCLGFBQUssQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxxQkFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLGFBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7O29CQUFyRCxTQUFxRCxDQUFDO29CQUN0RCxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEMscUJBQU0saUJBQWlCLEVBQUU7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixxQkFBTSxtQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFHLENBQUMsS0FBSyxFQUFFLENB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LFNBQVM7QUFBQSxrR0FBQyxDQUFDLHVCQUF1QixnQ0FBZ0MsMERBQTBELHVCQUF1Qjs7Ozs7OztVQ0g5OHJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcidcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcidcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnXG5pbXBvcnQgeyBJbmFwcEJyb3dzZXIgfSBmcm9tICcuL2luYXBwYnJvd3NlcidcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5cbmltcG9ydCAnLi9ldmVudHMnXG5cblxuYXN5bmMgZnVuY3Rpb24gb25EZXZpY2VSZWFkeSgpIHtcbiAgdHJ5IHtcbiAgICBDYWxlbmRhci5pbml0KCk7XG4gICAgYXdhaXQgU3RvcmFnZS5pbml0KCk7XG4gICAgVGhlbWUuc2V0KFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5USEVNRSkpO1xuICAgIGF3YWl0IEZpbHRlci5sb2FkRmlsdGVyKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpO1xuICAgIENhbGVuZGFyLmRyYXdGcm9tQ2FjaGUoRGF5LnRvZGF5KCkpO1xuICAgIGF3YWl0IHN0YXJ0SW5hcHBCcm93c2VyKCk7XG4gICAgYXdhaXQgQ2FsZW5kYXIuZHJhdyhEYXkudG9kYXkoKSk7XG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3NvbWV0aGluZyBiYWQgaGFwcGVuZWQgIScpO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBOb3RpZmljYXRpb24uc2hvdygnbWFqb3JFcnJvcicpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0SW5hcHBCcm93c2VyKCkge1xuICBhd2FpdCBOZXR3b3JrLndoZW5PbmxpbmUoKVxuICBhd2FpdCBJbmFwcEJyb3dzZXIubG9hZChTdG9yYWdlLmdldChQLnN0b3JhZ2UuR1JBREUpKVxuICBhd2FpdCBJbmFwcEJyb3dzZXIuaW5qZWN0U2NyaXB0KClcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBvbkRldmljZVJlYWR5LCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRJbmFwcEJyb3dzZXIoKSB7XG4gIHJldHVybiBzdGFydEluYXBwQnJvd3NlcigpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW50ZXJmYWNlIEFwcCB7XG4gIGluaXQ6ICgpID0+IHZvaWQ7XG4gIHJlc3RhcnRJbmFwcEJyb3dzZXI6ICgpID0+IHZvaWQ7XG59O1xuXG5sZXQgaW5zdDogQXBwO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSgpIHsgLy8gQ29uc3RydWN0b3IgbGlrZVxuICBpbnN0ID0geyBpbml0LCByZXN0YXJ0SW5hcHBCcm93c2VyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7IC8vIFNpbmdsZXRvbi1saWtlXG4gIGlmICghaW5zdCkgY3JlYXRlSW5zdGFuY2UoKTtcblxuICByZXR1cm4gaW5zdDtcbn1cbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbiB9IGZyb20gJy4vY29tbXVuaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbidcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmF3ZXIgfSBmcm9tICcuL2NhbGVuZGFyRHJhd2VyJztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgVFJlcXVlc3QsIFRTdG9yZSwgVE1pbmlTdG9yZSB9IGZyb20gJy4vdHlwZXMnXG5cbmZ1bmN0aW9uIGxvYWRDYWNoZSgpOiBUU3RvcmUge1xuICBjb25zdCBjYWNoZVN0ciA9IFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5TQVZFRF9EQVlTKTtcbiAgbGV0IGNhY2hlOiBUU3RvcmU7XG4gIHRyeSB7XG4gICAgY2FjaGUgPSBKU09OLnBhcnNlKGNhY2hlU3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignZGF5cyBjYWNoZSBpcyB1bnNldCBvciBpbnZhbGlkLicpO1xuICAgIGNhY2hlID0ge307XG4gIH1cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBzYXZlQ2FjaGUoY2FjaGU6IFRTdG9yZSkge1xuICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuU0FWRURfREFZUywgSlNPTi5zdHJpbmdpZnkoY2FjaGUpKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IHdhaXRGb3JEYXRhOiBib29sZWFuOyAvLyBpbmFwcGJyb3dzZXIgaXMgbG9hZGluZ1xubGV0IGNhY2hlOiBUU3RvcmU7XG5sZXQgc3RvcmFnZTogVFN0b3JlO1xubGV0IHBlbmRpbmdSZXF1ZXN0OiBUUmVxdWVzdDtcbmxldCBjdXJyZW50RGF5OiBzdHJpbmcgfCBudWxsO1xuXG5mdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQnV0dG9ucyhkYXRlU3RyaW5nOiBzdHJpbmcpIHsgLy8gZGlzYWJsZSBvciBlbmFibGUgbmF2IGJ1dHRvbnNcbiAgaWYgKCF3YWl0Rm9yRGF0YSAmJiBOZXR3b3JrLm9ubGluZSkge1xuICAgIFAuJEJVVFRPTl9QUkVWLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgIFAuJEJVVFRPTl9ORVhULnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwcmV2RGF5ID0gRGF5LmFkZChkYXRlU3RyaW5nLCAtMSk7XG4gIGNvbnN0IG5leHREYXkgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuICBpZiAoIShwcmV2RGF5IGluIGNhY2hlKSAmJiAhKGRhdGVTdHJpbmcgaW4gY2FjaGUpKSB7XG4gICAgUC4kQlVUVE9OX1BSRVYuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cbiAgZWxzZSBQLiRCVVRUT05fUFJFVi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgaWYgKCEobmV4dERheSBpbiBjYWNoZSkgJiYgIShkYXRlU3RyaW5nIGluIGNhY2hlKSkge1xuICAgIFAuJEJVVFRPTl9ORVhULmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICB9XG4gIGVsc2UgUC4kQlVUVE9OX05FWFQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyV2VlayhtaW5pOiBUTWluaVN0b3JlKSB7XG4gIGxldCBkYXRlU3RyaW5nID0gbWluaS5kYXRlOyAvLyBkYXRlIGlzIGEgbW9uZGF5XG4gIGZvciAoY29uc3QgaSBpbiBtaW5pLmRheXMpIHtcbiAgICBzdG9yYWdlW2RhdGVTdHJpbmddID0gbWluaS5kYXlzW2ldO1xuICAgIGNhY2hlW2RhdGVTdHJpbmddID0gbWluaS5kYXlzW2ldO1xuICAgIGRhdGVTdHJpbmcgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuICB9XG4gIHNhdmVDYWNoZShjYWNoZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlY2VpdmVkV2VlayhkYXRhOiBUTWluaVN0b3JlKSB7XG4gIHJlZ2lzdGVyV2VlayhkYXRhKTtcbiAgaGFuZGxlUGVuZGluZ1JlcXVlc3QoKTtcbn1cblxuZnVuY3Rpb24gYWRkUGVuZGluZ1JlcXVlc3QocmVxdWVzdDogVFJlcXVlc3QpIHtcbiAgY2FuY2VsUGVuZGluZ1JlcXVlc3QoKTtcbiAgcGVuZGluZ1JlcXVlc3QgPSByZXF1ZXN0O1xuICBOb3RpZmljYXRpb24uc2hvdygnbG9hZGluZycpO1xuICBoYW5kbGVQZW5kaW5nUmVxdWVzdCgpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQZW5kaW5nUmVxdWVzdCgpIHtcbiAgLy8gaWYgKCdyZWplY3QnIGluIHBlbmRpbmdSZXF1ZXN0KSBwZW5kaW5nUmVxdWVzdC5yZWplY3QobmV3IEVycm9yKFAuZXJyLlJFUVVFU1RfQ0FOQ0VMTEVEKSk7IC8vIFRPRE86IGRlcHJlY2F0ZWRcbiAgZmluaXNoUGVuZGluZ1JlcXVlc3QoKTtcbn1cblxuZnVuY3Rpb24gZmluaXNoUGVuZGluZ1JlcXVlc3QoKSB7XG4gIHBlbmRpbmdSZXF1ZXN0ID0ge307XG4gIE5vdGlmaWNhdGlvbi5oaWRlKCdsb2FkaW5nJyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVBlbmRpbmdSZXF1ZXN0KCkge1xuICBpZiAoIXBlbmRpbmdSZXF1ZXN0IHx8ICEoJ2RhdGVTdHJpbmcnIGluIHBlbmRpbmdSZXF1ZXN0KSkgcmV0dXJuOyAvLyBubyBwZW5kaW5nIHJlcXVlc3RcblxuICBpZiAocGVuZGluZ1JlcXVlc3QuZGF0ZVN0cmluZyBpbiBzdG9yYWdlKSB7XG4gICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhwZW5kaW5nUmVxdWVzdC5kYXRlU3RyaW5nLCBjYWNoZSk7XG4gICAgcGVuZGluZ1JlcXVlc3QucmVzb2x2ZSgpO1xuICAgIGZpbmlzaFBlbmRpbmdSZXF1ZXN0KCk7XG4gIH1cblxuICBlbHNlIGlmICh3YWl0Rm9yRGF0YSkge1xuICAgIGNvbnNvbGUud2FybignY2FsZW5kYXIgdXBkYXRlOiBhbHJlYWR5IHdhaXRpbmcgZm9yIGRhdGEnKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgd2FpdEZvckRhdGEgPSB0cnVlO1xuICAgIGxldCB3ZWVrO1xuICAgIGF3YWl0IE5ldHdvcmsud2hlbk9ubGluZSgpO1xuICAgIHRyeSB7XG4gICAgICB3ZWVrID0gYXdhaXQgQ29tbXVuaWNhdGlvbi5yZXF1ZXN0V2VlayhwZW5kaW5nUmVxdWVzdC5kYXRlU3RyaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycik7XG4gICAgICB3YWl0Rm9yRGF0YSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YWl0Rm9yRGF0YSA9IGZhbHNlO1xuICAgIGF3YWl0IGhhbmRsZVJlY2VpdmVkV2Vlayh3ZWVrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnI6IEVycm9yKSB7IC8vIFRPRE86IHRoaXMgaXMgZGlydHlcbiAgaWYgKGVyci5tZXNzYWdlID09PSBQLmVyci5CVVRUT05fTk9UX0ZPVU5EKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdkYXRlRXJyb3InLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuICAgIGNhbmNlbFBlbmRpbmdSZXF1ZXN0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFAuZXJyLldFQlZJRVdfTk9UX0xPQURFRCkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBOb3RpZmljYXRpb24uc2hvdygnY2FsZW5kYXJFcnJvcicsIHsgZHVyYXRpb246IDMwMDAgfSk7XG4gIH1cbiAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UgPT09IFAuZXJyLkNBTEVOREFSX0VSUk9SKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdjYWxlbmRhckVycm9yJywgeyBkdXJhdGlvbjogMzAwMCB9KTtcbiAgfVxuICBlbHNlIGlmIChlcnIubWVzc2FnZSA9PT0gUC5lcnIuUkVRVUVTVF9DQU5DRUxMRUQpIHtcbiAgICBjb25zb2xlLndhcm4oJ0EgcmVxdWVzdCB3YXMgY2FuY2VsbGVkJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdtYWpvckVycm9yJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0Zyb21DYWNoZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHtcbiAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcsIGNhY2hlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3KGRhdGVTdHJpbmc6IHN0cmluZykge1xuICBjdXJyZW50RGF5ID0gZGF0ZVN0cmluZztcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChkYXRlU3RyaW5nIGluIHN0b3JhZ2UpIHtcbiAgICAgIGNhbmNlbFBlbmRpbmdSZXF1ZXN0KCk7XG4gICAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcsIGNhY2hlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhZGRQZW5kaW5nUmVxdWVzdCh7IGRhdGVTdHJpbmcsIHJlc29sdmUsIHJlamVjdCB9KVxuICAgICAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHtcbiAgICAgICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nLCBjYWNoZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nKTsgLy8gYWN0dWFsbHkgZHJhd3Mgbm90aGluZ1xuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQnV0dG9ucyhkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTsgLy8gcGVuZGluZyByZXF1ZXN0IHdhcyBwcm9iYWJseSBjYW5jZWxsZWRcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICB3YWl0Rm9yRGF0YSA9IGZhbHNlO1xuICBjYWNoZSA9IGxvYWRDYWNoZSgpO1xuICBzdG9yYWdlID0ge307XG4gIHBlbmRpbmdSZXF1ZXN0ID0ge307XG4gIGN1cnJlbnREYXkgPSBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSB7XG4gIGluaXQ6IGluaXQsXG4gIGRyYXc6IGRyYXcsXG4gIGRyYXdGcm9tQ2FjaGU6IGRyYXdGcm9tQ2FjaGUsXG4gIGdldEN1cnJlbnREYXk6IGZ1bmN0aW9uKCkge1xuICAgIGlmKCFjdXJyZW50RGF5KSB0aHJvdyBuZXcgRXJyb3IoJ2NhbGVuZGFyIGhhcyBubyBjdXJyZW50IGRheScpO1xuICAgIHJldHVybiBjdXJyZW50RGF5O1xuICB9LFxuICAvLyB1cGRhdGU6IGhhbmRsZVBlbmRpbmdSZXF1ZXN0XG59XG4iLCJpbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IFRTdG9yZSwgVE1pbmksIFRFeHBhbmRlZH0gZnJvbSAnLi90eXBlcydcblxuZnVuY3Rpb24gZHJhd0xpbmVzKCkge1xuICBjb25zdCBuX2hvdXJzID0gUC5FTkRfSE9VUiAtIFAuU1RBUlRfSE9VUjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuX2hvdXJzOyBpKyspIHtcbiAgICBjb25zdCBob3VyID0gaSArIFAuU1RBUlRfSE9VUjtcbiAgICBjb25zdCAkaG91ciA9ICQoUC5odG1sLkhPVVIpO1xuICAgICRob3VyLmh0bWwoaG91ciArICcgaCcpO1xuICAgICRob3VyLmNzcyh7XG4gICAgICBncmlkUm93OiAoaSAqIDQgKyAxKSArIFwiXCJcbiAgICB9KVxuICAgIFAuJENPVVJTRV9DT05UQUlORVIuYXBwZW5kKCRob3VyKTtcbiAgICBjb25zdCAkbGluZSA9ICQoUC5odG1sLkhPVVJfTElORSk7XG4gICAgJGxpbmUuY3NzKHtcbiAgICAgIGdyaWRSb3c6IChpICogNCArIDEpICsgXCJcIlxuICAgIH0pXG4gICAgUC4kQ09VUlNFX0NPTlRBSU5FUi5hcHBlbmQoJGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4cGFuZERhdGEobWluaTogVE1pbmlbXSkge1xuICBjb25zdCBleHBhbmRlZDogVEV4cGFuZGVkW10gPSBbXTtcbiAgZm9yIChjb25zdCBpIGluIG1pbmkpIHtcbiAgICBleHBhbmRlZFtpXSA9IHtcbiAgICAgIHN0YXJ0OiB7IGhvdXI6IG1pbmlbaV1bMF1bMF0sIG1pbnV0ZTogbWluaVtpXVswXVsxXSB9LFxuICAgICAgZW5kOiB7IGhvdXI6IG1pbmlbaV1bMV1bMF0sIG1pbnV0ZTogbWluaVtpXVsxXVsxXSB9LFxuICAgICAgdGl0bGU6IG1pbmlbaV1bMl0sIGJhY2tncm91bmQ6IG1pbmlbaV1bM10sXG4gICAgICB1bmF2YWlsYWJsZTogZmFsc2UsIGJsYWNrbGlzdGVkOiBmYWxzZVxuICAgIH07XG4gICAgaWYgKGV4cGFuZGVkW2ldLnRpdGxlID09PSBudWxsKSB7XG4gICAgICBleHBhbmRlZFtpXS50aXRsZSA9ICdGRVJNw4knO1xuICAgICAgZXhwYW5kZWRbaV0udW5hdmFpbGFibGUgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4cGFuZGVkW2ldLmJsYWNrbGlzdGVkID0gRmlsdGVyLmZpbHRlckVsZW1lbnQoZXhwYW5kZWRbaV0pO1xuICAgIH1cbiAgfVxuICBleHBhbmRlZC5zb3J0KChhLCBiKSA9PiAhYS5ibGFja2xpc3RlZCAmJiBiLmJsYWNrbGlzdGVkID8gLTEgOiAwKTsgLy8gbm90IGJsYWNrbGlzdGVkIGNvbWVzIGZpcnN0ICgxIDw9PiBiIGNvbWVzIGZpcnN0KVxuICByZXR1cm4gZXhwYW5kZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdHJpeCgpOiBib29sZWFuW11bXSB7XG4gIGNvbnN0IG1hdHJpeCA9IFtdXG4gIGNvbnN0IG5faG91cnMgPSBQLkVORF9IT1VSIC0gUC5TVEFSVF9IT1VSO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQgKiBuX2hvdXJzOyBpKyspIHtcbiAgICBtYXRyaXhbaV0gPSBbXTtcbiAgfVxuICByZXR1cm4gbWF0cml4O1xufVxuXG5mdW5jdGlvbiBnZXRFbXB0eVNwYWNlKG1hdHJpeDogYm9vbGVhbltdW10sIGVsOiBURXhwYW5kZWQpIHtcbiAgY29uc3Qgc3RhcnRSb3cgPSAoZWwuc3RhcnQuaG91ciAtIFAuU1RBUlRfSE9VUikgKiA0ICsgZWwuc3RhcnQubWludXRlIC8gMTVcbiAgY29uc3QgZW5kUm93ID0gKGVsLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBlbC5lbmQubWludXRlIC8gMTVcbiAgY29uc3Qgd2lkdGggPSBlbC5ibGFja2xpc3RlZCA/IDEgOiAyO1xuICBsZXQgeSA9IDA7XG5cbiAgd2hpbGUgKG1hdHJpeFtzdGFydFJvd11beV0gPT09IHRydWUpIHkrKztcblxuICBjb25zdCBjaGVja1lPZmZzZXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgd2lkdGg7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXRyaXhbaV1bal0gPT09ICd1bmRlZmluZWQnKSBtYXRyaXhbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9O1xuICB3aGlsZSAoIWNoZWNrWU9mZnNldCh5KSkgeSsrO1xuXG4gIGZvciAobGV0IGogPSB5OyBqIDwgeSArIHdpZHRoOyBqKyspIHsgLy8gZmlsbCBlbXB0eSBzcGFjZVxuICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICBtYXRyaXhbaV1bal0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDE6IHksXG4gICAgeDI6IHkgKyB3aWR0aCxcbiAgICB5MTogc3RhcnRSb3cgKyAxLFxuICAgIHkyOiBlbmRSb3cgKyAxXG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGlkZXMoJGNvdXJzZTE6IEpRdWVyeTxIVE1MRWxlbWVudD4sICRjb3Vyc2UyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1zdGFydCcpKTtcbiAgY29uc3QgZW5kID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1lbmQnKSk7XG4gIGNvbnN0IG90aGVyU3RhcnQgPSBwYXJzZUludCgkY291cnNlMi5jc3MoJ2dyaWQtcm93LXN0YXJ0JykpO1xuICBjb25zdCBvdGhlckVuZCA9IHBhcnNlSW50KCRjb3Vyc2UyLmNzcygnZ3JpZC1yb3ctZW5kJykpO1xuICByZXR1cm4gKHN0YXJ0IDwgb3RoZXJFbmQgJiYgb3RoZXJTdGFydCA8IGVuZCk7XG59XG5cbmZ1bmN0aW9uIGxhbmRzY2FwZVhhbGlnbigkZGF5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHBsYWNlZCA9IFtdO1xuICBjb25zdCAkY291cnNlcyA9ICRkYXkuY2hpbGRyZW4oKTtcbiAgJGNvdXJzZXMuZGF0YSgneCcsIDApO1xuICAkY291cnNlcy5kYXRhKCd4TWF4JywgMCk7XG5cbiAgLy8gZmluZCB4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgcGxhY2VkKSB7XG4gICAgICBjb25zdCAkY291cnNlMiA9ICQoY291cnNlMik7XG4gICAgICBjb25zdCB4MiA9ICRjb3Vyc2UyLmRhdGEoJ3gnKTtcbiAgICAgIGlmICh4MSA9PT0geDIgJiYgY29sbGlkZXMoJGNvdXJzZTEsICRjb3Vyc2UyKSkge1xuICAgICAgICB4MSsrO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4JywgeDEpO1xuICAgIHBsYWNlZC5wdXNoKGNvdXJzZTEpO1xuICB9XG5cbiAgLy8gZmluZCB4TWF4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeE1heDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgJGNvdXJzZXMpIHtcbiAgICAgIGNvbnN0ICRjb3Vyc2UyID0gJChjb3Vyc2UyKTtcbiAgICAgIGNvbnN0IHhNYXgyID0gJGNvdXJzZTIuZGF0YSgneCcpO1xuICAgICAgaWYgKGNvbGxpZGVzKCRjb3Vyc2UxLCAkY291cnNlMikpIHtcbiAgICAgICAgeE1heDEgPSBNYXRoLm1heCh4TWF4MSwgeE1heDIpO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4TWF4JywgeE1heDEpO1xuICB9XG5cbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgJGNvdXJzZXMpIHtcbiAgICBjb25zdCAkY291cnNlID0gJChjb3Vyc2UpO1xuICAgIGNvbnN0IHggPSAkY291cnNlLmRhdGEoJ3gnKTtcbiAgICBjb25zdCB4TWF4ID0gJGNvdXJzZS5kYXRhKCd4TWF4JykgKyAxO1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgICdsZWZ0JzogMTAwIC8geE1heCAqIHggKyAnJScsXG4gICAgICAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclICsgMXB4KScgLy8gMXB4IGZvciB0aGUgY3NzIGJvcmRlclxuICAgIH0pO1xuICAgIGlmICh4ICsgMSA9PT0geE1heCkge1xuICAgICAgJGNvdXJzZS5jc3MoeyAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclKScgfSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0RhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTsgLy8gdG9kbyBtb3ZlIHRvIERheSBhbmQgcHJveHlcbiAgY29uc3QgZGF5cyA9IFsnRGltYW5jaGUnLCAnTHVuZGknLCAnTWFyZGknLCAnTWVyY3JlZGknLCAnSmV1ZGknLCAnVmVuZHJlZGknLCAnU2FtZWRpJ107XG4gIGNvbnN0IG1vbnRocyA9IFsnSmFudmllcicsICdGw6l2cmllcicsICdNYXJzJywgJ0F2cmlsJywgJ01haScsICdKdWluJywgJ0p1aWxsZXQnLCAnQW/Du3QnLCAnU2VwdGVtYnJlJywgJ09jdG9icmUnLCAnTm92ZW1icmUnLCAnRMOpY2VtYnJlJ107XG4gIGNvbnN0IHN0ciA9IGRheXNbZC5nZXREYXkoKV0gKyAnICcgKyBkLmdldERhdGUoKSArICcgJyArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xuICBQLiREQVRFLmh0bWwoc3RyKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNQb3J0cmFpdChkYXk6IFRFeHBhbmRlZFtdKSB7XG4gIGNvbnN0IG1hdHJpeCA9IGNyZWF0ZU1hdHJpeCgpO1xuICBsZXQgbWF4Q29sdW1uID0gMztcbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgZGF5KSB7XG4gICAgY29uc3QgJGNvdXJzZSA9ICQoUC5odG1sLkNPVVJTRSk7XG4gICAgY29uc3QgcG9zID0gZ2V0RW1wdHlTcGFjZShtYXRyaXgsIGNvdXJzZSk7XG4gICAgJGNvdXJzZS5jc3Moe1xuICAgICAgJ2dyaWQtcm93LXN0YXJ0JzogcG9zLnkxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBwb3MueTIgKyBcIlwiLFxuICAgICAgJ2dyaWQtY29sdW1uLXN0YXJ0JzogcG9zLngxICsgMiArIFwiXCIsXG4gICAgICAnZ3JpZC1jb2x1bW4tZW5kJzogcG9zLngyICsgMiArIFwiXCJcbiAgICB9KTtcbiAgICBtYXhDb2x1bW4gPSBNYXRoLm1heChwb3MueDIgKyAyLCBtYXhDb2x1bW4pO1xuICAgIGlmIChjb3Vyc2UuYmxhY2tsaXN0ZWQpICRjb3Vyc2UuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgZWxzZSAkY291cnNlLmNzcygnYmFja2dyb3VuZCcsIGNvdXJzZS5iYWNrZ3JvdW5kKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgUC4kQ09VUlNFX0NPTlRBSU5FUi5hcHBlbmQoJGNvdXJzZSk7XG4gIH1cbiAgJChQLiQuSE9VUl9MSU5FUykuY3NzKCdncmlkLWNvbHVtbi1lbmQnLCBtYXhDb2x1bW4gKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNMYW5kc2NhcGUoZGF5OiBURXhwYW5kZWRbXSwgZGF5TnVtYmVyOiBudW1iZXIpIHtcbiAgY29uc3QgJGRheSA9ICQoUC5odG1sLkxBTkRTQ0FQRV9EQVkpO1xuICAkZGF5LmNzcyh7XG4gICAgZ3JpZENvbHVtbjogZGF5TnVtYmVyICsgMSArIFwiXCIsXG4gIH0pO1xuICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkZGF5KTtcblxuICBmb3IgKGNvbnN0IGNvdXJzZSBvZiBkYXkpIHtcbiAgICBpZiAoY291cnNlLmJsYWNrbGlzdGVkKSBjb250aW51ZTtcbiAgICBjb25zdCAkY291cnNlID0gJChQLmh0bWwuQ09VUlNFKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3Qgc3RhcnRSb3cgPSAoY291cnNlLnN0YXJ0LmhvdXIgLSBQLlNUQVJUX0hPVVIpICogNCArIGNvdXJzZS5zdGFydC5taW51dGUgLyAxNTtcbiAgICBjb25zdCBlbmRSb3cgPSAoY291cnNlLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBjb3Vyc2UuZW5kLm1pbnV0ZSAvIDE1O1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IGNvdXJzZS5iYWNrZ3JvdW5kLFxuICAgICAgJ2dyaWQtcm93LXN0YXJ0Jzogc3RhcnRSb3cgKyAxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBlbmRSb3cgKyAxICsgXCJcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgJGRheS5hcHBlbmQoJGNvdXJzZSlcbiAgfVxuICBsYW5kc2NhcGVYYWxpZ24oJGRheSk7XG59XG5cbnR5cGUgRHJhd01vZGUgPSAncG9ydHJhaXQnIHwgJ2xhbmRzY2FwZSc7XG5sZXQgZHJhd01vZGU6IERyYXdNb2RlID0gJ3BvcnRyYWl0JztcblxuZnVuY3Rpb24gc2V0RHJhd01vZGUobW9kZTogRHJhd01vZGUpIHtcbiAgZHJhd01vZGUgPSBtb2RlO1xufVxuXG5mdW5jdGlvbiBkcmF3TGFuZHNjYXBlKGRhdGVTdHJpbmc6IHN0cmluZywgc3RvcmFnZT86IFRTdG9yZSkge1xuICBQLiRMQU5EU0NBUEVfQ1VSUkVOVF9EQVkuY3NzKCdncmlkLWNvbHVtbicsIERheS5kYXkoZGF0ZVN0cmluZykgKyAxICsgXCJcIik7XG4gIGlmIChzdG9yYWdlKSB7XG4gICAgZGF0ZVN0cmluZyA9IERheS5tb25kYXkoZGF0ZVN0cmluZyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IGV4cGFuZERhdGEoc3RvcmFnZVtkYXRlU3RyaW5nXSk7XG4gICAgICBkcmF3Q291cnNlc0xhbmRzY2FwZShkYXksIGkpO1xuICAgICAgZGF0ZVN0cmluZyA9IERheS5hZGQoZGF0ZVN0cmluZywgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdQb3J0cmFpdChkYXRlU3RyaW5nOiBzdHJpbmcsIHN0b3JhZ2U/OiBUU3RvcmUpIHtcbiAgaWYgKHN0b3JhZ2UpIHtcbiAgICBjb25zdCBkYXkgPSBleHBhbmREYXRhKHN0b3JhZ2VbZGF0ZVN0cmluZ10pO1xuICAgIGRyYXdDb3Vyc2VzUG9ydHJhaXQoZGF5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3KGRhdGVTdHJpbmc6IHN0cmluZywgc3RvcmFnZT86IFRTdG9yZSkge1xuICBOb3RpZmljYXRpb24uaGlkZSgnY2FsZW5kYXJFcnJvcicpO1xuICAkKFAuJC5DT1VSU0UpLnJlbW92ZSgpO1xuICAkKFAuJC5MQU5EU0NBUEVfREFZKS5yZW1vdmUoKTtcbiAgJChQLiRDQUxFTkRBUikucmVtb3ZlQ2xhc3MoJ3BvcnRyYWl0IGxhbmRzY2FwZScpLmFkZENsYXNzKGRyYXdNb2RlKTtcbiAgaWYgKGRyYXdNb2RlID09PSAnbGFuZHNjYXBlJykgZHJhd0xhbmRzY2FwZShkYXRlU3RyaW5nLCBzdG9yYWdlKTtcbiAgZWxzZSBkcmF3UG9ydHJhaXQoZGF0ZVN0cmluZywgc3RvcmFnZSk7XG4gIGlmIChzdG9yYWdlICE9PSBudWxsKSB7XG4gICAgUC4kQlVUVE9OX1BSRVYucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgUC4kQlVUVE9OX05FWFQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cbiAgZHJhd0RhdGUoZGF0ZVN0cmluZyk7XG59XG5cbmRyYXdMaW5lcygpO1xuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXJEcmF3ZXIgPSB7XG4gIGRyYXc6IGRyYXcsXG4gIHNldERyYXdNb2RlOiBzZXREcmF3TW9kZVxufVxuIiwiaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBJbmFwcEJyb3dzZXIgfSBmcm9tICcuL2luYXBwYnJvd3NlcidcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdSZXF1ZXN0KGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHN0ckFyZ3MgPSBbXVxuICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBzdHJBcmdzLnB1c2goJ1wiJyArIGFyZyArICdcIicpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHN0ckFyZ3MucHVzaChhcmcgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBzdHJBcmdzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3JlcXVlc3Qgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnVuY3Rpb25OYW1lICsgJygnICsgc3RyQXJncy5qb2luKCcsJykgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3QoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSB7XG4gIGNvbnN0IHJlcSA9IGNyZWF0ZVN0cmluZ1JlcXVlc3QoZnVuY3Rpb25OYW1lLCBhcmdzKTtcbiAgcmV0dXJuIEluYXBwQnJvd3Nlci5ldmFsKHJlcSk7XG59XG5cbmZ1bmN0aW9uIHByb21pc2VUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YWl0VW50aWw8UmVzPihmdW5jdGlvbk5hbWU6IHN0cmluZywgYXJnczogYW55W10sIGV4cGVjdGVkUmVzdWx0OiBSZXMsIGZyZXF1ZW5jeTogbnVtYmVyID0gUC5jb20uREVGQVVMVF9VUERBVEVfSU5URVJWQUwpIHtcbiAgbGV0IGludGVydmFsOiBudW1iZXI7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgZnVuY3Rpb24gdGhlbihyZXM6IFJlcykge1xuICAgICAgaWYgKHJlcyA9PSBleHBlY3RlZFJlc3VsdCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBzZXRUaW1lb3V0KGluXywgZnJlcXVlbmN5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbl8oKSB7XG4gICAgICByZXF1ZXN0KGZ1bmN0aW9uTmFtZSwgYXJncylcbiAgICAgICAgLnRoZW4odGhlbilcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbl8oKTtcblxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlZWsoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGRhdGVTdHJpbmcgPSBEYXkubW9uZGF5KGRhdGVTdHJpbmcpO1xuICBhd2FpdCB3YWl0VW50aWwoJ2lzV2Vla0xvYWRlZCcsIFtdLCB0cnVlKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBhd2FpdCByZXF1ZXN0KCdnZXRDdXJyZW50RGF0ZScsIFtdKTtcblxuICBpZiAoY3VycmVudERhdGUgIT09IGRhdGVTdHJpbmcpIHsgLy8gbXVzdCBsb2FkIHdlZWsgYmVmb3JlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgnY2xpY2tCdXR0b24nLCBbZGF0ZVN0cmluZ10pXG4gICAgaWYgKCFyZXMpIHRocm93IG5ldyBFcnJvcihQLmVyci5CVVRUT05fTk9UX0ZPVU5EKTtcbiAgICBlbHNlIGF3YWl0IHByb21pc2VUaW1lb3V0KFAuY29tLlRJTUVPVVRfQUZURVJfQlVUVE9OX1BSRVNTKTtcbiAgICBhd2FpdCB3YWl0VW50aWwoJ2dldEN1cnJlbnREYXRlJywgW10sIGRhdGVTdHJpbmcpO1xuICAgIGF3YWl0IHdhaXRVbnRpbCgnaXNXZWVrTG9hZGVkJywgW10sIHRydWUpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgncGFyc2VUaGlzV2VlaycsIFtdKVxuICBjb25zb2xlLmxvZygncmVjZWl2ZWQgd2VlaycsIHJlcyk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBjb25zdCBDb21tdW5pY2F0aW9uID0gKGZ1bmN0aW9uKCkgeyAvLyBjb21tdW5pY2F0aW9uIHdpdGggd2Vidmlld1xuXG4gIHJldHVybiB7XG4gICAgcmVxdWVzdFdlZWs6IHJlcXVlc3RXZWVrXG4gIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJ1xuXG5jb25zdCBtb250aHMgPSBbJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSddO1xuY29uc3Qgd2VlayA9IFsnTCcsICdNJywgJ00nLCAnSicsICdWJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgZHJhd25EYXRlID0gZGF0ZVN0cmluZztcbiAgUC4kREFURV9QSUNLRVIuaHRtbChcIlwiKTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vlaykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU5hbWVcIj4nICsgZGF5ICsgJzwvZGl2PicpXG4gIH1cblxuICBjb25zdCBtb250aCA9IERheS5tb250aChkYXRlU3RyaW5nKTtcbiAgbGV0IGRhdGUgPSBEYXkuZmlyc3REYXlPZk1vbnRoKGRhdGVTdHJpbmcpO1xuXG4gIFAuJERBVEVfUElDS0VSX01PTlRILmh0bWwobW9udGhzW21vbnRoXSk7XG5cbiAgY29uc3Qgb2Zmc2V0ID0gRGF5LmRheShkYXRlKSAtIDE7IC8vIGZyaS0+MSwgdGh1LT4yLCAuLi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXQ7IGkrKykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU51bWJlciBkaXNhYmxlZFwiPicgKyBEYXkuZGF0ZShkYXRlKSArICc8L2Rpdj4nKTtcbiAgfVxuXG4gIGNvbnN0IHRvZGF5ID0gRGF5LnRvZGF5KCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBDYWxlbmRhci5nZXRDdXJyZW50RGF5KCk7XG4gIHdoaWxlIChEYXkubW9udGgoZGF0ZSkgPT09IG1vbnRoKSB7XG4gICAgY29uc3QgJGVsID0gJCgnPGRpdiBjbGFzcz1cImRheU51bWJlclwiIGRhdGU9XCInICsgZGF0ZSArICdcIj4nICsgRGF5LmRhdGUoZGF0ZSkgKyAnPC9kaXY+Jyk7XG4gICAgaWYgKGRhdGUgPT09IGN1cnJlbnQpICRlbC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICBpZiAoZGF0ZSA9PT0gdG9kYXkpICRlbC5hZGRDbGFzcygndG9kYXknKTtcbiAgICAkZWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkYnRuID0gJCh0aGlzKTtcbiAgICAgICRidG4uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gJGJ0bi5hdHRyKCdkYXRlJyk7XG4gICAgICBpZihkYXRlU3RyaW5nKSBDYWxlbmRhci5kcmF3KGRhdGVTdHJpbmcpO1xuICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGF0dHJpYnV0ZSAnZGF0ZScgb24gZGF0ZXBpY2tlciBidXR0b25cIik7XG4gICAgfSlcbiAgICBQLiREQVRFX1BJQ0tFUi5hcHBlbmQoJGVsKTtcbiAgICBkYXRlID0gRGF5LmFkZChkYXRlLCAxKTtcbiAgfVxufVxuXG5sZXQgZHJhd25EYXRlOiBzdHJpbmc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGRyYXduRGF0ZSA9IERheS50b2RheSgpO1xuXG4gIFAuJERBVEVfUElDS0VSX1BSRVYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRyYXduRGF0ZSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcbiAgICBjcmVhdGUoZC50b0RhdGVTdHJpbmcoKSk7XG4gIH0pXG4gIFAuJERBVEVfUElDS0VSX05FWFQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRyYXduRGF0ZSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcbiAgICBjcmVhdGUoZC50b0RhdGVTdHJpbmcoKSk7XG4gIH0pXG5cbiAgUC4kREFURV9QSUNLRVJfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgaWYgKCEkdGFyZ2V0LmlzKFAuJERBVEVfUElDS0VSX1BSRVYpICYmICEkdGFyZ2V0LmlzKFAuJERBVEVfUElDS0VSX05FWFQpKSB7XG4gICAgICBQLiREQVRFX1BJQ0tFUl9DT05UQUlORVIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSlcblxufVxuaW5pdCgpO1xuXG5leHBvcnQgY29uc3QgRGF0ZVBpY2tlciA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuZnVuY3Rpb24gYWRkRGF5KGQ6IERhdGUsIGRheXM6IG51bWJlcikge1xuICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBkYXlzKTtcbiAgaWYgKGQuZ2V0RGF5KCkgPT09IDAgfHwgZC5nZXREYXkoKSA9PT0gNikge1xuICAgIGlmIChkYXlzID49IDApIGFkZERheShkLCAxKTtcbiAgICBlbHNlIGFkZERheShkLCAtMSk7XG4gIH1cbiAgcmV0dXJuIGQ7XG59XG5cbmZ1bmN0aW9uIHRvZGF5KCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgaWYgKGRhdGUuZ2V0SG91cnMoKSA+PSBQLlRPREFZX01BWF9IT1VSKSAvLyBzaSBwYXNzw6kgVE9EQVlfTUFYX0hPVVIsIHBhc3NlIGEgbGVuZGVtYWluIG1hdGluXG4gICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAyNCAtIFAuVE9EQVlfTUFYX0hPVVIgKyBQLlNUQVJUX0hPVVIpO1xuICBhZGREYXkoZGF0ZSwgMCk7IC8vIGRpbWFuY2hlIGRldmllbnQgbHVuZGlcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBjb25zdCBEYXkgPSAoZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHtcbiAgICB0b2RheSxcbiAgICBkYXRlOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKS5nZXREYXRlKCk7XG4gICAgfSxcbiAgICBtb250aDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0TW9udGgoKTtcbiAgICB9LFxuICAgIGRheTogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0RGF5KCk7XG4gICAgfSxcbiAgICBmaXJzdE1vbmRheU9mTW9udGg6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgZC5zZXREYXRlKDEpO1xuICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSArIChkYXkgPT0gMCA/IDEgOiBkYXkgPT0gMSA/IDAgOiA3IC0gZGF5KTtcbiAgICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gICAgZmlyc3REYXlPZk1vbnRoOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGQuc2V0RGF0ZSgxKTtcbiAgICAgIGFkZERheShkLCAwKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gICAgbW9uZGF5OiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09IDAgPyAtNiA6IDEpOyAvLyBhZGp1c3Qgd2hlbiBkYXkgaXMgc3VuZGF5XG4gICAgICBkLnNldERhdGUoZGlmZik7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nLCBkYXlzOiBudW1iZXIpIHtcbiAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBhZGREYXkoZCwgZGF5cyk7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9XG4gIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJ1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJ1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmF3ZXIgfSBmcm9tICcuL2NhbGVuZGFyRHJhd2VyJ1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnLi9kYXRlcGlja2VyJ1xuXG4kKGRvY3VtZW50LmJvZHkpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIGNvbnN0IHNldCA9IFtlLnRhcmdldCwgLi4uJChlLnRhcmdldCkucGFyZW50cygpXTtcbiAgZm9yIChjb25zdCBlbCBvZiBzZXQpIHtcbiAgICBpZiAoKGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCB8fCBlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoKSAmJiAkKGVsKS5jc3MoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgJChlbCkuYWRkQ2xhc3MoJ3RvdWNoZWQnKS5vbmUoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RvdWNoZWQnKTtcbiAgICAgIH0pXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBsYW5kc2NhcGUgPSAoc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUuaW5kZXhPZigncG9ydHJhaXQnKSA9PT0gLTEpO1xuQ2FsZW5kYXJEcmF3ZXIuc2V0RHJhd01vZGUobGFuZHNjYXBlID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnKTtcblxuZnVuY3Rpb24gb25TY3JlZW5PcmllbnRDaGFuZ2UoKSB7XG4gIGNvbnN0IGxhbmRzY2FwZSA9IChzY3JlZW4ub3JpZW50YXRpb24udHlwZS5pbmRleE9mKCdwb3J0cmFpdCcpID09PSAtMSk7XG4gIENhbGVuZGFyRHJhd2VyLnNldERyYXdNb2RlKGxhbmRzY2FwZSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jyk7XG4gIENhbGVuZGFyLmRyYXcoQ2FsZW5kYXIuZ2V0Q3VycmVudERheSgpKTtcbn1cbnNjcmVlbi5vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvblNjcmVlbk9yaWVudENoYW5nZSk7XG5cblAuJEJVVFRPTl9TRVRUSU5HUy5jbGljayhmdW5jdGlvbigpIHtcbiAgU2V0dGluZ3Muc2hvdygpXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBDYWxlbmRhci5kcmF3KENhbGVuZGFyLmdldEN1cnJlbnREYXkoKSk7IC8vIHJlZHJhdyB3aXRoIG5ldyBmaWx0ZXJzXG4gICAgfSk7XG59KTtcblxuUC4kQlVUVE9OX1BSRVYuY2xpY2soZnVuY3Rpb24oKSB7XG4gIGlmIChQLiRCVVRUT05fUFJFVi5pcygnLmRpc2FibGVkJykpIHJldHVybjtcbiAgY29uc3QgZGF5ID0gRGF5LmFkZChDYWxlbmRhci5nZXRDdXJyZW50RGF5KCksIC0xKTtcbiAgQ2FsZW5kYXIuZHJhdyhkYXkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgUC4kQ0FMRU5EQVJfQ09OVEVOVC5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcbiAgfSk7XG59KTtcblAuJEJVVFRPTl9ORVhULmNsaWNrKGZ1bmN0aW9uKCkge1xuICBpZiAoUC4kQlVUVE9OX05FWFQuaXMoJy5kaXNhYmxlZCcpKSByZXR1cm47XG4gIGNvbnN0IGRheSA9IERheS5hZGQoQ2FsZW5kYXIuZ2V0Q3VycmVudERheSgpLCAxKTtcbiAgQ2FsZW5kYXIuZHJhdyhkYXkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgUC4kQ0FMRU5EQVJfQ09OVEVOVC5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcbiAgfSk7XG59KTtcblxuUC4kREFURV9DT05UQUlORVIuY2xpY2soZnVuY3Rpb24oKSB7XG4gIFAuJERBVEVfUElDS0VSX0NPTlRBSU5FUi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIGxldCBkYXkgPSBDYWxlbmRhci5nZXRDdXJyZW50RGF5KCk7XG4gIGlmIChkYXkgPT09IG51bGwpIC8vIHNvbHZlcyBidWcgd2hlbiBub3QgeWV0IGxvYWRlZFxuICAgIGRheSA9IERheS50b2RheSgpO1xuICBEYXRlUGlja2VyLmNyZWF0ZShkYXkpO1xufSlcblxuLy8gZ2lmcyByaWdvbG9zXG5sZXQgZ2lmUmVxdWVzdDogSlF1ZXJ5LmpxWEhSO1xuXG5QLiRHSUZfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRHSUZfQ09OVEFJTkVSLmhpZGUoKTtcbiAgUC4kR0lGX0lNRy5hdHRyKCdzcmMnLCAnJyk7XG59KVxuXG5QLiRDT1VSU0VfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICBjb25zdCAkZWwgPSAkKGV2dC50YXJnZXQpO1xuICBjb25zdCAkY2xpY2tlZEdyYWRlID0gJGVsLnBhcmVudHMoKS5hZGQoJGVsKS5maWx0ZXIoUC4kLkNPVVJTRSk7XG4gIGlmICgkY2xpY2tlZEdyYWRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IHRleHQgPSAkY2xpY2tlZEdyYWRlLmZpbmQoJ2InKS5odG1sKCkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGdpZlJlcXVlc3QpIGdpZlJlcXVlc3QuYWJvcnQoKTtcbiAgZ2lmUmVxdWVzdCA9ICQucG9zdChQLkdJRl9VUkxfUEhQLCB7IHRleHQ6IHRleHQgfSwgZnVuY3Rpb24oZGF0YSkge1xuICAgIFAuJEdJRl9JTUcuYXR0cignc3JjJywgZGF0YSk7XG4gICAgUC4kR0lGX0NPTlRBSU5FUi5zaG93KCk7XG4gIH0pO1xufSlcblxuUC4kQlVUVE9OX0FCT1VULmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRBQk9VVF9DT05UQUlORVIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xufSlcblxuUC4kQlVUVE9OX0FCT1VUX0NMT1NFLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRBQk9VVF9DT05UQUlORVIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufSlcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgVEZpbHRlciwgVEV4cGFuZGVkIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBsb2FkZWRGaWx0ZXI6IFRGaWx0ZXI7XG5sZXQgZmlsdGVyTmFtZSA9ICcnO1xuXG5mdW5jdGlvbiBjaGVja0xpc3QoY2xhc3NlOiBURXhwYW5kZWQsIGxpc3Q6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNvbnRlbnUgPSBjbGFzc2UudGl0bGUuc3BsaXQoJzxicj4nKVxuICBmb3IgKGNvbnN0IGxpZ25lIG9mIGNvbnRlbnUpIHtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGxpc3QpIGlmIChleHByX3Rlc3QobGlnbmUsIGVsKSkgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZXhwcl90ZXN0KHN0cjogc3RyaW5nLCBleHByZXNzaW9uOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRfcmVnZXggPSAvXFx7W15cXH1dK1xcfS9nXG4gIGNvbnN0IG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlcGxhY2VtZW50X3JlZ2V4KVxuICBpZiAobWF0Y2hlcykgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBtYXRjaC5yZXBsYWNlKCd7JywgJycpLnJlcGxhY2UoJ30nLCAnJylcbiAgICBpZiAoU3RvcmFnZS5oYXModmFyaWFibGUpKSBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKG1hdGNoLCBTdG9yYWdlLmdldCh2YXJpYWJsZSkpXG4gIH1cbiAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChleHByZXNzaW9uKVxuICByZXR1cm4gcmVnZXhwLnRlc3Qoc3RyKVxufVxuXG5mdW5jdGlvbiBmZXRjaEpTT04odXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPE9iamVjdD4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgJC5nZXRKU09OKHVybCwgZnVuY3Rpb24oanNvbjogT2JqZWN0KSB7XG4gICAgICByZXNvbHZlKGpzb24pO1xuICAgIH0sIHJlamVjdCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJFbGVtZW50KGVsOiBURXhwYW5kZWQsIGZpbHRlciA9IGxvYWRlZEZpbHRlcik6IGJvb2xlYW4geyAvLyByZXR1cm5zIGJvb2wgYmxhY2tsaXN0ZWQgKHJlY3Vyc2l2ZSlcbiAgbGV0IHJlcyA9IGZhbHNlOyAvLyB3aGl0ZWxpc3TDqSBwYXIgZMOpZmF1dFxuICBpZiAoIShTdG9yYWdlLmhhcyhmaWx0ZXIua2V5KSkgfHwgU3RvcmFnZS5nZXQoZmlsdGVyLmtleSkgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKGZpbHRlci53aGl0ZWxpc3QpIHtcbiAgICBpZiAoY2hlY2tMaXN0KGVsLCBmaWx0ZXIud2hpdGVsaXN0KSkgcmVzID0gZmFsc2U7XG4gICAgZWxzZSBpZiAoZmlsdGVyLmJsYWNrbGlzdCkge1xuICAgICAgaWYgKGNoZWNrTGlzdChlbCwgZmlsdGVyLmJsYWNrbGlzdCkpIHJldHVybiB0cnVlOyAvLyBUT0RPIGZpbHRyZSBkb2l0IG1hdGNoZXIgbGEgd2hpdGVsaXN0ID8/XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXIuc3ViZmlsdGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGNvbnN0IHN1YmZpbHRlciBvZiBmaWx0ZXIuc3ViZmlsdGVycykge1xuICAgICAgaWYgKGZpbHRlckVsZW1lbnQoZWwsIHN1YmZpbHRlcikpIHJldHVybiB0cnVlOyAvLyBhIMOpdMOpIGJsYWNrbGlzdMOpXG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGaWx0ZXIobmFtZTogc3RyaW5nKSB7XG4gIGlmIChuYW1lID09PSBmaWx0ZXJOYW1lICYmIG5hbWUgIT09ICcnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlZEZpbHRlcik7XG4gIGZpbHRlck5hbWUgPSBuYW1lO1xuICBsb2FkZWRGaWx0ZXIgPSA8VEZpbHRlcj5hd2FpdCBmZXRjaEpTT04oJ2ZpbHRlcnMvJyArIGZpbHRlck5hbWUgKyAnLmpzb24nKTtcbiAgcmV0dXJuIGxvYWRlZEZpbHRlcjtcbn1cblxuaW50ZXJmYWNlIElGaWx0ZXIge1xuICBmaWx0ZXJFbGVtZW50OiAoZWw6IFRFeHBhbmRlZCwgZmlsdGVyPzogVEZpbHRlcikgPT4gYm9vbGVhbjtcbiAgbG9hZEZpbHRlcjogKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxURmlsdGVyPjtcbiAgcmVhZG9ubHkgbG9hZGVkRmlsdGVyOiBURmlsdGVyO1xufVxuXG5leHBvcnQgY29uc3QgRmlsdGVyOiBJRmlsdGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgZmlsdGVyRWxlbWVudCxcbiAgICBsb2FkRmlsdGVyLFxuICAgIGdldCBsb2FkZWRGaWx0ZXIoKTogVEZpbHRlciB7XG4gICAgICByZXR1cm4gbG9hZGVkRmlsdGVyO1xuICAgIH1cbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcbmxldCByZWY6IEluQXBwQnJvd3NlcjtcbmNvbnN0IHdlYnZpZXdSZWZlcmVuY2VzOiBJbkFwcEJyb3dzZXJbXSA9IFtdOyAvL2NvcmRvdmEncyBpbmFwcGJyb3dzZXIgaGFzIHdlaXJkIGJlaGF2aW91ciB3aGVuIGl0IGNvbWVzIHRvIGNsb3NpbmcgLyBvcGVuaW5nIHdlYnZpZXdzLi4uXG5sZXQgY3VycmVudFVybDoga2V5b2YgdHlwZW9mIFAudXJsO1xuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlU2NyaXB0KHRleHRTY3JpcHQ6IHN0cmluZykge1xuICBjb25zdCBjb25uZWN0ZWQgPSBhd2FpdCBwcm9taXNlRXhlY3V0ZShQLmNvbS5GVU5DVElPTl9JU19DT05ORUNURUQpO1xuXG4gIGlmICghY29ubmVjdGVkICYmIGxvYWRlZCkge1xuICAgIGNvbnNvbGUud2FybignSW5BcHBCcm93c2VyIGlzIGRpc2Nvbm5lY3RlZCwgcmVsb2FkaW5nJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ3Jlc3RhcnQnKTsgLy8gVE9ETyByZW5hbWUgdG8gcmVsb2FkXG4gICAgYXdhaXQgcmVsb2FkKCk7XG4gICAgTm90aWZpY2F0aW9uLmhpZGUoJ3Jlc3RhcnQnKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHByb21pc2VFeGVjdXRlKHRleHRTY3JpcHQpO1xuXG4gIGlmICh0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAncGFja2V0aWZpZWQnIGluIHJlcyAmJiByZXMucGFja2V0aWZpZWQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdW5wYWNrKCk7XG4gIH1cbiAgZWxzZSByZXR1cm4gcmVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bnBhY2soKSB7XG4gIGxldCBwYWNrZXRzID0gJyc7XG4gIGxldCBwYWNrZXQ7XG5cbiAgZG8ge1xuICAgIHBhY2tldCA9IGF3YWl0IHByb21pc2VFeGVjdXRlKCdnZXRQYWNrZXQoKScpO1xuICAgIGlmIChwYWNrZXQpIHBhY2tldHMgKz0gcGFja2V0O1xuICB9IHdoaWxlIChwYWNrZXQpO1xuXG4gIGxldCBvYmo7XG4gIHRyeSB7XG4gICAgb2JqID0gSlNPTi5wYXJzZShwYWNrZXRzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIHJlc29sdmUgcGFja2V0czonLCBwYWNrZXRzKTtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHRocm93IG5ldyBFcnJvcihQLmVyci5DQUxFTkRBUl9FUlJPUik7XG4gIH1cbiAgY29uc29sZS5sb2coJ3Jlc29sdmVkIHBhY2tldCA6Jywgb2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dGUodGV4dFNjcmlwdDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghbG9hZGVkKSByZWplY3QobmV3IEVycm9yKFAuZXJyLldFQlZJRVdfTk9UX0xPQURFRCkpO1xuICAgIGVsc2Uge1xuICAgICAgcmVmLmV4ZWN1dGVTY3JpcHQoeyBjb2RlOiB0ZXh0U2NyaXB0IH0sIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdFswXSk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RpbWVvdXQgZXJyJykpO1xuICAgICAgfSwgUC5JTkFQUEJST1dTRVJfRVhFQ1VURV9USU1FT1VUKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaFNjcmlwdCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZXJyb3I6IHJlamVjdFxuICAgIH0pO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVsb2FkKCkge1xuICBjb25zb2xlLmxvZygncmVsb2FkaW5nIEluQXBwQnJvd3NlcicpO1xuICAvLyByZWYuY2xvc2UoKTtcbiAgLy8gcmVmID0gbnVsbDtcbiAgYXdhaXQgbG9hZChjdXJyZW50VXJsKTtcbiAgYXdhaXQgaW5qZWN0U2NyaXB0KCk7XG4gIGNvbnNvbGUubG9nKCdyZWxvYWQgZG9uZS4nKTtcbn1cblxuZnVuY3Rpb24ga2V5SXNWYWxpZCh1cmxLZXk6IHN0cmluZyk6IHVybEtleSBpcyBrZXlvZiB0eXBlb2YgUC51cmwge1xuICByZXR1cm4gdXJsS2V5IGluIFAudXJsO1xufVxuXG5mdW5jdGlvbiBsb2FkKHVybEtleTogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAoa2V5SXNWYWxpZCh1cmxLZXkpKSB7XG4gICAgICBjdXJyZW50VXJsID0gdXJsS2V5O1xuICAgICAgY29uc29sZS5sb2coY29yZG92YSwgKHdpbmRvdyBhcyBhbnkpLmNvcmRvdmEpO1xuICAgICAgd2Vidmlld1JlZmVyZW5jZXMucHVzaChjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKFAudXJsW3VybEtleV0sICdfYmxhbmsnLCBQLklOQVBQQlJPV1NFUl9TRVRUSU5HUykpO1xuICAgICAgcmVmID0gd2Vidmlld1JlZmVyZW5jZXNbd2Vidmlld1JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0b3AnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luYXBwYnJvd2VyIGxvYWRlZCcpO1xuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSByZWplY3QobmV3IEVycm9yKCd1cmwga2V5IG5vdCByZWNvZ25pemVkJykpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0U2NyaXB0KCkge1xuICBjb25zdCBpbmplY3Rpb24gPSBmZXRjaFNjcmlwdChQLnNjcmlwdC5JTkpFQ1RJT04pO1xuICBjb25zdCBqcXVlcnkgPSBmZXRjaFNjcmlwdChQLnNjcmlwdC5KUVVFUlkpO1xuXG4gIGNvbnN0IGpxdWVyeVRleHQgPSBhd2FpdCBqcXVlcnk7XG4gIGF3YWl0IHByb21pc2VFeGVjdXRlKGpxdWVyeVRleHQpO1xuICBjb25zdCBpbmplY3Rpb25UZXh0ID0gYXdhaXQgaW5qZWN0aW9uO1xuICBhd2FpdCBwcm9taXNlRXhlY3V0ZShpbmplY3Rpb25UZXh0KTtcbn1cblxuZXhwb3J0IGNvbnN0IEluYXBwQnJvd3NlciA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4ge1xuICAgIHJlbG9hZDogcmVsb2FkLFxuICAgIGxvYWQ6IGxvYWQsXG4gICAgaW5qZWN0U2NyaXB0OiBpbmplY3RTY3JpcHQsXG4gICAgZXZhbDogZXhlY3V0ZVNjcmlwdCxcbiAgICBnZXRSZWZlcmVuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG4gIH1cblxufSkoKTtcbiIsImltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuXG5leHBvcnQgdmFyIE5ldHdvcmsgPSAoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHN0YXRlID0gJ29ubGluZSc7XG5cbiAgZnVuY3Rpb24gb2ZmbGluZSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdG9yIG5vdyBvZmZsaW5lJyk7XG4gICAgc3RhdGUgPSAnb2ZmbGluZSc7XG4gICAgTm90aWZpY2F0aW9uLmhpZGUoJ29ubGluZScpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdvZmZsaW5lJyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbmxpbmUoKSB7XG4gICAgY29uc29sZS5sb2coJ25hdmlnYXRvciBub3cgb25saW5lJyk7XG4gICAgc3RhdGUgPSAnb25saW5lJztcbiAgICBOb3RpZmljYXRpb24uaGlkZSgnb2ZmbGluZScpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdvbmxpbmUnLCB7IGR1cmF0aW9uOiAxNTAwIH0pO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIG9mZmxpbmUsIGZhbHNlKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgb25saW5lLCBmYWxzZSk7XG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgPT09IENvbm5lY3Rpb24uTk9ORSAmJiBzdGF0ZSA9PT0gJ29ubGluZScpIG9mZmxpbmUoKTtcbiAgICBpZiAobmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSAhPT0gQ29ubmVjdGlvbi5OT05FICYmIHN0YXRlID09PSAnb2ZmbGluZScpIG9ubGluZSgpO1xuICB9LCAxMDAwKTtcblxuICByZXR1cm4ge1xuICAgIHdoZW5PbmxpbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHN0YXRlID09PSAnb25saW5lJyB8fCBuYXZpZ2F0b3IuY29ubmVjdGlvbi50eXBlICE9PSBDb25uZWN0aW9uLk5PTkUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICdvbmxpbmUnIHx8IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgIT09IENvbm5lY3Rpb24uTk9ORSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0IG9ubGluZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gJ29ubGluZSc7XG4gICAgfSxcbiAgICBnZXQgb2ZmbGluZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gJ29mZmxpbmUnO1xuICAgIH1cbiAgfVxuXG59KSgpO1xuIiwidmFyIHRpbWVvdXRzOiB7IFtrZXk6IHN0cmluZ10gOiBudW1iZXJ9ID0ge307XG5cbmludGVyZmFjZSBzaG93U2V0dGluZ3Mge1xuICBkdXJhdGlvbjogZmFsc2UgfCBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHNob3cobm90aWZOYW1lOiBzdHJpbmcsIHsgZHVyYXRpb24gPSBmYWxzZSB9OiBQYXJ0aWFsPHNob3dTZXR0aW5ncz4gPSB7fSkge1xuICBjb25zb2xlLmRlYnVnKCdub3RpZmljYXRpb246Jywgbm90aWZOYW1lKTtcbiAgaWYgKG5vdGlmTmFtZSBpbiB0aW1lb3V0cykgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW25vdGlmTmFtZV0pO1xuICAkKCcubm90aWZpY2F0aW9uIycgKyBub3RpZk5hbWUpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgaWYgKGR1cmF0aW9uICYmIGR1cmF0aW9uID4gMCkge1xuICAgIHRpbWVvdXRzW25vdGlmTmFtZV0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJCgnLm5vdGlmaWNhdGlvbiMnICsgbm90aWZOYW1lKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUobm90aWZOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKG5vdGlmTmFtZSBpbiB0aW1lb3V0cykgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW25vdGlmTmFtZV0pO1xuICAkKCcubm90aWZpY2F0aW9uIycgKyBub3RpZk5hbWUpLmFkZENsYXNzKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IHZhciBOb3RpZmljYXRpb24gPSAoZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93OiBzaG93LFxuICAgIGhpZGU6IGhpZGVcbiAgfTtcblxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBQcm94eSA9IHtcblxuICAvLyBBUFBfVkVSU0lPTjogMTAwNjAsXG4gIFNUT1JBR0VfVkVSU0lPTjogJzgnLFxuXG4gICRDQUxFTkRBUjogJCgnI2NhbGVuZGFyJyksXG4gICRDQUxFTkRBUl9DT05URU5UOiAkKCcjY2FsZW5kYXIgLmNvbnRlbnQnKSxcblxuICAkTEFORFNDQVBFX0NVUlJFTlRfREFZOiAkKCcjbGFuZHNjYXBlQ3VycmVudERheScpLFxuXG4gICRDT1VSU0VfQ09OVEFJTkVSOiAkKCcjaGV1cmVzJyksXG5cbiAgJERBVEVfQ09OVEFJTkVSOiAkKCduYXYgZGl2JyksXG4gICREQVRFOiAkKCduYXYgc3BhbicpLFxuXG4gICREQVRFX1BJQ0tFUl9DT05UQUlORVI6ICQoJyNkYXRlUGlja2VyJyksXG4gICREQVRFX1BJQ0tFUjogJCgnI2RhdGVQaWNrZXIgLmRhdGVzJyksXG4gICREQVRFX1BJQ0tFUl9QUkVWOiAkKCcjZGF0ZVBpY2tlciAucHJldicpLFxuICAkREFURV9QSUNLRVJfTkVYVDogJCgnI2RhdGVQaWNrZXIgLm5leHQnKSxcbiAgJERBVEVfUElDS0VSX01PTlRIOiAkKCcjZGF0ZVBpY2tlciAubW9udGgnKSxcblxuICAkQlVUVE9OX1BSRVY6ICQoJy52ZWlsbGUnKSxcbiAgJEJVVFRPTl9ORVhUOiAkKCcubGVuZGVtYWluJyksXG4gICRCVVRUT05fU0VUVElOR1M6ICQoJ2J1dHRvbi5zZXR0aW5ncycpLFxuICAkQlVUVE9OX0FCT1VUOiAkKCdidXR0b24uYWJvdXQnKSxcbiAgJEJVVFRPTl9BQk9VVF9DTE9TRTogJCgnI2Fib3V0IGJ1dHRvbicpLFxuXG4gICRTRVRUSU5HU19DT05UQUlORVI6ICQoJyNzZXR0aW5ncycpLFxuICAkU0VUVElOR1NfRklMVEVSOiAkKCcjc2V0dGluZ3MgLmZpbHRlcnMnKSxcbiAgJFNFVFRJTkdTX0FQUEVBUkFOQ0U6ICQoJyNzZXR0aW5ncyAuYXBwZWFyYW5jZScpLFxuICAkU0VUVElOR1NfQ0FOQ0VMOiAkKCcjc2V0dGluZ3MgLmNhbmNlbCcpLFxuICAkU0VUVElOR1NfU0FWRTogJCgnI3NldHRpbmdzIC5zYXZlJyksXG4gICRTRVRUSU5HU19SRVNFVDogJCgnI3NldHRpbmdzIC5yZXNldCcpLFxuICAkU0VUVElOR1NfVEhFTUU6ICQoJyNzZXR0aW5ncyAudGhlbWUnKSxcbiAgJFNFVFRJTkdTX0dSQURFOiAkKCcuY2xhc3NlRHJvcERvd24nKSxcblxuICAkQUJPVVRfQ09OVEFJTkVSOiAkKCcjYWJvdXQnKSxcblxuICAkVEhFTUVfU1RZTEVTSEVFVDogJCgnI3RoZW1lU3R5bGVzaGVldCcpLFxuXG4gICRHSUZfQ09OVEFJTkVSOiAkKCcjZ2lmLWNvbnRhaW5lcicpLFxuICAkR0lGX0lNRzogJCgnI2dpZi1jb250YWluZXIgaW1nJyksXG5cbiAgSU5BUFBCUk9XU0VSX1NFVFRJTkdTOiAnbG9jYXRpb249bm8sem9vbT1ubyxoaWRkZW49eWVzLHNob3VsZFBhdXNlT25TdXNwZW5kPW5vJyxcbiAgSU5BUFBCUk9XU0VSX0VYRUNVVEVfVElNRU9VVDogNTAwMCxcblxuICBHSUZfVVJMOiAnaHR0cHM6Ly9wb2x5dGVjaC50aGlzc21hLmZyL2dpZnMvJyxcbiAgR0lGX1VSTF9QSFA6ICdodHRwczovL3BvbHl0ZWNoLnRoaXNzbWEuZnIvbmljZWdpZi5waHAnLFxuXG4gIFNUQVJUX0hPVVI6IDgsXG4gIEVORF9IT1VSOiAyMCxcblxuICBUT0RBWV9NQVhfSE9VUjogMjEsXG5cbiAgJDoge1xuICAgIENPVVJTRTogJy5jbGFzc2UnLFxuICAgIExBTkRTQ0FQRV9EQVk6ICcjaGV1cmVzIC5kYXknLFxuICAgIEhPVVJfTElORVM6ICcjaGV1cmVzIC5saWduZScsXG4gICAgU0VUVElOR1NfRklMVEVSOiAnI3NldHRpbmdzIC5maWx0cmUnXG4gIH0sXG5cbiAgZXJyOiB7XG4gICAgQlVUVE9OX05PVF9GT1VORDogJ2J1dHRvbiBub3QgZm91bmQnLFxuICAgIFdFQlZJRVdfTk9UX0xPQURFRDogJ3dlYnZpZXcgbm90IGxvYWRlZCcsXG4gICAgUkVRVUVTVF9DQU5DRUxMRUQ6ICdyZXF1ZXN0IGNhbmNlbGxlZCcsXG4gICAgQ0FMRU5EQVJfRVJST1I6ICdjYWxlbmRhciBlcnJvcidcbiAgfSxcblxuICBodG1sOiB7XG4gICAgSE9VUjogJzxkaXYgY2xhc3M9XCJoZXVyZVwiPjwvZGl2PicsXG4gICAgSE9VUl9MSU5FOiAnPGRpdiBjbGFzcz1cImxpZ25lXCI+PC9kaXY+JyxcbiAgICBDT1VSU0U6ICc8ZGl2IGNsYXNzPVwiY2xhc3NlXCI+PC9kaXY+JyxcbiAgICBDT1VSU0VfQ09OVEVOVF9XUkFQUEVSOiAnPGRpdiBjbGFzcz1cIndyYXBwZXJcIj48L2Rpdj4nLFxuICAgIENPVVJTRV9DT05URU5UOiAnPGRpdiBjbGFzcz1cImNvbnRlbnRcIj48L2Rpdj4nLFxuICAgIExBTkRTQ0FQRV9EQVk6ICc8ZGl2IGNsYXNzPVwiZGF5XCI+PC9kaXY+JyxcbiAgICBTRVRUSU5HU19DSEVDS0JPWDogJzxpbnB1dCB0eXBlPWNoZWNrYm94IGNoZWNrZWQvPicsXG4gIH0sXG5cbiAgc3RvcmFnZToge1xuICAgIEdSQURFOiAnY2xhc3NlJyxcbiAgICBTQVZFRF9EQVlTOiAnZGF5c0NhY2hlJyxcbiAgICBUSEVNRTogJ3RoZW1lJyxcbiAgICBWRVJTSU9OOiAndmVyc2lvbicsXG4gICAgQUNLTk9XTEVER0VEOiAnYWNrJ1xuICB9LFxuXG4gIGRheToge1xuICAgIE1PTjogMSwgVFVFOiAyLCBXRUQ6IDMsIFRIVTogNCwgRlJJOiA1LCBTQVQ6IDYsIFNVTjogMCxcbiAgfSxcblxuICBzY3JpcHQ6IHtcbiAgICBJTkpFQ1RJT046ICdpbmplY3Rpb24uanMnLFxuICAgIEpRVUVSWTogJ2pxdWVyeS5qcydcbiAgfSxcblxuICBkaXI6IHtcbiAgICBUSEVNRVM6ICdjc3MvdGhlbWVzLydcbiAgfSxcblxuICBjb206IHtcbiAgICBUSU1FT1VUX0FGVEVSX0JVVFRPTl9QUkVTUzogMjAwLFxuICAgIERFRkFVTFRfVVBEQVRFX0lOVEVSVkFMOiAyMDAsXG4gICAgRlVOQ1RJT05fSVNfQ09OTkVDVEVEOiAnaXNDb25uZWN0ZWQoKSdcbiAgfSxcblxuICB0aGVtZToge1xuICAgIERFRkFVTFQ6ICdkZWZhdWx0J1xuICB9LFxuXG4gIHVybDoge1xuICAgICdwZWlwMSc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmODdhOTg4MmU3NGEzZjc2ZTBiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdwZWlwMic6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGU3NDg1ZDliZWUyYzg0ZGJiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdwZWlwYyc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmODdiMDM1ZWJmMjcyYTZhZGZiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdwZWlwZCc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmODA3MzdlZWQ1NjE5YTA0MzJiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdldDMnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhhMjk2YTJmZmIwMDM3ZDViYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnZXQ0JzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4ZjA0ZjRhNmI5MGUxN2Y3MWI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2V0NSc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGM4ZGY0MWEwYTdlZjQ4ZjdiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdhcHAzJzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4YjBkYTAxZDk4NjZjNmIwNmI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2FwcDQnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjgyNGYxZWNjZTY5ODAzOWYzYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnYXBwNSc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmODNlZmFjZjMzNjRiMzUyM2ZiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICB9LFxufVxuIiwiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmF3ZXIgfSBmcm9tICcuL2NhbGVuZGFyRHJhd2VyJztcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5JztcbmltcG9ydCB7IFRGaWx0ZXIgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gZG9tQWRkRmllbGQoZmlsdGVyOiBURmlsdGVyLCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7IC8vIGNhbiBiZSByZWN1cnNpdmVcbiAgZm9yIChjb25zdCBmaWx0cmUgb2YgZmlsdGVyLnN1YmZpbHRlcnMpIHsgLy8gVE9ETyBub21tYWdlIHZhcmlhYmxlc1xuICAgIGNvbnN0ICRmaWx0cmUgPSAkKCc8ZGl2Lz4nKTtcbiAgICAkZmlsdHJlLmRhdGEoJ2tleScsIGZpbHRyZS5rZXkpO1xuICAgICRmaWx0cmUuYWRkQ2xhc3MoJ2VsZW1lbnQgZmlsdHJlJyk7XG4gICAgY29uc3QgJGNoZWNrID0gJChQLmh0bWwuU0VUVElOR1NfQ0hFQ0tCT1gpO1xuICAgICRjaGVjay5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCAkY2hlY2sgPSAkKGUudGFyZ2V0KTtcbiAgICAgIGlmICgkY2hlY2suaXMoJzpjaGVja2VkJykpICRjaGVjay5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgZWxzZSAkY2hlY2suc2libGluZ3MoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgICBjb25zdCAkbGFiZWwgPSAkKCc8bGFiZWwvPicpO1xuICAgICRsYWJlbC5odG1sKGZpbHRyZS5kaXNwbGF5KTtcbiAgICBjb25zdCAkZHJvcGRvd24gPSAkKCc8c2VsZWN0Lz4nKTtcblxuICAgIGZvciAoY29uc3QgaW5kZXggaW4gZmlsdHJlLnZhcmlhYmxlKSB7XG4gICAgICBsZXQgb3B0aW9uID0gaW5kZXg7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0cmUudmFyaWFibGUpKSBvcHRpb24gPSBmaWx0cmUudmFyaWFibGVbaW5kZXhdO1xuICAgICAgJGRyb3Bkb3duLmFwcGVuZCgkKCc8b3B0aW9uIHZhbHVlPVwiJyArIGZpbHRyZS52YXJpYWJsZVtpbmRleF0gKyAnXCIvPicpLmh0bWwob3B0aW9uKSk7XG4gICAgfVxuICAgICRmaWx0cmUuYXBwZW5kKCRjaGVjaykuYXBwZW5kKCRsYWJlbCkuYXBwZW5kKCRkcm9wZG93bik7XG4gICAgJHBhcmVudC5hcHBlbmQoJGZpbHRyZSk7XG4gICAgaWYgKCdzdWJmaWx0ZXJzJyBpbiBmaWx0cmUpIGRvbUFkZEZpZWxkKGZpbHRyZSwgJGZpbHRyZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlTZXR0aW5ncygpIHtcbiAgZm9yIChjb25zdCBkb21GaWx0cmUgb2YgJChQLiQuU0VUVElOR1NfRklMVEVSKSkge1xuICAgIGNvbnN0ICRmaWx0cmUgPSAkKGRvbUZpbHRyZSk7XG4gICAgY29uc3Qga2V5ID0gJGZpbHRyZS5kYXRhKCdrZXknKTtcbiAgICBpZiAoJGZpbHRyZS5jaGlsZHJlbignaW5wdXRbdHlwZT1jaGVja2JveF0nKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PiRmaWx0cmUuY2hpbGRyZW4oJ3NlbGVjdCcpLmdldCgwKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgU3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgU3RvcmFnZS5zZXQoa2V5LCAnMCcpO1xuICAgIH1cbiAgfVxuICBQLiRTRVRUSU5HU19DT05UQUlORVIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufVxuXG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRTZXR0aW5ncygpIHtcblxuICBpZiAoU3RvcmFnZS5oYXMoUC5zdG9yYWdlLkdSQURFKSkge1xuICAgIFAuJFNFVFRJTkdTX0dSQURFLnZhbChTdG9yYWdlLmdldChQLnN0b3JhZ2UuR1JBREUpKTtcbiAgfVxuICBpZiAoU3RvcmFnZS5oYXMoUC5zdG9yYWdlLlRIRU1FKSkge1xuICAgIFAuJFNFVFRJTkdTX1RIRU1FLnZhbChTdG9yYWdlLmdldChQLnN0b3JhZ2UuVEhFTUUpKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgZmlsdGVyIG9mICQoUC4kLlNFVFRJTkdTX0ZJTFRFUikpIHtcbiAgICBjb25zdCAkZmlsdGVyID0gJChmaWx0ZXIpO1xuICAgIGNvbnN0IGtleSA9ICRmaWx0ZXIuZGF0YSgna2V5Jyk7XG4gICAgaWYgKFN0b3JhZ2UuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0ICRzZWxlY3QgPSAkZmlsdGVyLmNoaWxkcmVuKCdzZWxlY3QnKTtcbiAgICAgIGNvbnN0IHZhbCA9IFN0b3JhZ2UuZ2V0KGtleSk7XG4gICAgICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgICAgIGNvbnN0ICRjaGVjayA9ICRmaWx0ZXIuY2hpbGRyZW4oJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgIGlmICgkY2hlY2subGVuZ3RoID09PSAxKSAkY2hlY2sudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH1cbiAgICAgIGlmICgkc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24nKS5pcygnW3ZhbHVlPVwiJyArIHZhbCArICdcIl0nKSkge1xuICAgICAgICAkc2VsZWN0LnZhbCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRE9NKGZpbHRlcjogVEZpbHRlcikge1xuICBQLiRTRVRUSU5HU19GSUxURVIuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgZG9tQWRkRmllbGQoZmlsdGVyLCBQLiRTRVRUSU5HU19GSUxURVIpO1xufVxuXG5mdW5jdGlvbiBzaG93KHsgY2FuY2VsRGlzYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBpZiAoY2FuY2VsRGlzYWJsZWQpIFAuJFNFVFRJTkdTX0NBTkNFTC5oaWRlKCk7XG4gICAgZWxzZSBQLiRTRVRUSU5HU19DQU5DRUwuc2hvdygpO1xuXG4gICAgUC4kU0VUVElOR1NfQ0FOQ0VMLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIFAuJFNFVFRJTkdTX0NPTlRBSU5FUi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSlcblxuICAgIFAuJFNFVFRJTkdTX1NBVkUub25lKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwbHlTZXR0aW5ncygpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuR1JBREUpKSB7XG4gICAgICBQLiRTRVRUSU5HU19TQVZFLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBQLiRTRVRUSU5HU19TQVZFLnNob3coKTtcblxuICAgIEZpbHRlci5sb2FkRmlsdGVyKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZERPTShGaWx0ZXIubG9hZGVkRmlsdGVyKTtcbiAgICAgICAgc2V0Q3VycmVudFNldHRpbmdzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufVxuXG5cblAuJFNFVFRJTkdTX0dSQURFLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNlbCA9IFAuJFNFVFRJTkdTX0dSQURFLmNoaWxkcmVuKCkuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICBjb25zdCB2YWwgPSAkc2VsLmF0dHIoJ3ZhbHVlJyk7XG4gIGlmKHZhbCkgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLkdSQURFLCB2YWwpO1xuICBlbHNlIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgYXR0cmlidXRlICd2YWx1ZScgb24gc2V0dGluZ3MgZWxlbWVudFwiKTtcblxuICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuU0FWRURfREFZUywgJycpOyAvLyB0cnkgdG8gZGVsZXRlIGN1cnJlbnRseSBkcmF3biBjb3Vyc2VzXG4gIENhbGVuZGFyLmluaXQoKTtcbiAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhEYXkudG9kYXkoKSk7XG5cbiAgUC4kU0VUVElOR1NfU0FWRS5zaG93KCk7IC8vIHdhcyBtYXliZSBoaWRkZW5cblxuICBGaWx0ZXIubG9hZEZpbHRlcihTdG9yYWdlLmdldChQLnN0b3JhZ2UuR1JBREUpKVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgUC4kU0VUVElOR1NfQ0FOQ0VMLmhpZGUoKTtcbiAgICAgIGxvYWRET00oRmlsdGVyLmxvYWRlZEZpbHRlcik7XG4gICAgICByZXR1cm4gQXBwKCkucmVzdGFydEluYXBwQnJvd3NlcigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBDYWxlbmRhci5kcmF3KERheS50b2RheSgpKTtcbiAgICB9KTtcbn0pO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBTZXR0aW5ncyA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4ge1xuICAgIGNhbGxiYWNrT25jZTogZnVuY3Rpb24oKSB7IH0sXG4gICAgbG9hZERPTTogbG9hZERPTSxcbiAgICBzaG93OiBzaG93XG4gIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgaWYgKHN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5WRVJTSU9OKSAmJiBzdG9yYWdlLmdldChQLnN0b3JhZ2UuVkVSU0lPTikgIT09IFAuU1RPUkFHRV9WRVJTSU9OKSB7XG4gICAgYWxlcnQoJ0xcXCdhcHBsaSDDoCDDqXTDqSBtaXNlIMOgIGpvdXIgIScpO1xuICAgIHN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIC8vIHNob3cgd2VsY29tZSBkaWFsb2cgKGRpc2FibGVkIGZlYXR1cmUgZm9yIG5vdy4uLilcbiAgaWYgKCFzdG9yYWdlLmhhcyhQLnN0b3JhZ2UuQUNLTk9XTEVER0VEKSkge1xuICAgIC8vIFAuJEFCT1VUX0NPTlRBSU5FUi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgc3RvcmFnZS5zZXQoUC5zdG9yYWdlLkFDS05PV0xFREdFRCwgJzEnKTtcbiAgfVxuXG4gIGlmICghc3RvcmFnZS5oYXMoUC5zdG9yYWdlLlZFUlNJT04pKSB7XG4gICAgc3RvcmFnZS5jbGVhcigpXG4gICAgYXdhaXQgU2V0dGluZ3Muc2hvdyh7IGNhbmNlbERpc2FibGVkOiB0cnVlIH0pO1xuICAgIHN0b3JhZ2Uuc2V0KFAuc3RvcmFnZS5WRVJTSU9OLCBQLlNUT1JBR0VfVkVSU0lPTik7XG4gICAgc3RvcmFnZS5zZXQoJ3Jvb3QnLCAnMScpOyAvLyBUT0RPXG4gIH1cbn1cblxudmFyIHN0b3JhZ2UgPSB7XG4gIGluaXQ6IGluaXQsXG4gIHNldDogZnVuY3Rpb24oa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsKTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Vba2V5XTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkgaW4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSxcbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCB2YXIgU3RvcmFnZSA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4gc3RvcmFnZTtcblxufSkoKTtcbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcblxuZnVuY3Rpb24gc2V0KHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0aGVtZU5hbWUpIHtcbiAgICBQLiRUSEVNRV9TVFlMRVNIRUVULmF0dHIoJ2hyZWYnLCBQLmRpci5USEVNRVMgKyB0aGVtZU5hbWUgKyAnLmNzcycpO1xuICB9XG4gIGVsc2Uge1xuICAgIFAuJFRIRU1FX1NUWUxFU0hFRVQuYXR0cignaHJlZicsIFAuZGlyLlRIRU1FUyArIFAudGhlbWUuREVGQVVMVCArICcuY3NzJyk7XG4gIH1cbn1cblxuUC4kU0VUVElOR1NfVEhFTUUuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICBsZXQgJHNlbCA9IFAuJFNFVFRJTkdTX1RIRU1FLmNoaWxkcmVuKCkuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICBsZXQgdmFsID0gJHNlbC5hdHRyKCd2YWx1ZScpO1xuICBpZih2YWwpIHtcbiAgICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuVEhFTUUsIHZhbCk7XG4gICAgc2V0KHZhbCk7XG4gIH1cbiAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5ncyBlbGVtZW50IGlzIG1pc3NpbmcgJ3ZhbHVlJyBhdHRyaWJ1dGUuXCIpO1xufSlcblxuXG5leHBvcnQgdmFyIFRoZW1lID0ge1xuICBzZXQ6IHNldFxufTtcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vVjMvYXBwJztcblxubGV0IGFwcCA9IEFwcCgpO1xuYXBwLmluaXQoKTtcbiIsIi8qISBqUXVlcnkgdjMuMi4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGY9Yy5zbGljZSxnPWMuY29uY2F0LGg9Yy5wdXNoLGk9Yy5pbmRleE9mLGo9e30saz1qLnRvU3RyaW5nLGw9ai5oYXNPd25Qcm9wZXJ0eSxtPWwudG9TdHJpbmcsbj1tLmNhbGwoT2JqZWN0KSxvPXt9O2Z1bmN0aW9uIHAoYSxiKXtiPWJ8fGQ7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2MudGV4dD1hLGIuaGVhZC5hcHBlbmRDaGlsZChjKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfXZhciBxPVwiMy4yLjFcIixyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByLmZuLmluaXQoYSxiKX0scz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csdD0vXi1tcy0vLHU9Ly0oW2Etel0pL2csdj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O3IuZm49ci5wcm90b3R5cGU9e2pxdWVyeTpxLGNvbnN0cnVjdG9yOnIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBmLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9mLmNhbGwodGhpcyk6YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPXIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiByLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoYTwwP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmM8Yj9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6aCxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LHIuZXh0ZW5kPXIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8ci5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtoPGk7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKHIuaXNQbGFpbk9iamVjdChkKXx8KGU9QXJyYXkuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmQXJyYXkuaXNBcnJheShjKT9jOltdKTpmPWMmJnIuaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09ci5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LHIuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKHErTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09ci50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYodyhhKSl7Zm9yKGM9YS5sZW5ndGg7ZDxjO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UocyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJih3KE9iamVjdChhKSk/ci5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpoLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aS5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2Q8YztkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztmPGc7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj0wLGg9W107aWYodyhhKSlmb3IoZD1hLmxlbmd0aDtmPGQ7ZisrKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGYgaW4gYSllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZy5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gZD1mLmNhbGwoYXJndW1lbnRzLDIpLGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGYuY2FsbChhcmd1bWVudHMpKSl9LGUuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxyLmd1aWQrKyxlfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpvfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoci5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksci5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtqW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiB3KGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9ci50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWMmJiFyLmlzV2luZG93KGEpJiYoXCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKX12YXIgeD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz17fS5oYXNPd25Qcm9wZXJ0eSxEPVtdLEU9RC5wb3AsRj1ELnB1c2gsRz1ELnB1c2gsSD1ELnNsaWNlLEk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEo9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEs9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEw9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLE09XCJcXFxcW1wiK0srXCIqKFwiK0wrXCIpKD86XCIrSytcIiooWypeJHwhfl0/PSlcIitLK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTCtcIikpfClcIitLK1wiKlxcXFxdXCIsTj1cIjooXCIrTCtcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTStcIikqKXwuKilcXFxcKXwpXCIsTz1uZXcgUmVnRXhwKEsrXCIrXCIsXCJnXCIpLFA9bmV3IFJlZ0V4cChcIl5cIitLK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitLK1wiKyRcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0srXCIqLFwiK0srXCIqXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitLK1wiKihbPit+XXxcIitLK1wiKVwiK0srXCIqXCIpLFM9bmV3IFJlZ0V4cChcIj1cIitLK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrSytcIipcXFxcXVwiLFwiZ1wiKSxUPW5ldyBSZWdFeHAoTiksVT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitMK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0wrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitMK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK00pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK04pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0srXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitLK1wiKig/OihbKy1dfClcIitLK1wiKihcXFxcZCspfCkpXCIrSytcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitKK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrSytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrSytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrSytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFg9L15oXFxkJC9pLFk9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLCQ9L1srfl0vLF89bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0srXCI/fChcIitLK1wiKXwuKVwiLFwiaWdcIiksYWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOmQ8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sYmE9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csY2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9cIlxcMFwiPT09YT9cIlxcdWZmZmRcIjphLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2EuY2hhckNvZGVBdChhLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrYX0sZGE9ZnVuY3Rpb24oKXttKCl9LGVhPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITAmJihcImZvcm1cImluIGF8fFwibGFiZWxcImluIGEpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtHLmFwcGx5KEQ9SC5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxEW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtHPXthcHBseTpELmxlbmd0aD9mdW5jdGlvbihhLGIpe0YuYXBwbHkoYSxILmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzPWImJmIub3duZXJEb2N1bWVudCx3PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09dyYmOSE9PXcmJjExIT09dylyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXcmJihsPVouZXhlYyhhKSkpaWYoZj1sWzFdKXtpZig5PT09dyl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHMmJihqPXMuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKGxbMl0pcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPWxbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT13KXM9YixyPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShiYSxjYSk6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSksbz1nKGEpLGg9by5sZW5ndGg7d2hpbGUoaC0tKW9baF09XCIjXCIraytcIiBcIitzYShvW2hdKTtyPW8uam9pbihcIixcIikscz0kLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGJ9aWYocil0cnl7cmV0dXJuIEcuYXBwbHkoZCxzLnF1ZXJ5U2VsZWN0b3JBbGwocikpLGR9Y2F0Y2goeCl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUCxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJmEuc291cmNlSW5kZXgtYi5zb3VyY2VJbmRleDtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImZvcm1cImluIGI/Yi5wYXJlbnROb2RlJiZiLmRpc2FibGVkPT09ITE/XCJsYWJlbFwiaW4gYj9cImxhYmVsXCJpbiBiLnBhcmVudE5vZGU/Yi5wYXJlbnROb2RlLmRpc2FibGVkPT09YTpiLmRpc2FibGVkPT09YTpiLmlzRGlzYWJsZWQ9PT1hfHxiLmlzRGlzYWJsZWQhPT0hYSYmZWEoYik9PT1hOmIuZGlzYWJsZWQ9PT1hOlwibGFiZWxcImluIGImJmIuZGlzYWJsZWQ9PT1hfX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiEhYiYmXCJIVE1MXCIhPT1iLm5vZGVOYW1lfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLHYhPT1uJiYoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9WS50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSk6KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjLGQsZSxmPWIuZ2V0RWxlbWVudEJ5SWQoYSk7aWYoZil7aWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl07ZT1iLmdldEVsZW1lbnRzQnlOYW1lKGEpLGQ9MDt3aGlsZShmPWVbZCsrXSlpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXX1yZXR1cm5bXX19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwKXJldHVybiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSl9LHI9W10scT1bXSwoYy5xc2E9WS50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0srXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0srXCIqKD86dmFsdWV8XCIrSitcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitLK1wiKlsqXiR8IX5dPz1cIiksMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxvLmFwcGVuZENoaWxkKGEpLmRpc2FibGVkPSEwLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9WS50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiKlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE4pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9WS50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8WS50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0koayxhKS1JKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SShrLGEpLUkoayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/bGEoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShTLFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXNjYXBlPWZ1bmN0aW9uKGEpe3JldHVybihhK1wiXCIpLnJlcGxhY2UoYmEsY2EpfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShfLGFhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKF8sYWEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVC50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0srXCIpXCIrYStcIihcIitLK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6IWJ8fChlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKE8sXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWImJihlPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SShhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUCxcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoXyxhYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFUudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOm9hKCExKSxkaXNhYmxlZDpvYSghMCksY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnBhKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6cGEoZnVuY3Rpb24oYSxiLGMpe3JldHVybltjPDA/YytiOmNdfSksZXZlbjpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHJhKCl7fXJhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcmEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1RLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHNhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2I8YztiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1iLm5leHQsZj1lfHxkLGc9YyYmXCJwYXJlbnROb2RlXCI9PT1mLGg9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxlKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpcmV0dXJuIGEoYixjLGUpO3JldHVybiExfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG09W3csaF07aWYoaSl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZykmJmEoYixjLGkpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKWlmKGw9Ylt1XXx8KGJbdV09e30pLGs9bFtiLnVuaXF1ZUlEXXx8KGxbYi51bmlxdWVJRF09e30pLGUmJmU9PT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYj1iW2RdfHxiO2Vsc2V7aWYoKGo9a1tmXSkmJmpbMF09PT13JiZqWzFdPT09aClyZXR1cm4gbVsyXT1qWzJdO2lmKGtbZl09bSxtWzJdPWEoYixjLGkpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB1YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB3YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtoPGk7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXhhKGQpKSxlJiYhZVt1XSYmKGU9eGEoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dmEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp3YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9d2EocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0koZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXdhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpHLmFwcGx5KGcscil9KX1mdW5jdGlvbiB5YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBJKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtpPGY7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3RhKHVhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2U8ZjtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB4YShpPjEmJnVhKG0pLGk+MSYmc2EoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShQLFwiJDFcIiksYyxpPGUmJnlhKGEuc2xpY2UoaSxlKSksZTxmJiZ5YShhPWEuc2xpY2UoZSkpLGU8ZiYmc2EoYSkpfW0ucHVzaChjKX1yZXR1cm4gdWEobSl9ZnVuY3Rpb24gemEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUUuY2FsbChpKSk7dT13YSh1KX1HLmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eWEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHphKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsaSxqLGssbCxtPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbj0hZSYmZyhhPW0uc2VsZWN0b3J8fGEpO2lmKGM9Y3x8W10sMT09PW4ubGVuZ3RoKXtpZihpPW5bMF09blswXS5zbGljZSgwKSxpLmxlbmd0aD4yJiZcIklEXCI9PT0oaj1pWzBdKS50eXBlJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtpWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksYil8fFtdKVswXSwhYilyZXR1cm4gYzttJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShpLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1mPVYubmVlZHNDb250ZXh0LnRlc3QoYSk/MDppLmxlbmd0aDt3aGlsZShmLS0pe2lmKGo9aVtmXSxkLnJlbGF0aXZlW2s9ai50eXBlXSlicmVhaztpZigobD1kLmZpbmRba10pJiYoZT1sKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLCQudGVzdChpWzBdLnR5cGUpJiZxYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGkuc3BsaWNlKGYsMSksYT1lLmxlbmd0aCYmc2EoaSksIWEpcmV0dXJuIEcuYXBwbHkoYyxlKSxjO2JyZWFrfX19cmV0dXJuKG18fGgoYSxuKSkoZSxiLCFwLGMsIWJ8fCQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8YiksY30sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtpZighYyYmXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEosZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKCFjKXJldHVybiBhW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtyLmZpbmQ9eCxyLmV4cHI9eC5zZWxlY3RvcnMsci5leHByW1wiOlwiXT1yLmV4cHIucHNldWRvcyxyLnVuaXF1ZVNvcnQ9ci51bmlxdWU9eC51bmlxdWVTb3J0LHIudGV4dD14LmdldFRleHQsci5pc1hNTERvYz14LmlzWE1MLHIuY29udGFpbnM9eC5jb250YWlucyxyLmVzY2FwZVNlbGVjdG9yPXguZXNjYXBlO3ZhciB5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZyKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sQT1yLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEIoYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfXZhciBDPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pLEQ9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEUoYSxiLGMpe3JldHVybiByLmlzRnVuY3Rpb24oYik/ci5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk6Yi5ub2RlVHlwZT9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk6XCJzdHJpbmdcIiE9dHlwZW9mIGI/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09Y30pOkQudGVzdChiKT9yLmZpbHRlcihiLGEsYyk6KGI9ci5maWx0ZXIoYixhKSxyLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jJiYxPT09YS5ub2RlVHlwZX0pKX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBGLEc9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sSD1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxGLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkcuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQy50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0gucHJvdG90eXBlPXIuZm4sRj1yKGQpO3ZhciBJPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEo9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudDooQihhLFwidGVtcGxhdGVcIikmJihhPWEuY29udGVudHx8YSksci5tZXJnZShbXSxhLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPXIubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPXIuZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihKW2FdfHxyLnVuaXF1ZVNvcnQoZSksSS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEw9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIE0oYSl7dmFyIGI9e307cmV0dXJuIHIuZWFjaChhLm1hdGNoKEwpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifXIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/TShhKTpyLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9ZXx8YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtyLmVhY2goYixmdW5jdGlvbihiLGMpe3IuaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXIudHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiByLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9ci5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxjPD1oJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/ci5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fGJ8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan07ZnVuY3Rpb24gTihhKXtyZXR1cm4gYX1mdW5jdGlvbiBPKGEpe3Rocm93IGF9ZnVuY3Rpb24gUChhLGIsYyxkKXt2YXIgZTt0cnl7YSYmci5pc0Z1bmN0aW9uKGU9YS5wcm9taXNlKT9lLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihlPWEudGhlbik/ZS5jYWxsKGEsYixjKTpiLmFwcGx5KHZvaWQgMCxbYV0uc2xpY2UoZCkpfWNhdGNoKGEpe2MuYXBwbHkodm9pZCAwLFthXSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpKTooZisrLGouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSxnKGYsYyxOLGMubm90aWZ5V2l0aCkpKTooZCE9PU4mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TyYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TixhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpOKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihQKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QsIWIpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlQKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBRPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlEudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFI9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFIudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8Ui5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1SLnRoZW47ZnVuY3Rpb24gUygpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxcbmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSxyLnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChyLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSk7dmFyIFQ9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09ci50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpVChhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxyLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwocihhKSxjKX0pKSxiKSlmb3IoO2g8aTtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxVPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gVigpe3RoaXMuZXhwYW5kbz1yLmV4cGFuZG8rVi51aWQrK31WLnVpZD0xLFYucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LFUoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbci5jYW1lbENhc2UoYildPWM7ZWxzZSBmb3IoZCBpbiBiKWVbci5jYW1lbENhc2UoZCldPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bci5jYW1lbENhc2UoYildfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz90aGlzLmdldChhLGIpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1kKXtpZih2b2lkIDAhPT1iKXtBcnJheS5pc0FycmF5KGIpP2I9Yi5tYXAoci5jYW1lbENhc2UpOihiPXIuY2FtZWxDYXNlKGIpLGI9YiBpbiBkP1tiXTpiLm1hdGNoKEwpfHxbXSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGRbYltjXV19KHZvaWQgMD09PWJ8fHIuaXNFbXB0eU9iamVjdChkKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIXIuaXNFbXB0eU9iamVjdChiKX19O3ZhciBXPW5ldyBWLFg9bmV3IFYsWT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sWj0vW0EtWl0vZztmdW5jdGlvbiAkKGEpe3JldHVyblwidHJ1ZVwiPT09YXx8XCJmYWxzZVwiIT09YSYmKFwibnVsbFwiPT09YT9udWxsOmE9PT0rYStcIlwiPythOlkudGVzdChhKT9KU09OLnBhcnNlKGEpOmEpfWZ1bmN0aW9uIF8oYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShaLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9JChjKX1jYXRjaChlKXt9WC5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9ci5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIFguaGFzRGF0YShhKXx8Vy5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gWC5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7WC5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBXLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Vy5yZW1vdmUoYSxiKX19KSxyLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPVguZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhVy5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPXIuY2FtZWxDYXNlKGQuc2xpY2UoNSkpLF8oZixkLGVbZF0pKSk7Vy5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEpfSk6VCh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9WC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9XyhmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5yZW1vdmUodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoYSlyZXR1cm4gYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1XLmdldChhLGIpLGMmJighZHx8QXJyYXkuaXNBcnJheShjKT9kPVcuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBXLmdldChhLGMpfHxXLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vy5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vy5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgYWE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLGJhPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2FhK1wiKShbYS16JV0qKSRcIixcImlcIiksY2E9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGRhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PWEuc3R5bGUuZGlzcGxheXx8XCJcIj09PWEuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSkmJlwibm9uZVwiPT09ci5jc3MoYSxcImRpc3BsYXlcIil9LGVhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTtmdW5jdGlvbiBmYShhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gci5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChyLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0oci5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmYmEuZXhlYyhyLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLHIuc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIGdhPXt9O2Z1bmN0aW9uIGhhKGEpe3ZhciBiLGM9YS5vd25lckRvY3VtZW50LGQ9YS5ub2RlTmFtZSxlPWdhW2RdO3JldHVybiBlP2U6KGI9Yy5ib2R5LmFwcGVuZENoaWxkKGMuY3JlYXRlRWxlbWVudChkKSksZT1yLmNzcyhiLFwiZGlzcGxheVwiKSxiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksXCJub25lXCI9PT1lJiYoZT1cImJsb2NrXCIpLGdhW2RdPWUsZSl9ZnVuY3Rpb24gaWEoYSxiKXtmb3IodmFyIGMsZCxlPVtdLGY9MCxnPWEubGVuZ3RoO2Y8ZztmKyspZD1hW2ZdLGQuc3R5bGUmJihjPWQuc3R5bGUuZGlzcGxheSxiPyhcIm5vbmVcIj09PWMmJihlW2ZdPVcuZ2V0KGQsXCJkaXNwbGF5XCIpfHxudWxsLGVbZl18fChkLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJmRhKGQpJiYoZVtmXT1oYShkKSkpOlwibm9uZVwiIT09YyYmKGVbZl09XCJub25lXCIsVy5zZXQoZCxcImRpc3BsYXlcIixjKSkpO2ZvcihmPTA7ZjxnO2YrKyludWxsIT1lW2ZdJiYoYVtmXS5zdHlsZS5kaXNwbGF5PWVbZl0pO3JldHVybiBhfXIuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGEodGhpcyk/cih0aGlzKS5zaG93KCk6cih0aGlzKS5oaWRlKCl9KX19KTt2YXIgamE9L14oPzpjaGVja2JveHxyYWRpbykkL2ksa2E9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLGxhPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksbWE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTttYS5vcHRncm91cD1tYS5vcHRpb24sbWEudGJvZHk9bWEudGZvb3Q9bWEuY29sZ3JvdXA9bWEuY2FwdGlvbj1tYS50aGVhZCxtYS50aD1tYS50ZDtmdW5jdGlvbiBuYShhLGIpe3ZhciBjO3JldHVybiBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXSx2b2lkIDA9PT1ifHxiJiZCKGEsYik/ci5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBvYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylXLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxXLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIHBhPS88fCYjP1xcdys7LztmdW5jdGlvbiBxYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG49MCxvPWEubGVuZ3RoO248bztuKyspaWYoZj1hW25dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1yLnR5cGUoZikpci5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYocGEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oa2EuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT1tYVtoXXx8bWEuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStyLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7ci5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixuPTA7d2hpbGUoZj1tW24rK10paWYoZCYmci5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1yLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPW5hKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmb2EoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKWxhLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksby5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLG8ubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgcmE9ZC5kb2N1bWVudEVsZW1lbnQsc2E9L15rZXkvLHRhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyx1YT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHZhKCl7cmV0dXJuITB9ZnVuY3Rpb24gd2EoKXtyZXR1cm4hMX1mdW5jdGlvbiB4YSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24geWEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXlhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9d2E7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gcigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1yLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1yLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuZ2V0KGEpO2lmKHEpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IocmEsZSksYy5ndWlkfHwoYy5ndWlkPXIuZ3VpZCsrKSwoaT1xLmV2ZW50cyl8fChpPXEuZXZlbnRzPXt9KSwoZz1xLmhhbmRsZSl8fChnPXEuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiByJiZyLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9yLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuJiYobD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LGs9ci5leHRlbmQoe3R5cGU6bixvcmlnVHlwZTpwLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmci5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpvLmpvaW4oXCIuXCIpfSxmKSwobT1pW25dKXx8KG09aVtuXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLG8sZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobixnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLHIuZXZlbnQuZ2xvYmFsW25dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmhhc0RhdGEoYSkmJlcuZ2V0KGEpO2lmKHEmJihpPXEuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbil7bD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbT1pW25dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitvLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcCE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxvLHEuaGFuZGxlKSE9PSExfHxyLnJlbW92ZUV2ZW50KGEsbixxLmhhbmRsZSksZGVsZXRlIGlbbl0pfWVsc2UgZm9yKG4gaW4gaSlyLmV2ZW50LnJlbW92ZShhLG4rYltqXSxjLGQsITApO3IuaXNFbXB0eU9iamVjdChpKSYmVy5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXt2YXIgYj1yLmV2ZW50LmZpeChhKSxjLGQsZSxmLGcsaCxpPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxqPShXLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXXx8W10saz1yLmV2ZW50LnNwZWNpYWxbYi50eXBlXXx8e307Zm9yKGlbMF09YixjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylpW2NdPWFyZ3VtZW50c1tjXTtpZihiLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGIpIT09ITEpe2g9ci5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYixqKSxjPTA7d2hpbGUoKGY9aFtjKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7Yi5jdXJyZW50VGFyZ2V0PWYuZWxlbSxkPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tkKytdKSYmIWIuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSliLnJuYW1lc3BhY2UmJiFiLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChiLmhhbmRsZU9iaj1nLGIuZGF0YT1nLmRhdGEsZT0oKHIuZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGIucmVzdWx0PWUpPT09ITEmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGIpLGIucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGg9W10saT1iLmRlbGVnYXRlQ291bnQsaj1hLnRhcmdldDtpZihpJiZqLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWEudHlwZSYmYS5idXR0b24+PTEpKWZvcig7aiE9PXRoaXM7aj1qLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWoubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGouZGlzYWJsZWQhPT0hMCkpe2ZvcihmPVtdLGc9e30sYz0wO2M8aTtjKyspZD1iW2NdLGU9ZC5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1nW2VdJiYoZ1tlXT1kLm5lZWRzQ29udGV4dD9yKGUsdGhpcykuaW5kZXgoaik+LTE6ci5maW5kKGUsdGhpcyxudWxsLFtqXSkubGVuZ3RoKSxnW2VdJiZmLnB1c2goZCk7Zi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmZ9KX1yZXR1cm4gaj10aGlzLGk8Yi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmIuc2xpY2UoaSl9KSxofSxhZGRQcm9wOmZ1bmN0aW9uKGEsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIuRXZlbnQucHJvdG90eXBlLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpyLmlzRnVuY3Rpb24oYik/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGIodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFthXX0sc2V0OmZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX19KX0sZml4OmZ1bmN0aW9uKGEpe3JldHVybiBhW3IuZXhwYW5kb10/YTpuZXcgci5FdmVudChhKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PXhhKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PXhhKCkmJnRoaXMuYmx1cilyZXR1cm4gdGhpcy5ibHVyKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYoXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZCKHRoaXMsXCJpbnB1dFwiKSlyZXR1cm4gdGhpcy5jbGljaygpLCExfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gQihhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sci5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sci5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygci5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/dmE6d2EsdGhpcy50YXJnZXQ9YS50YXJnZXQmJjM9PT1hLnRhcmdldC5ub2RlVHlwZT9hLnRhcmdldC5wYXJlbnROb2RlOmEudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1hLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWEucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWEsYiYmci5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8ci5ub3coKSx2b2lkKHRoaXNbci5leHBhbmRvXT0hMCkpOm5ldyByLkV2ZW50KGEsYil9LHIuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpyLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDp3YSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LHIuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihhKXt2YXIgYj1hLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS53aGljaCYmc2EudGVzdChhLnR5cGUpP251bGwhPWEuY2hhckNvZGU/YS5jaGFyQ29kZTphLmtleUNvZGU6IWEud2hpY2gmJnZvaWQgMCE9PWImJnRhLnRlc3QoYS50eXBlKT8xJmI/MToyJmI/Mzo0JmI/MjowOmEud2hpY2h9fSxyLmV2ZW50LmFkZFByb3ApLHIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe3IuZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8ci5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksci5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLHIoYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz13YSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIgemE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksQWE9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQmE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxDYT0vXnRydWVcXC8oLiopLyxEYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gRWEoYSxiKXtyZXR1cm4gQihhLFwidGFibGVcIikmJkIoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/cihcIj50Ym9keVwiLGEpWzBdfHxhOmF9ZnVuY3Rpb24gRmEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gR2EoYSl7dmFyIGI9Q2EuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIEhhKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoVy5oYXNEYXRhKGEpJiYoZj1XLmFjY2VzcyhhKSxnPVcuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtjPGQ7YysrKXIuZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1YLmhhc0RhdGEoYSkmJihoPVguYWNjZXNzKGEpLGk9ci5leHRlbmQoe30saCksWC5zZXQoYixpKSl9fWZ1bmN0aW9uIElhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJmphLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gSmEoYSxiLGMsZCl7Yj1nLmFwcGx5KFtdLGIpO3ZhciBlLGYsaCxpLGosayxsPTAsbT1hLmxlbmd0aCxuPW0tMSxxPWJbMF0scz1yLmlzRnVuY3Rpb24ocSk7aWYoc3x8bT4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIW8uY2hlY2tDbG9uZSYmQmEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7cyYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLEphKGYsYixjLGQpfSk7aWYobSYmKGU9cWEoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxmPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZiksZnx8ZCkpe2ZvcihoPXIubWFwKG5hKGUsXCJzY3JpcHRcIiksRmEpLGk9aC5sZW5ndGg7bDxtO2wrKylqPWUsbCE9PW4mJihqPXIuY2xvbmUoaiwhMCwhMCksaSYmci5tZXJnZShoLG5hKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVtsXSxqLGwpO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LHIubWFwKGgsR2EpLGw9MDtsPGk7bCsrKWo9aFtsXSxsYS50ZXN0KGoudHlwZXx8XCJcIikmJiFXLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmci5jb250YWlucyhrLGopJiYoai5zcmM/ci5fZXZhbFVybCYmci5fZXZhbFVybChqLnNyYyk6cChqLnRleHRDb250ZW50LnJlcGxhY2UoRGEsXCJcIiksaykpfXJldHVybiBhfWZ1bmN0aW9uIEthKGEsYixjKXtmb3IodmFyIGQsZT1iP3IuZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxyLmNsZWFuRGF0YShuYShkKSksZC5wYXJlbnROb2RlJiYoYyYmci5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJm9hKG5hKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9ci5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh6YSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShvLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxyLmlzWE1MRG9jKGEpKSlmb3IoZz1uYShoKSxmPW5hKGEpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSWEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8bmEoYSksZz1nfHxuYShoKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUhhKGZbZF0sZ1tkXSk7ZWxzZSBIYShhLGgpO3JldHVybiBnPW5hKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmb2EoZywhaSYmbmEoYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1yLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihVKGMpKXtpZihiPWNbVy5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9yLmV2ZW50LnJlbW92ZShjLGQpOnIucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW1cuZXhwYW5kb109dm9pZCAwfWNbWC5leHBhbmRvXSYmKGNbWC5leHBhbmRvXT12b2lkIDApfX19KSxyLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9yLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbCE9YSYmYSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFBYS50ZXN0KGEpJiYhbWFbKGthLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1yLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7YzxkO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO3IuaW5BcnJheSh0aGlzLGEpPDAmJihyLmNsZWFuRGF0YShuYSh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLHIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1yKGEpLGY9ZS5sZW5ndGgtMSxnPTA7Zzw9ZjtnKyspYz1nPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLHIoZVtnXSlbYl0oYyksaC5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgTGE9L15tYXJnaW4vLE1hPW5ldyBSZWdFeHAoXCJeKFwiK2FhK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLE5hPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscmEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscmEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gT2EoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxOYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmTWEudGVzdChnKSYmTGEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBQYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgUWE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFJhPS9eLS0vLFNhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxUYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFVhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxWYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gV2EoYSl7aWYoYSBpbiBWYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVVhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1VYVtjXStiLGEgaW4gVmEpcmV0dXJuIGF9ZnVuY3Rpb24gWGEoYSl7dmFyIGI9ci5jc3NQcm9wc1thXTtyZXR1cm4gYnx8KGI9ci5jc3NQcm9wc1thXT1XYShhKXx8YSksYn1mdW5jdGlvbiBZYShhLGIsYyl7dmFyIGQ9YmEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIFphKGEsYixjLGQsZSl7dmFyIGYsZz0wO2ZvcihmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowO2Y8NDtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9ci5jc3MoYSxjK2NhW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gJGEoYSxiLGMpe3ZhciBkLGU9TmEoYSksZj1PYShhLGIsZSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKTtyZXR1cm4gTWEudGVzdChmKT9mOihkPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGY9PT1hLnN0eWxlW2JdKSxcImF1dG9cIj09PWYmJihmPWFbXCJvZmZzZXRcIitiWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKV0pLGY9cGFyc2VGbG9hdChmKXx8MCxmK1phKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGUpK1wicHhcIil9ci5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1PYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKSxqPWEuc3R5bGU7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTpqW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1iYS5leGVjKGMpKSYmZVsxXSYmKGM9ZmEoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChyLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLG8uY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChqW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGk/ai5zZXRQcm9wZXJ0eShiLGMpOmpbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1PYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIFRhJiYoZT1UYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxyLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7aWYoYylyZXR1cm4hUWEudGVzdChyLmNzcyhhLFwiZGlzcGxheVwiKSl8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/JGEoYSxiLGQpOmVhKGEsU2EsZnVuY3Rpb24oKXtyZXR1cm4gJGEoYSxiLGQpfSl9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZOYShhKSxnPWQmJlphKGEsYixkLFwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1iYS5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1yLmNzcyhhLGIpKSxZYShhLGMsZyl9fX0pLHIuY3NzSG9va3MubWFyZ2luTGVmdD1QYShvLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe2lmKGIpcmV0dXJuKHBhcnNlRmxvYXQoT2EoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtZWEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksci5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdO2Q8NDtkKyspZVthK2NhW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LExhLnRlc3QoYSl8fChyLmNzc0hvb2tzW2ErYl0uc2V0PVlhKX0pLHIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKEFycmF5LmlzQXJyYXkoYikpe2ZvcihkPU5hKGEpLGU9Yi5sZW5ndGg7ZzxlO2crKylmW2JbZ11dPXIuY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9yLnN0eWxlKGEsYixjKTpyLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiBfYShhLGIsYyxkLGUpe3JldHVybiBuZXcgX2EucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1yLlR3ZWVuPV9hLF9hLnByb3RvdHlwZT17Y29uc3RydWN0b3I6X2EsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8ci5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChyLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9ci5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LF9hLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1fYS5wcm90b3R5cGUsX2EucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9ci5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe3IuZnguc3RlcFthLnByb3BdP3IuZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtyLmNzc1Byb3BzW2EucHJvcF1dJiYhci5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93OnIuc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LF9hLnByb3BIb29rcy5zY3JvbGxUb3A9X2EucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sci5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHIuZng9X2EucHJvdG90eXBlLmluaXQsci5meC5zdGVwPXt9O3ZhciBhYixiYixjYj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sZGI9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBlYigpe2JiJiYoZC5oaWRkZW49PT0hMSYmYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZWIpOmEuc2V0VGltZW91dChlYixyLmZ4LmludGVydmFsKSxyLmZ4LnRpY2soKSl9ZnVuY3Rpb24gZmIoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YWI9dm9pZCAwfSksYWI9ci5ub3coKX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ZDw0O2QrPTItYiljPWNhW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIGhiKGEsYixjKXtmb3IodmFyIGQsZT0oa2IudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoa2IudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBpYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPVwid2lkdGhcImluIGJ8fFwiaGVpZ2h0XCJpbiBiLG09dGhpcyxuPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJmRhKGEpLHE9Vy5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoZz1yLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1nLnVucXVldWVkJiYoZy51bnF1ZXVlZD0wLGg9Zy5lbXB0eS5maXJlLGcuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2cudW5xdWV1ZWR8fGgoKX0pLGcudW5xdWV1ZWQrKyxtLmFsd2F5cyhmdW5jdGlvbigpe20uYWx3YXlzKGZ1bmN0aW9uKCl7Zy51bnF1ZXVlZC0tLHIucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8Zy5lbXB0eS5maXJlKCl9KX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxjYi50ZXN0KGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1uW2RdPXEmJnFbZF18fHIuc3R5bGUoYSxkKX1pZihpPSFyLmlzRW1wdHlPYmplY3QoYiksaXx8IXIuaXNFbXB0eU9iamVjdChuKSl7bCYmMT09PWEubm9kZVR5cGUmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPXEmJnEuZGlzcGxheSxudWxsPT1qJiYoaj1XLmdldChhLFwiZGlzcGxheVwiKSksaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxcIm5vbmVcIj09PWsmJihqP2s9ajooaWEoW2FdLCEwKSxqPWEuc3R5bGUuZGlzcGxheXx8aixrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLGlhKFthXSkpKSwoXCJpbmxpbmVcIj09PWt8fFwiaW5saW5lLWJsb2NrXCI9PT1rJiZudWxsIT1qKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZmxvYXRcIikmJihpfHwobS5kb25lKGZ1bmN0aW9uKCl7by5kaXNwbGF5PWp9KSxudWxsPT1qJiYoaz1vLmRpc3BsYXksaj1cIm5vbmVcIj09PWs/XCJcIjprKSksby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLG0uYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKSxpPSExO2ZvcihkIGluIG4paXx8KHE/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPVcuYWNjZXNzKGEsXCJmeHNob3dcIix7ZGlzcGxheTpqfSksZiYmKHEuaGlkZGVuPSFwKSxwJiZpYShbYV0sITApLG0uZG9uZShmdW5jdGlvbigpe3B8fGlhKFthXSksVy5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoZCBpbiBuKXIuc3R5bGUoYSxkLG5bZF0pfSkpLGk9aGIocD9xW2RdOjAsZCxtKSxkIGluIHF8fChxW2RdPWkuc3RhcnQscCYmKGkuZW5kPWkuc3RhcnQsaS5zdGFydD0wKSl9fWZ1bmN0aW9uIGpiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9ci5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxBcnJheS5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1yLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24ga2IoYSxiLGMpe3ZhciBkLGUsZj0wLGc9a2IucHJlZmlsdGVycy5sZW5ndGgsaD1yLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1hYnx8ZmIoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7ZzxpO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLGY8MSYmaT9jOihpfHxoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6ci5leHRlbmQoe30sYiksb3B0czpyLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ci5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTphYnx8ZmIoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPXIuVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7YzxkO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoamIoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7ZjxnO2YrKylpZihkPWtiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiByLmlzRnVuY3Rpb24oZC5zdG9wKSYmKHIuX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1yLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gci5tYXAoayxoYixqKSxyLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKSxyLmZ4LnRpbWVyKHIuZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGp9ci5BbmltYXRpb249ci5leHRlbmQoa2Ise3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIGZhKGMuZWxlbSxhLGJhLmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7ci5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goTCk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspYz1hW2RdLGtiLnR3ZWVuZXJzW2NdPWtiLnR3ZWVuZXJzW2NdfHxbXSxrYi50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltpYl0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9rYi5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6a2IucHJlZmlsdGVycy5wdXNoKGEpfX0pLHIuc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP3IuZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8ci5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFyLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiByLmZ4Lm9mZj9kLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIGQuZHVyYXRpb24mJihkLmR1cmF0aW9uIGluIHIuZnguc3BlZWRzP2QuZHVyYXRpb249ci5meC5zcGVlZHNbZC5kdXJhdGlvbl06ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe3IuaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmci5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LHIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKGRhKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXIuaXNFbXB0eU9iamVjdChhKSxmPXIuc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1rYih0aGlzLHIuZXh0ZW5kKHt9LGEpLGYpOyhlfHxXLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9ci50aW1lcnMsZz1XLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZkYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxyLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPVcuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9ci50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLHIucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2I8ZztiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksci5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPXIuZm5bYl07ci5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZ2IoYiwhMCksYSxkLGUpfX0pLHIuZWFjaCh7c2xpZGVEb3duOmdiKFwic2hvd1wiKSxzbGlkZVVwOmdiKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpnYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxyLnRpbWVycz1bXSxyLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1yLnRpbWVycztmb3IoYWI9ci5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxyLmZ4LnN0b3AoKSxhYj12b2lkIDB9LHIuZngudGltZXI9ZnVuY3Rpb24oYSl7ci50aW1lcnMucHVzaChhKSxyLmZ4LnN0YXJ0KCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpe2JifHwoYmI9ITAsZWIoKSl9LHIuZnguc3RvcD1mdW5jdGlvbigpe2JiPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGxiLG1iPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9sYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgci5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1yLmZpbmQuYXR0cihhLGIpLFxubnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFvLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJkIoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9YiYmYi5tYXRjaChMKTtpZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxsYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1tYltiXXx8ci5maW5kLmF0dHI7bWJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPW1iW2ddLG1iW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsbWJbZ109ZiksZX19KTt2YXIgbmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxvYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6bmIudGVzdChhLm5vZGVOYW1lKXx8b2IudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gcGIoYSl7dmFyIGI9YS5tYXRjaChMKXx8W107cmV0dXJuIGIuam9pbihcIiBcIil9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXIuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpyLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxxYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1yKHRoaXMpLGY9YS5tYXRjaChMKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPXFiKHRoaXMpLGImJlcuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpXLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK3BiKHFiKGMpKStcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgcmI9L1xcci9nO3IuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1yLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMscih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOkFycmF5LmlzQXJyYXkoZSkmJihlPXIubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1yLnZhbEhvb2tzW3RoaXMudHlwZV18fHIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9ci52YWxIb29rc1tlLnR5cGVdfHxyLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLHIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6cGIoci50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPWEub3B0aW9ucyxmPWEuc2VsZWN0ZWRJbmRleCxnPVwic2VsZWN0LW9uZVwiPT09YS50eXBlLGg9Zz9udWxsOltdLGk9Zz9mKzE6ZS5sZW5ndGg7Zm9yKGQ9ZjwwP2k6Zz9mOjA7ZDxpO2QrKylpZihjPWVbZF0sKGMuc2VsZWN0ZWR8fGQ9PT1mKSYmIWMuZGlzYWJsZWQmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhQihjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9cihjKS52YWwoKSxnKXJldHVybiBiO2gucHVzaChiKX1yZXR1cm4gaH0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPXIubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1yLmluQXJyYXkoci52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksci5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3IudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEuY2hlY2tlZD1yLmluQXJyYXkocihhKS52YWwoKSxiKT4tMX19LG8uY2hlY2tPbnx8KHIudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHNiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztyLmV4dGVuZChyLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGssbSxuLG89W2V8fGRdLHA9bC5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9bC5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhc2IudGVzdChwK3IuZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+LTEmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxrPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW3IuZXhwYW5kb10/YjpuZXcgci5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOnIubWFrZUFycmF5KGMsW2JdKSxuPXIuZXZlbnQuc3BlY2lhbFtwXXx8e30sZnx8IW4udHJpZ2dlcnx8bi50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbi5ub0J1YmJsZSYmIXIuaXNXaW5kb3coZSkpe2ZvcihqPW4uZGVsZWdhdGVUeXBlfHxwLHNiLnRlc3QoaitwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZvLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1vW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpuLmJpbmRUeXBlfHxwLG09KFcuZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZXLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWsmJmhba10sbSYmbS5hcHBseSYmVShoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cCxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYykhPT0hMXx8IVUoZSl8fGsmJnIuaXNGdW5jdGlvbihlW3BdKSYmIXIuaXNXaW5kb3coZSkmJihpPWVba10saSYmKGVba109bnVsbCksci5ldmVudC50cmlnZ2VyZWQ9cCxlW3BdKCksci5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2tdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yLmV4dGVuZChuZXcgci5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtyLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLHIuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO2lmKGMpcmV0dXJuIHIuZXZlbnQudHJpZ2dlcihhLGIsYywhMCl9fSksci5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLHIuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxvLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsby5mb2N1c2lufHxyLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3IuZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxyLmV2ZW50LmZpeChhKSl9O3IuZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLFcuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKS0xO2U/Vy5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLnJlbW92ZShkLGIpKX19fSk7dmFyIHRiPWEubG9jYXRpb24sdWI9ci5ub3coKSx2Yj0vXFw/LztyLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ci5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihBcnJheS5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8d2IudGVzdChhKT9kKGEsZSk6QWIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilBYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKEFycmF5LmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhci5pc1BsYWluT2JqZWN0KGEpKXIuZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpQWIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIil9LHIuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gci5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/ci5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhcih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmemIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIXliLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFqYS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPXIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpBcnJheS5pc0FycmF5KGMpP3IubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBCYj0vJTIwL2csQ2I9LyMuKiQvLERiPS8oWz8mXSlfPVteJl0qLyxFYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEZiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEdiPS9eKD86R0VUfEhFQUQpJC8sSGI9L15cXC9cXC8vLEliPXt9LEpiPXt9LEtiPVwiKi9cIi5jb25jYXQoXCIqXCIpLExiPWQuY3JlYXRlRWxlbWVudChcImFcIik7TGIuaHJlZj10Yi5ocmVmO2Z1bmN0aW9uIE1iKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W107aWYoci5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUpiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsci5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gT2IoYSxiKXt2YXIgYyxkLGU9ci5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmci5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIFBiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9aWYoZilyZXR1cm4gZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdfWZ1bmN0aW9uIFFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19ci5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnRiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RmIudGVzdCh0Yi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOnIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsci5hamF4U2V0dGluZ3MpLGIpOk9iKHIuYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtLG4sbz1yLmFqYXhTZXR1cCh7fSxjKSxwPW8uY29udGV4dHx8byxxPW8uY29udGV4dCYmKHAubm9kZVR5cGV8fHAuanF1ZXJ5KT9yKHApOnIuZXZlbnQscz1yLkRlZmVycmVkKCksdD1yLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHU9by5zdGF0dXNDb2RlfHx7fSx2PXt9LHc9e30seD1cImNhbmNlbGVkXCIseT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGspe2lmKCFoKXtoPXt9O3doaWxlKGI9RWIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBrP2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1rJiYoYT13W2EudG9Mb3dlckNhc2UoKV09d1thLnRvTG93ZXJDYXNlKCldfHxhLHZbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09ayYmKG8ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKGspeS5hbHdheXMoYVt5LnN0YXR1c10pO2Vsc2UgZm9yKGIgaW4gYSl1W2JdPVt1W2JdLGFbYl1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx4O3JldHVybiBlJiZlLmFib3J0KGIpLEEoMCxiKSx0aGlzfX07aWYocy5wcm9taXNlKHkpLG8udXJsPSgoYnx8by51cmx8fHRiLmhyZWYpK1wiXCIpLnJlcGxhY2UoSGIsdGIucHJvdG9jb2wrXCIvL1wiKSxvLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8by5tZXRob2R8fG8udHlwZSxvLmRhdGFUeXBlcz0oby5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtcIlwiXSxudWxsPT1vLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1vLnVybCxqLmhyZWY9ai5ocmVmLG8uY3Jvc3NEb21haW49TGIucHJvdG9jb2wrXCIvL1wiK0xiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh6KXtvLmNyb3NzRG9tYWluPSEwfX1pZihvLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBvLmRhdGEmJihvLmRhdGE9ci5wYXJhbShvLmRhdGEsby50cmFkaXRpb25hbCkpLE5iKEliLG8sYyx5KSxrKXJldHVybiB5O2w9ci5ldmVudCYmby5nbG9iYWwsbCYmMD09PXIuYWN0aXZlKysmJnIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxvLnR5cGU9by50eXBlLnRvVXBwZXJDYXNlKCksby5oYXNDb250ZW50PSFHYi50ZXN0KG8udHlwZSksZj1vLnVybC5yZXBsYWNlKENiLFwiXCIpLG8uaGFzQ29udGVudD9vLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJjA9PT0oby5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKG8uZGF0YT1vLmRhdGEucmVwbGFjZShCYixcIitcIikpOihuPW8udXJsLnNsaWNlKGYubGVuZ3RoKSxvLmRhdGEmJihmKz0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrby5kYXRhLGRlbGV0ZSBvLmRhdGEpLG8uY2FjaGU9PT0hMSYmKGY9Zi5yZXBsYWNlKERiLFwiJDFcIiksbj0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ViKysgK24pLG8udXJsPWYrbiksby5pZk1vZGlmaWVkJiYoci5sYXN0TW9kaWZpZWRbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsci5sYXN0TW9kaWZpZWRbZl0pLHIuZXRhZ1tmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHIuZXRhZ1tmXSkpLChvLmRhdGEmJm8uaGFzQ29udGVudCYmby5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsby5jb250ZW50VHlwZSkseS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsby5kYXRhVHlwZXNbMF0mJm8uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0/by5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1vLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOm8uYWNjZXB0c1tcIipcIl0pO2ZvcihtIGluIG8uaGVhZGVycyl5LnNldFJlcXVlc3RIZWFkZXIobSxvLmhlYWRlcnNbbV0pO2lmKG8uYmVmb3JlU2VuZCYmKG8uYmVmb3JlU2VuZC5jYWxsKHAseSxvKT09PSExfHxrKSlyZXR1cm4geS5hYm9ydCgpO2lmKHg9XCJhYm9ydFwiLHQuYWRkKG8uY29tcGxldGUpLHkuZG9uZShvLnN1Y2Nlc3MpLHkuZmFpbChvLmVycm9yKSxlPU5iKEpiLG8sYyx5KSl7aWYoeS5yZWFkeVN0YXRlPTEsbCYmcS50cmlnZ2VyKFwiYWpheFNlbmRcIixbeSxvXSksaylyZXR1cm4geTtvLmFzeW5jJiZvLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5hYm9ydChcInRpbWVvdXRcIil9LG8udGltZW91dCkpO3RyeXtrPSExLGUuc2VuZCh2LEEpfWNhdGNoKHope2lmKGspdGhyb3cgejtBKC0xLHopfX1lbHNlIEEoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gQShiLGMsZCxoKXt2YXIgaixtLG4sdix3LHg9YztrfHwoaz0hMCxpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseS5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJmI8MzAwfHwzMDQ9PT1iLGQmJih2PVBiKG8seSxkKSksdj1RYihvLHYseSxqKSxqPyhvLmlmTW9kaWZpZWQmJih3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihyLmxhc3RNb2RpZmllZFtmXT13KSx3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihyLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09by50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3g9XCJub3Rtb2RpZmllZFwiOih4PXYuc3RhdGUsbT12LmRhdGEsbj12LmVycm9yLGo9IW4pKToobj14LCFiJiZ4fHwoeD1cImVycm9yXCIsYjwwJiYoYj0wKSkpLHkuc3RhdHVzPWIseS5zdGF0dXNUZXh0PShjfHx4KStcIlwiLGo/cy5yZXNvbHZlV2l0aChwLFttLHgseV0pOnMucmVqZWN0V2l0aChwLFt5LHgsbl0pLHkuc3RhdHVzQ29kZSh1KSx1PXZvaWQgMCxsJiZxLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeSxvLGo/bTpuXSksdC5maXJlV2l0aChwLFt5LHhdKSxsJiYocS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3ksb10pLC0tci5hY3RpdmV8fHIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHl9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiByLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiByLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLHIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtyW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiByLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxyLmFqYXgoci5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LHIuaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLHIuX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sci5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIHRoaXNbMF0mJihyLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzWzBdKSksYj1yKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1yKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPXIuaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJlbnQoYSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7cih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxyLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIuZXhwci5wc2V1ZG9zLnZpc2libGUoYSl9LHIuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuISEoYS5vZmZzZXRXaWR0aHx8YS5vZmZzZXRIZWlnaHR8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxyLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBSYj17MDoyMDAsMTIyMzoyMDR9LFNiPXIuYWpheFNldHRpbmdzLnhocigpO28uY29ycz0hIVNiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gU2Isby5hamF4PVNiPSEhU2Isci5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoby5jb3JzfHxTYiYmIWIuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKFJiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fSksci5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEpe2EuY3Jvc3NEb21haW4mJihhLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxyLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gci5nbG9iYWxFdmFsKGEpLGF9fX0pLHIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksci5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9cihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBUYj1bXSxVYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPVRiLnBvcCgpfHxyLmV4cGFuZG8rXCJfXCIrdWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLHIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoVWIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlViLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO2lmKGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdKXJldHVybiBlPWIuanNvbnBDYWxsYmFjaz1yLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShVYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh2Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxyLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP3IoYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssVGIucHVzaChlKSksZyYmci5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwifSksby5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksci5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKTt2YXIgZSxmLGc7cmV0dXJuIGJ8fChvLmNyZWF0ZUhUTUxEb2N1bWVudD8oYj1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxlPWIuY3JlYXRlRWxlbWVudChcImJhc2VcIiksZS5ocmVmPWQubG9jYXRpb24uaHJlZixiLmhlYWQuYXBwZW5kQ2hpbGQoZSkpOmI9ZCksZj1DLmV4ZWMoYSksZz0hYyYmW10sZj9bYi5jcmVhdGVFbGVtZW50KGZbMV0pXTooZj1xYShbYV0sYixnKSxnJiZnLmxlbmd0aCYmcihnKS5yZW1vdmUoKSxyLm1lcmdlKFtdLGYuY2hpbGROb2RlcykpfSxyLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1wYihhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH0sci5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1yLmNzcyhhLFwicG9zaXRpb25cIiksbD1yKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9ci5jc3MoYSxcInRvcFwiKSxpPXIuY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksci5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLHIuZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sci5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQsZSxmPXRoaXNbMF07aWYoZilyZXR1cm4gZi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZD1mLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Zi5vd25lckRvY3VtZW50LGM9Yi5kb2N1bWVudEVsZW1lbnQsZT1iLmRlZmF1bHRWaWV3LHt0b3A6ZC50b3ArZS5wYWdlWU9mZnNldC1jLmNsaWVudFRvcCxsZWZ0OmQubGVmdCtlLnBhZ2VYT2Zmc2V0LWMuY2xpZW50TGVmdH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09ci5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxCKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkPXt0b3A6ZC50b3Arci5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGxlZnQ6ZC5sZWZ0K3IuY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCl9KSx7dG9wOmIudG9wLWQudG9wLXIuY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LXIuY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1yLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8cmF9KX19KSxyLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtyLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGEpP2Y9YTo5PT09YS5ub2RlVHlwZSYmKGY9YS5kZWZhdWx0Vmlldyksdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPVBhKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9T2EoYSxiKSxNYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLmhvbGRSZWFkeT1mdW5jdGlvbihhKXthP3IucmVhZHlXYWl0Kys6ci5yZWFkeSghMCl9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5LHIucGFyc2VKU09OPUpTT04ucGFyc2Usci5ub2RlTmFtZT1CLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBWYj1hLmpRdWVyeSxXYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1XYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VmIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd3d3Ly50cy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=