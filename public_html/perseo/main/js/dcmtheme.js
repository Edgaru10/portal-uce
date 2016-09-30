///#source 1 1 /public_html/perseo/my_html/js/dcm_common.js
var isLocalHost = false;
var reg = /.*\/.*\//g;
//#region jquery v1.11.0
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = "1.11.0", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return n.each(this, a, b) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--) ; i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray || function (a) { return "array" === n.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (l.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && n.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: k && !k.call("\ufeff\xa0") ? function (a) { return null == a ? "" : k.call(a) } : function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || n.guid++, e) : void 0 }, now: function () { return +new Date }, support: l }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function (a, b) { return a === b && (j = !0), 0 }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function db(a, b, d, e) { var f, g, h, i, j, m, p, q, u, v; if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d; if (1 !== (i = b.nodeType) && 9 !== i) return []; if (n && !e) { if (f = Z.exec(a)) if (h = f[1]) { if (9 === i) { if (g = b.getElementById(h), !g || !g.parentNode) return d; if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else { if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d } if (c.qsa && (!o || !o.test(a))) { if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) { m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length; while (j--) m[j] = q + pb(m[j]); u = $.test(a) && mb(b.parentNode) || b, v = m.join(",") } if (v) try { return G.apply(d, u.querySelectorAll(v)), d } catch (w) { } finally { p || b.removeAttribute("id") } } } return xb(a.replace(P, "$1"), b, d, e) } function eb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function fb(a) { return a[s] = !0, a } function gb(a) { var b = l.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function hb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function ib(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function jb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function kb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function lb(a) { return fb(function (b) { return b = +b, fb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function mb(a) { return a && typeof a.getElementsByTagName !== A && a } c = db.support = {}, f = db.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : t, g = e.defaultView; return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { k() })), c.attributes = gb(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function (a) { return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== A && n) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:") })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, z = b ? function (a, b) { if (a === b) return j = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return j = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0; if (f === g) return ib(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) k.unshift(c); while (h[d] === k[d]) d++; return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0 }, e) : l }, db.matches = function (a, b) { return db(a, null, null, b) }, db.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try { var d = q.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return db(b, l, null, [a]).length > 0 }, db.contains = function (a, b) { return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function (a, b) { (a.ownerDocument || a) !== l && k(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0; return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, db.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return i = null, a }, e = db.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[5] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ab, bb).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = w[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = db.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && t) { k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m]; break } } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a); return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: fb(function (a) { var b = [], c = [], d = g(a.replace(P, "$1")); return d[s] ? fb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: fb(function (a) { return function (b) { return db(a, b).length > 0 } }), contains: fb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: fb(function (a) { return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) { var c; do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === m }, focus: function (a) { return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: lb(function () { return [0] }), last: lb(function (a, b) { return [b - 1] }), eq: lb(function (a, b, c) { return [0 > c ? c + b : c] }), even: lb(function (a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: lb(function (a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b); function nb() { } nb.prototype = d.filters = d.pseudos, d.setFilters = new nb; function ob(a, b) { var c, e, f, g, h, i, j, k = x[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? db.error(a) : x(a, i).slice(0) } function pb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d } function qb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = v++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [u, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function rb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function sb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function tb(a, b, c, d, e, f) { return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = sb(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ub(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) { return a === b }, i, !0), l = qb(function (a) { return I.call(b, a) > -1 }, i, !0), m = [function (a, c, d) { return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++) if (c = d.relative[a[j].type]) m = [qb(rb(m), c)]; else { if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) { for (e = ++j; f > e; e++) if (d.relative[a[e].type]) break; return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) } m.push(c) } return rb(m) } function vb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) { var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length; for (k && (h = g !== l && g) ; q !== x && null != (m = v[q]) ; q++) { if (e && m) { n = 0; while (o = a[n++]) if (o(m, g, i)) { j.push(m); break } k && (u = w) } c && ((m = !o && m) && p--, f && r.push(m)) } if (p += q, c && q !== p) { n = 0; while (o = b[n++]) o(r, s, g, i); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j)); s = sb(s) } G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j) } return k && (u = w, h = t), r }; return c ? fb(f) : f } g = db.compile = function (a, b) { var c, d = [], e = [], f = y[a + " "]; if (!f) { b || (b = ob(a)), c = b.length; while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f); f = y(a, vb(e, d)) } return f }; function wb(a, b, c) { for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c); return c } function xb(a, b, e, f) { var h, i, j, k, l, m = ob(a); if (!f && 1 === m.length) { if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e; a = a.slice(i.shift().value.length) } h = V.needsContext.test(a) ? 0 : i.length; while (h--) { if (j = i[h], d.relative[k = j.type]) break; if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) { if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e; break } } } return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e } return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) { return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function (a) { return null == a.getAttribute("disabled") }) || hb(J, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return n.inArray(a, b) >= 0 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length } }); var y, z = a.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, B = n.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = z.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return y.find(a); this.length = 1, this[0] = d } return this.context = z, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; B.prototype = n.fn, y = n(z); var C = /^(?:parents|prev(?:Until|All))/, D = { children: !0, contents: !0, next: !0, prev: !0 }; n.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), n.fn.extend({ has: function (a) { var b, c = n(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function E(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return n.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return n.dir(a, "parentNode", c) }, next: function (a) { return E(a, "nextSibling") }, prev: function (a) { return E(a, "previousSibling") }, nextAll: function (a) { return n.dir(a, "nextSibling") }, prevAll: function (a) { return n.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return n.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return n.dir(a, "previousSibling", c) }, siblings: function (a) { return n.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return n.sibling(a.firstChild) }, contents: function (a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e) } }); var F = /\S+/g, G = {}; function H(a) { var b = G[a] = {}; return n.each(a.match(F) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { n.each(b, function (b, c) { var d = n.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && n.each(arguments, function (a, c) { var d; while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? n.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e) ; e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { if (a === !0 ? !--n.readyWait : !n.isReady) { if (!z.body) return setTimeout(n.ready); n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready")) } } }); function J() { z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) } function K() { (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready()) } n.ready.promise = function (b) { if (!I) if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1); else { z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K); var c = !1; try { c = null == a.frameElement && z.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!n.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } J(), n.ready() } }() } return I.promise(b) }; var L = "undefined", M; for (M in n(l)) break; l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () { var a, b, c = z.getElementsByTagName("body")[0]; c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null) }), function () { var a = z.createElement("div"); if (null == l.deleteExpando) { l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 } } a = null }(), n.acceptData = function (a) { var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(O, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) { } n.data(a, b, c) } else c = void 0 } return c } function Q(a) { var b; for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    } function S(a, b, c) { if (n.acceptData(a)) { var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function (a, b, c) { return R(a, b, c) }, removeData: function (a, b) { return S(a, b) }, _data: function (a, b, c) { return R(a, b, c, !0) }, _removeData: function (a, b) { return S(a, b, !0) } }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])); n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { n.data(this, a) }) : arguments.length > 1 ? this.each(function () { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { n.removeData(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }, W = n.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, X = /^(?:checkbox|radio)$/i; !function () { var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input"); if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { l.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == l.deleteExpando) { l.deleteExpando = !0; try { delete b.test } catch (d) { l.deleteExpando = !1 } } a = b = c = null }(), function () { var b, c, d = z.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var Y = /^(?:input|select|textarea)$/i, Z = /^key/, $ = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, ab = /^([^.]*)(?:\.(.+)|)$/; function bb() { return !0 } function cb() { return !1 } function db() { try { return z.activeElement } catch (a) { } } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(F) || [""], h = b.length; while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(F) || [""], j = b.length; while (j--) if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g)); i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, m, o = [d || z], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !n.isWindow(d)) { for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode) ; h; h = h.parentNode) o.push(h), l = h; l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a) } m = 0; while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) { l = d[g], l && (d[g] = null), n.event.triggered = p; try { d[p]() } catch (r) { } n.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[n.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== db() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === db() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = n.extend(new n.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = z.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { isDefaultPrevented: cb, isPropagationStopped: cb, isImmediatePropagationStopped: cb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = bb, this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submitBubbles || (n.event.special.submit = { setup: function () { return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0; c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), n._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.changeBubbles || (n.event.special.change = { setup: function () { return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), n.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0) })), !1) : void n.event.add(this, "beforeactivate._change", function (a) { var b = a.target; Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0) }), n._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return n.event.remove(this, "._change"), !Y.test(this.nodeName) } }), l.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = n._data(d, b); e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = n._data(d, b) - 1; e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return n().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); function eb(a) { var b = fb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gb = / jQuery\d+="(?:null|\d+)"/g, hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), ib = /^\s+/, jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, kb = /<([\w:]+)/, lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<(?:script|style|link)/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i, pb = /^$|\/(?:java|ecma)script/i, qb = /^true\/(.*)/, rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, tb = eb(z), ub = tb.appendChild(z.createElement("div")); sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td; function vb(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]) ; e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f } function wb(a) { X.test(a.type) && (a.defaultChecked = a.checked) } function xb(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function yb(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a } function zb(a) { var b = qb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ab(a, b) { for (var c, d = 0; null != (c = a[d]) ; d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) } function Bb(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]) } g.data && (g.data = n.extend({}, g.data)) } } function Cb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle); b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } n.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]) ; ++g) d[g] && Cb(e, d[g]); if (b) if (c) for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]) ; g++) Bb(e, d[g]); else Bb(a, f); return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++) if (f = a[q], f || 0 === f) if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f); else if (mb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0]; while (e--) h = h.lastChild; if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) { f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } n.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0; while (f = p[q++]) if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) { e = 0; while (f = h[e++]) pb.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]) ; h++) if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle); j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), n.fn.extend({ text: function (a) { return W(this, function (a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]) ; e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) { 1 === a.nodeType && n.cleanData(vb(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return W(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0; if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(jb, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, k = this.length, m = this, o = k - 1, p = a[0], q = n.isFunction(p); if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, ""))); i = c = null } return this } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Db, Eb = {}; function Fb(b, c) { var d = n(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display"); return d.detach(), e } function Gb(a) { var b = z, c = Eb[a]; return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c } !function () { var a, b, c = z.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () { var a, c, e, f; if (null == b) { if (a = z.getElementsByTagName("body")[0], !a) return; f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null } return b } }(); var Hb = /^margin/, Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Jb, Kb, Lb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Jb = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : z.documentElement.currentStyle && (Jb = function (a) { return a.currentStyle }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Mb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h = z.createElement("div"), i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, { reliableHiddenOffsets: function () { if (null != c) return c; var a, b, d, e = z.createElement("div"), f = z.getElementsByTagName("body")[0]; if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c }, boxSizing: function () { return null == d && k(), d }, boxSizingReliable: function () { return null == e && k(), e }, pixelPosition: function () { return null == f && k(), f }, reliableMarginRight: function () { var b, c, d, e; if (null == g && a.getComputedStyle) { if (b = z.getElementsByTagName("body")[0], !b) return; c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c) } return g } }); function k() { var b, c, h = z.getElementsByTagName("body")[0]; h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function () { d = 4 === c.offsetWidth }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width), h.removeChild(b), c = h = null) } }(), n.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Nb = /alpha\([^)]*\)/i, Ob = /opacity\s*=\s*([^)]*)/, Pb = /^(none|table(?!-c[ea]).+)/, Qb = new RegExp("^(" + T + ")(.*)$", "i"), Rb = new RegExp("^([+-])=(" + T + ")", "i"), Sb = { position: "absolute", visibility: "hidden", display: "block" }, Tb = { letterSpacing: 0, fontWeight: 400 }, Ub = ["Webkit", "O", "Moz", "ms"]; function Vb(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length; while (e--) if (b = Ub[e] + c, b in a) return b; return d } function Wb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Xb(a, b, c) { var d = Qb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Yb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g } function Zb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Jb(a), g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e; d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px" } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Kb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = "", i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () { return Zb(a, b, d) }) : Zb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Jb(a); return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function (a, b) { return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e) } }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) { return b ? n.swap(a, { display: "inline-block" }, Kb, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Hb.test(a) || (n.cssHooks[a + b].set = Xb) }), n.fn.extend({
        css: function (a, b) {
            return W(this, function (a, b, c) {
                var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () { return Wb(this, !0) }, hide: function () { return Wb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { V(this) ? n(this).show() : n(this).hide() }) }
    }); function $b(a, b, c, d, e) { return new $b.prototype.init(a, b, c, d, e) } n.Tween = $b, $b.prototype = { constructor: $b, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = $b.propHooks[this.prop]; return a && a.get ? a.get(this) : $b.propHooks._default.get(this) }, run: function (a) { var b, c = $b.propHooks[this.prop]; return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this } }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, n.fx = $b.prototype.init, n.fx.step = {}; var _b, ac, bc = /^(?:toggle|show|hide)$/, cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), dc = /queueHooks$/, ec = [jc], fc = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = cc.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function gc() { return setTimeout(function () { _b = void 0 }), _b = n.now() } function hc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function ic(a, b, c) { for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function jc(a, b, c) { var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && V(a), r = n._data(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, m.always(function () { m.always(function () { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], bc.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || n.style(a, d) } if (!n.isEmptyObject(o)) { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () { n(a).hide() }), m.done(function () { var b; n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function kc(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function lc(a, b, c) { var d, e, f = 0, g = ec.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: _b || gc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (kc(k, j.opts.specialEasing) ; g > f; f++) if (d = ec[f].call(j, a, k, j.opts)) return d; return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(lc, { tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b) }, prefilter: function (a, b) { b ? ec.unshift(a) : ec.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = lc(this, n.extend({}, a), f); (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e) } }), n.each({ slideDown: hc("show"), slideUp: hc("hide"), slideToggle: hc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = n.timers, c = 0; for (_b = n.now() ; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || n.fx.stop(), _b = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { ac || (ac = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { clearInterval(ac), ac = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e = z.createElement("div"); e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null }(); var mc = /\r/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.text(a) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0 } }, l.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var nc, oc, pc = n.expr.attrHandle, qc = /^(?:checked|selected)$/i, rc = l.getSetAttribute, sc = l.input; n.fn.extend({ attr: function (a, b) { return W(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(F); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), oc = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = pc[b] || n.find.attr; pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) { var e, f; return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), sc && rc || (n.attrHooks.value = { set: function (a, b, c) { return n.nodeName(a, "input") ? void (a.defaultValue = b) : nc && nc.set(a, b, c) } }), rc || (nc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, pc.id = pc.name = pc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: nc.set }, n.attrHooks.contenteditable = { set: function (a, b, c) { nc.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function (a, b) { n.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var tc = /^(?:input|select|textarea|button|object)$/i, uc = /^(?:a|area)$/i; n.fn.extend({ prop: function (a, b) { return W(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = n.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1 } } } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) { n.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding"); var vc = /[\t\r\n\f]/g; n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = n.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? n.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = n(this), f = a.match(F) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0; return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var wc = n.now(), xc = /\?/, yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; n.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = n.trim(b + ""); return e && !n.trim(e.replace(yc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var zc, Ac, Bc = /#.*$/, Cc = /([?&])_=[^&]*/, Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fc = /^(?:GET|HEAD)$/, Gc = /^\/\//, Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ic = {}, Jc = {}, Kc = "*/".concat("*"); try { Ac = location.href } catch (Lc) { Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href } zc = Hc.exec(Ac.toLowerCase()) || []; function Mc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(F) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nc(a, b, c, d) { var e = {}, f = a === Jc; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Oc(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a } function Pc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Qc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ac, type: "GET", isLocal: Ec.test(zc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a) }, ajaxPrefilter: Mc(Ic), ajaxTransport: Mc(Jc), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v; h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Nc(Jc, k, b, v)) { v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { if (n.isFunction(a)) return this.each(function (b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)) } : function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display")) }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var Rc = /%20/g, Sc = /\[\]$/, Tc = /\r?\n/g, Uc = /^(?:submit|button|image|reset|file)$/i, Vc = /^(?:input|select|textarea|keygen)/i; function Wc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Wc(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) Wc(c, a[c], b, e); return d.join("&").replace(Rc, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(Tc, "\r\n") } }) : { name: b.name, value: c.replace(Tc, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c() } : $c; var Xc = 0, Yc = {}, Zc = n.ajaxSettings.xhr(); a.ActiveXObject && n(a).on("unload", function () { for (var a in Yc) Yc[a](void 0, !0) }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function (a) { if (!a.crossDomain || l.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Xc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function $c() { try { return new a.XMLHttpRequest } catch (b) { } } function _c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = z.head || n("head")[0] || z.documentElement; return { send: function (d, e) { b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var ad = [], bd = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = ad.pop() || n.expando + "_" + wc++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || z; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) }; var cd = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && cd) return cd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; var dd = a.document.documentElement; function ed(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || dd; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || dd }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); n.fn[a] = function (d) { return W(this, function (a, d, e) { var f = ed(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function (a, b) { n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) { return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return W(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var fd = a.jQuery, gd = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n }, typeof b === L && (a.jQuery = a.$ = n), n
});
//#endregion

//#region modernizer
//<editor-fold  defaultstate="collapsed" desc="modernizer"> #region modernizer
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function (a, b, c) {
    function x(a) {
        j.cssText = a
    }
    function y(a, b) {
        return x(prefixes.join(a + ";") + (b || ""))
    }
    function z(a, b) {
        return typeof a === b
    }
    function A(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function B(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!A(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function C(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function D(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + n.join(d + " ") + d).split(" ");
        return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
        return v.call(a, b)
    } : w = function (a, b) {
        return b in a && z(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = t.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(t.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(t.call(arguments)))
        };
        return e
    }), p.csstransitions = function () {
        return D("transition")
    };
    for (var E in p)
        w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    return e.addTest = function (a, b) {
        if (typeof a == "object")
            for (var d in a)
                w(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, x(""), i = k = null, function (a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o };
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
        return B([a])
    }, e.testAllProps = D, e.prefixed = function (a, b, c) {
        return b ? D(a, b, c) : D(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {
    }
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
        var a = B;
        return a.loader = { load: j, i: 0 }, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
        return "[object Array]" == o.call(a)
    }, x = [], y = {}, z = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function () {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(), a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
//</editor-fold>
//#endregion 

//#region isotope
//<editor-fold  defaultstate="collapsed" desc="isotope">
/*
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function (t) {
    function e() {
    }
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a], h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + n + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement, o = function () {
    };
    i.addEventListener ? o = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function (t, i, o) {
        t[i + o] = o.handleEvent ? function () {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function () {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function () {
    };
    i.removeEventListener ? n = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = { bind: o, unbind: n };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }
    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }
    var n = t.document, r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this), function () {
    function t() {
    }
    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype, n = this, r = n.EventEmitter;
    o.getListeners = function (t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)
                o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else
            e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function (t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n)
            n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : { listener: i, once: !1 });
        return this
    }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 })
    }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
        return this.getListeners(t), this
    }, o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }, o.removeListener = function (t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r)
            r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function (t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;)
                r.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function (t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i)
            delete o[t];
        else if (t instanceof RegExp)
            for (e in o)
                o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else
            delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;)
                    i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)
                if (e = i[n] + t, "string" == typeof o[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }
    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)
                    return i();
                var n = {};
                n.width = t.offsetWidth, n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f], l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight, g = n.paddingTop + n.paddingBottom, v = n.marginLeft + n.marginRight, _ = n.marginTop + n.marginBottom, I = n.borderLeftWidth + n.borderRightWidth, L = n.borderTopWidth + n.borderBottomWidth, z = h && u, S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
            }
        }
        function a(t, e) {
            if (n || -1 === e.indexOf("%"))
                return e;
            var i = t.style, o = i.left, r = t.runtimeStyle, s = r && r.left;
            return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
        }
        var u, p = t("boxSizing");
        return function () {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width), i.removeChild(t)
            }
        }(), o
    }
    var n = t.getComputedStyle, r = n ? function (t) {
        return n(t, null)
    } : function (t) {
        return t.currentStyle
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function (t, e) {
    function i(t, e) {
        return t[a](e)
    }
    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
            if (i[n] === t)
                return !0;
        return !1
    }
    function r(t, e) {
        return o(t), i(t, e)
    }
    var s, a = function () {
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
            var n = t[i], r = n + "MatchesSelector";
            if (e[r])
                return r
        }
    }();
    if (a) {
        var u = document.createElement("div"), p = i(u, "div");
        s = p ? i : r
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype), function (t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create())
        }
        var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), c = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[u], d = ["transform", "transition", "transitionDuration", "transitionProperty"], l = function () {
            for (var t = {}, e = 0, i = d.length; i > e; e++) {
                var o = d[e], n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function () {
            this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" })
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = n(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        }, a.prototype.getPosition = function () {
            var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size, e = this.layout.options, i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
        };
        var y = f ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)
                return this.layoutPosition(), void 0;
            var a = t - i, u = e - o, p = {}, h = this.layout.options;
            a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(c, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        };
        var v = { transitionProperty: "", transitionDuration: "" };
        return a.prototype.removeTransitionStyles = function () {
            this.css(v)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
                return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function () {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options;
            this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0 })
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({ display: "none" })
                    }
                }
            })
        }, a.prototype.destroy = function () {
            this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" })
        }, a
    }
    var r = t.getComputedStyle, s = r ? function (t) {
        return r(t, null)
    } : function (t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === f.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))
                return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var g = 0, v = {};
        return m.namespace = "outlayer", m.Item = y, m.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e(m.prototype, f.prototype), m.prototype.option = function (t) {
            e(this.options, t)
        }, m.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n], a = new i(s, this);
                o.push(a)
            }
            return o
        }, m.prototype._filterFindItemElements = function (t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))
                    if (e) {
                        l(s, e) && i.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                            i.push(a[u])
                    } else
                        i.push(s)
            }
            return i
        }, m.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
                t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
            this.getSize()
        }, m.prototype.getSize = function () {
            this.size = d(this.element)
        }, m.prototype._getMeasurement = function (t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
        }, m.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, m.prototype._layoutItems = function (t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }
            var o = this;
            if (!t || !t.length)
                return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
            }
            this._processLayoutQueue(n)
        }, m.prototype._getItemLayoutPosition = function () {
            return { x: 0, y: 0 }
        }, m.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, m.prototype._positionItem = function (t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, m.prototype._postLayout = function () {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function (t, e, i) {
            function o() {
                return n++, n === r && i.call(s), !0
            }
            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }, m.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, m.prototype.unstamp = function (t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n(o, this.stamps), this.unignore(o)
                }
        }, m.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
        }, m.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, m.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), i = this._boundingRect, o = d(t), n = { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom };
            return n
        }, m.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function () {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function () {
            this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
        }, m.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function () {
            var t = d(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, m.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.reveal()
                }
        }, m.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.hide()
                }
        }, m.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)
                    return o
            }
        }, m.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i], r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }, m.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function () {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(), n(s, this.items)
                }
            }
        }, m.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
        }, m.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }, m.create = function (t, i) {
            function o() {
                m.apply(this, arguments)
            }
            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () {
                y.apply(this, arguments)
            }, o.Item.prototype = new y, s(function () {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, c = i[s], d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c, f);
                    p && p.data(c, t, y)
                }
            }), p && p.bridget && p.bridget(t, o), o
        }, m.Item = y, m
    }
    var a = t.document, u = t.console, p = t.jQuery, h = function () {
    }, f = Object.prototype.toString, c = "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, d = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item, e.prototype._create = function () {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function () {
            function t(t) {
                return function () {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element), i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function (t, e) {
            var i = t + e, o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)
                this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, o.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
                this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function (t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function (t) {
            var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
                this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = { height: this.maxY };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }
    var i = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)
                return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t, i) {
        var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function (t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function () {
            return { height: this.maxY }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t) {
        var e = t.create("vertical", { horizontalAlignment: 0 });
        return e.prototype._resetLayout = function () {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
            return this.y += t.size.outerHeight, { x: e, y: i }
        }, e.prototype._getContainerSize = function () {
            return { height: this.y }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === h.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t, i, r, u, h) {
        function f(t, e) {
            return function (i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n], a = i.sortData[s], u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var c = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        c.Item = u, c.LayoutMode = h, c.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in h.modes)
                this._initLayoutMode(e)
        }, c.prototype.reloadItems = function () {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, c.prototype._itemize = function () {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, c.prototype._initLayoutMode = function (t) {
            var i = h.modes[t], o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
        }, c.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, c.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.prototype.arrange = function (t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function () {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, c.prototype._filter = function (t) {
            function e() {
                f.reveal(n), f.hide(r)
            }
            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(), o
        }, c.prototype._getFilterTest = function (t) {
            return s && this.options.isJQueryFiltering ? function (e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return r(e.element, t)
            }
        }, c.prototype.updateSortData = function (t) {
            this._getSorters(), t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, c.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }, c.prototype._updateItemsSortData = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        };
        var d = function () {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = c.sortDataParsers[i[1]];
                return t = u ? function (t) {
                    return t && u(s(t))
                } : function (t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var i;
                return i = t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            }, parseFloat: function (t) {
                return parseFloat(t)
            }
        }, c.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, c.prototype._mode = function () {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)
                throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c.prototype._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, c.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, c.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, c.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, c.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
            }
        }, c.prototype._filterRevealAdded = function (t) {
            var e = this._noTransition(function () {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        }, c.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++)
                    o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function () {
                    this.hide(r)
                }), i = 0; n > i; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var l = c.prototype.remove;
        return c.prototype.remove = function (t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t), e && e.length)
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    n(s, this.filteredItems)
                }
        }, c.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, c
    }
    var s = t.jQuery, a = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, p = u.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
//</editor-fold>
//#endregion 

//#region jquery widget
//<editor-fold  defaultstate="collapsed" desc="jquery widget">
/* jQuery UI - v1.10.3 - 2013-05-28
 * http://jqueryui.com
 * Includes: jquery.ui.widget.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
    var i = 0, s = Array.prototype.slice, n = e.cleanData;
    e.cleanData = function (t) {
        for (var i, s = 0; null != (i = t[s]) ; s++)
            try {
                e(i).triggerHandler("remove")
            } catch (a) {
            }
        n(t)
    }, e.widget = function (i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, { version: n.version, _proto: e.extend({}, n), _childConstructors: [] }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function (i, n) {
            return e.isFunction(n) ? (l[i] = function () {
                var e = function () {
                    return s.prototype[i].apply(this, arguments)
                }, t = function (e) {
                    return s.prototype[i].apply(this, e)
                };
                return function () {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, { widgetEventPrefix: r ? h.widgetEventPrefix : i }, l, { constructor: o, namespace: u, widgetName: i, widgetFullName: a }), r ? (e.each(r._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function (i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o])
                a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function (i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function (r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function () {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function () {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: e.noop, widget: function () {
            return this.element
        }, option: function (i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++)
                        a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t)
                        return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        }, _setOptions: function (e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        }, _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        }, enable: function () {
            return this._setOption("disabled", !1)
        }, disable: function () {
            return this._setOption("disabled", !0)
        }, _on: function (i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function (n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        }, _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        }, _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        }, _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        }, _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        }, _trigger: function (t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = { effect: n });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = { duration: n }), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);
//</editor-fold>
//#endregion 

//#region jquery mousewheel
//<editor-fold  defaultstate="collapsed" desc="jquery mousewheel">

/* Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event,
                args = [].slice.call(arguments, 1),
                delta = 0,
                deltaX = 0,
                deltaY = 0,
                absDelta = 0,
                absDeltaXY = 0,
                fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta;
        }
        if (orgEvent.detail) {
            delta = orgEvent.detail * -1;
        }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
        }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
            lowestDeltaXY = absDeltaXY;
        }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);
        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));
//</editor-fold>
//#endregion 

//#region MM menu
//<editor-fold  defaultstate="collapsed" desc="MM menu js">

!function (e) {
    function n(n, s, t) {
        if (t)
            return "object" != typeof n && (n = {}), n;
        n = e.extend(!0, {}, e[a].defaults, n);
        for (var i = ["position", "zposition", "modal", "moveBackground"], o = 0, l = i.length; l > o; o++)
            "undefined" != typeof n[i[o]] && (e[a].deprecated('The option "' + i[o] + '"', "offCanvas." + i[o]), n.offCanvas = n.offCanvas || {}, n.offCanvas[i[o]] = n[i[o]]);
        return n
    }
    function s(n) {
        n = e.extend(!0, {}, e[a].configuration, n);
        for (var s = ["panel", "list", "selected", "label", "spacer"], t = 0, i = s.length; i > t; t++)
            "undefined" != typeof n[s[t] + "Class"] && (e[a].deprecated('The configuration option "' + s[t] + 'Class"', "classNames." + s[t]), n.classNames[s[t]] = n[s[t] + "Class"]);
        if ("undefined" != typeof n.counterClass && (e[a].deprecated('The configuration option "counterClass"', "classNames.counters.counter"), n.classNames.counters = n.classNames.counters || {}, n.classNames.counters.counter = n.counterClass), "undefined" != typeof n.collapsedClass && (e[a].deprecated('The configuration option "collapsedClass"', "classNames.labels.collapsed"), n.classNames.labels = n.classNames.labels || {}, n.classNames.labels.collapsed = n.collapsedClass), "undefined" != typeof n.header)
            for (var s = ["panelHeader", "panelNext", "panelPrev"], t = 0, i = s.length; i > t; t++)
                "undefined" != typeof n.header[s[t] + "Class"] && (e[a].deprecated('The configuration option "header.' + s[t] + 'Class"', "classNames.header." + s[t]), n.classNames.header = n.classNames.header || {}, n.classNames.header[s[t]] = n.header[s[t] + "Class"]);
        for (var s = ["pageNodetype", "pageSelector", "menuWrapperSelector", "menuInjectMethod"], t = 0, i = s.length; i > t; t++)
            "undefined" != typeof n[s[t]] && (e[a].deprecated('The configuration option "' + s[t] + '"', "offCanvas." + s[t]), n.offCanvas = n.offCanvas || {}, n.offCanvas[s[t]] = n[s[t]]);
        return n
    }
    function t() {
        r = !0, c.$wndw = e(window), c.$html = e("html"), c.$body = e("body"), e.each([o, l, d], function (e, n) {
            n.add = function (e) {
                e = e.split(" ");
                for (var s in e)
                    n[e[s]] = n.mm(e[s])
            }
        }), o.mm = function (e) {
            return "mm-" + e
        }, o.add("wrapper menu inline panel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"), o.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, l.mm = function (e) {
            return "mm-" + e
        }, l.add("parent"), d.mm = function (e) {
            return e + ".mm"
        }, d.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"), e[a]._c = o, e[a]._d = l, e[a]._e = d, e[a].glbl = c
    }
    var a = "mmenu", i = "4.4.2";
    if (!e[a]) {
        var o = {}, l = {}, d = {}, r = !1, c = { $wndw: null, $html: null, $body: null };
        e[a] = function (e, s, t) {
            return this.$menu = e, this.opts = s, this.conf = t, this.vars = {}, this.opts = n(this.opts, this.conf, this.$menu), this._initMenu(), this._init(this.$menu.children(this.conf.panelNodetype)), this
        }, e[a].version = i, e[a].addons = [], e[a].uniqueId = 0, e[a].defaults = { classes: "", slidingSubmenus: !0, onClick: { setSelected: !0 } }, e[a].configuration = { panelNodetype: "ul, ol, div", transitionDuration: 400, openingInterval: 25, classNames: { panel: "Panel", selected: "Selected", label: "Label", spacer: "Spacer" } }, e[a].prototype = {
            _init: function (n) {
                n = this._initPanels(n), n = this._initLinks(n), n = this._bindCustomEvents(n);
                for (var s = 0; s < e[a].addons.length; s++)
                    "function" == typeof this["_init_" + e[a].addons[s]] && this["_init_" + e[a].addons[s]](n);
                this._update()
            }, _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function () {
                    e(this).attr("id", o.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$menu.parent().addClass(o.wrapper);
                var n = [o.menu];
                n.push(o.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical")), this.opts.classes && n.push(this.opts.classes), this.$menu.addClass(n.join(" "))
            }, _initPanels: function (n) {
                var s = this;
                this.__findAddBack(n, "ul, ol").not("." + o.nolist).addClass(o.list);
                var t = this.__findAddBack(n, "." + o.list).find("> li");
                this.__refactorClass(t, this.conf.classNames.selected, "selected"), this.__refactorClass(t, this.conf.classNames.label, "label"), this.__refactorClass(t, this.conf.classNames.spacer, "spacer"), t.off(d.setSelected).on(d.setSelected, function (n, s) {
                    n.stopPropagation(), t.removeClass(o.selected), "boolean" != typeof s && (s = !0), s && e(this).addClass(o.selected)
                }), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"), n.add(this.__findAddBack(n, "." + o.list).children().children().filter(this.conf.panelNodetype)).addClass(o.panel);
                var a = this.__findAddBack(n, "." + o.panel), i = e("." + o.panel, this.$menu);
                a.each(function () {
                    var n = e(this), t = n.attr("id") || s.__getUniqueId();
                    n.attr("id", t)
                }), a.each(function () {
                    var n = e(this), t = n.is("ul, ol") ? n : n.find("ul ,ol").first(), a = n.parent(), i = a.find("> a, > span"), d = a.closest("." + o.panel);
                    if (a.parent().is("." + o.list)) {
                        n.data(l.parent, a);
                        var r = e('<a class="' + o.subopen + '" href="#' + n.attr("id") + '" />').insertBefore(i);
                        i.is("a") || r.addClass(o.fullsubopen), s.opts.slidingSubmenus && t.prepend('<li class="' + o.subtitle + '"><a class="' + o.subclose + '" href="#' + d.attr("id") + '">' + i.text() + "</a></li>")
                    }
                });
                var r = this.opts.slidingSubmenus ? d.open : d.toggle;
                if (i.each(function () {
                    var n = e(this), s = n.attr("id");
                    e('a[href="#' + s + '"]', i).off(d.click).on(d.click, function (e) {
                        e.preventDefault(), n.trigger(r)
                })
                }), this.opts.slidingSubmenus) {
                    var c = this.__findAddBack(n, "." + o.list).find("> li." + o.selected);
                    c.parents("li").removeClass(o.selected).end().add(c.parents("li")).each(function () {
                        var n = e(this), s = n.find("> ." + o.panel);
                        s.length && (n.parents("." + o.panel).addClass(o.subopened), s.addClass(o.opened))
                    }).closest("." + o.panel).addClass(o.opened).parents("." + o.panel).addClass(o.subopened)
                } else {
                    var c = e("li." + o.selected, i);
                    c.parents("li").removeClass(o.selected).end().add(c.parents("li")).addClass(o.opened)
                }
                var u = i.filter("." + o.opened);
                return u.length || (u = a.first()), u.addClass(o.opened).last().addClass(o.current), this.opts.slidingSubmenus && a.not(u.last()).addClass(o.hidden).end().appendTo(this.$menu), a
            }, _initLinks: function (n) {
                var s = this;
                return this.__findAddBack(n, "." + o.list).find("> li > a").not("." + o.subopen).not("." + o.subclose).not('[rel="external"]').not('[target="_blank"]').off(d.click).on(d.click, function (n) {
                    var t = e(this), a = t.attr("href") || "";
                    s.__valueOrFn(s.opts.onClick.setSelected, t) && t.parent().trigger(d.setSelected);
                    var i = s.__valueOrFn(s.opts.onClick.preventDefault, t, "#" == a.slice(0, 1));
                    i && n.preventDefault(), s.__valueOrFn(s.opts.onClick.blockUI, t, !i) && c.$html.addClass(o.blocking), s.__valueOrFn(s.opts.onClick.close, t, i) && s.$menu.triggerHandler(d.close)
                }), n
            }, _bindCustomEvents: function (n) {
                var s = this;
                return n.off(d.toggle + " " + d.open + " " + d.close).on(d.toggle + " " + d.open + " " + d.close, function (e) {
                    e.stopPropagation()
                }), this.opts.slidingSubmenus ? n.on(d.open, function () {
                    return s._openSubmenuHorizontal(e(this))
                }) : n.on(d.toggle, function () {
                    var n = e(this);
                    return n.triggerHandler(n.parent().hasClass(o.opened) ? d.close : d.open)
                }).on(d.open, function () {
                    return e(this).parent().addClass(o.opened), "open"
                }).on(d.close, function () {
                    return e(this).parent().removeClass(o.opened), "close"
                }), n
            }, _openSubmenuHorizontal: function (n) {
                if (n.hasClass(o.current))
                    return !1;
                var s = e("." + o.panel, this.$menu), t = s.filter("." + o.current);
                return s.removeClass(o.highest).removeClass(o.current).not(n).not(t).addClass(o.hidden), n.hasClass(o.opened) ? t.addClass(o.highest).removeClass(o.opened).removeClass(o.subopened) : (n.addClass(o.highest), t.addClass(o.subopened)), n.removeClass(o.hidden).addClass(o.current), setTimeout(function () {
                    n.removeClass(o.subopened).addClass(o.opened)
                }, this.conf.openingInterval), "open"
            }, _update: function (e) {
                if (this.updates || (this.updates = []), "function" == typeof e)
                    this.updates.push(e);
                else
                    for (var n = 0, s = this.updates.length; s > n; n++)
                        this.updates[n].call(this, e)
            }, __valueOrFn: function (e, n, s) {
                return "function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof s ? s : e
            }, __refactorClass: function (e, n, s) {
                e.filter("." + n).removeClass(n).addClass(o[s])
            }, __findAddBack: function (e, n) {
                return e.find(n).add(e.filter(n))
            }, __transitionend: function (e, n, s) {
                var t = !1, a = function () {
                    t || n.call(e[0]), t = !0
                };
                e.one(d.transitionend, a), e.one(d.webkitTransitionEnd, a), setTimeout(a, 1.1 * s)
            }, __getUniqueId: function () {
                return o.mm(e[a].uniqueId++)
            }
        }, e.fn[a] = function (i, o) {
            return r || t(), i = n(i, o), o = s(o), this.each(function () {
                var n = e(this);
                n.data(a) || n.data(a, new e[a](n, i, o))
            })
        }, function () {
            var n = window.document, s = window.navigator.userAgent, t = "ontouchstart" in n, i = "WebkitOverflowScrolling" in n.documentElement.style, o = function () {
                return s.indexOf("Android") >= 0 ? 2.4 > parseFloat(s.slice(s.indexOf("Android") + 8)) : !1
            }();
            e[a].support = {
                touch: t, oldAndroidBrowser: o, overflowscrolling: function () {
                    return t ? i ? !0 : o ? !1 : !0 : !0
                }()
            }
        }(), e[a].debug = function () {
        }, e[a].deprecated = function (e, n) {
            "undefined" != typeof console && "undefined" != typeof console.warn && console.warn("MMENU: " + e + " is deprecated, use " + n + " instead.")
        }
    }
}(jQuery);
!function (e) {
    function o(o) {
        return ("top" == o.position || "bottom" == o.position) && ("back" == o.zposition || "next" == o.zposition) && (e[s].deprecated('Using position "' + o.position + '" in combination with zposition "' + o.zposition + '"', 'zposition "front"'), o.zposition = "front"), o
    }
    function t(e) {
        return "string" != typeof e.pageSelector && (e.pageSelector = "> " + e.pageNodetype), e
    }
    function n() {
        c = !0, p = e[s]._c, a = e[s]._d, r = e[s]._e, p.add("offcanvas modal background opening blocker page"), a.add("style"), r.add("opening opened closing closed setPage"), l = e[s].glbl, l.$allMenus = (l.$allMenus || e()).add(this.$menu), l.$wndw.on(r.keydown, function (e) {
            return l.$html.hasClass(p.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var o = 0;
        l.$wndw.on(r.resize, function (e, t) {
            if (t || l.$html.hasClass(p.opened)) {
                var n = l.$wndw.height();
                (t || n != o) && (o = n, l.$page.css("minHeight", n))
            }
        })
    }
    var s = "mmenu", i = "offCanvas";
    e[s].prototype["_init_" + i] = function () {
        if (this.opts[i] && !this.vars[i + "_added"]) {
            this.vars[i + "_added"] = !0, c || n(), this.opts[i] = o(this.opts[i]), this.conf[i] = t(this.conf[i]);
            var e = this.opts[i], s = this.conf[i], a = [p.offcanvas];
            "boolean" != typeof this.vars.opened && (this.vars.opened = !1), "left" != e.position && a.push(p.mm(e.position)), "back" != e.zposition && a.push(p.mm(e.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(p.wrapper), this[i + "_initPage"](l.$page), this[i + "_initBlocker"](), this[i + "_initOpenClose"](), this[i + "_bindCustomEvents"](), this.$menu[s.menuInjectMethod + "To"](s.menuWrapperSelector)
        }
    }, e[s].addons.push(i), e[s].defaults[i] = { position: "left", zposition: "back", modal: !1, moveBackground: !0 }, e[s].configuration[i] = { pageNodetype: "div", pageSelector: null, menuWrapperSelector: "body", menuInjectMethod: "prepend" }, e[s].prototype.open = function () {
        if (this.vars.opened)
            return !1;
        var e = this;
        return this._openSetup(), setTimeout(function () {
            e._openFinish()
        }, this.conf.openingInterval), "open"
    }, e[s].prototype._openSetup = function () {
        l.$allMenus.not(this.$menu).trigger(r.close), l.$page.data(a.style, l.$page.attr("style") || ""), l.$wndw.trigger(r.resize, [!0]);
        var e = [p.opened];
        this.opts[i].modal && e.push(p.modal), this.opts[i].moveBackground && e.push(p.background), "left" != this.opts[i].position && e.push(p.mm(this.opts[i].position)), "back" != this.opts[i].zposition && e.push(p.mm(this.opts[i].zposition)), this.opts.classes && e.push(this.opts.classes), l.$html.addClass(e.join(" ")), this.vars.opened = !0, this.$menu.addClass(p.current + " " + p.opened)
    }, e[s].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(l.$page, function () {
            e.$menu.trigger(r.opened)
        }, this.conf.transitionDuration), l.$html.addClass(p.opening), this.$menu.trigger(r.opening)
    }, e[s].prototype.close = function () {
        if (!this.vars.opened)
            return !1;
        var e = this;
        return this.__transitionend(l.$page, function () {
            e.$menu.removeClass(p.current).removeClass(p.opened), l.$html.removeClass(p.opened).removeClass(p.modal).removeClass(p.background).removeClass(p.mm(e.opts[i].position)).removeClass(p.mm(e.opts[i].zposition)), e.opts.classes && l.$html.removeClass(e.opts.classes), l.$page.attr("style", l.$page.data(a.style)), e.vars.opened = !1, e.$menu.trigger(r.closed)
        }, this.conf.transitionDuration), l.$html.removeClass(p.opening), this.$menu.trigger(r.closing), "close"
    }, e[s].prototype[i + "_initBlocker"] = function () {
        var o = this;
        l.$blck || (l.$blck = e('<div id="' + p.blocker + '" />').appendTo(l.$body)), l.$blck.off(r.touchstart).on(r.touchstart, function (e) {
            e.preventDefault(), e.stopPropagation(), l.$blck.trigger(r.mousedown)
        }).on(r.mousedown, function (e) {
            e.preventDefault(), l.$html.hasClass(p.modal) || o.close()
        })
    }, e[s].prototype[i + "_initPage"] = function (o) {
        o || (o = e(this.conf[i].pageSelector, l.$body), o.length > 1 && (e[s].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <" + this.conf[i].pageNodetype + ">."), o = o.wrapAll("<" + this.conf[i].pageNodetype + " />").parent())), o.addClass(p.page), l.$page = o
    }, e[s].prototype[i + "_initOpenClose"] = function () {
        var o = this, t = this.$menu.attr("id");
        t && t.length && (this.conf.clone && (t = p.umm(t)), e('a[href="#' + t + '"]').off(r.click).on(r.click, function (e) {
            e.preventDefault(), o.open()
        }));
        var t = l.$page.attr("id");
        t && t.length && e('a[href="#' + t + '"]').on(r.click, function (e) {
            e.preventDefault(), o.close()
        })
    }, e[s].prototype[i + "_bindCustomEvents"] = function () {
        var e = this, o = r.open + " " + r.opening + " " + r.opened + " " + r.close + " " + r.closing + " " + r.closed + " " + r.setPage;
        this.$menu.off(o).on(o, function (e) {
            e.stopPropagation()
        }), this.$menu.on(r.open, function () {
            e.open()
        }).on(r.close, function () {
            e.close()
        }).on(r.setPage, function (o, t) {
            e[i + "_initPage"](t), e[i + "_initOpenClose"]()
        })
    };
    var p, a, r, l, c = !1
}(jQuery);
//</editor-fold>
//#endregion 

//#region jquery easing
//<editor-fold  defaultstate="collapsed" desc="jquery easing">
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing,
        {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t == 0)
                    return b;
                if (t == d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d / 2) == 2)
                    return b + c;
                if (!p)
                    p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1)
                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                if ((t /= d / 2) < 1)
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d / 2)
                    return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        });
//</editor-fold>
//#endregion 

//#region debouncedresize
//<editor-fold  defaultstate="collapsed" desc="notices full">
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 */
var $event = $.event,
        $special,
        resizeTimeout;
$special = $event.special.debouncedresize = {
    setup: function () {
        $(this).on("resize", $special.handler);
    },
    teardown: function () {
        $(this).off("resize", $special.handler);
    },
    handler: function (event, execAsap) {
        // Save the context
        var context = this,
                args = arguments,
                dispatch = function () {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }

        execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
    },
    threshold: 50
};
//#endregion

//#region dock popup
var DockPopUp = (function () {
    var $items = $('.dock-popup'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }
    var reg = /.*\/.*\//g;
    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay');
            $item.data("index", ix);
            $item.on('click', function (event) {
                $item.addClass("no-anim");
                //if (event.target != this) return;
                //event.preventDefault();
                // $('.carreraWrap').removeClass("oculto visible animated bounceInRight");
                if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".ajax-content"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.append(sss.html());
                            sss = data = null;
                            //$.Metro.initSidebars($item);
                            //$.Metro.initBannerCircle(qq);
                            //sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                            switch (qq.data('func')) {
                                case "years": {
                                    yearGrid().init();
                                    $.Metro.initPdfStack(qq);
                                } break;
                                case "biblio": {
                                    //init componentets
                                    console.log("biblio cargada con exito 4");
                                    $.Metro.initDropdowns($item);
                                    $.Metro.initPulls($item);
                                    $.Metro.initSidebars($item);
                                    $.Metro.initPagination($item);
                                    initNotiAndvents($item);
                                    sidebarUpdate($item);
                                } break;
                                default:

                            }
                        },
                        error: function () {
                            //alert("Ajax no activo, ha ocurrido un error.");
                            $item.data('ajaxLoad', true);
                            switch (qq.data('func')) {
                                case "years": {
                                    yearGrid().init();
                                    $.Metro.initPdfStack(qq);
                                } break;
                                case "biblio": {
                                    //init componentets
                                    //$.Metro.initDropdowns($item);
                                    $.Metro.initSidebars($item);
                                    $.Metro.initPagination($item);
                                    initNotiAndvents($item);
                                    sidebarUpdate($item);

                                } break;
                                default:

                            }

                        }
                    });

                }
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.data("index");
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });

                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                if ($item.data('ajaxLoad')) {
                    var qq = $($item.find(".ajax-content"));
                    switch (qq.data('func')) {
                        case "years": {

                        } break;
                        case "biblio": {
                            sidebarUpdate(qq);
                        } break;
                        default:

                    }
                }

            });

            $close.on('click', function () {

                $body.css('overflow-y', 'auto');

                var layoutProp = getItemLayoutProp($item),
					clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
					clipPropLast = 'auto';

                // reset current
                current = -1;

                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });

                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                                $item.removeClass("no-anim");
                            });
                        }, 25);

                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }

                return false;

            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    function sidebarUpdate(itemx) {

        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                full_viewx = $(sidebar.children(".full-content")),
                frames = full_viewx.children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();
        $(tabs.get(1)).parent().addClass("active");

        var cssx = $(tabs.get(1)).css("background-color");

        sidebar.css("background-color", cssx);
        full_viewx.css("background-color", cssx);


        sidebar = full_viewx = tabs = cssx = null;

    }
    function initNotiAndvents(itemx) {
        var notiWrap = itemx.find('.noticiasWrap'),
            notiViewer = notiWrap.find('.noti-viewer'),
            noti_items = notiWrap.find('.noti-item'),

            eventWrap = itemx.find('.eventosWrap'),
            event_items = eventWrap.find('.item-evento');


        notiWrap.find('[data-role=sharex]').each(function () {
            var that = $(this);
            fixedUrls(that);
            that = null;
        });

        //init notis
        noti_items.each(function () {
            var that = $(this);
            that.click(function () {
                var that2 = $(this);
                notiViewer.fadeOut(function () {
                    notiViewer.html(that2.find('.oculto').html()).fadeIn();
                    that2 = null;
                });

            });
            that = null;
        });
        notiViewer.html($(noti_items.get(0)).find('.oculto').html());

        //init events
        event_items.each(function () {
            var that = $(this), openclose = that.find('a.fg-yellow'),
                openx = $(openclose.get(0)),
                closex = $(openclose.get(1));

            openx.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", true);
                that.addClass("active");
                event_desc.slideToggle();
                event_desc = null;
                return false;
            });
            closex.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", false);

                event_desc.slideToggle(function () {
                    that.removeClass("active");
                });
                event_desc = null;
                return false;
            });

            openx = closex = null;
        });

        noti_items = eventWrap = event_items = notiWrap = null;




    }
    return { init: init };
});//();

var yearGrid = (function () {
    // grid selector
    //var $selector = '.ley .',
    // list of items
    //$grid = $($selector),
    // the items
    $items = $('.ley .yearsx > li'),
    // current expanded item's index
    current = -1,
    // position (top) of the expanded item
    // used to know if the preview will expand in a different row
    previewPos = -1,
    // extra amount of pixels to scroll the window
    scrollExtra = 0,
    // extra margin when expanded (between preview overlay and the next items)
    marginExpanded = 10,
    //$window = $(window), winsize = getWinSize(),
    $window = $(window), winsize = getWinSize(),
    $body = $('.full-content.ley'),
    // transitionend events
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    // support for csstransitions
    support = Modernizr.csstransitions,
    // default settings
    settings = {
        minHeight: 500,
        speed: 350,
        easing: 'ease',
        showVisitButton: true
    };

    function init(config) {

        // the settings..
        settings = $.extend(true, {}, settings, config);
        // save item´s size and offset
        saveItemInfo(true);
        // get window´s size
        getWinSize();
        // initialize some events
        initEvents();

    }


    // saves the item´s offset top and height (if saveheight is true)
    function saveItemInfo(saveheight) {
        $items.each(function () {
            var $item = $(this);
            $item.data('offsetTop', $item.offset().top);
            if (saveheight) {
                $item.data('height', $item.height());
            }
        });
    }

    function initEvents() {

        // when clicking an item, show the preview with the item´s info and large image.
        // close the item if already expanded.
        // also close if clicking on the item´s cross
        initItemsEvents($items);

        // on window resize get the window´s size again
        // reset some values..
        $window.on('debouncedresize', function () {

            scrollExtra = 0;
            previewPos = -1;
            // save item´s offset
            saveItemInfo();
            getWinSize();
            var preview = $.data(this, 'preview');
            if (typeof preview != 'undefined') {
                hidePreview();
            }

        });

    }

    function initItemsEvents($items) {
        $items.on('click', 'span.og-close', function () {
            hidePreview();
            return false;
        }).children('a').on('click', function (e) {

            var $item = $(this).parent();
            // check if item already opened
            current === $item.index() ? hidePreview() : showPreview($item);
            return false;

        });
    }

    function getWinSize() {
        winsize = { width: $window.width(), height: $window.height() };
    }

    function showPreview($item) {

        var preview = $.data(this, 'preview'),
			// item´s offset top
			position = $item.data('offsetTop');

        scrollExtra = 0;

        // if a preview exists and previewPos is different (different row) from item´s top then close it
        if (typeof preview != 'undefined') {

            // not in the same row
            if (previewPos !== position) {
                // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                if (position > previewPos) {
                    scrollExtra = preview.height;
                }
                hidePreview();
            }
                // same row
            else {
                preview.update($item);
                //preview.open();
                return false;
            }

        }

        // update previewPos
        previewPos = position;
        // initialize new preview for the clicked item
        preview = $.data(this, 'preview', new Preview($item));
        // expand preview overlay
        // preview.open();

    }

    function hidePreview() {
        current = -1;
        var preview = $.data(this, 'preview');
        preview.close();
        $.removeData(this, 'preview');
    }

    // the preview obj / overlay
    function Preview($item) {
        this.$item = $item;
        this.expandedIdx = this.$item.index();
        this.create();
        this.update();
    }

    Preview.prototype = {
        create: function () {
            // create Preview structure:
            //this.$title = $('<h3></h3>');
            //this.$description = $('<p></p>');
            //var detailAppends = [this.$title, this.$description];
            //if (settings.showVisitButton === true) {
            //    this.$href = $('<a href="#">Visit website</a>');
            //    detailAppends.push(this.$href);
            //}
            //this.$details = $('<div class="og-details"></div>').append(detailAppends);
            //this.$loading = $('<div class="og-loading"></div>');
            //this.$fullimage = $('<div class="og-fullimg"></div>').append(this.$loading);
            //this.$closePreview = $('<span class="og-close"></span>');
            //this.$previewInner = $('<div class="og-expander-inner"></div>').append(this.$closePreview, this.$fullimage, this.$details);
            this.$previewEl = this.$item.find('.og-expander');//$('<div class="og-expander"></div>').append(this.$previewInner);
            //// append preview element to the item
            //this.$item.append(this.getEl());
            // set the transitions for the preview and the item
            if (support) {
                this.setTransition();
            }
        },
        update: function ($item) {

            if ($item) {
                this.$item = $item;
            }
            var oldcurrent = current;
            var oldprev = this.$previewEl;
            // update current value
            current = this.$item.index();
            this.expandedIdx = current;
            this.$previewEl = this.$item.find('.og-expander');
            if (support) {
                this.setTransition();
            }

            this.open();
            // if already expanded remove class "og-expanded" from current item and add it to new item
            setTimeout($.proxy(function () {
                if (oldcurrent !== -1) {
                    var $currentItem = $items.eq(oldcurrent);
                    $currentItem.removeClass('og-expanded');

                    oldprev.css('height', 0);
                    $currentItem.css('height', $currentItem.data('height'));
                    oldprev = null;

                }
            }, this), 150);

        },
        open: function () {

            setTimeout($.proxy(function () {
                // set the height for the preview and the item
                this.setHeights();
                // scroll to position the preview in the right place
                this.positionPreview();
            }, this), 25);

        },
        close: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        $(this).off(transEndEventName);
				    }
				    self.$item.removeClass('og-expanded');
				    //self.$previewEl.remove();
				};

            setTimeout($.proxy(function () {

                this.$previewEl.css('height', 0);
                // the current expanded item (might be different from this.$item)
                var $expandedItem = $items.eq(this.expandedIdx);
                $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);

                if (!support) {
                    onEndFn.call();
                }

            }, this), 25);

            return false;

        },
        calcHeight: function () {

            var heightPreview = winsize.height - this.$item.data('height') - marginExpanded,
				itemHeight = winsize.height;

            if (heightPreview < settings.minHeight) {
                heightPreview = settings.minHeight;
                itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
            }

            this.height = heightPreview;
            this.itemHeight = itemHeight;

        },
        setHeights: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        self.$item.off(transEndEventName);
				    }
				    self.$item.addClass('og-expanded');
				};

            this.calcHeight();
            this.$previewEl.css('height', this.height);
            this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);

            if (!support) {
                onEndFn.call();
            }

        },
        positionPreview: function () {

            // scroll page
            // case 1 : preview height + item height fits in window´s height
            // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
            // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
            var position = this.$item.data('offsetTop'),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				//scrollVal = this.height + this.$item.data('height') + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - (winsize.height - this.height) : previewOffsetT;
                scrollVal = position - 60;
            $body.animate({ scrollTop: scrollVal }, settings.speed);

        },
        setTransition: function () {
            this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
            this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
        },
        getEl: function () {
            return this.$previewEl;
        }
    }

    return {
        init: init
    };

});//();
//#endregion

//#region pdfStack
//<editor-fold defaultstate="collapsed" desc="sidebar">

(function ($) {
    $.widget("metro.pdfStack", {
        version: "1.0.0",
        options: {
            effect: 'switch'
            , _index: 0
        },
        _create: function () {
            var that = this,
                current = 0,
                element = this.element,
                docs = $(element.children("a")),
                navL = $(element.find(".leftx")),
                navR = $(element.find(".rigthtx")),
                count = $(element.find(".date")),
                len = docs.length;

            docs.addClass("inactive");
            docs.eq(current).toggleClass("inactive");
            count.text((current + 1) + '/' + len);
            //navL.css('opacity', 0);

            navL.on("click", function (e) {

                e.preventDefault();
                e.stopPropagation();
                var currentItem = docs.eq(current);

                current = current - 1 < 0 ? len - 1 : current - 1;
                //if (current == 0) { navL.css('opacity', 0); }
                //if (current != len - 1) { navR.css('opacity', 1); }                
                var newitem = docs.eq(current);

                currentItem.addClass("inactive");
                newitem.removeClass("inactive");
                count.text((current + 1) + '/' + len);

            });
            navR.on("click", function (e) {

                e.preventDefault();
                e.stopPropagation();
                var currentItem = docs.eq(current);

                current = current + 1 >= len ? 0 : current + 1;
                //if (current == len - 1) { navR.css('opacity', 0); }
                //if (current != 0) { navL.css('opacity', 1); }
                var newitem = docs.eq(current);

                currentItem.addClass("inactive").removeClass("animated fadeInDown");
                newitem.removeClass("inactive").addClass("animated fadeInDown");
                count.text((current + 1) + '/' + len);
            });
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);

$(function () {
    $.Metro.initPdfStack = function (area) {
        if (area != undefined) {
            var d = $(area).find('.docs');
            d.each(function () {
                var dd = $(this);
                if ($(dd.children("a")).length > 1) {
                    dd.pdfStack();
                } else { dd.addClass("empty"); }
            });


        } else {
            //$('[data-role=sidebar]').sidebar();
        }
    };
    //$.Metro.initSidebars();
});

//</editor-fold>
//#endregion 

//#region preload images
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function (callback) {
    var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add($this.filter('img')),
		loaded = [],
		proper = [],
		broken = [];
    //alert($images.length);
    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function (key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
			$broken = $(broken);

        if (deferred) {
            if (broken.length) {
                deferred.reject($images, $proper, $broken);
            } else {
                deferred.resolve($images);
            }
        }

        if ($.isFunction(callback)) {
            callback.call($this, $images, $proper, $broken);
        }
    }

    function imgLoaded(img, isBroken) {
        // don't proceed if BLANK image, or image is already loaded
        if (img.src === BLANK || $.inArray(img, loaded) !== -1) {
            return;
        }

        // store element in loaded images array
        loaded.push(img);

        // keep track of broken and properly loaded images
        if (isBroken) {
            broken.push(img);
        } else {
            proper.push(img);
        }

        // cache image and its state for future calls
        $.data(img, 'imagesLoaded', { isBroken: isBroken, src: img.src });

        // trigger deferred progress method if present
        if (hasNotify) {
            deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
        }

        // call doneLoading and clean listeners if all images are loaded
        if ($images.length === loaded.length) {
            setTimeout(doneLoading);
            $images.unbind('.imagesLoaded');
        }
    }

    // if no images, trigger immediately
    if (!$images.length) {
        doneLoading();
    } else {
        $images.bind('load.imagesLoaded error.imagesLoaded', function (event) {
            // trigger imgLoaded
            imgLoaded(event.target, event.type === 'error');
        }).each(function (i, el) {
            var src = el.src;

            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data(el, 'imagesLoaded');
            if (cached && cached.src === src) {
                imgLoaded(el, cached.isBroken);
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if (el.complete && el.naturalWidth !== undefined) {
                imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if (el.readyState || el.complete) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise($this) : $this;
};
//#endregion

//#region pagination
(function ($) {
    $.widget("metro.paginacion", {
        version: "1.0.0",
        options: {
            duration: 500,
            effect: 'slowdown', // slide, fade, switch, slowdown
            direction: 'left',
        },
        _slides: {},
        _counter: '',
        _currentIndex: -1,
        _outPosition: 0,
        _create: function () {
            var that = this, o = this.options,
                    element = carousel = this.element,
                    controls = carousel.find('.controls'),
                        prev = carousel.find('.controls .rb-prev'),
                        next = carousel.find('.controls .rb-next');
            this._counter = carousel.find('.controls .counter');

            this._slides = carousel.find('.page');

            if (this._slides.length <= 1) {
                that._slideTo('next');
                controls.hide();
                //next.hide();
                return;
            }


            prev.on('click', function () {
                that._slideTo('prior');
            });
            next.on('click', function () {
                that._slideTo('next');
            });
            that._slideTo('next');

        },
        _slideTo: function (direction) {
            var currentSlide = this._slides[this._currentIndex],
                    nextSlide, slidesN = this._slides.length;

            if (direction == undefined)
                direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0) {
                    //circular
                    if (!1) {
                        this._currentIndex = slidesN - 1;
                    }
                    else {
                        //no circular
                        this._currentIndex += 1;
                        return;
                    }

                }

            } else if (direction === 'next') {
                this._currentIndex += 1;
                if (this._currentIndex >= slidesN) {
                    //circular
                    if (!1) {
                        this._currentIndex = 0;
                    }
                    else {
                        //no circular
                        this._currentIndex -= 1;
                        return;
                    }
                }


            }
            this._counter.text(this._currentIndex + 1 + "/" + slidesN);
            this._outPosition = -this.element.width();
            nextSlide = this._slides[this._currentIndex];

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

        },
        _slideToSlide: function (slideIndex) {
            var
                    currentSlide = this._slides[this._currentIndex],
                    nextSlide = this._slides[slideIndex];

            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.element.width();
            } else {
                this._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            this._currentIndex = slideIndex;
        },

        _effectSwitch: function (currentSlide, nextSlide) {
            $(currentSlide)
                    .hide();
            $(nextSlide)
                    .css({ left: 0 })
                    .show();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, this.options.duration);
        },
        _effectSlide: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .animate({ left: this._outPosition }, duration);
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, duration);
        },
        _effectSlowdown: function (currentSlide, nextSlide, duration) {
            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                    .animate({ left: this._outPosition }, options).hide();


            //$(nextSlide).find('.subslide').hide();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, options);

            //setTimeout(function(){
            //    $(nextSlide).find('.subslide').fadeIn();
            //}, 500);

        },
        _effectFade: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .fadeOut(duration);
            $(nextSlide)
                    .css({ left: 0 })
                    .fadeIn(duration);
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });
})(jQuery);

$(function () {
    $.Metro.initPagination = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=dcm-pagination]').paginacion();
        } else {
            $('[data-role=dcm-pagination]').paginacion();
        }
    };
});
//#endregion

//#region sidebar
//<editor-fold defaultstate="collapsed" desc="sidebar">

(function ($) {
    $.widget("metro.sidebar", {
        version: "1.0.0",
        options: {
            effect: 'switch'
            , _index: 0,
            typex: 0
        },
        _create: function () {
            var that = this,
                    element = this.element,
                    tabs = $(element.children("nav")).find("a"),
                    frames = $(element.children(".full-content")).children(".slic"),
                    fullview = $(element.children(".full-content")),
                    pull = $(element.children("nav")).find(".pull-menu");

            if (element.data('effect') != undefined) {
                this.options.effect = element.data('effect');
            }
            if (element.data('sidebar-typex') != undefined) {
                this.options.typex = element.data('typex');
            }

            $(element.children("nav")).perfectScrollbar(); //scrolllbar nav


            this.init(tabs, frames);
            tabs.on("click", function (e) {

                e.preventDefault();
                e.stopPropagation();

                if ($(this).parent().hasClass('disabled')) {
                    return false;
                }

                var hrefx = $(this).attr("href");
                if (hrefx === '#')
                    return false;


                var current_frame = $(fullview.find("[data-cont=" + hrefx + "]"));

                if (current_frame.size() < 1)
                    return false;

                tabs.each(function () {
                    $($(this).parent()).removeClass("active");
                });


                frames.hide();
                $(this).parent().addClass("active");

                //si es responsive cerramos menu cuando cambiamos contenido
                var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if (device_width <= 1200) {
                    $(pull).click();
                }

                //alert(current_frame);
                switch (that.options.effect) {
                    case 'slide':
                        current_frame.slideDown();
                        break;
                    case 'fade':
                        current_frame.fadeIn();
                        break;
                    case 'switch':
                        current_frame.fadeIn();
                        $(current_frame)
                                .css({ left: 0 })
                                .show();
                        $(current_frame)
                                .css('left', current_frame.width())
                                .show()
                                .animate({ left: 0 }, 500);
                        break;
                    default:
                        current_frame.show();
                }

                //reiniciamos scrollbar
                //fullview.perfectScrollbar('update');
                fullview.scrollTop(0);
                //apagamos nivo
                var first_frame = $(fullview.find("[data-cont=cont0]"));
                if (that.options.typex == 0) {
                    if (current_frame.index() == 0) {
                        $(fullview.parent()).addClass("grilla-dark");

                        if (!isMobileBrowser()) {
                            first_frame.find(".bannerCircle").each(function () {
                                $(this).data('bannerCircle').start();
                            });
                        }

                    } else {
                        $(fullview.parent()).removeClass("grilla-dark");
                        if (!isMobileBrowser()) {
                            first_frame.find(".bannerCircle").each(function () {
                                $(this).data('bannerCircle').stop();
                            });
                        }
                    }
                } else {
                    var cssx = $(this).css("background-color");
                    element.css("background-color", cssx);
                    fullview.css("background-color", cssx);
                    cssx = null;
                }

                hrefx = current_frame = device_width = first_frame = null;

                return true;
            });

        },
        init: function (tabs, frames) {
            tabs.each(function () {
                if ($(this).hasClass("active")) {
                    var current_frame = $($($(this).children("a")).attr("href"));
                    frames.hide();
                    current_frame.show();
                }
            });
            tabs = null;
            frames = null;
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);

$(function () {
    $.Metro.initSidebars = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=sidebar]').sidebar();
        } else {
            $('[data-role=sidebar]').sidebar();
        }
    };
    //$.Metro.initSidebars();
});

//</editor-fold>
//#endregion 

//#region slick
//<editor-fold defaultstate="collapsed" desc="slick js">
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, g, e = this;
            if (e.defaults = {
                accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (a, b) {
                    return '<button type="button" data-role="none">' + (b + 1) + "</button>"
            }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", fade: !1, focusOnSelect: !1, infinite: !0, lazyLoad: "ondemand", onBeforeChange: null, onAfterChange: null, onInit: null, onReInit: null, pauseOnHover: !0, pauseOnDotsHover: !1, responsive: null, rtl: !1, slide: "div", slidesToShow: 1, slidesToScroll: 1, speed: 300, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, variableWidth: !1, vertical: !1, waitForAnimate: !0
            }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentSlide: 0, currentLeft: null, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.paused = !1, e.positionProp = null, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.windowWidth = 0, e.windowTimer = null, e.options = a.extend({}, e.defaults, d), e.originalSettings = e.options, f = e.options.responsive || null, f && f.length > -1) {
                for (g in f)
                    f.hasOwnProperty(g) && (e.breakpoints.push(f[g].breakpoint), e.breakpointSettings[f[g].breakpoint] = f[g].settings);
                e.breakpoints.sort(function (a, b) {
                    return b - a
                })
            }
            e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init()
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c, c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateSlide = function (b, c) {
        var d = {}, e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var f = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: f }, e.options.speed)
        }
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({ animStart: e.currentLeft }).animate({ animStart: b }, {
            duration: e.options.speed, easing: e.options.easing, step: function (a) {
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            }, complete: function () {
                c && c.call()
            }
        }) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function (b) {
        var c = this, d = null != c.options.asNavFor ? a(c.options.asNavFor).getSlick() : null;
        null != d && d.slideHandler(b, !0)
    }, b.prototype.applyTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount() ; c += 1)
                d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("index", b)
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.slidesToScroll = 1, 0 === b.options.slidesToShow % 2 && (b.options.slidesToShow = 3)), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.checkResponsive = function () {
        var c, d, b = this;
        if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
            d = null;
            for (c in b.breakpoints)
                b.breakpoints.hasOwnProperty(c) && a(window).width() < b.breakpoints[c] && (d = b.breakpoints[c]);
            null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, b.options = a.extend({}, b.options, b.breakpointSettings[d]), b.refresh()) : (b.activeBreakpoint = d, b.options = a.extend({}, b.options, b.breakpointSettings[d]), b.refresh()) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = a.extend({}, b.options, b.originalSettings), b.refresh())
        }
    }, b.prototype.changeSlide = function (b) {
        var e, f, g, c = this, d = a(b.target);
        switch (d.is("a") && b.preventDefault(), g = 0 !== c.slideCount % c.options.slidesToScroll, e = g ? 0 : (c.slideCount - c.currentSlide) % c.options.slidesToScroll, b.data.message) {
            case "previous":
                f = 0 === e ? c.options.slidesToScroll : c.options.slidesToShow - e, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - f);
                break;
            case "next":
                f = 0 === e ? c.options.slidesToScroll : e, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + f);
                break;
            case "index":
                var h = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * c.options.slidesToScroll;
                c.slideHandler(h);
            default:
                return !1
        }
    }, b.prototype.destroy = function () {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", ""), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid)
    }, b.prototype.disableTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b, c) {
        var d = this;
        d.cssTransitions === !1 ? (d.$slides.eq(b).css({ zIndex: 1e3 }), d.$slides.eq(b).animate({ opacity: 1 }, d.options.speed, d.options.easing, c), d.$slides.eq(a).animate({ opacity: 0 }, d.options.speed, d.options.easing)) : (d.applyTransition(b), d.applyTransition(a), d.$slides.eq(b).css({ opacity: 1, zIndex: 1e3 }), d.$slides.eq(a).css({ opacity: 0 }), c && setTimeout(function () {
            d.disableTransition(b), d.disableTransition(a), c.call()
        }, d.options.speed))
    }, b.prototype.filterSlides = function (a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var e, a = this, b = 0, c = 0, d = 0;
        for (e = a.options.infinite === !0 ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll : a.slideCount; e > b;)
            d++, c += a.options.slidesToScroll, b = c + a.options.slidesToShow;
        return d
    }, b.prototype.getLeft = function (a) {
        var c, d, g, b = this, e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideCount % b.options.slidesToShow * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToShow * d)) : 0 !== b.slideCount % b.options.slidesToShow && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = b.options.slidesToShow * b.slideWidth - b.slideCount % b.options.slidesToShow * b.slideWidth, e = b.slideCount % b.options.slidesToShow * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (g = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = g[0] ? -1 * g[0].offsetLeft : 0, b.options.centerMode === !0 && (g = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = g[0] ? -1 * g[0].offsetLeft : 0, c += (b.$list.width() - g.outerWidth()) / 2)), c
    }, b.prototype.init = function () {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()), null !== b.options.onInit && b.options.onInit.call(this, b)
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.on("click.slick", { message: "next" }, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", b.autoPlayClear).on("mouseleave.slick", b.autoPlay)
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", b.autoPlayClear), b.$list.on("mouseleave.slick", b.autoPlay)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function () {
            b.checkResponsive(), b.setPosition()
        }), a(window).on("resize.slick.slick-" + b.instanceUid, function () {
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
            }, 50))
        }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        37 === a.keyCode ? b.changeSlide({ data: { message: "previous" } }) : 39 === a.keyCode && b.changeSlide({ data: { message: "next" } })
    }, b.prototype.lazyLoad = function () {
        function g(b) {
            a("img[data-lazy]", b).each(function () {
                var b = a(this), c = a(this).attr("data-lazy");
                b.load(function () {
                    b.animate({ opacity: 1 }, 200)
                }).css({ opacity: 0 }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.postSlide = function (a) {
        var b = this;
        null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }, b.prototype.progressiveLazyLoad = function () {
        var c, d, b = this;
        c = a("img[data-lazy]").length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }).error(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function () {
        var b = this, c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.currentSlide = c, b.init()
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), null !== b.options.onReInit && b.options.onReInit.call(this, b)
    }, b.prototype.removeSlide = function (a, b) {
        var c = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : c.slideCount - 1) : a = b === !0 ? --a : a, c.slideCount < 1 || 0 > a || a > c.slideCount - 1 ? !1 : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, c.reinit(), void 0)
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? a + "px" : "0px", e = "top" == b.positionProp ? a + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var b = this;
        b.options.vertical === !1 ? b.options.centerMode === !0 && b.$list.css({ padding: "0px " + b.options.centerPadding }) : (b.$list.height(b.$slides.first().outerHeight(!0) * b.options.slidesToShow), b.options.centerMode === !0 && b.$list.css({ padding: b.options.centerPadding + " 0px" })), b.listWidth = b.$list.width(), b.listHeight = b.$list.height(), b.options.vertical === !1 && b.options.variableWidth === !1 ? (b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow), b.$slideTrack.width(Math.ceil(b.slideWidth * b.$slideTrack.children(".slick-slide").length))) : b.options.variableWidth === !0 ? (b.slideWidth = 0, b.$slideTrack.children(".slick-slide").each(function () {
            b.slideWidth += Math.ceil(a(this).outerWidth(!0))
        }), b.$slideTrack.width(Math.ceil(b.slideWidth) + 1)) : (b.slideWidth = Math.ceil(b.listWidth), b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0) * b.$slideTrack.children(".slick-slide").length)));
        var c = b.$slides.first().outerWidth(!0) - b.$slides.first().width();
        b.options.variableWidth === !1 && b.$slideTrack.children(".slick-slide").width(b.slideWidth - c)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = -1 * b.slideWidth * d, a(e).css({ position: "relative", left: c, top: 0, zIndex: 800, opacity: 0 })
        }), b.$slides.eq(b.currentSlide).css({ zIndex: 900, opacity: 1 })
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade()
    }, b.prototype.setProps = function () {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if ((b.options.fade === !0 || b.options.vertical === !0) && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.selectHandler = function (b) {
        var c = this, d = parseInt(a(b.target).parents(".slick-slide").attr("index"));
        d || (d = 0), c.slideCount <= c.options.slidesToShow || c.slideHandler(d)
    }, b.prototype.slideHandler = function (a, b) {
        var c, d, e, f, g, h = null, i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 ? !1 : (b === !1 && i.asNavFor(a), c = a, h = i.getLeft(c), f = i.getLeft(i.currentSlide), g = 0 !== i.slideCount % i.options.slidesToScroll ? i.options.slidesToScroll : 0, i.currentLeft = null === i.swipeLeft ? f : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.slideCount - i.options.slidesToShow + g) ? (i.options.fade === !1 && (c = i.currentSlide, i.animateSlide(f, function () {
            i.postSlide(c)
        })), !1) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (c = i.currentSlide, i.animateSlide(f, function () {
            i.postSlide(c)
        })), !1) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), d = 0 > c ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + c : c >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : c - i.slideCount : c, i.animating = !0, null !== i.options.onBeforeChange && a !== i.currentSlide && i.options.onBeforeChange.call(this, i, i.currentSlide, d), e = i.currentSlide, i.currentSlide = d, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (i.fadeSlide(e, d, function () {
            i.postSlide(d)
        }), !1) : (i.animateSlide(h, function () {
            i.postSlide(d)
        }), void 0)))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? "left" : 360 >= d && d >= 315 ? "left" : d >= 135 && 225 >= d ? "right" : "vertical"
    }, b.prototype.swipeEnd = function (b) {
        var d, e, c = this;
        if (c.dragging = !1, void 0 === c.touchObject.curX)
            return !1;
        if (c.touchObject.swipeLength >= c.touchObject.minSwipe)
            switch (a(b.target).on("click.slick", function (b) {
                    b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.slick")
            }), c.options.swipeToSlide === !0 ? (e = Math.round(c.touchObject.swipeLength / c.slideWidth), d = e) : d = c.options.slidesToScroll, c.swipeDirection()) {
                case "left":
                    c.slideHandler(c.currentSlide + d), c.touchObject = {};
                    break;
                case "right":
                    c.slideHandler(c.currentSlide - d), c.touchObject = {}
            }
        else
            c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
    }, b.prototype.swipeMove = function (a) {
        var c, d, e, f, b = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, c = b.getLeft(b.currentSlide), !b.dragging || f && 1 !== f.length ? !1 : (b.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, b.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), d = b.swipeDirection(), "vertical" !== d ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), e = b.touchObject.curX > b.touchObject.startX ? 1 : -1, b.swipeLeft = b.options.vertical === !1 ? c + b.touchObject.swipeLength * e : c + b.touchObject.swipeLength * (b.$list.height() / b.listWidth) * e, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
    }, b.prototype.unfilterSlides = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    }, b.prototype.updateArrows = function () {
        var a = this;
        a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
    }, a.fn.slick = function (a) {
        var c = this;
        return c.each(function (c, d) {
            d.slick = new b(d, a)
        })
    }, a.fn.slickAdd = function (a, b, c) {
        var d = this;
        return d.each(function (d, e) {
            e.slick.addSlide(a, b, c)
        })
    }, a.fn.slickCurrentSlide = function () {
        var a = this;
        return a.get(0).slick.getCurrent()
    }, a.fn.slickFilter = function (a) {
        var b = this;
        return b.each(function (b, c) {
            c.slick.filterSlides(a)
        })
    }, a.fn.slickGoTo = function (a) {
        var b = this;
        return b.each(function (b, c) {
            c.slick.changeSlide({ data: { message: "index", index: parseInt(a) } })
        })
    }, a.fn.slickNext = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick.changeSlide({ data: { message: "next" } })
        })
    }, a.fn.slickPause = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick.autoPlayClear(), b.slick.paused = !0
        })
    }, a.fn.slickPlay = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick.paused = !1, b.slick.autoPlay()
        })
    }, a.fn.slickPrev = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick.changeSlide({ data: { message: "previous" } })
        })
    }, a.fn.slickRemove = function (a, b) {
        var c = this;
        return c.each(function (c, d) {
            d.slick.removeSlide(a, b)
        })
    }, a.fn.slickGetOption = function (a) {
        var b = this;
        return b.get(0).slick.options[a]
    }, a.fn.slickSetOption = function (a, b, c) {
        var d = this;
        return d.each(function (d, e) {
            e.slick.options[a] = b, c === !0 && (e.slick.unload(), e.slick.reinit())
        })
    }, a.fn.slickUnfilter = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick.unfilterSlides()
        })
    }, a.fn.unslick = function () {
        var a = this;
        return a.each(function (a, b) {
            b.slick && b.slick.destroy()
        })
    }, a.fn.getSlick = function () {
        var a = null, b = this;
        return b.each(function (b, c) {
            a = c.slick
        }), a
    }
});
//</editor-fold>
//#endregion 

//Inicio Radio
/*! Kast v1.1.2 Build 11200 - Extraordinary SHOUTcast HTML5 Radio Player for jQuery - Material Design | © Manar Kamel (manarkamel.github.io) */!function (a, b, c, d) { function e(d, e) { this.opt = a.extend({}, g, e); var f = function () { var a = new Audio; return !(!a.canPlayType || !(a.canPlayType("audio/mpeg;").replace(/^no$/, "") || a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") || a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") || a.canPlayType("audio/aac;").replace(/^no$/, ""))) }; if (!(this.opt.host && f && b.DOMParser && c.implementation.createHTMLDocument)) throw a.data(c.body, "plugin_kast", null), Error("Kast couldn't load"); e.language && (this.opt.language = a.extend({}, g.language, e.language)), "object" == typeof e.colors && (this.opt.colors = a.extend({}, g.colors, e.colors)), "minimized" !== this.opt.startTemplate || this.opt.statusBar && this.opt.minimizeMaximize || (this.opt.played = !1); var h = this.opt; this.host = "http://" + h.host + ":" + h.port + "/"; var i = "https:" === c.location.protocol ? "https:" : "http:"; this.hostCORS = i + "//crossorigin.me/" + this.host, this.hostCORS2 = "https://cors-anywhere.herokuapp.com/" + this.host, h.overHTTPS && "https:" === i && (this.host = this.hostCORS); var j = h.sid, k = j > 1 ? this.host + "stream/" + j + "/;" : this.host + ";"; this.audio = c.createElement("audio"), this.audio.src = (h.directStreamURL || k) + "?_=" + Math.random(), this.audio.load(), h.onAudioLoad(this.audio), this.mobile = !1, this.mobileMedium = !1, this.mobileUltra = !1; var l = h.mobileCare, m = l[1] || "599px"; l && b.matchMedia && b.matchMedia("(max-width: " + m + ")").matches && (this.mobile = !0, h.autoPlay = !1, h.startTemplate = "minimized", h.offlineCheck = !1, ("medium" === l[0] || "high" === l[0] || "very high" === l[0] || "ultra" === l[0]) && (this.mobileMedium = !0, "all" === h.autoUpdate && (h.autoUpdate = !0), "dynamic" === h.theme && (h.theme = "light"), "dynamic" === h.colors && (h.colors = !1)), ("high" === l[0] || "very high" === l[0] || "ultra" === l[0]) && (h.artwork = h.played = !1), ("very high" === l[0] || "ultra" === l[0]) && (h.autoUpdate = h.minimizeMaximize = !1), "ultra" === l[0] && (this.mobileUltra = !0, h.statusBar = h.serverInfo = h.currentArtist = h.currentTrack = !1), h.onMobile()), this.init() } function f(a) { var b = c.implementation.createHTMLDocument("html"); return b.documentElement.innerHTML = a, b } var g = { host: "", port: 80, version: 2, sid: 1, statsPath: "stats", playedPath: "played", directStreamURL: !1, ui: "colored", theme: "light", colors: { primary: "cyan", accent: "yellow" }, startTemplate: "maximized", position: "right", container: "body", autoPlay: !1, autoUpdate: !0, artwork: !0, statusBar: !0, minimizeMaximize: !0, muteUnmute: !0, startMuted: !1, serverInfo: !1, played: !0, currentTrack: !0, currentArtist: !0, playedTracks: !0, playedArtists: !0, offlineCheck: !0, language: { offlineText: "Temporarily Offline", playedText: "Played", unknownTrackText: "Unknown Track", unknownArtistText: "Unknown Artist" }, mobileCare: !0, irrelevantWords: ["feat.", "ft.", "Feat.", "Ft."], overHTTPS: !1, onReady: function () { }, onAudioLoad: function () { }, onMobile: function () { }, onPlay: function () { }, onPause: function () { }, onMinimize: function () { }, onMaximize: function () { }, onMute: function () { }, onUnmute: function () { }, onUpdate: function () { }, onUpdateAll: function () { }, onOffline: function () { }, onOnline: function () { }, onCurrentArtwork: function () { }, onPlayedArtworks: function () { }, onCurrentInfo: function () { }, onPlayedInfo: function () { }, onDynamicColors: function () { }, onDynamicColorsContrast: function () { }, onDynamicTheme: function () { } }, h = function (a) { this.canvas = c.createElement("canvas"), this.context = this.canvas.getContext("2d"), c.body.appendChild(this.canvas), this.width = this.canvas.width = a.width, this.height = this.canvas.height = a.height, this.context.drawImage(a, 0, 0, this.width, this.height) }, i = function () { }; if (h.prototype = { clear: function () { this.context.clearRect(0, 0, this.width, this.height) }, update: function (a) { this.context.putImageData(a, 0, 0) }, getPixelCount: function () { return this.width * this.height }, getImageData: function () { return this.context.getImageData(0, 0, this.width, this.height) }, removeCanvas: function () { this.canvas.parentNode.removeChild(this.canvas) } }, i.prototype.getPalette = function (a, b) { for (var c, d, e, f, g, i = new h(a), j = i.getImageData(), l = j.data, m = i.getPixelCount(), n = [], o = 0; m > o; o += 10) c = 4 * o, d = l[c + 0], e = l[c + 1], f = l[c + 2], g = l[c + 3], g >= 125 && (d > 250 && e > 250 && f > 250 || n.push([d, e, f])); var p = k.quantize(n, b), q = p ? p.palette() : null; return i.removeCanvas(), q }, !j) var j = { map: function (a, b) { var c = {}; return b ? a.map(function (a, d) { return c.index = d, b.call(c, a) }) : a.slice() }, naturalOrder: function (a, b) { return b > a ? -1 : a > b ? 1 : 0 }, sum: function (a, b) { var c = {}; return a.reduce(b ? function (a, d, e) { return c.index = e, a + b.call(c, d) } : function (a, b) { return a + b }, 0) }, max: function (a, b) { return Math.max.apply(null, b ? j.map(a, b) : a) } }; var k = function () { function a(a, b, c) { return (a << 2 * k) + (b << k) + c } function b(a) { function b() { c.sort(a), e = !0 } var c = [], e = !1; return { push: function (a) { c.push(a), e = !1 }, peek: function (a) { return e || b(), a === d && (a = c.length - 1), c[a] }, pop: function () { return e || b(), c.pop() }, size: function () { return c.length }, map: function (a) { return c.map(a) }, debug: function () { return e || b(), c } } } function c(a, b, c, d, e, f, g) { var h = this; h.r1 = a, h.r2 = b, h.g1 = c, h.g2 = d, h.b1 = e, h.b2 = f, h.histo = g } function e() { this.vboxes = new b(function (a, b) { return j.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume()) }) } function f(b) { var c, d, e, f, g = 1 << 3 * k, h = new Array(g); return b.forEach(function (b) { d = b[0] >> l, e = b[1] >> l, f = b[2] >> l, c = a(d, e, f), h[c] = (h[c] || 0) + 1 }), h } function g(a, b) { var d, e, f, g = 1e6, h = 0, i = 1e6, j = 0, k = 1e6, m = 0; return a.forEach(function (a) { d = a[0] >> l, e = a[1] >> l, f = a[2] >> l, g > d ? g = d : d > h && (h = d), i > e ? i = e : e > j && (j = e), k > f ? k = f : f > m && (m = f) }), new c(g, h, i, j, k, m, b) } function h(b, c) { function d(a) { var b, d, e, f, g, h = a + "1", j = a + "2", k = 0; for (i = c[h]; i <= c[j]; i++) if (p[i] > o / 2) { for (e = c.copy(), f = c.copy(), b = i - c[h], d = c[j] - i, g = d >= b ? Math.min(c[j] - 1, ~~(i + d / 2)) : Math.max(c[h], ~~(i - 1 - b / 2)) ; !p[g];) g++; for (k = q[g]; !k && p[g - 1];) k = q[--g]; return e[j] = g, f[h] = e[j] + 1, [e, f] } } if (c.count()) { var e = c.r2 - c.r1 + 1, f = c.g2 - c.g1 + 1, g = c.b2 - c.b1 + 1, h = j.max([e, f, g]); if (1 == c.count()) return [c.copy()]; var i, k, l, m, n, o = 0, p = [], q = []; if (h == e) for (i = c.r1; i <= c.r2; i++) { for (m = 0, k = c.g1; k <= c.g2; k++) for (l = c.b1; l <= c.b2; l++) n = a(i, k, l), m += b[n] || 0; o += m, p[i] = o } else if (h == f) for (i = c.g1; i <= c.g2; i++) { for (m = 0, k = c.r1; k <= c.r2; k++) for (l = c.b1; l <= c.b2; l++) n = a(k, i, l), m += b[n] || 0; o += m, p[i] = o } else for (i = c.b1; i <= c.b2; i++) { for (m = 0, k = c.r1; k <= c.r2; k++) for (l = c.g1; l <= c.g2; l++) n = a(k, l, i), m += b[n] || 0; o += m, p[i] = o } return p.forEach(function (a, b) { q[b] = o - a }), d(h == e ? "r" : h == f ? "g" : "b") } } function i(a, c) { function d(a, b) { for (var c, d = 1, e = 0; m > e;) if (c = a.pop(), c.count()) { var f = h(i, c), g = f[0], j = f[1]; if (!g) return; if (a.push(g), j && (a.push(j), d++), d >= b) return; if (e++ > m) return } else a.push(c), e++ } if (!a.length || 2 > c || c > 256) return !1; var i = f(a), k = 0; i.forEach(function () { k++ }); var l = g(a, i), o = new b(function (a, b) { return j.naturalOrder(a.count(), b.count()) }); o.push(l), d(o, n * c); for (var p = new b(function (a, b) { return j.naturalOrder(a.count() * a.volume(), b.count() * b.volume()) }) ; o.size() ;) p.push(o.pop()); d(p, c - p.size()); for (var q = new e; p.size() ;) q.push(p.pop()); return q } var k = 5, l = 8 - k, m = 1e3, n = .75; return c.prototype = { volume: function (a) { var b = this; return (!b._volume || a) && (b._volume = (b.r2 - b.r1 + 1) * (b.g2 - b.g1 + 1) * (b.b2 - b.b1 + 1)), b._volume }, count: function (b) { var c = this, d = c.histo; if (!c._count_set || b) { var e, f, g, h = 0; for (e = c.r1; e <= c.r2; e++) for (f = c.g1; f <= c.g2; f++) for (g = c.b1; g <= c.b2; g++) index = a(e, f, g), h += d[index] || 0; c._count = h, c._count_set = !0 } return c._count }, copy: function () { var a = this; return new c(a.r1, a.r2, a.g1, a.g2, a.b1, a.b2, a.histo) }, avg: function (b) { var c = this, d = c.histo; if (!c._avg || b) { var e, f, g, h, i, j = 0, l = 1 << 8 - k, m = 0, n = 0, o = 0; for (f = c.r1; f <= c.r2; f++) for (g = c.g1; g <= c.g2; g++) for (h = c.b1; h <= c.b2; h++) i = a(f, g, h), e = d[i] || 0, j += e, m += e * (f + .5) * l, n += e * (g + .5) * l, o += e * (h + .5) * l; j ? c._avg = [~~(m / j), ~~(n / j), ~~(o / j)] : c._avg = [~~(l * (c.r1 + c.r2 + 1) / 2), ~~(l * (c.g1 + c.g2 + 1) / 2), ~~(l * (c.b1 + c.b2 + 1) / 2)] } return c._avg }, contains: function (a) { var b = this, c = a[0] >> l; return gval = a[1] >> l, bval = a[2] >> l, c >= b.r1 && c <= b.r2 && gval >= b.g1 && gval <= b.g2 && bval >= b.b1 && bval <= b.b2 } }, e.prototype = { push: function (a) { this.vboxes.push({ vbox: a, color: a.avg() }) }, palette: function () { return this.vboxes.map(function (a) { return a.color }) }, size: function () { return this.vboxes.size() }, map: function (a) { for (var b = this.vboxes, c = 0; c < b.size() ; c++) if (b.peek(c).vbox.contains(a)) return b.peek(c).color; return this.nearest(a) }, nearest: function (a) { for (var b, c, e, f = this.vboxes, g = 0; g < f.size() ; g++) c = Math.sqrt(Math.pow(a[0] - f.peek(g).color[0], 2) + Math.pow(a[1] - f.peek(g).color[1], 2) + Math.pow(a[2] - f.peek(g).color[2], 2)), (b > c || b === d) && (b = c, e = f.peek(g).color); return e }, forcebw: function () { var a = this.vboxes; a.sort(function (a, b) { return j.naturalOrder(j.sum(a.color), j.sum(b.color)) }); var b = a[0].color; b[0] < 5 && b[1] < 5 && b[2] < 5 && (a[0].color = [0, 0, 0]); var c = a.length - 1, d = a[c].color; d[0] > 251 && d[1] > 251 && d[2] > 251 && (a[c].color = [255, 255, 255]) } }, { quantize: i } }(), l = function (a) { if (!a) return null; var b, c, d, e, f = /^rgba?[\s+]?\(\s*(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,?(?:\s*([\d.]+))?\s*\)?\s*/im, g = a.match(f); return g ? (b = parseInt(g[1], 10), c = parseInt(g[2], 10), d = parseInt(g[3], 10), e = (299 * b + 587 * c + 114 * d) / 1e3, e >= 146 ? "dark" : "light") : null }, m = new i, n = function (a, b, d, e) { for (var f, g = b.length, h = c.createDocumentFragment(), i = 0; g > i; i++) { if (2 === a.version) f = d.getElementsByTagName(b[i].toUpperCase())[0].textContent; else { var j = d.body.textContent.split(","); "currentlisteners" === b[i] ? f = j[0] : "streamstatus" === b[i] ? f = j[1] : "peaklisteners" === b[i] ? f = j[2] : "maxlisteners" === b[i] ? f = j[3] : "uniquelisteners" === b[i] ? f = j[4] : "bitrate" === b[i] ? f = j[5] : "songtitle" === b[i] && (f = j[6]) } i === g - 1 ? h.appendChild(c.createTextNode(f)) : h.appendChild(c.createTextNode(f + " - ")) } e.appendChild(h) }, o = function (a) { var c; c = b.XMLHttpRequest ? new XMLHttpRequest : new XDomainRequest; try { if (c.open("GET", a.url, !0), a.arraybuffer) { if ("string" != typeof c.responseType) return void (a.error && a.error()); c.responseType = "arraybuffer" } c.timeout = a.timeout || 3e3 } catch (d) { return void (a.error && a.error()) } c.onload = function () { if (4 === c.readyState) if (200 === c.status) { var b = a.arraybuffer ? c.response : c.responseText; a.load(b, c) } else a.error && a.error() }, a.error && (c.onerror = a.error), c.ontimeout = c.onerror, setTimeout(function () { c.send() }, 0), b.kastXHR = c }, p = function (a) { return a.replace(/(\[.*?\]|\(.*?\))/g, "").replace(/[|&^'`;:$%@"#<>+,]/g, "") }, q = c.documentElement.classList; e.prototype = { init: function () { var a = this, b = a.opt, d = c.querySelector(b.container), e = b.colors, f = "object" == typeof e ? "kast-primary-" + e.primary.replace(" ", "") : "", g = "object" == typeof e ? "kast-accent-" + e.accent.replace(" ", "") : "", h = "string" == typeof e ? "kast-colors-" + e : "", i = a.mobile && a.mobileUltra ? "kast-ultra" : "", j = b.statusBar && b.muteUnmute && b.minimizeMaximize ? "" : "kast-not-full-statusbar", k = b.played ? " kast-played " : " kast-current ", l = "body" !== b.container ? "kast-custom-container" : "", m = d.offsetWidth < 380 ? "kast-thin-container" : "", o = "dynamic" === b.theme ? "kast-light" : "", p = "", q = ""; if (b.statusBar) { var r = b.muteUnmute ? '<i id="kast-volume" class="kast-mdi kast-mdi-volume-high"></i>' : "", s = b.minimizeMaximize ? '<i id="kast-minmax" class="kast-mdi kast-mdi-chevron-down"></i>' : ""; p = '<div id="kast-bar"><p class="kast-offline-status">' + b.language.offlineText + '</p><p id="kast-server"></p>' + r + s + "</div>" } b.played && (q = '<div id="kast-bottom" class="kast-clearfix"><p>' + b.language.playedText + '</p><ul id="kast-playedlist" class="kast-clearfix"></ul></div>'); var t = ""; t += '<div id="kast" class="kast-recss kast-' + b.theme + " kast-" + b.ui + " " + f + " " + g + " " + h + " kast-" + b.startTemplate + " kast-" + b.position + " " + i + " " + j + k + " " + l + " " + o + " " + m + '"><span class="aplicacion">RADIO UCE</span>', t += '<div id="kast-wrapper">', t += p, t += '<div id="kast-top" class="kast-default-art">', t += '<div class="kast-album-wrapper"><i class="kast-mdi kast-mdi-album"></i></div>', t += '<div id="kast-top-content" class="kast-top-content">', t += '<div id="kast-nowplaying"><p id="kast-np-title"></p><p id="kast-np-artist"></p></div>', t += '<div id="kast-linear"></div>', t += "</div>", t += '<div id="kast-play" class="fa fa-uce_radio ">', t += '<i class="kast-mdi kast-mdi-play"></i>', t += '<i class="kast-mdi kast-mdi-pause"></i>', t += "</div></div>" + q + "</div></div>", d.insertAdjacentHTML("beforeend", t), b.onReady(), (b.statusBar || b.currentTrack || b.currentArtist) && this.stats(function (d) { var e = b.serverInfo; if (e && b.statusBar) { var f = c.getElementById("kast-server"); "string" == typeof e ? f.textContent = e : n(b, e, d, f) } a.stats(d) }), b.played && (Array.isArray && Array.isArray(b.artwork) ? a.played(!1, !0) : a.played()); var u = b.autoUpdate; return "all" === u ? a.autoUpdate("all") : u && a.autoUpdate(!0), c.getElementById("kast-play").onclick = function () { -1 !== this.className.indexOf("paused") ? a.play() : a.pause() }, b.statusBar && (b.muteUnmute && (c.getElementById("kast-volume").onclick = function () { -1 !== this.className.indexOf("high") ? a.mute() : a.unmute() }), b.minimizeMaximize && (c.getElementById("kast-minmax").onclick = function () { -1 !== kast.className.indexOf("minimized") ? a.maximize() : a.minimize() })), b.autoPlay && a.play(), b.startMuted && a.mute(), this }, play: function (b) { var d = c.getElementById("kast"), e = c.getElementById("kast-play"); if (q) { var f = e.classList; f.remove("kast-paused"), f.add("kast-playing") } else a(e).removeClass("kast-paused").addClass("kast-playing"); var g = this.opt.offlineCheck && "false" === d.getAttribute("data-offline"); return (b || g) && (this.audio.load(), g && d.removeAttribute("data-offline")), this.audio.play(), this.opt.onPlay(this.audio), this }, pause: function () { var b = c.getElementById("kast-play"); if (q) { var d = b.classList; d.remove("kast-playing"), d.add("kast-paused") } else a(b).removeClass("kast-playing").addClass("kast-paused"); return this.audio.pause(), this.opt.onPause(this.audio), this }, mute: function () { return c.getElementById("kast-volume").className = "kast-mdi kast-mdi-volume-off", this.audio.muted = !0, this.opt.onMute(this.audio), this }, unmute: function () { return c.getElementById("kast-volume").className = "kast-mdi kast-mdi-volume-high", this.audio.muted = !1, this.opt.onUnmute(this.audio), this }, minimize: function () { var b = c.getElementById("kast"); if (q) { var d = b.classList; d.remove("kast-maximized"), d.add("kast-minimized") } else a(b).removeClass("kast-maximized").addClass("kast-minimized"); return this.opt.onMinimize(), this }, maximize: function () { var b = c.getElementById("kast"); if (q) { var d = b.classList; d.remove("kast-minimized"), d.add("kast-maximized") } else a(b).removeClass("kast-minimized").addClass("kast-maximized"); return this.opt.onMaximize(), this }, stats: function (d) { var e = this, g = e.opt, h = c.getElementById("kast"), i = c.getElementById("kast-np-title"), j = c.getElementById("kast-np-artist"), k = c.getElementById("kast-top"), n = c.getElementById("kast-bar"), p = c.getElementById("kast-top-content"), r = c.getElementById("kast-play"), s = function (d) { var f, s, t, u = g.language.unknownTrackText, v = g.language.unknownArtistText; try { f = 2 === g.version ? d.getElementsByTagName("SONGTITLE")[0].textContent : d.body.textContent.split(",")[6] } catch (w) { f = v + " - " + u } s = "string" == typeof g.currentTrack ? g.currentTrack : f.split(" - ")[1] || f || u, t = "string" == typeof g.currentArtist ? g.currentArtist : f.split(" - ")[0] || v, g.currentTrack && (i.textContent = s), g.currentArtist && (j.textContent = t), g.artwork && e.artwork(t, s, function (d) { if (d) { var e = d[0], f = d[1] || e; k.style.backgroundImage = "url(" + e + ")", k.removeAttribute("class"), g.onCurrentArtwork(e), "dynamic" !== g.theme && "dynamic" !== g.colors || !b.Blob || o({ url: f, arraybuffer: !0, load: function (d, e) { b.URL = b.URL || b.webkitURL; var f = c.createElement("img"), i = e.getResponseHeader("content-type"), j = new Uint8Array(d), k = new Blob([j], { type: i }); f.src = b.URL.createObjectURL(k), f.onload = function () { var c = m.getPalette(f, 5), d = "rgb(" + c[0] + ")", e = "rgb(" + c[1] + ")", i = l(d) || "light", j = "kast-primary-" + i, k = l(e) || "dark", o = "kast-accent-" + k; if ("dynamic" === g.colors) { var s = r.className; -1 !== s.indexOf("playing") ? r.className = "kast-playing " + o : r.className = "kast-paused " + o, p.className = "kast-top-content " + j, g.statusBar && (n.className = j), r.style.backgroundColor = e, "colored" === g.ui && (p.style.backgroundColor = d), g.onDynamicColors(d, e), g.onDynamicColorsContrast(i, k) } if ("dynamic" === g.theme) if ("light" === i) { if (q) { var t = h.classList; t.remove("kast-dark"), t.add("kast-light") } else a(h).removeClass("kast-dark").addClass("kast-light"); g.onDynamicTheme("light") } else { if (q) { var t = h.classList; t.remove("kast-light"), t.add("kast-dark") } else a(h).removeClass("kast-light").addClass("kast-dark"); g.onDynamicTheme("dark") } b.URL.revokeObjectURL(f.src), f = null } } }) } else { if (q) { var i = h.classList, j = r.classList; j.remove("kast-accent-light"), j.remove("kast-accent-dark"), "dark" === g.theme ? (i.remove("kast-light"), i.add("kast-dark")) : (i.remove("kast-dark"), i.add("kast-light")) } else a(r).removeClass("kast-accent-light kast-accent-dark"), "dark" === g.theme ? a(h).removeClass("kast-light").addClass("kast-dark") : a(h).removeClass("kast-dark").addClass("kast-light"); k.className = "kast-default-art", g.statusBar && n.removeAttribute("class"), r.removeAttribute("style"), k.removeAttribute("style"), p.removeAttribute("style"), p.className = "kast-top-content" } }), g.onCurrentInfo(s, t) }; if ("object" == typeof d) s(d); else { var t = function (b, i) { var j = b + g.statsPath + "?sid=" + g.sid, k = 1 === g.version ? "#" : "?_="; 1 === g.version && (j = b + "7.html"), o({ url: j + k + Math.random(), timeout: 8e3, load: function (a) { var b = 1 === g.version ? f(a) : (new DOMParser).parseFromString(a, "text/xml"); "function" == typeof d ? d(b) : s(b) }, error: function () { if (i) { var b = h.hasAttribute("data-offline"), d = c.getElementById("kast-np-title"); g.offlineCheck && g.autoUpdate && !b && (q ? h.classList.add("kast-offline") : a(h).addClass("kast-offline"), h.setAttribute("data-offline", "true"), g.onOffline()), d.hasChildNodes() || s("error") } else t(e.hostCORS2, !0) } }) }; t(e.hostCORS, !1) } return this }, played: function (a, b) { var d = this, e = d.opt, g = c.getElementById("kast-playedlist"), h = function (a) { for (; g.firstChild;) g.removeChild(g.firstChild); var f, h, i = c.createDocumentFragment(), j = e.language.unknownTrackText, k = e.language.unknownArtistText; try { f = 2 === e.version ? a.getElementsByTagName("SONG") : a.getElementsByTagName("table")[2].getElementsByTagName("tr"), h = f.length } catch (l) { h = 3 } for (var m = function (a, f, g, h) { var i, l, m; try { m = 2 === e.version ? f[a].getElementsByTagName("TITLE")[0].textContent : f[a].getElementsByTagName("td")[1].textContent } catch (n) { m = k + " - " + j } e.playedTracks && (i = m.split(" - ")[1] || m || j), e.playedArtists && (l = m.split(" - ")[0] || k); var o = c.createElement("li"), p = c.createElement("div"), q = c.createElement("i"), r = c.createElement("div"), s = c.createElement("p"), t = c.createElement("p"); p.className = "kast-p-art", q.className = "kast-mdi kast-mdi-album", r.className = "kast-p-info", s.className = "kast-p-title", s.textContent = i, t.className = "kast-p-artist", t.textContent = l, o.appendChild(p), o.appendChild(r), p.appendChild(q), r.appendChild(s), r.appendChild(t), e.artwork && !b ? d.artwork(l, i, function (a) { a ? (p.style.backgroundImage = "url(" + a[1] + ")", e.onPlayedArtworks(a[1])) : p.className = "kast-p-art kast-p-default-art" }) : p.className = "kast-p-art kast-p-default-art", e.onPlayedInfo(i, l), h.appendChild(o) }, n = 2 === e.version ? 1 : 2, o = n; h > o; o++) m(o, f, h, i); g.appendChild(i) }, i = function (b, c) { var j = b + e.playedPath + "?sid=" + e.sid + "&type=xml", k = 1 === e.version ? "#" : "&_="; 1 === e.version && (j = b + e.playedPath + ".html"), o({ url: j + k + Math.random(), timeout: 8e3, load: function (b) { var c = 1 === e.version ? f(b) : (new DOMParser).parseFromString(b, "text/xml"); a ? a(c) : h(c) }, error: function (a) { c ? g.hasChildNodes() || h("error") : i(d.hostCORS2, !0) } }) }; return i(d.hostCORS, !1), this }, autoUpdate: function (b) { var d, e = this, f = e.opt, g = c.getElementById("kast"), h = c.getElementById("kast-server"), i = c.getElementById("kast-play"); if (q && (d = g.classList), !b) return clearInterval(g.getAttribute("data-interval")), void g.removeAttribute("data-interval"); var j = function () { e.stats(function (c) { var j = -1 !== i.className.indexOf("playing"); if (f.offlineCheck) { var k = 2 === f.version ? c.getElementsByTagName("STREAMSTATUS")[0].textContent : c.body.textContent.split(",")[1], l = g.hasAttribute("data-offline"); c && "1" === k ? l && (q ? d.remove("kast-offline") : a(g).removeClass("kast-offline"), g.setAttribute("data-offline", "false"), f.onOnline()) : l || (q ? d.add("kast-offline") : a(g).addClass("kast-offline"), g.setAttribute("data-offline", "true"), f.onOffline()) } if (j && e.play(), "all" === b) { var m = f.serverInfo, o = f.statusBar; "string" != typeof m && o && (h.textContent = "", n(f, m, c, h)) } var p = "string" == typeof f.currentTrack && "string" == typeof f.currentArtist; if (p && !f.played) return f.onUpdate(c), void f.onUpdateAll(c); var r = 2 === f.version ? c.getElementsByTagName("SONGTITLE")[0].textContent : c.body.textContent.split(",")[6], s = g.getAttribute("data-current"); if (!s) return g.setAttribute("data-current", r); if (s !== r) { if (p || e.stats(c), f.played) { var t = Array.isArray && Array.isArray(f.artwork); t ? e.played(!1, !0) : e.played() } g.setAttribute("data-current", r), f.onUpdate(c) } f.onUpdateAll(c) }) }, k = function (a, b) { if (!g.hasAttribute("data-interval")) { var c = setInterval(a, b); g.setAttribute("data-interval", c) } }, l = 8e3; return e.mobile && (l = e.mobileMedium ? 16e3 : 12e3), k(j, l), this }, artwork: function (a, b, c) { var d = this, e = this.opt; if (Array.isArray && Array.isArray(e.artwork)) return c(e.artwork); if (a === e.language.unknownArtistText) return c(null); var f = p(a), g = p(b), h = function (a) { var b = null; if (a.tracks && a.tracks.items[0]) { var c, e = a.tracks.items[0].album.images || "", f = e[2].url || ""; c = d.mobileMedium ? e[1].url || "" : e[0].url || "", c && f && (b = [c, f]) } else if (a.artists && a.artists.items[0] && a.artists.items[0].images[0]) { var g = a.artists.items[0].images || "", c = null, f = null; 4 === a.artists.items[0].images.length ? (c = d.mobileMedium ? g[2].url || "" : g[1].url || "", f = g[3].url || "") : (c = d.mobileMedium ? g[1].url || "" : g[0].url || "", f = g[2].url || ""), c && f && (b = [c, f]) } return b }, i = function (a, b, d) { var e = "https://api.spotify.com/v1/search?q=artist:" + a + "%20track:" + b + "&limit=1&type=track", f = "https://api.spotify.com/v1/search?q=artist:" + a + "&limit=1&type=artist", g = d ? f : e; o({ url: g, load: function (e) { var f = JSON.parse(e), g = h(f); g ? c(g) : d ? c(null) : i(a, b, !0) }, error: function () { c(null) } }) }, j = e.irrelevantWords; if (j) { for (var k = j.length, l = 0; k > l; l++) f = f.replace(j[l], ""), g = g.replace(j[l], ""); i(f, g) } else i(f, g); return this }, destroy: function () { b.kastXHR && b.kastXHR.abort(), this.autoUpdate(!1), this.audio.pause(), a.data(c.body, "plugin_kast", null); var d = c.getElementById("kast"); return d && d.parentNode.removeChild(d), this } }, a.kast = function (b, d) { var f = c.body; if (a.data(f, "plugin_kast")) "function" == typeof e.prototype[b] && a.data(f, "plugin_kast")[b](d); else { if ("destroy" === b) return; a.data(f, "plugin_kast", new e(this, b)) } } }(jQuery, window, document);
//Fin Radio
$.kast({
    host: "grupomundodigital.com",
    port: 9106,
    version: 2,
    artwork: false,
    autoUpdate: false,
    serverInfo: false,
    currentTrack: false,
    currentArtist: false,
    playedTracks: false,
    playedArtists: false,
    offlineCheck: false,
    colors: {
        primary: 'grey',
        accent: 'light blue'
    },
    theme: 'light',
    ui: 'transparent',
    played: false
})


jQuery.support.cors = true;
if (typeof Liferay === 'undefined' && window.location.href.indexOf("public_html") > -1) {
    isLocalHost = true;
    console.log("mode HTML: on");
    var Liferay = {
        ThemeDisplay: {
            getLayoutId: function () { return "1" }, getLayoutURL: function () { return "http://www.uce.edu.ec/ajax/home" },
            getPortalURL: function () { return "http://www.uce.edu.ec" }
        },
        on: function (A, G) {

        }
    };
}

$(window).load(function () {
    console.log("window on load eventx body:" + $('body').length);
    initx();
    createSharex();    
    
});

function initx() {
    var loadsx = $('[data-load]');
    var len = loadsx.length;
    loadsx.each(function (index, element) {
        var that = $(this);
        var urix = that.data("load");
        console.log("load start:" + urix);

        $.ajax({
            type: "get",
            crossDomain: true,
            url: urix,
            contentType: 'text/plain',
            success: function (data, textStatus, xhr) {
                that.html(data);
                //that = null;
                len = len - 1;
                console.log("load finish:" + urix + ";  -->" + xhr.status + " " + xhr.statusText + " len:" + len);
                if (len == 0) {
                    console.log("loads terminados");
                    console.log("mm-menu creando: body:" + $('body').length);

                    //mm-menu
                    $('#mm-nav-content').appendTo('#dcmmenu');

                    $("#dcmmenu").mmenu({
                        classes: "mm-slide"
                    });

                    console.log("mm-menu creado body:" + $('body').length);


                    $('#loader').addClass('animated bounceOutUp');

                    setTimeout(function () {
                        console.log("removiendo loader");

                        $('#loader').remove();
                        $('#loaderStyle').remove();


                        console.log("iniciando innerNavigate");

                        innerNavigate();

                        console.log("fin  innerNavigate");

                        $("body").animate({
                            scrollTop: 1
                        }, 1);

                        //scroll pagination
                        if (window.location.search.indexOf("page=") > -1) {
                            var q = $('.slide[data-slide="' + noti_slide_num + '"]').offset().top;
                            $("body").animate({
                                scrollTop: q
                            }, 1000, 'easeInOutBack');
                        }
                    }, 1300);


                    console.log("iniciando onloadX");
                    DockPopUp().init();
                    //date update
                    var dd = new Date();
                    var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                    var dtx = days[dd.getDay()] + " " + dd.toLocaleDateString("ec");
                    $('#dcm-date').text(dtx);

                    $.Metro.initAll($('body.metro'));

                    onloadX();
                    //show popup
                    //$('#popup01').trigger("click");
                    //$("#popup-onload").trigger("click");
                    console.log("fin onloadX");

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                len = len - 1;
                console.log("error load finish:" + urix + ";  -->" + xhr.status + " " + xhr.statusText + " : " + errorThrown + " len:" + len);
            }
        });
    });


}

//#region innerNavigate
//<editor-fold  defaultstate="collapsed" desc="innerNavigate">
//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
function goToByScroll(dataslide) {
    //alert(dataslide);
    var htmlbody = $('html,body');
    var q = $('.slide[data-slide="' + dataslide + '"]').offset().top - 45;
    htmlbody.animate({
        scrollTop: q
    }, 2500, 'easeInOutBack');
    q = htmlbody = null;
}
function innerNavigate() {
    //  /*
    var links = $('a.toSlide'),
            button = $('.scrollbut');
    if (links.length > 0) {
        //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
        links.click(function (e) {
            e.preventDefault();
            $('#dcmmenu').trigger('close.mm');
            var dataslide = $(this).attr('data-slide'); //alert(dataslide);
            goToByScroll(dataslide);
            return false;
        });
        links = null;
        //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
        button.click(function (e) {
            e.preventDefault();
            var dataslide = $(this).attr('data-slide');
            goToByScroll(dataslide);
            dataslide = null;
        });
        button = null;
        //  TweenMax.to($("#navBar"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});
        //  TweenMax.to($(".one_col"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});                                                                                                                                
        //  var scene = document.getElementById('scene');
        //var parallax = new Parallax(scene);
    }
}
//</editor-fold>
//#endregion 

//#region scroll top
$(window).scroll(function () {
    ///*
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    if (y_scroll_pos > scroll_pos_test) {
        jQuery('.top').fadeIn(1000);
        //        jQuery('.iphone').children('.top').css('display', 'none !important');
    } else {
        jQuery('.top').fadeOut(500);
    }
    y_scroll_pos = scroll_pos_test = null;
    //headerPosition();
    //*/


    //parrallax
    /*
     var scrollPos = $(this).scrollTop();
     
     var elemx = $('#slide4 .img-cover');
     //Scroll the background of the banner
     elemx.css({
     'background-position': 'center ' + ((scrollPos - elemx.offset().top) / 3) + "px"
     });
     scrollPos = elemx = null;
     
     // */
});
jQuery('.top').click(function () {
    jQuery('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutCubic'); //return false;
});
//#endregion

function isMobileBrowser() {
    return debug || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function createSharex() {
    $('[data-role=sharex]').each(function () {

        var that = $(this);
        fixedUrls(that);
        that = null;
    });
}

function fixedUrls(that) {

    if (typeof Liferay === 'undefined') {
        var qq = 'http://www.uce.edu.ec/home';
    } else {
        var qq = Liferay.ThemeDisplay.getLayoutURL();
    }
    var portal = qq.match(reg)[0] + "archive_noticias?artID=";
    var icox = '<i class="fa fa-share-alt"></i>';
    var t1 = 'https://twitter.com/intent/tweet?text=%E2%80%9C';
    var t2 = '%E2%80%9D&url=';
    var t3 = '&via=lacentralec';
    var f1 = 'http://www.facebook.com/sharer.php?u=';

    var service = that.data("sharex-service");
    if (typeof service === 'undefined') {
        service = "u"
    }

    if (service == "f") {
        var urlx = encodeURI(portal + that.data("sharex-artid"));
        var srcx = f1 + urlx;
        that.attr("href", srcx);

    } else if (service == "t") {

        var urlx = encodeURI(portal + that.data("sharex-artid"));
        var title = encodeURI(that.data("sharex-title"));
        var srcx = t1 + title + t2 + urlx + t3;
        that.attr("href", srcx);

    } else if (service == "l") {

        //http://www.uce.edu.ec/archive_noticias?artID=0001
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
        that.html(icox + " " + srcx);
    } else {
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
    }
    portal = icox = t1 = t2 = t3 = f1 = service = qq = that = null;
}

$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function () {
            return Math.round(Math.random()) - 0.5;
            // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
        }).detach().appendTo(this);
    });

    return this;
};

//$('ul').randomize();
console.log("fin dcm_common, body: " + $('body').length);
///#source 1 1 /public_html/perseo/main/js/_dcmtheme.js
var debug = false, noti_slide_num = 2, versionx = 1;
console.log("version script: " + versionx);

//#region nivo slider
//<editor-fold  defaultstate="collapsed" desc="nivo slider">
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function (e) {
    var t = function (t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = { currentSlide: 0, currentImage: "", totalSlides: 0, running: false, paused: false, stop: false, controlNavEl: false };
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function () {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width(), s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        }
        if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function () {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function (t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#")
                    r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function () {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function () {
                d(s, o, r, false)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb"))
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function () {
                if (i.running)
                    return false;
                if (e(this).hasClass("active"))
                    return false;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function () {
                i.paused = true;
                clearInterval(f);
                f = ""
            }, function () {
                i.paused = false;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function () {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function () {
            u.attr("src", i.currentImage.attr("src"));
            i.running = false;
            e(o).each(function () {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function () {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function (t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({ left: o * s + "px", width: t.width() - o * s + "px", height: i + "px", opacity: "0", overflow: "hidden" }))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({ left: o * s + "px", width: o + "px", height: i + "px", opacity: "0", overflow: "hidden" }))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({ height: e(r.currentImage).height() }, n.animSpeed)
        };
        var p = function (t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols), s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({ opacity: 0, left: i * a + "px", top: s * o + "px", width: t.width() - i * a + "px" }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({ opacity: 0, left: i * a + "px", top: s * o + "px", width: i + "px" }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({ height: e(r.currentImage).height() }, n.animSpeed)
        };
        var d = function (t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return false
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            }
            if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect, f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = true;
            var l = 0, c = 0, d = "", m = "", g = "", y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({ top: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({ bottom: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    }
                    if (b === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function () {
                    var n = e(this);
                    var i = n.width();
                    n.css({ top: "0px", width: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ width: i, opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ width: i, opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: t.width() + "px" });
                m.animate({ opacity: "1.0" }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: "0px", opacity: "1" });
                m.animate({ width: t.width() + "px" }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: "0px", opacity: "1", left: "", right: "0px" });
                m.animate({ width: t.width() + "px" }, r.animSpeed * 2, "", function () {
                    m.css({ left: "0px", right: "" });
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function () {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function () {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function (n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function () {
                                        f.animate({ opacity: "1", width: l, height: c }, r.animSpeed / 1.3, "", function () {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function () {
                                        f.animate({ opacity: "1", width: l, height: c }, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            })(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function (e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n)
                ;
            return e
        };
        var m = function (e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function () {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = true;
                m("Stop Slider")
            }
        };
        this.start = function () {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = false;
                m("Start Slider")
            }
        };
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function (n) {
        return this.each(function (r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this, n);
            s.data("nivoslider", o)
        })
    };
    e.fn.nivoSlider.defaults = {
        effect: "random", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 500, pauseTime: 3e3, startSlide: 0, directionNav: true, controlNav: true, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: "Prev", nextText: "Next", randomStart: false, beforeChange: function () {
        }, afterChange: function () {
        }, slideshowEnd: function () {
        }, lastSlide: function () {
        }, afterLoad: function () {
        }
    };
    e.fn._reverse = [].reverse
})(jQuery);
//</editor-fold>
//#endregion 

//#region vacordion
//<editor-fold  defaultstate="collapsed" desc="vacordion">
(function ($) {

    // cache some values
    var cache = {
        idx_expanded: -1, // the index of the current expanded slice
        sliceH: 0, // the default slice's height	
        current: 0, // controls the current slider position
        totalSlices: 0	  // total number of slices
    },
    aux = {
        // triggered when we click a slice. If the slice is expanded,
        // we close it, otherwise we open it..
        selectSlice: function ($el, $slices, $navNext, $navPrev, settings) {

            return $.Deferred(
                    function (dfd) {

                        var expanded = $el.data('expanded'),
                                pos = $el.data('position'),
                                itemHeight, othersHeight,
                                $others = $slices.not($el);
                        // if it's opened..	
                        if (expanded) {
                            $el.data('expanded', false);
                            cache.idx_expanded = -1;
                            // the default values of each slices's height
                            itemHeight = cache.sliceH;
                            othersHeight = cache.sliceH;
                            // hide the content div
                            $el.find('.va-content').hide();
                            $el.find('.va-title').show("fast");//close slice so show title
                            // control the navigation buttons visibility
                            if (aux.canSlideUp($slices, settings))
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (aux.canSlideDown($slices, settings))
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }
                            // if it's closed..
                        else {
                            $el.data('expanded', true);
                            cache.idx_expanded = $el.index();
                            $others.data('expanded', false);
                            // the current slice's height
                            itemHeight = settings.expandedHeight;
                            // the height the other slices will have
                            othersHeight = Math.ceil((settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1));
                            // control the navigation buttons visibility
                            if (cache.idx_expanded > 0)
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (cache.idx_expanded < cache.totalSlices - 1)
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }

                        // the animation parameters for the clicked slice
                        var animParam = {
                            height: itemHeight + 'px',
                            opacity: 1,
                            top: (pos - 1) * othersHeight + 'px'
                        };
                        // animate the clicked slice and also its title (<h3>)
                        $el.stop()
                                .animate(animParam, settings.animSpeed, settings.animEasing, function () {
                                    if (!expanded) {
                                        $el.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                        $el.find('.va-title').hide();
                                    }
                                })

                        // animate all the others
                        $others.each(function (i) {
                            var $other = $(this),
                                    posother = $other.data('position'),
                                    t;
                            if (expanded)
                                t = (posother - 1) * othersHeight;
                            else {
                                if (posother < pos)
                                    t = (posother - 1) * othersHeight;
                                else
                                    t = ((posother - 2) * othersHeight) + settings.expandedHeight;
                            }

                            $other.stop()
                                    .animate({
                                        top: t + 'px',
                                        height: othersHeight + 'px',
                                        opacity: (expanded) ? 1 : settings.animOpacity
                                    }, settings.animSpeed, settings.animEasing, dfd.resolve)
                                    .find('.va-title')
                                    .stop()//.show()                                    
                                    .end()
                                    .find('.va-content')
                                    .hide();
                        });
                        $others = null;
                    }
            ).promise();
        },
        // triggered when clicking the navigation buttons / mouse scrolling
        navigate: function (dir, $slices, $navNext, $navPrev, settings) {
            // if animating return
            if ($slices.is(':animated'))
                return false;
            // all move up / down one position
            // if settings.savePositions is false, then we need to close any expanded slice before sliding
            // otherwise we slide, and the next one will open automatically
            var $el;
            if (cache.idx_expanded != -1 && !settings.savePositions) {
                $el = $slices.eq(cache.idx_expanded);
                $.when(aux.selectSlice($el, $slices, $navNext, $navPrev, settings)).done(function () {
                    setTimeout(function () {
                        aux.slide(dir, $slices, $navNext, $navPrev, settings);
                    }, 10);
                });
            }
            else {
                aux.slide(dir, $slices, $navNext, $navPrev, settings);
            }
        },
        slide: function (dir, $slices, $navNext, $navPrev, settings) {
            // control if we can navigate.
            // control the navigation buttons visibility.
            // the navigation will behave differently for the cases we have all the slices closed, 
            // and when one is opened. It will also depend on settings.savePositions 
            if (cache.idx_expanded === -1 || !settings.savePositions) {
                if (dir === 1 && cache.current + settings.visibleSlices >= cache.totalSlices)
                    return false;
                else if (dir === -1 && cache.current === 0)
                    return false;
                if (dir === -1 && cache.current === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.current + settings.visibleSlices === cache.totalSlices - 1)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }
            else {
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 1)
                    return false;
                else if (dir === -1 && cache.idx_expanded === 0)
                    return false;
                if (dir === -1 && cache.idx_expanded === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 2)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }

            var $currentSlice = $slices.eq(cache.idx_expanded),
                    $nextSlice,
                    t;
            (dir === 1) ? $nextSlice = $currentSlice.next() : $nextSlice = $currentSlice.prev();
            // if we cannot slide up / down, then we just call the selectSlice for the previous / next slice
            if ((dir === 1 && !aux.canSlideDown($slices, settings)) ||
                    (dir === -1 && !aux.canSlideUp($slices, settings))) {
                aux.selectSlice($nextSlice, $slices, $navNext, $navPrev, settings);
                return false;
            }

            // if we slide down, the top and position of each slice will decrease
            if (dir === 1) {
                cache.current++;
                t = '-=' + cache.sliceH;
                pos_increment = -1;
            }
            else {
                cache.current--;
                t = '+=' + cache.sliceH;
                pos_increment = 1;
            }

            $slices.each(function (i) {
                var $slice = $(this),
                        pos = $slice.data('position');
                // all closed or savePositions is false
                if (!settings.savePositions || cache.idx_expanded === -1)
                    $slice.stop().animate({ top: t }, settings.animSpeed, settings.animEasing);
                else {
                    var itemHeight, othersHeight;
                    // if the slice is the one we should open..
                    if (i === $nextSlice.index()) {
                        $slice.data('expanded', true);
                        cache.idx_expanded = $slice.index();
                        itemHeight = settings.expandedHeight;
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: itemHeight + 'px',
                                    opacity: 1,
                                    top: (dir === 1) ? (pos - 2) * othersHeight + 'px' : pos * othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing, function () {
                                    $slice.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                })
                        //.find('.va-title')
                        //.stop()
                        //.animate({
                        //    lineHeight: cache.sliceH + 'px'
                        //}, settings.animSpeed, settings.animEasing);
                    }
                        // if the slice is the one opened, lets close it
                    else if ($slice.data('expanded')) {
                        // collapse

                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: othersHeight + 'px',
                                    opacity: settings.animOpacity,
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + settings.expandedHeight
                                }, settings.animSpeed, settings.animEasing)
                                .find('.va-title')
                                .stop().show("fast")
                            .fadeIn()
                                /*.animate({
                                    lineHeight: othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing)
                                .end()*/
                                .find('.va-content')
                                .hide();
                    }
                        // all the others..
                    else {
                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + othersHeight
                                }, settings.animSpeed, settings.animEasing);
                    }
                }
                // change the slice's position
                $slice.data().position += pos_increment;
            });
        },
        canSlideUp: function ($slices, settings) {
            var $first = $slices.eq(cache.current);
            if ($first.index() !== 0)
                return true;
        },
        canSlideDown: function ($slices, settings) {
            var $last = $slices.eq(cache.current + settings.visibleSlices - 1);
            if ($last.index() !== cache.totalSlices - 1)
                return true;
        }
    },
    methods = {
        init: function (options) {

            if (this.length) {

                var settings = {
                    // the accordion's width
                    accordionW: 1000,
                    // the accordion's height
                    accordionH: 450,
                    // number of visible slices
                    visibleSlices: 3,
                    // the height of a opened slice
                    // should not be more than accordionH
                    expandedHeight: 350,
                    // speed when opening / closing a slice
                    animSpeed: 250,
                    // easing when opening / closing a slice
                    animEasing: 'jswing',
                    // opacity value for the collapsed slices
                    animOpacity: 0.2,
                    // time to fade in the slice's content
                    contentAnimSpeed: 900,
                    // if this is set to false, then before
                    // sliding we collapse any opened slice
                    savePositions: true
                };
                return this.each(function () {

                    // if options exist, lets merge them with our default settings
                    if (options) {
                        $.extend(settings, options);
                    }

                    var $el = $(this),
                            // the accordion's slices
                            $slices = $el.find('div.va-slice'),
                            // the navigation buttons
                            $navNext = $el.find('span.va-nav-next'),
                            $navPrev = $el.find('span.va-nav-prev');
                    // each slice's height
                    cache.sliceH = Math.ceil(settings.accordionH / settings.visibleSlices);
                    // total slices
                    cache.totalSlices = $slices.length;
                    // control some user config parameters
                    if (settings.expandedHeight > settings.accordionH)
                        settings.expandedHeight = settings.accordionH;
                    else if (settings.expandedHeight <= cache.sliceH)
                        settings.expandedHeight = cache.sliceH + 50; // give it a minimum

                    // set the accordion's width & height
                    $el.css({
                        width: settings.accordionW + 'px',
                        height: settings.accordionH + 'px'
                    });
                    // show / hide $navNext 
                    if (settings.visibleSlices < cache.totalSlices)
                        $navNext.show();
                    // set the top & height for each slice.
                    // also save the position of each one.
                    // as we navigate, the first one in the accordion
                    // will have position 1 and the last settings.visibleSlices.
                    // finally set line-height of the title (<h3>)
                    $slices.each(function (i) {
                        var $slice = $(this);
                        $slice.css({
                            top: i * cache.sliceH + 'px',
                            height: cache.sliceH + 'px'
                        }).data('position', (i + 1));
                    })
                            .children('.va-title')
                            .css('line-height', cache.sliceH + 'px');
                    // click event
                    $slices.bind('click.vaccordion', function (e) {
                        // only if we have more than 1 visible slice. 
                        // otherwise we will just be able to slide.
                        if (settings.visibleSlices > 1) {
                            var $el = $(this);
                            aux.selectSlice($el, $slices, $navNext, $navPrev, settings);
                        }
                    });
                    // navigation events
                    $navNext.bind('click.vaccordion', function (e) {
                        aux.navigate(1, $slices, $navNext, $navPrev, settings);
                    });
                    $navPrev.bind('click.vaccordion', function (e) {
                        aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                    });
                    // adds events to the mouse //mouse comunicados
                    /*$el.bind('mousewheel.vaccordion', function(e, delta) {
                     if (delta > 0) {
                     aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                     }
                     else {
                     aux.navigate(1, $slices, $navNext, $navPrev, settings);
                     }
                     return false;
                     });*/
                });
            }
        }
    };
    $.fn.vaccordion = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.vaccordion');
        }
    };
})(jQuery);
//</editor-fold>
//#endregion 

//#region notices full
var NoticiasFull = (function () {
    //mayra
    var $items = $('.noticeX'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }

    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay'),
                    $prev = $('<span class="rb-prev"><i class="fa fa-uce_anterior"></i></span>').appendTo($overlay),
                    $next = $('<span class="rb-next"><i class="fa fa-uce_siguiente"></i></span>').appendTo($overlay),
                    $linkNext, $linkPrev;
            if ($item.is(':last-child')) {
                $linkPrev = $items[ix - 1];
                $linkNext = $items[0];
            } else if ($item.is(':first-child')) {
                $linkPrev = $items[$items.size() - 1];
                $linkNext = $items[ix + 1];
            } else {
                $linkNext = $items[ix + 1];
                $linkPrev = $items[ix - 1];
            }
            $close.css('display', 'none');
            $next.on('click', function (event) {
                $($linkNext).trigger("click");
                $close.trigger("click");
            });
            $prev.on('click', function (event) {
                $($linkPrev).trigger("click");
                $close.trigger("click");
            });
            $item.data("index", ix);
            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                $('.og-grid.noticies').removeClass("oculto visible animated bounceInRight");
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.data("index");
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                        /*setTimeout(function() {
                         $overlay.css('clip', clipPropLast).on(transEndEventName, function() {
                         $overlay.off(transEndEventName);
                         $body.css('overflow-y', 'hidden');
                         });
                         }, 25);*/
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                $close.css('display', 'block');

            });
            $close.on('click', function () {
                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }
                $close.css('display', 'none');
                return false;
            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {

        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    return { init: init };
});//();
//</editor-fold>
//#endregion 

//#region metro
//<editor-fold defaultstate="collapsed" desc="metro tabs control">
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false

function addTouchEvents(element) {
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
}

function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
        case "touchstart":
            mouseEv = "mousedown";
            break;
        case "touchend":
            mouseEv = "mouseup";
            break;
        case "touchmove":
            mouseEv = "mousemove";
            break;
        default:
            return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}


/* To add touch support for element need create listeners for component dom element
 if (hasTouch) {
 element.addEventListener("touchstart", touch2Mouse, true);
 element.addEventListener("touchmove", touch2Mouse, true);
 element.addEventListener("touchend", touch2Mouse, true);
 }
 */
(function (c) {
    c.widget("metro.tabcontrol", {
        version: "1.0.0", options: {
            effect: "none", activateStoredTab: !1, tabclick: function (a) {
            }, tabchange: function (a) {
            }
        }, _create: function () {
            var a = this, b = this.element, d = c(b.children(".tabs")).children("li"), e = c(b.children(".frames")).children(".frame"), f = b.attr("id");
            void 0 != b.data("effect") && (this.options.effect = b.data("effect"));
            this.init(d, e);
            d.each(function () {
                var b = c(this).children("a");
                b.on("click", function (h) {
                    h.preventDefault();
                    a.options.tabclick(this);
                    if (c(this).parent().hasClass("disabled"))
                        return !1;
                    d.removeClass("active");
                    b.parent("li").addClass("active");
                    e.hide();
                    var e1 = e.data('anim');
                    e.find('a').removeClass(e1);
                    h = c(b.attr("href"));
                    switch (a.options.effect) {
                        case "slide":
                            h.slideDown();
                            break;
                        case "fade":
                            h.fadeIn();
                            break;
                        default:
                            h.show()
                    }

                    var e2 = h.data('anim');
                    var w = h.find('a');
                    if (e2 !== undefined && w.width() !== null) {
                        w.addClass('animated ' + e2);
                        setTimeout(function () {
                            w.removeClass('animated ' + e2);
                        }, 1000)
                    }
                    a._trigger("change", null, h);
                    a.options.tabchange(this);
                    void 0 != f && window.localStorage.setItem(f + "-current-tab", c(this).attr("href"))
                })
            });
            this.options.activateStoredTab && this._activateStoredTab(d)
        }, init: function (a, b) {
            var d = this;
            a.each(function () {
                if (c(this).hasClass("active")) {
                    var a = c(c(c(this).children("a")).attr("href"));
                    b.hide();
                    a.show();
                    d._trigger("change", null, a)
                }
            })
        }, _activateStoredTab: function (a) {
            var b = window.localStorage.getItem(this.element.attr("id") + "-current-tab");
            void 0 != b && a.each(function () {
                var a = c(this).children("a");
                a.attr("href") == b && a.click()
            })
        }, _destroy: function () {
        }, _setOption: function (a, b) {
            this._super("_setOption", a, b)
        }
    })
})(jQuery);
(function (c) {
    c.widget("metro.hint", {
        version: "1.0.0", options: { position: "bottom", background: "#FFFCC0", shadow: !1, border: !1, _hint: void 0 }, _create: function () {
            var a = this, b = this.options;
            this.element.on("mouseenter", function (c) {
                a.createHint();
                b._hint.stop().fadeIn();
                c.preventDefault()
            });
            this.element.on("mouseleave", function (a) {
                b._hint.stop().fadeOut(function () {
                    b._hint.remove()
                });
                a.preventDefault()
            })
        }, createHint: function () {
            var a = this.element, b = a.data("hint").split("|"), d = this.options;
            void 0 != a.data("hintPosition") &&
                    (d.position = a.data("hintPosition"));
            void 0 != a.data("hintBackground") && (d.background = a.data("hintBackground"));
            void 0 != a.data("hintShadow") && (d.shadow = a.data("hintShadow"));
            void 0 != a.data("hintBorder") && (d.border = a.data("hintBorder"));
            if ("TD" == a[0].tagName || "TH" == a[0].tagName) {
                var e = c("<div/>").css("display", "inline-block").html(a.html());
                a.html(e);
                a = e
            }
            var e = 1 < b.length ? b[0] : !1, f = 1 < b.length ? b[1] : b[0], b = c("<div/>").addClass("hint").appendTo("body");
            e && c("<div/>").addClass("hint-title").html(e).appendTo(b);
            c("<div/>").addClass("hint-text").html(f).appendTo(b);
            b.addClass(d.position);
            d.shadow && b.addClass("shadow");
            d.background && b.css("background-color", d.background);
            d.border && b.css("border-color", d.border);
            "top" == d.position ? b.css({ top: a.offset().top - c(window).scrollTop() - b.outerHeight() - 20, left: a.offset().left - c(window).scrollLeft() }) : "bottom" == d.position ? b.css({ top: a.offset().top - c(window).scrollTop() + a.outerHeight(), left: a.offset().left - c(window).scrollLeft() }) : "right" == d.position ? b.css({
                top: a.offset().top -
                            10 - c(window).scrollTop(), left: a.offset().left + a.outerWidth() + 10 - c(window).scrollLeft()
            }) : "left" == d.position && b.css({ top: a.offset().top - 10 - c(window).scrollTop(), left: a.offset().left - b.outerWidth() - 10 - c(window).scrollLeft() });
            d._hint = b
        }, _destroy: function () {
        }, _setOption: function (a, b) {
            this._super("_setOption", a, b)
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.accordion", {
        version: "1.0.0",
        options: {
            closeAny: true,
            open: function (frame) {
            },
            action: function (frame) {
            }
        },
        _frames: {},
        _create: function () {
            var element = this.element;
            if (element.data('closeany') != undefined)
                this.options.closeAny = element.data('closeany');
            this.init();
        },
        init: function () {
            var that = this;
            that.element.on('click', '.accordion-frame > .heading', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).attr('disabled') || $(this).data('action') == 'none')
                    return;
                if (that.options.closeAny)
                    that._closeFrames();
                var frame = $(this).parent(), content = frame.children('.contentx2');
                console.log(this);
                if ($(content).is(":hidden")) {
                    //$(content).slideDown();
                    $(this).removeClass("collapsed");
                    that._trigger("frame", e, { frame: frame });
                    that.options.open(frame);
                } else {
                    //$(content).slideUp();
                    $(this).addClass("collapsed");
                }
                that.options.action(frame);
            });
            var frames = this.element.children('.accordion-frame');
            frames.each(function () {
                var frame = this,
                        a = $(this).children(".heading"),
                        content = $(this).children(".contentx2");
                if ($(frame).hasClass("active") && !$(frame).attr('disabled') && $(frame).data('action') != 'none') {
                    //$(content).show();
                    $(a).removeClass("collapsed");
                } else {
                    $(a).addClass("collapsed");
                }
            });
        },
        _closeFrames: function () {
            var frames = this.element.children('.accordion-frame');
            $.each(frames, function () {
                var frame = $(this);
                frame.children('.heading').addClass('collapsed');
                // frame.children('.contentx2').slideUp();
            });
            //this._frames.children(".content").slideUp().parent().children('.heading').addClass("collapsed");
        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.panel", {
        version: "1.0.0",
        options: {
            onCollapse: function () {
            },
            onExpand: function () {
            }
        },
        _create: function () {
            var element = this.element, o = this.options,
                    header = element.children('.panel-header'),
                    content = element.children('.panel-content');
            header.on('click', function () {
                content.slideToggle(
                        'fast',
                        function () {
                            element.toggleClass('collapsed');
                            if (element.hasClass('collapsed')) {
                                o.onCollapse();

                            } else {
                                o.onExpand();
                                //mayra2
                                //$('.full-content').each(function () {
                                //    $(this).perfectScrollbar("update");
                                //});
                            }
                        }
                );
            });
            if (element.hasClass('start-collapsed')) {
                if (element.hasClass('collapsed')) {
                    //element.removeClass('collapsed');
                }
                else {
                    header.click();
                }
            }
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.carousel", {
        version: "1.0.0",
        options: {
            auto: true,
            period: 2000,
            duration: 500,
            effect: 'slowdown', // slide, fade, switch, slowdown
            direction: 'left',
            markers: {
                show: true,
                type: 'default',
                position: 'left' //bottom-left, bottom-right, bottom-center, top-left, top-right, top-center
            },
            controls: true,
            stop: true,
            width: '100%',
            height: 300
        },
        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _create: function () {
            var that = this, o = this.options,
                    element = carousel = this.element,
                    controls = carousel.find('.controls');

            if (element.data('auto') != undefined)
                o.auto = element.data('auto');
            if (element.data('period') != undefined)
                o.period = element.data('period');
            if (element.data('duration') != undefined)
                o.duration = element.data('duration');
            if (element.data('effect') != undefined)
                o.effect = element.data('effect');
            if (element.data('direction') != undefined)
                o.direction = element.data('direction');
            if (element.data('width') != undefined)
                o.width = element.data('width');
            if (element.data('height') != undefined)
                o.height = element.data('height');
            if (element.data('stop') != undefined)
                o.stop = element.data('stop');
            if (element.data('controls') != undefined)
                o.controls = element.data('controls');
            if (element.data('markersShow') != undefined)
                o.markers.show = element.data('markersShow');
            if (element.data('markersType') != undefined)
                o.markers.type = element.data('markersType');
            if (element.data('markersPosition') != undefined)
                o.markers.position = element.data('markersPosition');

            carousel.css({
                'width': this.options.width,
                'height': this.options.height
            });

            this._slides = carousel.find('.slic');

            if (this._slides.length <= 1)
                return;

            if (this.options.markers !== false && this.options.markers.show && this._slides.length > 1) {
                this._markers(that);
            }

            if (this.options.controls && this._slides.length > 1) {
                carousel.find('.controls.left').on('click', function () {
                    that._slideTo('prior');
                });
                carousel.find('.controls.right').on('click', function () {
                    that._slideTo('next');
                });
            } else {
                controls.hide();
            }

            if (this.options.stop) {
                carousel
                        .on('mouseenter', function () {
                            clearInterval(that._interval);
                        })
                        .on('mouseleave', function () {
                            if (that.options.auto)
                                that._autoStart(), that.options.period;
                        })
            }

            if (this.options.auto) {
                this._autoStart();
            }
        },
        _autoStart: function () {
            var that = this;
            this._interval = setInterval(function () {
                if (that.options.direction == 'left') {
                    that._slideTo('next')
                } else {
                    that._slideTo('prior')
                }
            }, this.options.period);
        },
        _slideTo: function (direction) {
            var
                    currentSlide = this._slides[this._currentIndex],
                    nextSlide;

            if (direction == undefined)
                direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0)
                    this._currentIndex = this._slides.length - 1;

                this._outPosition = this.element.width();

            } else if (direction === 'next') {
                this._currentIndex += 1;
                if (this._currentIndex >= this._slides.length)
                    this._currentIndex = 0;

                this._outPosition = -this.element.width();

            }

            nextSlide = this._slides[this._currentIndex];

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            var carousel = this.element, that = this;
            carousel.find('.markers ul li a').each(function () {
                var index = $(this).data('num');
                if (index === that._currentIndex) {
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }
            });
        },
        _slideToSlide: function (slideIndex) {
            var
                    currentSlide = this._slides[this._currentIndex],
                    nextSlide = this._slides[slideIndex];

            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.element.width();
            } else {
                this._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            this._currentIndex = slideIndex;
        },
        _markers: function (that) {
            var div, ul, li, i, markers;

            div = $('<div class="markers ' + this.options.markers.type + '" />');
            ul = $('<ul></ul>').appendTo(div);

            for (i = 0; i < this._slides.length; i++) {
                li = $('<li><a href="javascript:void(0)" data-num="' + i + '"></a></li>');
                if (i === 0) {
                    li.addClass('active');
                }
                li.appendTo(ul);
            }


            ul.find('li a').removeClass('active').on('click', function () {
                var $this = $(this),
                        index = $this.data('num');

                ul.find('li').removeClass('active');
                $this.parent().addClass('active');

                if (index == that._currentIndex) {
                    return true;
                }

                that._slideToSlide(index);
                return true;
            });

            div.appendTo(this.element);

            switch (this.options.markers.position) {
                case 'top-left':
                    {
                        div.css({
                            left: '10px',
                            right: 'auto',
                            bottom: 'auto',
                            top: '10px'
                        });
                        break;
                    }
                case 'top-right':
                    {
                        div.css({
                            left: 'auto',
                            right: '10px',
                            bottom: 'auto',
                            top: '0px'
                        });
                        break;
                    }
                case 'top-center':
                    {
                        div.css({
                            left: this.element.width() / 2 - div.width() / 2,
                            right: 'auto',
                            bottom: 'auto',
                            top: '0px'
                        });
                        break;
                    }
                case 'bottom-left':
                    {
                        div.css({
                            left: '10px',
                            right: 'auto'
                        });
                        break;
                    }
                case 'bottom-right':
                    {
                        div.css({
                            right: '10px',
                            left: 'auto'
                        });
                        break;
                    }
                case 'bottom-center':
                    {
                        div.css({
                            left: this.element.width() / 2 - div.width() / 2,
                            right: 'auto'
                        });
                        break;
                    }
            }
        },
        _effectSwitch: function (currentSlide, nextSlide) {
            $(currentSlide)
                    .hide();
            $(nextSlide)
                    .css({ left: 0 })
                    .show();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, this.options.duration);
        },
        _effectSlide: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .animate({ left: this._outPosition }, duration);
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, duration);
        },
        _effectSlowdown: function (currentSlide, nextSlide, duration) {
            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                    .animate({ left: this._outPosition }, options);


            //$(nextSlide).find('.subslide').hide();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, options);

            //setTimeout(function(){
            //    $(nextSlide).find('.subslide').fadeIn();
            //}, 500);

        },
        _effectFade: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .fadeOut(duration);
            $(nextSlide)
                    .css({ left: 0 })
                    .fadeIn(duration);
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });
})(jQuery);
(function ($) {
    $.widget("metro.dropdown", {
        version: "1.0.1",
        options: {
            effect: 'slide',
            toggleElement: false
        },
        _create: function () {
            var that = this,
                    menu = this.element,
                    name = this.name,
                    parent = this.element.parent(),
                    toggle = this.options.toggleElement || parent.children('.dropdown-toggle');

            if (menu.data('effect') != undefined) {
                this.options.effect = menu.data('effect');
            }

            toggle.on('click.' + name, function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (menu.css('display') == 'block' && !menu.hasClass('keep-open')) {
                    that._close(menu);
                } else {
                    $('.dropdown-menu').each(function (i, el) {
                        if (!menu.parents('.dropdown-menu').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') == 'block') {
                            that._close(el);
                        }
                    });
                    that._open(menu);
                }
            });

            $(menu).find('li.disabled a').on('click', function (e) {
                e.preventDefault();
            });

        },
        _open: function (el) {
            switch (this.options.effect) {
                case 'fade':
                    $(el).fadeIn('fast');
                    break;
                case 'slide':
                    $(el).slideDown('fast');
                    break;
                default:
                    $(el).show();
            }
            this._trigger("onOpen", null, el);
        },
        _close: function (el) {
            switch (this.options.effect) {
                case 'fade':
                    $(el).fadeOut('fast');
                    break;
                case 'slide':
                    $(el).slideUp('fast');
                    break;
                default:
                    $(el).hide();
            }
            this._trigger("onClose", null, el);
        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });
})(jQuery);
(function ($) {
    $.widget("metro.pullmenu", {
        version: "1.0.0",
        options: {
        },
        _create: function () {
            var that = this,
                    element = this.element;

            var menu = (element.data("relation") != undefined) ? element.data("relation") : element.parent().children(".element-menu, .horizontal-menu");

            addTouchEvents(element[0]);

            element.on("click", function (e) {
                menu.slideToggle();
                element.parent().toggleClass("opened");
                e.preventDefault();
                e.stopPropagation();
            });

        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);

$(window).resize(function () {
    var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (device_width > 1200) {
        $(".sidebar .element-menu").show();
    } else {
        $(".sidebar .element-menu").hide();
    }
});

(function ($) {
    /*
     * Init or ReInit components
     * */
    $.Metro = function (params) {
        params = $.extend({
        }, params);
    };
    $.Metro.initTabs = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=tab-control]').tabcontrol();
        } else {
            $('[data-role=tab-control]').tabcontrol();
        }
    };
    $.Metro.initHints = function (a) {
        void 0 != a ? $(a).find("[data-hint]").hint() : $("[data-hint]").hint()
    };
    $.Metro.initAccordions = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=accordion]').accordion();
        } else {
            $('[data-role=accordion]').accordion();
        }
    };
    $.Metro.initPanels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=panel]').panel();
        } else {
            $('[data-role=panel]').panel();
        }
    };
    $.Metro.initCarousels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=carousel]').carousel();
        } else {
            $('[data-role=carousel]').carousel();
        }
    };
    $.Metro.initCarousels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=carousel]').carousel();
        } else {
            $('[data-role=carousel]').carousel();
        }
    };
    $.Metro.initDropdowns = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=dropdown]').dropdown();
        } else {
            $('[data-role=dropdown]').dropdown();
        }
    };
    $.Metro.initPulls = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=pull-menu], .pull-menu').pullmenu();
        } else {
            $('[data-role=pull-menu], .pull-menu').pullmenu();
        }
    };

    $.Metro.initAll = function (area) {
        $.Metro.initTabs(area);
        //$.Metro.initHints(area);
        $.Metro.initPanels(area);
        $.Metro.initCarousels(area);
        $.Metro.initPulls(area);
        $.Metro.initDropdowns(area);
        //$.Metro.initAccordions(area);

    }
})(jQuery);

METRO_AUTO_REINIT = false;
$(function () {
    if (METRO_AUTO_REINIT) {
        //$(".metro").bind('DOMSubtreeModified', function(){            $.Metro.initAll();        });
        var originalDOM = $('.metro').html(),
                actualDOM;
        setInterval(function () {
            actualDOM = $('.metro').html();
            if (originalDOM !== actualDOM) {
                originalDOM = actualDOM;
                $.Metro.initAll();
            }
        }, 500);
    }
});
//</editor-fold>
//#endregion 

//#region perfect-scrollbar
//<editor-fold  defaultstate="collapsed" desc="perfect-scrollbar">
/* perfect-scrollbar - v0.5.8
 * http://noraesae.github.com/perfect-scrollbar/
 * Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
})(function (e) {
    "use strict";
    function t(e) {
        return "string" == typeof e ? parseInt(e, 10) : ~~e
    }
    var o = { wheelSpeed: 1, wheelPropagation: !1, swipePropagation: !1, minScrollbarLength: null, maxScrollbarLength: null, useBothWheelAxes: !1, useKeyboard: !0, suppressScrollX: !1, suppressScrollY: !1, scrollXMarginOffset: 0, scrollYMarginOffset: 0, includePadding: !1 }, n = 0, r = function () {
        var e = n++;
        return function (t) {
            var o = ".perfect-scrollbar-" + e;
            return t === void 0 ? o : t + o
        }
    }, l = "WebkitAppearance" in document.documentElement.style;
    e.fn.perfectScrollbar = function (n, i) {
        return this.each(function () {
            function a(e, o) {
                var n = e + o, r = D - R;
                j = 0 > n ? 0 : n > r ? r : n;
                var l = t(j * (Y - D) / (D - R));
                M.scrollTop(l)
            }
            function s(e, o) {
                var n = e + o, r = E - k;
                W = 0 > n ? 0 : n > r ? r : n;
                var l = t(W * (C - E) / (E - k));
                M.scrollLeft(l)
            }
            function c(e) {
                return P.minScrollbarLength && (e = Math.max(e, P.minScrollbarLength)), P.maxScrollbarLength && (e = Math.min(e, P.maxScrollbarLength)), e
            }
            function u() {
                var e = { width: I };
                e.left = B ? M.scrollLeft() + E - C : M.scrollLeft(), N ? e.bottom = _ - M.scrollTop() : e.top = Q + M.scrollTop(), H.css(e);
                var t = { top: M.scrollTop(), height: A };
                Z ? t.right = B ? C - M.scrollLeft() - V - J.outerWidth() : V - M.scrollLeft() : t.left = B ? M.scrollLeft() + 2 * E - C - $ - J.outerWidth() : $ + M.scrollLeft(), G.css(t), U.css({ left: W, width: k - z }), J.css({ top: j, height: R - et })
            }
            function d() {
                M.removeClass("ps-active-x"), M.removeClass("ps-active-y"), E = P.includePadding ? M.innerWidth() : M.width(), D = P.includePadding ? M.innerHeight() : M.height(), C = M.prop("scrollWidth"), Y = M.prop("scrollHeight"), !P.suppressScrollX && C > E + P.scrollXMarginOffset ? (X = !0, I = E - F, k = c(t(I * E / C)), W = t(M.scrollLeft() * (I - k) / (C - E))) : (X = !1, k = 0, W = 0, M.scrollLeft(0)), !P.suppressScrollY && Y > D + P.scrollYMarginOffset ? (O = !0, A = D - tt, R = c(t(A * D / Y)), j = t(M.scrollTop() * (A - R) / (Y - D))) : (O = !1, R = 0, j = 0, M.scrollTop(0)), W >= I - k && (W = I - k), j >= A - R && (j = A - R), u(), X && M.addClass("ps-active-x"), O && M.addClass("ps-active-y")
            }
            function p() {
                var t, o, n = function (e) {
                    s(t, e.pageX - o), d(), e.stopPropagation(), e.preventDefault()
                }, r = function () {
                    H.removeClass("in-scrolling"), e(q).unbind(K("mousemove"), n)
                };
                U.bind(K("mousedown"), function (l) {
                    o = l.pageX, t = U.position().left, H.addClass("in-scrolling"), e(q).bind(K("mousemove"), n), e(q).one(K("mouseup"), r), l.stopPropagation(), l.preventDefault()
                }), t = o = null
            }
            function f() {
                var t, o, n = function (e) {
                    a(t, e.pageY - o), d(), e.stopPropagation(), e.preventDefault()
                }, r = function () {
                    G.removeClass("in-scrolling"), e(q).unbind(K("mousemove"), n)
                };
                J.bind(K("mousedown"), function (l) {
                    o = l.pageY, t = J.position().top, G.addClass("in-scrolling"), e(q).bind(K("mousemove"), n), e(q).one(K("mouseup"), r), l.stopPropagation(), l.preventDefault()
                }), t = o = null
            }
            function v(e, t) {
                var o = M.scrollTop();
                if (0 === e) {
                    if (!O)
                        return !1;
                    if (0 === o && t > 0 || o >= Y - D && 0 > t)
                        return !P.wheelPropagation
                }
                var n = M.scrollLeft();
                if (0 === t) {
                    if (!X)
                        return !1;
                    if (0 === n && 0 > e || n >= C - E && e > 0)
                        return !P.wheelPropagation
                }
                return !0
            }
            function g(e, t) {
                var o = M.scrollTop(), n = M.scrollLeft(), r = Math.abs(e), l = Math.abs(t);
                if (l > r) {
                    if (0 > t && o === Y - D || t > 0 && 0 === o)
                        return !P.swipePropagation
                } else if (r > l && (0 > e && n === C - E || e > 0 && 0 === n))
                    return !P.swipePropagation;
                return !0
            }
            function b() {
                function e(e) {
                    var t = e.originalEvent.deltaX, o = -1 * e.originalEvent.deltaY;
                    return (t === void 0 || o === void 0) && (t = -1 * e.originalEvent.wheelDeltaX / 6, o = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, o *= 10), t !== t && o !== o && (t = 0, o = e.originalEvent.wheelDelta), [t, o]
                }
                function t(t) {
                    if (l || !(M.find("select:focus").length > 0)) {
                        var n = e(t), r = n[0], i = n[1];
                        o = !1, P.useBothWheelAxes ? O && !X ? (i ? M.scrollTop(M.scrollTop() - i * P.wheelSpeed) : M.scrollTop(M.scrollTop() + r * P.wheelSpeed), o = !0) : X && !O && (r ? M.scrollLeft(M.scrollLeft() + r * P.wheelSpeed) : M.scrollLeft(M.scrollLeft() - i * P.wheelSpeed), o = !0) : (M.scrollTop(M.scrollTop() - i * P.wheelSpeed), M.scrollLeft(M.scrollLeft() + r * P.wheelSpeed)), d(), o = o || v(r, i), o && (t.stopPropagation(), t.preventDefault())
                    }
                }
                var o = !1;
                window.onwheel !== void 0 ? M.bind(K("wheel"), t) : window.onmousewheel !== void 0 && M.bind(K("mousewheel"), t)
            }
            function h() {
                var t = !1;
                M.bind(K("mouseenter"), function () {
                    t = !0
                }), M.bind(K("mouseleave"), function () {
                    t = !1
                });
                var o = !1;
                e(q).bind(K("keydown"), function (n) {
                    if ((!n.isDefaultPrevented || !n.isDefaultPrevented()) && t) {
                        for (var r = document.activeElement ? document.activeElement : q.activeElement; r.shadowRoot;)
                            r = r.shadowRoot.activeElement;
                        if (!e(r).is(":input,[contenteditable]")) {
                            var l = 0, i = 0;
                            switch (n.which) {
                                case 37:
                                    l = -30;
                                    break;
                                case 38:
                                    i = 30;
                                    break;
                                case 39:
                                    l = 30;
                                    break;
                                case 40:
                                    i = -30;
                                    break;
                                case 33:
                                    i = 90;
                                    break;
                                case 32:
                                case 34:
                                    i = -90;
                                    break;
                                case 35:
                                    i = n.ctrlKey ? -Y : -D;
                                    break;
                                case 36:
                                    i = n.ctrlKey ? M.scrollTop() : D;
                                    break;
                                default:
                                    return
                            }
                            M.scrollTop(M.scrollTop() - i), M.scrollLeft(M.scrollLeft() + l), o = v(l, i), o && n.preventDefault()
                        }
                    }
                })
            }
            function w() {
                function e(e) {
                    e.stopPropagation()
                }
                J.bind(K("click"), e), G.bind(K("click"), function (e) {
                    var o = t(R / 2), n = e.pageY - G.offset().top - o, r = D - R, l = n / r;
                    0 > l ? l = 0 : l > 1 && (l = 1), M.scrollTop((Y - D) * l)
                }), U.bind(K("click"), e), H.bind(K("click"), function (e) {
                    var o = t(k / 2), n = e.pageX - H.offset().left - o, r = E - k, l = n / r;
                    0 > l ? l = 0 : l > 1 && (l = 1), M.scrollLeft((C - E) * l)
                })
            }
            function m() {
                function t() {
                    var e = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : { rangeCount: 0 };
                    return 0 === e.rangeCount ? null : e.getRangeAt(0).commonAncestorContainer
                }
                function o() {
                    r || (r = setInterval(function () {
                        return x() ? (M.scrollTop(M.scrollTop() + l.top), M.scrollLeft(M.scrollLeft() + l.left), d(), void 0) : (clearInterval(r), void 0)
                    }, 50))
                }
                function n() {
                    r && (clearInterval(r), r = null), H.removeClass("in-scrolling"), G.removeClass("in-scrolling")
                }
                var r = null, l = { top: 0, left: 0 }, i = !1;
                e(q).bind(K("selectionchange"), function () {
                    e.contains(M[0], t()) ? i = !0 : (i = !1, n())
                }), e(window).bind(K("mouseup"), function () {
                    i && (i = !1, n())
                }), e(window).bind(K("mousemove"), function (e) {
                    if (i) {
                        var t = { x: e.pageX, y: e.pageY }, r = M.offset(), a = { left: r.left, right: r.left + M.outerWidth(), top: r.top, bottom: r.top + M.outerHeight() };
                        t.x < a.left + 3 ? (l.left = -5, H.addClass("in-scrolling")) : t.x > a.right - 3 ? (l.left = 5, H.addClass("in-scrolling")) : l.left = 0, t.y < a.top + 3 ? (l.top = 5 > a.top + 3 - t.y ? -5 : -20, G.addClass("in-scrolling")) : t.y > a.bottom - 3 ? (l.top = 5 > t.y - a.bottom + 3 ? 5 : 20, G.addClass("in-scrolling")) : l.top = 0, 0 === l.top && 0 === l.left ? n() : o()
                    }
                })
            }
            function T(t, o) {
                function n(e, t) {
                    M.scrollTop(M.scrollTop() - t), M.scrollLeft(M.scrollLeft() - e), d()
                }
                function r() {
                    h = !0
                }
                function l() {
                    h = !1
                }
                function i(e) {
                    return e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e.originalEvent
                }
                function a(e) {
                    var t = e.originalEvent;
                    return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }
                function s(e) {
                    if (a(e)) {
                        w = !0;
                        var t = i(e);
                        p.pageX = t.pageX, p.pageY = t.pageY, f = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                    }
                }
                function c(e) {
                    if (!h && w && a(e)) {
                        var t = i(e), o = { pageX: t.pageX, pageY: t.pageY }, r = o.pageX - p.pageX, l = o.pageY - p.pageY;
                        n(r, l), p = o;
                        var s = (new Date).getTime(), c = s - f;
                        c > 0 && (v.x = r / c, v.y = l / c, f = s), g(r, l) && (e.stopPropagation(), e.preventDefault())
                    }
                }
                function u() {
                    !h && w && (w = !1, clearInterval(b), b = setInterval(function () {
                        return x() ? .01 > Math.abs(v.x) && .01 > Math.abs(v.y) ? (clearInterval(b), void 0) : (n(30 * v.x, 30 * v.y), v.x *= .8, v.y *= .8, void 0) : (clearInterval(b), void 0)
                    }, 10))
                }
                var p = {}, f = 0, v = {}, b = null, h = !1, w = !1;
                t && (e(window).bind(K("touchstart"), r), e(window).bind(K("touchend"), l), M.bind(K("touchstart"), s), M.bind(K("touchmove"), c), M.bind(K("touchend"), u)), o && (window.PointerEvent ? (e(window).bind(K("pointerdown"), r), e(window).bind(K("pointerup"), l), M.bind(K("pointerdown"), s), M.bind(K("pointermove"), c), M.bind(K("pointerup"), u)) : window.MSPointerEvent && (e(window).bind(K("MSPointerDown"), r), e(window).bind(K("MSPointerUp"), l), M.bind(K("MSPointerDown"), s), M.bind(K("MSPointerMove"), c), M.bind(K("MSPointerUp"), u)))
            }
            function y() {
                M.bind(K("scroll"), function () {
                    d()
                })
            }
            function L() {
                M.unbind(K()), e(window).unbind(K()), e(q).unbind(K()), M.data("perfect-scrollbar", null), M.data("perfect-scrollbar-update", null), M.data("perfect-scrollbar-destroy", null), U.remove(), J.remove(), H.remove(), G.remove(), M = H = G = U = J = X = O = E = D = C = Y = k = W = _ = N = Q = R = j = V = Z = $ = B = K = null
            }
            function S() {
                d(), y(), p(), f(), w(), m(), b(), (ot || nt) && T(ot, nt), P.useKeyboard && h(), M.data("perfect-scrollbar", M), M.data("perfect-scrollbar-update", d), M.data("perfect-scrollbar-destroy", L)
            }
            var P = e.extend(!0, {}, o), M = e(this), x = function () {
                return !!M
            };
            if ("object" == typeof n ? e.extend(!0, P, n) : i = n, "update" === i)
                return M.data("perfect-scrollbar-update") && M.data("perfect-scrollbar-update")(), M;
            if ("destroy" === i)
                return M.data("perfect-scrollbar-destroy") && M.data("perfect-scrollbar-destroy")(), M;
            if (M.data("perfect-scrollbar"))
                return M.data("perfect-scrollbar");
            M.addClass("ps-container");
            var E, D, C, Y, X, k, W, I, O, R, j, A, B = "rtl" === M.css("direction"), K = r(), q = this.ownerDocument || document, H = e("<div class='ps-scrollbar-x-rail'>").appendTo(M), U = e("<div class='ps-scrollbar-x'>").appendTo(H), _ = t(H.css("bottom")), N = _ === _, Q = N ? null : t(H.css("top")), z = t(H.css("borderLeftWidth")) + t(H.css("borderRightWidth")), F = t(H.css("marginLeft")) + t(H.css("marginRight")), G = e("<div class='ps-scrollbar-y-rail'>").appendTo(M), J = e("<div class='ps-scrollbar-y'>").appendTo(G), V = t(G.css("right")), Z = V === V, $ = Z ? null : t(G.css("left")), et = t(G.css("borderTopWidth")) + t(G.css("borderBottomWidth")), tt = t(G.css("marginTop")) + t(G.css("marginBottom")), ot = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, nt = null !== window.navigator.msMaxTouchPoints;
            return S(), M
        })
    }
});
//</editor-fold>
//#endregion 

//#region viewportChecker
//<editor-fold  defaultstate="collapsed" desc="Scroll Spy, current:viewportChecker">

/*
 Version 1.5.0
 The MIT License (MIT)
 
 Copyright (c) 2014 Dirk Groenen
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 */
(function ($) {
    $.fn.viewportChecker = function (useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            repeat: false, fin: false,
            checkElements: ''
        };
        $.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this;
        var windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');

        options.checkElements = function () {
            var $obj = $($elem);
            // If class already exists; quit
            if (options.find) {
                return;
            }
            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            // define the top position of the element and include the offset which makes is appear earlier or later
            var elemTop = (!options.scrollHorizontal) ? Math.round($obj.offset().top) + options.offset : Math.round($obj.offset().left) + options.offset,
                    elemBottom = elemTop + ($obj.height());
            // Add class if in viewport
            if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                $obj.addClass(options.classToAdd);
                options.find = true;
                $(window).unbind("load scroll touchmove", options.checkElements);
                $(window).unbind("resize", options.resize);

                setTimeout(function () {
                    $obj.removeClass(options.classToAdd + ' oculto');
                    options = options.checkElements = this.checkElements = $elem = windowSize = scrollElem = null;
                }, 1000);


            }
            viewportTop = viewportBottom = elemTop = elemBottom = null;

        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", options.checkElements);
        // On resize change the height var
        $(window).bind("resize", options.resize);
        options.resize = function (e) { windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth; }
        //$(window).resize(function (e) {
        //    windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        //});
        // trigger inital check if elements already visible
        options.checkElements();
        return this;
    };
})(jQuery);

(function ($) {
    $.fn.slideCheck = function (useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'active',
            offset: 200,
            repeat: true
        };
        //$.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this,
                windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        this.checkSlides = function () {

            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            $elem.each(function () {
                var $obj = $(this);

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round($obj.offset().top) + options.offset;
                elemBottom = elemTop + ($obj.height());
                elemBottom -= (options.offset * 2);

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {

                    //$obj.addClass(options.classToAdd);
                    $('a.toSlide').parent().removeClass("current");
                    $('#navigation li a[data-slide="' + $obj.data("slide") + '"]').parent().addClass('current');
                    $obj = elemTop = elemBottom = null
                    return;
                    // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(options.classToAdd)) {
                    //$obj.removeClass(options.classToAdd);
                    $obj = elemTop = elemBottom = null
                }
            });
        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkSlides);
        // On resize change the height var
        $(window).resize(function (e) {
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        // trigger inital check if elements already visible
        this.checkSlides();
        return this;
    };
})(jQuery);


if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this)

        this.$body = $('body')
        this.$scrollElement = $(element).is('body') ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0

        this.$scrollElement.on('scroll.bs.scrollspy', process)
        this.refresh()
        this.process()
    }

    ScrollSpy.VERSION = '3.3.1'

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }

    ScrollSpy.prototype.refresh = function () {
        var offsetMethod = 'offset'
        var offsetBase = 0

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }

        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()

        var self = this

        this.$body
                .find(this.selector)
                .map(function () {
                    var $el = $(this)
                    var href = $el.data('target') || $el.attr('href')
                    var $href = /^#./.test(href) && $(href)

                    return ($href
                            && $href.length
                            && $href.is(':visible')
                            && [[$href[offsetMethod]().top + offsetBase, href]]) || null
                })
                .sort(function (a, b) {
                    return a[0] - b[0]
                })
                .each(function () {
                    self.offsets.push(this[0])
                    self.targets.push(this[1])
                })
    }

    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
                    && scrollTop >= offsets[i]
                    && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
                    && this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target

        this.clear()

        var selector = this.selector +
                '[data-target="' + target + '"],' +
                this.selector + '[href="' + target + '"]'

        var active = $(selector)
                .parents('li')
                .addClass('current')

        if (active.parent('.dropdown-menu').length) {
            active = active
                    .closest('li.dropdown')
                    .addClass('current')
        }

        active.trigger('activate.bs.scrollspy')
    }

    ScrollSpy.prototype.clear = function () {
        $(this.selector)
                .parentsUntil(this.options.target, '.current')
                .removeClass('current')
    }


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option

            if (!data)
                $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }

    var old = $.fn.scrollspy

    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old
        return this
    }


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })

}(jQuery);


/*function setScrollSpy(){var b=[{elements:$$("#filmBollo1, #filmBollo2,\t#firstBollo1, #firstBollo2, #firstBollo3, #secondBollo1, #secondBollo2,\t#thirdBollo1, #thirdBollo2, #wallpaperBollonzo,\t#newsBolloAnna, #newsBolloFb, #newsBolloTw, #newsBolloStatusMini, #newsBolloStatusLittle, #newsBolloStatus, #footerBollonzo, section > header > p"),initProps:{transform:["scale(0)"]},endProps:{transform:["scale(1)"]},animation:{duration:300,transition:Fx.Transitions.Back.easeOut}},{elements:$("wallpaperiMac"),
 initProps:{"background-position":"-507px 0",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("#wallpaperiPad, #wallpaperiPhone"),initProps:{"background-position":"0 244px",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("section > header > hr, section > header > p > span"),initProps:{opacity:0},endProps:"auto"},{elements:$$("section > header > h2 > span, section > header > h3 > span"),
 initProps:{"margin-top":-44},endProps:"auto"},{elements:$$("#biografia > section > section > header, #biografia > section > section > hr, #biografia > section > section > article, #biografia > header > h4, #biografia > header > h5"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#filmografia > section > section > *"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#immagini > nav > a"),initProps:{opacity:0,"margin-top":-200},endProps:"auto"},{elements:$("tendinaFooterSx"),initProps:{left:0},
 endProps:{left:-763}},{elements:$("tendinaFooterDx"),initProps:{left:763},endProps:{left:1526}}];(new ScrollSpyIt({offset:150,delay:300,config:b})).initScrollSpy()}*/

//</editor-fold>
//#endregion 

//#region bannerCircle
//<editor-fold defaultstate="collapsed" desc="bannerCircle">
(function ($) {
    $.widget("metro.bannerCircle", {
        version: "1.0.0",
        options: {
            auto: true,
            period: 8000,
            duration: 1000,
            effect: 'fade', // slide, fade, switch, slowdown
            direction: 'left',
            stop: false
        },
        _currentIndex: 0,
        _interval: 0,
        _caption: '',
        _create: function () {

            var that = this, element = this.element;

            // Return early if this element already has a plugin instance
            if (element.data('bannerCircle')) {
                return element.data('bannerCircle');
            }

            // Store plugin object in this element's data
            element.data('bannerCircle', this);


            var _slides = $(element.find(".oculto").find(".img"));

            _caption = $(element.find(".row-cap .cap"));

            //if (_slides.length <= 1)
            //    return;
            _slides = null;

            // preload all images
            element.imagesLoaded(function () {
                //alert("images loaded");
                that._changeSlide('next');
                setTimeout(function () {
                    // alert("remove spinner");
                    element.find(".spinner").remove();
                }, 500);

            });
            ///*             

            //if (this.options.auto)
            //    this._autoStart();
            //*/

        },
        _autoStart: function () {
            this._changeSlide('next');
            var that = this;
            if (!isMobileBrowser())
                this._interval = setInterval(function () {
                    //if (that.options.direction == 'left') {
                    //    that._changeSlide('next')
                    //} else {
                    //    that._changeSlide('prior')
                    //}
                    that._changeSlide('next');
                }, this.options.period);
        },
        _changeSlide: function (direction) {
            var _slides = $(this.element.find(".oculto").find(".img"));
            var _items = $(this.element.find(".item"));

            var that = this;
            if (that.options.stop)
                return;

            if (direction == undefined)
                direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0)
                    this._currentIndex = _slides.length - 1;


            } else if (direction === 'next') {
                var ix = this._currentIndex;

                _caption.html($($(_slides[ix]).find(".caption")).html());

                _items.each(function () {
                    that._setContent($(this), $(_slides[ix]), ix);
                    ix += 1;
                    if (ix >= _slides.length)
                        ix = 0;
                });

                this._currentIndex += 1;
                if (this._currentIndex >= _slides.length)
                    this._currentIndex = 0;

            }
            _slides = _items = that = direction = ix = null;
        },
        _setContent: function (item1, slide1, ix1) {
            (function (item, slide, ix) {
                var a = $(item.find('.banx'));
                var b = $(slide.find('img'));
                //a.css({ "background-image": 'url(' + b.attr("src") + ')' }).hide().delay(ix * 500).fadeIn();
                // a.css({'background-image':'url(' + b.attr('src') + ')'});

                //a.attr('src', b.attr('src')); a.fadeOut().delay(ix * 500).fadeIn();
                setTimeout(function () {
                    a.fadeOut(150, function () {
                        var u = $(this);
                        u.attr('src', b.attr('src'));
                        u.fadeIn(150);
                        //u = null;
                        b = null;
                        slide = item = ix = a = null;
                    });
                }, ix * 200);
                //a.delay(ix * 500)


                //a.element.styyle.backgroundImage = 'url(' + b.attr('src') + ')';
                // b = null;
            })(item1, slide1, ix1);
            slide1 = item1 = ix1 = null;
            // 

        },
        _destroy: function () {

        },
        start: function () {
            this.options.stop = false;
            this._autoStart();
        },
        stop: function () {
            this.options.stop = true;
            clearInterval(this._interval);
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
            this._autoStart();
        }
    })
})(jQuery);
$(function () {
    $.Metro.initBannerCircle = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=bannerCircle]').bannerCircle();
        } else {
            $('[data-role=bannerCircle]').bannerCircle();
        }
    };
    // $.Metro.initBannerCircle();
});
//</editor-fold>
//#endregion 

//#region clubes Full
//<editor-fold defaultstate="collpased" desc="clubes Full">
var ClubFull = (function () {
    var $items = $('.clubWrap li,.direcWrap li'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }
    var reg = /.*\/.*\//g;
    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay');

            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                // $('.carreraWrap').removeClass("oculto visible animated bounceInRight");
                if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".full-content"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        //url: 'http://181.113.57.115/ajax?artID=11841&groupID=10181',
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.append(sss.html());
                            sss = data = null;
                            $.Metro.initSidebars($item);
                            $.Metro.initBannerCircle(qq);
                            sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                        },
                        error: function () {
                            console.log("Ajax no activo, ha ocurrido un error. club/direc");
                            $.Metro.initSidebars($item);
                            $.Metro.initBannerCircle(qq);
                            sidebarUpdate($item);

                            initNotiAndvents($item);

                            $item.data('ajaxLoad', true);
                        }
                    });

                }
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.index();
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                if ($item.data('ajaxLoad')) {
                    sidebarUpdate($item);
                }

            });

            $close.on('click', function () {
                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        //$overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }
                //sidebar update
                var sidebar = $item.find('[data-role=sidebar]'),
                        tabs = $(sidebar.children("nav")).find("a"),
                        frames = $(sidebar.children(".full-content")).children(".slic");

                frames.hide();
                //apago bannerCircle
                if (!isMobileBrowser()) {
                    /*frames.find(".homeslider.on").each(function() {
                     $(this).data('nivoslider').stop();
                     });*/

                    frames.find(".bannerCircle").each(function () {
                        $(this).data('bannerCircle').stop();
                    });
                }
                sidebar = tabs = frames = null;
                return false;
            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }
    function sidebarUpdate(itemx) {
        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                frames = $(sidebar.children(".full-content")).children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();
        sidebar = tabs = null;

        setTimeout(function () {
            if (!isMobileBrowser()) {
                /*$(frames.get(0)).find(".homeslider.on").each(function() {
                 $(this).data('nivoslider').start();
                 });*/
                $(frames.get(0)).find(".bannerCircle").each(function () {
                    $(this).data('bannerCircle').start();
                });
                frames = sidebar = tabs = null;
            }
        }, 1000);
    }
    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    return { init: init };
});//();
//</editor-fold>
//#endregion 

//#region centros investigacion no funca
var centrosInvestigacionz = (function () {

    $items = $('.centrosWrap > li'),
    // current expanded item's index
    current = -1,
    // position (top) of the expanded item
    // used to know if the preview will expand in a different row
    previewPos = -1,
    // extra amount of pixels to scroll the window
    scrollExtra = 0,
    // extra margin when expanded (between preview overlay and the next items)
    marginExpanded = 10,
    //$window = $(window), winsize = getWinSize(),
    $window = $(window), winsize = getWinSize(),
    $body = $('BODY'),
    // transitionend events
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    // support for csstransitions
    support = Modernizr.csstransitions,
    // default settings
    settings = {
        minHeight: 500,
        speed: 350,
        easing: 'ease',
        showVisitButton: true
    };

    function init(config) {

        // the settings..
        settings = $.extend(true, {}, settings, config);
        // save item�s size and offset
        saveItemInfo(true);
        // get window�s size
        getWinSize();
        // initialize some events
        initEvents();

    }


    // saves the item�s offset top and height (if saveheight is true)
    function saveItemInfo(saveheight) {
        $items.each(function () {
            var $item = $(this);
            $item.data('offsetTop', $item.offset().top);
            if (saveheight) {
                $item.data('height', $item.height());
            }
        });
    }

    function initEvents() {

        // when clicking an item, show the preview with the item�s info and large image.
        // close the item if already expanded.
        // also close if clicking on the item�s cross
        initItemsEvents($items);

        // on window resize get the window�s size again
        // reset some values..
        $window.on('debouncedresize', function () {

            scrollExtra = 0;
            previewPos = -1;
            // save item�s offset
            saveItemInfo();
            getWinSize();
            var preview = $.data(this, 'preview');
            if (typeof preview != 'undefined') {
                hidePreview();
            }

        });

    }

    function initItemsEvents($items) {
        $items.on('click', 'span.og-close', function () {
            hidePreview();
            return false;
        }).children('a').on('click', function (e) {

            var $item = $(this).parent();
            // check if item already opened
            current === $item.index() ? hidePreview() : showPreview($item);
            return false;

        });
    }

    function getWinSize() {
        winsize = { width: $window.width(), height: $window.height() };
    }

    function showPreview($item) {

        var preview = $.data(this, 'preview'),
			// item�s offset top
			position = $item.data('offsetTop');

        scrollExtra = 0;

        // if a preview exists and previewPos is different (different row) from item�s top then close it
        if (typeof preview != 'undefined') {

            // not in the same row
            if (previewPos !== position) {
                // if position > previewPos then we need to take te current preview�s height in consideration when scrolling the window
                if (position > previewPos) {
                    scrollExtra = preview.height;
                }
                hidePreview();
            }
                // same row
            else {
                preview.update($item);
                //preview.open();
                return false;
            }

        }

        // update previewPos
        previewPos = position;
        // initialize new preview for the clicked item
        preview = $.data(this, 'preview', new Preview($item));
        // expand preview overlay
        // preview.open();

    }

    function hidePreview() {
        current = -1;
        var preview = $.data(this, 'preview');
        preview.close();
        $.removeData(this, 'preview');
    }

    // the preview obj / overlay
    function Preview($item) {
        this.$item = $item;
        this.expandedIdx = this.$item.index();
        this.create();
        this.update();
    }

    Preview.prototype = {
        create: function () {
            this.$previewEl = this.$item.find('.og-expander');
            if (support) {
                this.setTransition();
            }
        },
        update: function ($item) {

            if ($item) {
                this.$item = $item;
            }
            var oldcurrent = current;
            var oldprev = this.$previewEl;
            // update current value
            current = this.$item.index();
            this.expandedIdx = current;
            this.$previewEl = this.$item.find('.og-expander');
            if (support) {
                this.setTransition();
            }

            if (!this.$item.data('ajaxLoad')) {
                var qq = $(this.$item.find(".og-details"));
                var qq3 = this.$item;
                $.ajax({
                    type: "get",
                    url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                    success: function (data) {
                        var sss = $('#ajax-dcm', data);
                        qq.html(sss.html());
                        sss = data = null;
                        //init componentets
                        $.Metro.initSidebars(qq3);
                        $.Metro.initPagination(qq3);
                        initNotiAndvents(qq3);
                        sidebarUpdate(qq3);
                        //set loaded
                        qq3.data('ajaxLoad', true);
                        qq3 = null;
                    },
                    error: function () {
                        console.log("error ajax on centro investigaci�n");
                        qq3.data('ajaxLoad', true);
                        //init componentets
                        $.Metro.initSidebars(qq3);
                        $.Metro.initPagination(qq3);
                        initNotiAndvents(qq3);
                        sidebarUpdate(qq3);
                        qq3 = null;
                    }
                });
            }

            if (this.$item.data('ajaxLoad')) {
                sidebarUpdate(this.$item);
            }

            this.open();
            // if already expanded remove class "og-expanded" from current item and add it to new item
            setTimeout($.proxy(function () {
                if (oldcurrent !== -1) {
                    var $currentItem = $items.eq(oldcurrent);
                    $currentItem.removeClass('og-expanded');

                    oldprev.css('height', 0);
                    $currentItem.css('height', $currentItem.data('height'));
                    oldprev = null;

                }
            }, this), 150);

        },
        open: function () {

            setTimeout($.proxy(function () {
                // set the height for the preview and the item
                this.setHeights();
                // scroll to position the preview in the right place
                this.positionPreview();
            }, this), 25);

        },
        close: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        $(this).off(transEndEventName);
				    }
				    self.$item.removeClass('og-expanded');
				    //added
				    var position = self.$item.data('offsetTop'),
                        scrollVal = position - 180;
				    $body.animate({ scrollTop: scrollVal }, settings.speed);

				    //self.$previewEl.remove();
				};

            setTimeout($.proxy(function () {

                this.$previewEl.css('height', 0);
                // the current expanded item (might be different from this.$item)
                var $expandedItem = $items.eq(this.expandedIdx);
                $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);

                if (!support) {
                    onEndFn.call();
                }

            }, this), 25);

            return false;

        },
        calcHeight: function () {

            //var heightPreview = winsize.height - 80,// - this.$item.data('height') - marginExpanded,
            var heightPreview = winsize.height;
            itemHeight = heightPreview + this.$item.data('height') + 30;

            //if (heightPreview < settings.minHeight) {
            //    heightPreview = settings.minHeight;
            //    itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
            //}

            this.height = heightPreview;
            this.itemHeight = itemHeight;

        },
        setHeights: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        self.$item.off(transEndEventName);
				    }
				    self.$item.addClass('og-expanded');
				};

            this.calcHeight();
            this.$previewEl.css('height', this.height);
            this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);

            if (!support) {
                onEndFn.call();
            }

        },
        positionPreview: function () {

            // scroll page
            // case 1 : preview height + item height fits in window�s height
            // case 2 : preview height + item height does not fit in window�s height and preview height is smaller than window�s height
            // case 3 : preview height + item height does not fit in window�s height and preview height is bigger than window�s height
            var position = this.$item.data('offsetTop'),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				//scrollVal = this.height + this.$item.data('height') + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - (winsize.height - this.height) : previewOffsetT;
               // scrollVal = position + 20;
               scrollVal = $(this.$item.find(".og-details")).offset().top - 50;
            $body.animate({ scrollTop: scrollVal }, settings.speed);

        },
        setTransition: function () {
            this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
            this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
        },
        getEl: function () {
            return this.$previewEl;
        }

    }
    function sidebarUpdate(itemx) {

        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                full_viewx = $(sidebar.children(".full-content")),
                frames = full_viewx.children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();

        var cssx = $(tabs.get(1)).css("background-color");

        sidebar.css("background-color", cssx);
        full_viewx.css("background-color", cssx);


        sidebar = full_viewx = tabs = cssx = null;

    }
    function initNotiAndvents(itemx) {
        var notiWrap = itemx.find('.noticiasWrap'),
            notiViewer = notiWrap.find('.noti-viewer'),
            noti_items = notiWrap.find('.noti-item'),

            eventWrap = itemx.find('.eventosWrap'),
            event_items = eventWrap.find('.item-evento');


        notiWrap.find('[data-role=sharex]').each(function () {
            var that = $(this);
            fixedUrls(that);
            that = null;
        });

        //init notis
        noti_items.each(function () {
            var that = $(this);
            that.click(function () {
                var that2 = $(this);
                notiViewer.fadeOut(function () {
                    notiViewer.html(that2.find('.oculto').html()).fadeIn();
                    that2 = null;
                });

            });
            that = null;
        });
        notiViewer.html($(noti_items.get(0)).find('.oculto').html());
        //init events
        event_items.each(function () {
            var that = $(this), openclose = that.find('a.fg-yellow'),
                openx = $(openclose.get(0)),
                closex = $(openclose.get(1));

            openx.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", true);
                that.addClass("active");
                event_desc.slideToggle();
                event_desc = null;
                return false;
            });
            closex.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", false);

                event_desc.slideToggle(function () {
                    that.removeClass("active");
                });
                event_desc = null;
                return false;
            });

            openx = closex = null;
        });

        noti_items = eventWrap = event_items = notiWrap = null;
    }
    return {
        init: init
    };

});//();
//#endregion

//#region nucleo de investigadores

//Desplegar Noticias Especiales
function initNotiEspecial() {

    $('.noticias .noti').slideUp();
    $('.noticias .tabla li').on('click', function () {
        var $panel = $(this).closest('.noticias');
        if ($(this).hasClass('activado')) {
            $('.noticias .tabla li').removeClass('activado');
            $panel.find('.noti.activado').slideUp(500);
            return;
        }

        $panel.find('.tabla li.activado').removeClass('activado');
        $(this).addClass('activado');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.noti').slideUp(500, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('activado');

            $('#' + panelToShow).slideDown(500, function () {
                $(this).addClass('activado');
            });
        }
    });
}

//#endregion

//#region centros investigaci�n
var centrosInvestigacion = (function () {

    var $items = $('.centrosWrap > li'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }
    var reg = /.*\/.*\//g;
    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay');

            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                // $('.carreraWrap').removeClass("oculto visible animated bounceInRight");
                if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".pan-l"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        //url: 'http://181.113.57.115/ajax?artID=11841&groupID=10181',
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.html(sss.html());
                            sss = data = null;
                            $.Metro.initDropdowns($item);
                            $.Metro.initPulls($item);
                            $.Metro.initSidebars($item);
                            $.Metro.initPagination($item);
                            initNotiAndvents($item);
                            sidebarUpdate($item);
                            initBannerni();
                            initNotiEspecial();
                            $item.data('ajaxLoad', true);
                            qq = null;
                        },
                        error: function () {
                            console.log("error ajax on centro investigaci�n");
                            $item.data('ajaxLoad', true);
                            //init componentets
                            $.Metro.initDropdowns($item);
                            $.Metro.initSidebars($item);
                            $.Metro.initPagination($item);
                            initNotiAndvents($item);
                            sidebarUpdate($item);
                            initBannerni();
                            initNotiEspecial();
                            qq = null;
                        }
                    });

                }
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.index();
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                if ($item.data('ajaxLoad')) {
                    sidebarUpdate($item);
                }
                return false;

            });

            $close.on('click', function () {
                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        //$overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }
                //sidebar update
                var sidebar = $item.find('[data-role=sidebar]'),
                        tabs = $(sidebar.children("nav")).find("a"),
                        frames = $(sidebar.children(".full-content")).children(".slic");

                frames.hide();

                sidebar = tabs = frames = null;
                return false;
            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function sidebarUpdate(itemx) {

        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                full_viewx = $(sidebar.children(".full-content")),
                frames = full_viewx.children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();
        $(tabs.get(1)).parent().addClass("active");

        var cssx = $(tabs.get(1)).css("background-color");

        sidebar.css("background-color", cssx);
        full_viewx.css("background-color", cssx);

        sidebar = full_viewx = tabs = cssx = null;
    }

    function initNotiAndvents(itemx) {
        var notiWrap = itemx.find('.noticiasWrap'),
            notiViewer = notiWrap.find('.noti-viewer'),
            noti_items = notiWrap.find('.noti-item'),

            eventWrap = itemx.find('.eventosWrap'),
            event_items = eventWrap.find('.item-evento');


        notiWrap.find('[data-role=sharex]').each(function () {
            var that = $(this);
            fixedUrls(that);
            that = null;
        });

        //init notis
        noti_items.each(function () {
            var that = $(this);
            that.click(function () {
                var that2 = $(this);
                notiViewer.fadeOut(function () {
                    notiViewer.html(that2.find('.oculto').html()).fadeIn();
                    that2 = null;
                });

            });
            that = null;
        });
        notiViewer.html($(noti_items.get(0)).find('.oculto').html());

        //init events
        event_items.each(function () {
            var that = $(this), openclose = that.find('a.fg-yellow'),
                openx = $(openclose.get(0)),
                closex = $(openclose.get(1));

            openx.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", true);
                that.addClass("active");
                event_desc.slideToggle();
                event_desc = null;
                return false;
            });
            closex.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", false);
                event_desc.slideToggle(function () {
                    that.removeClass("active");
                });
                event_desc = null;
                return false;
            });

            openx = closex = null;
        });

        //init proyectos
        console.log("v 1.0.0");
        var panelWrap = $(".proyectosWrap");
        var showProyectos1 = $(".showProyectos1");
        var showProyectos2 = $(".showProyectos2");

        var panelProyecto1 = $(".panelProyecto1");
        var panelProyecto2 = $(".panelProyecto2");

        var hidex = $(".hide-proyectos");

        hidex.click(function (e) {
            panelProyecto1.removeClass("visible").fadeOut();
            panelProyecto2.removeClass("visible").fadeOut();
            panelWrap.fadeIn();
        });

        showProyectos1.click(function (e) {
            panelProyecto2.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto1.addClass("visible animated fadeInRightBig").fadeIn();
        });

        showProyectos2.click(function (e) {
            panelProyecto1.removeClass("visible animated fadeInRightBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto2.addClass("visible animated fadeInLeftBig").fadeIn();
        });

        noti_items = eventWrap = event_items = notiWrap = null;
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    function initBannerni() {
        //top banner rotator
        $('.topBanner').slick({
            centerMode: false,
            slidesToScroll: 1,
            centerPadding: '40px',
            slidesToShow: 1,
            autoplay: !debug,
            autoplaySpeed: 5000,
            prevArrow: '<button type="button" class="slick-prev hidden">Previous</button>',
            nextArrow: '<button type="button" class="slick-prev hidden">Previous</button>',
            speed: 500

        });
    }

    return { init: init };
});//();
//</editor-fold>
//#endregion 

function onloadX() {
    
    $('#kast-play').hover(function () {
        if (!$('#kast-play').hasClass('kast-playing')) {
            $('#kast-play').addClass('kast-paused');
            $(this).removeClass('fa fa-uce_radio').css({ 'font-size': '30px' });
        }
      
    })
    $('#kast-play').mouseleave(function () {
        if (!$('#kast-play').hasClass('kast-playing')) {
            $('#kast-play').removeClass('kast-paused');
            $('#kast-play').addClass('fa fa-uce_radio');
        }
        
    })

    setTimeout(function () {
        $('#logo1').addClass("animated zoomOutUp");
        $('#logo2').removeClass("oculto");
        $('#logo2').addClass("animated zoomIn");

    }, 4500);

    NoticiasFull().init();
    ClubFull().init();
    centrosInvestigacion().init();
    //ley transparencia hyperlink
    $('#ley-tras-launch').on("click", function () {
        $('#dock').trigger("click");
        $('#popup-ley-trans').trigger("click");

    });

    //featured isotope
    var $container3 = jQuery('div.isofeatured');
    if ($container3.length) {
        $container3.isotope({
            // options
            itemSelector: '.isobrick',
            layoutMode: 'masonry', masonry: {
                columnWidth: 5, isFitWidth: true
            }
        });
        $container3 = null;
    }

    jQuery(window).resize(function () {
        var $container3 = $('div.isofeatured');
        if ($container3.length) {
            $container3.isotope({
                // options
                itemSelector: '.isobrick',
                layoutMode: 'masonry', masonry: {
                    columnWidth: 5, isFitWidth: true
                }
            });
            $('.va-container').css({ width: $($('.one_col.half .featuredinner')[0]).width(), height: $('.va-container').height() });
        }
        $container3 = null;
    });

    if ($('.va-container').length) {
        $('.va-container').vaccordion({
            expandedHeight: 270,
            //animSpeed: 400,
            animOpacity: 0.7,
            visibleSlices: 4,
            accordionW: $('.va-container').outerWidth(),
            accordionH: $('.va-container').outerHeight(),
        });
    }


    $('.has-full-view').each(function () {

        var $overlay = $($(this).attr('href'));
        var $window = $(window);
        var w = $window.width(), h = $window.height();
        var winsize = { width: w, height: h };
        var $body = $('BODY');

        $(this).click(function (e) {
            e.preventDefault();
            $body.css('overflow-y', 'hidden');
            var clipPropLast = 'rect(0px ' + $window.width() + 'px ' + $window.height() + 'px 0px)';
            $overlay.css({
                clip: clipPropLast,
                opacity: 1,
                zIndex: 9999,
                pointerEvents: 'auto'
            });
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css({ width: '100%', height: '100%' });
        });
        $($overlay.find('span.rb-close')).click(function (e) {

            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css({ width: '0px', height: '0px' });
            $body.css('overflow-y', 'auto');
            clipPropLast = 'auto';
            $overlay.css({
                clip: clipPropLast,
                opacity: 0,
                pointerEvents: 'none'
            });
            $overlay.css('z-index', -1);
        });
    });
    //noticies add pagination
    var taglib = $(".noticiesWrap").parent().parent().parent().find(".taglib-page-iterator");
    if (taglib.length > 0) {
        taglib.css({ "margin-top": "30px" }).appendTo(".noticiesWrap .container2.featuredcontainer.clearfix");
        var buttons = taglib.find(".lfr-pagination-buttons li a");
        $(buttons[0]).html('<i class="fa fa-uce_anterior"></i>');
        $(buttons[1]).html('<i class="fa fa-uce_siguiente"></i>');
        $((buttons[1])).parent().before('<li><a href="' + Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'archive_noticias" target="_blank"><i class="fa fa-uce_repositorio"></i></a></li>');
        var boletinx = $('#boletinx');
        taglib.find(".lfr-pagination-buttons").before(boletinx);
        boletinx = taglib = null;
        //qq.html(qq.children());
    }
    ///*
    if (!isMobileBrowser()) {
        $('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");

        // /*
        //animated on scroll
        $(window).scroll(function () {
            var scrollPos = $(this).scrollTop();
            var elemx = $('#logo2');
            var log2 = $('#logo3');
            w2 = 230 - scrollPos
            if (w2 < 30) {
                //w2 = 30;
                if (scrollPos > 50)
                    $('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");
            } else {
                if (log2.hasClass("zoomIn")) log2.removeClass("zoomIn").addClass("zoomOut");
                elemx.css({
                    'width': w2 + "px",
                    'height': w2 + "px"
                });
            }


            scrollPos = elemx = w2 = null;

        });
        //*/

        $('.og-grid.fac img').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible scale',
                offset: 70,
                repeat: false
            });
        });

        //animate noticies
        $('.noticiesWrap .container2').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUp',
                offset: 30,
                repeat: false
            });
        });

        //animate direcWrap
        $('.direcWrap .og-grid').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated bounceInRight',
                offset: 70,
                repeat: false
            });
        });

        //animate titles
        $('.slide h1.adequate').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated boingInUp',
                offset: 80,
                repeat: false
            });
        });

        //animate club
        $('.club').each(function (i) {

            if (i < 2)
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInLeftBig',
                    offset: 60,
                    repeat: false
                });
            else if (i > 2)
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInRightBig',
                    offset: 60,
                    repeat: false
                });
            else
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInUpBig',
                    offset: 60,
                    repeat: false
                });
        });
        //animate links
        $('.contentwrap .linksWrap').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 60,
                repeat: false
            });
        });
        //animate contacto
        $('.footer .contentwrap').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 20,
                repeat: false
            });
        });
        $('.footer .contentwrap .mapax').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated bounceInRight',
                offset: 0,
                repeat: false
            });
        });

        //radio
        /*
        if (!!document.createElement('audio').canPlayType) {
            $('<audio id="radioplay" class="oculto" src="http://s3.myradiostream.com:7258/;"></audio>').appendTo('#page');
            $('#radiox').click(function (e) {
                e.preventDefault();
                var ra = $('#radioplay');
                if (ra.get(0).paused) {
                    ra.trigger("play");
                } else {
                    ra.trigger("pause");
                }
            });
        } else {
            $('#radiox').remove();
        }
        */
        // $('#radiox').remove();
        //slides check
        $('.slide').addClass("u").slideCheck({});
        /*                                                             
         $('.homeslider.on').each(function() {
         var $this = jQuery(this);
         $this.nivoSlider({effect: 'fade', slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: Math.floor(Math.random() * 10001) + 3000, startSlide: 0, directionNav: false, directionNavHide: true, controlNav: false, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: 'Prev', nextText: 'Next', randomStart: false, beforeChange: function() {
         }, afterChange: function() {
         }, slideshowEnd: function() {
         }, lastSlide: function() {
         }, afterLoad: function() {
         }});
         });
         //*/
    }
    //*/    
}

//youtube thumbail http://img.youtube.com/vi/qx89ylJyeKU/0.jpg
console.log("dcmtheme reand execute; and porlets: " + typeof Liferay.allPortletsReady + ", and body: " + $('body').length);


