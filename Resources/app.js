var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
win.open();

var TiBeacons = (Ti.Android) //
		? require('com.liferay.beacons') //
		: require('org.beuckman.tibeacons');

TiBeacons.startMonitoringForRegion({
	uuid : "00000000-0000-0000-0000-000000000000",
	identifier : "Test Maverick-Beacon",
});
/*
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
 });*/
TiBeacons.addEventListener("enteredRegion", function(e) {
	win.backgroundColor = 'green';
	console.log(e);
});
TiBeacons.addEventListener("exitedRegion", function(e) {
	win.backgroundColor = 'red';
	console.log(e);
});
TiBeacons.addEventListener("determinedRegionState", function(e) {
	//alert(e.regionState);
	switch (e.regionState) {
	case 'inside':
		win.backgroundColor = 'green';
		break;
	case 'outside':
		win.backgroundColor = 'red';
		break;
	}
	setTimeout(function() {
		win.backgroundColor = 'white';
	}, 2000);
	console.log(e);
});

