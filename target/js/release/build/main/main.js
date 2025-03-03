const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
const Error$oboard$47$mocket$47$lib$46$NetworkError$46$NetworkError = { $tag: 16 };
const Error$yj$45$qin$47$regexp$46$ParseError$46$InternalParserError = { $tag: 2 };
function Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupBegin(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupBegin.prototype.$tag = 3;
function Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupEnd(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupEnd.prototype.$tag = 4;
function Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupName(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupName.prototype.$tag = 5;
function Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroupName(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroupName.prototype.$tag = 6;
function Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroup(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroup.prototype.$tag = 7;
function Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedCharClassEnd(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedCharClassEnd.prototype.$tag = 8;
function Error$yj$45$qin$47$regexp$46$ParseError$46$UnspecifiedLoopTarget(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$UnspecifiedLoopTarget.prototype.$tag = 9;
function Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop.prototype.$tag = 10;
function Error$yj$45$qin$47$regexp$46$ParseError$46$LoopCountOutOfRange(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$LoopCountOutOfRange.prototype.$tag = 11;
function Error$yj$45$qin$47$regexp$46$ParseError$46$LoopMaxCountSmallerThanMinCount(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$LoopMaxCountSmallerThanMinCount.prototype.$tag = 12;
function Error$yj$45$qin$47$regexp$46$ParseError$46$EndPatternAtEscape(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$EndPatternAtEscape.prototype.$tag = 13;
function Error$yj$45$qin$47$regexp$46$ParseError$46$ClassMissingBracket(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$ClassMissingBracket.prototype.$tag = 14;
function Error$yj$45$qin$47$regexp$46$ParseError$46$GroupMissingParen(param0) {
  this._0 = param0;
}
Error$yj$45$qin$47$regexp$46$ParseError$46$GroupMissingParen.prototype.$tag = 15;
const Error$oboard$47$mocket$47$lib$46$ExecError$46$ExecError = { $tag: 1 };
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 0;
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $unsafe_bytes_sub_string(bytes, byte_offset, byte_length) {
  const end_offset = byte_offset + byte_length;
  let buf = '';
  while (byte_offset < end_offset) {
    buf += String.fromCharCode(bytes[byte_offset] | (bytes[byte_offset + 1] << 8));
    byte_offset += 2;
  }
  return buf;
}
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {   if (f._exports) return f._exports;   return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports; };
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const $64$moonbitlang$47$core$47$builtin$46$Json$Null = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$Json$Number(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$Json$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$tag = 4;
function $64$moonbitlang$47$core$47$builtin$46$Json$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$tag = 5;
function $64$moonbitlang$47$core$47$builtin$46$Json$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$tag = 6;
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {   let view = f._view;   if (view === undefined) {     view = f._view = new DataView(new ArrayBuffer(8));   }   view.setUint32(0, a.hi);   view.setUint32(4, a.lo);   return view.getFloat64(0); };
const $9218868437227405311L = { hi: 2146435071, lo: -1 };
const $_4503599627370497L = { hi: -1048577, lo: -1 };
const moonbitlang$core$builtin$$JSArray$pop = (arr) => arr.pop();
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {   const ahi = a.hi;   const bhi = b.hi;   if (ahi < bhi) {     return -1;   }   if (ahi > bhi) {     return 1;   }   const alo = a.lo >>> 0;   const blo = b.lo >>> 0;   if (alo < blo) {     return -1;   }   if (alo > blo) {     return 1;   }   return 0; };
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$4$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$4$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$4$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$4$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$4$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$4$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$4$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$4$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$4$.prototype.$tag = 4;
const Option$None$5$ = { $tag: 0 };
function Option$Some$5$(param0) {
  this._0 = param0;
}
Option$Some$5$.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54]);
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$Empty = { $tag: 0 };
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(param0) {
  this._0 = param0;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$Single.prototype.$tag = 1;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingle(param0) {
  this._0 = param0;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingle.prototype.$tag = 2;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(param0) {
  this._0 = param0;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$Class.prototype.$tag = 3;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$SingleLoop(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$SingleLoop.prototype.$tag = 4;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingleLoop(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingleLoop.prototype.$tag = 5;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$ClassLoop(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$ClassLoop.prototype.$tag = 6;
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$BeginOfInput = { $tag: 7 };
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$EndOfInput = { $tag: 8 };
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$Alternate = { $tag: 9 };
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$Concatenate = { $tag: 10 };
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$Loop(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$Loop.prototype.$tag = 11;
function $64$yj$45$qin$47$regexp$46$AstNodeInternal$Capture(param0) {
  this._0 = param0;
}
$64$yj$45$qin$47$regexp$46$AstNodeInternal$Capture.prototype.$tag = 12;
const $64$yj$45$qin$47$regexp$46$AstNodeInternal$Group = { $tag: 13 };
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
function $64$Lampese$47$moonbit$45$chalk$47$lib$46$Chalk$Cons(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Lampese$47$moonbit$45$chalk$47$lib$46$Chalk$Cons.prototype.$tag = 0;
const $64$Lampese$47$moonbit$45$chalk$47$lib$46$Chalk$Nil = { $tag: 1 };
function $64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderBackGround(param0) {
  this._0 = param0;
}
$64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderBackGround.prototype.$tag = 0;
function $64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderColor(param0) {
  this._0 = param0;
}
$64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderColor.prototype.$tag = 1;
function $64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderModifier(param0) {
  this._0 = param0;
}
$64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderModifier.prototype.$tag = 2;
function $36$oboard$47$mocket$47$lib$46$listen$46$lambda$46$42$arm$47$319$46$42$arm$47$297$46$lambda$47$443$46$State$State_0(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$36$oboard$47$mocket$47$lib$46$listen$46$lambda$46$42$arm$47$319$46$42$arm$47$297$46$lambda$47$443$46$State$State_0.prototype.$tag = 0;
function $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$_try$47$150(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$_try$47$150.prototype.$tag = 0;
function $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$State_1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$State_1.prototype.$tag = 1;
function $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$_try$47$153(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$_try$47$153.prototype.$tag = 0;
function $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$State_1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$State_1.prototype.$tag = 1;
function Error$$to_string(_e) {
  switch (_e.$tag) {
    case 14: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 16: {
      return moonbitlang$core$builtin$$Show$to_string$1$(_e);
    }
    case 4: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 8: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 13: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 1: {
      return moonbitlang$core$builtin$$Show$to_string$2$(_e);
    }
    case 15: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 2: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 12: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 11: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 10: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 6: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 0: {
      return moonbitlang$core$builtin$$Show$to_string$3$(_e);
    }
    case 7: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 3: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    case 9: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
    default: {
      return moonbitlang$core$builtin$$Show$to_string$0$(_e);
    }
  }
}
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$int$$max_value = 2147483647;
const moonbitlang$core$random$internal$random_source$$chunk = 32;
const moonbitlang$core$random$internal$random_source$$ctrInc = 4;
const moonbitlang$core$random$internal$random_source$$ctrMax = 16;
const oboard$mocket$lib$$binding = { listen: (_a, _b) => {
  moonbitlang$core$builtin$$println$4$("Please bind heaven.");
}, send: (_a, _b) => {
  moonbitlang$core$builtin$$println$4$("Please bind heaven.");
}, call: (_a, _b, _c) => {
  moonbitlang$core$builtin$$println$4$("Please bind heaven.");
} };
const oboard$mocket_example$main$$random_generator = moonbitlang$core$random$$new(moonbitlang$core$random$$new$46$seed$46$default());
const oboard$mimetype$lib$$types = moonbitlang$core$builtin$$Map$from_array$5$([{ _0: "application/andrew-inset", _1: ["ez"] }, { _0: "application/appinstaller", _1: ["appinstaller"] }, { _0: "application/applixware", _1: ["aw"] }, { _0: "application/appx", _1: ["appx"] }, { _0: "application/appxbundle", _1: ["appxbundle"] }, { _0: "application/atom+xml", _1: ["atom"] }, { _0: "application/atomcat+xml", _1: ["atomcat"] }, { _0: "application/atomdeleted+xml", _1: ["atomdeleted"] }, { _0: "application/atomsvc+xml", _1: ["atomsvc"] }, { _0: "application/atsc-dwd+xml", _1: ["dwd"] }, { _0: "application/atsc-held+xml", _1: ["held"] }, { _0: "application/atsc-rsat+xml", _1: ["rsat"] }, { _0: "application/automationml-aml+xml", _1: ["aml"] }, { _0: "application/automationml-amlx+zip", _1: ["amlx"] }, { _0: "application/bdoc", _1: ["bdoc"] }, { _0: "application/calendar+xml", _1: ["xcs"] }, { _0: "application/ccxml+xml", _1: ["ccxml"] }, { _0: "application/cdfx+xml", _1: ["cdfx"] }, { _0: "application/cdmi-capability", _1: ["cdmia"] }, { _0: "application/cdmi-container", _1: ["cdmic"] }, { _0: "application/cdmi-domain", _1: ["cdmid"] }, { _0: "application/cdmi-object", _1: ["cdmio"] }, { _0: "application/cdmi-queue", _1: ["cdmiq"] }, { _0: "application/cpl+xml", _1: ["cpl"] }, { _0: "application/cu-seeme", _1: ["cu"] }, { _0: "application/cwl", _1: ["cwl"] }, { _0: "application/dash+xml", _1: ["mpd"] }, { _0: "application/dash-patch+xml", _1: ["mpp"] }, { _0: "application/davmount+xml", _1: ["davmount"] }, { _0: "application/docbook+xml", _1: ["dbk"] }, { _0: "application/dssc+der", _1: ["dssc"] }, { _0: "application/dssc+xml", _1: ["xdssc"] }, { _0: "application/ecmascript", _1: ["ecma"] }, { _0: "application/emma+xml", _1: ["emma"] }, { _0: "application/emotionml+xml", _1: ["emotionml"] }, { _0: "application/epub+zip", _1: ["epub"] }, { _0: "application/exi", _1: ["exi"] }, { _0: "application/express", _1: ["exp"] }, { _0: "application/fdf", _1: ["fdf"] }, { _0: "application/fdt+xml", _1: ["fdt"] }, { _0: "application/font-tdpfr", _1: ["pfr"] }, { _0: "application/geo+json", _1: ["geojson"] }, { _0: "application/gml+xml", _1: ["gml"] }, { _0: "application/gpx+xml", _1: ["gpx"] }, { _0: "application/gxf", _1: ["gxf"] }, { _0: "application/gzip", _1: ["gz"] }, { _0: "application/hjson", _1: ["hjson"] }, { _0: "application/hyperstudio", _1: ["stk"] }, { _0: "application/inkml+xml", _1: ["ink", "inkml"] }, { _0: "application/ipfix", _1: ["ipfix"] }, { _0: "application/its+xml", _1: ["its"] }, { _0: "application/java-archive", _1: ["jar", "war", "ear"] }, { _0: "application/java-serialized-object", _1: ["ser"] }, { _0: "application/java-vm", _1: ["class"] }, { _0: "application/javascript", _1: ["*js"] }, { _0: "application/json", _1: ["json", "map"] }, { _0: "application/json5", _1: ["json5"] }, { _0: "application/jsonml+json", _1: ["jsonml"] }, { _0: "application/ld+json", _1: ["jsonld"] }, { _0: "application/lgr+xml", _1: ["lgr"] }, { _0: "application/lost+xml", _1: ["lostxml"] }, { _0: "application/mac-binhex40", _1: ["hqx"] }, { _0: "application/mac-compactpro", _1: ["cpt"] }, { _0: "application/mads+xml", _1: ["mads"] }, { _0: "application/manifest+json", _1: ["webmanifest"] }, { _0: "application/marc", _1: ["mrc"] }, { _0: "application/marcxml+xml", _1: ["mrcx"] }, { _0: "application/mathematica", _1: ["ma", "nb", "mb"] }, { _0: "application/mathml+xml", _1: ["mathml"] }, { _0: "application/mbox", _1: ["mbox"] }, { _0: "application/media-policy-dataset+xml", _1: ["mpf"] }, { _0: "application/mediaservercontrol+xml", _1: ["mscml"] }, { _0: "application/metalink+xml", _1: ["metalink"] }, { _0: "application/metalink4+xml", _1: ["meta4"] }, { _0: "application/mets+xml", _1: ["mets"] }, { _0: "application/mmt-aei+xml", _1: ["maei"] }, { _0: "application/mmt-usd+xml", _1: ["musd"] }, { _0: "application/mods+xml", _1: ["mods"] }, { _0: "application/mp21", _1: ["m21", "mp21"] }, { _0: "application/mp4", _1: ["*mp4", "*mpg4", "mp4s", "m4p"] }, { _0: "application/msix", _1: ["msix"] }, { _0: "application/msixbundle", _1: ["msixbundle"] }, { _0: "application/msword", _1: ["doc", "dot"] }, { _0: "application/mxf", _1: ["mxf"] }, { _0: "application/n-quads", _1: ["nq"] }, { _0: "application/n-triples", _1: ["nt"] }, { _0: "application/node", _1: ["cjs"] }, { _0: "application/octet-stream", _1: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, { _0: "application/oda", _1: ["oda"] }, { _0: "application/oebps-package+xml", _1: ["opf"] }, { _0: "application/ogg", _1: ["ogx"] }, { _0: "application/omdoc+xml", _1: ["omdoc"] }, { _0: "application/onenote", _1: ["onetoc", "onetoc2", "onetmp", "onepkg"] }, { _0: "application/oxps", _1: ["oxps"] }, { _0: "application/p2p-overlay+xml", _1: ["relo"] }, { _0: "application/patch-ops-error+xml", _1: ["xer"] }, { _0: "application/pdf", _1: ["pdf"] }, { _0: "application/pgp-encrypted", _1: ["pgp"] }, { _0: "application/pgp-keys", _1: ["asc"] }, { _0: "application/pgp-signature", _1: ["sig", "*asc"] }, { _0: "application/pics-rules", _1: ["prf"] }, { _0: "application/pkcs10", _1: ["p10"] }, { _0: "application/pkcs7-mime", _1: ["p7m", "p7c"] }, { _0: "application/pkcs7-signature", _1: ["p7s"] }, { _0: "application/pkcs8", _1: ["p8"] }, { _0: "application/pkix-attr-cert", _1: ["ac"] }, { _0: "application/pkix-cert", _1: ["cer"] }, { _0: "application/pkix-crl", _1: ["crl"] }, { _0: "application/pkix-pkipath", _1: ["pkipath"] }, { _0: "application/pkixcmp", _1: ["pki"] }, { _0: "application/pls+xml", _1: ["pls"] }, { _0: "application/postscript", _1: ["ai", "eps", "ps"] }, { _0: "application/provenance+xml", _1: ["provx"] }, { _0: "application/pskc+xml", _1: ["pskcxml"] }, { _0: "application/raml+yaml", _1: ["raml"] }, { _0: "application/rdf+xml", _1: ["rdf", "owl"] }, { _0: "application/reginfo+xml", _1: ["rif"] }, { _0: "application/relax-ng-compact-syntax", _1: ["rnc"] }, { _0: "application/resource-lists+xml", _1: ["rl"] }, { _0: "application/resource-lists-diff+xml", _1: ["rld"] }, { _0: "application/rls-services+xml", _1: ["rs"] }, { _0: "application/route-apd+xml", _1: ["rapd"] }, { _0: "application/route-s-tsid+xml", _1: ["sls"] }, { _0: "application/route-usd+xml", _1: ["rusd"] }, { _0: "application/rpki-ghostbusters", _1: ["gbr"] }, { _0: "application/rpki-manifest", _1: ["mft"] }, { _0: "application/rpki-roa", _1: ["roa"] }, { _0: "application/rsd+xml", _1: ["rsd"] }, { _0: "application/rss+xml", _1: ["rss"] }, { _0: "application/rtf", _1: ["rtf"] }, { _0: "application/sbml+xml", _1: ["sbml"] }, { _0: "application/scvp-cv-request", _1: ["scq"] }, { _0: "application/scvp-cv-response", _1: ["scs"] }, { _0: "application/scvp-vp-request", _1: ["spq"] }, { _0: "application/scvp-vp-response", _1: ["spp"] }, { _0: "application/sdp", _1: ["sdp"] }, { _0: "application/senml+xml", _1: ["senmlx"] }, { _0: "application/sensml+xml", _1: ["sensmlx"] }, { _0: "application/set-payment-initiation", _1: ["setpay"] }, { _0: "application/set-registration-initiation", _1: ["setreg"] }, { _0: "application/shf+xml", _1: ["shf"] }, { _0: "application/sieve", _1: ["siv", "sieve"] }, { _0: "application/smil+xml", _1: ["smi", "smil"] }, { _0: "application/sparql-query", _1: ["rq"] }, { _0: "application/sparql-results+xml", _1: ["srx"] }, { _0: "application/sql", _1: ["sql"] }, { _0: "application/srgs", _1: ["gram"] }, { _0: "application/srgs+xml", _1: ["grxml"] }, { _0: "application/sru+xml", _1: ["sru"] }, { _0: "application/ssdl+xml", _1: ["ssdl"] }, { _0: "application/ssml+xml", _1: ["ssml"] }, { _0: "application/swid+xml", _1: ["swidtag"] }, { _0: "application/tei+xml", _1: ["tei", "teicorpus"] }, { _0: "application/thraud+xml", _1: ["tfi"] }, { _0: "application/timestamped-data", _1: ["tsd"] }, { _0: "application/toml", _1: ["toml"] }, { _0: "application/trig", _1: ["trig"] }, { _0: "application/ttml+xml", _1: ["ttml"] }, { _0: "application/ubjson", _1: ["ubj"] }, { _0: "application/urc-ressheet+xml", _1: ["rsheet"] }, { _0: "application/urc-targetdesc+xml", _1: ["td"] }, { _0: "application/voicexml+xml", _1: ["vxml"] }, { _0: "application/wasm", _1: ["wasm"] }, { _0: "application/watcherinfo+xml", _1: ["wif"] }, { _0: "application/widget", _1: ["wgt"] }, { _0: "application/winhlp", _1: ["hlp"] }, { _0: "application/wsdl+xml", _1: ["wsdl"] }, { _0: "application/wspolicy+xml", _1: ["wspolicy"] }, { _0: "application/xaml+xml", _1: ["xaml"] }, { _0: "application/xcap-att+xml", _1: ["xav"] }, { _0: "application/xcap-caps+xml", _1: ["xca"] }, { _0: "application/xcap-diff+xml", _1: ["xdf"] }, { _0: "application/xcap-el+xml", _1: ["xel"] }, { _0: "application/xcap-ns+xml", _1: ["xns"] }, { _0: "application/xenc+xml", _1: ["xenc"] }, { _0: "application/xfdf", _1: ["xfdf"] }, { _0: "application/xhtml+xml", _1: ["xhtml", "xht"] }, { _0: "application/xliff+xml", _1: ["xlf"] }, { _0: "application/xml", _1: ["xml", "xsl", "xsd", "rng"] }, { _0: "application/xml-dtd", _1: ["dtd"] }, { _0: "application/xop+xml", _1: ["xop"] }, { _0: "application/xproc+xml", _1: ["xpl"] }, { _0: "application/xslt+xml", _1: ["*xsl", "xslt"] }, { _0: "application/xspf+xml", _1: ["xspf"] }, { _0: "application/xv+xml", _1: ["mxml", "xhvml", "xvml", "xvm"] }, { _0: "application/yang", _1: ["yang"] }, { _0: "application/yin+xml", _1: ["yin"] }, { _0: "application/zip", _1: ["zip"] }, { _0: "audio/3gpp", _1: ["*3gpp"] }, { _0: "audio/aac", _1: ["adts", "aac"] }, { _0: "audio/adpcm", _1: ["adp"] }, { _0: "audio/amr", _1: ["amr"] }, { _0: "audio/basic", _1: ["au", "snd"] }, { _0: "audio/midi", _1: ["mid", "midi", "kar", "rmi"] }, { _0: "audio/mobile-xmf", _1: ["mxmf"] }, { _0: "audio/mp3", _1: ["*mp3"] }, { _0: "audio/mp4", _1: ["m4a", "mp4a"] }, { _0: "audio/mpeg", _1: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, { _0: "audio/ogg", _1: ["oga", "ogg", "spx", "opus"] }, { _0: "audio/s3m", _1: ["s3m"] }, { _0: "audio/silk", _1: ["sil"] }, { _0: "audio/wav", _1: ["wav"] }, { _0: "audio/wave", _1: ["*wav"] }, { _0: "audio/webm", _1: ["weba"] }, { _0: "audio/xm", _1: ["xm"] }, { _0: "font/collection", _1: ["ttc"] }, { _0: "font/otf", _1: ["otf"] }, { _0: "font/ttf", _1: ["ttf"] }, { _0: "font/woff", _1: ["woff"] }, { _0: "font/woff2", _1: ["woff2"] }, { _0: "image/aces", _1: ["exr"] }, { _0: "image/apng", _1: ["apng"] }, { _0: "image/avci", _1: ["avci"] }, { _0: "image/avcs", _1: ["avcs"] }, { _0: "image/avif", _1: ["avif"] }, { _0: "image/bmp", _1: ["bmp", "dib"] }, { _0: "image/cgm", _1: ["cgm"] }, { _0: "image/dicom-rle", _1: ["drle"] }, { _0: "image/dpx", _1: ["dpx"] }, { _0: "image/emf", _1: ["emf"] }, { _0: "image/fits", _1: ["fits"] }, { _0: "image/g3fax", _1: ["g3"] }, { _0: "image/gif", _1: ["gif"] }, { _0: "image/heic", _1: ["heic"] }, { _0: "image/heic-sequence", _1: ["heics"] }, { _0: "image/heif", _1: ["heif"] }, { _0: "image/heif-sequence", _1: ["heifs"] }, { _0: "image/hej2k", _1: ["hej2"] }, { _0: "image/hsj2", _1: ["hsj2"] }, { _0: "image/ief", _1: ["ief"] }, { _0: "image/jls", _1: ["jls"] }, { _0: "image/jp2", _1: ["jp2", "jpg2"] }, { _0: "image/jpeg", _1: ["jpeg", "jpg", "jpe"] }, { _0: "image/jph", _1: ["jph"] }, { _0: "image/jphc", _1: ["jhc"] }, { _0: "image/jpm", _1: ["jpm", "jpgm"] }, { _0: "image/jpx", _1: ["jpx", "jpf"] }, { _0: "image/jxr", _1: ["jxr"] }, { _0: "image/jxra", _1: ["jxra"] }, { _0: "image/jxrs", _1: ["jxrs"] }, { _0: "image/jxs", _1: ["jxs"] }, { _0: "image/jxsc", _1: ["jxsc"] }, { _0: "image/jxsi", _1: ["jxsi"] }, { _0: "image/jxss", _1: ["jxss"] }, { _0: "image/ktx", _1: ["ktx"] }, { _0: "image/ktx2", _1: ["ktx2"] }, { _0: "image/png", _1: ["png"] }, { _0: "image/sgi", _1: ["sgi"] }, { _0: "image/svg+xml", _1: ["svg", "svgz"] }, { _0: "image/t38", _1: ["t38"] }, { _0: "image/tiff", _1: ["tif", "tiff"] }, { _0: "image/tiff-fx", _1: ["tfx"] }, { _0: "image/webp", _1: ["webp"] }, { _0: "image/wmf", _1: ["wmf"] }, { _0: "message/disposition-notification", _1: ["disposition-notification"] }, { _0: "message/global", _1: ["u8msg"] }, { _0: "message/global-delivery-status", _1: ["u8dsn"] }, { _0: "message/global-disposition-notification", _1: ["u8mdn"] }, { _0: "message/global-headers", _1: ["u8hdr"] }, { _0: "message/rfc822", _1: ["eml", "mime"] }, { _0: "model/3mf", _1: ["3mf"] }, { _0: "model/gltf+json", _1: ["gltf"] }, { _0: "model/gltf-binary", _1: ["glb"] }, { _0: "model/iges", _1: ["igs", "iges"] }, { _0: "model/jt", _1: ["jt"] }, { _0: "model/mesh", _1: ["msh", "mesh", "silo"] }, { _0: "model/mtl", _1: ["mtl"] }, { _0: "model/obj", _1: ["obj"] }, { _0: "model/prc", _1: ["prc"] }, { _0: "model/step+xml", _1: ["stpx"] }, { _0: "model/step+zip", _1: ["stpz"] }, { _0: "model/step-xml+zip", _1: ["stpxz"] }, { _0: "model/stl", _1: ["stl"] }, { _0: "model/u3d", _1: ["u3d"] }, { _0: "model/vrml", _1: ["wrl", "vrml"] }, { _0: "model/x3d+binary", _1: ["*x3db", "x3dbz"] }, { _0: "model/x3d+fastinfoset", _1: ["x3db"] }, { _0: "model/x3d+vrml", _1: ["*x3dv", "x3dvz"] }, { _0: "model/x3d+xml", _1: ["x3d", "x3dz"] }, { _0: "model/x3d-vrml", _1: ["x3dv"] }, { _0: "text/cache-manifest", _1: ["appcache", "manifest"] }, { _0: "text/calendar", _1: ["ics", "ifb"] }, { _0: "text/coffeescript", _1: ["coffee", "litcoffee"] }, { _0: "text/css", _1: ["css"] }, { _0: "text/csv", _1: ["csv"] }, { _0: "text/html", _1: ["html", "htm", "shtml"] }, { _0: "text/jade", _1: ["jade"] }, { _0: "text/javascript", _1: ["js", "mjs"] }, { _0: "text/jsx", _1: ["jsx"] }, { _0: "text/less", _1: ["less"] }, { _0: "text/markdown", _1: ["md", "markdown"] }, { _0: "text/mathml", _1: ["mml"] }, { _0: "text/mdx", _1: ["mdx"] }, { _0: "text/n3", _1: ["n3"] }, { _0: "text/plain", _1: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, { _0: "text/richtext", _1: ["rtx"] }, { _0: "text/rtf", _1: ["*rtf"] }, { _0: "text/sgml", _1: ["sgml", "sgm"] }, { _0: "text/shex", _1: ["shex"] }, { _0: "text/slim", _1: ["slim", "slm"] }, { _0: "text/spdx", _1: ["spdx"] }, { _0: "text/stylus", _1: ["stylus", "styl"] }, { _0: "text/tab-separated-values", _1: ["tsv"] }, { _0: "text/troff", _1: ["t", "tr", "roff", "man", "me", "ms"] }, { _0: "text/turtle", _1: ["ttl"] }, { _0: "text/uri-list", _1: ["uri", "uris", "urls"] }, { _0: "text/vcard", _1: ["vcard"] }, { _0: "text/vtt", _1: ["vtt"] }, { _0: "text/wgsl", _1: ["wgsl"] }, { _0: "text/xml", _1: ["*xml"] }, { _0: "text/yaml", _1: ["yaml", "yml"] }, { _0: "video/3gpp", _1: ["3gp", "3gpp"] }, { _0: "video/3gpp2", _1: ["3g2"] }, { _0: "video/h261", _1: ["h261"] }, { _0: "video/h263", _1: ["h263"] }, { _0: "video/h264", _1: ["h264"] }, { _0: "video/iso.segment", _1: ["m4s"] }, { _0: "video/jpeg", _1: ["jpgv"] }, { _0: "video/jpm", _1: ["*jpm", "*jpgm"] }, { _0: "video/mj2", _1: ["mj2", "mjp2"] }, { _0: "video/mp2t", _1: ["ts"] }, { _0: "video/mp4", _1: ["mp4", "mp4v", "mpg4"] }, { _0: "video/mpeg", _1: ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, { _0: "video/ogg", _1: ["ogv"] }, { _0: "video/quicktime", _1: ["qt", "mov"] }, { _0: "video/webm", _1: ["webm"] }, { _0: "application/prs.cww", _1: ["cww"] }, { _0: "application/prs.xsf+xml", _1: ["xsf"] }, { _0: "application/vnd.1000minds.decision-model+xml", _1: ["1km"] }, { _0: "application/vnd.3gpp.pic-bw-large", _1: ["plb"] }, { _0: "application/vnd.3gpp.pic-bw-small", _1: ["psb"] }, { _0: "application/vnd.3gpp.pic-bw-var", _1: ["pvb"] }, { _0: "application/vnd.3gpp2.tcap", _1: ["tcap"] }, { _0: "application/vnd.3m.post-it-notes", _1: ["pwn"] }, { _0: "application/vnd.accpac.simply.aso", _1: ["aso"] }, { _0: "application/vnd.accpac.simply.imp", _1: ["imp"] }, { _0: "application/vnd.acucobol", _1: ["acu"] }, { _0: "application/vnd.acucorp", _1: ["atc", "acutc"] }, { _0: "application/vnd.adobe.air-application-installer-package+zip", _1: ["air"] }, { _0: "application/vnd.adobe.formscentral.fcdt", _1: ["fcdt"] }, { _0: "application/vnd.adobe.fxp", _1: ["fxp", "fxpl"] }, { _0: "application/vnd.adobe.xdp+xml", _1: ["xdp"] }, { _0: "application/vnd.adobe.xfdf", _1: ["*xfdf"] }, { _0: "application/vnd.age", _1: ["age"] }, { _0: "application/vnd.ahead.space", _1: ["ahead"] }, { _0: "application/vnd.airzip.filesecure.azf", _1: ["azf"] }, { _0: "application/vnd.airzip.filesecure.azs", _1: ["azs"] }, { _0: "application/vnd.amazon.ebook", _1: ["azw"] }, { _0: "application/vnd.americandynamics.acc", _1: ["acc"] }, { _0: "application/vnd.amiga.ami", _1: ["ami"] }, { _0: "application/vnd.android.package-archive", _1: ["apk"] }, { _0: "application/vnd.anser-web-certificate-issue-initiation", _1: ["cii"] }, { _0: "application/vnd.anser-web-funds-transfer-initiation", _1: ["fti"] }, { _0: "application/vnd.antix.game-component", _1: ["atx"] }, { _0: "application/vnd.apple.installer+xml", _1: ["mpkg"] }, { _0: "application/vnd.apple.keynote", _1: ["key"] }, { _0: "application/vnd.apple.mpegurl", _1: ["m3u8"] }, { _0: "application/vnd.apple.numbers", _1: ["numbers"] }, { _0: "application/vnd.apple.pages", _1: ["pages"] }, { _0: "application/vnd.apple.pkpass", _1: ["pkpass"] }, { _0: "application/vnd.aristanetworks.swi", _1: ["swi"] }, { _0: "application/vnd.astraea-software.iota", _1: ["iota"] }, { _0: "application/vnd.audiograph", _1: ["aep"] }, { _0: "application/vnd.balsamiq.bmml+xml", _1: ["bmml"] }, { _0: "application/vnd.blueice.multipass", _1: ["mpm"] }, { _0: "application/vnd.bmi", _1: ["bmi"] }, { _0: "application/vnd.businessobjects", _1: ["rep"] }, { _0: "application/vnd.chemdraw+xml", _1: ["cdxml"] }, { _0: "application/vnd.chipnuts.karaoke-mmd", _1: ["mmd"] }, { _0: "application/vnd.cinderella", _1: ["cdy"] }, { _0: "application/vnd.citationstyles.style+xml", _1: ["csl"] }, { _0: "application/vnd.claymore", _1: ["cla"] }, { _0: "application/vnd.cloanto.rp9", _1: ["rp9"] }, { _0: "application/vnd.clonk.c4group", _1: ["c4g", "c4d", "c4f", "c4p", "c4u"] }, { _0: "application/vnd.cluetrust.cartomobile-config", _1: ["c11amc"] }, { _0: "application/vnd.cluetrust.cartomobile-config-pkg", _1: ["c11amz"] }, { _0: "application/vnd.commonspace", _1: ["csp"] }, { _0: "application/vnd.contact.cmsg", _1: ["cdbcmsg"] }, { _0: "application/vnd.cosmocaller", _1: ["cmc"] }, { _0: "application/vnd.crick.clicker", _1: ["clkx"] }, { _0: "application/vnd.crick.clicker.keyboard", _1: ["clkk"] }, { _0: "application/vnd.crick.clicker.palette", _1: ["clkp"] }, { _0: "application/vnd.crick.clicker.template", _1: ["clkt"] }, { _0: "application/vnd.crick.clicker.wordbank", _1: ["clkw"] }, { _0: "application/vnd.criticaltools.wbs+xml", _1: ["wbs"] }, { _0: "application/vnd.ctc-posml", _1: ["pml"] }, { _0: "application/vnd.cups-ppd", _1: ["ppd"] }, { _0: "application/vnd.curl.car", _1: ["car"] }, { _0: "application/vnd.curl.pcurl", _1: ["pcurl"] }, { _0: "application/vnd.dart", _1: ["dart"] }, { _0: "application/vnd.data-vision.rdz", _1: ["rdz"] }, { _0: "application/vnd.dbf", _1: ["dbf"] }, { _0: "application/vnd.dece.data", _1: ["uvf", "uvvf", "uvd", "uvvd"] }, { _0: "application/vnd.dece.ttml+xml", _1: ["uvt", "uvvt"] }, { _0: "application/vnd.dece.unspecified", _1: ["uvx", "uvvx"] }, { _0: "application/vnd.dece.zip", _1: ["uvz", "uvvz"] }, { _0: "application/vnd.denovo.fcselayout-link", _1: ["fe_launch"] }, { _0: "application/vnd.dna", _1: ["dna"] }, { _0: "application/vnd.dolby.mlp", _1: ["mlp"] }, { _0: "application/vnd.dpgraph", _1: ["dpg"] }, { _0: "application/vnd.dreamfactory", _1: ["dfac"] }, { _0: "application/vnd.ds-keypoint", _1: ["kpxx"] }, { _0: "application/vnd.dvb.ait", _1: ["ait"] }, { _0: "application/vnd.dvb.service", _1: ["svc"] }, { _0: "application/vnd.dynageo", _1: ["geo"] }, { _0: "application/vnd.ecowin.chart", _1: ["mag"] }, { _0: "application/vnd.enliven", _1: ["nml"] }, { _0: "application/vnd.epson.esf", _1: ["esf"] }, { _0: "application/vnd.epson.msf", _1: ["msf"] }, { _0: "application/vnd.epson.quickanime", _1: ["qam"] }, { _0: "application/vnd.epson.salt", _1: ["slt"] }, { _0: "application/vnd.epson.ssf", _1: ["ssf"] }, { _0: "application/vnd.eszigno3+xml", _1: ["es3", "et3"] }, { _0: "application/vnd.ezpix-album", _1: ["ez2"] }, { _0: "application/vnd.ezpix-package", _1: ["ez3"] }, { _0: "application/vnd.fdf", _1: ["*fdf"] }, { _0: "application/vnd.fdsn.mseed", _1: ["mseed"] }, { _0: "application/vnd.fdsn.seed", _1: ["seed", "dataless"] }, { _0: "application/vnd.flographit", _1: ["gph"] }, { _0: "application/vnd.fluxtime.clip", _1: ["ftc"] }, { _0: "application/vnd.framemaker", _1: ["fm", "frame", "maker", "book"] }, { _0: "application/vnd.frogans.fnc", _1: ["fnc"] }, { _0: "application/vnd.frogans.ltf", _1: ["ltf"] }, { _0: "application/vnd.fsc.weblaunch", _1: ["fsc"] }, { _0: "application/vnd.fujitsu.oasys", _1: ["oas"] }, { _0: "application/vnd.fujitsu.oasys2", _1: ["oa2"] }, { _0: "application/vnd.fujitsu.oasys3", _1: ["oa3"] }, { _0: "application/vnd.fujitsu.oasysgp", _1: ["fg5"] }, { _0: "application/vnd.fujitsu.oasysprs", _1: ["bh2"] }, { _0: "application/vnd.fujixerox.ddd", _1: ["ddd"] }, { _0: "application/vnd.fujixerox.docuworks", _1: ["xdw"] }, { _0: "application/vnd.fujixerox.docuworks.binder", _1: ["xbd"] }, { _0: "application/vnd.fuzzysheet", _1: ["fzs"] }, { _0: "application/vnd.genomatix.tuxedo", _1: ["txd"] }, { _0: "application/vnd.geogebra.file", _1: ["ggb"] }, { _0: "application/vnd.geogebra.tool", _1: ["ggt"] }, { _0: "application/vnd.geometry-explorer", _1: ["gex", "gre"] }, { _0: "application/vnd.geonext", _1: ["gxt"] }, { _0: "application/vnd.geoplan", _1: ["g2w"] }, { _0: "application/vnd.geospace", _1: ["g3w"] }, { _0: "application/vnd.gmx", _1: ["gmx"] }, { _0: "application/vnd.google-apps.document", _1: ["gdoc"] }, { _0: "application/vnd.google-apps.presentation", _1: ["gslides"] }, { _0: "application/vnd.google-apps.spreadsheet", _1: ["gsheet"] }, { _0: "application/vnd.google-earth.kml+xml", _1: ["kml"] }, { _0: "application/vnd.google-earth.kmz", _1: ["kmz"] }, { _0: "application/vnd.grafeq", _1: ["gqf", "gqs"] }, { _0: "application/vnd.groove-account", _1: ["gac"] }, { _0: "application/vnd.groove-help", _1: ["ghf"] }, { _0: "application/vnd.groove-identity-message", _1: ["gim"] }, { _0: "application/vnd.groove-injector", _1: ["grv"] }, { _0: "application/vnd.groove-tool-message", _1: ["gtm"] }, { _0: "application/vnd.groove-tool-template", _1: ["tpl"] }, { _0: "application/vnd.groove-vcard", _1: ["vcg"] }, { _0: "application/vnd.hal+xml", _1: ["hal"] }, { _0: "application/vnd.handheld-entertainment+xml", _1: ["zmm"] }, { _0: "application/vnd.hbci", _1: ["hbci"] }, { _0: "application/vnd.hhe.lesson-player", _1: ["les"] }, { _0: "application/vnd.hp-hpgl", _1: ["hpgl"] }, { _0: "application/vnd.hp-hpid", _1: ["hpid"] }, { _0: "application/vnd.hp-hps", _1: ["hps"] }, { _0: "application/vnd.hp-jlyt", _1: ["jlt"] }, { _0: "application/vnd.hp-pcl", _1: ["pcl"] }, { _0: "application/vnd.hp-pclxl", _1: ["pclxl"] }, { _0: "application/vnd.hydrostatix.sof-data", _1: ["sfd-hdstx"] }, { _0: "application/vnd.ibm.minipay", _1: ["mpy"] }, { _0: "application/vnd.ibm.modcap", _1: ["afp", "listafp", "list3820"] }, { _0: "application/vnd.ibm.rights-management", _1: ["irm"] }, { _0: "application/vnd.ibm.secure-container", _1: ["sc"] }, { _0: "application/vnd.iccprofile", _1: ["icc", "icm"] }, { _0: "application/vnd.igloader", _1: ["igl"] }, { _0: "application/vnd.immervision-ivp", _1: ["ivp"] }, { _0: "application/vnd.immervision-ivu", _1: ["ivu"] }, { _0: "application/vnd.insors.igm", _1: ["igm"] }, { _0: "application/vnd.intercon.formnet", _1: ["xpw", "xpx"] }, { _0: "application/vnd.intergeo", _1: ["i2g"] }, { _0: "application/vnd.intu.qbo", _1: ["qbo"] }, { _0: "application/vnd.intu.qfx", _1: ["qfx"] }, { _0: "application/vnd.ipunplugged.rcprofile", _1: ["rcprofile"] }, { _0: "application/vnd.irepository.package+xml", _1: ["irp"] }, { _0: "application/vnd.is-xpr", _1: ["xpr"] }, { _0: "application/vnd.isac.fcs", _1: ["fcs"] }, { _0: "application/vnd.jam", _1: ["jam"] }, { _0: "application/vnd.jcp.javame.midlet-rms", _1: ["rms"] }, { _0: "application/vnd.jisp", _1: ["jisp"] }, { _0: "application/vnd.joost.joda-archive", _1: ["joda"] }, { _0: "application/vnd.kahootz", _1: ["ktz", "ktr"] }, { _0: "application/vnd.kde.karbon", _1: ["karbon"] }, { _0: "application/vnd.kde.kchart", _1: ["chrt"] }, { _0: "application/vnd.kde.kformula", _1: ["kfo"] }, { _0: "application/vnd.kde.kivio", _1: ["flw"] }, { _0: "application/vnd.kde.kontour", _1: ["kon"] }, { _0: "application/vnd.kde.kpresenter", _1: ["kpr", "kpt"] }, { _0: "application/vnd.kde.kspread", _1: ["ksp"] }, { _0: "application/vnd.kde.kword", _1: ["kwd", "kwt"] }, { _0: "application/vnd.kenameaapp", _1: ["htke"] }, { _0: "application/vnd.kidspiration", _1: ["kia"] }, { _0: "application/vnd.kinar", _1: ["kne", "knp"] }, { _0: "application/vnd.koan", _1: ["skp", "skd", "skt", "skm"] }, { _0: "application/vnd.kodak-descriptor", _1: ["sse"] }, { _0: "application/vnd.las.las+xml", _1: ["lasxml"] }, { _0: "application/vnd.llamagraphics.life-balance.desktop", _1: ["lbd"] }, { _0: "application/vnd.llamagraphics.life-balance.exchange+xml", _1: ["lbe"] }, { _0: "application/vnd.lotus-1-2-3", _1: ["123"] }, { _0: "application/vnd.lotus-approach", _1: ["apr"] }, { _0: "application/vnd.lotus-freelance", _1: ["pre"] }, { _0: "application/vnd.lotus-notes", _1: ["nsf"] }, { _0: "application/vnd.lotus-organizer", _1: ["org"] }, { _0: "application/vnd.lotus-screencam", _1: ["scm"] }, { _0: "application/vnd.lotus-wordpro", _1: ["lwp"] }, { _0: "application/vnd.macports.portpkg", _1: ["portpkg"] }, { _0: "application/vnd.mapbox-vector-tile", _1: ["mvt"] }, { _0: "application/vnd.mcd", _1: ["mcd"] }, { _0: "application/vnd.medcalcdata", _1: ["mc1"] }, { _0: "application/vnd.mediastation.cdkey", _1: ["cdkey"] }, { _0: "application/vnd.mfer", _1: ["mwf"] }, { _0: "application/vnd.mfmp", _1: ["mfm"] }, { _0: "application/vnd.micrografx.flo", _1: ["flo"] }, { _0: "application/vnd.micrografx.igx", _1: ["igx"] }, { _0: "application/vnd.mif", _1: ["mif"] }, { _0: "application/vnd.mobius.daf", _1: ["daf"] }, { _0: "application/vnd.mobius.dis", _1: ["dis"] }, { _0: "application/vnd.mobius.mbk", _1: ["mbk"] }, { _0: "application/vnd.mobius.mqy", _1: ["mqy"] }, { _0: "application/vnd.mobius.msl", _1: ["msl"] }, { _0: "application/vnd.mobius.plc", _1: ["plc"] }, { _0: "application/vnd.mobius.txf", _1: ["txf"] }, { _0: "application/vnd.mophun.application", _1: ["mpn"] }, { _0: "application/vnd.mophun.certificate", _1: ["mpc"] }, { _0: "application/vnd.mozilla.xul+xml", _1: ["xul"] }, { _0: "application/vnd.ms-artgalry", _1: ["cil"] }, { _0: "application/vnd.ms-cab-compressed", _1: ["cab"] }, { _0: "application/vnd.ms-excel", _1: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, { _0: "application/vnd.ms-excel.addin.macroenabled.12", _1: ["xlam"] }, { _0: "application/vnd.ms-excel.sheet.binary.macroenabled.12", _1: ["xlsb"] }, { _0: "application/vnd.ms-excel.sheet.macroenabled.12", _1: ["xlsm"] }, { _0: "application/vnd.ms-excel.template.macroenabled.12", _1: ["xltm"] }, { _0: "application/vnd.ms-fontobject", _1: ["eot"] }, { _0: "application/vnd.ms-htmlhelp", _1: ["chm"] }, { _0: "application/vnd.ms-ims", _1: ["ims"] }, { _0: "application/vnd.ms-lrm", _1: ["lrm"] }, { _0: "application/vnd.ms-officetheme", _1: ["thmx"] }, { _0: "application/vnd.ms-outlook", _1: ["msg"] }, { _0: "application/vnd.ms-pki.seccat", _1: ["cat"] }, { _0: "application/vnd.ms-pki.stl", _1: ["*stl"] }, { _0: "application/vnd.ms-powerpoint", _1: ["ppt", "pps", "pot"] }, { _0: "application/vnd.ms-powerpoint.addin.macroenabled.12", _1: ["ppam"] }, { _0: "application/vnd.ms-powerpoint.presentation.macroenabled.12", _1: ["pptm"] }, { _0: "application/vnd.ms-powerpoint.slide.macroenabled.12", _1: ["sldm"] }, { _0: "application/vnd.ms-powerpoint.slideshow.macroenabled.12", _1: ["ppsm"] }, { _0: "application/vnd.ms-powerpoint.template.macroenabled.12", _1: ["potm"] }, { _0: "application/vnd.ms-project", _1: ["*mpp", "mpt"] }, { _0: "application/vnd.ms-word.document.macroenabled.12", _1: ["docm"] }, { _0: "application/vnd.ms-word.template.macroenabled.12", _1: ["dotm"] }, { _0: "application/vnd.ms-works", _1: ["wps", "wks", "wcm", "wdb"] }, { _0: "application/vnd.ms-wpl", _1: ["wpl"] }, { _0: "application/vnd.ms-xpsdocument", _1: ["xps"] }, { _0: "application/vnd.mseq", _1: ["mseq"] }, { _0: "application/vnd.musician", _1: ["mus"] }, { _0: "application/vnd.muvee.style", _1: ["msty"] }, { _0: "application/vnd.mynfc", _1: ["taglet"] }, { _0: "application/vnd.neurolanguage.nlu", _1: ["nlu"] }, { _0: "application/vnd.nitf", _1: ["ntf", "nitf"] }, { _0: "application/vnd.noblenet-directory", _1: ["nnd"] }, { _0: "application/vnd.noblenet-sealer", _1: ["nns"] }, { _0: "application/vnd.noblenet-web", _1: ["nnw"] }, { _0: "application/vnd.nokia.n-gage.ac+xml", _1: ["*ac"] }, { _0: "application/vnd.nokia.n-gage.data", _1: ["ngdat"] }, { _0: "application/vnd.nokia.n-gage.symbian.install", _1: ["n-gage"] }, { _0: "application/vnd.nokia.radio-preset", _1: ["rpst"] }, { _0: "application/vnd.nokia.radio-presets", _1: ["rpss"] }, { _0: "application/vnd.novadigm.edm", _1: ["edm"] }, { _0: "application/vnd.novadigm.edx", _1: ["edx"] }, { _0: "application/vnd.novadigm.ext", _1: ["ext"] }, { _0: "application/vnd.oasis.opendocument.chart", _1: ["odc"] }, { _0: "application/vnd.oasis.opendocument.chart-template", _1: ["otc"] }, { _0: "application/vnd.oasis.opendocument.database", _1: ["odb"] }, { _0: "application/vnd.oasis.opendocument.formula", _1: ["odf"] }, { _0: "application/vnd.oasis.opendocument.formula-template", _1: ["odft"] }, { _0: "application/vnd.oasis.opendocument.graphics", _1: ["odg"] }, { _0: "application/vnd.oasis.opendocument.graphics-template", _1: ["otg"] }, { _0: "application/vnd.oasis.opendocument.image", _1: ["odi"] }, { _0: "application/vnd.oasis.opendocument.image-template", _1: ["oti"] }, { _0: "application/vnd.oasis.opendocument.presentation", _1: ["odp"] }, { _0: "application/vnd.oasis.opendocument.presentation-template", _1: ["otp"] }, { _0: "application/vnd.oasis.opendocument.spreadsheet", _1: ["ods"] }, { _0: "application/vnd.oasis.opendocument.spreadsheet-template", _1: ["ots"] }, { _0: "application/vnd.oasis.opendocument.text", _1: ["odt"] }, { _0: "application/vnd.oasis.opendocument.text-master", _1: ["odm"] }, { _0: "application/vnd.oasis.opendocument.text-template", _1: ["ott"] }, { _0: "application/vnd.oasis.opendocument.text-web", _1: ["oth"] }, { _0: "application/vnd.olpc-sugar", _1: ["xo"] }, { _0: "application/vnd.oma.dd2+xml", _1: ["dd2"] }, { _0: "application/vnd.openblox.game+xml", _1: ["obgx"] }, { _0: "application/vnd.openofficeorg.extension", _1: ["oxt"] }, { _0: "application/vnd.openstreetmap.data+xml", _1: ["osm"] }, { _0: "application/vnd.openxmlformats-officedocument.presentationml.presentation", _1: ["pptx"] }, { _0: "application/vnd.openxmlformats-officedocument.presentationml.slide", _1: ["sldx"] }, { _0: "application/vnd.openxmlformats-officedocument.presentationml.slideshow", _1: ["ppsx"] }, { _0: "application/vnd.openxmlformats-officedocument.presentationml.template", _1: ["potx"] }, { _0: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", _1: ["xlsx"] }, { _0: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", _1: ["xltx"] }, { _0: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", _1: ["docx"] }, { _0: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", _1: ["dotx"] }, { _0: "application/vnd.osgeo.mapguide.package", _1: ["mgp"] }, { _0: "application/vnd.osgi.dp", _1: ["dp"] }, { _0: "application/vnd.osgi.subsystem", _1: ["esa"] }, { _0: "application/vnd.palm", _1: ["pdb", "pqa", "oprc"] }, { _0: "application/vnd.pawaafile", _1: ["paw"] }, { _0: "application/vnd.pg.format", _1: ["str"] }, { _0: "application/vnd.pg.osasli", _1: ["ei6"] }, { _0: "application/vnd.picsel", _1: ["efif"] }, { _0: "application/vnd.pmi.widget", _1: ["wg"] }, { _0: "application/vnd.pocketlearn", _1: ["plf"] }, { _0: "application/vnd.powerbuilder6", _1: ["pbd"] }, { _0: "application/vnd.previewsystems.box", _1: ["box"] }, { _0: "application/vnd.proteus.magazine", _1: ["mgz"] }, { _0: "application/vnd.publishare-delta-tree", _1: ["qps"] }, { _0: "application/vnd.pvi.ptid1", _1: ["ptid"] }, { _0: "application/vnd.pwg-xhtml-print+xml", _1: ["xhtm"] }, { _0: "application/vnd.quark.quarkxpress", _1: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] }, { _0: "application/vnd.rar", _1: ["rar"] }, { _0: "application/vnd.realvnc.bed", _1: ["bed"] }, { _0: "application/vnd.recordare.musicxml", _1: ["mxl"] }, { _0: "application/vnd.recordare.musicxml+xml", _1: ["musicxml"] }, { _0: "application/vnd.rig.cryptonote", _1: ["cryptonote"] }, { _0: "application/vnd.rim.cod", _1: ["cod"] }, { _0: "application/vnd.rn-realmedia", _1: ["rm"] }, { _0: "application/vnd.rn-realmedia-vbr", _1: ["rmvb"] }, { _0: "application/vnd.route66.link66+xml", _1: ["link66"] }, { _0: "application/vnd.sailingtracker.track", _1: ["st"] }, { _0: "application/vnd.seemail", _1: ["see"] }, { _0: "application/vnd.sema", _1: ["sema"] }, { _0: "application/vnd.semd", _1: ["semd"] }, { _0: "application/vnd.semf", _1: ["semf"] }, { _0: "application/vnd.shana.informed.formdata", _1: ["ifm"] }, { _0: "application/vnd.shana.informed.formtemplate", _1: ["itp"] }, { _0: "application/vnd.shana.informed.interchange", _1: ["iif"] }, { _0: "application/vnd.shana.informed.package", _1: ["ipk"] }, { _0: "application/vnd.simtech-mindmapper", _1: ["twd", "twds"] }, { _0: "application/vnd.smaf", _1: ["mmf"] }, { _0: "application/vnd.smart.teacher", _1: ["teacher"] }, { _0: "application/vnd.software602.filler.form+xml", _1: ["fo"] }, { _0: "application/vnd.solent.sdkm+xml", _1: ["sdkm", "sdkd"] }, { _0: "application/vnd.spotfire.dxp", _1: ["dxp"] }, { _0: "application/vnd.spotfire.sfs", _1: ["sfs"] }, { _0: "application/vnd.stardivision.calc", _1: ["sdc"] }, { _0: "application/vnd.stardivision.draw", _1: ["sda"] }, { _0: "application/vnd.stardivision.impress", _1: ["sdd"] }, { _0: "application/vnd.stardivision.math", _1: ["smf"] }, { _0: "application/vnd.stardivision.writer", _1: ["sdw", "vor"] }, { _0: "application/vnd.stardivision.writer-global", _1: ["sgl"] }, { _0: "application/vnd.stepmania.package", _1: ["smzip"] }, { _0: "application/vnd.stepmania.stepchart", _1: ["sm"] }, { _0: "application/vnd.sun.wadl+xml", _1: ["wadl"] }, { _0: "application/vnd.sun.xml.calc", _1: ["sxc"] }, { _0: "application/vnd.sun.xml.calc.template", _1: ["stc"] }, { _0: "application/vnd.sun.xml.draw", _1: ["sxd"] }, { _0: "application/vnd.sun.xml.draw.template", _1: ["std"] }, { _0: "application/vnd.sun.xml.impress", _1: ["sxi"] }, { _0: "application/vnd.sun.xml.impress.template", _1: ["sti"] }, { _0: "application/vnd.sun.xml.math", _1: ["sxm"] }, { _0: "application/vnd.sun.xml.writer", _1: ["sxw"] }, { _0: "application/vnd.sun.xml.writer.global", _1: ["sxg"] }, { _0: "application/vnd.sun.xml.writer.template", _1: ["stw"] }, { _0: "application/vnd.sus-calendar", _1: ["sus", "susp"] }, { _0: "application/vnd.svd", _1: ["svd"] }, { _0: "application/vnd.symbian.install", _1: ["sis", "sisx"] }, { _0: "application/vnd.syncml+xml", _1: ["xsm"] }, { _0: "application/vnd.syncml.dm+wbxml", _1: ["bdm"] }, { _0: "application/vnd.syncml.dm+xml", _1: ["xdm"] }, { _0: "application/vnd.syncml.dmddf+xml", _1: ["ddf"] }, { _0: "application/vnd.tao.intent-module-archive", _1: ["tao"] }, { _0: "application/vnd.tcpdump.pcap", _1: ["pcap", "cap", "dmp"] }, { _0: "application/vnd.tmobile-livetv", _1: ["tmo"] }, { _0: "application/vnd.trid.tpt", _1: ["tpt"] }, { _0: "application/vnd.triscape.mxs", _1: ["mxs"] }, { _0: "application/vnd.trueapp", _1: ["tra"] }, { _0: "application/vnd.ufdl", _1: ["ufd", "ufdl"] }, { _0: "application/vnd.uiq.theme", _1: ["utz"] }, { _0: "application/vnd.umajin", _1: ["umj"] }, { _0: "application/vnd.unity", _1: ["unityweb"] }, { _0: "application/vnd.uoml+xml", _1: ["uoml", "uo"] }, { _0: "application/vnd.vcx", _1: ["vcx"] }, { _0: "application/vnd.visio", _1: ["vsd", "vst", "vss", "vsw"] }, { _0: "application/vnd.visionary", _1: ["vis"] }, { _0: "application/vnd.vsf", _1: ["vsf"] }, { _0: "application/vnd.wap.wbxml", _1: ["wbxml"] }, { _0: "application/vnd.wap.wmlc", _1: ["wmlc"] }, { _0: "application/vnd.wap.wmlscriptc", _1: ["wmlsc"] }, { _0: "application/vnd.webturbo", _1: ["wtb"] }, { _0: "application/vnd.wolfram.player", _1: ["nbp"] }, { _0: "application/vnd.wordperfect", _1: ["wpd"] }, { _0: "application/vnd.wqd", _1: ["wqd"] }, { _0: "application/vnd.wt.stf", _1: ["stf"] }, { _0: "application/vnd.xara", _1: ["xar"] }, { _0: "application/vnd.xfdl", _1: ["xfdl"] }, { _0: "application/vnd.yamaha.hv-dic", _1: ["hvd"] }, { _0: "application/vnd.yamaha.hv-script", _1: ["hvs"] }, { _0: "application/vnd.yamaha.hv-voice", _1: ["hvp"] }, { _0: "application/vnd.yamaha.openscoreformat", _1: ["osf"] }, { _0: "application/vnd.yamaha.openscoreformat.osfpvg+xml", _1: ["osfpvg"] }, { _0: "application/vnd.yamaha.smaf-audio", _1: ["saf"] }, { _0: "application/vnd.yamaha.smaf-phrase", _1: ["spf"] }, { _0: "application/vnd.yellowriver-custom-menu", _1: ["cmp"] }, { _0: "application/vnd.zul", _1: ["zir", "zirz"] }, { _0: "application/vnd.zzazz.deck+xml", _1: ["zaz"] }, { _0: "application/x-7z-compressed", _1: ["7z"] }, { _0: "application/x-abiword", _1: ["abw"] }, { _0: "application/x-ace-compressed", _1: ["ace"] }, { _0: "application/x-apple-diskimage", _1: ["*dmg"] }, { _0: "application/x-arj", _1: ["arj"] }, { _0: "application/x-authorware-bin", _1: ["aab", "x32", "u32", "vox"] }, { _0: "application/x-authorware-map", _1: ["aam"] }, { _0: "application/x-authorware-seg", _1: ["aas"] }, { _0: "application/x-bcpio", _1: ["bcpio"] }, { _0: "application/x-bdoc", _1: ["*bdoc"] }, { _0: "application/x-bittorrent", _1: ["torrent"] }, { _0: "application/x-blorb", _1: ["blb", "blorb"] }, { _0: "application/x-bzip", _1: ["bz"] }, { _0: "application/x-bzip2", _1: ["bz2", "boz"] }, { _0: "application/x-cbr", _1: ["cbr", "cba", "cbt", "cbz", "cb7"] }, { _0: "application/x-cdlink", _1: ["vcd"] }, { _0: "application/x-cfs-compressed", _1: ["cfs"] }, { _0: "application/x-chat", _1: ["chat"] }, { _0: "application/x-chess-pgn", _1: ["pgn"] }, { _0: "application/x-chrome-extension", _1: ["crx"] }, { _0: "application/x-cocoa", _1: ["cco"] }, { _0: "application/x-conference", _1: ["nsc"] }, { _0: "application/x-cpio", _1: ["cpio"] }, { _0: "application/x-csh", _1: ["csh"] }, { _0: "application/x-debian-package", _1: ["*deb", "udeb"] }, { _0: "application/x-dgc-compressed", _1: ["dgc"] }, { _0: "application/x-director", _1: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] }, { _0: "application/x-doom", _1: ["wad"] }, { _0: "application/x-dtbncx+xml", _1: ["ncx"] }, { _0: "application/x-dtbook+xml", _1: ["dtb"] }, { _0: "application/x-dtbresource+xml", _1: ["res"] }, { _0: "application/x-dvi", _1: ["dvi"] }, { _0: "application/x-envoy", _1: ["evy"] }, { _0: "application/x-eva", _1: ["eva"] }, { _0: "application/x-font-bdf", _1: ["bdf"] }, { _0: "application/x-font-ghostscript", _1: ["gsf"] }, { _0: "application/x-font-linux-psf", _1: ["psf"] }, { _0: "application/x-font-pcf", _1: ["pcf"] }, { _0: "application/x-font-snf", _1: ["snf"] }, { _0: "application/x-font-type1", _1: ["pfa", "pfb", "pfm", "afm"] }, { _0: "application/x-freearc", _1: ["arc"] }, { _0: "application/x-futuresplash", _1: ["spl"] }, { _0: "application/x-gca-compressed", _1: ["gca"] }, { _0: "application/x-glulx", _1: ["ulx"] }, { _0: "application/x-gnumeric", _1: ["gnumeric"] }, { _0: "application/x-gramps-xml", _1: ["gramps"] }, { _0: "application/x-gtar", _1: ["gtar"] }, { _0: "application/x-hdf", _1: ["hdf"] }, { _0: "application/x-httpd-php", _1: ["php"] }, { _0: "application/x-install-instructions", _1: ["install"] }, { _0: "application/x-iso9660-image", _1: ["*iso"] }, { _0: "application/x-iwork-keynote-sffkey", _1: ["*key"] }, { _0: "application/x-iwork-numbers-sffnumbers", _1: ["*numbers"] }, { _0: "application/x-iwork-pages-sffpages", _1: ["*pages"] }, { _0: "application/x-java-archive-diff", _1: ["jardiff"] }, { _0: "application/x-java-jnlp-file", _1: ["jnlp"] }, { _0: "application/x-keepass2", _1: ["kdbx"] }, { _0: "application/x-latex", _1: ["latex"] }, { _0: "application/x-lua-bytecode", _1: ["luac"] }, { _0: "application/x-lzh-compressed", _1: ["lzh", "lha"] }, { _0: "application/x-makeself", _1: ["run"] }, { _0: "application/x-mie", _1: ["mie"] }, { _0: "application/x-mobipocket-ebook", _1: ["*prc", "mobi"] }, { _0: "application/x-ms-application", _1: ["application"] }, { _0: "application/x-ms-shortcut", _1: ["lnk"] }, { _0: "application/x-ms-wmd", _1: ["wmd"] }, { _0: "application/x-ms-wmz", _1: ["wmz"] }, { _0: "application/x-ms-xbap", _1: ["xbap"] }, { _0: "application/x-msaccess", _1: ["mdb"] }, { _0: "application/x-msbinder", _1: ["obd"] }, { _0: "application/x-mscardfile", _1: ["crd"] }, { _0: "application/x-msclip", _1: ["clp"] }, { _0: "application/x-msdos-program", _1: ["*exe"] }, { _0: "application/x-msdownload", _1: ["*exe", "*dll", "com", "bat", "*msi"] }, { _0: "application/x-msmediaview", _1: ["mvb", "m13", "m14"] }, { _0: "application/x-msmetafile", _1: ["*wmf", "*wmz", "*emf", "emz"] }, { _0: "application/x-msmoney", _1: ["mny"] }, { _0: "application/x-mspublisher", _1: ["pub"] }, { _0: "application/x-msschedule", _1: ["scd"] }, { _0: "application/x-msterminal", _1: ["trm"] }, { _0: "application/x-mswrite", _1: ["wri"] }, { _0: "application/x-netcdf", _1: ["nc", "cdf"] }, { _0: "application/x-ns-proxy-autoconfig", _1: ["pac"] }, { _0: "application/x-nzb", _1: ["nzb"] }, { _0: "application/x-perl", _1: ["pl", "pm"] }, { _0: "application/x-pilot", _1: ["*prc", "*pdb"] }, { _0: "application/x-pkcs12", _1: ["p12", "pfx"] }, { _0: "application/x-pkcs7-certificates", _1: ["p7b", "spc"] }, { _0: "application/x-pkcs7-certreqresp", _1: ["p7r"] }, { _0: "application/x-rar-compressed", _1: ["*rar"] }, { _0: "application/x-redhat-package-manager", _1: ["rpm"] }, { _0: "application/x-research-info-systems", _1: ["ris"] }, { _0: "application/x-sea", _1: ["sea"] }, { _0: "application/x-sh", _1: ["sh"] }, { _0: "application/x-shar", _1: ["shar"] }, { _0: "application/x-shockwave-flash", _1: ["swf"] }, { _0: "application/x-silverlight-app", _1: ["xap"] }, { _0: "application/x-sql", _1: ["*sql"] }, { _0: "application/x-stuffit", _1: ["sit"] }, { _0: "application/x-stuffitx", _1: ["sitx"] }, { _0: "application/x-subrip", _1: ["srt"] }, { _0: "application/x-sv4cpio", _1: ["sv4cpio"] }, { _0: "application/x-sv4crc", _1: ["sv4crc"] }, { _0: "application/x-t3vm-image", _1: ["t3"] }, { _0: "application/x-tads", _1: ["gam"] }, { _0: "application/x-tar", _1: ["tar"] }, { _0: "application/x-tcl", _1: ["tcl", "tk"] }, { _0: "application/x-tex", _1: ["tex"] }, { _0: "application/x-tex-tfm", _1: ["tfm"] }, { _0: "application/x-texinfo", _1: ["texinfo", "texi"] }, { _0: "application/x-tgif", _1: ["*obj"] }, { _0: "application/x-ustar", _1: ["ustar"] }, { _0: "application/x-virtualbox-hdd", _1: ["hdd"] }, { _0: "application/x-virtualbox-ova", _1: ["ova"] }, { _0: "application/x-virtualbox-ovf", _1: ["ovf"] }, { _0: "application/x-virtualbox-vbox", _1: ["vbox"] }, { _0: "application/x-virtualbox-vbox-extpack", _1: ["vbox-extpack"] }, { _0: "application/x-virtualbox-vdi", _1: ["vdi"] }, { _0: "application/x-virtualbox-vhd", _1: ["vhd"] }, { _0: "application/x-virtualbox-vmdk", _1: ["vmdk"] }, { _0: "application/x-wais-source", _1: ["src"] }, { _0: "application/x-web-app-manifest+json", _1: ["webapp"] }, { _0: "application/x-x509-ca-cert", _1: ["der", "crt", "pem"] }, { _0: "application/x-xfig", _1: ["fig"] }, { _0: "application/x-xliff+xml", _1: ["*xlf"] }, { _0: "application/x-xpinstall", _1: ["xpi"] }, { _0: "application/x-xz", _1: ["xz"] }, { _0: "application/x-zmachine", _1: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] }, { _0: "audio/vnd.dece.audio", _1: ["uva", "uvva"] }, { _0: "audio/vnd.digital-winds", _1: ["eol"] }, { _0: "audio/vnd.dra", _1: ["dra"] }, { _0: "audio/vnd.dts", _1: ["dts"] }, { _0: "audio/vnd.dts.hd", _1: ["dtshd"] }, { _0: "audio/vnd.lucent.voice", _1: ["lvp"] }, { _0: "audio/vnd.ms-playready.media.pya", _1: ["pya"] }, { _0: "audio/vnd.nuera.ecelp4800", _1: ["ecelp4800"] }, { _0: "audio/vnd.nuera.ecelp7470", _1: ["ecelp7470"] }, { _0: "audio/vnd.nuera.ecelp9600", _1: ["ecelp9600"] }, { _0: "audio/vnd.rip", _1: ["rip"] }, { _0: "audio/x-aac", _1: ["*aac"] }, { _0: "audio/x-aiff", _1: ["aif", "aiff", "aifc"] }, { _0: "audio/x-caf", _1: ["caf"] }, { _0: "audio/x-flac", _1: ["flac"] }, { _0: "audio/x-m4a", _1: ["*m4a"] }, { _0: "audio/x-matroska", _1: ["mka"] }, { _0: "audio/x-mpegurl", _1: ["m3u"] }, { _0: "audio/x-ms-wax", _1: ["wax"] }, { _0: "audio/x-ms-wma", _1: ["wma"] }, { _0: "audio/x-pn-realaudio", _1: ["ram", "ra"] }, { _0: "audio/x-pn-realaudio-plugin", _1: ["rmp"] }, { _0: "audio/x-realaudio", _1: ["*ra"] }, { _0: "audio/x-wav", _1: ["*wav"] }, { _0: "chemical/x-cdx", _1: ["cdx"] }, { _0: "chemical/x-cif", _1: ["cif"] }, { _0: "chemical/x-cmdf", _1: ["cmdf"] }, { _0: "chemical/x-cml", _1: ["cml"] }, { _0: "chemical/x-csml", _1: ["csml"] }, { _0: "chemical/x-xyz", _1: ["xyz"] }, { _0: "image/prs.btif", _1: ["btif", "btf"] }, { _0: "image/prs.pti", _1: ["pti"] }, { _0: "image/vnd.adobe.photoshop", _1: ["psd"] }, { _0: "image/vnd.airzip.accelerator.azv", _1: ["azv"] }, { _0: "image/vnd.dece.graphic", _1: ["uvi", "uvvi", "uvg", "uvvg"] }, { _0: "image/vnd.djvu", _1: ["djvu", "djv"] }, { _0: "image/vnd.dvb.subtitle", _1: ["*sub"] }, { _0: "image/vnd.dwg", _1: ["dwg"] }, { _0: "image/vnd.dxf", _1: ["dxf"] }, { _0: "image/vnd.fastbidsheet", _1: ["fbs"] }, { _0: "image/vnd.fpx", _1: ["fpx"] }, { _0: "image/vnd.fst", _1: ["fst"] }, { _0: "image/vnd.fujixerox.edmics-mmr", _1: ["mmr"] }, { _0: "image/vnd.fujixerox.edmics-rlc", _1: ["rlc"] }, { _0: "image/vnd.microsoft.icon", _1: ["ico"] }, { _0: "image/vnd.ms-dds", _1: ["dds"] }, { _0: "image/vnd.ms-modi", _1: ["mdi"] }, { _0: "image/vnd.ms-photo", _1: ["wdp"] }, { _0: "image/vnd.net-fpx", _1: ["npx"] }, { _0: "image/vnd.pco.b16", _1: ["b16"] }, { _0: "image/vnd.tencent.tap", _1: ["tap"] }, { _0: "image/vnd.valve.source.texture", _1: ["vtf"] }, { _0: "image/vnd.wap.wbmp", _1: ["wbmp"] }, { _0: "image/vnd.xiff", _1: ["xif"] }, { _0: "image/vnd.zbrush.pcx", _1: ["pcx"] }, { _0: "image/x-3ds", _1: ["3ds"] }, { _0: "image/x-cmu-raster", _1: ["ras"] }, { _0: "image/x-cmx", _1: ["cmx"] }, { _0: "image/x-freehand", _1: ["fh", "fhc", "fh4", "fh5", "fh7"] }, { _0: "image/x-icon", _1: ["*ico"] }, { _0: "image/x-jng", _1: ["jng"] }, { _0: "image/x-mrsid-image", _1: ["sid"] }, { _0: "image/x-ms-bmp", _1: ["*bmp"] }, { _0: "image/x-pcx", _1: ["*pcx"] }, { _0: "image/x-pict", _1: ["pic", "pct"] }, { _0: "image/x-portable-anymap", _1: ["pnm"] }, { _0: "image/x-portable-bitmap", _1: ["pbm"] }, { _0: "image/x-portable-graymap", _1: ["pgm"] }, { _0: "image/x-portable-pixmap", _1: ["ppm"] }, { _0: "image/x-rgb", _1: ["rgb"] }, { _0: "image/x-tga", _1: ["tga"] }, { _0: "image/x-xbitmap", _1: ["xbm"] }, { _0: "image/x-xpixmap", _1: ["xpm"] }, { _0: "image/x-xwindowdump", _1: ["xwd"] }, { _0: "message/vnd.wfa.wsc", _1: ["wsc"] }, { _0: "model/vnd.cld", _1: ["cld"] }, { _0: "model/vnd.collada+xml", _1: ["dae"] }, { _0: "model/vnd.dwf", _1: ["dwf"] }, { _0: "model/vnd.gdl", _1: ["gdl"] }, { _0: "model/vnd.gtw", _1: ["gtw"] }, { _0: "model/vnd.mts", _1: ["mts"] }, { _0: "model/vnd.opengex", _1: ["ogex"] }, { _0: "model/vnd.parasolid.transmit.binary", _1: ["x_b"] }, { _0: "model/vnd.parasolid.transmit.text", _1: ["x_t"] }, { _0: "model/vnd.pytha.pyox", _1: ["pyo", "pyox"] }, { _0: "model/vnd.sap.vds", _1: ["vds"] }, { _0: "model/vnd.usda", _1: ["usda"] }, { _0: "model/vnd.usdz+zip", _1: ["usdz"] }, { _0: "model/vnd.valve.source.compiled-map", _1: ["bsp"] }, { _0: "model/vnd.vtu", _1: ["vtu"] }, { _0: "text/prs.lines.tag", _1: ["dsc"] }, { _0: "text/vnd.curl", _1: ["curl"] }, { _0: "text/vnd.curl.dcurl", _1: ["dcurl"] }, { _0: "text/vnd.curl.mcurl", _1: ["mcurl"] }, { _0: "text/vnd.curl.scurl", _1: ["scurl"] }, { _0: "text/vnd.dvb.subtitle", _1: ["sub"] }, { _0: "text/vnd.familysearch.gedcom", _1: ["ged"] }, { _0: "text/vnd.fly", _1: ["fly"] }, { _0: "text/vnd.fmi.flexstor", _1: ["flx"] }, { _0: "text/vnd.graphviz", _1: ["gv"] }, { _0: "text/vnd.in3d.3dml", _1: ["3dml"] }, { _0: "text/vnd.in3d.spot", _1: ["spot"] }, { _0: "text/vnd.sun.j2me.app-descriptor", _1: ["jad"] }, { _0: "text/vnd.wap.wml", _1: ["wml"] }, { _0: "text/vnd.wap.wmlscript", _1: ["wmls"] }, { _0: "text/x-asm", _1: ["s", "asm"] }, { _0: "text/x-c", _1: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] }, { _0: "text/x-component", _1: ["htc"] }, { _0: "text/x-fortran", _1: ["f", "for", "f77", "f90"] }, { _0: "text/x-handlebars-template", _1: ["hbs"] }, { _0: "text/x-java-source", _1: ["java"] }, { _0: "text/x-lua", _1: ["lua"] }, { _0: "text/x-markdown", _1: ["mkd"] }, { _0: "text/x-nfo", _1: ["nfo"] }, { _0: "text/x-opml", _1: ["opml"] }, { _0: "text/x-org", _1: ["*org"] }, { _0: "text/x-pascal", _1: ["p", "pas"] }, { _0: "text/x-processing", _1: ["pde"] }, { _0: "text/x-sass", _1: ["sass"] }, { _0: "text/x-scss", _1: ["scss"] }, { _0: "text/x-setext", _1: ["etx"] }, { _0: "text/x-sfv", _1: ["sfv"] }, { _0: "text/x-suse-ymp", _1: ["ymp"] }, { _0: "text/x-uuencode", _1: ["uu"] }, { _0: "text/x-vcalendar", _1: ["vcs"] }, { _0: "text/x-vcard", _1: ["vcf"] }, { _0: "video/vnd.dece.hd", _1: ["uvh", "uvvh"] }, { _0: "video/vnd.dece.mobile", _1: ["uvm", "uvvm"] }, { _0: "video/vnd.dece.pd", _1: ["uvp", "uvvp"] }, { _0: "video/vnd.dece.sd", _1: ["uvs", "uvvs"] }, { _0: "video/vnd.dece.video", _1: ["uvv", "uvvv"] }, { _0: "video/vnd.dvb.file", _1: ["dvb"] }, { _0: "video/vnd.fvt", _1: ["fvt"] }, { _0: "video/vnd.mpegurl", _1: ["mxu", "m4u"] }, { _0: "video/vnd.ms-playready.media.pyv", _1: ["pyv"] }, { _0: "video/vnd.uvvu.mp4", _1: ["uvu", "uvvu"] }, { _0: "video/vnd.vivo", _1: ["viv"] }, { _0: "video/x-f4v", _1: ["f4v"] }, { _0: "video/x-fli", _1: ["fli"] }, { _0: "video/x-flv", _1: ["flv"] }, { _0: "video/x-m4v", _1: ["m4v"] }, { _0: "video/x-matroska", _1: ["mkv", "mk3d", "mks"] }, { _0: "video/x-mng", _1: ["mng"] }, { _0: "video/x-ms-asf", _1: ["asf", "asx"] }, { _0: "video/x-ms-vob", _1: ["vob"] }, { _0: "video/x-ms-wm", _1: ["wm"] }, { _0: "video/x-ms-wmv", _1: ["wmv"] }, { _0: "video/x-ms-wmx", _1: ["wmx"] }, { _0: "video/x-ms-wvx", _1: ["wvx"] }, { _0: "video/x-msvideo", _1: ["avi"] }, { _0: "video/x-sgi-movie", _1: ["movie"] }, { _0: "video/x-smv", _1: ["smv"] }, { _0: "x-conference/x-cooltalk", _1: ["ice"] }]);
const oboard$mocket_example$main$$receiver = { buffer: moonbitlang$core$buffer$$new(moonbitlang$core$buffer$$new$46$size_hint$46$default()), listener_map: moonbitlang$core$builtin$$Map$new$6$(moonbitlang$core$builtin$$Map$new$46$capacity$46$default$6$()) };
function moonbitlang$core$strconv$$syntax_err$7$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$8$() {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$range_err$7$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$9$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$builtin$$Show$output$10$(self, logger) {
  const _StrConvError = self;
  const _x = _StrConvError._0;
  logger.method_0(logger.self, _x);
}
function moonbitlang$core$strconv$$base_err$11$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  let rest;
  _L: {
    let rest$2;
    _L$2: {
      let rest$3;
      _L$3: {
        let rest$4;
        _L$4: {
          if (moonbitlang$core$string$$StringView$length_ge(view, 2)) {
            const _x = moonbitlang$core$string$$StringView$op_get(view, 0);
            if (_x === 48) {
              const _x$2 = moonbitlang$core$string$$StringView$op_get(view, 1);
              switch (_x$2) {
                case 120: {
                  const _x$3 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$4 = _x$3;
                  break _L$4;
                }
                case 88: {
                  const _x$4 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$4 = _x$4;
                  break _L$4;
                }
                case 111: {
                  const _x$5 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$3 = _x$5;
                  break _L$3;
                }
                case 79: {
                  const _x$6 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$3 = _x$6;
                  break _L$3;
                }
                case 98: {
                  const _x$7 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$2 = _x$7;
                  break _L$2;
                }
                case 66: {
                  const _x$8 = moonbitlang$core$string$$StringView$op_as_view(view, 2, undefined);
                  rest$2 = _x$8;
                  break _L$2;
                }
                default: {
                  rest = view;
                  break _L;
                }
              }
            } else {
              rest = view;
              break _L;
            }
          } else {
            rest = view;
            break _L;
          }
        }
        _L$5: {
          switch (base) {
            case 0: {
              break _L$5;
            }
            case 16: {
              break _L$5;
            }
            default: {
              return moonbitlang$core$strconv$$base_err$11$();
            }
          }
        }
        return new Result$Ok$3$({ _0: 16, _1: rest$4, _2: true });
      }
      _L$4: {
        switch (base) {
          case 0: {
            break _L$4;
          }
          case 8: {
            break _L$4;
          }
          default: {
            return moonbitlang$core$strconv$$base_err$11$();
          }
        }
      }
      return new Result$Ok$3$({ _0: 8, _1: rest$3, _2: true });
    }
    _L$3: {
      switch (base) {
        case 0: {
          break _L$3;
        }
        case 2: {
          break _L$3;
        }
        default: {
          return moonbitlang$core$strconv$$base_err$11$();
        }
      }
    }
    return new Result$Ok$3$({ _0: 2, _1: rest$2, _2: true });
  }
  if (base === 0) {
    return new Result$Ok$3$({ _0: 10, _1: rest, _2: false });
  } else {
    return 2 <= base && base <= 36 ? new Result$Ok$3$({ _0: base, _1: rest, _2: false }) : moonbitlang$core$strconv$$base_err$11$();
  }
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, $16L), $1L) : moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, $16L) : moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$parse_int64(str, base) {
  if (moonbitlang$core$builtin$$op_notequal$4$(str, "")) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = moonbitlang$core$string$$String$op_as_view(str, moonbitlang$core$string$$String$op_as_view$46$start$46$default(), undefined);
        if (moonbitlang$core$string$$StringView$length_ge(_bind$2, 1)) {
          const _x = moonbitlang$core$string$$StringView$op_get(_bind$2, 0);
          switch (_x) {
            case 43: {
              const _x$2 = moonbitlang$core$string$$StringView$op_as_view(_bind$2, 1, undefined);
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _x$3 = moonbitlang$core$string$$StringView$op_as_view(_bind$2, 1, undefined);
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _x = _bind._0;
    const _x$2 = _bind._1;
    const _bind$2 = moonbitlang$core$strconv$$check_and_consume_base(_x$2, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _x$3 = _bind$3._0;
    const _x$4 = _bind$3._1;
    const _x$5 = _bind$3._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_x$3, _x);
    let has_digit;
    if (moonbitlang$core$string$$StringView$length_ge(_x$4, 1)) {
      const _x$6 = moonbitlang$core$string$$StringView$op_get(_x$4, 0);
      if (48 <= _x$6 && _x$6 <= 57) {
        has_digit = true;
      } else {
        if (97 <= _x$6 && _x$6 <= 122) {
          has_digit = true;
        } else {
          if (65 <= _x$6 && _x$6 <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$StringView$length_ge(_x$4, 2)) {
              if (_x$6 === 95) {
                const _x$7 = moonbitlang$core$string$$StringView$op_get(_x$4, 1);
                has_digit = 48 <= _x$7 && _x$7 <= 57 ? true : 97 <= _x$7 && _x$7 <= 122 ? true : 65 <= _x$7 && _x$7 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _x$4;
      let _tmp$3 = $0L;
      let _tmp$4 = _x$5;
      while (true) {
        const _param = _tmp$2;
        const _param$2 = _tmp$3;
        const _param$3 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$StringView$length_eq(_param, 1)) {
            const _x$6 = moonbitlang$core$string$$StringView$op_get(_param, 0);
            if (_x$6 === 95) {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$7$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _x$7 = moonbitlang$core$string$$StringView$op_as_view(_param, 1, undefined);
              acc = _param$2;
              rest$2 = _x$7;
              c = _x$6;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$StringView$length_ge(_param, 1)) {
              const _x$6 = moonbitlang$core$string$$StringView$op_get(_param, 0);
              if (_x$6 === 95) {
                if (_param$3 === false) {
                  const _bind$4 = moonbitlang$core$strconv$$syntax_err$7$();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _x$7 = moonbitlang$core$string$$StringView$op_as_view(_param, 1, undefined);
                  _tmp$2 = _x$7;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _x$7 = moonbitlang$core$string$$StringView$op_as_view(_param, 1, undefined);
                acc = _param$2;
                rest$2 = _x$7;
                c = _x$6;
                break _L$2;
              }
            } else {
              _tmp = _param$2;
              break;
            }
          }
        }
        let d;
        if (48 <= c && c <= 57) {
          d = moonbitlang$core$char$$Char$op_sub(c, 48);
        } else {
          if (97 <= c && c <= 122) {
            d = moonbitlang$core$char$$Char$op_sub(c, 97) + 10 | 0;
          } else {
            if (65 <= c && c <= 90) {
              d = moonbitlang$core$char$$Char$op_sub(c, 65) + 10 | 0;
            } else {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$8$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _x$3) {
          if (_x) {
            if (moonbitlang$core$builtin$$op_ge$7$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$int64$$Int64$op_sub(moonbitlang$core$int64$$Int64$op_mul(acc, moonbitlang$core$int$$Int$to_int64(_x$3)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_le$7$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$7$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$7$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$op_lt$7$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_mul(acc, moonbitlang$core$int$$Int$to_int64(_x$3)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_ge$7$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$7$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$7$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = moonbitlang$core$strconv$$syntax_err$7$();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$0$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$7$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$7$();
  }
}
function moonbitlang$core$strconv$$parse_int(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$7$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$7$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$9$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$1$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$strconv$$parse_int$46$base$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$Show$output$12$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$double$$Double$floor(_tmp) {
  return Math.floor(_tmp);
}
function moonbitlang$core$option$$Option$is_empty$8$(self) {
  return self === undefined;
}
function moonbitlang$core$option$$Option$or$4$(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$or$13$(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$math$$floor(input) {
  return moonbitlang$core$double$$Double$floor(input);
}
function moonbitlang$core$math$$maximum$8$(x, y) {
  return x > y ? x : y;
}
function moonbitlang$core$math$$minimum$8$(x, y) {
  return x > y ? y : x;
}
function moonbitlang$core$builtin$$op_lt$7$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) < 0;
}
function moonbitlang$core$builtin$$abort$14$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$15$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$16$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$8$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$9$(msg) {
  $panic();
}
function moonbitlang$core$builtin$$op_le$7$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_ge$7$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) >= 0;
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$byte$$Byte$default() {
  return 0;
}
function moonbitlang$core$char$$Char$to_uint(self) {
  return self;
}
function moonbitlang$core$uint$$UInt$to_byte(self) {
  return self & 255;
}
function moonbitlang$core$array$$FixedArray$set_utf16le_char(self, offset, value) {
  const code = moonbitlang$core$char$$Char$to_uint(value);
  if (code >>> 0 < 65536 >>> 0) {
    self[offset] = moonbitlang$core$uint$$UInt$to_byte(code & 255);
    self[offset + 1 | 0] = moonbitlang$core$uint$$UInt$to_byte(code >>> 8 | 0);
    return 2;
  } else {
    if (code >>> 0 < 1114112 >>> 0) {
      const hi = (code >>> 0) - (65536 >>> 0) | 0;
      const lo = hi >>> 10 | 55296;
      const hi$2 = hi & 1023 | 56320;
      self[offset] = moonbitlang$core$uint$$UInt$to_byte(lo & 255);
      self[offset + 1 | 0] = moonbitlang$core$uint$$UInt$to_byte(lo >>> 8 | 0);
      self[offset + 2 | 0] = moonbitlang$core$uint$$UInt$to_byte(hi$2 & 255);
      self[offset + 3 | 0] = moonbitlang$core$uint$$UInt$to_byte(hi$2 >>> 8 | 0);
      return 4;
    } else {
      return moonbitlang$core$builtin$$abort$8$("Char out of range");
    }
  }
}
function moonbitlang$core$builtin$$unsafe_sub_string(_tmp, _tmp$2, _tmp$3) {
  return $unsafe_bytes_sub_string(_tmp, _tmp$2, _tmp$3);
}
function moonbitlang$core$bytes$$Bytes$to_unchecked_string(self, offset, length) {
  const len = self.length;
  return offset >= 0 && (length >= 0 && (offset + length | 0) <= len) ? moonbitlang$core$builtin$$unsafe_sub_string(self, offset, length) : $panic();
}
function moonbitlang$core$builtin$$StringBuilder$write_char(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$17$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$17$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_notequal$18$(x, y) {
  return !moonbitlang$core$option$$Option$op_equal$19$(x, y);
}
function moonbitlang$core$array$$Array$op_get$8$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$20$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$21$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$18$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$4$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$22$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$array$$Array$op_get$23$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$builtin$$StringBuilder$write_string(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$bytes$$Bytes$makei(length, value) {
  if (length <= 0) {
    return new Uint8Array([]);
  }
  const arr = $make_array_len_and_init(length, value(0));
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < length) {
      arr[i] = value(i);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$FixedArray$blit_from_string(self, bytes_offset, str, str_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (str_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = str.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (str_offset >= 0 && e2 < len2)))) {
    const end_str_offset = str_offset + length | 0;
    let _tmp = str_offset;
    let _tmp$2 = bytes_offset;
    while (true) {
      const i = _tmp;
      const j = _tmp$2;
      if (i < end_str_offset) {
        const c = moonbitlang$core$char$$Char$to_uint(str.charCodeAt(i));
        self[j] = moonbitlang$core$uint$$UInt$to_byte(c & 255);
        self[j + 1 | 0] = moonbitlang$core$uint$$UInt$to_byte(c >>> 8 | 0);
        const _tmp$3 = i + 1 | 0;
        const _tmp$4 = j + 2 | 0;
        _tmp = _tmp$3;
        _tmp$2 = _tmp$4;
        continue;
      } else {
        return;
      }
    }
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$bytes$$Bytes$of_string(str) {
  const self = $make_array_len_and_init(Math.imul(str.length, 2) | 0, moonbitlang$core$byte$$Byte$default());
  moonbitlang$core$array$$FixedArray$blit_from_string(self, 0, str, 0, str.length);
  return self;
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$string$$String$substring$46$start$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$MyInt64$op_div(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _x = self.hi;
  const _x$2 = self.lo;
  const _x$3 = other.hi;
  const _x$4 = other.lo;
  const _func = exports.div_s;
  const lo = _func(_x$2, _x, _x$4, _x$3);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$int64$$Int64$op_div(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_div(self, other);
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _x = self.hi;
  const _x$2 = self.lo;
  const lo = _x$2 + blo | 0;
  const s = lo >> 31;
  const as_ = _x$2 >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_x + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$MyInt64$op_sub(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$int64$$Int64$op_sub(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_sub(self, other);
}
function moonbitlang$core$builtin$$MyInt64$to_int(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$to_string$46$abs$24$(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$to_string$46$write_digits$25$(_env, num) {
  const radix = _env._1;
  const buf = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$to_string$46$write_digits$25$(_env, num2);
  }
  moonbitlang$core$builtin$$StringBuilder$write_char(buf, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(moonbitlang$core$builtin$$to_string$46$abs$24$(num % radix | 0)));
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const size_hint = 2 <= radix && radix < 7 ? 36 : 8 <= radix && radix < 15 ? 18 : 16 <= radix && radix <= 36 ? 10 : moonbitlang$core$builtin$$abort$8$("radix must be between 2 and 36");
  const buf = moonbitlang$core$builtin$$StringBuilder$new(size_hint);
  if (self < 0) {
    moonbitlang$core$builtin$$StringBuilder$write_char(buf, 45);
  }
  const _env = { _0: buf, _1: radix };
  moonbitlang$core$builtin$$to_string$46$write_digits$25$(_env, moonbitlang$core$builtin$$to_string$46$abs$24$(self));
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$int$$Int$to_string$46$radix$46$default() {
  return 10;
}
function moonbitlang$core$builtin$$Show$to_string$8$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$tuple$$Tuple2$op_equal$26$(self, other) {
  return self._0 === other._0 && self._1 === other._1;
}
function moonbitlang$core$builtin$$Logger$write_object$13$(self, obj) {
  moonbitlang$core$builtin$$Show$output$27$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$8$(self, obj) {
  moonbitlang$core$builtin$$Show$output$8$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$4$(self, obj) {
  moonbitlang$core$builtin$$Show$output$4$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$22$(self, obj) {
  moonbitlang$core$builtin$$Show$output$22$(obj, self);
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$23$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        dst[dst_offset + i | 0] = src[src_offset + i | 0];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        dst[dst_offset + i | 0] = src[src_offset + i | 0];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$op_gt$7$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) > 0;
}
function moonbitlang$core$builtin$$println$28$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$29$(input));
}
function moonbitlang$core$builtin$$println$22$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$30$(input));
}
function moonbitlang$core$builtin$$println$4$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$4$(input));
}
function moonbitlang$core$builtin$$Iter2$new$31$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter2$new$32$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter2$new$33$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$22$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$15$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$34$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$35$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$23$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$36$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$4$(f) {
  return f;
}
function moonbitlang$core$array$$Array$push$37$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$21$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$8$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$20$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$35$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$38$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Show$output$8$(self, logger) {
  logger.method_0(logger.self, moonbitlang$core$int$$Int$to_string(self, moonbitlang$core$int$$Int$to_string$46$radix$46$default()));
}
function moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i) {
  const self = _env._2;
  const logger = _env._1;
  const segment_start = _env._0;
  if (i > segment_start.val) {
    logger.method_1(logger.self, self, segment_start.val, i - segment_start.val | 0);
  }
  segment_start.val = i + 1 | 0;
}
function moonbitlang$core$builtin$$output$46$to_hex_digit$40$(i) {
  return i < 10 ? 48 + i | 0 : 97 + (i - 10 | 0) | 0;
}
function moonbitlang$core$builtin$$Show$output$4$(self, logger) {
  logger.method_3(logger.self, 34);
  const segment_start = { val: 0 };
  const _env = { _0: segment_start, _1: logger, _2: self };
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.length) {
      const c = self.charCodeAt(i);
      _L: {
        _L$2: {
          switch (c) {
            case 34: {
              break _L$2;
            }
            case 92: {
              break _L$2;
            }
            case 10: {
              moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
              logger.method_0(logger.self, "\\n");
              break;
            }
            case 13: {
              moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
              logger.method_0(logger.self, "\\r");
              break;
            }
            case 8: {
              moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
              logger.method_0(logger.self, "\\b");
              break;
            }
            case 9: {
              moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
              logger.method_0(logger.self, "\\t");
              break;
            }
            default: {
              const code = c;
              if (code < 32) {
                moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
                logger.method_3(logger.self, 92);
                logger.method_3(logger.self, 120);
                logger.method_3(logger.self, moonbitlang$core$builtin$$output$46$to_hex_digit$40$(code / 16 | 0));
                logger.method_3(logger.self, moonbitlang$core$builtin$$output$46$to_hex_digit$40$(code % 16 | 0));
              }
            }
          }
          break _L;
        }
        moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, i);
        logger.method_3(logger.self, 92);
        logger.method_3(logger.self, c);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$builtin$$output$46$flush_segment$39$(_env, self.length);
  logger.method_3(logger.self, 34);
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return self;
}
function moonbitlang$core$builtin$$Logger$write_iter$22$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$22$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$22$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$Logger$write_iter$46$prefix$46$default$22$() {
  return "[";
}
function moonbitlang$core$builtin$$Logger$write_iter$46$suffix$46$default$22$() {
  return "]";
}
function moonbitlang$core$builtin$$Logger$write_iter$46$sep$46$default$22$() {
  return ", ";
}
function moonbitlang$core$builtin$$Logger$write_iter$46$trailing$46$default$22$() {
  return false;
}
function moonbitlang$core$array$$Array$iter$22$(self) {
  return moonbitlang$core$builtin$$Iter$new$22$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$Array$iter$35$(self) {
  return moonbitlang$core$builtin$$Iter$new$35$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$builtin$$Show$output$41$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$22$(logger, moonbitlang$core$array$$Array$iter$22$(self), moonbitlang$core$builtin$$Logger$write_iter$46$prefix$46$default$22$(), moonbitlang$core$builtin$$Logger$write_iter$46$suffix$46$default$22$(), moonbitlang$core$builtin$$Logger$write_iter$46$sep$46$default$22$(), moonbitlang$core$builtin$$Logger$write_iter$46$trailing$46$default$22$());
}
function moonbitlang$core$string$$String$to_json(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$String(self);
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$uint$$UInt$to_uint64(self) {
  return moonbitlang$core$uint64$$UInt64$extend_uint(self);
}
function moonbitlang$core$double$$Double$convert_uint64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double_u(value);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$double$$Double$to_json(self) {
  if (self !== self || (self > moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405311L) || self < moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370497L))) {
    return $64$moonbitlang$47$core$47$builtin$46$Json$Null;
  }
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Number(self);
}
function moonbitlang$core$array$$Array$map$42$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$43$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$44$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$45$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$46$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$47$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$48$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$to_json$12$(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(moonbitlang$core$array$$Array$map$44$(self, moonbitlang$core$double$$Double$to_json));
}
function moonbitlang$core$array$$Array$to_json$38$(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(moonbitlang$core$array$$Array$map$46$(self, moonbitlang$core$builtin$$Map$to_json$33$));
}
function moonbitlang$core$array$$Array$to_json$49$(self) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(moonbitlang$core$array$$Array$map$45$(self, moonbitlang$core$array$$Array$to_json$12$));
}
function moonbitlang$core$array$$Array$make$18$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$23$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$op_set$8$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$18$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$op_set$23$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$array$$Array$each$34$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$50$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$51$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$35$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$36$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$builtin$$power_2_above(x, n) {
  let _tmp = x;
  while (true) {
    const i = _tmp;
    if (i >= n) {
      return i;
    }
    const next = i << 1;
    if (next < 0) {
      return i;
    }
    _tmp = next;
    continue;
  }
}
function moonbitlang$core$builtin$$Map$new$5$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$31$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$52$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$32$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$6$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$33$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$46$capacity$46$default$6$() {
  return 8;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$52$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set$5$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$5$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$5$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$31$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$31$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$32$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$32$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$6$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$6$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$6$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$52$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$52$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$52$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$33$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$33$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$31$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$31$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$5$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$5$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$52$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$52$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$6$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$6$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$32$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$32$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$33$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$33$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$from_array$31$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$31$(arr.length);
  moonbitlang$core$array$$Array$each$50$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$31$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$5$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$5$(arr.length);
  moonbitlang$core$array$$Array$each$34$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$5$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$32$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$32$(arr.length);
  moonbitlang$core$array$$Array$each$35$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$32$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$52$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$52$(arr.length);
  moonbitlang$core$array$$Array$each$51$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$52$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$33$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$33$(arr.length);
  moonbitlang$core$array$$Array$each$36$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$33$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$iter2$31$(self) {
  return moonbitlang$core$builtin$$Iter2$new$31$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(_x$2, _x$3), 0)) {
          return 0;
        } else {
          _tmp = self.list[_x$4].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$iter2$32$(self) {
  return moonbitlang$core$builtin$$Iter2$new$32$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(_x$2, _x$3), 0)) {
          return 0;
        } else {
          _tmp = self.list[_x$4].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$iter2$33$(self) {
  return moonbitlang$core$builtin$$Iter2$new$33$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(_x$2, _x$3), 0)) {
          return 0;
        } else {
          _tmp = self.list[_x$4].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$op_set$32$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$32$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$52$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$52$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$6$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$6$(self, key, value);
}
function moonbitlang$core$builtin$$Map$op_set$33$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$33$(self, key, value);
}
function moonbitlang$core$builtin$$Map$to_json$32$(self) {
  const object = moonbitlang$core$builtin$$Map$from_array$33$([]);
  const _bind = moonbitlang$core$builtin$$Map$iter2$32$(self);
  _bind((k, v) => {
    moonbitlang$core$builtin$$Map$op_set$33$(object, moonbitlang$core$builtin$$Show$to_string$4$(k), moonbitlang$core$string$$String$to_json(v));
    return 1;
  });
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(object);
}
function moonbitlang$core$builtin$$Map$to_json$33$(self) {
  const object = moonbitlang$core$builtin$$Map$from_array$33$([]);
  const _bind = moonbitlang$core$builtin$$Map$iter2$33$(self);
  _bind((k, v) => {
    moonbitlang$core$builtin$$Map$op_set$33$(object, moonbitlang$core$builtin$$Show$to_string$4$(k), moonbitlang$core$json$$Json$to_json(v));
    return 1;
  });
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(object);
}
function moonbitlang$core$char$$Char$op_sub(self, that) {
  return self - that | 0;
}
function moonbitlang$core$byte$$Byte$to_int64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$array$$Array$unsafe_pop$8$(self) {
  return moonbitlang$core$builtin$$JSArray$pop(self);
}
function moonbitlang$core$builtin$$MyInt64$op_add(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$int64$$Int64$op_add(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_add(self, other);
}
function moonbitlang$core$option$$Option$op_equal$19$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _x$2 = _Some$2;
      return moonbitlang$core$tuple$$Tuple2$op_equal$26$(_x, _x$2);
    }
  }
}
function moonbitlang$core$option$$Option$unwrap$8$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$54$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$55$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$20$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$19$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$12$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some._0;
    return _x;
  }
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$MyInt64$op_mul(self, other) {
  const _x = self.hi;
  const _x$2 = self.lo;
  const _x$3 = other.hi;
  const _x$4 = other.lo;
  const ahi = _x;
  const alo = _x$2;
  const bhi = _x$3;
  const blo = _x$4;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _x = self.hi;
      const _x$2 = self.lo;
      const hi = _x;
      const lo = _x$2;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$builtin$$MyInt64$to_uint(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$op_mul(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_mul(self, other);
}
function moonbitlang$core$int64$$Int64$compare(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$uint64$$UInt64$to_uint(self) {
  return moonbitlang$core$builtin$$MyInt64$to_uint(self);
}
function moonbitlang$core$uint64$$UInt64$lor(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$uint64$$UInt64$op_shl(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$uint64$$UInt64$op_shr(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: seed + 374761393 | 0 };
}
function moonbitlang$core$builtin$$Hasher$new$46$seed$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl(self.acc + (Math.imul(input, -1028477379) | 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  self.acc = self.acc + 4 | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < value.length) {
      moonbitlang$core$builtin$$Hasher$combine_int(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash$53$(self) {
  const hasher = moonbitlang$core$builtin$$Hasher$new(moonbitlang$core$builtin$$Hasher$new$46$seed$46$default());
  moonbitlang$core$builtin$$Hasher$combine$4$(hasher, self);
  return moonbitlang$core$builtin$$Hasher$finalize(hasher);
}
function moonbitlang$core$builtin$$Logger$write_sub_string$56$(self, value, start, len) {
  moonbitlang$core$builtin$$StringBuilder$write_substring(self, value, start, len);
}
function moonbitlang$core$builtin$$Show$to_string$3$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$10$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$2$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$57$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$58$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$29$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$28$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$1$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$59$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$30$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$22$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Show$to_string$60$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$61$(self, { self: logger, method_0: moonbitlang$core$builtin$$StringBuilder$write_string, method_1: moonbitlang$core$builtin$$StringBuilder$write_substring, method_2: moonbitlang$core$builtin$$Logger$write_sub_string$56$, method_3: moonbitlang$core$builtin$$StringBuilder$write_char });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$Entry$op_equal$6$(self, other) {
  return self.hash === other.hash && self.key === other.key;
}
function moonbitlang$core$builtin$$Map$get$32$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.hash === hash && _x.key === key) {
        return _x.value;
      }
      if (i > _x.psl) {
        return undefined;
      }
      const _tmp$3 = i + 1 | 0;
      const _tmp$4 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$33$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.hash === hash && _x.key === key) {
        return _x.value;
      }
      if (i > _x.psl) {
        return undefined;
      }
      const _tmp$3 = i + 1 | 0;
      const _tmp$4 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$52$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.hash === hash && _x.key === key) {
        return _x.value;
      }
      if (i > _x.psl) {
        return undefined;
      }
      const _tmp$3 = i + 1 | 0;
      const _tmp$4 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$op_get$33$(self, key) {
  return moonbitlang$core$builtin$$Map$get$33$(self, key);
}
function moonbitlang$core$builtin$$Map$contains$52$(self, key) {
  const _bind = moonbitlang$core$builtin$$Map$get$52$(self, key);
  return !(_bind === undefined);
}
function moonbitlang$core$builtin$$Map$is_empty$33$(self) {
  return self.size === 0;
}
function moonbitlang$core$builtin$$Map$is_empty$6$(self) {
  return self.size === 0;
}
function moonbitlang$core$builtin$$Map$remove_entry$6$(self, entry) {
  const node = self.list[entry.idx];
  if (moonbitlang$core$builtin$$Map$is_empty$6$(self)) {
    self.head = undefined;
    self.tail = undefined;
  } else {
    if (moonbitlang$core$builtin$$Entry$op_equal$6$(moonbitlang$core$option$$Option$unwrap$55$(self.head), entry)) {
      self.head = node.next;
    }
    if (moonbitlang$core$builtin$$Entry$op_equal$6$(moonbitlang$core$option$$Option$unwrap$55$(self.tail), entry)) {
      self.tail = node.prev;
    }
    const _bind = node.prev;
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _x = _Some;
      self.list[_x.idx].next = node.next;
    }
    const _bind$2 = node.next;
    if (_bind$2 === undefined) {
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      self.list[_x.idx].prev = node.prev;
    }
  }
  node.prev = undefined;
  node.next = undefined;
}
function moonbitlang$core$builtin$$Map$shift_back$6$(self, start_index) {
  let _tmp = start_index;
  let _tmp$2 = start_index + 1 & self.capacity_mask;
  while (true) {
    const prev = _tmp;
    const curr = _tmp$2;
    const _bind = self.entries[curr];
    const _bind$2 = self.list[curr];
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.psl === 0) {
        break;
      }
      _x.psl = _x.psl - 1 | 0;
      _x.idx = prev;
      self.entries[prev] = _x;
      self.entries[curr] = undefined;
      self.list[prev].prev = _bind$2.prev;
      self.list[prev].next = _bind$2.next;
      _bind$2.prev = undefined;
      _bind$2.next = undefined;
      const _tmp$3 = curr + 1 & self.capacity_mask;
      _tmp = curr;
      _tmp$2 = _tmp$3;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove$6$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$53$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.hash === hash && _x.key === key) {
        self.entries[idx] = undefined;
        moonbitlang$core$builtin$$Map$remove_entry$6$(self, _x);
        moonbitlang$core$builtin$$Map$shift_back$6$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _x.psl) {
        break;
      }
      const _tmp$3 = i + 1 | 0;
      const _tmp$4 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$27$(self, logger) {
  logger.method_0(logger.self, "{");
  let _tmp = 0;
  let _tmp$2 = self.head;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    if (_param$2 === undefined) {
      logger.method_0(logger.self, "}");
      return;
    } else {
      const _Some = _param$2;
      const _x = _Some;
      const _x$2 = _x.key;
      const _x$3 = _x.value;
      const _x$4 = _x.idx;
      if (_param > 0) {
        logger.method_0(logger.self, ", ");
      }
      moonbitlang$core$builtin$$Logger$write_object$4$(logger, _x$2);
      logger.method_0(logger.self, ": ");
      moonbitlang$core$builtin$$Logger$write_object$4$(logger, _x$3);
      const _tmp$3 = _param + 1 | 0;
      const _tmp$4 = self.list[_x$4].next;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$62$(self, logger) {
  logger.method_0(logger.self, "{");
  let _tmp = 0;
  let _tmp$2 = self.head;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    if (_param$2 === undefined) {
      logger.method_0(logger.self, "}");
      return;
    } else {
      const _Some = _param$2;
      const _x = _Some;
      const _x$2 = _x.key;
      const _x$3 = _x.value;
      const _x$4 = _x.idx;
      if (_param > 0) {
        logger.method_0(logger.self, ", ");
      }
      moonbitlang$core$builtin$$Logger$write_object$4$(logger, _x$2);
      logger.method_0(logger.self, ": ");
      moonbitlang$core$builtin$$Logger$write_object$22$(logger, _x$3);
      const _tmp$3 = _param + 1 | 0;
      const _tmp$4 = self.list[_x$4].next;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$iter$5$(self) {
  return moonbitlang$core$builtin$$Iter$new$34$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_({ _0: _x$2, _1: _x$3 }), 0)) {
          return 0;
        }
        _tmp = self.list[_x$4].next;
        continue;
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$iter$33$(self) {
  return moonbitlang$core$builtin$$Iter$new$36$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_({ _0: _x$2, _1: _x$3 }), 0)) {
          return 0;
        }
        _tmp = self.list[_x$4].next;
        continue;
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$keys$6$(self) {
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.idx;
        const _bind = yield_(_x$2);
        if (_bind === 0) {
          return 0;
        } else {
          _tmp = self.list[_x$3].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$keys$52$(self) {
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.idx;
        const _bind = yield_(_x$2);
        if (_bind === 0) {
          return 0;
        } else {
          _tmp = self.list[_x$3].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$from_iter$32$(iter) {
  const m = moonbitlang$core$builtin$$Map$from_array$32$([]);
  iter((e) => {
    moonbitlang$core$builtin$$Map$set$32$(m, e._0, e._1);
    return 1;
  });
  return m;
}
function moonbitlang$core$array$$Array$is_empty$22$(self) {
  return self.length === 0;
}
function moonbitlang$core$array$$Array$is_empty$8$(self) {
  return self.length === 0;
}
function moonbitlang$core$array$$Array$rev$4$(self) {
  const arr = new Array(self.length);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.length) {
      arr[i] = self[(self.length - i | 0) - 1 | 0];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Iter$run$15$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Eq$op_equal$17$(_x_173, _x_174) {
  if (_x_173 === 0) {
    if (_x_174 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_174 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Iter$any$15$(self, f) {
  return moonbitlang$core$builtin$$op_notequal$17$(moonbitlang$core$builtin$$Iter$run$15$(self, (k) => f(k) ? 0 : 1), 1);
}
function moonbitlang$core$builtin$$Iter$count$4$(self) {
  const _acc = { val: 0 };
  self((_p) => {
    const _param1 = _acc.val;
    _acc.val = _param1 + 1 | 0;
    return 1;
  });
  return _acc.val;
}
function moonbitlang$core$builtin$$Iter$find_first$4$(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$4$ };
  self((a) => {
    if (f(a)) {
      _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$4$(a);
      return 0;
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return undefined;
    }
    case 1: {
      const _break = _tmp;
      return _break._0;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      return $panic();
    }
    default: {
      return $panic();
    }
  }
}
function moonbitlang$core$builtin$$Iter$to_array$4$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$4$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$to_array$35$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$35$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$StringBuilder$write_substring(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$61$(self, logger) {
  logger.method_0(logger.self, Error$$to_string(self));
}
function moonbitlang$core$string$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$string$$is_trailing_surrogate(c) {
  return 56320 <= c && c <= 57343;
}
function moonbitlang$core$string$$String$index_at(self, offset_by, start) {
  const str_len = self.length;
  if (start >= 0 && start <= str_len) {
    let utf16_offset = start;
    let char_count = 0;
    while (true) {
      if (utf16_offset < str_len && char_count < offset_by) {
        const c1 = self.charCodeAt(utf16_offset);
        if (moonbitlang$core$string$$is_leading_surrogate(c1) && (utf16_offset + 1 | 0) < str_len) {
          const c2 = self.charCodeAt(utf16_offset + 1 | 0);
          if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
            utf16_offset = utf16_offset + 2 | 0;
            char_count = char_count + 1 | 0;
            continue;
          } else {
            moonbitlang$core$builtin$$abort$9$("invalid surrogate pair");
          }
        }
        utf16_offset = utf16_offset + 1 | 0;
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < offset_by || utf16_offset > str_len ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$14$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$index_at_rev(self, offset_by, end) {
  const str_len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = str_len;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x >= 0 && _x <= str_len ? _x : moonbitlang$core$builtin$$abort$8$("Invalid end index");
  }
  let utf16_offset = end$2;
  let char_count = 0;
  while (true) {
    if (utf16_offset > 0 && char_count < offset_by) {
      const c1 = self.charCodeAt(utf16_offset - 1 | 0);
      if (moonbitlang$core$string$$is_trailing_surrogate(c1) && (utf16_offset - 2 | 0) >= 0) {
        const c2 = self.charCodeAt(utf16_offset - 2 | 0);
        if (moonbitlang$core$string$$is_leading_surrogate(c2)) {
          utf16_offset = utf16_offset - 2 | 0;
          char_count = char_count + 1 | 0;
          continue;
        }
      }
      utf16_offset = utf16_offset - 1 | 0;
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < offset_by || utf16_offset < 0 ? undefined : utf16_offset;
}
function moonbitlang$core$string$$StringView$length_eq(self, len) {
  let _tmp = self.start;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const self_len = _tmp$2;
    if (index < self.end && self_len < len) {
      const c1 = self.str.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index + 1 | 0);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$3 = index + 2 | 0;
          const _tmp$4 = self_len + 1 | 0;
          _tmp = _tmp$3;
          _tmp$2 = _tmp$4;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$9$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = self_len + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return self_len === len && index === self.end;
    }
  }
}
function moonbitlang$core$string$$StringView$length_ge(self, len) {
  let _tmp = self.start;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const self_len = _tmp$2;
    if (index < self.end && self_len < len) {
      const c1 = self.str.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index + 1 | 0);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$3 = index + 2 | 0;
          const _tmp$4 = self_len + 1 | 0;
          _tmp = _tmp$3;
          _tmp$2 = _tmp$4;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$9$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = self_len + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return self_len >= len;
    }
  }
}
function moonbitlang$core$string$$String$op_as_view(self, start, end) {
  const str_len = self.length;
  const start$2 = start >= 0 ? moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at(self, start, 0)) : moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at_rev(self, -start, str_len));
  let end$2;
  if (end === undefined) {
    end$2 = str_len;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x >= 0 ? moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at(self, _x, 0)) : moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at_rev(self, -_x, str_len));
  }
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= str_len) ? { str: self, start: start$2, end: end$2 } : moonbitlang$core$builtin$$abort$16$("Invalid index for View");
}
function moonbitlang$core$string$$String$op_as_view$46$start$46$default() {
  return 0;
}
function moonbitlang$core$string$$StringView$op_as_view(self, start, end) {
  const start$2 = start >= 0 ? moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at(self.str, start, self.start)) : moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at_rev(self.str, -start, self.end));
  let end$2;
  if (end === undefined) {
    end$2 = self.end;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x >= 0 ? moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at(self.str, _x, self.start)) : moonbitlang$core$option$$Option$unwrap$54$(moonbitlang$core$string$$String$index_at_rev(self.str, -_x, self.end));
  }
  return start$2 >= self.start && (start$2 <= self.end && (end$2 >= self.start && (end$2 <= self.end && start$2 <= end$2))) ? { str: self.str, start: start$2, end: end$2 } : moonbitlang$core$builtin$$abort$16$("Invalid index for View");
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$StringView$op_get(self, index) {
  if (index >= 0) {
    let utf16_offset = self.start;
    let char_count = 0;
    const code_unit_length = self.str.length;
    while (true) {
      if (char_count < index && utf16_offset < self.end) {
        const c1 = self.str.charCodeAt(utf16_offset);
        if (moonbitlang$core$string$$is_leading_surrogate(c1) && (utf16_offset + 1 | 0) < code_unit_length) {
          const c2 = self.str.charCodeAt(utf16_offset + 1 | 0);
          if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
            utf16_offset = utf16_offset + 2 | 0;
            char_count = char_count + 1 | 0;
            continue;
          } else {
            moonbitlang$core$builtin$$abort$9$("invalid surrogate pair");
          }
        }
        utf16_offset = utf16_offset + 1 | 0;
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (char_count === index && utf16_offset < self.end) {
      const c1 = self.str.charCodeAt(utf16_offset);
      if (moonbitlang$core$string$$is_leading_surrogate(c1)) {
        const c2 = self.str.charCodeAt(utf16_offset + 1 | 0);
        return moonbitlang$core$string$$is_trailing_surrogate(c2) ? moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2) : moonbitlang$core$builtin$$abort$15$("invalid surrogate pair");
      } else {
        return c1;
      }
    } else {
      return moonbitlang$core$builtin$$abort$15$(`Index out of bounds: cannot access index ${moonbitlang$core$builtin$$Show$to_string$8$(index)}`);
    }
  } else {
    return moonbitlang$core$builtin$$abort$15$("Index out of bounds: cannot access negative index");
  }
}
function moonbitlang$core$string$$String$to_bytes(self) {
  return moonbitlang$core$bytes$$Bytes$of_string(self);
}
function moonbitlang$core$string$$String$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$15$((yield_) => {
    const len = self.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < len) {
        const c1 = self.charCodeAt(index);
        if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < len) {
          const c2 = self.charCodeAt(index + 1 | 0);
          if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$String$contains_char(self, c) {
  return moonbitlang$core$builtin$$Iter$any$15$(moonbitlang$core$string$$String$iter(self), (ch) => ch === c);
}
function moonbitlang$core$string$$String$trim_end(self, trim_set) {
  const len = self.length;
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const c2 = self.charCodeAt(i);
      if (moonbitlang$core$string$$is_trailing_surrogate(c2) && (i - 1 | 0) >= 0) {
        const c1 = self.charCodeAt(i - 1 | 0);
        if (moonbitlang$core$string$$is_leading_surrogate(c1)) {
          const ch = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
          if (moonbitlang$core$string$$String$contains_char(trim_set, ch)) {
            _tmp = i - 2 | 0;
            continue;
          } else {
            return moonbitlang$core$string$$String$substring(self, moonbitlang$core$string$$String$substring$46$start$46$default(), i + 1 | 0);
          }
        }
      }
      if (!moonbitlang$core$string$$String$contains_char(trim_set, self.charCodeAt(i))) {
        return moonbitlang$core$string$$String$substring(self, moonbitlang$core$string$$String$substring$46$start$46$default(), i + 1 | 0);
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      return "";
    }
  }
}
function moonbitlang$core$string$$String$trim_start(self, trim_set) {
  const len = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const c1 = self.charCodeAt(i);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (i + 1 | 0) < len) {
        const c2 = self.charCodeAt(i + 1 | 0);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const ch = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
          if (moonbitlang$core$string$$String$contains_char(trim_set, ch)) {
            _tmp = i + 2 | 0;
            continue;
          } else {
            return moonbitlang$core$string$$String$substring(self, i, undefined);
          }
        }
      }
      if (!moonbitlang$core$string$$String$contains_char(trim_set, self.charCodeAt(i))) {
        return moonbitlang$core$string$$String$substring(self, i, undefined);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return "";
    }
  }
}
function moonbitlang$core$string$$String$trim(self, trim_set) {
  return self === "" || trim_set === "" ? self : moonbitlang$core$string$$String$trim_end(moonbitlang$core$string$$String$trim_start(self, trim_set), trim_set);
}
function moonbitlang$core$string$$String$trim_space(self) {
  return moonbitlang$core$string$$String$trim(self, " \n\r\t");
}
function moonbitlang$core$string$$String$index_of(self, str, from) {
  const from$2 = from < 0 ? 0 : from >= self.length ? self.length - 1 | 0 : from;
  const len = self.length;
  const sub_len = str.length;
  const max_idx = len - sub_len | 0;
  if (sub_len === 0) {
    return 0;
  }
  if (sub_len > len) {
    return -1;
  }
  const first = str.charCodeAt(0);
  let i = from$2;
  while (true) {
    if (i <= max_idx) {
      while (true) {
        if (i < len && self.charCodeAt(i) !== first) {
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i <= max_idx) {
        let j = i + 1 | 0;
        let k = 1;
        const end = (j + sub_len | 0) - 1 | 0;
        while (true) {
          if (j < end && self.charCodeAt(j) === str.charCodeAt(k)) {
            j = j + 1 | 0;
            k = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j === end) {
          return i;
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function moonbitlang$core$string$$String$index_of$46$from$46$default() {
  return 0;
}
function moonbitlang$core$string$$String$contains(self, str) {
  return moonbitlang$core$string$$String$index_of(self, str, moonbitlang$core$string$$String$index_of$46$from$46$default()) >= 0;
}
function moonbitlang$core$string$$String$split(self, seperator) {
  const len = self.length;
  const sep_len = seperator.length;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$String$iter(self);
    return (_p) => _bind((_p$2) => _p(String.fromCodePoint(_p$2)));
  }
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    let start = 0;
    while (true) {
      if (start < len) {
        const end = moonbitlang$core$string$$String$index_of(self, seperator, start);
        if (end < 0) {
          if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(moonbitlang$core$string$$String$substring(self, start, undefined)), 0)) {
            return 0;
          }
          return 1;
        }
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(moonbitlang$core$string$$String$substring(self, start, end)), 0)) {
          return 0;
        }
        start = end + sep_len | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$String$to_lower(self) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(self.length);
  const _bind = moonbitlang$core$string$$String$iter(self);
  _bind((c) => {
    if (c >= 65 && c <= 90) {
      moonbitlang$core$builtin$$StringBuilder$write_char(buf, c + 32 | 0);
    } else {
      moonbitlang$core$builtin$$StringBuilder$write_char(buf, c);
    }
    return 1;
  });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$string$$String$repeat(self, n) {
  if (n <= 0) {
    return "";
  }
  if (n === 1) {
    return self;
  }
  const len = self.length;
  const buf = moonbitlang$core$builtin$$StringBuilder$new(Math.imul(len, n) | 0);
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < n) {
      moonbitlang$core$builtin$$StringBuilder$write_string(buf, self);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$output$22$(self, logger) {
  switch (self.$tag) {
    case 0: {
      logger.method_0(logger.self, "Null");
      return;
    }
    case 1: {
      logger.method_0(logger.self, "True");
      return;
    }
    case 2: {
      logger.method_0(logger.self, "False");
      return;
    }
    case 3: {
      const _Number = self;
      const _x = _Number._0;
      logger.method_0(logger.self, "Number(");
      moonbitlang$core$builtin$$Show$output$12$(_x, logger);
      logger.method_0(logger.self, ")");
      return;
    }
    case 4: {
      const _String = self;
      const _x$2 = _String._0;
      logger.method_0(logger.self, "String(");
      moonbitlang$core$builtin$$Show$output$4$(_x$2, logger);
      logger.method_0(logger.self, ")");
      return;
    }
    case 5: {
      const _Array = self;
      const _x$3 = _Array._0;
      logger.method_0(logger.self, "Array(");
      moonbitlang$core$builtin$$Show$output$41$(_x$3, logger);
      logger.method_0(logger.self, ")");
      return;
    }
    default: {
      const _Object = self;
      const _x$4 = _Object._0;
      logger.method_0(logger.self, "Object(");
      moonbitlang$core$builtin$$Show$output$62$(_x$4, logger);
      logger.method_0(logger.self, ")");
      return;
    }
  }
}
function moonbitlang$core$json$$Json$as_number(self) {
  if (self.$tag === 3) {
    const _Number = self;
    const _x = _Number._0;
    return new Option$Some$5$(_x);
  } else {
    return Option$None$5$;
  }
}
function moonbitlang$core$json$$Json$as_string(self) {
  if (self.$tag === 4) {
    const _String = self;
    const _x = _String._0;
    return _x;
  } else {
    return undefined;
  }
}
function moonbitlang$core$json$$indent_str(level, indent) {
  return indent === 0 ? "" : `\n${moonbitlang$core$string$$String$repeat(" ", Math.imul(indent, level) | 0)}`;
}
function moonbitlang$core$json$$escape$46$to_hex_digit$63$(i) {
  return i < 10 ? 48 + i | 0 : 97 + (i - 10 | 0) | 0;
}
function moonbitlang$core$json$$escape(str, escape_slash) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(str.length);
  const _bind = moonbitlang$core$string$$String$iter(str);
  _bind((c) => {
    switch (c) {
      case 34: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\\"");
        break;
      }
      case 92: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\\\");
        break;
      }
      case 47: {
        if (escape_slash) {
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\/");
        } else {
          moonbitlang$core$builtin$$StringBuilder$write_char(buf, c);
        }
        break;
      }
      case 10: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\n");
        break;
      }
      case 13: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\r");
        break;
      }
      case 8: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\b");
        break;
      }
      case 9: {
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\t");
        break;
      }
      default: {
        const code = c;
        if (code === 12) {
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\f");
        } else {
          if (code < 32) {
            moonbitlang$core$builtin$$StringBuilder$write_string(buf, "\\u00");
            moonbitlang$core$builtin$$StringBuilder$write_char(buf, moonbitlang$core$json$$escape$46$to_hex_digit$63$(code / 16 | 0));
            moonbitlang$core$builtin$$StringBuilder$write_char(buf, moonbitlang$core$json$$escape$46$to_hex_digit$63$(code % 16 | 0));
          } else {
            moonbitlang$core$builtin$$StringBuilder$write_char(buf, c);
          }
        }
      }
    }
    return 1;
  });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$json$$stringify$46$stringify_inner$64$(_env, value, level) {
  const indent = _env._1;
  const escape_slash = _env._0;
  switch (value.$tag) {
    case 6: {
      const _Object = value;
      const _x = _Object._0;
      if (moonbitlang$core$builtin$$Map$is_empty$33$(_x)) {
        return "{}";
      }
      const buf = moonbitlang$core$builtin$$StringBuilder$new(0);
      moonbitlang$core$builtin$$StringBuilder$write_char(buf, 123);
      moonbitlang$core$builtin$$StringBuilder$write_string(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
      const first = { val: true };
      const _bind = moonbitlang$core$builtin$$Map$iter2$33$(_x);
      _bind((k, v) => {
        if (first.val) {
          first.val = false;
        } else {
          moonbitlang$core$builtin$$StringBuilder$write_char(buf, 44);
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
        }
        moonbitlang$core$builtin$$StringBuilder$write_char(buf, 34);
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, moonbitlang$core$json$$escape(k, escape_slash));
        moonbitlang$core$builtin$$StringBuilder$write_char(buf, 34);
        if (indent === 0) {
          moonbitlang$core$builtin$$StringBuilder$write_char(buf, 58);
        } else {
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, ": ");
        }
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, moonbitlang$core$json$$stringify$46$stringify_inner$64$(_env, v, level + 1 | 0));
        return 1;
      });
      moonbitlang$core$builtin$$StringBuilder$write_string(buf, moonbitlang$core$json$$indent_str(level, indent));
      moonbitlang$core$builtin$$StringBuilder$write_char(buf, 125);
      return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
    }
    case 5: {
      const _Array = value;
      const _x$2 = _Array._0;
      if (moonbitlang$core$array$$Array$is_empty$22$(_x$2)) {
        return "[]";
      }
      const buf$2 = moonbitlang$core$builtin$$StringBuilder$new(0);
      moonbitlang$core$builtin$$StringBuilder$write_char(buf$2, 91);
      moonbitlang$core$builtin$$StringBuilder$write_string(buf$2, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
      const _len = _x$2.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const v = _x$2[_i];
          if (_i > 0) {
            moonbitlang$core$builtin$$StringBuilder$write_char(buf$2, 44);
            moonbitlang$core$builtin$$StringBuilder$write_string(buf$2, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
          }
          moonbitlang$core$builtin$$StringBuilder$write_string(buf$2, moonbitlang$core$json$$stringify$46$stringify_inner$64$(_env, v, level + 1 | 0));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$StringBuilder$write_string(buf$2, moonbitlang$core$json$$indent_str(level, indent));
      moonbitlang$core$builtin$$StringBuilder$write_char(buf$2, 93);
      return moonbitlang$core$builtin$$StringBuilder$to_string(buf$2);
    }
    case 4: {
      const _String = value;
      const _x$3 = _String._0;
      const buf$3 = moonbitlang$core$builtin$$StringBuilder$new(0);
      moonbitlang$core$builtin$$StringBuilder$write_char(buf$3, 34);
      moonbitlang$core$builtin$$StringBuilder$write_string(buf$3, moonbitlang$core$json$$escape(_x$3, escape_slash));
      moonbitlang$core$builtin$$StringBuilder$write_char(buf$3, 34);
      return moonbitlang$core$builtin$$StringBuilder$to_string(buf$3);
    }
    case 3: {
      const _Number = value;
      const _x$4 = _Number._0;
      return String(_x$4);
    }
    case 1: {
      return "true";
    }
    case 2: {
      return "false";
    }
    default: {
      return "null";
    }
  }
}
function moonbitlang$core$json$$Json$stringify(self, escape_slash, indent) {
  const _env = { _0: escape_slash, _1: indent };
  return moonbitlang$core$json$$stringify$46$stringify_inner$64$(_env, self, 0);
}
function moonbitlang$core$json$$Json$stringify$46$escape_slash$46$default() {
  return false;
}
function moonbitlang$core$json$$Json$stringify$46$indent$46$default() {
  return 0;
}
function moonbitlang$core$json$$Json$to_json(self) {
  return self;
}
function moonbitlang$core$bytes$$Bytes$from_array(arr) {
  return moonbitlang$core$bytes$$Bytes$makei(arr.length, (i) => moonbitlang$core$array$$Array$op_get$23$(arr, i));
}
function moonbitlang$core$bytes$$Bytes$from_fixedarray(arr, len) {
  let len$2;
  if (len === undefined) {
    len$2 = arr.length;
  } else {
    const _Some = len;
    const _x = _Some;
    len$2 = _x;
  }
  return moonbitlang$core$bytes$$Bytes$makei(len$2, (i) => arr[i]);
}
function moonbitlang$core$bytes$$from_fixedarray(arr, len) {
  return moonbitlang$core$bytes$$Bytes$from_fixedarray(arr, len);
}
function moonbitlang$core$bytes$$Bytes$to_array(self) {
  const rv = moonbitlang$core$array$$Array$make$23$(self.length, 48);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.length) {
      moonbitlang$core$array$$Array$op_set$23$(rv, i, self[i]);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return rv;
}
function moonbitlang$core$bytes$$Bytes$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$23$((yield_) => {
    let _tmp = 0;
    let _tmp$2 = self.length;
    while (true) {
      const i = _tmp;
      const len = _tmp$2;
      if (i < len) {
        if (moonbitlang$core$builtin$$Eq$op_equal$17$(yield_(self[i]), 0)) {
          return 0;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$random$$new(seed) {
  if (seed.length !== 32) {
    moonbitlang$core$builtin$$abort$9$("seed must be 32 bytes long");
  }
  const src = moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed);
  return { src: src };
}
function moonbitlang$core$random$$new$46$seed$46$default() {
  return $bytes_literal$0;
}
function moonbitlang$core$random$$Rand$next(self) {
  while (true) {
    const x = moonbitlang$core$random$internal$random_source$$State$next(self.src.state);
    if (x._1) {
      return x._0;
    }
    moonbitlang$core$random$internal$random_source$$State$refill(self.src.state);
    continue;
  }
}
function moonbitlang$core$random$$Rand$double(self) {
  return moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$uint64$$UInt64$op_shr(moonbitlang$core$uint64$$UInt64$op_shl(moonbitlang$core$random$$Rand$next(self), 11), 11)) / moonbitlang$core$double$$Double$convert_uint64(moonbitlang$core$uint64$$UInt64$op_shl($1L, 53));
}
function moonbitlang$core$random$internal$random_source$$bytesToUInt64(b) {
  let result = $0L;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 8) {
      result = moonbitlang$core$uint64$$UInt64$lor(result, moonbitlang$core$uint64$$UInt64$op_shl(moonbitlang$core$byte$$Byte$to_int64(b[i]), Math.imul(i, 8) | 0));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function moonbitlang$core$random$internal$random_source$$setup(seed, b32, counter) {
  b32[0][0] = 1634760805;
  b32[0][1] = 1634760805;
  b32[0][2] = 1634760805;
  b32[0][3] = 1634760805;
  b32[1][0] = 857760878;
  b32[1][1] = 857760878;
  b32[1][2] = 857760878;
  b32[1][3] = 857760878;
  b32[2][0] = 2036477234;
  b32[2][1] = 2036477234;
  b32[2][2] = 2036477234;
  b32[2][3] = 2036477234;
  b32[3][0] = 1797285236;
  b32[3][1] = 1797285236;
  b32[3][2] = 1797285236;
  b32[3][3] = 1797285236;
  b32[4][0] = moonbitlang$core$uint64$$UInt64$to_uint(seed[0]);
  b32[4][1] = moonbitlang$core$uint64$$UInt64$to_uint(seed[0]);
  b32[4][2] = moonbitlang$core$uint64$$UInt64$to_uint(seed[0]);
  b32[4][3] = moonbitlang$core$uint64$$UInt64$to_uint(seed[0]);
  b32[5][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[0], 32));
  b32[5][1] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[0], 32));
  b32[5][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[0], 32));
  b32[5][3] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[0], 32));
  b32[6][0] = moonbitlang$core$uint64$$UInt64$to_uint(seed[1]);
  b32[6][1] = moonbitlang$core$uint64$$UInt64$to_uint(seed[1]);
  b32[6][2] = moonbitlang$core$uint64$$UInt64$to_uint(seed[1]);
  b32[6][3] = moonbitlang$core$uint64$$UInt64$to_uint(seed[1]);
  b32[7][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[1], 32));
  b32[7][1] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[1], 32));
  b32[7][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[1], 32));
  b32[7][3] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[1], 32));
  b32[8][0] = moonbitlang$core$uint64$$UInt64$to_uint(seed[2]);
  b32[8][1] = moonbitlang$core$uint64$$UInt64$to_uint(seed[2]);
  b32[8][2] = moonbitlang$core$uint64$$UInt64$to_uint(seed[2]);
  b32[8][3] = moonbitlang$core$uint64$$UInt64$to_uint(seed[2]);
  b32[9][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[2], 32));
  b32[9][1] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[2], 32));
  b32[9][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[2], 32));
  b32[9][3] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[2], 32));
  b32[10][0] = moonbitlang$core$uint64$$UInt64$to_uint(seed[3]);
  b32[10][1] = moonbitlang$core$uint64$$UInt64$to_uint(seed[3]);
  b32[10][2] = moonbitlang$core$uint64$$UInt64$to_uint(seed[3]);
  b32[10][3] = moonbitlang$core$uint64$$UInt64$to_uint(seed[3]);
  b32[11][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[3], 32));
  b32[11][1] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[3], 32));
  b32[11][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[3], 32));
  b32[11][3] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(seed[3], 32));
  b32[12][0] = (counter >>> 0) + (0 >>> 0) | 0;
  b32[12][1] = (counter >>> 0) + (1 >>> 0) | 0;
  b32[12][2] = (counter >>> 0) + (2 >>> 0) | 0;
  b32[12][3] = (counter >>> 0) + (3 >>> 0) | 0;
  b32[13][0] = 0;
  b32[13][1] = 0;
  b32[13][2] = 0;
  b32[13][3] = 0;
  b32[14][0] = 0;
  b32[14][1] = 0;
  b32[14][2] = 0;
  b32[14][3] = 0;
  b32[15][0] = 0;
  b32[15][1] = 0;
  b32[15][2] = 0;
  b32[15][3] = 0;
}
function moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$(t) {
  const a = t._0;
  const b = t._1;
  const c = t._2;
  const d = t._3;
  const a$2 = (a >>> 0) + (b >>> 0) | 0;
  const d$2 = d ^ a$2;
  const d$3 = d$2 << 16 | (d$2 >>> 16 | 0);
  const c$2 = (c >>> 0) + (d$3 >>> 0) | 0;
  const b$2 = b ^ c$2;
  const b$3 = b$2 << 12 | (b$2 >>> 20 | 0);
  const a$3 = (a$2 >>> 0) + (b$3 >>> 0) | 0;
  const d$4 = d$3 ^ a$3;
  const d$5 = d$4 << 8 | (d$4 >>> 24 | 0);
  const c$3 = (c$2 >>> 0) + (d$5 >>> 0) | 0;
  const b$4 = b$3 ^ c$3;
  const b$5 = b$4 << 7 | (b$4 >>> 25 | 0);
  return { _0: a$3, _1: b$5, _2: c$3, _3: d$5 };
}
function moonbitlang$core$random$internal$random_source$$chacha_block(seed, buf, counter) {
  moonbitlang$core$random$internal$random_source$$setup(seed, buf, counter);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < buf[0].length) {
      let b0 = buf[0][i];
      let b1 = buf[1][i];
      let b2 = buf[2][i];
      let b3 = buf[3][i];
      let b4 = buf[4][i];
      let b5 = buf[5][i];
      let b6 = buf[6][i];
      let b7 = buf[7][i];
      let b8 = buf[8][i];
      let b9 = buf[9][i];
      let b10 = buf[10][i];
      let b11 = buf[11][i];
      let b12 = buf[12][i];
      let b13 = buf[13][i];
      let b14 = buf[14][i];
      let b15 = buf[15][i];
      let _tmp$2 = 0;
      while (true) {
        const round = _tmp$2;
        if (round < 4) {
          const tb1 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b0, _1: b4, _2: b8, _3: b12 });
          b0 = tb1._0;
          b4 = tb1._1;
          b8 = tb1._2;
          b12 = tb1._3;
          const tb2 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b1, _1: b5, _2: b9, _3: b13 });
          b1 = tb2._0;
          b5 = tb2._1;
          b9 = tb2._2;
          b13 = tb2._3;
          const tb3 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b2, _1: b6, _2: b10, _3: b14 });
          b2 = tb3._0;
          b6 = tb3._1;
          b10 = tb3._2;
          b14 = tb3._3;
          const tb4 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b3, _1: b7, _2: b11, _3: b15 });
          b3 = tb4._0;
          b7 = tb4._1;
          b11 = tb4._2;
          b15 = tb4._3;
          const tb5 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b0, _1: b5, _2: b10, _3: b15 });
          b0 = tb5._0;
          b5 = tb5._1;
          b10 = tb5._2;
          b15 = tb5._3;
          const tb6 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b1, _1: b6, _2: b11, _3: b12 });
          b1 = tb6._0;
          b6 = tb6._1;
          b11 = tb6._2;
          b12 = tb6._3;
          const tb7 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b2, _1: b7, _2: b8, _3: b13 });
          b2 = tb7._0;
          b7 = tb7._1;
          b8 = tb7._2;
          b13 = tb7._3;
          const tb8 = moonbitlang$core$random$internal$random_source$$chacha_block$46$qr$65$({ _0: b3, _1: b4, _2: b9, _3: b14 });
          b3 = tb8._0;
          b4 = tb8._1;
          b9 = tb8._2;
          b14 = tb8._3;
          _tmp$2 = round + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      buf[0][i] = b0;
      buf[1][i] = b1;
      buf[2][i] = b2;
      buf[3][i] = b3;
      buf[4][i] = (buf[4][i] >>> 0) + (b4 >>> 0) | 0;
      buf[5][i] = (buf[5][i] >>> 0) + (b5 >>> 0) | 0;
      buf[6][i] = (buf[6][i] >>> 0) + (b6 >>> 0) | 0;
      buf[7][i] = (buf[7][i] >>> 0) + (b7 >>> 0) | 0;
      buf[8][i] = (buf[8][i] >>> 0) + (b8 >>> 0) | 0;
      buf[9][i] = (buf[9][i] >>> 0) + (b9 >>> 0) | 0;
      buf[10][i] = (buf[10][i] >>> 0) + (b10 >>> 0) | 0;
      buf[11][i] = (buf[11][i] >>> 0) + (b11 >>> 0) | 0;
      buf[12][i] = b12;
      buf[13][i] = b13;
      buf[14][i] = b14;
      buf[15][i] = b15;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$random$internal$random_source$$State$init64(self, seed) {
  self.seed = seed;
  const buffer = moonbitlang$core$array$$FixedArray$makei$66$(16, (_i) => $make_array_len_and_init(4, 0));
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 16) {
      const hi = self.buffer[Math.imul(i, 2) | 0];
      const lo = self.buffer[(Math.imul(i, 2) | 0) + 1 | 0];
      buffer[i][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(hi, 32));
      buffer[i][1] = moonbitlang$core$uint64$$UInt64$to_uint(hi);
      buffer[i][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(lo, 32));
      buffer[i][3] = moonbitlang$core$uint64$$UInt64$to_uint(lo);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, buffer, 0);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 16) {
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if (j < 4) {
          const lo = buffer[i][j];
          const hi = buffer[i][j + 1 | 0];
          const u64 = moonbitlang$core$uint64$$UInt64$lor(moonbitlang$core$uint64$$UInt64$op_shl(moonbitlang$core$uint$$UInt$to_uint64(hi), 32), moonbitlang$core$uint$$UInt$to_uint64(lo));
          self.buffer[(Math.imul(i, 2) | 0) + (j / 2 | 0) | 0] = u64;
          _tmp$3 = j + 2 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.c = 0;
  self.i = 0;
  self.n = moonbitlang$core$random$internal$random_source$$chunk;
}
function moonbitlang$core$random$internal$random_source$$State$init(self, seed) {
  const seed0 = $make_array_len_and_init(8, moonbitlang$core$byte$$Byte$default());
  const seed1 = $make_array_len_and_init(8, moonbitlang$core$byte$$Byte$default());
  const seed2 = $make_array_len_and_init(8, moonbitlang$core$byte$$Byte$default());
  const seed3 = $make_array_len_and_init(8, moonbitlang$core$byte$$Byte$default());
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 8) {
      seed0[i] = seed[i];
      seed1[i] = seed[8 + i | 0];
      seed2[i] = seed[16 + i | 0];
      seed3[i] = seed[24 + i | 0];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const arr = $make_array_len_and_init(4, $0L);
  arr[0] = moonbitlang$core$random$internal$random_source$$bytesToUInt64(seed0);
  arr[1] = moonbitlang$core$random$internal$random_source$$bytesToUInt64(seed1);
  arr[2] = moonbitlang$core$random$internal$random_source$$bytesToUInt64(seed2);
  arr[3] = moonbitlang$core$random$internal$random_source$$bytesToUInt64(seed3);
  moonbitlang$core$random$internal$random_source$$State$init64(self, arr);
}
function moonbitlang$core$random$internal$random_source$$State$new() {
  return { buffer: $make_array_len_and_init(32, $0L), seed: $make_array_len_and_init(4, $0L), i: 0, n: 0, c: 0 };
}
function moonbitlang$core$random$internal$random_source$$ChaCha8$new(seed) {
  const _bind = moonbitlang$core$random$internal$random_source$$State$new();
  const c = { state: _bind };
  moonbitlang$core$random$internal$random_source$$State$init(_bind, seed);
  return c;
}
function moonbitlang$core$random$internal$random_source$$State$next(self) {
  const i = self.i;
  if (i >>> 0 >= self.n >>> 0) {
    return { _0: $0L, _1: false };
  }
  self.i = (i >>> 0) + (1 >>> 0) | 0;
  return { _0: self.buffer[i & 31], _1: true };
}
function moonbitlang$core$random$internal$random_source$$State$refill(self) {
  self.c = (self.c >>> 0) + (moonbitlang$core$random$internal$random_source$$ctrInc >>> 0) | 0;
  if (self.c === moonbitlang$core$random$internal$random_source$$ctrMax) {
    const len = self.buffer.length;
    self.seed[0] = self.buffer[(len - 4 | 0) + 0 | 0];
    self.seed[1] = self.buffer[(len - 4 | 0) + 1 | 0];
    self.seed[2] = self.buffer[(len - 4 | 0) + 2 | 0];
    self.seed[3] = self.buffer[(len - 4 | 0) + 3 | 0];
    self.c = 0;
  }
  const buffer = moonbitlang$core$array$$FixedArray$makei$66$(16, (_i) => $make_array_len_and_init(4, 0));
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < 16) {
      const hi = self.buffer[Math.imul(i, 2) | 0];
      const lo = self.buffer[(Math.imul(i, 2) | 0) + 1 | 0];
      buffer[i][0] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(hi, 32));
      buffer[i][1] = moonbitlang$core$uint64$$UInt64$to_uint(hi);
      buffer[i][2] = moonbitlang$core$uint64$$UInt64$to_uint(moonbitlang$core$uint64$$UInt64$op_shr(lo, 32));
      buffer[i][3] = moonbitlang$core$uint64$$UInt64$to_uint(lo);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  moonbitlang$core$random$internal$random_source$$chacha_block(self.seed, buffer, self.c);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < 16) {
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if (j < 4) {
          const lo = buffer[i][j];
          const hi = buffer[i][j + 1 | 0];
          const u64 = moonbitlang$core$uint64$$UInt64$lor(moonbitlang$core$uint64$$UInt64$op_shl(moonbitlang$core$uint$$UInt$to_uint64(hi), 32), moonbitlang$core$uint$$UInt$to_uint64(lo));
          self.buffer[(Math.imul(i, 2) | 0) + (j / 2 | 0) | 0] = u64;
          _tmp$3 = j + 2 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.i = 0;
  self.n = self.buffer.length;
  if (self.c === ((moonbitlang$core$random$internal$random_source$$ctrMax >>> 0) - (moonbitlang$core$random$internal$random_source$$ctrInc >>> 0) | 0)) {
    self.n = self.buffer.length - 4 | 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$buffer$$T$grow_if_necessary(self, required) {
  let enough_space = self.data.length;
  if (enough_space <= 0) {
    enough_space = 1;
  }
  while (true) {
    if (enough_space < required) {
      enough_space = Math.imul(enough_space, 2) | 0;
      continue;
    } else {
      break;
    }
  }
  if (enough_space !== self.data.length) {
    const self$2 = $make_array_len_and_init(enough_space, moonbitlang$core$byte$$Byte$default());
    moonbitlang$core$array$$FixedArray$unsafe_blit$23$(self$2, 0, self.data, 0, self.len);
    self.data = self$2;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$buffer$$T$contents(self) {
  return moonbitlang$core$bytes$$from_fixedarray(self.data, self.len);
}
function moonbitlang$core$buffer$$new(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $make_array_len_and_init(initial, moonbitlang$core$byte$$Byte$default());
  return { data: data, len: 0, initial_data: data };
}
function moonbitlang$core$buffer$$new$46$size_hint$46$default() {
  return 0;
}
function moonbitlang$core$buffer$$T$write_char(self, value) {
  moonbitlang$core$buffer$$T$grow_if_necessary(self, self.len + 4 | 0);
  const inc = moonbitlang$core$array$$FixedArray$set_utf16le_char(self.data, self.len, value);
  self.len = self.len + inc | 0;
}
function moonbitlang$core$buffer$$T$to_unchecked_string(self) {
  return moonbitlang$core$bytes$$Bytes$to_unchecked_string(moonbitlang$core$buffer$$T$contents(self), 0, self.len);
}
function moonbitlang$core$array$$Array$makei$18$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$18$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$18$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$FixedArray$makei$66$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function oboard$mimetype$lib$$T$new() {
  const typesIter = moonbitlang$core$builtin$$Map$iter$5$(oboard$mimetype$lib$$types);
  return { extentionToType: moonbitlang$core$builtin$$Map$from_array$32$(moonbitlang$core$builtin$$Iter$to_array$35$((_p) => typesIter((_p$2) => {
    const _x = _p$2._0;
    const _x$2 = _p$2._1;
    const _func = moonbitlang$core$array$$Array$iter$35$(moonbitlang$core$array$$Array$map$42$(_x$2, (x) => ({ _0: x, _1: _x })));
    return _func(_p);
  }))), typeToExtension: moonbitlang$core$builtin$$Map$from_array$32$(moonbitlang$core$builtin$$Iter$to_array$35$((_p) => typesIter((_p$2) => _p({ _0: _p$2._0, _1: moonbitlang$core$array$$Array$op_get$4$(_p$2._1, 0) })))), typeToExtensions: oboard$mimetype$lib$$types };
}
function oboard$mimetype$lib$$T$getType(self, pathOrExtension) {
  let extension = moonbitlang$core$string$$String$contains(pathOrExtension, ".") ? moonbitlang$core$array$$Array$op_get$4$(moonbitlang$core$array$$Array$rev$4$(moonbitlang$core$builtin$$Iter$to_array$4$(moonbitlang$core$string$$String$split(pathOrExtension, "."))), 0) : pathOrExtension;
  if (moonbitlang$core$string$$String$contains(extension, ";")) {
    extension = moonbitlang$core$array$$Array$op_get$4$(moonbitlang$core$builtin$$Iter$to_array$4$(moonbitlang$core$string$$String$split(extension, ";")), 0);
  }
  extension = moonbitlang$core$string$$String$to_lower(moonbitlang$core$string$$String$trim_space(extension));
  return moonbitlang$core$builtin$$Map$get$32$(self.extentionToType, extension);
}
function yj$45$qin$regexp$$OpCode$from_bytecode(bytecode) {
  switch (bytecode) {
    case 0: {
      return 1;
    }
    case 1: {
      return 2;
    }
    case 2: {
      return 3;
    }
    case 3: {
      return 4;
    }
    case 4: {
      return 5;
    }
    case 5: {
      return 6;
    }
    case 6: {
      return 7;
    }
    case 7: {
      return 8;
    }
    case 8: {
      return 9;
    }
    case 9: {
      return 10;
    }
    case 10: {
      return 11;
    }
    case 11: {
      return 12;
    }
    case 12: {
      return 13;
    }
    case 13: {
      return 14;
    }
    case 14: {
      return 15;
    }
    case 15: {
      return 16;
    }
    case 16: {
      return 17;
    }
    case 17: {
      return 18;
    }
    case 18: {
      return 19;
    }
    case 19: {
      return 20;
    }
    case 20: {
      return 21;
    }
    case 21: {
      return 22;
    }
    case 22: {
      return 23;
    }
    case 23: {
      return 24;
    }
    case 24: {
      return 25;
    }
    case 25: {
      return 26;
    }
    case 26: {
      return 27;
    }
    default: {
      return $panic();
    }
  }
}
function yj$45$qin$regexp$$Program$op_code(self, pos) {
  return yj$45$qin$regexp$$OpCode$from_bytecode(moonbitlang$core$array$$Array$op_get$8$(self.bytecodes, pos));
}
function yj$45$qin$regexp$$Program$operand(self, pos) {
  return moonbitlang$core$array$$Array$op_get$8$(self.bytecodes, pos);
}
function yj$45$qin$regexp$$AstNode$new(internal, parent, children) {
  return { internal: internal, parent: parent, children: children };
}
function yj$45$qin$regexp$$AstNode$new$46$parent$46$default() {
  return undefined;
}
function yj$45$qin$regexp$$AstNode$new$46$children$46$default() {
  return [];
}
function yj$45$qin$regexp$$AstNode$add_child(self, child) {
  child.parent = self;
  moonbitlang$core$array$$Array$push$20$(self.children, child);
}
function yj$45$qin$regexp$$AstNode$get_child(self, idx) {
  return moonbitlang$core$array$$Array$op_get$20$(self.children, idx);
}
function yj$45$qin$regexp$$AstNode$child_num(self) {
  return self.children.length;
}
function yj$45$qin$regexp$$MatchResult$success(self) {
  return self.success;
}
function yj$45$qin$regexp$$OpCode$to_bytecode(self) {
  switch (self) {
    case 0: {
      return -1;
    }
    case 1: {
      return 0;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 2;
    }
    case 4: {
      return 3;
    }
    case 5: {
      return 4;
    }
    case 6: {
      return 5;
    }
    case 7: {
      return 6;
    }
    case 8: {
      return 7;
    }
    case 9: {
      return 8;
    }
    case 10: {
      return 9;
    }
    case 11: {
      return 10;
    }
    case 12: {
      return 11;
    }
    case 13: {
      return 12;
    }
    case 14: {
      return 13;
    }
    case 15: {
      return 14;
    }
    case 16: {
      return 15;
    }
    case 17: {
      return 16;
    }
    case 18: {
      return 17;
    }
    case 19: {
      return 18;
    }
    case 20: {
      return 19;
    }
    case 21: {
      return 20;
    }
    case 22: {
      return 21;
    }
    case 23: {
      return 22;
    }
    case 24: {
      return 23;
    }
    case 25: {
      return 24;
    }
    case 26: {
      return 25;
    }
    default: {
      return 26;
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$67$(_x_381, _x_382) {
  switch (_x_381) {
    case 0: {
      if (_x_382 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_382 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_382 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function yj$45$qin$regexp$$Interpreter$new(prog) {
  return { prog: prog, status: 0, op_code: 0, op_pos: 0, text_start: 0, text_end: 0, text_pos: 0, op_stack: [], track_stack: [], run_stack: [], capture_stack: [], captures: moonbitlang$core$array$$Array$makei$18$(prog.capture_num, (_i) => undefined) };
}
function yj$45$qin$regexp$$Interpreter$advance(self, num) {
  self.op_pos = self.op_pos + num | 0;
  self.op_code = yj$45$qin$regexp$$Program$op_code(self.prog, self.op_pos);
}
function yj$45$qin$regexp$$Interpreter$goto(self, pos) {
  self.op_pos = pos;
  self.op_code = yj$45$qin$regexp$$Program$op_code(self.prog, self.op_pos);
}
function yj$45$qin$regexp$$Interpreter$operand(self, n) {
  return yj$45$qin$regexp$$Program$operand(self.prog, (self.op_pos + n | 0) + 1 | 0);
}
function yj$45$qin$regexp$$Interpreter$op_pop(self) {
  return moonbitlang$core$array$$Array$unsafe_pop$8$(self.op_stack);
}
function yj$45$qin$regexp$$Interpreter$backtrack(self) {
  const op_pos = yj$45$qin$regexp$$Interpreter$op_pop(self);
  if (op_pos < 0) {
    self.status = 2;
    self.op_pos = -op_pos;
  } else {
    self.status = 1;
    self.op_pos = op_pos;
  }
  self.op_code = yj$45$qin$regexp$$Program$op_code(self.prog, self.op_pos);
}
function yj$45$qin$regexp$$Interpreter$capture(self, idx, start, end) {
  let start$2;
  let end$2;
  _L: {
    if (end < start) {
      start$2 = end;
      end$2 = start;
      break _L;
    } else {
      start$2 = start;
      end$2 = end;
      break _L;
    }
  }
  moonbitlang$core$array$$Array$push$8$(self.capture_stack, idx);
  moonbitlang$core$array$$Array$op_set$18$(self.captures, idx, { _0: start$2, _1: end$2 });
}
function yj$45$qin$regexp$$Interpreter$uncapture(self) {
  const idx = moonbitlang$core$array$$Array$unsafe_pop$8$(self.capture_stack);
  moonbitlang$core$array$$Array$op_set$18$(self.captures, idx, undefined);
}
function yj$45$qin$regexp$$Interpreter$op_push(self, branch) {
  moonbitlang$core$array$$Array$push$8$(self.op_stack, branch ? -self.op_pos : self.op_pos);
}
function yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default() {
  return false;
}
function yj$45$qin$regexp$$Interpreter$track_push(self, arg) {
  moonbitlang$core$array$$Array$push$8$(self.track_stack, arg);
}
function yj$45$qin$regexp$$Interpreter$track_pop(self) {
  return moonbitlang$core$array$$Array$unsafe_pop$8$(self.track_stack);
}
function yj$45$qin$regexp$$Interpreter$run_push(self, arg) {
  moonbitlang$core$array$$Array$push$8$(self.run_stack, arg);
}
function yj$45$qin$regexp$$Interpreter$run_pop(self) {
  return moonbitlang$core$array$$Array$unsafe_pop$8$(self.run_stack);
}
function yj$45$qin$regexp$$Interpreter$chars_remain(self) {
  return self.text_end - self.text_pos | 0;
}
function yj$45$qin$regexp$$Interpreter$next_char(self, text) {
  self.text_pos = self.text_pos + 1 | 0;
  return text.charCodeAt(self.text_pos - 1 | 0);
}
function yj$45$qin$regexp$$Interpreter$rewind(self) {
  self.text_pos = self.text_pos - 1 | 0;
}
function yj$45$qin$regexp$$is_digit(char) {
  return char >= 48 && char <= 57;
}
function yj$45$qin$regexp$$is_whitespace(char) {
  return char === 32 || (char === 9 || (char === 10 || (char === 13 || (char === 11 || (char === 12 || (char === 32 || (char === 160 || (char === 5760 || (char === 8192 || (char === 8193 || (char === 8194 || (char === 8195 || (char === 8196 || (char === 8197 || (char === 8198 || (char === 8199 || (char === 8200 || (char === 8201 || (char === 8232 || char === 8233)))))))))))))))))));
}
function yj$45$qin$regexp$$is_word_char(char) {
  return char >= 97 && char <= 122 || (char >= 65 && char <= 90 || (char >= 48 && char <= 57 || char === 95));
}
function yj$45$qin$regexp$$CharClass$categories_contains(self, char) {
  const _arr = self.categories;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const category = _arr[_i];
      let res;
      switch (category) {
        case 0: {
          res = yj$45$qin$regexp$$is_digit(char);
          break;
        }
        case 1: {
          res = !yj$45$qin$regexp$$is_digit(char);
          break;
        }
        case 2: {
          res = yj$45$qin$regexp$$is_whitespace(char);
          break;
        }
        case 3: {
          res = !yj$45$qin$regexp$$is_whitespace(char);
          break;
        }
        case 4: {
          res = yj$45$qin$regexp$$is_word_char(char);
          break;
        }
        default: {
          res = !yj$45$qin$regexp$$is_word_char(char);
        }
      }
      if (res) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function yj$45$qin$regexp$$CharClass$ranges_contains(self, char) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.ranges.length) {
      const low = moonbitlang$core$array$$Array$op_get$8$(self.ranges, i);
      const high = moonbitlang$core$array$$Array$op_get$8$(self.ranges, i + 1 | 0);
      if (char >= low && char <= high) {
        return true;
      }
      _tmp = i + 2 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function yj$45$qin$regexp$$CharClass$contains(self, char) {
  const result = yj$45$qin$regexp$$CharClass$ranges_contains(self, char) || yj$45$qin$regexp$$CharClass$categories_contains(self, char);
  return self.neg ? !result : result;
}
function yj$45$qin$regexp$$Interpreter$char_in_class(self, class_idx, char) {
  const class_ = moonbitlang$core$array$$Array$op_get$21$(self.prog.classes, class_idx);
  return yj$45$qin$regexp$$CharClass$contains(class_, char);
}
function yj$45$qin$regexp$$Interpreter$try_match(self, text) {
  self.op_pos = 0;
  self.op_code = yj$45$qin$regexp$$Program$op_code(self.prog, self.op_pos);
  while (true) {
    _L: {
      const cur_opcode = self.op_code;
      const cur_status = self.status;
      if (moonbitlang$core$builtin$$Eq$op_equal$67$(self.status, 1)) {
        self.status = 0;
      }
      _L$2: {
        _L$3: {
          _L$4: {
            _L$5: {
              _L$6: {
                _L$7: {
                  switch (cur_opcode) {
                    case 0: {
                      yj$45$qin$regexp$$Interpreter$advance(self, 1);
                      break _L;
                    }
                    case 1: {
                      return moonbitlang$core$builtin$$op_notequal$18$(moonbitlang$core$array$$Array$op_get$18$(self.captures, 0), undefined);
                    }
                    case 16: {
                      yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                      break _L;
                    }
                    case 14: {
                      if (self.text_pos === self.text_start) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 1);
                        break _L;
                      }
                      break;
                    }
                    case 15: {
                      if (self.text_pos >= self.text_end) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 1);
                        break _L;
                      }
                      break;
                    }
                    case 17: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos);
                          yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          break _L;
                        }
                        case 1: {
                          self.text_pos = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          break _L;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                    }
                    case 25: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          yj$45$qin$regexp$$Interpreter$run_push(self, self.text_pos);
                          yj$45$qin$regexp$$Interpreter$advance(self, 1);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 24: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          yj$45$qin$regexp$$Interpreter$run_push(self, -1);
                          yj$45$qin$regexp$$Interpreter$advance(self, 1);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 27: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          const text_pos = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          yj$45$qin$regexp$$Interpreter$track_push(self, text_pos);
                          self.text_pos = text_pos;
                          yj$45$qin$regexp$$Interpreter$advance(self, 1);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_push(self, yj$45$qin$regexp$$Interpreter$track_pop(self));
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 26: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          const mark = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          yj$45$qin$regexp$$Interpreter$capture(self, yj$45$qin$regexp$$Interpreter$operand(self, 0), mark, self.text_pos);
                          yj$45$qin$regexp$$Interpreter$track_push(self, mark);
                          yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_push(self, yj$45$qin$regexp$$Interpreter$track_pop(self));
                          yj$45$qin$regexp$$Interpreter$uncapture(self);
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 18: {
                      switch (cur_status) {
                        case 0: {
                          const mark$2 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          if (self.text_pos !== mark$2) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos);
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$2);
                            yj$45$qin$regexp$$Interpreter$run_push(self, self.text_pos);
                            yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          } else {
                            yj$45$qin$regexp$$Interpreter$op_push(self, true);
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$2);
                            yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          }
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const old_mark = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const text_pos$2 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          self.text_pos = text_pos$2;
                          yj$45$qin$regexp$$Interpreter$op_push(self, true);
                          yj$45$qin$regexp$$Interpreter$track_push(self, old_mark);
                          yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          break _L;
                        }
                        default: {
                          const old_mark$2 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_push(self, old_mark$2);
                        }
                      }
                      break;
                    }
                    case 21: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          yj$45$qin$regexp$$Interpreter$run_push(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          yj$45$qin$regexp$$Interpreter$run_push(self, self.text_pos);
                          yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 20: {
                      switch (cur_status) {
                        case 0: {
                          yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                          yj$45$qin$regexp$$Interpreter$run_push(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          yj$45$qin$regexp$$Interpreter$run_push(self, -1);
                          yj$45$qin$regexp$$Interpreter$advance(self, 2);
                          break _L;
                        }
                        case 1: {
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 22: {
                      switch (cur_status) {
                        case 0: {
                          const mark$3 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const count = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const matched = self.text_pos - mark$3 | 0;
                          if (count >= yj$45$qin$regexp$$Interpreter$operand(self, 1) || matched === 0 && count >= 0) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, true);
                            yj$45$qin$regexp$$Interpreter$track_push(self, count);
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$3);
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                          } else {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$3);
                            yj$45$qin$regexp$$Interpreter$run_push(self, count + 1 | 0);
                            yj$45$qin$regexp$$Interpreter$run_push(self, self.text_pos);
                            yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          }
                          break _L;
                        }
                        case 1: {
                          const old_mark$3 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const text_pos$3 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const count$2 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          if (count$2 > 0) {
                            self.text_pos = text_pos$3;
                            yj$45$qin$regexp$$Interpreter$op_push(self, true);
                            yj$45$qin$regexp$$Interpreter$track_push(self, count$2 - 1 | 0);
                            yj$45$qin$regexp$$Interpreter$track_push(self, old_mark$3);
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                            break _L;
                          }
                          yj$45$qin$regexp$$Interpreter$run_push(self, count$2 - 1 | 0);
                          yj$45$qin$regexp$$Interpreter$run_push(self, old_mark$3);
                          break;
                        }
                        default: {
                          const mark$4 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const count$3 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_push(self, count$3);
                          yj$45$qin$regexp$$Interpreter$run_push(self, mark$4);
                        }
                      }
                      break;
                    }
                    case 23: {
                      switch (cur_status) {
                        case 0: {
                          const mark$5 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const count$4 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          if (count$4 < 0) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, true);
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$5);
                            yj$45$qin$regexp$$Interpreter$run_push(self, count$4 + 1 | 0);
                            yj$45$qin$regexp$$Interpreter$run_push(self, self.text_pos);
                            yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          } else {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos);
                            yj$45$qin$regexp$$Interpreter$track_push(self, count$4);
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$5);
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                          }
                          break _L;
                        }
                        case 1: {
                          const mark$6 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const count$5 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const text_pos$4 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          if (count$5 < yj$45$qin$regexp$$Interpreter$operand(self, 1) && text_pos$4 !== mark$6) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            self.text_pos = text_pos$4;
                            yj$45$qin$regexp$$Interpreter$track_push(self, mark$6);
                            yj$45$qin$regexp$$Interpreter$run_push(self, count$5 + 1 | 0);
                            yj$45$qin$regexp$$Interpreter$run_push(self, text_pos$4);
                            yj$45$qin$regexp$$Interpreter$goto(self, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                            break _L;
                          } else {
                            yj$45$qin$regexp$$Interpreter$run_push(self, count$5);
                            yj$45$qin$regexp$$Interpreter$run_push(self, mark$6);
                          }
                          break;
                        }
                        default: {
                          const old_mark$4 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_pop(self);
                          const count$6 = yj$45$qin$regexp$$Interpreter$run_pop(self);
                          yj$45$qin$regexp$$Interpreter$run_push(self, count$6 - 1 | 0);
                          yj$45$qin$regexp$$Interpreter$run_push(self, old_mark$4);
                        }
                      }
                      break;
                    }
                    case 2: {
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) >= 1 && yj$45$qin$regexp$$Interpreter$next_char(self, text) === yj$45$qin$regexp$$Interpreter$operand(self, 0)) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 2);
                        break _L;
                      }
                      break;
                    }
                    case 3: {
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) >= 1 && yj$45$qin$regexp$$Interpreter$next_char(self, text) !== yj$45$qin$regexp$$Interpreter$operand(self, 0)) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 2);
                        break _L;
                      }
                      break;
                    }
                    case 4: {
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) >= 1 && yj$45$qin$regexp$$Interpreter$char_in_class(self, yj$45$qin$regexp$$Interpreter$operand(self, 0), yj$45$qin$regexp$$Interpreter$next_char(self, text))) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 2);
                        break _L;
                      }
                      break;
                    }
                    case 5: {
                      let matched$2 = false;
                      const count$7 = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) >= count$7) {
                        const ch = yj$45$qin$regexp$$Interpreter$operand(self, 0);
                        let _tmp = 0;
                        while (true) {
                          const i = _tmp;
                          if (i < count$7) {
                            if (yj$45$qin$regexp$$Interpreter$next_char(self, text) !== ch) {
                              break;
                            }
                            _tmp = i + 1 | 0;
                            continue;
                          } else {
                            matched$2 = true;
                            break;
                          }
                        }
                      }
                      if (matched$2) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 3);
                        break _L;
                      }
                      break;
                    }
                    case 6: {
                      let matched$3 = false;
                      const count$8 = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) >= count$8) {
                        const ch = yj$45$qin$regexp$$Interpreter$operand(self, 0);
                        let _tmp = 0;
                        while (true) {
                          const i = _tmp;
                          if (i < count$8) {
                            if (yj$45$qin$regexp$$Interpreter$next_char(self, text) === ch) {
                              break;
                            }
                            _tmp = i + 1 | 0;
                            continue;
                          } else {
                            matched$3 = true;
                            break;
                          }
                        }
                      }
                      if (matched$3) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 3);
                        break _L;
                      }
                      break;
                    }
                    case 7: {
                      let matched$4 = true;
                      const class_idx = yj$45$qin$regexp$$Interpreter$operand(self, 0);
                      const count$9 = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                      if (yj$45$qin$regexp$$Interpreter$chars_remain(self) < count$9) {
                        matched$4 = false;
                      } else {
                        let _tmp = 0;
                        while (true) {
                          const i = _tmp;
                          if (i < count$9) {
                            if (!yj$45$qin$regexp$$Interpreter$char_in_class(self, class_idx, yj$45$qin$regexp$$Interpreter$next_char(self, text))) {
                              matched$4 = false;
                              yj$45$qin$regexp$$Interpreter$rewind(self);
                              break;
                            }
                            _tmp = i + 1 | 0;
                            continue;
                          } else {
                            break;
                          }
                        }
                      }
                      if (matched$4) {
                        yj$45$qin$regexp$$Interpreter$advance(self, 3);
                        break _L;
                      }
                      break;
                    }
                    case 8: {
                      switch (cur_status) {
                        case 0: {
                          const ch = yj$45$qin$regexp$$Interpreter$operand(self, 0);
                          const max_count = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                          const count$10 = moonbitlang$core$math$$minimum$8$(max_count, yj$45$qin$regexp$$Interpreter$chars_remain(self));
                          let i = count$10;
                          while (true) {
                            if (i > 0) {
                              if (yj$45$qin$regexp$$Interpreter$next_char(self, text) !== ch) {
                                yj$45$qin$regexp$$Interpreter$rewind(self);
                                break;
                              }
                              i = i - 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          if (i < count$10) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, (count$10 - i | 0) - 1 | 0);
                            yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos - 1 | 0);
                          }
                          yj$45$qin$regexp$$Interpreter$advance(self, 3);
                          break _L;
                        }
                        case 1: {
                          break _L$7;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                    }
                    case 9: {
                      switch (cur_status) {
                        case 0: {
                          const ch$2 = yj$45$qin$regexp$$Interpreter$operand(self, 0);
                          const max_count$2 = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                          const count$11 = moonbitlang$core$math$$minimum$8$(max_count$2, yj$45$qin$regexp$$Interpreter$chars_remain(self));
                          let i$2 = count$11;
                          while (true) {
                            if (i$2 > 0) {
                              if (yj$45$qin$regexp$$Interpreter$next_char(self, text) === ch$2) {
                                yj$45$qin$regexp$$Interpreter$rewind(self);
                                break;
                              }
                              i$2 = i$2 - 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          if (i$2 < count$11) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, (count$11 - i$2 | 0) - 1 | 0);
                            yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos - 1 | 0);
                          }
                          yj$45$qin$regexp$$Interpreter$advance(self, 3);
                          break _L;
                        }
                        case 1: {
                          break _L$7;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                    }
                    case 10: {
                      switch (cur_status) {
                        case 0: {
                          const max_count$3 = yj$45$qin$regexp$$Interpreter$operand(self, 1);
                          const count$12 = moonbitlang$core$math$$minimum$8$(max_count$3, yj$45$qin$regexp$$Interpreter$chars_remain(self));
                          let i$3 = count$12;
                          while (true) {
                            if (i$3 > 0) {
                              if (!yj$45$qin$regexp$$Interpreter$char_in_class(self, yj$45$qin$regexp$$Interpreter$operand(self, 0), yj$45$qin$regexp$$Interpreter$next_char(self, text))) {
                                yj$45$qin$regexp$$Interpreter$rewind(self);
                                break;
                              }
                              i$3 = i$3 - 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          if (i$3 < count$12) {
                            yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                            yj$45$qin$regexp$$Interpreter$track_push(self, (count$12 - i$3 | 0) - 1 | 0);
                            yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos - 1 | 0);
                          }
                          yj$45$qin$regexp$$Interpreter$advance(self, 3);
                          break _L;
                        }
                        case 1: {
                          break _L$7;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                    }
                    case 11: {
                      switch (cur_status) {
                        case 0: {
                          break _L$5;
                        }
                        case 1: {
                          const text_pos$5 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          self.text_pos = text_pos$5;
                          const count$13 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          if (yj$45$qin$regexp$$Interpreter$next_char(self, text) === yj$45$qin$regexp$$Interpreter$operand(self, 0)) {
                            if (count$13 > 0) {
                              yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                              yj$45$qin$regexp$$Interpreter$track_push(self, count$13 - 1 | 0);
                              yj$45$qin$regexp$$Interpreter$track_push(self, text_pos$5 + 1 | 0);
                            }
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                            break _L;
                          }
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 12: {
                      switch (cur_status) {
                        case 0: {
                          break _L$5;
                        }
                        case 1: {
                          const text_pos$6 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          self.text_pos = text_pos$6;
                          const count$14 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          if (yj$45$qin$regexp$$Interpreter$next_char(self, text) !== yj$45$qin$regexp$$Interpreter$operand(self, 0)) {
                            if (count$14 > 0) {
                              yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                              yj$45$qin$regexp$$Interpreter$track_push(self, count$14 - 1 | 0);
                              yj$45$qin$regexp$$Interpreter$track_push(self, text_pos$6 + 1 | 0);
                            }
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                            break _L;
                          }
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    case 13: {
                      switch (cur_status) {
                        case 0: {
                          break _L$5;
                        }
                        case 1: {
                          const text_pos$7 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          self.text_pos = text_pos$7;
                          const count$15 = yj$45$qin$regexp$$Interpreter$track_pop(self);
                          const class_ = moonbitlang$core$array$$Array$op_get$21$(self.prog.classes, yj$45$qin$regexp$$Interpreter$operand(self, 0));
                          if (yj$45$qin$regexp$$CharClass$contains(class_, yj$45$qin$regexp$$Interpreter$next_char(self, text))) {
                            if (count$15 > 0) {
                              yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                              yj$45$qin$regexp$$Interpreter$track_push(self, count$15 - 1 | 0);
                              yj$45$qin$regexp$$Interpreter$track_push(self, text_pos$7 + 1 | 0);
                            }
                            yj$45$qin$regexp$$Interpreter$advance(self, 3);
                            break _L;
                          }
                          break;
                        }
                        default: {
                          break _L$3;
                        }
                      }
                      break;
                    }
                    default: {
                      break _L$3;
                    }
                  }
                  break _L$6;
                }
                const text_pos = yj$45$qin$regexp$$Interpreter$track_pop(self);
                const i = yj$45$qin$regexp$$Interpreter$track_pop(self);
                self.text_pos = text_pos;
                if (i > 0) {
                  yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
                  yj$45$qin$regexp$$Interpreter$track_push(self, i - 1 | 0);
                  yj$45$qin$regexp$$Interpreter$track_push(self, text_pos - 1 | 0);
                }
                yj$45$qin$regexp$$Interpreter$advance(self, 3);
                break _L;
              }
              break _L$4;
            }
            const max_count = yj$45$qin$regexp$$Interpreter$operand(self, 1);
            const count = moonbitlang$core$math$$minimum$8$(max_count, yj$45$qin$regexp$$Interpreter$chars_remain(self));
            if (count > 0) {
              yj$45$qin$regexp$$Interpreter$op_push(self, yj$45$qin$regexp$$Interpreter$op_push$46$branch$46$default());
              yj$45$qin$regexp$$Interpreter$track_push(self, count - 1 | 0);
              yj$45$qin$regexp$$Interpreter$track_push(self, self.text_pos);
            }
            yj$45$qin$regexp$$Interpreter$advance(self, 3);
            break _L;
          }
          break _L$2;
        }
        $panic();
      }
      yj$45$qin$regexp$$Interpreter$backtrack(self);
      break _L;
    }
    continue;
  }
}
function yj$45$qin$regexp$$Interpreter$scan(self, text, start, end) {
  self.text_start = start;
  self.text_end = end;
  self.text_pos = self.text_start;
  while (true) {
    if (self.text_pos <= text.length) {
      if (yj$45$qin$regexp$$Interpreter$try_match(self, text)) {
        break;
      }
      self.text_pos = self.text_pos + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const captures = moonbitlang$core$array$$Array$map$43$(self.captures, (r) => {
    if (moonbitlang$core$option$$Option$op_equal$19$(r, undefined)) {
      return "";
    } else {
      const _bind = moonbitlang$core$option$$Option$unwrap$19$(r);
      const _x = _bind._0;
      const _x$2 = _bind._1;
      return moonbitlang$core$string$$String$substring(text, _x, _x$2);
    }
  });
  const named_captures = moonbitlang$core$builtin$$Map$from_array$32$([]);
  const _bind = moonbitlang$core$builtin$$Map$iter2$31$(self.prog.capture_name_mapping);
  _bind((k, v) => {
    moonbitlang$core$builtin$$Map$op_set$32$(named_captures, k, moonbitlang$core$array$$Array$op_get$4$(captures, v));
    return 1;
  });
  return { success: moonbitlang$core$builtin$$op_notequal$18$(moonbitlang$core$array$$Array$op_get$18$(self.captures, 0), undefined), captures: captures, named_captures: named_captures };
}
function yj$45$qin$regexp$$Emitter$cur_pos(self) {
  return self.bytecodes.length;
}
function yj$45$qin$regexp$$Emitter$emit_0(self, op) {
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, yj$45$qin$regexp$$OpCode$to_bytecode(op));
}
function yj$45$qin$regexp$$Emitter$emit_1(self, op, operand) {
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, yj$45$qin$regexp$$OpCode$to_bytecode(op));
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, operand);
}
function yj$45$qin$regexp$$Emitter$emit_2(self, op, operand1, operand2) {
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, yj$45$qin$regexp$$OpCode$to_bytecode(op));
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, operand1);
  moonbitlang$core$array$$Array$push$8$(self.bytecodes, operand2);
}
function yj$45$qin$regexp$$Emitter$patch_jump(self, offset, dest) {
  moonbitlang$core$array$$Array$op_set$8$(self.bytecodes, offset + 1 | 0, dest);
}
function yj$45$qin$regexp$$Emitter$pop_stack(self) {
  return moonbitlang$core$array$$Array$unsafe_pop$8$(self.stack);
}
function yj$45$qin$regexp$$Emitter$push_stack(self, val) {
  moonbitlang$core$array$$Array$push$8$(self.stack, val);
}
function yj$45$qin$regexp$$Emitter$emit_fragment(self, node, cur_child, status) {
  const _bind = node.internal;
  switch (_bind.$tag) {
    case 0: {
      return;
    }
    case 10: {
      return;
    }
    case 9: {
      if (status === 0) {
        if (cur_child < (yj$45$qin$regexp$$AstNode$child_num(node) - 1 | 0)) {
          yj$45$qin$regexp$$Emitter$push_stack(self, yj$45$qin$regexp$$Emitter$cur_pos(self));
          yj$45$qin$regexp$$Emitter$emit_1(self, 17, 0);
          return;
        } else {
          return;
        }
      } else {
        if (cur_child < (yj$45$qin$regexp$$AstNode$child_num(node) - 1 | 0)) {
          const branch_pos = yj$45$qin$regexp$$Emitter$pop_stack(self);
          yj$45$qin$regexp$$Emitter$push_stack(self, self.bytecodes.length);
          yj$45$qin$regexp$$Emitter$emit_1(self, 16, 0);
          yj$45$qin$regexp$$Emitter$patch_jump(self, branch_pos, yj$45$qin$regexp$$Emitter$cur_pos(self));
          return;
        } else {
          let _tmp = 0;
          while (true) {
            const i = _tmp;
            if (i < cur_child) {
              yj$45$qin$regexp$$Emitter$patch_jump(self, yj$45$qin$regexp$$Emitter$pop_stack(self), yj$45$qin$regexp$$Emitter$cur_pos(self));
              _tmp = i + 1 | 0;
              continue;
            } else {
              return;
            }
          }
        }
      }
    }
    case 11: {
      const _Loop = _bind;
      const _x = _Loop._0;
      const _x$2 = _Loop._1;
      if (status === 0) {
        if (_x > 1 || !moonbitlang$core$option$$Option$is_empty$8$(_x$2)) {
          if (_x === 0) {
            yj$45$qin$regexp$$Emitter$emit_1(self, 20, 0);
          } else {
            yj$45$qin$regexp$$Emitter$emit_1(self, 21, 1 - _x | 0);
          }
        } else {
          const opcode = _x === 0 ? 24 : 25;
          yj$45$qin$regexp$$Emitter$emit_0(self, opcode);
        }
        if (_x === 0) {
          yj$45$qin$regexp$$Emitter$push_stack(self, yj$45$qin$regexp$$Emitter$cur_pos(self));
          yj$45$qin$regexp$$Emitter$emit_1(self, 16, 0);
        }
        yj$45$qin$regexp$$Emitter$push_stack(self, yj$45$qin$regexp$$Emitter$cur_pos(self));
        return;
      } else {
        const _x$3 = _Loop._2;
        const jump_dest = yj$45$qin$regexp$$Emitter$cur_pos(self);
        if (_x > 1 || !moonbitlang$core$option$$Option$is_empty$8$(_x$2)) {
          const opcode = _x$3 ? 22 : 23;
          const count = moonbitlang$core$option$$Option$is_empty$8$(_x$2) ? moonbitlang$core$int$$max_value : moonbitlang$core$option$$Option$unwrap$8$(_x$2) - _x | 0;
          yj$45$qin$regexp$$Emitter$emit_2(self, opcode, yj$45$qin$regexp$$Emitter$pop_stack(self), count);
        } else {
          const opcode = _x$3 ? 18 : 19;
          yj$45$qin$regexp$$Emitter$emit_1(self, opcode, yj$45$qin$regexp$$Emitter$pop_stack(self));
        }
        if (_x === 0) {
          yj$45$qin$regexp$$Emitter$patch_jump(self, yj$45$qin$regexp$$Emitter$pop_stack(self), jump_dest);
          return;
        } else {
          return;
        }
      }
    }
    case 12: {
      const _Capture = _bind;
      if (status === 0) {
        yj$45$qin$regexp$$Emitter$emit_0(self, 25);
        return;
      } else {
        const _x$3 = _Capture._0;
        yj$45$qin$regexp$$Emitter$emit_1(self, 26, _x$3);
        return;
      }
    }
    case 13: {
      return;
    }
    case 1: {
      const _Single = _bind;
      const _x$3 = _Single._0;
      yj$45$qin$regexp$$Emitter$emit_1(self, 2, _x$3);
      return;
    }
    case 2: {
      const _NotSingle = _bind;
      const _x$4 = _NotSingle._0;
      yj$45$qin$regexp$$Emitter$emit_1(self, 3, _x$4);
      return;
    }
    case 3: {
      const _Class = _bind;
      const _x$5 = _Class._0;
      const idx = self.classes.length;
      moonbitlang$core$array$$Array$push$21$(self.classes, _x$5);
      yj$45$qin$regexp$$Emitter$emit_1(self, 4, idx);
      return;
    }
    case 4: {
      const _SingleLoop = _bind;
      const _x$6 = _SingleLoop._0;
      const _x$7 = _SingleLoop._1;
      const _x$8 = _SingleLoop._2;
      const _x$9 = _SingleLoop._3;
      const opd = _x$6;
      if (_x$7 > 0) {
        yj$45$qin$regexp$$Emitter$emit_2(self, 5, opd, _x$7);
      }
      const opcode = _x$9 ? 8 : 11;
      if (_x$8 === undefined) {
        yj$45$qin$regexp$$Emitter$emit_2(self, opcode, opd, moonbitlang$core$int$$max_value);
        return;
      } else {
        const _Some = _x$8;
        const _x$10 = _Some;
        if (_x$10 !== _x$7) {
          yj$45$qin$regexp$$Emitter$emit_2(self, opcode, opd, _x$10 - _x$7 | 0);
          return;
        } else {
          return;
        }
      }
    }
    case 5: {
      const _NotSingleLoop = _bind;
      const _x$10 = _NotSingleLoop._0;
      const _x$11 = _NotSingleLoop._1;
      const _x$12 = _NotSingleLoop._2;
      const _x$13 = _NotSingleLoop._3;
      const opd$2 = _x$10;
      if (_x$11 > 0) {
        yj$45$qin$regexp$$Emitter$emit_2(self, 6, opd$2, _x$11);
      }
      const opcode$2 = _x$13 ? 9 : 12;
      if (_x$12 === undefined) {
        yj$45$qin$regexp$$Emitter$emit_2(self, opcode$2, opd$2, moonbitlang$core$int$$max_value);
        return;
      } else {
        const _Some = _x$12;
        const _x$14 = _Some;
        if (_x$14 !== _x$11) {
          yj$45$qin$regexp$$Emitter$emit_2(self, opcode$2, opd$2, _x$14 - _x$11 | 0);
          return;
        } else {
          return;
        }
      }
    }
    case 6: {
      const _ClassLoop = _bind;
      const _x$14 = _ClassLoop._0;
      const _x$15 = _ClassLoop._1;
      const _x$16 = _ClassLoop._2;
      const _x$17 = _ClassLoop._3;
      const idx$2 = self.classes.length;
      moonbitlang$core$array$$Array$push$21$(self.classes, _x$14);
      if (_x$15 > 0) {
        yj$45$qin$regexp$$Emitter$emit_2(self, 7, idx$2, _x$15);
      }
      const opcode$3 = _x$17 ? 10 : 13;
      if (_x$16 === undefined) {
        yj$45$qin$regexp$$Emitter$emit_2(self, opcode$3, idx$2, moonbitlang$core$int$$max_value);
        return;
      } else {
        const _Some = _x$16;
        const _x$18 = _Some;
        if (_x$18 !== _x$15) {
          yj$45$qin$regexp$$Emitter$emit_2(self, opcode$3, idx$2, _x$18 - _x$15 | 0);
          return;
        } else {
          return;
        }
      }
    }
    case 7: {
      yj$45$qin$regexp$$Emitter$emit_0(self, 14);
      return;
    }
    default: {
      yj$45$qin$regexp$$Emitter$emit_0(self, 15);
      return;
    }
  }
}
function yj$45$qin$regexp$$Emitter$emit_fragment$46$status$46$default() {
  return 0;
}
function yj$45$qin$regexp$$Emitter$emit(self) {
  yj$45$qin$regexp$$Emitter$emit_1(self, 17, 0);
  let cur_node = self.ast.root;
  let cur_child = 0;
  while (true) {
    _L: {
      const cur_child_num = yj$45$qin$regexp$$AstNode$child_num(cur_node);
      if (cur_child_num === 0) {
        yj$45$qin$regexp$$Emitter$emit_fragment(self, cur_node, 0, yj$45$qin$regexp$$Emitter$emit_fragment$46$status$46$default());
      } else {
        if (cur_child < cur_child_num) {
          yj$45$qin$regexp$$Emitter$emit_fragment(self, cur_node, cur_child, 0);
          yj$45$qin$regexp$$Emitter$push_stack(self, cur_child);
          cur_node = yj$45$qin$regexp$$AstNode$get_child(cur_node, cur_child);
          cur_child = 0;
          break _L;
        }
      }
      if (moonbitlang$core$array$$Array$is_empty$8$(self.stack)) {
        break;
      }
      cur_child = yj$45$qin$regexp$$Emitter$pop_stack(self);
      cur_node = moonbitlang$core$option$$Option$unwrap$20$(cur_node.parent);
      yj$45$qin$regexp$$Emitter$emit_fragment(self, cur_node, cur_child, 1);
      cur_child = cur_child + 1 | 0;
      break _L;
    }
    continue;
  }
  yj$45$qin$regexp$$Emitter$patch_jump(self, 0, yj$45$qin$regexp$$Emitter$cur_pos(self));
  yj$45$qin$regexp$$Emitter$emit_0(self, 1);
  return { bytecodes: self.bytecodes, classes: self.classes, capture_num: self.ast.capture_num, capture_name_mapping: self.ast.capture_name_mapping };
}
function yj$45$qin$regexp$$Emitter$new(ast) {
  return { ast: ast, bytecodes: [], classes: [], stack: [] };
}
function yj$45$qin$regexp$$Parser$new(pattern) {
  return { pattern: pattern, pos: 0, pos_mark: 0, group_index: 0, capture_num: 0, capture_name_mapping: moonbitlang$core$builtin$$Map$from_array$31$([]) };
}
function yj$45$qin$regexp$$Parser$advance(self, n) {
  self.pos = self.pos + n | 0;
}
function yj$45$qin$regexp$$Parser$more(self) {
  return self.pos < self.pattern.length;
}
function yj$45$qin$regexp$$CharClass$add_category(self, category) {
  moonbitlang$core$array$$Array$push$37$(self.categories, category);
}
function yj$45$qin$regexp$$CharClass$add_range(self, low, high) {
  moonbitlang$core$array$$Array$push$8$(self.ranges, low);
  moonbitlang$core$array$$Array$push$8$(self.ranges, high);
}
function yj$45$qin$regexp$$CharClass$add_single(self, char) {
  moonbitlang$core$array$$Array$push$8$(self.ranges, char);
  moonbitlang$core$array$$Array$push$8$(self.ranges, char);
}
function yj$45$qin$regexp$$CharClass$new(neg, ranges, categories) {
  return { neg: neg, ranges: ranges, categories: categories };
}
function yj$45$qin$regexp$$CharClass$new$46$neg$46$default() {
  return false;
}
function yj$45$qin$regexp$$CharClass$new$46$ranges$46$default() {
  return [];
}
function yj$45$qin$regexp$$CharClass$new$46$categories$46$default() {
  return [];
}
function yj$45$qin$regexp$$Parser$peek(self) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    moonbitlang$core$builtin$$abort$9$("index out of bounds");
  }
  return self.pattern.charCodeAt(self.pos);
}
function yj$45$qin$regexp$$Parser$peek_is(self, expected) {
  return !yj$45$qin$regexp$$Parser$more(self) ? false : yj$45$qin$regexp$$Parser$peek(self) === expected;
}
function yj$45$qin$regexp$$Parser$parse_char_class_char(self) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Err$6$(new Error$yj$45$qin$47$regexp$46$ParseError$46$ClassMissingBracket(self.pos));
  }
  if (yj$45$qin$regexp$$Parser$peek_is(self, 92)) {
    yj$45$qin$regexp$$Parser$advance(self, 1);
  }
  const c = yj$45$qin$regexp$$Parser$peek(self);
  yj$45$qin$regexp$$Parser$advance(self, 1);
  return new Result$Ok$6$(c);
}
function yj$45$qin$regexp$$Parser$rewind(self, n) {
  self.pos = self.pos - n | 0;
}
function yj$45$qin$regexp$$Parser$parse_class(self) {
  let neg;
  if (yj$45$qin$regexp$$Parser$peek_is(self, 94)) {
    yj$45$qin$regexp$$Parser$advance(self, 1);
    neg = true;
  } else {
    neg = false;
  }
  let first = true;
  const char_class = yj$45$qin$regexp$$CharClass$new(neg, yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
  while (true) {
    if (yj$45$qin$regexp$$Parser$more(self) && (!yj$45$qin$regexp$$Parser$peek_is(self, 93) || first)) {
      if ((yj$45$qin$regexp$$Parser$peek_is(self, 93) || yj$45$qin$regexp$$Parser$peek_is(self, 45)) && first) {
        yj$45$qin$regexp$$CharClass$add_single(char_class, yj$45$qin$regexp$$Parser$peek(self));
        yj$45$qin$regexp$$Parser$advance(self, 1);
      }
      first = false;
      if (yj$45$qin$regexp$$Parser$peek_is(self, 92)) {
        yj$45$qin$regexp$$Parser$advance(self, 1);
        const _bind = yj$45$qin$regexp$$Parser$peek(self);
        switch (_bind) {
          case 100: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 0);
            break;
          }
          case 68: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 1);
            break;
          }
          case 115: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 2);
            break;
          }
          case 83: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 3);
            break;
          }
          case 119: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 4);
            break;
          }
          case 87: {
            yj$45$qin$regexp$$CharClass$add_category(char_class, 5);
            break;
          }
          case 116: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, 9);
            break;
          }
          case 114: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, 13);
            break;
          }
          case 110: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, 10);
            break;
          }
          case 118: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, 11);
            break;
          }
          case 102: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, 12);
            break;
          }
          default: {
            yj$45$qin$regexp$$CharClass$add_single(char_class, _bind);
          }
        }
        yj$45$qin$regexp$$Parser$advance(self, 1);
      } else {
        const _bind = yj$45$qin$regexp$$Parser$parse_char_class_char(self);
        let low;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          low = _ok._0;
        } else {
          return _bind;
        }
        let high = low;
        if (yj$45$qin$regexp$$Parser$more(self) && yj$45$qin$regexp$$Parser$peek_is(self, 45)) {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          if (yj$45$qin$regexp$$Parser$more(self) && yj$45$qin$regexp$$Parser$peek_is(self, 93)) {
            yj$45$qin$regexp$$Parser$rewind(self, 1);
          } else {
            const _bind$2 = yj$45$qin$regexp$$Parser$parse_char_class_char(self);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            high = _tmp;
          }
        }
        yj$45$qin$regexp$$CharClass$add_range(char_class, low, high);
      }
      continue;
    } else {
      break;
    }
  }
  if (!yj$45$qin$regexp$$Parser$more(self) || !yj$45$qin$regexp$$Parser$peek_is(self, 93)) {
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$ClassMissingBracket(self.pos));
  } else {
    yj$45$qin$regexp$$Parser$advance(self, 1);
    return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(char_class), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
  }
}
function yj$45$qin$regexp$$Parser$parse_escape(self) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$EndPatternAtEscape(self.pos));
  }
  const _bind = yj$45$qin$regexp$$Parser$peek(self);
  let node;
  switch (_bind) {
    case 100: {
      const self$2 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$2, 0);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$2);
      break;
    }
    case 68: {
      const self$3 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$3, 1);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$3);
      break;
    }
    case 115: {
      const self$4 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$4, 2);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$4);
      break;
    }
    case 83: {
      const self$5 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$5, 3);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$5);
      break;
    }
    case 119: {
      const self$6 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$6, 4);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$6);
      break;
    }
    case 87: {
      const self$7 = yj$45$qin$regexp$$CharClass$new(yj$45$qin$regexp$$CharClass$new$46$neg$46$default(), yj$45$qin$regexp$$CharClass$new$46$ranges$46$default(), yj$45$qin$regexp$$CharClass$new$46$categories$46$default());
      yj$45$qin$regexp$$CharClass$add_category(self$7, 5);
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Class(self$7);
      break;
    }
    case 116: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(9);
      break;
    }
    case 114: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(13);
      break;
    }
    case 110: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(10);
      break;
    }
    case 118: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(11);
      break;
    }
    case 102: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(12);
      break;
    }
    default: {
      node = new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(_bind);
    }
  }
  yj$45$qin$regexp$$Parser$advance(self, 1);
  return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new(node, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
}
function yj$45$qin$regexp$$Parser$parse_group_name(self) {
  yj$45$qin$regexp$$Parser$advance(self, 1);
  const buf = moonbitlang$core$buffer$$new(moonbitlang$core$buffer$$new$46$size_hint$46$default());
  while (true) {
    if (yj$45$qin$regexp$$Parser$more(self) && !yj$45$qin$regexp$$Parser$peek_is(self, 62)) {
      moonbitlang$core$buffer$$T$write_char(buf, yj$45$qin$regexp$$Parser$peek(self));
      yj$45$qin$regexp$$Parser$advance(self, 1);
      continue;
    } else {
      break;
    }
  }
  if (!yj$45$qin$regexp$$Parser$peek_is(self, 62)) {
    return new Result$Err$8$(new Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupName(self.pos));
  }
  yj$45$qin$regexp$$Parser$advance(self, 1);
  return new Result$Ok$8$(moonbitlang$core$buffer$$T$to_unchecked_string(buf));
}
function yj$45$qin$regexp$$Parser$fetch_unsigned_num(self) {
  const num_buf = moonbitlang$core$buffer$$new(moonbitlang$core$buffer$$new$46$size_hint$46$default());
  let _tmp = yj$45$qin$regexp$$Parser$peek(self);
  _L: while (true) {
    const _param = _tmp;
    let d;
    _L$2: {
      switch (_param) {
        case 48: {
          d = _param;
          break _L$2;
        }
        case 49: {
          d = _param;
          break _L$2;
        }
        case 50: {
          d = _param;
          break _L$2;
        }
        case 51: {
          d = _param;
          break _L$2;
        }
        case 52: {
          d = _param;
          break _L$2;
        }
        case 53: {
          d = _param;
          break _L$2;
        }
        case 54: {
          d = _param;
          break _L$2;
        }
        case 55: {
          d = _param;
          break _L$2;
        }
        case 56: {
          d = _param;
          break _L$2;
        }
        case 57: {
          d = _param;
          break _L$2;
        }
        default: {
          break _L;
        }
      }
    }
    moonbitlang$core$buffer$$T$write_char(num_buf, d);
    yj$45$qin$regexp$$Parser$advance(self, 1);
    if (yj$45$qin$regexp$$Parser$more(self)) {
      _tmp = yj$45$qin$regexp$$Parser$peek(self);
      continue;
    } else {
      break;
    }
  }
  const num_str = moonbitlang$core$buffer$$T$to_unchecked_string(num_buf);
  if (num_str === "") {
    return undefined;
  }
  let _try_err;
  _L$2: {
    const _bind = moonbitlang$core$strconv$$parse_int(num_str, moonbitlang$core$strconv$$parse_int$46$base$46$default());
    let num;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      num = _ok._0;
    } else {
      const _err = _bind;
      const _tmp$2 = _err._0;
      _try_err = _tmp$2;
      break _L$2;
    }
    return num;
  }
  return undefined;
}
function yj$45$qin$regexp$$Parser$parse_loop_range(self) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop(self.pos));
  }
  const _bind = yj$45$qin$regexp$$Parser$fetch_unsigned_num(self);
  let min;
  if (_bind === undefined) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop(self.pos));
  } else {
    const _Some = _bind;
    const _x = _Some;
    min = _x;
  }
  if (min < 0 || min > 100000) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$LoopCountOutOfRange(self.pos));
  }
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop(self.pos));
  }
  let max;
  if (yj$45$qin$regexp$$Parser$peek_is(self, 44)) {
    yj$45$qin$regexp$$Parser$advance(self, 1);
    max = yj$45$qin$regexp$$Parser$fetch_unsigned_num(self);
  } else {
    max = min;
  }
  if (!moonbitlang$core$option$$Option$is_empty$8$(max) && (moonbitlang$core$option$$Option$unwrap$8$(max) < 0 || moonbitlang$core$option$$Option$unwrap$8$(max) > 100000)) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$LoopCountOutOfRange(self.pos));
  }
  if (!yj$45$qin$regexp$$Parser$more(self) || !yj$45$qin$regexp$$Parser$peek_is(self, 125)) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$InvalidLoop(self.pos));
  }
  yj$45$qin$regexp$$Parser$advance(self, 1);
  if (!moonbitlang$core$option$$Option$is_empty$8$(max) && min > moonbitlang$core$option$$Option$unwrap$8$(max)) {
    return new Result$Err$9$(new Error$yj$45$qin$47$regexp$46$ParseError$46$LoopMaxCountSmallerThanMinCount(self.pos));
  }
  return new Result$Ok$9$({ _0: min, _1: max });
}
function yj$45$qin$regexp$$Parser$parse_loop(self, target) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Ok$7$(target);
  }
  let greedy = true;
  let min = 0;
  let max = undefined;
  const _bind = yj$45$qin$regexp$$Parser$peek(self);
  switch (_bind) {
    case 42: {
      yj$45$qin$regexp$$Parser$advance(self, 1);
      break;
    }
    case 43: {
      yj$45$qin$regexp$$Parser$advance(self, 1);
      min = 1;
      break;
    }
    case 63: {
      yj$45$qin$regexp$$Parser$advance(self, 1);
      max = 1;
      break;
    }
    case 123: {
      yj$45$qin$regexp$$Parser$advance(self, 1);
      const _bind$2 = yj$45$qin$regexp$$Parser$parse_loop_range(self);
      let range;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        range = _ok._0;
      } else {
        return _bind$2;
      }
      min = range._0;
      max = range._1;
      break;
    }
    default: {
      return new Result$Ok$7$(target);
    }
  }
  if (yj$45$qin$regexp$$Parser$peek_is(self, 63)) {
    yj$45$qin$regexp$$Parser$advance(self, 1);
    greedy = false;
  }
  const _bind$3 = target.internal;
  switch (_bind$3.$tag) {
    case 1: {
      const _Single = _bind$3;
      const _x = _Single._0;
      return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$SingleLoop(_x, min, max, greedy), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
    }
    case 2: {
      const _NotSingle = _bind$3;
      const _x$2 = _NotSingle._0;
      return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingleLoop(_x$2, min, max, greedy), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
    }
    case 3: {
      const _Class = _bind$3;
      const _x$3 = _Class._0;
      return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$ClassLoop(_x$3, min, max, greedy), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
    }
    default: {
      const node = yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Loop(min, max, greedy), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
      yj$45$qin$regexp$$AstNode$add_child(node, target);
      return new Result$Ok$7$(node);
    }
  }
}
function yj$45$qin$regexp$$Parser$parse_expr(self, in_group) {
  const _bind = yj$45$qin$regexp$$Parser$parse_concat(self, in_group);
  let node;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    node = _ok._0;
  } else {
    return _bind;
  }
  if (!yj$45$qin$regexp$$Parser$more(self) || in_group && yj$45$qin$regexp$$Parser$peek_is(self, 41)) {
    return new Result$Ok$7$(node);
  } else {
    if (yj$45$qin$regexp$$Parser$peek_is(self, 124)) {
      const alt_node = yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$Alternate, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
      yj$45$qin$regexp$$AstNode$add_child(alt_node, node);
      while (true) {
        if (yj$45$qin$regexp$$Parser$peek_is(self, 124)) {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          const _bind$2 = yj$45$qin$regexp$$Parser$parse_concat(self, in_group);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          yj$45$qin$regexp$$AstNode$add_child(alt_node, _tmp);
          continue;
        } else {
          break;
        }
      }
      if (!in_group && yj$45$qin$regexp$$Parser$more(self)) {
        return new Result$Err$7$(Error$yj$45$qin$47$regexp$46$ParseError$46$InternalParserError);
      } else {
        return new Result$Ok$7$(alt_node);
      }
    } else {
      return new Result$Err$7$(Error$yj$45$qin$47$regexp$46$ParseError$46$InternalParserError);
    }
  }
}
function yj$45$qin$regexp$$Parser$parse_concat(self, in_group) {
  const _bind = yj$45$qin$regexp$$Parser$parse_node(self, in_group);
  let node;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    node = _ok._0;
  } else {
    return _bind;
  }
  let _tmp;
  if (!yj$45$qin$regexp$$Parser$more(self) || (yj$45$qin$regexp$$Parser$peek_is(self, 124) || in_group && yj$45$qin$regexp$$Parser$peek_is(self, 41))) {
    _tmp = node;
  } else {
    const concat_node = yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$Concatenate, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
    yj$45$qin$regexp$$AstNode$add_child(concat_node, node);
    while (true) {
      if (yj$45$qin$regexp$$Parser$more(self) && (!yj$45$qin$regexp$$Parser$peek_is(self, 124) && !(in_group && yj$45$qin$regexp$$Parser$peek_is(self, 41)))) {
        const _bind$2 = yj$45$qin$regexp$$Parser$parse_node(self, in_group);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          return _bind$2;
        }
        yj$45$qin$regexp$$AstNode$add_child(concat_node, _tmp$2);
        continue;
      } else {
        break;
      }
    }
    _tmp = concat_node;
  }
  return new Result$Ok$7$(_tmp);
}
function yj$45$qin$regexp$$Parser$parse_node(self, in_group) {
  if (!yj$45$qin$regexp$$Parser$more(self) || in_group && yj$45$qin$regexp$$Parser$peek_is(self, 41)) {
    return new Result$Ok$7$(yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$Empty, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()));
  }
  let node;
  _L: {
    _L$2: {
      const _bind = yj$45$qin$regexp$$Parser$peek(self);
      switch (_bind) {
        case 124: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          node = yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$Empty, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
          break;
        }
        case 46: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          node = yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$NotSingle(10), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
          break;
        }
        case 94: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          node = yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$BeginOfInput, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
          break;
        }
        case 36: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          node = yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$EndOfInput, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
          break;
        }
        case 40: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          const _bind$2 = yj$45$qin$regexp$$Parser$parse_group(self);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            node = _ok._0;
          } else {
            return _bind$2;
          }
          break;
        }
        case 41: {
          return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupEnd(self.pos));
        }
        case 91: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          const _bind$3 = yj$45$qin$regexp$$Parser$parse_class(self);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            node = _ok._0;
          } else {
            return _bind$3;
          }
          break;
        }
        case 93: {
          return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedCharClassEnd(self.pos));
        }
        case 42: {
          break _L$2;
        }
        case 43: {
          break _L$2;
        }
        case 63: {
          break _L$2;
        }
        case 123: {
          break _L$2;
        }
        case 125: {
          break _L$2;
        }
        case 92: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          const _bind$4 = yj$45$qin$regexp$$Parser$parse_escape(self);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            node = _ok._0;
          } else {
            return _bind$4;
          }
          break;
        }
        default: {
          yj$45$qin$regexp$$Parser$advance(self, 1);
          node = yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Single(_bind), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
        }
      }
      break _L;
    }
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$UnspecifiedLoopTarget(self.pos));
  }
  return yj$45$qin$regexp$$Parser$parse_loop(self, node);
}
function yj$45$qin$regexp$$Parser$parse_group(self) {
  if (!yj$45$qin$regexp$$Parser$more(self)) {
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$UnmatchedGroupBegin(self.pos));
  }
  let capture = true;
  let name = "";
  const index = self.group_index;
  self.group_index = self.group_index + 1 | 0;
  self.capture_num = self.capture_num + 1 | 0;
  if (yj$45$qin$regexp$$Parser$peek_is(self, 63)) {
    yj$45$qin$regexp$$Parser$advance(self, 1);
    const _bind = yj$45$qin$regexp$$Parser$peek(self);
    switch (_bind) {
      case 58: {
        capture = false;
        self.capture_num = self.capture_num - 1 | 0;
        yj$45$qin$regexp$$Parser$advance(self, 1);
        break;
      }
      case 60: {
        const _bind$2 = yj$45$qin$regexp$$Parser$parse_group_name(self);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        name = _tmp;
        if (name === "") {
          return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroupName(self.pos));
        }
        moonbitlang$core$builtin$$Map$set$31$(self.capture_name_mapping, name, index);
        break;
      }
    }
  }
  if (!yj$45$qin$regexp$$Parser$more(self) || yj$45$qin$regexp$$Parser$peek_is(self, 41)) {
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$EmptyGroup(self.pos));
  }
  const node = capture ? yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Capture(index), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default()) : yj$45$qin$regexp$$AstNode$new($64$yj$45$qin$47$regexp$46$AstNodeInternal$Group, yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
  const _bind = yj$45$qin$regexp$$Parser$parse_expr(self, true);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  yj$45$qin$regexp$$AstNode$add_child(node, _tmp);
  if (!yj$45$qin$regexp$$Parser$more(self) || !yj$45$qin$regexp$$Parser$peek_is(self, 41)) {
    return new Result$Err$7$(new Error$yj$45$qin$47$regexp$46$ParseError$46$GroupMissingParen(self.pos));
  }
  yj$45$qin$regexp$$Parser$advance(self, 1);
  return new Result$Ok$7$(node);
}
function yj$45$qin$regexp$$Parser$parse(self) {
  const root = yj$45$qin$regexp$$AstNode$new(new $64$yj$45$qin$47$regexp$46$AstNodeInternal$Capture(self.group_index), yj$45$qin$regexp$$AstNode$new$46$parent$46$default(), yj$45$qin$regexp$$AstNode$new$46$children$46$default());
  self.group_index = self.group_index + 1 | 0;
  self.capture_num = self.capture_num + 1 | 0;
  const _bind = yj$45$qin$regexp$$Parser$parse_expr(self, false);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  yj$45$qin$regexp$$AstNode$add_child(root, _tmp);
  return new Result$Ok$10$({ root: root, capture_num: self.capture_num, capture_name_mapping: self.capture_name_mapping });
}
function yj$45$qin$regexp$$RegExp$new(pattern) {
  const _bind = yj$45$qin$regexp$$Parser$parse(yj$45$qin$regexp$$Parser$new(pattern));
  let ast;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    ast = _ok._0;
  } else {
    return _bind;
  }
  const prog = yj$45$qin$regexp$$Emitter$emit(yj$45$qin$regexp$$Emitter$new(ast));
  return new Result$Ok$11$({ pattern: pattern, prog: prog });
}
function yj$45$qin$regexp$$compile(pattern) {
  return yj$45$qin$regexp$$RegExp$new(pattern);
}
function yj$45$qin$regexp$$RegExp$matches(self, text, start, end) {
  return yj$45$qin$regexp$$Interpreter$scan(yj$45$qin$regexp$$Interpreter$new(self.prog), text, start, end);
}
function yj$45$qin$regexp$$RegExp$matches$46$start$46$default() {
  return 0;
}
function yj$45$qin$regexp$$RegExp$matches$46$end$46$default(text) {
  return text.length;
}
function moonbitlang$core$builtin$$Show$output$58$(_x_68, _x_69) {
  switch (_x_68.$tag) {
    case 2: {
      _x_69.method_0(_x_69.self, "InternalParserError");
      return;
    }
    case 3: {
      const _UnmatchedGroupBegin = _x_68;
      const _x = _UnmatchedGroupBegin._0;
      _x_69.method_0(_x_69.self, "UnmatchedGroupBegin(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 4: {
      const _UnmatchedGroupEnd = _x_68;
      const _x$2 = _UnmatchedGroupEnd._0;
      _x_69.method_0(_x_69.self, "UnmatchedGroupEnd(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$2);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 5: {
      const _UnmatchedGroupName = _x_68;
      const _x$3 = _UnmatchedGroupName._0;
      _x_69.method_0(_x_69.self, "UnmatchedGroupName(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$3);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 6: {
      const _EmptyGroupName = _x_68;
      const _x$4 = _EmptyGroupName._0;
      _x_69.method_0(_x_69.self, "EmptyGroupName(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$4);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 7: {
      const _EmptyGroup = _x_68;
      const _x$5 = _EmptyGroup._0;
      _x_69.method_0(_x_69.self, "EmptyGroup(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$5);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 8: {
      const _UnmatchedCharClassEnd = _x_68;
      const _x$6 = _UnmatchedCharClassEnd._0;
      _x_69.method_0(_x_69.self, "UnmatchedCharClassEnd(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$6);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 9: {
      const _UnspecifiedLoopTarget = _x_68;
      const _x$7 = _UnspecifiedLoopTarget._0;
      _x_69.method_0(_x_69.self, "UnspecifiedLoopTarget(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$7);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 10: {
      const _InvalidLoop = _x_68;
      const _x$8 = _InvalidLoop._0;
      _x_69.method_0(_x_69.self, "InvalidLoop(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$8);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 11: {
      const _LoopCountOutOfRange = _x_68;
      const _x$9 = _LoopCountOutOfRange._0;
      _x_69.method_0(_x_69.self, "LoopCountOutOfRange(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$9);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 12: {
      const _LoopMaxCountSmallerThanMinCount = _x_68;
      const _x$10 = _LoopMaxCountSmallerThanMinCount._0;
      _x_69.method_0(_x_69.self, "LoopMaxCountSmallerThanMinCount(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$10);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 13: {
      const _EndPatternAtEscape = _x_68;
      const _x$11 = _EndPatternAtEscape._0;
      _x_69.method_0(_x_69.self, "EndPatternAtEscape(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$11);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    case 14: {
      const _ClassMissingBracket = _x_68;
      const _x$12 = _ClassMissingBracket._0;
      _x_69.method_0(_x_69.self, "ClassMissingBracket(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$12);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
    default: {
      const _GroupMissingParen = _x_68;
      const _x$13 = _GroupMissingParen._0;
      _x_69.method_0(_x_69.self, "GroupMissingParen(");
      _x_69.method_0(_x_69.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$8$(_x_69, _x$13);
      _x_69.method_0(_x_69.self, ")");
      return;
    }
  }
}
function Lampese$moonbit$45$chalk$lib$$chalk() {
  return $64$Lampese$47$moonbit$45$chalk$47$lib$46$Chalk$Nil;
}
function Lampese$moonbit$45$chalk$lib$$Chalk$color(self, color) {
  return new $64$Lampese$47$moonbit$45$chalk$47$lib$46$Chalk$Cons(self, new $64$Lampese$47$moonbit$45$chalk$47$lib$46$Render$RenderColor(color));
}
function Lampese$moonbit$45$chalk$lib$$backgroud_color_to_index(color) {
  switch (color) {
    case 0: {
      return 40;
    }
    case 1: {
      return 41;
    }
    case 2: {
      return 42;
    }
    case 3: {
      return 43;
    }
    case 4: {
      return 44;
    }
    case 5: {
      return 45;
    }
    case 6: {
      return 46;
    }
    case 7: {
      return 47;
    }
    case 8: {
      return 100;
    }
    case 9: {
      return 101;
    }
    case 10: {
      return 102;
    }
    case 11: {
      return 103;
    }
    case 12: {
      return 104;
    }
    case 13: {
      return 105;
    }
    case 14: {
      return 106;
    }
    default: {
      return 107;
    }
  }
}
function Lampese$moonbit$45$chalk$lib$$color_to_index(color) {
  switch (color) {
    case 0: {
      return 30;
    }
    case 1: {
      return 31;
    }
    case 2: {
      return 32;
    }
    case 3: {
      return 33;
    }
    case 4: {
      return 34;
    }
    case 5: {
      return 35;
    }
    case 6: {
      return 36;
    }
    case 7: {
      return 37;
    }
    case 8: {
      return 90;
    }
    case 9: {
      return 91;
    }
    case 10: {
      return 92;
    }
    case 11: {
      return 93;
    }
    case 12: {
      return 94;
    }
    case 13: {
      return 95;
    }
    case 14: {
      return 96;
    }
    default: {
      return 97;
    }
  }
}
function Lampese$moonbit$45$chalk$lib$$modifier_to_index(modifier) {
  switch (modifier) {
    case 0: {
      return { _0: 0, _1: 0 };
    }
    case 1: {
      return { _0: 1, _1: 22 };
    }
    case 2: {
      return { _0: 2, _1: 22 };
    }
    case 3: {
      return { _0: 3, _1: 23 };
    }
    case 4: {
      return { _0: 4, _1: 24 };
    }
    case 5: {
      return { _0: 53, _1: 55 };
    }
    case 6: {
      return { _0: 7, _1: 27 };
    }
    case 7: {
      return { _0: 8, _1: 28 };
    }
    default: {
      return { _0: 9, _1: 29 };
    }
  }
}
function Lampese$moonbit$45$chalk$lib$$Chalk$render$4$(self, to_render) {
  let _tmp = self;
  let _tmp$2 = to_render;
  while (true) {
    const self$2 = _tmp;
    const to_render$2 = _tmp$2;
    if (self$2.$tag === 0) {
      const _Cons = self$2;
      const _x = _Cons._0;
      const _x$2 = _Cons._1;
      let _tmp$3;
      switch (_x$2.$tag) {
        case 1: {
          const _RenderColor = _x$2;
          const _x$3 = _RenderColor._0;
          const idx = Lampese$moonbit$45$chalk$lib$$color_to_index(_x$3);
          const to_render_str = moonbitlang$core$builtin$$Show$to_string$4$(to_render$2);
          _tmp$3 = `\u001b[${moonbitlang$core$builtin$$Show$to_string$8$(idx)}m${moonbitlang$core$builtin$$Show$to_string$4$(to_render_str)}\u001b[39m`;
          break;
        }
        case 0: {
          const _RenderBackGround = _x$2;
          const _x$4 = _RenderBackGround._0;
          const idx$2 = Lampese$moonbit$45$chalk$lib$$backgroud_color_to_index(_x$4);
          const to_render_str$2 = moonbitlang$core$builtin$$Show$to_string$4$(to_render$2);
          _tmp$3 = `\u001b[${moonbitlang$core$builtin$$Show$to_string$8$(idx$2)}m${moonbitlang$core$builtin$$Show$to_string$4$(to_render_str$2)}\u001b[49m`;
          break;
        }
        default: {
          const _RenderModifier = _x$2;
          const _x$5 = _RenderModifier._0;
          const _bind = Lampese$moonbit$45$chalk$lib$$modifier_to_index(_x$5);
          const _x$6 = _bind._0;
          const _x$7 = _bind._1;
          const to_render_str$3 = moonbitlang$core$builtin$$Show$to_string$4$(to_render$2);
          _tmp$3 = `\u001b[${moonbitlang$core$builtin$$Show$to_string$8$(_x$6)}m${moonbitlang$core$builtin$$Show$to_string$4$(to_render_str$3)}\u001b[${moonbitlang$core$builtin$$Show$to_string$8$(_x$7)}m`;
        }
      }
      const _tmp$4 = _tmp$3;
      _tmp = _x;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return moonbitlang$core$builtin$$Show$to_string$4$(to_render$2);
    }
  }
}
function moonbitlang$core$builtin$$Show$output$59$(_x_194, _x_195) {
  _x_195.method_0(_x_195.self, "NetworkError");
}
function moonbitlang$core$builtin$$Show$output$57$(_x_190, _x_191) {
  _x_191.method_0(_x_191.self, "ExecError");
}
function oboard$mocket$lib$$html(data) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "_T", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("html") }, { _0: "data", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(data) }]));
}
function oboard$mocket$lib$$file(path) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "_T", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("file") }, { _0: "path", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(path) }]));
}
function oboard$mocket$lib$$buffer(data) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "_T", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("buffer") }, { _0: "data", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Array(moonbitlang$core$array$$Array$map$47$(moonbitlang$core$bytes$$Bytes$to_array(data), (n) => new $64$moonbitlang$47$core$47$builtin$46$Json$Number(n + 0))) }]));
}
function oboard$mocket$lib$$HttpResponse$end(self, body) {
  const _func = oboard$mocket$lib$$binding.send;
  _func("http.end", new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$Number(self.id), self.statusCode, self.headers, body]));
}
function oboard$mocket$lib$$HttpResponse$writeHead(self, statusCode, headers) {
  self.statusCode = statusCode;
  self.headers = headers;
}
function oboard$mocket$lib$$query_map(query_str) {
  const query_array = moonbitlang$core$string$$String$split(query_str, "&");
  return moonbitlang$core$builtin$$Map$from_iter$32$((_p) => query_array((_p$2) => {
    const array = moonbitlang$core$builtin$$Iter$to_array$4$(moonbitlang$core$string$$String$split(_p$2, "="));
    const key = moonbitlang$core$array$$Array$op_get$4$(array, 0);
    const value = moonbitlang$core$array$$Array$op_get$4$(array, 1);
    return _p({ _0: key, _1: value });
  }));
}
function oboard$mocket$lib$$URL$parse(rawUrl) {
  const url = moonbitlang$core$string$$String$trim_space(rawUrl);
  let scheme_end = moonbitlang$core$string$$String$index_of(url, "://", moonbitlang$core$string$$String$index_of$46$from$46$default());
  if (scheme_end === -1) {
    scheme_end = 0;
  }
  const fragment_start = moonbitlang$core$string$$String$index_of(url, "#", moonbitlang$core$string$$String$index_of$46$from$46$default());
  const query_start = moonbitlang$core$string$$String$index_of(url, "?", moonbitlang$core$string$$String$index_of$46$from$46$default());
  const query_end = fragment_start !== -1 ? fragment_start : url.length;
  const port_start = moonbitlang$core$string$$String$index_of(url, ":", scheme_end + 3 | 0);
  const port_end = port_start !== -1 ? moonbitlang$core$string$$String$index_of(url, "/", port_start) : 0;
  const protocol = scheme_end !== -1 ? moonbitlang$core$string$$String$substring(url, 0, scheme_end) : undefined;
  const host_start = scheme_end !== -1 ? scheme_end + 3 | 0 : 0;
  const host_end = port_start !== -1 ? port_start : query_start !== -1 ? query_start : fragment_start !== -1 ? fragment_start : url.length;
  const host = moonbitlang$core$string$$String$contains(url, ".") ? moonbitlang$core$string$$String$substring(url, host_start, host_end) : undefined;
  const port_str = moonbitlang$core$string$$String$substring(url, port_start + 1 | 0, port_end);
  let port;
  if (port_str.length > 0) {
    let _try_err;
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$strconv$$parse_int(port_str, moonbitlang$core$strconv$$parse_int$46$base$46$default());
        if (_bind.$tag === 1) {
          const _ok = _bind;
          port = _ok._0;
        } else {
          const _err = _bind;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$2;
        }
        break _L;
      }
      port = undefined;
    }
  } else {
    port = undefined;
  }
  const path_start = port_end !== -1 ? port_end : query_start !== -1 ? query_start : fragment_start !== -1 ? fragment_start : url.length;
  const path_end = query_start !== -1 ? query_start : fragment_start !== -1 ? fragment_start : url.length;
  const path = moonbitlang$core$string$$String$substring(url, path_start, path_end);
  let query;
  if (query_start !== -1) {
    const query_str = moonbitlang$core$string$$String$substring(url, query_start + 1 | 0, query_end);
    query = oboard$mocket$lib$$query_map(query_str);
  } else {
    query = undefined;
  }
  const fragment = fragment_start !== -1 ? moonbitlang$core$string$$String$substring(url, fragment_start + 1 | 0, url.length) : undefined;
  return { protocol: protocol, host: host, port: port, path: path, query: query, fragment: fragment };
}
function oboard$mocket$lib$$listen$46$42$cont$68$(_param) {}
function oboard$mocket$lib$$listen$46$42$async_driver$69$(_state) {
  const _State_0 = _state;
  const _cont = _State_0._2;
  const response = _State_0._1;
  const _cont_param = _State_0._0;
  _L: {
    _L$2: {
      switch (_cont_param.$tag) {
        case 6: {
          const _Object = _cont_param;
          const _x = _Object._0;
          const _x$2 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "_T");
          if (_x$2 === undefined) {
            break _L$2;
          } else {
            const _Some = _x$2;
            const _x$3 = _Some;
            if (_x$3.$tag === 4) {
              const _String = _x$3;
              const _x$4 = _String._0;
              switch (_x$4) {
                case "html": {
                  const _x$5 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "data");
                  if (_x$5 === undefined) {
                    break _L$2;
                  } else {
                    const _Some$2 = _x$5;
                    const _x$6 = _Some$2;
                    oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("text/html") }])));
                    oboard$mocket$lib$$HttpResponse$end(response, _x$6);
                  }
                  break;
                }
                case "file": {
                  const _x$6 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "path");
                  if (_x$6 === undefined) {
                    break _L$2;
                  } else {
                    const _Some$2 = _x$6;
                    const _x$7 = _Some$2;
                    if (_x$7.$tag === 4) {
                      const _String$2 = _x$7;
                      const _x$8 = _String$2._0;
                      const mime = oboard$mimetype$lib$$T$new();
                      const mimeType = oboard$mimetype$lib$$T$getType(mime, _x$8);
                      oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String(moonbitlang$core$option$$Option$or$4$(mimeType, "application/octet-stream")) }])));
                      oboard$mocket$lib$$HttpResponse$end(response, _cont_param);
                    } else {
                      break _L$2;
                    }
                  }
                  break;
                }
                default: {
                  break _L$2;
                }
              }
            } else {
              break _L$2;
            }
          }
          break;
        }
        case 4: {
          oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("text/plain") }])));
          oboard$mocket$lib$$HttpResponse$end(response, _cont_param);
          break;
        }
        default: {
          oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("text/plain") }])));
          oboard$mocket$lib$$HttpResponse$end(response, _cont_param);
        }
      }
      break _L;
    }
    oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("application/json") }])));
    oboard$mocket$lib$$HttpResponse$end(response, _cont_param);
  }
  _cont(undefined);
}
function oboard$mocket$lib$$listen(context, port) {
  oboard$mocket$lib$$binding.listen = context._0;
  oboard$mocket$lib$$binding.send = context._1;
  oboard$mocket$lib$$binding.call = context._2;
  const _bind = moonbitlang$core$builtin$$Map$from_array$52$([]);
  const server = { port: port, mappings: _bind };
  const _func = oboard$mocket$lib$$binding.listen;
  _func("http.request", (result) => {
    _L: {
      if (result.$tag === 5) {
        const _Array = result;
        const _x = _Array._0;
        if (_x.length === 2) {
          const _x$2 = moonbitlang$core$array$$Array$op_get$22$(_x, 0);
          const _x$3 = moonbitlang$core$array$$Array$op_get$22$(_x, 1);
          _L$2: {
            if (_x$2.$tag === 6) {
              const _Object = _x$2;
              const _x$4 = _Object._0;
              const _x$5 = moonbitlang$core$builtin$$Map$op_get$33$(_x$4, "method");
              if (_x$5 === undefined) {
                break _L$2;
              } else {
                const _Some = _x$5;
                const _x$6 = _Some;
                if (_x$6.$tag === 4) {
                  const _String = _x$6;
                  const _x$7 = _String._0;
                  const _x$8 = moonbitlang$core$builtin$$Map$op_get$33$(_x$4, "url");
                  if (_x$8 === undefined) {
                    break _L$2;
                  } else {
                    const _Some$2 = _x$8;
                    const _x$9 = _Some$2;
                    if (_x$9.$tag === 4) {
                      const _String$2 = _x$9;
                      const _x$10 = _String$2._0;
                      if (_x$3.$tag === 6) {
                        const _Object$2 = _x$3;
                        const _x$11 = _Object$2._0;
                        const _x$12 = moonbitlang$core$builtin$$Map$op_get$33$(_x$11, "id");
                        if (_x$12 === undefined) {
                          break _L$2;
                        } else {
                          const _Some$3 = _x$12;
                          const _x$13 = _Some$3;
                          if (_x$13.$tag === 3) {
                            const _Number = _x$13;
                            const _x$14 = _Number._0;
                            const urlObject = oboard$mocket$lib$$URL$parse(_x$10);
                            const _bind$2 = _x$10;
                            const _bind$3 = urlObject.path;
                            const _bind$4 = moonbitlang$core$option$$Option$or$13$(urlObject.query, moonbitlang$core$builtin$$Map$from_array$32$([]));
                            let _bind$5;
                            _L$3: {
                              _L$4: {
                                if (_x$2.$tag === 6) {
                                  const _Object$3 = _x$2;
                                  const _x$15 = _Object$3._0;
                                  const _x$16 = moonbitlang$core$builtin$$Map$op_get$33$(_x$15, "body");
                                  if (_x$16 === undefined) {
                                    break _L$4;
                                  } else {
                                    const _Some$4 = _x$16;
                                    const _x$17 = _Some$4;
                                    _bind$5 = _x$17;
                                  }
                                } else {
                                  break _L$4;
                                }
                                break _L$3;
                              }
                              _bind$5 = undefined;
                            }
                            const request = { url: _bind$2, path: _bind$3, query: _bind$4, body: _bind$5 };
                            const response = { id: _x$14, statusCode: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(200), headers: new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([])) };
                            const reqHead = `${_x$7} ${urlObject.path}`;
                            const reqHeadAll = `ALL ${urlObject.path}`;
                            const reqHeadAllMethod = `${_x$7} *`;
                            moonbitlang$core$builtin$$println$4$(Lampese$moonbit$45$chalk$lib$$Chalk$render$4$(Lampese$moonbit$45$chalk$lib$$Chalk$color(Lampese$moonbit$45$chalk$lib$$chalk(), 2), reqHead));
                            let reqFn;
                            if (moonbitlang$core$builtin$$Map$contains$52$(_bind, reqHead)) {
                              reqFn = moonbitlang$core$builtin$$Map$get$52$(_bind, reqHead);
                            } else {
                              if (moonbitlang$core$builtin$$Map$contains$52$(_bind, reqHeadAll)) {
                                reqFn = moonbitlang$core$builtin$$Map$get$52$(_bind, reqHeadAll);
                              } else {
                                if (moonbitlang$core$builtin$$Map$contains$52$(_bind, reqHeadAllMethod)) {
                                  reqFn = moonbitlang$core$builtin$$Map$get$52$(_bind, reqHeadAllMethod);
                                } else {
                                  const _bind$6 = moonbitlang$core$builtin$$Iter$find_first$4$(moonbitlang$core$builtin$$Map$keys$52$(_bind), (key) => {
                                    const _bind$7 = _bind$3;
                                    if (_bind$7 === undefined) {
                                      return false;
                                    } else {
                                      const _Some$4 = _bind$7;
                                      const _x$15 = _Some$4;
                                      const _bind$8 = yj$45$qin$regexp$$compile(key);
                                      if (_bind$8.$tag === 1) {
                                        const _Ok = _bind$8;
                                        const _x$16 = _Ok._0;
                                        const arg = yj$45$qin$regexp$$RegExp$matches$46$start$46$default();
                                        const arg$2 = yj$45$qin$regexp$$RegExp$matches$46$end$46$default(_x$15);
                                        return yj$45$qin$regexp$$MatchResult$success(yj$45$qin$regexp$$RegExp$matches(_x$16, _x$15, arg, arg$2));
                                      } else {
                                        return false;
                                      }
                                    }
                                  });
                                  if (_bind$6 === undefined) {
                                    reqFn = moonbitlang$core$builtin$$Map$get$52$(_bind, "ALL *");
                                  } else {
                                    const _Some$4 = _bind$6;
                                    const _x$15 = _Some$4;
                                    reqFn = moonbitlang$core$builtin$$Map$get$52$(_bind, _x$15);
                                  }
                                }
                              }
                            }
                            if (reqFn === undefined) {
                              oboard$mocket$lib$$HttpResponse$writeHead(response, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(404), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("text/plain") }])));
                              oboard$mocket$lib$$HttpResponse$end(response, new $64$moonbitlang$47$core$47$builtin$46$Json$String("Not Found"));
                            } else {
                              const _Some$4 = reqFn;
                              const _x$15 = _Some$4;
                              _x$15(request, response, (_cont_param) => {
                                oboard$mocket$lib$$listen$46$42$async_driver$69$(new $36$oboard$47$mocket$47$lib$46$listen$46$lambda$46$42$arm$47$319$46$42$arm$47$297$46$lambda$47$443$46$State$State_0(_cont_param, response, oboard$mocket$lib$$listen$46$42$cont$68$));
                              });
                            }
                            oboard$mocket$lib$$HttpResponse$end(response, new $64$moonbitlang$47$core$47$builtin$46$Json$String("Not Found"));
                            return;
                          } else {
                            break _L$2;
                          }
                        }
                      } else {
                        break _L$2;
                      }
                    } else {
                      break _L$2;
                    }
                  }
                } else {
                  break _L$2;
                }
              }
            } else {
              break _L$2;
            }
          }
          moonbitlang$core$builtin$$println$4$("Invalid struct");
          return;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    moonbitlang$core$builtin$$println$4$("Invalid request");
  });
  const _func$2 = oboard$mocket$lib$$binding.send;
  _func$2("http.listen", new $64$moonbitlang$47$core$47$builtin$46$Json$Number(port + 0));
  moonbitlang$core$builtin$$println$4$(Lampese$moonbit$45$chalk$lib$$Chalk$render$4$(Lampese$moonbit$45$chalk$lib$$Chalk$color(Lampese$moonbit$45$chalk$lib$$chalk(), 2), `Server listening on port ${moonbitlang$core$builtin$$Show$to_string$8$(port)}`));
  moonbitlang$core$builtin$$println$4$(Lampese$moonbit$45$chalk$lib$$Chalk$render$4$(Lampese$moonbit$45$chalk$lib$$Chalk$color(Lampese$moonbit$45$chalk$lib$$chalk(), 4), `Local: http://127.0.0.1:${moonbitlang$core$builtin$$Show$to_string$8$(port)}/`));
  return server;
}
function oboard$mocket$lib$$HttpServer$handleFunc(self, reqMethod, mapping, handler) {
  moonbitlang$core$builtin$$Map$op_set$52$(self.mappings, `${reqMethod} ${mapping}`, handler);
  const _func = oboard$mocket$lib$$binding.send;
  _func("http.handle", new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$String(reqMethod), new $64$moonbitlang$47$core$47$builtin$46$Json$String(mapping)]));
}
function oboard$mocket$lib$$HttpServer$get(self, mapping, handler) {
  oboard$mocket$lib$$HttpServer$handleFunc(self, "GET", mapping, handler);
}
function oboard$mocket$lib$$HttpServer$post(self, mapping, handler) {
  oboard$mocket$lib$$HttpServer$handleFunc(self, "POST", mapping, handler);
}
function oboard$mocket$lib$$exec(cmd, _cont, _err_cont) {
  const _func = oboard$mocket$lib$$binding.call;
  _func("os.exec", new $64$moonbitlang$47$core$47$builtin$46$Json$String(cmd), (_param3) => {
    if (_param3.$tag === 4) {
      const _String = _param3;
      const _x = _String._0;
      _cont(_x);
      return;
    } else {
      _err_cont(Error$oboard$47$mocket$47$lib$46$ExecError$46$ExecError);
      return;
    }
  });
}
function oboard$mocket$lib$$HttpServer$resource(self, from, to) {
  moonbitlang$core$builtin$$println$4$(Lampese$moonbit$45$chalk$lib$$Chalk$render$4$(Lampese$moonbit$45$chalk$lib$$Chalk$color(Lampese$moonbit$45$chalk$lib$$chalk(), 3), `Route ${moonbitlang$core$builtin$$Show$to_string$4$(from)} -> ${moonbitlang$core$builtin$$Show$to_string$4$(to)}`));
  const fromRegExp = `${moonbitlang$core$builtin$$Show$to_string$4$(from)}.*`;
  moonbitlang$core$builtin$$Map$op_set$52$(self.mappings, fromRegExp, (req, res, _cont) => {
    const _bind = req.path;
    if (_bind === undefined) {
      oboard$mocket$lib$$HttpResponse$writeHead(res, new $64$moonbitlang$47$core$47$builtin$46$Json$Number(404), new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "Content-Type", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("text/plain") }])));
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$String("Not Found"));
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _cont(oboard$mocket$lib$$file(`${to}${moonbitlang$core$string$$String$substring(_x, from.length, undefined)}`));
      return;
    }
  });
}
function moonbitlang$core$builtin$$Show$output$28$(_x_81, _x_82) {
  _x_82.method_0(_x_82.self, "{");
  _x_82.method_0(_x_82.self, "status: ");
  moonbitlang$core$builtin$$Logger$write_object$8$(_x_82, _x_81.status);
  _x_82.method_0(_x_82.self, ", ");
  _x_82.method_0(_x_82.self, "statusText: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_82, _x_81.statusText);
  _x_82.method_0(_x_82.self, ", ");
  _x_82.method_0(_x_82.self, "headers: ");
  moonbitlang$core$builtin$$Logger$write_object$13$(_x_82, _x_81.headers);
  _x_82.method_0(_x_82.self, ", ");
  _x_82.method_0(_x_82.self, "data: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_82, _x_81.data);
  _x_82.method_0(_x_82.self, "}");
}
function oboard$mocket$lib$$fetch(url, reqMethod, body, headers, credentials, mode, _cont, _err_cont) {
  const options = moonbitlang$core$builtin$$Map$from_array$33$([]);
  if (reqMethod === undefined) {
  } else {
    const _Some = reqMethod;
    const _x = _Some;
    moonbitlang$core$builtin$$Map$op_set$33$(options, "method", new $64$moonbitlang$47$core$47$builtin$46$Json$String(_x));
  }
  if (body === undefined) {
  } else {
    const _Some = body;
    const _x = _Some;
    moonbitlang$core$builtin$$Map$op_set$33$(options, "body", new $64$moonbitlang$47$core$47$builtin$46$Json$String(_x));
  }
  if (headers === undefined) {
  } else {
    const _Some = headers;
    const _x = _Some;
    moonbitlang$core$builtin$$Map$op_set$33$(options, "headers", moonbitlang$core$builtin$$Map$to_json$32$(_x));
  }
  if (credentials === undefined) {
  } else {
    const _Some = credentials;
    const _x = _Some;
    let _tmp;
    switch (_x) {
      case 0: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("omit");
        break;
      }
      case 1: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("same-origin");
        break;
      }
      default: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("include");
      }
    }
    moonbitlang$core$builtin$$Map$op_set$33$(options, "credentials", _tmp);
  }
  if (mode === undefined) {
  } else {
    const _Some = mode;
    const _x = _Some;
    let _tmp;
    switch (_x) {
      case 0: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("cors");
        break;
      }
      case 1: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("no-cors");
        break;
      }
      case 2: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("same-origin");
        break;
      }
      default: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$String("navigate");
      }
    }
    moonbitlang$core$builtin$$Map$op_set$33$(options, "mode", _tmp);
  }
  const _func = oboard$mocket$lib$$binding.call;
  _func("fetch", new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$String(url), moonbitlang$core$builtin$$Map$to_json$33$(options)])]), (_param4) => {
    _L: {
      if (_param4.$tag === 6) {
        const _Object = _param4;
        const _x = _Object._0;
        const _x$2 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "data");
        if (_x$2 === undefined) {
          break _L;
        } else {
          const _Some = _x$2;
          const _x$3 = _Some;
          if (_x$3.$tag === 4) {
            const _String = _x$3;
            const _x$4 = _String._0;
            const _x$5 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "statusText");
            if (_x$5 === undefined) {
              break _L;
            } else {
              const _Some$2 = _x$5;
              const _x$6 = _Some$2;
              if (_x$6.$tag === 4) {
                const _String$2 = _x$6;
                const _x$7 = _String$2._0;
                const _x$8 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "status");
                if (_x$8 === undefined) {
                  break _L;
                } else {
                  const _Some$3 = _x$8;
                  const _x$9 = _Some$3;
                  if (_x$9.$tag === 3) {
                    const _Number = _x$9;
                    const _x$10 = _Number._0;
                    const _x$11 = moonbitlang$core$builtin$$Map$op_get$33$(_x, "headers");
                    if (_x$11 === undefined) {
                      break _L;
                    } else {
                      const _Some$4 = _x$11;
                      const _x$12 = _Some$4;
                      if (_x$12.$tag === 6) {
                        const _Object$2 = _x$12;
                        const _x$13 = _Object$2._0;
                        const _tmp = moonbitlang$core$double$$Double$to_int(_x$10);
                        const _bind = moonbitlang$core$builtin$$Map$iter$33$(_x$13);
                        _cont({ status: _tmp, statusText: _x$7, headers: moonbitlang$core$builtin$$Map$from_array$32$(moonbitlang$core$builtin$$Iter$to_array$35$((_p) => _bind((_p$2) => _p({ _0: _p$2._0, _1: moonbitlang$core$option$$Option$or$4$(moonbitlang$core$json$$Json$as_string(_p$2._1), "") })))), data: _x$4 });
                        return;
                      } else {
                        break _L;
                      }
                    }
                  } else {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            }
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    _err_cont(Error$oboard$47$mocket$47$lib$46$NetworkError$46$NetworkError);
  });
}
function oboard$mocket_example$main$$listen_event(event_name, callback) {
  moonbitlang$core$builtin$$Map$op_set$6$(oboard$mocket_example$main$$receiver.listener_map, event_name, callback);
}
function oboard$mocket_example$main$$h_sd(_tmp) {
  __h.h_sd(_tmp);
}
function oboard$mocket_example$main$$h_se() {
  __h.h_se();
}
function oboard$mocket_example$main$$send(body) {
  const chars = moonbitlang$core$string$$String$to_bytes(moonbitlang$core$json$$Json$stringify(body, moonbitlang$core$json$$Json$stringify$46$escape_slash$46$default(), moonbitlang$core$json$$Json$stringify$46$indent$46$default()));
  const _bind = moonbitlang$core$bytes$$Bytes$iter(chars);
  _bind((_p) => {
    oboard$mocket_example$main$$h_sd(_p);
    return 1;
  });
  oboard$mocket_example$main$$h_se();
}
function oboard$mocket_example$main$$call_event(event_name, data, callback) {
  const id = moonbitlang$core$int$$Int$to_string(moonbitlang$core$builtin$$Iter$count$4$(moonbitlang$core$builtin$$Map$keys$6$(oboard$mocket_example$main$$receiver.listener_map)), moonbitlang$core$int$$Int$to_string$46$radix$46$default());
  oboard$mocket_example$main$$listen_event(id, (data$2) => {
    callback(data$2);
    moonbitlang$core$builtin$$Map$remove$6$(oboard$mocket_example$main$$receiver.listener_map, id);
  });
  oboard$mocket_example$main$$send(new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$String(event_name), data, new $64$moonbitlang$47$core$47$builtin$46$Json$String(id)]));
}
function oboard$mocket_example$main$$send_event(event_name, event_data) {
  oboard$mocket_example$main$$send(new $64$moonbitlang$47$core$47$builtin$46$Json$Array([new $64$moonbitlang$47$core$47$builtin$46$Json$String(event_name), event_data]));
}
function oboard$mocket_example$main$$get_context() {
  return { _0: oboard$mocket_example$main$$listen_event, _1: oboard$mocket_example$main$$send_event, _2: oboard$mocket_example$main$$call_event };
}
function oboard$mocket_example$main$$_init$42$46$42$cont$70$(_param) {}
function oboard$mocket_example$main$$_init$42$46$42$async_driver$71$(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$150 = _state;
    const _cont = _$42$try$47$150._1;
    const _try_err = _$42$try$47$150._0;
    _cont(moonbitlang$core$builtin$$println$4$(`Error executing command: ${moonbitlang$core$builtin$$Show$to_string$60$(_try_err)}`));
    return;
  } else {
    const _State_1 = _state;
    const _cont = _State_1._1;
    const _cont_param = _State_1._0;
    _cont(moonbitlang$core$builtin$$println$4$(_cont_param));
    return;
  }
}
function oboard$mocket_example$main$$_init$42$46$42$cont$72$(_param) {}
function oboard$mocket_example$main$$_init$42$46$42$async_driver$73$(_state) {
  if (_state.$tag === 0) {
    const _$42$try$47$153 = _state;
    const _cont = _$42$try$47$153._1;
    const _try_err = _$42$try$47$153._0;
    _cont(moonbitlang$core$builtin$$println$4$(`Error fetching data: ${moonbitlang$core$builtin$$Show$to_string$1$(_try_err)}`));
    return;
  } else {
    const _State_1 = _state;
    const _cont = _State_1._1;
    const _cont_param = _State_1._0;
    _cont(moonbitlang$core$builtin$$println$28$(_cont_param));
    return;
  }
}
(() => {
  moonbitlang$core$builtin$$println$4$("Starting server...");
  const server = oboard$mocket$lib$$listen(oboard$mocket_example$main$$get_context(), 4411);
  oboard$mocket_example$main$$listen_event("echo", (json) => {
    moonbitlang$core$builtin$$println$22$(json);
  });
  oboard$mocket$lib$$HttpServer$get(server, "/", (_req, _res, _cont) => {
    _cont(oboard$mocket$lib$$html("<h1>Hello, World!</h1>"));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/text", (_req, _res, _cont) => {
    _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$String("<h1>Hello, World!</h1>"));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/async_data", (_req, _res, _cont) => {
    _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("John Doe") }, { _0: "age", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(30) }, { _0: "city", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("New York") }])));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/data", (_req, _res, _cont) => {
    _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "name", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("John") }, { _0: "age", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Number(30) }, { _0: "city", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("New York") }])));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/node_info", (_req, _res, _cont) => {
    const random_x1 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
    const random_y1 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
    const random_x2 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
    const random_y2 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
    const task_size = 10 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 90;
    const computing_capacity = 1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9;
    const user_id = `user_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
    const device_id = `device_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
    _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "user_id", _1: moonbitlang$core$string$$String$to_json(user_id) }, { _0: "user_coordinates", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "x", _1: moonbitlang$core$double$$Double$to_json(random_x1) }, { _0: "y", _1: moonbitlang$core$double$$Double$to_json(random_y1) }])) }, { _0: "task_size", _1: moonbitlang$core$double$$Double$to_json(task_size) }, { _0: "device_id", _1: moonbitlang$core$string$$String$to_json(device_id) }, { _0: "device_coordinates", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "x", _1: moonbitlang$core$double$$Double$to_json(random_x2) }, { _0: "y", _1: moonbitlang$core$double$$Double$to_json(random_y2) }])) }, { _0: "computing_capacity", _1: moonbitlang$core$double$$Double$to_json(computing_capacity) }])));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/link_info", (_req, _res, _cont) => {
    const channel_matrix = [[0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8, 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8], [0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8, 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8]];
    const transmit_power = 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.9;
    const noise_power = 0.001 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.009;
    const bandwidth = 1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 19;
    const source_id = `user_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
    const target_id = `device_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
    _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "channel_matrix", _1: moonbitlang$core$array$$Array$to_json$49$(channel_matrix) }, { _0: "transmit_power", _1: moonbitlang$core$double$$Double$to_json(transmit_power) }, { _0: "noise_power", _1: moonbitlang$core$double$$Double$to_json(noise_power) }, { _0: "bandwidth", _1: moonbitlang$core$double$$Double$to_json(bandwidth) }, { _0: "source_id", _1: moonbitlang$core$string$$String$to_json(source_id) }, { _0: "target_id", _1: moonbitlang$core$string$$String$to_json(target_id) }])));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/node_infos/:count", (req, _res, _cont) => {
    const _bind = req.body;
    if (_bind === undefined) {
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "error", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("Count parameter is required") }])));
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const count = moonbitlang$core$json$$Json$as_number(_x);
      const count$2 = moonbitlang$core$math$$minimum$8$(100, moonbitlang$core$math$$maximum$8$(1, moonbitlang$core$double$$Double$to_int(moonbitlang$core$option$$Option$unwrap$12$(count))));
      const nodes = [];
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < count$2) {
          const random_x1 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
          const random_y1 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
          const random_x2 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
          const random_y2 = -100 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 200;
          const task_size = 10 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 90;
          const computing_capacity = 1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9;
          const user_id = `user_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
          const device_id = `device_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
          moonbitlang$core$array$$Array$push$38$(nodes, moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "user_id", _1: moonbitlang$core$string$$String$to_json(user_id) }, { _0: "user_coordinates", _1: moonbitlang$core$builtin$$Map$to_json$33$(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "x", _1: moonbitlang$core$double$$Double$to_json(random_x1) }, { _0: "y", _1: moonbitlang$core$double$$Double$to_json(random_y1) }])) }, { _0: "task_size", _1: moonbitlang$core$double$$Double$to_json(task_size) }, { _0: "device_id", _1: moonbitlang$core$string$$String$to_json(device_id) }, { _0: "device_coordinates", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "x", _1: moonbitlang$core$double$$Double$to_json(random_x2) }, { _0: "y", _1: moonbitlang$core$double$$Double$to_json(random_y2) }])) }, { _0: "computing_capacity", _1: moonbitlang$core$double$$Double$to_json(computing_capacity) }]));
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "nodes", _1: moonbitlang$core$array$$Array$to_json$38$(nodes) }])));
      return;
    }
  });
  oboard$mocket$lib$$HttpServer$get(server, "/link_infos/:count", (req, _res, _cont) => {
    const _bind = req.body;
    if (_bind === undefined) {
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "error", _1: new $64$moonbitlang$47$core$47$builtin$46$Json$String("Count parameter is required") }])));
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const count = moonbitlang$core$double$$Double$to_int(moonbitlang$core$option$$Option$unwrap$12$(moonbitlang$core$json$$Json$as_number(_x)));
      const count$2 = moonbitlang$core$math$$minimum$8$(100, moonbitlang$core$math$$maximum$8$(1, count));
      const links = [];
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < count$2) {
          const channel_matrix = [[0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8, 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8], [0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8, 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.8]];
          const transmit_power = 0.1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.9;
          const noise_power = 0.001 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 0.009;
          const bandwidth = 1 + moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 19;
          const source_id = `user_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
          const target_id = `device_${moonbitlang$core$builtin$$Show$to_string$8$(moonbitlang$core$double$$Double$to_int(moonbitlang$core$math$$floor(moonbitlang$core$random$$Rand$double(oboard$mocket_example$main$$random_generator) * 9000 + 1000)))}`;
          moonbitlang$core$array$$Array$push$38$(links, moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "channel_matrix", _1: moonbitlang$core$array$$Array$to_json$49$(channel_matrix) }, { _0: "transmit_power", _1: moonbitlang$core$double$$Double$to_json(transmit_power) }, { _0: "noise_power", _1: moonbitlang$core$double$$Double$to_json(noise_power) }, { _0: "bandwidth", _1: moonbitlang$core$double$$Double$to_json(bandwidth) }, { _0: "source_id", _1: moonbitlang$core$string$$String$to_json(source_id) }, { _0: "target_id", _1: moonbitlang$core$string$$String$to_json(target_id) }]));
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$Object(moonbitlang$core$builtin$$Map$from_array$33$([{ _0: "links", _1: moonbitlang$core$array$$Array$to_json$38$(links) }])));
      return;
    }
  });
  oboard$mocket$lib$$HttpServer$post(server, "/echo", (req, _res, _cont) => {
    const _bind = req.body;
    if (_bind === undefined) {
      _cont(new $64$moonbitlang$47$core$47$builtin$46$Json$String("No data received"));
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _cont(_x);
      return;
    }
  });
  oboard$mocket$lib$$HttpServer$get(server, "/image", (_req, _res, _cont) => {
    _cont(oboard$mocket$lib$$file("logo.jpg"));
  });
  oboard$mocket$lib$$HttpServer$get(server, "/buffer", (_req, _res, _cont) => {
    _cont(oboard$mocket$lib$$buffer(moonbitlang$core$bytes$$Bytes$from_array(moonbitlang$core$array$$Array$map$48$([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 32, 84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 32, 116, 101, 115, 116, 105, 110, 103, 32, 112, 117, 114, 112, 111, 115, 101], (x) => x & 255))));
  });
  oboard$mocket$lib$$HttpServer$resource(server, "/static/", "./");
  oboard$mocket$lib$$exec("ls", (_cont_param) => {
    oboard$mocket_example$main$$_init$42$46$42$async_driver$71$(new $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$State_1(_cont_param, oboard$mocket_example$main$$_init$42$46$42$cont$70$));
  }, (_cont_param) => {
    oboard$mocket_example$main$$_init$42$46$42$async_driver$71$(new $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$207$46$State$_try$47$150(_cont_param, oboard$mocket_example$main$$_init$42$46$42$cont$70$));
  });
  oboard$mocket$lib$$fetch("https://api64.ipify.org/", undefined, undefined, undefined, undefined, undefined, (_cont_param) => {
    oboard$mocket_example$main$$_init$42$46$42$async_driver$73$(new $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$State_1(_cont_param, oboard$mocket_example$main$$_init$42$46$42$cont$72$));
  }, (_cont_param) => {
    oboard$mocket_example$main$$_init$42$46$42$async_driver$73$(new $36$oboard$47$mocket_example$47$main$46$42$init$46$lambda$47$219$46$State$_try$47$153(_cont_param, oboard$mocket_example$main$$_init$42$46$42$cont$72$));
  });
  moonbitlang$core$builtin$$println$4$("服务已启动，可访问以下API：");
  moonbitlang$core$builtin$$println$4$(`- 节点信息服务: http://localhost:${moonbitlang$core$builtin$$Show$to_string$8$(4411)}/node_info`);
  moonbitlang$core$builtin$$println$4$(`- 通信链路信息服务: http://localhost:${moonbitlang$core$builtin$$Show$to_string$8$(4411)}/link_info`);
  moonbitlang$core$builtin$$println$4$(`- 批量节点信息: http://localhost:${moonbitlang$core$builtin$$Show$to_string$8$(4411)}/node_infos/10`);
  moonbitlang$core$builtin$$println$4$(`- 批量链路信息: http://localhost:${moonbitlang$core$builtin$$Show$to_string$8$(4411)}/link_infos/10`);
})();
