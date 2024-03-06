function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbx8FZG7j5Sf8AFyPVTHI2mR4LMxaqjrho-uCc5Z8kDRf6LBohPasdyMuEssKbf0Keigsw/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 
 function m(){
 $("#nextBtn").click();
document.getElementsByName("CHK_SELECTOR_SWITCH_LOCAL_REMOTE")[0].value = x["CHK_SELECTOR_SWITCH_LOCAL_REMOTE"][eq];
if (x["CHK_INCOM_VOLT_THREE_PHASE"][eq].toUpperCase() =="CHECKED"||x["CHK_INCOM_VOLT_THREE_PHASE"][eq].toUpperCase() =="DONE"||x["CHK_INCOM_VOLT_THREE_PHASE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_INCOM_VOLT_THREE_PHASE")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_INCOM_VOLT_THREE_PHASE")[1].checked = true;};

if (x["CHK_CONTROL_SUPPLY"][eq].toUpperCase() =="CHECKED"||x["CHK_CONTROL_SUPPLY"][eq].toUpperCase() =="DONE"||x["CHK_CONTROL_SUPPLY"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_CONTROL_SUPPLY")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_CONTROL_SUPPLY")[1].checked = true;};

if (x["CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE"][eq].toUpperCase() =="CHECKED"||x["CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE"][eq].toUpperCase() =="DONE"||x["CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE")[1].checked = true;};

if (x["CHK_RELAY_STATUS"][eq].toUpperCase() =="CHECKED"||x["CHK_RELAY_STATUS"][eq].toUpperCase() =="DONE"||x["CHK_RELAY_STATUS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_RELAY_STATUS")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_RELAY_STATUS")[1].checked = true;};

if (x["CHK_ABNORMAL_NOISE"][eq].toUpperCase() =="CHECKED"||x["CHK_ABNORMAL_NOISE"][eq].toUpperCase() =="DONE"||x["CHK_ABNORMAL_NOISE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_ABNORMAL_NOISE")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_ABNORMAL_NOISE")[1].checked = true;};

if (x["BURNING_SMELL_CHECK"][eq].toUpperCase() =="CHECKED"||x["BURNING_SMELL_CHECK"][eq].toUpperCase() =="DONE"||x["BURNING_SMELL_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("BURNING_SMELL_CHECK")[0].checked = true;} 
else
 {
document.getElementsByName("BURNING_SMELL_CHECK")[1].checked = true;};

if (x["KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED"][eq].toUpperCase() =="CHECKED"||x["KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED"][eq].toUpperCase() =="DONE"||x["KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED")[0].checked = true;} 
else
 {
document.getElementsByName("KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED")[1].checked = true;};

if (x["CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE"][eq].toUpperCase() =="CHECKED"||x["CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE"][eq].toUpperCase() =="DONE"||x["CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE")[1].checked = true;};

if (x["INDICATION_LAMP_CHK"][eq].toUpperCase() =="CHECKED"||x["INDICATION_LAMP_CHK"][eq].toUpperCase() =="DONE"||x["INDICATION_LAMP_CHK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("INDICATION_LAMP_CHK")[0].checked = true;} 
else
 {
document.getElementsByName("INDICATION_LAMP_CHK")[1].checked = true;};

if (x["CLN_OUTSIDE_PANEL"][eq].toUpperCase() =="CHECKED"||x["CLN_OUTSIDE_PANEL"][eq].toUpperCase() =="DONE"||x["CLN_OUTSIDE_PANEL"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CLN_OUTSIDE_PANEL")[0].checked = true;} 
else
 {
document.getElementsByName("CLN_OUTSIDE_PANEL")[1].checked = true;};

if (x["CHK_FAN_THERMOSTATE_OPERATION"][eq].toUpperCase() =="CHECKED"||x["CHK_FAN_THERMOSTATE_OPERATION"][eq].toUpperCase() =="DONE"||x["CHK_FAN_THERMOSTATE_OPERATION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_FAN_THERMOSTATE_OPERATION")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_FAN_THERMOSTATE_OPERATION")[1].checked = true;};

if (x["CHK_MEASURING_INSTRUMENT_ENERGY_METER"][eq].toUpperCase() =="CHECKED"||x["CHK_MEASURING_INSTRUMENT_ENERGY_METER"][eq].toUpperCase() =="DONE"||x["CHK_MEASURING_INSTRUMENT_ENERGY_METER"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_MEASURING_INSTRUMENT_ENERGY_METER")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_MEASURING_INSTRUMENT_ENERGY_METER")[1].checked = true;};

}
 function q(){m();
    if (x["CHK_ATS_SWITCH"][eq].toUpperCase() =="CHECKED"||x["CHK_ATS_SWITCH"][eq].toUpperCase() =="DONE"||x["CHK_ATS_SWITCH"][eq].toUpperCase() =="CLEAN") {
        document.getElementsByName("CHK_ATS_SWITCH")[0].checked = true;} 
        else
         {
        document.getElementsByName("CHK_ATS_SWITCH")[1].checked = true;};
    if (x["CHK_NEUTRAL_LINK_CONN_TIGHTNESS"][eq].toUpperCase() =="CHECKED"||x["CHK_NEUTRAL_LINK_CONN_TIGHTNESS"][eq].toUpperCase() =="DONE"||x["CHK_MEASURING_INSTRUMENT_ENERGY_METER"][eq].toUpperCase() =="CLEAN") {
            document.getElementsByName("CHK_NEUTRAL_LINK_CONN_TIGHTNESS")[0].checked = true;} 
        else
            {
        document.getElementsByName("CHK_NEUTRAL_LINK_CONN_TIGHTNESS")[1].checked = true;};
    
 }
 function hy(){q();
}
 function y(){hy();
}
 document.getElementsByName("REMARKS")[0].value = x["REMARKS"][eq];

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
