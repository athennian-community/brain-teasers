/**
 * @name checkNameDuplicate
 * @param name String name to compare to
 * @param flag String name or code
 * @param shareClasses Array array of share class objects
 * @returns {result: Boolean}
 */
function checkNameDuplicate(name, flag, shareClasses)
{
	for(var i = 0; i < shareClasses.length; i++)
	{
		if(shareClasses[i]._status==='inactive')
		{
			if(flag==='name') return {result: (shareClasses[i]._name===name)};
			else
			{
				return
				{
					result: (shareClasses[i]._certificate_code===name)
				};
			};
		} else return {result: false};
	};
};
var SC = [
	{
		_status: 'inactive', 
		_name: 'Class A Common',
		_certificate_code: "A-*"
	},
	{
		_status: 'confirmed', 
		_name: 'Class A Common',
		_certificate_code: "A-*"
	},
];
var resultWrapper = checkNameDuplicate('Class A Common', 'code', SC);
console.log(resultWrapper.result);