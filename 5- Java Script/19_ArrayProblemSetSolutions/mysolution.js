



function printReverse(array){
	for (var i = array.length-1; i >= 0; i--) {
		console.log(array[i]);
	}
}


function isUniform(array){
	var first = array[0];
	var uniform = true;
	for (var i = 1; i < array.length && uniform == true; i++) {
		if(first != array[i])
			uniform = false;
	}
	return uniform;
}


function arraySum(array){
	var sum = 0;
	array.forEach(function(item){
		sum += item;
	});
	return sum;
}

function max(array){
	var max = array[0];
	array.forEach(function(item){
		if (item > max)
			max = item;
	});
	return max;
}