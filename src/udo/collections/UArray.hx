/**
 * ...
 * @author Franco Ponticelli
 */

package udo.collections;

class UArray
{
	public static function pushIf<T>(arr : Array<T>, ?condition : Bool, value : Null<T>) : Array<T>
	{
		if (null != condition)
		{
			if(condition)
				arr.push(value);
		} else if (null != value)
			arr.push(value);
		return arr;
	}
	
	public static function pushR<T>(arr : Array<T>, value : T) : Array<T>
	{
		arr.push(value);
		return arr;
	} 
	
	public static function removeR<T>(arr : Array<T>, value : T) : Array<T>
	{
		arr.remove(value);
		return arr;
	}
}