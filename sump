function myf() {
    var data = new XMLHttpRequest();
    data.open("GET","https://script.google.com/macros/s/AKfycbzU6tu1i8akfVJpsMBzQb99_Y8d_0UfL_1-WOuQQUrl7q7sXh7EqTdk5A7a46UwsOyBNA/exec",true);
    data.send();
    data.onload = function my() {
    var x = JSON.parse(data.responseText);
    var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
    var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
    function w(){
        $("#nextBtn").click();
       if (x["CHK_FEEDER_SUPPLY"][eq].toUpperCase() =="AVAILABLE") {
       document.getElementsByName("CHK_FEEDER_SUPPLY")[0].checked = true;} 
       else
        {
       document.getElementsByName("CHK_FEEDER_SUPPLY")[1].checked = true;};
       
       if (x["CHK_LEVEL_ON_BMS_WORKSTATION"][eq].toUpperCase() =="LOW") {
       document.getElementsByName("CHK_LEVEL_ON_BMS_WORKSTATION")[0].checked = true;} 

       else if (x["CHK_LEVEL_ON_BMS_WORKSTATION"][eq].toUpperCase() ==" MEDIUM") {
        document.getElementsByName("CHK_LEVEL_ON_BMS_WORKSTATION")[1].checked = true;} 
       else  {
       document.getElementsByName("CHK_LEVEL_ON_BMS_WORKSTATION")[2].checked = true;};
       
       document.getElementsByName("CHK_POWER_INPUT")[0].value = x["CHK_POWER_INPUT"][eq];
       document.getElementsByName("CHK_CURRENT_DRAWN")[0].value = x["CHK_CURRENT_DRAWN"][eq];
       document.getElementsByName("CHK_DELIVERY_PRESSURE")[0].value = x["CHK_DELIVERY_PRESSURE"][eq];
       }
        function m(){w();
       if (x["SENSORS_WORKING_CHK"][eq].toUpperCase() =="WORKING") {
       document.getElementsByName("SENSORS_WORKING_CHK")[0].checked = true;} 
       else
        {
       document.getElementsByName("SENSORS_WORKING_CHK")[1].checked = true;};
       
       if (x["CLEAN_LEVEL_SENSORS"][eq].toUpperCase() =="CHECKED"||x["CLEAN_LEVEL_SENSORS"][eq].toUpperCase() =="DONE"||x["CLEAN_LEVEL_SENSORS"][eq].toUpperCase() =="CLEAN") {
       document.getElementsByName("CLEAN_LEVEL_SENSORS")[0].checked = true;} 
       else
        {
       document.getElementsByName("CLEAN_LEVEL_SENSORS")[1].checked = true;};
       
        }
        function q(){m();
       if (x["ENSURE_PUMP_DISCHARGING_WATER_AND_NRV_WORKING"][eq].toUpperCase() =="OK") {
       document.getElementsByName("ENSURE_PUMP_DISCHARGING_WATER_AND_NRV_WORKING")[0].checked = true;} 
       else
        {
       document.getElementsByName("ENSURE_PUMP_DISCHARGING_WATER_AND_NRV_WORKING")[1].checked = true;};
       
       if (x["ENSURE_WATER_DISCHARGING_INTO_CONN_SEEPAGE_PIT"][eq].toUpperCase() =="OK") {
       document.getElementsByName("ENSURE_WATER_DISCHARGING_INTO_CONN_SEEPAGE_PIT")[0].checked = true;} 
       else
        {
       document.getElementsByName("ENSURE_WATER_DISCHARGING_INTO_CONN_SEEPAGE_PIT")[1].checked = true;};
       
       if (x["PIT_WATER_LEVEL_INSPECTION"][eq].toUpperCase() =="LOW") {
       document.getElementsByName("PIT_WATER_LEVEL_INSPECTION")[0].checked = true;} 
       else
        {
       document.getElementsByName("PIT_WATER_LEVEL_INSPECTION")[1].checked = true;};
       
       if (x["PHYSICALLY_CHECK_PUMP_DRAINING_OUT_WATER"][eq].toUpperCase() =="CHECKED"||x["PHYSICALLY_CHECK_PUMP_DRAINING_OUT_WATER"][eq].toUpperCase() =="DONE"||x["PHYSICALLY_CHECK_PUMP_DRAINING_OUT_WATER"][eq].toUpperCase() =="CLEAN") {
       document.getElementsByName("PHYSICALLY_CHECK_PUMP_DRAINING_OUT_WATER")[0].checked = true;} 
       else
        {
       document.getElementsByName("PHYSICALLY_CHECK_PUMP_DRAINING_OUT_WATER")[1].checked = true;};
       
        }
        function hy(){q();
       }
        function y(){hy();
       }
        document.getElementsByName("REMARKS")[0].value = x["REMARKS"][eq];
       
        if (session == "WEEKLY") {
            document.getElementsByName("DONE_DATE")[0].value = dfun(x["Mdate"][eq]);
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
