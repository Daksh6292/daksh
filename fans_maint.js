function myf(){        
var data = new XMLHttpRequest();        
data.open("GET", "https://script.google.com/macros/s/AKfycbxLGIuMepv0KmkjffgkpCRrItgvfTis09tAUc-hAKo0FpStnVD0F4LJrjBjExywTbQ1Dw/exec", true);        
data.send();
data.onload= function my(){
var x = JSON.parse(data.responseText); 
var eq= document.getElementsByName("EQUIPMENT_ID")[0].value;
var session= document.getElementsByName("MAINTENANCE_TYPE")[0].value;
if(session== "MONTHLY") {    
  document.getElementsByName("DONE_DATE")[0].value=x[8][eq];
  $("#nextBtn").click();
    if (x[0][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[0].checked=true;
  } else{
    document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[1].checked=true;
  };

  if (x[1][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[0].checked=true;
  } else{
    document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[1].checked=true;
  };

  if (x[2][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[0].checked=true;
  } else{
    document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[1].checked=true;
  };

  if (x[3][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[0].checked=true;
  } else{
    document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[1].checked=true;
  };

  if (x[4][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[0].checked=true;
  } else{
    document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[1].checked=true;
  };

  if (x[5][eq].toUpperCase()=="CHECKED") { 
  document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[0].checked=true;
  } else{
    document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[1].checked=true;
  };
  document.getElementsByName("REMARKS")[0].value=x[6][eq];
}
else if(session== "WEEKLY"){ 
  document.getElementsByName("DONE_DATE")[0].value=x[7][eq];
  $("#nextBtn").click();    
  if (x[0][eq].toUpperCase()=="CHECKED") { 
document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[0].checked=true;
} else{
  document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[1].checked=true;
};

if (x[1][eq].toUpperCase()=="CHECKED") { 
document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[0].checked=true;
} else{
  document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[1].checked=true;
};

if (x[2][eq].toUpperCase()=="CHECKED") { 
document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[0].checked=true;
} else{
  document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[1].checked=true;
};document.getElementsByName("REMARKS")[0].value=x[6][eq];
}
}   
};    
myf();
