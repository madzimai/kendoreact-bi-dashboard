import {
  I as I2
} from "./chunk-M2R6BCBQ.js";
import {
  A,
  G,
  I,
  J2 as J,
  K3 as K,
  M2 as M,
  R2 as R,
  T2 as T,
  U,
  a,
  a2,
  a3,
  a4,
  a5,
  arrowsSwapIcon,
  calendarIcon,
  caretAltDownIcon,
  caretAltUpIcon,
  chevronLeftIcon,
  chevronRightIcon,
  clockIcon,
  d,
  e,
  e2,
  e8 as e3,
  g2 as g,
  h,
  i4 as i,
  i5 as i2,
  j2 as j,
  l,
  l2,
  localeInfo,
  n,
  n2,
  n4 as n3,
  n5 as n4,
  o2 as o,
  o3 as o2,
  o7 as o3,
  p,
  p3 as p2,
  require_prop_types,
  s2 as s,
  t7 as t,
  te,
  v,
  v3 as v2,
  x,
  xIcon
} from "./chunk-ZRWBHFCZ.js";
import {
  __toESM,
  require_react
} from "./chunk-N3BBKUNS.js";

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Calendar.mjs
var f4 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-date-math/dist/es/clone-date.js
var cloneDate = function(date) {
  return date ? new Date(date.getTime()) : null;
};

// node_modules/@progress/kendo-date-math/dist/es/adjust-dst.js
var adjustDST = function(date, hour) {
  var newDate = cloneDate(date);
  if (hour === 0 && newDate.getHours() === 23) {
    newDate.setHours(newDate.getHours() + 2);
  }
  return newDate;
};

// node_modules/@progress/kendo-date-math/dist/es/add-days.js
var addDays = function(date, offset2) {
  var newDate = cloneDate(date);
  newDate.setDate(newDate.getDate() + offset2);
  return adjustDST(newDate, date.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/create-date.js
var createDate = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (hours === void 0) {
    hours = 0;
  }
  if (minutes === void 0) {
    minutes = 0;
  }
  if (seconds === void 0) {
    seconds = 0;
  }
  if (milliseconds === void 0) {
    milliseconds = 0;
  }
  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  if (year > -1 && year < 100) {
    date.setFullYear(date.getFullYear() - 1900);
  }
  return adjustDST(date, hours);
};

// node_modules/@progress/kendo-date-math/dist/es/last-day-of-month.js
var lastDayOfMonth = function(date) {
  var newDate = createDate(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  return addDays(newDate, -1);
};

// node_modules/@progress/kendo-date-math/dist/es/add-months.js
var MONTHS_LENGTH = 12;
var normalize = function(date, expectedMonth) {
  return date.getMonth() !== expectedMonth ? lastDayOfMonth(addMonths(date, -1)) : date;
};
var addMonths = function(date, offset2) {
  var newDate = cloneDate(date);
  var diff = (newDate.getMonth() + offset2) % MONTHS_LENGTH;
  var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
  newDate.setMonth(newDate.getMonth() + offset2);
  return normalize(adjustDST(newDate, date.getHours()), expectedMonth);
};

// node_modules/@progress/kendo-date-math/dist/es/set-year.js
var setYear = function(value, year) {
  var month = value.getMonth();
  var candidate = createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getMonth() === month ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/add-years.js
var addYears = function(value, offset2) {
  return adjustDST(setYear(value, value.getFullYear() + offset2), value.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/add-centuries.js
var addCenturies = function(value, offset2) {
  return addYears(value, 100 * offset2);
};

// node_modules/@progress/kendo-date-math/dist/es/add-decades.js
var addDecades = function(value, offset2) {
  return addYears(value, 10 * offset2);
};

// node_modules/@progress/kendo-date-math/dist/es/add-weeks.js
var addWeeks = function(date, offset2) {
  return addDays(date, offset2 * 7);
};

// node_modules/@progress/kendo-date-math/dist/es/constants.js
var MS_PER_MINUTE = 6e4;
var MS_PER_HOUR = 36e5;
var MS_PER_DAY = 864e5;

// node_modules/@progress/kendo-date-math/dist/es/direction.enum.js
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

// node_modules/@progress/kendo-date-math/dist/es/day-of-week.js
var dayOfWeek = function(date, weekDay, direction) {
  if (direction === void 0) {
    direction = Direction.Forward;
  }
  var newDate = cloneDate(date);
  var newDay = (weekDay - newDate.getDay() + 7 * direction) % 7;
  newDate.setDate(newDate.getDate() + newDay);
  return adjustDST(newDate, date.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/day.enum.js
var Day;
(function(Day2) {
  Day2[Day2["Sunday"] = 0] = "Sunday";
  Day2[Day2["Monday"] = 1] = "Monday";
  Day2[Day2["Tuesday"] = 2] = "Tuesday";
  Day2[Day2["Wednesday"] = 3] = "Wednesday";
  Day2[Day2["Thursday"] = 4] = "Thursday";
  Day2[Day2["Friday"] = 5] = "Friday";
  Day2[Day2["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));

// node_modules/@progress/kendo-date-math/dist/es/normalize-year.js
var normalizeYear = function(value, year) {
  return setYear(value, year(value.getFullYear()));
};

// node_modules/@progress/kendo-date-math/dist/es/first-decade-of-century.js
var firstDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y8) {
    return y8 - y8 % 100;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-centuries.js
var durationInCenturies = function(start, end) {
  return (firstDecadeOfCentury(end).getFullYear() - firstDecadeOfCentury(start).getFullYear()) / 100;
};

// node_modules/@progress/kendo-date-math/dist/es/first-year-of-decade.js
var firstYearOfDecade = function(value) {
  return normalizeYear(value, function(y8) {
    return y8 - y8 % 10;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js
var durationInDecades = function(start, end) {
  return (firstYearOfDecade(end).getFullYear() - firstYearOfDecade(start).getFullYear()) / 10;
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-months.js
var durationInMonths = function(start, end) {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
var durationInYears = function(start, end) {
  return end.getFullYear() - start.getFullYear();
};

// node_modules/@progress/kendo-date-math/dist/es/first-day-of-month.js
var firstDayOfMonth = function(date) {
  return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

// node_modules/@progress/kendo-date-math/dist/es/set-month.js
var setMonth = function(value, month) {
  var day = value.getDate();
  var candidate = createDate(value.getFullYear(), month, day, value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getDate() === day ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js
var firstMonthOfYear = function(value) {
  return setMonth(value, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/get-date.js
var getDate = function(date) {
  return createDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal.js
var isEqual = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && candidate.getTime() === expected.getTime();
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js
var isEqualDate = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && isEqual(getDate(candidate), getDate(expected));
};

// node_modules/@progress/kendo-date-math/dist/es/last-decade-of-century.js
var lastDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y8) {
    return y8 - y8 % 100 + 90;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js
var lastMonthOfYear = function(value) {
  return setMonth(value, 11);
};

// node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js
var lastYearOfDecade = function(value) {
  return normalizeYear(value, function(y8) {
    return y8 - y8 % 10 + 9;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/prev-day-of-week.js
var prevDayOfWeek = function(date, weekDay) {
  return dayOfWeek(date, weekDay, Direction.Backward);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/timezones.js
var timezones = {
  rules: {},
  titles: {},
  zones: {}
};

// node_modules/@progress/kendo-date-math/dist/es/tz/rule-to-date.js
var MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
var DAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
var MS_PER_MINUTE2 = 6e4;
var ruleToDate = function(year, rule, zoneOffset) {
  var month = rule[3];
  var on = rule[4];
  var time = rule[5];
  var date;
  var ruleOffset = time[3] === "u" ? -zoneOffset * MS_PER_MINUTE2 : 0;
  if (!isNaN(on)) {
    date = new Date(Date.UTC(year, MONTHS[month], on, time[0], time[1], time[2]) + ruleOffset);
  } else if (on.indexOf("last") === 0) {
    date = new Date(Date.UTC(year, MONTHS[month] + 1, 1, time[0] - 24, time[1], time[2]) + ruleOffset);
    var targetDay = DAYS[on.substr(4, 3)];
    var ourDay = date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
  } else if (on.indexOf(">=") >= 0) {
    date = new Date(Date.UTC(year, MONTHS[month], on.substr(5), time[0], time[1], time[2], 0) + ruleOffset);
    var targetDay = DAYS[on.substr(0, 3)];
    var ourDay = date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
  }
  return date;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/find-rule.js
var CURRENT_UTC_TIME = (/* @__PURE__ */ new Date()).getTime();
var findRule = function(zoneRule, utcTime, zoneOffset) {
  if (utcTime === void 0) {
    utcTime = CURRENT_UTC_TIME;
  }
  if (zoneOffset === void 0) {
    zoneOffset = 0;
  }
  var rules = timezones.rules[zoneRule];
  if (!rules) {
    var time = zoneRule.split(":");
    var offset2 = 0;
    if (time.length > 1) {
      offset2 = time[0] * 60 + Number(time[1]);
    }
    return [-1e6, "max", "-", "Jan", 1, [0, 0, 0], offset2, "-"];
  }
  var year = new Date(utcTime).getUTCFullYear();
  rules = rules.filter(function(currentRule) {
    var from = currentRule[0];
    var to = currentRule[1];
    return from <= year && (to >= year || from === year && to === "only" || to === "max");
  });
  rules.push(utcTime);
  rules.sort(function(a23, b4) {
    if (typeof a23 !== "number") {
      a23 = Number(ruleToDate(year, a23, zoneOffset));
    }
    if (typeof b4 !== "number") {
      b4 = Number(ruleToDate(year, b4, zoneOffset));
    }
    return a23 - b4;
  });
  var rule = rules[rules.indexOf(utcTime) - 1] || rules[rules.length - 1];
  return isNaN(rule) ? rule : null;
};

// node_modules/@progress/kendo-date-math/dist/es/errors.js
var NO_TZ_INFO = "The required {0} timezone information is not provided!";
var formatRegExp = /\{(\d+)}?\}/g;
var flatten = function(arr) {
  return arr.reduce(function(a23, b4) {
    return a23.concat(b4);
  }, []);
};
var formatMessage = function(message) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var flattenValues = flatten(values);
  return message.replace(formatRegExp, function(_3, index) {
    return flattenValues[parseInt(index, 10)];
  });
};

// node_modules/@progress/kendo-date-math/dist/es/tz/get-zone.js
var getZoneRules = function(timezone) {
  var zones = timezones.zones;
  if (!zones) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  var zoneRules = zones[timezone];
  var result = typeof zoneRules === "string" ? zones[zoneRules] : zoneRules;
  if (!result) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  return result;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/find-zone.js
var findZone = function(timezone, utcTime) {
  if (utcTime === void 0) {
    utcTime = (/* @__PURE__ */ new Date()).getTime();
  }
  if (timezone === "Etc/UTC" || timezone === "Etc/GMT") {
    return [0, "-", "UTC", null];
  }
  var zoneRules = getZoneRules(timezone);
  var idx = zoneRules.length - 1;
  for (; idx >= 0; idx--) {
    var until = zoneRules[idx][3];
    if (until && utcTime > until) {
      break;
    }
  }
  var zone = zoneRules[idx + 1];
  if (!zone) {
    throw new Error(formatMessage(NO_TZ_INFO, timezone));
  }
  return zone;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/zone-and-rule.js
var zoneAndRule = function(timezone, date) {
  var utcTime = date.getTime();
  var zone = findZone(timezone, utcTime);
  return {
    rule: findRule(zone[1], utcTime, zone[0]),
    zone
  };
};

// node_modules/@progress/kendo-date-math/dist/es/tz/pad-number.js
var padNumber = function(num, len) {
  if (len === void 0) {
    len = 2;
  }
  var sign = num < 0 ? "-" : "";
  return sign + new Array(len).concat([Math.abs(num)]).join("0").slice(-len);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/abbr-timezone.js
var abbrTimezone = function(timezone, date) {
  if (date === void 0) {
    date = /* @__PURE__ */ new Date();
  }
  if (timezone === "Etc/UTC") {
    return "UTC";
  }
  if (timezone === "Etc/GMT") {
    return "GMT";
  }
  if (timezone === "") {
    return "";
  }
  var _a2 = zoneAndRule(timezone, date), zone = _a2.zone, rule = _a2.rule;
  var base = zone[2];
  if (base.indexOf("/") >= 0) {
    return base.split("/")[rule && +rule[6] ? 1 : 0];
  } else if (base.indexOf("%s") >= 0) {
    return base.replace("%s", !rule || rule[7] === "-" ? "" : rule[7]);
  } else if (base.indexOf("%z") >= 0) {
    var hours = -1 * Math.trunc(zone[0] / 60);
    var hoursPart = padNumber(hours, 2);
    var signPart = hours > 0 ? "+" : "";
    var minutes = Math.abs(Math.trunc(zone[0] % 60));
    var minutesPart = minutes === 0 ? "" : padNumber(minutes, 2);
    return base.replace("%z", "" + signPart + hoursPart + minutesPart);
  }
  return base;
};

// node_modules/@progress/kendo-date-math/dist/es/tz/offset.js
var offset = function(timezone, date) {
  if (date === void 0) {
    date = /* @__PURE__ */ new Date();
  }
  if (timezone === "Etc/UTC" || timezone === "Etc/GMT") {
    return 0;
  }
  if (timezone === "") {
    return date.getTimezoneOffset();
  }
  var _a2 = zoneAndRule(timezone, date), rule = _a2.rule, zone = _a2.zone;
  return parseFloat(rule ? zone[0] - rule[6] : zone[0]);
};

// node_modules/@progress/kendo-date-math/dist/es/tz/to-local-date.js
function toLocalDate(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}

// node_modules/@progress/kendo-date-math/dist/es/tz/zoned-date.js
var addMinutes = function(date, minutes) {
  return new Date(date.getTime() + minutes * MS_PER_MINUTE);
};
var addHours = function(date, hours) {
  return new Date(date.getTime() + hours * MS_PER_HOUR);
};
var dayAbbr = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
var monthAbbr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var datePrefix = function(utcDate) {
  return dayAbbr[utcDate.getUTCDay()] + " " + monthAbbr[utcDate.getUTCMonth()];
};
function isZoneMissingHour(date, timezone) {
  var currentOffset = offset(timezone, date);
  var prevHour = addHours(date, -1);
  var prevOffset = offset(timezone, prevHour);
  return currentOffset < prevOffset;
}
function shiftZoneMissingHour(utcDate, timezone) {
  var dstOffset = isZoneMissingHour(utcDate, timezone) ? 1 : 0;
  return addHours(utcDate, dstOffset);
}
function convertTimezoneUTC(utcLocal, fromTimezone, toTimezone) {
  if (fromTimezone === toTimezone) {
    return utcLocal;
  }
  var fromOffset = offset(fromTimezone, utcLocal);
  var toOffset = offset(toTimezone, utcLocal);
  var baseDiff = fromOffset - toOffset;
  var midDate = addMinutes(utcLocal, baseDiff);
  var midOffset = offset(toTimezone, midDate);
  var dstDiff = toOffset - midOffset;
  return addMinutes(utcLocal, baseDiff + dstDiff);
}
function formatOffset(tzOffset) {
  var sign = tzOffset <= 0 ? "+" : "-";
  var value = Math.abs(tzOffset);
  var hours = padNumber(Math.floor(value / 60));
  var minutes = padNumber(value % 60);
  return "GMT" + sign + hours + minutes;
}
var ZonedDate = (
  /** @class */
  function() {
    function ZonedDate2(utcDate, timezone) {
      this._utcDate = cloneDate(utcDate);
      this.timezone = timezone;
      var tzOffset = offset(timezone, utcDate);
      this.timezoneOffset = tzOffset;
      var localDate = shiftZoneMissingHour(utcDate, timezone);
      this._localDate = convertTimezoneUTC(localDate, timezone, "Etc/UTC");
    }
    Object.defineProperty(ZonedDate2.prototype, "cachedLocalDate", {
      /**
       * Returns a cached local date that denotes the exact time in the set timezone.
       *
       * @return Date - A local date that denotes the exact time in the set timezone.
       *
       * This property is an alternative to `toLocalDate()` that returns a cached value instead of cloning it.
       *
       * > Modifying the returned instance will corrupt the `ZonedDate` state.
       */
      get: function() {
        return this._localDate;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ZonedDate2.prototype, "cachedUTCDate", {
      /**
       * Returns a cached `Date` instance with UTC date parts that are set to the local time in the set timezone.
       *
       * @returns Date - A `Date` with UTC date parts that are set to the local time in the set timezone.
       *
       * This property is an alternative to `toUTCDate()` that returns a cached value instead of cloning it.
       *
       * > Modifying the returned instance will corrupt the `ZonedDate` state.
       */
      get: function() {
        return this._utcDate;
      },
      enumerable: true,
      configurable: true
    });
    ZonedDate2.fromLocalDate = function(date, timezone) {
      if (timezone === void 0) {
        timezone = "";
      }
      var utcDate = convertTimezoneUTC(date, "Etc/UTC", timezone);
      var shiftZone = isZoneMissingHour(utcDate, timezone);
      var zoneOffset = offset(timezone, utcDate);
      var fixedOffset = 0;
      if (shiftZone) {
        fixedOffset = zoneOffset > 0 ? -1 : 1;
      }
      var adjDate = addHours(utcDate, fixedOffset);
      return ZonedDate2.fromUTCDate(adjDate, timezone);
    };
    ZonedDate2.fromUTCDate = function(utcDate, timezone) {
      if (timezone === void 0) {
        timezone = "";
      }
      return new ZonedDate2(utcDate, timezone);
    };
    ZonedDate2.prototype.toLocalDate = function() {
      return cloneDate(this._localDate);
    };
    ZonedDate2.prototype.toUTCDate = function() {
      return cloneDate(this._utcDate);
    };
    ZonedDate2.prototype.toTimezone = function(toTimezone) {
      if (this.timezone === toTimezone) {
        return this.clone();
      }
      var tzOffset = offset(this.timezone, this._utcDate);
      var date = addMinutes(this._utcDate, tzOffset);
      return ZonedDate2.fromLocalDate(date, toTimezone);
    };
    ZonedDate2.prototype.clone = function() {
      return ZonedDate2.fromUTCDate(this._utcDate, this.timezone);
    };
    ZonedDate2.prototype.addDays = function(days) {
      var newDate = new Date(this._utcDate.getTime());
      newDate.setUTCDate(newDate.getUTCDate() + days);
      return ZonedDate2.fromUTCDate(newDate, this.timezone);
    };
    ZonedDate2.prototype.addTime = function(milliseconds) {
      var utcDate = new Date(this._utcDate.getTime());
      var utcMid = shiftZoneMissingHour(utcDate, this.timezone);
      utcMid.setTime(utcMid.getTime() + milliseconds);
      var utcResult = shiftZoneMissingHour(utcMid, this.timezone);
      return ZonedDate2.fromUTCDate(utcResult, this.timezone);
    };
    ZonedDate2.prototype.stripTime = function() {
      var date = this._utcDate;
      var ticks = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
      return ZonedDate2.fromUTCDate(new Date(ticks), this.timezone);
    };
    ZonedDate2.prototype.getTime = function() {
      return this._localDate.getTime();
    };
    ZonedDate2.prototype.getTimezoneOffset = function() {
      return this.timezoneOffset;
    };
    ZonedDate2.prototype.getFullYear = function() {
      return this._utcDate.getUTCFullYear();
    };
    ZonedDate2.prototype.getMonth = function() {
      return this._utcDate.getUTCMonth();
    };
    ZonedDate2.prototype.getDate = function() {
      return this._utcDate.getUTCDate();
    };
    ZonedDate2.prototype.getDay = function() {
      return this._utcDate.getUTCDay();
    };
    ZonedDate2.prototype.getHours = function() {
      return this._utcDate.getUTCHours();
    };
    ZonedDate2.prototype.getMinutes = function() {
      return this._utcDate.getUTCMinutes();
    };
    ZonedDate2.prototype.getSeconds = function() {
      return this._utcDate.getUTCSeconds();
    };
    ZonedDate2.prototype.getMilliseconds = function() {
      return this._utcDate.getUTCMilliseconds();
    };
    ZonedDate2.prototype.getUTCDate = function() {
      return this._localDate.getUTCDate();
    };
    ZonedDate2.prototype.getUTCDay = function() {
      return this._localDate.getUTCDay();
    };
    ZonedDate2.prototype.getUTCFullYear = function() {
      return this._localDate.getUTCFullYear();
    };
    ZonedDate2.prototype.getUTCHours = function() {
      return this._localDate.getUTCHours();
    };
    ZonedDate2.prototype.getUTCMilliseconds = function() {
      return this._localDate.getUTCMilliseconds();
    };
    ZonedDate2.prototype.getUTCMinutes = function() {
      return this._localDate.getUTCMinutes();
    };
    ZonedDate2.prototype.getUTCMonth = function() {
      return this._localDate.getUTCMonth();
    };
    ZonedDate2.prototype.getUTCSeconds = function() {
      return this._localDate.getUTCSeconds();
    };
    ZonedDate2.prototype.setTime = function(time) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMilliseconds = function(ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMilliseconds = function(ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setSeconds = function(sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCSeconds = function(sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMinutes = function(min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMinutes = function(min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setHours = function(hours, min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCHours = function(hours, min, sec, ms) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setDate = function(date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCDate = function(date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setMonth = function(month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCMonth = function(month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setFullYear = function(year, month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.setUTCFullYear = function(year, month, date) {
      throw new Error("Method not implemented.");
    };
    ZonedDate2.prototype.toISOString = function() {
      return this._localDate.toISOString();
    };
    ZonedDate2.prototype.toJSON = function() {
      return this._localDate.toJSON();
    };
    ZonedDate2.prototype.toString = function() {
      var dateString = datePrefix(this._utcDate);
      var timeString = this.toTimeString();
      return dateString + " " + this.getDate() + " " + this.getFullYear() + " " + timeString;
    };
    ZonedDate2.prototype.toDateString = function() {
      return toLocalDate(this._utcDate).toDateString();
    };
    ZonedDate2.prototype.toTimeString = function() {
      var hours = padNumber(this.getHours());
      var minutes = padNumber(this.getMinutes());
      var seconds = padNumber(this.getSeconds());
      var time = hours + ":" + minutes + ":" + seconds;
      var tzOffset = formatOffset(this.timezoneOffset);
      var abbrev = abbrTimezone(this.timezone, this._utcDate);
      if (abbrev) {
        abbrev = " (" + abbrev + ")";
      }
      return time + " " + tzOffset + abbrev;
    };
    ZonedDate2.prototype.toLocaleString = function(locales, options) {
      return this._localDate.toLocaleString(locales, options);
    };
    ZonedDate2.prototype.toLocaleDateString = function(locales, options) {
      return this._localDate.toLocaleDateString(locales, options);
    };
    ZonedDate2.prototype.toLocaleTimeString = function(locales, options) {
      return this._localDate.toLocaleTimeString(locales, options);
    };
    ZonedDate2.prototype.toUTCString = function() {
      return this.toTimezone("Etc/UTC").toString();
    };
    ZonedDate2.prototype[Symbol.toPrimitive] = function(hint) {
      if (hint === "string" || hint === "default") {
        return this.toString();
      }
      return this._localDate.getTime();
    };
    ZonedDate2.prototype.valueOf = function() {
      return this.getTime();
    };
    ZonedDate2.prototype.getVarDate = function() {
      throw new Error("Not implemented.");
    };
    ZonedDate2.prototype.format = function(_3) {
      throw new Error("Not implemented.");
    };
    ZonedDate2.prototype.formatUTC = function(_3) {
      throw new Error("Not implemented.");
    };
    return ZonedDate2;
  }()
);

// node_modules/@progress/kendo-date-math/dist/es/week-in-year.js
var moveDateToWeekStart = function(date, weekStartDay) {
  if (weekStartDay !== Day.Monday) {
    return addDays(prevDayOfWeek(date, weekStartDay), 4);
  }
  return addDays(date, 4 - (date.getDay() || 7));
};
var calcWeekInYear = function(date, weekStartDay) {
  var firstWeekInYear = createDate(date.getFullYear(), 0, 1, -6);
  var newDate = moveDateToWeekStart(date, weekStartDay);
  var diffInMS = newDate.getTime() - firstWeekInYear.getTime();
  var days = Math.floor(diffInMS / MS_PER_DAY);
  return 1 + Math.floor(days / 7);
};
var weekInYear = function(date, weekStartDay) {
  if (weekStartDay === void 0) {
    weekStartDay = Day.Monday;
  }
  date = getDate(date);
  var prevWeekDate = addDays(date, -7);
  var nextWeekDate = addDays(date, 7);
  var weekNumber = calcWeekInYear(date, weekStartDay);
  if (weekNumber === 0) {
    return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
  }
  if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
    return 1;
  }
  return weekNumber;
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/ViewList.mjs
var a11 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/virtualization/Virtualization.mjs
var u = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/virtualization/services/ScrollerService.mjs
var a6 = (e13) => Math.max(e13, 0);
var f = class {
  constructor(t10) {
    this.offset = t10;
  }
};
var d2 = class {
  constructor(t10) {
    this.skip = t10;
  }
};
var w = class {
  constructor(t10, s8) {
    this.onScrollAction = t10, this.onPageAction = s8, this.direction = "vertical", this.firstLoaded = 0, this.lastLoaded = 0, this.lastScrollTop = 0, this.take = 0, this.total = 0, this.rowHeightService = null, this.bottomOffset = 0, this.topOffset = 0;
  }
  create(t10, s8, h3, l11, i11 = 0, n19 = 0, r14 = "vertical") {
    this.rowHeightService = t10, this.firstLoaded = s8, this.lastLoaded = s8 + h3, this.take = h3, this.total = l11, this.lastScrollTop = 0, this.topOffset = i11, this.bottomOffset = n19, this.direction = r14;
    const o17 = this.rowsForHeight(i11), c7 = a6(s8 - o17);
    this.onScrollAction(new f(this.rowOffset(c7))), this.onPageAction(new d2(c7));
  }
  onScroll({ scrollLeft: t10, scrollTop: s8, offsetHeight: h3, offsetWidth: l11 }) {
    const i11 = this.direction === "vertical" ? s8 : t10, n19 = this.direction === "vertical" ? h3 : l11;
    if (this.lastScrollTop === i11 || !this.rowHeightService)
      return;
    const r14 = this.lastScrollTop >= i11;
    this.lastScrollTop = i11;
    const o17 = this.rowHeightService.index(a6(i11 - this.topOffset)), c7 = this.rowHeightService.index(a6(i11 + n19 - this.bottomOffset));
    if (!r14 && c7 >= this.lastLoaded && this.lastLoaded < this.total && (this.firstLoaded = o17, this.onScrollAction(new f(this.rowOffset(o17))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new d2(this.firstLoaded))), r14 && o17 <= this.firstLoaded) {
      const S10 = Math.floor(this.take * 0.3);
      this.firstLoaded = a6(o17 - S10), this.onScrollAction(new f(this.rowOffset(this.firstLoaded))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new d2(this.firstLoaded));
    }
  }
  rowOffset(t10) {
    return this.rowHeightService ? this.rowHeightService.offset(t10) + this.topOffset : 0;
  }
  rowsForHeight(t10) {
    return this.rowHeightService ? Math.ceil(t10 / this.rowHeightService.height(0)) : 0;
  }
};

// node_modules/@progress/kendo-react-dateinputs/virtualization/Virtualization.mjs
var T2 = (s8, i11, t10) => Math.min(Math.abs(i11 - s8), t10);
var A2 = 17;
var C = 10;
var x2 = {
  1: (s8) => (i11) => i11 + s8,
  0: (s8) => (i11) => i11 - s8
};
var I3 = {
  1: (s8) => (i11) => Math.min(i11, s8),
  0: (s8) => (i11) => Math.max(i11, s8)
};
var M2 = {
  1: (s8) => (i11) => i11 < s8,
  0: (s8) => (i11) => i11 > s8
};
var a7 = class a8 extends u.Component {
  constructor(i11) {
    super(i11), this.rowHeightService = null, this.scrollContainer = null, this.lastDirection = null, this.lastTotal = 0, this.lastTake = 0, this.animationInProgress = false, this.restrictScroll = false, this.scrollTo = (t10) => {
      const e13 = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
      if (!this.scrollContainer)
        return;
      const r14 = this.scrollContainer[e13];
      this.restrictScroll && e13 === "scrollTop" && (!Number.isInteger(r14) || !Number.isInteger(t10)) && Math.abs(r14 - t10) < C || (this.scrollContainer[e13] = t10);
    }, this.scrollToIndex = (t10) => {
      this.animationInProgress = false, this.rowHeightService && this.scrollTo(this.rowHeightService.offset(t10));
    }, this.animateToIndex = (t10) => {
      if (!this.rowHeightService || !window)
        return;
      window.cancelAnimationFrame(this.cancelAnimation);
      const e13 = this.rowHeightService.offset(t10), r14 = this.getContainerScrollDirection(e13), { start: n19, end: l11 } = this.scrollRange(e13, r14);
      if (n19 === l11)
        return;
      const f9 = this.scrollStep(n19, l11), c7 = x2[r14](f9), h3 = I3[r14](l11), d11 = M2[r14](c7(l11)), m7 = (g9) => {
        this.animationInProgress = true;
        const S10 = c7(g9);
        this.scrollTo(h3(S10)), d11(S10) ? this.cancelAnimation = window.requestAnimationFrame(() => {
          m7(S10);
        }) : this.animationInProgress = false;
      };
      this.cancelAnimation = window.requestAnimationFrame(() => {
        m7(n19);
      });
    }, this.scrollToBottom = () => {
      this.rowHeightService && this.scrollTo(this.rowHeightService.totalHeight() + this.props.bottomOffset);
    }, this.scrollStep = (t10, e13) => {
      const r14 = this.props.scrollDuration || a8.defaultProps.scrollDuration;
      return Math.abs(e13 - t10) / (r14 / A2);
    }, this.scrollRange = (t10, e13) => {
      const r14 = this.containerScrollPosition;
      if (parseInt(`${t10}`, 10) === parseInt(`${r14}`, 10))
        return { start: t10, end: t10 };
      const n19 = this.containerMaxScroll(), l11 = e13 === 0 ? 1 : -1, f9 = T2(r14, t10, this.props.maxScrollDifference || 0), c7 = Math.min(t10, n19);
      return { start: Math.min(Math.max(c7 + l11 * f9, 0), n19), end: c7 };
    }, this.containerMaxScroll = () => this.containerScrollSize - this.containerOffsetSize, this.getContainerScrollDirection = (t10) => t10 < this.containerScrollPosition ? 0 : 1, this.initServices = (t10 = this.props) => {
      const e13 = this.direction === "vertical" ? t10.itemHeight : t10.itemWidth;
      e13 !== void 0 && (this.rowHeightService = new g(t10.total, e13, 0), this.scrollerService.create(
        this.rowHeightService,
        t10.skip,
        t10.take,
        t10.total,
        t10.topOffset,
        this.scrollOffsetSize,
        this.direction
      ));
    }, this.getContainerProperty = (t10) => this.scrollContainer ? this.scrollContainer[t10] : 0, this.handleScroll = (t10) => {
      if (!this.scrollContainer || !this.rowHeightService)
        return;
      const e13 = t10.target;
      this.scrollerService.onScroll({
        scrollLeft: e13.scrollLeft,
        scrollTop: e13.scrollTop,
        offsetHeight: e13.offsetHeight,
        offsetWidth: e13.offsetWidth
      });
      const r14 = this.rowHeightService.index(this.containerScrollPosition - this.props.topOffset), { onScrollAction: n19 } = this.props, l11 = {
        index: r14,
        target: e13,
        scrollAction: this.scrollAction,
        pageAction: this.pageAction,
        animationInProgress: this.animationInProgress
      };
      this.props.onScroll && this.props.onScroll.call(void 0, t10), n19 && n19.call(void 0, l11), this.scrollAction = void 0, this.pageAction = void 0;
    }, this.handleScrollAction = (t10) => {
      this.scrollAction = t10;
    }, this.handlePageAction = (t10) => {
      this.pageAction = t10;
    }, this.scrollerService = new w(this.handleScrollAction, this.handlePageAction), this.restrictScroll = Number.parseFloat(u.version) > 17;
  }
  get element() {
    return this.scrollContainer;
  }
  get containerOffsetSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
  }
  get containerScrollSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
  }
  get containerScrollPosition() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
  }
  get direction() {
    return this.props.direction !== void 0 ? this.props.direction : a8.defaultProps.direction;
  }
  get scrollOffsetSize() {
    return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : a8.defaultProps.scrollOffsetSize;
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(i11) {
    return this.rowHeightService ? this.rowHeightService.index(i11) : 0;
  }
  itemOffset(i11) {
    return this.rowHeightService ? this.rowHeightService.offset(i11) : 0;
  }
  isIndexVisible(i11) {
    if (!this.rowHeightService)
      return false;
    const t10 = this.containerScrollPosition, e13 = t10 + this.containerOffsetSize, r14 = this.rowHeightService.offset(i11), n19 = r14 + this.rowHeightService.height(i11);
    return r14 >= t10 && n19 <= e13;
  }
  isListScrolled(i11) {
    return this.rowHeightService ? this.containerScrollPosition !== this.rowHeightService.offset(i11) : false;
  }
  componentDidMount() {
    const { onMount: i11 } = this.props;
    i11 && i11.call(void 0, this);
  }
  render() {
    const { total: i11, take: t10, bottomOffset: e13, className: r14, tabIndex: n19, role: l11, children: f9, unstyled: c7 } = this.props, h3 = c7 && c7.uCalendar;
    (this.lastTotal !== i11 || this.lastDirection !== this.direction || this.lastTake !== t10) && (this.initServices(), this.lastTotal = i11, this.lastDirection = this.direction, this.lastTake = t10);
    const d11 = `${(this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + e13}`, m7 = this.direction === "vertical" ? { height: `${d11}px` } : { width: `${d11}px` }, g9 = n2(
      j.scrollableSelector({
        c: h3
      }),
      j.scrollable({
        c: h3,
        horizontal: this.direction === "horizontal"
      }),
      r14
    ), S10 = n2(
      j.scrollablePlaceholder({
        c: h3,
        horizontal: this.direction === "horizontal"
      })
    );
    return u.createElement(
      "div",
      {
        ref: (H5) => {
          this.scrollContainer = H5;
        },
        onScroll: this.handleScroll,
        className: g9,
        tabIndex: n19,
        role: l11
      },
      f9,
      u.createElement("div", { style: m7, className: S10 })
    );
  }
};
a7.propTypes = {
  bottomOffset: import_prop_types.default.number.isRequired,
  className: import_prop_types.default.string,
  direction: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  forceScroll: import_prop_types.default.bool,
  itemHeight: import_prop_types.default.number,
  itemWidth: import_prop_types.default.number,
  maxScrollDifference: import_prop_types.default.number,
  onScroll: import_prop_types.default.func,
  onScrollAction: import_prop_types.default.func,
  scrollDuration: import_prop_types.default.number,
  scrollOffsetSize: import_prop_types.default.number,
  skip: import_prop_types.default.number.isRequired,
  tabIndex: import_prop_types.default.number,
  take: import_prop_types.default.number.isRequired,
  topOffset: import_prop_types.default.number.isRequired,
  total: import_prop_types.default.number.isRequired,
  role: import_prop_types.default.string
}, a7.defaultProps = {
  direction: "vertical",
  forceScroll: false,
  scrollOffsetSize: 0,
  maxScrollDifference: 100,
  scrollDuration: 100
};
var w2 = a7;

// node_modules/@progress/kendo-react-dateinputs/calendar/components/View.mjs
var i4 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarCell.mjs
var r = __toESM(require_react(), 1);
var y = (l11, e13) => {
  const t10 = Object.getOwnPropertyNames(l11), n19 = Object.getOwnPropertyNames(e13);
  if (t10.length !== n19.length)
    return false;
  for (let a23 = 0; a23 < t10.length; a23++) {
    const o17 = t10[a23];
    if (l11[o17] !== e13[o17])
      return false;
  }
  return true;
};
var L = class extends r.Component {
  constructor() {
    super(...arguments), this.handleClick = (e13) => {
      const { onClick: t10, value: n19 } = this.props;
      t10 && t10.call(void 0, n19, e13);
    }, this.handleMouseEnter = () => {
      const { onMouseEnter: e13, value: t10 } = this.props;
      e13 && e13.call(void 0, t10);
    }, this.handleMouseLeave = () => {
      const { onMouseLeave: e13, value: t10 } = this.props;
      e13 && e13.call(void 0, t10);
    };
  }
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the React.PureComponent.
  /**
   * @hidden
   */
  shouldComponentUpdate(e13) {
    const { value: t10, ...n19 } = this.props, { value: a23, ...o17 } = e13;
    return !((!(t10 && a23) || t10.getTime() === a23.getTime()) && y(n19, o17));
  }
  /* eslint-disable max-len */
  render() {
    const {
      className: e13,
      formattedValue: t10,
      isWeekend: n19,
      isFocused: a23,
      isInRange: o17,
      isSelected: d11,
      isRangeStart: i11,
      isRangeMid: f9,
      isRangeEnd: c7,
      isRangeSplitStart: C6,
      isRangeSplitEnd: M6,
      isToday: R4,
      isDisabled: S10,
      view: O3,
      value: P6,
      isOtherMonth: s8,
      showOtherMonthDays: p11,
      allowReverse: u11,
      unstyled: h3,
      ...N4
    } = this.props, w7 = this.props.activeRangeEnd === "end" && c7, k5 = this.props.activeRangeEnd === "start" && i11, m7 = h3 && h3.uCalendar, g9 = n2(
      j.td({
        c: m7,
        rangeStart: !s8 && !u11 && i11,
        rangeEnd: !s8 && !u11 && c7,
        rangeMid: !s8 && f9,
        rangeSplitEnd: !s8 && M6,
        rangeSplitStart: !s8 && C6,
        active: k5 || w7,
        focused: a23,
        selected: !s8 && (d11 || i11 || c7),
        today: !s8 && R4,
        weekend: n19,
        disabled: S10,
        isOtherMonth: s8,
        isEmpty: !p11 && s8
      }),
      e13
    );
    return !p11 && s8 ? r.createElement("td", { role: "gridcell", className: g9 }) : r.createElement(
      "td",
      {
        ...N4,
        className: g9,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      r.createElement("span", { className: n2(j.link({ c: m7 })) }, this.props.children)
    );
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarWeekCell.mjs
var i3 = __toESM(require_react(), 1);
var f2 = (e13) => {
  const { className: l11, firstDate: c7, weekDays: n19, ...o17 } = e13, r14 = (a23) => {
    const { onClick: t10 } = e13;
    t10 && a23 && t10.call(void 0, c7, n19 || [], a23);
  }, s8 = n4(), d11 = s8 && s8.uCalendar;
  return i3.createElement(
    "td",
    {
      className: n2(j.td({ c: d11, isWeek: true }), l11),
      ...o17,
      onClick: r14
    },
    e13.children
  );
};

// node_modules/@progress/kendo-react-dateinputs/calendar/models/CalendarViewEnum.mjs
var c = ((t10) => (t10[t10.month = 0] = "month", t10[t10.year = 1] = "year", t10[t10.decade = 2] = "decade", t10[t10.century = 3] = "century", t10))(c || {});

// node_modules/@progress/kendo-react-dateinputs/calendar/models/SelectionRange.mjs
var l3 = { start: null, end: null };

// node_modules/@progress/kendo-react-dateinputs/utils.mjs
function W(t10) {
  const n19 = (r14, o17, s8, ...u11) => o17[s8] === null ? null : (r14 ? t10.isRequired : t10)(o17, s8, ...u11), e13 = n19.bind(null, false);
  return e13.isRequired = n19.bind(null, true), e13;
}
var d3 = (t10, n19, e13) => n19 === void 0 || e13 === void 0 || n19 <= t10 && t10 <= e13 ? t10 : t10 < n19 ? n19 : e13;
var k = new Date(1980, 0, 1);
var H = new Date(1900, 0, 1);
var L2 = new Date(2099, 11, 31);
var q = new Date(1980, 0, 1);
var G2 = new Date(1980, 0, 1, 23, 59, 59);
var O = (t10, n19) => {
  const e13 = cloneDate(t10);
  return e13.setHours(n19.getHours(), n19.getMinutes(), n19.getSeconds(), n19.getMilliseconds()), e13;
};
var X = () => getDate(/* @__PURE__ */ new Date());
var j2 = (t10, n19, e13) => !t10 || !(n19 && n19 > t10 || e13 && e13 < t10);
var P = (t10, n19, e13) => t10 === null || !(n19 && getDate(n19) > getDate(t10) || e13 && getDate(e13) < getDate(t10));
var Y = (t10, n19) => {
  const { start: e13, end: r14 } = n19 || l3;
  return !e13 || !r14 ? false : e13 < t10 && t10 < r14;
};
var z = (t10, n19, e13 = 1) => {
  const r14 = [];
  for (let o17 = t10; o17 < n19; o17 = o17 + e13)
    r14.push(o17);
  return r14;
};
var B = (t10, n19, e13) => n19.getTime() <= t10.getTime() && t10.getTime() <= e13.getTime();
var J2 = (t10, n19) => t10.slice(n19).concat(t10.slice(0, n19));
var K2 = (t10, n19, e13) => t10 && (n19 && t10 < n19 ? cloneDate(n19) : e13 && t10 > e13 ? cloneDate(e13) : t10);
var Q = (t10) => (n19, e13 = "", r14 = {}) => {
  const o17 = document.createElement(t10);
  return o17.className = e13, Object.keys(r14).map((s8) => o17.style[s8] = r14[s8]), typeof n19 == "string" ? o17.innerHTML = n19 || "" : (n19 || []).forEach((s8) => s8 && o17.appendChild(s8)), o17;
};
function U2(t10, n19, e13 = {}) {
  let r14, o17;
  e13.maxWait;
  let s8, u11, l11;
  const g9 = window, M6 = false, h3 = false, D2 = !n19 && n19 !== 0 && typeof g9.requestAnimationFrame == "function";
  if (typeof t10 != "function")
    throw new TypeError("Expected a function");
  n19 = +n19 || 0;
  function I8(i11) {
    const c7 = r14, m7 = o17;
    return r14 = o17 = void 0, s8 = t10.apply(m7, c7), s8;
  }
  function T7(i11, c7) {
    return D2 ? (g9.cancelAnimationFrame(u11), g9.requestAnimationFrame(i11)) : setTimeout(i11, c7);
  }
  function R4(i11) {
    if (D2)
      return g9.cancelAnimationFrame(i11);
    clearTimeout(i11);
  }
  function b4(i11) {
    return u11 = T7(E4, n19), M6 ? I8() : s8;
  }
  function N4(i11) {
    const c7 = i11 - l11;
    return n19 - c7;
  }
  function p11(i11) {
    const c7 = i11 - l11;
    return l11 === void 0 || c7 >= n19 || c7 < 0 || h3;
  }
  function E4() {
    const i11 = Date.now();
    if (p11(i11))
      return A4();
    u11 = T7(E4, N4(i11));
  }
  function A4(i11) {
    return u11 = void 0, r14 ? I8() : (r14 = o17 = void 0, s8);
  }
  function w7() {
    u11 !== void 0 && R4(u11), r14 = l11 = o17 = u11 = void 0;
  }
  function y8() {
    return u11 === void 0 ? s8 : A4();
  }
  function C6() {
    return u11 !== void 0;
  }
  function a23(...i11) {
    const c7 = Date.now(), m7 = p11(c7);
    return r14 = i11, o17 = this, l11 = c7, m7 && u11 === void 0 ? b4() : (u11 === void 0 && (u11 = T7(E4, n19)), s8);
  }
  return a23.cancel = w7, a23.flush = y8, a23.pending = C6, a23;
}

// node_modules/@progress/kendo-react-dateinputs/calendar/services/WeekNamesService.mjs
var r2 = class {
  constructor(t10) {
    this.intl = t10;
  }
  getWeekNames(t10 = false, e13) {
    const s8 = J2(
      this.intl.dateFormatNames({ nameType: e13 != null ? e13 : "short", type: "days" }),
      this.intl.firstDay()
    );
    return t10 ? [""].concat(s8) : s8;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/View.mjs
var y2 = (g9, t10) => {
  const e13 = t10;
  return i4.createElement("td", { key: g9, role: "gridcell", className: n2(j.td({ c: e13, isEmpty: true })) }, " ");
};
var u2 = class u3 extends i4.Component {
  constructor() {
    super(...arguments), this.intl = null, this.weekService = null, this.buildWeekNumber = (t10, e13) => {
      if (!this.firstDate(t10))
        return y2(`week-cell-${e13}`);
      const a23 = this.firstDate(t10), n19 = this.getWeekNumber(a23), o17 = `kendo-react-calendar-week-cell-${n19}`, m7 = {
        value: n19,
        firstDate: a23,
        weekDays: t10,
        unstyled: this.props.unstyled,
        onClick: this.handleWeekCellClick
      };
      return this.props.weekCell ? i4.createElement(this.props.weekCell, { ...m7, key: o17 }, n19) : i4.createElement(f2, { ...m7, key: o17 }, n19);
    }, this.buildRow = (t10) => t10.map((e13, r14) => {
      if (!e13)
        return y2(r14);
      const a23 = { "aria-selected": e13.isSelected }, n19 = `kendo-react-calendar-cell-${e13.value.getTime()}`, o17 = {
        ...a23,
        ...e13,
        isDisabled: !e13.isInRange,
        view: this.props.activeView,
        showOtherMonthDays: this.props.showOtherMonthDays,
        allowReverse: this.props.allowReverse,
        unstyled: this.props.unstyled,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      return this.props.cell ? i4.createElement(this.props.cell, { ...o17, key: n19 }, e13.formattedValue) : i4.createElement(L, { ...o17, key: n19 }, e13.formattedValue);
    }), this.firstDate = (t10) => {
      const e13 = this.firstWeekDateContext(t10);
      return e13 ? e13.value : null;
    }, this.firstWeekDateContext = (t10) => {
      if (!this.weekNumber)
        return null;
      let e13 = 0, r14 = t10[e13];
      for (; !r14 && e13 < t10.length; )
        r14 = t10[++e13];
      return r14;
    }, this.handleClick = (t10, e13) => {
      const { onChange: r14 } = this.props;
      if (r14 && e13) {
        const a23 = {
          value: cloneDate(t10),
          target: this,
          nativeEvent: e13 && e13.nativeEvent,
          syntheticEvent: e13
        };
        r14.call(void 0, a23);
      }
    }, this.handleWeekCellClick = (t10, e13, r14) => {
      const { onWeekSelect: a23 } = this.props, n19 = e13.findIndex((o17) => o17 && o17.value === t10);
      a23 && r14 && a23.call(void 0, t10, n19, r14);
    }, this.handleMouseEnter = (t10) => {
      const { onCellEnter: e13 } = this.props;
      e13 && e13.call(void 0, cloneDate(t10));
    }, this.handleMouseLeave = (t10) => {
      const { onCellLeave: e13 } = this.props;
      e13 && e13.call(void 0, cloneDate(t10));
    };
  }
  get min() {
    return this.props.min;
  }
  get max() {
    return this.props.max;
  }
  get isHorizontal() {
    return this.props.direction === "horizontal";
  }
  get isMonthView() {
    return this.props.activeView === c.month;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === c.month);
  }
  get selectedDate() {
    return this.props.selectedDate !== void 0 ? this.props.selectedDate : u3.defaultProps.selectedDate;
  }
  render() {
    const { service: t10, weekDaysFormat: e13, cellUID: r14, focusedDate: a23, bus: n19, activeView: o17, selectionRange: m7, unstyled: w7 } = this.props, h3 = w7 && w7.uCalendar;
    this.intl = l(this), this.weekService = new r2(this.intl);
    const C6 = this.weekService.getWeekNames(this.weekNumber, e13), N4 = t10.rowLength(this.weekNumber), b4 = t10.title(this.props.viewDate), E4 = X(), W3 = O(this.props.viewDate, E4), O3 = t10.data({
      cellUID: r14,
      min: this.min,
      max: this.max,
      focusedDate: a23,
      isActiveView: !n19.canMoveDown(o17),
      selectedDate: this.selectedDate,
      selectionRange: m7,
      viewDate: W3
    });
    return i4.createElement(i4.Fragment, null, this.isMonthView && this.isHorizontal && i4.createElement("thead", { role: "rowgroup", className: n2(j.thead({ c: h3 })) }, i4.createElement("tr", { role: "row", className: n2(j.tr({ c: h3 })) }, C6.map((p11, d11) => i4.createElement("th", { key: d11, className: n2(j.th({ c: h3 })) }, p11)))), i4.createElement("tbody", { role: "rowgroup", className: n2(j.tbody({ c: h3 })) }, !this.isHorizontal && i4.createElement("tr", { role: "presentation", className: n2(j.tr({ c: h3 })) }, i4.createElement(
      "th",
      {
        scope: "col",
        colSpan: N4,
        className: n2(j.caption({ c: h3 }))
      },
      b4
    )), O3.map((p11, d11) => i4.createElement("tr", { role: "row", className: n2(j.tr({ c: h3 })), key: d11 }, this.weekNumber && this.buildWeekNumber(p11, d11), this.buildRow(p11)))));
  }
  getWeekNumber(t10) {
    return !this.weekNumber || !this.intl ? null : weekInYear(t10, this.intl.firstDay());
  }
};
u2.propTypes = {
  activeRangeEnd: import_prop_types2.default.oneOf(["start", "end", null]),
  activeView: import_prop_types2.default.number.isRequired,
  cellUID: import_prop_types2.default.string.isRequired,
  direction: import_prop_types2.default.oneOf(["horizontal", "vertical"]),
  focusedDate: import_prop_types2.default.instanceOf(Date).isRequired,
  max: import_prop_types2.default.instanceOf(Date).isRequired,
  min: import_prop_types2.default.instanceOf(Date).isRequired,
  onChange: import_prop_types2.default.func,
  selectedDate: import_prop_types2.default.oneOfType([import_prop_types2.default.instanceOf(Date), import_prop_types2.default.arrayOf(import_prop_types2.default.instanceOf(Date))]),
  showWeekNumbers: import_prop_types2.default.bool,
  showOtherMonthDays: import_prop_types2.default.bool,
  viewDate: import_prop_types2.default.instanceOf(Date).isRequired
}, u2.defaultProps = {
  direction: "vertical",
  selectedDate: X(),
  showWeekNumbers: false
};
var f3 = u2;
p(f3);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Header.mjs
var e4 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarHeaderTitle.mjs
var o5 = __toESM(require_react(), 1);
var n5 = (e13) => {
  const { view: a23, ...t10 } = e13;
  return o5.createElement(M, { type: "button", fillMode: "flat", themeColor: "primary", ...t10 }, e13.children);
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Header.mjs
var t2 = class t3 extends e4.Component {
  constructor() {
    super(...arguments), this.getTitle = () => {
      if (!this.props.currentDate)
        return "";
      const s8 = this.rangeLength - 1, a23 = this.props.service.title(this.props.currentDate), r14 = this.props.service.addToDate(this.props.currentDate, s8);
      return s8 < 1 || !this.props.service.isInRange(r14, this.min, this.max) ? a23 : `${a23} - ${this.props.service.title(r14)}`;
    }, this.handleTitleClick = (s8) => {
      this.canMoveUp && this.props.bus.moveUp(this.props.activeView, s8);
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : t3.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : t3.defaultProps.max;
  }
  get rangeLength() {
    return this.props.rangeLength !== void 0 ? this.props.rangeLength : t3.defaultProps.rangeLength;
  }
  get canMoveUp() {
    return this.props.bus.canMoveUp(this.props.activeView);
  }
  render() {
    const { activeView: s8, commands: a23, unstyled: r14 } = this.props, n19 = r14 && r14.uCalendar, p11 = this.getTitle(), m7 = n2(j.title({ c: n19 })), h3 = {
      children: p11,
      value: p11,
      view: s8,
      className: m7,
      onClick: this.handleTitleClick,
      disabled: !this.canMoveUp
    }, d11 = {
      headerTitleProps: h3,
      commands: a23
    }, u11 = this.props.headerTitle ? e4.createElement(this.props.headerTitle, { ...h3 }, p11) : e4.createElement(n5, { ...h3 }, p11), g9 = this.props.header ? e4.createElement(this.props.header, { ...d11 }) : e4.createElement(e4.Fragment, null, u11, e4.createElement("span", { className: n2(j.spacer({ c: n19 })) }), e4.createElement("span", { className: n2(j.nav({ c: n19 })) }, this.props.commands));
    return e4.createElement("div", { className: n2(j.header({ c: n19, vertical: this.props.verticalView })) }, g9);
  }
};
t2.propTypes = {
  activeView: import_prop_types3.default.number.isRequired,
  currentDate: import_prop_types3.default.instanceOf(Date).isRequired,
  max: import_prop_types3.default.instanceOf(Date).isRequired,
  min: import_prop_types3.default.instanceOf(Date).isRequired,
  rangeLength: import_prop_types3.default.number
}, t2.defaultProps = {
  rangeLength: 1,
  min: H,
  max: L2
};
var l4 = t2;
v(l4);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/TodayCommand.mjs
var r4 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/messages/index.mjs
var e5 = "multiviewcalendar.prevView";
var t4 = "multiviewcalendar.nextView";
var a9 = "dateinput.increment";
var c2 = "dateinput.decrement";
var n6 = "dateinput.clear";
var i6 = "calendar.today";
var r3 = "datepicker.toggleCalendar";
var o6 = "daterangepicker.swapStartEnd";
var l5 = "daterangepicker.start";
var s3 = "daterangepicker.end";
var d4 = "daterangepicker.separator";
var g2 = "datetimepicker.toggleDateTimeSelector";
var p3 = "timepicker.now";
var m = "timepicker.selectNow";
var k2 = "timepicker.cancel";
var w3 = "timepicker.set";
var S = "timepicker.toggleTimeSelector";
var T3 = "timepicker.toggleClock";
var v3 = "datetimepicker.date";
var u4 = "datetimepicker.time";
var C2 = "datetimepicker.cancel";
var N = "datetimepicker.set";
var P2 = "daterangepicker.cancel";
var V = "daterangepicker.set";
var x3 = {
  [i6]: "Today",
  [p3]: "NOW",
  [w3]: "Set",
  [k2]: "Cancel",
  [v3]: "Date",
  [u4]: "Time",
  [C2]: "Cancel",
  [N]: "Set",
  [P2]: "Cancel",
  [V]: "Set",
  [l5]: "Start",
  [s3]: "End",
  [d4]: " ",
  [m]: "Select Now",
  [S]: "Toggle TimeSelector",
  [T3]: "Toggle Clock",
  [a9]: "Increase value",
  [c2]: "Decrease value",
  [n6]: "clear",
  [r3]: "Toggle calendar",
  [e5]: "Navigate to previous view",
  [t4]: "Navigate to next view",
  [o6]: "Swap start and end values",
  [g2]: "Toggle date-time selector"
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/TodayCommand.mjs
var t5 = class t6 extends r4.Component {
  constructor() {
    super(...arguments), this.localization = null, this.handleClick = (i11) => {
      if (this.todayIsInRange && this.props.onClick) {
        const s8 = {
          syntheticEvent: i11,
          nativeEvent: i11.nativeEvent,
          value: K2(X(), this.min, this.max),
          target: this,
          isTodayClick: true
        };
        this.props.onClick.call(void 0, s8);
      }
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : t6.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : t6.defaultProps.max;
  }
  get todayIsInRange() {
    return j2(X(), getDate(this.min), getDate(this.max));
  }
  render() {
    const { disabled: i11, tabIndex: s8, unstyled: o17 } = this.props, p11 = o17 && o17.uCalendar;
    this.localization = s(this);
    const c7 = this.localization.toLanguageString(i6, x3[i6]), d11 = n2(j.today({ c: p11, disabled: i11 }));
    return r4.createElement(
      M,
      {
        className: d11,
        onClick: this.handleClick,
        tabIndex: s8,
        fillMode: "flat",
        themeColor: "base",
        role: "link"
      },
      c7
    );
  }
};
t5.propTypes = {
  max: import_prop_types4.default.instanceOf(Date).isRequired,
  min: import_prop_types4.default.instanceOf(Date).isRequired,
  onClick: import_prop_types4.default.func,
  disabled: import_prop_types4.default.bool
}, t5.defaultProps = {
  min: H,
  max: L2
};
var a10 = t5;
v(a10);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/ViewList.mjs
var M3 = 5;
var d5 = class d6 extends a11.Component {
  constructor(n19) {
    super(n19), this.virtualization = null, this.calendarView = null, this.table = null, this.intl = null, this.bottomOffset = 0, this.viewOffset = 0, this.viewHeight = 0, this._element = null, this.isActive = false, this.animateToIndex = true, this.shouldScroll = false, this.weekService = null, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const e13 = this._element.querySelector("td.k-focus"), i11 = this._element.querySelector(".k-state-pending-focus");
      e13 && e13[0] && e13[0].classList.remove("k-focus"), i11 && i11.classList.add("k-focus"), this.isActive = true;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const e13 = this._element.querySelector("td.k-focus");
      e13 && e13.classList.remove("k-focus"), this.isActive = false;
    }, this.handleVirtualizationMount = (e13) => {
      if (this.virtualization = e13, this.virtualization && this.table) {
        this.table.style.transform = `translateY(${this.viewOffset}px)`;
        const i11 = K2(this.props.focusedDate, this.props.min, this.props.max), t10 = this.props.service.skip(i11, this.props.min);
        this.virtualization.scrollToIndex(t10);
      }
    }, this.buildMonthView = (e13, i11) => {
      const { unstyled: t10 } = this.props, s8 = t10 && t10.uCalendar;
      return a11.createElement(
        "table",
        {
          key: "calendar-view-list-weekdays",
          className: n2(j.table({ c: s8, weekdays: true })),
          role: "grid",
          tabIndex: this.props.tabIndex
        },
        a11.createElement("colgroup", null, e13.map((l11, r14) => a11.createElement("col", { key: r14 }))),
        a11.createElement("thead", { className: n2(j.thead({ c: s8 })) }, a11.createElement("tr", { className: n2(j.tr({ c: s8 })) }, i11.map((l11, r14) => a11.createElement("th", { key: r14, className: n2(j.th({ c: s8 })) }, l11))))
      );
    }, this.buildDates = (e13, i11) => {
      const t10 = this.props.cellUID, { unstyled: s8 } = this.props, l11 = s8 && s8.uCalendar;
      return a11.createElement(
        "table",
        {
          className: n2(j.table({ c: l11 })),
          ref: (r14) => this.table = r14,
          role: "grid",
          tabIndex: this.props.tabIndex,
          "aria-activedescendant": t10 + this.props.focusedDate.getTime()
        },
        a11.createElement("colgroup", null, e13.map((r14, h3) => a11.createElement("col", { key: h3 }))),
        i11.map((r14) => a11.createElement(
          f3,
          {
            ref: (h3) => {
              this.calendarView || (this.calendarView = h3);
            },
            key: r14.getTime(),
            activeView: this.props.activeView,
            viewDate: r14,
            min: this.props.min,
            max: this.props.max,
            cellUID: t10,
            focusedDate: this.props.focusedDate,
            cell: this.props.cell,
            selectedDate: this.props.value,
            showWeekNumbers: this.weekNumber,
            onChange: this.handleDateChange,
            bus: this.props.bus,
            service: this.props.service,
            weekCell: this.props.weekCell,
            showOtherMonthDays: this.props.showOtherMonthDays,
            unstyled: s8
          }
        ))
      );
    }, this.calculateHeights = () => {
      if (!this.props.dom)
        return;
      const e13 = this.props.activeView === c.month ? this.props.dom.scrollableContentHeight : this.props.dom.scrollableYearContentHeight;
      this.bottomOffset = e13 - this.props.dom.viewHeight(this.props.activeView), this.viewOffset = -1 * this.props.dom.headerHeight, this.viewHeight = this.props.dom.viewHeight(this.props.activeView) || 1;
    }, this.getTake = (e13, i11) => Math.min(i11 - e13, this.take), this.handleScrollAction = ({ index: e13, scrollAction: i11, pageAction: t10 }) => {
      const s8 = t10 ? t10.skip : this.state.skip;
      if ((this.state.index !== e13 || this.state.skip !== s8) && this.setState({ index: e13, skip: s8 }), this.table && i11) {
        const l11 = `translateY(${i11.offset}px)`;
        this.table.style.transform = l11;
      }
    }, this.handleTodayClick = (e13) => {
      this.shouldScroll = true, this.handleDateChange.call(void 0, e13, true);
    }, this.handleDateChange = (e13, i11 = false) => {
      const { onChange: t10 } = this.props;
      if (t10) {
        const s8 = {
          syntheticEvent: e13.syntheticEvent,
          nativeEvent: e13.nativeEvent,
          value: cloneDate(e13.value),
          target: this,
          isTodayClick: i11
        };
        t10.call(void 0, s8);
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.state = {
      skip: this.props.service.skip(this.props.focusedDate, this.props.min),
      index: this.props.service.skip(this.props.focusedDate, this.props.min)
    };
  }
  get element() {
    return this._element;
  }
  get weekNames() {
    return this.intl = l(this), this.weekService = new r2(this.intl), this.weekService.getWeekNames(this.weekNumber, this.props.weekDaysFormat);
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === c.month);
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : d6.defaultProps.take;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get todayIsInRange() {
    return j2(X(), getDate(this.props.min), getDate(this.props.max));
  }
  componentDidUpdate(n19, e13) {
    this.shouldScroll = false, this.indexToScroll !== void 0 && this.virtualization && this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll), this.isActive && this.focusActiveDate(), this.lastView = this.props.activeView, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: n19, min: e13, max: i11, service: t10, unstyled: s8 } = this.props, l11 = s8 && s8.uCalendar;
    this.calculateHeights();
    const r14 = this.lastView !== n19, h3 = K2(this.props.focusedDate, e13, i11), u11 = r14 ? t10.skip(h3, e13) : this.state.skip, w7 = t10.total(e13, i11), x6 = this.getTake(u11, w7), y8 = t10.addToDate(e13, u11), S10 = t10.addToDate(e13, this.state.index), k5 = new Array(t10.rowLength(this.weekNumber)).fill(""), b4 = n19 !== this.lastView;
    this.animateToIndex = !b4, (b4 || !isEqualDate(this.lastFocus, h3) || this.shouldScroll || !this.props.shouldScroll || this.props.shouldScroll()) && (this.indexToScroll = this.props.service.skip(h3, this.props.min)), this.lastFocus = h3;
    const C6 = n2(
      j.view({
        c: l11,
        month: n19 === c.month,
        year: n19 === c.year,
        decade: n19 === c.decade,
        century: n19 === c.century
      })
    ), I8 = this.buildDates(k5, t10.datesList(y8, x6)), V4 = a11.createElement(a11.Fragment, null, a11.createElement(
      l4,
      {
        key: "calendar-view-list-header",
        currentDate: S10,
        min: this.props.min,
        max: this.props.max,
        activeView: this.props.activeView,
        bus: this.props.bus,
        service: this.props.service,
        headerTitle: this.props.headerTitle,
        header: this.props.header,
        unstyled: s8,
        commands: a11.createElement(
          a10,
          {
            min: this.props.min,
            max: this.props.max,
            onClick: this.handleTodayClick,
            disabled: !this.todayIsInRange,
            tabIndex: this.props.tabIndex,
            unstyled: s8
          }
        )
      }
    ), this.props.activeView === c.month && this.buildMonthView(k5, this.weekNames), a11.createElement(
      w2,
      {
        key: "calendar-view-list-content",
        skip: u11,
        take: this.take,
        total: w7,
        itemHeight: this.viewHeight,
        topOffset: this.viewOffset,
        bottomOffset: this.bottomOffset,
        scrollOffsetSize: this.viewOffset,
        maxScrollDifference: this.viewHeight,
        onScroll: this.props.onScroll,
        onScrollAction: this.handleScrollAction,
        onMount: (f9) => !this.virtualization && this.handleVirtualizationMount(f9),
        children: I8,
        tabIndex: this.props.tabIndex,
        unstyled: s8
      }
    ));
    return a11.createElement(
      "div",
      {
        ref: (f9) => {
          this._element = f9;
        },
        className: C6
      },
      this.props.dom.didCalculate ? V4 : null
    );
  }
};
d5.propTypes = {
  activeView: import_prop_types5.default.number.isRequired,
  bottomOffset: import_prop_types5.default.number,
  cellUID: import_prop_types5.default.string.isRequired,
  focusedDate: import_prop_types5.default.instanceOf(Date).isRequired,
  max: import_prop_types5.default.instanceOf(Date).isRequired,
  min: import_prop_types5.default.instanceOf(Date).isRequired,
  onChange: import_prop_types5.default.func,
  showWeekNumbers: import_prop_types5.default.bool,
  smoothScroll: import_prop_types5.default.bool,
  take: import_prop_types5.default.number,
  value: import_prop_types5.default.instanceOf(Date),
  viewHeight: import_prop_types5.default.number,
  viewOffset: import_prop_types5.default.number,
  weekDaysFormat: import_prop_types5.default.oneOf(["short", "abbreviated", "narrow"]),
  tabIndex: import_prop_types5.default.number
}, d5.defaultProps = {
  take: M3,
  showWeekNumbers: false,
  weekDaysFormat: "short",
  smoothScroll: true
};
var v4 = d5;
p(v4);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Navigation.mjs
var n7 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarNavigationItem.mjs
var l6 = __toESM(require_react(), 1);
var g3 = (e13) => {
  const { className: i11, isRangeStart: m7, value: r14, text: N4, view: k5, ...o17 } = e13, a23 = n4(), t10 = a23 && a23.uCalendar, d11 = (C6) => {
    var n19;
    (n19 = e13.onClick) == null || n19.call(e13, r14, C6);
  };
  return l6.createElement(
    "li",
    {
      ...o17,
      onClick: d11,
      className: n2(j.li({ c: t10 }), i11)
    },
    l6.createElement(
      "span",
      {
        className: n2(
          j.navigationMarker({
            c: t10,
            isRangeStart: m7
          })
        )
      },
      e13.children
    )
  );
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Navigation.mjs
var I4 = 30;
var p4 = class p5 extends n7.Component {
  constructor(o17) {
    super(o17), this.virtualization = null, this.list = null, this.itemHeight = 0, this.topOffset = 0, this.maxViewHeight = 0, this.bottomOffset = 0, this.handleVirtualizationMount = (t10) => {
      if (this.virtualization = t10, this.virtualization && this.list) {
        this.list.style.transform = `translateY(${this.topOffset}px)`;
        const i11 = K2(this.props.focusedDate, this.props.min, this.props.max), s8 = this.props.service.skip(i11, this.props.min);
        this.virtualization.scrollToIndex(s8);
      }
    }, this.buildNavigationItem = (t10) => {
      const i11 = this.props.service.navigationTitle(t10), s8 = this.props.service.isRangeStart(t10), a23 = `kendo-react-calendar-nav-item-${t10.getTime()}`, h3 = {
        text: i11,
        value: t10,
        isRangeStart: s8,
        view: this.props.activeView,
        onClick: this.handleDateChange
      };
      return this.props.navigationItem ? n7.createElement(this.props.navigationItem, { ...h3, key: a23 }, i11) : n7.createElement(g3, { ...h3, key: a23 }, i11);
    }, this.calculateHeights = () => {
      const t10 = this.props.dom.calendarHeight;
      this.itemHeight = this.props.dom.navigationItemHeight || 1, this.maxViewHeight = this.props.dom.monthViewHeight, this.topOffset = (t10 - this.itemHeight) / 2, this.bottomOffset = t10 - this.itemHeight;
    }, this.handleDateChange = (t10, i11) => {
      const { onChange: s8 } = this.props;
      if (s8 && i11) {
        const a23 = {
          value: cloneDate(t10),
          target: this,
          nativeEvent: i11 && i11.nativeEvent,
          syntheticEvent: i11
        };
        s8.call(void 0, a23);
      }
    }, this.handleScrollAction = ({ scrollAction: t10, pageAction: i11 }) => {
      const s8 = i11 ? i11.skip : this.state.skip;
      if (this.state.skip !== s8 && this.setState({ skip: s8 }), this.list && t10) {
        const a23 = `translateY(${t10.offset}px)`;
        this.list.style.transform = a23;
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate;
    const e13 = this.props.service.skip(this.props.focusedDate, this.props.min), c7 = this.props.service.total(this.props.min, this.props.max);
    this.state = {
      skip: e13 - this.getTake(e13, c7) > 0 ? e13 : 0
    };
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : p5.defaultProps.take;
  }
  /**
   * @hidden
   */
  componentDidUpdate(o17, e13) {
    this.indexToScroll !== void 0 && this.virtualization && this.virtualization.scrollToIndex(this.indexToScroll), this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: o17, min: e13, max: c7, service: t10, unstyled: i11 } = this.props;
    this.calculateHeights();
    const s8 = i11 && i11.uCalendar, a23 = this.lastView !== o17, h3 = K2(this.props.focusedDate, e13, c7), m7 = a23 ? t10.skip(h3, e13) : this.state.skip, f9 = t10.total(e13, c7), k5 = this.getTake(m7, f9), x6 = t10.addToDate(e13, m7), D2 = t10.datesList(x6, k5);
    (o17 !== this.lastView || !isEqual(h3, this.lastFocus)) && (this.indexToScroll = t10.skip(h3, e13));
    const w7 = n7.createElement(
      w2,
      {
        skip: m7,
        take: this.take,
        total: f9,
        itemHeight: this.itemHeight,
        topOffset: this.topOffset,
        bottomOffset: this.bottomOffset,
        onScroll: this.props.onScroll,
        maxScrollDifference: this.maxViewHeight,
        onScrollAction: this.handleScrollAction,
        onMount: (l11) => !this.virtualization && this.handleVirtualizationMount(l11),
        tabIndex: this.props.tabIndex,
        unstyled: i11
      },
      n7.createElement(
        "ul",
        {
          ref: (l11) => {
            this.list = l11;
          },
          className: n2(j.ul({ c: s8 }))
        },
        D2.map((l11) => this.buildNavigationItem(l11))
      )
    );
    return n7.createElement("div", { className: n2(j.navigation({ c: s8 })) }, n7.createElement("span", { className: n2(j.navigationHighlight({ c: s8 })) }), this.props.dom.didCalculate ? w7 : null);
  }
  getTake(o17, e13) {
    return Math.min(e13 - o17, this.take);
  }
};
p4.propTypes = {
  activeView: import_prop_types6.default.number.isRequired,
  focusedDate: import_prop_types6.default.instanceOf(Date).isRequired,
  max: import_prop_types6.default.instanceOf(Date).isRequired,
  min: import_prop_types6.default.instanceOf(Date).isRequired,
  onChange: import_prop_types6.default.func,
  take: import_prop_types6.default.number,
  tabIndex: import_prop_types6.default.number
}, p4.defaultProps = {
  take: I4
};
var g4 = p4;

// node_modules/@progress/kendo-react-dateinputs/calendar/models/NavigationAction.mjs
var w4 = ((e13) => (e13[e13.Left = 0] = "Left", e13[e13.Right = 1] = "Right", e13[e13.Up = 2] = "Up", e13[e13.Down = 3] = "Down", e13[e13.PrevView = 4] = "PrevView", e13[e13.NextView = 5] = "NextView", e13[e13.FirstInView = 6] = "FirstInView", e13[e13.LastInView = 7] = "LastInView", e13[e13.LowerView = 8] = "LowerView", e13[e13.UpperView = 9] = "UpperView", e13))(w4 || {});

// node_modules/@progress/kendo-react-dateinputs/calendar/services/CenturyViewService.mjs
var $ = [[]];
var T4 = 4;
var b = 3;
var G3 = {
  [w4.Left]: (i11) => addDecades(i11, -1),
  [w4.Up]: (i11) => addDecades(i11, -5),
  [w4.Right]: (i11) => addDecades(i11, 1),
  [w4.Down]: (i11) => addDecades(i11, 5),
  [w4.PrevView]: (i11) => addCenturies(i11, -1),
  [w4.NextView]: (i11) => addCenturies(i11, 1),
  [w4.FirstInView]: (i11) => firstDecadeOfCentury(i11),
  [w4.LastInView]: (i11) => lastDecadeOfCentury(i11)
};
var W2 = class {
  addToDate(e13, t10) {
    return addCenturies(e13, t10);
  }
  datesList(e13, t10) {
    return z(0, t10).map((r14) => addCenturies(e13, r14));
  }
  data(e13) {
    const {
      cellUID: t10,
      focusedDate: r14,
      isActiveView: u11,
      max: s8,
      min: a23,
      selectedDate: f9,
      selectionRange: h3 = l3,
      viewDate: F4
    } = e13;
    if (!F4)
      return $;
    const q2 = z(0, T4), S10 = firstDecadeOfCentury(F4), R4 = lastDecadeOfCentury(F4), A4 = X();
    return z(0, b).map((V4) => {
      const L7 = addDecades(S10, V4 * T4);
      return q2.map((C6) => {
        const n19 = this.normalize(addDecades(L7, C6), a23, s8), y8 = this.isEqual(n19, h3.start), D2 = this.isEqual(n19, h3.end), Y2 = !y8 && !D2 && Y(n19, h3), v8 = u11 && (Array.isArray(f9) ? this.isSelectedFromArray(n19, f9, a23, s8) : j2(f9, a23, s8) && this.isEqual(n19, f9));
        return B(n19, S10, R4) ? {
          formattedValue: this.value(n19),
          id: `${t10}${n19.getTime()}`,
          isFocused: this.isEqual(n19, r14),
          isSelected: v8,
          isWeekend: false,
          isInRange: j2(n19, a23, s8),
          isRangeStart: y8,
          isRangeMid: Y2,
          isRangeEnd: D2,
          isRangeSplitEnd: Y2 && this.isEqual(n19, R4),
          isRangeSplitStart: Y2 && this.isEqual(n19, S10),
          isToday: this.isEqual(n19, A4),
          title: this.cellTitle(n19),
          value: n19
        } : null;
      });
    });
  }
  isSelectedFromArray(e13, t10, r14, u11) {
    let s8 = false;
    return t10.forEach((a23) => {
      j2(e13, r14, u11) && this.isEqual(e13, a23) && (s8 = true);
    }), s8;
  }
  isEqual(e13, t10) {
    return !e13 || !t10 ? false : firstYearOfDecade(e13).getFullYear() === firstYearOfDecade(t10).getFullYear();
  }
  isInArray(e13, t10) {
    if (!t10.length)
      return false;
    const r14 = e13.getFullYear();
    return t10[0].getFullYear() <= r14 && r14 <= t10[t10.length - 1].getFullYear() + 99;
  }
  isInRange(e13, t10, r14) {
    const u11 = firstYearOfDecade(e13).getFullYear(), s8 = !t10 || firstYearOfDecade(t10).getFullYear() <= u11, a23 = !r14 || u11 <= firstYearOfDecade(r14).getFullYear();
    return s8 && a23;
  }
  isInSameView(e13, t10) {
    return durationInCenturies(e13, t10) === 0;
  }
  isRangeStart(e13) {
    return e13.getFullYear() % 1e3 === 0;
  }
  move(e13, t10) {
    const r14 = G3[t10];
    return r14 ? r14(e13) : e13;
  }
  cellTitle(e13) {
    return firstYearOfDecade(e13).getFullYear().toString();
  }
  navigationTitle(e13) {
    return e13 ? firstDecadeOfCentury(e13).getFullYear().toString() : "";
  }
  title(e13) {
    return e13 ? `${firstDecadeOfCentury(e13).getFullYear()} - ${lastDecadeOfCentury(e13).getFullYear()}` : "";
  }
  rowLength(e13) {
    return T4;
  }
  skip(e13, t10) {
    return durationInCenturies(t10, e13);
  }
  total(e13, t10) {
    return durationInCenturies(e13, t10) + 1;
  }
  value(e13) {
    return e13 ? firstYearOfDecade(e13).getFullYear().toString() : "";
  }
  viewDate(e13, t10, r14 = 1) {
    return durationInCenturies(e13, t10) < r14 ? addCenturies(e13, -1) : e13;
  }
  normalize(e13, t10, r14) {
    return e13 < t10 && this.isEqual(e13, t10) ? cloneDate(t10) : e13 > r14 && this.isEqual(e13, r14) ? cloneDate(r14) : e13;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/DecadeViewService.mjs
var $2 = [[]];
var w5 = 4;
var b2 = 3;
var C3 = {
  [w4.Left]: (i11) => addYears(i11, -1),
  [w4.Up]: (i11) => addYears(i11, -5),
  [w4.Right]: (i11) => addYears(i11, 1),
  [w4.Down]: (i11) => addYears(i11, 5),
  [w4.PrevView]: (i11) => addDecades(i11, -1),
  [w4.NextView]: (i11) => addDecades(i11, 1),
  [w4.FirstInView]: (i11) => firstYearOfDecade(i11),
  [w4.LastInView]: (i11) => lastYearOfDecade(i11)
};
var U3 = class {
  addToDate(e13, t10) {
    return addDecades(e13, t10);
  }
  datesList(e13, t10) {
    return z(0, t10).map((r14) => addDecades(e13, r14));
  }
  data(e13) {
    const {
      cellUID: t10,
      focusedDate: r14,
      isActiveView: o17,
      max: n19,
      min: a23,
      selectedDate: g9,
      selectionRange: E4 = l3,
      viewDate: h3
    } = e13;
    if (!h3)
      return $2;
    const q2 = z(0, w5), Y2 = firstYearOfDecade(h3), D2 = lastYearOfDecade(h3), A4 = X();
    return z(0, b2).map((y8) => {
      const V4 = addYears(Y2, y8 * w5);
      return q2.map((L7) => {
        const s8 = this.normalize(addYears(V4, L7), a23, n19), I8 = this.isEqual(s8, E4.start), R4 = this.isEqual(s8, E4.end), F4 = !I8 && !R4 && Y(s8, E4), v8 = o17 && (Array.isArray(g9) ? this.isSelectedFromArray(s8, g9, a23, n19) : j2(g9, a23, n19) && this.isEqual(s8, g9));
        return B(s8, Y2, D2) ? {
          formattedValue: this.value(s8),
          id: `${t10}${s8.getTime()}`,
          isFocused: this.isEqual(s8, r14),
          isSelected: v8,
          isWeekend: false,
          isInRange: j2(s8, a23, n19),
          isRangeStart: I8,
          isRangeMid: F4,
          isRangeEnd: R4,
          isRangeSplitEnd: F4 && this.isEqual(s8, D2),
          isRangeSplitStart: F4 && this.isEqual(s8, Y2),
          isToday: this.isEqual(s8, A4),
          title: this.cellTitle(s8),
          value: s8
        } : null;
      });
    });
  }
  isSelectedFromArray(e13, t10, r14, o17) {
    let n19 = false;
    return t10.forEach((a23) => {
      j2(e13, r14, o17) && this.isEqual(e13, a23) && (n19 = true);
    }), n19;
  }
  isEqual(e13, t10) {
    return !e13 || !t10 ? false : e13.getFullYear() === t10.getFullYear();
  }
  isInArray(e13, t10) {
    if (!t10.length)
      return false;
    const r14 = e13.getFullYear();
    return t10[0].getFullYear() <= r14 && r14 <= t10[t10.length - 1].getFullYear() + 9;
  }
  isInRange(e13, t10, r14) {
    const o17 = e13.getFullYear(), n19 = !t10 || t10.getFullYear() <= o17, a23 = !r14 || o17 <= r14.getFullYear();
    return n19 && a23;
  }
  isRangeStart(e13) {
    return e13.getFullYear() % 100 === 0;
  }
  isInSameView(e13, t10) {
    return durationInDecades(e13, t10) === 0;
  }
  move(e13, t10) {
    const r14 = C3[t10];
    return r14 ? r14(e13) : e13;
  }
  cellTitle(e13) {
    return e13.getFullYear().toString();
  }
  navigationTitle(e13) {
    return e13 ? firstYearOfDecade(e13).getFullYear().toString() : "";
  }
  title(e13) {
    return e13 ? `${firstYearOfDecade(e13).getFullYear()} - ${lastYearOfDecade(e13).getFullYear()}` : "";
  }
  rowLength(e13) {
    return w5;
  }
  skip(e13, t10) {
    return durationInDecades(t10, e13);
  }
  total(e13, t10) {
    return durationInDecades(e13, t10) + 1;
  }
  value(e13) {
    return e13 ? e13.getFullYear().toString() : "";
  }
  viewDate(e13, t10, r14 = 1) {
    return durationInDecades(e13, t10) < r14 ? addDecades(e13, -1) : e13;
  }
  normalize(e13, t10, r14) {
    return e13 < t10 && this.isEqual(e13, t10) ? cloneDate(t10) : e13 > r14 && this.isEqual(e13, r14) ? cloneDate(r14) : e13;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/MonthViewService.mjs
var _ = [[]];
var S2 = 7;
var $3 = 6;
var C4 = 6;
var G4 = 0;
var P3 = {
  [w4.Left]: (s8) => addDays(s8, -1),
  [w4.Up]: (s8) => addWeeks(s8, -1),
  [w4.Right]: (s8) => addDays(s8, 1),
  [w4.Down]: (s8) => addWeeks(s8, 1),
  [w4.PrevView]: (s8) => addMonths(s8, -1),
  [w4.NextView]: (s8) => addMonths(s8, 1),
  [w4.FirstInView]: (s8) => firstDayOfMonth(s8),
  [w4.LastInView]: (s8) => lastDayOfMonth(s8)
};
var Q2 = class {
  constructor(t10) {
    this.intl = t10;
  }
  addToDate(t10, e13) {
    return addMonths(t10, e13);
  }
  datesList(t10, e13) {
    return z(0, e13).map((n19) => addMonths(t10, n19));
  }
  data(t10) {
    const {
      cellUID: e13,
      focusedDate: n19,
      isActiveView: l11,
      max: r14,
      min: a23,
      selectedDate: c7,
      selectionRange: m7 = l3,
      viewDate: f9
    } = t10;
    if (!f9)
      return _;
    const M6 = firstDayOfMonth(f9), R4 = lastDayOfMonth(f9), N4 = dayOfWeek(M6, this.intl.firstDay(), -1), b4 = z(0, S2), q2 = X();
    return z(0, $3).map((V4) => {
      const v8 = addDays(N4, V4 * S2);
      return b4.map((L7) => {
        const i11 = this.normalize(addDays(v8, L7), a23, r14), k5 = i11 < M6 || i11 > R4, p11 = this.isEqual(i11, m7.start), A4 = this.isEqual(i11, m7.end), E4 = !p11 && !A4 && Y(i11, m7), F4 = l11 && (Array.isArray(c7) ? this.isSelectedFromArray(i11, c7, a23, r14) : j2(c7, a23, r14) && this.isEqual(i11, c7));
        return {
          formattedValue: this.value(i11),
          id: `${e13}${i11.getTime()}`,
          isFocused: this.isEqual(i11, n19),
          isSelected: F4,
          isInRange: j2(i11, a23, r14),
          isWeekend: this.isWeekend(i11),
          isRangeStart: p11,
          isRangeMid: E4,
          isRangeEnd: A4,
          isRangeSplitStart: E4 && this.isEqual(i11, M6),
          isRangeSplitEnd: E4 && this.isEqual(i11, R4),
          isToday: this.isEqual(i11, q2),
          title: this.cellTitle(i11),
          value: i11,
          isOtherMonth: k5
        };
      });
    });
  }
  isEqual(t10, e13) {
    return !t10 || !e13 ? false : getDate(t10).getTime() === getDate(e13).getTime();
  }
  isSelectedFromArray(t10, e13, n19, l11) {
    let r14 = false;
    return e13.forEach((a23) => {
      j2(t10, n19, l11) && this.isEqual(t10, a23) && (r14 = true);
    }), r14;
  }
  isInArray(t10, e13) {
    return !!e13.length && firstDayOfMonth(e13[0]) <= t10 && t10 <= lastDayOfMonth(e13[e13.length - 1]);
  }
  isInRange(t10, e13, n19) {
    const l11 = getDate(t10), r14 = !e13 || getDate(e13) <= l11, a23 = !n19 || l11 <= getDate(n19);
    return r14 && a23;
  }
  isInSameView(t10, e13) {
    return durationInMonths(t10, e13) === 0;
  }
  isRangeStart(t10) {
    return !t10.getMonth();
  }
  move(t10, e13) {
    const n19 = P3[e13];
    return n19 ? n19(t10) : t10;
  }
  cellTitle(t10) {
    return this.intl.formatDate(t10, "D");
  }
  navigationTitle(t10) {
    return t10 ? this.isRangeStart(t10) ? t10.getFullYear().toString() : this.abbrMonthNames()[t10.getMonth()] : "";
  }
  title(t10) {
    return `${this.wideMonthNames()[t10.getMonth()]} ${t10.getFullYear()}`;
  }
  rowLength(t10) {
    return S2 + (t10 ? 1 : 0);
  }
  skip(t10, e13) {
    return durationInMonths(e13, t10);
  }
  total(t10, e13) {
    return durationInMonths(t10, e13) + 1;
  }
  value(t10) {
    return t10 ? t10.getDate().toString() : "";
  }
  viewDate(t10, e13, n19 = 1) {
    return durationInMonths(t10, e13) < n19 ? addMonths(t10, -1) : t10;
  }
  isWeekend(t10) {
    const e13 = t10.getDay();
    return e13 === C4 || e13 === G4;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t10, e13, n19) {
    return t10 < e13 && this.isEqual(t10, e13) ? getDate(e13) : t10 > n19 && this.isEqual(t10, n19) ? getDate(n19) : t10;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: true });
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/YearViewService.mjs
var C5 = [[]];
var S3 = 4;
var G5 = 3;
var P4 = (r14) => r14 > 4 ? -5 : r14 < 2 ? -2 : -7;
var k3 = (r14) => r14 < 7 ? 5 : r14 < 10 ? 7 : 2;
var z2 = {
  [w4.Left]: (r14) => addMonths(r14, -1),
  [w4.Up]: (r14) => addMonths(r14, P4(r14.getMonth())),
  [w4.Right]: (r14) => addMonths(r14, 1),
  [w4.Down]: (r14) => addMonths(r14, k3(r14.getMonth())),
  [w4.PrevView]: (r14) => addYears(r14, -1),
  [w4.NextView]: (r14) => addYears(r14, 1),
  [w4.FirstInView]: (r14) => firstMonthOfYear(r14),
  [w4.LastInView]: (r14) => lastMonthOfYear(r14)
};
var K3 = class {
  constructor(t10) {
    this._intl = t10;
  }
  addToDate(t10, e13) {
    return addYears(t10, e13);
  }
  datesList(t10, e13) {
    return z(0, e13).map((n19) => addYears(t10, n19));
  }
  data(t10) {
    const {
      cellUID: e13,
      focusedDate: n19,
      isActiveView: l11,
      max: i11,
      min: a23,
      selectedDate: c7,
      selectionRange: f9 = l3,
      viewDate: Y2
    } = t10;
    if (!Y2)
      return C5;
    const b4 = this.abbrMonthNames(), d11 = firstMonthOfYear(Y2), q2 = lastMonthOfYear(Y2), y8 = d11.getFullYear(), A4 = z(0, S3), V4 = X();
    return z(0, G5).map((v8) => {
      const D2 = addMonths(d11, v8 * S3);
      return A4.map((N4) => {
        const s8 = this.normalize(addMonths(D2, N4), a23, i11);
        if (y8 < s8.getFullYear())
          return null;
        const w7 = this.isEqual(s8, f9.start), T7 = this.isEqual(s8, f9.end), E4 = !w7 && !T7 && Y(s8, f9), L7 = l11 && (Array.isArray(c7) ? this.isSelectedFromArray(s8, c7, a23, i11) : j2(c7, a23, i11) && this.isEqual(s8, c7));
        return {
          formattedValue: b4[s8.getMonth()],
          id: `${e13}${s8.getTime()}`,
          isFocused: this.isEqual(s8, n19),
          isSelected: L7,
          isInRange: j2(s8, a23, i11),
          isWeekend: false,
          isRangeStart: w7,
          isRangeMid: E4,
          isRangeEnd: T7,
          isRangeSplitEnd: E4 && this.isEqual(s8, q2),
          isRangeSplitStart: E4 && this.isEqual(s8, d11),
          isToday: this.isEqual(s8, V4),
          title: this.cellTitle(s8),
          value: s8
        };
      });
    });
  }
  isSelectedFromArray(t10, e13, n19, l11) {
    let i11 = false;
    return e13.forEach((a23) => {
      j2(t10, n19, l11) && this.isEqual(t10, a23) && (i11 = true);
    }), i11;
  }
  isEqual(t10, e13) {
    return !t10 || !e13 ? false : t10.getFullYear() === e13.getFullYear() && t10.getMonth() === e13.getMonth();
  }
  isInArray(t10, e13) {
    if (!e13.length)
      return false;
    const n19 = t10.getFullYear();
    return e13[0].getFullYear() <= n19 && n19 <= e13[e13.length - 1].getFullYear();
  }
  isInRange(t10, e13, n19) {
    const l11 = createDate(t10.getFullYear(), t10.getMonth(), 1), i11 = !e13 || createDate(e13.getFullYear(), e13.getMonth(), 1) <= l11, a23 = !n19 || l11 <= createDate(n19.getFullYear(), n19.getMonth(), 1);
    return i11 && a23;
  }
  isInSameView(t10, e13) {
    return durationInYears(t10, e13) === 0;
  }
  isRangeStart(t10) {
    return t10.getFullYear() % 10 === 0;
  }
  move(t10, e13) {
    const n19 = z2[e13];
    return n19 ? n19(t10) : t10;
  }
  cellTitle(t10) {
    return `${t10.getFullYear()} ${this.value(t10)}`;
  }
  navigationTitle(t10) {
    return this.title(t10);
  }
  title(t10) {
    return t10 ? t10.getFullYear().toString() : "";
  }
  rowLength(t10) {
    return S3;
  }
  skip(t10, e13) {
    return durationInYears(e13, t10);
  }
  total(t10, e13) {
    return durationInYears(t10, e13) + 1;
  }
  value(t10) {
    return t10 ? this.abbrMonthNames()[t10.getMonth()] : "";
  }
  viewDate(t10, e13, n19 = 1) {
    return durationInYears(t10, e13) < n19 ? addYears(t10, -1) : t10;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t10, e13, n19) {
    return t10 < e13 && this.isEqual(t10, e13) ? cloneDate(e13) : t10 > n19 && this.isEqual(t10, n19) ? cloneDate(n19) : t10;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/BusViewService.mjs
var a12 = {
  [c.month]: Q2,
  [c.year]: K3,
  [c.decade]: U3,
  [c.century]: W2
};
var u5 = (i11, t10) => {
  const e13 = c[c[i11 + t10]];
  return e13 !== void 0 ? e13 : i11;
};
var V2 = class {
  constructor(t10) {
    this.bottom = c.month, this.top = c.century, this.onViewChanged = t10;
  }
  configure(t10, e13) {
    this.bottom = t10, this.top = e13;
  }
  service(t10, e13) {
    return new a12[`${t10}`](e13);
  }
  moveDown(t10, e13) {
    this.move(t10, -1, e13);
  }
  moveUp(t10, e13) {
    this.move(t10, 1, e13);
  }
  moveToBottom(t10) {
    t10 !== this.bottom && this.onViewChanged({ view: this.bottom });
  }
  canMoveDown(t10) {
    return this.bottom < t10;
  }
  canMoveUp(t10) {
    return t10 < this.top;
  }
  clamp(t10) {
    return t10 < this.bottom ? this.bottom : t10 > this.top ? this.top : t10;
  }
  move(t10, e13, n19) {
    const r14 = this.clamp(u5(t10, e13));
    r14 !== t10 && this.onViewChanged({ view: r14 }, n19);
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/DOMService.mjs
var K4 = class {
  constructor() {
    this.calendarHeight = 0, this.headerHeight = 0, this.monthViewHeight = 0, this.yearViewHeight = 0, this.decadeViewHeight = 0, this.centuryViewHeight = 0, this.navigationItemHeight = 0, this.scrollableContentHeight = 0, this.scrollableYearContentHeight = 0, this.calendarWidth = 0, this.monthViewWidth = 0, this.yearViewWidth = 0, this.decadeViewWidth = 0, this.centuryViewWidth = 0, this.scrollableContentWidth = 0, this.didCalculate = false, this.hostContainer = null;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(o17, c7) {
    if (!e)
      return;
    const h3 = Q("div"), w7 = Q("ul"), k5 = Q("li"), C6 = Q("td"), x6 = Q("th"), b4 = Q("tr"), B5 = Q("tbody"), O3 = Q("thead"), f9 = Q("table"), e13 = c7 && c7.uCalendar, W3 = c7 && c7.uButton, Y2 = o(
      G.wrapper({
        c: W3,
        fillMode: "flat",
        size: "medium",
        rounded: "medium",
        themeColor: "primary"
      }),
      j.title({ c: e13 })
    ), $5 = () => h3(
      `
                <span class="${Y2}">
                    <span class="${o(G.text({ c: W3 }))}">March 2017</span>
                </span>
                <span class="${o(j.spacer({ c: e13 }))}"></span>
                <span class="${o(j.nav({ c: e13 }))}"><button class="${o(
        j.today({ c: e13 })
      )}">TODAY</button></span>
            `,
      o(j.header({ c: e13, vertical: true }))
    ), q2 = () => f9(
      [
        O3(
          [
            b4(
              [x6("MO", o(j.th({ c: e13 })))],
              o(j.tr({ c: e13 }))
            )
          ],
          o(j.thead({ c: e13 }))
        )
      ],
      o(j.table({ c: e13, weekdays: true }))
    ), S10 = (t10, a23) => new Array(t10).fill("1").map(a23), N4 = (t10, a23 = 1) => f9(
      [
        B5(
          [b4([C6("1", o(j.td({ c: e13, isWeek: true })))])].concat(
            S10(
              t10,
              () => b4(
                S10(
                  a23,
                  (d11) => C6(
                    `<span class="${o(
                      j.link({ c: e13 })
                    )}">${d11}</span>`,
                    o(j.td({ c: e13 }))
                  )
                ),
                o(j.tr({ c: e13 }))
              )
            )
          ),
          o(j.tbody({ c: e13 }))
        )
      ],
      o(j.table({ c: e13 }))
    ), m7 = (t10) => h3(
      t10,
      o(
        j.scrollableSelector({
          c: e13
        }),
        j.scrollable({
          c: e13,
          horizontal: true
        })
      )
    ), A4 = (t10, a23, d11) => h3(
      d11 ? [$5(), q2(), m7([t10, t10])] : [$5(), m7([t10, t10])],
      a23,
      { left: "-10000px", position: "absolute" }
    ), I8 = /* @__PURE__ */ (() => {
      let t10;
      return () => e ? (t10 || (t10 = h3(
        [m7([w7([k5("<span>FEB</span>")])])],
        o(j.navigation({ c: e13 })),
        { left: "0px", position: "absolute" }
      )), t10) : null;
    })(), y8 = ({ cells: t10, rows: a23 }, d11, T7) => {
      let V4;
      return () => e ? (V4 || (V4 = A4(N4(a23, t10), d11, T7)), V4) : null;
    }, p11 = (t10) => t10.querySelector(
      `.${o(j.scrollableSelector({ c: e13 }))}`
    ), H5 = (t10) => {
      const a23 = p11(t10);
      return a23.className = `${a23.className} scrollable-horizontal`, t10;
    }, z4 = y8(
      { cells: 7, rows: 6 },
      o(j.view({ c: e13, month: true })),
      true
    ), D2 = y8(
      { cells: 5, rows: 3 },
      o(j.view({ c: e13, year: true })),
      false
    ), F4 = y8(
      { cells: 5, rows: 2 },
      o(j.view({ c: e13, decade: true })),
      false
    ), L7 = () => H5(z4()), P6 = () => H5(D2()), R4 = () => H5(F4()), n19 = (t10) => parseFloat(window.getComputedStyle(t10).height) || t10.offsetHeight, u11 = (t10) => {
      const a23 = window.getComputedStyle(t10);
      return parseFloat(a23.width) + parseFloat(a23.paddingLeft) + parseFloat(a23.paddingRight) || t10.offsetWidth;
    }, l11 = (t10) => t10.querySelector("tbody");
    this.didCalculate = true, o17 && (this.hostContainer = o17), this.batch(z4(), (t10) => {
      const a23 = l11(t10);
      this.calendarHeight = n19(t10), this.monthViewHeight = n19(a23), this.headerHeight = n19(a23.children[0]), this.scrollableContentHeight = n19(p11(t10));
    }), this.batch(L7(), (t10) => {
      const a23 = l11(t10);
      this.calendarWidth = u11(t10), this.monthViewWidth = u11(a23), this.scrollableContentWidth = u11(p11(t10));
    }), this.batch(D2(), (t10) => {
      this.yearViewHeight = n19(l11(t10)), this.scrollableYearContentHeight = n19(p11(t10));
    }), this.batch(P6(), (t10) => {
      this.yearViewWidth = u11(l11(t10));
    }), this.batch(F4(), (t10) => {
      this.decadeViewHeight = n19(l11(t10)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(R4(), (t10) => {
      this.decadeViewWidth = u11(l11(t10)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch(I8(), (t10) => {
      this.navigationItemHeight = n19(t10.querySelector("li"));
    });
  }
  viewHeight(o17) {
    return this.viewDimension(o17, "height");
  }
  viewWidth(o17) {
    return this.viewDimension(o17, "width");
  }
  viewDimension(o17, c7) {
    const h3 = c7 === "height" ? "ViewHeight" : "ViewWidth";
    switch (o17) {
      case c.month:
        return this[`month${h3}`];
      case c.year:
        return this[`year${h3}`];
      case c.decade:
        return this[`decade${h3}`];
      case c.century:
        return this[`century${h3}`];
      default:
        return 1;
    }
  }
  batch(o17, c7) {
    const h3 = this.hostContainer || document.body, w7 = h3.appendChild(o17);
    c7(w7), h3.removeChild(w7);
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/NavigationService.mjs
var n8 = {
  33: w4.PrevView,
  34: w4.NextView,
  35: w4.LastInView,
  36: w4.FirstInView,
  37: w4.Left,
  38: w4.Up,
  39: w4.Right,
  40: w4.Down,
  "meta+38": w4.UpperView,
  "meta+40": w4.LowerView
};
var p6 = class {
  constructor(t10) {
    this.bus = t10;
  }
  action(t10) {
    const o17 = `${t10.ctrlKey || t10.metaKey ? "meta+" : ""}${t10.keyCode}`;
    return n8[o17];
  }
  move(t10, o17, e13, i11, s8) {
    return i11 ? o17 === w4.UpperView && this.bus.canMoveUp(e13) ? (this.bus.moveUp(e13, s8), t10) : o17 === w4.LowerView && this.bus.canMoveDown(e13) ? (this.bus.moveDown(e13, s8), t10) : i11.move(t10, o17) : t10;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/services/ScrollSyncService.mjs
var n9 = (l11) => (t10) => Math.floor(t10 / l11);
var o8 = (l11) => (t10) => t10 * l11;
var s4 = class {
  constructor(t10) {
    this.dom = t10, this.divideByMagnitude = null, this.powerByMagnitude = null, this.navigator = null, this.view = null, this.monthScrolled = false, this.navScrolled = false;
  }
  configure(t10) {
    const i11 = Math.max(this.dom.viewHeight(t10) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = n9(i11), this.powerByMagnitude = o8(i11);
  }
  sync(t10, i11, e13) {
    if (!(!t10 || !i11)) {
      if (this.navigator = t10, this.view = i11, e13.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = false;
          return;
        }
        this.navScrolled = true, this.scrollSiblingOf(this.navigator.element);
      }
      if (e13.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = false;
          return;
        }
        this.monthScrolled = true, this.scrollSiblingOf(this.view.element);
      }
    }
  }
  scrollSiblingOf(t10) {
    const i11 = this.siblingComponent(t10), e13 = this.calculateScroll(i11, t10.scrollTop);
    i11.scrollTo(e13);
  }
  siblingComponent(t10) {
    return this.navigator.element === t10 ? this.view : this.navigator;
  }
  calculateScroll(t10, i11) {
    const e13 = t10 === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return e13 ? e13(i11) : 0;
  }
};

// node_modules/@progress/kendo-react-dateinputs/calendar/components/Calendar.mjs
var S4 = (u11) => u11 ? u11.virtualization : null;
var E = (u11 = d7.defaultProps.min, a23 = d7.defaultProps.max, e13, t10) => t10 !== void 0 ? t10 !== null && j2(getDate(t10), u11, a23) ? t10 : null : e13 !== null && j2(getDate(e13), u11, a23) ? e13 : null;
var n10 = class n11 extends f4.Component {
  constructor(a23) {
    super(a23), this.scrollSyncService = null, this.focusedDate = null, this.Navigation = null, this.calendarViewList = null, this._element = null, this.intl = null, this.service = null, this.isActive = false, this.didNavigationChange = false, this.focus = () => {
      this._element && this._element.focus();
    }, this.shouldScroll = () => this.didNavigationChange, this.handleScroll = (t10) => {
      this.scrollSyncService && this.scrollSyncService.sync(
        S4(this.Navigation),
        S4(this.calendarViewList),
        t10
      );
    }, this.handleNavigationChange = (t10) => {
      if (this.props.disabled)
        return;
      this.didNavigationChange = true;
      const i11 = cloneDate(t10.value);
      this.setState({ focusedDate: i11 });
    }, this.handleViewChange = ({ view: t10 }) => {
      this.scrollSyncService && this.scrollSyncService.configure(t10), this.setState({ activeView: t10 });
    }, this.handleDateChange = (t10) => {
      const i11 = cloneDate(t10.value), o17 = cloneDate(t10.value), v8 = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (v8)
        if (t10.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, t10.syntheticEvent), this.setState({ focusedDate: o17 });
          return;
        }
      this.setState({ value: i11, focusedDate: o17 }), this.valueDuringOnChange = i11;
      const { onChange: h3 } = this.props;
      if (h3) {
        const l11 = {
          syntheticEvent: t10.syntheticEvent,
          nativeEvent: t10.nativeEvent,
          value: i11,
          target: this
        };
        h3.call(void 0, l11);
      }
      this.valueDuringOnChange = void 0;
    }, this.handleFocus = (t10) => {
      if (this.isActive = true, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: i11 } = this.props;
      i11 && i11.call(void 0, t10);
    }, this.handleBlur = (t10) => {
      if (this.isActive = false, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: i11 } = this.props;
      i11 && i11.call(void 0, t10);
    }, this.handleKeyDown = (t10) => {
      const { keyCode: o17, ctrlKey: v8, metaKey: h3 } = t10;
      if (!(!this.focusedDate || !this.service)) {
        if (o17 === 84 && this.setState({ focusedDate: X() }), (v8 || h3) && (o17 === e2.left || o17 === e2.right)) {
          if (this.props.disabled)
            return;
          this.didNavigationChange = true, this.focusedDate.getDate() === 31 && this.focusedDate.setDate(30);
          const l11 = o17 === e2.left ? this.focusedDate.getMonth() - 1 : this.focusedDate.getMonth() + 1, p11 = new Date(this.focusedDate.setMonth(l11)), b4 = cloneDate(p11);
          this.setState({ focusedDate: b4 });
        }
        if (o17 === e2.enter) {
          if (this.value !== null && isEqualDate(this.focusedDate, this.value)) {
            const p11 = K2(this.focusedDate, this.min, this.max);
            S4(this.calendarViewList).scrollToIndex(this.service.skip(p11, this.min));
          }
          const l11 = {
            syntheticEvent: t10,
            nativeEvent: t10.nativeEvent,
            value: this.focusedDate,
            target: this
          };
          this.handleDateChange(l11);
        } else {
          const l11 = K2(
            this.navigation.move(
              this.focusedDate,
              this.navigation.action(t10),
              this.state.activeView,
              this.service,
              t10
            ),
            this.min,
            this.max
          );
          if (isEqualDate(this.focusedDate, l11))
            return;
          this.setState({ focusedDate: l11 });
        }
        t10.preventDefault();
      }
    }, this.handleMouseDown = (t10) => {
      t10.preventDefault();
    }, this.handleClick = (t10) => {
      this._element && this._element.focus({ preventScroll: true });
    };
    const e13 = E(
      this.min,
      this.max,
      this.props.defaultValue || n11.defaultProps.defaultValue,
      this.props.value
    );
    this.state = {
      value: e13,
      activeView: d3(
        c[a23.defaultActiveView],
        this.bottomView,
        this.topView
      ),
      focusedDate: K2(a23.focusedDate || e13 || X(), this.min, this.max)
    }, this.dom = new K4(), this.bus = new V2(this.handleViewChange), this.navigation = new p6(this.bus), this.oldValue = e13;
  }
  get cellUID() {
    return this.props.id + "-cell-uid";
  }
  get id() {
    return this.props.id + "-id";
  }
  /**
   * Gets the wrapping element of the Calendar.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the Calendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  get min() {
    return getDate(this.props.min !== void 0 ? this.props.min : n11.defaultProps.min);
  }
  get max() {
    return getDate(this.props.max !== void 0 ? this.props.max : n11.defaultProps.max);
  }
  get bottomView() {
    return c[this.props.bottomView !== void 0 ? this.props.bottomView : n11.defaultProps.bottomView];
  }
  get topView() {
    return c[this.props.topView !== void 0 ? this.props.topView : n11.defaultProps.topView];
  }
  /**
   * @hidden
   */
  componentDidMount() {
    const { unstyled: a23 } = this.props;
    Promise.resolve().then(() => {
      d(), this._element && (this.dom.calculateHeights(this._element, a23), this.scrollSyncService = new s4(this.dom), this.scrollSyncService.configure(this.state.activeView), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(a23, e13) {
    d(), e13.activeView !== this.state.activeView && this.scrollSyncService && this.scrollSyncService.configure(this.state.activeView), this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)(), this.didNavigationChange = false, this.isActive && (this.oldValue = this.value);
  }
  /**
   * @hidden
   */
  render() {
    const { _ref: a23, unstyled: e13, bottomView: t10, topView: i11, disabled: o17, weekNumber: v8, mobileMode: h3, className: l11 } = this.props;
    a23 && a23(this);
    const p11 = e13 && e13.uCalendar, b4 = this.value !== null && this.oldValue !== null ? !isEqualDate(this.value, this.oldValue) : this.value !== this.oldValue, O3 = d3(
      this.state.activeView,
      c[t10 !== void 0 ? t10 : n11.defaultProps.bottomView],
      c[i11 !== void 0 ? i11 : n11.defaultProps.topView]
    ), w7 = E(this.min, this.max, this.value, this.value), k5 = w7 ? getDate(w7) : null;
    this.focusedDate = getDate(
      K2(b4 && w7 !== null ? w7 : this.state.focusedDate, this.min, this.max)
    ), this.intl = l(this), this.bus.configure(this.bottomView, this.topView), this.service = this.bus.service(O3, this.intl);
    const { smoothScroll: A4 = Number.parseFloat(f4.version) < 18 } = this.props, P6 = n2(
      j.wrapper({
        c: p11,
        disabled: o17,
        weekNumber: v8,
        mobileMode: h3
      }),
      l11
    ), M6 = [
      this.props.navigation && f4.createElement(
        g4,
        {
          key: 0,
          ref: (m7) => {
            this.Navigation = m7;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          onScroll: this.handleScroll,
          onChange: this.handleNavigationChange,
          service: this.service,
          dom: this.dom,
          navigationItem: this.props.navigationItem,
          tabIndex: this.props.tabIndex,
          unstyled: e13
        }
      ),
      f4.createElement(
        v4,
        {
          key: 1,
          ref: (m7) => {
            this.calendarViewList = m7;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          bus: this.bus,
          shouldScroll: this.shouldScroll,
          onScroll: this.handleScroll,
          service: this.service,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          dom: this.dom,
          smoothScroll: A4,
          showWeekNumbers: this.props.weekNumber,
          onChange: this.handleDateChange,
          value: k5,
          cellUID: this.cellUID,
          headerTitle: this.props.headerTitle,
          header: this.props.header,
          tabIndex: this.props.tabIndex,
          weekDaysFormat: this.props.weekDaysFormat,
          showOtherMonthDays: this.props.showOtherMonthDays,
          unstyled: e13
        }
      )
    ];
    return f4.createElement(
      "div",
      {
        ref: (m7) => {
          this._element = m7;
        },
        className: P6,
        id: this.props.id || this.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-disabled": this.props.disabled,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex || 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick
      },
      M6
    );
  }
};
n10.displayName = "Calendar", n10.propTypes = {
  className: import_prop_types7.default.string,
  defaultActiveView: import_prop_types7.default.oneOf(["month", "year", "decade", "century"]),
  defaultValue: import_prop_types7.default.instanceOf(Date),
  disabled: import_prop_types7.default.bool,
  focusedDate: import_prop_types7.default.instanceOf(Date),
  id: import_prop_types7.default.string,
  ariaLabelledBy: import_prop_types7.default.string,
  ariaDescribedBy: import_prop_types7.default.string,
  weekDaysFormat: import_prop_types7.default.oneOf(["short", "abbreviated", "narrow"]),
  max: import_prop_types7.default.instanceOf(Date),
  min: import_prop_types7.default.instanceOf(Date),
  navigation: import_prop_types7.default.bool,
  smoothScroll: import_prop_types7.default.bool,
  onBlur: import_prop_types7.default.func,
  onChange: import_prop_types7.default.func,
  onFocus: import_prop_types7.default.func,
  tabIndex: import_prop_types7.default.number,
  value: import_prop_types7.default.instanceOf(Date),
  weekNumber: import_prop_types7.default.bool,
  topView: (a23, e13, t10) => {
    const i11 = a23[e13], o17 = a23.bottomView;
    return i11 && o17 && c[i11] < c[o17] ? new Error(
      `Invalid prop + ${e13} suplied to ${t10}.
                    ${e13} can not be smaller than bottomView.
                    `
    ) : null;
  },
  bottomView: (a23, e13, t10) => {
    const i11 = a23[e13], o17 = a23.topView;
    return i11 && o17 && c[i11] > c[o17] ? new Error(
      `Invalid prop + ${e13} suplied to ${t10}.
                    ${e13} can not be bigger than topView.
                    `
    ) : null;
  }
}, n10.defaultProps = {
  disabled: false,
  min: H,
  max: L2,
  weekDaysFormat: "short",
  navigation: true,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  bottomView: "month",
  showOtherMonthDays: false
};
var d7 = n10;
var J3 = a2();
var Q3 = a3(
  x(
    J3,
    a4(d7)
  )
);
Q3.displayName = "KendoReactCalendar";
p(d7);

// node_modules/@progress/kendo-react-dateinputs/dateinput/DateInput.mjs
var a14 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d11, b4) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d12, b5) {
    d12.__proto__ = b5;
  } || function(d12, b5) {
    for (var p11 in b5) if (Object.prototype.hasOwnProperty.call(b5, p11)) d12[p11] = b5[p11];
  };
  return extendStatics(d11, b4);
};
function __extends(d11, b4) {
  if (typeof b4 !== "function" && b4 !== null)
    throw new TypeError("Class extends value " + String(b4) + " is not a constructor or null");
  extendStatics(d11, b4);
  function __() {
    this.constructor = d11;
  }
  d11.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t10) {
    for (var s8, i11 = 1, n19 = arguments.length; i11 < n19; i11++) {
      s8 = arguments[i11];
      for (var p11 in s8) if (Object.prototype.hasOwnProperty.call(s8, p11)) t10[p11] = s8[p11];
    }
    return t10;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i11 = 0, l11 = from.length, ar; i11 < l11; i11++) {
    if (ar || !(i11 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i11);
      ar[i11] = from[i11];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/mask.js
var Mask = (
  /** @class */
  /* @__PURE__ */ function() {
    function Mask2() {
      this.symbols = "";
      this.partMap = [];
    }
    return Mask2;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/constants.js
var Constants = {
  formatSeparator: "_",
  twoDigitYearMax: 68,
  defaultDateFormat: "d",
  defaultLocaleId: "en"
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/key.js
var Key = {
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  ENTER: "Enter",
  ESCAPE: "Escape",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  SPACE: " ",
  END: "End",
  HOME: "Home",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown"
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/utils.js
var padZero = function(length) {
  return new Array(Math.max(length, 0)).fill("0").join("");
};
var unpadZero = function(value) {
  return value.replace(/^0*/, "");
};
var approximateStringMatching = function(_a2) {
  var oldText = _a2.oldText, newText = _a2.newText, formatPattern = _a2.formatPattern, selectionStart = _a2.selectionStart, isInCaretMode = _a2.isInCaretMode, keyEvent = _a2.keyEvent;
  var oldIndex = selectionStart + oldText.length - newText.length;
  var oldTextSeparator = oldText[oldIndex];
  var oldSegmentText = oldText.substring(0, oldIndex);
  var newSegmentText = newText.substring(0, selectionStart);
  var diff = [];
  if (oldSegmentText === newSegmentText && selectionStart > 0) {
    diff.push([formatPattern[selectionStart - 1], newSegmentText[selectionStart - 1]]);
    return diff;
  }
  if (oldSegmentText.indexOf(newSegmentText) === 0 && (isInCaretMode && (keyEvent.key === Key.DELETE || keyEvent.key === Key.BACKSPACE)) || oldSegmentText.indexOf(newSegmentText) === 0 && !isInCaretMode && (newSegmentText.length === 0 || formatPattern[newSegmentText.length - 1] !== formatPattern[newSegmentText.length])) {
    var deletedSymbol = "";
    if (!isInCaretMode && newSegmentText.length === 1) {
      diff.push([formatPattern[0], newSegmentText[0]]);
    }
    for (var i11 = newSegmentText.length; i11 < oldSegmentText.length; i11++) {
      if (formatPattern[i11] !== deletedSymbol && formatPattern[i11] !== Constants.formatSeparator) {
        deletedSymbol = formatPattern[i11];
        diff.push([deletedSymbol, ""]);
      }
    }
    return diff;
  }
  if (isInCaretMode && (newSegmentText.indexOf(oldSegmentText) === 0 || formatPattern[selectionStart - 1] === Constants.formatSeparator) || !isInCaretMode && (newSegmentText.indexOf(oldSegmentText) === 0 || formatPattern[selectionStart - 1] === Constants.formatSeparator)) {
    var symbol = formatPattern[0];
    for (var i11 = Math.max(0, oldSegmentText.length - 1); i11 < formatPattern.length; i11++) {
      if (formatPattern[i11] !== Constants.formatSeparator) {
        symbol = formatPattern[i11];
        break;
      }
    }
    return [[symbol, newSegmentText[selectionStart - 1]]];
  }
  if (newSegmentText[newSegmentText.length - 1] === " " || newSegmentText[newSegmentText.length - 1] === oldTextSeparator && formatPattern[oldIndex] === "_") {
    return [[formatPattern[selectionStart - 1], Constants.formatSeparator]];
  }
  var result = [[formatPattern[selectionStart - 1], newSegmentText[selectionStart - 1]]];
  return result;
};
var dateSymbolMap = function(map, part) {
  map[part.pattern[0]] = part.type;
  return map;
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/utils.js
var dateSetter = function(method) {
  return function(date, value) {
    var clone = cloneDate(date);
    clone[method](value);
    return clone;
  };
};
var isPresent = function(value) {
  return value !== void 0 && value !== null;
};
var isDocumentAvailable = function() {
  return !!document;
};
var isNumber = function(value) {
  return isPresent(value) && typeof value === "number" && !Number.isNaN(value);
};
var parseToInt = function(value) {
  return parseInt(value, 10);
};
var isParseableToInt = function(value) {
  return isNumber(parseToInt(value)) && /^[0-9]+$/.test(value);
};
var clamp = function(value, min, max) {
  return Math.min(max, Math.max(min, value));
};
var extend = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Object.assign.apply(Object, args);
};
var isFunction = function(fn) {
  return typeof fn === "function";
};
var cropTwoDigitYear = function(date) {
  if (!isPresent(date) || isNaN(date.getTime())) {
    return 0;
  }
  return Number(date.getFullYear().toString().slice(-2));
};
var setYears = dateSetter("setFullYear");
var millisecondDigitsInFormat = function(format) {
  var result = format && format.match(/S+(\1)/);
  return result ? result[0].length : 0;
};
var millisecondStepFor = function(digits) {
  return Math.pow(10, 3 - digits);
};
var areDatePartsEqualTo = function(date, year, month, day, hour, minutes, seconds, milliseconds) {
  if (date && date.getFullYear() === year && date.getMonth() === month && date.getDate() === day && date.getHours() === hour && date.getMinutes() === minutes && date.getSeconds() === seconds && date.getMilliseconds() === milliseconds) {
    return true;
  }
  return false;
};
var isValidDate = function(value) {
  return isPresent(value) && value.getTime && isNumber(value.getTime());
};
var isIOS = function() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Macintosh/i.test(navigator.userAgent);
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/dateobject.js
var MONTH_INDEX_FEBRUARY = 1;
var DEFAULT_LEAP_YEAR = 2e3;
var PREVIOUS_CENTURY_BASE = 1900;
var CURRENT_CENTURY_BASE = 2e3;
var SHORT_PATTERN_LENGTH_REGEXP = /d|M|H|h|m|s/;
var MONTH_PART_WITH_WORDS_THRESHOLD = 2;
var MONTH_SYMBOL = "M";
var JS_MONTH_OFFSET = 1;
var DateObject = (
  /** @class */
  function() {
    function DateObject2(_a2) {
      var intlService = _a2.intlService, formatPlaceholder = _a2.formatPlaceholder, format = _a2.format, _b = _a2.cycleTime, cycleTime = _b === void 0 ? false : _b, _c = _a2.twoDigitYearMax, twoDigitYearMax = _c === void 0 ? Constants.twoDigitYearMax : _c, _d = _a2.value, value = _d === void 0 ? null : _d, _e = _a2.autoCorrectParts, autoCorrectParts = _e === void 0 ? true : _e, _f = _a2.toggleDayPeriod, toggleDayPeriod = _f === void 0 ? false : _f;
      this.year = true;
      this.month = true;
      this.date = true;
      this.hours = true;
      this.minutes = true;
      this.seconds = true;
      this.milliseconds = true;
      this.dayperiod = true;
      this.leadingZero = null;
      this.typedMonthPart = "";
      this.knownParts = "adHhmMsEyS";
      this.symbols = {
        "E": "E",
        "H": "H",
        "M": "M",
        "a": "a",
        "d": "d",
        "h": "h",
        "m": "m",
        "s": "s",
        "y": "y",
        "S": "S"
      };
      this._value = this.getDefaultDate();
      this.cycleTime = false;
      this._partiallyInvalidDate = {
        startDate: null,
        invalidDateParts: {
          "E": { value: null, date: null, startDateOffset: 0 },
          "H": { value: null, date: null, startDateOffset: 0 },
          "M": { value: null, date: null, startDateOffset: 0 },
          "a": { value: null, date: null, startDateOffset: 0 },
          "d": { value: null, date: null, startDateOffset: 0 },
          "h": { value: null, date: null, startDateOffset: 0 },
          "m": { value: null, date: null, startDateOffset: 0 },
          "s": { value: null, date: null, startDateOffset: 0 },
          "y": { value: null, date: null, startDateOffset: 0 },
          "S": { value: null, date: null, startDateOffset: 0 }
        }
      };
      this.setOptions({
        intlService,
        formatPlaceholder,
        format,
        cycleTime,
        twoDigitYearMax,
        value,
        autoCorrectParts,
        toggleDayPeriod
      });
      if (!value) {
        this._value = this.getDefaultDate();
        var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
        for (var i11 = 0; i11 < sampleFormat.length; i11++) {
          this.setExisting(sampleFormat[i11], false);
        }
      } else {
        this._value = cloneDate(value);
      }
    }
    Object.defineProperty(DateObject2.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(value) {
        if (value && !(value instanceof Date)) {
          return;
        }
        this._value = value;
        this.resetInvalidDate();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateObject2.prototype, "localeId", {
      get: function() {
        var localeId = Constants.defaultLocaleId;
        var cldrKeys = Object.keys(this.intl.cldr);
        for (var i11 = 0; i11 < cldrKeys.length; i11++) {
          var key = cldrKeys[i11];
          var value = this.intl.cldr[key];
          if (value.name && value.calendar && value.numbers && value.name !== Constants.defaultLocaleId) {
            localeId = value.name;
            break;
          }
        }
        return localeId;
      },
      enumerable: false,
      configurable: true
    });
    DateObject2.prototype.setOptions = function(options) {
      this.intl = options.intlService;
      this.formatPlaceholder = options.formatPlaceholder || "wide";
      this.format = options.format;
      this.cycleTime = options.cycleTime;
      this.monthNames = this.allFormattedMonths(this.localeId);
      this.dayPeriods = this.allDayPeriods(this.localeId);
      this.twoDigitYearMax = options.twoDigitYearMax;
      this.autoCorrectParts = options.autoCorrectParts;
      this.toggleDayPeriod = options.toggleDayPeriod;
    };
    DateObject2.prototype.setValue = function(value) {
      if (!value) {
        this._value = this.getDefaultDate();
        this.modifyExisting(false);
      } else if (!isEqual(value, this._value)) {
        this._value = cloneDate(value);
        this.modifyExisting(true);
      }
      this.resetInvalidDate();
    };
    DateObject2.prototype.hasValue = function() {
      var _this = this;
      var pred = function(a23, p11) {
        return a23 || p11.type !== "literal" && p11.type !== "dayperiod" && _this.getExisting(p11.pattern[0]);
      };
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(pred, false);
    };
    DateObject2.prototype.getValue = function() {
      for (var i11 = 0; i11 < this.knownParts.length; i11++) {
        if (!this.getExisting(this.knownParts[i11])) {
          return null;
        }
      }
      return cloneDate(this.value);
    };
    DateObject2.prototype.createDefaultDate = function() {
      return createDate(DEFAULT_LEAP_YEAR, 0, 31);
    };
    DateObject2.prototype.getDefaultDate = function() {
      return getDate(this.createDefaultDate());
    };
    DateObject2.prototype.getFormattedDate = function(format) {
      return this.intl.formatDate(this.getValue(), format, this.localeId);
    };
    DateObject2.prototype.getTextAndFormat = function(customFormat) {
      if (customFormat === void 0) {
        customFormat = "";
      }
      var format = customFormat || this.format;
      var text = this.intl.formatDate(this.value, format, this.localeId);
      var mask = this.dateFormatString(this.value, format);
      if (!this.autoCorrectParts && this._partiallyInvalidDate.startDate) {
        var partiallyInvalidText = "";
        var formattedDate = this.intl.formatDate(this.value, format, this.localeId);
        var formattedDates = this.getFormattedInvalidDates(format);
        for (var i11 = 0; i11 < formattedDate.length; i11++) {
          var symbol = mask.symbols[i11];
          if (mask.partMap[i11].type === "literal") {
            partiallyInvalidText += text[i11];
          } else if (this.getInvalidDatePartValue(symbol)) {
            var partsForSegment = this.getPartsForSegment(mask, i11);
            if (symbol === "M") {
              var datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
              if (partsForSegment.length > MONTH_PART_WITH_WORDS_THRESHOLD) {
                partiallyInvalidText += formattedDates[symbol][i11];
              } else {
                if (this.getInvalidDatePartValue(symbol)) {
                  var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                  partiallyInvalidText += formattedDatePart;
                  i11 += partsForSegment.length - 1;
                } else {
                  partiallyInvalidText += formattedDates[symbol][i11];
                }
              }
            } else {
              if (this.getInvalidDatePartValue(symbol)) {
                var datePartText = this.getInvalidDatePartValue(symbol).toString();
                var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                partiallyInvalidText += formattedDatePart;
                i11 += partsForSegment.length - 1;
              } else {
                partiallyInvalidText += formattedDates[symbol][i11];
              }
            }
          } else {
            partiallyInvalidText += text[i11];
          }
        }
        text = partiallyInvalidText;
      }
      var result = this.merge(text, mask);
      return result;
    };
    DateObject2.prototype.getFormattedInvalidDates = function(customFormat) {
      var _this = this;
      if (customFormat === void 0) {
        customFormat = "";
      }
      var format = customFormat || this.format;
      var formattedDatesForSymbol = {
        "E": "",
        "H": "",
        "M": "",
        "a": "",
        "d": "",
        "h": "",
        "m": "",
        "s": "",
        "y": "",
        "S": ""
      };
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        var date = _this.getInvalidDatePart(key).date;
        if (date) {
          var formattedInvalidDate = _this.intl.formatDate(date, format, _this.localeId);
          formattedDatesForSymbol[key] = formattedInvalidDate;
        }
      });
      return formattedDatesForSymbol;
    };
    DateObject2.prototype.modifyExisting = function(value) {
      var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
      for (var i11 = 0; i11 < sampleFormat.length; i11++) {
        this.setExisting(sampleFormat[i11], value);
      }
    };
    DateObject2.prototype.getExisting = function(symbol) {
      switch (symbol) {
        case "y":
          return this.year;
        case "M":
        case "L":
          return this.month;
        case "d":
          return this.date;
        case "E":
          return this.date && this.month && this.year;
        case "h":
        case "H":
          return this.hours;
        case "t":
        case "a":
          return this.dayperiod;
        case "m":
          return this.minutes;
        case "s":
          return this.seconds;
        case "S":
          return this.milliseconds;
        default:
          return true;
      }
    };
    DateObject2.prototype.setExisting = function(symbol, value) {
      switch (symbol) {
        case "y":
          this.year = value;
          if (value === false) {
            this._value.setFullYear(DEFAULT_LEAP_YEAR);
          }
          break;
        case "M":
          this.month = value;
          if (value === false) {
            if (this.autoCorrectParts) {
              this._value.setMonth(0);
            }
          }
          break;
        case "d":
          this.date = value;
          break;
        case "h":
        case "H":
          this.hours = value;
          break;
        case "t":
        case "a":
          this.dayperiod = value;
          break;
        case "m":
          this.minutes = value;
          break;
        case "s":
          this.seconds = value;
          break;
        case "S":
          this.milliseconds = value;
          break;
        default:
          break;
      }
      if (this.getValue()) {
        this.resetInvalidDate();
      }
    };
    DateObject2.prototype.modifyPart = function(symbol, offset2) {
      if (!isPresent(symbol) || !isPresent(offset2) || offset2 === 0) {
        return;
      }
      var newValue = cloneDate(this.value);
      var timeModified = false;
      var invalidDateFound;
      var isMonth = symbol === "M";
      var isDay = symbol === "d" || symbol === "E";
      var symbolExists = this.getExisting(symbol);
      if (!this.autoCorrectParts && (isDay || isMonth)) {
        var invalidDateParts = this._partiallyInvalidDate.invalidDateParts || {};
        var invalidDatePartValue = this.getInvalidDatePartValue(symbol);
        var year = invalidDateParts.y.value || newValue.getFullYear();
        var month = invalidDateParts.M.value || newValue.getMonth();
        var day = invalidDateParts.d.value || invalidDateParts.E.value || newValue.getDate();
        var hour = invalidDateParts.h.value || invalidDateParts.H.value || newValue.getHours();
        var minutes = invalidDateParts.m.value || newValue.getMinutes();
        var seconds = invalidDateParts.s.value || newValue.getSeconds();
        var milliseconds = invalidDateParts.S.value || newValue.getMilliseconds();
        switch (symbol) {
          case "y":
            year += offset2;
            break;
          case "M":
            month += offset2;
            break;
          case "d":
          case "E":
            day += offset2;
            break;
          // case 'h':
          // case 'H': hour += offset; break;
          // case 'm': minutes += offset; break;
          // case 's': seconds += offset; break;
          // case 'S': milliseconds += offset; break;
          default:
            break;
        }
        if (symbol === "M") {
          if (month < 0 || month > 11) {
            if (symbolExists) {
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return;
            }
          }
          if (!symbolExists) {
            if (month < 0) {
              month = clamp(11 + (month % 11 + 1), 0, 11);
            } else {
              var monthValue = isPresent(invalidDatePartValue) ? month : (offset2 - JS_MONTH_OFFSET) % 12;
              month = clamp(monthValue, 0, 11);
            }
            month = clamp(month, 0, 11);
          }
          month = clamp(month, 0, 11);
        } else if (symbol === "d") {
          if (symbolExists) {
            if (day <= 0 || day > 31) {
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return;
            }
          } else if (!symbolExists) {
            if (isPresent(invalidDatePartValue)) {
              if (day <= 0 || day > 31) {
                this.setExisting(symbol, false);
                this.resetInvalidDateSymbol(symbol);
                return;
              }
            }
            if (offset2 < 0) {
              var dayValue = isPresent(invalidDatePartValue) ? day : 1 + (31 - Math.abs(offset2 % 31));
              day = clamp(dayValue, 1, 31);
            } else {
              var dayValue = isPresent(invalidDatePartValue) ? day : offset2 % 31;
              day = clamp(dayValue, 1, 31);
            }
            day = clamp(day, 1, 31);
          }
        }
        var dateCandidate = createDate(year, month, day, hour, minutes, seconds, milliseconds);
        var newValueCandidate = isMonth || isDay ? this.modifyDateSymbolWithValue(newValue, symbol, isMonth ? month : day) : null;
        var dateCandidateExists = areDatePartsEqualTo(dateCandidate, year, month, day, hour, minutes, seconds, milliseconds);
        if (this.getValue() && areDatePartsEqualTo(dateCandidate, year, month, day, hour, minutes, seconds, milliseconds)) {
          newValue = cloneDate(dateCandidate);
          this.markDatePartsAsExisting();
        } else if (isMonth && newValueCandidate) {
          if (newValueCandidate.getMonth() === month) {
            if (this.getExisting("d")) {
              if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
              } else {
                invalidDateFound = true;
                this.setInvalidDatePart(symbol, {
                  value: month,
                  date: cloneDate(newValueCandidate),
                  startDateOffset: offset2,
                  startDate: cloneDate(this.value)
                });
                this.setExisting(symbol, false);
              }
            } else if (dateCandidateExists) {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(dateCandidate);
              if (this.getExisting("M") && this.getExisting("y")) {
                this.setExisting("d", true);
                this.resetInvalidDateSymbol("d");
              }
            } else {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(newValueCandidate);
            }
          } else {
            invalidDateFound = true;
            this.setInvalidDatePart(symbol, {
              value: month,
              date: cloneDate(newValueCandidate),
              startDateOffset: offset2,
              startDate: cloneDate(this.value)
            });
            this.setExisting(symbol, false);
          }
        } else if (isDay && newValueCandidate) {
          if (newValueCandidate.getDate() === day) {
            if (this.getExisting("M")) {
              if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
              } else {
                invalidDateFound = true;
                this.setInvalidDatePart(symbol, {
                  value: day,
                  date: cloneDate(newValueCandidate),
                  startDateOffset: offset2,
                  startDate: cloneDate(this.value)
                });
                this.setExisting(symbol, false);
              }
            } else if (dateCandidateExists) {
              newValue = cloneDate(dateCandidate);
              this.resetInvalidDateSymbol(symbol);
              if (this.getExisting("d") && this.getExisting("y")) {
                this.setExisting("M", true);
                this.resetInvalidDateSymbol("M");
              }
            } else {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(newValueCandidate);
            }
          } else {
            invalidDateFound = true;
            this.setInvalidDatePart(symbol, {
              value: day,
              date: cloneDate(this.value),
              startDateOffset: offset2,
              startDate: cloneDate(this.value)
            });
            this.setExisting(symbol, false);
          }
        }
      } else {
        var hours = newValue.getHours();
        switch (symbol) {
          case "y":
            newValue.setFullYear(newValue.getFullYear() + offset2);
            break;
          case "M":
            newValue = addMonths(this.value, offset2);
            break;
          case "d":
          case "E":
            newValue.setDate(newValue.getDate() + offset2);
            break;
          case "h":
          case "H":
            newValue.setHours(newValue.getHours() + offset2);
            timeModified = true;
            break;
          case "m":
            newValue.setMinutes(newValue.getMinutes() + offset2);
            timeModified = true;
            break;
          case "s":
            newValue.setSeconds(newValue.getSeconds() + offset2);
            timeModified = true;
            break;
          case "S":
            newValue.setMilliseconds(newValue.getMilliseconds() + offset2);
            break;
          case "a":
            if (this.toggleDayPeriod) {
              newValue.setHours(hours >= 12 ? hours - 12 : hours + 12);
            } else {
              newValue.setHours(newValue.getHours() + 12 * offset2);
            }
            timeModified = true;
            break;
          default:
            break;
        }
      }
      if (this.shouldNormalizeCentury()) {
        newValue = this.normalizeCentury(newValue);
      }
      if (timeModified && !this.cycleTime && newValue.getDate() !== this._value.getDate()) {
      }
      if (!invalidDateFound) {
        this.setExisting(symbol, true);
        this._value = newValue;
        if (this.getValue()) {
          this.resetInvalidDate();
        }
      }
    };
    DateObject2.prototype.parsePart = function(_a2) {
      var symbol = _a2.symbol, currentChar = _a2.currentChar, resetSegmentValue = _a2.resetSegmentValue, cycleSegmentValue = _a2.cycleSegmentValue, rawInputValue = _a2.rawTextValue, isDeleting = _a2.isDeleting, originalFormat = _a2.originalFormat;
      var isInCaretMode = !cycleSegmentValue;
      var dateParts = this.dateFormatString(this.value, this.format);
      var datePartsLiterals = dateParts.partMap.filter(function(x6) {
        return x6.type === "literal";
      }).map(function(x6, index) {
        return {
          datePartIndex: index,
          type: x6.type,
          pattern: x6.pattern,
          literal: ""
        };
      });
      var flatDateParts = dateParts.partMap.map(function(x6) {
        return {
          type: x6.type,
          pattern: x6.pattern,
          text: ""
        };
      });
      for (var i11 = 0; i11 < datePartsLiterals.length; i11++) {
        var datePart = datePartsLiterals[i11];
        for (var j3 = 0; j3 < datePart.pattern.length; j3++) {
          if (datePartsLiterals[i11 + j3]) {
            datePartsLiterals[i11 + j3].literal = datePart.pattern[j3];
          }
        }
        i11 += datePart.pattern.length - 1;
      }
      for (var i11 = 0; i11 < flatDateParts.length; i11++) {
        var datePart = flatDateParts[i11];
        for (var j3 = 0; j3 < datePart.pattern.length; j3++) {
          if (flatDateParts[i11 + j3]) {
            flatDateParts[i11 + j3].text = datePart.pattern[j3];
          }
        }
        i11 += datePart.pattern.length - 1;
      }
      var shouldResetPart = isInCaretMode && symbol === "M" && dateParts.partMap.filter(function(x6) {
        return x6.type === "month";
      }).some(function(x6) {
        return x6.pattern.length > MONTH_PART_WITH_WORDS_THRESHOLD;
      });
      var parseResult = {
        value: null,
        switchToNext: false,
        resetPart: shouldResetPart,
        hasInvalidDatePart: false
      };
      if (!currentChar) {
        if (isInCaretMode) {
          for (var i11 = 0; i11 < datePartsLiterals.length; i11++) {
            var literal = datePartsLiterals[i11].literal;
            var rawValueStartsWithLiteral = rawInputValue.startsWith(literal);
            var rawValueEndsWithLiteral = rawInputValue.endsWith(literal);
            var rawValueHasConsecutiveLiterals = rawInputValue.indexOf(literal + literal) >= 0;
            if (rawValueStartsWithLiteral || rawValueEndsWithLiteral || rawValueHasConsecutiveLiterals) {
              this.resetLeadingZero();
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return extend(parseResult, { value: null, switchToNext: false });
            }
          }
        } else {
          this.resetLeadingZero();
          this.setExisting(symbol, false);
          this.resetInvalidDateSymbol(symbol);
          return extend(parseResult, { value: null, switchToNext: false });
        }
      }
      var baseDate = this.intl.formatDate(this.value, this.format, this.localeId);
      var baseFormat = dateParts.symbols;
      var replaced = false;
      var prefix = "";
      var current = "";
      var datePartText = "";
      var basePrefix = "";
      var baseSuffix = "";
      var suffix = "";
      var convertedBaseFormat = "";
      for (var i11 = 0; i11 < flatDateParts.length; i11++) {
        convertedBaseFormat += flatDateParts[i11].text;
      }
      var hasFixedFormat = this.format === baseFormat || this.format === convertedBaseFormat || this.format === originalFormat || this.format.length === originalFormat.length;
      var datePartStartIndex = (hasFixedFormat ? convertedBaseFormat : originalFormat).indexOf(symbol);
      var datePartEndIndex = (hasFixedFormat ? convertedBaseFormat : originalFormat).lastIndexOf(symbol);
      var segmentLength = datePartEndIndex - datePartStartIndex + 1;
      var formatToTextLengthDiff = originalFormat.length - rawInputValue.length;
      if (isInCaretMode || !isInCaretMode && !this.autoCorrectParts) {
        for (var i11 = 0; i11 < baseDate.length; i11++) {
          if (baseFormat[i11] === symbol) {
            var existing = this.getExisting(symbol);
            current += existing ? baseDate[i11] : "0";
            if (formatToTextLengthDiff > 0) {
              if (datePartText.length + formatToTextLengthDiff < segmentLength) {
                datePartText += rawInputValue[i11] || "";
              }
            } else {
              datePartText += rawInputValue[i11] || "";
            }
            replaced = true;
          } else if (!replaced) {
            prefix += baseDate[i11];
            basePrefix += baseDate[i11];
          } else {
            suffix += baseDate[i11];
            baseSuffix += baseDate[i11];
          }
        }
        if (hasFixedFormat) {
          if (convertedBaseFormat.length < rawInputValue.length) {
            datePartText += currentChar;
          } else if (!isDeleting && originalFormat.length > rawInputValue.length) {
          }
          if (datePartText.length > segmentLength) {
            return extend(parseResult, { value: null, switchToNext: false });
          }
        }
        if (!hasFixedFormat || hasFixedFormat && !this.autoCorrectParts) {
          current = "";
          datePartText = "";
          prefix = "";
          suffix = "";
          replaced = false;
          for (var i11 = 0; i11 < originalFormat.length; i11++) {
            if (originalFormat[i11] === symbol) {
              var existing = this.getExisting(symbol);
              current += existing ? baseDate[i11] || "" : "0";
              if (formatToTextLengthDiff > 0) {
                if (datePartText.length + formatToTextLengthDiff < segmentLength) {
                  datePartText += rawInputValue[i11] || "";
                }
              } else {
                datePartText += rawInputValue[i11] || "";
              }
              replaced = true;
            } else if (!replaced) {
              prefix += rawInputValue[i11] || "";
            } else {
              suffix += rawInputValue[i11 - formatToTextLengthDiff] || "";
            }
          }
          if (originalFormat.length < rawInputValue.length) {
            datePartText += currentChar;
          }
        }
      }
      if (!isInCaretMode) {
        if (this.autoCorrectParts) {
          current = "";
          datePartText = "";
          prefix = "";
          suffix = "";
          replaced = false;
          for (var i11 = 0; i11 < baseDate.length; i11++) {
            if (baseFormat[i11] === symbol) {
              var existing = this.getExisting(symbol);
              current += existing ? baseDate[i11] : "0";
              replaced = true;
            } else if (!replaced) {
              prefix += baseDate[i11];
            } else {
              suffix += baseDate[i11];
            }
          }
        } else {
          current = resetSegmentValue ? datePartText : current;
        }
      }
      var parsedDate = null;
      var month = this.matchMonth(currentChar);
      var dayPeriod = this.matchDayPeriod(currentChar, symbol);
      var isZeroCurrentChar = currentChar === "0";
      var leadingZero = this.leadingZero || {};
      if (isZeroCurrentChar) {
        if (datePartText === "0") {
          datePartText = current;
        }
        var valueNumber = parseToInt(resetSegmentValue ? currentChar : (isInCaretMode ? datePartText : current) + currentChar);
        if (valueNumber === 0 && !this.isAbbrMonth(dateParts.partMap, symbol) && symbol !== "a") {
          this.incrementLeadingZero(symbol);
        }
      } else {
        this.resetLeadingZero();
      }
      var partPattern = this.partPattern(dateParts.partMap, symbol);
      var patternValue = partPattern ? partPattern.pattern : null;
      var patternLength = this.patternLength(patternValue) || patternValue.length;
      if (isInCaretMode) {
        if (isDeleting && !datePartText) {
          this.setExisting(symbol, false);
          return extend(parseResult, { value: null, switchToNext: false });
        }
      }
      var currentMaxLength = current.length - 3;
      var tryParse = true;
      var middle = isInCaretMode ? datePartText : current;
      for (var i11 = Math.max(0, currentMaxLength); i11 <= current.length; i11++) {
        if (!tryParse) {
          break;
        }
        middle = resetSegmentValue ? currentChar : isInCaretMode ? datePartText : current.substring(i11) + currentChar;
        if (isInCaretMode || !this.autoCorrectParts) {
          tryParse = false;
          middle = unpadZero(middle);
          middle = padZero(patternLength - middle.length) + middle;
        }
        var middleNumber = parseInt(middle, 10);
        var candidateDateString = prefix + middle + suffix;
        parsedDate = this.intl.parseDate(candidateDateString, this.format, this.localeId);
        if (parsedDate && this.value && dateParts.partMap.every(function(x6) {
          return x6.type !== "year" && x6.type !== "month" && x6.type != "day";
        })) {
          parsedDate.setFullYear(this.value.getFullYear());
          parsedDate.setMonth(this.value.getMonth());
          parsedDate.setDate(this.value.getDate());
        }
        var autoCorrectedPrefixAndSuffix = false;
        if (isInCaretMode && !isValidDate(parsedDate)) {
          if (this.autoCorrectParts) {
            parsedDate = this.intl.parseDate(basePrefix + middle + baseSuffix, this.format, this.localeId);
            autoCorrectedPrefixAndSuffix = true;
          }
        }
        var isCurrentCharParsable = !isNaN(parseInt(currentChar, 10)) || isInCaretMode && isDeleting && currentChar === "";
        if (!parsedDate && !isNaN(middleNumber) && isCurrentCharParsable && this.autoCorrectParts) {
          if (symbol === MONTH_SYMBOL && !month) {
            var monthNumber = middleNumber - JS_MONTH_OFFSET;
            if (monthNumber > -1 && monthNumber < 12) {
              parsedDate = cloneDate(this.value);
              parsedDate.setMonth(monthNumber);
              if (parsedDate.getMonth() !== monthNumber) {
                parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
              }
            }
          }
          if (symbol === "y") {
            parsedDate = createDate(parseInt(middle, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0);
            if ((isInCaretMode && isValidDate(parsedDate) || !isInCaretMode && parsedDate) && this.date && parsedDate.getDate() !== this.value.getDate()) {
              parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
            }
          }
        }
        if (isInCaretMode && isValidDate(parsedDate) || !isInCaretMode && parsedDate) {
          var peekResult = this.isPeekDateOverflowingDatePart({
            useBasePrefixAndSuffix: autoCorrectedPrefixAndSuffix,
            middle,
            patternValue,
            basePrefix,
            baseSuffix,
            prefix,
            suffix,
            symbol,
            patternLength,
            leadingZero
          });
          var switchToNext = peekResult.switchToNext;
          if (this.shouldNormalizeCentury()) {
            parsedDate = this.normalizeCentury(parsedDate);
          }
          if (symbol === "H" && parsedDate.getHours() >= 12) {
            this.setExisting("a", true);
          }
          this._value = parsedDate;
          this.setExisting(symbol, true);
          this.resetInvalidDateSymbol(symbol);
          if (!this.autoCorrectParts) {
            if (symbol === "M") {
              if (this.getExisting("M") && this.getExisting("y")) {
                this.setExisting("d", true);
                this.resetInvalidDateSymbol("d");
              }
            } else if (symbol === "d") {
              if (this.getExisting("d") && this.getExisting("y")) {
                this.setExisting("M", true);
                this.resetInvalidDateSymbol("M");
              }
            }
            if (!this.hasInvalidDatePart()) {
              this.markDatePartsAsExisting();
              if (!peekResult.peekedDate && peekResult.switchToNext && !this.autoCorrectParts) {
                if (symbol === "M") {
                } else if (symbol === "d") {
                  if (peekResult.parsedPeekedValue === 30 && this.value.getMonth() === MONTH_INDEX_FEBRUARY) {
                    switchToNext = false;
                  }
                }
              }
            }
          }
          return extend(parseResult, { value: this.value, switchToNext });
        }
      }
      if (month) {
        parsedDate = this.intl.parseDate(prefix + month + suffix, this.format, this.localeId);
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return extend(parseResult, { value: this.value, switchToNext: false });
        }
      }
      if (dayPeriod) {
        parsedDate = this.intl.parseDate(prefix + dayPeriod + suffix, this.format) || this.intl.parseDate(basePrefix + dayPeriod + baseSuffix, this.format);
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return extend(parseResult, { value: this.value, switchToNext: true });
        }
      }
      if (isZeroCurrentChar && symbol !== "a") {
        this.setExisting(symbol, false);
      }
      if (!this.autoCorrectParts) {
        var datePartValue = void 0;
        var textToParse = isInCaretMode ? datePartText : middle;
        var parsedValue = parseToInt(textToParse);
        if (isNumber(parsedValue) && isParseableToInt(textToParse)) {
          if (symbol === "d" && (parsedValue <= 0 || parsedValue > 31) || symbol === "M" && (parsedValue <= 0 || parsedValue > 11)) {
            if (isInCaretMode) {
              return extend(parseResult, {
                value: null,
                switchToNext: false
              });
            } else {
              textToParse = currentChar;
              parsedValue = parseToInt(textToParse);
            }
          }
          if (!isNumber(parsedValue) || !isParseableToInt(textToParse)) {
            return extend(parseResult, { value: null, switchToNext: false });
          }
          datePartValue = symbol === "M" ? parsedValue - JS_MONTH_OFFSET : parsedValue;
          var isMonth = symbol === "M";
          var isDay = symbol === "d";
          var newValue = cloneDate(this._value);
          var invalidDateParts = this._partiallyInvalidDate.invalidDateParts || {};
          var year = invalidDateParts.y.value || newValue.getFullYear();
          var month_1 = isMonth ? datePartValue : invalidDateParts.M.value || newValue.getMonth();
          var day = isDay ? datePartValue : invalidDateParts.d.value || invalidDateParts.E.value || newValue.getDate();
          var hour = invalidDateParts.h.value || invalidDateParts.H.value || newValue.getHours();
          var minutes = invalidDateParts.m.value || newValue.getMinutes();
          var seconds = invalidDateParts.s.value || newValue.getSeconds();
          var milliseconds = invalidDateParts.S.value || newValue.getMilliseconds();
          var dateCandidate = createDate(year, month_1, day, hour, minutes, seconds, milliseconds);
          var dateCandidateExists = areDatePartsEqualTo(dateCandidate, year, month_1, day, hour, minutes, seconds, milliseconds);
          var newValueCandidate = isMonth || isDay ? this.modifyDateSymbolWithValue(newValue, symbol, isMonth ? month_1 : day) : null;
          var invalidDateFound = false;
          if (isMonth && newValueCandidate) {
            if (newValueCandidate.getMonth() === month_1) {
              if (this.getExisting("d")) {
                if (dateCandidateExists) {
                  newValue = cloneDate(dateCandidate);
                  this.resetInvalidDateSymbol(symbol);
                } else {
                  invalidDateFound = true;
                  this.setInvalidDatePart(symbol, {
                    value: month_1,
                    date: cloneDate(newValueCandidate),
                    startDate: cloneDate(this.value)
                  });
                  this.setExisting(symbol, false);
                }
              } else if (dateCandidateExists) {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(dateCandidate);
                if (this.getExisting("M") && this.getExisting("y")) {
                  this.setExisting("d", true);
                  this.resetInvalidDateSymbol("d");
                }
              } else {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(newValueCandidate);
              }
            } else {
              invalidDateFound = true;
              this.setInvalidDatePart(symbol, {
                value: month_1,
                date: cloneDate(newValueCandidate),
                startDate: cloneDate(this.value)
              });
              this.setExisting(symbol, false);
            }
          } else if (isDay && newValueCandidate) {
            if (newValueCandidate.getDate() === day) {
              if (this.getExisting("M")) {
                if (dateCandidateExists) {
                  newValue = cloneDate(dateCandidate);
                  this.resetInvalidDateSymbol(symbol);
                } else {
                  invalidDateFound = true;
                  this.setInvalidDatePart(symbol, {
                    value: day,
                    date: cloneDate(newValueCandidate),
                    startDate: cloneDate(this.value)
                  });
                  this.setExisting(symbol, false);
                }
              } else if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
                if (this.getExisting("d") && this.getExisting("y")) {
                  this.setExisting("M", true);
                  this.resetInvalidDateSymbol("M");
                }
              } else {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(newValueCandidate);
              }
            } else {
              invalidDateFound = true;
              this.setInvalidDatePart(symbol, {
                value: day,
                date: cloneDate(this.value),
                startDate: cloneDate(this.value)
              });
              this.setExisting(symbol, false);
            }
          }
          if (!invalidDateFound) {
            this.setExisting(symbol, true);
            if (isInCaretMode && !isValidDate(parsedDate)) {
              var valueCandidate = this.intl.parseDate(basePrefix + middle + baseSuffix, this.format, this.localeId);
              if (isValidDate(valueCandidate)) {
                this._value = valueCandidate;
              }
            } else {
              this._value = newValue;
            }
            if (this.getValue()) {
              this.resetInvalidDate();
            }
          }
          var switchToNext = false;
          if (symbol === "M") {
            if (parsedValue >= 2 || textToParse.length >= 2) {
              switchToNext = true;
            } else {
              switchToNext = false;
            }
          } else {
            if (hasFixedFormat) {
              var peekDateSwitchToNext = this.isPeekDateOverflowingDatePart({
                useBasePrefixAndSuffix: !this.autoCorrectParts,
                middle,
                patternValue,
                basePrefix,
                baseSuffix,
                prefix,
                suffix,
                symbol,
                patternLength,
                leadingZero
              }).switchToNext;
              switchToNext = peekDateSwitchToNext;
            } else {
              switchToNext = textToParse.length > segmentLength;
            }
          }
          return extend(parseResult, {
            value: null,
            switchToNext,
            hasInvalidDatePart: invalidDateFound
          });
        }
      }
      return extend(parseResult, { value: null, switchToNext: false });
    };
    DateObject2.prototype.symbolMap = function(symbol) {
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(dateSymbolMap, {})[symbol];
    };
    DateObject2.prototype.resetLeadingZero = function() {
      var hasLeadingZero = this.leadingZero !== null;
      this.setLeadingZero(null);
      return hasLeadingZero;
    };
    DateObject2.prototype.setLeadingZero = function(leadingZero) {
      this.leadingZero = leadingZero;
    };
    DateObject2.prototype.getLeadingZero = function() {
      return this.leadingZero || {};
    };
    DateObject2.prototype.normalizeCentury = function(date) {
      if (!isPresent(date)) {
        return date;
      }
      var twoDigitYear = cropTwoDigitYear(date);
      var centuryBase = this.getNormalizedCenturyBase(twoDigitYear);
      var normalizedDate = setYears(date, centuryBase + twoDigitYear);
      return normalizedDate;
    };
    DateObject2.prototype.incrementLeadingZero = function(symbol) {
      var leadingZero = this.leadingZero || {};
      leadingZero[symbol] = (leadingZero[symbol] || 0) + 1;
      this.leadingZero = leadingZero;
    };
    DateObject2.prototype.isAbbrMonth = function(parts, symbol) {
      var pattern = this.partPattern(parts, symbol);
      return pattern.type === "month" && pattern.names;
    };
    DateObject2.prototype.partPattern = function(parts, symbol) {
      return parts.filter(function(part) {
        return part.pattern.indexOf(symbol) !== -1;
      })[0];
    };
    DateObject2.prototype.peek = function(value, pattern) {
      var peekValue = value.replace(/^0*/, "") + "0";
      return padZero(pattern.length - peekValue.length) + peekValue;
    };
    DateObject2.prototype.matchMonth = function(typedChar) {
      this.typedMonthPart += typedChar.toLowerCase();
      if (this.monthNames.length === 0) {
        return "";
      }
      while (this.typedMonthPart.length > 0) {
        for (var i11 = 0; i11 < this.monthNames.length; i11++) {
          if (this.monthNames[i11].toLowerCase().indexOf(this.typedMonthPart) === 0) {
            return this.monthNames[i11];
          }
        }
        var monthAsNum = parseInt(this.typedMonthPart, 10);
        if (monthAsNum >= 1 && monthAsNum <= 12 && monthAsNum.toString() === this.typedMonthPart) {
          return this.monthNames[monthAsNum - 1];
        }
        this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
      }
      return "";
    };
    DateObject2.prototype.matchDayPeriod = function(typedChar, symbol) {
      var lowerChart = typedChar.toLowerCase();
      if (symbol === "a" && this.dayPeriods) {
        if (this.dayPeriods.am.toLowerCase().startsWith(lowerChart)) {
          return this.dayPeriods.am;
        } else if (this.dayPeriods.pm.toLowerCase().startsWith(lowerChart)) {
          return this.dayPeriods.pm;
        }
      }
      return "";
    };
    DateObject2.prototype.allFormattedMonths = function(locale) {
      if (locale === void 0) {
        locale = "en";
      }
      var dateFormatParts = this.intl.splitDateFormat(this.format, this.localeId);
      for (var i11 = 0; i11 < dateFormatParts.length; i11++) {
        if (dateFormatParts[i11].type === "month" && dateFormatParts[i11].names) {
          return this.intl.dateFormatNames(locale, dateFormatParts[i11].names);
        }
      }
      return [];
    };
    DateObject2.prototype.allDayPeriods = function(locale) {
      if (locale === void 0) {
        locale = "en";
      }
      var dateFormatParts = this.intl.splitDateFormat(this.format);
      for (var i11 = 0; i11 < dateFormatParts.length; i11++) {
        if (dateFormatParts[i11].type === "dayperiod" && dateFormatParts[i11].names) {
          return this.intl.dateFormatNames(locale, dateFormatParts[i11].names);
        }
      }
      return null;
    };
    DateObject2.prototype.patternLength = function(pattern) {
      if (pattern[0] === "y") {
        return 4;
      }
      if (SHORT_PATTERN_LENGTH_REGEXP.test(pattern)) {
        return 2;
      }
      return 0;
    };
    DateObject2.prototype.dateFormatString = function(date, format) {
      var dateFormatParts = this.intl.splitDateFormat(format, this.localeId);
      var parts = [];
      var partMap = [];
      for (var i11 = 0; i11 < dateFormatParts.length; i11++) {
        var partLength = this.intl.formatDate(date, { pattern: dateFormatParts[i11].pattern }, this.localeId).length;
        while (partLength > 0) {
          parts.push(this.symbols[dateFormatParts[i11].pattern[0]] || Constants.formatSeparator);
          partMap.push(dateFormatParts[i11]);
          partLength--;
        }
      }
      var returnValue = new Mask();
      returnValue.symbols = parts.join("");
      returnValue.partMap = partMap;
      return returnValue;
    };
    DateObject2.prototype.merge = function(text, mask) {
      var resultText = "";
      var resultFormat = "";
      var format = mask.symbols;
      var processTextSymbolsEnded = false;
      var ignoreFormatSymbolsCount = 0;
      var formattedDates = this.getFormattedInvalidDates(format);
      for (var formatSymbolIndex = format.length - 1; formatSymbolIndex >= 0; formatSymbolIndex--) {
        var partsForSegment = this.getPartsForSegment(mask, formatSymbolIndex);
        if (this.knownParts.indexOf(format[formatSymbolIndex]) === -1 || this.getExisting(format[formatSymbolIndex])) {
          if (this.autoCorrectParts) {
            resultText = text[formatSymbolIndex] + resultText;
          } else {
            if (text.length !== format.length) {
              if (processTextSymbolsEnded) {
                resultText = text[formatSymbolIndex] + resultText;
              } else if (ignoreFormatSymbolsCount > 0) {
                resultText = text[formatSymbolIndex] + resultText;
                ignoreFormatSymbolsCount--;
                if (ignoreFormatSymbolsCount <= 0) {
                  processTextSymbolsEnded = true;
                }
              } else {
                resultText = (text[formatSymbolIndex + text.length - format.length] || "") + resultText;
              }
            } else {
              resultText = text[formatSymbolIndex] + resultText;
            }
          }
          resultFormat = format[formatSymbolIndex] + resultFormat;
        } else {
          var symbol = format[formatSymbolIndex];
          var formatSymbolIndexModifier = 0;
          if (this.autoCorrectParts || !this.autoCorrectParts && !this.getInvalidDatePartValue(symbol)) {
            while (formatSymbolIndex >= 0 && symbol === format[formatSymbolIndex]) {
              formatSymbolIndex--;
            }
            formatSymbolIndex++;
          }
          if (this.leadingZero && this.leadingZero[symbol]) {
            resultText = "0" + resultText;
          } else {
            if (!this.autoCorrectParts && this.getInvalidDatePartValue(symbol)) {
              var datePartText = this.getInvalidDatePartValue(symbol).toString();
              if (symbol === "M") {
                datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
                if (partsForSegment.length > MONTH_PART_WITH_WORDS_THRESHOLD) {
                  resultText = formattedDates[symbol][formatSymbolIndex] + resultText;
                } else {
                  datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
                  var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                  resultText = formattedDatePart + resultText;
                  formatSymbolIndexModifier = partsForSegment.length - 1;
                  ignoreFormatSymbolsCount = datePartText.length - partsForSegment.length;
                }
              } else {
                var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                resultText = formattedDatePart + resultText;
                formatSymbolIndexModifier = partsForSegment.length - 1;
                ignoreFormatSymbolsCount = datePartText.length - partsForSegment.length;
              }
            } else {
              resultText = this.dateFieldName(mask.partMap[formatSymbolIndex]) + resultText;
            }
          }
          while (resultFormat.length < resultText.length) {
            resultFormat = format[formatSymbolIndex] + resultFormat;
          }
          if (formatSymbolIndexModifier !== 0) {
            formatSymbolIndex = formatSymbolIndex - formatSymbolIndexModifier + (text.length - format.length);
          }
        }
      }
      return { text: resultText, format: resultFormat };
    };
    DateObject2.prototype.dateFieldName = function(part) {
      var formatPlaceholder = this.formatPlaceholder || "wide";
      if (formatPlaceholder[part.type]) {
        return formatPlaceholder[part.type];
      }
      if (formatPlaceholder === "formatPattern") {
        return part.pattern;
      }
      return this.intl.dateFieldName(Object.assign(part, { nameType: formatPlaceholder }));
    };
    DateObject2.prototype.getNormalizedCenturyBase = function(twoDigitYear) {
      return twoDigitYear > this.twoDigitYearMax ? PREVIOUS_CENTURY_BASE : CURRENT_CENTURY_BASE;
    };
    DateObject2.prototype.shouldNormalizeCentury = function() {
      return this.intl.splitDateFormat(this.format).some(function(part) {
        return part.pattern === "yy";
      });
    };
    DateObject2.prototype.resetInvalidDate = function() {
      var _this = this;
      this._partiallyInvalidDate.startDate = null;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        _this.resetInvalidDatePart(key);
      });
    };
    DateObject2.prototype.resetInvalidDateSymbol = function(symbol) {
      var _this = this;
      this.resetInvalidDatePart(symbol);
      var shouldResetInvalidDate = true;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        if (_this._partiallyInvalidDate.invalidDateParts[key] && isPresent(_this._partiallyInvalidDate.invalidDateParts[key].value)) {
          shouldResetInvalidDate = false;
        }
      });
      if (shouldResetInvalidDate) {
        this.resetInvalidDate();
      }
    };
    DateObject2.prototype.resetInvalidDatePart = function(symbol) {
      if (this._partiallyInvalidDate.invalidDateParts[symbol]) {
        this._partiallyInvalidDate.invalidDateParts[symbol] = {
          value: null,
          date: null,
          startDateOffset: 0
        };
      }
    };
    DateObject2.prototype.getInvalidDatePart = function(symbol) {
      var invalidDatePart = this._partiallyInvalidDate.invalidDateParts[symbol];
      return invalidDatePart || {};
    };
    DateObject2.prototype.getInvalidDatePartValue = function(symbol) {
      var invalidDatePart = this._partiallyInvalidDate.invalidDateParts[symbol];
      return (invalidDatePart || {}).value;
    };
    DateObject2.prototype.setInvalidDatePart = function(symbol, _a2) {
      var _b = _a2.value, value = _b === void 0 ? null : _b, _c = _a2.date, date = _c === void 0 ? null : _c, _d = _a2.startDateOffset, startDateOffset = _d === void 0 ? 0 : _d, _e = _a2.startDate, startDate = _e === void 0 ? null : _e;
      if (this._partiallyInvalidDate.invalidDateParts[symbol]) {
        this._partiallyInvalidDate.invalidDateParts[symbol].value = value;
        this._partiallyInvalidDate.invalidDateParts[symbol].date = date;
        this._partiallyInvalidDate.invalidDateParts[symbol].startDateOffset = startDateOffset;
        this._partiallyInvalidDate.startDate = startDate;
      }
    };
    DateObject2.prototype.hasInvalidDatePart = function() {
      var _this = this;
      var hasInvalidDatePart = false;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        if (_this._partiallyInvalidDate.invalidDateParts[key] && isPresent(_this._partiallyInvalidDate.invalidDateParts[key].value)) {
          hasInvalidDatePart = true;
        }
      });
      return hasInvalidDatePart;
    };
    DateObject2.prototype.modifyDateSymbolWithOffset = function(date, symbol, offset2) {
      var newValue = cloneDate(date);
      var timeModified = false;
      switch (symbol) {
        case "y":
          newValue.setFullYear(newValue.getFullYear() + offset2);
          break;
        case "M":
          newValue = addMonths(this.value, offset2);
          break;
        case "d":
        case "E":
          newValue.setDate(newValue.getDate() + offset2);
          break;
        case "h":
        case "H":
          newValue.setHours(newValue.getHours() + offset2);
          timeModified = true;
          break;
        case "m":
          newValue.setMinutes(newValue.getMinutes() + offset2);
          timeModified = true;
          break;
        case "s":
          newValue.setSeconds(newValue.getSeconds() + offset2);
          timeModified = true;
          break;
        case "S":
          newValue.setMilliseconds(newValue.getMilliseconds() + offset2);
          break;
        case "a":
          newValue.setHours(newValue.getHours() + 12 * offset2);
          timeModified = true;
          break;
        default:
          break;
      }
      return {
        date: newValue,
        timeModified
      };
    };
    DateObject2.prototype.modifyDateSymbolWithValue = function(date, symbol, value) {
      var newValue = cloneDate(date);
      switch (symbol) {
        case "y":
          newValue.setFullYear(value);
          break;
        case "M":
          newValue = addMonths(date, value - date.getMonth());
          break;
        case "d":
        case "E":
          newValue.setDate(value);
          break;
        case "h":
        case "H":
          newValue.setHours(value);
          break;
        case "m":
          newValue.setMinutes(value);
          break;
        case "s":
          newValue.setSeconds(value);
          break;
        case "S":
          newValue.setMilliseconds(value);
          break;
        case "a":
          newValue.setHours(value);
          break;
        default:
          break;
      }
      return newValue;
    };
    DateObject2.prototype.markDatePartsAsExisting = function() {
      this.modifyExisting(true);
    };
    DateObject2.prototype.getPartsForSegment = function(mask, partIndex) {
      var segmentPart = mask.partMap[partIndex];
      var partsForSegment = [];
      for (var maskPartIndex = partIndex; maskPartIndex < mask.partMap.length; maskPartIndex++) {
        var part = mask.partMap[maskPartIndex];
        if (segmentPart.type === part.type && segmentPart.pattern === part.pattern) {
          partsForSegment.push(part);
        } else {
          break;
        }
      }
      for (var maskPartIndex = partIndex - 1; maskPartIndex >= 0; maskPartIndex--) {
        var part = mask.partMap[maskPartIndex];
        if (segmentPart.type === part.type && segmentPart.pattern === part.pattern) {
          partsForSegment.unshift(part);
        } else {
          break;
        }
      }
      return partsForSegment;
    };
    DateObject2.prototype.isPeekDateOverflowingDatePart = function(_a2) {
      var useBasePrefixAndSuffix = _a2.useBasePrefixAndSuffix, middle = _a2.middle, patternValue = _a2.patternValue, basePrefix = _a2.basePrefix, baseSuffix = _a2.baseSuffix, prefix = _a2.prefix, suffix = _a2.suffix, symbol = _a2.symbol, patternLength = _a2.patternLength, leadingZero = _a2.leadingZero;
      var peekedValue = this.peek(middle, patternValue);
      var peekedDateString = useBasePrefixAndSuffix ? "".concat(basePrefix).concat(peekedValue).concat(baseSuffix) : "".concat(prefix).concat(peekedValue).concat(suffix);
      var peekedDate = this.intl.parseDate(peekedDateString, this.format, this.localeId);
      var leadingZeroOffset = (this.leadingZero || {})[symbol] || 0;
      var patternSatisfied = leadingZeroOffset + unpadZero(middle).length >= patternLength;
      var parsedPeekedValue = parseToInt(peekedValue);
      var switchToNext = peekedDate === null || (leadingZero[symbol] ? patternValue.length <= middle.length : patternSatisfied);
      return {
        peekedDate,
        peekedDateString,
        peekedValue,
        parsedPeekedValue,
        switchToNext
      };
    };
    return DateObject2;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/keycode.js
var KeyCode = {
  BACKSPACE: 8,
  DELETE: 46,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  SPACE: 32,
  END: 35,
  HOME: 36,
  PAGE_UP: 33,
  PAGE_DOWN: 34
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/observable.js
var defaultOptions = {
  events: {}
};
var Observable = (
  /** @class */
  function() {
    function Observable2(options) {
      this.options = extend({}, defaultOptions, options);
    }
    Observable2.prototype.destroy = function() {
      this.options = {};
    };
    Observable2.prototype.trigger = function(eventName, args) {
      if (args === void 0) {
        args = {};
      }
      var eventData = {
        defaultPrevented: false,
        preventDefault: function() {
          eventData.defaultPrevented = true;
        }
      };
      if (isFunction(this.options.events[eventName])) {
        this.options.events[eventName](extend(eventData, args, {
          sender: this
        }));
        return eventData.defaultPrevented;
      }
      return false;
    };
    return Observable2;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/interaction-mode.js
var DateInputInteractionMode;
(function(DateInputInteractionMode2) {
  DateInputInteractionMode2["None"] = "none";
  DateInputInteractionMode2["Caret"] = "caret";
  DateInputInteractionMode2["Selection"] = "selection";
})(DateInputInteractionMode || (DateInputInteractionMode = {}));

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/dateinput.js
var _a;
var DEFAULT_SEGMENT_STEP = 1;
var DRAG_START = "dragStart";
var DROP = "drop";
var TOUCH_START = "touchstart";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var CLICK = "click";
var INPUT = "input";
var KEY_DOWN = "keydown";
var FOCUS = "focus";
var BLUR = "blur";
var PASTE = "paste";
var MOUSE_SCROLL = "DOMMouseScroll";
var MOUSE_WHEEL = "mousewheel";
var VALUE_CHANGE = "valueChange";
var INPUT_END = "inputEnd";
var BLUR_END = "blurEnd";
var FOCUS_END = "focusEnd";
var CHANGE = "change";
var defaultDateInputOptions = {
  format: "d",
  hasPlaceholder: false,
  placeholder: null,
  cycleTime: true,
  locale: null,
  steps: {
    millisecond: DEFAULT_SEGMENT_STEP,
    second: DEFAULT_SEGMENT_STEP,
    minute: DEFAULT_SEGMENT_STEP,
    hour: DEFAULT_SEGMENT_STEP,
    day: DEFAULT_SEGMENT_STEP,
    month: DEFAULT_SEGMENT_STEP,
    year: DEFAULT_SEGMENT_STEP
  },
  formatPlaceholder: null,
  events: (_a = {}, _a[VALUE_CHANGE] = null, _a[INPUT] = null, _a[INPUT_END] = null, _a[FOCUS] = null, _a[FOCUS_END] = null, _a[BLUR] = null, _a[BLUR_END] = null, _a[KEY_DOWN] = null, _a[MOUSE_WHEEL] = null, _a[CHANGE] = null, _a),
  selectNearestSegmentOnFocus: false,
  selectPreviousSegmentOnBackspace: false,
  enableMouseWheel: false,
  allowCaretMode: false,
  autoSwitchParts: true,
  autoSwitchKeys: [],
  twoDigitYearMax: Constants.twoDigitYearMax,
  autoCorrectParts: true,
  autoFill: false,
  toggleDayPeriod: false
};
var DateInput = (
  /** @class */
  function(_super) {
    __extends(DateInput2, _super);
    function DateInput2(element, options) {
      var _this = _super.call(this, options) || this;
      _this.dateObject = null;
      _this.currentText = "";
      _this.currentFormat = "";
      _this.interactionMode = DateInputInteractionMode.None;
      _this.previousElementSelection = { start: 0, end: 0 };
      _this.init(element, options);
      return _this;
    }
    Object.defineProperty(DateInput2.prototype, "value", {
      get: function() {
        return this.dateObject && this.dateObject.getValue();
      },
      enumerable: false,
      configurable: true
    });
    DateInput2.prototype.init = function(element, options) {
      var dateValue = isValidDate(this.options.value) ? cloneDate(this.options.value) : new Date(options.formattedValue);
      if (!isValidDate(dateValue)) {
        dateValue = null;
      }
      this.element = element;
      this.options = extend({}, defaultDateInputOptions, options, { steps: __assign(__assign({}, defaultDateInputOptions.steps), options.steps) });
      this.intl = this.options.intlService;
      this.dateObject = this.createDateObject();
      this.dateObject.setValue(dateValue);
      this.setTextAndFormat();
      this.bindEvents();
      this.resetSegmentValue = true;
      this.interactionMode = DateInputInteractionMode.None;
      this.forceUpdate();
    };
    DateInput2.prototype.destroy = function() {
      this.unbindEvents();
      this.dateObject = null;
      _super.prototype.destroy.call(this);
    };
    DateInput2.prototype.bindEvents = function() {
      this.onElementDragStart = this.onElementDragStart.bind(this);
      this.element.addEventListener(DRAG_START, this.onElementDragStart);
      this.onElementDrop = this.onElementDrop.bind(this);
      this.element.addEventListener(DROP, this.onElementDrop);
      this.onElementClick = this.onElementClick.bind(this);
      this.element.addEventListener(CLICK, this.onElementClick);
      this.onElementMouseDown = this.onElementMouseDown.bind(this);
      this.element.addEventListener(MOUSE_DOWN, this.onElementMouseDown);
      this.element.addEventListener(TOUCH_START, this.onElementMouseDown);
      this.onElementMouseUp = this.onElementMouseUp.bind(this);
      this.element.addEventListener(MOUSE_UP, this.onElementMouseUp);
      this.onElementInput = this.onElementInput.bind(this);
      this.element.addEventListener(INPUT, this.onElementInput);
      this.onElementKeyDown = this.onElementKeyDown.bind(this);
      this.element.addEventListener(KEY_DOWN, this.onElementKeyDown);
      this.onElementFocus = this.onElementFocus.bind(this);
      this.element.addEventListener(FOCUS, this.onElementFocus);
      this.onElementBlur = this.onElementBlur.bind(this);
      this.element.addEventListener(BLUR, this.onElementBlur);
      this.onElementChange = this.onElementChange.bind(this);
      this.element.addEventListener(CHANGE, this.onElementChange);
      this.onElementPaste = this.onElementPaste.bind(this);
      this.element.addEventListener(PASTE, this.onElementPaste);
      this.onElementMouseWheel = this.onElementMouseWheel.bind(this);
      this.element.addEventListener(MOUSE_SCROLL, this.onElementMouseWheel);
      this.element.addEventListener(MOUSE_WHEEL, this.onElementMouseWheel);
    };
    DateInput2.prototype.unbindEvents = function() {
      this.element.removeEventListener(DRAG_START, this.onElementDragStart);
      this.element.removeEventListener(DROP, this.onElementDrop);
      this.element.removeEventListener(TOUCH_START, this.onElementMouseDown);
      this.element.removeEventListener(MOUSE_DOWN, this.onElementMouseDown);
      this.element.removeEventListener(MOUSE_UP, this.onElementMouseUp);
      this.element.removeEventListener(CLICK, this.onElementClick);
      this.element.removeEventListener(INPUT, this.onElementInput);
      this.element.removeEventListener(KEY_DOWN, this.onElementKeyDown);
      this.element.removeEventListener(FOCUS, this.onElementFocus);
      this.element.removeEventListener(BLUR, this.onElementBlur);
      this.element.removeEventListener(CHANGE, this.onElementChange);
      this.element.removeEventListener(PASTE, this.onElementPaste);
      this.element.removeEventListener(MOUSE_SCROLL, this.onElementMouseWheel);
      this.element.removeEventListener(MOUSE_WHEEL, this.onElementMouseWheel);
    };
    DateInput2.prototype.setOptions = function(options, refresh) {
      if (refresh === void 0) {
        refresh = false;
      }
      this.options = extend({}, this.options, options, { steps: __assign(__assign({}, defaultDateInputOptions.steps), options.steps) });
      this.setDateObjectOptions();
      if (refresh) {
        this.unbindEvents();
        this.init(this.element, this.options);
      }
    };
    DateInput2.prototype.setDateObjectOptions = function() {
      if (this.dateObject) {
        var newOptions = this.getDateObjectOptions();
        this.dateObject.setOptions(newOptions);
      }
    };
    DateInput2.prototype.resetLocale = function() {
      this.unbindEvents();
      this.init(this.element, this.options);
    };
    DateInput2.prototype.isInCaretMode = function() {
      return this.interactionMode === DateInputInteractionMode.Caret;
    };
    DateInput2.prototype.focus = function() {
      this.element.focus();
      if (this.options.selectNearestSegmentOnFocus) {
        this.selectNearestSegment(0);
      }
    };
    DateInput2.prototype.onElementDragStart = function(e13) {
      e13.preventDefault();
    };
    DateInput2.prototype.onElementDrop = function(e13) {
      e13.preventDefault();
    };
    DateInput2.prototype.onElementMouseDown = function() {
      this.mouseDownStarted = true;
      this.focusedPriorToMouseDown = this.isActive;
    };
    DateInput2.prototype.onElementMouseUp = function(e13) {
      this.mouseDownStarted = false;
      e13.preventDefault();
    };
    DateInput2.prototype.onElementClick = function(e13) {
      this.mouseDownStarted = false;
      this.switchedPartOnPreviousKeyAction = false;
      var selection = this.selection;
      if (this.isInCaretMode()) {
        this.forceUpdate();
      }
      if (e13.detail === 3) {
      } else {
        if (this.isActive && this.options.selectNearestSegmentOnFocus) {
          var selectionPresent = this.element.selectionStart !== this.element.selectionEnd;
          var placeholderToggled = isPresent(this.options.placeholder) && !this.dateObject.hasValue() && !this.focusedPriorToMouseDown;
          var selectFirstSegment = !selectionPresent && placeholderToggled;
          var index = selectFirstSegment ? 0 : this.caret()[0];
          this.selectNearestSegment(index);
        } else {
          this.setSelection(this.selectionByIndex(selection.start));
        }
      }
    };
    DateInput2.prototype.onElementInput = function(e13) {
      this.triggerInput({ event: e13 });
      var oldElementValue = this.elementValue;
      if (!this.element || !this.dateObject) {
        return;
      }
      var switchedPartOnPreviousKeyAction = this.switchedPartOnPreviousKeyAction;
      if (this.isPasteInProgress) {
        if (this.options.allowCaretMode) {
          this.resetSegmentValue = false;
        }
        this.updateOnPaste(e13);
        this.isPasteInProgress = false;
        return;
      }
      var keyDownEvent = this.keyDownEvent || {};
      var isBackspaceKey = keyDownEvent.keyCode === KeyCode.BACKSPACE || keyDownEvent.key === Key.BACKSPACE;
      var isDeleteKey = keyDownEvent.keyCode === KeyCode.DELETE || keyDownEvent.key === Key.DELETE;
      var originalInteractionMode = this.interactionMode;
      if (this.options.allowCaretMode && originalInteractionMode !== DateInputInteractionMode.Caret && !isDeleteKey && !isBackspaceKey) {
        this.resetSegmentValue = true;
      }
      if (this.options.allowCaretMode) {
        this.interactionMode = DateInputInteractionMode.Caret;
      } else {
        this.interactionMode = DateInputInteractionMode.Selection;
      }
      var hasCaret = this.isInCaretMode();
      if (hasCaret && this.keyDownEvent.key === Key.SPACE) {
        this.restorePreviousInputEventState();
        return;
      }
      var oldExistingDateValue = this.dateObject && this.dateObject.getValue();
      var oldDateValue = this.dateObject ? this.dateObject.value : null;
      var _a2 = this.dateObject.getTextAndFormat(), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      var oldText = "";
      if (hasCaret) {
        if (isBackspaceKey || isDeleteKey) {
          oldText = this.previousElementValue;
        } else if (originalInteractionMode === DateInputInteractionMode.Caret) {
          oldText = this.previousElementValue;
        } else {
          oldText = currentText;
        }
      } else {
        oldText = currentText;
      }
      var newText = this.elementValue;
      var diff = approximateStringMatching({
        oldText,
        newText,
        formatPattern: this.currentFormat,
        selectionStart: this.selection.start,
        isInCaretMode: hasCaret,
        keyEvent: this.keyDownEvent
      });
      if (diff && diff.length && diff[0] && diff[0][1] !== Constants.formatSeparator) {
        this.switchedPartOnPreviousKeyAction = false;
      }
      if (hasCaret && (!diff || diff.length === 0)) {
        this.restorePreviousInputEventState();
        return;
      } else if (hasCaret && diff.length === 1) {
        if (!diff[0] || !diff[0][0]) {
          this.restorePreviousInputEventState();
          return;
        } else if (hasCaret && diff[0] && (diff[0][0] === Constants.formatSeparator || diff[0][1] === Constants.formatSeparator)) {
          this.restorePreviousInputEventState();
          return;
        }
      }
      var navigationOnly = diff.length === 1 && diff[0][1] === Constants.formatSeparator;
      var parsePartsResults = [];
      var switchPart = false;
      var error = null;
      if (!navigationOnly) {
        for (var i11 = 0; i11 < diff.length; i11++) {
          var parsePartResult = this.dateObject.parsePart({
            symbol: diff[i11][0],
            currentChar: diff[i11][1],
            resetSegmentValue: this.resetSegmentValue,
            cycleSegmentValue: !this.isInCaretMode(),
            rawTextValue: this.element.value,
            isDeleting: isBackspaceKey || isDeleteKey,
            originalFormat: this.currentFormat
          });
          parsePartsResults.push(parsePartResult);
          if (!parsePartResult.value) {
            error = { type: "parse" };
          }
          switchPart = parsePartResult.switchToNext;
        }
      }
      if (!this.options.autoSwitchParts) {
        switchPart = false;
      }
      this.resetSegmentValue = false;
      var hasFixedFormat = this.options.format === this.currentFormat || // all not fixed formats are 1 symbol, e.g. "d"
      isPresent(this.options.format) && this.options.format.length > 1;
      var lastParseResult = parsePartsResults[parsePartsResults.length - 1];
      var lastParseResultHasNoValue = lastParseResult && !isPresent(lastParseResult.value);
      var parsingFailedOnDelete = hasCaret && (isBackspaceKey || isDeleteKey) && lastParseResultHasNoValue;
      var resetPart = lastParseResult ? lastParseResult.resetPart : false;
      var newExistingDateValue = this.dateObject.getValue();
      var hasExistingDateValueChanged = !isEqual(oldExistingDateValue, newExistingDateValue);
      var newDateValue = this.dateObject.value;
      var symbolForSelection;
      var currentSelection = this.selection;
      if (hasCaret) {
        var diffChar = diff && diff.length > 0 ? diff[0][0] : null;
        var hasLeadingZero = this.dateObject.getLeadingZero()[diffChar];
        if (diff.length && diff[0][0] !== Constants.formatSeparator) {
          if (switchPart) {
            this.forceUpdateWithSelection();
            this.switchDateSegment(1);
          } else if (resetPart) {
            symbolForSelection = this.currentFormat[currentSelection.start];
            if (symbolForSelection) {
              this.forceUpdate();
              this.setSelection(this.selectionBySymbol(symbolForSelection));
            } else {
              this.restorePreviousInputEventState();
            }
          } else if (parsingFailedOnDelete) {
            this.forceUpdate();
            if (diff.length && diff[0][0] !== Constants.formatSeparator) {
              this.setSelection(this.selectionBySymbol(diff[0][0]));
            }
          } else if (lastParseResultHasNoValue) {
            if (e13.data === "0" && hasLeadingZero) {
            } else if (isPresent(oldExistingDateValue) && !isPresent(newExistingDateValue)) {
              this.restorePreviousInputEventState();
            } else if (!isPresent(oldExistingDateValue) && isPresent(newExistingDateValue)) {
              this.forceUpdateWithSelection();
            } else if (isPresent(oldExistingDateValue) && isPresent(newExistingDateValue)) {
              if (hasExistingDateValueChanged) {
                this.forceUpdateWithSelection();
              } else {
                this.restorePreviousInputEventState();
              }
            } else if (!isPresent(oldExistingDateValue) && !isPresent(newExistingDateValue)) {
              this.forceUpdateWithSelection();
            } else if (oldDateValue !== newDateValue) {
            } else {
              this.restorePreviousInputEventState();
            }
          } else if (!lastParseResultHasNoValue) {
            if (!hasFixedFormat) {
              this.forceUpdateWithSelection();
            }
          }
        } else {
          if (!this.options.autoSwitchParts && diff[0][1] === Constants.formatSeparator) {
          } else {
            this.setSelection(this.selectionBySymbol(diff[0][0]));
          }
        }
      } else if (!hasCaret) {
        this.forceUpdate();
        if (diff.length && diff[0][0] !== Constants.formatSeparator) {
          this.setSelection(this.selectionBySymbol(diff[0][0]));
        }
        if (this.options.autoSwitchParts) {
          if (navigationOnly) {
            this.resetSegmentValue = true;
            if (!switchedPartOnPreviousKeyAction) {
              this.switchDateSegment(1);
            }
            this.switchedPartOnPreviousKeyAction = true;
          } else if (switchPart) {
            this.switchDateSegment(1);
            this.switchedPartOnPreviousKeyAction = true;
          }
        } else {
          if (lastParseResult && lastParseResult.switchToNext) {
            this.resetSegmentValue = true;
          } else if (navigationOnly) {
            this.resetSegmentValue = true;
            if (!switchedPartOnPreviousKeyAction) {
              this.switchDateSegment(1);
            }
            this.switchedPartOnPreviousKeyAction = true;
          }
        }
        if (isBackspaceKey && this.options.selectPreviousSegmentOnBackspace) {
          this.switchDateSegment(-1);
        }
      }
      this.tryTriggerValueChange({
        oldValue: oldExistingDateValue,
        event: e13
      });
      this.triggerInputEnd({ event: e13, error, oldElementValue, newElementValue: this.elementValue });
      if (hasCaret) {
        this.setTextAndFormat();
      }
    };
    DateInput2.prototype.onElementFocus = function(e13) {
      if (this.triggerFocus({ event: e13 })) {
        return;
      }
      this.isActive = true;
      this.interactionMode = DateInputInteractionMode.None;
      this.switchedPartOnPreviousKeyAction = false;
      this.refreshElementValue();
      if (!this.mouseDownStarted) {
        this.caret(0, this.elementValue.length);
      }
      this.mouseDownStarted = false;
      this.triggerFocusEnd({ event: e13 });
    };
    DateInput2.prototype.onElementBlur = function(e13) {
      this.resetSegmentValue = true;
      this.isActive = false;
      if (this.triggerBlur({ event: e13 })) {
        return;
      }
      if (this.options.autoFill) {
        this.autoFill();
      }
      this.interactionMode = DateInputInteractionMode.None;
      this.switchedPartOnPreviousKeyAction = false;
      this.refreshElementValue();
      this.triggerBlurEnd({ event: e13 });
    };
    DateInput2.prototype.onElementChange = function(e13) {
      this.triggerChange({ event: e13 });
    };
    DateInput2.prototype.onElementKeyDown = function(e13) {
      if (this.triggerKeyDown({ event: e13 })) {
        return;
      }
      var _a2 = this.selection, start = _a2.start, end = _a2.end;
      var event = e13;
      this.keyDownEvent = e13;
      this.previousElementValue = this.element.value;
      this.previousElementSelection = { start, end };
      if (this.keyEventMatchesAutoSwitchKeys(e13)) {
        var isTabKey = e13.keyCode === KeyCode.TAB;
        if (isTabKey) {
          var _b = this.selection, selectionStart = _b.start, selectionEnd = _b.end;
          if (e13.shiftKey && isTabKey) {
            this.switchDateSegment(-1);
          } else {
            this.switchDateSegment(1);
          }
          if (selectionStart !== this.selection.start || selectionEnd !== this.selection.end) {
            e13.preventDefault();
            return;
          }
        } else {
          e13.preventDefault();
          this.switchDateSegment(1);
          return;
        }
      }
      var symbol = this.currentFormat[this.selection.start];
      var step = this.getStepFromSymbol(symbol);
      var shouldPreventDefault = false;
      var oldElementValue = this.elementValue;
      if (e13.altKey || e13.ctrlKey || e13.metaKey || e13.keyCode === KeyCode.TAB) {
        return;
      }
      switch (e13.keyCode) {
        case KeyCode.ARROW_LEFT:
          this.switchDateSegment(-1);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_UP:
          this.modifyDateSegmentValue(step, symbol, event);
          if (oldElementValue !== this.elementValue) {
            this.triggerInputEnd({ event: e13, error: null, newElementValue: this.elementValue, oldElementValue });
          }
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_RIGHT:
          this.switchDateSegment(1);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_DOWN:
          this.modifyDateSegmentValue(-step, symbol, event);
          if (oldElementValue !== this.elementValue) {
            this.triggerInputEnd({ event: e13, error: null, newElementValue: this.elementValue, oldElementValue });
          }
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ENTER:
          break;
        case KeyCode.HOME:
          this.selectNearestSegment(0);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          this.resetSegmentValue = true;
          break;
        case KeyCode.END:
          this.selectNearestSegment(this.elementValue.length);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          this.resetSegmentValue = true;
          break;
        default:
          return;
      }
      if (shouldPreventDefault) {
        e13.preventDefault();
      }
    };
    DateInput2.prototype.onElementPaste = function() {
      this.isPasteInProgress = true;
    };
    DateInput2.prototype.onElementMouseWheel = function(e13) {
      var oldElementValue = this.elementValue;
      if (!this.options.enableMouseWheel || this.triggerMouseWheel({ event: e13 })) {
        return;
      }
      if (!this.isActive) {
        return;
      }
      var event = e13;
      if (event.shiftKey) {
        this.switchDateSegment((event.wheelDelta || -event.detail) > 0 ? -1 : 1);
      } else {
        this.modifyDateSegmentValue((event.wheelDelta || -event.detail) > 0 ? 1 : -1);
      }
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (oldElementValue !== this.elementValue) {
        this.triggerInputEnd({ event: e13, error: null, newElementValue: this.elementValue, oldElementValue });
      }
    };
    DateInput2.prototype.updateOnPaste = function(e13) {
      var value = this.intl.parseDate(this.elementValue, this.inputFormat) || this.value;
      if (isPresent(value) && this.dateObject.shouldNormalizeCentury()) {
        value = this.dateObject.normalizeCentury(value);
      }
      var oldDateObjectValue = this.dateObject && this.dateObject.getValue();
      this.writeValue(value);
      this.tryTriggerValueChange({
        oldValue: oldDateObjectValue,
        event: e13
      });
    };
    Object.defineProperty(DateInput2.prototype, "elementValue", {
      get: function() {
        return (this.element || {}).value || "";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "inputFormat", {
      get: function() {
        if (!this.options.format) {
          return Constants.defaultDateFormat;
        }
        if (typeof this.options.format === "string") {
          return this.options.format;
        } else {
          return this.options.format.inputFormat;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "displayFormat", {
      get: function() {
        if (!this.options.format) {
          return Constants.defaultDateFormat;
        }
        if (typeof this.options.format === "string") {
          return this.options.format;
        } else {
          return this.options.format.displayFormat;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "selection", {
      get: function() {
        var returnValue = { start: 0, end: 0 };
        if (this.element !== null && this.element.selectionStart !== void 0) {
          returnValue = {
            start: this.element.selectionStart,
            end: this.element.selectionEnd
          };
        }
        return returnValue;
      },
      enumerable: false,
      configurable: true
    });
    DateInput2.prototype.setSelection = function(selection) {
      if (this.element && document.activeElement === this.element) {
        this.element.setSelectionRange(selection.start, selection.end);
        if (isDocumentAvailable() && isIOS()) {
          this.element.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
        if (selection.start !== selection.end) {
          this.interactionMode = DateInputInteractionMode.Selection;
        }
      }
    };
    DateInput2.prototype.selectionBySymbol = function(symbol) {
      var start = -1;
      var end = 0;
      for (var i11 = 0; i11 < this.currentFormat.length; i11++) {
        if (this.currentFormat[i11] === symbol) {
          end = i11 + 1;
          if (start === -1) {
            start = i11;
          }
        }
      }
      if (start < 0) {
        start = 0;
      }
      if (!this.options.autoCorrectParts && this.currentFormat.length !== this.currentText.length) {
        if (this.currentFormat.length < this.currentText.length) {
          end += this.currentText.length - this.currentFormat.length;
        } else {
          end = Math.max(0, end - (this.currentFormat.length - this.currentText.length));
        }
      }
      return { start, end };
    };
    DateInput2.prototype.selectionByIndex = function(index) {
      var selection = { start: index, end: index };
      for (var i11 = index, j3 = index - 1; i11 < this.currentFormat.length || j3 >= 0; i11++, j3--) {
        if (i11 < this.currentFormat.length && this.currentFormat[i11] !== Constants.formatSeparator) {
          selection = this.selectionBySymbol(this.currentFormat[i11]);
          break;
        }
        if (j3 >= 0 && this.currentFormat[j3] !== Constants.formatSeparator) {
          selection = this.selectionBySymbol(this.currentFormat[j3]);
          break;
        }
      }
      return selection;
    };
    DateInput2.prototype.switchDateSegment = function(offset2) {
      var selection = this.selection;
      if (this.isInCaretMode()) {
        var start = selection.start;
        var currentSymbol = this.currentFormat[start - 1];
        var symbol = "";
        var symbolCandidate = "";
        if (offset2 < 0) {
          for (var i11 = start + offset2; i11 >= 0; i11--) {
            symbolCandidate = this.currentFormat[i11];
            if (symbolCandidate !== Constants.formatSeparator && symbolCandidate !== currentSymbol) {
              start = i11;
              symbol = symbolCandidate;
              break;
            }
          }
        } else {
          for (var i11 = start + offset2; i11 < this.currentFormat.length; i11++) {
            symbolCandidate = this.currentFormat[i11];
            if (symbolCandidate !== Constants.formatSeparator && symbolCandidate !== currentSymbol) {
              start = i11;
              symbol = symbolCandidate;
              break;
            }
          }
        }
        if (symbol) {
          this.forceUpdate();
          this.setSelection(this.selectionBySymbol(symbol));
          this.interactionMode = DateInputInteractionMode.Selection;
          return;
        }
      }
      this.interactionMode = DateInputInteractionMode.None;
      var _a2 = this.selection, selectionStart = _a2.start, selectionEnd = _a2.end;
      if (selectionStart < selectionEnd && this.currentFormat[selectionStart] !== this.currentFormat[selectionEnd - 1]) {
        this.setSelection(this.selectionByIndex(offset2 > 0 ? selectionStart : selectionEnd - 1));
        this.resetSegmentValue = true;
        this.interactionMode = DateInputInteractionMode.None;
        return;
      }
      var previousFormatSymbol = this.currentFormat[selectionStart];
      var a23 = selectionStart + offset2;
      while (a23 > 0 && a23 < this.currentFormat.length) {
        if (this.currentFormat[a23] !== previousFormatSymbol && this.currentFormat[a23] !== Constants.formatSeparator) {
          break;
        }
        a23 += offset2;
      }
      if (this.currentFormat[a23] === Constants.formatSeparator) {
        return;
      }
      var b4 = a23;
      while (b4 >= 0 && b4 < this.currentFormat.length) {
        if (this.currentFormat[b4] !== this.currentFormat[a23]) {
          break;
        }
        b4 += offset2;
      }
      if (a23 > b4 && (b4 + 1 !== selectionStart || a23 + 1 !== selectionEnd)) {
        this.setSelection({ start: b4 + 1, end: a23 + 1 });
        this.resetSegmentValue = true;
      } else if (a23 < b4 && (a23 !== selectionStart || b4 !== selectionEnd)) {
        this.setSelection({ start: a23, end: b4 });
        this.resetSegmentValue = true;
      }
      this.interactionMode = DateInputInteractionMode.None;
    };
    DateInput2.prototype.modifyDateSegmentValue = function(offset2, symbol, event) {
      if (symbol === void 0) {
        symbol = "";
      }
      if (event === void 0) {
        event = {};
      }
      if (!this.dateObject || this.options.readonly) {
        return;
      }
      var oldValue = this.value;
      var step = DEFAULT_SEGMENT_STEP;
      var caret = this.caret();
      symbol = symbol || this.currentFormat[caret[0]];
      if (symbol === "S" && (!this.options.steps.millisecond || this.options.steps.millisecond === DEFAULT_SEGMENT_STEP)) {
        var msDigits = millisecondDigitsInFormat(this.inputFormat);
        step = millisecondStepFor(msDigits);
      }
      this.dateObject.modifyPart(symbol, step * offset2);
      this.tryTriggerValueChange({
        oldValue,
        event
      });
      this.forceUpdate();
      this.setSelection(this.selectionBySymbol(symbol));
    };
    DateInput2.prototype.tryTriggerValueChange = function(args) {
      if (args === void 0) {
        args = { oldValue: null, event: {} };
      }
      if (!isEqual(this.value, args.oldValue)) {
        return this.triggerValueChange(args);
      }
    };
    DateInput2.prototype.triggerValueChange = function(args) {
      if (args === void 0) {
        args = { oldValue: null, event: {} };
      }
      return this.trigger(VALUE_CHANGE, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerInput = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(INPUT, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerInputEnd = function(args) {
      if (args === void 0) {
        args = { event: {}, error: null, oldElementValue: "", newElementValue: "" };
      }
      return this.trigger(INPUT_END, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerFocus = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(FOCUS, extend({}, args));
    };
    DateInput2.prototype.triggerFocusEnd = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(FOCUS_END, extend({}, args));
    };
    DateInput2.prototype.triggerBlur = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(BLUR, extend({}, args));
    };
    DateInput2.prototype.triggerBlurEnd = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(BLUR_END, extend({}, args));
    };
    DateInput2.prototype.triggerChange = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(CHANGE, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerKeyDown = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(KEY_DOWN, extend({}, args));
    };
    DateInput2.prototype.triggerMouseWheel = function(args) {
      if (args === void 0) {
        args = { event: {} };
      }
      return this.trigger(MOUSE_WHEEL, extend({}, args));
    };
    DateInput2.prototype.forceUpdate = function() {
      this.setTextAndFormat();
      this.refreshElementValue();
    };
    DateInput2.prototype.forceUpdateWithSelection = function() {
      var _a2 = this.selection, start = _a2.start, end = _a2.end;
      var elementValueLength = this.elementValue.length;
      this.forceUpdate();
      var selectionOffset = this.elementValue.length - elementValueLength;
      this.setSelection({
        start: start + selectionOffset,
        end: end + selectionOffset
      });
    };
    DateInput2.prototype.setTextAndFormat = function() {
      var _a2 = this.dateObject.getTextAndFormat(), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      this.currentText = currentText;
    };
    DateInput2.prototype.setElementValue = function(value) {
      this.element.value = value;
    };
    DateInput2.prototype.getStepFromSymbol = function(symbol) {
      switch (symbol) {
        case "S":
          return Number(this.options.steps.millisecond);
        case "s":
          return Number(this.options.steps.second);
        case "m":
          return Number(this.options.steps.minute);
        // represents hour as value from 01 through 12
        case "h":
        // represents hour as value from 01 through 23
        case "H":
          return Number(this.options.steps.hour);
        case "M":
          return Number(this.options.steps.month);
        // there is no 'D' format specifier for day
        case "d":
        // used for formats such as "EEEE, MMMM d, yyyy",
        // where "EEEE" stands for full name of the day e.g. Monday
        case "E":
          return Number(this.options.steps.day);
        // there is no 'Y' format specifier for year
        case "y":
          return Number(this.options.steps.year);
        default:
          return DEFAULT_SEGMENT_STEP;
      }
    };
    DateInput2.prototype.restorePreviousInputEventState = function() {
      this.restorePreviousElementValue();
      this.restorePreviousElementSelection();
    };
    DateInput2.prototype.restorePreviousElementValue = function() {
      this.setElementValue(this.previousElementValue || "");
    };
    DateInput2.prototype.restorePreviousElementSelection = function() {
      var _a2 = this.previousElementSelection, start = _a2.start, end = _a2.end;
      this.setSelection({ start: start || 0, end: end || 0 });
    };
    DateInput2.prototype.writeValue = function(value) {
      this.verifyValue(value);
      this.dateObject = this.getDateObject(value);
      this.refreshElementValue();
    };
    DateInput2.prototype.verifyValue = function(value) {
      if (value && !isValidDate(value)) {
        throw new Error("The 'value' should be a valid JavaScript Date instance.");
      }
    };
    DateInput2.prototype.refreshElementValue = function() {
      var element = this.element;
      var format = this.isActive ? this.inputFormat : this.displayFormat;
      var _a2 = this.dateObject.getTextAndFormat(format), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      this.currentText = currentText;
      var hasPlaceholder = this.options.hasPlaceholder || isPresent(this.options.placeholder);
      var showPlaceholder = !this.isActive && hasPlaceholder && !this.dateObject.hasValue();
      if (hasPlaceholder && isPresent(this.options.placeholder)) {
        element.placeholder = this.options.placeholder;
      }
      var newElementValue = showPlaceholder ? "" : currentText;
      this.previousElementValue = this.elementValue;
      this.setElementValue(newElementValue);
    };
    DateInput2.prototype.caret = function(start, end) {
      if (end === void 0) {
        end = start;
      }
      var isPosition = start !== void 0;
      var returnValue = [start, start];
      var element = this.element;
      if (isPosition && (this.options.disabled || this.options.readonly)) {
        return void 0;
      }
      try {
        if (element.selectionStart !== void 0) {
          if (isPosition) {
            if (isDocumentAvailable() && document.activeElement !== element) {
              element.focus();
            }
            element.setSelectionRange(start, end);
          }
          returnValue = [element.selectionStart, element.selectionEnd];
        }
      } catch (e13) {
        returnValue = [];
      }
      return returnValue;
    };
    DateInput2.prototype.selectNearestSegment = function(index) {
      for (var i11 = index, j3 = index - 1; i11 < this.currentFormat.length || j3 >= 0; i11++, j3--) {
        if (i11 < this.currentFormat.length && this.currentFormat[i11] !== "_") {
          this.selectDateSegment(this.currentFormat[i11]);
          return;
        }
        if (j3 >= 0 && this.currentFormat[j3] !== "_") {
          this.selectDateSegment(this.currentFormat[j3]);
          return;
        }
      }
    };
    DateInput2.prototype.selectDateSegment = function(symbol) {
      var begin = -1;
      var end = 0;
      for (var i11 = 0; i11 < this.currentFormat.length; i11++) {
        if (this.currentFormat[i11] === symbol) {
          end = i11 + 1;
          if (begin === -1) {
            begin = i11;
          }
        }
      }
      if (begin < 0) {
        begin = 0;
      }
      this.caret(0, 0);
      this.caret(begin, end);
    };
    DateInput2.prototype.getDateObject = function(value) {
      var leadingZero = (this.dateObject || {}).leadingZero;
      this.options.value = value;
      var dateObject = this.createDateObject();
      dateObject.setLeadingZero(this.isActive ? leadingZero : null);
      return dateObject;
    };
    DateInput2.prototype.createDateObject = function() {
      var defaultOptions2 = this.getDateObjectOptions();
      var dateObject = new DateObject(extend({}, defaultOptions2));
      return dateObject;
    };
    DateInput2.prototype.getDateObjectOptions = function() {
      var newOptions = {
        intlService: this.options.intlService,
        formatPlaceholder: this.options.formatPlaceholder ? this.options.formatPlaceholder : "formatPattern",
        format: this.inputFormat,
        cycleTime: this.options.cycleTime,
        twoDigitYearMax: this.options.twoDigitYearMax,
        autoCorrectParts: this.options.autoCorrectParts,
        value: this.options.value,
        toggleDayPeriod: this.options.toggleDayPeriod
      };
      return newOptions;
    };
    DateInput2.prototype.keyEventMatchesAutoSwitchKeys = function(keyObject) {
      var autoSwitchKeys = (this.options.autoSwitchKeys || []).map(function(x6) {
        return x6.toString().toLowerCase().trim();
      });
      if (autoSwitchKeys.indexOf(keyObject.keyCode.toString()) >= 0 || autoSwitchKeys.indexOf(keyObject.keyCode) >= 0 || autoSwitchKeys.indexOf(keyObject.key.toLowerCase().trim()) >= 0) {
        return true;
      }
      return false;
    };
    DateInput2.prototype.autoFill = function() {
      var dateObject = this.dateObject;
      var currentDate = /* @__PURE__ */ new Date();
      var day, month, year, hours, minutes, seconds;
      if (dateObject.date || dateObject.month || dateObject.year || dateObject.hours || dateObject.minutes || dateObject.seconds) {
        year = dateObject.year ? dateObject.value.getFullYear() : currentDate.getFullYear(), month = dateObject.month ? dateObject.value.getMonth() : currentDate.getMonth(), day = dateObject.date ? dateObject.value.getDate() : currentDate.getDate(), hours = dateObject.hours ? dateObject.value.getHours() : currentDate.getHours(), minutes = dateObject.minutes ? dateObject.value.getMinutes() : currentDate.getMinutes(), seconds = dateObject.seconds ? dateObject.value.getSeconds() : currentDate.getSeconds();
        dateObject.setValue(new Date(year, month, day, hours, minutes, seconds));
        this.refreshElementValue();
        this.triggerValueChange();
      }
    };
    return DateInput2;
  }(Observable)
);

// node_modules/@progress/kendo-react-dateinputs/dateinput/utils.mjs
var E2 = "d";
var F = "wide";
var L3 = (A4, o17, s8) => A4 === null || !(o17 && o17 > A4 || s8 && s8 < A4);

// node_modules/@progress/kendo-react-dateinputs/timepicker/models/TimePart.mjs
var o9 = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/utils.mjs
var a13 = (e13) => (t10, r14) => {
  const n19 = cloneDate(t10);
  return n19[e13](r14), n19;
};
var p7 = [
  { type: o9.hour, getter: (e13) => e13.getHours() },
  { type: o9.minute, getter: (e13) => e13.getMinutes() },
  { type: o9.second, getter: (e13) => e13.getSeconds() },
  { type: o9.millisecond, getter: (e13) => e13.getMilliseconds() }
];
var V3 = (e13) => (t10, r14) => e13(t10);
var T5 = (e13) => (t10, r14) => e13(r14);
var M4 = (e13) => e13.reduce((t10, r14) => (t10[r14.type] = r14.type, t10), {});
var y3 = (e13) => (t10) => e13[t10.type] ? T5(t10.getter) : V3(t10.getter);
var H2 = (e13) => (t10) => e13.map(y3(M4(t10)));
var d8 = (e13, t10, r14, n19) => (s8) => {
  const o17 = e13(s8), m7 = e13(r14);
  return n19 === "hour" ? o17 - (o17 - m7) % t10 : s8.getTime() <= r14.getTime() && o17 !== 0 && o17 <= m7 ? Math.ceil(o17 / t10) * t10 : o17 - o17 % t10;
};
var h2 = (e13) => (t10, r14) => e13.map((n19) => {
  const s8 = Math.floor(t10[n19.type]);
  return s8 ? d8(n19.getter, s8, r14, n19.type) : n19.getter;
});
var S5 = H2(p7);
var R2 = h2(p7);
var _2 = (e13) => (t10, r14) => (t10.setHours(...e13.map((n19) => n19(t10, r14))), t10);
var x4 = (e13) => (t10) => {
  const r14 = cloneDate(t10);
  return r14.setHours(...e13.map((n19) => n19(r14))), r14;
};
var G6 = a13("setHours");
var w6 = a13("setMinutes");
var A3 = a13("setSeconds");
var B2 = () => /* @__PURE__ */ new Date();
var E3 = (e13, t10, r14 = 1) => {
  const n19 = [];
  for (let s8 = e13; s8 < t10; s8 = s8 + r14)
    n19.push(s8);
  return n19;
};
var i7 = (e13, t10, r14) => ({
  candidateValue: O(k, e13),
  maxValue: addDays(O(k, r14), t10.getHours() < r14.getHours() ? 0 : 1),
  minValue: O(k, t10)
});
var F2 = (e13, t10, r14) => {
  if (!e13 || !t10 || !r14)
    return e13;
  const { candidateValue: n19, minValue: s8, maxValue: o17 } = i7(e13, t10, r14);
  return n19 < s8 ? O(e13, t10) : n19 > o17 ? O(e13, r14) : e13;
};
var N2 = (e13, t10, r14) => {
  if (!e13 || !t10 || !r14)
    return true;
  const { candidateValue: n19, minValue: s8, maxValue: o17 } = i7(e13, t10, r14);
  return s8 <= n19 && n19 <= o17;
};
var P5 = (e13, t10, r14) => {
  if (e13 === null)
    return true;
  const { candidateValue: n19, minValue: s8, maxValue: o17 } = i7(e13, t10, r14);
  return s8 <= n19 && n19 <= o17;
};
var v5 = (e13, t10) => {
  if (e13 === null || t10 === null)
    return false;
  const r14 = O(k, e13), n19 = O(k, t10);
  return r14.getTime() < n19.getHours();
};
var O2 = (e13, t10) => {
  if (e13 === null || t10 === null)
    return false;
  const r14 = O(k, e13);
  return O(k, t10).getTime() < r14.getHours();
};

// node_modules/@progress/kendo-react-dateinputs/common/ClearButton.mjs
var n12 = __toESM(require_react(), 1);
var y4 = (t10) => {
  const s8 = i2(), o17 = n4(), l11 = o17 && o17.uDateInput, r14 = s8.toLanguageString(n6, x3[n6]), i11 = (e13) => {
    e13.stopPropagation();
    const { onClick: a23 } = t10;
    a23 && a23.call(void 0, e13);
  };
  return n12.createElement(
    "span",
    {
      className: n2(A.clearButton({ c: l11 })),
      role: "button",
      onClick: i11,
      tabIndex: t10.tabindex || -1,
      title: r14,
      key: "clearbutton"
    },
    n12.createElement(v2, { name: "x", icon: xIcon })
  );
};

// node_modules/@progress/kendo-react-dateinputs/dateinput/dateInputIntl.mjs
var r6 = class {
  constructor(t10) {
    this.service = t10, this.cldr = {}, this.locale = t10.locale, this.format = t10.format, this.toString = t10.toString, this.formatDate = t10.formatDate, this.parseDate = t10.parseDate, this.parseNumber = t10.parseNumber, this.formatNumber = t10.formatNumber, this.splitDateFormat = t10.splitDateFormat, this.numberSymbols = t10.numberSymbols, this.firstDay = t10.firstDay, this.dateFieldName = t10.dateFieldName, this.dateFormatNames = (o17, m7) => this.service.dateFormatNames(m7), this.weekendRange = (o17) => {
    };
    const a23 = localeInfo(this.locale);
    this.cldr[a23.name] = a23;
  }
};

// node_modules/@progress/kendo-react-dateinputs/dateinput/DateInput.mjs
var tt = "Please enter a valid value!";
var Z = a14.forwardRef((t10, $5) => {
  var j3;
  const Q5 = I(t10.id), ee = i(), h3 = i2(), te2 = n4(), k5 = n3(G7, t10).unstyled || te2, {
    format: T7 = r7.format,
    size: ne = r7.size,
    rounded: ae = r7.rounded,
    fillMode: re = r7.fillMode,
    formatPlaceholder: ie = r7.formatPlaceholder,
    spinners: le = r7.spinners,
    disabled: O3 = r7.disabled,
    min: oe = r7.min,
    max: ue3 = r7.max,
    minTime: se = r7.minTime,
    maxTime: ce = r7.maxTime,
    validityStyles: de = r7.validityStyles,
    validationMessage: p11 = r7.validationMessage,
    placeholder: f9 = r7.placeholder,
    enableMouseWheel: me2 = r7.enableMouseWheel,
    autoCorrectParts: fe = r7.autoCorrectParts,
    autoSwitchParts: ge = r7.autoSwitchParts,
    allowCaretMode: ve = r7.allowCaretMode,
    twoDigitYearMax: ye3 = r7.twoDigitYearMax,
    ariaHasPopup: be2 = r7.ariaHasPopup,
    autoFocus: he = r7.autoFocus
  } = n3(G7, t10), d11 = () => D2.current !== void 0 ? D2.current : l11.current && l11.current.value, A4 = () => {
    const n19 = l11.current && l11.current.currentText || "", i11 = d11();
    return f9 != null && !Pe.focused && !i11 ? f9 : n19;
  }, V4 = () => t10.required !== void 0 ? t10.required : false, R4 = () => {
    const n19 = d11() || t10.value, i11 = oe, K5 = ue3, Le = L3(n19, i11, K5) && N2(n19, se, ce), ke = p11 !== void 0, pe2 = (!V4() || n19 != null) && Le, Ae = t10.valid !== void 0 ? t10.valid : pe2;
    return {
      customError: ke,
      rangeOverflow: n19 && K5.getTime() < n19.getTime() || false,
      rangeUnderflow: n19 && n19.getTime() < i11.getTime() || false,
      valid: Ae,
      valueMissing: n19 === null
    };
  }, Oe = () => {
    o17.current && o17.current.focus();
  }, N4 = () => new r6(ee), E4 = () => {
    const n19 = d11();
    return {
      format: T7,
      steps: t10.steps,
      formatPlaceholder: ie,
      placeholder: f9,
      selectPreviousSegmentOnBackspace: true,
      value: t10.value || n19,
      intlService: N4(),
      autoFill: t10.autoFill !== void 0 ? t10.autoFill : false,
      enableMouseWheel: me2,
      autoCorrectParts: fe,
      autoSwitchParts: ge,
      autoSwitchKeys: t10.autoSwitchKeys || [],
      twoDigitYearMax: ye3,
      allowCaretMode: ve
    };
  }, Ee = (n19) => {
    s8.current && s8.current.classList.add("k-focus"), q2({ focused: true });
  }, Ie2 = (n19) => {
    s8.current && s8.current.classList.remove("k-focus"), q2({ focused: false });
  }, De = (n19, i11) => typeof n19 != typeof i11 ? true : typeof n19 == "string" && typeof i11 == "string" ? n19 !== i11 : typeof n19 == "object" && typeof i11 == "object" ? JSON.stringify(n19) !== JSON.stringify(i11) : false, xe = (n19) => typeof n19 == "string" ? n19 : {
    inputFormat: n19,
    displayFormat: n19
  }, _3 = (n19) => {
    D2.current = d11(), Se(), m7.current = n19, D2.current = void 0;
  }, F4 = (n19) => {
    t10.onChange && t10.onChange(n19);
  }, H5 = (n19) => {
    o3(document) === o17.current && n19.preventDefault();
  }, Ce = () => new DateInput(o17.current, {
    ...E4(),
    format: xe(E4().format),
    events: {
      focus: Ee,
      blur: Ie2,
      valueChange: _3,
      click: F4
    }
  }), B5 = () => {
    o17.current && o17.current.setCustomValidity && o17.current.setCustomValidity(
      R4().valid ? "" : p11 || r7.validationMessage
    );
  }, we = (n19) => {
    !o17.current || !l11.current || _3(n19);
  }, Me = (n19) => {
    n19.preventDefault();
    const i11 = o3(document);
    o17.current && i11 !== o17.current && o17.current.focus({ preventScroll: true });
  }, c7 = (n19) => {
    const i11 = d11();
    m7.current && t10.onChange && !isEqual(m7.current.oldValue, i11) && t10.onChange.call(void 0, {
      syntheticEvent: n19,
      nativeEvent: m7.current.event,
      value: m7.current.value,
      target: I8.current
    }), m7.current = null;
  }, Te = (n19) => {
    var i11;
    (i11 = l11.current) == null || i11.modifyDateSegmentValue(1), c7(n19);
  }, Re = (n19) => {
    var i11;
    (i11 = l11.current) == null || i11.modifyDateSegmentValue(-1), c7(n19);
  }, I8 = a14.useRef(null), o17 = a14.useRef(null), s8 = a14.useRef(null);
  a14.useImperativeHandle(
    I8,
    () => ({
      props: t10,
      get options() {
        return E4();
      },
      get text() {
        return A4();
      },
      get element() {
        return o17.current;
      },
      get name() {
        return t10.name;
      },
      get value() {
        return d11();
      },
      get validity() {
        return R4();
      },
      // hidden methods
      focus: Oe,
      updateOnPaste: we
    })
  ), a14.useImperativeHandle($5, () => I8.current);
  const l11 = a14.useRef(null), P6 = a14.useRef(null), S10 = a14.useRef(false), D2 = a14.useRef(null), m7 = a14.useRef(null), g9 = a14.useRef(t10), [Pe, q2] = a14.useState({ focused: false }), [, Se] = a14.useReducer((n19) => n19 + 1, 0);
  a14.useLayoutEffect(() => {
    S10.current || (l11.current = Ce(), P6.current = l11.current.dateObject, S10.current = true);
  }, []), a14.useEffect(() => (B5(), S10.current || s8.current && s8.current.addEventListener("wheel", H5, { passive: false }), () => {
    s8.current && s8.current.removeEventListener("wheel", H5);
  }), []), a14.useEffect(() => {
    B5(), l11.current && ((De(g9.current.format, T7) || g9.current.readonly !== t10.readonly || JSON.stringify(g9.current.steps) !== JSON.stringify(t10.steps) || N4().locale !== l11.current.options.intlService.locale) && l11.current.setOptions(E4(), true), g9.current.value !== t10.value && (P6.current.getValue() !== null || t10.value !== null) && P6.current.setValue(t10.value), t10.ariaExpanded !== void 0 && t10.ariaExpanded && (l11.current.options.placeholder = null), t10.ariaExpanded !== void 0 && !t10.ariaExpanded && (l11.current.options.placeholder = f9), l11.current.refreshElementValue(), g9.current = {
      format: T7,
      readonly: t10.readonly,
      ariaExpanded: t10.ariaExpanded,
      steps: t10.steps,
      value: t10.value
    });
  });
  const z4 = t10.id || Q5 + "-accessibility-id", v8 = k5 && k5.uDateInput, U5 = A4(), L7 = !de || R4().valid;
  a14.useImperativeHandle(t10._ref, () => I8.current);
  const W3 = a14.createElement(
    "span",
    {
      ref: (n19) => s8.current = n19,
      style: t10.label ? void 0 : { width: t10.width },
      dir: t10.dir,
      className: n2(
        A.wrapper({
          c: v8,
          size: ne,
          fillMode: re,
          rounded: ae,
          disabled: O3,
          required: V4(),
          invalid: !L7
        }),
        t10.className
      )
    },
    a14.createElement(
      "input",
      {
        ref: (n19) => o17.current = n19,
        role: t10.ariaRole || "textbox",
        readOnly: t10.readonly,
        tabIndex: t10.tabIndex || 0,
        disabled: O3,
        title: t10.title !== void 0 ? t10.title : U5,
        type: "text",
        spellCheck: false,
        autoComplete: "off",
        autoCorrect: "off",
        autoFocus: he,
        className: n2(A.inputInner({ c: v8 })),
        id: z4,
        value: U5,
        "aria-label": t10.ariaLabel,
        "aria-labelledby": t10.ariaLabelledBy,
        "aria-describedby": t10.ariaDescribedBy,
        "aria-haspopup": be2,
        "aria-disabled": O3,
        "aria-expanded": t10.ariaExpanded,
        "aria-controls": t10.ariaControls,
        "aria-required": t10.required,
        "aria-invalid": !L7,
        onKeyDown: c7,
        onChange: c7,
        onWheel: c7,
        onInput: c7,
        onClick: c7,
        name: t10.name,
        ...t10.inputAttributes
      }
    ),
    t10.children,
    t10.clearButton && t10.value && a14.createElement(y4, { onClick: F4, key: "clearbutton" }),
    le && a14.createElement("span", { className: n2(A.inputSpinner({ c: v8 })), onMouseDown: Me }, a14.createElement(
      M,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: n2(A.spinnerIncrease({ c: v8 })),
        icon: "caret-alt-up",
        svgIcon: caretAltUpIcon,
        "aria-label": h3.toLanguageString(a9, x3[a9]),
        title: h3.toLanguageString(a9, x3[a9]),
        onClick: Te
      }
    ), a14.createElement(
      M,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: n2(A.spinnerDecrease({ c: v8 })),
        icon: "caret-alt-down",
        svgIcon: caretAltDownIcon,
        "aria-label": h3.toLanguageString(c2, x3[c2]),
        title: h3.toLanguageString(c2, x3[c2]),
        onClick: Re
      }
    ))
  );
  return t10.label ? a14.createElement(
    I2,
    {
      label: t10.label,
      editorId: z4,
      editorValue: (j3 = o17.current) == null ? void 0 : j3.value,
      editorValid: L7,
      editorDisabled: O3,
      children: W3,
      style: { width: t10.width }
    }
  ) : W3;
});
Z.propTypes = {
  value: import_prop_types8.default.instanceOf(Date),
  format: import_prop_types8.default.oneOfType([
    W(import_prop_types8.default.string),
    import_prop_types8.default.shape({
      skeleton: import_prop_types8.default.string,
      pattern: import_prop_types8.default.string,
      date: import_prop_types8.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types8.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types8.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types8.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types8.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types8.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types8.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types8.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types8.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types8.default.bool,
      minute: import_prop_types8.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types8.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types8.default.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: import_prop_types8.default.oneOfType([
    W(
      import_prop_types8.default.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    import_prop_types8.default.shape({
      year: W(import_prop_types8.default.string),
      month: W(import_prop_types8.default.string),
      day: W(import_prop_types8.default.string),
      hour: W(import_prop_types8.default.string),
      minute: W(import_prop_types8.default.string),
      second: W(import_prop_types8.default.string)
    })
  ]),
  width: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.number]),
  tabIndex: import_prop_types8.default.number,
  title: import_prop_types8.default.string,
  steps: import_prop_types8.default.shape({
    year: W(import_prop_types8.default.number),
    month: W(import_prop_types8.default.number),
    day: W(import_prop_types8.default.number),
    hour: W(import_prop_types8.default.number),
    minute: W(import_prop_types8.default.number),
    second: W(import_prop_types8.default.number)
  }),
  min: import_prop_types8.default.instanceOf(Date),
  max: import_prop_types8.default.instanceOf(Date),
  disabled: import_prop_types8.default.bool,
  spinners: import_prop_types8.default.bool,
  name: import_prop_types8.default.string,
  dir: import_prop_types8.default.string,
  label: import_prop_types8.default.string,
  id: import_prop_types8.default.string,
  ariaLabelledBy: import_prop_types8.default.string,
  ariaDescribedBy: import_prop_types8.default.string,
  ariaLabel: import_prop_types8.default.string,
  ariaRole: import_prop_types8.default.string,
  ariaHasPopup: import_prop_types8.default.oneOfType([
    import_prop_types8.default.bool,
    import_prop_types8.default.oneOf(["grid", "dialog"])
  ]),
  ariaExpanded: import_prop_types8.default.oneOfType([import_prop_types8.default.bool]),
  onChange: import_prop_types8.default.func,
  validationMessage: import_prop_types8.default.string,
  required: import_prop_types8.default.bool,
  valid: import_prop_types8.default.bool,
  size: import_prop_types8.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types8.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types8.default.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: import_prop_types8.default.bool,
  inputAttributes: import_prop_types8.default.object
};
var r7 = {
  format: E2,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  formatPlaceholder: F,
  spinners: false,
  disabled: false,
  max: cloneDate(L2),
  min: cloneDate(H),
  minTime: cloneDate(q),
  maxTime: cloneDate(G2),
  validityStyles: true,
  validationMessage: tt,
  placeholder: null,
  enableMouseWheel: true,
  autoCorrectParts: true,
  autoSwitchParts: true,
  allowCaretMode: false,
  twoDigitYearMax: 68,
  ariaHasPopup: "grid",
  autoFocus: false
};
var G7 = a2();
Z.displayName = "KendoReactDateInput";

// node_modules/@progress/kendo-react-dateinputs/datepicker/DatePicker.mjs
var o10 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/datepicker/ToggleButton.mjs
var n13 = M;

// node_modules/@progress/kendo-react-dateinputs/common/PickerWrap.mjs
var a15 = __toESM(require_react(), 1);
var m2 = a15.forwardRef((e13, r14) => {
  const { _ref: n19 } = e13, t10 = a15.useRef(null);
  a15.useImperativeHandle(r14, () => t10.current), a15.useImperativeHandle(n19, () => t10.current);
  const c7 = a15.useMemo(() => n2(e13.className, "k-picker-wrap"), [e13.className]);
  return a15.createElement("span", { ref: t10, id: e13.id, style: e13.style, className: c7, tabIndex: e13.tabIndex }, e13.children);
});

// node_modules/@progress/kendo-react-dateinputs/hooks/usePickerFloatingLabel.mjs
var n14 = __toESM(require_react(), 1);
var c3 = (e13) => {
  const [t10, o17] = n14.useState(false), r14 = () => {
    var s8;
    e13.current && o17(!!((s8 = e13.current.element) != null && s8.value || e13.current.text));
  };
  return n14.useEffect(r14), {
    editorValue: t10
  };
};
var i8 = (e13) => {
  const { dateInput: t10, ...o17 } = e13, r14 = c3(t10);
  return n14.createElement(I2, { ...o17, ...r14 });
};

// node_modules/@progress/kendo-react-dateinputs/common/AdaptiveMode.mjs
var t7 = __toESM(require_react(), 1);
var I5 = (i11) => {
  const {
    footer: e13,
    windowWidth: n19 = 0,
    mobileFilter: r14,
    children: s8,
    navigatable: c7,
    navigatableElements: m7,
    expand: d11,
    animation: p11,
    title: b4,
    subTitle: f9,
    onClose: l11
  } = i11, x6 = () => t7.createElement(
    M,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      icon: "x",
      svgIcon: xIcon,
      onClick: l11
    }
  ), a23 = n(), h3 = {
    navigatable: c7 || false,
    navigatableElements: m7 || [],
    expand: d11,
    animation: p11 !== false,
    actions: x6(),
    filter: r14,
    onClose: l11,
    animationStyles: a23 && n19 <= a23.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: b4,
    subTitle: f9,
    className: "k-adaptive-actionsheet",
    position: a23 && n19 <= a23.small ? "fullscreen" : void 0
  };
  return t7.createElement(K, { ...h3 }, s8, e13 && t7.createElement(e3, { className: "k-actions k-actions-stretched" }, t7.createElement(
    M,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": e13.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: e13.onCancel
    },
    e13.cancelText
  ), t7.createElement(
    M,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": e13.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: e13.onApply
    },
    e13.applyText
  )));
};

// node_modules/@progress/kendo-react-dateinputs/datepicker/DatePicker.mjs
var ue = o10.forwardRef((n19, se) => {
  const N4 = I(n19.id), ce = i2(), g9 = n(), {
    defaultShow: de = l7.defaultShow,
    defaultValue: fe = l7.defaultValue,
    dateInput: me2 = l7.dateInput,
    calendar: pe2 = l7.calendar,
    toggleButton: ge = l7.toggleButton,
    popup: he = l7.popup,
    pickerWrap: kt = l7.pickerWrap,
    disabled: h3 = l7.disabled,
    format: ve = l7.format,
    max: R4 = l7.max,
    min: I8 = l7.min,
    popupSettings: v8 = l7.popupSettings,
    tabIndex: we = l7.tabIndex,
    weekNumber: be2 = l7.weekNumber,
    validityStyles: z4 = l7.validityStyles,
    size: S10 = l7.size,
    rounded: E4 = l7.rounded,
    fillMode: _3 = l7.fillMode,
    autoFocus: ye3 = l7.autoFocus,
    show: W3,
    autoSwitchParts: Ce,
    autoSwitchKeys: De,
    twoDigitYearMax: ke,
    ariaLabel: Oe,
    adaptive: Ot,
    formatPlaceholder: Pe,
    adaptiveTitle: Me,
    inputAttributes: Re,
    validationMessage: L7,
    visited: Pt,
    value: x6,
    touched: Mt,
    modified: Rt,
    _adaptiveMode: It = g9,
    valid: K5,
    focusedDate: Ie2,
    id: Se,
    ...q2
  } = n3(Dt, n19), B5 = () => {
    if (e)
      return b4.current && b4.current.ownerDocument || window.document;
  }, s8 = () => !!(p11.windowWidth && g9 && p11.windowWidth <= (g9 == null ? void 0 : g9.medium) && n19.adaptive), d11 = () => {
    const t10 = O3.current !== void 0 ? O3.current : x6 !== void 0 ? x6 : p11.value;
    return t10 !== null ? cloneDate(t10) : null;
  }, i11 = () => P6.current !== void 0 ? P6.current : W3 !== void 0 ? W3 : p11.show, Ee = () => me2 || l7.dateInput, _e = () => ge || l7.toggleButton, xe = () => pe2 || l7.calendar, Be = () => he || l7.popup, H5 = () => n19.required !== void 0 ? n19.required : false, T7 = () => {
    const t10 = d11() || x6 || null, r14 = I8, u11 = R4, M6 = P(t10, r14, u11), A4 = L7 !== void 0, V4 = (!H5() || t10 != null) && M6, F4 = K5 !== void 0 ? K5 : V4;
    return {
      customError: A4,
      rangeOverflow: t10 && u11.getTime() < t10.getTime() || false,
      rangeUnderflow: t10 && t10.getTime() < r14.getTime() || false,
      valid: F4,
      valueMissing: t10 === null
    };
  }, Te = (t10) => {
    for (const r14 of t10)
      D2({ windowWidth: r14.target.clientWidth });
  }, Ae = () => {
    c7.current && c7.current.focus();
  }, U5 = (t10) => {
    y8.current = t10;
  }, f9 = (t10) => {
    i11() !== t10 && (D2({ show: t10 }), t10 && n19.onOpen && n19.onOpen.call(void 0, { target: w7.current }), !t10 && n19.onClose && n19.onClose.call(void 0, { target: w7.current }));
  }, Ve = (t10) => {
    const r14 = d11();
    return r14 && t10 ? O(t10, r14) : t10;
  }, Fe = (t10) => {
    v8 != null && v8.onMouseDownOutside && v8.onMouseDownOutside.call(void 0, t10);
  }, Y2 = (t10, r14) => {
    D2({ value: cloneDate(t10 || void 0) }), O3.current = t10, P6.current = false, s8() || (m7.current = true), n19.onChange && n19.onChange.call(void 0, {
      syntheticEvent: r14.syntheticEvent,
      nativeEvent: r14.nativeEvent,
      value: d11(),
      show: i11(),
      target: w7.current
    }), O3.current = void 0, P6.current = void 0, f9(false);
  }, Ne = (t10) => {
    const r14 = Ve(t10.value);
    Y2(r14, t10);
  }, $5 = () => {
    const { popupClass: t10, ...r14 } = v8, u11 = i11(), M6 = d11(), A4 = M6 && getDate(M6), V4 = n2(t10), F4 = {
      popupClass: "k-datepicker-popup",
      show: u11,
      anchor: b4.current,
      className: V4,
      id: G8,
      anchorAlign: {
        horizontal: "left",
        vertical: "bottom"
      },
      popupAlign: {
        horizontal: "left",
        vertical: "top"
      },
      ...r14,
      onMouseDownOutside: Fe
    }, te2 = {
      disabled: h3,
      value: A4,
      min: I8,
      max: R4,
      weekNumber: be2,
      focusedDate: Ie2,
      className: s8() ? "k-calendar-lg" : "",
      navigation: !s8(),
      onChange: Ne
    }, ne = xe(), et = Be();
    return s8() ? o10.createElement(ne, { _ref: U5, ...te2 }) : o10.createElement(et, { ...F4 }, o10.createElement(ne, { _ref: U5, ...te2 }));
  }, j3 = () => {
    D2({ focused: false }), f9(false);
  }, ze = () => {
    const { windowWidth: t10 = 0 } = p11, r14 = {
      expand: i11(),
      onClose: j3,
      adaptiveTitle: Me,
      windowWidth: t10
    }, u11 = $5();
    return o10.createElement(I5, { ...r14 }, o10.createElement(t, { overflowHidden: true }, u11));
  }, We = (t10) => {
    Y2(t10.value, t10);
  }, Le = () => {
    D2({ focused: true });
  }, Ke = () => {
    f9(!i11());
  }, X2 = () => {
    h3 || (m7.current = true, f9(!i11()));
  }, qe = (t10) => {
    t10.preventDefault();
  }, He = (t10) => {
    const { altKey: r14, keyCode: u11 } = t10;
    if (u11 === e2.esc && i11()) {
      m7.current = true, f9(false);
      return;
    }
    r14 && (u11 === e2.up || u11 === e2.down) && (t10.preventDefault(), t10.stopPropagation(), m7.current = u11 === e2.up, f9(u11 === e2.down));
  }, w7 = o10.useRef(null), b4 = o10.useRef(null), c7 = o10.useRef(null), y8 = o10.useRef(null);
  o10.useImperativeHandle(
    w7,
    () => ({
      props: n19,
      get element() {
        return b4.current;
      },
      get calendar() {
        return y8.current;
      },
      get dateInput() {
        return c7.current;
      },
      get name() {
        return n19.name;
      },
      get show() {
        return i11();
      },
      get validity() {
        return T7();
      },
      get value() {
        return d11();
      },
      get mobileMode() {
        return s8();
      },
      togglePopup: Ke,
      // Hidden Methods but still accessible
      focus: Ae
    })
  ), o10.useImperativeHandle(se, () => w7.current);
  const O3 = o10.useRef(void 0), P6 = o10.useRef(void 0), Ue = o10.useRef(null), m7 = o10.useRef(false), Z2 = o10.useRef(false), C6 = o10.useRef(null), [p11, Ye] = o10.useState({
    value: fe,
    show: de,
    focused: false
  }), [, $e] = o10.useReducer((t10) => t10, true), D2 = (t10) => {
    Ye((r14) => ({ ...r14, ...t10 }));
  };
  o10.useEffect(() => {
    y8.current && y8.current.element && i11() && !Z2.current && y8.current.element.focus({ preventScroll: true }), c7.current && c7.current.element && !i11() && m7.current && c7.current.element.focus({ preventScroll: true }), Z2.current = i11(), m7.current = false;
  }), o10.useEffect(() => {
    var t10;
    return C6.current = e && window.ResizeObserver && new window.ResizeObserver((r14) => Te(r14)), i11() && $e(), (t10 = B5()) != null && t10.body && C6.current && C6.current.observe(B5().body), () => {
      var r14;
      clearTimeout(Ue.current), (r14 = B5()) != null && r14.body && C6.current && C6.current.disconnect();
    };
  }, []);
  const G8 = N4 + "-popup-id", je = $5(), Xe = Ee(), Ze = d11(), Ge = _e(), Je = ze(), J5 = !z4 || T7().valid, Q5 = ce.toLanguageString(r3, x3[r3]), Qe = {
    disabled: h3,
    format: ve,
    formatPlaceholder: Pe,
    id: Se,
    ariaLabelledBy: n19.ariaLabelledBy,
    ariaDescribedBy: n19.ariaDescribedBy,
    ariaLabel: Oe,
    max: R4,
    min: I8,
    name: n19.name,
    onChange: We,
    required: n19.required,
    _ref: c7,
    tabIndex: i11() ? -1 : we,
    title: n19.title,
    valid: T7().valid,
    validationMessage: L7,
    validityStyles: z4,
    value: Ze,
    label: void 0,
    placeholder: p11.focused ? null : n19.placeholder,
    ariaExpanded: i11(),
    size: null,
    fillMode: null,
    rounded: null,
    autoFill: n19.autoFill,
    twoDigitYearMax: ke,
    enableMouseWheel: n19.enableMouseWheel,
    autoCorrectParts: n19.autoCorrectParts,
    autoSwitchParts: Ce,
    autoSwitchKeys: De,
    allowCaretMode: n19.allowCaretMode,
    inputAttributes: Re
  }, ee = o10.createElement(
    a,
    {
      onFocus: Le,
      onBlur: s8() ? void 0 : j3,
      onSyncBlur: n19.onBlur,
      onSyncFocus: n19.onFocus
    },
    (t10) => o10.createElement(o10.Fragment, null, o10.createElement(
      "span",
      {
        ...n19.label ? {} : q2,
        ref: b4,
        className: n2(
          "k-input",
          "k-datepicker",
          {
            [`k-input-${a5.sizeMap[S10] || S10}`]: S10,
            [`k-rounded-${a5.roundedMap[E4] || E4}`]: E4,
            [`k-input-${_3}`]: _3,
            "k-invalid": !J5,
            "k-required": H5(),
            "k-disabled": h3
          },
          n19.className
        ),
        onKeyDown: He,
        style: { width: n19.width },
        onFocus: t10.onFocus,
        onBlur: t10.onBlur,
        onClick: s8() ? X2 : void 0
      },
      o10.createElement(
        Xe,
        {
          _ref: c7,
          ariaRole: "combobox",
          ariaExpanded: i11(),
          ariaControls: G8,
          autoFocus: ye3,
          ...Qe
        }
      ),
      o10.createElement(
        Ge,
        {
          type: "button",
          icon: "calendar",
          svgIcon: calendarIcon,
          title: Q5,
          className: "k-input-button",
          rounded: null,
          onClick: s8() ? void 0 : X2,
          "aria-label": Q5,
          fillMode: _3,
          onMouseDown: qe
        }
      ),
      !s8() && je
    ), s8() && Je)
  );
  return n19.label ? o10.createElement(
    i8,
    {
      dateInput: c7,
      label: n19.label,
      editorId: N4,
      editorValid: J5,
      editorDisabled: h3,
      children: ee,
      style: { width: n19.width },
      ...q2
    }
  ) : ee;
});
ue.propTypes = {
  className: import_prop_types9.default.string,
  defaultShow: import_prop_types9.default.bool,
  defaultValue: import_prop_types9.default.instanceOf(Date),
  disabled: import_prop_types9.default.bool,
  focusedDate: import_prop_types9.default.instanceOf(Date),
  format: import_prop_types9.default.oneOfType([
    import_prop_types9.default.string,
    import_prop_types9.default.shape({
      skeleton: W(import_prop_types9.default.string),
      pattern: W(import_prop_types9.default.string),
      date: W(import_prop_types9.default.oneOf(["short", "medium", "long", "full"])),
      time: W(import_prop_types9.default.oneOf(["short", "medium", "long", "full"])),
      datetime: W(import_prop_types9.default.oneOf(["short", "medium", "long", "full"])),
      era: W(import_prop_types9.default.oneOf(["narrow", "short", "long"])),
      year: W(import_prop_types9.default.oneOf(["numeric", "2-digit"])),
      month: W(import_prop_types9.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"])),
      day: W(import_prop_types9.default.oneOf(["numeric", "2-digit"])),
      weekday: W(import_prop_types9.default.oneOf(["narrow", "short", "long"])),
      hour: W(import_prop_types9.default.oneOf(["numeric", "2-digit"])),
      hour12: W(import_prop_types9.default.bool),
      minute: W(import_prop_types9.default.oneOf(["numeric", "2-digit"])),
      second: W(import_prop_types9.default.oneOf(["numeric", "2-digit"])),
      timeZoneName: W(import_prop_types9.default.oneOf(["short", "long"]))
    })
  ]),
  formatPlaceholder: import_prop_types9.default.oneOfType([
    W(
      import_prop_types9.default.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    import_prop_types9.default.shape({
      year: W(import_prop_types9.default.string),
      month: W(import_prop_types9.default.string),
      day: W(import_prop_types9.default.string),
      hour: W(import_prop_types9.default.string),
      minute: W(import_prop_types9.default.string),
      second: W(import_prop_types9.default.string)
    })
  ]),
  id: import_prop_types9.default.string,
  ariaLabelledBy: import_prop_types9.default.string,
  ariaDescribedBy: import_prop_types9.default.string,
  ariaLabel: import_prop_types9.default.string,
  min: import_prop_types9.default.instanceOf(Date),
  max: import_prop_types9.default.instanceOf(Date),
  name: import_prop_types9.default.string,
  popupSettings: import_prop_types9.default.shape({
    animate: W(import_prop_types9.default.bool),
    appendTo: W(import_prop_types9.default.any),
    popupClass: W(import_prop_types9.default.string)
  }),
  show: import_prop_types9.default.bool,
  tabIndex: import_prop_types9.default.number,
  title: import_prop_types9.default.string,
  value: import_prop_types9.default.instanceOf(Date),
  weekNumber: import_prop_types9.default.bool,
  width: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  validationMessage: import_prop_types9.default.string,
  required: import_prop_types9.default.bool,
  valid: import_prop_types9.default.bool,
  size: import_prop_types9.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types9.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types9.default.oneOf([null, "solid", "flat", "outline"]),
  adaptive: import_prop_types9.default.bool,
  adaptiveTitle: import_prop_types9.default.string,
  autoFocus: import_prop_types9.default.bool,
  inputAttributes: import_prop_types9.default.object
};
var l7 = {
  defaultShow: false,
  defaultValue: null,
  dateInput: Z,
  calendar: Q3,
  toggleButton: n13,
  popup: te,
  pickerWrap: m2,
  disabled: false,
  format: "d",
  max: L2,
  min: H,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: false,
  validityStyles: true,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: false
};
var Dt = a2();
ue.displayName = "KendoReactDatePicker";

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimePicker.mjs
var n17 = __toESM(require_react(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/package-metadata.mjs
var e9 = {
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1741695449,
  version: "10.0.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimeSelector.mjs
var s6 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimePart.mjs
var n16 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimeList.mjs
var n15 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/timepicker/services/DayPeriodService.mjs
var o11 = (s8, t10) => {
  const n19 = cloneDate(s8);
  return n19.setHours(t10), n19;
};
var m3 = (s8) => s8 !== null && s8 < 12;
var g5 = (s8) => s8 !== null && (!s8 || s8 > 11);
var l8 = (s8, t10, n19) => !t10 && !n19 || s8 >= t10 && s8 <= n19;
var d9 = (s8, t10, n19) => !t10 && !n19 || s8 >= t10 || s8 <= n19;
var H3 = class {
  constructor(t10) {
    this.intl = t10, this.min = null, this.max = null, this.part = null;
  }
  /**
   * @hidden
   */
  apply(t10, n19) {
    const i11 = t10.getHours(), e13 = m3(i11), r14 = m3(n19.getHours());
    if (e13 && r14 || !e13 && !r14)
      return t10;
    const [a23, h3 = 24] = this.normalizedRange(), u11 = i11 + (r14 ? -12 : 12);
    return o11(t10, Math.min(Math.max(a23, u11), h3 || 24));
  }
  /**
   * @hidden
   */
  configure(t10) {
    const { min: n19 = this.min, max: i11 = this.max, part: e13 = this.part } = t10;
    this.min = n19, this.max = i11, this.part = e13;
  }
  /**
   * @hidden
   */
  data(t10) {
    const n19 = this.part && this.part.names;
    if (!n19 || !this.min)
      return [];
    const i11 = [], [e13, r14] = this.normalizedRange(), a23 = this.intl.dateFormatNames(n19);
    return m3(e13) && i11.push({ text: a23.am, value: o11(this.min, e13) }), g5(r14) && i11.push({ text: a23.pm, value: o11(this.min, Math.max(12, r14)) }), this.min.getHours() !== e13 ? i11.reverse() : i11;
  }
  /**
   * @hidden
   */
  isRangeChanged(t10, n19) {
    return false;
  }
  /**
   * @hidden
   */
  limitRange(t10, n19, i11) {
    return [t10, n19];
  }
  /**
   * @hidden
   */
  total() {
    const [t10, n19] = this.normalizedRange();
    return !t10 && !n19 ? 2 : t10 > 11 || n19 < 12 ? 1 : 2;
  }
  /**
   * @hidden
   */
  selectedIndex(t10) {
    if (!this.valueInList(t10) || !this.min)
      return -1;
    const n19 = Math.floor(t10.getHours() / 12);
    return this.min.getHours() === this.normalizedRange()[0] ? n19 : n19 === 0 ? 1 : 0;
  }
  /**
   * @hidden
   */
  valueInList(t10) {
    return !this.min || !this.max ? false : (this.min.getHours() !== this.normalizedRange()[0] ? d9 : l8)(t10.getHours(), this.min.getHours(), this.max.getHours());
  }
  normalizedRange() {
    const t10 = this.min.getHours(), n19 = this.max.getHours();
    return [Math.min(t10, n19), Math.max(t10, n19)];
  }
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/services/DOMService.mjs
var y5 = class {
  constructor() {
    this.itemHeight = 0, this.timeListHeight = 0, this.didCalculate = false;
  }
  ensureHeights() {
    this.timeListHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(c7, n19) {
    if (!e)
      return;
    const t10 = n19 && n19.uTime, o17 = Q("div"), p11 = Q("span"), u11 = Q("ul"), h3 = Q("li"), m7 = () => h3("<span>02</span>", o(R.li({ c: t10 }))), d11 = () => u11([m7()], o(R.ul({ c: t10 }))), f9 = () => o17(
      [d11()],
      o(
        R.containerSelector({ c: t10 }),
        R.container({ c: t10, content: true, scrollable: true })
      )
    ), g9 = o17(
      [
        p11("minute", o(R.title({ c: t10 }))),
        o17([f9()], o(R.list({ c: t10 })))
      ],
      o(R.listWrapper({ c: t10 })),
      { left: "-10000px", position: "absolute" }
    ), l11 = `.${o(R.containerSelector({ c: t10 }))}`, a23 = c7 && c7.querySelector(l11) || document.body, r14 = a23.appendChild(g9);
    this.timeListHeight = r14.querySelector(l11).offsetHeight, this.itemHeight = r14.querySelector("li").offsetHeight, a23.removeChild(r14), this.didCalculate = true;
  }
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/services/HoursService.mjs
var a16 = 24;
var f5 = (n19) => (t10) => t10 % n19;
var c4 = f5(a16);
var H4 = (n19, t10) => (i11) => c4(n19 + i11 * t10);
var g6 = (n19, t10) => c4(a16 + n19 - t10);
var p8 = (n19) => (t10, i11) => !i11 || getDate(t10).getTime() === getDate(i11).getTime() ? t10 : G6(t10, n19);
var L4 = p8(0);
var R3 = p8(a16 - 1);
var B3 = class {
  constructor(t10) {
    this.intl = t10, this.boundRange = false, this.insertUndividedMax = false, this.min = null, this.max = null, this.step = 0, this.toListItem = null;
  }
  apply(t10, i11) {
    return G6(t10, i11.getHours());
  }
  configure(t10) {
    const {
      boundRange: i11 = this.boundRange,
      insertUndividedMax: s8 = this.insertUndividedMax,
      min: o17 = this.min,
      max: e13 = this.max,
      part: h3,
      step: M6 = this.step
    } = t10;
    this.boundRange = i11, this.insertUndividedMax = s8, this.toListItem = (x6) => {
      const m7 = G6(k, x6);
      return {
        text: this.intl.formatDate(m7, h3.pattern),
        value: m7
      };
    }, this.min = o17, this.max = e13, this.step = M6;
  }
  data(t10) {
    const [i11] = this.range(t10), s8 = H4(i11, this.step), o17 = (h3) => this.toListItem && this.toListItem(s8(h3)), e13 = E3(0, this.countFromMin(t10)).map(o17);
    return this.addLast(e13), t10 && this.addMissing(e13, t10), e13;
  }
  isRangeChanged(t10, i11) {
    return !this.min || !this.max ? false : !isEqual(this.min, t10) || !isEqual(this.max, i11);
  }
  limitRange(t10, i11, s8) {
    return this.boundRange ? [L4(t10, s8), R3(i11, s8)] : [t10, i11];
  }
  total(t10) {
    const i11 = this.insertUndividedMax && this.isLastMissing(t10) ? 1 : 0, s8 = this.isMissing(t10) ? 1 : 0;
    return this.countFromMin(t10) + s8 + i11;
  }
  selectedIndex(t10) {
    return Math.ceil(this.divideByStep(t10));
  }
  valueInList(t10) {
    return t10 ? this.insertUndividedMax && this.lastHour(t10) === t10.getHours() || !this.isMissing(t10) : true;
  }
  addLast(t10, i11) {
    return this.insertUndividedMax && this.isLastMissing(i11) && this.toListItem && t10.push(this.toListItem(this.lastHour(i11))), t10;
  }
  addMissing(t10, i11) {
    if (this.valueInList(i11))
      return t10;
    if (this.toListItem) {
      const s8 = this.toListItem(i11.getHours());
      t10.splice(this.selectedIndex(i11), 0, s8);
    }
    return t10;
  }
  countFromMin(t10) {
    const [i11, s8] = this.range(t10);
    return Math.floor(g6(s8, i11) / this.step) + 1;
  }
  isMissing(t10) {
    return t10 ? this.selectedIndex(t10) !== this.divideByStep(t10) : false;
  }
  isLastMissing(t10) {
    return this.max !== null && this.isMissing(G6(this.max, this.lastHour(t10)));
  }
  divideByStep(t10) {
    return g6(t10.getHours(), this.min.getHours()) / this.step;
  }
  lastHour(t10) {
    return this.range(t10)[1];
  }
  range(t10) {
    const [i11, s8] = this.limitRange(this.min, this.max, t10);
    return [i11.getHours(), s8.getHours()];
  }
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/services/MinutesService.mjs
var m4 = 60;
var l9 = (n19) => (t10) => t10 % n19;
var M5 = l9(m4);
var I6 = (n19, t10) => (i11) => M5(n19 + i11 * t10);
var u6 = (n19, t10) => M5(m4 + n19 - t10);
var c5 = (n19) => (t10, i11) => !i11 || t10.getHours() === i11.getHours() ? t10 : w6(t10, n19);
var L5 = c5(0);
var f6 = c5(m4 - 1);
var S6 = class {
  constructor(t10) {
    this.intl = t10, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = false;
  }
  apply(t10, i11) {
    return w6(t10, i11.getMinutes());
  }
  configure(t10) {
    const {
      insertUndividedMax: i11 = this.insertUndividedMax,
      min: s8 = this.min,
      max: h3 = this.max,
      part: e13,
      step: o17 = this.step
    } = t10;
    this.insertUndividedMax = i11, this.toListItem = (g9) => {
      const a23 = w6(k, g9);
      return {
        text: this.intl.formatDate(a23, e13.pattern),
        value: a23
      };
    }, this.min = s8, this.max = h3, this.step = o17;
  }
  data(t10) {
    const [i11] = this.range(t10), s8 = I6(i11, this.step), h3 = (o17) => this.toListItem && this.toListItem(s8(o17)), e13 = E3(0, this.countFromMin(t10)).map(h3);
    return this.addLast(e13), t10 && this.addMissing(e13, t10), e13;
  }
  isRangeChanged(t10, i11) {
    return this.min !== null && this.max !== null && (!isEqual(this.min, t10) || !isEqual(this.max, i11));
  }
  limitRange(t10, i11, s8) {
    return [L5(t10, s8), f6(i11, s8)];
  }
  total(t10) {
    const i11 = this.insertUndividedMax && this.isLastMissing(t10) ? 1 : 0, s8 = this.isMissing(t10) ? 1 : 0;
    return this.countFromMin(t10) + s8 + i11;
  }
  selectedIndex(t10) {
    return Math.ceil(this.divideByStep(t10));
  }
  valueInList(t10) {
    return t10 ? this.insertUndividedMax && this.lastMinute(t10) === t10.getMinutes() || !this.isMissing(t10) : true;
  }
  addLast(t10, i11) {
    return this.insertUndividedMax && this.isLastMissing(i11) && this.toListItem && t10.push(this.toListItem(this.lastMinute(i11))), t10;
  }
  addMissing(t10, i11) {
    if (this.valueInList(i11))
      return t10;
    if (this.toListItem) {
      const s8 = this.toListItem(i11.getMinutes());
      t10.splice(this.selectedIndex(i11), 0, s8);
    }
    return t10;
  }
  countFromMin(t10) {
    const [i11, s8] = this.range(t10);
    return Math.floor(u6(s8, i11) / this.step) + 1;
  }
  isMissing(t10) {
    return t10 ? this.selectedIndex(t10) !== this.divideByStep(t10) : false;
  }
  isLastMissing(t10) {
    return this.max !== null && this.isMissing(w6(this.max, this.lastMinute(t10)));
  }
  divideByStep(t10) {
    return u6(t10.getMinutes(), this.min.getMinutes()) / this.step;
  }
  lastMinute(t10) {
    return this.range(t10)[1];
  }
  range(t10) {
    const [i11, s8] = this.limitRange(this.min, this.max, t10);
    return [i11.getMinutes(), s8.getMinutes()];
  }
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/services/SecondsService.mjs
var m5 = 60;
var l10 = (n19) => (t10) => t10 % n19;
var g7 = l10(m5);
var S7 = (n19, t10) => (s8) => g7(n19 + s8 * t10);
var a17 = (n19, t10) => g7(m5 + n19 - t10);
var u7 = (n19) => (t10, s8) => !s8 || t10.getMinutes() === s8.getMinutes() && t10.getHours() === s8.getHours() ? t10 : A3(t10, n19);
var I7 = u7(0);
var L6 = u7(m5 - 1);
var D = class {
  constructor(t10) {
    this.intl = t10, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = false;
  }
  apply(t10, s8) {
    return A3(t10, s8.getSeconds());
  }
  configure(t10) {
    const {
      insertUndividedMax: s8 = this.insertUndividedMax,
      min: i11 = this.min,
      max: o17 = this.max,
      part: e13,
      step: h3 = this.step
    } = t10;
    this.insertUndividedMax = s8, this.toListItem = (M6) => {
      const d11 = A3(k, M6);
      return {
        text: this.intl.formatDate(d11, e13.pattern),
        value: d11
      };
    }, this.min = i11, this.max = o17, this.step = h3;
  }
  data(t10) {
    const [s8] = this.range(t10), i11 = S7(s8, this.step), o17 = (h3) => this.toListItem && this.toListItem(i11(h3)), e13 = E3(0, this.countFromMin(t10)).map(o17);
    return this.addLast(e13), t10 && this.addMissing(e13, t10), e13;
  }
  isRangeChanged(t10, s8) {
    return this.min !== null && this.max !== null && (!isEqual(this.min, t10) || !isEqual(this.max, s8));
  }
  limitRange(t10, s8, i11) {
    return [I7(t10, i11), L6(s8, i11)];
  }
  total(t10) {
    const s8 = this.insertUndividedMax && this.isLastMissing(t10) ? 1 : 0, i11 = this.isMissing(t10) ? 1 : 0;
    return this.countFromMin(t10) + i11 + s8;
  }
  selectedIndex(t10) {
    return Math.ceil(this.divideByStep(t10));
  }
  valueInList(t10) {
    return t10 ? this.insertUndividedMax && this.lastSecond(t10) === t10.getSeconds() || !this.isMissing(t10) : true;
  }
  divideByStep(t10) {
    return a17(t10.getSeconds(), this.min.getSeconds()) / this.step;
  }
  addLast(t10, s8) {
    return this.insertUndividedMax && this.isLastMissing(s8) && this.toListItem && t10.push(this.toListItem(this.lastSecond(s8))), t10;
  }
  addMissing(t10, s8) {
    if (this.valueInList(s8))
      return t10;
    if (this.toListItem) {
      const i11 = this.toListItem(s8.getSeconds());
      t10.splice(this.selectedIndex(s8), 0, i11);
    }
    return t10;
  }
  countFromMin(t10) {
    const [s8, i11] = this.range(t10);
    return Math.floor(a17(i11, s8) / this.step) + 1;
  }
  isMissing(t10) {
    return t10 ? this.selectedIndex(t10) !== this.divideByStep(t10) : false;
  }
  isLastMissing(t10) {
    return this.max !== null && this.isMissing(A3(this.max, this.lastSecond(t10)));
  }
  lastSecond(t10) {
    return this.range(t10)[1];
  }
  range(t10) {
    const [s8, i11] = this.limitRange(this.min, this.max, t10);
    return [s8.getSeconds(), i11.getSeconds()];
  }
};

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimeList.mjs
var F3 = 2;
var S8 = 0.05;
var N3 = 100;
var k4 = 0;
var T6 = 9;
var B4 = {
  [e2.end]: (h3, i11) => h3[h3.length - 1],
  [e2.home]: (h3, i11) => h3[0],
  [e2.up]: (h3, i11) => h3[i11 - 1],
  [e2.down]: (h3, i11) => h3[i11 + 1]
};
var g8 = {
  [o9.dayperiod]: H3,
  [o9.hour]: B3,
  [o9.minute]: S6,
  [o9.second]: D
};
var r8 = class r9 extends n15.Component {
  constructor(i11) {
    super(i11), this.intl = null, this._element = null, this.service = null, this.virtualization = null, this.topOffset = 0, this.bottomOffset = 0, this.itemHeight = 0, this.listHeight = 0, this.topThreshold = 0, this.bottomThreshold = 0, this.animateToIndex = false, this.focus = (t10) => {
      Promise.resolve().then(() => {
        this.element && this.element.focus(t10);
      });
    }, this.itemOffset = (t10) => {
      if (!this.virtualization || !this.service)
        return -1;
      const s8 = this.service.selectedIndex(this.props.value), e13 = this.virtualization.activeIndex(), o17 = this.virtualization.itemOffset(e13), a23 = Math.abs(Math.ceil(t10) - o17);
      if (s8 === e13 && a23 < F3)
        return o17;
      const d11 = s8 > e13;
      return d11 && a23 >= this.bottomThreshold || !d11 && a23 > this.topThreshold ? this.virtualization.itemOffset(e13 + 1) : o17;
    }, this.calculateHeights = () => {
      this.dom.didCalculate && (this.itemHeight = this.dom.itemHeight, this.listHeight = this.dom.timeListHeight, this.topOffset = (this.listHeight - this.itemHeight) / 2, this.bottomOffset = this.listHeight - this.itemHeight, this.props.mobileMode && (this.topOffset += T6, this.bottomOffset += T6 * 2), this.topThreshold = this.itemHeight * S8, this.bottomThreshold = this.itemHeight * (1 - S8));
    }, this.configureServices = ({ min: t10, max: s8, value: e13 } = this.props) => {
      if (this.service) {
        const [o17, a23] = this.service.limitRange(
          t10 || this.min,
          s8 || this.max,
          e13 || this.props.value
        );
        this.service.configure(this.serviceSettings({ min: o17, max: a23 }));
      }
    }, this.serviceSettings = (t10) => {
      const s8 = {
        boundRange: this.props.boundRange || r9.defaultProps.boundRange,
        insertUndividedMax: false,
        min: cloneDate(this.min),
        max: cloneDate(this.max),
        part: this.props.part,
        step: this.step
      }, e13 = Object.assign({}, s8, t10);
      return e13.boundRange = e13.part.type !== "hour" || this.props.boundRange || r9.defaultProps.boundRange, e13;
    }, this.handleScrollAction = ({ target: t10, animationInProgress: s8 }) => {
      if (!(!this.virtualization || !this.service) && t10 && !s8) {
        this.animateToIndex = false;
        const e13 = this.virtualization.itemIndex(this.itemOffset(t10.scrollTop)), o17 = this.service.data(this.props.value)[e13];
        this.handleChange(o17);
      }
    }, this.handleFocus = (t10) => {
      const { onFocus: s8 } = this.props;
      s8 && s8.call(void 0, t10);
    }, this.handleBlur = (t10) => {
      const { onBlur: s8 } = this.props;
      s8 && s8.call(void 0, t10);
    }, this.handleMouseOver = () => {
      if (!this._element)
        return;
      const t10 = o3(document);
      document && t10 !== this._element && this.props.show && this._element.focus({ preventScroll: true });
    }, this.handleKeyDown = (t10) => {
      if (!this.service)
        return;
      const { keyCode: s8 } = t10;
      (s8 === e2.down || s8 === e2.up || s8 === e2.end || s8 === e2.home) && t10.preventDefault();
      const o17 = (B4[t10.keyCode] || o2)(this.service.data(this.props.value), this.service.selectedIndex(this.props.value));
      o17 && this.handleChange(o17);
    }, this.handleChange = U2((t10) => {
      if (!this.service)
        return;
      const s8 = this.service.apply(this.props.value, t10.value);
      if (this.props.value.getTime() === s8.getTime())
        return;
      const { onChange: e13 } = this.props;
      e13 && e13.call(void 0, s8);
    }, N3), this.dom = new y5();
  }
  get element() {
    return this._element;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get min() {
    return this.props.min || r9.defaultProps.min;
  }
  get max() {
    return this.props.max || r9.defaultProps.max;
  }
  get step() {
    return this.props.step !== void 0 && this.props.step !== 0 ? Math.floor(this.props.step) : r9.defaultProps.step;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      const { unstyled: i11 } = this.props;
      this._element && (this.dom.calculateHeights(this._element, i11), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    if (!this.virtualization || !this.service)
      return;
    const i11 = this.service.selectedIndex(this.props.value);
    if (this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](i11), this.animateToIndex = true, !this.topOffset && this._element) {
      const { unstyled: t10 } = this.props;
      this.dom.calculateHeights(this._element, t10);
    }
  }
  /**
   * @hidden
   */
  render() {
    const { part: i11, value: t10, unstyled: s8 } = this.props;
    if (!i11.type || !g8[i11.type])
      return;
    const e13 = s8 && s8.uTime;
    this.calculateHeights(), this.intl = l(this), this.service = new g8[i11.type](this.intl), this.configureServices();
    const o17 = this.service.data(t10), a23 = "translateY(" + this.topOffset + "px)", d11 = this.service.total(t10), v8 = n15.createElement(n15.Fragment, null, n15.createElement(
      "ul",
      {
        style: { transform: a23, msTransform: a23 },
        className: n2(R.ul({ c: e13 }))
      },
      o17.map((p11, b4) => n15.createElement(
        "li",
        {
          key: b4,
          className: n2(R.li({ c: e13 })),
          onClick: () => {
            this.handleChange(p11);
          }
        },
        n15.createElement("span", null, p11.text)
      ))
    ), n15.createElement("div", { className: n2(R.scrollablePlaceholder({ c: e13 })) }));
    return n15.createElement(
      "div",
      {
        className: n2(R.list({ c: e13 })),
        id: String(this.props.id || ""),
        tabIndex: this.props.disabled ? -1 : 0,
        ref: (p11) => {
          this._element = p11;
        },
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseOver: this.handleMouseOver
      },
      this.dom.didCalculate ? n15.createElement(
        w2,
        {
          bottomOffset: this.bottomOffset,
          children: v8,
          className: n2(
            R.containerSelector({ c: e13 }),
            R.container({ c: e13 })
          ),
          itemHeight: this.itemHeight,
          maxScrollDifference: this.listHeight,
          onScrollAction: this.handleScrollAction,
          ref: (p11) => {
            this.virtualization = p11;
          },
          role: "presentation",
          skip: k4,
          tabIndex: -1,
          take: d11,
          topOffset: this.topOffset,
          total: d11,
          unstyled: s8
        }
      ) : n15.createElement(
        "div",
        {
          className: n2(
            R.containerSelector({ c: e13 }),
            R.container({ c: e13, content: true, scrollable: true })
          )
        },
        v8
      )
    );
  }
};
r8.propTypes = {
  id: import_prop_types10.default.number,
  max: import_prop_types10.default.instanceOf(Date),
  min: import_prop_types10.default.instanceOf(Date),
  part: function(i11, t10, s8) {
    const e13 = i11[t10];
    if (!e13 || !g8[e13.type])
      throw new Error(`
                    Invalid prop '${t10}' supplied to ${s8}.
                    Supported part types are hour|minute|second|dayperiod.
                `);
    return null;
  },
  step: function(i11, t10, s8) {
    const e13 = i11[t10];
    if (e13 !== void 0 && e13 <= 0)
      throw new Error(`
                    Invalid prop '${t10}' supplied to ${s8}.
                    ${t10} cannot be less than 1.
                `);
    return null;
  },
  value: import_prop_types10.default.instanceOf(Date),
  smoothScroll: import_prop_types10.default.bool,
  show: import_prop_types10.default.bool
}, r8.defaultProps = {
  boundRange: false,
  max: G2,
  min: k,
  step: 1,
  smoothScroll: true
};
var x5 = r8;
p(x5);

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimePart.mjs
var v6 = new RegExp(
  `${o9.hour}|${o9.minute}|${o9.second}|${o9.dayperiod}|literal`
);
var a18 = class a19 extends n16.Component {
  constructor(i11) {
    super(i11), this._element = null, this._nowButton = null, this.dateFormatParts = [], this.timeLists = [], this.focus = (s8, e13) => {
      Promise.resolve().then(() => {
        e13 && this._nowButton && this._nowButton.element && this._nowButton.element.focus();
        const o17 = this.timeLists[0];
        !e13 && this.state.activeListIndex === -1 && !this.hasActiveButton() && o17 && o17.element && o17.focus(s8);
      });
    }, this.timeFormatReducer = (s8, e13) => s8 + e13.pattern, this.timeFormatFilter = (s8, e13, o17) => {
      const r14 = e13 >= 1 && o17[e13 - 1];
      return r14 && r14 && s8.type === "literal" ? v6.test(r14.type || "") : v6.test(s8.type || "");
    }, this.focusList = (s8) => {
      this.timeLists.length && this.timeLists.reduce(this.listReducer, []).map((e13) => s8 === 1 ? e13.next : e13.prev).map((e13) => e13 && e13.element && e13.element.focus({ preventScroll: true }));
    }, this.listReducer = (s8, e13, o17, r14) => s8.length || e13.props.id !== this.state.activeListIndex ? s8 : [
      {
        next: r14[o17 + 1] || e13,
        prev: r14[o17 - 1] || e13
      }
    ], this.showNowButton = () => !this.hasSteps() && this.props.nowButton && N2(B2(), this.min, this.max), this.handleKeyDown = (s8) => {
      const { keyCode: e13 } = s8;
      switch (e13) {
        case e2.left:
          s8.preventDefault(), this.focusList(
            0
            /* Left */
          );
          return;
        case e2.right:
          s8.preventDefault(), this.focusList(
            1
            /* Right */
          );
          return;
        default:
          return;
      }
    }, this.handleListBlur = () => {
      this.nextTick(() => {
        this.setState({ activeListIndex: -1 });
      });
    }, this.handleListFocus = (s8) => {
      clearTimeout(this.nextTickId), this.setState({
        activeListIndex: s8
      });
    }, this.handleChange = (s8) => {
      const { onChange: e13 } = this.props;
      e13 && e13.call(void 0, s8);
    }, this.snapTime = x4(R2(this.props.steps, this.props.min || a19.defaultProps.min)), this.state = {
      activeListIndex: -1
    }, this.hasActiveButton = this.hasActiveButton.bind(this);
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    return F2(this.snapTime(cloneDate(this.props.value || k)), this.min, this.max);
  }
  get intl() {
    return l(this);
  }
  get min() {
    return this.snapTime(this.props.min || a19.defaultProps.min);
  }
  get max() {
    return this.snapTime(this.props.max || a19.defaultProps.max);
  }
  get steps() {
    return this.props.steps || a19.defaultProps.steps;
  }
  get boundRange() {
    return this.props.boundRange !== void 0 ? this.props.boundRange : a19.defaultProps.boundRange;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  componentDidMount() {
    const { onMount: i11 } = this.props;
    i11 && i11.call(void 0, this.value);
  }
  /**
   * @hidden
   */
  render() {
    const { format: i11, smoothScroll: s8, onNowClick: e13, className: o17, disabled: r14, mobileMode: w7, show: D2, onNowKeyDown: E4, unstyled: g9 } = this.props, m7 = g9 && g9.uTime;
    this.snapTime = x4(R2(this.steps, this.min)), this.dateFormatParts = this.intl.splitDateFormat(i11 || a19.defaultProps.format).filter(this.timeFormatFilter);
    const F4 = n2(
      R.part({
        c: m7,
        mobileMode: w7,
        disabled: r14
      }),
      o17
    );
    this.timeLists = [];
    const b4 = s(this), y8 = b4.toLanguageString(m, x3[m]);
    return n16.createElement("div", { className: F4 }, n16.createElement("div", { className: n2(R.header({ c: m7 })) }, n16.createElement("span", { className: n2(R.title({ c: m7 })) }, this.intl.formatDate(this.value, this.dateFormatParts.reduce(this.timeFormatReducer, ""))), this.showNowButton() && n16.createElement(
      M,
      {
        type: "button",
        ref: (u11) => {
          this._nowButton = u11;
        },
        className: n2(R.now({ c: m7 })),
        fillMode: "flat",
        themeColor: "base",
        title: y8,
        onKeyDown: E4,
        "aria-label": y8,
        onClick: e13,
        tabIndex: r14 ? -1 : 0
      },
      b4.toLanguageString(p3, x3[p3])
    )), n16.createElement("div", { className: n2(R.listContainer({ c: m7 })), onKeyDown: this.handleKeyDown }, n16.createElement("span", { className: n2(R.highlight({ c: m7 })) }), this.dateFormatParts.map((u11, c7) => u11.type !== "literal" ? n16.createElement(
      "div",
      {
        key: c7,
        className: n2(
          R.listWrapper({
            c: m7,
            focused: c7 === this.state.activeListIndex
          })
        ),
        role: "presentation",
        tabIndex: -1
      },
      n16.createElement(
        "span",
        {
          className: n2(R.title({ c: m7 })),
          onMouseDown: (p11) => {
            p11.preventDefault();
          }
        },
        this.intl.dateFieldName(u11)
      ),
      n16.createElement(
        x5,
        {
          min: this.min,
          max: this.max,
          boundRange: this.boundRange,
          part: u11,
          step: u11.type ? this.steps[u11.type] : 1,
          smoothScroll: s8,
          ref: (p11) => {
            p11 && this.timeLists.push(p11);
          },
          id: c7,
          onFocus: () => {
            this.handleListFocus(c7);
          },
          onBlur: this.handleListBlur,
          onChange: this.handleChange,
          value: this.value,
          disabled: r14,
          show: D2,
          mobileMode: w7,
          unstyled: g9
        }
      )
    ) : n16.createElement("div", { key: c7, className: n2(R.separator({ c: m7 })) }, u11.pattern))));
  }
  nextTick(i11) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i11());
  }
  hasActiveButton() {
    const i11 = o3(document);
    return this._nowButton && i11 === this._nowButton.element;
  }
  hasSteps() {
    const i11 = Object.keys(this.steps);
    return i11.length !== i11.reduce((s8, e13) => s8 + this.steps[e13], 0);
  }
};
a18.propTypes = {
  cancelButton: import_prop_types11.default.bool,
  disabled: import_prop_types11.default.bool,
  format: import_prop_types11.default.oneOfType([
    import_prop_types11.default.string,
    import_prop_types11.default.shape({
      skeleton: import_prop_types11.default.string,
      pattern: import_prop_types11.default.string,
      date: import_prop_types11.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types11.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types11.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types11.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types11.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types11.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types11.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types11.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types11.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types11.default.bool,
      minute: import_prop_types11.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types11.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types11.default.oneOf(["short", "long"])
    })
  ]),
  max: import_prop_types11.default.instanceOf(Date),
  min: import_prop_types11.default.instanceOf(Date),
  nowButton: import_prop_types11.default.bool,
  steps: import_prop_types11.default.shape({
    hour: import_prop_types11.default.number,
    minute: import_prop_types11.default.number,
    second: import_prop_types11.default.number
  }),
  smoothScroll: import_prop_types11.default.bool,
  tabIndex: import_prop_types11.default.number,
  value: import_prop_types11.default.instanceOf(Date),
  show: import_prop_types11.default.bool
}, a18.defaultProps = {
  value: null,
  disabled: false,
  nowButton: true,
  cancelButton: true,
  format: "hh:mm a",
  min: q,
  max: G2,
  steps: {},
  boundRange: false
};
var f7 = a18;
p(f7);
v(f7);

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimeSelector.mjs
var r10 = class r11 extends s6.Component {
  constructor(i11) {
    super(i11), this._element = null, this._cancelButton = null, this._acceptButton = null, this.timePart = null, this.focusActiveList = () => {
      this.timePart && this.timePart.focus({ preventScroll: true });
    }, this.handleKeyDown = (e13) => {
      const { keyCode: n19 } = e13;
      switch (n19) {
        case e2.enter:
          this.hasActiveButton() || this.handleAccept(e13);
          return;
        default:
          return;
      }
    }, this.revertToNowButton = (e13) => {
      const { keyCode: n19, shiftKey: o17 } = e13;
      !o17 && n19 === e2.tab && (e13.preventDefault(), this.props.nowButton !== false ? this.timePart && this.timePart.focus({ preventScroll: true }, true) : this.timePart && this.timePart.focus({ preventScroll: true }));
    }, this.handleNowKeyDown = (e13) => {
      var c7;
      const { keyCode: n19, shiftKey: o17 } = e13;
      o17 && n19 === e2.tab ? (e13.preventDefault(), this._acceptButton && ((c7 = this._acceptButton.element) == null || c7.focus({ preventScroll: true }))) : n19 === e2.enter && (e13.stopPropagation(), this.handleNowClick(e13));
    }, this.handleAccept = (e13) => {
      const n19 = this.mergeValue(
        cloneDate(this.value || B2()),
        this.timePart ? this.timePart.value : this.current
      );
      this.setState({ value: n19 }), this.valueDuringOnChange = n19;
      const { onChange: o17 } = this.props;
      o17 && o17.call(void 0, {
        syntheticEvent: e13,
        nativeEvent: e13.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleReject = (e13) => {
      this.setState({ current: this.value });
      const { onReject: n19 } = this.props;
      n19 && n19.call(void 0, e13);
    }, this.handleNowClick = (e13) => {
      const n19 = this.mergeValue(cloneDate(this.value || B2()), B2());
      this.setState({
        current: n19,
        value: n19
      }), this.valueDuringOnChange = n19;
      const { onChange: o17 } = this.props;
      o17 && o17.call(void 0, {
        syntheticEvent: e13,
        nativeEvent: e13.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleChange = (e13) => {
      this.setState({ current: e13 });
      const { handleTimeChange: n19 } = this.props;
      n19 && n19.call(void 0, {
        time: e13
      });
    }, this.dateFormatParts = this.intl.splitDateFormat(this.props.format || r11.defaultProps.format), this.mergeValue = _2(S5(this.dateFormatParts)), this.hasActiveButton = this.hasActiveButton.bind(this), this.state = {
      current: this.props.value || k,
      value: this.props.value || r11.defaultProps.value
    };
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    const i11 = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i11 !== null ? cloneDate(i11) : null;
  }
  get intl() {
    return l(this);
  }
  get current() {
    return this.state.current !== null ? cloneDate(this.state.current) : null;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  /**
   * @hidden
   */
  render() {
    const {
      format: i11,
      cancelButton: e13,
      disabled: n19,
      tabIndex: o17,
      className: c7,
      smoothScroll: P6,
      min: N4,
      max: k5,
      boundRange: T7,
      nowButton: E4,
      steps: S10,
      show: _3,
      mobileMode: b4,
      unstyled: l11
    } = this.props, I8 = l11 && l11.uTimePicker, d11 = l11 && l11.uTime, C6 = s(this), f9 = C6.toLanguageString(k2, x3[k2]), g9 = C6.toLanguageString(w3, x3[w3]);
    return s6.createElement(s6.Fragment, null, s6.createElement(
      "div",
      {
        ref: (a23) => {
          this._element = a23;
        },
        tabIndex: n19 ? void 0 : o17 || 0,
        className: n2(
          U.timeSelector({
            c: I8,
            mobileMode: b4,
            disabled: n19
          }),
          c7
        ),
        onKeyDown: this.handleKeyDown
      },
      s6.createElement(
        f7,
        {
          ref: (a23) => {
            this.timePart = a23;
          },
          value: this.current,
          onChange: this.handleChange,
          onNowClick: this.handleNowClick,
          format: i11,
          smoothScroll: P6,
          min: N4,
          max: k5,
          boundRange: T7,
          disabled: n19,
          nowButton: E4,
          steps: S10,
          show: _3,
          mobileMode: b4,
          onNowKeyDown: this.handleNowKeyDown,
          unstyled: l11
        }
      )
    ), this.props.footer && s6.createElement("div", { className: n2(R.footer({ c: d11 })) }, e13 && s6.createElement(
      M,
      {
        type: "button",
        ref: (a23) => {
          this._cancelButton = a23;
        },
        className: n2(R.cancel({ c: d11 })),
        onClick: this.handleReject,
        title: f9,
        "aria-label": f9
      },
      f9
    ), s6.createElement(
      M,
      {
        type: "button",
        ref: (a23) => {
          this._acceptButton = a23;
        },
        className: n2(R.accept({ c: d11 })),
        themeColor: "primary",
        onClick: this.handleAccept,
        onKeyDown: this.revertToNowButton,
        title: g9,
        "aria-label": g9
      },
      g9
    )));
  }
  nextTick(i11) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i11());
  }
  hasActiveButton() {
    if (!this._acceptButton || !this._acceptButton.element)
      return false;
    const i11 = o3(document);
    return this._acceptButton && i11 === this._acceptButton.element || this._cancelButton && i11 === this._cancelButton.element;
  }
};
r10.propTypes = {
  cancelButton: import_prop_types12.default.bool,
  className: import_prop_types12.default.string,
  disabled: import_prop_types12.default.bool,
  format: import_prop_types12.default.oneOfType([
    import_prop_types12.default.string,
    import_prop_types12.default.shape({
      skeleton: import_prop_types12.default.string,
      pattern: import_prop_types12.default.string,
      date: import_prop_types12.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types12.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types12.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types12.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types12.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types12.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types12.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types12.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types12.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types12.default.bool,
      minute: import_prop_types12.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types12.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types12.default.oneOf(["short", "long"])
    })
  ]),
  max: import_prop_types12.default.instanceOf(Date),
  min: import_prop_types12.default.instanceOf(Date),
  nowButton: import_prop_types12.default.bool,
  steps: import_prop_types12.default.shape({
    hour: import_prop_types12.default.number,
    minute: import_prop_types12.default.number,
    second: import_prop_types12.default.number
  }),
  smoothScroll: import_prop_types12.default.bool,
  tabIndex: import_prop_types12.default.number,
  value: import_prop_types12.default.instanceOf(Date),
  show: import_prop_types12.default.bool
}, r10.defaultProps = {
  value: null,
  disabled: false,
  cancelButton: true,
  format: "t",
  min: q,
  max: G2,
  boundRange: false,
  footer: true
};
var p9 = r10;
p(p9);
v(p9);

// node_modules/@progress/kendo-react-dateinputs/timepicker/TimePicker.mjs
var a20 = class a21 extends n17.Component {
  constructor(i11) {
    super(i11), this._element = null, this._dateInput = n17.createRef(), this._timeSelector = null, this.shouldFocusDateInput = false, this.prevShow = false, this.showLicenseWatermark = false, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.renderTimeSelector = () => {
      const { smoothScroll: t10, cancelButton: s8, nowButton: o17, disabled: l11, format: h3, steps: r14, unstyled: m7 } = this.props;
      return n17.createElement(
        p9,
        {
          ref: this.setTimeSelectorRef,
          mobileMode: this.mobileMode,
          show: this.show,
          cancelButton: s8,
          disabled: l11,
          nowButton: o17,
          format: h3,
          min: this.min,
          max: this.max,
          steps: r14,
          smoothScroll: t10,
          value: this.value,
          footer: !this.mobileMode,
          handleTimeChange: this.mobileMode && this.handleTimeChange,
          onChange: this.handleValueChange,
          onReject: this.handleValueReject,
          unstyled: m7
        }
      );
    }, this.renderPopup = () => {
      const { popupClass: t10, ...s8 } = this.popupSettings, { unstyled: o17 } = this.props, l11 = o17 && o17.uTimePicker, h3 = n2(t10), r14 = {
        popupClass: U.popup({ c: l11 }),
        show: this.show,
        animate: this.element !== null,
        anchor: this.element,
        className: h3,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...s8
      };
      return this.props.popup ? n17.createElement(this.props.popup, { ...r14 }, this.renderTimeSelector()) : n17.createElement(te, { ...r14 }, this.renderTimeSelector());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t10 = 0 } = this.state, s8 = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle,
        windowWidth: t10,
        footer: {
          cancelText: this.localizationService.toLanguageString(T3, x3[k2]),
          onCancel: this.handleValueReject,
          applyText: this.localizationService.toLanguageString(w3, x3[w3]),
          onApply: (o17) => this.handleValueChange(o17)
        }
      };
      return n17.createElement(I5, { ...s8 }, n17.createElement(t, { overflowHidden: true }, this.renderTimeSelector()));
    }, this.setTimeSelectorRef = (t10) => {
      this._timeSelector = t10;
    }, this.nextValue = (t10, s8) => t10.value !== void 0 ? t10.value : s8.value, this.nextShow = (t10, s8) => t10.show !== void 0 ? t10.show : s8.show, this.handleInputValueChange = (t10) => {
      const s8 = this.mergeTime(t10.value);
      this.handleValueChange({ ...t10, value: s8 });
    }, this.handleTimeChange = (t10) => {
      this.setState({ candidate: t10.time });
    }, this.handleValueChange = (t10) => {
      this.setState({
        value: cloneDate(t10.value || this.state.candidate)
      }), this.valueDuringOnChange = t10.value, this.showDuringOnChange = false, this.shouldFocusDateInput = true;
      const { onChange: s8 } = this.props, o17 = this.state.candidate || this.value;
      s8 && s8.call(void 0, {
        syntheticEvent: t10.syntheticEvent,
        nativeEvent: t10.nativeEvent,
        value: o17,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(false);
    }, this.handleFocus = () => {
      this.setState({ focused: true });
    }, this.handleBlur = () => {
      this.setState({ focused: false }), this.setShow(false);
    }, this.handleValueReject = (t10) => {
      this.setShow(false);
    }, this.handleIconClick = (t10) => {
      this.props.disabled || (this.shouldFocusDateInput = true, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t10) => {
      t10.preventDefault();
    }, this.handleKeyDown = (t10) => {
      const { altKey: s8, keyCode: o17 } = t10;
      if (o17 === e2.esc) {
        this.shouldFocusDateInput = true, this.setShow(false);
        return;
      }
      s8 && (o17 === e2.up || o17 === e2.down) && (t10.preventDefault(), t10.stopPropagation(), this.shouldFocusDateInput = o17 === e2.up, this.setShow(o17 === e2.down));
    }, this.showLicenseWatermark = !h(e9, { component: "TimePicker" }), this.state = {
      value: this.props.defaultValue || a21.defaultProps.defaultValue,
      show: this.props.defaultShow || a21.defaultProps.defaultShow,
      focused: false,
      candidate: null
    }, this.normalizeTime = this.normalizeTime.bind(this), this.setShow = this.setShow.bind(this), this.mergeTime = this.mergeTime.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the TimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the TimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the TimeSelector component inside the TimePicker component.
   */
  get timeSelector() {
    return this._timeSelector;
  }
  /**
   * Gets the value of the TimePicker.
   */
  get value() {
    const i11 = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i11 !== null ? cloneDate(i11) : null;
  }
  /**
   * Gets the popup state of the TimeSelector.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the TimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the TimePicker is set.
   */
  get validity() {
    const i11 = this.value && this.normalizeTime(this.value), t10 = this.normalizeTime(this.min), s8 = this.normalizeTime(this.max), o17 = P5(i11, t10, s8), l11 = this.props.validationMessage !== void 0, h3 = (!this.required || this.value !== null) && o17, r14 = this.props.valid !== void 0 ? this.props.valid : h3;
    return {
      customError: l11,
      rangeOverflow: O2(i11, s8),
      rangeUnderflow: v5(i11, t10),
      valid: r14,
      valueMissing: this.value === null
    };
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    var t10;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t10 = this.props._adaptiveMode) == null ? void 0 : t10.medium) && this.props.adaptive);
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : a21.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : false;
  }
  get popupSettings() {
    return this.props.popupSettings || a21.defaultProps.popupSettings;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : a21.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : a21.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || a21.defaultProps.dateInput;
  }
  get localizationService() {
    return s(this);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var i11;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (i11 = this.document) != null && i11.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._timeSelector && this.show && !this.prevShow ? this._timeSelector.focusActiveList() : this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput && this.dateInput.element.focus({ preventScroll: true }), this.prevShow = this.show, this.shouldFocusDateInput = false;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var i11;
    (i11 = this.document) != null && i11.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i11 = a21.defaultProps.size,
      rounded: t10 = a21.defaultProps.rounded,
      fillMode: s8 = a21.defaultProps.fillMode,
      disabled: o17,
      tabIndex: l11,
      title: h3,
      id: r14,
      className: m7,
      format: O3,
      formatPlaceholder: D2,
      width: P6,
      name: z4,
      steps: k5,
      validationMessage: x6,
      required: E4,
      validityStyles: R4,
      ariaLabelledBy: B5,
      ariaDescribedBy: V4,
      unstyled: v8,
      enableMouseWheel: A4,
      autoCorrectParts: F4,
      autoSwitchParts: L7,
      autoSwitchKeys: N4,
      allowCaretMode: _3,
      inputAttributes: q2
    } = this.props, w7 = v8 && v8.uTimePicker, S10 = !this.validityStyles || this.validity.valid, K5 = {
      disabled: o17,
      format: O3,
      formatPlaceholder: D2,
      id: r14,
      ariaLabelledBy: B5,
      ariaDescribedBy: V4,
      max: this.normalizeTime(this.max),
      min: this.normalizeTime(this.min),
      name: z4,
      onChange: this.handleInputValueChange,
      required: E4,
      steps: k5,
      tabIndex: this.show ? -1 : l11,
      title: h3,
      valid: this.validity.valid,
      validationMessage: x6,
      validityStyles: R4,
      value: this.value && this.normalizeTime(this.value),
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaHasPopup: "dialog",
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      enableMouseWheel: A4,
      autoCorrectParts: F4,
      autoSwitchParts: L7,
      autoSwitchKeys: N4,
      allowCaretMode: _3,
      inputAttributes: q2
    }, W3 = this.localizationService.toLanguageString(T3, x3[T3]), U5 = this.localizationService.toLanguageString(
      S,
      x3[S]
    ), b4 = n17.createElement(
      a,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: j3, onBlur: H5 }) => n17.createElement(n17.Fragment, null, n17.createElement(
        "span",
        {
          id: this.props.id,
          ref: (G8) => {
            this._element = G8;
          },
          className: n2(
            U.wrapper({
              c: w7,
              size: i11,
              rounded: t10,
              fillMode: s8,
              invalid: !S10,
              required: this.required,
              disabled: o17
            }),
            m7
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: P6 },
          onFocus: j3,
          onBlur: H5,
          onClick: this.mobileMode ? this.handleIconClick : void 0
        },
        n17.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ...K5
          }
        ),
        n17.createElement(
          M,
          {
            tabIndex: -1,
            type: "button",
            icon: "clock",
            svgIcon: clockIcon,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleIconClick,
            title: U5,
            className: n2(U.inputButton({ c: w7 })),
            rounded: null,
            fillMode: s8,
            "aria-label": W3
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup(), this.showLicenseWatermark && n17.createElement(l2, null))
    );
    return this.props.label ? n17.createElement(
      i8,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: r14,
        editorValid: S10,
        editorDisabled: this.props.disabled,
        children: b4,
        style: { width: this.props.width }
      }
    ) : b4;
  }
  normalizeTime(i11) {
    return O(k, i11);
  }
  setShow(i11) {
    const { onOpen: t10, onClose: s8 } = this.props;
    this.show !== i11 && (this.setState({ show: i11 }), i11 && t10 && t10.call(void 0, {
      target: this
    }), !i11 && s8 && s8.call(void 0, {
      target: this
    }));
  }
  mergeTime(i11) {
    return this.value && i11 ? O(this.value, i11) : i11;
  }
  calculateMedia(i11) {
    for (const t10 of i11)
      this.setState({ windowWidth: t10.target.clientWidth });
  }
};
a20.displayName = "TimePicker", a20.propTypes = {
  className: import_prop_types13.default.string,
  cancelButton: import_prop_types13.default.bool,
  nowButton: import_prop_types13.default.bool,
  defaultShow: import_prop_types13.default.bool,
  defaultValue: import_prop_types13.default.instanceOf(Date),
  disabled: import_prop_types13.default.bool,
  format: import_prop_types13.default.oneOfType([
    import_prop_types13.default.string,
    import_prop_types13.default.shape({
      skeleton: import_prop_types13.default.string,
      pattern: import_prop_types13.default.string,
      date: import_prop_types13.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types13.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types13.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types13.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types13.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types13.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types13.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types13.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types13.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types13.default.bool,
      minute: import_prop_types13.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types13.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types13.default.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: import_prop_types13.default.oneOfType([
    import_prop_types13.default.oneOf([
      "wide",
      "narrow",
      "short",
      "formatPattern"
    ]),
    import_prop_types13.default.shape({
      year: import_prop_types13.default.string,
      month: import_prop_types13.default.string,
      day: import_prop_types13.default.string,
      hour: import_prop_types13.default.string,
      minute: import_prop_types13.default.string,
      second: import_prop_types13.default.string
    })
  ]),
  id: import_prop_types13.default.string,
  ariaLabelledBy: import_prop_types13.default.string,
  ariaDescribedBy: import_prop_types13.default.string,
  min: import_prop_types13.default.instanceOf(Date),
  max: import_prop_types13.default.instanceOf(Date),
  name: import_prop_types13.default.string,
  popupSettings: import_prop_types13.default.shape({
    animate: import_prop_types13.default.bool,
    appendTo: import_prop_types13.default.any,
    popupClass: import_prop_types13.default.string
  }),
  show: import_prop_types13.default.bool,
  steps: import_prop_types13.default.shape({
    hour: import_prop_types13.default.number,
    minute: import_prop_types13.default.number,
    second: import_prop_types13.default.number
  }),
  smoothScroll: import_prop_types13.default.bool,
  tabIndex: import_prop_types13.default.number,
  title: import_prop_types13.default.string,
  value: import_prop_types13.default.instanceOf(Date),
  width: import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string]),
  validationMessage: import_prop_types13.default.string,
  required: import_prop_types13.default.bool,
  validate: import_prop_types13.default.bool,
  valid: import_prop_types13.default.bool,
  size: import_prop_types13.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types13.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types13.default.oneOf([null, "solid", "flat", "outline"]),
  inputAttributes: import_prop_types13.default.object
}, a20.defaultProps = {
  defaultShow: false,
  defaultValue: null,
  disabled: false,
  format: "t",
  max: G2,
  min: q,
  popupSettings: {},
  tabIndex: 0,
  steps: {},
  validityStyles: true,
  dateInput: Z,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
var p10 = a20;
var be = a2();
var ye = a3(
  x(
    be,
    a4(p2(p10))
  )
);
ye.displayName = "KendoReactTimePicker";
v(p10);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/MultiViewCalendar.mjs
var d10 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/calendar/components/HorizontalViewList.mjs
var o12 = __toESM(require_react(), 1);
var n18 = 2;
var r12 = class r13 extends o12.Component {
  constructor(l11) {
    super(l11), this._element = null, this.isActive = false, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const e13 = this._element.querySelector("td.k-focus"), t10 = this._element.querySelector(".k-state-pending-focus");
      e13 && e13[0] && e13[0].classList.remove("k-focus"), t10 && t10.classList.add("k-focus"), this.isActive = true;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const e13 = this._element.querySelector("td.k-focus");
      e13 && e13.classList.remove("k-focus"), this.isActive = false;
    }, this.rotateSelectionRange = (e13) => {
      if (e13.start === null || e13.end === null)
        return e13;
      const t10 = e13.end < e13.start;
      return {
        start: t10 ? e13.end : e13.start,
        end: t10 ? e13.start : e13.end
      };
    }, this.handleWeekCellClick = (e13, t10, s8) => {
      const { onWeekSelect: a23 } = this.props;
      a23 && s8 && a23.call(void 0, e13, t10, s8);
    }, this.handleDateChange = (e13, t10 = false) => {
      const { onChange: s8 } = this.props;
      if (s8) {
        const a23 = {
          syntheticEvent: e13.syntheticEvent,
          nativeEvent: e13.nativeEvent,
          value: cloneDate(e13.value),
          target: this,
          isTodayClick: t10
        };
        s8.call(void 0, a23);
      }
    };
  }
  get element() {
    return this._element;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === c.month);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : r13.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : r13.defaultProps.max;
  }
  componentDidUpdate() {
    this.isActive && this.focusActiveDate();
  }
  render() {
    const l11 = this.props.allowReverse ? this.rotateSelectionRange(this.props.selectionRange) : this.props.selectionRange, e13 = n2("k-calendar-view k-align-items-start k-justify-content-center", {
      "k-vstack": this.props.verticalView,
      "k-hstack": !this.props.verticalView,
      "k-calendar-monthview": this.props.activeView === c.month,
      "k-calendar-yearview": this.props.activeView === c.year,
      "k-calendar-decadeview": this.props.activeView === c.decade,
      "k-calendar-centuryview": this.props.activeView === c.century
    });
    return o12.createElement(
      "div",
      {
        ref: (t10) => {
          this._element = t10;
        },
        className: e13
      },
      this.props.dates.map((t10) => o12.createElement("table", { className: "k-calendar-table", key: t10.getTime(), role: "grid" }, o12.createElement(
        f3,
        {
          bus: this.props.bus,
          weekDaysFormat: this.props.weekDaysFormat,
          service: this.props.service,
          key: t10.getTime(),
          direction: "horizontal",
          activeView: this.props.activeView,
          cellUID: this.props.cellUID,
          viewDate: t10,
          min: this.min,
          max: this.max,
          focusedDate: this.props.focusedDate,
          selectionRange: l11,
          selectedDate: this.props.value,
          showWeekNumbers: this.weekNumber,
          onChange: this.handleDateChange,
          onWeekSelect: this.handleWeekCellClick,
          onCellEnter: this.props.onCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          showOtherMonthDays: this.props.showOtherMonthDays,
          allowReverse: this.props.allowReverse
        }
      )))
    );
  }
};
r12.defaultProps = {
  showWeekNumbers: false,
  views: n18,
  take: n18,
  allowReverse: true,
  weekDaysFormat: "short",
  min: H,
  max: L2
};
var c6 = r12;

// node_modules/@progress/kendo-react-dateinputs/calendar/components/MultiViewCalendar.mjs
var S9 = (l11 = v7.defaultProps.min, i11 = v7.defaultProps.max, a23) => a23 instanceof Date && !Array.isArray(a23) && j2(getDate(a23), l11, i11) ? getDate(a23) : null;
var z3 = (l11 = v7.defaultProps.min, i11 = v7.defaultProps.max, a23) => Array.isArray(a23) ? a23.filter((c7) => j2(c7, l11, i11)).map((c7) => getDate(c7)) : null;
var U4 = (l11) => typeof l11 == "object" && !(l11 instanceof Date) && l11 !== null && !Array.isArray(l11) ? l11 : l3;
var $4 = (l11, i11, a23) => l11 || i11 && i11[0] || a23 && a23.start;
var ue2 = (l11, i11) => l11.start === null && i11 === null ? "start" : l11.end === null ? "end" : "start";
var u8 = class u9 extends d10.Component {
  constructor(i11) {
    super(i11), this.dates = [], this.selectedDate = null, this.selectedMultiple = null, this.selectedRange = l3, this._focusedDate = /* @__PURE__ */ new Date(), this.cellUID = this.props.id + "-cell-uid", this.activeRangeEnd = "start", this._element = null, this.intl = null, this.localization = null, this.service = null, this.calendarViewList = null, this.isActive = false, this.calculateFocusFromValue = true, this.showLicenseWatermark = false, this.focus = () => {
      this._element && this._element.focus();
    }, this.clampRange = (e13) => ({ start: e13, end: null }), this.rangeWithFocused = (e13, t10) => ({
      start: e13.start,
      end: e13.end === null && e13.start !== null && this.isActive ? t10 : e13.end
    }), this.generateRange = (e13, t10) => {
      const { end: r14, start: o17 } = t10, h3 = t10.start !== null && e13.getTime() <= t10.start.getTime();
      return !this.props.allowReverse && h3 ? { start: e13, end: this.selectedRange.start } : this.activeRange !== "end" ? { start: e13, end: r14 } : { start: o17 || this.selectedDate, end: e13 };
    }, this.canNavigate = (e13) => {
      if (!this.service)
        return false;
      const t10 = this.service.move(this.focusedDate, e13);
      return this.min <= t10 && t10 <= this.max || this.service.isInSameView(t10, this.min) || this.service.isInSameView(t10, this.max);
    }, this.navigate = (e13, t10) => {
      this.calculateFocusFromValue = false;
      const r14 = this.move(e13, t10);
      this.setState({ navigateDate: r14, focusedDate: r14 });
    }, this.move = (e13, t10) => this.clampDate(this.service.move(t10, e13)), this.clampDate = (e13) => K2(e13, this.min, this.max), this.shouldAutoCorrect = (e13, t10) => {
      const { end: r14, start: o17 } = t10;
      return this.activeRange !== "end" ? r14 !== null && e13 > r14 : o17 !== null && e13 < o17;
    }, this.handleCellEnter = (e13) => {
      this.props.mode === "range" && (this.calculateFocusFromValue = false, this.setState({
        focusedDate: e13
      }));
    }, this.handleMouseDown = (e13) => {
      e13.preventDefault();
    }, this.handleClick = (e13) => {
      this._element && this._element.focus({ preventScroll: true });
    }, this.handleFocus = (e13) => {
      if (this.isActive = true, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: t10 } = this.props;
      t10 && t10.call(void 0, e13);
    }, this.handleBlur = (e13) => {
      if (this.isActive = false, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: t10 } = this.props;
      t10 && t10.call(void 0, e13);
    }, this.handleTodayClick = (e13) => {
      this.todayIsInRange && this.handleDateChange(e13);
    }, this.handlePrevButtonClick = () => {
      const e13 = w4.PrevView;
      if (this.state.activeView > 0 && this.focusedDate.getFullYear() > this.dates[0].getFullYear())
        this.navigate(e13, this.move(e13, this.focusedDate));
      else {
        const t10 = this.isInMonth(this.focusedDate, this.dates[1]) ? this.move(e13, this.focusedDate) : this.focusedDate;
        this.navigate(e13, t10);
      }
    }, this.handleNextButtonClick = () => {
      this.navigate(w4.NextView, this.focusedDate);
    }, this.handleKeyDown = (e13) => {
      const { keyCode: r14, ctrlKey: o17, metaKey: h3 } = e13;
      if (r14 === 84) {
        const n19 = X();
        this.calculateFocusFromValue = false, this.setState({ focusedDate: n19, navigateDate: n19 });
      }
      if ((o17 || h3) && (r14 === e2.left && this.handlePrevButtonClick(), r14 === e2.right && this.handleNextButtonClick()), r14 === e2.enter) {
        const n19 = {
          syntheticEvent: e13,
          nativeEvent: e13.nativeEvent,
          value: this.focusedDate,
          target: this
        };
        this.handleDateChange(n19);
      } else {
        const n19 = K2(
          this.navigation.move(
            this.focusedDate,
            this.navigation.action(e13),
            this.state.activeView,
            this.service,
            e13
          ),
          this.min,
          this.max
        );
        if (isEqualDate(this.focusedDate, n19))
          return;
        this.dates && this.service && !this.service.isInArray(n19, this.dates) && this.setState({ navigateDate: n19 }), this.calculateFocusFromValue = false, this.setState({ focusedDate: n19 });
      }
      e13.preventDefault();
    }, this.handleViewChange = ({ view: e13 }) => {
      this.calculateFocusFromValue = false, this.setState((t10) => ({ activeView: e13, navigateDate: t10.focusedDate }));
    }, this.handleWeekSelection = (e13, t10, r14) => {
      if (this.props.mode === "single")
        return;
      const o17 = 0, h3 = 6, n19 = t10 === o17 ? e13 : addDays(e13, -t10), p11 = t10 === h3 ? e13 : addDays(e13, h3 - t10);
      let f9 = null;
      if (this.props.mode === "multiple") {
        f9 = [];
        for (let y8 = o17; y8 <= h3; y8++)
          f9.push(addDays(n19, y8));
        this.setState({ value: f9, focusedDate: e13 });
      }
      this.props.mode === "range" && (f9 = { start: n19, end: p11 }, this.setState({ value: f9, focusedDate: e13 }));
      const { onChange: C6 } = this.props;
      if (C6) {
        const y8 = {
          syntheticEvent: r14,
          nativeEvent: r14.nativeEvent,
          value: f9,
          target: this
        };
        C6.call(void 0, y8);
      }
    }, this.handleDateChange = (e13) => {
      const t10 = cloneDate(e13.value), r14 = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (r14)
        if (e13.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, e13.syntheticEvent), this.setState({ focusedDate: t10, navigateDate: t10 });
          return;
        }
      this.calculateFocusFromValue = true;
      let o17;
      switch (this.props.mode) {
        case "single":
          o17 = cloneDate(e13.value);
          break;
        case "multiple":
          if (Array.isArray(this.selectedMultiple)) {
            const n19 = this.selectedMultiple.slice();
            let p11 = -1;
            n19.forEach((f9, C6) => {
              isEqualDate(f9, e13.value) && (p11 = C6);
            }), p11 !== -1 ? n19.splice(p11, 1) : n19.push(cloneDate(e13.value)), o17 = n19.slice();
          } else
            this.selectedDate ? o17 = [cloneDate(this.selectedDate), cloneDate(e13.value)] : o17 = [cloneDate(e13.value)];
          break;
        case "range": {
          o17 = this.selectedRange.start !== null && this.selectedRange.end !== null && this.activeRange === "start" ? this.clampRange(e13.value) : this.generateRange(e13.value, this.selectedRange), this.activeRangeEnd = this.activeRange !== "end" ? "end" : "start";
          break;
        }
        default:
          o17 = cloneDate(e13.value);
          break;
      }
      this.valueDuringOnChange = o17, e13.isTodayClick && this.setState({ navigateDate: t10 }), this.setState({ value: o17, focusedDate: t10 }), this.valueDuringOnChange = o17;
      const { onChange: h3 } = this.props;
      if (h3) {
        const n19 = {
          syntheticEvent: e13.syntheticEvent,
          nativeEvent: e13.nativeEvent,
          value: o17,
          target: this
        };
        h3.call(void 0, n19);
      }
      this.valueDuringOnChange = void 0;
    }, this.showLicenseWatermark = !h(e9, { component: "MultiViewCalendar" });
    const a23 = i11.value !== void 0 ? i11.value : i11.defaultValue || u9.defaultProps.defaultValue, c7 = S9(this.min, this.max, a23), w7 = z3(this.min, this.max, a23), R4 = U4(a23), I8 = $4(c7, w7, R4), V4 = d3(
      c[i11.defaultActiveView],
      this.bottomView,
      this.topView
    ), b4 = K2(i11.focusedDate || I8 || X(), this.min, this.max);
    this.state = {
      value: a23,
      activeView: V4,
      focusedDate: b4,
      navigateDate: b4
    }, this.activeRangeEnd = ue2(R4, c7), this.bus = new V2(this.handleViewChange), this.navigation = new p6(this.bus), this.calculateFocusFromValue = false, this.lastView = V4, this.lastViewsCount = this.props.views || c6.defaultProps.views;
  }
  get wrapperID() {
    return this.props.id + "-wrapper-id";
  }
  get isRtl() {
    return this.props.dir === "rtl";
  }
  /**
   * Gets the wrapping element of the MultiViewCalendar component.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the MultiViewCalendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  /**
   * Gets the current focused date of the MultiViewCalendar.
   */
  get focusedDate() {
    return cloneDate(this._focusedDate);
  }
  get min() {
    return getDate(
      this.props.min !== void 0 ? this.props.min : u9.defaultProps.min
    );
  }
  get max() {
    return getDate(
      this.props.max !== void 0 ? this.props.max : u9.defaultProps.max
    );
  }
  get bottomView() {
    return c[this.props.bottomView !== void 0 ? this.props.bottomView : u9.defaultProps.bottomView];
  }
  get topView() {
    return c[this.props.topView !== void 0 ? this.props.topView : u9.defaultProps.topView];
  }
  get activeRange() {
    return this.props.activeRangeEnd !== void 0 ? this.props.activeRangeEnd : this.activeRangeEnd;
  }
  get todayIsInRange() {
    return j2(X(), getDate(this.min), getDate(this.max));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.calculateFocusFromValue = true;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
    const i11 = S9(this.min, this.max, this.value);
    this.calculateFocusFromValue = !!(this.selectedDate && i11 && this.selectedDate.getTime() && i11.getTime()), this.lastView = this.state.activeView, this.lastViewsCount = this.props.views || c6.defaultProps.views;
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this), this.intl = l(this), this.localization = s(this), this.bus.configure(this.bottomView, this.topView);
    const i11 = d3(this.state.activeView, this.bottomView, this.topView);
    this.service = this.bus.service(i11, this.intl), this.selectedDate = S9(this.min, this.max, this.value), this.selectedMultiple = z3(this.min, this.max, this.value), this.selectedRange = U4(this.value);
    const a23 = $4(this.selectedDate, this.selectedMultiple, this.selectedRange);
    this._focusedDate = K2(
      this.calculateFocusFromValue && a23 !== null ? a23 : this.state.focusedDate,
      this.min,
      this.max
    );
    const c7 = n2(
      "k-calendar k-calendar-range k-calendar-md",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), w7 = this.rangeWithFocused(this.selectedRange, this.focusedDate), R4 = this.localization.toLanguageString(e5, x3[e5]), I8 = this.localization.toLanguageString(t4, x3[t4]), V4 = !this.canNavigate(w4.PrevView), b4 = !this.canNavigate(w4.NextView), e13 = { "aria-disabled": V4 }, t10 = { "aria-disabled": b4 }, r14 = this.lastView !== i11, o17 = this.dates && this.isInMonth(this.state.navigateDate, this.dates[0]), h3 = this.lastViewsCount !== this.props.views;
    (!o17 || r14 || h3) && (this.dates = this.service.datesList(
      this.state.navigateDate,
      this.props.views || c6.defaultProps.views
    ));
    const n19 = cloneDate(this.dates && this.dates[0] ? this.dates[0] : X());
    return d10.createElement(
      "div",
      {
        ref: (p11) => {
          this._element = p11;
        },
        className: c7,
        id: this.props.id || this.wrapperID,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        "aria-disabled": this.props.disabled,
        dir: this.props.dir
      },
      d10.createElement(
        l4,
        {
          key: `.kendo.calendar.header.${n19.getTime()}`,
          activeView: i11,
          currentDate: n19,
          min: this.min,
          max: this.max,
          rangeLength: this.props.views,
          bus: this.bus,
          service: this.service,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode,
          commands: d10.createElement(d10.Fragment, null, d10.createElement(
            M,
            {
              type: "button",
              className: "k-calendar-nav-prev",
              icon: this.isRtl ? "chevron-right" : "chevron-left",
              svgIcon: this.isRtl ? chevronRightIcon : chevronLeftIcon,
              fillMode: "flat",
              title: R4,
              disabled: V4,
              onClick: this.handlePrevButtonClick,
              ...e13
            }
          ), d10.createElement(
            a10,
            {
              min: this.min,
              max: this.max,
              onClick: this.handleTodayClick,
              disabled: !this.todayIsInRange
            }
          ), d10.createElement(
            M,
            {
              type: "button",
              className: "k-calendar-nav-next",
              icon: this.isRtl ? "chevron-left" : "chevron-right",
              svgIcon: this.isRtl ? chevronLeftIcon : chevronRightIcon,
              fillMode: "flat",
              title: I8,
              disabled: b4,
              onClick: this.handleNextButtonClick,
              ...t10
            }
          ))
        }
      ),
      d10.createElement(
        c6,
        {
          ref: (p11) => {
            this.calendarViewList = p11;
          },
          dates: this.dates,
          activeView: i11,
          focusedDate: this.focusedDate,
          weekDaysFormat: this.props.weekDaysFormat,
          min: this.min,
          max: this.max,
          bus: this.bus,
          service: this.service,
          selectionRange: w7,
          value: this.selectedMultiple || this.selectedDate,
          cellUID: this.cellUID,
          views: this.props.views,
          onChange: this.handleDateChange,
          onWeekSelect: this.handleWeekSelection,
          showWeekNumbers: this.props.weekNumber,
          onCellEnter: this.handleCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode,
          showOtherMonthDays: this.props.showOtherMonthDays,
          allowReverse: this.props.allowReverse
        }
      ),
      this.showLicenseWatermark && d10.createElement(l2, null)
    );
  }
  // protected isListInRange = (list: Date[]): boolean => {
  //     return this.min < list[0]
  //         && this.max > list[Math.max(0, (this.props.views || MultiViewCalendarWithoutContext.defaultProps.views) - 1)];
  // };
  isInMonth(i11, a23) {
    return !!a23 && firstDayOfMonth(a23) <= i11 && i11 <= lastDayOfMonth(a23);
  }
};
u8.displayName = "MultiViewCalendar", u8.propTypes = {
  activeRangeEnd: import_prop_types14.default.oneOf(["start", "end"]),
  allowReverse: import_prop_types14.default.bool,
  bottomView: import_prop_types14.default.oneOf(["month", "year", "decade", "century"]),
  className: import_prop_types14.default.string,
  defaultActiveView: import_prop_types14.default.oneOf(["month", "year", "decade", "century"]),
  defaultValue: import_prop_types14.default.oneOfType([
    W(import_prop_types14.default.instanceOf(Date)),
    import_prop_types14.default.arrayOf(import_prop_types14.default.instanceOf(Date)),
    import_prop_types14.default.shape({
      start: W(import_prop_types14.default.instanceOf(Date)),
      end: W(import_prop_types14.default.instanceOf(Date))
    })
  ]),
  disabled: import_prop_types14.default.bool,
  focusedDate: import_prop_types14.default.instanceOf(Date),
  id: import_prop_types14.default.string,
  weekDaysFormat: import_prop_types14.default.oneOf(["narrow", "short", "abbreviated"]),
  ariaLabelledBy: import_prop_types14.default.string,
  ariaDescribedBy: import_prop_types14.default.string,
  max: import_prop_types14.default.instanceOf(Date),
  min: import_prop_types14.default.instanceOf(Date),
  mode: import_prop_types14.default.oneOf(["single", "multiple", "range"]),
  onBlur: import_prop_types14.default.func,
  onChange: import_prop_types14.default.func,
  onFocus: import_prop_types14.default.func,
  tabIndex: import_prop_types14.default.number,
  topView: import_prop_types14.default.oneOf(["month", "year", "decade", "century"]),
  value: import_prop_types14.default.oneOfType([
    W(import_prop_types14.default.instanceOf(Date)),
    import_prop_types14.default.arrayOf(import_prop_types14.default.instanceOf(Date)),
    import_prop_types14.default.shape({
      start: W(import_prop_types14.default.instanceOf(Date).isRequired),
      end: W(import_prop_types14.default.instanceOf(Date).isRequired)
    })
  ]),
  views: (i11, a23, c7) => {
    const w7 = i11[a23];
    return w7 !== void 0 && w7 < 1 ? new Error(
      `Invalid prop '${a23}' supplied to'${c7}'. The '${a23}' property cannot be less than 1'`
    ) : null;
  },
  weekNumber: import_prop_types14.default.bool,
  showOtherMonthDays: import_prop_types14.default.bool,
  dir: import_prop_types14.default.string
}, u8.defaultProps = {
  disabled: false,
  min: H,
  max: L2,
  navigation: true,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  weekDaysFormat: "short",
  tabIndex: 0,
  bottomView: "month",
  views: 2,
  allowReverse: false,
  showOtherMonthDays: false
};
var v7 = u8;
var pe = a2();
var me = a3(
  x(
    pe,
    v7
  )
);
me.displayName = "KendoReactMultiViewCalendar";
p(v7);
v(v7);

// node_modules/@progress/kendo-react-dateinputs/daterangepicker/DateRangePicker.mjs
var i9 = __toESM(require_react(), 1);
var import_prop_types15 = __toESM(require_prop_types(), 1);
var o13 = class o14 extends i9.Component {
  constructor(a23) {
    super(a23), this._element = null, this._calendar = null, this._startDateInput = i9.createRef(), this._endDateInput = i9.createRef(), this.shouldFocusDateInput = false, this.shouldFocusCalendar = false, this.showLicenseWatermark = false, this.focus = () => {
      this.startDateInput && this.startDateInput.focus();
    }, this.setCalendarRef = (t10) => {
      this._calendar = t10;
    }, this.focusCalendarElement = () => {
      this._calendar && this._calendar.element && this._calendar.element.focus({ preventScroll: true });
    }, this.calculateValue = (t10, s8) => (t10.value !== void 0 ? t10.value : s8.value) || l3, this.calculateShow = (t10, s8) => t10.show !== void 0 ? t10.show : s8.show, this.renderCalendar = () => {
      const t10 = this.value || l3, s8 = {
        min: this.min,
        max: this.max,
        allowReverse: this.props.allowReverse,
        mode: "range",
        focusedDate: this.props.focusedDate,
        disabled: this.props.disabled,
        className: this.mobileMode ? "k-calendar-lg" : "",
        mobileMode: this.mobileMode,
        ...this.props.calendarSettings,
        value: t10,
        dir: this.props.dir,
        onChange: this.handleCalendarChange
      };
      return this.props.calendar ? i9.createElement(this.props.calendar, { ...s8 }) : i9.createElement(me, { ...s8, ref: this.setCalendarRef });
    }, this.renderPopup = () => {
      const t10 = {
        popupClass: n2("k-calendar-container", "k-daterangepicker-popup"),
        animate: this._element !== null,
        anchor: this._element,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...this.props.popupSettings,
        show: this.show
      };
      return this.props.popup ? i9.createElement(this.props.popup, { ...t10 }, this.renderCalendar()) : i9.createElement(te, { ...t10 }, this.renderCalendar());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t10 = 0 } = this.state, s8 = {
        expand: this.show,
        onClose: (n19) => this.handleCancel(n19),
        title: this.props.adaptiveTitle,
        windowWidth: t10,
        footer: {
          cancelText: this.localizationService.toLanguageString(
            P2,
            x3[P2]
          ),
          onCancel: this.handleCancel,
          applyText: this.localizationService.toLanguageString(V, x3[V]),
          onApply: this.handleBlur
        }
      };
      return i9.createElement(I5, { ...s8 }, i9.createElement(t, { overflowHidden: true }, i9.createElement("div", { className: "k-scrollable-wrap" }, this.renderCalendar())));
    }, this.handleReverseClick = (t10) => {
      const s8 = {
        start: this.value.end,
        end: this.value.start
      }, n19 = {
        syntheticEvent: t10,
        nativeEvent: t10.nativeEvent
      };
      this.handleChange(s8, n19);
    }, this.handleReverseMouseDown = (t10) => {
      t10.preventDefault();
    }, this.handleFocus = (t10) => {
      clearTimeout(this.nextTickId), this.shouldFocusDateInput || this.mobileMode && this.setState({ currentValue: this.value });
      const { onFocus: s8 } = this.props;
      s8 && s8.call(void 0, t10);
    }, this.handleClick = () => {
      this.shouldFocusDateInput || this.setShow(true);
    }, this.handleBlur = (t10) => {
      this.nextTick(() => {
        this.setShow(false);
      });
      const { onBlur: s8 } = this.props;
      s8 && s8.call(void 0, t10);
    }, this.handleCancel = (t10) => {
      this.nextTick(() => {
        this.setShow(false), this.setState({ currentValue: l3 });
      });
      const { onCancel: s8 } = this.props;
      s8 && s8.call(void 0, t10);
    }, this.handleEndChange = (t10) => {
      const s8 = {
        start: this.value.start,
        end: cloneDate(t10.value || void 0)
      };
      this.handleChange(s8, t10);
    }, this.handleStartChange = (t10) => {
      const s8 = {
        start: cloneDate(t10.value || void 0),
        end: this.value.end
      };
      this.handleChange(s8, t10);
    }, this.extractRangeFromValue = (t10) => {
      if (!Array.isArray(t10.value) && !(t10.value instanceof Date))
        return t10.value || l3;
      const s8 = Array.isArray(t10.value) ? t10.value[0] : t10.value;
      return {
        start: this.value.end !== null ? s8 : this.value.start,
        end: this.value.start !== null ? s8 : this.value.end
      };
    }, this.handleCalendarChange = (t10) => {
      const s8 = this.extractRangeFromValue(t10);
      this.handleChange(s8, t10);
    }, this.handleKeyDown = (t10) => {
      const { keyCode: s8, altKey: n19 } = t10;
      s8 === e2.esc ? (t10.preventDefault(), this.shouldFocusDateInput = true, this.setShow(false)) : n19 && s8 === e2.down ? (t10.preventDefault(), this.shouldFocusCalendar = true, this.setShow(true), this.focusCalendarElement()) : n19 && s8 === e2.up && (t10.preventDefault(), this.shouldFocusDateInput = true, this.setShow(false));
    }, this.handleChange = (t10, s8) => {
      this.setState({ value: t10 }), this.valueDuringOnChange = t10;
      const { onChange: n19 } = this.props;
      if (n19) {
        const d11 = {
          syntheticEvent: s8.syntheticEvent,
          nativeEvent: s8.nativeEvent,
          value: this.value,
          show: this.show,
          target: this
        };
        n19.call(void 0, d11);
      }
      this.valueDuringOnChange = void 0;
    }, this.showLicenseWatermark = !h(e9, { component: "DateRangePicker" }), this.state = {
      show: this.props.show || this.props.defaultShow || o14.defaultProps.defaultShow,
      value: this.props.value || this.props.defaultValue || o14.defaultProps.defaultValue,
      currentValue: l3
    }, this.nextTick = this.nextTick.bind(this), this.setShow = this.setShow.bind(this), this.focusCalendarElement = this.focusCalendarElement.bind(this), this.focusDateInputElement = this.focusDateInputElement.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get _startInputId() {
    return this.props.id + "-start-input-id";
  }
  get _endInputId() {
    return this.props.id + "-end-input-id";
  }
  /**
   * Gets the wrapping element of the DateRangePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the start DateInput component inside the DatePicker component.
   */
  get startDateInput() {
    return this._startDateInput.current;
  }
  /**
   * Gets the end DateInput component inside the DatePicker component.
   */
  get endDateInput() {
    return this._endDateInput.current;
  }
  /**
   * Gets the MultiVieCalendar inside the DateRangePicker.
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Gets the value of the DateRangePicker.
   */
  get value() {
    return (this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value) || l3;
  }
  /**
   * Gets the popup state of the DateRangePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o14.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o14.defaultProps.max;
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  get localizationService() {
    return s(this);
  }
  /**
   * The mobile mode of the DateRangePicker.
   */
  get mobileMode() {
    var t10;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t10 = this.props._adaptiveMode) == null ? void 0 : t10.medium) && this.props.adaptive);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var a23;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (a23 = this.document) != null && a23.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.shouldFocusCalendar && this.focusCalendarElement(), this.shouldFocusDateInput && this.focusDateInputElement(), this.shouldFocusCalendar = false, this.shouldFocusDateInput = false;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var a23;
    clearTimeout(this.nextTickId), (a23 = this.document) != null && a23.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const { autoFocus: a23, inputAttributes: t10 } = this.props, s8 = this.value || l3, n19 = this.mobileMode && this.show ? this.state.currentValue : s8, d11 = (this.props.startDateInputSettings || {}).id || this._startInputId, x6 = (this.props.endDateInputSettings || {}).id || this._endInputId, k5 = n2(
      "k-daterangepicker",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), O3 = this.localizationService.toLanguageString(l5, x3[l5]), R4 = this.localizationService.toLanguageString(s3, x3[s3]), M6 = this.localizationService.toLanguageString(d4, x3[d4]), g9 = {
      disableSelection: this.mobileMode && true,
      label: O3,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._startInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      clearButton: this.props.clearButton,
      ...this.props.startDateInputSettings,
      value: n19.start,
      onChange: this.handleStartChange,
      inputAttributes: this.props.inputAttributes
    }, v8 = {
      disableSelection: this.mobileMode && true,
      label: R4,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._endInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      clearButton: this.props.clearButton,
      ...this.props.endDateInputSettings,
      value: n19.end,
      onChange: this.handleEndChange,
      inputAttributes: this.props.inputAttributes
    }, A4 = i9.createElement(
      M,
      {
        type: "button",
        className: "k-select",
        fillMode: "flat",
        title: s(this).toLanguageString(o6, x3[o6]),
        onMouseDown: this.handleReverseMouseDown,
        onClick: this.handleReverseClick,
        "aria-controls": d11 + " " + x6,
        "aria-label": s(this).toLanguageString(
          o6,
          x3[o6]
        )
      },
      i9.createElement(v2, { style: { transform: "rotate(90deg)" }, name: "arrows-swap", icon: arrowsSwapIcon })
    );
    return i9.createElement(i9.Fragment, null, i9.createElement(
      "span",
      {
        ref: (T7) => {
          this._element = T7;
        },
        className: k5,
        style: this.props.style,
        id: this.props.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.tabIndex,
        onFocus: this.handleFocus,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        dir: this.props.dir
      },
      this.props.startDateInput ? i9.createElement(this.props.startDateInput, { ...g9 }) : i9.createElement(
        Z,
        {
          ...g9,
          autoFocus: a23,
          ref: this._startDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId
        }
      ),
      (this.props.allowReverse || this.props.calendarSettings && this.props.calendarSettings.allowReverse) && this.props.swapButton ? A4 : M6,
      this.props.endDateInput ? i9.createElement(this.props.endDateInput, { ...v8 }) : i9.createElement(
        Z,
        {
          ...v8,
          ref: this._endDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId
        }
      ),
      !this.mobileMode && this.renderPopup()
    ), this.mobileMode && this.renderAdaptivePopup(), this.showLicenseWatermark && i9.createElement(l2, null));
  }
  focusDateInputElement() {
    if (!document || !this.startDateInput || !this.startDateInput.element || !this.endDateInput || !this.endDateInput.element)
      return;
    const a23 = o3(document);
    (this.value.start === null || this.value.end !== null) && a23 !== this.endDateInput.element ? this.startDateInput.element.focus({ preventScroll: true }) : a23 !== this.startDateInput.element && this.endDateInput.element.focus({ preventScroll: true });
  }
  nextTick(a23) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => a23());
  }
  setShow(a23) {
    const { onOpen: t10, onClose: s8 } = this.props;
    this.show !== a23 && (this.setState({ show: a23 }), a23 && t10 && t10.call(void 0, {
      target: this
    }), !a23 && s8 && s8.call(void 0, {
      target: this
    }));
  }
  calculateMedia(a23) {
    for (const t10 of a23)
      this.setState({ windowWidth: t10.target.clientWidth });
  }
};
o13.displayName = "DateRangePicker", o13.propTypes = {
  allowReverse: import_prop_types15.default.bool,
  calendarSettings: import_prop_types15.default.any,
  className: import_prop_types15.default.string,
  defaultShow: import_prop_types15.default.bool,
  defaultValue: import_prop_types15.default.shape({
    start: W(import_prop_types15.default.instanceOf(Date).isRequired),
    end: W(import_prop_types15.default.instanceOf(Date).isRequired)
  }),
  disabled: import_prop_types15.default.bool,
  endDateInputSettings: import_prop_types15.default.shape(Z.propTypes),
  focusedDate: import_prop_types15.default.instanceOf(Date),
  format: import_prop_types15.default.oneOfType([
    import_prop_types15.default.string,
    import_prop_types15.default.shape({
      skeleton: import_prop_types15.default.string,
      pattern: import_prop_types15.default.string,
      date: import_prop_types15.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types15.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types15.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types15.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types15.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types15.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types15.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types15.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types15.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types15.default.bool,
      minute: import_prop_types15.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types15.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types15.default.oneOf(["short", "long"])
    })
  ]),
  id: import_prop_types15.default.string,
  ariaLabelledBy: import_prop_types15.default.string,
  ariaDescribedBy: import_prop_types15.default.string,
  max: import_prop_types15.default.instanceOf(Date),
  min: import_prop_types15.default.instanceOf(Date),
  onBlur: import_prop_types15.default.func,
  onChange: import_prop_types15.default.func,
  onFocus: import_prop_types15.default.func,
  popupSettings: import_prop_types15.default.any,
  show: import_prop_types15.default.bool,
  startDateInputSettings: import_prop_types15.default.any,
  style: import_prop_types15.default.any,
  swapButton: import_prop_types15.default.any,
  tabIndex: import_prop_types15.default.number,
  dir: import_prop_types15.default.string,
  value: import_prop_types15.default.shape({
    start: W(import_prop_types15.default.instanceOf(Date)),
    end: W(import_prop_types15.default.instanceOf(Date))
  }),
  autoFocus: import_prop_types15.default.bool,
  inputAttributes: import_prop_types15.default.object
}, o13.defaultProps = {
  allowReverse: false,
  defaultShow: false,
  defaultValue: l3,
  disabled: false,
  format: "d",
  max: L2,
  min: H,
  swapButton: false,
  autoFocus: false
};
var u10 = o13;
var J4 = a2();
var Q4 = a3(
  x(
    J4,
    p2(u10)
  )
);
Q4.displayName = "KendoReactDateRangePicker";
v(u10);

// node_modules/@progress/kendo-react-dateinputs/datetimepicker/DateTimePicker.mjs
var a22 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dateinputs/datetimepicker/DateTimeSelector.mjs
var i10 = __toESM(require_react(), 1);
var y6 = class y7 extends i10.Component {
  constructor(a23) {
    super(a23), this._calendar = null, this._timePart = null, this._cancelButton = null, this._acceptButton = null, this._dateButtonRef = null, this._calendarWrap = null, this.shouldFocusPart = false, this.focus = (t10) => {
      Promise.resolve().then(() => {
        this.state.tab === "time" && this._timePart && this._timePart.focus(t10);
        const e13 = this.calendarElement();
        this.state.tab === "date" && e13 && e13.focus(t10);
      });
    }, this.calendarElement = () => this._calendar && this._calendar.element || this._calendarWrap && this._calendarWrap.querySelector(".k-calendar"), this.move = (t10) => {
      if (t10 === "right" && this.state.tab === "time" || t10 === "left" && this.state.tab === "date")
        return;
      const e13 = t10 === "left" ? "date" : "time";
      this.shouldFocusPart = true, this.setState({ tab: e13 });
    }, this.dateTimeFooter = () => {
      const { cancelButton: t10, unstyled: e13 } = this.props, s8 = e13 && e13.uDateTimePicker, n19 = this.localizationService.toLanguageString(C2, x3[C2]), r14 = this.localizationService.toLanguageString(N, x3[N]);
      return i10.createElement("div", { className: n2(J.timeFooter({ c: s8 })) }, t10 && i10.createElement(
        M,
        {
          type: "button",
          ref: (o17) => {
            this._cancelButton = o17;
          },
          className: n2(R.cancel({ c: s8 })),
          onClick: this.handleReject,
          onKeyDown: this.handleCancelKeyDown,
          title: n19,
          "aria-label": n19
        },
        n19
      ), i10.createElement(
        M,
        {
          type: "button",
          themeColor: "primary",
          ref: (o17) => {
            this._acceptButton = o17;
          },
          className: n2(R.accept({ c: s8 })),
          disabled: !this.hasDateValue,
          onClick: this.handleAccept,
          onKeyDown: this.handleSetKeyDown,
          title: r14,
          "aria-label": r14
        },
        r14
      ));
    }, this.handleReject = (t10) => {
      this.setState({ dateValue: this.props.value, timeValue: this.props.value || k });
      const e13 = this.mergeDate(this.props.value, this.props.value || k);
      if (this.props.onReject) {
        const s8 = {
          nativeEvent: t10.nativeEvent,
          syntheticEvent: t10,
          target: this,
          value: e13
        };
        this.props.onReject.call(void 0, s8);
      }
    }, this.handleAccept = (t10, e13) => {
      if (!this.state.dateValue || !this.state.timeValue || !this.hasDateValue)
        return;
      const s8 = this.mergeDate(this.state.dateValue, e13 || this.state.timeValue);
      this.props.onChange.call(void 0, {
        syntheticEvent: t10,
        nativeEvent: t10.nativeEvent,
        value: s8,
        target: this
      });
    }, this.handleNowClick = (t10) => {
      this.setState({ timeValue: B2() }), this.handleAccept(t10, B2());
    }, this.handleCalendarValueChange = (t10) => {
      t10.syntheticEvent.stopPropagation(), this.setState({ dateValue: t10.value, tab: "time" }), this.shouldFocusPart = true;
    }, this.handleTimeListContainerChange = (t10) => {
      this.setState({ timeValue: t10 });
    }, this.handleDateClick = (t10) => {
      t10.stopPropagation(), this.move("left");
    }, this.handleTimeClick = (t10) => {
      t10.stopPropagation(), this.move("right");
    }, this.handleKeyDown = (t10) => {
      const { keyCode: e13, altKey: s8 } = t10;
      if (!this.props.disabled)
        switch (e13) {
          case e2.enter:
            !this.hasActiveButton() && this.hasDateValue && this.handleAccept(t10);
            return;
          case e2.left:
            if (!s8)
              return;
            this.move("left");
            return;
          case e2.right:
            if (!s8)
              return;
            this.move("right");
            return;
          default:
            return;
        }
    }, this.handleCancelKeyDown = (t10) => {
      const { keyCode: e13 } = t10;
      e13 === e2.tab && this._dateButtonRef && this._dateButtonRef.element && !this.hasDateValue && (t10.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleSetKeyDown = (t10) => {
      const { keyCode: e13 } = t10;
      e13 === e2.tab && this._dateButtonRef && this._dateButtonRef.element && (t10.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleDateKeyDown = (t10) => {
      var n19, r14, o17, d11;
      const { keyCode: e13, shiftKey: s8 } = t10;
      s8 && e13 === e2.tab && (t10.stopPropagation(), this.hasDateValue ? (d11 = (o17 = this._acceptButton) == null ? void 0 : o17.element) == null || d11.focus() : (r14 = (n19 = this._cancelButton) == null ? void 0 : n19.element) == null || r14.focus()), e13 === e2.enter && (t10.stopPropagation(), this.move("left"));
    }, this.handleTimeKeyDown = (t10) => {
      const { keyCode: e13 } = t10;
      e13 === e2.enter && (t10.stopPropagation(), this.move("right"));
    }, this.handleTimePartMount = (t10) => {
      this.setState({ timeValue: t10 });
    }, this.state = {
      tab: "date",
      dateValue: this.props.value,
      timeValue: this.props.value || k
    };
  }
  get calendar() {
    return this._calendar;
  }
  get timePart() {
    return this._timePart;
  }
  get hasDateValue() {
    return this.state.dateValue !== null;
  }
  get localizationService() {
    return s(this);
  }
  componentDidUpdate(a23, t10) {
    var e13, s8;
    this.shouldFocusPart && this.focus({ preventScroll: true }), (((e13 = a23.value) == null ? void 0 : e13.getTime()) !== ((s8 = this.props.value) == null ? void 0 : s8.getTime()) || this.state.tab !== t10.tab && this.props.value) && this.setState((n19) => ({
      dateValue: a23.value && this.props.value && isEqualDate(a23.value, this.props.value) ? n19.dateValue : this.props.value,
      timeValue: this.props.value || k
    })), this.shouldFocusPart = false;
  }
  render() {
    const { disabled: a23, min: t10, max: e13, weekNumber: s8, focusedDate: n19, format: r14, mobileMode: o17, footerActions: d11, unstyled: p11 } = this.props, m7 = p11 && p11.uDateTimePicker, S10 = n2(
      J.wrap({
        c: m7,
        date: this.state.tab === "date",
        time: this.state.tab === "time",
        disabled: a23
      })
    ), K5 = this.localizationService.toLanguageString(v3, x3[v3]), N4 = this.localizationService.toLanguageString(u4, x3[u4]), C6 = {
      min: t10,
      max: e13,
      weekNumber: s8,
      focusedDate: n19,
      disabled: a23 || this.state.tab !== "date",
      value: this.state.dateValue,
      onChange: this.handleCalendarValueChange,
      navigation: false,
      tabIndex: a23 || this.state.tab !== "date" ? -1 : void 0,
      mobileMode: o17
    };
    return i10.createElement("div", { onKeyDown: this.handleKeyDown, className: S10, tabIndex: -1 }, i10.createElement("div", { className: n2(J.buttonGroup({ c: m7 })) }, i10.createElement(T, { width: "100%", unstyled: p11 }, i10.createElement(
      M,
      {
        ref: (c7) => this._dateButtonRef = c7,
        type: "button",
        selected: this.state.tab === "date",
        togglable: true,
        onClick: this.handleDateClick,
        onKeyDown: this.handleDateKeyDown
      },
      K5
    ), i10.createElement(
      M,
      {
        type: "button",
        selected: this.state.tab === "time",
        togglable: true,
        onClick: this.handleTimeClick,
        onKeyDown: this.handleTimeKeyDown
      },
      N4
    ))), i10.createElement("div", { className: n2(J.selector({ c: m7 })) }, i10.createElement(
      "div",
      {
        className: n2(J.calendarWrap({ c: m7 })),
        ref: (c7) => this._calendarWrap = c7
      },
      this.props.calendar ? i10.createElement(this.props.calendar, { key: this.state.tab, ...C6 }) : i10.createElement(
        Q3,
        {
          key: this.state.tab,
          ref: (c7) => {
            this._calendar = c7;
          },
          ...C6
        }
      )
    ), i10.createElement("div", { className: n2(J.timeWrap({ c: m7 })) }, i10.createElement("div", { className: n2(J.timeSelector({ c: m7, mobileMode: o17 })) }, i10.createElement(
      f7,
      {
        key: 1,
        onNowClick: this.handleNowClick,
        disabled: a23 || this.state.tab !== "time",
        ref: (c7) => {
          this._timePart = c7;
        },
        min: this.minTime || q,
        max: this.maxTime || G2,
        steps: this.props.steps,
        value: this.state.timeValue,
        format: r14,
        onChange: this.handleTimeListContainerChange,
        onMount: this.handleTimePartMount,
        mobileMode: o17,
        unstyled: p11
      }
    )))), d11 && this.dateTimeFooter());
  }
  get minTime() {
    return this.props.minTime !== void 0 ? this.props.minTime : this.normalizeRange(this.props.min, this.state.dateValue);
  }
  get maxTime() {
    return this.props.maxTime !== void 0 ? this.props.maxTime : this.normalizeRange(this.props.max, this.state.dateValue);
  }
  normalizeRange(a23, t10) {
    return isEqualDate(a23, t10 || X()) ? a23 : null;
  }
  hasActiveButton() {
    if (!this._acceptButton)
      return false;
    const a23 = o3(document);
    return this._acceptButton && a23 === this._acceptButton.element || this._cancelButton && a23 === this._cancelButton.element;
  }
  mergeTime(a23, t10) {
    return a23 && t10 ? O(t10, a23) : t10;
  }
  mergeDate(a23, t10) {
    return a23 ? O(a23 || X(), t10) : t10;
  }
};
y6.defaultProps = {
  footerActions: true
};
var b3 = y6;
v(b3);

// node_modules/@progress/kendo-react-dateinputs/datetimepicker/DateTimePicker.mjs
var o15 = class o16 extends a22.Component {
  constructor(i11) {
    super(i11), this._element = null, this._dateInput = a22.createRef(), this._dateTimeSelector = null, this.shouldFocusDateInput = false, this.prevShow = false, this.focus = () => {
      const t10 = this.dateInputElement();
      t10 && t10.focus();
    }, this.renderPicker = () => {
      const { disabled: t10, minTime: s8, maxTime: n19, format: h3, calendar: l11, cancelButton: r14, weekNumber: g9, focusedDate: u11, unstyled: v8 } = this.props;
      return a22.createElement(
        b3,
        {
          ref: (w7) => {
            this._dateTimeSelector = w7;
          },
          cancelButton: r14,
          steps: this.props.steps,
          value: this.value,
          onChange: this.handleValueChange,
          onReject: this.handleReject,
          disabled: t10,
          weekNumber: g9,
          min: this.min,
          max: this.max,
          minTime: s8,
          maxTime: n19,
          focusedDate: u11,
          format: h3,
          calendar: l11,
          mobileMode: this.mobileMode,
          footerActions: !this.mobileMode,
          unstyled: v8
        }
      );
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t10 = 0 } = this.state, s8 = s(this).toLanguageString(
        C2,
        x3[C2]
      ), n19 = s(this).toLanguageString(
        N,
        x3[N]
      ), h3 = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle,
        windowWidth: t10,
        footer: {
          cancelText: s8,
          onCancel: (l11) => {
            var r14;
            return (r14 = this._dateTimeSelector) == null ? void 0 : r14.handleReject(l11);
          },
          applyText: n19,
          onApply: (l11) => {
            var r14;
            return (r14 = this._dateTimeSelector) == null ? void 0 : r14.handleAccept(l11);
          }
        }
      };
      return a22.createElement(I5, { ...h3 }, a22.createElement(t, { overflowHidden: true }, this.renderPicker()));
    }, this.handleReject = () => {
      this.shouldFocusDateInput = true, this.setShow(false);
    }, this.handleValueChange = (t10) => {
      this.setState({
        value: cloneDate(t10.value || void 0)
      }), this.valueDuringOnChange = t10.value, this.showDuringOnChange = false, this.mobileMode || (this.shouldFocusDateInput = true);
      const { onChange: s8 } = this.props;
      s8 && s8.call(void 0, {
        syntheticEvent: t10.syntheticEvent,
        nativeEvent: t10.nativeEvent,
        value: this.value,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(false);
    }, this.handleFocus = () => {
      this.setState({ focused: true });
    }, this.handleBlur = () => {
      this.setState({ focused: false }), this.setShow(false);
    }, this.handleDateIconClick = () => {
      this.props.disabled || (this.shouldFocusDateInput = true, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t10) => {
      t10.preventDefault();
    }, this.handleKeyDown = (t10) => {
      const { altKey: s8, keyCode: n19 } = t10;
      if (n19 === e2.esc) {
        this.shouldFocusDateInput = true, this.setShow(false);
        return;
      }
      s8 && (n19 === e2.up || n19 === e2.down) && (t10.preventDefault(), t10.stopPropagation(), this.shouldFocusDateInput = n19 === e2.up, this.setShow(n19 === e2.down));
    }, this.dateInputElement = () => this.dateInput && this.dateInput.element || this.element && this.element.querySelector(".k-dateinput > input.k-input-inner"), this.state = {
      value: this.props.defaultValue || o16.defaultProps.defaultValue,
      show: this.props.defaultShow || o16.defaultProps.defaultShow,
      focused: false
    };
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the DateTimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the DateTimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the value of the DateTimePicker.
   */
  get value() {
    const i11 = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i11 !== null ? cloneDate(i11) : null;
  }
  /**
   * Gets the popup state of the DateTimePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the DateTimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * The mobile mode of the DateTimePicker.
   */
  get mobileMode() {
    var t10;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t10 = this.props._adaptiveMode) == null ? void 0 : t10.medium) && this.props.adaptive);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o16.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o16.defaultProps.max;
  }
  /**
   * Represents the validity state into which the DateTimePicker is set.
   */
  get validity() {
    const i11 = P(this.value, this.min, this.max) && N2(this.value, this.props.minTime || q, this.props.maxTime || G2), t10 = this.props.validationMessage !== void 0, s8 = (!this.required || this.value !== null) && i11, n19 = this.props.valid !== void 0 ? this.props.valid : s8;
    return {
      customError: t10,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || false,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || false,
      valid: n19,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : o16.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : false;
  }
  /**
   * @hidden
   */
  get dateInputComp() {
    return this.props.dateInput || o16.defaultProps.dateInput;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var i11;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (i11 = this.document) != null && i11.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const i11 = this.dateInputElement();
    this._dateTimeSelector && this.show && !this.prevShow && this._dateTimeSelector.focus({ preventScroll: true }), i11 && !this.show && this.shouldFocusDateInput && i11.focus({ preventScroll: true }), this.prevShow = this.show, this.shouldFocusDateInput = false;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var i11;
    clearTimeout(this.nextTickId), (i11 = this.document) != null && i11.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i11 = o16.defaultProps.size,
      rounded: t10 = o16.defaultProps.rounded,
      fillMode: s8 = o16.defaultProps.fillMode,
      autoFocus: n19 = o16.defaultProps.autoFocus,
      inputAttributes: h3,
      disabled: l11,
      tabIndex: r14,
      title: g9,
      id: u11,
      format: v8,
      formatPlaceholder: w7,
      min: x6,
      max: k5,
      className: E4,
      width: F4,
      name: A4,
      validationMessage: R4,
      required: z4,
      validityStyles: B5,
      minTime: N4,
      maxTime: V4,
      ariaLabelledBy: _3,
      ariaDescribedBy: q2,
      popup: L7 = te,
      unstyled: b4,
      autoFill: K5,
      twoDigitYearMax: U5,
      enableMouseWheel: j3,
      autoCorrectParts: H5,
      autoSwitchParts: W3,
      autoSwitchKeys: X2,
      allowCaretMode: Y2
    } = this.props, y8 = b4 && b4.uDateTimePicker, S10 = !this.validityStyles || this.validity.valid, Z2 = {
      id: u11,
      ariaLabelledBy: _3,
      ariaDescribedBy: q2,
      format: v8,
      formatPlaceholder: w7,
      disabled: l11,
      title: g9,
      validityStyles: B5,
      validationMessage: R4,
      required: z4,
      min: x6,
      max: k5,
      minTime: N4,
      maxTime: V4,
      name: A4,
      tabIndex: this.show ? -1 : r14,
      valid: this.validity.valid,
      value: this.value,
      onChange: this.handleValueChange,
      steps: this.props.steps,
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      unstyled: b4,
      autoFill: K5,
      twoDigitYearMax: U5,
      enableMouseWheel: j3,
      autoCorrectParts: H5,
      autoSwitchParts: W3,
      autoSwitchKeys: X2,
      allowCaretMode: Y2
    }, T7 = a22.createElement(
      a,
      {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onSyncFocus: this.props.onFocus,
        onSyncBlur: this.props.onBlur
      },
      ({ onFocus: G8, onBlur: J5 }) => a22.createElement(a22.Fragment, null, a22.createElement(
        "div",
        {
          ref: (Q5) => {
            this._element = Q5;
          },
          className: n2(
            J.wrapper({
              c: y8,
              size: i11,
              fillMode: s8,
              rounded: t10,
              disabled: l11,
              required: this.required,
              invalid: !S10
            }),
            E4
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: F4 },
          onFocus: this.mobileMode ? void 0 : G8,
          onBlur: J5,
          onClick: this.mobileMode ? this.handleDateIconClick : void 0
        },
        a22.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ariaHasPopup: "dialog",
            autoFocus: n19,
            inputAttributes: h3,
            ...Z2
          }
        ),
        a22.createElement(
          M,
          {
            tabIndex: -1,
            type: "button",
            icon: "calendar",
            svgIcon: calendarIcon,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleDateIconClick,
            title: s(this).toLanguageString(
              g2,
              x3[g2]
            ),
            className: n2(J.inputButton({ c: y8 })),
            rounded: null,
            fillMode: s8,
            "aria-label": s(this).toLanguageString(
              g2,
              x3[g2]
            )
          }
        ),
        a22.createElement(
          L7,
          {
            show: this.show,
            animate: this.element !== null,
            anchor: this.element,
            popupClass: n2(J.popup({ c: y8 })),
            id: this._popupId,
            anchorAlign: {
              horizontal: "left",
              vertical: "bottom"
            },
            popupAlign: {
              horizontal: "left",
              vertical: "top"
            }
          },
          !this.mobileMode && this.renderPicker()
        )
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? a22.createElement(
      i8,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: u11,
        editorValid: S10,
        editorDisabled: this.props.disabled,
        children: T7,
        style: { width: this.props.width }
      }
    ) : T7;
  }
  setShow(i11) {
    const { onOpen: t10, onClose: s8 } = this.props;
    this.show !== i11 && (this.setState({ show: i11 }), i11 && t10 && t10.call(void 0, {
      target: this
    }), !i11 && s8 && s8.call(void 0, {
      target: this
    }));
  }
  nextTick(i11) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i11());
  }
  calculateMedia(i11) {
    for (const t10 of i11)
      this.setState({ windowWidth: t10.target.clientWidth });
  }
};
o15.displayName = "DateTimePicker", o15.propTypes = {
  className: import_prop_types16.default.string,
  defaultShow: import_prop_types16.default.bool,
  defaultValue: import_prop_types16.default.instanceOf(Date),
  disabled: import_prop_types16.default.bool,
  focusedDate: import_prop_types16.default.instanceOf(Date),
  format: import_prop_types16.default.oneOfType([
    import_prop_types16.default.string,
    import_prop_types16.default.shape({
      skeleton: import_prop_types16.default.string,
      pattern: import_prop_types16.default.string,
      date: import_prop_types16.default.oneOf(["short", "medium", "long", "full"]),
      time: import_prop_types16.default.oneOf(["short", "medium", "long", "full"]),
      datetime: import_prop_types16.default.oneOf(["short", "medium", "long", "full"]),
      era: import_prop_types16.default.oneOf(["narrow", "short", "long"]),
      year: import_prop_types16.default.oneOf(["numeric", "2-digit"]),
      month: import_prop_types16.default.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: import_prop_types16.default.oneOf(["numeric", "2-digit"]),
      weekday: import_prop_types16.default.oneOf(["narrow", "short", "long"]),
      hour: import_prop_types16.default.oneOf(["numeric", "2-digit"]),
      hour12: import_prop_types16.default.bool,
      minute: import_prop_types16.default.oneOf(["numeric", "2-digit"]),
      second: import_prop_types16.default.oneOf(["numeric", "2-digit"]),
      timeZoneName: import_prop_types16.default.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: import_prop_types16.default.oneOfType([
    import_prop_types16.default.oneOf([
      "wide",
      "narrow",
      "short",
      "formatPattern"
    ]),
    import_prop_types16.default.shape({
      year: import_prop_types16.default.string,
      month: import_prop_types16.default.string,
      day: import_prop_types16.default.string,
      hour: import_prop_types16.default.string,
      minute: import_prop_types16.default.string,
      second: import_prop_types16.default.string
    })
  ]),
  id: import_prop_types16.default.string,
  ariaLabelledBy: import_prop_types16.default.string,
  ariaDescribedBy: import_prop_types16.default.string,
  min: import_prop_types16.default.instanceOf(Date),
  max: import_prop_types16.default.instanceOf(Date),
  name: import_prop_types16.default.string,
  popupSettings: import_prop_types16.default.shape({
    animate: import_prop_types16.default.bool,
    appendTo: import_prop_types16.default.any,
    popupClass: import_prop_types16.default.string
  }),
  show: import_prop_types16.default.bool,
  tabIndex: import_prop_types16.default.number,
  title: import_prop_types16.default.string,
  value: import_prop_types16.default.instanceOf(Date),
  weekNumber: import_prop_types16.default.bool,
  width: import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string]),
  validationMessage: import_prop_types16.default.string,
  required: import_prop_types16.default.bool,
  validate: import_prop_types16.default.bool,
  valid: import_prop_types16.default.bool,
  cancelButton: import_prop_types16.default.bool,
  size: import_prop_types16.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types16.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types16.default.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: import_prop_types16.default.bool,
  inputAttributes: import_prop_types16.default.object
}, o15.defaultProps = {
  defaultShow: false,
  defaultValue: null,
  disabled: false,
  format: "g",
  // general date and time pattern (short time): "M/d/y h:mm a" for en.
  max: L2,
  min: H,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: false,
  validityStyles: true,
  cancelButton: true,
  dateInput: Z,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: false
};
var f8 = o15;
var ye2 = a2();
var Ie = a3(
  x(
    ye2,
    a4(
      p2(f8)
    )
  )
);
Ie.displayName = "KendoReactDateTimePicker";
v(f8);

export {
  __spreadArray,
  w2 as w,
  L,
  f2 as f,
  c,
  l3 as l,
  H,
  L2,
  q,
  G2 as G,
  X,
  r2 as r,
  n5 as n,
  l4 as l2,
  a9 as a,
  c2,
  i6 as i,
  r3 as r2,
  o6 as o,
  l5 as l3,
  s3 as s,
  d4 as d,
  g2 as g,
  x3 as x,
  a10 as a2,
  v4 as v,
  g3 as g2,
  w4 as w2,
  W2 as W,
  U3 as U,
  Q2 as Q,
  K3 as K,
  V2 as V,
  K4 as K2,
  p6 as p,
  s4 as s2,
  d7 as d2,
  J3 as J,
  Q3 as Q2,
  B2 as B,
  Z,
  r7 as r3,
  G7 as G2,
  n13 as n2,
  m2 as m,
  ue,
  l7 as l4,
  Dt,
  H3 as H2,
  B3 as B2,
  S6 as S,
  D,
  x5 as x2,
  f7 as f2,
  p9 as p2,
  p10 as p3,
  be,
  ye,
  c6 as c3,
  v7 as v2,
  pe,
  me,
  u10 as u,
  J4 as J2,
  Q4 as Q3,
  f8 as f3,
  ye2,
  Ie
};
/*! Bundled license information:

@progress/kendo-react-dateinputs/virtualization/services/ScrollerService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/virtualization/Virtualization.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/CalendarCell.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/CalendarWeekCell.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/models/CalendarViewEnum.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/models/SelectionRange.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/WeekNamesService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/View.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/CalendarHeaderTitle.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/Header.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/messages/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/TodayCommand.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/ViewList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/CalendarNavigationItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/Navigation.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/models/NavigationAction.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/CenturyViewService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/DecadeViewService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/MonthViewService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/YearViewService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/BusViewService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/DOMService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/NavigationService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/services/ScrollSyncService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/Calendar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/dateinput/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/models/TimePart.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/common/ClearButton.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/dateinput/dateInputIntl.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/dateinput/DateInput.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/datepicker/ToggleButton.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/common/PickerWrap.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/hooks/usePickerFloatingLabel.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/common/AdaptiveMode.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/datepicker/DatePicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/package-metadata.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/services/DayPeriodService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/services/DOMService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/services/HoursService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/services/MinutesService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/services/SecondsService.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/TimeList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/TimePart.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/TimeSelector.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/timepicker/TimePicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/HorizontalViewList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/calendar/components/MultiViewCalendar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/daterangepicker/DateRangePicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/datetimepicker/DateTimeSelector.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/datetimepicker/DateTimePicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dateinputs/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)
*/
//# sourceMappingURL=chunk-L6Q2DE2H.js.map
