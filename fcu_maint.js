function myf() {
var data = new XMLHttpRequest();
data.open("GET","https://script.google.com/macros/s/AKfycbxcZSxhSmMGNIUIf5ELx7N-dNisrziaGq3CPoAGm921cKmDqyan4vCbKfuknT5iYdt-/exec",true);
data.send();
data.onload = function my() {
var x = JSON.parse(data.responseText);
var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
function w(){
$("#nextBtn").click();

if (x["ABNORMAL_SOUND_VIBRN_CHECK"][eq].toUpperCase() =="CHECKED"||x["ABNORMAL_SOUND_VIBRN_CHECK"][eq].toUpperCase() =="DONE"||x["ABNORMAL_SOUND_VIBRN_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[0].checked = true;}
else
{
document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[1].checked = true;};

if (x["ANY_LEAKAGE_CHECK"][eq].toUpperCase() =="CHECKED"||x["ANY_LEAKAGE_CHECK"][eq].toUpperCase() =="DONE"||x["ANY_LEAKAGE_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ANY_LEAKAGE_CHECK")[0].checked = true;}
else
{
document.getElementsByName("ANY_LEAKAGE_CHECK")[1].checked = true;};

if (x["DRAIN_BLOCKAGE_CHECK"][eq].toUpperCase() =="CHECKED"||x["DRAIN_BLOCKAGE_CHECK"][eq].toUpperCase() =="DONE"||x["DRAIN_BLOCKAGE_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[0].checked = true;}
else
{
document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[1].checked = true;};

if (x["AIR_FILTERS_CLEANING_IF_REQR"][eq].toUpperCase() =="CHECKED"||x["AIR_FILTERS_CLEANING_IF_REQR"][eq].toUpperCase() =="DONE"||x["AIR_FILTERS_CLEANING_IF_REQR"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[0].checked = true;}
else
{
document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[1].checked = true;};

if (x["THREE_SPEED_SWITCH_CHECK_AND_REPAIR"][eq].toUpperCase() =="CHECKED"||x["THREE_SPEED_SWITCH_CHECK_AND_REPAIR"][eq].toUpperCase() =="DONE"||x["THREE_SPEED_SWITCH_CHECK_AND_REPAIR"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[0].checked = true;}
else
{
document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[1].checked = true;};

}
function m(){w();
if (x["CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE"][eq].toUpperCase() =="CHECKED"||x["CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE"][eq].toUpperCase() =="DONE"||x["CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE")[0].checked = true;}
else
{
document.getElementsByName("CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE")[1].checked = true;};

if (x["FAN_BELT_TENSION_CHECK_AND_REPAIR"][eq].toUpperCase() =="CHECKED"||x["FAN_BELT_TENSION_CHECK_AND_REPAIR"][eq].toUpperCase() =="DONE"||x["FAN_BELT_TENSION_CHECK_AND_REPAIR"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("FAN_BELT_TENSION_CHECK_AND_REPAIR")[0].checked = true;}
else
{
document.getElementsByName("FAN_BELT_TENSION_CHECK_AND_REPAIR")[1].checked = true;};

if (x["IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR"][eq].toUpperCase() =="CHECKED"||x["IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR"][eq].toUpperCase() =="DONE"||x["IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR")[0].checked = true;}
else
{
document.getElementsByName("IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR")[1].checked = true;};

if (x["MOTOR_FAN_CASING_LOOSENESS_CHECK"][eq].toUpperCase() =="CHECKED"||x["MOTOR_FAN_CASING_LOOSENESS_CHECK"][eq].toUpperCase() =="DONE"||x["MOTOR_FAN_CASING_LOOSENESS_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("MOTOR_FAN_CASING_LOOSENESS_CHECK")[0].checked = true;}
else
{
document.getElementsByName("MOTOR_FAN_CASING_LOOSENESS_CHECK")[1].checked = true;};

if (x["COOLING_COILS_DUST_DIRT_CLEANING_AND_INSPECTION"][eq].toUpperCase() =="CHECKED"||x["COOLING_COILS_DUST_DIRT_CLEANING_AND_INSPECTION"][eq].toUpperCase() =="DONE"||x["COOLING_COILS_DUST_DIRT_CLEANING_AND_INSPECTION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("COOLING_COILS_DUST_DIRT_CLEANING_AND_INSPECTION")[0].checked = true;}
else
{
document.getElementsByName("COOLING_COILS_DUST_DIRT_CLEANING_AND_INSPECTION")[1].checked = true;};

}
function q(){m();
if (x["Y_STRAINER_CLEANING"][eq].toUpperCase() =="CHECKED"||x["Y_STRAINER_CLEANING"][eq].toUpperCase() =="DONE"||x["Y_STRAINER_CLEANING"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("Y_STRAINER_CLEANING")[0].checked = true;}
else
{
document.getElementsByName("Y_STRAINER_CLEANING")[1].checked = true;};

if (x["THERMOSTAT_FCU_TCV_MALFNCTN_CHECK"][eq].toUpperCase() =="CHECKED"||x["THERMOSTAT_FCU_TCV_MALFNCTN_CHECK"][eq].toUpperCase() =="DONE"||x["THERMOSTAT_FCU_TCV_MALFNCTN_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("THERMOSTAT_FCU_TCV_MALFNCTN_CHECK")[0].checked = true;}
else
{
document.getElementsByName("THERMOSTAT_FCU_TCV_MALFNCTN_CHECK")[1].checked = true;};

}
function hy(){q();
if (x["BLOWER_MOTOR_UNIT_CLEANING_AND_LUBRICATION"][eq].toUpperCase() =="CHECKED"||x["BLOWER_MOTOR_UNIT_CLEANING_AND_LUBRICATION"][eq].toUpperCase() =="DONE"||x["BLOWER_MOTOR_UNIT_CLEANING_AND_LUBRICATION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("BLOWER_MOTOR_UNIT_CLEANING_AND_LUBRICATION")[0].checked = true;}
else
{
document.getElementsByName("BLOWER_MOTOR_UNIT_CLEANING_AND_LUBRICATION")[1].checked = true;};

if (x["VIBRATION_VALUE_COMPARISON_AND_RECTIFICATION"][eq].toUpperCase() =="CHECKED"||x["VIBRATION_VALUE_COMPARISON_AND_RECTIFICATION"][eq].toUpperCase() =="DONE"||x["VIBRATION_VALUE_COMPARISON_AND_RECTIFICATION"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("VIBRATION_VALUE_COMPARISON_AND_RECTIFICATION")[0].checked = true;}
else
{
document.getElementsByName("VIBRATION_VALUE_COMPARISON_AND_RECTIFICATION")[1].checked = true;};

if (x["ELECT_CONN_CONTROL_WIRES_AND_MOTOR_TERMINAL_CHECK"][eq].toUpperCase() =="CHECKED"||x["ELECT_CONN_CONTROL_WIRES_AND_MOTOR_TERMINAL_CHECK"][eq].toUpperCase() =="DONE"||x["ELECT_CONN_CONTROL_WIRES_AND_MOTOR_TERMINAL_CHECK"][eq].toUpperCase() =="CLEAN") {
document.getElementsByName("ELECT_CONN_CONTROL_WIRES_AND_MOTOR_TERMINAL_CHECK")[0].checked = true;}
else
{
document.getElementsByName("ELECT_CONN_CONTROL_WIRES_AND_MOTOR_TERMINAL_CHECK")[1].checked = true;};

}
function y(){hy();}

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
