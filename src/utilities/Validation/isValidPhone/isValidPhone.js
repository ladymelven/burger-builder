const isValidPhone = phone => {
	if (!phone.match(/^\+{0,1}\d+$/)) {
		return false; //rules out codes like 1-543, but we don't deliver there anyway
	} else if (phone[0] === "+") {
		if (phone.length < 12 || phone.length > 14) {
			return false;
		} else {
			return true;
		}
	} else {
		if (phone.length !== 11) {
			return false;
		} else {
			return true;
		}
	}
};

export default isValidPhone;
