//this file contains additional features written by me

//for variable size of the simulator according to screen size
var x=$(".simcir_outer_div").width();
x=x*0.90;

//the if else block decides which circuit to display according to user settings
if(sessionStorage.getItem("8bitCounter"))
{
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"D-FF-custom"},
		{"type":"DSO","numInputs":8}
		],
		"devices":[
    {"type":"Joint","id":"dev0","x":144,"y":96,"label":"Joint","state":{"direction":0}},
    {"type":"NOT","id":"dev1","x":232,"y":88,"label":"NOT"},
    {"type":"Joint","id":"dev2","x":144,"y":320,"label":"Joint","state":{"direction":0}},
    {"type":"AND","id":"dev3","x":368,"y":352,"label":"AND"},
    {"type":"AND","id":"dev4","x":368,"y":416,"label":"AND"},
    {"type":"XOR","id":"dev5","x":368,"y":528,"label":"XOR"},
    {"type":"XOR","id":"dev6","x":368,"y":592,"label":"XOR"},
    {"type":"XOR","id":"dev7","x":368,"y":472,"label":"XOR"},
    {"type":"AND","id":"dev8","x":368,"y":288,"label":"AND"},
    {"type":"OR","id":"dev9","x":368,"y":216,"label":"OR"},
    {"type":"AND","id":"dev10","x":368,"y":144,"label":"AND"},
    {"type":"OR","id":"dev11","x":368,"y":72,"label":"OR"},
    {"type":"NOT","id":"dev12","x":368,"y":648,"label":"NOT"},
    {"type":"XOR","id":"dev13","x":520,"y":560,"label":"XOR"},
    {"type":"DC","id":"dev14","x":0,"y":312,"label":"DC"},
    {"type":"BusOut","id":"dev15","x":816,"y":168,"label":"XY1"},
    {"type":"BusOut","id":"dev16","x":816,"y":392,"label":"XY0"},
    {"type":"PushOn","id":"dev17","x":88,"y":312,"label":"B"},
    {"type":"PushOn","id":"dev18","x":88,"y":88,"label":"A"},
    {"type":"PushOn","id":"dev19","x":104,"y":592,"label":"C"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev18.out0"},
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev2.in0","to":"dev17.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev3.in1","to":"dev2.out0"},
    {"from":"dev4.in0","to":"dev0.out0"},
    {"from":"dev4.in1","to":"dev2.out0"},
    {"from":"dev5.in0","to":"dev0.out0"},
    {"from":"dev5.in1","to":"dev2.out0"},
    {"from":"dev6.in0","to":"dev19.out0"},
    {"from":"dev6.in1","to":"dev19.out0"},
    {"from":"dev7.in0","to":"dev0.out0"},
    {"from":"dev7.in1","to":"dev2.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev2.out0"},
    {"from":"dev9.in0","to":"dev0.out0"},
    {"from":"dev9.in1","to":"dev2.out0"},
    {"from":"dev10.in0","to":"dev1.out0"},
    {"from":"dev10.in1","to":"dev17.out0"},
    {"from":"dev11.in0","to":"dev1.out0"},
    {"from":"dev11.in1","to":"dev2.out0"},
    {"from":"dev12.in0","to":"dev14.out0"},
    {"from":"dev13.in0","to":"dev5.out0"},
    {"from":"dev13.in1","to":"dev6.out0"},
    {"from":"dev15.in0","to":"dev11.out0"},
    {"from":"dev15.in1","to":"dev10.out0"},
    {"from":"dev15.in2","to":"dev9.out0"},
    {"from":"dev15.in3","to":"dev8.out0"},
    {"from":"dev15.in4","to":"dev3.out0"},
    {"from":"dev15.in5","to":"dev3.out0"},
    {"from":"dev15.in6","to":"dev4.out0"},
    {"from":"dev15.in7","to":"dev4.out0"},
    {"from":"dev16.in0","to":"dev13.out0"},
    {"from":"dev16.in1","to":"dev13.out0"},
    {"from":"dev16.in2","to":"dev7.out0"},
    {"from":"dev16.in3","to":"dev7.out0"},
    {"from":"dev16.in4","to":"dev7.out0"},
    {"from":"dev16.in5","to":"dev8.out0"},
    {"from":"dev16.in6","to":"dev9.out0"},
    {"from":"dev16.in7","to":"dev12.out0"},
    {"from":"dev17.in0","to":"dev14.out0"},
    {"from":"dev18.in0","to":"dev14.out0"},
    {"from":"dev19.in0","to":"dev14.out0"}
  ]
	};

	//sets the Frequency of the OSC.
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[17]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	//set all the settings as string inside div
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}

else if(sessionStorage.getItem("8bitRingCounter")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"D-FF-custom"},
		{"type":"DSO","numInputs":8}
		],
		"devices":[
		{"type":"D-FF-custom","id":"dev0","x":232,"y":32,"label":"D-FF-custom"},
		{"type":"D-FF-custom","id":"dev1","x":232,"y":128,"label":"D-FF-custom"},
		{"type":"Toggle","id":"dev2","x":80,"y":120,"label":"Toggle","state":{"on":true}},
		{"type":"DC","id":"dev3","x":24,"y":176,"label":"DC"},
		{"type":"D-FF-custom","id":"dev4","x":232,"y":312,"label":"D-FF-custom"},
		{"type":"D-FF-custom","id":"dev5","x":232,"y":216,"label":"D-FF-custom"},
		{"type":"OSC","id":"dev6","x":40,"y":256,"label":"OSC"},
		{"type":"LED","id":"dev7","x":408,"y":40,"label":"LED"},
		{"type":"LED","id":"dev8","x":408,"y":136,"label":"LED"},
		{"type":"LED","id":"dev9","x":408,"y":232,"label":"LED"},
		{"type":"LED","id":"dev10","x":408,"y":328,"label":"LED"}
		],
		"connectors":[
		{"from":"dev0.in0","to":"dev4.out0"},
		{"from":"dev0.in1","to":"dev6.out0"},
		{"from":"dev0.in2","to":"dev3.out0"},
		{"from":"dev0.in3","to":"dev2.out0"},
		{"from":"dev1.in0","to":"dev0.out0"},
		{"from":"dev1.in1","to":"dev6.out0"},
		{"from":"dev1.in2","to":"dev2.out0"},
		{"from":"dev1.in3","to":"dev3.out0"},
		{"from":"dev2.in0","to":"dev3.out0"},
		{"from":"dev4.in0","to":"dev5.out0"},
		{"from":"dev4.in1","to":"dev6.out0"},
		{"from":"dev4.in2","to":"dev2.out0"},
		{"from":"dev4.in3","to":"dev3.out0"},
		{"from":"dev5.in0","to":"dev1.out0"},
		{"from":"dev5.in1","to":"dev6.out0"},
		{"from":"dev5.in2","to":"dev2.out0"},
		{"from":"dev5.in3","to":"dev3.out0"},
		{"from":"dev7.in0","to":"dev0.out0"},
		{"from":"dev8.in0","to":"dev1.out0"},
		{"from":"dev9.in0","to":"dev5.out0"},
		{"from":"dev10.in0","to":"dev4.out0"}
		]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		counter.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		counter.toolbox.push({
			"type":"8BitRingCounter"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}

else{
	var obj={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"Joint"},
		{"type":"DC"},
		{"type":"LED"},
		{"type":"PushOff"},
		{"type":"Toggle"},
		{"type":"OSC"},
		{"type":"JK-FF"},
		{"type":"T-FF"},
		{"type":"D-FF-custom"},
		{"type":"DSO", "numInputs":8}
		],
		"devices":[
		],
		"connectors":[
		]
	};

	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		obj.toolbox[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	else
	{
		$("#freq").val("");
	}
	if(sessionStorage.getItem("8bitCounter_module"))
	{
		$("#counter").attr("checked", true);
		obj.toolbox.push({
			"type":"8bitCounter"
		});
	}

	if(sessionStorage.getItem("8bitRingCounter_module"))
	{
		$("#ringcounter").attr("checked", true);
		obj.toolbox.push({
			"type":"8BitRingCounter"
		});
	}

	var html=JSON.stringify(obj);
	document.querySelector(".simcir").innerHTML=html;
}


$("#counter").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("8bitCounter_module",1);
	}
	else
	{
		sessionStorage.removeItem("8bitCounter_module");
	}
});

$("#ringcounter").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("8bitRingCounter_module",1);
	}
	else
	{
		sessionStorage.removeItem("8bitRingCounter_module");
	}
});

$("#load_counter").click(function(event) {
	sessionStorage.setItem("8bitCounter",1);
	sessionStorage.removeItem("8bitRingCounter");
	location.reload();
});

$("#load_rcounter").click(function(event) {
	sessionStorage.setItem("8bitRingCounter",1);
	sessionStorage.removeItem("8bitCounter");
	location.reload();
});

$("#clear_workspace").click(function(event) {
	sessionStorage.removeItem("8bitRingCounter");
	sessionStorage.removeItem("8bitCounter");
	location.reload();
});

$("#freq").change(function(event) {
	sessionStorage.setItem("OSCfreq", parseInt(this.value,10));
});

$("#clear_settings").click(function(event) {
	sessionStorage.clear();
});