function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbzaBpGkGgoOuZsBGdnG4hkFqVm4BWP4PvDeBRKCMq8Y_d8bYiZeUkviI43_-9XeP8qM3A/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 function w(){
 $("#nextBtn").click();
if (x["CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE"][eq].toUpperCase() =="CHECKED"||x["CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE"][eq].toUpperCase() =="DONE"||x["CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[1].checked = true;};

if (x["CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE"][eq].toUpperCase() =="CHECKED"||x["CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE"][eq].toUpperCase() =="DONE"||x["CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[1].checked = true;};

if (x["CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED"][eq].toUpperCase() =="CHECKED"||x["CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED"][eq].toUpperCase() =="DONE"||x["CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[0].checked = true;} 
else
 {
document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[1].checked = true;};

}
 function m(){w();
if (x["CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE"][eq].toUpperCase() =="CHECKED"||x["CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE"][eq].toUpperCase() =="DONE"||x["CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[1].checked = true;};

if (x["EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS"][eq].toUpperCase() =="CHECKED"||x["EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS"][eq].toUpperCase() =="DONE"||x["EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[0].checked = true;} 
else
 {
document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[1].checked = true;};

if (x["CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE"][eq].toUpperCase() =="CHECKED"||x["CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE"][eq].toUpperCase() =="DONE"||x["CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[1].checked = true;};

 }
 function q(){m();
if (x["CHECK_OPERATION_OF_DAMPERS"][eq].toUpperCase() =="CHECKED"||x["CHECK_OPERATION_OF_DAMPERS"][eq].toUpperCase() =="DONE"||x["CHECK_OPERATION_OF_DAMPERS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_OPERATION_OF_DAMPERS")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_OPERATION_OF_DAMPERS")[1].checked = true;};

if (x["CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS"][eq].toUpperCase() =="CHECKED"||x["CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS"][eq].toUpperCase() =="DONE"||x["CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS")[1].checked = true;};

if (x["ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING"][eq].toUpperCase() =="CHECKED"||x["ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING"][eq].toUpperCase() =="DONE"||x["ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING")[0].checked = true;} 
else
 {
document.getElementsByName("ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING")[1].checked = true;};

if (x["CHECK_CONDITION_OF_FLEXIBLE_CANVAS"][eq].toUpperCase() =="CHECKED"||x["CHECK_CONDITION_OF_FLEXIBLE_CANVAS"][eq].toUpperCase() =="DONE"||x["CHECK_CONDITION_OF_FLEXIBLE_CANVAS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_CONDITION_OF_FLEXIBLE_CANVAS")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_CONDITION_OF_FLEXIBLE_CANVAS")[1].checked = true;};

 }
 function hy(){q();
if (x["CHECK_PROPER_WORKING_EPB"][eq].toUpperCase() =="CHECKED"||x["CHECK_PROPER_WORKING_EPB"][eq].toUpperCase() =="DONE"||x["CHECK_PROPER_WORKING_EPB"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_PROPER_WORKING_EPB")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_PROPER_WORKING_EPB")[1].checked = true;};

if (x["CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE"][eq].toUpperCase() =="CHECKED"||x["CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE"][eq].toUpperCase() =="DONE"||x["CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE")[1].checked = true;};

if (x["CHECK_PROPER_WORKING_OF_DPS"][eq].toUpperCase() =="CHECKED"||x["CHECK_PROPER_WORKING_OF_DPS"][eq].toUpperCase() =="DONE"||x["CHECK_PROPER_WORKING_OF_DPS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_PROPER_WORKING_OF_DPS")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_PROPER_WORKING_OF_DPS")[1].checked = true;};

if (x["CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR"][eq].toUpperCase() =="CHECKED"||x["CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR"][eq].toUpperCase() =="DONE"||x["CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR")[1].checked = true;};

if (x["CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER"][eq].toUpperCase() =="CHECKED"||x["CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER"][eq].toUpperCase() =="DONE"||x["CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER")[1].checked = true;};

if (x["CHECK_THE_EARTHING_CONNECTION"][eq].toUpperCase() =="CHECKED"||x["CHECK_THE_EARTHING_CONNECTION"][eq].toUpperCase() =="DONE"||x["CHECK_THE_EARTHING_CONNECTION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_THE_EARTHING_CONNECTION")[0].checked = true;} 
else
 {
document.getElementsByName("CHECK_THE_EARTHING_CONNECTION")[1].checked = true;};

}
 function y(){hy();
}
 document.getElementsByName("REMARKS")[0].value = x["REMARKS"][eq];

 if (session == "WEEKlY") {
 document.getElementsByName("DONE_DATE")[0].value = dfun(x["Date"][eq]);
 w();
 void (document.getElementById('spinner').style.display = 'none');
 if (x["as"][0]== true){$("#submit").click();}
}
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
