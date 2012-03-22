package thx.csv;

import thx.culture.Culture;
import thx.data.ValueEncoder;
import thx.data.ValueHandler;
/**
 * ...
 * @author Franco Ponticelli
 */

class Csv
{
	public static function encode(value : Array<Array<Dynamic>>, ?delimiter : String, ?nulltoempty : Bool, ?newline : String)
	{
		var handler = new CsvEncoder(delimiter, nulltoempty, newline);
		new ValueEncoder(handler).encode(value);
		return handler.encodedString;
	}
/**
 *  Parses and decodes well structured csv data.
 **/
	public static function decode(value : String, ?check_type:Bool, ?delimiter : String,  ?emptytonull:Bool, ?newline: String, ?quote: String, ?doublequotations: Bool, ?skipwhitespace: Bool) : Array<Array<Dynamic>>
	{
		var handler = new ValueHandler();
		new CsvDecoder(handler, check_type, delimiter , emptytonull, newline, quote, doublequotations, skipwhitespace).decode(value);
		return handler.value;
	}

	public static function decodeObjects(value : String, ?check_type:Bool, ?delimiter : String,  ?emptytonull:Bool, ?newline: String, ?quote: String, ?doublequotations: Bool, ?skipwhitespace: Bool) : Array<Dynamic>
	{
		var handler = new CsvObjectHandler();
		new CsvDecoder(handler, check_type, delimiter , emptytonull, newline, quote, doublequotations, skipwhitespace).decode(value);
		return handler.value;
	}
}

class CsvObjectHandler extends ValueHandler
{
	static inline var START = 0;
	static inline var CAPTURE_HEADERS = 1;
	static inline var CAPTURE_LINE = 2;
	static inline var CAPTURE_FIELDS = 4;
	static inline var HEADERS_CAPTURED = 8;
	var headers : Array<String>;
	var flag : Int;
	var pos : Int;

	public function new()
	{
		super();
		flag = START;
	}

	override public function start()
	{
		if(flag == START)
		{
			flag = CAPTURE_HEADERS;
			super.start();
		} else
			super.start();
	}

	override public function startArray()
	{
		if(flag == CAPTURE_LINE)
		{
			pos = 0;
			flag = CAPTURE_FIELDS;
			super.startItem();
			startObject();
		} else
			super.startArray();
	}

	override public function endArray()
	{
		if(flag == CAPTURE_HEADERS)
		{
			flag = HEADERS_CAPTURED;
			super.endArray();
		} else if(flag == CAPTURE_FIELDS) {
			endObject();
			super.endItem();
			flag = CAPTURE_LINE;
		} else
			super.endArray();
	}

	override public function startItem()
	{
		if(flag == CAPTURE_FIELDS)
		{
			startField(headers[pos++]);
		} else
			super.startItem();
	}

	override public function endItem()
	{
		if(flag == HEADERS_CAPTURED)
		{
			super.endItem();
			super.end();
			headers = value[0];
			value = null;
			flag = CAPTURE_LINE;
			super.start();
			super.startItem();
			super.startArray();
		} else if(flag == CAPTURE_FIELDS)
		{
			endField();
		} else if(flag == CAPTURE_LINE) 
		{

		} else {
			super.endItem();
		}
	}
}