$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof udo=='undefined') udo = {}
if(!udo.collections) udo.collections = {}
udo.collections.UHash = function() { }
udo.collections.UHash.__name__ = ["udo","collections","UHash"];
udo.collections.UHash.createHash = function(datas) {
	var hash = new Hash();
	{
		var _g = 0, _g1 = Reflect.fields(datas);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			hash.set(field,Reflect.field(datas,field));
		}
	}
	return hash;
}
udo.collections.UHash.copyTo = function(from,to) {
	{ var $it0 = from.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	to.set(k,from.get(k));
	}}
	return to;
}
udo.collections.UHash.clone = function(src) {
	var h = new Hash();
	udo.collections.UHash.copyTo(src,h);
	return h;
}
udo.collections.UHash.arrayOfKeys = function(hash) {
	return udo.collections.UIterator.array(hash.keys());
}
udo.collections.UHash.setOfKeys = function(hash) {
	var set = new udo.collections.Set();
	{ var $it0 = hash.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	set.add(k);
	}}
	return set;
}
udo.collections.UHash.count = function(hash) {
	var i = 0;
	{ var $it0 = hash.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	i++;
	}}
	return i;
}
udo.collections.UHash.clear = function(hash) {
	var _hash = hash;
	{
		_hash.h = {}
		if(_hash.h.__proto__ != null) {
			_hash.h.__proto__ = null;
			delete(_hash.h.__proto__);
		}
		else null;
	}
}
udo.collections.UHash.prototype.__class__ = udo.collections.UHash;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,(l - r) - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
if(!udo.util) udo.util = {}
udo.util.Message = function(message,params,param) { if( message === $_ ) return; {
	this.message = message;
	if(null == params) this.params = [];
	else this.params = params;
	if(null != param) this.params.push(param);
}}
udo.util.Message.__name__ = ["udo","util","Message"];
udo.util.Message.prototype.message = null;
udo.util.Message.prototype.params = null;
udo.util.Message.prototype.toString = function() {
	return udo.text.UString.plainFormat(this.message,this.params);
}
udo.util.Message.prototype.__class__ = udo.util.Message;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
udo.collections.HashDecorator = function(decorated) { if( decorated === $_ ) return; {
	if(null == decorated) throw new udo.error.NullArgument("decorated",{ fileName : "HashDecorator.hx", lineNumber : 56, className : "udo.collections.HashDecorator", methodName : "new"});
	this._d = decorated;
}}
udo.collections.HashDecorator.__name__ = ["udo","collections","HashDecorator"];
udo.collections.HashDecorator.prototype._d = null;
udo.collections.HashDecorator.prototype.exists = function(key) {
	return this._d.exists(key);
}
udo.collections.HashDecorator.prototype.get = function(key) {
	return this._d.get(key);
}
udo.collections.HashDecorator.prototype.h = null;
udo.collections.HashDecorator.prototype.iterator = function() {
	return this._d.iterator();
}
udo.collections.HashDecorator.prototype.keys = function() {
	return this._d.keys();
}
udo.collections.HashDecorator.prototype.remove = function(key) {
	return this._d.remove(key);
}
udo.collections.HashDecorator.prototype.set = function(key,value) {
	this._d.set(key,value);
}
udo.collections.HashDecorator.prototype.toString = function() {
	return this._d.toString();
}
udo.collections.HashDecorator.prototype.__class__ = udo.collections.HashDecorator;
udo.collections.HashDecorator.__interfaces__ = [Hash];
udo.collections.CascadeHash = function(current,inner) { if( current === $_ ) return; {
	udo.collections.HashDecorator.apply(this,[current]);
	if(null == inner) throw new udo.error.NullArgument("innerHash",{ fileName : "CascadeHash.hx", lineNumber : 30, className : "udo.collections.CascadeHash", methodName : "new"});
	this._ih = inner;
}}
udo.collections.CascadeHash.__name__ = ["udo","collections","CascadeHash"];
udo.collections.CascadeHash.__super__ = udo.collections.HashDecorator;
for(var k in udo.collections.HashDecorator.prototype ) udo.collections.CascadeHash.prototype[k] = udo.collections.HashDecorator.prototype[k];
udo.collections.CascadeHash.create = function(arr) {
	if(2 > arr.length) throw new udo.error.Error("to create a cascading hash sequence you need at least 2 hash objects",null,null,{ fileName : "CascadeHash.hx", lineNumber : 15, className : "udo.collections.CascadeHash", methodName : "create"});
	var inner = arr.pop();
	var current = arr.pop();
	var hash = new udo.collections.CascadeHash(current,inner);
	while(arr.length > 0) {
		hash = new udo.collections.CascadeHash(arr.pop(),hash);
	}
	return hash;
}
udo.collections.CascadeHash.prototype._ih = null;
udo.collections.CascadeHash.prototype.exists = function(key) {
	if(udo.collections.HashDecorator.prototype.exists.apply(this,[key])) return udo.collections.HashDecorator.prototype.exists.apply(this,[key]);
	else return this._ih.exists(key);
}
udo.collections.CascadeHash.prototype.get = function(key) {
	if(udo.collections.HashDecorator.prototype.exists.apply(this,[key])) return udo.collections.HashDecorator.prototype.get.apply(this,[key]);
	else return this._ih.get(key);
}
udo.collections.CascadeHash.prototype.iterator = function() {
	var list = new List();
	{ var $it0 = this.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	list.push(this.get(k));
	}}
	return list.iterator();
}
udo.collections.CascadeHash.prototype.keys = function() {
	var s = new udo.collections.Set();
	{ var $it0 = udo.collections.HashDecorator.prototype.keys.apply(this,[]);
	while( $it0.hasNext() ) { var k = $it0.next();
	s.add(k);
	}}
	{ var $it1 = this._ih.keys();
	while( $it1.hasNext() ) { var k = $it1.next();
	s.add(k);
	}}
	return s.iterator();
}
udo.collections.CascadeHash.prototype.toString = function() {
	var arr = [];
	{ var $it0 = this.keys();
	while( $it0.hasNext() ) { var k = $it0.next();
	arr.push((k + ": ") + this.get(k));
	}}
	return ("{" + arr.join(", ")) + "}";
}
udo.collections.CascadeHash.prototype.__class__ = udo.collections.CascadeHash;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
if(!udo.error) udo.error = {}
udo.error.Error = function(message,params,param,pos) { if( message === $_ ) return; {
	udo.util.Message.apply(this,[message,params,param]);
	this.pos = pos;
}}
udo.error.Error.__name__ = ["udo","error","Error"];
udo.error.Error.__super__ = udo.util.Message;
for(var k in udo.util.Message.prototype ) udo.error.Error.prototype[k] = udo.util.Message.prototype[k];
udo.error.Error.prototype.inner = null;
udo.error.Error.prototype.pos = null;
udo.error.Error.prototype.setInner = function(inner) {
	this.inner = inner;
	return this;
}
udo.error.Error.prototype.toString = function() {
	try {
		return udo.text.UString.plainFormat(this.message,this.params);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				var ps = ((((this.pos.className + ".") + this.pos.methodName) + "(") + this.pos.lineNumber) + ")";
				var pa;
				if(0 == this.params.length) pa = "no parameters passed";
				else pa = "wrong parameters passed ({0})";
				throw new udo.error.Error(pa + " for pattern '{1}' at {2}",[this.params.join(", "),this.message,ps],null,{ fileName : "Error.hx", lineNumber : 39, className : "udo.error.Error", methodName : "toString"});
			}
		}
	}
}
udo.error.Error.prototype.__class__ = udo.error.Error;
udo.collections.Set = function(p) { if( p === $_ ) return; {
	this._v = [];
}}
udo.collections.Set.__name__ = ["udo","collections","Set"];
udo.collections.Set.prototype._v = null;
udo.collections.Set.prototype.add = function(v) {
	this._v.remove(v);
	this._v.push(v);
}
udo.collections.Set.prototype.array = function() {
	return this._v.copy();
}
udo.collections.Set.prototype.exists = function(v) {
	{
		var _g = 0, _g1 = this._v;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			if(t == v) return true;
		}
	}
	return false;
}
udo.collections.Set.prototype.iterator = function() {
	return this._v.iterator();
}
udo.collections.Set.prototype.remove = function(v) {
	return this._v.remove(v);
}
udo.collections.Set.prototype.toString = function() {
	return ("{" + this._v.join(", ")) + "}";
}
udo.collections.Set.prototype.__class__ = udo.collections.Set;
udo.collections.UIterator = function() { }
udo.collections.UIterator.__name__ = ["udo","collections","UIterator"];
udo.collections.UIterator.indexOf = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	}
	var c = 0;
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	if(f(i)) return c;
	else c++;
	}}
	return -1;
}
udo.collections.UIterator.contains = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	}
	var c = 0;
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	if(f(i)) return true;
	}}
	return false;
}
udo.collections.UIterator.array = function(it) {
	var result = [];
	{ var $it0 = it;
	while( $it0.hasNext() ) { var v = $it0.next();
	result.push(v);
	}}
	return result;
}
udo.collections.UIterator.prototype.__class__ = udo.collections.UIterator;
udo.collections.IntHashList = function(p) { if( p === $_ ) return; {
	this.length = 0;
	this.__keys = [];
	this.__hash = new IntHash();
}}
udo.collections.IntHashList.__name__ = ["udo","collections","IntHashList"];
udo.collections.IntHashList.prototype.__hash = null;
udo.collections.IntHashList.prototype.__keys = null;
udo.collections.IntHashList.prototype.array = function() {
	var values = [];
	{
		var _g = 0, _g1 = this.__keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			values.push(this.__hash.get(k));
		}
	}
	return values;
}
udo.collections.IntHashList.prototype.clear = function() {
	this.__hash = new IntHash();
	this.__keys = [];
	this.length = 0;
}
udo.collections.IntHashList.prototype.exists = function(key) {
	return this.__hash.exists(key);
}
udo.collections.IntHashList.prototype.get = function(key) {
	return this.__hash.get(key);
}
udo.collections.IntHashList.prototype.getAt = function(index) {
	return this.__hash.get(this.__keys[index]);
}
udo.collections.IntHashList.prototype.iterator = function() {
	return this.array().iterator();
}
udo.collections.IntHashList.prototype.keys = function() {
	return this.__keys.iterator();
}
udo.collections.IntHashList.prototype.length = null;
udo.collections.IntHashList.prototype.remove = function(key) {
	var item = this.__hash.get(key);
	if(item == null) return null;
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
udo.collections.IntHashList.prototype.removeAt = function(index) {
	if(index < 0 || index >= this.length) return null;
	var key = this.__keys[index];
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
udo.collections.IntHashList.prototype.set = function(key,value) {
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
}
udo.collections.IntHashList.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
udo.collections.IntHashList.prototype.__class__ = udo.collections.IntHashList;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.__class__ = StringBuf;
udo.collections.UArray = function() { }
udo.collections.UArray.__name__ = ["udo","collections","UArray"];
udo.collections.UArray.pushIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	}
	else if(null != value) arr.push(value);
	return arr;
}
udo.collections.UArray.pushR = function(arr,value) {
	arr.push(value);
	return arr;
}
udo.collections.UArray.removeR = function(arr,value) {
	arr.remove(value);
	return arr;
}
udo.collections.UArray.prototype.__class__ = udo.collections.UArray;
udo.collections.HashList = function(p) { if( p === $_ ) return; {
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
}}
udo.collections.HashList.__name__ = ["udo","collections","HashList"];
udo.collections.HashList.prototype.__hash = null;
udo.collections.HashList.prototype.__keys = null;
udo.collections.HashList.prototype.array = function() {
	var values = [];
	{
		var _g = 0, _g1 = this.__keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			values.push(this.__hash.get(k));
		}
	}
	return values;
}
udo.collections.HashList.prototype.clear = function() {
	this.__hash = new Hash();
	this.__keys = [];
	this.length = 0;
}
udo.collections.HashList.prototype.exists = function(key) {
	return this.__hash.exists(key);
}
udo.collections.HashList.prototype.get = function(key) {
	return this.__hash.get(key);
}
udo.collections.HashList.prototype.getAt = function(index) {
	return this.__hash.get(this.__keys[index]);
}
udo.collections.HashList.prototype.indexOf = function(key) {
	if(!this.__hash.exists(key)) return -1;
	{
		var _g1 = 0, _g = this.__keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__keys[i] == key) return i;
		}
	}
	return (function($this) {
		var $r;
		throw "this should never happen";
		return $r;
	}(this));
}
udo.collections.HashList.prototype.iterator = function() {
	return this.array().iterator();
}
udo.collections.HashList.prototype.keyAt = function(index) {
	return this.__keys[index];
}
udo.collections.HashList.prototype.keys = function() {
	return this.__keys.iterator();
}
udo.collections.HashList.prototype.length = null;
udo.collections.HashList.prototype.remove = function(key) {
	var item = this.__hash.get(key);
	if(item == null) return null;
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
udo.collections.HashList.prototype.removeAt = function(index) {
	var key = this.__keys[index];
	if(key == null) return null;
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
udo.collections.HashList.prototype.set = function(key,value) {
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
}
udo.collections.HashList.prototype.setAt = function(index,key,value) {
	this.remove(key);
	this.__keys.insert(index,key);
	this.__hash.set(key,value);
	this.length++;
}
udo.collections.HashList.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
udo.collections.HashList.prototype.__class__ = udo.collections.HashList;
udo.collections.UIterable = function() { }
udo.collections.UIterable.__name__ = ["udo","collections","UIterable"];
udo.collections.UIterable.indexOf = function(it,v,f) {
	return udo.collections.UIterator.indexOf(it.iterator(),v,f);
}
udo.collections.UIterable.contains = function(it,v,f) {
	return udo.collections.UIterator.contains(it.iterator(),v,f);
}
udo.collections.UIterable.array = function(it) {
	return udo.collections.UIterator.array(it.iterator());
}
udo.collections.UIterable.prototype.__class__ = udo.collections.UIterable;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
udo.error.NotImplemented = function(posInfo) { if( posInfo === $_ ) return; {
	udo.error.Error.apply(this,["method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "udo.error.NotImplemented", methodName : "new"}]);
}}
udo.error.NotImplemented.__name__ = ["udo","error","NotImplemented"];
udo.error.NotImplemented.__super__ = udo.error.Error;
for(var k in udo.error.Error.prototype ) udo.error.NotImplemented.prototype[k] = udo.error.Error.prototype[k];
udo.error.NotImplemented.prototype.__class__ = udo.error.NotImplemented;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.__class__ = List;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?((i.fileName + ":") + i.lineNumber) + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += ((s + k) + " : ") + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += ("\n" + s) + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null);
	js.Lib.isOpera = (typeof window!='undefined' && window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = (Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	});
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = (this.length + len) - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return (this.r.m != null);
}
EReg.prototype.matched = function(n) {
	return (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this)));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length}
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.__class__ = EReg;
if(!udo.text) udo.text = {}
udo.text.UString = function() { }
udo.text.UString.__name__ = ["udo","text","UString"];
udo.text.UString.format = function(pattern,params) {
	return udo.text.UString.plainFormat(pattern,params);
}
udo.text.UString.plainFormat = function(pattern,params) {
	return udo.text.UString._re.customReplace(pattern,function(ereg) {
		var index = Std.parseInt(ereg.matched(1));
		if(index >= params.length || index < 0) throw new udo.error.Error("format index {0} out of range",null,index,{ fileName : "UString.hx", lineNumber : 27, className : "udo.text.UString", methodName : "plainFormat"});
		return "" + params[index];
	});
}
udo.text.UString.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value;
	else return value.substr(0,pos);
}
udo.text.UString.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value;
	else return value.substr(pos + searchFor.length);
}
udo.text.UString.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return value.substr(0,len);
}
udo.text.UString.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = value.substr(start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return value.substr(start);
}
udo.text.UString.trim = function(value,charlist) {
	var len = value.length;
	var pos;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return udo.text.UString.rtrim(udo.text.UString.ltrim(value,charlist),charlist);
}
udo.text.UString.ucfirst = function(value) {
	return ((value == null?null:value.charAt(0).toUpperCase() + value.substr(1)));
}
udo.text.UString.lcfirst = function(value) {
	return ((value == null?null:value.charAt(0).toLowerCase() + value.substr(1)));
}
udo.text.UString.empty = function(value) {
	if(value == null || value == "") return true;
	else if(StringTools.trim(value) == "") return true;
	else return false;
}
udo.text.UString.isAlphaNum = function(value) {
	return ((value == null?false:udo.text.UString.__alphaNumPattern.match(value)));
}
udo.text.UString.digitsOnly = function(value) {
	return ((value == null?false:udo.text.UString.__digitsPattern.match(value)));
}
udo.text.UString.ucwords = function(value) {
	return udo.text.UString.__ucwordsPattern.customReplace(((value == null?null:value.charAt(0).toUpperCase() + value.substr(1))),$closure(udo.text.UString,"__upperMatch"));
}
udo.text.UString.ucwordsws = function(value) {
	return udo.text.UString.__ucwordswsPattern.customReplace(((value == null?null:value.charAt(0).toUpperCase() + value.substr(1))),$closure(udo.text.UString,"__upperMatch"));
}
udo.text.UString.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
udo.text.UString.prototype.__class__ = udo.text.UString;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.h = null;
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}}
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
udo.error.AbstractMethod = function(posInfo) { if( posInfo === $_ ) return; {
	udo.error.Error.apply(this,["method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "udo.error.AbstractMethod", methodName : "new"}]);
}}
udo.error.AbstractMethod.__name__ = ["udo","error","AbstractMethod"];
udo.error.AbstractMethod.__super__ = udo.error.Error;
for(var k in udo.error.Error.prototype ) udo.error.AbstractMethod.prototype[k] = udo.error.Error.prototype[k];
udo.error.AbstractMethod.prototype.__class__ = udo.error.AbstractMethod;
udo.error.NullArgument = function(argumentName,posInfo) { if( argumentName === $_ ) return; {
	udo.error.Error.apply(this,["invalid null argument '{0}'",null,argumentName,posInfo]);
}}
udo.error.NullArgument.__name__ = ["udo","error","NullArgument"];
udo.error.NullArgument.__super__ = udo.error.Error;
for(var k in udo.error.Error.prototype ) udo.error.NullArgument.prototype[k] = udo.error.Error.prototype[k];
udo.error.NullArgument.throwIfNull = function(value,name,posInfo) {
	if(null == value) throw new udo.error.NullArgument(name,posInfo);
}
udo.error.NullArgument.prototype.__class__ = udo.error.NullArgument;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
js.Lib.onerror = null;
udo.text.UString._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
udo.text.UString.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
udo.text.UString.__ucwordswsPattern = new EReg("\\s([a-z])","");
udo.text.UString.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
udo.text.UString.__digitsPattern = new EReg("^[0-9]+$","");
