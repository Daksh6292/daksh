function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbxaCjwHUadkBSA7Q7siJ-lcr926s_QSChjbatbJHZydX_2VOWWrC5sDeyTnQuXhvx1EaQ/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 function w(){
 $("#nextBtn").click();
document.getElementsByName("REMARKS")[0].value = x[18][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_R")[0].value = x[0][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_Y")[0].value = x[1][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_B")[0].value = x[2][eq];
document.getElementsByName("CURRENT_VALUE_OF_R")[0].value = x[3][eq];
document.getElementsByName("CURRENT_VALUE_OF_Y")[0].value = x[4][eq];
document.getElementsByName("CURRENT_VALUE_OF_B")[0].value = x[5][eq];
if (x[6][eq].toUpperCase() =="CHECKED"||x[6][eq].toUpperCase() =="DONE"||x[6][eq].toUpperCase() =="CLEAN"||x[6][eq].toUpperCase() =="OK") {
document.getElementsByName("ABNORMAL_NOISE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("ABNORMAL_NOISE_CHECK")[1].checked = true;};

document.getElementsByName("EVAPORATOR_AND_CONDENSER_TEMPERATURE")[0].value = x[7][eq];
if (x[8][eq].toUpperCase() =="CHECKED"||x[8][eq].toUpperCase() =="DONE"||x[8][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[1].checked = true;};

if (x[9][eq].toUpperCase() =="CHECKED"||x[9][eq].toUpperCase() =="DONE"||x[9][eq].toUpperCase() =="CLEAN"||x[9][eq].toUpperCase() =="OK") {
document.getElementsByName("VALVE_SIGHT_GLASS_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("VALVE_SIGHT_GLASS_CHECK")[1].checked = true;};

if (x[10][eq].toUpperCase() =="CHECKED"||x[10][eq].toUpperCase() =="DONE"||x[10][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CONDENSER_COIL_CLEAN")[0].checked = true;} 
else
 {
document.getElementsByName("CONDENSER_COIL_CLEAN")[1].checked = true;};
 }
function m(){w();
if (x[11][eq].toUpperCase() =="CHECKED"||x[11][eq].toUpperCase() =="DONE"||x[11][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("OIL_LEVEL_AND_HEATER_OPERATION_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("OIL_LEVEL_AND_HEATER_OPERATION_CHECK")[1].checked = true;};

if (x[12][eq].toUpperCase() =="CHECKED"||x[12][eq].toUpperCase() =="DONE"||x[12][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("SCR_CHILLER_LOG_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("SCR_CHILLER_LOG_CHECK")[1].checked = true;};

if (x[13][eq].toUpperCase() =="CHECKED"||x[13][eq].toUpperCase() =="DONE"||x[13][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("STARTERS_CLEANING")[0].checked = true;} 
else
 {
document.getElementsByName("STARTERS_CLEANING")[1].checked = true;};

if (x[14][eq].toUpperCase() =="CHECKED"||x[14][eq].toUpperCase() =="DONE"||x[14][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("SYSTEM_SUPERHEAT_SUBCOOLING_AND_PRESURES_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("SYSTEM_SUPERHEAT_SUBCOOLING_AND_PRESURES_CHECK")[1].checked = true;};
 }
 function q(){m();
document.getElementsByName("OPERATION_SETING_CALIBRATION_OF_SAFETY_CONTROL_CHECK")[0].value = x[15][eq];
if (x[16][eq].toUpperCase() =="CHECKED"||x[16][eq].toUpperCase() =="DONE"||x[16][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ELECTRICAL_CONNECTION_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("ELECTRICAL_CONNECTION_CHECK")[1].checked = true;};

if (x[17][eq].toUpperCase() =="CHECKED"||x[17][eq].toUpperCase() =="DONE"||x[17][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ALL_WATER_STRAINERS_CLEAN")[0].checked = true;} 
else
 {
document.getElementsByName("ALL_WATER_STRAINERS_CLEAN")[1].checked = true;};

}
 if (session == "WEEKlY") {
 document.getElementsByName("DONE_DATE")[0].value = x[19][eq];
 w();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AStoString().toUpperCase() == "TRUE"){$("#submit").click();}
}
if (session == "MONTHLY") {
 document.getElementsByName("DONE_DATE")[0].value = x[20][eq];
 m();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AStoString().toUpperCase() == "TRUE"){$("#submit").click();}
 }
 if (session == "QUARTERLY") {
  document.getElementsByName("DONE_DATE")[0].value = x[21][eq];
 q();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}

 }

if (session == "HALF-YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = x[22][eq];
  hy();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
 }
 if (session == "YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = x[23][eq];
  y();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}   
}}};myf()
