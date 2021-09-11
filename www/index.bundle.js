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
    init: init, draw: draw, drawFromCache: drawFromCache, getCurrent: getCurrent, finishRequest: finishRequest
};


/***/ }),

/***/ "./www/.ts/V3/calendarData.ts":
/*!************************************!*\
  !*** ./www/.ts/V3/calendarData.ts ***!
  \************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export expandCourse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export expandDay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
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
            var day = calendarData_1.expandDay(storage[dateString]);
            drawCoursesLandscape(day, i);
            dateString = day_1.Day.add(dateString, 1);
        }
    }
}
function drawPortrait(dateString, storage) {
    if (storage) {
        var day = calendarData_1.expandDay(storage[dateString]);
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

/***/ "./www/.ts/V3/error.ts":
/*!*****************************!*\
  !*** ./www/.ts/V3/error.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
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
exports.default = CalendarError;


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
        'peip1': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87a9882e74a3f76e0b760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peip2': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f8e7485d9bee2c84dbb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
        'peipc': 'http://ade.polytech.u-psud.fr:8080/direct/?data=5e3670a1af648401000482f65ebb1c4e51e7ab85056895b4cf55c89501c3748af5fe262b0b0938f87b035ebf272a6adfb760d181e6772c6df15f60700e60a742b2ed5e3c27118796ba1d70a4827aadb7ef015f9604cfa310b7b0dae73ff76118',
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
app_1.App.init();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9hcHAudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXJEYXRhLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2NhbGVuZGFyRHJhd2VyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2NvbW11bmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZGF0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9kYXkudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZXZlbnRzLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9pbmFwcGJyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvbmV0d29yay50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvcHJveHkudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy90aGVtZS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQW9DO0FBRXBDLGdGQUFtQztBQUNuQyw2RUFBaUM7QUFDakMsbUZBQXFDO0FBQ3JDLGdGQUFtQztBQUNuQywrRkFBNkM7QUFDN0Msb0VBQTJCO0FBQzNCLDBFQUErQjtBQUMvQiwrRkFBNkM7QUFDN0MsNkVBQWlDO0FBRWpDLDhEQUFpQjtBQUVqQixTQUFlLElBQUk7Ozs7Ozs7b0JBRWYsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDaEIscUJBQU0saUJBQU8sQ0FBQyxJQUFJLEVBQUU7O29CQUFwQixTQUFvQixDQUFDO29CQUNyQixhQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLGFBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDeEMscUJBQU0sZUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFBckQsU0FBcUQsQ0FBQztvQkFDbEQsTUFBTSxHQUFHLG1CQUFRLENB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QUEyRSxHQUFHLGNBQWMscUJBQXFCLFlBQVkscUJBQXFCLGNBQWMseUlBQXlJLHVGQUF1RixHQUFHLHNGQUFzRix5QkFBeUIsMkJBQTJCLHdCQUF3Qix5REFBeUQsYUFBYSxHQUFHLFVBQVUsaURBQWlELGVBQWUsd0JBQXdCLG9CQUFvQiw4QkFBOEIsTUFBTSxpSkFBaUosd0JBQXdCLHNDQUFzQywrQ0FBK0MsMkRBQTJELEVBQUUsVUFBVSw4QkFBOEIsZUFBZSxRQUFRLHlDQUF5QyxlQUFlLHNCQUFzQix5RkFBeUYsOEJBQThCLE1BQU0sd1FBQXdRLGtCQUFrQixFQUFFLGVBQWUscUJBQXFCLDJCQUEyQixzQkFBc0IsMEJBQTBCLDRCQUE0Qix3QkFBd0IsNEJBQTRCLG9FQUFvRSwwQkFBMEIsNEJBQTRCLDZEQUE2RCxLQUFxQyxFQUFFLGlDQUFnQixFQUFFLG1DQUFDLFdBQVcsU0FBUztBQUFBLGtHQUFDLENBQUMsdUJBQXVCLGdDQUFnQywwREFBMEQsdUJBQXVCOzs7Ozs7O1VDSDk4ckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJ1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJ1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJy4vbmV0d29yaydcbmltcG9ydCB7IEluYXBwQnJvd3NlciB9IGZyb20gJy4vaW5hcHBicm93c2VyJ1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbidcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuXG5pbXBvcnQgJy4vZXZlbnRzJ1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICB0cnkge1xuICAgIENhbGVuZGFyLmluaXQoKTtcbiAgICBhd2FpdCBTdG9yYWdlLmluaXQoKTtcbiAgICBUaGVtZS5zZXQoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlRIRU1FKSk7XG4gICAgYXdhaXQgRmlsdGVyLmxvYWRGaWx0ZXIoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gICAgbGV0IGNhY2hlZCA9IENhbGVuZGFyLmRyYXdGcm9tQ2FjaGUoRGF5LnRvZGF5KCkpO1xuICAgIGlmIChjYWNoZWQpIEV2ZW50cy5pbml0KCk7XG4gICAgYXdhaXQgc3RhcnRJbmFwcEJyb3dzZXIoKTtcbiAgICBhd2FpdCBDYWxlbmRhci5kcmF3KERheS50b2RheSgpKTtcbiAgICBpZiAoIWNhY2hlZCkgRXZlbnRzLmluaXQoKTsgLy8gZXZlbnRzIGFyZSBpbml0aWFsaXplZCBhZnRlciBmdWxsIGxvYWQgdG8gZ3VhcmFudGVlIENhbGVuZGFyLmdldEN1cnJlbnQoKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdzb21ldGhpbmcgYmFkIGhhcHBlbmVkICEnKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ21ham9yRXJyb3InKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydEluYXBwQnJvd3NlcigpIHtcbiAgYXdhaXQgTmV0d29yay53aGVuT25saW5lKClcbiAgYXdhaXQgSW5hcHBCcm93c2VyLmxvYWQoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSlcbiAgYXdhaXQgSW5hcHBCcm93c2VyLmluamVjdFNjcmlwdCgpXG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgbWFpbiwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0SW5hcHBCcm93c2VyKCkge1xuICByZXR1cm4gc3RhcnRJbmFwcEJyb3dzZXIoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBBcHAgPSB7IGluaXQsIHJlc3RhcnRJbmFwcEJyb3dzZXIgfTtcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbiB9IGZyb20gJy4vY29tbXVuaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbidcbmltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmF3ZXIgfSBmcm9tICcuL2NhbGVuZGFyRHJhd2VyJztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgU3RvcmUsIE1pbmlmaWVkV2VlayB9IGZyb20gJy4vY2FsZW5kYXJEYXRhJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gbG9hZENhY2hlKCk6IFN0b3JlIHtcbiAgY29uc3QgY2FjaGVTdHIgPSBTdG9yYWdlLmdldChQLnN0b3JhZ2UuU0FWRURfREFZUyk7XG4gIGxldCBjYWNoZTogU3RvcmU7XG4gIHRyeSB7XG4gICAgY2FjaGUgPSBKU09OLnBhcnNlKGNhY2hlU3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybignZGF5cyBjYWNoZSBpcyB1bnNldCBvciBpbnZhbGlkLicpO1xuICAgIGNhY2hlID0ge307XG4gIH1cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBzYXZlQ2FjaGUoY2FjaGU6IFN0b3JlKSB7XG4gIFN0b3JhZ2Uuc2V0KFAuc3RvcmFnZS5TQVZFRF9EQVlTLCBKU09OLnN0cmluZ2lmeShjYWNoZSkpO1xufVxuXG5sZXQgY2FjaGU6IFN0b3JlO1xubGV0IHN0b3JhZ2U6IFN0b3JlO1xubGV0IGN1cnJlbnREYXRlU3RyaW5nOiBzdHJpbmcgfCBudWxsO1xubGV0IGN1cnJlbnRSZXF1ZXN0OiBQcm9taXNlPHZvaWQ+IHwgbnVsbDtcblxuZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkJ1dHRvbnMoZGF0ZVN0cmluZzogc3RyaW5nKSB7IC8vIGRpc2FibGUgb3IgZW5hYmxlIG5hdiBidXR0b25zXG4gIFAuJEJVVFRPTl9QUkVWLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICBQLiRCVVRUT05fTkVYVC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblxuICBpZiAoZGF0ZVN0cmluZyBpbiBjYWNoZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHByZXZEYXkgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIC0xKTtcbiAgY29uc3QgbmV4dERheSA9IERheS5hZGQoZGF0ZVN0cmluZywgMSk7XG5cbiAgaWYgKCEocHJldkRheSBpbiBjYWNoZSkpIFAuJEJVVFRPTl9QUkVWLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICBpZiAoIShuZXh0RGF5IGluIGNhY2hlKSkgUC4kQlVUVE9OX05FWFQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyV2VlayhtaW5pOiBNaW5pZmllZFdlZWspIHtcbiAgbGV0IGRhdGVTdHJpbmcgPSBtaW5pLmRhdGU7IC8vIGRhdGUgaXMgYSBtb25kYXlcbiAgZm9yIChjb25zdCBpIGluIG1pbmkuZGF5cykge1xuICAgIHN0b3JhZ2VbZGF0ZVN0cmluZ10gPSBtaW5pLmRheXNbaV07XG4gICAgY2FjaGVbZGF0ZVN0cmluZ10gPSBtaW5pLmRheXNbaV07XG4gICAgZGF0ZVN0cmluZyA9IERheS5hZGQoZGF0ZVN0cmluZywgMSk7XG4gIH1cbiAgc2F2ZUNhY2hlKGNhY2hlKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBtYWtlUmVxdWVzdChkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgaWYgKGN1cnJlbnRSZXF1ZXN0KSB7XG4gICAgY29uc29sZS53YXJuKCdjYWxlbmRhciB1cGRhdGU6IGFscmVhZHkgd2FpdGluZyBmb3IgZGF0YScpO1xuICAgIGF3YWl0IGN1cnJlbnRSZXF1ZXN0O1xuICAgIGlmKGRhdGVTdHJpbmcgIT09IGN1cnJlbnREYXRlU3RyaW5nKSB0aHJvdyBuZXcgQ2FsZW5kYXJFcnJvcihQLmVyci5SRVFVRVNUX0NBTkNFTExFRCk7XG4gIH1cblxuICBjdXJyZW50UmVxdWVzdCA9IChhc3luYyBmdW5jdGlvbigpIHtcbiAgICBOb3RpZmljYXRpb24uc2hvdygnbG9hZGluZycpO1xuICAgIGF3YWl0IE5ldHdvcmsud2hlbk9ubGluZSgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWVrID0gYXdhaXQgQ29tbXVuaWNhdGlvbi5yZXF1ZXN0V2VlayhkYXRlU3RyaW5nKTtcbiAgICAgIHJlZ2lzdGVyV2Vlayh3ZWVrKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3JlcXVlc3QgZmFpbGVkOicsIGUpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIE5vdGlmaWNhdGlvbi5oaWRlKCdsb2FkaW5nJyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGF3YWl0IGN1cnJlbnRSZXF1ZXN0O1xuICBjdXJyZW50UmVxdWVzdCA9IG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmlzaFJlcXVlc3QoKSB7XG4gICAgaWYgKGN1cnJlbnRSZXF1ZXN0KSBhd2FpdCBjdXJyZW50UmVxdWVzdDtcbn1cblxuZnVuY3Rpb24gZHJhd0Zyb21DYWNoZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHtcbiAgICBjdXJyZW50RGF0ZVN0cmluZyA9IGRhdGVTdHJpbmc7XG4gICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nLCBjYWNoZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkcmF3KGRhdGVTdHJpbmc6IHN0cmluZykge1xuICB1cGRhdGVOYXZpZ2F0aW9uQnV0dG9ucyhkYXRlU3RyaW5nKTtcbiAgY3VycmVudERhdGVTdHJpbmcgPSBkYXRlU3RyaW5nO1xuICBpZiAoZGF0ZVN0cmluZyBpbiBzdG9yYWdlKSB7XG4gICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nLCBzdG9yYWdlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoZGF0ZVN0cmluZyBpbiBjYWNoZSkge1xuICAgICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nLCBjYWNoZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQ2FsZW5kYXJEcmF3ZXIuZHJhdyhkYXRlU3RyaW5nKTsgLy8gYWN0dWFsbHkgZHJhd3Mgbm90aGluZ1xuICAgIH1cbiAgICBhd2FpdCBtYWtlUmVxdWVzdChkYXRlU3RyaW5nKTtcbiAgICBpZihjdXJyZW50RGF0ZVN0cmluZyA9PSBkYXRlU3RyaW5nICYmIGRhdGVTdHJpbmcgaW4gc3RvcmFnZSkgYXdhaXQgZHJhdyhkYXRlU3RyaW5nKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhY2hlID0gbG9hZENhY2hlKCk7XG4gIHN0b3JhZ2UgPSB7fTtcbiAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZVN0cmluZyB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICBpZighY3VycmVudERhdGVTdHJpbmcpIHRocm93IG5ldyBDYWxlbmRhckVycm9yKCdjYWxlbmRhciBoYXMgbm8gY3VycmVudCBkYXknKTtcbiAgcmV0dXJuIGN1cnJlbnREYXRlU3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSB7XG4gIGluaXQsIGRyYXcsIGRyYXdGcm9tQ2FjaGUsIGdldEN1cnJlbnQsIGZpbmlzaFJlcXVlc3Rcbn1cbiIsImltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cGFuZGVkQ291cnNlIHtcbiAgc3RhcnQ6IHsgaG91cjogbnVtYmVyOyBtaW51dGU6IG51bWJlciB9O1xuICBlbmQ6IHsgaG91cjogbnVtYmVyOyBtaW51dGU6IG51bWJlciB9O1xuICB0aXRsZTogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIHVuYXZhaWxhYmxlOiBib29sZWFuO1xuICBibGFja2xpc3RlZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIE1pbmlmaWVkQ291cnNlID0gW1xuICBbXG4gICAgbnVtYmVyLCAvLyBzdGFydCBob3VyXG4gICAgbnVtYmVyIC8vIHN0YXJ0IG1pbnV0ZVxuICBdLFxuICBbXG4gICAgbnVtYmVyLCAvLyBlbmQgaG91clxuICAgIG51bWJlciAvLyBlbmQgbWludXRlXG4gIF0sXG4gIHN0cmluZywgLy8gdGl0bGVcbiAgc3RyaW5nIC8vIGJhY2tncm91bmRcbl07XG5cbmV4cG9ydCB0eXBlIE1pbmlmaWVkRGF5ID0gTWluaWZpZWRDb3Vyc2VbXTtcbmV4cG9ydCB0eXBlIEV4cGFuZGVkRGF5ID0gRXhwYW5kZWRDb3Vyc2VbXTtcblxuZXhwb3J0IGludGVyZmFjZSBTdG9yZSB7XG4gIFtrZXk6IHN0cmluZ106IE1pbmlmaWVkRGF5O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNaW5pZmllZFdlZWsge1xuICBkYXRlOiBzdHJpbmc7IC8vIGRhdGUgaXMgYSBtb25kYXlcbiAgZGF5czogTWluaWZpZWREYXlbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZENvdXJzZShtaW5pOiBNaW5pZmllZENvdXJzZSkge1xuICBjb25zdCBleHBhbmRlZDogRXhwYW5kZWRDb3Vyc2UgPSB7XG4gICAgc3RhcnQ6IHsgaG91cjogbWluaVswXVswXSwgbWludXRlOiBtaW5pWzBdWzFdIH0sXG4gICAgZW5kOiB7IGhvdXI6IG1pbmlbMV1bMF0sIG1pbnV0ZTogbWluaVsxXVsxXSB9LFxuICAgIHRpdGxlOiBtaW5pWzJdLCBiYWNrZ3JvdW5kOiBtaW5pWzNdLFxuICAgIHVuYXZhaWxhYmxlOiBmYWxzZSwgYmxhY2tsaXN0ZWQ6IGZhbHNlXG4gIH07XG5cbiAgaWYgKGV4cGFuZGVkLnRpdGxlID09PSBudWxsKSB7XG4gICAgZXhwYW5kZWQudGl0bGUgPSAnRkVSTcOJJztcbiAgICBleHBhbmRlZC51bmF2YWlsYWJsZSA9IHRydWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgZXhwYW5kZWQuYmxhY2tsaXN0ZWQgPSBGaWx0ZXIuZmlsdGVyRWxlbWVudChleHBhbmRlZCk7XG4gIH1cblxuICByZXR1cm4gZXhwYW5kZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmREYXkobWluaTogTWluaWZpZWREYXkpIHtcbiAgY29uc3QgZXhwYW5kZWQ6IEV4cGFuZGVkRGF5ID0gW107XG5cbiAgZm9yKGNvbnN0IGkgaW4gbWluaSkge1xuICAgIGV4cGFuZGVkW2ldID0gZXhwYW5kQ291cnNlKG1pbmlbaV0pO1xuICB9XG5cbiAgZXhwYW5kZWQuc29ydCgoYSwgYikgPT4gIWEuYmxhY2tsaXN0ZWQgJiYgYi5ibGFja2xpc3RlZCA/IC0xIDogMCk7IC8vIG5vdCBibGFja2xpc3RlZCBjb21lcyBmaXJzdCAoMSA8PT4gYiBjb21lcyBmaXJzdClcbiAgcmV0dXJuIGV4cGFuZGVkO1xufVxuIiwiaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5pbXBvcnQgeyBFeHBhbmRlZENvdXJzZSwgRXhwYW5kZWREYXksIFN0b3JlLCBleHBhbmREYXkgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSdcblxuZnVuY3Rpb24gZHJhd0xpbmVzKCkge1xuICBjb25zdCBuX2hvdXJzID0gUC5FTkRfSE9VUiAtIFAuU1RBUlRfSE9VUjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuX2hvdXJzOyBpKyspIHtcbiAgICBjb25zdCBob3VyID0gaSArIFAuU1RBUlRfSE9VUjtcbiAgICBjb25zdCAkaG91ciA9ICQoUC5odG1sLkhPVVIpO1xuICAgICRob3VyLmh0bWwoaG91ciArICcgaCcpO1xuICAgICRob3VyLmNzcyh7XG4gICAgICBncmlkUm93OiAoaSAqIDQgKyAxKSArIFwiXCJcbiAgICB9KVxuICAgIFAuJENPVVJTRV9DT05UQUlORVIuYXBwZW5kKCRob3VyKTtcbiAgICBjb25zdCAkbGluZSA9ICQoUC5odG1sLkhPVVJfTElORSk7XG4gICAgJGxpbmUuY3NzKHtcbiAgICAgIGdyaWRSb3c6IChpICogNCArIDEpICsgXCJcIlxuICAgIH0pXG4gICAgUC4kQ09VUlNFX0NPTlRBSU5FUi5hcHBlbmQoJGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdHJpeCgpOiBib29sZWFuW11bXSB7XG4gIGNvbnN0IG1hdHJpeCA9IFtdXG4gIGNvbnN0IG5faG91cnMgPSBQLkVORF9IT1VSIC0gUC5TVEFSVF9IT1VSO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQgKiBuX2hvdXJzOyBpKyspIHtcbiAgICBtYXRyaXhbaV0gPSBbXTtcbiAgfVxuICByZXR1cm4gbWF0cml4O1xufVxuXG5mdW5jdGlvbiBnZXRFbXB0eVNwYWNlKG1hdHJpeDogYm9vbGVhbltdW10sIGVsOiBFeHBhbmRlZENvdXJzZSkge1xuICBjb25zdCBzdGFydFJvdyA9IChlbC5zdGFydC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBlbC5zdGFydC5taW51dGUgLyAxNVxuICBjb25zdCBlbmRSb3cgPSAoZWwuZW5kLmhvdXIgLSBQLlNUQVJUX0hPVVIpICogNCArIGVsLmVuZC5taW51dGUgLyAxNVxuICBjb25zdCB3aWR0aCA9IGVsLmJsYWNrbGlzdGVkID8gMSA6IDI7XG4gIGxldCB5ID0gMDtcblxuICB3aGlsZSAobWF0cml4W3N0YXJ0Um93XVt5XSA9PT0gdHJ1ZSkgeSsrO1xuXG4gIGNvbnN0IGNoZWNrWU9mZnNldCA9ICh5OiBudW1iZXIpID0+IHtcbiAgICBmb3IgKGxldCBqID0geTsgaiA8IHkgKyB3aWR0aDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPCBlbmRSb3c7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIG1hdHJpeFtpXVtqXSA9PT0gJ3VuZGVmaW5lZCcpIG1hdHJpeFtpXVtqXSA9IGZhbHNlO1xuICAgICAgICBpZiAobWF0cml4W2ldW2pdID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH07XG4gIHdoaWxlICghY2hlY2tZT2Zmc2V0KHkpKSB5Kys7XG5cbiAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgd2lkdGg7IGorKykgeyAvLyBmaWxsIGVtcHR5IHNwYWNlXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgIG1hdHJpeFtpXVtqXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4MTogeSxcbiAgICB4MjogeSArIHdpZHRoLFxuICAgIHkxOiBzdGFydFJvdyArIDEsXG4gICAgeTI6IGVuZFJvdyArIDFcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xsaWRlcygkY291cnNlMTogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgJGNvdXJzZTI6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcbiAgY29uc3Qgc3RhcnQgPSBwYXJzZUludCgkY291cnNlMS5jc3MoJ2dyaWQtcm93LXN0YXJ0JykpO1xuICBjb25zdCBlbmQgPSBwYXJzZUludCgkY291cnNlMS5jc3MoJ2dyaWQtcm93LWVuZCcpKTtcbiAgY29uc3Qgb3RoZXJTdGFydCA9IHBhcnNlSW50KCRjb3Vyc2UyLmNzcygnZ3JpZC1yb3ctc3RhcnQnKSk7XG4gIGNvbnN0IG90aGVyRW5kID0gcGFyc2VJbnQoJGNvdXJzZTIuY3NzKCdncmlkLXJvdy1lbmQnKSk7XG4gIHJldHVybiAoc3RhcnQgPCBvdGhlckVuZCAmJiBvdGhlclN0YXJ0IDwgZW5kKTtcbn1cblxuZnVuY3Rpb24gbGFuZHNjYXBlWGFsaWduKCRkYXk6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcbiAgY29uc3QgcGxhY2VkID0gW107XG4gIGNvbnN0ICRjb3Vyc2VzID0gJGRheS5jaGlsZHJlbigpO1xuICAkY291cnNlcy5kYXRhKCd4JywgMCk7XG4gICRjb3Vyc2VzLmRhdGEoJ3hNYXgnLCAwKTtcblxuICAvLyBmaW5kIHhcbiAgZm9yIChjb25zdCBjb3Vyc2UxIG9mICRjb3Vyc2VzKSB7XG4gICAgY29uc3QgJGNvdXJzZTEgPSAkKGNvdXJzZTEpO1xuICAgIGxldCB4MSA9ICRjb3Vyc2UxLmRhdGEoJ3gnKTtcblxuICAgIGZvciAoY29uc3QgY291cnNlMiBvZiBwbGFjZWQpIHtcbiAgICAgIGNvbnN0ICRjb3Vyc2UyID0gJChjb3Vyc2UyKTtcbiAgICAgIGNvbnN0IHgyID0gJGNvdXJzZTIuZGF0YSgneCcpO1xuICAgICAgaWYgKHgxID09PSB4MiAmJiBjb2xsaWRlcygkY291cnNlMSwgJGNvdXJzZTIpKSB7XG4gICAgICAgIHgxKys7XG4gICAgICB9XG4gICAgfVxuICAgICRjb3Vyc2UxLmRhdGEoJ3gnLCB4MSk7XG4gICAgcGxhY2VkLnB1c2goY291cnNlMSk7XG4gIH1cblxuICAvLyBmaW5kIHhNYXhcbiAgZm9yIChjb25zdCBjb3Vyc2UxIG9mICRjb3Vyc2VzKSB7XG4gICAgY29uc3QgJGNvdXJzZTEgPSAkKGNvdXJzZTEpO1xuICAgIGxldCB4TWF4MSA9ICRjb3Vyc2UxLmRhdGEoJ3gnKTtcblxuICAgIGZvciAoY29uc3QgY291cnNlMiBvZiAkY291cnNlcykge1xuICAgICAgY29uc3QgJGNvdXJzZTIgPSAkKGNvdXJzZTIpO1xuICAgICAgY29uc3QgeE1heDIgPSAkY291cnNlMi5kYXRhKCd4Jyk7XG4gICAgICBpZiAoY29sbGlkZXMoJGNvdXJzZTEsICRjb3Vyc2UyKSkge1xuICAgICAgICB4TWF4MSA9IE1hdGgubWF4KHhNYXgxLCB4TWF4Mik7XG4gICAgICB9XG4gICAgfVxuICAgICRjb3Vyc2UxLmRhdGEoJ3hNYXgnLCB4TWF4MSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNvdXJzZSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UgPSAkKGNvdXJzZSk7XG4gICAgY29uc3QgeCA9ICRjb3Vyc2UuZGF0YSgneCcpO1xuICAgIGNvbnN0IHhNYXggPSAkY291cnNlLmRhdGEoJ3hNYXgnKSArIDE7XG4gICAgJGNvdXJzZS5jc3Moe1xuICAgICAgJ2xlZnQnOiAxMDAgLyB4TWF4ICogeCArICclJyxcbiAgICAgICd3aWR0aCc6ICdjYWxjKCcgKyAxMDAgLyB4TWF4ICsgJyUgKyAxcHgpJyAvLyAxcHggZm9yIHRoZSBjc3MgYm9yZGVyXG4gICAgfSk7XG4gICAgaWYgKHggKyAxID09PSB4TWF4KSB7XG4gICAgICAkY291cnNlLmNzcyh7ICd3aWR0aCc6ICdjYWxjKCcgKyAxMDAgLyB4TWF4ICsgJyUpJyB9KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3RGF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpOyAvLyB0b2RvIG1vdmUgdG8gRGF5IGFuZCBwcm94eVxuICBjb25zdCBkYXlzID0gWydEaW1hbmNoZScsICdMdW5kaScsICdNYXJkaScsICdNZXJjcmVkaScsICdKZXVkaScsICdWZW5kcmVkaScsICdTYW1lZGknXTtcbiAgY29uc3QgbW9udGhzID0gWydKYW52aWVyJywgJ0bDqXZyaWVyJywgJ01hcnMnLCAnQXZyaWwnLCAnTWFpJywgJ0p1aW4nLCAnSnVpbGxldCcsICdBb8O7dCcsICdTZXB0ZW1icmUnLCAnT2N0b2JyZScsICdOb3ZlbWJyZScsICdEw6ljZW1icmUnXTtcbiAgY29uc3Qgc3RyID0gZGF5c1tkLmdldERheSgpXSArICcgJyArIGQuZ2V0RGF0ZSgpICsgJyAnICsgbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIFAuJERBVEUuaHRtbChzdHIpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q291cnNlc1BvcnRyYWl0KGRheTogRXhwYW5kZWREYXkpIHtcbiAgY29uc3QgbWF0cml4ID0gY3JlYXRlTWF0cml4KCk7XG4gIGxldCBtYXhDb2x1bW4gPSAzO1xuICBmb3IgKGNvbnN0IGNvdXJzZSBvZiBkYXkpIHtcbiAgICBjb25zdCAkY291cnNlID0gJChQLmh0bWwuQ09VUlNFKTtcbiAgICBjb25zdCBwb3MgPSBnZXRFbXB0eVNwYWNlKG1hdHJpeCwgY291cnNlKTtcbiAgICAkY291cnNlLmNzcyh7XG4gICAgICAnZ3JpZC1yb3ctc3RhcnQnOiBwb3MueTEgKyBcIlwiLFxuICAgICAgJ2dyaWQtcm93LWVuZCc6IHBvcy55MiArIFwiXCIsXG4gICAgICAnZ3JpZC1jb2x1bW4tc3RhcnQnOiBwb3MueDEgKyAyICsgXCJcIixcbiAgICAgICdncmlkLWNvbHVtbi1lbmQnOiBwb3MueDIgKyAyICsgXCJcIlxuICAgIH0pO1xuICAgIG1heENvbHVtbiA9IE1hdGgubWF4KHBvcy54MiArIDIsIG1heENvbHVtbik7XG4gICAgaWYgKGNvdXJzZS5ibGFja2xpc3RlZCkgJGNvdXJzZS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICBlbHNlICRjb3Vyc2UuY3NzKCdiYWNrZ3JvdW5kJywgY291cnNlLmJhY2tncm91bmQpO1xuICAgIGlmIChjb3Vyc2UudW5hdmFpbGFibGUpICRjb3Vyc2UuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG5cbiAgICBjb25zdCAkdGV4dFdyYXBwZXIgPSAkKFAuaHRtbC5DT1VSU0VfQ09OVEVOVF9XUkFQUEVSKTtcbiAgICBjb25zdCAkdGV4dENvbnRlbnQgPSAkKFAuaHRtbC5DT1VSU0VfQ09OVEVOVCk7XG4gICAgJHRleHRDb250ZW50Lmh0bWwoY291cnNlLnRpdGxlKTtcbiAgICAkdGV4dFdyYXBwZXIuYXBwZW5kKCR0ZXh0Q29udGVudCk7XG4gICAgJGNvdXJzZS5hcHBlbmQoJHRleHRXcmFwcGVyKTtcbiAgICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkY291cnNlKTtcbiAgfVxuICAkKFAuJC5IT1VSX0xJTkVTKS5jc3MoJ2dyaWQtY29sdW1uLWVuZCcsIG1heENvbHVtbiArIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q291cnNlc0xhbmRzY2FwZShkYXk6IEV4cGFuZGVkRGF5LCBkYXlOdW1iZXI6IG51bWJlcikge1xuICBjb25zdCAkZGF5ID0gJChQLmh0bWwuTEFORFNDQVBFX0RBWSk7XG4gICRkYXkuY3NzKHtcbiAgICBncmlkQ29sdW1uOiBkYXlOdW1iZXIgKyAxICsgXCJcIixcbiAgfSk7XG4gIFAuJENPVVJTRV9DT05UQUlORVIuYXBwZW5kKCRkYXkpO1xuXG4gIGZvciAoY29uc3QgY291cnNlIG9mIGRheSkge1xuICAgIGlmIChjb3Vyc2UuYmxhY2tsaXN0ZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0ICRjb3Vyc2UgPSAkKFAuaHRtbC5DT1VSU0UpO1xuICAgIGlmIChjb3Vyc2UudW5hdmFpbGFibGUpICRjb3Vyc2UuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG5cbiAgICBjb25zdCBzdGFydFJvdyA9IChjb3Vyc2Uuc3RhcnQuaG91ciAtIFAuU1RBUlRfSE9VUikgKiA0ICsgY291cnNlLnN0YXJ0Lm1pbnV0ZSAvIDE1O1xuICAgIGNvbnN0IGVuZFJvdyA9IChjb3Vyc2UuZW5kLmhvdXIgLSBQLlNUQVJUX0hPVVIpICogNCArIGNvdXJzZS5lbmQubWludXRlIC8gMTU7XG4gICAgJGNvdXJzZS5jc3Moe1xuICAgICAgYmFja2dyb3VuZDogY291cnNlLmJhY2tncm91bmQsXG4gICAgICAnZ3JpZC1yb3ctc3RhcnQnOiBzdGFydFJvdyArIDEgKyBcIlwiLFxuICAgICAgJ2dyaWQtcm93LWVuZCc6IGVuZFJvdyArIDEgKyBcIlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCAkdGV4dFdyYXBwZXIgPSAkKFAuaHRtbC5DT1VSU0VfQ09OVEVOVF9XUkFQUEVSKTtcbiAgICBjb25zdCAkdGV4dENvbnRlbnQgPSAkKFAuaHRtbC5DT1VSU0VfQ09OVEVOVCk7XG4gICAgJHRleHRDb250ZW50Lmh0bWwoY291cnNlLnRpdGxlKTtcbiAgICAkdGV4dFdyYXBwZXIuYXBwZW5kKCR0ZXh0Q29udGVudCk7XG4gICAgJGNvdXJzZS5hcHBlbmQoJHRleHRXcmFwcGVyKTtcbiAgICAkZGF5LmFwcGVuZCgkY291cnNlKVxuICB9XG4gIGxhbmRzY2FwZVhhbGlnbigkZGF5KTtcbn1cblxudHlwZSBEcmF3TW9kZSA9ICdwb3J0cmFpdCcgfCAnbGFuZHNjYXBlJztcbmxldCBkcmF3TW9kZTogRHJhd01vZGUgPSAncG9ydHJhaXQnO1xuXG5mdW5jdGlvbiBzZXREcmF3TW9kZShtb2RlOiBEcmF3TW9kZSkge1xuICBkcmF3TW9kZSA9IG1vZGU7XG59XG5cbmZ1bmN0aW9uIGRyYXdMYW5kc2NhcGUoZGF0ZVN0cmluZzogc3RyaW5nLCBzdG9yYWdlPzogU3RvcmUpIHtcbiAgUC4kTEFORFNDQVBFX0NVUlJFTlRfREFZLmNzcygnZ3JpZC1jb2x1bW4nLCBEYXkuZGF5KGRhdGVTdHJpbmcpICsgMSArIFwiXCIpO1xuICBpZiAoc3RvcmFnZSkge1xuICAgIGRhdGVTdHJpbmcgPSBEYXkubW9uZGF5KGRhdGVTdHJpbmcpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNjsgaSsrKSB7XG4gICAgICBjb25zdCBkYXkgPSBleHBhbmREYXkoc3RvcmFnZVtkYXRlU3RyaW5nXSk7XG4gICAgICBkcmF3Q291cnNlc0xhbmRzY2FwZShkYXksIGkpO1xuICAgICAgZGF0ZVN0cmluZyA9IERheS5hZGQoZGF0ZVN0cmluZywgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdQb3J0cmFpdChkYXRlU3RyaW5nOiBzdHJpbmcsIHN0b3JhZ2U/OiBTdG9yZSkge1xuICBpZiAoc3RvcmFnZSkge1xuICAgIGNvbnN0IGRheSA9IGV4cGFuZERheShzdG9yYWdlW2RhdGVTdHJpbmddKTtcbiAgICBkcmF3Q291cnNlc1BvcnRyYWl0KGRheSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhdyhkYXRlU3RyaW5nOiBzdHJpbmcsIHN0b3JhZ2U/OiBTdG9yZSkge1xuICBOb3RpZmljYXRpb24uaGlkZSgnY2FsZW5kYXJFcnJvcicpO1xuICAkKFAuJC5DT1VSU0UpLnJlbW92ZSgpO1xuICAkKFAuJC5MQU5EU0NBUEVfREFZKS5yZW1vdmUoKTtcbiAgJChQLiRDQUxFTkRBUikucmVtb3ZlQ2xhc3MoJ3BvcnRyYWl0IGxhbmRzY2FwZScpLmFkZENsYXNzKGRyYXdNb2RlKTtcbiAgaWYgKGRyYXdNb2RlID09PSAnbGFuZHNjYXBlJykgZHJhd0xhbmRzY2FwZShkYXRlU3RyaW5nLCBzdG9yYWdlKTtcbiAgZWxzZSBkcmF3UG9ydHJhaXQoZGF0ZVN0cmluZywgc3RvcmFnZSk7XG4gIGRyYXdEYXRlKGRhdGVTdHJpbmcpO1xufVxuXG5kcmF3TGluZXMoKTtcblxuZXhwb3J0IGNvbnN0IENhbGVuZGFyRHJhd2VyID0ge1xuICBkcmF3OiBkcmF3LFxuICBzZXREcmF3TW9kZTogc2V0RHJhd01vZGVcbn1cbiIsImltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgSW5hcHBCcm93c2VyIH0gZnJvbSAnLi9pbmFwcGJyb3dzZXInXG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IE1pbmlmaWVkV2VlayB9IGZyb20gJy4vY2FsZW5kYXJEYXRhJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nUmVxdWVzdChmdW5jdGlvbk5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBzdHJpbmcge1xuICBjb25zdCBzdHJBcmdzID0gW11cbiAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgc3RyQXJncy5wdXNoKCdcIicgKyBhcmcgKyAnXCInKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBzdHJBcmdzLnB1c2goYXJnID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgc3RyQXJncy5wdXNoKGFyZy50b1N0cmluZygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCdyZXF1ZXN0IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSArICcoJyArIHN0ckFyZ3Muam9pbignLCcpICsgJyknO1xufVxuXG5pbnRlcmZhY2UgUmVxdWVzdE1hcCB7XG4gICdwYXJzZVRoaXNXZWVrJzogTWluaWZpZWRXZWVrO1xuICAnaXNXZWVrTG9hZGVkJzogYm9vbGVhbjtcbiAgJ2dldEN1cnJlbnREYXRlJzogc3RyaW5nO1xuICAnY2xpY2tCdXR0b24nOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gcmVxdWVzdDxUIGV4dGVuZHMga2V5b2YgUmVxdWVzdE1hcD4oZnVuY3Rpb25OYW1lOiBULCBhcmdzOiBhbnlbXSk6IFByb21pc2U8UmVxdWVzdE1hcFtUXT4ge1xuICBjb25zdCByZXEgPSBjcmVhdGVTdHJpbmdSZXF1ZXN0KGZ1bmN0aW9uTmFtZSwgYXJncyk7XG4gIHJldHVybiBJbmFwcEJyb3dzZXIuZXZhbChyZXEpO1xufVxuXG5mdW5jdGlvbiBwcm9taXNlVGltZW91dCh0aW1lb3V0OiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FpdFVudGlsPFQgZXh0ZW5kcyBrZXlvZiBSZXF1ZXN0TWFwPihmdW5jdGlvbk5hbWU6IFQsIGFyZ3M6IGFueVtdLCBleHBlY3RlZFJlc3VsdDogUmVxdWVzdE1hcFtUXSwgZnJlcXVlbmN5OiBudW1iZXIgPSBQLmNvbS5ERUZBVUxUX1VQREFURV9JTlRFUlZBTCkge1xuICBsZXQgaW50ZXJ2YWw6IG51bWJlcjtcblxuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICBmdW5jdGlvbiB0aGVuKHJlczogUmVxdWVzdE1hcFtUXSkge1xuICAgICAgaWYgKHJlcyA9PSBleHBlY3RlZFJlc3VsdCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBzZXRUaW1lb3V0KGluXywgZnJlcXVlbmN5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbl8oKSB7XG4gICAgICByZXF1ZXN0KGZ1bmN0aW9uTmFtZSwgYXJncylcbiAgICAgICAgLnRoZW4odGhlbilcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbl8oKTtcblxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlZWsoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGRhdGVTdHJpbmcgPSBEYXkubW9uZGF5KGRhdGVTdHJpbmcpO1xuICBhd2FpdCB3YWl0VW50aWwoJ2lzV2Vla0xvYWRlZCcsIFtdLCB0cnVlKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBhd2FpdCByZXF1ZXN0KCdnZXRDdXJyZW50RGF0ZScsIFtdKTtcblxuICBpZiAoY3VycmVudERhdGUgIT09IGRhdGVTdHJpbmcpIHsgLy8gbXVzdCBsb2FkIHdlZWsgYmVmb3JlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgnY2xpY2tCdXR0b24nLCBbZGF0ZVN0cmluZ10pXG4gICAgaWYgKCFyZXMpIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLkJVVFRPTl9OT1RfRk9VTkQpO1xuICAgIGVsc2UgYXdhaXQgcHJvbWlzZVRpbWVvdXQoUC5jb20uVElNRU9VVF9BRlRFUl9CVVRUT05fUFJFU1MpO1xuICAgIGF3YWl0IHdhaXRVbnRpbCgnZ2V0Q3VycmVudERhdGUnLCBbXSwgZGF0ZVN0cmluZyk7XG4gICAgYXdhaXQgd2FpdFVudGlsKCdpc1dlZWtMb2FkZWQnLCBbXSwgdHJ1ZSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KCdwYXJzZVRoaXNXZWVrJywgW10pXG4gIGNvbnNvbGUubG9nKCdyZWNlaXZlZCB3ZWVrJywgcmVzKTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGNvbnN0IENvbW11bmljYXRpb24gPSAoZnVuY3Rpb24oKSB7IC8vIGNvbW11bmljYXRpb24gd2l0aCB3ZWJ2aWV3XG5cbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0V2VlazogcmVxdWVzdFdlZWtcbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInXG5pbXBvcnQgQ2FsZW5kYXJFcnJvciBmcm9tICcuL2Vycm9yJ1xuXG5jb25zdCBtb250aHMgPSBbJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSddO1xuY29uc3Qgd2VlayA9IFsnTCcsICdNJywgJ00nLCAnSicsICdWJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgZHJhd25EYXRlID0gZGF0ZVN0cmluZztcbiAgUC4kREFURV9QSUNLRVIuaHRtbChcIlwiKTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vlaykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU5hbWVcIj4nICsgZGF5ICsgJzwvZGl2PicpXG4gIH1cblxuICBjb25zdCBtb250aCA9IERheS5tb250aChkYXRlU3RyaW5nKTtcbiAgbGV0IGRhdGUgPSBEYXkuZmlyc3REYXlPZk1vbnRoKGRhdGVTdHJpbmcpO1xuXG4gIFAuJERBVEVfUElDS0VSX01PTlRILmh0bWwobW9udGhzW21vbnRoXSk7XG5cbiAgY29uc3Qgb2Zmc2V0ID0gRGF5LmRheShkYXRlKSAtIDE7IC8vIGZyaS0+MSwgdGh1LT4yLCAuLi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXQ7IGkrKykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU51bWJlciBkaXNhYmxlZFwiPicgKyBEYXkuZGF0ZShkYXRlKSArICc8L2Rpdj4nKTtcbiAgfVxuXG4gIGNvbnN0IHRvZGF5ID0gRGF5LnRvZGF5KCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBDYWxlbmRhci5nZXRDdXJyZW50KCk7XG4gIHdoaWxlIChEYXkubW9udGgoZGF0ZSkgPT09IG1vbnRoKSB7XG4gICAgY29uc3QgJGVsID0gJCgnPGRpdiBjbGFzcz1cImRheU51bWJlclwiIGRhdGU9XCInICsgZGF0ZSArICdcIj4nICsgRGF5LmRhdGUoZGF0ZSkgKyAnPC9kaXY+Jyk7XG4gICAgaWYgKGRhdGUgPT09IGN1cnJlbnQpICRlbC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICBpZiAoZGF0ZSA9PT0gdG9kYXkpICRlbC5hZGRDbGFzcygndG9kYXknKTtcbiAgICAkZWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkYnRuID0gJCh0aGlzKTtcbiAgICAgICRidG4uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gJGJ0bi5hdHRyKCdkYXRlJyk7XG4gICAgICBpZihkYXRlU3RyaW5nKSBDYWxlbmRhci5kcmF3KGRhdGVTdHJpbmcpO1xuICAgICAgZWxzZSB0aHJvdyBuZXcgQ2FsZW5kYXJFcnJvcihcIm1pc3NpbmcgYXR0cmlidXRlICdkYXRlJyBvbiBkYXRlcGlja2VyIGJ1dHRvblwiKTtcbiAgICB9KVxuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgkZWwpO1xuICAgIGRhdGUgPSBEYXkuYWRkKGRhdGUsIDEpO1xuICB9XG59XG5cbmxldCBkcmF3bkRhdGU6IHN0cmluZztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgZHJhd25EYXRlID0gRGF5LnRvZGF5KCk7XG5cbiAgUC4kREFURV9QSUNLRVJfUFJFVi5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZHJhd25EYXRlKTtcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xuICAgIGNyZWF0ZShkLnRvRGF0ZVN0cmluZygpKTtcbiAgfSlcbiAgUC4kREFURV9QSUNLRVJfTkVYVC5jbGljayhmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZHJhd25EYXRlKTtcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNyZWF0ZShkLnRvRGF0ZVN0cmluZygpKTtcbiAgfSlcblxuICBQLiREQVRFX1BJQ0tFUl9DT05UQUlORVIuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICBpZiAoISR0YXJnZXQuaXMoUC4kREFURV9QSUNLRVJfUFJFVikgJiYgISR0YXJnZXQuaXMoUC4kREFURV9QSUNLRVJfTkVYVCkpIHtcbiAgICAgIFAuJERBVEVfUElDS0VSX0NPTlRBSU5FUi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuICB9KVxuXG59XG5pbml0KCk7XG5cbmV4cG9ydCBjb25zdCBEYXRlUGlja2VyID0ge1xuICBjcmVhdGU6IGNyZWF0ZVxufTtcbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5mdW5jdGlvbiBhZGREYXkoZDogRGF0ZSwgZGF5czogbnVtYmVyKSB7XG4gIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGRheXMpO1xuICBpZiAoZC5nZXREYXkoKSA9PT0gMCB8fCBkLmdldERheSgpID09PSA2KSB7XG4gICAgaWYgKGRheXMgPj0gMCkgYWRkRGF5KGQsIDEpO1xuICAgIGVsc2UgYWRkRGF5KGQsIC0xKTtcbiAgfVxuICByZXR1cm4gZDtcbn1cblxuZnVuY3Rpb24gdG9kYXkoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBpZiAoZGF0ZS5nZXRIb3VycygpID49IFAuVE9EQVlfTUFYX0hPVVIpIC8vIHNpIHBhc3PDqSBUT0RBWV9NQVhfSE9VUiwgcGFzc2UgYSBsZW5kZW1haW4gbWF0aW5cbiAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSArIDI0IC0gUC5UT0RBWV9NQVhfSE9VUiArIFAuU1RBUlRfSE9VUik7XG4gIGFkZERheShkYXRlLCAwKTsgLy8gZGltYW5jaGUgZGV2aWVudCBsdW5kaVxuICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbn1cblxuZXhwb3J0IGNvbnN0IERheSA9IChmdW5jdGlvbigpIHtcblxuICByZXR1cm4ge1xuICAgIHRvZGF5LFxuICAgIGRhdGU6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldERhdGUoKTtcbiAgICB9LFxuICAgIG1vbnRoOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKS5nZXRNb250aCgpO1xuICAgIH0sXG4gICAgZGF5OiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKS5nZXREYXkoKTtcbiAgICB9LFxuICAgIGZpcnN0TW9uZGF5T2ZNb250aDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBkLnNldERhdGUoMSk7XG4gICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgICAgY29uc3QgZGlmZiA9IGQuZ2V0RGF0ZSgpICsgKGRheSA9PSAwID8gMSA6IGRheSA9PSAxID8gMCA6IDcgLSBkYXkpO1xuICAgICAgZC5zZXREYXRlKGRpZmYpO1xuICAgICAgcmV0dXJuIGQudG9EYXRlU3RyaW5nKCk7XG4gICAgfSxcbiAgICBmaXJzdERheU9mTW9udGg6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgZC5zZXREYXRlKDEpO1xuICAgICAgYWRkRGF5KGQsIDApO1xuICAgICAgcmV0dXJuIGQudG9EYXRlU3RyaW5nKCk7XG4gICAgfSxcbiAgICBtb25kYXk6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT0gMCA/IC02IDogMSk7IC8vIGFkanVzdCB3aGVuIGRheSBpcyBzdW5kYXlcbiAgICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcsIGRheXM6IG51bWJlcikge1xuICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGFkZERheShkLCBkYXlzKTtcbiAgICAgIHJldHVybiBkLnRvRGF0ZVN0cmluZygpO1xuICAgIH1cbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIHRoaXMubmFtZSA9ICdDYWxlbmRhckVycm9yJztcblxuICAgIGlmKG1lc3NhZ2UpIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgY2FzZSBQLmVyci5DQUxFTkRBUl9FUlJPUjpcbiAgICAgIGNhc2UgUC5lcnIuV0VCVklFV19OT1RfTE9BREVEOlxuICAgICAgICBOb3RpZmljYXRpb24uc2hvdygnY2FsZW5kYXJFcnJvcicsIHsgZHVyYXRpb246IDMwMDAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFAuZXJyLkJVVFRPTl9OT1RfRk9VTkQ6XG4gICAgICAgIE5vdGlmaWNhdGlvbi5zaG93KCdkYXRlRXJyb3InLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBQLmVyci5SRVFVRVNUX0NBTkNFTExFRDpcbiAgICAgICAgY29uc29sZS53YXJuKCdBIHJlcXVlc3Qgd2FzIGNhbmNlbGxlZCcpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBOb3RpZmljYXRpb24uc2hvdygnbWFqb3JFcnJvcicpO1xuICAgICAgICBicmVhaztcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJ1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJ1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmF3ZXIgfSBmcm9tICcuL2NhbGVuZGFyRHJhd2VyJ1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnLi9kYXRlcGlja2VyJ1xuXG5mdW5jdGlvbiBldnRTY3JlZW5Ub3VjaCgpIHtcbiAgJChkb2N1bWVudC5ib2R5KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHNldCA9IFtlLnRhcmdldCwgLi4uJChlLnRhcmdldCkucGFyZW50cygpXTtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIHNldCkge1xuICAgICAgaWYgKChlbC5zY3JvbGxIZWlnaHQgPiBlbC5jbGllbnRIZWlnaHQgfHwgZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aCkgJiYgJChlbCkuY3NzKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgJChlbCkuYWRkQ2xhc3MoJ3RvdWNoZWQnKS5vbmUoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndG91Y2hlZCcpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBldnRPcmllbnRhdGlvbkNoYW5nZSgpIHtcbiAgY29uc3QgbGFuZHNjYXBlID0gKHNjcmVlbi5vcmllbnRhdGlvbi50eXBlLmluZGV4T2YoJ3BvcnRyYWl0JykgPT09IC0xKTtcbiAgQ2FsZW5kYXJEcmF3ZXIuc2V0RHJhd01vZGUobGFuZHNjYXBlID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnKTtcblxuICBmdW5jdGlvbiBvblNjcmVlbk9yaWVudENoYW5nZSgpIHtcbiAgICBjb25zdCBsYW5kc2NhcGUgPSAoc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUuaW5kZXhPZigncG9ydHJhaXQnKSA9PT0gLTEpO1xuICAgIENhbGVuZGFyRHJhd2VyLnNldERyYXdNb2RlKGxhbmRzY2FwZSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jyk7XG4gICAgQ2FsZW5kYXIuZHJhdyhDYWxlbmRhci5nZXRDdXJyZW50KCkpO1xuICB9XG4gIHNjcmVlbi5vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvblNjcmVlbk9yaWVudENoYW5nZSk7XG59XG5cbmZ1bmN0aW9uIGV2dFNldHRpbmdzQ2xpY2soKSB7XG4gIFAuJEJVVFRPTl9TRVRUSU5HUy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBTZXR0aW5ncy5zaG93KClcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIENhbGVuZGFyLmRyYXcoQ2FsZW5kYXIuZ2V0Q3VycmVudCgpKTsgLy8gcmVkcmF3IHdpdGggbmV3IGZpbHRlcnNcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2dFByZXZDbGljaygpIHtcbiAgUC4kQlVUVE9OX1BSRVYub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKFAuJEJVVFRPTl9QUkVWLmlzKCcuZGlzYWJsZWQnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGRheSA9IERheS5hZGQoQ2FsZW5kYXIuZ2V0Q3VycmVudCgpLCAtMSk7XG4gICAgQ2FsZW5kYXIuZHJhdyhkYXkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBQLiRDQUxFTkRBUl9DT05URU5ULnNjcm9sbFRvcCgwKS5zY3JvbGxMZWZ0KDApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXZ0TmV4dENsaWNrKCkge1xuICBQLiRCVVRUT05fTkVYVC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoUC4kQlVUVE9OX05FWFQuaXMoJy5kaXNhYmxlZCcpKSByZXR1cm47XG4gICAgY29uc3QgZGF5ID0gRGF5LmFkZChDYWxlbmRhci5nZXRDdXJyZW50KCksIDEpO1xuICAgIENhbGVuZGFyLmRyYXcoZGF5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgUC4kQ0FMRU5EQVJfQ09OVEVOVC5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2dERhdGVwaWNrZXJDbGljaygpIHtcbiAgUC4kREFURV9DT05UQUlORVIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgUC4kREFURV9QSUNLRVJfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBsZXQgZGF5OiBzdHJpbmc7XG4gICAgdHJ5IHtcbiAgICAgIGRheSA9IENhbGVuZGFyLmdldEN1cnJlbnQoKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGRheSA9IERheS50b2RheSgpO1xuICAgIH1cbiAgICBEYXRlUGlja2VyLmNyZWF0ZShkYXkpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBldnRHaWZzKCkge1xuICBsZXQgZ2lmUmVxdWVzdDogSlF1ZXJ5LmpxWEhSO1xuXG4gIFAuJEdJRl9DT05UQUlORVIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgUC4kR0lGX0NPTlRBSU5FUi5oaWRlKCk7XG4gICAgUC4kR0lGX0lNRy5hdHRyKCdzcmMnLCAnJyk7XG4gIH0pXG5cbiAgUC4kQ09VUlNFX0NPTlRBSU5FUi5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICBjb25zdCAkZWwgPSAkKGV2dC50YXJnZXQpO1xuICAgIGNvbnN0ICRjbGlja2VkR3JhZGUgPSAkZWwucGFyZW50cygpLmFkZCgkZWwpLmZpbHRlcihQLiQuQ09VUlNFKTtcbiAgICBpZiAoJGNsaWNrZWRHcmFkZS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHRleHQgPSAkY2xpY2tlZEdyYWRlLmZpbmQoJ2InKS5odG1sKCkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZ2lmUmVxdWVzdCkgZ2lmUmVxdWVzdC5hYm9ydCgpO1xuICAgIGdpZlJlcXVlc3QgPSAkLnBvc3QoUC5HSUZfVVJMX1BIUCwgeyB0ZXh0OiB0ZXh0IH0sIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIFAuJEdJRl9JTUcuYXR0cignc3JjJywgZGF0YSk7XG4gICAgICBQLiRHSUZfQ09OVEFJTkVSLnNob3coKTtcbiAgICB9KTtcbiAgfSlcbn1cblxubGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGlmKGluaXRpYWxpemVkKSByZXR1cm47XG4gIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICBldnRTY3JlZW5Ub3VjaCgpO1xuICBldnRPcmllbnRhdGlvbkNoYW5nZSgpO1xuICBldnRTZXR0aW5nc0NsaWNrKCk7XG4gIGV2dFByZXZDbGljaygpO1xuICBldnROZXh0Q2xpY2soKTtcbiAgZXZ0RGF0ZXBpY2tlckNsaWNrKCk7XG4gIGV2dEdpZnMoKTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IHtcbiAgaW5pdFxufVxuIiwiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBFeHBhbmRlZENvdXJzZSB9IGZyb20gJy4vY2FsZW5kYXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xuICBrZXk6IHN0cmluZztcbiAgZGlzcGxheTogc3RyaW5nO1xuICB2YXJpYWJsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9O1xuICBzdWJmaWx0ZXJzOiBGaWx0ZXJbXTtcbiAgd2hpdGVsaXN0Pzogc3RyaW5nW107XG4gIGJsYWNrbGlzdD86IHN0cmluZ1tdO1xufTtcblxubGV0IGxvYWRlZEZpbHRlcjogRmlsdGVyO1xubGV0IGZpbHRlck5hbWUgPSAnJztcblxuZnVuY3Rpb24gY2hlY2tMaXN0KGNvdXJzZTogRXhwYW5kZWRDb3Vyc2UsIGxpc3Q6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBjb3Vyc2UudGl0bGUuc3BsaXQoJzxicj4nKVxuICBmb3IgKGNvbnN0IGxpZ25lIG9mIGNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGxpc3QpIGlmIChleHByX3Rlc3QobGlnbmUsIGVsKSkgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGV4cHJfdGVzdChzdHI6IHN0cmluZywgZXhwcmVzc2lvbjogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50X3JlZ2V4ID0gL1xce1teXFx9XStcXH0vZ1xuICBjb25zdCBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZXBsYWNlbWVudF9yZWdleClcbiAgaWYgKG1hdGNoZXMpIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbWF0Y2gucmVwbGFjZSgneycsICcnKS5yZXBsYWNlKCd9JywgJycpXG4gICAgaWYgKFN0b3JhZ2UuaGFzKHZhcmlhYmxlKSkgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZShtYXRjaCwgU3RvcmFnZS5nZXQodmFyaWFibGUpKVxuICB9XG4gIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoZXhwcmVzc2lvbilcbiAgcmV0dXJuIHJlZ2V4cC50ZXN0KHN0cilcbn1cblxuZnVuY3Rpb24gZmV0Y2hKU09OKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxPYmplY3Q+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uKGpzb246IE9iamVjdCkge1xuICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICB9LCByZWplY3QpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRWxlbWVudChlbDogRXhwYW5kZWRDb3Vyc2UsIGZpbHRlciA9IGxvYWRlZEZpbHRlcik6IGJvb2xlYW4geyAvLyByZXR1cm5zIGJvb2wgYmxhY2tsaXN0ZWQgKHJlY3Vyc2l2ZSlcbiAgaWYgKCEoU3RvcmFnZS5oYXMoZmlsdGVyLmtleSkpIHx8IFN0b3JhZ2UuZ2V0KGZpbHRlci5rZXkpID09PSAnMCcpIHJldHVybiBmYWxzZTsgLy8gZmlsdHJlIGTDqXNhY3RpdsOpIG91IGluZXhpc3RhbnRcblxuICBpZihmaWx0ZXIud2hpdGVsaXN0ICYmIGZpbHRlci5ibGFja2xpc3QpIHtcbiAgICBsZXQgd2hpdGVsaXN0ZWQgPSBjaGVja0xpc3QoZWwsIGZpbHRlci53aGl0ZWxpc3QpO1xuICAgIGxldCBibGFja2xpc3RlZCA9IGNoZWNrTGlzdChlbCwgZmlsdGVyLmJsYWNrbGlzdCk7XG4gICAgaWYgKCF3aGl0ZWxpc3RlZCAmJiBibGFja2xpc3RlZCkgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGZpbHRlci5zdWJmaWx0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAoY29uc3Qgc3ViZmlsdGVyIG9mIGZpbHRlci5zdWJmaWx0ZXJzKSB7XG4gICAgICBpZiAoZmlsdGVyRWxlbWVudChlbCwgc3ViZmlsdGVyKSkgcmV0dXJuIHRydWU7IC8vIGEgw6l0w6kgYmxhY2tsaXN0w6lcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRmlsdGVyKG5hbWU6IHN0cmluZykge1xuICBpZiAobmFtZSA9PT0gZmlsdGVyTmFtZSAmJiBuYW1lICE9PSAnJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkZWRGaWx0ZXIpO1xuICBmaWx0ZXJOYW1lID0gbmFtZTtcbiAgbG9hZGVkRmlsdGVyID0gPEZpbHRlcj5hd2FpdCBmZXRjaEpTT04oJ2ZpbHRlcnMvJyArIGZpbHRlck5hbWUgKyAnLmpzb24nKTtcbiAgcmV0dXJuIGxvYWRlZEZpbHRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlciA9IHtcbiAgZmlsdGVyRWxlbWVudCxcbiAgbG9hZEZpbHRlcixcbiAgZ2V0IGxvYWRlZEZpbHRlcigpOiBGaWx0ZXIge1xuICAgIHJldHVybiBsb2FkZWRGaWx0ZXI7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xubGV0IHJlZjogSW5BcHBCcm93c2VyO1xuY29uc3Qgd2Vidmlld1JlZmVyZW5jZXM6IEluQXBwQnJvd3NlcltdID0gW107IC8vY29yZG92YSdzIGluYXBwYnJvd3NlciBoYXMgd2VpcmQgYmVoYXZpb3VyIHdoZW4gaXQgY29tZXMgdG8gY2xvc2luZyAvIG9wZW5pbmcgd2Vidmlld3MuLi5cbmxldCBjdXJyZW50VXJsOiBrZXlvZiB0eXBlb2YgUC51cmw7XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHQodGV4dFNjcmlwdDogc3RyaW5nKSB7XG4gIGNvbnN0IGNvbm5lY3RlZCA9IGF3YWl0IHByb21pc2VFeGVjdXRlKFAuY29tLkZVTkNUSU9OX0lTX0NPTk5FQ1RFRCk7XG5cbiAgaWYgKCFjb25uZWN0ZWQgJiYgbG9hZGVkKSB7XG4gICAgY29uc29sZS53YXJuKCdJbkFwcEJyb3dzZXIgaXMgZGlzY29ubmVjdGVkLCByZWxvYWRpbmcnKTtcbiAgICBOb3RpZmljYXRpb24uc2hvdygncmVzdGFydCcpOyAvLyBUT0RPIHJlbmFtZSB0byByZWxvYWRcbiAgICBhd2FpdCByZWxvYWQoKTtcbiAgICBOb3RpZmljYXRpb24uaGlkZSgncmVzdGFydCcpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgcHJvbWlzZUV4ZWN1dGUodGV4dFNjcmlwdCk7XG5cbiAgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdwYWNrZXRpZmllZCcgaW4gcmVzICYmIHJlcy5wYWNrZXRpZmllZCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB1bnBhY2soKTtcbiAgfVxuICBlbHNlIHJldHVybiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVucGFjaygpIHtcbiAgbGV0IHBhY2tldHMgPSAnJztcbiAgbGV0IHBhY2tldDtcblxuICBkbyB7XG4gICAgcGFja2V0ID0gYXdhaXQgcHJvbWlzZUV4ZWN1dGUoJ2dldFBhY2tldCgpJyk7XG4gICAgaWYgKHBhY2tldCkgcGFja2V0cyArPSBwYWNrZXQ7XG4gIH0gd2hpbGUgKHBhY2tldCk7XG5cbiAgbGV0IG9iajtcbiAgdHJ5IHtcbiAgICBvYmogPSBKU09OLnBhcnNlKHBhY2tldHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gcmVzb2x2ZSBwYWNrZXRzOicsIHBhY2tldHMpO1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoUC5lcnIuQ0FMRU5EQVJfRVJST1IpO1xuICB9XG4gIGNvbnNvbGUubG9nKCdyZXNvbHZlZCBwYWNrZXQgOicsIG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHByb21pc2VFeGVjdXRlKHRleHRTY3JpcHQ6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8YW55PihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWxvYWRlZCkgcmVqZWN0KG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLldFQlZJRVdfTk9UX0xPQURFRCkpO1xuICAgIGVsc2Uge1xuICAgICAgcmVmLmV4ZWN1dGVTY3JpcHQoeyBjb2RlOiB0ZXh0U2NyaXB0IH0sIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdFswXSk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RpbWVvdXQgZXJyJykpO1xuICAgICAgfSwgUC5JTkFQUEJST1dTRVJfRVhFQ1VURV9USU1FT1VUKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaFNjcmlwdCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZXJyb3I6IHJlamVjdFxuICAgIH0pO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVsb2FkKCkge1xuICBjb25zb2xlLmxvZygncmVsb2FkaW5nIEluQXBwQnJvd3NlcicpO1xuICBpZihyZWYpIHJlZi5jbG9zZSgpO1xuICBhd2FpdCBsb2FkKGN1cnJlbnRVcmwpO1xuICBhd2FpdCBpbmplY3RTY3JpcHQoKTtcbiAgY29uc29sZS5sb2coJ3JlbG9hZCBkb25lLicpO1xufVxuXG5mdW5jdGlvbiBrZXlJc1ZhbGlkKHVybEtleTogc3RyaW5nKTogdXJsS2V5IGlzIGtleW9mIHR5cGVvZiBQLnVybCB7XG4gIHJldHVybiB1cmxLZXkgaW4gUC51cmw7XG59XG5cbmZ1bmN0aW9uIGxvYWQodXJsS2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChrZXlJc1ZhbGlkKHVybEtleSkpIHtcbiAgICAgIGN1cnJlbnRVcmwgPSB1cmxLZXk7XG4gICAgICB3ZWJ2aWV3UmVmZXJlbmNlcy5wdXNoKGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4oUC51cmxbdXJsS2V5XSwgJ19ibGFuaycsIFAuSU5BUFBCUk9XU0VSX1NFVFRJTkdTKSk7XG4gICAgICByZWYgPSB3ZWJ2aWV3UmVmZXJlbmNlc1t3ZWJ2aWV3UmVmZXJlbmNlcy5sZW5ndGggLSAxXTtcbiAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RvcCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5hcHBicm93ZXIgbG9hZGVkJyk7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHJlamVjdChuZXcgRXJyb3IoJ3VybCBrZXkgbm90IHJlY29nbml6ZWQnKSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7XG4gIGNvbnN0IGluamVjdGlvbiA9IGZldGNoU2NyaXB0KFAuc2NyaXB0LklOSkVDVElPTik7XG4gIGNvbnN0IGpxdWVyeSA9IGZldGNoU2NyaXB0KFAuc2NyaXB0LkpRVUVSWSk7XG5cbiAgY29uc3QganF1ZXJ5VGV4dCA9IGF3YWl0IGpxdWVyeTtcbiAgYXdhaXQgcHJvbWlzZUV4ZWN1dGUoanF1ZXJ5VGV4dCk7XG4gIGNvbnN0IGluamVjdGlvblRleHQgPSBhd2FpdCBpbmplY3Rpb247XG4gIGF3YWl0IHByb21pc2VFeGVjdXRlKGluamVjdGlvblRleHQpO1xufVxuXG5leHBvcnQgY29uc3QgSW5hcHBCcm93c2VyID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgcmVsb2FkOiByZWxvYWQsXG4gICAgbG9hZDogbG9hZCxcbiAgICBpbmplY3RTY3JpcHQ6IGluamVjdFNjcmlwdCxcbiAgICBldmFsOiBleGVjdXRlU2NyaXB0LFxuICAgIGdldFJlZmVyZW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVmO1xuICAgIH1cbiAgfVxuXG59KSgpO1xuIiwiaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5cbmV4cG9ydCB2YXIgTmV0d29yayA9IChmdW5jdGlvbigpIHtcblxuICB2YXIgc3RhdGUgPSAnb25saW5lJztcblxuICBmdW5jdGlvbiBvZmZsaW5lKCkge1xuICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3Igbm93IG9mZmxpbmUnKTtcbiAgICBzdGF0ZSA9ICdvZmZsaW5lJztcbiAgICBOb3RpZmljYXRpb24uaGlkZSgnb25saW5lJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ29mZmxpbmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubGluZSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdG9yIG5vdyBvbmxpbmUnKTtcbiAgICBzdGF0ZSA9ICdvbmxpbmUnO1xuICAgIE5vdGlmaWNhdGlvbi5oaWRlKCdvZmZsaW5lJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ29ubGluZScsIHsgZHVyYXRpb246IDE1MDAgfSk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgb2ZmbGluZSwgZmFsc2UpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCBvbmxpbmUsIGZhbHNlKTtcblxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAobmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSA9PT0gQ29ubmVjdGlvbi5OT05FICYmIHN0YXRlID09PSAnb25saW5lJykgb2ZmbGluZSgpO1xuICAgIGlmIChuYXZpZ2F0b3IuY29ubmVjdGlvbi50eXBlICE9PSBDb25uZWN0aW9uLk5PTkUgJiYgc3RhdGUgPT09ICdvZmZsaW5lJykgb25saW5lKCk7XG4gIH0sIDEwMDApO1xuXG4gIHJldHVybiB7XG4gICAgd2hlbk9ubGluZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc3RhdGUgPT09ICdvbmxpbmUnIHx8IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgIT09IENvbm5lY3Rpb24uTk9ORSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ29ubGluZScgfHwgbmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSAhPT0gQ29ubmVjdGlvbi5OT05FKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQgb25saW5lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSAnb25saW5lJztcbiAgICB9LFxuICAgIGdldCBvZmZsaW5lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSAnb2ZmbGluZSc7XG4gICAgfVxuICB9XG5cbn0pKCk7XG4iLCJ2YXIgdGltZW91dHM6IHsgW2tleTogc3RyaW5nXSA6IG51bWJlcn0gPSB7fTtcblxuaW50ZXJmYWNlIHNob3dTZXR0aW5ncyB7XG4gIGR1cmF0aW9uOiBmYWxzZSB8IG51bWJlcjtcbn1cblxudHlwZSBOb3RpZmljYXRpb24gPSAnbWFqb3JFcnJvcicgfCAnY2FsZW5kYXJFcnJvcicgfCAnZGF0ZUVycm9yJyB8ICdyZXN0YXJ0JyB8ICdvZmZsaW5lJyB8ICdvbmxpbmUnIHwgJ2xvYWRpbmcnO1xuXG5mdW5jdGlvbiBzaG93KG5vdGlmTmFtZTogTm90aWZpY2F0aW9uLCB7IGR1cmF0aW9uID0gZmFsc2UgfTogUGFydGlhbDxzaG93U2V0dGluZ3M+ID0ge30pIHtcbiAgY29uc29sZS5kZWJ1Zygnbm90aWZpY2F0aW9uOicsIG5vdGlmTmFtZSk7XG4gIGlmIChub3RpZk5hbWUgaW4gdGltZW91dHMpIGNsZWFyVGltZW91dCh0aW1lb3V0c1tub3RpZk5hbWVdKTtcbiAgJCgnLm5vdGlmaWNhdGlvbiMnICsgbm90aWZOYW1lKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIGlmIChkdXJhdGlvbiAmJiBkdXJhdGlvbiA+IDApIHtcbiAgICB0aW1lb3V0c1tub3RpZk5hbWVdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICQoJy5ub3RpZmljYXRpb24jJyArIG5vdGlmTmFtZSkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKG5vdGlmTmFtZTogc3RyaW5nKSB7XG4gIGlmIChub3RpZk5hbWUgaW4gdGltZW91dHMpIGNsZWFyVGltZW91dCh0aW1lb3V0c1tub3RpZk5hbWVdKTtcbiAgJCgnLm5vdGlmaWNhdGlvbiMnICsgbm90aWZOYW1lKS5hZGRDbGFzcygnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCB2YXIgTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgc2hvdzogc2hvdyxcbiAgICBoaWRlOiBoaWRlXG4gIH07XG5cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgUHJveHkgPSB7XG5cbiAgLy8gQVBQX1ZFUlNJT046IDEwMDYwLFxuICBTVE9SQUdFX1ZFUlNJT046ICc5JyxcblxuICAkQ0FMRU5EQVI6ICQoJyNjYWxlbmRhcicpLFxuICAkQ0FMRU5EQVJfQ09OVEVOVDogJCgnI2NhbGVuZGFyIC5jb250ZW50JyksXG5cbiAgJExBTkRTQ0FQRV9DVVJSRU5UX0RBWTogJCgnI2xhbmRzY2FwZUN1cnJlbnREYXknKSxcblxuICAkQ09VUlNFX0NPTlRBSU5FUjogJCgnI2hldXJlcycpLFxuXG4gICREQVRFX0NPTlRBSU5FUjogJCgnbmF2IGRpdicpLFxuICAkREFURTogJCgnbmF2IHNwYW4nKSxcblxuICAkREFURV9QSUNLRVJfQ09OVEFJTkVSOiAkKCcjZGF0ZVBpY2tlcicpLFxuICAkREFURV9QSUNLRVI6ICQoJyNkYXRlUGlja2VyIC5kYXRlcycpLFxuICAkREFURV9QSUNLRVJfUFJFVjogJCgnI2RhdGVQaWNrZXIgLnByZXYnKSxcbiAgJERBVEVfUElDS0VSX05FWFQ6ICQoJyNkYXRlUGlja2VyIC5uZXh0JyksXG4gICREQVRFX1BJQ0tFUl9NT05USDogJCgnI2RhdGVQaWNrZXIgLm1vbnRoJyksXG5cbiAgJEJVVFRPTl9QUkVWOiAkKCcudmVpbGxlJyksXG4gICRCVVRUT05fTkVYVDogJCgnLmxlbmRlbWFpbicpLFxuICAkQlVUVE9OX1NFVFRJTkdTOiAkKCdidXR0b24uc2V0dGluZ3MnKSxcblxuICAkU0VUVElOR1NfQ09OVEFJTkVSOiAkKCcjc2V0dGluZ3MnKSxcbiAgJFNFVFRJTkdTX0ZJTFRFUjogJCgnI3NldHRpbmdzIC5maWx0ZXJzJyksXG4gICRTRVRUSU5HU19BUFBFQVJBTkNFOiAkKCcjc2V0dGluZ3MgLmFwcGVhcmFuY2UnKSxcbiAgJFNFVFRJTkdTX0NBTkNFTDogJCgnI3NldHRpbmdzIC5jYW5jZWwnKSxcbiAgJFNFVFRJTkdTX1NBVkU6ICQoJyNzZXR0aW5ncyAuc2F2ZScpLFxuICAkU0VUVElOR1NfUkVTRVQ6ICQoJyNzZXR0aW5ncyAucmVzZXQnKSxcbiAgJFNFVFRJTkdTX1RIRU1FOiAkKCcjc2V0dGluZ3MgLnRoZW1lJyksXG4gICRTRVRUSU5HU19HUkFERTogJCgnLmNsYXNzZURyb3BEb3duJyksXG5cbiAgJEFCT1VUX0NPTlRBSU5FUjogJCgnI2Fib3V0JyksXG5cbiAgJFRIRU1FX1NUWUxFU0hFRVQ6ICQoJyN0aGVtZVN0eWxlc2hlZXQnKSxcblxuICAkR0lGX0NPTlRBSU5FUjogJCgnI2dpZi1jb250YWluZXInKSxcbiAgJEdJRl9JTUc6ICQoJyNnaWYtY29udGFpbmVyIGltZycpLFxuXG4gIElOQVBQQlJPV1NFUl9TRVRUSU5HUzogJ2xvY2F0aW9uPW5vLHpvb209bm8saGlkZGVuPXllcyxzaG91bGRQYXVzZU9uU3VzcGVuZD1ubycsXG4gIElOQVBQQlJPV1NFUl9FWEVDVVRFX1RJTUVPVVQ6IDUwMDAsXG5cbiAgR0lGX1VSTDogJ2h0dHBzOi8vcG9seXRlY2gudGhpc3NtYS5mci9naWZzLycsXG4gIEdJRl9VUkxfUEhQOiAnaHR0cHM6Ly9wb2x5dGVjaC50aGlzc21hLmZyL25pY2VnaWYucGhwJyxcblxuICBTVEFSVF9IT1VSOiA4LFxuICBFTkRfSE9VUjogMjAsXG5cbiAgVE9EQVlfTUFYX0hPVVI6IDIxLFxuXG4gICQ6IHtcbiAgICBDT1VSU0U6ICcuY2xhc3NlJyxcbiAgICBMQU5EU0NBUEVfREFZOiAnI2hldXJlcyAuZGF5JyxcbiAgICBIT1VSX0xJTkVTOiAnI2hldXJlcyAubGlnbmUnLFxuICAgIFNFVFRJTkdTX0ZJTFRFUjogJyNzZXR0aW5ncyAuZmlsdHJlJ1xuICB9LFxuXG4gIGVycjoge1xuICAgIEJVVFRPTl9OT1RfRk9VTkQ6ICdidXR0b24gbm90IGZvdW5kJyxcbiAgICBXRUJWSUVXX05PVF9MT0FERUQ6ICd3ZWJ2aWV3IG5vdCBsb2FkZWQnLFxuICAgIFJFUVVFU1RfQ0FOQ0VMTEVEOiAncmVxdWVzdCBjYW5jZWxsZWQnLFxuICAgIENBTEVOREFSX0VSUk9SOiAnY2FsZW5kYXIgZXJyb3InXG4gIH0sXG5cbiAgaHRtbDoge1xuICAgIEhPVVI6ICc8ZGl2IGNsYXNzPVwiaGV1cmVcIj48L2Rpdj4nLFxuICAgIEhPVVJfTElORTogJzxkaXYgY2xhc3M9XCJsaWduZVwiPjwvZGl2PicsXG4gICAgQ09VUlNFOiAnPGRpdiBjbGFzcz1cImNsYXNzZVwiPjwvZGl2PicsXG4gICAgQ09VUlNFX0NPTlRFTlRfV1JBUFBFUjogJzxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+PC9kaXY+JyxcbiAgICBDT1VSU0VfQ09OVEVOVDogJzxkaXYgY2xhc3M9XCJjb250ZW50XCI+PC9kaXY+JyxcbiAgICBMQU5EU0NBUEVfREFZOiAnPGRpdiBjbGFzcz1cImRheVwiPjwvZGl2PicsXG4gICAgU0VUVElOR1NfQ0hFQ0tCT1g6ICc8aW5wdXQgdHlwZT1jaGVja2JveCBjaGVja2VkLz4nLFxuICB9LFxuXG4gIHN0b3JhZ2U6IHtcbiAgICBHUkFERTogJ2NsYXNzZScsXG4gICAgU0FWRURfREFZUzogJ2RheXNDYWNoZScsXG4gICAgVEhFTUU6ICd0aGVtZScsXG4gICAgVkVSU0lPTjogJ3ZlcnNpb24nLFxuICAgIEFDS05PV0xFREdFRDogJ2FjaydcbiAgfSxcblxuICBkYXk6IHtcbiAgICBNT046IDEsIFRVRTogMiwgV0VEOiAzLCBUSFU6IDQsIEZSSTogNSwgU0FUOiA2LCBTVU46IDAsXG4gIH0sXG5cbiAgc2NyaXB0OiB7XG4gICAgSU5KRUNUSU9OOiAnaW5qZWN0aW9uLmpzJyxcbiAgICBKUVVFUlk6ICdqcXVlcnkuanMnXG4gIH0sXG5cbiAgZGlyOiB7XG4gICAgVEhFTUVTOiAnY3NzL3RoZW1lcy8nXG4gIH0sXG5cbiAgY29tOiB7XG4gICAgVElNRU9VVF9BRlRFUl9CVVRUT05fUFJFU1M6IDIwMCxcbiAgICBERUZBVUxUX1VQREFURV9JTlRFUlZBTDogMjAwLFxuICAgIEZVTkNUSU9OX0lTX0NPTk5FQ1RFRDogJ2lzQ29ubmVjdGVkKCknXG4gIH0sXG5cbiAgdGhlbWU6IHtcbiAgICBERUZBVUxUOiAnZGVmYXVsdCdcbiAgfSxcblxuICB1cmw6IHtcbiAgICAncGVpcDEnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4Zjg3YTk4ODJlNzRhM2Y3NmUwYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAncGVpcDInOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhlNzQ4NWQ5YmVlMmM4NGRiYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAncGVpcGMnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4Zjg3YjAzNWViZjI3MmE2YWRmYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnZXQzJzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4YTI5NmEyZmZiMDAzN2Q1YmI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2V0NCc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGYwNGY0YTZiOTBlMTdmNzFiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdldDUnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhjOGRmNDFhMGE3ZWY0OGY3Yjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnYXBwMyc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGIwZGEwMWQ5ODY2YzZiMDZiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdhcHA0JzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4MjRmMWVjY2U2OTgwMzlmM2I3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2FwcDUnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjgzZWZhY2YzMzY0YjM1MjNmYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgfSxcbn1cbiIsImltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyRHJhd2VyIH0gZnJvbSAnLi9jYWxlbmRhckRyYXdlcic7XG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSc7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSc7XG5pbXBvcnQgQ2FsZW5kYXJFcnJvciBmcm9tICcuL2Vycm9yJ1xuXG5mdW5jdGlvbiBkb21BZGRGaWVsZChmaWx0ZXI6IEZpbHRlciwgJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgeyAvLyBjYW4gYmUgcmVjdXJzaXZlXG4gIGZvciAoY29uc3QgZmlsdHJlIG9mIGZpbHRlci5zdWJmaWx0ZXJzKSB7IC8vIFRPRE8gbm9tbWFnZSB2YXJpYWJsZXNcbiAgICBjb25zdCAkZmlsdHJlID0gJCgnPGRpdi8+Jyk7XG4gICAgJGZpbHRyZS5kYXRhKCdrZXknLCBmaWx0cmUua2V5KTtcbiAgICAkZmlsdHJlLmFkZENsYXNzKCdlbGVtZW50IGZpbHRyZScpO1xuICAgIGNvbnN0ICRjaGVjayA9ICQoUC5odG1sLlNFVFRJTkdTX0NIRUNLQk9YKTtcbiAgICAkY2hlY2suY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJGNoZWNrID0gJChlLnRhcmdldCk7XG4gICAgICBpZiAoJGNoZWNrLmlzKCc6Y2hlY2tlZCcpKSAkY2hlY2suc2libGluZ3MoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIGVsc2UgJGNoZWNrLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgJGxhYmVsID0gJCgnPGxhYmVsLz4nKTtcbiAgICAkbGFiZWwuaHRtbChmaWx0cmUuZGlzcGxheSk7XG4gICAgY29uc3QgJGRyb3Bkb3duID0gJCgnPHNlbGVjdC8+Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGZpbHRyZS52YXJpYWJsZSkge1xuICAgICAgbGV0IG9wdGlvbiA9IGluZGV4O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdHJlLnZhcmlhYmxlKSkgb3B0aW9uID0gZmlsdHJlLnZhcmlhYmxlW2luZGV4XTtcbiAgICAgICRkcm9wZG93bi5hcHBlbmQoJCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBmaWx0cmUudmFyaWFibGVbaW5kZXhdICsgJ1wiLz4nKS5odG1sKG9wdGlvbikpO1xuICAgIH1cbiAgICAkZmlsdHJlLmFwcGVuZCgkY2hlY2spLmFwcGVuZCgkbGFiZWwpLmFwcGVuZCgkZHJvcGRvd24pO1xuICAgICRwYXJlbnQuYXBwZW5kKCRmaWx0cmUpO1xuICAgIGlmICgnc3ViZmlsdGVycycgaW4gZmlsdHJlKSBkb21BZGRGaWVsZChmaWx0cmUsICRmaWx0cmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U2V0dGluZ3MoKSB7XG4gIGZvciAoY29uc3QgZG9tRmlsdHJlIG9mICQoUC4kLlNFVFRJTkdTX0ZJTFRFUikpIHtcbiAgICBjb25zdCAkZmlsdHJlID0gJChkb21GaWx0cmUpO1xuICAgIGNvbnN0IGtleSA9ICRmaWx0cmUuZGF0YSgna2V5Jyk7XG4gICAgaWYgKCRmaWx0cmUuY2hpbGRyZW4oJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD4kZmlsdHJlLmNoaWxkcmVuKCdzZWxlY3QnKS5nZXQoMCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIFN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIFN0b3JhZ2Uuc2V0KGtleSwgJzAnKTtcbiAgICB9XG4gIH1cbiAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLmFkZENsYXNzKCdoaWRkZW4nKTtcbn1cblxuXG5mdW5jdGlvbiBzZXRDdXJyZW50U2V0dGluZ3MoKSB7XG5cbiAgaWYgKFN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5HUkFERSkpIHtcbiAgICBQLiRTRVRUSU5HU19HUkFERS52YWwoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gIH1cbiAgaWYgKFN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5USEVNRSkpIHtcbiAgICBQLiRTRVRUSU5HU19USEVNRS52YWwoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlRIRU1FKSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGZpbHRlciBvZiAkKFAuJC5TRVRUSU5HU19GSUxURVIpKSB7XG4gICAgY29uc3QgJGZpbHRlciA9ICQoZmlsdGVyKTtcbiAgICBjb25zdCBrZXkgPSAkZmlsdGVyLmRhdGEoJ2tleScpO1xuICAgIGlmIChTdG9yYWdlLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCAkc2VsZWN0ID0gJGZpbHRlci5jaGlsZHJlbignc2VsZWN0Jyk7XG4gICAgICBjb25zdCB2YWwgPSBTdG9yYWdlLmdldChrZXkpO1xuICAgICAgaWYgKHZhbCA9PT0gJzAnKSB7XG4gICAgICAgIGNvbnN0ICRjaGVjayA9ICRmaWx0ZXIuY2hpbGRyZW4oJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgIGlmICgkY2hlY2subGVuZ3RoID09PSAxKSAkY2hlY2sudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH1cbiAgICAgIGlmICgkc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24nKS5pcygnW3ZhbHVlPVwiJyArIHZhbCArICdcIl0nKSkge1xuICAgICAgICAkc2VsZWN0LnZhbCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRE9NKGZpbHRlcjogRmlsdGVyKSB7XG4gIFAuJFNFVFRJTkdTX0ZJTFRFUi5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICBkb21BZGRGaWVsZChmaWx0ZXIsIFAuJFNFVFRJTkdTX0ZJTFRFUik7XG59XG5cbmZ1bmN0aW9uIHNob3coeyBjYW5jZWxEaXNhYmxlZCA9IGZhbHNlIH0gPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICBQLiRTRVRUSU5HU19DT05UQUlORVIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGlmIChjYW5jZWxEaXNhYmxlZCkgUC4kU0VUVElOR1NfQ0FOQ0VMLmhpZGUoKTtcbiAgICBlbHNlIFAuJFNFVFRJTkdTX0NBTkNFTC5zaG93KCk7XG5cbiAgICBQLiRTRVRUSU5HU19DQU5DRUwub25lKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxuXG4gICAgUC4kU0VUVElOR1NfU0FWRS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBhcHBseVNldHRpbmdzKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIVN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5HUkFERSkpIHtcbiAgICAgIFAuJFNFVFRJTkdTX1NBVkUuaGlkZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIFAuJFNFVFRJTkdTX1NBVkUuc2hvdygpO1xuXG4gICAgRmlsdGVyLmxvYWRGaWx0ZXIoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkRE9NKEZpbHRlci5sb2FkZWRGaWx0ZXIpO1xuICAgICAgICBzZXRDdXJyZW50U2V0dGluZ3MoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59XG5cblxuUC4kU0VUVElOR1NfR1JBREUuY2hhbmdlKGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VsID0gUC4kU0VUVElOR1NfR1JBREUuY2hpbGRyZW4oKS5maWx0ZXIoJzpjaGVja2VkJyk7XG4gIGNvbnN0IHZhbCA9ICRzZWwuYXR0cigndmFsdWUnKTtcbiAgaWYodmFsKSBTdG9yYWdlLnNldChQLnN0b3JhZ2UuR1JBREUsIHZhbCk7XG4gIGVsc2UgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoXCJtaXNzaW5nIGF0dHJpYnV0ZSAndmFsdWUnIG9uIHNldHRpbmdzIGVsZW1lbnRcIik7XG5cbiAgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLlNBVkVEX0RBWVMsICcnKTtcbiAgQ2FsZW5kYXIuaW5pdCgpO1xuICBDYWxlbmRhckRyYXdlci5kcmF3KERheS50b2RheSgpKTsgLy8gZGVsZXRlIGN1cnJlbnRseSBkcmF3biBjb3Vyc2VzXG5cbiAgUC4kU0VUVElOR1NfU0FWRS5oaWRlKCk7XG4gIFAuJFNFVFRJTkdTX0NBTkNFTC5oaWRlKCk7XG4gIFAuJFNFVFRJTkdTX0ZJTFRFUi5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gIGF3YWl0IENhbGVuZGFyLmZpbmlzaFJlcXVlc3QoKTsgLy8gZG9uJ3QgdW5sb2FkIGJyb3dzZXIgd2hpbGUgYSByZXF1ZXN0IGlzIHBlbmRpbmcgIVxuICBhd2FpdCBGaWx0ZXIubG9hZEZpbHRlcihTdG9yYWdlLmdldChQLnN0b3JhZ2UuR1JBREUpKTtcbiAgYXdhaXQgQXBwLnJlc3RhcnRJbmFwcEJyb3dzZXIoKTtcblxuICBsb2FkRE9NKEZpbHRlci5sb2FkZWRGaWx0ZXIpO1xuICBhd2FpdCBDYWxlbmRhci5kcmF3KERheS50b2RheSgpKTtcbiAgUC4kU0VUVElOR1NfU0FWRS5zaG93KCk7XG59KTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgU2V0dGluZ3MgPSAoZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBjYWxsYmFja09uY2U6IGZ1bmN0aW9uKCkgeyB9LFxuICAgIGxvYWRET006IGxvYWRET00sXG4gICAgc2hvdzogc2hvd1xuICB9O1xuXG59KSgpO1xuIiwiaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuXG4gIGlmIChTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuVkVSU0lPTikgJiYgU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlZFUlNJT04pICE9PSBQLlNUT1JBR0VfVkVSU0lPTikge1xuICAgIGFsZXJ0KCdMXFwnYXBwbGkgw6Agw6l0w6kgbWlzZSDDoCBqb3VyICEnKTtcbiAgICBTdG9yYWdlLmNsZWFyKCk7XG4gIH1cblxuICAvLyBzaG93IHdlbGNvbWUgZGlhbG9nIChkaXNhYmxlZCBmZWF0dXJlIGZvciBub3cuLi4pXG4gIGlmICghU3RvcmFnZS5oYXMoUC5zdG9yYWdlLkFDS05PV0xFREdFRCkpIHtcbiAgICAvLyBQLiRBQk9VVF9DT05UQUlORVIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIFN0b3JhZ2Uuc2V0KFAuc3RvcmFnZS5BQ0tOT1dMRURHRUQsICcxJyk7XG4gIH1cblxuICBpZiAoIVN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5WRVJTSU9OKSkge1xuICAgIFN0b3JhZ2UuY2xlYXIoKVxuICAgIGF3YWl0IFNldHRpbmdzLnNob3coeyBjYW5jZWxEaXNhYmxlZDogdHJ1ZSB9KTtcbiAgICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuVkVSU0lPTiwgUC5TVE9SQUdFX1ZFUlNJT04pO1xuICAgIFN0b3JhZ2Uuc2V0KCdyb290JywgJzEnKTsgLy8gVE9ET1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTdG9yYWdlID0ge1xuICBpbml0LFxuICBzZXQ6IGZ1bmN0aW9uKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZykge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbCk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlW2tleV07XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5IGluIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0sXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXG5pbXBvcnQgQ2FsZW5kYXJFcnJvciBmcm9tICcuL2Vycm9yJ1xuXG5mdW5jdGlvbiBzZXQodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKHRoZW1lTmFtZSkge1xuICAgIFAuJFRIRU1FX1NUWUxFU0hFRVQuYXR0cignaHJlZicsIFAuZGlyLlRIRU1FUyArIHRoZW1lTmFtZSArICcuY3NzJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgUC4kVEhFTUVfU1RZTEVTSEVFVC5hdHRyKCdocmVmJywgUC5kaXIuVEhFTUVTICsgUC50aGVtZS5ERUZBVUxUICsgJy5jc3MnKTtcbiAgfVxufVxuXG5QLiRTRVRUSU5HU19USEVNRS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzZWwgPSBQLiRTRVRUSU5HU19USEVNRS5jaGlsZHJlbigpLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgY29uc3QgdmFsID0gJHNlbC5hdHRyKCd2YWx1ZScpO1xuICBpZih2YWwpIHtcbiAgICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuVEhFTUUsIHZhbCk7XG4gICAgc2V0KHZhbCk7XG4gIH1cbiAgZWxzZSB0aHJvdyBuZXcgQ2FsZW5kYXJFcnJvcihcIm1pc3NpbmcgYXR0cmlidXRlICd2YWx1ZScgb24gc2V0dGluZ3MgZWxlbWVudFwiKTtcbn0pXG5cblxuZXhwb3J0IGNvbnN0IFRoZW1lID0ge1xuICBzZXRcbn07XG4iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL1YzL2FwcCc7XG5cbkFwcC5pbml0KCk7XG4iLCIvKiEgalF1ZXJ5IHYzLjIuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZixmPWMuc2xpY2UsZz1jLmNvbmNhdCxoPWMucHVzaCxpPWMuaW5kZXhPZixqPXt9LGs9ai50b1N0cmluZyxsPWouaGFzT3duUHJvcGVydHksbT1sLnRvU3RyaW5nLG49bS5jYWxsKE9iamVjdCksbz17fTtmdW5jdGlvbiBwKGEsYil7Yj1ifHxkO3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtjLnRleHQ9YSxiLmhlYWQuYXBwZW5kQ2hpbGQoYykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX12YXIgcT1cIjMuMi4xXCIscj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgci5mbi5pbml0KGEsYil9LHM9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHQ9L14tbXMtLyx1PS8tKFthLXpdKS9nLHY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtyLmZuPXIucHJvdG90eXBlPXtqcXVlcnk6cSxjb25zdHJ1Y3RvcjpyLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/Zi5jYWxsKHRoaXMpOmE8MD90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV19LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1yLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gci5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKGE8MD9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZjPGI/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmgsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxyLmV4dGVuZD1yLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fHIuaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aDxpO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihyLmlzUGxhaW5PYmplY3QoZCl8fChlPUFycmF5LmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJkFycmF5LmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZyLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPXIuZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxyLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhxK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXIudHlwZShhKX0saXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPXIudHlwZShhKTtyZXR1cm4oXCJudW1iZXJcIj09PWJ8fFwic3RyaW5nXCI9PT1iKSYmIWlzTmFOKGEtcGFyc2VGbG9hdChhKSl9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYztyZXR1cm4hKCFhfHxcIltvYmplY3QgT2JqZWN0XVwiIT09ay5jYWxsKGEpKSYmKCEoYj1lKGEpKXx8KGM9bC5jYWxsKGIsXCJjb25zdHJ1Y3RvclwiKSYmYi5jb25zdHJ1Y3RvcixcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZtLmNhbGwoYyk9PT1uKSl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/altrLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3AoYSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHQsXCJtcy1cIikucmVwbGFjZSh1LHYpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHcoYSkpe2ZvcihjPWEubGVuZ3RoO2Q8YztkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKHMsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYodyhPYmplY3QoYSkpP3IubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6aC5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmkuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtkPGM7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7ZjxnO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9MCxoPVtdO2lmKHcoYSkpZm9yKGQ9YS5sZW5ndGg7ZjxkO2YrKyllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihmIGluIGEpZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGcuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIGQ9Zi5jYWxsKGFyZ3VtZW50cywyKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChmLmNhbGwoYXJndW1lbnRzKSkpfSxlLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8ci5ndWlkKyssZX0sbm93OkRhdGUubm93LHN1cHBvcnQ6b30pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHIuZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLHIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7altcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gdyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPXIudHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCIhPT1jJiYhci5pc1dpbmRvdyhhKSYmKFwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYSl9dmFyIHg9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9e30uaGFzT3duUHJvcGVydHksRD1bXSxFPUQucG9wLEY9RC5wdXNoLEc9RC5wdXNoLEg9RC5zbGljZSxJPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxKPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixLPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixMPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixNPVwiXFxcXFtcIitLK1wiKihcIitMK1wiKSg/OlwiK0srXCIqKFsqXiR8IX5dPz0pXCIrSytcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0wrXCIpKXwpXCIrSytcIipcXFxcXVwiLE49XCI6KFwiK0wrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK00rXCIpKil8LiopXFxcXCl8KVwiLE89bmV3IFJlZ0V4cChLK1wiK1wiLFwiZ1wiKSxQPW5ldyBSZWdFeHAoXCJeXCIrSytcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrSytcIiskXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitLK1wiKixcIitLK1wiKlwiKSxSPW5ldyBSZWdFeHAoXCJeXCIrSytcIiooWz4rfl18XCIrSytcIilcIitLK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCI9XCIrSytcIiooW15cXFxcXSdcXFwiXSo/KVwiK0srXCIqXFxcXF1cIixcImdcIiksVD1uZXcgUmVnRXhwKE4pLFU9bmV3IFJlZ0V4cChcIl5cIitMK1wiJFwiKSxWPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTCtcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitMK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTCtcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitNKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitOKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitLK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrSytcIiooPzooWystXXwpXCIrSytcIiooXFxcXGQrKXwpKVwiK0srXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0srXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0srXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0srXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxYPS9eaFxcZCQvaSxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLywkPS9bK35dLyxfPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitLK1wiP3woXCIrSytcIil8LilcIixcImlnXCIpLGFhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjpkPDA/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGJhPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJcXDBcIj09PWE/XCJcXHVmZmZkXCI6YS5zbGljZSgwLC0xKStcIlxcXFxcIithLmNoYXJDb2RlQXQoYS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2F9LGRhPWZ1bmN0aW9uKCl7bSgpfSxlYT10YShmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwJiYoXCJmb3JtXCJpbiBhfHxcImxhYmVsXCJpbiBhKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7Ry5hcHBseShEPUguY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRFt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7Rz17YXBwbHk6RC5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtGLmFwcGx5KGEsSC5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscz1iJiZiLm93bmVyRG9jdW1lbnQsdz1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXcmJjkhPT13JiYxMSE9PXcpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT13JiYobD1aLmV4ZWMoYSkpKWlmKGY9bFsxXSl7aWYoOT09PXcpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZihzJiYoaj1zLmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihsWzJdKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1sWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09dylzPWIscj1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYmEsY2EpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLG89ZyhhKSxoPW8ubGVuZ3RoO3doaWxlKGgtLSlvW2hdPVwiI1wiK2srXCIgXCIrc2Eob1toXSk7cj1vLmpvaW4oXCIsXCIpLHM9JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxifWlmKHIpdHJ5e3JldHVybiBHLmFwcGx5KGQscy5xdWVyeVNlbGVjdG9yQWxsKHIpKSxkfWNhdGNoKHgpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFAsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJmb3JtXCJpbiBiP2IucGFyZW50Tm9kZSYmYi5kaXNhYmxlZD09PSExP1wibGFiZWxcImluIGI/XCJsYWJlbFwiaW4gYi5wYXJlbnROb2RlP2IucGFyZW50Tm9kZS5kaXNhYmxlZD09PWE6Yi5kaXNhYmxlZD09PWE6Yi5pc0Rpc2FibGVkPT09YXx8Yi5pc0Rpc2FibGVkIT09IWEmJmVhKGIpPT09YTpiLmRpc2FibGVkPT09YTpcImxhYmVsXCJpbiBiJiZiLmRpc2FibGVkPT09YX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIWImJlwiSFRNTFwiIT09Yi5ub2RlTmFtZX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSx2IT09biYmKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVkudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0pOihkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYyxkLGUsZj1iLmdldEVsZW1lbnRCeUlkKGEpO2lmKGYpe2lmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdO2U9Yi5nZXRFbGVtZW50c0J5TmFtZShhKSxkPTA7d2hpbGUoZj1lW2QrK10paWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl19cmV0dXJuW119fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcClyZXR1cm4gYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpfSxyPVtdLHE9W10sKGMucXNhPVkudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitLK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitLK1wiKig/OnZhbHVlfFwiK0orXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrSytcIipbKl4kfCF+XT89XCIpLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksby5hcHBlbmRDaGlsZChhKS5kaXNhYmxlZD0hMCwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVkudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcIipcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixOKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVkudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFkudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9JKGssYSktSShrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0koayxhKS1JKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2xhKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoUyxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkMuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVzY2FwZT1mdW5jdGlvbihhKXtyZXR1cm4oYStcIlwiKS5yZXBsYWNlKGJhLGNhKX0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoXyxhYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShfLGFhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlQudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitLK1wiKVwiK2ErXCIoXCIrSytcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOiFifHwoZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShPLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iJiYoZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUkoYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFAsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKF8sYWEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBVLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpvYSghMSksZGlzYWJsZWQ6b2EoITApLGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpwYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6cGEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOnBhKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bYzwwP2MrYjpjXX0pLGV2ZW46cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiByYSgpe31yYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHJhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9US5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Ui5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShQLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1WW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBzYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtiPGM7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9Yi5uZXh0LGY9ZXx8ZCxnPWMmJlwicGFyZW50Tm9kZVwiPT09ZixoPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZSl7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKXJldHVybiBhKGIsYyxlKTtyZXR1cm4hMX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtPVt3LGhdO2lmKGkpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGcpJiZhKGIsYyxpKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylpZihsPWJbdV18fChiW3VdPXt9KSxrPWxbYi51bmlxdWVJRF18fChsW2IudW5pcXVlSURdPXt9KSxlJiZlPT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWI9YltkXXx8YjtlbHNle2lmKChqPWtbZl0pJiZqWzBdPT09dyYmalsxXT09PWgpcmV0dXJuIG1bMl09alsyXTtpZihrW2ZdPW0sbVsyXT1hKGIsYyxpKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aDxpO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB4YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD14YShkKSksZSYmIWVbdV0mJihlPXhhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHZhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6d2EocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXdhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9JKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj13YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24geWEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD10YShmdW5jdGlvbihhKXtyZXR1cm4gSShiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07aTxmO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVt0YSh1YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtlPGY7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4geGEoaT4xJiZ1YShtKSxpPjEmJnNhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUCxcIiQxXCIpLGMsaTxlJiZ5YShhLnNsaWNlKGksZSkpLGU8ZiYmeWEoYT1hLnNsaWNlKGUpKSxlPGYmJnNhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHVhKG0pfWZ1bmN0aW9uIHphKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1FLmNhbGwoaSkpO3U9d2EodSl9Ry5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXlhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx6YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGksaixrLGwsbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG49IWUmJmcoYT1tLnNlbGVjdG9yfHxhKTtpZihjPWN8fFtdLDE9PT1uLmxlbmd0aCl7aWYoaT1uWzBdPW5bMF0uc2xpY2UoMCksaS5sZW5ndGg+MiYmXCJJRFwiPT09KGo9aVswXSkudHlwZSYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbaVsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGM7bSYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2UoaS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9Zj1WLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6aS5sZW5ndGg7d2hpbGUoZi0tKXtpZihqPWlbZl0sZC5yZWxhdGl2ZVtrPWoudHlwZV0pYnJlYWs7aWYoKGw9ZC5maW5kW2tdKSYmKGU9bChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSwkLnRlc3QoaVswXS50eXBlKSYmcWEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihpLnNwbGljZShmLDEpLGE9ZS5sZW5ndGgmJnNhKGkpLCFhKXJldHVybiBHLmFwcGx5KGMsZSksYzticmVha319fXJldHVybihtfHxoKGEsbikpKGUsYiwhcCxjLCFifHwkLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpLGN9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMpcmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMmJlwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gYS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShKLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZighYylyZXR1cm4gYVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7ci5maW5kPXgsci5leHByPXguc2VsZWN0b3JzLHIuZXhwcltcIjpcIl09ci5leHByLnBzZXVkb3Msci51bmlxdWVTb3J0PXIudW5pcXVlPXgudW5pcXVlU29ydCxyLnRleHQ9eC5nZXRUZXh0LHIuaXNYTUxEb2M9eC5pc1hNTCxyLmNvbnRhaW5zPXguY29udGFpbnMsci5lc2NhcGVTZWxlY3Rvcj14LmVzY2FwZTt2YXIgeT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmcihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LEE9ci5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBCKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX12YXIgQz0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSxEPS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBFKGEsYixjKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGIpP3IuZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pOmIubm9kZVR5cGU/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pOlwic3RyaW5nXCIhPXR5cGVvZiBiP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWN9KTpELnRlc3QoYik/ci5maWx0ZXIoYixhLGMpOihiPXIuZmlsdGVyKGIsYSksci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09YyYmMT09PWEubm9kZVR5cGV9KSl9ci5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP3IuZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106ci5maW5kLm1hdGNoZXMoYSxyLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LHIuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmxlbmd0aCxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHIoYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtiPGQ7YisrKWlmKHIuY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYz10aGlzLnB1c2hTdGFjayhbXSksYj0wO2I8ZDtiKyspci5maW5kKGEsZVtiXSxjKTtyZXR1cm4gZD4xP3IudW5pcXVlU29ydChjKTpjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUUodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmQS50ZXN0KGEpP3IoYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgRixHPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLEg9ci5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8RixcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpHLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygcj9iWzBdOmIsci5tZXJnZSh0aGlzLHIucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLEMudGVzdChlWzFdKSYmci5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpci5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiYodGhpc1swXT1mLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOnIuaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShyKTpyLm1ha2VBcnJheShhLHRoaXMpfTtILnByb3RvdHlwZT1yLmZuLEY9cihkKTt2YXIgST0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxKPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3IuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9cihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxjO2ErKylpZihyLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz1cInN0cmluZ1wiIT10eXBlb2YgYSYmcihhKTtpZighQS50ZXN0KGEpKWZvcig7ZDxlO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9yLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2kuY2FsbChyKGEpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci51bmlxdWVTb3J0KHIubWVyZ2UodGhpcy5nZXQoKSxyKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEsoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfXIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHooKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB6KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnQ6KEIoYSxcInRlbXBsYXRlXCIpJiYoYT1hLmNvbnRlbnR8fGEpLHIubWVyZ2UoW10sYS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1yLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1yLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoSlthXXx8ci51bmlxdWVTb3J0KGUpLEkudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBMPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBNKGEpe3ZhciBiPXt9O3JldHVybiByLmVhY2goYS5tYXRjaChMKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1yLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP00oYSk6ci5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWV8fGEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7ci5lYWNoKGIsZnVuY3Rpb24oYixjKXtyLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1yLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gci5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPXIuaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksYzw9aCYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP3IuaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHxifHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9O2Z1bmN0aW9uIE4oYSl7cmV0dXJuIGF9ZnVuY3Rpb24gTyhhKXt0aHJvdyBhfWZ1bmN0aW9uIFAoYSxiLGMsZCl7dmFyIGU7dHJ5e2EmJnIuaXNGdW5jdGlvbihlPWEucHJvbWlzZSk/ZS5jYWxsKGEpLmRvbmUoYikuZmFpbChjKTphJiZyLmlzRnVuY3Rpb24oZT1hLnRoZW4pP2UuY2FsbChhLGIsYyk6Yi5hcHBseSh2b2lkIDAsW2FdLnNsaWNlKGQpKX1jYXRjaChhKXtjLmFwcGx5KHZvaWQgMCxbYV0pfX1yLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYil7dmFyIGM9W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxkPVwicGVuZGluZ1wiLGU9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBmLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiBlLnRoZW4obnVsbCxhKX0scGlwZTpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihiKXtyLmVhY2goYyxmdW5jdGlvbihjLGQpe3ZhciBlPXIuaXNGdW5jdGlvbihhW2RbNF1dKSYmYVtkWzRdXTtmW2RbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmci5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYi5ub3RpZnkpLmRvbmUoYi5yZXNvbHZlKS5mYWlsKGIucmVqZWN0KTpiW2RbMF0rXCJXaXRoXCJdKHRoaXMsZT9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKGIsZCxlKXt2YXIgZj0wO2Z1bmN0aW9uIGcoYixjLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGg9dGhpcyxpPWFyZ3VtZW50cyxqPWZ1bmN0aW9uKCl7dmFyIGEsajtpZighKGI8Zikpe2lmKGE9ZC5hcHBseShoLGkpLGE9PT1jLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO2o9YSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSYmYS50aGVuLHIuaXNGdW5jdGlvbihqKT9lP2ouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSk6KGYrKyxqLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSksZyhmLGMsTixjLm5vdGlmeVdpdGgpKSk6KGQhPT1OJiYoaD12b2lkIDAsaT1bYV0pLChlfHxjLnJlc29sdmVXaXRoKShoLGkpKX19LGs9ZT9qOmZ1bmN0aW9uKCl7dHJ5e2ooKX1jYXRjaChhKXtyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJnIuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhhLGsuc3RhY2tUcmFjZSksYisxPj1mJiYoZCE9PU8mJihoPXZvaWQgMCxpPVthXSksYy5yZWplY3RXaXRoKGgsaSkpfX07Yj9rKCk6KHIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYoay5zdGFja1RyYWNlPXIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLGEuc2V0VGltZW91dChrKSl9fXJldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGEpe2NbMF1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihlKT9lOk4sYS5ub3RpZnlXaXRoKSksY1sxXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGIpP2I6TikpLGNbMl1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihkKT9kOk8pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9yLmV4dGVuZChhLGUpOmV9fSxmPXt9O3JldHVybiByLmVhY2goYyxmdW5jdGlvbihhLGIpe3ZhciBnPWJbMl0saD1iWzVdO2VbYlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtkPWh9LGNbMy1hXVsyXS5kaXNhYmxlLGNbMF1bMl0ubG9jayksZy5hZGQoYlszXS5maXJlKSxmW2JbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGZbYlswXStcIldpdGhcIl0odGhpcz09PWY/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxmW2JbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxlLnByb21pc2UoZiksYiYmYi5jYWxsKGYsZiksZn0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj1hcmd1bWVudHMubGVuZ3RoLGM9YixkPUFycmF5KGMpLGU9Zi5jYWxsKGFyZ3VtZW50cyksZz1yLkRlZmVycmVkKCksaD1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyl7ZFthXT10aGlzLGVbYV09YXJndW1lbnRzLmxlbmd0aD4xP2YuY2FsbChhcmd1bWVudHMpOmMsLS1ifHxnLnJlc29sdmVXaXRoKGQsZSl9fTtpZihiPD0xJiYoUChhLGcuZG9uZShoKGMpKS5yZXNvbHZlLGcucmVqZWN0LCFiKSxcInBlbmRpbmdcIj09PWcuc3RhdGUoKXx8ci5pc0Z1bmN0aW9uKGVbY10mJmVbY10udGhlbikpKXJldHVybiBnLnRoZW4oKTt3aGlsZShjLS0pUChlW2NdLGgoYyksZy5yZWplY3QpO3JldHVybiBnLnByb21pc2UoKX19KTt2YXIgUT0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oYixjKXthLmNvbnNvbGUmJmEuY29uc29sZS53YXJuJiZiJiZRLnRlc3QoYi5uYW1lKSYmYS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitiLm1lc3NhZ2UsYi5zdGFjayxjKX0sci5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihiKXthLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBifSl9O3ZhciBSPXIuRGVmZXJyZWQoKTtyLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBSLnRoZW4oYSlbXCJjYXRjaFwiXShmdW5jdGlvbihhKXtyLnJlYWR5RXhjZXB0aW9uKGEpfSksdGhpc30sci5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLXIucmVhZHlXYWl0OnIuaXNSZWFkeSl8fChyLmlzUmVhZHk9ITAsYSE9PSEwJiYtLXIucmVhZHlXYWl0PjB8fFIucmVzb2x2ZVdpdGgoZCxbcl0pKX19KSxyLnJlYWR5LnRoZW49Ui50aGVuO2Z1bmN0aW9uIFMoKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksXG5hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUyksci5yZWFkeSgpfVwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQoci5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUykpO3ZhciBUPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PXIudHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVQoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsci5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKHIoYSksYyl9KSksYikpZm9yKDtoPGk7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sVT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIFYoKXt0aGlzLmV4cGFuZG89ci5leHBhbmRvK1YudWlkKyt9Vi51aWQ9MSxWLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxVKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW3IuY2FtZWxDYXNlKGIpXT1jO2Vsc2UgZm9yKGQgaW4gYillW3IuY2FtZWxDYXNlKGQpXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW3IuY2FtZWxDYXNlKGIpXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/dGhpcy5nZXQoYSxiKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09ZCl7aWYodm9pZCAwIT09Yil7QXJyYXkuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChMKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVz1uZXcgVixYPW5ldyBWLFk9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFo9L1tBLVpdL2c7ZnVuY3Rpb24gJChhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpZLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiBfKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWixcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPSQoYyl9Y2F0Y2goZSl7fVguc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBYLmhhc0RhdGEoYSl8fFcuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFguYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1gucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1YLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVcuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxfKGYsZCxlW2RdKSkpO1cuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhKX0pOlQodGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVguZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPV8oZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1gucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vy5nZXQoYSxiKSxjJiYoIWR8fEFycmF5LmlzQXJyYXkoYyk/ZD1XLmFjY2VzcyhhLGIsci5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W119LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1yLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPXIuX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gVy5nZXQoYSxjKXx8Vy5hY2Nlc3MoYSxjLHtlbXB0eTpyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1cucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksci5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9yLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPXIucXVldWUodGhpcyxhLGIpO3IuX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJnIuZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPXIuRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPVcuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIGFhPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxiYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIithYStcIikoW2EteiVdKikkXCIsXCJpXCIpLGNhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxkYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxlYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZmEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmJhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBnYT17fTtmdW5jdGlvbiBoYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1nYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxnYVtkXT1lLGUpfWZ1bmN0aW9uIGlhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1XLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZkYShkKSYmKGVbZl09aGEoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFcuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2RhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGphPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGthPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxsYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLG1hPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bWEub3B0Z3JvdXA9bWEub3B0aW9uLG1hLnRib2R5PW1hLnRmb290PW1hLmNvbGdyb3VwPW1hLmNhcHRpb249bWEudGhlYWQsbWEudGg9bWEudGQ7ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmQihhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gb2EoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vy5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBwYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKHBhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGthLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bWFbaF18fG1hLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1uYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm9hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlsYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHJhPWQuZG9jdW1lbnRFbGVtZW50LHNhPS9ea2V5Lyx0YT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdWE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB2YSgpe3JldHVybiEwfWZ1bmN0aW9uIHdhKCl7cmV0dXJuITF9ZnVuY3Rpb24geGEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHlhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil5YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXdhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5oYXNEYXRhKGEpJiZXLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlcucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVy5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT14YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT14YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmQih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3ZhOndhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6d2EsaXNQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnNhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZ0YS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9d2EpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHphPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEJhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQ2E9L150cnVlXFwvKC4qKS8sRGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIEVhKGEsYil7cmV0dXJuIEIoYSxcInRhYmxlXCIpJiZCKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP3IoXCI+dGJvZHlcIixhKVswXXx8YTphfWZ1bmN0aW9uIEZhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEdhKGEpe3ZhciBiPUNhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFcuaGFzRGF0YShhKSYmKGY9Vy5hY2Nlc3MoYSksZz1XLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9WC5oYXNEYXRhKGEpJiYoaD1YLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFguc2V0KGIsaSkpfX1mdW5jdGlvbiBJYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZqYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIEphKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkJhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxKYShmLGIsYyxkKX0pO2lmKG0mJihlPXFhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChuYShlLFwic2NyaXB0XCIpLEZhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxuYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEdhKSxsPTA7bDxpO2wrKylqPWhbbF0sbGEudGVzdChqLnR5cGV8fFwiXCIpJiYhVy5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKERhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBLYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobmEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZvYShuYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoemEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bmEoaCksZj1uYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUlhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG5hKGEpLGc9Z3x8bmEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylIYShmW2RdLGdbZF0pO2Vsc2UgSGEoYSxoKTtyZXR1cm4gZz1uYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm9hKGcsIWkmJm5hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVShjKSl7aWYoYj1jW1cuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tXLmV4cGFuZG9dPXZvaWQgMH1jW1guZXhwYW5kb10mJihjW1guZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhQWEudGVzdChhKSYmIW1hWyhrYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobmEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIExhPS9ebWFyZ2luLyxNYT1uZXcgUmVnRXhwKFwiXihcIithYStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxOYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9OyFmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihpKXtpLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixpLmlubmVySFRNTD1cIlwiLHJhLmFwcGVuZENoaWxkKGgpO3ZhciBiPWEuZ2V0Q29tcHV0ZWRTdHlsZShpKTtjPVwiMSVcIiE9PWIudG9wLGc9XCIycHhcIj09PWIubWFyZ2luTGVmdCxlPVwiNHB4XCI9PT1iLndpZHRoLGkuc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixmPVwiNHB4XCI9PT1iLm1hcmdpblJpZ2h0LHJhLnJlbW92ZUNoaWxkKGgpLGk9bnVsbH19dmFyIGMsZSxmLGcsaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zdHlsZSYmKGkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGkuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLG8uY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWkuc3R5bGUuYmFja2dyb3VuZENsaXAsaC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixoLmFwcGVuZENoaWxkKGkpLHIuZXh0ZW5kKG8se3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGN9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxlfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxmfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGd9fSkpfSgpO2Z1bmN0aW9uIE9hKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8TmEoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdLFwiXCIhPT1nfHxyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9ci5zdHlsZShhLGIpKSwhby5waXhlbE1hcmdpblJpZ2h0KCkmJk1hLnRlc3QoZykmJkxhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gUGEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIFFhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxSYT0vXi0tLyxTYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxVYT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFdhKGEpe2lmKGEgaW4gVmEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1VYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9VWFbY10rYixhIGluIFZhKXJldHVybiBhfWZ1bmN0aW9uIFhhKGEpe3ZhciBiPXIuY3NzUHJvcHNbYV07cmV0dXJuIGJ8fChiPXIuY3NzUHJvcHNbYV09V2EoYSl8fGEpLGJ9ZnVuY3Rpb24gWWEoYSxiLGMpe3ZhciBkPWJhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBaYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytjYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uICRhKGEsYixjKXt2YXIgZCxlPU5hKGEpLGY9T2EoYSxiLGUpLGc9XCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSk7cmV0dXJuIE1hLnRlc3QoZik/ZjooZD1nJiYoby5ib3hTaXppbmdSZWxpYWJsZSgpfHxmPT09YS5zdHlsZVtiXSksXCJhdXRvXCI9PT1mJiYoZj1hW1wib2Zmc2V0XCIrYlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSldKSxmPXBhcnNlRmxvYXQoZil8fDAsZitaYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxlKStcInB4XCIpfXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9T2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYiksaj1hLnN0eWxlO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6altiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9YmEuZXhlYyhjKSkmJmVbMV0mJihjPWZhKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwoci5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxvLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaltiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpP2ouc2V0UHJvcGVydHkoYixjKTpqW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9T2EoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBUYSYmKGU9VGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksci5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe2lmKGMpcmV0dXJuIVFhLnRlc3Qoci5jc3MoYSxcImRpc3BsYXlcIikpfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoPyRhKGEsYixkKTplYShhLFNhLGZ1bmN0aW9uKCl7cmV0dXJuICRhKGEsYixkKX0pfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmTmEoYSksZz1kJiZaYShhLGIsZCxcImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9YmEuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9ci5jc3MoYSxiKSksWWEoYSxjLGcpfX19KSxyLmNzc0hvb2tzLm1hcmdpbkxlZnQ9UGEoby5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtpZihiKXJldHVybihwYXJzZUZsb2F0KE9hKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LWVhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTtkPDQ7ZCsrKWVbYStjYVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxMYS50ZXN0KGEpfHwoci5jc3NIb29rc1thK2JdLnNldD1ZYSl9KSxyLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihBcnJheS5pc0FycmF5KGIpKXtmb3IoZD1OYShhKSxlPWIubGVuZ3RoO2c8ZTtnKyspZltiW2ddXT1yLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/ci5zdHlsZShhLGIsYyk6ci5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gX2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IF9hLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9ci5Ud2Vlbj1fYSxfYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOl9hLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fHIuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwoci5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPXIuZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxfYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9X2EucHJvdG90eXBlLF9hLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPXIuY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtyLmZ4LnN0ZXBbYS5wcm9wXT9yLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbci5jc3NQcm9wc1thLnByb3BdXSYmIXIuY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpyLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxfYS5wcm9wSG9va3Muc2Nyb2xsVG9wPV9hLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LHIuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxyLmZ4PV9hLnByb3RvdHlwZS5pbml0LHIuZnguc3RlcD17fTt2YXIgYWIsYmIsY2I9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGRiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gZWIoKXtiYiYmKGQuaGlkZGVuPT09ITEmJmEucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2EucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGViKTphLnNldFRpbWVvdXQoZWIsci5meC5pbnRlcnZhbCksci5meC50aWNrKCkpfWZ1bmN0aW9uIGZiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe2FiPXZvaWQgMH0pLGFiPXIubm93KCl9ZnVuY3Rpb24gZ2IoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1jYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBoYihhLGIsYyl7Zm9yKHZhciBkLGU9KGtiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGtiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gaWIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZkYShhKSxxPVcuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sY2IudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vy5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGlhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxpYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1XLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaWEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxpYShbYV0pLFcucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWhiKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBqYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sQXJyYXkuaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9ci5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGtiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWtiLnByZWZpbHRlcnMubGVuZ3RoLGg9ci5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9YWJ8fGZiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2c8aTtnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSxmPDEmJmk/YzooaXx8aC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOnIuZXh0ZW5kKHt9LGIpLG9wdHM6ci5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnIuZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6YWJ8fGZiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1yLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2M8ZDtjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKGpiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2Y8ZztmKyspaWYoZD1rYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gci5pc0Z1bmN0aW9uKGQuc3RvcCkmJihyLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9ci5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIHIubWFwKGssaGIsaiksci5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyksci5meC50aW1lcihyLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGtiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBmYShjLmVsZW0sYSxiYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEwpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxrYi50d2VlbmVyc1tjXT1rYi50d2VlbmVyc1tjXXx8W10sa2IudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbaWJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/a2IucHJlZmlsdGVycy51bnNoaWZ0KGEpOmtiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmY/ZC5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBkLmR1cmF0aW9uJiYoZC5kdXJhdGlvbiBpbiByLmZ4LnNwZWVkcz9kLmR1cmF0aW9uPXIuZnguc3BlZWRzW2QuZHVyYXRpb25dOmQuZHVyYXRpb249ci5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtyLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJnIuZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxyLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihkYSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1yLmlzRW1wdHlPYmplY3QoYSksZj1yLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9a2IodGhpcyxyLmV4dGVuZCh7fSxhKSxmKTsoZXx8Vy5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPXIudGltZXJzLGc9Vy5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmZGIudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8ci5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1XLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPXIudGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxyLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtiPGc7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLHIuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmZuW2JdO3IuZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGdiKGIsITApLGEsZCxlKX19KSxyLmVhY2goe3NsaWRlRG93bjpnYihcInNob3dcIiksc2xpZGVVcDpnYihcImhpZGVcIiksc2xpZGVUb2dnbGU6Z2IoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksci50aW1lcnM9W10sci5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9ci50aW1lcnM7Zm9yKGFiPXIubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8ci5meC5zdG9wKCksYWI9dm9pZCAwfSxyLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe3IudGltZXJzLnB1c2goYSksci5meC5zdGFydCgpfSxyLmZ4LmludGVydmFsPTEzLHIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtiYnx8KGJiPSEwLGViKCkpfSxyLmZ4LnN0b3A9ZnVuY3Rpb24oKXtiYj1udWxsfSxyLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxyLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9ci5meD9yLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsby5jaGVja09uPVwiXCIhPT1hLnZhbHVlLG8ub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixvLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBsYixtYj1yLmV4cHIuYXR0ckhhbmRsZTtyLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9yLnByb3AoYSxiLGMpOigxPT09ZiYmci5pc1hNTERvYyhhKXx8KGU9ci5hdHRySG9va3NbYi50b0xvd2VyQ2FzZSgpXXx8KHIuZXhwci5tYXRjaC5ib29sLnRlc3QoYik/bGI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIHIucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9ci5maW5kLmF0dHIoYSxiKSxcbm51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighby5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZCKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPWImJmIubWF0Y2goTCk7aWYoZSYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1lW2QrK10pYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksbGI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9yLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxyLmVhY2goci5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9bWJbYl18fHIuZmluZC5hdHRyO21iW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmLGc9Yi50b0xvd2VyQ2FzZSgpO3JldHVybiBkfHwoZj1tYltnXSxtYltnXT1lLGU9bnVsbCE9YyhhLGIsZCk/ZzpudWxsLG1iW2ddPWYpLGV9fSk7dmFyIG5iPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksb2I9L14oPzphfGFyZWEpJC9pO3IuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3IucHJvcEZpeFthXXx8YV19KX19KSxyLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJnIuaXNYTUxEb2MoYSl8fChiPXIucHJvcEZpeFtiXXx8YixlPXIucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOm5iLnRlc3QoYS5ub2RlTmFtZSl8fG9iLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksby5vcHRTZWxlY3RlZHx8KHIucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxyLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7ci5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIHBiKGEpe3ZhciBiPWEubWF0Y2goTCl8fFtdO3JldHVybiBiLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHFiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1yLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6ci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMscWIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9cih0aGlzKSxmPWEubWF0Y2goTCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1xYih0aGlzKSxiJiZXLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Vy5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitwYihxYihjKSkrXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHJiPS9cXHIvZztyLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9ci5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLHIodGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpBcnJheS5pc0FycmF5KGUpJiYoZT1yLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9ci52YWxIb29rc1t0aGlzLnR5cGVdfHxyLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPXIudmFsSG9va3NbZS50eXBlXXx8ci52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UocmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxyLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOnBiKHIudGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT1hLm9wdGlvbnMsZj1hLnNlbGVjdGVkSW5kZXgsZz1cInNlbGVjdC1vbmVcIj09PWEudHlwZSxoPWc/bnVsbDpbXSxpPWc/ZisxOmUubGVuZ3RoO2ZvcihkPWY8MD9pOmc/ZjowO2Q8aTtkKyspaWYoYz1lW2RdLChjLnNlbGVjdGVkfHxkPT09ZikmJiFjLmRpc2FibGVkJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUIoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPXIoYykudmFsKCksZylyZXR1cm4gYjtoLnB1c2goYil9cmV0dXJuIGh9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1yLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9ci5pbkFycmF5KHIudmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLHIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtyLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBzYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXNiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxzYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShXLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVy5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlUoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFVKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYiktMTtlP1cuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVy5yZW1vdmUoZCxiKSl9fX0pO3ZhciB0Yj1hLmxvY2F0aW9uLHViPXIubm93KCksdmI9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHdiPS9cXFtcXF0kLyx4Yj0vXFxyP1xcbi9nLHliPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGU7aWYoQXJyYXkuaXNBcnJheShiKSlyLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09ci50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1yLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9ci5pc0Z1bmN0aW9uKGIpP2IoKTpiO2RbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09Yz9cIlwiOmMpfTtpZihBcnJheS5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIXIuaXNQbGFpbk9iamVjdChhKSlyLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpfSxyLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1yLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP3IubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhamEudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1yKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6QXJyYXkuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh4YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgQmI9LyUyMC9nLENiPS8jLiokLyxEYj0vKFs/Jl0pXz1bXiZdKi8sRWI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxGYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxHYj0vXig/OkdFVHxIRUFEKSQvLEhiPS9eXFwvXFwvLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKSxMYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0xiLmhyZWY9dGIuaHJlZjtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp0Yi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkZiLnRlc3QodGIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOktiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLHIuYWpheFNldHRpbmdzKSxiKTpPYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUViLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHx0Yi5ocmVmKStcIlwiKS5yZXBsYWNlKEhiLHRiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUxiLnByb3RvY29sK1wiLy9cIitMYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxOYihJYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hR2IudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZShDYixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoQmIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShEYixcIiQxXCIpLG49KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIit1YisrICtuKSxvLnVybD1mK24pLG8uaWZNb2RpZmllZCYmKHIubGFzdE1vZGlmaWVkW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHIubGFzdE1vZGlmaWVkW2ZdKSxyLmV0YWdbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixyLmV0YWdbZl0pKSwoby5kYXRhJiZvLmhhc0NvbnRlbnQmJm8uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGUpLHkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG8uZGF0YVR5cGVzWzBdJiZvLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dP28uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09by5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTpvLmFjY2VwdHNbXCIqXCJdKTtmb3IobSBpbiBvLmhlYWRlcnMpeS5zZXRSZXF1ZXN0SGVhZGVyKG0sby5oZWFkZXJzW21dKTtpZihvLmJlZm9yZVNlbmQmJihvLmJlZm9yZVNlbmQuY2FsbChwLHksbyk9PT0hMXx8aykpcmV0dXJuIHkuYWJvcnQoKTtpZih4PVwiYWJvcnRcIix0LmFkZChvLmNvbXBsZXRlKSx5LmRvbmUoby5zdWNjZXNzKSx5LmZhaWwoby5lcnJvciksZT1OYihKYixvLGMseSkpe2lmKHkucmVhZHlTdGF0ZT0xLGwmJnEudHJpZ2dlcihcImFqYXhTZW5kXCIsW3ksb10pLGspcmV0dXJuIHk7by5hc3luYyYmby50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3kuYWJvcnQoXCJ0aW1lb3V0XCIpfSxvLnRpbWVvdXQpKTt0cnl7az0hMSxlLnNlbmQodixBKX1jYXRjaCh6KXtpZihrKXRocm93IHo7QSgtMSx6KX19ZWxzZSBBKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIEEoYixjLGQsaCl7dmFyIGosbSxuLHYsdyx4PWM7a3x8KGs9ITAsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHkucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiZiPDMwMHx8MzA0PT09YixkJiYodj1QYihvLHksZCkpLHY9UWIobyx2LHksaiksaj8oby5pZk1vZGlmaWVkJiYodz15LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoci5sYXN0TW9kaWZpZWRbZl09dyksdz15LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoci5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW8udHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09Yj94PVwibm90bW9kaWZpZWRcIjooeD12LnN0YXRlLG09di5kYXRhLG49di5lcnJvcixqPSFuKSk6KG49eCwhYiYmeHx8KHg9XCJlcnJvclwiLGI8MCYmKGI9MCkpKSx5LnN0YXR1cz1iLHkuc3RhdHVzVGV4dD0oY3x8eCkrXCJcIixqP3MucmVzb2x2ZVdpdGgocCxbbSx4LHldKTpzLnJlamVjdFdpdGgocCxbeSx4LG5dKSx5LnN0YXR1c0NvZGUodSksdT12b2lkIDAsbCYmcS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3ksbyxqP206bl0pLHQuZmlyZVdpdGgocCxbeSx4XSksbCYmKHEudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt5LG9dKSwtLXIuYWN0aXZlfHxyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB5fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gci5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gci5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxyLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7cltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksci5hamF4KHIuZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxyLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxyLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiByLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHIuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiB0aGlzWzBdJiYoci5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpc1swXSkpLGI9cihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9cih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1yLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyZW50KGEpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3IodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksci5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFyLmV4cHIucHNldWRvcy52aXNpYmxlKGEpfSxyLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiEhKGEub2Zmc2V0V2lkdGh8fGEub2Zmc2V0SGVpZ2h0fHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sci5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgUmI9ezA6MjAwLDEyMjM6MjA0fSxTYj1yLmFqYXhTZXR0aW5ncy54aHIoKTtvLmNvcnM9ISFTYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFNiLG8uYWpheD1TYj0hIVNiLHIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO2lmKG8uY29yc3x8U2ImJiFiLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihSYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX0pLHIuYWpheFByZWZpbHRlcihmdW5jdGlvbihhKXthLmNyb3NzRG9tYWluJiYoYS5jb250ZW50cy5zY3JpcHQ9ITEpfSksci5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ2xvYmFsRXZhbChhKSxhfX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLHIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPXIoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgVGI9W10sVWI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztyLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1UYi5wb3AoKXx8ci5leHBhbmRvK1wiX1wiK3ViKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKFViLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZVYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtpZihofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXSlyZXR1cm4gZT1iLmpzb25wQ2FsbGJhY2s9ci5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoVWIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0odmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8ci5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9yKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLFRiLnB1c2goZSkpLGcmJnIuaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIn0pLG8uY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLHIucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSk7dmFyIGUsZixnO3JldHVybiBifHwoby5jcmVhdGVIVE1MRG9jdW1lbnQ/KGI9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksZT1iLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGUuaHJlZj1kLmxvY2F0aW9uLmhyZWYsYi5oZWFkLmFwcGVuZENoaWxkKGUpKTpiPWQpLGY9Qy5leGVjKGEpLGc9IWMmJltdLGY/W2IuY3JlYXRlRWxlbWVudChmWzFdKV06KGY9cWEoW2FdLGIsZyksZyYmZy5sZW5ndGgmJnIoZykucmVtb3ZlKCksci5tZXJnZShbXSxmLmNoaWxkTm9kZXMpKX0sci5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9cGIoYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLHIuaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJnIuYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/cihcIjxkaXY+XCIpLmFwcGVuZChyLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LHIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLHIuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiByLmdyZXAoci50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9LHIub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9ci5jc3MoYSxcInBvc2l0aW9uXCIpLGw9cihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPXIuY3NzKGEsXCJ0b3BcIiksaT1yLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLHIuaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxyLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LHIuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtyLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkLGUsZj10aGlzWzBdO2lmKGYpcmV0dXJuIGYuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGQ9Zi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPWYub3duZXJEb2N1bWVudCxjPWIuZG9jdW1lbnRFbGVtZW50LGU9Yi5kZWZhdWx0Vmlldyx7dG9wOmQudG9wK2UucGFnZVlPZmZzZXQtYy5jbGllbnRUb3AsbGVmdDpkLmxlZnQrZS5wYWdlWE9mZnNldC1jLmNsaWVudExlZnR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksQihhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHJhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhhKT9mPWE6OT09PWEubm9kZVR5cGUmJihmPWEuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxyLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT1QYShvLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtpZihjKXJldHVybiBjPU9hKGEsYiksTWEudGVzdChjKT9yKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmN9KX0pLHIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe3IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtyLmZuW2RdPWZ1bmN0aW9uKGUsZil7dmFyIGc9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaD1jfHwoZT09PSEwfHxmPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhiKT8wPT09ZC5pbmRleE9mKFwib3V0ZXJcIik/YltcImlubmVyXCIrYV06Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZj1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxmW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZltcIm9mZnNldFwiK2FdLGZbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWU/ci5jc3MoYixjLGgpOnIuc3R5bGUoYixjLGUsaCl9LGIsZz9lOnZvaWQgMCxnKX19KX0pLHIuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksci5ob2xkUmVhZHk9ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLHIubm9kZU5hbWU9QixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTt2YXIgVmI9YS5qUXVlcnksV2I9YS4kO3JldHVybiByLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PXImJihhLiQ9V2IpLGImJmEualF1ZXJ5PT09ciYmKGEualF1ZXJ5PVZiKSxyfSxifHwoYS5qUXVlcnk9YS4kPXIpLHJ9KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3d3dy8udHMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9