function beaconsProximityCallback(e) {
	console.log("identifer: " + e.identifier);
	console.log("uuid: " + e.uuid);
	console.log("major: " + e.major);
	console.log("minor: " + e.minor);
	console.log("proximity: " + e.proximity);
	console.log("accuracy: " + e.accuracy);
	console.log("rssi: " + e.rssi);
	console.log("power: " + e.power);
}

var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

if (Ti.Platform.name == "android") {
	var beacons = require('com.liferay.beacons');
	beacons.setAutoRange(true);
	beacons.startMonitoringForRegion({
		identifier : 'Region by UUID and major and minor',
		uuid : '11111111-2222-3333-4444-555555555555',
		major : 0,
		minor : 0
	});
	/*
	beacons.addEventListener("enteredRegion", function(e) {
		console.log("identifer: " + e.identifier);
		console.log("uuid: " + e.uuid);
		console.log("major: " + e.major);
		console.log("minor: " + e.minor);
		console.log("proximity: " + e.proximity);
		console.log("accuracy: " + e.accuracy);
		console.log("rssi: " + e.rssi);
		console.log("power: " + e.power);
	});*/

} else {
	label.text = "liferay.beacons not supported on " + Ti.Platform.name;
}