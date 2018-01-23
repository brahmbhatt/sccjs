function foo()
{
	var bar;
	quux = 10;
	function zip()
	{
		bar = true;
		var quux = 20;
	}
	return zip;
}
console.log(foo()());
