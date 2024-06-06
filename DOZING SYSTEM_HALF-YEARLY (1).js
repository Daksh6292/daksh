function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbxraed1GO1eUeLBlALMWCvi-nQR9YdaVLJ2GOAdEE4j-SiMMoTWcjwPehbKsuCTRnyE/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = "DOSING PUMPS";
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 
 function m(){
 $("#nextBtn").click();
document.getElementsByName("CHECK_MAINTAIN_WATER_PARAMETER_RO")[0].value = x["CHECK_MAINTAIN_WATER_PARAMETER_RO"][eq];
document.getElementsByName("CHECK_MAINTAIN_WATER_PARAMETER_CDW")[0].value = x["CHECK_MAINTAIN_WATER_PARAMETER_CDW"][eq];
document.getElementsByName("VISUAL_CHECK_LEAK_DAMAGE_RO")[0].value = x["VISUAL_CHECK_LEAK_DAMAGE_RO"][eq];
document.getElementsByName("VISUAL_CHECK_LEAK_DAMAGE_CDW")[0].value = x["VISUAL_CHECK_LEAK_DAMAGE_CDW"][eq];
document.getElementsByName("CLEAN_CHEMICAL_DOSING_CONTAINER_RO")[0].value = x["CLEAN_CHEMICAL_DOSING_CONTAINER_RO"][eq];
document.getElementsByName("CLEAN_CHEMICAL_DOSING_CONTAINER_CDW")[0].value = x["CLEAN_CHEMICAL_DOSING_CONTAINER_CDW"][eq];
document.getElementsByName("CHECK_WORKING_OF_DOSING_PUMP_RO")[0].value = x["CHECK_WORKING_OF_DOSING_PUMP_RO"][eq];
document.getElementsByName("CHECK_WORKING_OF_DOSING_PUMP_CDW")[0].value = x["CHECK_WORKING_OF_DOSING_PUMP_CDW"][eq];
document.getElementsByName("CHECK_PH_TD_SENSOR_CONTROLLER_RO")[0].value = x["CHECK_PH_TD_SENSOR_CONTROLLER_RO"][eq];
document.getElementsByName("CHECK_PH_TD_SENSOR_CONTROLLER_CDW")[0].value = x["CHECK_PH_TD_SENSOR_CONTROLLER_CDW"][eq];
document.getElementsByName("CHECK_ALL_ELECTRICAL_CONN_SOCKET_WIRE_RO")[0].value = x["CHECK_ALL_ELECTRICAL_CONN_SOCKET_WIRE_RO"][eq];
document.getElementsByName("CHECK_ALL_ELECTRICAL_CONN_SOCKET_WIRE_CDW")[0].value = x["CHECK_ALL_ELECTRICAL_CONN_SOCKET_WIRE_CDW"][eq];
document.getElementsByName("CHECK_SUFFICIENT_DOSING_CHECMICAL_STOCK_RO")[0].value = x["CHECK_SUFFICIENT_DOSING_CHECMICAL_STOCK_RO"][eq];
document.getElementsByName("CHECK_SUFFICIENT_DOSING_CHECMICAL_STOCK_CDW")[0].value = x["CHECK_SUFFICIENT_DOSING_CHECMICAL_STOCK_CDW"][eq];
document.getElementsByName("CHECK_PUMP_SMOOTH_OPERATION_RO")[0].value = x["CHECK_PUMP_SMOOTH_OPERATION_RO"][eq];
document.getElementsByName("CHECK_PUMP_SMOOTH_OPERATION_CDW")[0].value = x["CHECK_PUMP_SMOOTH_OPERATION_CDW"][eq];
document.getElementsByName("CHECK_SENSOR_WORKING_RO")[0].value = x["CHECK_SENSOR_WORKING_RO"][eq];
document.getElementsByName("CHECK_SENSOR_WORKING_CDW")[0].value = x["CHECK_SENSOR_WORKING_CDW"][eq];
document.getElementsByName("CHECK_NOISE_VIBRATION_RO")[0].value = x["CHECK_NOISE_VIBRATION_RO"][eq];
document.getElementsByName("CHECK_NOISE_VIBRATION_CDW")[0].value = x["CHECK_NOISE_VIBRATION_CDW"][eq];
document.getElementsByName("CHECK_RELAY_WATER_LEVEL_SWITCH_RO")[0].value = x["CHECK_RELAY_WATER_LEVEL_SWITCH_RO"][eq];
document.getElementsByName("CHECK_RELAY_WATER_LEVEL_SWITCH_CDW")[0].value = x["CHECK_RELAY_WATER_LEVEL_SWITCH_CDW"][eq];
}
 function q(){m();
 }
 function hy(){q();
}
 function y(){hy();
}
 document.getElementsByName("REMARKS")[0].value = x["REMARKS"][eq];

if (session == "MONTHLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Date"][eq]);
 m();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
 }
 if (session == "QUARTERLY") {
  document.getElementsByName("DONE_DATE")[0].value = dfun(x["Date"][eq]);
 q();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}

 }

if (session == "HALF-YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Date"][eq]);
  hy();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
 }
 if (session == "YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Date"][eq]);
  y();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}  
}}};myf();function dfun(df){var date = new Date(df);var datval = date.toISOString().substring(0,10);return datval}