function myf() {
 var data = new XMLHttpRequest();
 data.open("GET","https://script.google.com/macros/s/AKfycbxKzAmw60C5e6xndrdFHee6PKe5QeURLU4VQ7EysU_CXDMeFBE9SmzBzwgj3Gmw42-G/exec",true);
 data.send();
 data.onload = function my() {
 var x = JSON.parse(data.responseText);
 var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
 var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
 function w(){
 $("#nextBtn").click();
document.getElementsByName("CHK_PRESSURE_GUAGE_RATING")[0].value = x["CHK_PRESSURE_GUAGE_RATING"][eq];
document.getElementsByName("CHK_VOLTAGE")[0].value = x["CHK_VOLTAGE"][eq];
document.getElementsByName("CHK_CURRENT")[0].value = x["CHK_CURRENT"][eq];
if (x["CHK_LEAKS"][eq].toUpperCase() =="CHECKED"||x["CHK_LEAKS"][eq].toUpperCase() =="DONE"||x["CHK_LEAKS"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_LEAKS")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_LEAKS")[1].checked = true;};

if (x["CHK_UNUSUAL_VIBRATION"][eq].toUpperCase() =="CHECKED"||x["CHK_UNUSUAL_VIBRATION"][eq].toUpperCase() =="DONE"||x["CHK_UNUSUAL_VIBRATION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_UNUSUAL_VIBRATION")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_UNUSUAL_VIBRATION")[1].checked = true;};

if (x["HAND_TEST_FOR_TEMPERATURE_RISE"][eq].toUpperCase() =="CHECKED"||x["HAND_TEST_FOR_TEMPERATURE_RISE"][eq].toUpperCase() =="DONE"||x["HAND_TEST_FOR_TEMPERATURE_RISE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("HAND_TEST_FOR_TEMPERATURE_RISE")[0].checked = true;} 
else
 {
document.getElementsByName("HAND_TEST_FOR_TEMPERATURE_RISE")[1].checked = true;};

}
 function m(){w();
if (x["CHK_STUDS_FOR_PUMP_ALIGNMENT"][eq].toUpperCase() =="CHECKED"||x["CHK_STUDS_FOR_PUMP_ALIGNMENT"][eq].toUpperCase() =="DONE"||x["CHK_STUDS_FOR_PUMP_ALIGNMENT"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHK_STUDS_FOR_PUMP_ALIGNMENT")[0].checked = true;} 
else
 {
document.getElementsByName("CHK_STUDS_FOR_PUMP_ALIGNMENT")[1].checked = true;};

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