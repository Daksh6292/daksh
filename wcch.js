function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbxioYVne51HNcK3q_wmuIoDh37XM0gLVwcUuTrxZZ8QXNsbc6y1uuIQUUMPsY9_LGj_/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 function m(){
 $("#nextBtn").click();
document.getElementsByName("REMARKS")[0].value = x[28][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_R")[0].value = x[0][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_Y")[0].value = x[1][eq];
document.getElementsByName("VOLTAGE_VALUE_OF_B")[0].value = x[2][eq];
document.getElementsByName("CURRENT_VALUE_OF_R")[0].value = x[3][eq];
document.getElementsByName("CURRENT_VALUE_OF_Y")[0].value = x[4][eq];
document.getElementsByName("CURRENT_VALUE_OF_B")[0].value = x[5][eq];
if (x[6][eq].toUpperCase() =="UPPER GLASS") {
document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[1].checked = true;};

if (x[7][eq].toUpperCase() =="CHECKED") {
document.getElementsByName("ABNORMAL_NOISE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("ABNORMAL_NOISE_CHECK")[1].checked = true;};

if (x[8][eq].toUpperCase() =="CHECKED") {
document.getElementsByName("HEAT_SINK_TEMPERATURE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("HEAT_SINK_TEMPERATURE_CHECK")[1].checked = true;};

document.getElementsByName("EVAPORATOR_PRESSURE_CHECK")[0].value = x[9][eq];
document.getElementsByName("CONDENSER_PRESSURE_CHECK")[0].value = x[10][eq];
if (x[11][eq].toUpperCase() =="YES") {
document.getElementsByName("PERCENTAGE_LOADING_AND_RLA_SETTING_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("PERCENTAGE_LOADING_AND_RLA_SETTING_CHECK")[1].checked = true;};

document.getElementsByName("PERCENTAGE_LOADING_AND_RLA_SETTING_SET_FLA_VALUE")[0].value = x[12][eq];
document.getElementsByName("PERCENTAGE_LOADING_AND_RLA_SETTING_ACTUAL_FLA_VALUE")[0].value = x[13][eq];
if (x[14][eq].toUpperCase() =="YES") {
document.getElementsByName("APPROACH_STD_TEMPERATURE_FOR_CONDENSER_FOULING_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("APPROACH_STD_TEMPERATURE_FOR_CONDENSER_FOULING_CHECK")[1].checked = true;};

document.getElementsByName("SCREW_APPROACH_STD_TEMPERATURE_FOR_CONDENSER_FOULING_CHECK")[0].value = x[15][eq];
document.getElementsByName("CENTRI_APPROACH_STD_TEMPERATURE_FOR_CONDENSER_FOULING_CHECK")[0].value = x[16][eq];
if (x[17][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("STARTERS_CLEAN")[0].checked = true;} 
else
 {
document.getElementsByName("STARTERS_CLEAN")[1].checked = true;};

document.getElementsByName("OIL_HEATER_OPERATION_CHECK_VALUE")[0].value = x[18][eq];
document.getElementsByName("OIL_PUMP_DISCHARGE_PRESSURE_SCREW_OP_VALUE")[0].value = x[19][eq];
document.getElementsByName("OIL_PUMP_DISCHARGE_PRESSURE_CENTRI_DELTA_PR_VALUE")[0].value = x[20][eq];
document.getElementsByName("OIL_FILTER_PRESSURE_DROP_VALUE")[0].value = x[21][eq];
document.getElementsByName("MEASURE_AND_LOG_SUB_COOLING_VALUE")[0].value = x[22][eq];
if (x[23][eq].toUpperCase() =="DONE") {
document.getElementsByName("SOAP_SOLUTION_TEST_FOR_REFRIGERANT_LEAKAGE_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("SOAP_SOLUTION_TEST_FOR_REFRIGERANT_LEAKAGE_CHECK")[1].checked = true;};
}
function q(){
    m();
if (x[24][eq].toUpperCase() =="DONE") {
document.getElementsByName("OPERATION_SETTING_CALIBRATION_OF_SAFETY_CONTROLS_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("OPERATION_SETTING_CALIBRATION_OF_SAFETY_CONTROLS_CHECK")[1].checked = true;};

if (x[25][eq].toUpperCase() =="DONE") {
document.getElementsByName("CLEAN_AND_TIGHT_ELECTRICAL_CONNECTIONS_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("CLEAN_AND_TIGHT_ELECTRICAL_CONNECTIONS_CHECK")[1].checked = true;};
 }
 function hy(){
    q();
if (x[26][eq].toUpperCase() =="CHECKED") {
document.getElementsByName("ALL_WATER_STRAINERS_CLEAN")[0].checked = true;} 
else
 {
document.getElementsByName("ALL_WATER_STRAINERS_CLEAN")[1].checked = true;};

if (x[27][eq].toUpperCase() =="CHECKED") {
document.getElementsByName("CORROSION_AREA_REPAINT_AND_CLEAN")[0].checked = true;} 
else
 {
document.getElementsByName("CORROSION_AREA_REPAINT_AND_CLEAN")[1].checked = true;};

}
 if (session == "MONTHLY") {
 document.getElementsByName("DONE_DATE")[0].value = x[29][eq];
 m();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AStoString().toUpperCase() == "TRUE"){$("#submit").click();}
 }
 if (session == "QUARTERLY") {
  document.getElementsByName("DONE_DATE")[0].value = x[30][eq];
 q();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}

 }

if (session == "HALF-YEARLY") {
 document.getElementsByName("DONE_DATE")[0].value = x[31][eq];
  hy();
 void (document.getElementById('spinner').style.display = 'none');
 if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
    }
    if (session == "YEARLY") {
        document.getElementsByName("DONE_DATE")[0].value = x[32][eq];
         y();
        void (document.getElementById('spinner').style.display = 'none');
        if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
           }
    
}};myf()
