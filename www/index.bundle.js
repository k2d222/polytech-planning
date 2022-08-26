/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/.ts/V3/app.ts":
/*!***************************!*\
  !*** ./www/.ts/V3/app.ts ***!
  \***************************/
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
var events_1 = __webpack_require__(/*! ./events */ "./www/.ts/V3/events.ts");
__webpack_require__(/*! ./events */ "./www/.ts/V3/events.ts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cached, err_1;
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
                    cached = calendar_1.Calendar.drawFromCache(day_1.Day.today());
                    if (cached)
                        events_1.Events.init();
                    return [4 /*yield*/, startInappBrowser()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, calendar_1.Calendar.draw(day_1.Day.today())];
                case 4:
                    _a.sent();
                    if (!cached)
                        events_1.Events.init(); // events are initialized after full load to guarantee Calendar.getCurrent()
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
    document.addEventListener('deviceready', main, false);
}
function restartInappBrowser() {
    return startInappBrowser();
}
// ---------------------
exports.App = { init: init, restartInappBrowser: restartInappBrowser };


/***/ }),

/***/ "./www/.ts/V3/calendar.ts":
/*!********************************!*\
  !*** ./www/.ts/V3/calendar.ts ***!
  \********************************/
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
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
var cache;
var storage;
var currentDateString;
var currentRequest;
function updateNavigationButtons(dateString) {
    proxy_1.Proxy.$BUTTON_PREV.removeClass('disabled');
    proxy_1.Proxy.$BUTTON_NEXT.removeClass('disabled');
    if (dateString in cache)
        return;
    var prevDay = day_1.Day.add(dateString, -1);
    var nextDay = day_1.Day.add(dateString, 1);
    if (!(prevDay in cache))
        proxy_1.Proxy.$BUTTON_PREV.addClass('disabled');
    if (!(nextDay in cache))
        proxy_1.Proxy.$BUTTON_NEXT.addClass('disabled');
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
function makeRequest(dateString) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!currentRequest) return [3 /*break*/, 2];
                    console.warn('calendar update: already waiting for data');
                    return [4 /*yield*/, currentRequest];
                case 1:
                    _a.sent();
                    if (dateString !== currentDateString)
                        throw new error_1.default(proxy_1.Proxy.err.REQUEST_CANCELLED);
                    _a.label = 2;
                case 2:
                    currentRequest = (function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var week, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        notification_1.Notification.show('loading');
                                        return [4 /*yield*/, network_1.Network.whenOnline()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, 5, 6]);
                                        return [4 /*yield*/, communication_1.Communication.requestWeek(dateString)];
                                    case 3:
                                        week = _a.sent();
                                        registerWeek(week);
                                        return [3 /*break*/, 6];
                                    case 4:
                                        e_1 = _a.sent();
                                        console.warn('request failed:', e_1);
                                        return [3 /*break*/, 6];
                                    case 5:
                                        notification_1.Notification.hide('loading');
                                        return [7 /*endfinally*/];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        });
                    })();
                    return [4 /*yield*/, currentRequest];
                case 3:
                    _a.sent();
                    currentRequest = null;
                    return [2 /*return*/];
            }
        });
    });
}
function finishRequest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!currentRequest) return [3 /*break*/, 2];
                    return [4 /*yield*/, currentRequest];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function drawFromCache(dateString) {
    if (dateString in cache) {
        currentDateString = dateString;
        calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
        return true;
    }
    return false;
}
function draw(dateString) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateNavigationButtons(dateString);
                    currentDateString = dateString;
                    if (!(dateString in storage)) return [3 /*break*/, 1];
                    calendarDrawer_1.CalendarDrawer.draw(dateString, storage);
                    return [3 /*break*/, 4];
                case 1:
                    if (dateString in cache) {
                        calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
                    }
                    else {
                        calendarDrawer_1.CalendarDrawer.draw(dateString); // actually draws nothing
                    }
                    return [4 /*yield*/, makeRequest(dateString)];
                case 2:
                    _a.sent();
                    if (!(currentDateString == dateString && dateString in storage)) return [3 /*break*/, 4];
                    return [4 /*yield*/, draw(dateString)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// -------------------------------------
function init() {
    cache = loadCache();
    storage = {};
    currentDateString = currentDateString || null;
}
function getCurrent() {
    if (!currentDateString)
        throw new error_1.default('calendar has no current day');
    return currentDateString;
}
exports.Calendar = {
    init: init,
    draw: draw,
    drawFromCache: drawFromCache,
    getCurrent: getCurrent,
    finishRequest: finishRequest
};


/***/ }),

/***/ "./www/.ts/V3/calendarData.ts":
/*!************************************!*\
  !*** ./www/.ts/V3/calendarData.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.expandDay = exports.expandCourse = void 0;
var filter_1 = __webpack_require__(/*! ./filter */ "./www/.ts/V3/filter.ts");
;
;
function expandCourse(mini) {
    var expanded = {
        start: { hour: mini[0][0], minute: mini[0][1] },
        end: { hour: mini[1][0], minute: mini[1][1] },
        title: mini[2], background: mini[3],
        unavailable: false, blacklisted: false
    };
    if (expanded.title === null) {
        expanded.title = 'FERMÉ';
        expanded.unavailable = true;
    }
    else {
        expanded.blacklisted = filter_1.Filter.filterElement(expanded);
    }
    return expanded;
}
exports.expandCourse = expandCourse;
function expandDay(mini) {
    var expanded = [];
    for (var i in mini) {
        expanded[i] = expandCourse(mini[i]);
    }
    expanded.sort(function (a, b) { return !a.blacklisted && b.blacklisted ? -1 : 0; }); // not blacklisted comes first (1 <=> b comes first)
    return expanded;
}
exports.expandDay = expandDay;


/***/ }),

/***/ "./www/.ts/V3/calendarDrawer.ts":
/*!**************************************!*\
  !*** ./www/.ts/V3/calendarDrawer.ts ***!
  \**************************************/
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
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var calendarData_1 = __webpack_require__(/*! ./calendarData */ "./www/.ts/V3/calendarData.ts");
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
            var day = (0, calendarData_1.expandDay)(storage[dateString]);
            drawCoursesLandscape(day, i);
            dateString = day_1.Day.add(dateString, 1);
        }
    }
}
function drawPortrait(dateString, storage) {
    if (storage) {
        var day = (0, calendarData_1.expandDay)(storage[dateString]);
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
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
;
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
                    throw new error_1.default(proxy_1.Proxy.err.BUTTON_NOT_FOUND);
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
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
    var current = calendar_1.Calendar.getCurrent();
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
                throw new error_1.default("missing attribute 'date' on datepicker button");
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

/***/ "./www/.ts/V3/error.ts":
/*!*****************************!*\
  !*** ./www/.ts/V3/error.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var notification_1 = __webpack_require__(/*! ./notification */ "./www/.ts/V3/notification.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var CalendarError = /** @class */ (function (_super) {
    __extends(CalendarError, _super);
    function CalendarError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'CalendarError';
        if (message)
            switch (message) {
                case proxy_1.Proxy.err.CALENDAR_ERROR:
                case proxy_1.Proxy.err.WEBVIEW_NOT_LOADED:
                    notification_1.Notification.show('calendarError', { duration: 3000 });
                    break;
                case proxy_1.Proxy.err.BUTTON_NOT_FOUND:
                    notification_1.Notification.show('dateError', { duration: 3000 });
                    break;
                case proxy_1.Proxy.err.REQUEST_CANCELLED:
                    console.warn('A request was cancelled');
                    break;
                default:
                    notification_1.Notification.show('majorError');
                    break;
            }
        ;
        return _this;
    }
    return CalendarError;
}(Error));
exports["default"] = CalendarError;


/***/ }),

/***/ "./www/.ts/V3/events.ts":
/*!******************************!*\
  !*** ./www/.ts/V3/events.ts ***!
  \******************************/
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
exports.Events = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var settings_1 = __webpack_require__(/*! ./settings */ "./www/.ts/V3/settings.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var calendarDrawer_1 = __webpack_require__(/*! ./calendarDrawer */ "./www/.ts/V3/calendarDrawer.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var datepicker_1 = __webpack_require__(/*! ./datepicker */ "./www/.ts/V3/datepicker.ts");
function evtScreenTouch() {
    $(document.body).on('touchmove', function (e) {
        var e_1, _a;
        var set = __spreadArray([e.target], __read($(e.target).parents()), false);
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
}
function evtOrientationChange() {
    var landscape = (screen.orientation.type.indexOf('portrait') === -1);
    calendarDrawer_1.CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
    function onScreenOrientChange() {
        var landscape = (screen.orientation.type.indexOf('portrait') === -1);
        calendarDrawer_1.CalendarDrawer.setDrawMode(landscape ? 'landscape' : 'portrait');
        calendar_1.Calendar.draw(calendar_1.Calendar.getCurrent());
    }
    screen.orientation.addEventListener('change', onScreenOrientChange);
}
function evtSettingsClick() {
    proxy_1.Proxy.$BUTTON_SETTINGS.on('click', function () {
        settings_1.Settings.show()
            .then(function () {
            calendar_1.Calendar.draw(calendar_1.Calendar.getCurrent()); // redraw with new filters
        });
    });
}
function evtPrevClick() {
    proxy_1.Proxy.$BUTTON_PREV.on('click', function () {
        if (proxy_1.Proxy.$BUTTON_PREV.is('.disabled'))
            return;
        var day = day_1.Day.add(calendar_1.Calendar.getCurrent(), -1);
        calendar_1.Calendar.draw(day).then(function () {
            proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
        });
    });
}
function evtNextClick() {
    proxy_1.Proxy.$BUTTON_NEXT.on('click', function () {
        if (proxy_1.Proxy.$BUTTON_NEXT.is('.disabled'))
            return;
        var day = day_1.Day.add(calendar_1.Calendar.getCurrent(), 1);
        calendar_1.Calendar.draw(day).then(function () {
            proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
        });
    });
}
function evtDatepickerClick() {
    proxy_1.Proxy.$DATE_CONTAINER.on('click', function () {
        proxy_1.Proxy.$DATE_PICKER_CONTAINER.removeClass('hidden');
        var day;
        try {
            day = calendar_1.Calendar.getCurrent();
        }
        catch (e) {
            day = day_1.Day.today();
        }
        datepicker_1.DatePicker.create(day);
    });
}
function evtGifs() {
    var gifRequest;
    proxy_1.Proxy.$GIF_CONTAINER.on('click', function () {
        proxy_1.Proxy.$GIF_CONTAINER.hide();
        proxy_1.Proxy.$GIF_IMG.attr('src', '');
    });
    proxy_1.Proxy.$COURSE_CONTAINER.on('click', function (evt) {
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
}
var initialized = false;
function init() {
    if (initialized)
        return;
    initialized = true;
    evtScreenTouch();
    evtOrientationChange();
    evtSettingsClick();
    evtPrevClick();
    evtNextClick();
    evtDatepickerClick();
    evtGifs();
}
exports.Events = {
    init: init
};


/***/ }),

/***/ "./www/.ts/V3/filter.ts":
/*!******************************!*\
  !*** ./www/.ts/V3/filter.ts ***!
  \******************************/
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
;
var loadedFilter;
var filterName = '';
function checkList(course, list) {
    var e_1, _a, e_2, _b;
    var content = course.title.split('<br>');
    try {
        for (var content_1 = __values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
            var ligne = content_1_1.value;
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
            if (content_1_1 && !content_1_1.done && (_a = content_1.return)) _a.call(content_1);
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
    if (!(storage_1.Storage.has(filter.key)) || storage_1.Storage.get(filter.key) === '0')
        return false; // filtre désactivé ou inexistant
    if (filter.whitelist && filter.blacklist) {
        var whitelisted = checkList(el, filter.whitelist);
        var blacklisted = checkList(el, filter.blacklist);
        if (!whitelisted && blacklisted)
            return true;
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
    return false;
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
exports.Filter = {
    filterElement: filterElement,
    loadFilter: loadFilter,
    get loadedFilter() {
        return loadedFilter;
    }
};


/***/ }),

/***/ "./www/.ts/V3/inappbrowser.ts":
/*!************************************!*\
  !*** ./www/.ts/V3/inappbrowser.ts ***!
  \************************************/
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
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
                        throw new error_1.default(proxy_1.Proxy.err.CALENDAR_ERROR);
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
            reject(new error_1.default(proxy_1.Proxy.err.WEBVIEW_NOT_LOADED));
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
                    if (ref)
                        ref.close();
                    return [4 /*yield*/, load(currentUrl)];
                case 1:
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! ../../jquery.js */ "./www/jquery.js");

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Proxy = void 0;
exports.Proxy = {
    // APP_VERSION: 10060,
    STORAGE_VERSION: '9',
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
        'peip1': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87a9882e74a3f76e0b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peip2': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8e7485d9bee2c84dbb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peipc': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87b035ebf272a6adfb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et3': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8a296a2ffb0037d5bb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et4': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8f04f4a6b90e17f71b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'et5': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8c8df41a0a7ef48f7b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app3': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8b0da01d9866c6b06b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app4': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f824f1ecce698039f3b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'app5': 'https://ade-planning.polytech.universite-paris-saclay.fr/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f83efacf3364b3523fb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
    },
};


/***/ }),

/***/ "./www/.ts/V3/settings.ts":
/*!********************************!*\
  !*** ./www/.ts/V3/settings.ts ***!
  \********************************/
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
exports.Settings = void 0;
var filter_1 = __webpack_require__(/*! ./filter */ "./www/.ts/V3/filter.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var app_1 = __webpack_require__(/*! ./app */ "./www/.ts/V3/app.ts");
var calendar_1 = __webpack_require__(/*! ./calendar */ "./www/.ts/V3/calendar.ts");
var calendarDrawer_1 = __webpack_require__(/*! ./calendarDrawer */ "./www/.ts/V3/calendarDrawer.ts");
var day_1 = __webpack_require__(/*! ./day */ "./www/.ts/V3/day.ts");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
                if (val === '0') {
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
    return __awaiter(this, void 0, void 0, function () {
        var $sel, val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    $sel = proxy_1.Proxy.$SETTINGS_GRADE.children().filter(':checked');
                    val = $sel.attr('value');
                    if (val)
                        storage_1.Storage.set(proxy_1.Proxy.storage.GRADE, val);
                    else
                        throw new error_1.default("missing attribute 'value' on settings element");
                    storage_1.Storage.set(proxy_1.Proxy.storage.SAVED_DAYS, '');
                    calendar_1.Calendar.init();
                    calendarDrawer_1.CalendarDrawer.draw(day_1.Day.today()); // delete currently drawn courses
                    proxy_1.Proxy.$SETTINGS_SAVE.hide();
                    proxy_1.Proxy.$SETTINGS_CANCEL.hide();
                    proxy_1.Proxy.$SETTINGS_FILTER.children().remove();
                    return [4 /*yield*/, calendar_1.Calendar.finishRequest()];
                case 1:
                    _a.sent(); // don't unload browser while a request is pending !
                    return [4 /*yield*/, filter_1.Filter.loadFilter(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, app_1.App.restartInappBrowser()];
                case 3:
                    _a.sent();
                    loadDOM(filter_1.Filter.loadedFilter);
                    return [4 /*yield*/, calendar_1.Calendar.draw(day_1.Day.today())];
                case 4:
                    _a.sent();
                    proxy_1.Proxy.$SETTINGS_SAVE.show();
                    return [2 /*return*/];
            }
        });
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
                    if (exports.Storage.has(proxy_1.Proxy.storage.VERSION) && exports.Storage.get(proxy_1.Proxy.storage.VERSION) !== proxy_1.Proxy.STORAGE_VERSION) {
                        alert('L\'appli à été mise à jour !');
                        exports.Storage.clear();
                    }
                    // show welcome dialog (disabled feature for now...)
                    if (!exports.Storage.has(proxy_1.Proxy.storage.ACKNOWLEDGED)) {
                        // P.$ABOUT_CONTAINER.removeClass('hidden');
                        exports.Storage.set(proxy_1.Proxy.storage.ACKNOWLEDGED, '1');
                    }
                    if (!!exports.Storage.has(proxy_1.Proxy.storage.VERSION)) return [3 /*break*/, 2];
                    exports.Storage.clear();
                    return [4 /*yield*/, settings_1.Settings.show({ cancelDisabled: true })];
                case 1:
                    _a.sent();
                    exports.Storage.set(proxy_1.Proxy.storage.VERSION, proxy_1.Proxy.STORAGE_VERSION);
                    exports.Storage.set('root', '1'); // TODO
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.Storage = {
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


/***/ }),

/***/ "./www/.ts/V3/theme.ts":
/*!*****************************!*\
  !*** ./www/.ts/V3/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Theme = void 0;
var proxy_1 = __webpack_require__(/*! ./proxy */ "./www/.ts/V3/proxy.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./www/.ts/V3/storage.ts");
var error_1 = __webpack_require__(/*! ./error */ "./www/.ts/V3/error.ts");
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
        throw new error_1.default("missing attribute 'value' on settings element");
});
exports.Theme = {
    set: set
};


/***/ }),

/***/ "./www/jquery.js":
/*!***********************!*\
  !*** ./www/jquery.js ***!
  \***********************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./www/.ts/index.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var app_1 = __webpack_require__(/*! ./V3/app */ "./www/.ts/V3/app.ts");
app_1.App.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUMseUJBQXlCLDRCQUE0Qix1SkFBdUosZ0JBQWdCLDREQUE0RCxvQkFBb0Isd0NBQXdDLENBQUMsS0FBcUMsRUFBRSxpQ0FBZ0IsRUFBRSxtQ0FBQyxXQUFXLFNBQVM7QUFBQSxrR0FBQyxDQUFDLHVCQUF1QixnQ0FBZ0MsMERBQTBELDJDQUEyQzs7Ozs7OztVQ0RqMHVGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsdUVBQStCO0FBRS9CLFNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2FwcC50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9jYWxlbmRhckRhdGEudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXJEcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY29tbXVuaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9kYXRlcGlja2VyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2RheS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9lcnJvci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZmlsdGVyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2luYXBwYnJvd3Nlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9uZXR3b3JrLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL25vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9wcm94eS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9zdG9yYWdlLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL3RoZW1lLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvanF1ZXJ5LmpzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcidcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcidcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnXG5pbXBvcnQgeyBJbmFwcEJyb3dzZXIgfSBmcm9tICcuL2luYXBwYnJvd3NlcidcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5pbXBvcnQgeyBFdmVudHMgfSBmcm9tICcuL2V2ZW50cydcblxuaW1wb3J0ICcuL2V2ZW50cydcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgdHJ5IHtcbiAgICBDYWxlbmRhci5pbml0KCk7XG4gICAgYXdhaXQgU3RvcmFnZS5pbml0KCk7XG4gICAgVGhlbWUuc2V0KFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5USEVNRSkpO1xuICAgIGF3YWl0IEZpbHRlci5sb2FkRmlsdGVyKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpO1xuICAgIGxldCBjYWNoZWQgPSBDYWxlbmRhci5kcmF3RnJvbUNhY2hlKERheS50b2RheSgpKTtcbiAgICBpZiAoY2FjaGVkKSBFdmVudHMuaW5pdCgpO1xuICAgIGF3YWl0IHN0YXJ0SW5hcHBCcm93c2VyKCk7XG4gICAgYXdhaXQgQ2FsZW5kYXIuZHJhdyhEYXkudG9kYXkoKSk7XG4gICAgaWYgKCFjYWNoZWQpIEV2ZW50cy5pbml0KCk7IC8vIGV2ZW50cyBhcmUgaW5pdGlhbGl6ZWQgYWZ0ZXIgZnVsbCBsb2FkIHRvIGd1YXJhbnRlZSBDYWxlbmRhci5nZXRDdXJyZW50KClcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignc29tZXRoaW5nIGJhZCBoYXBwZW5lZCAhJyk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdtYWpvckVycm9yJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRJbmFwcEJyb3dzZXIoKSB7XG4gIGF3YWl0IE5ldHdvcmsud2hlbk9ubGluZSgpXG4gIGF3YWl0IEluYXBwQnJvd3Nlci5sb2FkKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpXG4gIGF3YWl0IEluYXBwQnJvd3Nlci5pbmplY3RTY3JpcHQoKVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIG1haW4sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEluYXBwQnJvd3NlcigpIHtcbiAgcmV0dXJuIHN0YXJ0SW5hcHBCcm93c2VyKCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgQXBwID0geyBpbml0LCByZXN0YXJ0SW5hcHBCcm93c2VyIH07XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IENvbW11bmljYXRpb24gfSBmcm9tICcuL2NvbW11bmljYXRpb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnLi9uZXR3b3JrJztcbmltcG9ydCB7IENhbGVuZGFyRHJhd2VyIH0gZnJvbSAnLi9jYWxlbmRhckRyYXdlcic7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IFN0b3JlLCBNaW5pZmllZFdlZWsgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSdcbmltcG9ydCBDYWxlbmRhckVycm9yIGZyb20gJy4vZXJyb3InXG5cbmZ1bmN0aW9uIGxvYWRDYWNoZSgpOiBTdG9yZSB7XG4gIGNvbnN0IGNhY2hlU3RyID0gU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlNBVkVEX0RBWVMpO1xuICBsZXQgY2FjaGU6IFN0b3JlO1xuICB0cnkge1xuICAgIGNhY2hlID0gSlNPTi5wYXJzZShjYWNoZVN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ2RheXMgY2FjaGUgaXMgdW5zZXQgb3IgaW52YWxpZC4nKTtcbiAgICBjYWNoZSA9IHt9O1xuICB9XG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUNhY2hlKGNhY2hlOiBTdG9yZSkge1xuICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuU0FWRURfREFZUywgSlNPTi5zdHJpbmdpZnkoY2FjaGUpKTtcbn1cblxubGV0IGNhY2hlOiBTdG9yZTtcbmxldCBzdG9yYWdlOiBTdG9yZTtcbmxldCBjdXJyZW50RGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbDtcbmxldCBjdXJyZW50UmVxdWVzdDogUHJvbWlzZTx2b2lkPiB8IG51bGw7XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25CdXR0b25zKGRhdGVTdHJpbmc6IHN0cmluZykgeyAvLyBkaXNhYmxlIG9yIGVuYWJsZSBuYXYgYnV0dG9uc1xuICBQLiRCVVRUT05fUFJFVi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgUC4kQlVUVE9OX05FWFQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHJldHVybjtcblxuICBjb25zdCBwcmV2RGF5ID0gRGF5LmFkZChkYXRlU3RyaW5nLCAtMSk7XG4gIGNvbnN0IG5leHREYXkgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuXG4gIGlmICghKHByZXZEYXkgaW4gY2FjaGUpKSBQLiRCVVRUT05fUFJFVi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgaWYgKCEobmV4dERheSBpbiBjYWNoZSkpIFAuJEJVVFRPTl9ORVhULmFkZENsYXNzKCdkaXNhYmxlZCcpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcldlZWsobWluaTogTWluaWZpZWRXZWVrKSB7XG4gIGxldCBkYXRlU3RyaW5nID0gbWluaS5kYXRlOyAvLyBkYXRlIGlzIGEgbW9uZGF5XG4gIGZvciAoY29uc3QgaSBpbiBtaW5pLmRheXMpIHtcbiAgICBzdG9yYWdlW2RhdGVTdHJpbmddID0gbWluaS5kYXlzW2ldO1xuICAgIGNhY2hlW2RhdGVTdHJpbmddID0gbWluaS5kYXlzW2ldO1xuICAgIGRhdGVTdHJpbmcgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuICB9XG4gIHNhdmVDYWNoZShjYWNoZSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gbWFrZVJlcXVlc3QoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGlmIChjdXJyZW50UmVxdWVzdCkge1xuICAgIGNvbnNvbGUud2FybignY2FsZW5kYXIgdXBkYXRlOiBhbHJlYWR5IHdhaXRpbmcgZm9yIGRhdGEnKTtcbiAgICBhd2FpdCBjdXJyZW50UmVxdWVzdDtcbiAgICBpZihkYXRlU3RyaW5nICE9PSBjdXJyZW50RGF0ZVN0cmluZykgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoUC5lcnIuUkVRVUVTVF9DQU5DRUxMRUQpO1xuICB9XG5cbiAgY3VycmVudFJlcXVlc3QgPSAoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ2xvYWRpbmcnKTtcbiAgICBhd2FpdCBOZXR3b3JrLndoZW5PbmxpbmUoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VlayA9IGF3YWl0IENvbW11bmljYXRpb24ucmVxdWVzdFdlZWsoZGF0ZVN0cmluZyk7XG4gICAgICByZWdpc3RlcldlZWsod2Vlayk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdyZXF1ZXN0IGZhaWxlZDonLCBlKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICBOb3RpZmljYXRpb24uaGlkZSgnbG9hZGluZycpO1xuICAgIH1cbiAgfSkoKTtcblxuICBhd2FpdCBjdXJyZW50UmVxdWVzdDtcbiAgY3VycmVudFJlcXVlc3QgPSBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5pc2hSZXF1ZXN0KCkge1xuICAgIGlmIChjdXJyZW50UmVxdWVzdCkgYXdhaXQgY3VycmVudFJlcXVlc3Q7XG59XG5cbmZ1bmN0aW9uIGRyYXdGcm9tQ2FjaGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGlmIChkYXRlU3RyaW5nIGluIGNhY2hlKSB7XG4gICAgY3VycmVudERhdGVTdHJpbmcgPSBkYXRlU3RyaW5nO1xuICAgIENhbGVuZGFyRHJhd2VyLmRyYXcoZGF0ZVN0cmluZywgY2FjaGUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZHJhdyhkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgdXBkYXRlTmF2aWdhdGlvbkJ1dHRvbnMoZGF0ZVN0cmluZyk7XG4gIGN1cnJlbnREYXRlU3RyaW5nID0gZGF0ZVN0cmluZztcbiAgaWYgKGRhdGVTdHJpbmcgaW4gc3RvcmFnZSkge1xuICAgIENhbGVuZGFyRHJhd2VyLmRyYXcoZGF0ZVN0cmluZywgc3RvcmFnZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHtcbiAgICAgIENhbGVuZGFyRHJhd2VyLmRyYXcoZGF0ZVN0cmluZywgY2FjaGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIENhbGVuZGFyRHJhd2VyLmRyYXcoZGF0ZVN0cmluZyk7IC8vIGFjdHVhbGx5IGRyYXdzIG5vdGhpbmdcbiAgICB9XG4gICAgYXdhaXQgbWFrZVJlcXVlc3QoZGF0ZVN0cmluZyk7XG4gICAgaWYoY3VycmVudERhdGVTdHJpbmcgPT0gZGF0ZVN0cmluZyAmJiBkYXRlU3RyaW5nIGluIHN0b3JhZ2UpIGF3YWl0IGRyYXcoZGF0ZVN0cmluZyk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjYWNoZSA9IGxvYWRDYWNoZSgpO1xuICBzdG9yYWdlID0ge307XG4gIGN1cnJlbnREYXRlU3RyaW5nID0gY3VycmVudERhdGVTdHJpbmcgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgaWYoIWN1cnJlbnREYXRlU3RyaW5nKSB0aHJvdyBuZXcgQ2FsZW5kYXJFcnJvcignY2FsZW5kYXIgaGFzIG5vIGN1cnJlbnQgZGF5Jyk7XG4gIHJldHVybiBjdXJyZW50RGF0ZVN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENhbGVuZGFyID0ge1xuICBpbml0LCBkcmF3LCBkcmF3RnJvbUNhY2hlLCBnZXRDdXJyZW50LCBmaW5pc2hSZXF1ZXN0XG59XG4iLCJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcidcblxuZXhwb3J0IGludGVyZmFjZSBFeHBhbmRlZENvdXJzZSB7XG4gIHN0YXJ0OiB7IGhvdXI6IG51bWJlcjsgbWludXRlOiBudW1iZXIgfTtcbiAgZW5kOiB7IGhvdXI6IG51bWJlcjsgbWludXRlOiBudW1iZXIgfTtcbiAgdGl0bGU6IHN0cmluZztcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICB1bmF2YWlsYWJsZTogYm9vbGVhbjtcbiAgYmxhY2tsaXN0ZWQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBNaW5pZmllZENvdXJzZSA9IFtcbiAgW1xuICAgIG51bWJlciwgLy8gc3RhcnQgaG91clxuICAgIG51bWJlciAvLyBzdGFydCBtaW51dGVcbiAgXSxcbiAgW1xuICAgIG51bWJlciwgLy8gZW5kIGhvdXJcbiAgICBudW1iZXIgLy8gZW5kIG1pbnV0ZVxuICBdLFxuICBzdHJpbmcsIC8vIHRpdGxlXG4gIHN0cmluZyAvLyBiYWNrZ3JvdW5kXG5dO1xuXG5leHBvcnQgdHlwZSBNaW5pZmllZERheSA9IE1pbmlmaWVkQ291cnNlW107XG5leHBvcnQgdHlwZSBFeHBhbmRlZERheSA9IEV4cGFuZGVkQ291cnNlW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmUge1xuICBba2V5OiBzdHJpbmddOiBNaW5pZmllZERheTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWluaWZpZWRXZWVrIHtcbiAgZGF0ZTogc3RyaW5nOyAvLyBkYXRlIGlzIGEgbW9uZGF5XG4gIGRheXM6IE1pbmlmaWVkRGF5W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRDb3Vyc2UobWluaTogTWluaWZpZWRDb3Vyc2UpIHtcbiAgY29uc3QgZXhwYW5kZWQ6IEV4cGFuZGVkQ291cnNlID0ge1xuICAgIHN0YXJ0OiB7IGhvdXI6IG1pbmlbMF1bMF0sIG1pbnV0ZTogbWluaVswXVsxXSB9LFxuICAgIGVuZDogeyBob3VyOiBtaW5pWzFdWzBdLCBtaW51dGU6IG1pbmlbMV1bMV0gfSxcbiAgICB0aXRsZTogbWluaVsyXSwgYmFja2dyb3VuZDogbWluaVszXSxcbiAgICB1bmF2YWlsYWJsZTogZmFsc2UsIGJsYWNrbGlzdGVkOiBmYWxzZVxuICB9O1xuXG4gIGlmIChleHBhbmRlZC50aXRsZSA9PT0gbnVsbCkge1xuICAgIGV4cGFuZGVkLnRpdGxlID0gJ0ZFUk3DiSc7XG4gICAgZXhwYW5kZWQudW5hdmFpbGFibGUgPSB0cnVlO1xuICB9XG4gIGVsc2Uge1xuICAgIGV4cGFuZGVkLmJsYWNrbGlzdGVkID0gRmlsdGVyLmZpbHRlckVsZW1lbnQoZXhwYW5kZWQpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRGF5KG1pbmk6IE1pbmlmaWVkRGF5KSB7XG4gIGNvbnN0IGV4cGFuZGVkOiBFeHBhbmRlZERheSA9IFtdO1xuXG4gIGZvcihjb25zdCBpIGluIG1pbmkpIHtcbiAgICBleHBhbmRlZFtpXSA9IGV4cGFuZENvdXJzZShtaW5pW2ldKTtcbiAgfVxuXG4gIGV4cGFuZGVkLnNvcnQoKGEsIGIpID0+ICFhLmJsYWNrbGlzdGVkICYmIGIuYmxhY2tsaXN0ZWQgPyAtMSA6IDApOyAvLyBub3QgYmxhY2tsaXN0ZWQgY29tZXMgZmlyc3QgKDEgPD0+IGIgY29tZXMgZmlyc3QpXG4gIHJldHVybiBleHBhbmRlZDtcbn1cbiIsImltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgRXhwYW5kZWRDb3Vyc2UsIEV4cGFuZGVkRGF5LCBTdG9yZSwgZXhwYW5kRGF5IH0gZnJvbSAnLi9jYWxlbmRhckRhdGEnXG5cbmZ1bmN0aW9uIGRyYXdMaW5lcygpIHtcbiAgY29uc3Qgbl9ob3VycyA9IFAuRU5EX0hPVVIgLSBQLlNUQVJUX0hPVVI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbl9ob3VyczsgaSsrKSB7XG4gICAgY29uc3QgaG91ciA9IGkgKyBQLlNUQVJUX0hPVVI7XG4gICAgY29uc3QgJGhvdXIgPSAkKFAuaHRtbC5IT1VSKTtcbiAgICAkaG91ci5odG1sKGhvdXIgKyAnIGgnKTtcbiAgICAkaG91ci5jc3Moe1xuICAgICAgZ3JpZFJvdzogKGkgKiA0ICsgMSkgKyBcIlwiXG4gICAgfSlcbiAgICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkaG91cik7XG4gICAgY29uc3QgJGxpbmUgPSAkKFAuaHRtbC5IT1VSX0xJTkUpO1xuICAgICRsaW5lLmNzcyh7XG4gICAgICBncmlkUm93OiAoaSAqIDQgKyAxKSArIFwiXCJcbiAgICB9KVxuICAgIFAuJENPVVJTRV9DT05UQUlORVIuYXBwZW5kKCRsaW5lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRyaXgoKTogYm9vbGVhbltdW10ge1xuICBjb25zdCBtYXRyaXggPSBbXVxuICBjb25zdCBuX2hvdXJzID0gUC5FTkRfSE9VUiAtIFAuU1RBUlRfSE9VUjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0ICogbl9ob3VyczsgaSsrKSB7XG4gICAgbWF0cml4W2ldID0gW107XG4gIH1cbiAgcmV0dXJuIG1hdHJpeDtcbn1cblxuZnVuY3Rpb24gZ2V0RW1wdHlTcGFjZShtYXRyaXg6IGJvb2xlYW5bXVtdLCBlbDogRXhwYW5kZWRDb3Vyc2UpIHtcbiAgY29uc3Qgc3RhcnRSb3cgPSAoZWwuc3RhcnQuaG91ciAtIFAuU1RBUlRfSE9VUikgKiA0ICsgZWwuc3RhcnQubWludXRlIC8gMTVcbiAgY29uc3QgZW5kUm93ID0gKGVsLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBlbC5lbmQubWludXRlIC8gMTVcbiAgY29uc3Qgd2lkdGggPSBlbC5ibGFja2xpc3RlZCA/IDEgOiAyO1xuICBsZXQgeSA9IDA7XG5cbiAgd2hpbGUgKG1hdHJpeFtzdGFydFJvd11beV0gPT09IHRydWUpIHkrKztcblxuICBjb25zdCBjaGVja1lPZmZzZXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgd2lkdGg7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXRyaXhbaV1bal0gPT09ICd1bmRlZmluZWQnKSBtYXRyaXhbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9O1xuICB3aGlsZSAoIWNoZWNrWU9mZnNldCh5KSkgeSsrO1xuXG4gIGZvciAobGV0IGogPSB5OyBqIDwgeSArIHdpZHRoOyBqKyspIHsgLy8gZmlsbCBlbXB0eSBzcGFjZVxuICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICBtYXRyaXhbaV1bal0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDE6IHksXG4gICAgeDI6IHkgKyB3aWR0aCxcbiAgICB5MTogc3RhcnRSb3cgKyAxLFxuICAgIHkyOiBlbmRSb3cgKyAxXG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGlkZXMoJGNvdXJzZTE6IEpRdWVyeTxIVE1MRWxlbWVudD4sICRjb3Vyc2UyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1zdGFydCcpKTtcbiAgY29uc3QgZW5kID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1lbmQnKSk7XG4gIGNvbnN0IG90aGVyU3RhcnQgPSBwYXJzZUludCgkY291cnNlMi5jc3MoJ2dyaWQtcm93LXN0YXJ0JykpO1xuICBjb25zdCBvdGhlckVuZCA9IHBhcnNlSW50KCRjb3Vyc2UyLmNzcygnZ3JpZC1yb3ctZW5kJykpO1xuICByZXR1cm4gKHN0YXJ0IDwgb3RoZXJFbmQgJiYgb3RoZXJTdGFydCA8IGVuZCk7XG59XG5cbmZ1bmN0aW9uIGxhbmRzY2FwZVhhbGlnbigkZGF5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHBsYWNlZCA9IFtdO1xuICBjb25zdCAkY291cnNlcyA9ICRkYXkuY2hpbGRyZW4oKTtcbiAgJGNvdXJzZXMuZGF0YSgneCcsIDApO1xuICAkY291cnNlcy5kYXRhKCd4TWF4JywgMCk7XG5cbiAgLy8gZmluZCB4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgcGxhY2VkKSB7XG4gICAgICBjb25zdCAkY291cnNlMiA9ICQoY291cnNlMik7XG4gICAgICBjb25zdCB4MiA9ICRjb3Vyc2UyLmRhdGEoJ3gnKTtcbiAgICAgIGlmICh4MSA9PT0geDIgJiYgY29sbGlkZXMoJGNvdXJzZTEsICRjb3Vyc2UyKSkge1xuICAgICAgICB4MSsrO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4JywgeDEpO1xuICAgIHBsYWNlZC5wdXNoKGNvdXJzZTEpO1xuICB9XG5cbiAgLy8gZmluZCB4TWF4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeE1heDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgJGNvdXJzZXMpIHtcbiAgICAgIGNvbnN0ICRjb3Vyc2UyID0gJChjb3Vyc2UyKTtcbiAgICAgIGNvbnN0IHhNYXgyID0gJGNvdXJzZTIuZGF0YSgneCcpO1xuICAgICAgaWYgKGNvbGxpZGVzKCRjb3Vyc2UxLCAkY291cnNlMikpIHtcbiAgICAgICAgeE1heDEgPSBNYXRoLm1heCh4TWF4MSwgeE1heDIpO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4TWF4JywgeE1heDEpO1xuICB9XG5cbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgJGNvdXJzZXMpIHtcbiAgICBjb25zdCAkY291cnNlID0gJChjb3Vyc2UpO1xuICAgIGNvbnN0IHggPSAkY291cnNlLmRhdGEoJ3gnKTtcbiAgICBjb25zdCB4TWF4ID0gJGNvdXJzZS5kYXRhKCd4TWF4JykgKyAxO1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgICdsZWZ0JzogMTAwIC8geE1heCAqIHggKyAnJScsXG4gICAgICAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclICsgMXB4KScgLy8gMXB4IGZvciB0aGUgY3NzIGJvcmRlclxuICAgIH0pO1xuICAgIGlmICh4ICsgMSA9PT0geE1heCkge1xuICAgICAgJGNvdXJzZS5jc3MoeyAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclKScgfSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0RhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTsgLy8gdG9kbyBtb3ZlIHRvIERheSBhbmQgcHJveHlcbiAgY29uc3QgZGF5cyA9IFsnRGltYW5jaGUnLCAnTHVuZGknLCAnTWFyZGknLCAnTWVyY3JlZGknLCAnSmV1ZGknLCAnVmVuZHJlZGknLCAnU2FtZWRpJ107XG4gIGNvbnN0IG1vbnRocyA9IFsnSmFudmllcicsICdGw6l2cmllcicsICdNYXJzJywgJ0F2cmlsJywgJ01haScsICdKdWluJywgJ0p1aWxsZXQnLCAnQW/Du3QnLCAnU2VwdGVtYnJlJywgJ09jdG9icmUnLCAnTm92ZW1icmUnLCAnRMOpY2VtYnJlJ107XG4gIGNvbnN0IHN0ciA9IGRheXNbZC5nZXREYXkoKV0gKyAnICcgKyBkLmdldERhdGUoKSArICcgJyArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xuICBQLiREQVRFLmh0bWwoc3RyKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNQb3J0cmFpdChkYXk6IEV4cGFuZGVkRGF5KSB7XG4gIGNvbnN0IG1hdHJpeCA9IGNyZWF0ZU1hdHJpeCgpO1xuICBsZXQgbWF4Q29sdW1uID0gMztcbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgZGF5KSB7XG4gICAgY29uc3QgJGNvdXJzZSA9ICQoUC5odG1sLkNPVVJTRSk7XG4gICAgY29uc3QgcG9zID0gZ2V0RW1wdHlTcGFjZShtYXRyaXgsIGNvdXJzZSk7XG4gICAgJGNvdXJzZS5jc3Moe1xuICAgICAgJ2dyaWQtcm93LXN0YXJ0JzogcG9zLnkxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBwb3MueTIgKyBcIlwiLFxuICAgICAgJ2dyaWQtY29sdW1uLXN0YXJ0JzogcG9zLngxICsgMiArIFwiXCIsXG4gICAgICAnZ3JpZC1jb2x1bW4tZW5kJzogcG9zLngyICsgMiArIFwiXCJcbiAgICB9KTtcbiAgICBtYXhDb2x1bW4gPSBNYXRoLm1heChwb3MueDIgKyAyLCBtYXhDb2x1bW4pO1xuICAgIGlmIChjb3Vyc2UuYmxhY2tsaXN0ZWQpICRjb3Vyc2UuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgZWxzZSAkY291cnNlLmNzcygnYmFja2dyb3VuZCcsIGNvdXJzZS5iYWNrZ3JvdW5kKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgUC4kQ09VUlNFX0NPTlRBSU5FUi5hcHBlbmQoJGNvdXJzZSk7XG4gIH1cbiAgJChQLiQuSE9VUl9MSU5FUykuY3NzKCdncmlkLWNvbHVtbi1lbmQnLCBtYXhDb2x1bW4gKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNMYW5kc2NhcGUoZGF5OiBFeHBhbmRlZERheSwgZGF5TnVtYmVyOiBudW1iZXIpIHtcbiAgY29uc3QgJGRheSA9ICQoUC5odG1sLkxBTkRTQ0FQRV9EQVkpO1xuICAkZGF5LmNzcyh7XG4gICAgZ3JpZENvbHVtbjogZGF5TnVtYmVyICsgMSArIFwiXCIsXG4gIH0pO1xuICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkZGF5KTtcblxuICBmb3IgKGNvbnN0IGNvdXJzZSBvZiBkYXkpIHtcbiAgICBpZiAoY291cnNlLmJsYWNrbGlzdGVkKSBjb250aW51ZTtcbiAgICBjb25zdCAkY291cnNlID0gJChQLmh0bWwuQ09VUlNFKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3Qgc3RhcnRSb3cgPSAoY291cnNlLnN0YXJ0LmhvdXIgLSBQLlNUQVJUX0hPVVIpICogNCArIGNvdXJzZS5zdGFydC5taW51dGUgLyAxNTtcbiAgICBjb25zdCBlbmRSb3cgPSAoY291cnNlLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBjb3Vyc2UuZW5kLm1pbnV0ZSAvIDE1O1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IGNvdXJzZS5iYWNrZ3JvdW5kLFxuICAgICAgJ2dyaWQtcm93LXN0YXJ0Jzogc3RhcnRSb3cgKyAxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBlbmRSb3cgKyAxICsgXCJcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgJGRheS5hcHBlbmQoJGNvdXJzZSlcbiAgfVxuICBsYW5kc2NhcGVYYWxpZ24oJGRheSk7XG59XG5cbnR5cGUgRHJhd01vZGUgPSAncG9ydHJhaXQnIHwgJ2xhbmRzY2FwZSc7XG5sZXQgZHJhd01vZGU6IERyYXdNb2RlID0gJ3BvcnRyYWl0JztcblxuZnVuY3Rpb24gc2V0RHJhd01vZGUobW9kZTogRHJhd01vZGUpIHtcbiAgZHJhd01vZGUgPSBtb2RlO1xufVxuXG5mdW5jdGlvbiBkcmF3TGFuZHNjYXBlKGRhdGVTdHJpbmc6IHN0cmluZywgc3RvcmFnZT86IFN0b3JlKSB7XG4gIFAuJExBTkRTQ0FQRV9DVVJSRU5UX0RBWS5jc3MoJ2dyaWQtY29sdW1uJywgRGF5LmRheShkYXRlU3RyaW5nKSArIDEgKyBcIlwiKTtcbiAgaWYgKHN0b3JhZ2UpIHtcbiAgICBkYXRlU3RyaW5nID0gRGF5Lm1vbmRheShkYXRlU3RyaW5nKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDY7IGkrKykge1xuICAgICAgY29uc3QgZGF5ID0gZXhwYW5kRGF5KHN0b3JhZ2VbZGF0ZVN0cmluZ10pO1xuICAgICAgZHJhd0NvdXJzZXNMYW5kc2NhcGUoZGF5LCBpKTtcbiAgICAgIGRhdGVTdHJpbmcgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3UG9ydHJhaXQoZGF0ZVN0cmluZzogc3RyaW5nLCBzdG9yYWdlPzogU3RvcmUpIHtcbiAgaWYgKHN0b3JhZ2UpIHtcbiAgICBjb25zdCBkYXkgPSBleHBhbmREYXkoc3RvcmFnZVtkYXRlU3RyaW5nXSk7XG4gICAgZHJhd0NvdXJzZXNQb3J0cmFpdChkYXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXcoZGF0ZVN0cmluZzogc3RyaW5nLCBzdG9yYWdlPzogU3RvcmUpIHtcbiAgTm90aWZpY2F0aW9uLmhpZGUoJ2NhbGVuZGFyRXJyb3InKTtcbiAgJChQLiQuQ09VUlNFKS5yZW1vdmUoKTtcbiAgJChQLiQuTEFORFNDQVBFX0RBWSkucmVtb3ZlKCk7XG4gICQoUC4kQ0FMRU5EQVIpLnJlbW92ZUNsYXNzKCdwb3J0cmFpdCBsYW5kc2NhcGUnKS5hZGRDbGFzcyhkcmF3TW9kZSk7XG4gIGlmIChkcmF3TW9kZSA9PT0gJ2xhbmRzY2FwZScpIGRyYXdMYW5kc2NhcGUoZGF0ZVN0cmluZywgc3RvcmFnZSk7XG4gIGVsc2UgZHJhd1BvcnRyYWl0KGRhdGVTdHJpbmcsIHN0b3JhZ2UpO1xuICBkcmF3RGF0ZShkYXRlU3RyaW5nKTtcbn1cblxuZHJhd0xpbmVzKCk7XG5cbmV4cG9ydCBjb25zdCBDYWxlbmRhckRyYXdlciA9IHtcbiAgZHJhdzogZHJhdyxcbiAgc2V0RHJhd01vZGU6IHNldERyYXdNb2RlXG59XG4iLCJpbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSdcbmltcG9ydCB7IEluYXBwQnJvd3NlciB9IGZyb20gJy4vaW5hcHBicm93c2VyJ1xuaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5pbXBvcnQgeyBNaW5pZmllZFdlZWsgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSdcbmltcG9ydCBDYWxlbmRhckVycm9yIGZyb20gJy4vZXJyb3InXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ1JlcXVlc3QoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RyQXJncyA9IFtdXG4gIGZvciAoY29uc3QgYXJnIG9mIGFyZ3MpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHN0ckFyZ3MucHVzaCgnXCInICsgYXJnICsgJ1wiJylcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgc3RyQXJncy5wdXNoKGFyZyA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHN0ckFyZ3MucHVzaChhcmcudG9TdHJpbmcoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcigncmVxdWVzdCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgKyAnKCcgKyBzdHJBcmdzLmpvaW4oJywnKSArICcpJztcbn1cblxuaW50ZXJmYWNlIFJlcXVlc3RNYXAge1xuICAncGFyc2VUaGlzV2Vlayc6IE1pbmlmaWVkV2VlaztcbiAgJ2lzV2Vla0xvYWRlZCc6IGJvb2xlYW47XG4gICdnZXRDdXJyZW50RGF0ZSc6IHN0cmluZztcbiAgJ2NsaWNrQnV0dG9uJzogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3Q8VCBleHRlbmRzIGtleW9mIFJlcXVlc3RNYXA+KGZ1bmN0aW9uTmFtZTogVCwgYXJnczogYW55W10pOiBQcm9taXNlPFJlcXVlc3RNYXBbVF0+IHtcbiAgY29uc3QgcmVxID0gY3JlYXRlU3RyaW5nUmVxdWVzdChmdW5jdGlvbk5hbWUsIGFyZ3MpO1xuICByZXR1cm4gSW5hcHBCcm93c2VyLmV2YWwocmVxKTtcbn1cblxuZnVuY3Rpb24gcHJvbWlzZVRpbWVvdXQodGltZW91dDogbnVtYmVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhaXRVbnRpbDxUIGV4dGVuZHMga2V5b2YgUmVxdWVzdE1hcD4oZnVuY3Rpb25OYW1lOiBULCBhcmdzOiBhbnlbXSwgZXhwZWN0ZWRSZXN1bHQ6IFJlcXVlc3RNYXBbVF0sIGZyZXF1ZW5jeTogbnVtYmVyID0gUC5jb20uREVGQVVMVF9VUERBVEVfSU5URVJWQUwpIHtcbiAgbGV0IGludGVydmFsOiBudW1iZXI7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgZnVuY3Rpb24gdGhlbihyZXM6IFJlcXVlc3RNYXBbVF0pIHtcbiAgICAgIGlmIChyZXMgPT0gZXhwZWN0ZWRSZXN1bHQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Ugc2V0VGltZW91dChpbl8sIGZyZXF1ZW5jeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5fKCkge1xuICAgICAgcmVxdWVzdChmdW5jdGlvbk5hbWUsIGFyZ3MpXG4gICAgICAgIC50aGVuKHRoZW4pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5fKCk7XG5cbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RXZWVrKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICBkYXRlU3RyaW5nID0gRGF5Lm1vbmRheShkYXRlU3RyaW5nKTtcbiAgYXdhaXQgd2FpdFVudGlsKCdpc1dlZWtMb2FkZWQnLCBbXSwgdHJ1ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gYXdhaXQgcmVxdWVzdCgnZ2V0Q3VycmVudERhdGUnLCBbXSk7XG5cbiAgaWYgKGN1cnJlbnREYXRlICE9PSBkYXRlU3RyaW5nKSB7IC8vIG11c3QgbG9hZCB3ZWVrIGJlZm9yZVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoJ2NsaWNrQnV0dG9uJywgW2RhdGVTdHJpbmddKVxuICAgIGlmICghcmVzKSB0aHJvdyBuZXcgQ2FsZW5kYXJFcnJvcihQLmVyci5CVVRUT05fTk9UX0ZPVU5EKTtcbiAgICBlbHNlIGF3YWl0IHByb21pc2VUaW1lb3V0KFAuY29tLlRJTUVPVVRfQUZURVJfQlVUVE9OX1BSRVNTKTtcbiAgICBhd2FpdCB3YWl0VW50aWwoJ2dldEN1cnJlbnREYXRlJywgW10sIGRhdGVTdHJpbmcpO1xuICAgIGF3YWl0IHdhaXRVbnRpbCgnaXNXZWVrTG9hZGVkJywgW10sIHRydWUpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgncGFyc2VUaGlzV2VlaycsIFtdKVxuICBjb25zb2xlLmxvZygncmVjZWl2ZWQgd2VlaycsIHJlcyk7XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBjb25zdCBDb21tdW5pY2F0aW9uID0gKGZ1bmN0aW9uKCkgeyAvLyBjb21tdW5pY2F0aW9uIHdpdGggd2Vidmlld1xuXG4gIHJldHVybiB7XG4gICAgcmVxdWVzdFdlZWs6IHJlcXVlc3RXZWVrXG4gIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuY29uc3QgbW9udGhzID0gWydKYW52aWVyJywgJ0bDqXZyaWVyJywgJ01hcnMnLCAnQXZyaWwnLCAnTWFpJywgJ0p1aW4nLCAnSnVpbGxldCcsICdBb8O7dCcsICdTZXB0ZW1icmUnLCAnT2N0b2JyZScsICdOb3ZlbWJyZScsICdEw6ljZW1icmUnXTtcbmNvbnN0IHdlZWsgPSBbJ0wnLCAnTScsICdNJywgJ0onLCAnViddO1xuXG5mdW5jdGlvbiBjcmVhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGRyYXduRGF0ZSA9IGRhdGVTdHJpbmc7XG4gIFAuJERBVEVfUElDS0VSLmh0bWwoXCJcIik7XG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWspIHtcbiAgICBQLiREQVRFX1BJQ0tFUi5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkYXlOYW1lXCI+JyArIGRheSArICc8L2Rpdj4nKVxuICB9XG5cbiAgY29uc3QgbW9udGggPSBEYXkubW9udGgoZGF0ZVN0cmluZyk7XG4gIGxldCBkYXRlID0gRGF5LmZpcnN0RGF5T2ZNb250aChkYXRlU3RyaW5nKTtcblxuICBQLiREQVRFX1BJQ0tFUl9NT05USC5odG1sKG1vbnRoc1ttb250aF0pO1xuXG4gIGNvbnN0IG9mZnNldCA9IERheS5kYXkoZGF0ZSkgLSAxOyAvLyBmcmktPjEsIHRodS0+MiwgLi4uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2Zmc2V0OyBpKyspIHtcbiAgICBQLiREQVRFX1BJQ0tFUi5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkYXlOdW1iZXIgZGlzYWJsZWRcIj4nICsgRGF5LmRhdGUoZGF0ZSkgKyAnPC9kaXY+Jyk7XG4gIH1cblxuICBjb25zdCB0b2RheSA9IERheS50b2RheSgpO1xuICBjb25zdCBjdXJyZW50ID0gQ2FsZW5kYXIuZ2V0Q3VycmVudCgpO1xuICB3aGlsZSAoRGF5Lm1vbnRoKGRhdGUpID09PSBtb250aCkge1xuICAgIGNvbnN0ICRlbCA9ICQoJzxkaXYgY2xhc3M9XCJkYXlOdW1iZXJcIiBkYXRlPVwiJyArIGRhdGUgKyAnXCI+JyArIERheS5kYXRlKGRhdGUpICsgJzwvZGl2PicpO1xuICAgIGlmIChkYXRlID09PSBjdXJyZW50KSAkZWwuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgaWYgKGRhdGUgPT09IHRvZGF5KSAkZWwuYWRkQ2xhc3MoJ3RvZGF5Jyk7XG4gICAgJGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJGJ0biA9ICQodGhpcyk7XG4gICAgICAkYnRuLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgY29uc3QgZGF0ZVN0cmluZyA9ICRidG4uYXR0cignZGF0ZScpO1xuICAgICAgaWYoZGF0ZVN0cmluZykgQ2FsZW5kYXIuZHJhdyhkYXRlU3RyaW5nKTtcbiAgICAgIGVsc2UgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoXCJtaXNzaW5nIGF0dHJpYnV0ZSAnZGF0ZScgb24gZGF0ZXBpY2tlciBidXR0b25cIik7XG4gICAgfSlcbiAgICBQLiREQVRFX1BJQ0tFUi5hcHBlbmQoJGVsKTtcbiAgICBkYXRlID0gRGF5LmFkZChkYXRlLCAxKTtcbiAgfVxufVxuXG5sZXQgZHJhd25EYXRlOiBzdHJpbmc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGRyYXduRGF0ZSA9IERheS50b2RheSgpO1xuXG4gIFAuJERBVEVfUElDS0VSX1BSRVYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRyYXduRGF0ZSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcbiAgICBjcmVhdGUoZC50b0RhdGVTdHJpbmcoKSk7XG4gIH0pXG4gIFAuJERBVEVfUElDS0VSX05FWFQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRyYXduRGF0ZSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcbiAgICBjcmVhdGUoZC50b0RhdGVTdHJpbmcoKSk7XG4gIH0pXG5cbiAgUC4kREFURV9QSUNLRVJfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgaWYgKCEkdGFyZ2V0LmlzKFAuJERBVEVfUElDS0VSX1BSRVYpICYmICEkdGFyZ2V0LmlzKFAuJERBVEVfUElDS0VSX05FWFQpKSB7XG4gICAgICBQLiREQVRFX1BJQ0tFUl9DT05UQUlORVIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSlcblxufVxuaW5pdCgpO1xuXG5leHBvcnQgY29uc3QgRGF0ZVBpY2tlciA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuZnVuY3Rpb24gYWRkRGF5KGQ6IERhdGUsIGRheXM6IG51bWJlcikge1xuICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBkYXlzKTtcbiAgaWYgKGQuZ2V0RGF5KCkgPT09IDAgfHwgZC5nZXREYXkoKSA9PT0gNikge1xuICAgIGlmIChkYXlzID49IDApIGFkZERheShkLCAxKTtcbiAgICBlbHNlIGFkZERheShkLCAtMSk7XG4gIH1cbiAgcmV0dXJuIGQ7XG59XG5cbmZ1bmN0aW9uIHRvZGF5KCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgaWYgKGRhdGUuZ2V0SG91cnMoKSA+PSBQLlRPREFZX01BWF9IT1VSKSAvLyBzaSBwYXNzw6kgVE9EQVlfTUFYX0hPVVIsIHBhc3NlIGEgbGVuZGVtYWluIG1hdGluXG4gICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAyNCAtIFAuVE9EQVlfTUFYX0hPVVIgKyBQLlNUQVJUX0hPVVIpO1xuICBhZGREYXkoZGF0ZSwgMCk7IC8vIGRpbWFuY2hlIGRldmllbnQgbHVuZGlcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBjb25zdCBEYXkgPSAoZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHtcbiAgICB0b2RheSxcbiAgICBkYXRlOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKS5nZXREYXRlKCk7XG4gICAgfSxcbiAgICBtb250aDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0TW9udGgoKTtcbiAgICB9LFxuICAgIGRheTogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0RGF5KCk7XG4gICAgfSxcbiAgICBmaXJzdE1vbmRheU9mTW9udGg6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgZC5zZXREYXRlKDEpO1xuICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSArIChkYXkgPT0gMCA/IDEgOiBkYXkgPT0gMSA/IDAgOiA3IC0gZGF5KTtcbiAgICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gICAgZmlyc3REYXlPZk1vbnRoOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGQuc2V0RGF0ZSgxKTtcbiAgICAgIGFkZERheShkLCAwKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gICAgbW9uZGF5OiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09IDAgPyAtNiA6IDEpOyAvLyBhZGp1c3Qgd2hlbiBkYXkgaXMgc3VuZGF5XG4gICAgICBkLnNldERhdGUoZGlmZik7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nLCBkYXlzOiBudW1iZXIpIHtcbiAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBhZGREYXkoZCwgZGF5cyk7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9XG4gIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbidcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhckVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICB0aGlzLm5hbWUgPSAnQ2FsZW5kYXJFcnJvcic7XG5cbiAgICBpZihtZXNzYWdlKSBzd2l0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgIGNhc2UgUC5lcnIuQ0FMRU5EQVJfRVJST1I6XG4gICAgICBjYXNlIFAuZXJyLldFQlZJRVdfTk9UX0xPQURFRDpcbiAgICAgICAgTm90aWZpY2F0aW9uLnNob3coJ2NhbGVuZGFyRXJyb3InLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBQLmVyci5CVVRUT05fTk9UX0ZPVU5EOlxuICAgICAgICBOb3RpZmljYXRpb24uc2hvdygnZGF0ZUVycm9yJywgeyBkdXJhdGlvbjogMzAwMCB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUC5lcnIuUkVRVUVTVF9DQU5DRUxMRUQ6XG4gICAgICAgIGNvbnNvbGUud2FybignQSByZXF1ZXN0IHdhcyBjYW5jZWxsZWQnKVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTm90aWZpY2F0aW9uLnNob3coJ21ham9yRXJyb3InKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncydcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcidcbmltcG9ydCB7IENhbGVuZGFyRHJhd2VyIH0gZnJvbSAnLi9jYWxlbmRhckRyYXdlcidcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJy4vZGF0ZXBpY2tlcidcblxuZnVuY3Rpb24gZXZ0U2NyZWVuVG91Y2goKSB7XG4gICQoZG9jdW1lbnQuYm9keSkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBzZXQgPSBbZS50YXJnZXQsIC4uLiQoZS50YXJnZXQpLnBhcmVudHMoKV07XG4gICAgZm9yIChjb25zdCBlbCBvZiBzZXQpIHtcbiAgICAgIGlmICgoZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0IHx8IGVsLnNjcm9sbFdpZHRoID4gZWwuY2xpZW50V2lkdGgpICYmICQoZWwpLmNzcygnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICQoZWwpLmFkZENsYXNzKCd0b3VjaGVkJykub25lKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RvdWNoZWQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZXZ0T3JpZW50YXRpb25DaGFuZ2UoKSB7XG4gIGNvbnN0IGxhbmRzY2FwZSA9IChzY3JlZW4ub3JpZW50YXRpb24udHlwZS5pbmRleE9mKCdwb3J0cmFpdCcpID09PSAtMSk7XG4gIENhbGVuZGFyRHJhd2VyLnNldERyYXdNb2RlKGxhbmRzY2FwZSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jyk7XG5cbiAgZnVuY3Rpb24gb25TY3JlZW5PcmllbnRDaGFuZ2UoKSB7XG4gICAgY29uc3QgbGFuZHNjYXBlID0gKHNjcmVlbi5vcmllbnRhdGlvbi50eXBlLmluZGV4T2YoJ3BvcnRyYWl0JykgPT09IC0xKTtcbiAgICBDYWxlbmRhckRyYXdlci5zZXREcmF3TW9kZShsYW5kc2NhcGUgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCcpO1xuICAgIENhbGVuZGFyLmRyYXcoQ2FsZW5kYXIuZ2V0Q3VycmVudCgpKTtcbiAgfVxuICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25TY3JlZW5PcmllbnRDaGFuZ2UpO1xufVxuXG5mdW5jdGlvbiBldnRTZXR0aW5nc0NsaWNrKCkge1xuICBQLiRCVVRUT05fU0VUVElOR1Mub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgU2V0dGluZ3Muc2hvdygpXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBDYWxlbmRhci5kcmF3KENhbGVuZGFyLmdldEN1cnJlbnQoKSk7IC8vIHJlZHJhdyB3aXRoIG5ldyBmaWx0ZXJzXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldnRQcmV2Q2xpY2soKSB7XG4gIFAuJEJVVFRPTl9QUkVWLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChQLiRCVVRUT05fUFJFVi5pcygnLmRpc2FibGVkJykpIHJldHVybjtcbiAgICBjb25zdCBkYXkgPSBEYXkuYWRkKENhbGVuZGFyLmdldEN1cnJlbnQoKSwgLTEpO1xuICAgIENhbGVuZGFyLmRyYXcoZGF5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgUC4kQ0FMRU5EQVJfQ09OVEVOVC5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2dE5leHRDbGljaygpIHtcbiAgUC4kQlVUVE9OX05FWFQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKFAuJEJVVFRPTl9ORVhULmlzKCcuZGlzYWJsZWQnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGRheSA9IERheS5hZGQoQ2FsZW5kYXIuZ2V0Q3VycmVudCgpLCAxKTtcbiAgICBDYWxlbmRhci5kcmF3KGRheSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIFAuJENBTEVOREFSX0NPTlRFTlQuc2Nyb2xsVG9wKDApLnNjcm9sbExlZnQoMCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldnREYXRlcGlja2VyQ2xpY2soKSB7XG4gIFAuJERBVEVfQ09OVEFJTkVSLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFAuJERBVEVfUElDS0VSX0NPTlRBSU5FUi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgbGV0IGRheTogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICBkYXkgPSBDYWxlbmRhci5nZXRDdXJyZW50KCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBkYXkgPSBEYXkudG9kYXkoKTtcbiAgICB9XG4gICAgRGF0ZVBpY2tlci5jcmVhdGUoZGF5KTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZXZ0R2lmcygpIHtcbiAgbGV0IGdpZlJlcXVlc3Q6IEpRdWVyeS5qcVhIUjtcblxuICBQLiRHSUZfQ09OVEFJTkVSLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFAuJEdJRl9DT05UQUlORVIuaGlkZSgpO1xuICAgIFAuJEdJRl9JTUcuYXR0cignc3JjJywgJycpO1xuICB9KVxuXG4gIFAuJENPVVJTRV9DT05UQUlORVIub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgY29uc3QgJGVsID0gJChldnQudGFyZ2V0KTtcbiAgICBjb25zdCAkY2xpY2tlZEdyYWRlID0gJGVsLnBhcmVudHMoKS5hZGQoJGVsKS5maWx0ZXIoUC4kLkNPVVJTRSk7XG4gICAgaWYgKCRjbGlja2VkR3JhZGUubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCB0ZXh0ID0gJGNsaWNrZWRHcmFkZS5maW5kKCdiJykuaHRtbCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGdpZlJlcXVlc3QpIGdpZlJlcXVlc3QuYWJvcnQoKTtcbiAgICBnaWZSZXF1ZXN0ID0gJC5wb3N0KFAuR0lGX1VSTF9QSFAsIHsgdGV4dDogdGV4dCB9LCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBQLiRHSUZfSU1HLmF0dHIoJ3NyYycsIGRhdGEpO1xuICAgICAgUC4kR0lGX0NPTlRBSU5FUi5zaG93KCk7XG4gICAgfSk7XG4gIH0pXG59XG5cbmxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpZihpbml0aWFsaXplZCkgcmV0dXJuO1xuICBpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgZXZ0U2NyZWVuVG91Y2goKTtcbiAgZXZ0T3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgZXZ0U2V0dGluZ3NDbGljaygpO1xuICBldnRQcmV2Q2xpY2soKTtcbiAgZXZ0TmV4dENsaWNrKCk7XG4gIGV2dERhdGVwaWNrZXJDbGljaygpO1xuICBldnRHaWZzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudHMgPSB7XG4gIGluaXRcbn1cbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgRXhwYW5kZWRDb3Vyc2UgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcbiAga2V5OiBzdHJpbmc7XG4gIGRpc3BsYXk6IHN0cmluZztcbiAgdmFyaWFibGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfTtcbiAgc3ViZmlsdGVyczogRmlsdGVyW107XG4gIHdoaXRlbGlzdD86IHN0cmluZ1tdO1xuICBibGFja2xpc3Q/OiBzdHJpbmdbXTtcbn07XG5cbmxldCBsb2FkZWRGaWx0ZXI6IEZpbHRlcjtcbmxldCBmaWx0ZXJOYW1lID0gJyc7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdChjb3Vyc2U6IEV4cGFuZGVkQ291cnNlLCBsaXN0OiBzdHJpbmdbXSkge1xuICBjb25zdCBjb250ZW50ID0gY291cnNlLnRpdGxlLnNwbGl0KCc8YnI+JylcbiAgZm9yIChjb25zdCBsaWduZSBvZiBjb250ZW50KSB7XG4gICAgZm9yIChjb25zdCBlbCBvZiBsaXN0KSBpZiAoZXhwcl90ZXN0KGxpZ25lLCBlbCkpIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBleHByX3Rlc3Qoc3RyOiBzdHJpbmcsIGV4cHJlc3Npb246IHN0cmluZykge1xuICBjb25zdCByZXBsYWNlbWVudF9yZWdleCA9IC9cXHtbXlxcfV0rXFx9L2dcbiAgY29uc3QgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVwbGFjZW1lbnRfcmVnZXgpXG4gIGlmIChtYXRjaGVzKSBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG1hdGNoLnJlcGxhY2UoJ3snLCAnJykucmVwbGFjZSgnfScsICcnKVxuICAgIGlmIChTdG9yYWdlLmhhcyh2YXJpYWJsZSkpIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnJlcGxhY2UobWF0Y2gsIFN0b3JhZ2UuZ2V0KHZhcmlhYmxlKSlcbiAgfVxuICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGV4cHJlc3Npb24pXG4gIHJldHVybiByZWdleHAudGVzdChzdHIpXG59XG5cbmZ1bmN0aW9uIGZldGNoSlNPTih1cmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8T2JqZWN0PihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbihqc29uOiBPYmplY3QpIHtcbiAgICAgIHJlc29sdmUoanNvbik7XG4gICAgfSwgcmVqZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVsZW1lbnQoZWw6IEV4cGFuZGVkQ291cnNlLCBmaWx0ZXIgPSBsb2FkZWRGaWx0ZXIpOiBib29sZWFuIHsgLy8gcmV0dXJucyBib29sIGJsYWNrbGlzdGVkIChyZWN1cnNpdmUpXG4gIGlmICghKFN0b3JhZ2UuaGFzKGZpbHRlci5rZXkpKSB8fCBTdG9yYWdlLmdldChmaWx0ZXIua2V5KSA9PT0gJzAnKSByZXR1cm4gZmFsc2U7IC8vIGZpbHRyZSBkw6lzYWN0aXbDqSBvdSBpbmV4aXN0YW50XG5cbiAgaWYoZmlsdGVyLndoaXRlbGlzdCAmJiBmaWx0ZXIuYmxhY2tsaXN0KSB7XG4gICAgbGV0IHdoaXRlbGlzdGVkID0gY2hlY2tMaXN0KGVsLCBmaWx0ZXIud2hpdGVsaXN0KTtcbiAgICBsZXQgYmxhY2tsaXN0ZWQgPSBjaGVja0xpc3QoZWwsIGZpbHRlci5ibGFja2xpc3QpO1xuICAgIGlmICghd2hpdGVsaXN0ZWQgJiYgYmxhY2tsaXN0ZWQpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXIuc3ViZmlsdGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGNvbnN0IHN1YmZpbHRlciBvZiBmaWx0ZXIuc3ViZmlsdGVycykge1xuICAgICAgaWYgKGZpbHRlckVsZW1lbnQoZWwsIHN1YmZpbHRlcikpIHJldHVybiB0cnVlOyAvLyBhIMOpdMOpIGJsYWNrbGlzdMOpXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEZpbHRlcihuYW1lOiBzdHJpbmcpIHtcbiAgaWYgKG5hbWUgPT09IGZpbHRlck5hbWUgJiYgbmFtZSAhPT0gJycpIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVkRmlsdGVyKTtcbiAgZmlsdGVyTmFtZSA9IG5hbWU7XG4gIGxvYWRlZEZpbHRlciA9IDxGaWx0ZXI+YXdhaXQgZmV0Y2hKU09OKCdmaWx0ZXJzLycgKyBmaWx0ZXJOYW1lICsgJy5qc29uJyk7XG4gIHJldHVybiBsb2FkZWRGaWx0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXIgPSB7XG4gIGZpbHRlckVsZW1lbnQsXG4gIGxvYWRGaWx0ZXIsXG4gIGdldCBsb2FkZWRGaWx0ZXIoKTogRmlsdGVyIHtcbiAgICByZXR1cm4gbG9hZGVkRmlsdGVyO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbidcbmltcG9ydCBDYWxlbmRhckVycm9yIGZyb20gJy4vZXJyb3InXG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcbmxldCByZWY6IEluQXBwQnJvd3NlcjtcbmNvbnN0IHdlYnZpZXdSZWZlcmVuY2VzOiBJbkFwcEJyb3dzZXJbXSA9IFtdOyAvL2NvcmRvdmEncyBpbmFwcGJyb3dzZXIgaGFzIHdlaXJkIGJlaGF2aW91ciB3aGVuIGl0IGNvbWVzIHRvIGNsb3NpbmcgLyBvcGVuaW5nIHdlYnZpZXdzLi4uXG5sZXQgY3VycmVudFVybDoga2V5b2YgdHlwZW9mIFAudXJsO1xuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlU2NyaXB0KHRleHRTY3JpcHQ6IHN0cmluZykge1xuICBjb25zdCBjb25uZWN0ZWQgPSBhd2FpdCBwcm9taXNlRXhlY3V0ZShQLmNvbS5GVU5DVElPTl9JU19DT05ORUNURUQpO1xuXG4gIGlmICghY29ubmVjdGVkICYmIGxvYWRlZCkge1xuICAgIGNvbnNvbGUud2FybignSW5BcHBCcm93c2VyIGlzIGRpc2Nvbm5lY3RlZCwgcmVsb2FkaW5nJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ3Jlc3RhcnQnKTsgLy8gVE9ETyByZW5hbWUgdG8gcmVsb2FkXG4gICAgYXdhaXQgcmVsb2FkKCk7XG4gICAgTm90aWZpY2F0aW9uLmhpZGUoJ3Jlc3RhcnQnKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHByb21pc2VFeGVjdXRlKHRleHRTY3JpcHQpO1xuXG4gIGlmICh0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAncGFja2V0aWZpZWQnIGluIHJlcyAmJiByZXMucGFja2V0aWZpZWQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdW5wYWNrKCk7XG4gIH1cbiAgZWxzZSByZXR1cm4gcmVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bnBhY2soKSB7XG4gIGxldCBwYWNrZXRzID0gJyc7XG4gIGxldCBwYWNrZXQ7XG5cbiAgZG8ge1xuICAgIHBhY2tldCA9IGF3YWl0IHByb21pc2VFeGVjdXRlKCdnZXRQYWNrZXQoKScpO1xuICAgIGlmIChwYWNrZXQpIHBhY2tldHMgKz0gcGFja2V0O1xuICB9IHdoaWxlIChwYWNrZXQpO1xuXG4gIGxldCBvYmo7XG4gIHRyeSB7XG4gICAgb2JqID0gSlNPTi5wYXJzZShwYWNrZXRzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIHJlc29sdmUgcGFja2V0czonLCBwYWNrZXRzKTtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLkNBTEVOREFSX0VSUk9SKTtcbiAgfVxuICBjb25zb2xlLmxvZygncmVzb2x2ZWQgcGFja2V0IDonLCBvYmopO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwcm9taXNlRXhlY3V0ZSh0ZXh0U2NyaXB0OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFsb2FkZWQpIHJlamVjdChuZXcgQ2FsZW5kYXJFcnJvcihQLmVyci5XRUJWSUVXX05PVF9MT0FERUQpKTtcbiAgICBlbHNlIHtcbiAgICAgIHJlZi5leGVjdXRlU2NyaXB0KHsgY29kZTogdGV4dFNjcmlwdCB9LCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRbMF0pO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCd0aW1lb3V0IGVycicpKTtcbiAgICAgIH0sIFAuSU5BUFBCUk9XU0VSX0VYRUNVVEVfVElNRU9VVCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTY3JpcHQodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YVR5cGU6IFwidGV4dFwiLFxuICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgIGVycm9yOiByZWplY3RcbiAgICB9KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbG9hZCgpIHtcbiAgY29uc29sZS5sb2coJ3JlbG9hZGluZyBJbkFwcEJyb3dzZXInKTtcbiAgaWYocmVmKSByZWYuY2xvc2UoKTtcbiAgYXdhaXQgbG9hZChjdXJyZW50VXJsKTtcbiAgYXdhaXQgaW5qZWN0U2NyaXB0KCk7XG4gIGNvbnNvbGUubG9nKCdyZWxvYWQgZG9uZS4nKTtcbn1cblxuZnVuY3Rpb24ga2V5SXNWYWxpZCh1cmxLZXk6IHN0cmluZyk6IHVybEtleSBpcyBrZXlvZiB0eXBlb2YgUC51cmwge1xuICByZXR1cm4gdXJsS2V5IGluIFAudXJsO1xufVxuXG5mdW5jdGlvbiBsb2FkKHVybEtleTogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAoa2V5SXNWYWxpZCh1cmxLZXkpKSB7XG4gICAgICBjdXJyZW50VXJsID0gdXJsS2V5O1xuICAgICAgd2Vidmlld1JlZmVyZW5jZXMucHVzaChjb3Jkb3ZhLkluQXBwQnJvd3Nlci5vcGVuKFAudXJsW3VybEtleV0sICdfYmxhbmsnLCBQLklOQVBQQlJPV1NFUl9TRVRUSU5HUykpO1xuICAgICAgcmVmID0gd2Vidmlld1JlZmVyZW5jZXNbd2Vidmlld1JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0b3AnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luYXBwYnJvd2VyIGxvYWRlZCcpO1xuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSByZWplY3QobmV3IEVycm9yKCd1cmwga2V5IG5vdCByZWNvZ25pemVkJykpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5qZWN0U2NyaXB0KCkge1xuICBjb25zdCBpbmplY3Rpb24gPSBmZXRjaFNjcmlwdChQLnNjcmlwdC5JTkpFQ1RJT04pO1xuICBjb25zdCBqcXVlcnkgPSBmZXRjaFNjcmlwdChQLnNjcmlwdC5KUVVFUlkpO1xuXG4gIGNvbnN0IGpxdWVyeVRleHQgPSBhd2FpdCBqcXVlcnk7XG4gIGF3YWl0IHByb21pc2VFeGVjdXRlKGpxdWVyeVRleHQpO1xuICBjb25zdCBpbmplY3Rpb25UZXh0ID0gYXdhaXQgaW5qZWN0aW9uO1xuICBhd2FpdCBwcm9taXNlRXhlY3V0ZShpbmplY3Rpb25UZXh0KTtcbn1cblxuZXhwb3J0IGNvbnN0IEluYXBwQnJvd3NlciA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4ge1xuICAgIHJlbG9hZDogcmVsb2FkLFxuICAgIGxvYWQ6IGxvYWQsXG4gICAgaW5qZWN0U2NyaXB0OiBpbmplY3RTY3JpcHQsXG4gICAgZXZhbDogZXhlY3V0ZVNjcmlwdCxcbiAgICBnZXRSZWZlcmVuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG4gIH1cblxufSkoKTtcbiIsImltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuXG5leHBvcnQgdmFyIE5ldHdvcmsgPSAoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHN0YXRlID0gJ29ubGluZSc7XG5cbiAgZnVuY3Rpb24gb2ZmbGluZSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdG9yIG5vdyBvZmZsaW5lJyk7XG4gICAgc3RhdGUgPSAnb2ZmbGluZSc7XG4gICAgTm90aWZpY2F0aW9uLmhpZGUoJ29ubGluZScpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdvZmZsaW5lJyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbmxpbmUoKSB7XG4gICAgY29uc29sZS5sb2coJ25hdmlnYXRvciBub3cgb25saW5lJyk7XG4gICAgc3RhdGUgPSAnb25saW5lJztcbiAgICBOb3RpZmljYXRpb24uaGlkZSgnb2ZmbGluZScpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdvbmxpbmUnLCB7IGR1cmF0aW9uOiAxNTAwIH0pO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIG9mZmxpbmUsIGZhbHNlKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgb25saW5lLCBmYWxzZSk7XG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgPT09IENvbm5lY3Rpb24uTk9ORSAmJiBzdGF0ZSA9PT0gJ29ubGluZScpIG9mZmxpbmUoKTtcbiAgICBpZiAobmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSAhPT0gQ29ubmVjdGlvbi5OT05FICYmIHN0YXRlID09PSAnb2ZmbGluZScpIG9ubGluZSgpO1xuICB9LCAxMDAwKTtcblxuICByZXR1cm4ge1xuICAgIHdoZW5PbmxpbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHN0YXRlID09PSAnb25saW5lJyB8fCBuYXZpZ2F0b3IuY29ubmVjdGlvbi50eXBlICE9PSBDb25uZWN0aW9uLk5PTkUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICdvbmxpbmUnIHx8IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgIT09IENvbm5lY3Rpb24uTk9ORSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0IG9ubGluZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gJ29ubGluZSc7XG4gICAgfSxcbiAgICBnZXQgb2ZmbGluZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gJ29mZmxpbmUnO1xuICAgIH1cbiAgfVxuXG59KSgpO1xuIiwidmFyIHRpbWVvdXRzOiB7IFtrZXk6IHN0cmluZ10gOiBudW1iZXJ9ID0ge307XG5cbmludGVyZmFjZSBzaG93U2V0dGluZ3Mge1xuICBkdXJhdGlvbjogZmFsc2UgfCBudW1iZXI7XG59XG5cbnR5cGUgTm90aWZpY2F0aW9uID0gJ21ham9yRXJyb3InIHwgJ2NhbGVuZGFyRXJyb3InIHwgJ2RhdGVFcnJvcicgfCAncmVzdGFydCcgfCAnb2ZmbGluZScgfCAnb25saW5lJyB8ICdsb2FkaW5nJztcblxuZnVuY3Rpb24gc2hvdyhub3RpZk5hbWU6IE5vdGlmaWNhdGlvbiwgeyBkdXJhdGlvbiA9IGZhbHNlIH06IFBhcnRpYWw8c2hvd1NldHRpbmdzPiA9IHt9KSB7XG4gIGNvbnNvbGUuZGVidWcoJ25vdGlmaWNhdGlvbjonLCBub3RpZk5hbWUpO1xuICBpZiAobm90aWZOYW1lIGluIHRpbWVvdXRzKSBjbGVhclRpbWVvdXQodGltZW91dHNbbm90aWZOYW1lXSk7XG4gICQoJy5ub3RpZmljYXRpb24jJyArIG5vdGlmTmFtZSkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICBpZiAoZHVyYXRpb24gJiYgZHVyYXRpb24gPiAwKSB7XG4gICAgdGltZW91dHNbbm90aWZOYW1lXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkKCcubm90aWZpY2F0aW9uIycgKyBub3RpZk5hbWUpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZShub3RpZk5hbWU6IHN0cmluZykge1xuICBpZiAobm90aWZOYW1lIGluIHRpbWVvdXRzKSBjbGVhclRpbWVvdXQodGltZW91dHNbbm90aWZOYW1lXSk7XG4gICQoJy5ub3RpZmljYXRpb24jJyArIG5vdGlmTmFtZSkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgdmFyIE5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4ge1xuICAgIHNob3c6IHNob3csXG4gICAgaGlkZTogaGlkZVxuICB9O1xuXG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFByb3h5ID0ge1xuXG4gIC8vIEFQUF9WRVJTSU9OOiAxMDA2MCxcbiAgU1RPUkFHRV9WRVJTSU9OOiAnOScsXG5cbiAgJENBTEVOREFSOiAkKCcjY2FsZW5kYXInKSxcbiAgJENBTEVOREFSX0NPTlRFTlQ6ICQoJyNjYWxlbmRhciAuY29udGVudCcpLFxuXG4gICRMQU5EU0NBUEVfQ1VSUkVOVF9EQVk6ICQoJyNsYW5kc2NhcGVDdXJyZW50RGF5JyksXG5cbiAgJENPVVJTRV9DT05UQUlORVI6ICQoJyNoZXVyZXMnKSxcblxuICAkREFURV9DT05UQUlORVI6ICQoJ25hdiBkaXYnKSxcbiAgJERBVEU6ICQoJ25hdiBzcGFuJyksXG5cbiAgJERBVEVfUElDS0VSX0NPTlRBSU5FUjogJCgnI2RhdGVQaWNrZXInKSxcbiAgJERBVEVfUElDS0VSOiAkKCcjZGF0ZVBpY2tlciAuZGF0ZXMnKSxcbiAgJERBVEVfUElDS0VSX1BSRVY6ICQoJyNkYXRlUGlja2VyIC5wcmV2JyksXG4gICREQVRFX1BJQ0tFUl9ORVhUOiAkKCcjZGF0ZVBpY2tlciAubmV4dCcpLFxuICAkREFURV9QSUNLRVJfTU9OVEg6ICQoJyNkYXRlUGlja2VyIC5tb250aCcpLFxuXG4gICRCVVRUT05fUFJFVjogJCgnLnZlaWxsZScpLFxuICAkQlVUVE9OX05FWFQ6ICQoJy5sZW5kZW1haW4nKSxcbiAgJEJVVFRPTl9TRVRUSU5HUzogJCgnYnV0dG9uLnNldHRpbmdzJyksXG5cbiAgJFNFVFRJTkdTX0NPTlRBSU5FUjogJCgnI3NldHRpbmdzJyksXG4gICRTRVRUSU5HU19GSUxURVI6ICQoJyNzZXR0aW5ncyAuZmlsdGVycycpLFxuICAkU0VUVElOR1NfQVBQRUFSQU5DRTogJCgnI3NldHRpbmdzIC5hcHBlYXJhbmNlJyksXG4gICRTRVRUSU5HU19DQU5DRUw6ICQoJyNzZXR0aW5ncyAuY2FuY2VsJyksXG4gICRTRVRUSU5HU19TQVZFOiAkKCcjc2V0dGluZ3MgLnNhdmUnKSxcbiAgJFNFVFRJTkdTX1JFU0VUOiAkKCcjc2V0dGluZ3MgLnJlc2V0JyksXG4gICRTRVRUSU5HU19USEVNRTogJCgnI3NldHRpbmdzIC50aGVtZScpLFxuICAkU0VUVElOR1NfR1JBREU6ICQoJy5jbGFzc2VEcm9wRG93bicpLFxuXG4gICRBQk9VVF9DT05UQUlORVI6ICQoJyNhYm91dCcpLFxuXG4gICRUSEVNRV9TVFlMRVNIRUVUOiAkKCcjdGhlbWVTdHlsZXNoZWV0JyksXG5cbiAgJEdJRl9DT05UQUlORVI6ICQoJyNnaWYtY29udGFpbmVyJyksXG4gICRHSUZfSU1HOiAkKCcjZ2lmLWNvbnRhaW5lciBpbWcnKSxcblxuICBJTkFQUEJST1dTRVJfU0VUVElOR1M6ICdsb2NhdGlvbj1ubyx6b29tPW5vLGhpZGRlbj15ZXMsc2hvdWxkUGF1c2VPblN1c3BlbmQ9bm8nLFxuICBJTkFQUEJST1dTRVJfRVhFQ1VURV9USU1FT1VUOiA1MDAwLFxuXG4gIEdJRl9VUkw6ICdodHRwczovL3BvbHl0ZWNoLnRoaXNzbWEuZnIvZ2lmcy8nLFxuICBHSUZfVVJMX1BIUDogJ2h0dHBzOi8vcG9seXRlY2gudGhpc3NtYS5mci9uaWNlZ2lmLnBocCcsXG5cbiAgU1RBUlRfSE9VUjogOCxcbiAgRU5EX0hPVVI6IDIwLFxuXG4gIFRPREFZX01BWF9IT1VSOiAyMSxcblxuICAkOiB7XG4gICAgQ09VUlNFOiAnLmNsYXNzZScsXG4gICAgTEFORFNDQVBFX0RBWTogJyNoZXVyZXMgLmRheScsXG4gICAgSE9VUl9MSU5FUzogJyNoZXVyZXMgLmxpZ25lJyxcbiAgICBTRVRUSU5HU19GSUxURVI6ICcjc2V0dGluZ3MgLmZpbHRyZSdcbiAgfSxcblxuICBlcnI6IHtcbiAgICBCVVRUT05fTk9UX0ZPVU5EOiAnYnV0dG9uIG5vdCBmb3VuZCcsXG4gICAgV0VCVklFV19OT1RfTE9BREVEOiAnd2VidmlldyBub3QgbG9hZGVkJyxcbiAgICBSRVFVRVNUX0NBTkNFTExFRDogJ3JlcXVlc3QgY2FuY2VsbGVkJyxcbiAgICBDQUxFTkRBUl9FUlJPUjogJ2NhbGVuZGFyIGVycm9yJ1xuICB9LFxuXG4gIGh0bWw6IHtcbiAgICBIT1VSOiAnPGRpdiBjbGFzcz1cImhldXJlXCI+PC9kaXY+JyxcbiAgICBIT1VSX0xJTkU6ICc8ZGl2IGNsYXNzPVwibGlnbmVcIj48L2Rpdj4nLFxuICAgIENPVVJTRTogJzxkaXYgY2xhc3M9XCJjbGFzc2VcIj48L2Rpdj4nLFxuICAgIENPVVJTRV9DT05URU5UX1dSQVBQRVI6ICc8ZGl2IGNsYXNzPVwid3JhcHBlclwiPjwvZGl2PicsXG4gICAgQ09VUlNFX0NPTlRFTlQ6ICc8ZGl2IGNsYXNzPVwiY29udGVudFwiPjwvZGl2PicsXG4gICAgTEFORFNDQVBFX0RBWTogJzxkaXYgY2xhc3M9XCJkYXlcIj48L2Rpdj4nLFxuICAgIFNFVFRJTkdTX0NIRUNLQk9YOiAnPGlucHV0IHR5cGU9Y2hlY2tib3ggY2hlY2tlZC8+JyxcbiAgfSxcblxuICBzdG9yYWdlOiB7XG4gICAgR1JBREU6ICdjbGFzc2UnLFxuICAgIFNBVkVEX0RBWVM6ICdkYXlzQ2FjaGUnLFxuICAgIFRIRU1FOiAndGhlbWUnLFxuICAgIFZFUlNJT046ICd2ZXJzaW9uJyxcbiAgICBBQ0tOT1dMRURHRUQ6ICdhY2snXG4gIH0sXG5cbiAgZGF5OiB7XG4gICAgTU9OOiAxLCBUVUU6IDIsIFdFRDogMywgVEhVOiA0LCBGUkk6IDUsIFNBVDogNiwgU1VOOiAwLFxuICB9LFxuXG4gIHNjcmlwdDoge1xuICAgIElOSkVDVElPTjogJ2luamVjdGlvbi5qcycsXG4gICAgSlFVRVJZOiAnanF1ZXJ5LmpzJ1xuICB9LFxuXG4gIGRpcjoge1xuICAgIFRIRU1FUzogJ2Nzcy90aGVtZXMvJ1xuICB9LFxuXG4gIGNvbToge1xuICAgIFRJTUVPVVRfQUZURVJfQlVUVE9OX1BSRVNTOiAyMDAsXG4gICAgREVGQVVMVF9VUERBVEVfSU5URVJWQUw6IDIwMCxcbiAgICBGVU5DVElPTl9JU19DT05ORUNURUQ6ICdpc0Nvbm5lY3RlZCgpJ1xuICB9LFxuXG4gIHRoZW1lOiB7XG4gICAgREVGQVVMVDogJ2RlZmF1bHQnXG4gIH0sXG5cbiAgdXJsOiB7XG4gICAgJ3BlaXAxJzogJ2h0dHBzOi8vYWRlLXBsYW5uaW5nLnBvbHl0ZWNoLnVuaXZlcnNpdGUtcGFyaXMtc2FjbGF5LmZyL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmODdhOTg4MmU3NGEzZjc2ZTBiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdwZWlwMic6ICdodHRwczovL2FkZS1wbGFubmluZy5wb2x5dGVjaC51bml2ZXJzaXRlLXBhcmlzLXNhY2xheS5mci9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhlNzQ4NWQ5YmVlMmM4NGRiYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAncGVpcGMnOiAnaHR0cHM6Ly9hZGUtcGxhbm5pbmcucG9seXRlY2gudW5pdmVyc2l0ZS1wYXJpcy1zYWNsYXkuZnIvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4N2IwMzVlYmYyNzJhNmFkZmI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2V0Myc6ICAgJ2h0dHBzOi8vYWRlLXBsYW5uaW5nLnBvbHl0ZWNoLnVuaXZlcnNpdGUtcGFyaXMtc2FjbGF5LmZyL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGEyOTZhMmZmYjAwMzdkNWJiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdldDQnOiAgICdodHRwczovL2FkZS1wbGFubmluZy5wb2x5dGVjaC51bml2ZXJzaXRlLXBhcmlzLXNhY2xheS5mci9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhmMDRmNGE2YjkwZTE3ZjcxYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnZXQ1JzogICAnaHR0cHM6Ly9hZGUtcGxhbm5pbmcucG9seXRlY2gudW5pdmVyc2l0ZS1wYXJpcy1zYWNsYXkuZnIvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4YzhkZjQxYTBhN2VmNDhmN2I3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2FwcDMnOiAgJ2h0dHBzOi8vYWRlLXBsYW5uaW5nLnBvbHl0ZWNoLnVuaXZlcnNpdGUtcGFyaXMtc2FjbGF5LmZyL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGIwZGEwMWQ5ODY2YzZiMDZiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdhcHA0JzogICdodHRwczovL2FkZS1wbGFubmluZy5wb2x5dGVjaC51bml2ZXJzaXRlLXBhcmlzLXNhY2xheS5mci9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjgyNGYxZWNjZTY5ODAzOWYzYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnYXBwNSc6ICAnaHR0cHM6Ly9hZGUtcGxhbm5pbmcucG9seXRlY2gudW5pdmVyc2l0ZS1wYXJpcy1zYWNsYXkuZnIvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4M2VmYWNmMzM2NGIzNTIzZmI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gIH0sXG59XG4iLCJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhckRyYXdlciB9IGZyb20gJy4vY2FsZW5kYXJEcmF3ZXInO1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknO1xuaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknO1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gZG9tQWRkRmllbGQoZmlsdGVyOiBGaWx0ZXIsICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHsgLy8gY2FuIGJlIHJlY3Vyc2l2ZVxuICBmb3IgKGNvbnN0IGZpbHRyZSBvZiBmaWx0ZXIuc3ViZmlsdGVycykgeyAvLyBUT0RPIG5vbW1hZ2UgdmFyaWFibGVzXG4gICAgY29uc3QgJGZpbHRyZSA9ICQoJzxkaXYvPicpO1xuICAgICRmaWx0cmUuZGF0YSgna2V5JywgZmlsdHJlLmtleSk7XG4gICAgJGZpbHRyZS5hZGRDbGFzcygnZWxlbWVudCBmaWx0cmUnKTtcbiAgICBjb25zdCAkY2hlY2sgPSAkKFAuaHRtbC5TRVRUSU5HU19DSEVDS0JPWCk7XG4gICAgJGNoZWNrLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0ICRjaGVjayA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKCRjaGVjay5pcygnOmNoZWNrZWQnKSkgJGNoZWNrLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICBlbHNlICRjaGVjay5zaWJsaW5ncygpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICAgIGNvbnN0ICRsYWJlbCA9ICQoJzxsYWJlbC8+Jyk7XG4gICAgJGxhYmVsLmh0bWwoZmlsdHJlLmRpc3BsYXkpO1xuICAgIGNvbnN0ICRkcm9wZG93biA9ICQoJzxzZWxlY3QvPicpO1xuXG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBmaWx0cmUudmFyaWFibGUpIHtcbiAgICAgIGxldCBvcHRpb24gPSBpbmRleDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRyZS52YXJpYWJsZSkpIG9wdGlvbiA9IGZpbHRyZS52YXJpYWJsZVtpbmRleF07XG4gICAgICAkZHJvcGRvd24uYXBwZW5kKCQoJzxvcHRpb24gdmFsdWU9XCInICsgZmlsdHJlLnZhcmlhYmxlW2luZGV4XSArICdcIi8+JykuaHRtbChvcHRpb24pKTtcbiAgICB9XG4gICAgJGZpbHRyZS5hcHBlbmQoJGNoZWNrKS5hcHBlbmQoJGxhYmVsKS5hcHBlbmQoJGRyb3Bkb3duKTtcbiAgICAkcGFyZW50LmFwcGVuZCgkZmlsdHJlKTtcbiAgICBpZiAoJ3N1YmZpbHRlcnMnIGluIGZpbHRyZSkgZG9tQWRkRmllbGQoZmlsdHJlLCAkZmlsdHJlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVNldHRpbmdzKCkge1xuICBmb3IgKGNvbnN0IGRvbUZpbHRyZSBvZiAkKFAuJC5TRVRUSU5HU19GSUxURVIpKSB7XG4gICAgY29uc3QgJGZpbHRyZSA9ICQoZG9tRmlsdHJlKTtcbiAgICBjb25zdCBrZXkgPSAkZmlsdHJlLmRhdGEoJ2tleScpO1xuICAgIGlmICgkZmlsdHJlLmNoaWxkcmVuKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICBjb25zdCBzZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+JGZpbHRyZS5jaGlsZHJlbignc2VsZWN0JykuZ2V0KDApO1xuICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICBTdG9yYWdlLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBTdG9yYWdlLnNldChrZXksICcwJyk7XG4gICAgfVxuICB9XG4gIFAuJFNFVFRJTkdTX0NPTlRBSU5FUi5hZGRDbGFzcygnaGlkZGVuJyk7XG59XG5cblxuZnVuY3Rpb24gc2V0Q3VycmVudFNldHRpbmdzKCkge1xuXG4gIGlmIChTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuR1JBREUpKSB7XG4gICAgUC4kU0VUVElOR1NfR1JBREUudmFsKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpO1xuICB9XG4gIGlmIChTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuVEhFTUUpKSB7XG4gICAgUC4kU0VUVElOR1NfVEhFTUUudmFsKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5USEVNRSkpO1xuICB9XG5cbiAgZm9yIChjb25zdCBmaWx0ZXIgb2YgJChQLiQuU0VUVElOR1NfRklMVEVSKSkge1xuICAgIGNvbnN0ICRmaWx0ZXIgPSAkKGZpbHRlcik7XG4gICAgY29uc3Qga2V5ID0gJGZpbHRlci5kYXRhKCdrZXknKTtcbiAgICBpZiAoU3RvcmFnZS5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgJHNlbGVjdCA9ICRmaWx0ZXIuY2hpbGRyZW4oJ3NlbGVjdCcpO1xuICAgICAgY29uc3QgdmFsID0gU3RvcmFnZS5nZXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPT09ICcwJykge1xuICAgICAgICBjb25zdCAkY2hlY2sgPSAkZmlsdGVyLmNoaWxkcmVuKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICBpZiAoJGNoZWNrLmxlbmd0aCA9PT0gMSkgJGNoZWNrLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICB9XG4gICAgICBpZiAoJHNlbGVjdC5jaGlsZHJlbignb3B0aW9uJykuaXMoJ1t2YWx1ZT1cIicgKyB2YWwgKyAnXCJdJykpIHtcbiAgICAgICAgJHNlbGVjdC52YWwodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZERPTShmaWx0ZXI6IEZpbHRlcikge1xuICBQLiRTRVRUSU5HU19GSUxURVIuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgZG9tQWRkRmllbGQoZmlsdGVyLCBQLiRTRVRUSU5HU19GSUxURVIpO1xufVxuXG5mdW5jdGlvbiBzaG93KHsgY2FuY2VsRGlzYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBpZiAoY2FuY2VsRGlzYWJsZWQpIFAuJFNFVFRJTkdTX0NBTkNFTC5oaWRlKCk7XG4gICAgZWxzZSBQLiRTRVRUSU5HU19DQU5DRUwuc2hvdygpO1xuXG4gICAgUC4kU0VUVElOR1NfQ0FOQ0VMLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIFAuJFNFVFRJTkdTX0NPTlRBSU5FUi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSlcblxuICAgIFAuJFNFVFRJTkdTX1NBVkUub25lKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwbHlTZXR0aW5ncygpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuR1JBREUpKSB7XG4gICAgICBQLiRTRVRUSU5HU19TQVZFLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBQLiRTRVRUSU5HU19TQVZFLnNob3coKTtcblxuICAgIEZpbHRlci5sb2FkRmlsdGVyKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZERPTShGaWx0ZXIubG9hZGVkRmlsdGVyKTtcbiAgICAgICAgc2V0Q3VycmVudFNldHRpbmdzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufVxuXG5cblAuJFNFVFRJTkdTX0dSQURFLmNoYW5nZShhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNlbCA9IFAuJFNFVFRJTkdTX0dSQURFLmNoaWxkcmVuKCkuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICBjb25zdCB2YWwgPSAkc2VsLmF0dHIoJ3ZhbHVlJyk7XG4gIGlmKHZhbCkgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLkdSQURFLCB2YWwpO1xuICBlbHNlIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFwibWlzc2luZyBhdHRyaWJ1dGUgJ3ZhbHVlJyBvbiBzZXR0aW5ncyBlbGVtZW50XCIpO1xuXG4gIFN0b3JhZ2Uuc2V0KFAuc3RvcmFnZS5TQVZFRF9EQVlTLCAnJyk7XG4gIENhbGVuZGFyLmluaXQoKTtcbiAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhEYXkudG9kYXkoKSk7IC8vIGRlbGV0ZSBjdXJyZW50bHkgZHJhd24gY291cnNlc1xuXG4gIFAuJFNFVFRJTkdTX1NBVkUuaGlkZSgpO1xuICBQLiRTRVRUSU5HU19DQU5DRUwuaGlkZSgpO1xuICBQLiRTRVRUSU5HU19GSUxURVIuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICBhd2FpdCBDYWxlbmRhci5maW5pc2hSZXF1ZXN0KCk7IC8vIGRvbid0IHVubG9hZCBicm93c2VyIHdoaWxlIGEgcmVxdWVzdCBpcyBwZW5kaW5nICFcbiAgYXdhaXQgRmlsdGVyLmxvYWRGaWx0ZXIoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gIGF3YWl0IEFwcC5yZXN0YXJ0SW5hcHBCcm93c2VyKCk7XG5cbiAgbG9hZERPTShGaWx0ZXIubG9hZGVkRmlsdGVyKTtcbiAgYXdhaXQgQ2FsZW5kYXIuZHJhdyhEYXkudG9kYXkoKSk7XG4gIFAuJFNFVFRJTkdTX1NBVkUuc2hvdygpO1xufSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgY2FsbGJhY2tPbmNlOiBmdW5jdGlvbigpIHsgfSxcbiAgICBsb2FkRE9NOiBsb2FkRE9NLFxuICAgIHNob3c6IHNob3dcbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcblxuICBpZiAoU3RvcmFnZS5oYXMoUC5zdG9yYWdlLlZFUlNJT04pICYmIFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5WRVJTSU9OKSAhPT0gUC5TVE9SQUdFX1ZFUlNJT04pIHtcbiAgICBhbGVydCgnTFxcJ2FwcGxpIMOgIMOpdMOpIG1pc2Ugw6Agam91ciAhJyk7XG4gICAgU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgLy8gc2hvdyB3ZWxjb21lIGRpYWxvZyAoZGlzYWJsZWQgZmVhdHVyZSBmb3Igbm93Li4uKVxuICBpZiAoIVN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5BQ0tOT1dMRURHRUQpKSB7XG4gICAgLy8gUC4kQUJPVVRfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuQUNLTk9XTEVER0VELCAnMScpO1xuICB9XG5cbiAgaWYgKCFTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuVkVSU0lPTikpIHtcbiAgICBTdG9yYWdlLmNsZWFyKClcbiAgICBhd2FpdCBTZXR0aW5ncy5zaG93KHsgY2FuY2VsRGlzYWJsZWQ6IHRydWUgfSk7XG4gICAgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLlZFUlNJT04sIFAuU1RPUkFHRV9WRVJTSU9OKTtcbiAgICBTdG9yYWdlLnNldCgncm9vdCcsICcxJyk7IC8vIFRPRE9cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9IHtcbiAgaW5pdCxcbiAgc2V0OiBmdW5jdGlvbihrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWwpO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZVtrZXldO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleSBpbiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9LFxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gc2V0KHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0aGVtZU5hbWUpIHtcbiAgICBQLiRUSEVNRV9TVFlMRVNIRUVULmF0dHIoJ2hyZWYnLCBQLmRpci5USEVNRVMgKyB0aGVtZU5hbWUgKyAnLmNzcycpO1xuICB9XG4gIGVsc2Uge1xuICAgIFAuJFRIRU1FX1NUWUxFU0hFRVQuYXR0cignaHJlZicsIFAuZGlyLlRIRU1FUyArIFAudGhlbWUuREVGQVVMVCArICcuY3NzJyk7XG4gIH1cbn1cblxuUC4kU0VUVElOR1NfVEhFTUUuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VsID0gUC4kU0VUVElOR1NfVEhFTUUuY2hpbGRyZW4oKS5maWx0ZXIoJzpjaGVja2VkJyk7XG4gIGNvbnN0IHZhbCA9ICRzZWwuYXR0cigndmFsdWUnKTtcbiAgaWYodmFsKSB7XG4gICAgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLlRIRU1FLCB2YWwpO1xuICAgIHNldCh2YWwpO1xuICB9XG4gIGVsc2UgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoXCJtaXNzaW5nIGF0dHJpYnV0ZSAndmFsdWUnIG9uIHNldHRpbmdzIGVsZW1lbnRcIik7XG59KVxuXG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IHtcbiAgc2V0XG59O1xuIiwiLyohIGpRdWVyeSB2My42LjAgfCAoYykgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10scj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5mbGF0P2Z1bmN0aW9uKGUpe3JldHVybiB0LmZsYXQuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29uY2F0LmFwcGx5KFtdLGUpfSx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx2PW4uaGFzT3duUHJvcGVydHksYT12LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCkseT17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLml0ZW19LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sRT1DLmRvY3VtZW50LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8RSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjYuMFwiLFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFMuZm4uaW5pdChlLHQpfTtmdW5jdGlvbiBwKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfVMuZm49Uy5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOlMsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PVMubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBTLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXZlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybih0KzEpJTJ9KSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiB0JTJ9KSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxTLmV4dGVuZD1TLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoUy5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fFMuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1TLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sUy5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP1MubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKHAoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcoYSl9LGd1aWQ6MSxzdXBwb3J0Onl9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihTLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxTLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx2LHMsYyx5LFM9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHA9bi5kb2N1bWVudCxrPTAscj0wLG09dWUoKSx4PXVlKCksQT11ZSgpLE49dWUoKSxqPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0sRD17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLEY9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLEI9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSwkPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrRiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLFwiZ1wiKSxuZT1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKHAuY2hpbGROb2RlcykscC5jaGlsZE5vZGVzKSx0W3AuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnkoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0K1wiIFwiXSYmKCF2fHwhdi50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmKFUudGVzdCh0KXx8ei50ZXN0KHQpKSl7KGY9ZWUudGVzdCh0KSYmeWUoZS5wYXJlbnROb2RlKXx8ZSk9PT1lJiZkLnNjb3BlfHwoKHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPVMpKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1TJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKCQsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24gdmUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUubmFtZXNwYWNlVVJJLG49ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTpwO3JldHVybiByIT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxFPSFpKEMpLHAhPUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5zY29wZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChDLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZmllbGRzZXQgZGl2XCIpLmxlbmd0aH0pLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPVMsIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKFMpLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitTK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrUytcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmdi5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK1MrXCItXVwiKS5sZW5ndGh8fHYucHVzaChcIn49XCIpLCh0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJcIiksZS5hcHBlbmRDaGlsZCh0KSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nJ11cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqbmFtZVwiK00rXCIqPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8di5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitTK1wiKypcIikubGVuZ3RofHx2LnB1c2goXCIuIy4rWyt+XVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJcXFxcXFxmXCIpLHYucHVzaChcIltcXFxcclxcXFxuXFxcXGZdXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIixGKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx5PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LGo9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmeShwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmeShwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSkseShlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZELmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChqKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKEIsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx2KXt2YXIgeT1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT12P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9eSE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih5KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09dik9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtTXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoJCxcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnZlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp2ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6dmUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtTXXx8KGVbU109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHYseSxlKXtyZXR1cm4gdiYmIXZbU10mJih2PUNlKHYpKSx5JiYheVtTXSYmKHk9Q2UoeSxlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/eXx8KGU/ZDpsfHx2KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx2KXtpPVRlKHAsdSksdihpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYoeXx8ZCl7aWYoeSl7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7eShudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtTXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZSgkLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKCQsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHYseSxtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHY9byxtPTA8KHk9aSkubGVuZ3RoLHg9MDx2Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IUUpO3doaWxlKHM9dlthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9eVthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUreS5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KFwiXCIpLnNvcnQoaikuam9pbihcIlwiKT09PVMsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtTLmZpbmQ9ZCxTLmV4cHI9ZC5zZWxlY3RvcnMsUy5leHByW1wiOlwiXT1TLmV4cHIucHNldWRvcyxTLnVuaXF1ZVNvcnQ9Uy51bmlxdWU9ZC51bmlxdWVTb3J0LFMudGV4dD1kLmdldFRleHQsUy5pc1hNTERvYz1kLmlzWE1MLFMuY29udGFpbnM9ZC5jb250YWlucyxTLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sUy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/UyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBELHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fEQsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixEPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtTLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49Uy5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fFMudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19Uy5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7Uy5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBTLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49Uy5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8Uy5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sUy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24ocil7Uy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPVMuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sUy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiBCKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7Uy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpKTt2YXIgJD1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbikkKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTokKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LFMubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9TLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1FLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KFMuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKFMuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlTLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsUy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PVMuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx5LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix5Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIseS5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/Uy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB5ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx5Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKVMubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rUy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPFMuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT12ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnllKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB3ZSgpe3JldHVybiEwfWZ1bmN0aW9uIFRlKCl7cmV0dXJuITF9ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIEVlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KUVlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9VGU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBTZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbiYmbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksd2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9di5oYW5kbGUpfHwoYT12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUyYmUy5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/Uy5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9YmUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPVMuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJlMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPWJlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PVMuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9Uy5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoUy5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPFMoaSx0aGlzKS5pbmRleChsKTpTLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoUy5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZTZSh0LFwiY2xpY2tcIix3ZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmU2UodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpUZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlRlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ITB9LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXtTLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFNlKHRoaXMsZSxDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyxlKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sZGVsZWdhdGVUeXBlOnR9fSksUy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLFMuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRWUodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBFZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixTKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1UZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIga2U9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQWU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxOZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gamUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBEZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTGUoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIEhlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZBZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAodmUoZSxcInNjcmlwdFwiKSxEZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEsdmUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxxZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKE5lLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIE9lKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh2ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnllKHZlKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylMZShvW3JdLGFbcl0pO2Vsc2UgTGUoZSxjKTtyZXR1cm4gMDwoYT12ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnllKGEsIWYmJnZlKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gT2UodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxqZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PWplKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYha2UudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFBlPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFJlPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sTWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LEllPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIFdlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8UmUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJlBlLnRlc3QoYSkmJkllLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gRmUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZVwiLHQuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjoxcHggc29saWRcIix0LnN0eWxlLmhlaWdodD1cIjFweFwiLG4uc3R5bGUuaGVpZ2h0PVwiOXB4XCIsbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPXBhcnNlSW50KHIuaGVpZ2h0LDEwKStwYXJzZUludChyLmJvcmRlclRvcFdpZHRoLDEwKStwYXJzZUludChyLmJvcmRlckJvdHRvbVdpZHRoLDEwKT09PXQub2Zmc2V0SGVpZ2h0LHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgQmU9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLCRlPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxfZT17fTtmdW5jdGlvbiB6ZShlKXt2YXIgdD1TLmNzc1Byb3BzW2VdfHxfZVtlXTtyZXR1cm4gdHx8KGUgaW4gJGU/ZTpfZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPUJlLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9QmVbbl0rdClpbiAkZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBVZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sWGU9L14tLS8sVmU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEdlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gWWUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBRZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPVMuY3NzKGUsbituZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSk6cys9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciByPVJlKGUpLGk9KCF5LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1XZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKFBlLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF5LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF5LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSxcInRyXCIpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStRZShlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBLZShlLHQsbixyLGkpe3JldHVybiBuZXcgS2UucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1TLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPVdlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PVhlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PXplKHMpKSxhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT10ZS5leGVjKG4pKSYmaVsxXSYmKG49c2UoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KFMuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSkseS5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9WCh0KTtyZXR1cm4gWGUudGVzdCh0KXx8KHQ9emUocykpLChhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9V2UoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBHZSYmKGk9R2VbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksUy5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtTLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIVVlLnRlc3QoUy5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP0plKGUsdSxuKTpNZShlLFZlLGZ1bmN0aW9uKCl7cmV0dXJuIEplKGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9UmUoZSksbz0heS5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9RZShlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLVFlKGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9Uy5jc3MoZSx1KSksWWUoMCx0LHMpfX19KSxTLmNzc0hvb2tzLm1hcmdpbkxlZnQ9RmUoeS5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KFdlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LU1lKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLFMuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7Uy5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKFMuY3NzSG9va3NbaStvXS5zZXQ9WWUpfSksUy5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9UmUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09Uy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP1Muc3R5bGUoZSx0LG4pOlMuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoUy5Ud2Vlbj1LZSkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLZSxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxTLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KFMuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9S2UucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOktlLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPUtlLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1TLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6S2UucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPUtlLnByb3RvdHlwZSwoS2UucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9Uy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtTLmZ4LnN0ZXBbZS5wcm9wXT9TLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhUy5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbemUoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6Uy5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1LZS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxTLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sUy5meD1LZS5wcm90b3R5cGUuaW5pdCxTLmZ4LnN0ZXA9e307dmFyIFplLGV0LHR0LG50LHJ0PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxpdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIG90KCl7ZXQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShvdCk6Qy5zZXRUaW1lb3V0KG90LFMuZnguaW50ZXJ2YWwpLFMuZngudGljaygpKX1mdW5jdGlvbiBhdCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtaZT12b2lkIDB9KSxaZT1EYXRlLm5vdygpfWZ1bmN0aW9uIHN0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gdXQoZSx0LG4pe2Zvcih2YXIgcixpPShsdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChsdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGx0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWx0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9WmV8fGF0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpTLmV4dGVuZCh7fSxlKSxvcHRzOlMuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpTLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOlplfHxhdCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1TLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49bHQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKFMuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gUy5tYXAoYyx1dCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksUy5meC50aW1lcihTLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfVMuQW5pbWF0aW9uPVMuZXh0ZW5kKGx0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBzZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sbHQudHdlZW5lcnNbbl09bHQudHdlZW5lcnNbbl18fFtdLGx0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSksdj1ZLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1TLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sUy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLHJ0LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwhdnx8dm9pZCAwPT09dltyXSljb250aW51ZTtnPSEwfWRbcl09diYmdltyXXx8Uy5zdHlsZShlLHIpfWlmKCh1PSFTLmlzRW1wdHlPYmplY3QodCkpfHwhUy5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9diYmdi5kaXNwbGF5KSYmKGw9WS5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9Uy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1TLmNzcyhlLFwiZGlzcGxheVwiKSxsZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh2P1wiaGlkZGVuXCJpbiB2JiYoZz12LmhpZGRlbik6dj1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih2LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxsZShbZV0pLFkucmVtb3ZlKGUsXCJmeHNob3dcIiksZClTLnN0eWxlKGUscixkW3JdKX0pKSx1PXV0KGc/dltyXTowLHIscCksciBpbiB2fHwodltyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9sdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6bHQucHJlZmlsdGVycy5wdXNoKGUpfX0pLFMuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP1MuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIFMuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gUy5meC5zcGVlZHM/ci5kdXJhdGlvbj1TLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPVMuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmUy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LFMuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPVMuaXNFbXB0eU9iamVjdCh0KSxvPVMuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1sdCh0aGlzLFMuZXh0ZW5kKHt9LHQpLG8pOyhpfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPVMudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmaXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8Uy5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9Uy50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLFMucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksUy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPVMuZm5bcl07Uy5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoc3QociwhMCksZSx0LG4pfX0pLFMuZWFjaCh7c2xpZGVEb3duOnN0KFwic2hvd1wiKSxzbGlkZVVwOnN0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpzdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxTLnRpbWVycz1bXSxTLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1TLnRpbWVycztmb3IoWmU9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxTLmZ4LnN0b3AoKSxaZT12b2lkIDB9LFMuZngudGltZXI9ZnVuY3Rpb24oZSl7Uy50aW1lcnMucHVzaChlKSxTLmZ4LnN0YXJ0KCl9LFMuZnguaW50ZXJ2YWw9MTMsUy5meC5zdGFydD1mdW5jdGlvbigpe2V0fHwoZXQ9ITAsb3QoKSl9LFMuZnguc3RvcD1mdW5jdGlvbigpe2V0PW51bGx9LFMuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LFMuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1TLmZ4JiZTLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0sdHQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksbnQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksdHQudHlwZT1cImNoZWNrYm94XCIseS5jaGVja09uPVwiXCIhPT10dC52YWx1ZSx5Lm9wdFNlbGVjdGVkPW50LnNlbGVjdGVkLCh0dD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIsdHQudHlwZT1cInJhZGlvXCIseS5yYWRpb1ZhbHVlPVwidFwiPT09dHQudmFsdWU7dmFyIGN0LGZ0PVMuZXhwci5hdHRySGFuZGxlO1MuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksUy5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP1MucHJvcChlLHQsbik6KDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwoaT1TLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoUy5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9jdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgUy5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1TLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXkucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFApO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLGN0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9TLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxTLmVhY2goUy5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZnRbdF18fFMuZmluZC5hdHRyO2Z0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1mdFtvXSxmdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGZ0W29dPWkpLHJ9fSk7dmFyIHB0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZHQ9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIGh0KGUpe3JldHVybihlLm1hdGNoKFApfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUCl8fFtdfVMuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW1MucHJvcEZpeFtlXXx8ZV19KX19KSxTLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJlMuaXNYTUxEb2MoZSl8fCh0PVMucHJvcEZpeFt0XXx8dCxpPVMucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOnB0LnRlc3QoZS5ub2RlTmFtZSl8fGR0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSkseS5vcHRTZWxlY3RlZHx8KFMucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxTLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7Uy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLFMuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSxndCh0aGlzKSkpfSk7aWYoKGU9dnQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPWd0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK2h0KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihyKz1vK1wiIFwiKTtpIT09KHM9aHQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5yZW1vdmVDbGFzcyh0LmNhbGwodGhpcyxlLGd0KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigoZT12dCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9Z3Qobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIraHQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSl3aGlsZSgtMTxyLmluZGV4T2YoXCIgXCIrbytcIiBcIikpcj1yLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7aSE9PShzPWh0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihpLHQpe3ZhciBvPXR5cGVvZiBpLGE9XCJzdHJpbmdcIj09PW98fEFycmF5LmlzQXJyYXkoaSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZhP3Q/dGhpcy5hZGRDbGFzcyhpKTp0aGlzLnJlbW92ZUNsYXNzKGkpOm0oaSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykudG9nZ2xlQ2xhc3MoaS5jYWxsKHRoaXMsZSxndCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQsbixyO2lmKGEpe3Q9MCxuPVModGhpcykscj12dChpKTt3aGlsZShlPXJbdCsrXSluLmhhc0NsYXNzKGUpP24ucmVtb3ZlQ2xhc3MoZSk6bi5hZGRDbGFzcyhlKX1lbHNlIHZvaWQgMCE9PWkmJlwiYm9vbGVhblwiIT09b3x8KChlPWd0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGV8fCExPT09aT9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIraHQoZ3QobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB5dD0vXFxyL2c7Uy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0OzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHQ9aT9uLmNhbGwodGhpcyxlLFModGhpcykudmFsKCkpOm4pP3Q9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgdD90Kz1cIlwiOkFycmF5LmlzQXJyYXkodCkmJih0PVMubWFwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKTp0PyhyPVMudmFsSG9va3NbdC50eXBlXXx8Uy52YWxIb29rc1t0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsXCJ2YWx1ZVwiKSk/ZTpcInN0cmluZ1wiPT10eXBlb2YoZT10LnZhbHVlKT9lLnJlcGxhY2UoeXQsXCJcIik6bnVsbD09ZT9cIlwiOmU6dm9pZCAwfX0pLFMuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6aHQoUy50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9UyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPVMubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD0tMTxTLmluQXJyYXkoUy52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksUy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe1MudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxTLmluQXJyYXkoUyhlKS52YWwoKSx0KX19LHkuY2hlY2tPbnx8KFMudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSkseS5mb2N1c2luPVwib25mb2N1c2luXCJpbiBDO3ZhciBtdD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8seHQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07Uy5leHRlbmQoUy5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9di5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGg9di5jYWxsKGUsXCJuYW1lc3BhY2VcIik/ZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFtdC50ZXN0KGQrUy5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKFwiLlwiKSYmKGQ9KGg9ZC5zcGxpdChcIi5cIikpLnNoaWZ0KCksaC5zb3J0KCkpLHU9ZC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZCwoZT1lW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChkLFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlKSkuaXNUcmlnZ2VyPXI/MjozLGUubmFtZXNwYWNlPWguam9pbihcIi5cIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGUucmVzdWx0PXZvaWQgMCxlLnRhcmdldHx8KGUudGFyZ2V0PW4pLHQ9bnVsbD09dD9bZV06Uy5tYWtlQXJyYXkodCxbZV0pLGM9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxyfHwhYy50cmlnZ2VyfHwhMSE9PWMudHJpZ2dlci5hcHBseShuLHQpKSl7aWYoIXImJiFjLm5vQnViYmxlJiYheChuKSl7Zm9yKHM9Yy5kZWxlZ2F0ZVR5cGV8fGQsbXQudGVzdChzK2QpfHwobz1vLnBhcmVudE5vZGUpO287bz1vLnBhcmVudE5vZGUpcC5wdXNoKG8pLGE9bzthPT09KG4ub3duZXJEb2N1bWVudHx8RSkmJnAucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8Qyl9aT0wO3doaWxlKChvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpZj1vLGUudHlwZT0xPGk/czpjLmJpbmRUeXBlfHxkLChsPShZLmdldChvLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVtlLnR5cGVdJiZZLmdldChvLFwiaGFuZGxlXCIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZWKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhVihuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksUy5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLHh0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx4dCksUy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1TLmV4dGVuZChuZXcgUy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtTLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLFMuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe1MuZXZlbnQuc2ltdWxhdGUocixlLnRhcmdldCxTLmV2ZW50LmZpeChlKSl9O1MuZXZlbnQuc3BlY2lhbFtyXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpO3R8fGUuYWRkRXZlbnRMaXN0ZW5lcihuLGksITApLFkuYWNjZXNzKGUsciwodHx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKS0xO3Q/WS5hY2Nlc3MoZSxyLHQpOihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLCEwKSxZLnJlbW92ZShlLHIpKX19fSk7dmFyIGJ0PUMubG9jYXRpb24sd3Q9e2d1aWQ6RGF0ZS5ub3coKX0sVHQ9L1xcPy87Uy5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdCxuO2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe31yZXR1cm4gbj10JiZ0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIilbMF0sdCYmIW58fFMuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrKG4/Uy5tYXAobi5jaGlsZE5vZGVzLGZ1bmN0aW9uKGUpe3JldHVybiBlLnRleHRDb250ZW50fSkuam9pbihcIlxcblwiKTplKSksdH07dmFyIEN0PS9cXFtcXF0kLyxFdD0vXFxyP1xcbi9nLFN0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxrdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQXQobixlLHIsaSl7dmFyIHQ7aWYoQXJyYXkuaXNBcnJheShlKSlTLmVhY2goZSxmdW5jdGlvbihlLHQpe3J8fEN0LnRlc3Qobik/aShuLHQpOkF0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSk7ZWxzZSBpZihyfHxcIm9iamVjdFwiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKUF0KG4rXCJbXCIrdCtcIl1cIixlW3RdLHIsaSl9Uy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPW0odCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIVMuaXNQbGFpbk9iamVjdChlKSlTLmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKUF0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1TLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP1MubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIVModGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmt0LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFTdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1TKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT9TLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2UoRXQsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShFdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgTnQ9LyUyMC9nLGp0PS8jLiokLyxEdD0vKFs/Jl0pXz1bXiZdKi8scXQ9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxMdD0vXig/OkdFVHxIRUFEKSQvLEh0PS9eXFwvXFwvLyxPdD17fSxQdD17fSxSdD1cIiovXCIuY29uY2F0KFwiKlwiKSxNdD1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Z1bmN0aW9uIEl0KG8pe3JldHVybiBmdW5jdGlvbihlLHQpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCIqXCIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSlcIitcIj09PW5bMF0/KG49bi5zbGljZSgxKXx8XCIqXCIsKG9bbl09b1tuXXx8W10pLnVuc2hpZnQodCkpOihvW25dPW9bbl18fFtdKS5wdXNoKHQpfX1mdW5jdGlvbiBXdCh0LGksbyxhKXt2YXIgcz17fSx1PXQ9PT1QdDtmdW5jdGlvbiBsKGUpe3ZhciByO3JldHVybiBzW2VdPSEwLFMuZWFjaCh0W2VdfHxbXSxmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1tcIipcIl0mJmwoXCIqXCIpfWZ1bmN0aW9uIEZ0KGUsdCl7dmFyIG4scixpPVMuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJlMuZXh0ZW5kKCEwLGUsciksZX1NdC5ocmVmPWJ0LmhyZWYsUy5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOmJ0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChidC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6UnQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOlMucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P0Z0KEZ0KGUsUy5hamF4U2V0dGluZ3MpLHQpOkZ0KFMuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkl0KE90KSxhamF4VHJhbnNwb3J0Okl0KFB0KSxhamF4OmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8sdj1TLmFqYXhTZXR1cCh7fSx0KSx5PXYuY29udGV4dHx8dixtPXYuY29udGV4dCYmKHkubm9kZVR5cGV8fHkuanF1ZXJ5KT9TKHkpOlMuZXZlbnQseD1TLkRlZmVycmVkKCksYj1TLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9di5zdGF0dXNDb2RlfHx7fSxhPXt9LHM9e30sdT1cImNhbmNlbGVkXCIsVD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGgpe2lmKCFuKXtuPXt9O3doaWxlKHQ9cXQuZXhlYyhwKSluW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXXx8W10pLmNvbmNhdCh0WzJdKX10PW5bZS50b0xvd2VyQ2FzZSgpK1wiIFwiXX1yZXR1cm4gbnVsbD09dD9udWxsOnQuam9pbihcIiwgXCIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih2Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx2LnVybD0oKGV8fHYudXJsfHxidC5ocmVmKStcIlwiKS5yZXBsYWNlKEh0LGJ0LnByb3RvY29sK1wiLy9cIiksdi50eXBlPXQubWV0aG9kfHx0LnR5cGV8fHYubWV0aG9kfHx2LnR5cGUsdi5kYXRhVHlwZXM9KHYuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXCJcIl0sbnVsbD09di5jcm9zc0RvbWFpbil7cj1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtyLmhyZWY9di51cmwsci5ocmVmPXIuaHJlZix2LmNyb3NzRG9tYWluPU10LnByb3RvY29sK1wiLy9cIitNdC5ob3N0IT1yLnByb3RvY29sK1wiLy9cIityLmhvc3R9Y2F0Y2goZSl7di5jcm9zc0RvbWFpbj0hMH19aWYodi5kYXRhJiZ2LnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygdi5kYXRhJiYodi5kYXRhPVMucGFyYW0odi5kYXRhLHYudHJhZGl0aW9uYWwpKSxXdChPdCx2LHQsVCksaClyZXR1cm4gVDtmb3IoaSBpbihnPVMuZXZlbnQmJnYuZ2xvYmFsKSYmMD09Uy5hY3RpdmUrKyYmUy5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHYudHlwZT12LnR5cGUudG9VcHBlckNhc2UoKSx2Lmhhc0NvbnRlbnQ9IUx0LnRlc3Qodi50eXBlKSxmPXYudXJsLnJlcGxhY2UoanQsXCJcIiksdi5oYXNDb250ZW50P3YuZGF0YSYmdi5wcm9jZXNzRGF0YSYmMD09PSh2LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYodi5kYXRhPXYuZGF0YS5yZXBsYWNlKE50LFwiK1wiKSk6KG89di51cmwuc2xpY2UoZi5sZW5ndGgpLHYuZGF0YSYmKHYucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiB2LmRhdGEpJiYoZis9KFR0LnRlc3QoZik/XCImXCI6XCI/XCIpK3YuZGF0YSxkZWxldGUgdi5kYXRhKSwhMT09PXYuY2FjaGUmJihmPWYucmVwbGFjZShEdCxcIiQxXCIpLG89KFR0LnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIit3dC5ndWlkKysrbyksdi51cmw9ZitvKSx2LmlmTW9kaWZpZWQmJihTLmxhc3RNb2RpZmllZFtmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixTLmxhc3RNb2RpZmllZFtmXSksUy5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsUy5ldGFnW2ZdKSksKHYuZGF0YSYmdi5oYXNDb250ZW50JiYhMSE9PXYuY29udGVudFR5cGV8fHQuY29udGVudFR5cGUpJiZULnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIix2LmNvbnRlbnRUeXBlKSxULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIix2LmRhdGFUeXBlc1swXSYmdi5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXT92LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXYuZGF0YVR5cGVzWzBdP1wiLCBcIitSdCtcIjsgcT0wLjAxXCI6XCJcIik6di5hY2NlcHRzW1wiKlwiXSksdi5oZWFkZXJzKVQuc2V0UmVxdWVzdEhlYWRlcihpLHYuaGVhZGVyc1tpXSk7aWYodi5iZWZvcmVTZW5kJiYoITE9PT12LmJlZm9yZVNlbmQuY2FsbCh5LFQsdil8fGgpKXJldHVybiBULmFib3J0KCk7aWYodT1cImFib3J0XCIsYi5hZGQodi5jb21wbGV0ZSksVC5kb25lKHYuc3VjY2VzcyksVC5mYWlsKHYuZXJyb3IpLGM9V3QoUHQsdix0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtULHZdKSxoKXJldHVybiBUO3YuYXN5bmMmJjA8di50aW1lb3V0JiYoZD1DLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0sdi50aW1lb3V0KSk7dHJ5e2g9ITEsYy5zZW5kKGEsbCl9Y2F0Y2goZSl7aWYoaCl0aHJvdyBlO2woLTEsZSl9fWVsc2UgbCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8XCJcIixULnJlYWR5U3RhdGU9MDxlPzQ6MCxpPTIwMDw9ZSYmZTwzMDB8fDMwND09PWUsbiYmKHM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHYsVCxuKSksIWkmJi0xPFMuaW5BcnJheShcInNjcmlwdFwiLHYuZGF0YVR5cGVzKSYmUy5pbkFycmF5KFwianNvblwiLHYuZGF0YVR5cGVzKTwwJiYodi5jb252ZXJ0ZXJzW1widGV4dCBzY3JpcHRcIl09ZnVuY3Rpb24oKXt9KSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHYscyxULGkpLGk/KHYuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKFMubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT12LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHksW28sbCxUXSk6eC5yZWplY3RXaXRoKHksW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHYsaT9vOmFdKSxiLmZpcmVXaXRoKHksW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx2XSksLS1TLmFjdGl2ZXx8Uy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksUy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe1NbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxTLmFqYXgoUy5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LFMuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlLmhlYWRlcnMpXCJjb250ZW50LXR5cGVcIj09PXQudG9Mb3dlckNhc2UoKSYmKGUuY29udGVudFR5cGU9ZS5oZWFkZXJzW3RdfHxcIlwiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe1ModGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksUy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFTLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxTLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sUy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgQnQ9ezA6MjAwLDEyMjM6MjA0fSwkdD1TLmFqYXhTZXR0aW5ncy54aHIoKTt5LmNvcnM9ISEkdCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluICR0LHkuYWpheD0kdD0hISR0LFMuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8JHQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChCdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksUy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZ2xvYmFsRXZhbChlKSxlfX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLFMuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9UyhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIF90LHp0PVtdLFV0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9enQucG9wKCl8fFMuZXhwYW5kbytcIl9cIit3dC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFV0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZVdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFV0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KFR0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fFMuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayx6dC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSkseS5jcmVhdGVIVE1MRG9jdW1lbnQ9KChfdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1fdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHkuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1OLmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXhlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZTKG8pLnJlbW92ZSgpLFMubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30sUy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj1odChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJlMuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UyhcIjxkaXY+XCIpLmFwcGVuZChTLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LFMuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBTLmdyZXAoUy50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LFMub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPVMuY3NzKGUsXCJwb3NpdGlvblwiKSxjPVMoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1TLmNzcyhlLFwidG9wXCIpLHU9Uy5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6Yy5jc3MoZil9fSxTLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pO3ZhciBlLG4scj10aGlzWzBdO3JldHVybiByP3IuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOmUudG9wK24ucGFnZVlPZmZzZXQsbGVmdDplLmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9OnZvaWQgMH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09Uy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1TKGUpLm9mZnNldCgpKS50b3ArPVMuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPVMuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3AtUy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtUy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxyZX0pfX0pLFMuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24odCxpKXt2YXIgbz1cInBhZ2VZT2Zmc2V0XCI9PT1pO1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSx0LGUsYXJndW1lbnRzLmxlbmd0aCl9fSksUy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe1MuY3NzSG9va3Nbbl09RmUoeS5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4gdD1XZShlLG4pLFBlLnRlc3QodCk/UyhlKS5wb3NpdGlvbigpW25dK1wicHhcIjp0fSl9KSxTLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxzKXtTLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpzLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKHIsbyl7Uy5mbltvXT1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGk9cnx8KCEwPT09ZXx8ITA9PT10P1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxTLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxTLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfSxob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxTLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsbil7Uy5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSk7dmFyIFh0PS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztTLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8Uy5ndWlkKyssaX0sUy5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9TLnJlYWR5V2FpdCsrOlMucmVhZHkoITApfSxTLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxTLnBhcnNlSlNPTj1KU09OLnBhcnNlLFMubm9kZU5hbWU9QSxTLmlzRnVuY3Rpb249bSxTLmlzV2luZG93PXgsUy5jYW1lbENhc2U9WCxTLnR5cGU9dyxTLm5vdz1EYXRlLm5vdyxTLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1TLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxTLnRyaW09ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKFh0LFwiXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgVnQ9Qy5qUXVlcnksR3Q9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9R3QpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVZ0KSxTfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1TKSxTfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9WMy9hcHAnO1xuXG5BcHAuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9