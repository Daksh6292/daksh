function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbzBlvChW2W11E7I8OzV0M3Zm7JMT1NmRgMBdmDchAINMqG9B_ny1XPuZSi4b5XCAEWS/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 function w(){
 $("#nextBtn").click();
document.getElementsByName("VOLTAGE_VALUE_OF_R")[0].value = x["VOLTAGE_VALUE_OF_R"][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_Y")[0].value = x["VOLTAGE_VALUE_OF_Y"][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_B")[0].value = x["VOLTAGE_VALUE_OF_B"][eq];
document.getElementsByName("CURRENT_VALUE_OF_R")[0].value = x["CURRENT_VALUE_OF_R"][eq];
document.getElementsByName("CURRENT_VALUE_OF_Y")[0].value = x["CURRENT_VALUE_OF_Y"][eq];
document.getElementsByName("CURRENT_VALUE_OF_B")[0].value = x["CURRENT_VALUE_OF_B"][eq];
if (x["MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK"][eq].toUpperCase() =="CHECKED"||x["MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK"][eq].toUpperCase() =="DONE"||x["MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK")[1].checked = true;};

if (x["ABNORMAL_NOISE_AND_VIBRATION_CHECK"][eq].toUpperCase() =="CHECKED"||x["ABNORMAL_NOISE_AND_VIBRATION_CHECK"][eq].toUpperCase() =="DONE"||x["ABNORMAL_NOISE_AND_VIBRATION_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ABNORMAL_NOISE_AND_VIBRATION_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("ABNORMAL_NOISE_AND_VIBRATION_CHECK")[1].checked = true;};

if (x["VISUALLY_LEAKAGE_CHECK"][eq].toUpperCase() =="CHECKED"||x["VISUALLY_LEAKAGE_CHECK"][eq].toUpperCase() =="DONE"||x["VISUALLY_LEAKAGE_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("VISUALLY_LEAKAGE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("VISUALLY_LEAKAGE_CHECK")[1].checked = true;};

if (x["HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK"][eq].toUpperCase() =="CHECKED"||x["HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK"][eq].toUpperCase() =="DONE"||x["HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK")[1].checked = true;};

}
 function m(){w();
if (x["SHAFT_SEALING_CHECK"][eq].toUpperCase() =="CHECKED"||x["SHAFT_SEALING_CHECK"][eq].toUpperCase() =="DONE"||x["SHAFT_SEALING_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("SHAFT_SEALING_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("SHAFT_SEALING_CHECK")[1].checked = true;};

if (x["MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK"][eq].toUpperCase() =="CHECKED"||x["MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK"][eq].toUpperCase() =="DONE"||x["MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK")[1].checked = true;};

if (x["ISOLATION_OF_ALL_VALVES_LEAKS_CHECK"][eq].toUpperCase() =="CHECKED"||x["ISOLATION_OF_ALL_VALVES_LEAKS_CHECK"][eq].toUpperCase() =="DONE"||x["ISOLATION_OF_ALL_VALVES_LEAKS_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ISOLATION_OF_ALL_VALVES_LEAKS_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("ISOLATION_OF_ALL_VALVES_LEAKS_CHECK")[1].checked = true;};

 }
 function q(){m();
 }
 function hy(){q();
}
 function y(){hy();
}
 document.getElementsByName("REMARKS")[0].value = x["REMARKS"][eq];

 if (session == "WEEKlY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Wdate"][eq]);
 w();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
}
if (session == "MONTHLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Mdate"][eq]);
 m();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
 }
 if (session == "QUARTERLY") {
  document.getElementsByName("DONE_DATE")[0].value = dfun(x["Qdate"][eq]);
 q();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}

 }

if (session == "HALF-YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["HYdate"][eq]);
  hy();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
 }
 if (session == "YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Ydate"][eq]);
  y();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}   
}}};myf();function dfun(df){var date = new Date(df);var datval = date.toISOString().substring(0,10);return datval}