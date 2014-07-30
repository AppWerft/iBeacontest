
	var iBeacon = require('miga.tibeacon');
	// register success Callback and set interval to 30sec
	iBeacon.initBeacon({
		success : onSuccess,
		error : onError,
		interval : 10,
		region : onRegion,
		found : onFound
	});

	function onSuccess(e) {
		console.log('SUCCESS');
		Ti.API.info(JSON.stringify(e));
	}

	function onRegion(e) {
		console.log('REGION');
		Ti.API.info(JSON.stringify(e));
	}

	function onFound(e) {
		console.log('FOUND');
		Ti.API.info(JSON.stringify(e));
	}

	function onError(e) {
		Ti.API.info(JSON.stringify(e));
	}

	if (iBeacon.isEnabled()) {
		iBeacon.startScanning();
		//iBeacon.stopScanning();
	}