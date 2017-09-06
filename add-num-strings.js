String.prototype.add = function (toAdd) {
	// declair vars
	var str = this.toString(),
		toAdd = toAdd === 'string' ? toAdd : toAdd + '',

		_sum = 0,
		_carry = 0,
		_temp = [],

		_len = _getLen(str, toAdd),
		_obj = {
			a: {
			val: str
			},
			b: {
			val: toAdd
			}
		},
		_arr,
		_eqObj;
	
	// get len
	function _getLen (a, b) {
		var alen = a.length,
			blen = b.length;

		if (alen > blen) {
			return alen;
		} else if (alen < blen) {
			return blen;
		} else {
			return alen;
		}
	};
	
	// equalize
	function _equalize (a, b) {
		var alen = a.length,
			blen = b.length,
			_diff = 0;

		if (alen > blen) {
			_obj.val = 'b';
			_diff = alen - blen;
		} else if (alen < blen) {
			_obj.val = 'a';
			_diff = blen - alen;
		} else {
			return _obj;
		}

		_arr = Array.apply(null, Array(_diff)).map(Number.prototype.valueOf, 0);
		_arr.push(_obj[_obj.val].val);
		_obj[_obj.val].val = _arr.join('');
		return _obj;
	};
	
	// add
	_eqObj = _equalize(str, toAdd);
	a = _eqObj.a.val;
	b = _eqObj.b.val;
	
	for (var i = 1; i <= _len; i++) {
		var _sum = (a[a.length-i]*1) + (b[b.length-i]*1) + _carry;
		if (_sum > 9) {
			var __num = _sum + '';
			_temp.unshift(__num[1]);
			_carry = (__num[0]*1);
		} else {
			_temp.unshift(_sum);
			_carry = 0;
		}
	};
	if (_carry > 0) {
		_temp.unshift(_carry);
	}
	return _temp.join('');
};

var a = '9889989999999988998999999998899899999999889989999999988998999999998899899999999889989999999988998999999998899899999999889989999999988998999999998899899999999889989999999',
	b = '98899899889989999999988998999999998899899999999889989999999988998999999998899899999999889989999999988998999999998899899999999889989999999';

a.add(b);