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
function main() {
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
    if (!currentRequest && network_1.Network.online) {
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
                            var week;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        notification_1.Notification.show('loading');
                                        return [4 /*yield*/, network_1.Network.whenOnline()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, communication_1.Communication.requestWeek(dateString)];
                                    case 2:
                                        week = _a.sent();
                                        notification_1.Notification.hide('loading');
                                        registerWeek(week);
                                        return [2 /*return*/];
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
// function handleError(err: Error) { // TODO: this is dirty
//   if (err.message === P.err.BUTTON_NOT_FOUND) {
//     console.error(err);
//     Notification.show('dateError', { duration: 3000 });
//     finishPendingRequest();
//   }
//   else if (err.message === P.err.WEBVIEW_NOT_LOADED) {
//     console.error(err);
//     Notification.show('calendarError', { duration: 3000 });
//   }
//   else if (err.message === P.err.CALENDAR_ERROR) {
//     console.error(err);
//     Notification.show('calendarError', { duration: 3000 });
//   }
//   else {
//     console.error(err);
//     Notification.show('majorError');
//   }
// }
function drawFromCache(dateString) {
    if (dateString in cache) {
        calendarDrawer_1.CalendarDrawer.draw(dateString, cache);
    }
}
function draw(dateString) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                        updateNavigationButtons(dateString);
                    }
                    return [4 /*yield*/, makeRequest(dateString)];
                case 2:
                    _a.sent();
                    if (!(currentDateString == dateString)) return [3 /*break*/, 4];
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
exports.Calendar = {
    init: init,
    draw: draw,
    drawFromCache: drawFromCache,
    get currentDateString() {
        if (!currentDateString)
            throw new error_1.default('calendar has no current day');
        return currentDateString;
    },
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
    var current = calendar_1.Calendar.currentDateString;
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
    calendar_1.Calendar.draw(calendar_1.Calendar.currentDateString);
}
screen.orientation.addEventListener('change', onScreenOrientChange);
proxy_1.Proxy.$BUTTON_SETTINGS.click(function () {
    settings_1.Settings.show()
        .then(function () {
        calendar_1.Calendar.draw(calendar_1.Calendar.currentDateString); // redraw with new filters
    });
});
proxy_1.Proxy.$BUTTON_PREV.click(function () {
    if (proxy_1.Proxy.$BUTTON_PREV.is('.disabled'))
        return;
    var day = day_1.Day.add(calendar_1.Calendar.currentDateString, -1);
    calendar_1.Calendar.draw(day).then(function () {
        proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
});
proxy_1.Proxy.$BUTTON_NEXT.click(function () {
    if (proxy_1.Proxy.$BUTTON_NEXT.is('.disabled'))
        return;
    var day = day_1.Day.add(calendar_1.Calendar.currentDateString, 1);
    calendar_1.Calendar.draw(day).then(function () {
        proxy_1.Proxy.$CALENDAR_CONTENT.scrollTop(0).scrollLeft(0);
    });
});
proxy_1.Proxy.$DATE_CONTAINER.click(function () {
    proxy_1.Proxy.$DATE_PICKER_CONTAINER.removeClass('hidden');
    var day = calendar_1.Calendar.currentDateString;
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
                    storage_1.Storage.set(proxy_1.Proxy.storage.SAVED_DAYS, ''); // try to delete currently drawn courses
                    calendar_1.Calendar.init();
                    calendarDrawer_1.CalendarDrawer.draw(day_1.Day.today());
                    proxy_1.Proxy.$SETTINGS_SAVE.hide();
                    proxy_1.Proxy.$SETTINGS_CANCEL.hide();
                    proxy_1.Proxy.$SETTINGS_FILTER.children().remove();
                    return [4 /*yield*/, filter_1.Filter.loadFilter(storage_1.Storage.get(proxy_1.Proxy.storage.GRADE))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, app_1.App.restartInappBrowser()];
                case 2:
                    _a.sent();
                    proxy_1.Proxy.$SETTINGS_SAVE.show();
                    loadDOM(filter_1.Filter.loadedFilter);
                    calendar_1.Calendar.draw(day_1.Day.today());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9hcHAudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvY2FsZW5kYXJEYXRhLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2NhbGVuZGFyRHJhd2VyLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2NvbW11bmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZGF0ZXBpY2tlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9kYXkudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvZXZlbnRzLnRzIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvLi93d3cvLnRzL1YzL2ZpbHRlci50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9pbmFwcGJyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvbmV0d29yay50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvcHJveHkudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vZnIudGhpc3NtYS5hZGVQb2x5dGVjaC8uL3d3dy8udHMvVjMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9WMy90aGVtZS50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3Ly50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoLy4vd3d3L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly9mci50aGlzc21hLmFkZVBvbHl0ZWNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZyLnRoaXNzbWEuYWRlUG9seXRlY2gvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQW9DO0FBRXBDLGdGQUFtQztBQUNuQyw2RUFBaUM7QUFDakMsbUZBQXFDO0FBQ3JDLGdGQUFtQztBQUNuQywrRkFBNkM7QUFDN0Msb0VBQTJCO0FBQzNCLDBFQUErQjtBQUMvQiwrRkFBNkM7QUFFN0MsOERBQWlCO0FBRWpCLFNBQWUsSUFBSTs7Ozs7OztvQkFFZixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQixxQkFBTSxpQkFBTyxDQUFDLElBQUksRUFBRTs7b0JBQXBCLFNBQW9CLENBQUM7b0JBQ3JCLGFBQUssQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxxQkFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLGFBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7O29CQUFyRCxTQUFxRCxDQUFDO29CQUN0RCxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFHLENBQUMs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ZSx3QkFBd0Isb0JBQW9CLDhCQUE4QixNQUFNLGlKQUFpSix3QkFBd0Isc0NBQXNDLCtDQUErQywyREFBMkQsRUFBRSxVQUFVLDhCQUE4QixlQUFlLFFBQVEseUNBQXlDLGVBQWUsc0JBQXNCLHlGQUF5Riw4QkFBOEIsTUFBTSx3UUFBd1Esa0JBQWtCLEVBQUUsZUFBZSxxQkFBcUIsMkJBQTJCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsb0VBQW9FLDBCQUEwQiw0QkFBNEIsNkRBQTZELEtBQXFDLEVBQUUsaUNBQWdCLEVBQUUsbUNBQUMsV0FBVyxTQUFTO0FBQUEsa0dBQUMsQ0FBQyx1QkFBdUIsZ0NBQWdDLDBEQUEwRCx1QkFBdUI7Ozs7Ozs7VUNIOThyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInXG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnLi9uZXR3b3JrJ1xuaW1wb3J0IHsgSW5hcHBCcm93c2VyIH0gZnJvbSAnLi9pbmFwcGJyb3dzZXInXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSdcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuXG5pbXBvcnQgJy4vZXZlbnRzJ1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICB0cnkge1xuICAgIENhbGVuZGFyLmluaXQoKTtcbiAgICBhd2FpdCBTdG9yYWdlLmluaXQoKTtcbiAgICBUaGVtZS5zZXQoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlRIRU1FKSk7XG4gICAgYXdhaXQgRmlsdGVyLmxvYWRGaWx0ZXIoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gICAgQ2FsZW5kYXIuZHJhd0Zyb21DYWNoZShEYXkudG9kYXkoKSk7XG4gICAgYXdhaXQgc3RhcnRJbmFwcEJyb3dzZXIoKTtcbiAgICBhd2FpdCBDYWxlbmRhci5kcmF3KERheS50b2RheSgpKTtcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignc29tZXRoaW5nIGJhZCBoYXBwZW5lZCAhJyk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdtYWpvckVycm9yJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRJbmFwcEJyb3dzZXIoKSB7XG4gIGF3YWl0IE5ldHdvcmsud2hlbk9ubGluZSgpXG4gIGF3YWl0IEluYXBwQnJvd3Nlci5sb2FkKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpXG4gIGF3YWl0IEluYXBwQnJvd3Nlci5pbmplY3RTY3JpcHQoKVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIG1haW4sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEluYXBwQnJvd3NlcigpIHtcbiAgcmV0dXJuIHN0YXJ0SW5hcHBCcm93c2VyKCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgQXBwID0geyBpbml0LCByZXN0YXJ0SW5hcHBCcm93c2VyIH07XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IENvbW11bmljYXRpb24gfSBmcm9tICcuL2NvbW11bmljYXRpb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnLi9uZXR3b3JrJztcbmltcG9ydCB7IENhbGVuZGFyRHJhd2VyIH0gZnJvbSAnLi9jYWxlbmRhckRyYXdlcic7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IFN0b3JlLCBNaW5pZmllZFdlZWsgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSdcbmltcG9ydCBDYWxlbmRhckVycm9yIGZyb20gJy4vZXJyb3InXG5cbmZ1bmN0aW9uIGxvYWRDYWNoZSgpOiBTdG9yZSB7XG4gIGNvbnN0IGNhY2hlU3RyID0gU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlNBVkVEX0RBWVMpO1xuICBsZXQgY2FjaGU6IFN0b3JlO1xuICB0cnkge1xuICAgIGNhY2hlID0gSlNPTi5wYXJzZShjYWNoZVN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ2RheXMgY2FjaGUgaXMgdW5zZXQgb3IgaW52YWxpZC4nKTtcbiAgICBjYWNoZSA9IHt9O1xuICB9XG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUNhY2hlKGNhY2hlOiBTdG9yZSkge1xuICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuU0FWRURfREFZUywgSlNPTi5zdHJpbmdpZnkoY2FjaGUpKTtcbn1cblxubGV0IGNhY2hlOiBTdG9yZTtcbmxldCBzdG9yYWdlOiBTdG9yZTtcbmxldCBjdXJyZW50RGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbDtcbmxldCBjdXJyZW50UmVxdWVzdDogUHJvbWlzZTx2b2lkPiB8IG51bGw7XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25CdXR0b25zKGRhdGVTdHJpbmc6IHN0cmluZykgeyAvLyBkaXNhYmxlIG9yIGVuYWJsZSBuYXYgYnV0dG9uc1xuICBpZiAoIWN1cnJlbnRSZXF1ZXN0ICYmIE5ldHdvcmsub25saW5lKSB7XG4gICAgUC4kQlVUVE9OX1BSRVYucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgUC4kQlVUVE9OX05FWFQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByZXZEYXkgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIC0xKTtcbiAgY29uc3QgbmV4dERheSA9IERheS5hZGQoZGF0ZVN0cmluZywgMSk7XG4gIGlmICghKHByZXZEYXkgaW4gY2FjaGUpICYmICEoZGF0ZVN0cmluZyBpbiBjYWNoZSkpIHtcbiAgICBQLiRCVVRUT05fUFJFVi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgfVxuICBlbHNlIFAuJEJVVFRPTl9QUkVWLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICBpZiAoIShuZXh0RGF5IGluIGNhY2hlKSAmJiAhKGRhdGVTdHJpbmcgaW4gY2FjaGUpKSB7XG4gICAgUC4kQlVUVE9OX05FWFQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cbiAgZWxzZSBQLiRCVVRUT05fTkVYVC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJXZWVrKG1pbmk6IE1pbmlmaWVkV2Vlaykge1xuICBsZXQgZGF0ZVN0cmluZyA9IG1pbmkuZGF0ZTsgLy8gZGF0ZSBpcyBhIG1vbmRheVxuICBmb3IgKGNvbnN0IGkgaW4gbWluaS5kYXlzKSB7XG4gICAgc3RvcmFnZVtkYXRlU3RyaW5nXSA9IG1pbmkuZGF5c1tpXTtcbiAgICBjYWNoZVtkYXRlU3RyaW5nXSA9IG1pbmkuZGF5c1tpXTtcbiAgICBkYXRlU3RyaW5nID0gRGF5LmFkZChkYXRlU3RyaW5nLCAxKTtcbiAgfVxuICBzYXZlQ2FjaGUoY2FjaGUpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KGRhdGVTdHJpbmc6IHN0cmluZykge1xuICBpZiAoY3VycmVudFJlcXVlc3QpIHtcbiAgICBjb25zb2xlLndhcm4oJ2NhbGVuZGFyIHVwZGF0ZTogYWxyZWFkeSB3YWl0aW5nIGZvciBkYXRhJyk7XG4gICAgYXdhaXQgY3VycmVudFJlcXVlc3Q7XG4gICAgaWYoZGF0ZVN0cmluZyAhPT0gY3VycmVudERhdGVTdHJpbmcpIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLlJFUVVFU1RfQ0FOQ0VMTEVEKTtcbiAgfVxuXG4gIGN1cnJlbnRSZXF1ZXN0ID0gKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIE5vdGlmaWNhdGlvbi5zaG93KCdsb2FkaW5nJyk7XG4gICAgYXdhaXQgTmV0d29yay53aGVuT25saW5lKCk7XG4gICAgY29uc3Qgd2VlayA9IGF3YWl0IENvbW11bmljYXRpb24ucmVxdWVzdFdlZWsoZGF0ZVN0cmluZyk7XG4gICAgTm90aWZpY2F0aW9uLmhpZGUoJ2xvYWRpbmcnKTtcbiAgICByZWdpc3RlcldlZWsod2Vlayk7XG4gIH0pKCk7XG5cbiAgYXdhaXQgY3VycmVudFJlcXVlc3Q7XG4gIGN1cnJlbnRSZXF1ZXN0ID0gbnVsbDtcbn1cblxuLy8gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyOiBFcnJvcikgeyAvLyBUT0RPOiB0aGlzIGlzIGRpcnR5XG4vLyAgIGlmIChlcnIubWVzc2FnZSA9PT0gUC5lcnIuQlVUVE9OX05PVF9GT1VORCkge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICBOb3RpZmljYXRpb24uc2hvdygnZGF0ZUVycm9yJywgeyBkdXJhdGlvbjogMzAwMCB9KTtcbi8vICAgICBmaW5pc2hQZW5kaW5nUmVxdWVzdCgpO1xuLy8gICB9XG4vLyAgIGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBQLmVyci5XRUJWSUVXX05PVF9MT0FERUQpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKGVycik7XG4vLyAgICAgTm90aWZpY2F0aW9uLnNob3coJ2NhbGVuZGFyRXJyb3InLCB7IGR1cmF0aW9uOiAzMDAwIH0pO1xuLy8gICB9XG4vLyAgIGVsc2UgaWYgKGVyci5tZXNzYWdlID09PSBQLmVyci5DQUxFTkRBUl9FUlJPUikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICBOb3RpZmljYXRpb24uc2hvdygnY2FsZW5kYXJFcnJvcicsIHsgZHVyYXRpb246IDMwMDAgfSk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICAgIE5vdGlmaWNhdGlvbi5zaG93KCdtYWpvckVycm9yJyk7XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gZHJhd0Zyb21DYWNoZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgaWYgKGRhdGVTdHJpbmcgaW4gY2FjaGUpIHtcbiAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcsIGNhY2hlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkcmF3KGRhdGVTdHJpbmc6IHN0cmluZykge1xuICBjdXJyZW50RGF0ZVN0cmluZyA9IGRhdGVTdHJpbmc7XG4gIGlmIChkYXRlU3RyaW5nIGluIHN0b3JhZ2UpIHtcbiAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcsIHN0b3JhZ2UpO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmIChkYXRlU3RyaW5nIGluIGNhY2hlKSB7XG4gICAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcsIGNhY2hlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBDYWxlbmRhckRyYXdlci5kcmF3KGRhdGVTdHJpbmcpOyAvLyBhY3R1YWxseSBkcmF3cyBub3RoaW5nXG4gICAgICB1cGRhdGVOYXZpZ2F0aW9uQnV0dG9ucyhkYXRlU3RyaW5nKTtcbiAgICB9XG4gICAgYXdhaXQgbWFrZVJlcXVlc3QoZGF0ZVN0cmluZyk7XG4gICAgaWYoY3VycmVudERhdGVTdHJpbmcgPT0gZGF0ZVN0cmluZykgYXdhaXQgZHJhdyhkYXRlU3RyaW5nKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhY2hlID0gbG9hZENhY2hlKCk7XG4gIHN0b3JhZ2UgPSB7fTtcbiAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZVN0cmluZyB8fCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSB7XG4gIGluaXQ6IGluaXQsXG4gIGRyYXc6IGRyYXcsXG4gIGRyYXdGcm9tQ2FjaGU6IGRyYXdGcm9tQ2FjaGUsXG4gIGdldCBjdXJyZW50RGF0ZVN0cmluZygpIHtcbiAgICBpZighY3VycmVudERhdGVTdHJpbmcpIHRocm93IG5ldyBDYWxlbmRhckVycm9yKCdjYWxlbmRhciBoYXMgbm8gY3VycmVudCBkYXknKTtcbiAgICByZXR1cm4gY3VycmVudERhdGVTdHJpbmc7XG4gIH0sXG59XG4iLCJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcidcblxuZXhwb3J0IGludGVyZmFjZSBFeHBhbmRlZENvdXJzZSB7XG4gIHN0YXJ0OiB7IGhvdXI6IG51bWJlcjsgbWludXRlOiBudW1iZXIgfTtcbiAgZW5kOiB7IGhvdXI6IG51bWJlcjsgbWludXRlOiBudW1iZXIgfTtcbiAgdGl0bGU6IHN0cmluZztcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICB1bmF2YWlsYWJsZTogYm9vbGVhbjtcbiAgYmxhY2tsaXN0ZWQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBNaW5pZmllZENvdXJzZSA9IFtcbiAgW1xuICAgIG51bWJlciwgLy8gc3RhcnQgaG91clxuICAgIG51bWJlciAvLyBzdGFydCBtaW51dGVcbiAgXSxcbiAgW1xuICAgIG51bWJlciwgLy8gZW5kIGhvdXJcbiAgICBudW1iZXIgLy8gZW5kIG1pbnV0ZVxuICBdLFxuICBzdHJpbmcsIC8vIHRpdGxlXG4gIHN0cmluZyAvLyBiYWNrZ3JvdW5kXG5dO1xuXG5leHBvcnQgdHlwZSBNaW5pZmllZERheSA9IE1pbmlmaWVkQ291cnNlW107XG5leHBvcnQgdHlwZSBFeHBhbmRlZERheSA9IEV4cGFuZGVkQ291cnNlW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmUge1xuICBba2V5OiBzdHJpbmddOiBNaW5pZmllZERheTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWluaWZpZWRXZWVrIHtcbiAgZGF0ZTogc3RyaW5nOyAvLyBkYXRlIGlzIGEgbW9uZGF5XG4gIGRheXM6IE1pbmlmaWVkRGF5W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRDb3Vyc2UobWluaTogTWluaWZpZWRDb3Vyc2UpIHtcbiAgY29uc3QgZXhwYW5kZWQ6IEV4cGFuZGVkQ291cnNlID0ge1xuICAgIHN0YXJ0OiB7IGhvdXI6IG1pbmlbMF1bMF0sIG1pbnV0ZTogbWluaVswXVsxXSB9LFxuICAgIGVuZDogeyBob3VyOiBtaW5pWzFdWzBdLCBtaW51dGU6IG1pbmlbMV1bMV0gfSxcbiAgICB0aXRsZTogbWluaVsyXSwgYmFja2dyb3VuZDogbWluaVszXSxcbiAgICB1bmF2YWlsYWJsZTogZmFsc2UsIGJsYWNrbGlzdGVkOiBmYWxzZVxuICB9O1xuXG4gIGlmIChleHBhbmRlZC50aXRsZSA9PT0gbnVsbCkge1xuICAgIGV4cGFuZGVkLnRpdGxlID0gJ0ZFUk3DiSc7XG4gICAgZXhwYW5kZWQudW5hdmFpbGFibGUgPSB0cnVlO1xuICB9XG4gIGVsc2Uge1xuICAgIGV4cGFuZGVkLmJsYWNrbGlzdGVkID0gRmlsdGVyLmZpbHRlckVsZW1lbnQoZXhwYW5kZWQpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRGF5KG1pbmk6IE1pbmlmaWVkRGF5KSB7XG4gIGNvbnN0IGV4cGFuZGVkOiBFeHBhbmRlZERheSA9IFtdO1xuXG4gIGZvcihjb25zdCBpIGluIG1pbmkpIHtcbiAgICBleHBhbmRlZFtpXSA9IGV4cGFuZENvdXJzZShtaW5pW2ldKTtcbiAgfVxuXG4gIGV4cGFuZGVkLnNvcnQoKGEsIGIpID0+ICFhLmJsYWNrbGlzdGVkICYmIGIuYmxhY2tsaXN0ZWQgPyAtMSA6IDApOyAvLyBub3QgYmxhY2tsaXN0ZWQgY29tZXMgZmlyc3QgKDEgPD0+IGIgY29tZXMgZmlyc3QpXG4gIHJldHVybiBleHBhbmRlZDtcbn1cbiIsImltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgRXhwYW5kZWRDb3Vyc2UsIEV4cGFuZGVkRGF5LCBTdG9yZSwgZXhwYW5kRGF5IH0gZnJvbSAnLi9jYWxlbmRhckRhdGEnXG5cbmZ1bmN0aW9uIGRyYXdMaW5lcygpIHtcbiAgY29uc3Qgbl9ob3VycyA9IFAuRU5EX0hPVVIgLSBQLlNUQVJUX0hPVVI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbl9ob3VyczsgaSsrKSB7XG4gICAgY29uc3QgaG91ciA9IGkgKyBQLlNUQVJUX0hPVVI7XG4gICAgY29uc3QgJGhvdXIgPSAkKFAuaHRtbC5IT1VSKTtcbiAgICAkaG91ci5odG1sKGhvdXIgKyAnIGgnKTtcbiAgICAkaG91ci5jc3Moe1xuICAgICAgZ3JpZFJvdzogKGkgKiA0ICsgMSkgKyBcIlwiXG4gICAgfSlcbiAgICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkaG91cik7XG4gICAgY29uc3QgJGxpbmUgPSAkKFAuaHRtbC5IT1VSX0xJTkUpO1xuICAgICRsaW5lLmNzcyh7XG4gICAgICBncmlkUm93OiAoaSAqIDQgKyAxKSArIFwiXCJcbiAgICB9KVxuICAgIFAuJENPVVJTRV9DT05UQUlORVIuYXBwZW5kKCRsaW5lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRyaXgoKTogYm9vbGVhbltdW10ge1xuICBjb25zdCBtYXRyaXggPSBbXVxuICBjb25zdCBuX2hvdXJzID0gUC5FTkRfSE9VUiAtIFAuU1RBUlRfSE9VUjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0ICogbl9ob3VyczsgaSsrKSB7XG4gICAgbWF0cml4W2ldID0gW107XG4gIH1cbiAgcmV0dXJuIG1hdHJpeDtcbn1cblxuZnVuY3Rpb24gZ2V0RW1wdHlTcGFjZShtYXRyaXg6IGJvb2xlYW5bXVtdLCBlbDogRXhwYW5kZWRDb3Vyc2UpIHtcbiAgY29uc3Qgc3RhcnRSb3cgPSAoZWwuc3RhcnQuaG91ciAtIFAuU1RBUlRfSE9VUikgKiA0ICsgZWwuc3RhcnQubWludXRlIC8gMTVcbiAgY29uc3QgZW5kUm93ID0gKGVsLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBlbC5lbmQubWludXRlIC8gMTVcbiAgY29uc3Qgd2lkdGggPSBlbC5ibGFja2xpc3RlZCA/IDEgOiAyO1xuICBsZXQgeSA9IDA7XG5cbiAgd2hpbGUgKG1hdHJpeFtzdGFydFJvd11beV0gPT09IHRydWUpIHkrKztcblxuICBjb25zdCBjaGVja1lPZmZzZXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgZm9yIChsZXQgaiA9IHk7IGogPCB5ICsgd2lkdGg7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXRyaXhbaV1bal0gPT09ICd1bmRlZmluZWQnKSBtYXRyaXhbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9O1xuICB3aGlsZSAoIWNoZWNrWU9mZnNldCh5KSkgeSsrO1xuXG4gIGZvciAobGV0IGogPSB5OyBqIDwgeSArIHdpZHRoOyBqKyspIHsgLy8gZmlsbCBlbXB0eSBzcGFjZVxuICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICBtYXRyaXhbaV1bal0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDE6IHksXG4gICAgeDI6IHkgKyB3aWR0aCxcbiAgICB5MTogc3RhcnRSb3cgKyAxLFxuICAgIHkyOiBlbmRSb3cgKyAxXG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGlkZXMoJGNvdXJzZTE6IEpRdWVyeTxIVE1MRWxlbWVudD4sICRjb3Vyc2UyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1zdGFydCcpKTtcbiAgY29uc3QgZW5kID0gcGFyc2VJbnQoJGNvdXJzZTEuY3NzKCdncmlkLXJvdy1lbmQnKSk7XG4gIGNvbnN0IG90aGVyU3RhcnQgPSBwYXJzZUludCgkY291cnNlMi5jc3MoJ2dyaWQtcm93LXN0YXJ0JykpO1xuICBjb25zdCBvdGhlckVuZCA9IHBhcnNlSW50KCRjb3Vyc2UyLmNzcygnZ3JpZC1yb3ctZW5kJykpO1xuICByZXR1cm4gKHN0YXJ0IDwgb3RoZXJFbmQgJiYgb3RoZXJTdGFydCA8IGVuZCk7XG59XG5cbmZ1bmN0aW9uIGxhbmRzY2FwZVhhbGlnbigkZGF5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG4gIGNvbnN0IHBsYWNlZCA9IFtdO1xuICBjb25zdCAkY291cnNlcyA9ICRkYXkuY2hpbGRyZW4oKTtcbiAgJGNvdXJzZXMuZGF0YSgneCcsIDApO1xuICAkY291cnNlcy5kYXRhKCd4TWF4JywgMCk7XG5cbiAgLy8gZmluZCB4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgcGxhY2VkKSB7XG4gICAgICBjb25zdCAkY291cnNlMiA9ICQoY291cnNlMik7XG4gICAgICBjb25zdCB4MiA9ICRjb3Vyc2UyLmRhdGEoJ3gnKTtcbiAgICAgIGlmICh4MSA9PT0geDIgJiYgY29sbGlkZXMoJGNvdXJzZTEsICRjb3Vyc2UyKSkge1xuICAgICAgICB4MSsrO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4JywgeDEpO1xuICAgIHBsYWNlZC5wdXNoKGNvdXJzZTEpO1xuICB9XG5cbiAgLy8gZmluZCB4TWF4XG4gIGZvciAoY29uc3QgY291cnNlMSBvZiAkY291cnNlcykge1xuICAgIGNvbnN0ICRjb3Vyc2UxID0gJChjb3Vyc2UxKTtcbiAgICBsZXQgeE1heDEgPSAkY291cnNlMS5kYXRhKCd4Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZTIgb2YgJGNvdXJzZXMpIHtcbiAgICAgIGNvbnN0ICRjb3Vyc2UyID0gJChjb3Vyc2UyKTtcbiAgICAgIGNvbnN0IHhNYXgyID0gJGNvdXJzZTIuZGF0YSgneCcpO1xuICAgICAgaWYgKGNvbGxpZGVzKCRjb3Vyc2UxLCAkY291cnNlMikpIHtcbiAgICAgICAgeE1heDEgPSBNYXRoLm1heCh4TWF4MSwgeE1heDIpO1xuICAgICAgfVxuICAgIH1cbiAgICAkY291cnNlMS5kYXRhKCd4TWF4JywgeE1heDEpO1xuICB9XG5cbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgJGNvdXJzZXMpIHtcbiAgICBjb25zdCAkY291cnNlID0gJChjb3Vyc2UpO1xuICAgIGNvbnN0IHggPSAkY291cnNlLmRhdGEoJ3gnKTtcbiAgICBjb25zdCB4TWF4ID0gJGNvdXJzZS5kYXRhKCd4TWF4JykgKyAxO1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgICdsZWZ0JzogMTAwIC8geE1heCAqIHggKyAnJScsXG4gICAgICAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclICsgMXB4KScgLy8gMXB4IGZvciB0aGUgY3NzIGJvcmRlclxuICAgIH0pO1xuICAgIGlmICh4ICsgMSA9PT0geE1heCkge1xuICAgICAgJGNvdXJzZS5jc3MoeyAnd2lkdGgnOiAnY2FsYygnICsgMTAwIC8geE1heCArICclKScgfSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0RhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTsgLy8gdG9kbyBtb3ZlIHRvIERheSBhbmQgcHJveHlcbiAgY29uc3QgZGF5cyA9IFsnRGltYW5jaGUnLCAnTHVuZGknLCAnTWFyZGknLCAnTWVyY3JlZGknLCAnSmV1ZGknLCAnVmVuZHJlZGknLCAnU2FtZWRpJ107XG4gIGNvbnN0IG1vbnRocyA9IFsnSmFudmllcicsICdGw6l2cmllcicsICdNYXJzJywgJ0F2cmlsJywgJ01haScsICdKdWluJywgJ0p1aWxsZXQnLCAnQW/Du3QnLCAnU2VwdGVtYnJlJywgJ09jdG9icmUnLCAnTm92ZW1icmUnLCAnRMOpY2VtYnJlJ107XG4gIGNvbnN0IHN0ciA9IGRheXNbZC5nZXREYXkoKV0gKyAnICcgKyBkLmdldERhdGUoKSArICcgJyArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xuICBQLiREQVRFLmh0bWwoc3RyKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNQb3J0cmFpdChkYXk6IEV4cGFuZGVkRGF5KSB7XG4gIGNvbnN0IG1hdHJpeCA9IGNyZWF0ZU1hdHJpeCgpO1xuICBsZXQgbWF4Q29sdW1uID0gMztcbiAgZm9yIChjb25zdCBjb3Vyc2Ugb2YgZGF5KSB7XG4gICAgY29uc3QgJGNvdXJzZSA9ICQoUC5odG1sLkNPVVJTRSk7XG4gICAgY29uc3QgcG9zID0gZ2V0RW1wdHlTcGFjZShtYXRyaXgsIGNvdXJzZSk7XG4gICAgJGNvdXJzZS5jc3Moe1xuICAgICAgJ2dyaWQtcm93LXN0YXJ0JzogcG9zLnkxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBwb3MueTIgKyBcIlwiLFxuICAgICAgJ2dyaWQtY29sdW1uLXN0YXJ0JzogcG9zLngxICsgMiArIFwiXCIsXG4gICAgICAnZ3JpZC1jb2x1bW4tZW5kJzogcG9zLngyICsgMiArIFwiXCJcbiAgICB9KTtcbiAgICBtYXhDb2x1bW4gPSBNYXRoLm1heChwb3MueDIgKyAyLCBtYXhDb2x1bW4pO1xuICAgIGlmIChjb3Vyc2UuYmxhY2tsaXN0ZWQpICRjb3Vyc2UuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgZWxzZSAkY291cnNlLmNzcygnYmFja2dyb3VuZCcsIGNvdXJzZS5iYWNrZ3JvdW5kKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgUC4kQ09VUlNFX0NPTlRBSU5FUi5hcHBlbmQoJGNvdXJzZSk7XG4gIH1cbiAgJChQLiQuSE9VUl9MSU5FUykuY3NzKCdncmlkLWNvbHVtbi1lbmQnLCBtYXhDb2x1bW4gKyBcIlwiKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NvdXJzZXNMYW5kc2NhcGUoZGF5OiBFeHBhbmRlZERheSwgZGF5TnVtYmVyOiBudW1iZXIpIHtcbiAgY29uc3QgJGRheSA9ICQoUC5odG1sLkxBTkRTQ0FQRV9EQVkpO1xuICAkZGF5LmNzcyh7XG4gICAgZ3JpZENvbHVtbjogZGF5TnVtYmVyICsgMSArIFwiXCIsXG4gIH0pO1xuICBQLiRDT1VSU0VfQ09OVEFJTkVSLmFwcGVuZCgkZGF5KTtcblxuICBmb3IgKGNvbnN0IGNvdXJzZSBvZiBkYXkpIHtcbiAgICBpZiAoY291cnNlLmJsYWNrbGlzdGVkKSBjb250aW51ZTtcbiAgICBjb25zdCAkY291cnNlID0gJChQLmh0bWwuQ09VUlNFKTtcbiAgICBpZiAoY291cnNlLnVuYXZhaWxhYmxlKSAkY291cnNlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuXG4gICAgY29uc3Qgc3RhcnRSb3cgPSAoY291cnNlLnN0YXJ0LmhvdXIgLSBQLlNUQVJUX0hPVVIpICogNCArIGNvdXJzZS5zdGFydC5taW51dGUgLyAxNTtcbiAgICBjb25zdCBlbmRSb3cgPSAoY291cnNlLmVuZC5ob3VyIC0gUC5TVEFSVF9IT1VSKSAqIDQgKyBjb3Vyc2UuZW5kLm1pbnV0ZSAvIDE1O1xuICAgICRjb3Vyc2UuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IGNvdXJzZS5iYWNrZ3JvdW5kLFxuICAgICAgJ2dyaWQtcm93LXN0YXJ0Jzogc3RhcnRSb3cgKyAxICsgXCJcIixcbiAgICAgICdncmlkLXJvdy1lbmQnOiBlbmRSb3cgKyAxICsgXCJcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgJHRleHRXcmFwcGVyID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlRfV1JBUFBFUik7XG4gICAgY29uc3QgJHRleHRDb250ZW50ID0gJChQLmh0bWwuQ09VUlNFX0NPTlRFTlQpO1xuICAgICR0ZXh0Q29udGVudC5odG1sKGNvdXJzZS50aXRsZSk7XG4gICAgJHRleHRXcmFwcGVyLmFwcGVuZCgkdGV4dENvbnRlbnQpO1xuICAgICRjb3Vyc2UuYXBwZW5kKCR0ZXh0V3JhcHBlcik7XG4gICAgJGRheS5hcHBlbmQoJGNvdXJzZSlcbiAgfVxuICBsYW5kc2NhcGVYYWxpZ24oJGRheSk7XG59XG5cbnR5cGUgRHJhd01vZGUgPSAncG9ydHJhaXQnIHwgJ2xhbmRzY2FwZSc7XG5sZXQgZHJhd01vZGU6IERyYXdNb2RlID0gJ3BvcnRyYWl0JztcblxuZnVuY3Rpb24gc2V0RHJhd01vZGUobW9kZTogRHJhd01vZGUpIHtcbiAgZHJhd01vZGUgPSBtb2RlO1xufVxuXG5mdW5jdGlvbiBkcmF3TGFuZHNjYXBlKGRhdGVTdHJpbmc6IHN0cmluZywgc3RvcmFnZT86IFN0b3JlKSB7XG4gIFAuJExBTkRTQ0FQRV9DVVJSRU5UX0RBWS5jc3MoJ2dyaWQtY29sdW1uJywgRGF5LmRheShkYXRlU3RyaW5nKSArIDEgKyBcIlwiKTtcbiAgaWYgKHN0b3JhZ2UpIHtcbiAgICBkYXRlU3RyaW5nID0gRGF5Lm1vbmRheShkYXRlU3RyaW5nKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDY7IGkrKykge1xuICAgICAgY29uc3QgZGF5ID0gZXhwYW5kRGF5KHN0b3JhZ2VbZGF0ZVN0cmluZ10pO1xuICAgICAgZHJhd0NvdXJzZXNMYW5kc2NhcGUoZGF5LCBpKTtcbiAgICAgIGRhdGVTdHJpbmcgPSBEYXkuYWRkKGRhdGVTdHJpbmcsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3UG9ydHJhaXQoZGF0ZVN0cmluZzogc3RyaW5nLCBzdG9yYWdlPzogU3RvcmUpIHtcbiAgaWYgKHN0b3JhZ2UpIHtcbiAgICBjb25zdCBkYXkgPSBleHBhbmREYXkoc3RvcmFnZVtkYXRlU3RyaW5nXSk7XG4gICAgZHJhd0NvdXJzZXNQb3J0cmFpdChkYXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXcoZGF0ZVN0cmluZzogc3RyaW5nLCBzdG9yYWdlPzogU3RvcmUpIHtcbiAgTm90aWZpY2F0aW9uLmhpZGUoJ2NhbGVuZGFyRXJyb3InKTtcbiAgJChQLiQuQ09VUlNFKS5yZW1vdmUoKTtcbiAgJChQLiQuTEFORFNDQVBFX0RBWSkucmVtb3ZlKCk7XG4gICQoUC4kQ0FMRU5EQVIpLnJlbW92ZUNsYXNzKCdwb3J0cmFpdCBsYW5kc2NhcGUnKS5hZGRDbGFzcyhkcmF3TW9kZSk7XG4gIGlmIChkcmF3TW9kZSA9PT0gJ2xhbmRzY2FwZScpIGRyYXdMYW5kc2NhcGUoZGF0ZVN0cmluZywgc3RvcmFnZSk7XG4gIGVsc2UgZHJhd1BvcnRyYWl0KGRhdGVTdHJpbmcsIHN0b3JhZ2UpO1xuICBpZiAoc3RvcmFnZSAhPT0gbnVsbCkge1xuICAgIFAuJEJVVFRPTl9QUkVWLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgIFAuJEJVVFRPTl9ORVhULnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICB9XG4gIGRyYXdEYXRlKGRhdGVTdHJpbmcpO1xufVxuXG5kcmF3TGluZXMoKTtcblxuZXhwb3J0IGNvbnN0IENhbGVuZGFyRHJhd2VyID0ge1xuICBkcmF3OiBkcmF3LFxuICBzZXREcmF3TW9kZTogc2V0RHJhd01vZGVcbn1cbiIsImltcG9ydCB7IERheSB9IGZyb20gJy4vZGF5J1xuaW1wb3J0IHsgSW5hcHBCcm93c2VyIH0gZnJvbSAnLi9pbmFwcGJyb3dzZXInXG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IE1pbmlmaWVkV2VlayB9IGZyb20gJy4vY2FsZW5kYXJEYXRhJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nUmVxdWVzdChmdW5jdGlvbk5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBzdHJpbmcge1xuICBjb25zdCBzdHJBcmdzID0gW11cbiAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgc3RyQXJncy5wdXNoKCdcIicgKyBhcmcgKyAnXCInKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBzdHJBcmdzLnB1c2goYXJnID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgc3RyQXJncy5wdXNoKGFyZy50b1N0cmluZygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCdyZXF1ZXN0IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSArICcoJyArIHN0ckFyZ3Muam9pbignLCcpICsgJyknO1xufVxuXG5pbnRlcmZhY2UgUmVxdWVzdE1hcCB7XG4gICdwYXJzZVRoaXNXZWVrJzogTWluaWZpZWRXZWVrO1xuICAnaXNXZWVrTG9hZGVkJzogYm9vbGVhbjtcbiAgJ2dldEN1cnJlbnREYXRlJzogc3RyaW5nO1xuICAnY2xpY2tCdXR0b24nOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gcmVxdWVzdDxUIGV4dGVuZHMga2V5b2YgUmVxdWVzdE1hcD4oZnVuY3Rpb25OYW1lOiBULCBhcmdzOiBhbnlbXSk6IFByb21pc2U8UmVxdWVzdE1hcFtUXT4ge1xuICBjb25zdCByZXEgPSBjcmVhdGVTdHJpbmdSZXF1ZXN0KGZ1bmN0aW9uTmFtZSwgYXJncyk7XG4gIHJldHVybiBJbmFwcEJyb3dzZXIuZXZhbChyZXEpO1xufVxuXG5mdW5jdGlvbiBwcm9taXNlVGltZW91dCh0aW1lb3V0OiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FpdFVudGlsPFQgZXh0ZW5kcyBrZXlvZiBSZXF1ZXN0TWFwPihmdW5jdGlvbk5hbWU6IFQsIGFyZ3M6IGFueVtdLCBleHBlY3RlZFJlc3VsdDogUmVxdWVzdE1hcFtUXSwgZnJlcXVlbmN5OiBudW1iZXIgPSBQLmNvbS5ERUZBVUxUX1VQREFURV9JTlRFUlZBTCkge1xuICBsZXQgaW50ZXJ2YWw6IG51bWJlcjtcblxuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICBmdW5jdGlvbiB0aGVuKHJlczogUmVxdWVzdE1hcFtUXSkge1xuICAgICAgaWYgKHJlcyA9PSBleHBlY3RlZFJlc3VsdCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBzZXRUaW1lb3V0KGluXywgZnJlcXVlbmN5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbl8oKSB7XG4gICAgICByZXF1ZXN0KGZ1bmN0aW9uTmFtZSwgYXJncylcbiAgICAgICAgLnRoZW4odGhlbilcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbl8oKTtcblxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlZWsoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gIGRhdGVTdHJpbmcgPSBEYXkubW9uZGF5KGRhdGVTdHJpbmcpO1xuICBhd2FpdCB3YWl0VW50aWwoJ2lzV2Vla0xvYWRlZCcsIFtdLCB0cnVlKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBhd2FpdCByZXF1ZXN0KCdnZXRDdXJyZW50RGF0ZScsIFtdKTtcblxuICBpZiAoY3VycmVudERhdGUgIT09IGRhdGVTdHJpbmcpIHsgLy8gbXVzdCBsb2FkIHdlZWsgYmVmb3JlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgnY2xpY2tCdXR0b24nLCBbZGF0ZVN0cmluZ10pXG4gICAgaWYgKCFyZXMpIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLkJVVFRPTl9OT1RfRk9VTkQpO1xuICAgIGVsc2UgYXdhaXQgcHJvbWlzZVRpbWVvdXQoUC5jb20uVElNRU9VVF9BRlRFUl9CVVRUT05fUFJFU1MpO1xuICAgIGF3YWl0IHdhaXRVbnRpbCgnZ2V0Q3VycmVudERhdGUnLCBbXSwgZGF0ZVN0cmluZyk7XG4gICAgYXdhaXQgd2FpdFVudGlsKCdpc1dlZWtMb2FkZWQnLCBbXSwgdHJ1ZSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KCdwYXJzZVRoaXNXZWVrJywgW10pXG4gIGNvbnNvbGUubG9nKCdyZWNlaXZlZCB3ZWVrJywgcmVzKTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGNvbnN0IENvbW11bmljYXRpb24gPSAoZnVuY3Rpb24oKSB7IC8vIGNvbW11bmljYXRpb24gd2l0aCB3ZWJ2aWV3XG5cbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0V2VlazogcmVxdWVzdFdlZWtcbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi9kYXknXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInXG5pbXBvcnQgQ2FsZW5kYXJFcnJvciBmcm9tICcuL2Vycm9yJ1xuXG5jb25zdCBtb250aHMgPSBbJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSddO1xuY29uc3Qgd2VlayA9IFsnTCcsICdNJywgJ00nLCAnSicsICdWJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgZHJhd25EYXRlID0gZGF0ZVN0cmluZztcbiAgUC4kREFURV9QSUNLRVIuaHRtbChcIlwiKTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vlaykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU5hbWVcIj4nICsgZGF5ICsgJzwvZGl2PicpXG4gIH1cblxuICBjb25zdCBtb250aCA9IERheS5tb250aChkYXRlU3RyaW5nKTtcbiAgbGV0IGRhdGUgPSBEYXkuZmlyc3REYXlPZk1vbnRoKGRhdGVTdHJpbmcpO1xuXG4gIFAuJERBVEVfUElDS0VSX01PTlRILmh0bWwobW9udGhzW21vbnRoXSk7XG5cbiAgY29uc3Qgb2Zmc2V0ID0gRGF5LmRheShkYXRlKSAtIDE7IC8vIGZyaS0+MSwgdGh1LT4yLCAuLi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXQ7IGkrKykge1xuICAgIFAuJERBVEVfUElDS0VSLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRheU51bWJlciBkaXNhYmxlZFwiPicgKyBEYXkuZGF0ZShkYXRlKSArICc8L2Rpdj4nKTtcbiAgfVxuXG4gIGNvbnN0IHRvZGF5ID0gRGF5LnRvZGF5KCk7XG4gIGNvbnN0IGN1cnJlbnQgPSBDYWxlbmRhci5jdXJyZW50RGF0ZVN0cmluZztcbiAgd2hpbGUgKERheS5tb250aChkYXRlKSA9PT0gbW9udGgpIHtcbiAgICBjb25zdCAkZWwgPSAkKCc8ZGl2IGNsYXNzPVwiZGF5TnVtYmVyXCIgZGF0ZT1cIicgKyBkYXRlICsgJ1wiPicgKyBEYXkuZGF0ZShkYXRlKSArICc8L2Rpdj4nKTtcbiAgICBpZiAoZGF0ZSA9PT0gY3VycmVudCkgJGVsLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIGlmIChkYXRlID09PSB0b2RheSkgJGVsLmFkZENsYXNzKCd0b2RheScpO1xuICAgICRlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuICAgICAgJGJ0bi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSAkYnRuLmF0dHIoJ2RhdGUnKTtcbiAgICAgIGlmKGRhdGVTdHJpbmcpIENhbGVuZGFyLmRyYXcoZGF0ZVN0cmluZyk7XG4gICAgICBlbHNlIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFwibWlzc2luZyBhdHRyaWJ1dGUgJ2RhdGUnIG9uIGRhdGVwaWNrZXIgYnV0dG9uXCIpO1xuICAgIH0pXG4gICAgUC4kREFURV9QSUNLRVIuYXBwZW5kKCRlbCk7XG4gICAgZGF0ZSA9IERheS5hZGQoZGF0ZSwgMSk7XG4gIH1cbn1cblxubGV0IGRyYXduRGF0ZTogc3RyaW5nO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBkcmF3bkRhdGUgPSBEYXkudG9kYXkoKTtcblxuICBQLiREQVRFX1BJQ0tFUl9QUkVWLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkcmF3bkRhdGUpO1xuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XG4gICAgY3JlYXRlKGQudG9EYXRlU3RyaW5nKCkpO1xuICB9KVxuICBQLiREQVRFX1BJQ0tFUl9ORVhULmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkcmF3bkRhdGUpO1xuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XG4gICAgY3JlYXRlKGQudG9EYXRlU3RyaW5nKCkpO1xuICB9KVxuXG4gIFAuJERBVEVfUElDS0VSX0NPTlRBSU5FUi5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgIGlmICghJHRhcmdldC5pcyhQLiREQVRFX1BJQ0tFUl9QUkVWKSAmJiAhJHRhcmdldC5pcyhQLiREQVRFX1BJQ0tFUl9ORVhUKSkge1xuICAgICAgUC4kREFURV9QSUNLRVJfQ09OVEFJTkVSLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB9XG4gIH0pXG5cbn1cbmluaXQoKTtcblxuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXIgPSB7XG4gIGNyZWF0ZTogY3JlYXRlXG59O1xuIiwiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5cbmZ1bmN0aW9uIGFkZERheShkOiBEYXRlLCBkYXlzOiBudW1iZXIpIHtcbiAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gIGlmIChkLmdldERheSgpID09PSAwIHx8IGQuZ2V0RGF5KCkgPT09IDYpIHtcbiAgICBpZiAoZGF5cyA+PSAwKSBhZGREYXkoZCwgMSk7XG4gICAgZWxzZSBhZGREYXkoZCwgLTEpO1xuICB9XG4gIHJldHVybiBkO1xufVxuXG5mdW5jdGlvbiB0b2RheSgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGlmIChkYXRlLmdldEhvdXJzKCkgPj0gUC5UT0RBWV9NQVhfSE9VUikgLy8gc2kgcGFzc8OpIFRPREFZX01BWF9IT1VSLCBwYXNzZSBhIGxlbmRlbWFpbiBtYXRpblxuICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgMjQgLSBQLlRPREFZX01BWF9IT1VSICsgUC5TVEFSVF9IT1VSKTtcbiAgYWRkRGF5KGRhdGUsIDApOyAvLyBkaW1hbmNoZSBkZXZpZW50IGx1bmRpXG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpO1xufVxuXG5leHBvcnQgY29uc3QgRGF5ID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgdG9kYXksXG4gICAgZGF0ZTogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykuZ2V0RGF0ZSgpO1xuICAgIH0sXG4gICAgbW9udGg6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldE1vbnRoKCk7XG4gICAgfSxcbiAgICBkYXk6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLmdldERheSgpO1xuICAgIH0sXG4gICAgZmlyc3RNb25kYXlPZk1vbnRoOiBmdW5jdGlvbihkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgIGQuc2V0RGF0ZSgxKTtcbiAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgKyAoZGF5ID09IDAgPyAxIDogZGF5ID09IDEgPyAwIDogNyAtIGRheSk7XG4gICAgICBkLnNldERhdGUoZGlmZik7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9LFxuICAgIGZpcnN0RGF5T2ZNb250aDogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBkLnNldERhdGUoMSk7XG4gICAgICBhZGREYXkoZCwgMCk7XG4gICAgICByZXR1cm4gZC50b0RhdGVTdHJpbmcoKTtcbiAgICB9LFxuICAgIG1vbmRheTogZnVuY3Rpb24oZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgICAgY29uc3QgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PSAwID8gLTYgOiAxKTsgLy8gYWRqdXN0IHdoZW4gZGF5IGlzIHN1bmRheVxuICAgICAgZC5zZXREYXRlKGRpZmYpO1xuICAgICAgcmV0dXJuIGQudG9EYXRlU3RyaW5nKCk7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uKGRhdGVTdHJpbmc6IHN0cmluZywgZGF5czogbnVtYmVyKSB7XG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgYWRkRGF5KGQsIGRheXMpO1xuICAgICAgcmV0dXJuIGQudG9EYXRlU3RyaW5nKCk7XG4gICAgfVxuICB9O1xuXG59KSgpO1xuIiwiaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5uYW1lID0gJ0NhbGVuZGFyRXJyb3InO1xuXG4gICAgaWYobWVzc2FnZSkgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgICBjYXNlIFAuZXJyLkNBTEVOREFSX0VSUk9SOlxuICAgICAgY2FzZSBQLmVyci5XRUJWSUVXX05PVF9MT0FERUQ6XG4gICAgICAgIE5vdGlmaWNhdGlvbi5zaG93KCdjYWxlbmRhckVycm9yJywgeyBkdXJhdGlvbjogMzAwMCB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgUC5lcnIuQlVUVE9OX05PVF9GT1VORDpcbiAgICAgICAgTm90aWZpY2F0aW9uLnNob3coJ2RhdGVFcnJvcicsIHsgZHVyYXRpb246IDMwMDAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFAuZXJyLlJFUVVFU1RfQ0FOQ0VMTEVEOlxuICAgICAgICBjb25zb2xlLndhcm4oJ0EgcmVxdWVzdCB3YXMgY2FuY2VsbGVkJylcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIE5vdGlmaWNhdGlvbi5zaG93KCdtYWpvckVycm9yJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb3h5IGFzIFAgfSBmcm9tICcuL3Byb3h5J1xuXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4vY2FsZW5kYXInXG5pbXBvcnQgeyBDYWxlbmRhckRyYXdlciB9IGZyb20gJy4vY2FsZW5kYXJEcmF3ZXInXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSdcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXInXG5cbiQoZG9jdW1lbnQuYm9keSkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgY29uc3Qgc2V0ID0gW2UudGFyZ2V0LCAuLi4kKGUudGFyZ2V0KS5wYXJlbnRzKCldO1xuICBmb3IgKGNvbnN0IGVsIG9mIHNldCkge1xuICAgIGlmICgoZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0IHx8IGVsLnNjcm9sbFdpZHRoID4gZWwuY2xpZW50V2lkdGgpICYmICQoZWwpLmNzcygnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAkKGVsKS5hZGRDbGFzcygndG91Y2hlZCcpLm9uZSgndG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndG91Y2hlZCcpO1xuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IGxhbmRzY2FwZSA9IChzY3JlZW4ub3JpZW50YXRpb24udHlwZS5pbmRleE9mKCdwb3J0cmFpdCcpID09PSAtMSk7XG5DYWxlbmRhckRyYXdlci5zZXREcmF3TW9kZShsYW5kc2NhcGUgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCcpO1xuXG5mdW5jdGlvbiBvblNjcmVlbk9yaWVudENoYW5nZSgpIHtcbiAgY29uc3QgbGFuZHNjYXBlID0gKHNjcmVlbi5vcmllbnRhdGlvbi50eXBlLmluZGV4T2YoJ3BvcnRyYWl0JykgPT09IC0xKTtcbiAgQ2FsZW5kYXJEcmF3ZXIuc2V0RHJhd01vZGUobGFuZHNjYXBlID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnKTtcbiAgQ2FsZW5kYXIuZHJhdyhDYWxlbmRhci5jdXJyZW50RGF0ZVN0cmluZyk7XG59XG5zY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25TY3JlZW5PcmllbnRDaGFuZ2UpO1xuXG5QLiRCVVRUT05fU0VUVElOR1MuY2xpY2soZnVuY3Rpb24oKSB7XG4gIFNldHRpbmdzLnNob3coKVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgQ2FsZW5kYXIuZHJhdyhDYWxlbmRhci5jdXJyZW50RGF0ZVN0cmluZyk7IC8vIHJlZHJhdyB3aXRoIG5ldyBmaWx0ZXJzXG4gICAgfSk7XG59KTtcblxuUC4kQlVUVE9OX1BSRVYuY2xpY2soZnVuY3Rpb24oKSB7XG4gIGlmIChQLiRCVVRUT05fUFJFVi5pcygnLmRpc2FibGVkJykpIHJldHVybjtcbiAgY29uc3QgZGF5ID0gRGF5LmFkZChDYWxlbmRhci5jdXJyZW50RGF0ZVN0cmluZywgLTEpO1xuICBDYWxlbmRhci5kcmF3KGRheSkudGhlbihmdW5jdGlvbigpIHtcbiAgICBQLiRDQUxFTkRBUl9DT05URU5ULnNjcm9sbFRvcCgwKS5zY3JvbGxMZWZ0KDApO1xuICB9KTtcbn0pO1xuUC4kQlVUVE9OX05FWFQuY2xpY2soZnVuY3Rpb24oKSB7XG4gIGlmIChQLiRCVVRUT05fTkVYVC5pcygnLmRpc2FibGVkJykpIHJldHVybjtcbiAgY29uc3QgZGF5ID0gRGF5LmFkZChDYWxlbmRhci5jdXJyZW50RGF0ZVN0cmluZywgMSk7XG4gIENhbGVuZGFyLmRyYXcoZGF5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIFAuJENBTEVOREFSX0NPTlRFTlQuc2Nyb2xsVG9wKDApLnNjcm9sbExlZnQoMCk7XG4gIH0pO1xufSk7XG5cblAuJERBVEVfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiREQVRFX1BJQ0tFUl9DT05UQUlORVIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICBsZXQgZGF5ID0gQ2FsZW5kYXIuY3VycmVudERhdGVTdHJpbmc7XG4gIGlmIChkYXkgPT09IG51bGwpIC8vIHNvbHZlcyBidWcgd2hlbiBub3QgeWV0IGxvYWRlZFxuICAgIGRheSA9IERheS50b2RheSgpO1xuICBEYXRlUGlja2VyLmNyZWF0ZShkYXkpO1xufSlcblxuLy8gZ2lmcyByaWdvbG9zXG5sZXQgZ2lmUmVxdWVzdDogSlF1ZXJ5LmpxWEhSO1xuXG5QLiRHSUZfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRHSUZfQ09OVEFJTkVSLmhpZGUoKTtcbiAgUC4kR0lGX0lNRy5hdHRyKCdzcmMnLCAnJyk7XG59KVxuXG5QLiRDT1VSU0VfQ09OVEFJTkVSLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICBjb25zdCAkZWwgPSAkKGV2dC50YXJnZXQpO1xuICBjb25zdCAkY2xpY2tlZEdyYWRlID0gJGVsLnBhcmVudHMoKS5hZGQoJGVsKS5maWx0ZXIoUC4kLkNPVVJTRSk7XG4gIGlmICgkY2xpY2tlZEdyYWRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IHRleHQgPSAkY2xpY2tlZEdyYWRlLmZpbmQoJ2InKS5odG1sKCkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGdpZlJlcXVlc3QpIGdpZlJlcXVlc3QuYWJvcnQoKTtcbiAgZ2lmUmVxdWVzdCA9ICQucG9zdChQLkdJRl9VUkxfUEhQLCB7IHRleHQ6IHRleHQgfSwgZnVuY3Rpb24oZGF0YSkge1xuICAgIFAuJEdJRl9JTUcuYXR0cignc3JjJywgZGF0YSk7XG4gICAgUC4kR0lGX0NPTlRBSU5FUi5zaG93KCk7XG4gIH0pO1xufSlcblxuUC4kQlVUVE9OX0FCT1VULmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRBQk9VVF9DT05UQUlORVIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xufSlcblxuUC4kQlVUVE9OX0FCT1VUX0NMT1NFLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBQLiRBQk9VVF9DT05UQUlORVIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufSlcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgRXhwYW5kZWRDb3Vyc2UgfSBmcm9tICcuL2NhbGVuZGFyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcbiAga2V5OiBzdHJpbmc7XG4gIGRpc3BsYXk6IHN0cmluZztcbiAgdmFyaWFibGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfTtcbiAgc3ViZmlsdGVyczogRmlsdGVyW107XG4gIHdoaXRlbGlzdD86IHN0cmluZ1tdO1xuICBibGFja2xpc3Q/OiBzdHJpbmdbXTtcbn07XG5cbmxldCBsb2FkZWRGaWx0ZXI6IEZpbHRlcjtcbmxldCBmaWx0ZXJOYW1lID0gJyc7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdChjb3Vyc2U6IEV4cGFuZGVkQ291cnNlLCBsaXN0OiBzdHJpbmdbXSkge1xuICBjb25zdCBjb250ZW50ID0gY291cnNlLnRpdGxlLnNwbGl0KCc8YnI+JylcbiAgZm9yIChjb25zdCBsaWduZSBvZiBjb250ZW50KSB7XG4gICAgZm9yIChjb25zdCBlbCBvZiBsaXN0KSBpZiAoZXhwcl90ZXN0KGxpZ25lLCBlbCkpIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBleHByX3Rlc3Qoc3RyOiBzdHJpbmcsIGV4cHJlc3Npb246IHN0cmluZykge1xuICBjb25zdCByZXBsYWNlbWVudF9yZWdleCA9IC9cXHtbXlxcfV0rXFx9L2dcbiAgY29uc3QgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVwbGFjZW1lbnRfcmVnZXgpXG4gIGlmIChtYXRjaGVzKSBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG1hdGNoLnJlcGxhY2UoJ3snLCAnJykucmVwbGFjZSgnfScsICcnKVxuICAgIGlmIChTdG9yYWdlLmhhcyh2YXJpYWJsZSkpIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnJlcGxhY2UobWF0Y2gsIFN0b3JhZ2UuZ2V0KHZhcmlhYmxlKSlcbiAgfVxuICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGV4cHJlc3Npb24pXG4gIHJldHVybiByZWdleHAudGVzdChzdHIpXG59XG5cbmZ1bmN0aW9uIGZldGNoSlNPTih1cmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8T2JqZWN0PihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbihqc29uOiBPYmplY3QpIHtcbiAgICAgIHJlc29sdmUoanNvbik7XG4gICAgfSwgcmVqZWN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVsZW1lbnQoZWw6IEV4cGFuZGVkQ291cnNlLCBmaWx0ZXIgPSBsb2FkZWRGaWx0ZXIpOiBib29sZWFuIHsgLy8gcmV0dXJucyBib29sIGJsYWNrbGlzdGVkIChyZWN1cnNpdmUpXG4gIGxldCByZXMgPSBmYWxzZTsgLy8gd2hpdGVsaXN0w6kgcGFyIGTDqWZhdXRcbiAgaWYgKCEoU3RvcmFnZS5oYXMoZmlsdGVyLmtleSkpIHx8IFN0b3JhZ2UuZ2V0KGZpbHRlci5rZXkpID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChmaWx0ZXIud2hpdGVsaXN0KSB7XG4gICAgaWYgKGNoZWNrTGlzdChlbCwgZmlsdGVyLndoaXRlbGlzdCkpIHJlcyA9IGZhbHNlO1xuICAgIGVsc2UgaWYgKGZpbHRlci5ibGFja2xpc3QpIHtcbiAgICAgIGlmIChjaGVja0xpc3QoZWwsIGZpbHRlci5ibGFja2xpc3QpKSByZXR1cm4gdHJ1ZTsgLy8gVE9ETyBmaWx0cmUgZG9pdCBtYXRjaGVyIGxhIHdoaXRlbGlzdCA/P1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsdGVyLnN1YmZpbHRlcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yIChjb25zdCBzdWJmaWx0ZXIgb2YgZmlsdGVyLnN1YmZpbHRlcnMpIHtcbiAgICAgIGlmIChmaWx0ZXJFbGVtZW50KGVsLCBzdWJmaWx0ZXIpKSByZXR1cm4gdHJ1ZTsgLy8gYSDDqXTDqSBibGFja2xpc3TDqVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRmlsdGVyKG5hbWU6IHN0cmluZykge1xuICBpZiAobmFtZSA9PT0gZmlsdGVyTmFtZSAmJiBuYW1lICE9PSAnJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkZWRGaWx0ZXIpO1xuICBmaWx0ZXJOYW1lID0gbmFtZTtcbiAgbG9hZGVkRmlsdGVyID0gPEZpbHRlcj5hd2FpdCBmZXRjaEpTT04oJ2ZpbHRlcnMvJyArIGZpbHRlck5hbWUgKyAnLmpzb24nKTtcbiAgcmV0dXJuIGxvYWRlZEZpbHRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlciA9IHtcbiAgZmlsdGVyRWxlbWVudCxcbiAgbG9hZEZpbHRlcixcbiAgZ2V0IGxvYWRlZEZpbHRlcigpOiBGaWx0ZXIge1xuICAgIHJldHVybiBsb2FkZWRGaWx0ZXI7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xubGV0IHJlZjogSW5BcHBCcm93c2VyO1xuY29uc3Qgd2Vidmlld1JlZmVyZW5jZXM6IEluQXBwQnJvd3NlcltdID0gW107IC8vY29yZG92YSdzIGluYXBwYnJvd3NlciBoYXMgd2VpcmQgYmVoYXZpb3VyIHdoZW4gaXQgY29tZXMgdG8gY2xvc2luZyAvIG9wZW5pbmcgd2Vidmlld3MuLi5cbmxldCBjdXJyZW50VXJsOiBrZXlvZiB0eXBlb2YgUC51cmw7XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHQodGV4dFNjcmlwdDogc3RyaW5nKSB7XG4gIGNvbnN0IGNvbm5lY3RlZCA9IGF3YWl0IHByb21pc2VFeGVjdXRlKFAuY29tLkZVTkNUSU9OX0lTX0NPTk5FQ1RFRCk7XG5cbiAgaWYgKCFjb25uZWN0ZWQgJiYgbG9hZGVkKSB7XG4gICAgY29uc29sZS53YXJuKCdJbkFwcEJyb3dzZXIgaXMgZGlzY29ubmVjdGVkLCByZWxvYWRpbmcnKTtcbiAgICBOb3RpZmljYXRpb24uc2hvdygncmVzdGFydCcpOyAvLyBUT0RPIHJlbmFtZSB0byByZWxvYWRcbiAgICBhd2FpdCByZWxvYWQoKTtcbiAgICBOb3RpZmljYXRpb24uaGlkZSgncmVzdGFydCcpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgcHJvbWlzZUV4ZWN1dGUodGV4dFNjcmlwdCk7XG5cbiAgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICdwYWNrZXRpZmllZCcgaW4gcmVzICYmIHJlcy5wYWNrZXRpZmllZCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB1bnBhY2soKTtcbiAgfVxuICBlbHNlIHJldHVybiByZXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVucGFjaygpIHtcbiAgbGV0IHBhY2tldHMgPSAnJztcbiAgbGV0IHBhY2tldDtcblxuICBkbyB7XG4gICAgcGFja2V0ID0gYXdhaXQgcHJvbWlzZUV4ZWN1dGUoJ2dldFBhY2tldCgpJyk7XG4gICAgaWYgKHBhY2tldCkgcGFja2V0cyArPSBwYWNrZXQ7XG4gIH0gd2hpbGUgKHBhY2tldCk7XG5cbiAgbGV0IG9iajtcbiAgdHJ5IHtcbiAgICBvYmogPSBKU09OLnBhcnNlKHBhY2tldHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gcmVzb2x2ZSBwYWNrZXRzOicsIHBhY2tldHMpO1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoUC5lcnIuQ0FMRU5EQVJfRVJST1IpO1xuICB9XG4gIGNvbnNvbGUubG9nKCdyZXNvbHZlZCBwYWNrZXQgOicsIG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHByb21pc2VFeGVjdXRlKHRleHRTY3JpcHQ6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8YW55PihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWxvYWRlZCkgcmVqZWN0KG5ldyBDYWxlbmRhckVycm9yKFAuZXJyLldFQlZJRVdfTk9UX0xPQURFRCkpO1xuICAgIGVsc2Uge1xuICAgICAgcmVmLmV4ZWN1dGVTY3JpcHQoeyBjb2RlOiB0ZXh0U2NyaXB0IH0sIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdFswXSk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RpbWVvdXQgZXJyJykpO1xuICAgICAgfSwgUC5JTkFQUEJST1dTRVJfRVhFQ1VURV9USU1FT1VUKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaFNjcmlwdCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXG4gICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgZXJyb3I6IHJlamVjdFxuICAgIH0pO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVsb2FkKCkge1xuICBjb25zb2xlLmxvZygncmVsb2FkaW5nIEluQXBwQnJvd3NlcicpO1xuICBpZihyZWYpIHJlZi5jbG9zZSgpO1xuICBhd2FpdCBsb2FkKGN1cnJlbnRVcmwpO1xuICBhd2FpdCBpbmplY3RTY3JpcHQoKTtcbiAgY29uc29sZS5sb2coJ3JlbG9hZCBkb25lLicpO1xufVxuXG5mdW5jdGlvbiBrZXlJc1ZhbGlkKHVybEtleTogc3RyaW5nKTogdXJsS2V5IGlzIGtleW9mIHR5cGVvZiBQLnVybCB7XG4gIHJldHVybiB1cmxLZXkgaW4gUC51cmw7XG59XG5cbmZ1bmN0aW9uIGxvYWQodXJsS2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChrZXlJc1ZhbGlkKHVybEtleSkpIHtcbiAgICAgIGN1cnJlbnRVcmwgPSB1cmxLZXk7XG4gICAgICB3ZWJ2aWV3UmVmZXJlbmNlcy5wdXNoKGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4oUC51cmxbdXJsS2V5XSwgJ19ibGFuaycsIFAuSU5BUFBCUk9XU0VSX1NFVFRJTkdTKSk7XG4gICAgICByZWYgPSB3ZWJ2aWV3UmVmZXJlbmNlc1t3ZWJ2aWV3UmVmZXJlbmNlcy5sZW5ndGggLSAxXTtcbiAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RvcCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5hcHBicm93ZXIgbG9hZGVkJyk7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHJlamVjdChuZXcgRXJyb3IoJ3VybCBrZXkgbm90IHJlY29nbml6ZWQnKSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7XG4gIGNvbnN0IGluamVjdGlvbiA9IGZldGNoU2NyaXB0KFAuc2NyaXB0LklOSkVDVElPTik7XG4gIGNvbnN0IGpxdWVyeSA9IGZldGNoU2NyaXB0KFAuc2NyaXB0LkpRVUVSWSk7XG5cbiAgY29uc3QganF1ZXJ5VGV4dCA9IGF3YWl0IGpxdWVyeTtcbiAgYXdhaXQgcHJvbWlzZUV4ZWN1dGUoanF1ZXJ5VGV4dCk7XG4gIGNvbnN0IGluamVjdGlvblRleHQgPSBhd2FpdCBpbmplY3Rpb247XG4gIGF3YWl0IHByb21pc2VFeGVjdXRlKGluamVjdGlvblRleHQpO1xufVxuXG5leHBvcnQgY29uc3QgSW5hcHBCcm93c2VyID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgcmVsb2FkOiByZWxvYWQsXG4gICAgbG9hZDogbG9hZCxcbiAgICBpbmplY3RTY3JpcHQ6IGluamVjdFNjcmlwdCxcbiAgICBldmFsOiBleGVjdXRlU2NyaXB0LFxuICAgIGdldFJlZmVyZW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVmO1xuICAgIH1cbiAgfVxuXG59KSgpO1xuIiwiaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nXG5cbmV4cG9ydCB2YXIgTmV0d29yayA9IChmdW5jdGlvbigpIHtcblxuICB2YXIgc3RhdGUgPSAnb25saW5lJztcblxuICBmdW5jdGlvbiBvZmZsaW5lKCkge1xuICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3Igbm93IG9mZmxpbmUnKTtcbiAgICBzdGF0ZSA9ICdvZmZsaW5lJztcbiAgICBOb3RpZmljYXRpb24uaGlkZSgnb25saW5lJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ29mZmxpbmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubGluZSgpIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdG9yIG5vdyBvbmxpbmUnKTtcbiAgICBzdGF0ZSA9ICdvbmxpbmUnO1xuICAgIE5vdGlmaWNhdGlvbi5oaWRlKCdvZmZsaW5lJyk7XG4gICAgTm90aWZpY2F0aW9uLnNob3coJ29ubGluZScsIHsgZHVyYXRpb246IDE1MDAgfSk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgb2ZmbGluZSwgZmFsc2UpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCBvbmxpbmUsIGZhbHNlKTtcblxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAobmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSA9PT0gQ29ubmVjdGlvbi5OT05FICYmIHN0YXRlID09PSAnb25saW5lJykgb2ZmbGluZSgpO1xuICAgIGlmIChuYXZpZ2F0b3IuY29ubmVjdGlvbi50eXBlICE9PSBDb25uZWN0aW9uLk5PTkUgJiYgc3RhdGUgPT09ICdvZmZsaW5lJykgb25saW5lKCk7XG4gIH0sIDEwMDApO1xuXG4gIHJldHVybiB7XG4gICAgd2hlbk9ubGluZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc3RhdGUgPT09ICdvbmxpbmUnIHx8IG5hdmlnYXRvci5jb25uZWN0aW9uLnR5cGUgIT09IENvbm5lY3Rpb24uTk9ORSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ29ubGluZScgfHwgbmF2aWdhdG9yLmNvbm5lY3Rpb24udHlwZSAhPT0gQ29ubmVjdGlvbi5OT05FKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQgb25saW5lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSAnb25saW5lJztcbiAgICB9LFxuICAgIGdldCBvZmZsaW5lKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID09PSAnb2ZmbGluZSc7XG4gICAgfVxuICB9XG5cbn0pKCk7XG4iLCJ2YXIgdGltZW91dHM6IHsgW2tleTogc3RyaW5nXSA6IG51bWJlcn0gPSB7fTtcblxuaW50ZXJmYWNlIHNob3dTZXR0aW5ncyB7XG4gIGR1cmF0aW9uOiBmYWxzZSB8IG51bWJlcjtcbn1cblxudHlwZSBOb3RpZmljYXRpb24gPSAnbWFqb3JFcnJvcicgfCAnY2FsZW5kYXJFcnJvcicgfCAnZGF0ZUVycm9yJyB8ICdyZXN0YXJ0JyB8ICdvZmZsaW5lJyB8ICdvbmxpbmUnIHwgJ2xvYWRpbmcnO1xuXG5mdW5jdGlvbiBzaG93KG5vdGlmTmFtZTogTm90aWZpY2F0aW9uLCB7IGR1cmF0aW9uID0gZmFsc2UgfTogUGFydGlhbDxzaG93U2V0dGluZ3M+ID0ge30pIHtcbiAgY29uc29sZS5kZWJ1Zygnbm90aWZpY2F0aW9uOicsIG5vdGlmTmFtZSk7XG4gIGlmIChub3RpZk5hbWUgaW4gdGltZW91dHMpIGNsZWFyVGltZW91dCh0aW1lb3V0c1tub3RpZk5hbWVdKTtcbiAgJCgnLm5vdGlmaWNhdGlvbiMnICsgbm90aWZOYW1lKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIGlmIChkdXJhdGlvbiAmJiBkdXJhdGlvbiA+IDApIHtcbiAgICB0aW1lb3V0c1tub3RpZk5hbWVdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICQoJy5ub3RpZmljYXRpb24jJyArIG5vdGlmTmFtZSkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKG5vdGlmTmFtZTogc3RyaW5nKSB7XG4gIGlmIChub3RpZk5hbWUgaW4gdGltZW91dHMpIGNsZWFyVGltZW91dCh0aW1lb3V0c1tub3RpZk5hbWVdKTtcbiAgJCgnLm5vdGlmaWNhdGlvbiMnICsgbm90aWZOYW1lKS5hZGRDbGFzcygnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCB2YXIgTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgc2hvdzogc2hvdyxcbiAgICBoaWRlOiBoaWRlXG4gIH07XG5cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgUHJveHkgPSB7XG5cbiAgLy8gQVBQX1ZFUlNJT046IDEwMDYwLFxuICBTVE9SQUdFX1ZFUlNJT046ICc5JyxcblxuICAkQ0FMRU5EQVI6ICQoJyNjYWxlbmRhcicpLFxuICAkQ0FMRU5EQVJfQ09OVEVOVDogJCgnI2NhbGVuZGFyIC5jb250ZW50JyksXG5cbiAgJExBTkRTQ0FQRV9DVVJSRU5UX0RBWTogJCgnI2xhbmRzY2FwZUN1cnJlbnREYXknKSxcblxuICAkQ09VUlNFX0NPTlRBSU5FUjogJCgnI2hldXJlcycpLFxuXG4gICREQVRFX0NPTlRBSU5FUjogJCgnbmF2IGRpdicpLFxuICAkREFURTogJCgnbmF2IHNwYW4nKSxcblxuICAkREFURV9QSUNLRVJfQ09OVEFJTkVSOiAkKCcjZGF0ZVBpY2tlcicpLFxuICAkREFURV9QSUNLRVI6ICQoJyNkYXRlUGlja2VyIC5kYXRlcycpLFxuICAkREFURV9QSUNLRVJfUFJFVjogJCgnI2RhdGVQaWNrZXIgLnByZXYnKSxcbiAgJERBVEVfUElDS0VSX05FWFQ6ICQoJyNkYXRlUGlja2VyIC5uZXh0JyksXG4gICREQVRFX1BJQ0tFUl9NT05USDogJCgnI2RhdGVQaWNrZXIgLm1vbnRoJyksXG5cbiAgJEJVVFRPTl9QUkVWOiAkKCcudmVpbGxlJyksXG4gICRCVVRUT05fTkVYVDogJCgnLmxlbmRlbWFpbicpLFxuICAkQlVUVE9OX1NFVFRJTkdTOiAkKCdidXR0b24uc2V0dGluZ3MnKSxcbiAgJEJVVFRPTl9BQk9VVDogJCgnYnV0dG9uLmFib3V0JyksXG4gICRCVVRUT05fQUJPVVRfQ0xPU0U6ICQoJyNhYm91dCBidXR0b24nKSxcblxuICAkU0VUVElOR1NfQ09OVEFJTkVSOiAkKCcjc2V0dGluZ3MnKSxcbiAgJFNFVFRJTkdTX0ZJTFRFUjogJCgnI3NldHRpbmdzIC5maWx0ZXJzJyksXG4gICRTRVRUSU5HU19BUFBFQVJBTkNFOiAkKCcjc2V0dGluZ3MgLmFwcGVhcmFuY2UnKSxcbiAgJFNFVFRJTkdTX0NBTkNFTDogJCgnI3NldHRpbmdzIC5jYW5jZWwnKSxcbiAgJFNFVFRJTkdTX1NBVkU6ICQoJyNzZXR0aW5ncyAuc2F2ZScpLFxuICAkU0VUVElOR1NfUkVTRVQ6ICQoJyNzZXR0aW5ncyAucmVzZXQnKSxcbiAgJFNFVFRJTkdTX1RIRU1FOiAkKCcjc2V0dGluZ3MgLnRoZW1lJyksXG4gICRTRVRUSU5HU19HUkFERTogJCgnLmNsYXNzZURyb3BEb3duJyksXG5cbiAgJEFCT1VUX0NPTlRBSU5FUjogJCgnI2Fib3V0JyksXG5cbiAgJFRIRU1FX1NUWUxFU0hFRVQ6ICQoJyN0aGVtZVN0eWxlc2hlZXQnKSxcblxuICAkR0lGX0NPTlRBSU5FUjogJCgnI2dpZi1jb250YWluZXInKSxcbiAgJEdJRl9JTUc6ICQoJyNnaWYtY29udGFpbmVyIGltZycpLFxuXG4gIElOQVBQQlJPV1NFUl9TRVRUSU5HUzogJ2xvY2F0aW9uPW5vLHpvb209bm8saGlkZGVuPXllcyxzaG91bGRQYXVzZU9uU3VzcGVuZD1ubycsXG4gIElOQVBQQlJPV1NFUl9FWEVDVVRFX1RJTUVPVVQ6IDUwMDAsXG5cbiAgR0lGX1VSTDogJ2h0dHBzOi8vcG9seXRlY2gudGhpc3NtYS5mci9naWZzLycsXG4gIEdJRl9VUkxfUEhQOiAnaHR0cHM6Ly9wb2x5dGVjaC50aGlzc21hLmZyL25pY2VnaWYucGhwJyxcblxuICBTVEFSVF9IT1VSOiA4LFxuICBFTkRfSE9VUjogMjAsXG5cbiAgVE9EQVlfTUFYX0hPVVI6IDIxLFxuXG4gICQ6IHtcbiAgICBDT1VSU0U6ICcuY2xhc3NlJyxcbiAgICBMQU5EU0NBUEVfREFZOiAnI2hldXJlcyAuZGF5JyxcbiAgICBIT1VSX0xJTkVTOiAnI2hldXJlcyAubGlnbmUnLFxuICAgIFNFVFRJTkdTX0ZJTFRFUjogJyNzZXR0aW5ncyAuZmlsdHJlJ1xuICB9LFxuXG4gIGVycjoge1xuICAgIEJVVFRPTl9OT1RfRk9VTkQ6ICdidXR0b24gbm90IGZvdW5kJyxcbiAgICBXRUJWSUVXX05PVF9MT0FERUQ6ICd3ZWJ2aWV3IG5vdCBsb2FkZWQnLFxuICAgIFJFUVVFU1RfQ0FOQ0VMTEVEOiAncmVxdWVzdCBjYW5jZWxsZWQnLFxuICAgIENBTEVOREFSX0VSUk9SOiAnY2FsZW5kYXIgZXJyb3InXG4gIH0sXG5cbiAgaHRtbDoge1xuICAgIEhPVVI6ICc8ZGl2IGNsYXNzPVwiaGV1cmVcIj48L2Rpdj4nLFxuICAgIEhPVVJfTElORTogJzxkaXYgY2xhc3M9XCJsaWduZVwiPjwvZGl2PicsXG4gICAgQ09VUlNFOiAnPGRpdiBjbGFzcz1cImNsYXNzZVwiPjwvZGl2PicsXG4gICAgQ09VUlNFX0NPTlRFTlRfV1JBUFBFUjogJzxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+PC9kaXY+JyxcbiAgICBDT1VSU0VfQ09OVEVOVDogJzxkaXYgY2xhc3M9XCJjb250ZW50XCI+PC9kaXY+JyxcbiAgICBMQU5EU0NBUEVfREFZOiAnPGRpdiBjbGFzcz1cImRheVwiPjwvZGl2PicsXG4gICAgU0VUVElOR1NfQ0hFQ0tCT1g6ICc8aW5wdXQgdHlwZT1jaGVja2JveCBjaGVja2VkLz4nLFxuICB9LFxuXG4gIHN0b3JhZ2U6IHtcbiAgICBHUkFERTogJ2NsYXNzZScsXG4gICAgU0FWRURfREFZUzogJ2RheXNDYWNoZScsXG4gICAgVEhFTUU6ICd0aGVtZScsXG4gICAgVkVSU0lPTjogJ3ZlcnNpb24nLFxuICAgIEFDS05PV0xFREdFRDogJ2FjaydcbiAgfSxcblxuICBkYXk6IHtcbiAgICBNT046IDEsIFRVRTogMiwgV0VEOiAzLCBUSFU6IDQsIEZSSTogNSwgU0FUOiA2LCBTVU46IDAsXG4gIH0sXG5cbiAgc2NyaXB0OiB7XG4gICAgSU5KRUNUSU9OOiAnaW5qZWN0aW9uLmpzJyxcbiAgICBKUVVFUlk6ICdqcXVlcnkuanMnXG4gIH0sXG5cbiAgZGlyOiB7XG4gICAgVEhFTUVTOiAnY3NzL3RoZW1lcy8nXG4gIH0sXG5cbiAgY29tOiB7XG4gICAgVElNRU9VVF9BRlRFUl9CVVRUT05fUFJFU1M6IDIwMCxcbiAgICBERUZBVUxUX1VQREFURV9JTlRFUlZBTDogMjAwLFxuICAgIEZVTkNUSU9OX0lTX0NPTk5FQ1RFRDogJ2lzQ29ubmVjdGVkKCknXG4gIH0sXG5cbiAgdGhlbWU6IHtcbiAgICBERUZBVUxUOiAnZGVmYXVsdCdcbiAgfSxcblxuICB1cmw6IHtcbiAgICAncGVpcDEnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4Zjg3YTk4ODJlNzRhM2Y3NmUwYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAncGVpcDInOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhlNzQ4NWQ5YmVlMmM4NGRiYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAncGVpcGMnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4Zjg3YjAzNWViZjI3MmE2YWRmYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnZXQzJzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4YTI5NmEyZmZiMDAzN2Q1YmI3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2V0NCc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGYwNGY0YTZiOTBlMTdmNzFiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdldDUnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjhjOGRmNDFhMGE3ZWY0OGY3Yjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgICAnYXBwMyc6ICdodHRwOi8vYWRlLnBvbHl0ZWNoLnUtcHN1ZC5mcjo4MDgwL2RpcmVjdC8/ZGF0YT01ZTM2NzBhMWFmNjQ4NDAxMDAwNDgyZjY1ZWJiMWM0ZTUxZTdhYjg1MDU2ODk1YjRjZjU1Yzg5NTAxYzM3NDhhZjVmZTI2MmIwYjA5MzhmOGIwZGEwMWQ5ODY2YzZiMDZiNzYwZDE4MWU2NzcyYzZkZjE1ZjYwNzAwZTYwYTc0MmIyZWQ1ZTNjMjcxMTg3OTZiYTFkNzBhNDgyN2FhZGI3ZWYwMTVmOTYwNGNmYTMxMGI3YjBkYWU3M2ZmNzYxMTgnLFxuICAgICdhcHA0JzogJ2h0dHA6Ly9hZGUucG9seXRlY2gudS1wc3VkLmZyOjgwODAvZGlyZWN0Lz9kYXRhPTVlMzY3MGExYWY2NDg0MDEwMDA0ODJmNjVlYmIxYzRlNTFlN2FiODUwNTY4OTViNGNmNTVjODk1MDFjMzc0OGFmNWZlMjYyYjBiMDkzOGY4MjRmMWVjY2U2OTgwMzlmM2I3NjBkMTgxZTY3NzJjNmRmMTVmNjA3MDBlNjBhNzQyYjJlZDVlM2MyNzExODc5NmJhMWQ3MGE0ODI3YWFkYjdlZjAxNWY5NjA0Y2ZhMzEwYjdiMGRhZTczZmY3NjExOCcsXG4gICAgJ2FwcDUnOiAnaHR0cDovL2FkZS5wb2x5dGVjaC51LXBzdWQuZnI6ODA4MC9kaXJlY3QvP2RhdGE9NWUzNjcwYTFhZjY0ODQwMTAwMDQ4MmY2NWViYjFjNGU1MWU3YWI4NTA1Njg5NWI0Y2Y1NWM4OTUwMWMzNzQ4YWY1ZmUyNjJiMGIwOTM4ZjgzZWZhY2YzMzY0YjM1MjNmYjc2MGQxODFlNjc3MmM2ZGYxNWY2MDcwMGU2MGE3NDJiMmVkNWUzYzI3MTE4Nzk2YmExZDcwYTQ4MjdhYWRiN2VmMDE1Zjk2MDRjZmEzMTBiN2IwZGFlNzNmZjc2MTE4JyxcbiAgfSxcbn1cbiIsImltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyRHJhd2VyIH0gZnJvbSAnLi9jYWxlbmRhckRyYXdlcic7XG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2RheSc7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSc7XG5pbXBvcnQgQ2FsZW5kYXJFcnJvciBmcm9tICcuL2Vycm9yJ1xuXG5mdW5jdGlvbiBkb21BZGRGaWVsZChmaWx0ZXI6IEZpbHRlciwgJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgeyAvLyBjYW4gYmUgcmVjdXJzaXZlXG4gIGZvciAoY29uc3QgZmlsdHJlIG9mIGZpbHRlci5zdWJmaWx0ZXJzKSB7IC8vIFRPRE8gbm9tbWFnZSB2YXJpYWJsZXNcbiAgICBjb25zdCAkZmlsdHJlID0gJCgnPGRpdi8+Jyk7XG4gICAgJGZpbHRyZS5kYXRhKCdrZXknLCBmaWx0cmUua2V5KTtcbiAgICAkZmlsdHJlLmFkZENsYXNzKCdlbGVtZW50IGZpbHRyZScpO1xuICAgIGNvbnN0ICRjaGVjayA9ICQoUC5odG1sLlNFVFRJTkdTX0NIRUNLQk9YKTtcbiAgICAkY2hlY2suY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJGNoZWNrID0gJChlLnRhcmdldCk7XG4gICAgICBpZiAoJGNoZWNrLmlzKCc6Y2hlY2tlZCcpKSAkY2hlY2suc2libGluZ3MoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIGVsc2UgJGNoZWNrLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgJGxhYmVsID0gJCgnPGxhYmVsLz4nKTtcbiAgICAkbGFiZWwuaHRtbChmaWx0cmUuZGlzcGxheSk7XG4gICAgY29uc3QgJGRyb3Bkb3duID0gJCgnPHNlbGVjdC8+Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGZpbHRyZS52YXJpYWJsZSkge1xuICAgICAgbGV0IG9wdGlvbiA9IGluZGV4O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdHJlLnZhcmlhYmxlKSkgb3B0aW9uID0gZmlsdHJlLnZhcmlhYmxlW2luZGV4XTtcbiAgICAgICRkcm9wZG93bi5hcHBlbmQoJCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBmaWx0cmUudmFyaWFibGVbaW5kZXhdICsgJ1wiLz4nKS5odG1sKG9wdGlvbikpO1xuICAgIH1cbiAgICAkZmlsdHJlLmFwcGVuZCgkY2hlY2spLmFwcGVuZCgkbGFiZWwpLmFwcGVuZCgkZHJvcGRvd24pO1xuICAgICRwYXJlbnQuYXBwZW5kKCRmaWx0cmUpO1xuICAgIGlmICgnc3ViZmlsdGVycycgaW4gZmlsdHJlKSBkb21BZGRGaWVsZChmaWx0cmUsICRmaWx0cmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U2V0dGluZ3MoKSB7XG4gIGZvciAoY29uc3QgZG9tRmlsdHJlIG9mICQoUC4kLlNFVFRJTkdTX0ZJTFRFUikpIHtcbiAgICBjb25zdCAkZmlsdHJlID0gJChkb21GaWx0cmUpO1xuICAgIGNvbnN0IGtleSA9ICRmaWx0cmUuZGF0YSgna2V5Jyk7XG4gICAgaWYgKCRmaWx0cmUuY2hpbGRyZW4oJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD4kZmlsdHJlLmNoaWxkcmVuKCdzZWxlY3QnKS5nZXQoMCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIFN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIFN0b3JhZ2Uuc2V0KGtleSwgJzAnKTtcbiAgICB9XG4gIH1cbiAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLmFkZENsYXNzKCdoaWRkZW4nKTtcbn1cblxuXG5mdW5jdGlvbiBzZXRDdXJyZW50U2V0dGluZ3MoKSB7XG5cbiAgaWYgKFN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5HUkFERSkpIHtcbiAgICBQLiRTRVRUSU5HU19HUkFERS52YWwoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gIH1cbiAgaWYgKFN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5USEVNRSkpIHtcbiAgICBQLiRTRVRUSU5HU19USEVNRS52YWwoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLlRIRU1FKSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGZpbHRlciBvZiAkKFAuJC5TRVRUSU5HU19GSUxURVIpKSB7XG4gICAgY29uc3QgJGZpbHRlciA9ICQoZmlsdGVyKTtcbiAgICBjb25zdCBrZXkgPSAkZmlsdGVyLmRhdGEoJ2tleScpO1xuICAgIGlmIChTdG9yYWdlLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCAkc2VsZWN0ID0gJGZpbHRlci5jaGlsZHJlbignc2VsZWN0Jyk7XG4gICAgICBjb25zdCB2YWwgPSBTdG9yYWdlLmdldChrZXkpO1xuICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBjb25zdCAkY2hlY2sgPSAkZmlsdGVyLmNoaWxkcmVuKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICBpZiAoJGNoZWNrLmxlbmd0aCA9PT0gMSkgJGNoZWNrLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICB9XG4gICAgICBpZiAoJHNlbGVjdC5jaGlsZHJlbignb3B0aW9uJykuaXMoJ1t2YWx1ZT1cIicgKyB2YWwgKyAnXCJdJykpIHtcbiAgICAgICAgJHNlbGVjdC52YWwodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZERPTShmaWx0ZXI6IEZpbHRlcikge1xuICBQLiRTRVRUSU5HU19GSUxURVIuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgZG9tQWRkRmllbGQoZmlsdGVyLCBQLiRTRVRUSU5HU19GSUxURVIpO1xufVxuXG5mdW5jdGlvbiBzaG93KHsgY2FuY2VsRGlzYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgUC4kU0VUVElOR1NfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBpZiAoY2FuY2VsRGlzYWJsZWQpIFAuJFNFVFRJTkdTX0NBTkNFTC5oaWRlKCk7XG4gICAgZWxzZSBQLiRTRVRUSU5HU19DQU5DRUwuc2hvdygpO1xuXG4gICAgUC4kU0VUVElOR1NfQ0FOQ0VMLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIFAuJFNFVFRJTkdTX0NPTlRBSU5FUi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSlcblxuICAgIFAuJFNFVFRJTkdTX1NBVkUub25lKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgYXBwbHlTZXR0aW5ncygpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuR1JBREUpKSB7XG4gICAgICBQLiRTRVRUSU5HU19TQVZFLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBQLiRTRVRUSU5HU19TQVZFLnNob3coKTtcblxuICAgIEZpbHRlci5sb2FkRmlsdGVyKFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5HUkFERSkpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZERPTShGaWx0ZXIubG9hZGVkRmlsdGVyKTtcbiAgICAgICAgc2V0Q3VycmVudFNldHRpbmdzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufVxuXG5cblAuJFNFVFRJTkdTX0dSQURFLmNoYW5nZShhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNlbCA9IFAuJFNFVFRJTkdTX0dSQURFLmNoaWxkcmVuKCkuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICBjb25zdCB2YWwgPSAkc2VsLmF0dHIoJ3ZhbHVlJyk7XG4gIGlmKHZhbCkgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLkdSQURFLCB2YWwpO1xuICBlbHNlIHRocm93IG5ldyBDYWxlbmRhckVycm9yKFwibWlzc2luZyBhdHRyaWJ1dGUgJ3ZhbHVlJyBvbiBzZXR0aW5ncyBlbGVtZW50XCIpO1xuXG4gIFN0b3JhZ2Uuc2V0KFAuc3RvcmFnZS5TQVZFRF9EQVlTLCAnJyk7IC8vIHRyeSB0byBkZWxldGUgY3VycmVudGx5IGRyYXduIGNvdXJzZXNcbiAgQ2FsZW5kYXIuaW5pdCgpO1xuICBDYWxlbmRhckRyYXdlci5kcmF3KERheS50b2RheSgpKTtcblxuICBQLiRTRVRUSU5HU19TQVZFLmhpZGUoKTtcbiAgUC4kU0VUVElOR1NfQ0FOQ0VMLmhpZGUoKTtcbiAgUC4kU0VUVElOR1NfRklMVEVSLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgYXdhaXQgRmlsdGVyLmxvYWRGaWx0ZXIoU3RvcmFnZS5nZXQoUC5zdG9yYWdlLkdSQURFKSk7XG4gIGF3YWl0IEFwcC5yZXN0YXJ0SW5hcHBCcm93c2VyKCk7XG5cbiAgUC4kU0VUVElOR1NfU0FWRS5zaG93KCk7XG4gIGxvYWRET00oRmlsdGVyLmxvYWRlZEZpbHRlcik7XG4gIENhbGVuZGFyLmRyYXcoRGF5LnRvZGF5KCkpO1xufSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB7XG4gICAgY2FsbGJhY2tPbmNlOiBmdW5jdGlvbigpIHsgfSxcbiAgICBsb2FkRE9NOiBsb2FkRE9NLFxuICAgIHNob3c6IHNob3dcbiAgfTtcblxufSkoKTtcbiIsImltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBQcm94eSBhcyBQIH0gZnJvbSAnLi9wcm94eSdcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcblxuICBpZiAoU3RvcmFnZS5oYXMoUC5zdG9yYWdlLlZFUlNJT04pICYmIFN0b3JhZ2UuZ2V0KFAuc3RvcmFnZS5WRVJTSU9OKSAhPT0gUC5TVE9SQUdFX1ZFUlNJT04pIHtcbiAgICBhbGVydCgnTFxcJ2FwcGxpIMOgIMOpdMOpIG1pc2Ugw6Agam91ciAhJyk7XG4gICAgU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgLy8gc2hvdyB3ZWxjb21lIGRpYWxvZyAoZGlzYWJsZWQgZmVhdHVyZSBmb3Igbm93Li4uKVxuICBpZiAoIVN0b3JhZ2UuaGFzKFAuc3RvcmFnZS5BQ0tOT1dMRURHRUQpKSB7XG4gICAgLy8gUC4kQUJPVVRfQ09OVEFJTkVSLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBTdG9yYWdlLnNldChQLnN0b3JhZ2UuQUNLTk9XTEVER0VELCAnMScpO1xuICB9XG5cbiAgaWYgKCFTdG9yYWdlLmhhcyhQLnN0b3JhZ2UuVkVSU0lPTikpIHtcbiAgICBTdG9yYWdlLmNsZWFyKClcbiAgICBhd2FpdCBTZXR0aW5ncy5zaG93KHsgY2FuY2VsRGlzYWJsZWQ6IHRydWUgfSk7XG4gICAgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLlZFUlNJT04sIFAuU1RPUkFHRV9WRVJTSU9OKTtcbiAgICBTdG9yYWdlLnNldCgncm9vdCcsICcxJyk7IC8vIFRPRE9cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9IHtcbiAgaW5pdCxcbiAgc2V0OiBmdW5jdGlvbihrZXk6IHN0cmluZywgdmFsOiBzdHJpbmcpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWwpO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZVtrZXldO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleSBpbiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9LFxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUHJveHkgYXMgUCB9IGZyb20gJy4vcHJveHknXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJ1xuaW1wb3J0IENhbGVuZGFyRXJyb3IgZnJvbSAnLi9lcnJvcidcblxuZnVuY3Rpb24gc2V0KHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0aGVtZU5hbWUpIHtcbiAgICBQLiRUSEVNRV9TVFlMRVNIRUVULmF0dHIoJ2hyZWYnLCBQLmRpci5USEVNRVMgKyB0aGVtZU5hbWUgKyAnLmNzcycpO1xuICB9XG4gIGVsc2Uge1xuICAgIFAuJFRIRU1FX1NUWUxFU0hFRVQuYXR0cignaHJlZicsIFAuZGlyLlRIRU1FUyArIFAudGhlbWUuREVGQVVMVCArICcuY3NzJyk7XG4gIH1cbn1cblxuUC4kU0VUVElOR1NfVEhFTUUuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VsID0gUC4kU0VUVElOR1NfVEhFTUUuY2hpbGRyZW4oKS5maWx0ZXIoJzpjaGVja2VkJyk7XG4gIGNvbnN0IHZhbCA9ICRzZWwuYXR0cigndmFsdWUnKTtcbiAgaWYodmFsKSB7XG4gICAgU3RvcmFnZS5zZXQoUC5zdG9yYWdlLlRIRU1FLCB2YWwpO1xuICAgIHNldCh2YWwpO1xuICB9XG4gIGVsc2UgdGhyb3cgbmV3IENhbGVuZGFyRXJyb3IoXCJtaXNzaW5nIGF0dHJpYnV0ZSAndmFsdWUnIG9uIHNldHRpbmdzIGVsZW1lbnRcIik7XG59KVxuXG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IHtcbiAgc2V0XG59O1xuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9WMy9hcHAnO1xuXG5BcHAuaW5pdCgpO1xuIiwiLyohIGpRdWVyeSB2My4yLjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsZj1jLnNsaWNlLGc9Yy5jb25jYXQsaD1jLnB1c2gsaT1jLmluZGV4T2Ysaj17fSxrPWoudG9TdHJpbmcsbD1qLmhhc093blByb3BlcnR5LG09bC50b1N0cmluZyxuPW0uY2FsbChPYmplY3QpLG89e307ZnVuY3Rpb24gcChhLGIpe2I9Ynx8ZDt2YXIgYz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7Yy50ZXh0PWEsYi5oZWFkLmFwcGVuZENoaWxkKGMpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyl9dmFyIHE9XCIzLjIuMVwiLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHIuZm4uaW5pdChhLGIpfSxzPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyx0PS9eLW1zLS8sdT0vLShbYS16XSkvZyx2PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07ci5mbj1yLnByb3RvdHlwZT17anF1ZXJ5OnEsY29uc3RydWN0b3I6cixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGYuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2YuY2FsbCh0aGlzKTphPDA/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9ci5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKyhhPDA/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYzxiP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpoLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sci5leHRlbmQ9ci5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxyLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2g8aTtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYoci5pc1BsYWluT2JqZWN0KGQpfHwoZT1BcnJheS5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZBcnJheS5pc0FycmF5KGMpP2M6W10pOmY9YyYmci5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1yLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sci5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisocStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1yLnR5cGUoYSl9LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1yLnR5cGUoYSk7cmV0dXJuKFwibnVtYmVyXCI9PT1ifHxcInN0cmluZ1wiPT09YikmJiFpc05hTihhLXBhcnNlRmxvYXQoYSkpfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM7cmV0dXJuISghYXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWsuY2FsbChhKSkmJighKGI9ZShhKSl8fChjPWwuY2FsbChiLFwiY29uc3RydWN0b3JcIikmJmIuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmbS5jYWxsKGMpPT09bikpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2pbay5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXtwKGEpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh0LFwibXMtXCIpLnJlcGxhY2UodSx2KX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZih3KGEpKXtmb3IoYz1hLmxlbmd0aDtkPGM7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShzLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHcoT2JqZWN0KGEpKT9yLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmguY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTppLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7ZDxjO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2Y8ZztmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPTAsaD1bXTtpZih3KGEpKWZvcihkPWEubGVuZ3RoO2Y8ZDtmKyspZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZiBpbiBhKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBnLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksci5pc0Z1bmN0aW9uKGEpKXJldHVybiBkPWYuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZi5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fHIuZ3VpZCsrLGV9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Om99KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihyLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxyLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2pbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHcoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1yLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09YyYmIXIuaXNXaW5kb3coYSkmJihcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpfXZhciB4PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPXt9Lmhhc093blByb3BlcnR5LEQ9W10sRT1ELnBvcCxGPUQucHVzaCxHPUQucHVzaCxIPUQuc2xpY2UsST1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsSz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTD1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsTT1cIlxcXFxbXCIrSytcIiooXCIrTCtcIikoPzpcIitLK1wiKihbKl4kfCF+XT89KVwiK0srXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitMK1wiKSl8KVwiK0srXCIqXFxcXF1cIixOPVwiOihcIitMK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitNK1wiKSopfC4qKVxcXFwpfClcIixPPW5ldyBSZWdFeHAoSytcIitcIixcImdcIiksUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChOKSxVPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrSytcIj98KFwiK0srXCIpfC4pXCIsXCJpZ1wiKSxhYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6ZDwwP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxiYT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiXFwwXCI9PT1hP1wiXFx1ZmZmZFwiOmEuc2xpY2UoMCwtMSkrXCJcXFxcXCIrYS5jaGFyQ29kZUF0KGEubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIithfSxkYT1mdW5jdGlvbigpe20oKX0sZWE9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMCYmKFwiZm9ybVwiaW4gYXx8XCJsYWJlbFwiaW4gYSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0cuYXBwbHkoRD1ILmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLERbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0c9e2FwcGx5OkQubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ri5hcHBseShhLEguY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHM9YiYmYi5vd25lckRvY3VtZW50LHc9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT13JiY5IT09dyYmMTEhPT13KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09dyYmKGw9Wi5leGVjKGEpKSlpZihmPWxbMV0pe2lmKDk9PT13KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYocyYmKGo9cy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYobFsyXSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9bFszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXcpcz1iLHI9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGJhLGNhKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxvPWcoYSksaD1vLmxlbmd0aDt3aGlsZShoLS0pb1toXT1cIiNcIitrK1wiIFwiK3NhKG9baF0pO3I9by5qb2luKFwiLFwiKSxzPSQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8Yn1pZihyKXRyeXtyZXR1cm4gRy5hcHBseShkLHMucXVlcnlTZWxlY3RvckFsbChyKSksZH1jYXRjaCh4KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShQLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmYS5zb3VyY2VJbmRleC1iLnNvdXJjZUluZGV4O2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwiZm9ybVwiaW4gYj9iLnBhcmVudE5vZGUmJmIuZGlzYWJsZWQ9PT0hMT9cImxhYmVsXCJpbiBiP1wibGFiZWxcImluIGIucGFyZW50Tm9kZT9iLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1hOmIuZGlzYWJsZWQ9PT1hOmIuaXNEaXNhYmxlZD09PWF8fGIuaXNEaXNhYmxlZCE9PSFhJiZlYShiKT09PWE6Yi5kaXNhYmxlZD09PWE6XCJsYWJlbFwiaW4gYiYmYi5kaXNhYmxlZD09PWF9fWZ1bmN0aW9uIHBhKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISFiJiZcIkhUTUxcIiE9PWIubm9kZU5hbWV9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksdiE9PW4mJihlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1ZLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19KTooZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGMsZCxlLGY9Yi5nZXRFbGVtZW50QnlJZChhKTtpZihmKXtpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXTtlPWIuZ2V0RWxlbWVudHNCeU5hbWUoYSksZD0wO3doaWxlKGY9ZVtkKytdKWlmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdfXJldHVybltdfX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnApcmV0dXJuIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKX0scj1bXSxxPVtdLChjLnFzYT1ZLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrSytcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrSytcIiooPzp2YWx1ZXxcIitKK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe2EuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0srXCIqWypeJHwhfl0/PVwiKSwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLG8uYXBwZW5kQ2hpbGQoYSkuZGlzYWJsZWQ9ITAsMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1ZLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCIqXCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTil9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1ZLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxZLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SShrLGEpLUkoayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9JKGssYSktSShrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9sYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFMsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZDLmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lc2NhcGU9ZnVuY3Rpb24oYSl7cmV0dXJuKGErXCJcIikucmVwbGFjZShiYSxjYSl9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKF8sYWEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoXyxhYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZULnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrSytcIilcIithK1wiKFwiK0srXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjohYnx8KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoTyxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09YiYmKGU9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1JKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShQLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShfLGFhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVS50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6b2EoITEpLGRpc2FibGVkOm9hKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6cGEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnBhKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpwYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuW2M8MD9jK2I6Y119KSxldmVuOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcmEoKXt9cmEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyByYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVEuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVIuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUCxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9VltnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gc2EoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7YjxjO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD1iLmRpcixlPWIubmV4dCxmPWV8fGQsZz1jJiZcInBhcmVudE5vZGVcIj09PWYsaD14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGUpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylyZXR1cm4gYShiLGMsZSk7cmV0dXJuITF9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbT1bdyxoXTtpZihpKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxnKSYmYShiLGMsaSkpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpaWYobD1iW3VdfHwoYlt1XT17fSksaz1sW2IudW5pcXVlSURdfHwobFtiLnVuaXF1ZUlEXT17fSksZSYmZT09PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSliPWJbZF18fGI7ZWxzZXtpZigoaj1rW2ZdKSYmalswXT09PXcmJmpbMV09PT1oKXJldHVybiBtWzJdPWpbMl07aWYoa1tmXT1tLG1bMl09YShiLGMsaSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHVhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2g8aTtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24geGEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9eGEoZCkpLGUmJiFlW3VdJiYoZT14YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx2YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOndhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj13YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SShmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9d2Eocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkcuYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHlhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz10YShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2k8ZjtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bdGEodWEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7ZTxmO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHhhKGk+MSYmdWEobSksaT4xJiZzYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFAsXCIkMVwiKSxjLGk8ZSYmeWEoYS5zbGljZShpLGUpKSxlPGYmJnlhKGE9YS5zbGljZShlKSksZTxmJiZzYShhKSl9bS5wdXNoKGMpfXJldHVybiB1YShtKX1mdW5jdGlvbiB6YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109RS5jYWxsKGkpKTt1PXdhKHUpfUcuYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj15YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEsemEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsYyxlKXt2YXIgZixpLGosayxsLG09XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxuPSFlJiZnKGE9bS5zZWxlY3Rvcnx8YSk7aWYoYz1jfHxbXSwxPT09bi5sZW5ndGgpe2lmKGk9blswXT1uWzBdLnNsaWNlKDApLGkubGVuZ3RoPjImJlwiSURcIj09PShqPWlbMF0pLnR5cGUmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2lbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSxiKXx8W10pWzBdLCFiKXJldHVybiBjO20mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGkuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWY9Vi5uZWVkc0NvbnRleHQudGVzdChhKT8wOmkubGVuZ3RoO3doaWxlKGYtLSl7aWYoaj1pW2ZdLGQucmVsYXRpdmVbaz1qLnR5cGVdKWJyZWFrO2lmKChsPWQuZmluZFtrXSkmJihlPWwoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksJC50ZXN0KGlbMF0udHlwZSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoaS5zcGxpY2UoZiwxKSxhPWUubGVuZ3RoJiZzYShpKSwhYSlyZXR1cm4gRy5hcHBseShjLGUpLGM7YnJlYWt9fX1yZXR1cm4obXx8aChhLG4pKShlLGIsIXAsYywhYnx8JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxiKSxjfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjKXJldHVybiBhLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjJiZcImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSixmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoIWMpcmV0dXJuIGFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO3IuZmluZD14LHIuZXhwcj14LnNlbGVjdG9ycyxyLmV4cHJbXCI6XCJdPXIuZXhwci5wc2V1ZG9zLHIudW5pcXVlU29ydD1yLnVuaXF1ZT14LnVuaXF1ZVNvcnQsci50ZXh0PXguZ2V0VGV4dCxyLmlzWE1MRG9jPXguaXNYTUwsci5jb250YWlucz14LmNvbnRhaW5zLHIuZXNjYXBlU2VsZWN0b3I9eC5lc2NhcGU7dmFyIHk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJnIoYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx6PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSxBPXIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9dmFyIEM9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2ksRD0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gRShhLGIsYyl7cmV0dXJuIHIuaXNGdW5jdGlvbihiKT9yLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTpiLm5vZGVUeXBlP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTpcInN0cmluZ1wiIT10eXBlb2YgYj9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jfSk6RC50ZXN0KGIpP3IuZmlsdGVyKGIsYSxjKTooYj1yLmZpbHRlcihiLGEpLHIuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWMmJjE9PT1hLm5vZGVUeXBlfSkpfXIuZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9yLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOnIuZmluZC5tYXRjaGVzKGEsci5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxyLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5sZW5ndGgsZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhyKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7YjxkO2IrKylpZihyLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGM9dGhpcy5wdXNoU3RhY2soW10pLGI9MDtiPGQ7YisrKXIuZmluZChhLGVbYl0sYyk7cmV0dXJuIGQ+MT9yLnVuaXF1ZVNvcnQoYyk6Y30sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISFFKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJkEudGVzdChhKT9yKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEYsRz0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxIPXIuZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEYsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Ry5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIHI/YlswXTpiLHIubWVyZ2UodGhpcyxyLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSxDLnRlc3QoZVsxXSkmJnIuaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKXIuaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmKHRoaXNbMF09Zix0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpyLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEocik6ci5tYWtlQXJyYXkoYSx0aGlzKX07SC5wcm90b3R5cGU9ci5mbixGPXIoZCk7dmFyIEk9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSj17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtyLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPXIoYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YzthKyspaWYoci5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9XCJzdHJpbmdcIiE9dHlwZW9mIGEmJnIoYSk7aWYoIUEudGVzdChhKSlmb3IoO2Q8ZTtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/ci51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9pLmNhbGwocihhKSx0aGlzWzBdKTppLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIudW5pcXVlU29ydChyLm1lcmdlKHRoaXMuZ2V0KCkscihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBLKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1yLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB6KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4geihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gQihhLFwiaWZyYW1lXCIpP2EuY29udGVudERvY3VtZW50OihCKGEsXCJ0ZW1wbGF0ZVwiKSYmKGE9YS5jb250ZW50fHxhKSxyLm1lcmdlKFtdLGEuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9ci5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEpbYV18fHIudW5pcXVlU29ydChlKSxJLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgTD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gTShhKXt2YXIgYj17fTtyZXR1cm4gci5lYWNoKGEubWF0Y2goTCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9ci5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9NKGEpOnIuZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1lfHxhLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe3IuZWFjaChiLGZ1bmN0aW9uKGIsYyl7ci5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ci50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1yLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGM8PWgmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9yLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8Ynx8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfTtmdW5jdGlvbiBOKGEpe3JldHVybiBhfWZ1bmN0aW9uIE8oYSl7dGhyb3cgYX1mdW5jdGlvbiBQKGEsYixjLGQpe3ZhciBlO3RyeXthJiZyLmlzRnVuY3Rpb24oZT1hLnByb21pc2UpP2UuY2FsbChhKS5kb25lKGIpLmZhaWwoYyk6YSYmci5pc0Z1bmN0aW9uKGU9YS50aGVuKT9lLmNhbGwoYSxiLGMpOmIuYXBwbHkodm9pZCAwLFthXS5zbGljZShkKSl9Y2F0Y2goYSl7Yy5hcHBseSh2b2lkIDAsW2FdKX19ci5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGIpe3ZhciBjPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsci5DYWxsYmFja3MoXCJtZW1vcnlcIiksci5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0sZD1cInBlbmRpbmdcIixlPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBkfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZi5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gZS50aGVuKG51bGwsYSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYil7ci5lYWNoKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1yLmlzRnVuY3Rpb24oYVtkWzRdXSkmJmFbZFs0XV07ZltkWzFdXShmdW5jdGlvbigpe3ZhciBhPWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJnIuaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGIubm90aWZ5KS5kb25lKGIucmVzb2x2ZSkuZmFpbChiLnJlamVjdCk6YltkWzBdK1wiV2l0aFwiXSh0aGlzLGU/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbihiLGQsZSl7dmFyIGY9MDtmdW5jdGlvbiBnKGIsYyxkLGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBoPXRoaXMsaT1hcmd1bWVudHMsaj1mdW5jdGlvbigpe3ZhciBhLGo7aWYoIShiPGYpKXtpZihhPWQuYXBwbHkoaCxpKSxhPT09Yy5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtqPWEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkmJmEudGhlbixyLmlzRnVuY3Rpb24oaik/ZT9qLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSkpOihmKyssai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpLGcoZixjLE4sYy5ub3RpZnlXaXRoKSkpOihkIT09TiYmKGg9dm9pZCAwLGk9W2FdKSwoZXx8Yy5yZXNvbHZlV2l0aCkoaCxpKSl9fSxrPWU/ajpmdW5jdGlvbigpe3RyeXtqKCl9Y2F0Y2goYSl7ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soYSxrLnN0YWNrVHJhY2UpLGIrMT49ZiYmKGQhPT1PJiYoaD12b2lkIDAsaT1bYV0pLGMucmVqZWN0V2l0aChoLGkpKX19O2I/aygpOihyLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGsuc3RhY2tUcmFjZT1yLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxhLnNldFRpbWVvdXQoaykpfX1yZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihhKXtjWzBdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZSk/ZTpOLGEubm90aWZ5V2l0aCkpLGNbMV1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihiKT9iOk4pKSxjWzJdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZCk/ZDpPKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/ci5leHRlbmQoYSxlKTplfX0sZj17fTtyZXR1cm4gci5lYWNoKGMsZnVuY3Rpb24oYSxiKXt2YXIgZz1iWzJdLGg9Yls1XTtlW2JbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7ZD1ofSxjWzMtYV1bMl0uZGlzYWJsZSxjWzBdWzJdLmxvY2spLGcuYWRkKGJbM10uZmlyZSksZltiWzBdXT1mdW5jdGlvbigpe3JldHVybiBmW2JbMF0rXCJXaXRoXCJdKHRoaXM9PT1mP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZltiWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZS5wcm9taXNlKGYpLGImJmIuY2FsbChmLGYpLGZ9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aCxjPWIsZD1BcnJheShjKSxlPWYuY2FsbChhcmd1bWVudHMpLGc9ci5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2RbYV09dGhpcyxlW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9mLmNhbGwoYXJndW1lbnRzKTpjLC0tYnx8Zy5yZXNvbHZlV2l0aChkLGUpfX07aWYoYjw9MSYmKFAoYSxnLmRvbmUoaChjKSkucmVzb2x2ZSxnLnJlamVjdCwhYiksXCJwZW5kaW5nXCI9PT1nLnN0YXRlKCl8fHIuaXNGdW5jdGlvbihlW2NdJiZlW2NdLnRoZW4pKSlyZXR1cm4gZy50aGVuKCk7d2hpbGUoYy0tKVAoZVtjXSxoKGMpLGcucmVqZWN0KTtyZXR1cm4gZy5wcm9taXNlKCl9fSk7dmFyIFE9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGIsYyl7YS5jb25zb2xlJiZhLmNvbnNvbGUud2FybiYmYiYmUS50ZXN0KGIubmFtZSkmJmEuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrYi5tZXNzYWdlLGIuc3RhY2ssYyl9LHIucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oYil7YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYn0pfTt2YXIgUj1yLkRlZmVycmVkKCk7ci5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gUi50aGVuKGEpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oYSl7ci5yZWFkeUV4Y2VwdGlvbihhKX0pLHRoaXN9LHIuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1yLnJlYWR5V2FpdDpyLmlzUmVhZHkpfHwoci5pc1JlYWR5PSEwLGEhPT0hMCYmLS1yLnJlYWR5V2FpdD4wfHxSLnJlc29sdmVXaXRoKGQsW3JdKSl9fSksci5yZWFkeS50aGVuPVIudGhlbjtmdW5jdGlvbiBTKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLFxuYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpLHIucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KHIucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpKTt2YXIgVD1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1yLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylUKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLHIuaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChyKGEpLGMpfSkpLGIpKWZvcig7aDxpO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFU9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBWKCl7dGhpcy5leHBhbmRvPXIuZXhwYW5kbytWLnVpZCsrfVYudWlkPTEsVi5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sVShhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtyLmNhbWVsQ2FzZShiKV09YztlbHNlIGZvcihkIGluIGIpZVtyLmNhbWVsQ2FzZShkKV09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtyLmNhbWVsQ2FzZShiKV19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jP3RoaXMuZ2V0KGEsYik6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWQpe2lmKHZvaWQgMCE9PWIpe0FycmF5LmlzQXJyYXkoYik/Yj1iLm1hcChyLmNhbWVsQ2FzZSk6KGI9ci5jYW1lbENhc2UoYiksYj1iIGluIGQ/W2JdOmIubWF0Y2goTCl8fFtdKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZFtiW2NdXX0odm9pZCAwPT09Ynx8ci5pc0VtcHR5T2JqZWN0KGQpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhci5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIFc9bmV3IFYsWD1uZXcgVixZPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxaPS9bQS1aXS9nO2Z1bmN0aW9uICQoYSl7cmV0dXJuXCJ0cnVlXCI9PT1hfHxcImZhbHNlXCIhPT1hJiYoXCJudWxsXCI9PT1hP251bGw6YT09PSthK1wiXCI/K2E6WS50ZXN0KGEpP0pTT04ucGFyc2UoYSk6YSl9ZnVuY3Rpb24gXyhhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFosXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz0kKGMpfWNhdGNoKGUpe31YLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31yLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gWC5oYXNEYXRhKGEpfHxXLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBYLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtYLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtXLnJlbW92ZShhLGIpfX0pLHIuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9WC5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFXLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9ci5jYW1lbENhc2UoZC5zbGljZSg1KSksXyhmLGQsZVtkXSkpKTtXLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSl9KTpUKHRoaXMsZnVuY3Rpb24oYil7dmFyIGM7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1YLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1fKGYsYSksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnJlbW92ZSh0aGlzLGEpfSl9fSksci5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihhKXJldHVybiBiPShifHxcImZ4XCIpK1wicXVldWVcIixkPVcuZ2V0KGEsYiksYyYmKCFkfHxBcnJheS5pc0FycmF5KGMpP2Q9Vy5hY2Nlc3MoYSxiLHIubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9ci5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1yLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe3IuZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFcuZ2V0KGEsYyl8fFcuYWNjZXNzKGEsYyx7ZW1wdHk6ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtXLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLHIuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/ci5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1yLnF1ZXVlKHRoaXMsYSxiKTtyLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZyLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1yLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1XLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBhYT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsYmE9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrYWErXCIpKFthLXolXSopJFwiLFwiaVwiKSxjYT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sZGE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09YS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09YS5zdHlsZS5kaXNwbGF5JiZyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZGlzcGxheVwiKX0sZWE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9O2Z1bmN0aW9uIGZhKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiByLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KHIuY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShyLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZiYS5leGVjKHIuY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsci5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgZ2E9e307ZnVuY3Rpb24gaGEoYSl7dmFyIGIsYz1hLm93bmVyRG9jdW1lbnQsZD1hLm5vZGVOYW1lLGU9Z2FbZF07cmV0dXJuIGU/ZTooYj1jLmJvZHkuYXBwZW5kQ2hpbGQoYy5jcmVhdGVFbGVtZW50KGQpKSxlPXIuY3NzKGIsXCJkaXNwbGF5XCIpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxcIm5vbmVcIj09PWUmJihlPVwiYmxvY2tcIiksZ2FbZF09ZSxlKX1mdW5jdGlvbiBpYShhLGIpe2Zvcih2YXIgYyxkLGU9W10sZj0wLGc9YS5sZW5ndGg7ZjxnO2YrKylkPWFbZl0sZC5zdHlsZSYmKGM9ZC5zdHlsZS5kaXNwbGF5LGI/KFwibm9uZVwiPT09YyYmKGVbZl09Vy5nZXQoZCxcImRpc3BsYXlcIil8fG51bGwsZVtmXXx8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmZGEoZCkmJihlW2ZdPWhhKGQpKSk6XCJub25lXCIhPT1jJiYoZVtmXT1cIm5vbmVcIixXLnNldChkLFwiZGlzcGxheVwiLGMpKSk7Zm9yKGY9MDtmPGc7ZisrKW51bGwhPWVbZl0mJihhW2ZdLnN0eWxlLmRpc3BsYXk9ZVtmXSk7cmV0dXJuIGF9ci5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtkYSh0aGlzKT9yKHRoaXMpLnNob3coKTpyKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBqYT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxrYT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksbGE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxtYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O21hLm9wdGdyb3VwPW1hLm9wdGlvbixtYS50Ym9keT1tYS50Zm9vdD1tYS5jb2xncm91cD1tYS5jYXB0aW9uPW1hLnRoZWFkLG1hLnRoPW1hLnRkO2Z1bmN0aW9uIG5hKGEsYil7dmFyIGM7cmV0dXJuIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdLHZvaWQgMD09PWJ8fGImJkIoYSxiKT9yLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIG9hKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKVcuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fFcuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgcGE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHFhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbj0wLG89YS5sZW5ndGg7bjxvO24rKylpZihmPWFbbl0sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PXIudHlwZShmKSlyLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihwYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShrYS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPW1hW2hdfHxtYS5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK3IuaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtyLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG49MDt3aGlsZShmPW1bbisrXSlpZihkJiZyLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPXIuY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9bmEobC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZvYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pbGEudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxvLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsby5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciByYT1kLmRvY3VtZW50RWxlbWVudCxzYT0vXmtleS8sdGE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLHVhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gdmEoKXtyZXR1cm4hMH1mdW5jdGlvbiB3YSgpe3JldHVybiExfWZ1bmN0aW9uIHhhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiB5YShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpeWEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT13YTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiByKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPXIuZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfXIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5nZXQoYSk7aWYocSl7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihyYSxlKSxjLmd1aWR8fChjLmd1aWQ9ci5ndWlkKyspLChpPXEuZXZlbnRzKXx8KGk9cS5ldmVudHM9e30pLChnPXEuaGFuZGxlKXx8KGc9cS5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHImJnIuZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP3IuZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4mJihsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30saz1yLmV4dGVuZCh7dHlwZTpuLG9yaWdUeXBlOnAsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZyLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOm8uam9pbihcIi5cIil9LGYpLChtPWlbbl0pfHwobT1pW25dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQsbyxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihuLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksci5ldmVudC5nbG9iYWxbbl09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuaGFzRGF0YShhKSYmVy5nZXQoYSk7aWYocSYmKGk9cS5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuKXtsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixtPWlbbl18fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK28uam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZwIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLG8scS5oYW5kbGUpIT09ITF8fHIucmVtb3ZlRXZlbnQoYSxuLHEuaGFuZGxlKSxkZWxldGUgaVtuXSl9ZWxzZSBmb3IobiBpbiBpKXIuZXZlbnQucmVtb3ZlKGEsbitiW2pdLGMsZCwhMCk7ci5pc0VtcHR5T2JqZWN0KGkpJiZXLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZhciBiPXIuZXZlbnQuZml4KGEpLGMsZCxlLGYsZyxoLGk9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGo9KFcuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdfHxbXSxrPXIuZXZlbnQuc3BlY2lhbFtiLnR5cGVdfHx7fTtmb3IoaVswXT1iLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWlbY109YXJndW1lbnRzW2NdO2lmKGIuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYikhPT0hMSl7aD1yLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxiLGopLGM9MDt3aGlsZSgoZj1oW2MrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtiLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGQ9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2QrK10pJiYhYi5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWIucm5hbWVzcGFjZSYmIWIucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGIuaGFuZGxlT2JqPWcsYi5kYXRhPWcuZGF0YSxlPSgoci5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYi5yZXN1bHQ9ZSk9PT0hMSYmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYiksYi5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGcsaD1bXSxpPWIuZGVsZWdhdGVDb3VudCxqPWEudGFyZ2V0O2lmKGkmJmoubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09YS50eXBlJiZhLmJ1dHRvbj49MSkpZm9yKDtqIT09dGhpcztqPWoucGFyZW50Tm9kZXx8dGhpcylpZigxPT09ai5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8ai5kaXNhYmxlZCE9PSEwKSl7Zm9yKGY9W10sZz17fSxjPTA7YzxpO2MrKylkPWJbY10sZT1kLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWdbZV0mJihnW2VdPWQubmVlZHNDb250ZXh0P3IoZSx0aGlzKS5pbmRleChqKT4tMTpyLmZpbmQoZSx0aGlzLG51bGwsW2pdKS5sZW5ndGgpLGdbZV0mJmYucHVzaChkKTtmLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Zn0pfXJldHVybiBqPXRoaXMsaTxiLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Yi5zbGljZShpKX0pLGh9LGFkZFByb3A6ZnVuY3Rpb24oYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoci5FdmVudC5wcm90b3R5cGUsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OnIuaXNGdW5jdGlvbihiKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gYih0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W2FdfSxzZXQ6ZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfX0pfSxmaXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbci5leHBhbmRvXT9hOm5ldyByLkV2ZW50KGEpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09eGEoKSYmdGhpcy5mb2N1cylyZXR1cm4gdGhpcy5mb2N1cygpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzPT09eGEoKSYmdGhpcy5ibHVyKXJldHVybiB0aGlzLmJsdXIoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZihcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJkIodGhpcyxcImlucHV0XCIpKXJldHVybiB0aGlzLmNsaWNrKCksITF9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBCKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxyLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxyLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiByLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT92YTp3YSx0aGlzLnRhcmdldD1hLnRhcmdldCYmMz09PWEudGFyZ2V0Lm5vZGVUeXBlP2EudGFyZ2V0LnBhcmVudE5vZGU6YS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWEuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9YS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9YSxiJiZyLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxyLm5vdygpLHZvaWQodGhpc1tyLmV4cGFuZG9dPSEwKSk6bmV3IHIuRXZlbnQoYSxiKX0sci5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnIuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOndhLGlzUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sci5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYnV0dG9uO3JldHVybiBudWxsPT1hLndoaWNoJiZzYS50ZXN0KGEudHlwZSk/bnVsbCE9YS5jaGFyQ29kZT9hLmNoYXJDb2RlOmEua2V5Q29kZTohYS53aGljaCYmdm9pZCAwIT09YiYmdGEudGVzdChhLnR5cGUpPzEmYj8xOjImYj8zOjQmYj8yOjA6YS53aGljaH19LHIuZXZlbnQuYWRkUHJvcCksci5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7ci5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxyLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxyLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmoscihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPXdhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciB6YT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxBYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxCYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLENhPS9edHJ1ZVxcLyguKikvLERhPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBFYShhLGIpe3JldHVybiBCKGEsXCJ0YWJsZVwiKSYmQigxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9yKFwiPnRib2R5XCIsYSlbMF18fGE6YX1mdW5jdGlvbiBGYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBHYShhKXt2YXIgYj1DYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gSGEoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihXLmhhc0RhdGEoYSkmJihmPVcuYWNjZXNzKGEpLGc9Vy5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2M8ZDtjKyspci5ldmVudC5hZGQoYixlLGpbZV1bY10pfVguaGFzRGF0YShhKSYmKGg9WC5hY2Nlc3MoYSksaT1yLmV4dGVuZCh7fSxoKSxYLnNldChiLGkpKX19ZnVuY3Rpb24gSWEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmamEudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6XCJpbnB1dFwiIT09YyYmXCJ0ZXh0YXJlYVwiIT09Y3x8KGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiBKYShhLGIsYyxkKXtiPWcuYXBwbHkoW10sYik7dmFyIGUsZixoLGksaixrLGw9MCxtPWEubGVuZ3RoLG49bS0xLHE9YlswXSxzPXIuaXNGdW5jdGlvbihxKTtpZihzfHxtPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhby5jaGVja0Nsb25lJiZCYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtzJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksSmEoZixiLGMsZCl9KTtpZihtJiYoZT1xYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGY9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1mKSxmfHxkKSl7Zm9yKGg9ci5tYXAobmEoZSxcInNjcmlwdFwiKSxGYSksaT1oLmxlbmd0aDtsPG07bCsrKWo9ZSxsIT09biYmKGo9ci5jbG9uZShqLCEwLCEwKSxpJiZyLm1lcmdlKGgsbmEoaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW2xdLGosbCk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsci5tYXAoaCxHYSksbD0wO2w8aTtsKyspaj1oW2xdLGxhLnRlc3Qoai50eXBlfHxcIlwiKSYmIVcuYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZyLmNvbnRhaW5zKGssaikmJihqLnNyYz9yLl9ldmFsVXJsJiZyLl9ldmFsVXJsKGouc3JjKTpwKGoudGV4dENvbnRlbnQucmVwbGFjZShEYSxcIlwiKSxrKSl9cmV0dXJuIGF9ZnVuY3Rpb24gS2EoYSxiLGMpe2Zvcih2YXIgZCxlPWI/ci5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fHIuY2xlYW5EYXRhKG5hKGQpKSxkLnBhcmVudE5vZGUmJihjJiZyLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmb2EobmEoZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1yLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHphLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1yLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKG8ubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fHIuaXNYTUxEb2MoYSkpKWZvcihnPW5hKGgpLGY9bmEoYSksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylJYShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxuYShhKSxnPWd8fG5hKGgpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSGEoZltkXSxnW2RdKTtlbHNlIEhhKGEsaCk7cmV0dXJuIGc9bmEoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZvYShnLCFpJiZuYShhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPXIuZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKFUoYykpe2lmKGI9Y1tXLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP3IuZXZlbnQucmVtb3ZlKGMsZCk6ci5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbVy5leHBhbmRvXT12b2lkIDB9Y1tYLmV4cGFuZG9dJiYoY1tYLmV4cGFuZG9dPXZvaWQgMCl9fX0pLHIuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP3IudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsIT1hJiZhLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gci5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIUFhLnRlc3QoYSkmJiFtYVsoa2EuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPXIuaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtjPGQ7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7ci5pbkFycmF5KHRoaXMsYSk8MCYmKHIuY2xlYW5EYXRhKG5hKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksci5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPXIoYSksZj1lLmxlbmd0aC0xLGc9MDtnPD1mO2crKyljPWc9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCkscihlW2ddKVtiXShjKSxoLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBMYT0vXm1hcmdpbi8sTWE9bmV3IFJlZ0V4cChcIl4oXCIrYWErXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksTmE9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfTshZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoaSl7aS5zdHlsZS5jc3NUZXh0PVwiYm94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaS5pbm5lckhUTUw9XCJcIixyYS5hcHBlbmRDaGlsZChoKTt2YXIgYj1hLmdldENvbXB1dGVkU3R5bGUoaSk7Yz1cIjElXCIhPT1iLnRvcCxnPVwiMnB4XCI9PT1iLm1hcmdpbkxlZnQsZT1cIjRweFwiPT09Yi53aWR0aCxpLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZj1cIjRweFwiPT09Yi5tYXJnaW5SaWdodCxyYS5yZW1vdmVDaGlsZChoKSxpPW51bGx9fXZhciBjLGUsZixnLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGk9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc3R5bGUmJihpLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixpLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixvLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1pLnN0eWxlLmJhY2tncm91bmRDbGlwLGguc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsaC5hcHBlbmRDaGlsZChpKSxyLmV4dGVuZChvLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxjfSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBiKCksZX0scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBiKCksZn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxnfX0pKX0oKTtmdW5jdGlvbiBPYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fE5hKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSxcIlwiIT09Z3x8ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPXIuc3R5bGUoYSxiKSksIW8ucGl4ZWxNYXJnaW5SaWdodCgpJiZNYS50ZXN0KGcpJiZMYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIFBhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBRYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sUmE9L14tLS8sU2E9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFRhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sVWE9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBXYShhKXtpZihhIGluIFZhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9VWEubGVuZ3RoO3doaWxlKGMtLSlpZihhPVVhW2NdK2IsYSBpbiBWYSlyZXR1cm4gYX1mdW5jdGlvbiBYYShhKXt2YXIgYj1yLmNzc1Byb3BzW2FdO3JldHVybiBifHwoYj1yLmNzc1Byb3BzW2FdPVdhKGEpfHxhKSxifWZ1bmN0aW9uIFlhKGEsYixjKXt2YXIgZD1iYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gWmEoYSxiLGMsZCxlKXt2YXIgZixnPTA7Zm9yKGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjA7Zjw0O2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1yLmNzcyhhLGMrY2FbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiAkYShhLGIsYyl7dmFyIGQsZT1OYShhKSxmPU9hKGEsYixlKSxnPVwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpO3JldHVybiBNYS50ZXN0KGYpP2Y6KGQ9ZyYmKG8uYm94U2l6aW5nUmVsaWFibGUoKXx8Zj09PWEuc3R5bGVbYl0pLFwiYXV0b1wiPT09ZiYmKGY9YVtcIm9mZnNldFwiK2JbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpXSksZj1wYXJzZUZsb2F0KGYpfHwwLGYrWmEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZSkrXCJweFwiKX1yLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPU9hKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpLGo9YS5zdHlsZTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmpbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPWJhLmV4ZWMoYykpJiZlWzFdJiYoYz1mYShhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KHIuY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksby5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGpbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaT9qLnNldFByb3BlcnR5KGIsYyk6altiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYik7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPU9hKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gVGEmJihlPVRhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLHIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtpZihjKXJldHVybiFRYS50ZXN0KHIuY3NzKGEsXCJkaXNwbGF5XCIpKXx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD8kYShhLGIsZCk6ZWEoYSxTYSxmdW5jdGlvbigpe3JldHVybiAkYShhLGIsZCl9KX0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJk5hKGEpLGc9ZCYmWmEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPWJhLmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPXIuY3NzKGEsYikpLFlhKGEsYyxnKX19fSksci5jc3NIb29rcy5tYXJnaW5MZWZ0PVBhKG8ucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7aWYoYilyZXR1cm4ocGFyc2VGbG9hdChPYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1lYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxyLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ZDw0O2QrKyllW2ErY2FbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sTGEudGVzdChhKXx8KHIuY3NzSG9va3NbYStiXS5zZXQ9WWEpfSksci5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYoQXJyYXkuaXNBcnJheShiKSl7Zm9yKGQ9TmEoYSksZT1iLmxlbmd0aDtnPGU7ZysrKWZbYltnXV09ci5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP3Iuc3R5bGUoYSxiLGMpOnIuY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIF9hKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBfYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfXIuVHdlZW49X2EsX2EucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpfYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxyLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KHIuY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1yLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sX2EucHJvdG90eXBlLmluaXQucHJvdG90eXBlPV9hLnByb3RvdHlwZSxfYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1yLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7ci5meC5zdGVwW2EucHJvcF0/ci5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW3IuY3NzUHJvcHNbYS5wcm9wXV0mJiFyLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6ci5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sX2EucHJvcEhvb2tzLnNjcm9sbFRvcD1fYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxyLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sci5meD1fYS5wcm90b3R5cGUuaW5pdCxyLmZ4LnN0ZXA9e307dmFyIGFiLGJiLGNiPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxkYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGViKCl7YmImJihkLmhpZGRlbj09PSExJiZhLnJlcXVlc3RBbmltYXRpb25GcmFtZT9hLnJlcXVlc3RBbmltYXRpb25GcmFtZShlYik6YS5zZXRUaW1lb3V0KGViLHIuZnguaW50ZXJ2YWwpLHIuZngudGljaygpKX1mdW5jdGlvbiBmYigpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXthYj12b2lkIDB9KSxhYj1yLm5vdygpfWZ1bmN0aW9uIGdiKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDtkPDQ7ZCs9Mi1iKWM9Y2FbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gaGIoYSxiLGMpe2Zvcih2YXIgZCxlPShrYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChrYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIGliKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9XCJ3aWR0aFwiaW4gYnx8XCJoZWlnaHRcImluIGIsbT10aGlzLG49e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmZGEoYSkscT1XLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChnPXIuX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWcudW5xdWV1ZWQmJihnLnVucXVldWVkPTAsaD1nLmVtcHR5LmZpcmUsZy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Zy51bnF1ZXVlZHx8aCgpfSksZy51bnF1ZXVlZCsrLG0uYWx3YXlzKGZ1bmN0aW9uKCl7bS5hbHdheXMoZnVuY3Rpb24oKXtnLnVucXVldWVkLS0sci5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxnLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLGNiLnRlc3QoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW5bZF09cSYmcVtkXXx8ci5zdHlsZShhLGQpfWlmKGk9IXIuaXNFbXB0eU9iamVjdChiKSxpfHwhci5pc0VtcHR5T2JqZWN0KG4pKXtsJiYxPT09YS5ub2RlVHlwZSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9cSYmcS5kaXNwbGF5LG51bGw9PWomJihqPVcuZ2V0KGEsXCJkaXNwbGF5XCIpKSxrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLFwibm9uZVwiPT09ayYmKGo/az1qOihpYShbYV0sITApLGo9YS5zdHlsZS5kaXNwbGF5fHxqLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksaWEoW2FdKSkpLChcImlubGluZVwiPT09a3x8XCJpbmxpbmUtYmxvY2tcIj09PWsmJm51bGwhPWopJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJmbG9hdFwiKSYmKGl8fChtLmRvbmUoZnVuY3Rpb24oKXtvLmRpc3BsYXk9an0pLG51bGw9PWomJihrPW8uZGlzcGxheSxqPVwibm9uZVwiPT09az9cIlwiOmspKSxvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbS5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpLGk9ITE7Zm9yKGQgaW4gbilpfHwocT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Vy5hY2Nlc3MoYSxcImZ4c2hvd1wiLHtkaXNwbGF5Omp9KSxmJiYocS5oaWRkZW49IXApLHAmJmlhKFthXSwhMCksbS5kb25lKGZ1bmN0aW9uKCl7cHx8aWEoW2FdKSxXLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihkIGluIG4pci5zdHlsZShhLGQsbltkXSl9KSksaT1oYihwP3FbZF06MCxkLG0pLGQgaW4gcXx8KHFbZF09aS5zdGFydCxwJiYoaS5lbmQ9aS5zdGFydCxpLnN0YXJ0PTApKX19ZnVuY3Rpb24gamIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1yLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLEFycmF5LmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPXIuY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBrYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1rYi5wcmVmaWx0ZXJzLmxlbmd0aCxoPXIuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPWFifHxmYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtnPGk7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksZjwxJiZpP2M6KGl8fGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpyLmV4dGVuZCh7fSxiKSxvcHRzOnIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpyLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOmFifHxmYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9ci5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtjPGQ7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihqYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtmPGc7ZisrKWlmKGQ9a2IucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIHIuaXNGdW5jdGlvbihkLnN0b3ApJiYoci5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPXIucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiByLm1hcChrLGhiLGopLHIuaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpLHIuZngudGltZXIoci5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksan1yLkFuaW1hdGlvbj1yLmV4dGVuZChrYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gZmEoYy5lbGVtLGEsYmEuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtyLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChMKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyljPWFbZF0sa2IudHdlZW5lcnNbY109a2IudHdlZW5lcnNbY118fFtdLGtiLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W2liXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP2tiLnByZWZpbHRlcnMudW5zaGlmdChhKTprYi5wcmVmaWx0ZXJzLnB1c2goYSl9fSksci5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/ci5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxyLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIXIuaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIHIuZngub2ZmP2QuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2YgZC5kdXJhdGlvbiYmKGQuZHVyYXRpb24gaW4gci5meC5zcGVlZHM/ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpkLmR1cmF0aW9uPXIuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoZGEpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWtiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFcuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVcuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmRiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vy5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShnYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246Z2IoXCJzaG93XCIpLHNsaWRlVXA6Z2IoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmdiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihhYj1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLGFiPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLHIuZnguc3RhcnQoKX0sci5meC5pbnRlcnZhbD0xMyxyLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7YmJ8fChiYj0hMCxlYigpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YmI9bnVsbH0sci5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sci5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPXIuZng/ci5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLG8uY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxvLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsby5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgbGIsbWI9ci5leHByLmF0dHJIYW5kbGU7ci5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIuYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/ci5wcm9wKGEsYixjKTooMT09PWYmJnIuaXNYTUxEb2MoYSl8fChlPXIuYXR0ckhvb2tzW2IudG9Mb3dlckNhc2UoKV18fChyLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2xiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCByLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPXIuZmluZC5hdHRyKGEsYiksXG5udWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIW8ucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmQihhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT1iJiZiLm1hdGNoKEwpO2lmKGUmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZVtkKytdKWEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGxiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/ci5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sci5lYWNoKHIuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPW1iW2JdfHxyLmZpbmQuYXR0cjttYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZixnPWIudG9Mb3dlckNhc2UoKTtyZXR1cm4gZHx8KGY9bWJbZ10sbWJbZ109ZSxlPW51bGwhPWMoYSxiLGQpP2c6bnVsbCxtYltnXT1mKSxlfX0pO3ZhciBuYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLG9iPS9eKD86YXxhcmVhKSQvaTtyLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tyLnByb3BGaXhbYV18fGFdfSl9fSksci5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoYj1yLnByb3BGaXhbYl18fGIsZT1yLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpuYi50ZXN0KGEubm9kZU5hbWUpfHxvYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLG8ub3B0U2VsZWN0ZWR8fChyLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksci5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe3IucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTtmdW5jdGlvbiBwYihhKXt2YXIgYj1hLm1hdGNoKEwpfHxbXTtyZXR1cm4gYi5qb2luKFwiIFwiKX1mdW5jdGlvbiBxYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ci5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIscWIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goTCl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9cWIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrcGIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIscWIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goTCl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9cWIoYyksZD0xPT09Yy5ub2RlVHlwZSYmXCIgXCIrcGIoZSkrXCIgXCIpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHFiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPXIodGhpcyksZj1hLm1hdGNoKEwpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9cWIodGhpcyksYiYmVy5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOlcuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrcGIocWIoYykpK1wiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciByYj0vXFxyL2c7ci5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPXIuaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxyKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6QXJyYXkuaXNBcnJheShlKSYmKGU9ci5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPXIudmFsSG9va3NbdGhpcy50eXBlXXx8ci52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1yLnZhbEhvb2tzW2UudHlwZV18fHIudmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksci5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpwYihyLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9YS5vcHRpb25zLGY9YS5zZWxlY3RlZEluZGV4LGc9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGUsaD1nP251bGw6W10saT1nP2YrMTplLmxlbmd0aDtmb3IoZD1mPDA/aTpnP2Y6MDtkPGk7ZCsrKWlmKGM9ZVtkXSwoYy5zZWxlY3RlZHx8ZD09PWYpJiYhYy5kaXNhYmxlZCYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFCKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1yKGMpLnZhbCgpLGcpcmV0dXJuIGI7aC5wdXNoKGIpfXJldHVybiBofSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9ci5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPXIuaW5BcnJheShyLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxyLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7ci52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7aWYoQXJyYXkuaXNBcnJheShiKSlyZXR1cm4gYS5jaGVja2VkPXIuaW5BcnJheShyKGEpLnZhbCgpLGIpPi0xfX0sby5jaGVja09ufHwoci52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgc2I9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO3IuZXh0ZW5kKHIuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosayxtLG4sbz1bZXx8ZF0scD1sLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscT1sLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFzYi50ZXN0KHArci5ldmVudC50cmlnZ2VyZWQpJiYocC5pbmRleE9mKFwiLlwiKT4tMSYmKHE9cC5zcGxpdChcIi5cIikscD1xLnNoaWZ0KCkscS5zb3J0KCkpLGs9cC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcCxiPWJbci5leHBhbmRvXT9iOm5ldyByLkV2ZW50KHAsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXEuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitxLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06ci5tYWtlQXJyYXkoYyxbYl0pLG49ci5ldmVudC5zcGVjaWFsW3BdfHx7fSxmfHwhbi50cmlnZ2VyfHxuLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFuLm5vQnViYmxlJiYhci5pc1dpbmRvdyhlKSl7Zm9yKGo9bi5kZWxlZ2F0ZVR5cGV8fHAsc2IudGVzdChqK3ApfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpby5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJm8ucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPW9bZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm4uYmluZFR5cGV8fHAsbT0oVy5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJlcuZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09ayYmaFtrXSxtJiZtLmFwcGx5JiZVKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1wLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG4uX2RlZmF1bHQmJm4uX2RlZmF1bHQuYXBwbHkoby5wb3AoKSxjKSE9PSExfHwhVShlKXx8ayYmci5pc0Z1bmN0aW9uKGVbcF0pJiYhci5pc1dpbmRvdyhlKSYmKGk9ZVtrXSxpJiYoZVtrXT1udWxsKSxyLmV2ZW50LnRyaWdnZXJlZD1wLGVbcF0oKSxyLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVba109aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXIuZXh0ZW5kKG5ldyByLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO3IuZXZlbnQudHJpZ2dlcihkLG51bGwsYil9fSksci5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07aWYoYylyZXR1cm4gci5ldmVudC50cmlnZ2VyKGEsYixjLCEwKX19KSxyLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksci5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfX0pLG8uZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gYSxvLmZvY3VzaW58fHIuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7ci5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LHIuZXZlbnQuZml4KGEpKX07ci5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksVy5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpLTE7ZT9XLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLFcucmVtb3ZlKGQsYikpfX19KTt2YXIgdGI9YS5sb2NhdGlvbix1Yj1yLm5vdygpLHZiPS9cXD8vO3IucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGM7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXtjPShuZXcgYS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhiLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yz12b2lkIDB9cmV0dXJuIGMmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxyLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciB3Yj0vXFxbXFxdJC8seGI9L1xccj9cXG4vZyx5Yj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlO2lmKEFycmF5LmlzQXJyYXkoYikpci5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx3Yi50ZXN0KGEpP2QoYSxlKTpBYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PXIudHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUFiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9ci5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe3ZhciBjPXIuaXNGdW5jdGlvbihiKT9iKCk6YjtkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PWM/XCJcIjpjKX07aWYoQXJyYXkuaXNBcnJheShhKXx8YS5qcXVlcnkmJiFyLmlzUGxhaW5PYmplY3QoYSkpci5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlBYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKX0sci5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiByLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9ci5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9yLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFyKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ6Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYheWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IWphLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9cih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOkFycmF5LmlzQXJyYXkoYyk/ci5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIEJiPS8lMjAvZyxDYj0vIy4qJC8sRGI9LyhbPyZdKV89W14mXSovLEViPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sRmI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sR2I9L14oPzpHRVR8SEVBRCkkLyxIYj0vXlxcL1xcLy8sSWI9e30sSmI9e30sS2I9XCIqL1wiLmNvbmNhdChcIipcIiksTGI9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtMYi5ocmVmPXRiLmhyZWY7ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXTtpZihyLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gTmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09SmI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxyLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBPYihhLGIpe3ZhciBjLGQsZT1yLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZyLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gUGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31pZihmKXJldHVybiBmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl19ZnVuY3Rpb24gUWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1yLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6dGIuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpGYi50ZXN0KHRiLnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpLYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6ci5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/T2IoT2IoYSxyLmFqYXhTZXR0aW5ncyksYik6T2Ioci5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6TWIoSWIpLGFqYXhUcmFuc3BvcnQ6TWIoSmIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG0sbixvPXIuYWpheFNldHVwKHt9LGMpLHA9by5jb250ZXh0fHxvLHE9by5jb250ZXh0JiYocC5ub2RlVHlwZXx8cC5qcXVlcnkpP3IocCk6ci5ldmVudCxzPXIuRGVmZXJyZWQoKSx0PXIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdT1vLnN0YXR1c0NvZGV8fHt9LHY9e30sdz17fSx4PVwiY2FuY2VsZWRcIix5PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoayl7aWYoIWgpe2g9e307d2hpbGUoYj1FYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGs/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWsmJihhPXdbYS50b0xvd2VyQ2FzZSgpXT13W2EudG9Mb3dlckNhc2UoKV18fGEsdlthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1rJiYoby5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoayl5LmFsd2F5cyhhW3kuc3RhdHVzXSk7ZWxzZSBmb3IoYiBpbiBhKXVbYl09W3VbYl0sYVtiXV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHg7cmV0dXJuIGUmJmUuYWJvcnQoYiksQSgwLGIpLHRoaXN9fTtpZihzLnByb21pc2UoeSksby51cmw9KChifHxvLnVybHx8dGIuaHJlZikrXCJcIikucmVwbGFjZShIYix0Yi5wcm90b2NvbCtcIi8vXCIpLG8udHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxvLm1ldGhvZHx8by50eXBlLG8uZGF0YVR5cGVzPShvLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W1wiXCJdLG51bGw9PW8uY3Jvc3NEb21haW4pe2o9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ai5ocmVmPW8udXJsLGouaHJlZj1qLmhyZWYsby5jcm9zc0RvbWFpbj1MYi5wcm90b2NvbCtcIi8vXCIrTGIuaG9zdCE9ai5wcm90b2NvbCtcIi8vXCIrai5ob3N0fWNhdGNoKHope28uY3Jvc3NEb21haW49ITB9fWlmKG8uZGF0YSYmby5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIG8uZGF0YSYmKG8uZGF0YT1yLnBhcmFtKG8uZGF0YSxvLnRyYWRpdGlvbmFsKSksTmIoSWIsbyxjLHkpLGspcmV0dXJuIHk7bD1yLmV2ZW50JiZvLmdsb2JhbCxsJiYwPT09ci5hY3RpdmUrKyYmci5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG8udHlwZT1vLnR5cGUudG9VcHBlckNhc2UoKSxvLmhhc0NvbnRlbnQ9IUdiLnRlc3Qoby50eXBlKSxmPW8udXJsLnJlcGxhY2UoQ2IsXCJcIiksby5oYXNDb250ZW50P28uZGF0YSYmby5wcm9jZXNzRGF0YSYmMD09PShvLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYoby5kYXRhPW8uZGF0YS5yZXBsYWNlKEJiLFwiK1wiKSk6KG49by51cmwuc2xpY2UoZi5sZW5ndGgpLG8uZGF0YSYmKGYrPSh2Yi50ZXN0KGYpP1wiJlwiOlwiP1wiKStvLmRhdGEsZGVsZXRlIG8uZGF0YSksby5jYWNoZT09PSExJiYoZj1mLnJlcGxhY2UoRGIsXCIkMVwiKSxuPSh2Yi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrdWIrKyArbiksby51cmw9ZituKSxvLmlmTW9kaWZpZWQmJihyLmxhc3RNb2RpZmllZFtmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixyLmxhc3RNb2RpZmllZFtmXSksci5ldGFnW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsci5ldGFnW2ZdKSksKG8uZGF0YSYmby5oYXNDb250ZW50JiZvLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixvLmNvbnRlbnRUeXBlKSx5LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixvLmRhdGFUeXBlc1swXSYmby5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXT9vLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW8uZGF0YVR5cGVzWzBdP1wiLCBcIitLYitcIjsgcT0wLjAxXCI6XCJcIik6by5hY2NlcHRzW1wiKlwiXSk7Zm9yKG0gaW4gby5oZWFkZXJzKXkuc2V0UmVxdWVzdEhlYWRlcihtLG8uaGVhZGVyc1ttXSk7aWYoby5iZWZvcmVTZW5kJiYoby5iZWZvcmVTZW5kLmNhbGwocCx5LG8pPT09ITF8fGspKXJldHVybiB5LmFib3J0KCk7aWYoeD1cImFib3J0XCIsdC5hZGQoby5jb21wbGV0ZSkseS5kb25lKG8uc3VjY2VzcykseS5mYWlsKG8uZXJyb3IpLGU9TmIoSmIsbyxjLHkpKXtpZih5LnJlYWR5U3RhdGU9MSxsJiZxLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt5LG9dKSxrKXJldHVybiB5O28uYXN5bmMmJm8udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt5LmFib3J0KFwidGltZW91dFwiKX0sby50aW1lb3V0KSk7dHJ5e2s9ITEsZS5zZW5kKHYsQSl9Y2F0Y2goeil7aWYoayl0aHJvdyB6O0EoLTEseil9fWVsc2UgQSgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBBKGIsYyxkLGgpe3ZhciBqLG0sbix2LHcseD1jO2t8fChrPSEwLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix5LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmYjwzMDB8fDMwND09PWIsZCYmKHY9UGIobyx5LGQpKSx2PVFiKG8sdix5LGopLGo/KG8uaWZNb2RpZmllZCYmKHc9eS5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKHIubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKHIuZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1vLnR5cGU/eD1cIm5vY29udGVudFwiOjMwND09PWI/eD1cIm5vdG1vZGlmaWVkXCI6KHg9di5zdGF0ZSxtPXYuZGF0YSxuPXYuZXJyb3Isaj0hbikpOihuPXgsIWImJnh8fCh4PVwiZXJyb3JcIixiPDAmJihiPTApKSkseS5zdGF0dXM9Yix5LnN0YXR1c1RleHQ9KGN8fHgpK1wiXCIsaj9zLnJlc29sdmVXaXRoKHAsW20seCx5XSk6cy5yZWplY3RXaXRoKHAsW3kseCxuXSkseS5zdGF0dXNDb2RlKHUpLHU9dm9pZCAwLGwmJnEudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt5LG8saj9tOm5dKSx0LmZpcmVXaXRoKHAsW3kseF0pLGwmJihxLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeSxvXSksLS1yLmFjdGl2ZXx8ci5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geX0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHIuZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHIuZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksci5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe3JbYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIHIuaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLHIuYWpheChyLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sci5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksci5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gci5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxyLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gdGhpc1swXSYmKHIuaXNGdW5jdGlvbihhKSYmKGE9YS5jYWxsKHRoaXNbMF0pKSxiPXIoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiByLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPXIodGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9ci5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7cih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhcmVudChhKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtyKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHIuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4hci5leHByLnBzZXVkb3MudmlzaWJsZShhKX0sci5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hIShhLm9mZnNldFdpZHRofHxhLm9mZnNldEhlaWdodHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LHIuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX07dmFyIFJiPXswOjIwMCwxMjIzOjIwNH0sU2I9ci5hamF4U2V0dGluZ3MueGhyKCk7by5jb3JzPSEhU2ImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBTYixvLmFqYXg9U2I9ISFTYixyLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7dmFyIGMsZDtpZihvLmNvcnN8fFNiJiYhYi5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoUmJbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19KSxyLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oYSl7YS5jcm9zc0RvbWFpbiYmKGEuY29udGVudHMuc2NyaXB0PSExKX0pLHIuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiByLmdsb2JhbEV2YWwoYSksYX19fSksci5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxyLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1yKFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZmKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxkLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIFRiPVtdLFViPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87ci5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9VGIucG9wKCl8fHIuZXhwYW5kbytcIl9cIit1YisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksci5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihVYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVWIudGVzdChiLmRhdGEpJiZcImRhdGFcIik7aWYoaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0pcmV0dXJuIGU9Yi5qc29ucENhbGxiYWNrPXIuaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKFViLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHZiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fHIuZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/cihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxUYi5wdXNoKGUpKSxnJiZyLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSxvLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBhPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09YS5jaGlsZE5vZGVzLmxlbmd0aH0oKSxyLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpO3ZhciBlLGYsZztyZXR1cm4gYnx8KG8uY3JlYXRlSFRNTERvY3VtZW50PyhiPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLGU9Yi5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxlLmhyZWY9ZC5sb2NhdGlvbi5ocmVmLGIuaGVhZC5hcHBlbmRDaGlsZChlKSk6Yj1kKSxmPUMuZXhlYyhhKSxnPSFjJiZbXSxmP1tiLmNyZWF0ZUVsZW1lbnQoZlsxXSldOihmPXFhKFthXSxiLGcpLGcmJmcubGVuZ3RoJiZyKGcpLnJlbW92ZSgpLHIubWVyZ2UoW10sZi5jaGlsZE5vZGVzKSl9LHIuZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPXBiKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxyLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZyLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP3IoXCI8ZGl2PlwiKS5hcHBlbmQoci5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KHRoaXMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxyLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxyLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gci5ncmVwKHIudGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofSxyLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPXIuY3NzKGEsXCJwb3NpdGlvblwiKSxsPXIoYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1yLmNzcyhhLFwidG9wXCIpLGk9ci5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxyLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsci5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxyLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7ci5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZCxlLGY9dGhpc1swXTtpZihmKXJldHVybiBmLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhkPWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYj1mLm93bmVyRG9jdW1lbnQsYz1iLmRvY3VtZW50RWxlbWVudCxlPWIuZGVmYXVsdFZpZXcse3RvcDpkLnRvcCtlLnBhZ2VZT2Zmc2V0LWMuY2xpZW50VG9wLGxlZnQ6ZC5sZWZ0K2UucGFnZVhPZmZzZXQtYy5jbGllbnRMZWZ0fSk6e3RvcDowLGxlZnQ6MH19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1yLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLEIoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQ9e3RvcDpkLnRvcCtyLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbGVmdDpkLmxlZnQrci5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKX0pLHt0b3A6Yi50b3AtZC50b3Atci5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtci5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PXIuY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxyYX0pfX0pLHIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO3IuZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY7cmV0dXJuIHIuaXNXaW5kb3coYSk/Zj1hOjk9PT1hLm5vZGVUeXBlJiYoZj1hLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksci5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09UGEoby5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7aWYoYylyZXR1cm4gYz1PYShhLGIpLE1hLnRlc3QoYyk/cihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjfSl9KSxyLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7ci5mbltkXT1mdW5jdGlvbihlLGYpe3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGg9Y3x8KGU9PT0hMHx8Zj09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihiLGMsZSl7dmFyIGY7cmV0dXJuIHIuaXNXaW5kb3coYik/MD09PWQuaW5kZXhPZihcIm91dGVyXCIpP2JbXCJpbm5lclwiK2FdOmIuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGY9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZltcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGZbXCJvZmZzZXRcIithXSxmW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1lP3IuY3NzKGIsYyxoKTpyLnN0eWxlKGIsYyxlLGgpfSxiLGc/ZTp2b2lkIDAsZyl9fSl9KSxyLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pLHIuaG9sZFJlYWR5PWZ1bmN0aW9uKGEpe2E/ci5yZWFkeVdhaXQrKzpyLnJlYWR5KCEwKX0sci5pc0FycmF5PUFycmF5LmlzQXJyYXksci5wYXJzZUpTT049SlNPTi5wYXJzZSxyLm5vZGVOYW1lPUIsXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiByfSk7dmFyIFZiPWEualF1ZXJ5LFdiPWEuJDtyZXR1cm4gci5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1yJiYoYS4kPVdiKSxiJiZhLmpRdWVyeT09PXImJihhLmpRdWVyeT1WYikscn0sYnx8KGEualF1ZXJ5PWEuJD1yKSxyfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93d3cvLnRzL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==