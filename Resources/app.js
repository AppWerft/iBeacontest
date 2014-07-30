
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
}).open();

if (Ti.Platform.name == "android") {
	var TiBeacons = require('com.liferay.TiBeacons');
	TiBeacons.setAutoRange(true);
	TiBeacons.startMonitoringForRegion({
		identifier : 'Region by UUID and major and minor',
		uuid : '11111111-2222-3333-4444-555555555555',
		major : 3,
		minor : 2
	});
	TiBeacons.addEventListener("enteredRegion", function(e) {
		console.log(e);
	});

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

} else {
	var TiBeacons = require('org.beuckman.tibeacons');
	TiBeacons.startMonitoringForRegion({
		uuid : "00000000-0000-0000-0000-000000000000",
		identifier : "Test Region 1",
	});

	TiBeacons.startRangingForBeacons({
		uuid : "00000000-0000-0000-0000-000000000001",
		identifier : "Test Region 2 (group-specific)",
		major : 1
	});

	TiBeacons.startRangingForBeacons({
		uuid : "00000000-0000-0000-0000-000000000002",
		identifier : "Test Region 3 (device-specific)",
		major : 1,
		minor : 2
	});
	TiBeacons.addEventListener("enteredRegion", alert);
	TiBeacons.addEventListener("exitedRegion", alert);
	TiBeacons.addEventListener("determinedRegionState", alert);

}