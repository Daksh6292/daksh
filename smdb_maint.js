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
    
    if (x["CHK_SELECTOR_SWITCH_LOCAL_REMOTE"][eq].toUpperCase() =="CHECKED"||x["CHK_SELECTOR_SWITCH_LOCAL_REMOTE"][eq].toUpperCase() =="DONE"||x["CHK_SELECTOR_SWITCH_LOCAL_REMOTE"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK_SELECTOR_SWITCH_LOCAL_REMOTE")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK_SELECTOR_SWITCH_LOCAL_REMOTE")[1].checked = true;};
    
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
    
    if (x["CHK_NEUTRAL_LINK_CONN_TIGHTNESS"][eq].toUpperCase() =="CHECKED"||x["CHK_NEUTRAL_LINK_CONN_TIGHTNESS"][eq].toUpperCase() =="DONE"||x["CHK_NEUTRAL_LINK_CONN_TIGHTNESS"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK_NEUTRAL_LINK_CONN_TIGHTNESS")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK_NEUTRAL_LINK_CONN_TIGHTNESS")[1].checked = true;};
    
    }
    function hy(){q();
    if (x["WIRING_WEAR_TEAR_INSPECTION"][eq].toUpperCase() =="CHECKED"||x["WIRING_WEAR_TEAR_INSPECTION"][eq].toUpperCase() =="DONE"||x["WIRING_WEAR_TEAR_INSPECTION"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("WIRING_WEAR_TEAR_INSPECTION")[0].checked = true;}
    else
    {
    document.getElementsByName("WIRING_WEAR_TEAR_INSPECTION")[1].checked = true;};
    
    if (x["TEST_ALL_MCCB_ACB_FUNCTIONING"][eq].toUpperCase() =="CHECKED"||x["TEST_ALL_MCCB_ACB_FUNCTIONING"][eq].toUpperCase() =="DONE"||x["TEST_ALL_MCCB_ACB_FUNCTIONING"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("TEST_ALL_MCCB_ACB_FUNCTIONING")[0].checked = true;}
    else
    {
    document.getElementsByName("TEST_ALL_MCCB_ACB_FUNCTIONING")[1].checked = true;};
    
    if (x["DISCOLORATION_SIGN_CHECK"][eq].toUpperCase() =="CHECKED"||x["DISCOLORATION_SIGN_CHECK"][eq].toUpperCase() =="DONE"||x["DISCOLORATION_SIGN_CHECK"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("DISCOLORATION_SIGN_CHECK")[0].checked = true;}
    else
    {
    document.getElementsByName("DISCOLORATION_SIGN_CHECK")[1].checked = true;};
    
    }
    function y(){hy();
    if (x["CHK COMPARTMENT DOORS ALIGNMENT DRIVEN MECHANISM"][eq].toUpperCase() =="CHECKED"||x["CHK COMPARTMENT DOORS ALIGNMENT DRIVEN MECHANISM"][eq].toUpperCase() =="DONE"||x["CHK COMPARTMENT DOORS ALIGNMENT DRIVEN MECHANISM"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK COMPARTMENT DOORS ALIGNMENT DRIVEN MECHANISM")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK COMPARTMENT DOORS ALIGNMENT DRIVEN MECHANISM")[1].checked = true;};
    
    if (x["BUS BAR SOLID LINK CLN BOLT TIGHTNESS"][eq].toUpperCase() =="CHECKED"||x["BUS BAR SOLID LINK CLN BOLT TIGHTNESS"][eq].toUpperCase() =="DONE"||x["BUS BAR SOLID LINK CLN BOLT TIGHTNESS"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("BUS BAR SOLID LINK CLN BOLT TIGHTNESS")[0].checked = true;}
    else
    {
    document.getElementsByName("BUS BAR SOLID LINK CLN BOLT TIGHTNESS")[1].checked = true;};
    
    if (x["CHK LUGS THINBLES TIGHTNESS"][eq].toUpperCase() =="CHECKED"||x["CHK LUGS THINBLES TIGHTNESS"][eq].toUpperCase() =="DONE"||x["CHK LUGS THINBLES TIGHTNESS"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK LUGS THINBLES TIGHTNESS")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK LUGS THINBLES TIGHTNESS")[1].checked = true;};
    
    if (x["CHK CONTACTOR CONTACTS FOR PITTING"][eq].toUpperCase() =="CHECKED"||x["CHK CONTACTOR CONTACTS FOR PITTING"][eq].toUpperCase() =="DONE"||x["CHK CONTACTOR CONTACTS FOR PITTING"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK CONTACTOR CONTACTS FOR PITTING")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK CONTACTOR CONTACTS FOR PITTING")[1].checked = true;};
    
    if (x["INSPECT AUX CONTROL CKT"][eq].toUpperCase() =="CHECKED"||x["INSPECT AUX CONTROL CKT"][eq].toUpperCase() =="DONE"||x["INSPECT AUX CONTROL CKT"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("INSPECT AUX CONTROL CKT")[0].checked = true;}
    else
    {
    document.getElementsByName("INSPECT AUX CONTROL CKT")[1].checked = true;};
    
    if (x["CHK INSULATING BARRIERS POLYCARBONATE SHEET"][eq].toUpperCase() =="CHECKED"||x["CHK INSULATING BARRIERS POLYCARBONATE SHEET"][eq].toUpperCase() =="DONE"||x["CHK INSULATING BARRIERS POLYCARBONATE SHEET"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK INSULATING BARRIERS POLYCARBONATE SHEET")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK INSULATING BARRIERS POLYCARBONATE SHEET")[1].checked = true;};
    
    if (x["CHK CABLE PHYSICAL DAMAGE AND CORROSION"][eq].toUpperCase() =="CHECKED"||x["CHK CABLE PHYSICAL DAMAGE AND CORROSION"][eq].toUpperCase() =="DONE"||x["CHK CABLE PHYSICAL DAMAGE AND CORROSION"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK CABLE PHYSICAL DAMAGE AND CORROSION")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK CABLE PHYSICAL DAMAGE AND CORROSION")[1].checked = true;};
    
    if (x["CHK ALL GLAND PLATES"][eq].toUpperCase() =="CHECKED"||x["CHK ALL GLAND PLATES"][eq].toUpperCase() =="DONE"||x["CHK ALL GLAND PLATES"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK ALL GLAND PLATES")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK ALL GLAND PLATES")[1].checked = true;};
    
    if (x["CHK BUS BAR COLOR CODING"][eq].toUpperCase() =="CHECKED"||x["CHK BUS BAR COLOR CODING"][eq].toUpperCase() =="DONE"||x["CHK BUS BAR COLOR CODING"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK BUS BAR COLOR CODING")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK BUS BAR COLOR CODING")[1].checked = true;};
    
    if (x["CHK EARTHING"][eq].toUpperCase() =="CHECKED"||x["CHK EARTHING"][eq].toUpperCase() =="DONE"||x["CHK EARTHING"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK EARTHING")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK EARTHING")[1].checked = true;};
    
    if (x["CHK PANEL OPERATION IN MANUAL MODE"][eq].toUpperCase() =="CHECKED"||x["CHK PANEL OPERATION IN MANUAL MODE"][eq].toUpperCase() =="DONE"||x["CHK PANEL OPERATION IN MANUAL MODE"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK PANEL OPERATION IN MANUAL MODE")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK PANEL OPERATION IN MANUAL MODE")[1].checked = true;};
    
    if (x["CHK PANEL OPERATION IN AUTO MODE"][eq].toUpperCase() =="CHECKED"||x["CHK PANEL OPERATION IN AUTO MODE"][eq].toUpperCase() =="DONE"||x["CHK PANEL OPERATION IN AUTO MODE"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("CHK PANEL OPERATION IN AUTO MODE")[0].checked = true;}
    else
    {
    document.getElementsByName("CHK PANEL OPERATION IN AUTO MODE")[1].checked = true;};
    
    if (x["SWITCHGEAR LUBRICATION"][eq].toUpperCase() =="CHECKED"||x["SWITCHGEAR LUBRICATION"][eq].toUpperCase() =="DONE"||x["SWITCHGEAR LUBRICATION"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("SWITCHGEAR LUBRICATION")[0].checked = true;}
    else
    {
    document.getElementsByName("SWITCHGEAR LUBRICATION")[1].checked = true;};
    
    if (x["ACB STRIP AND CLEAN"][eq].toUpperCase() =="CHECKED"||x["ACB STRIP AND CLEAN"][eq].toUpperCase() =="DONE"||x["ACB STRIP AND CLEAN"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("ACB STRIP AND CLEAN")[0].checked = true;}
    else
    {
    document.getElementsByName("ACB STRIP AND CLEAN")[1].checked = true;};
    
    if (x["INSPECT CLN MAGNETIC POLE PHASES"][eq].toUpperCase() =="CHECKED"||x["INSPECT CLN MAGNETIC POLE PHASES"][eq].toUpperCase() =="DONE"||x["INSPECT CLN MAGNETIC POLE PHASES"][eq].toUpperCase() =="CLEAN") {
    document.getElementsByName("INSPECT CLN MAGNETIC POLE PHASES")[0].checked = true;}
    else
    {
    document.getElementsByName("INSPECT CLN MAGNETIC POLE PHASES")[1].checked = true;};
    
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
    if (x["as"][0]== true){$("#submit").click();}}}}
    ;myf();function dfun(df){var date = new Date(df);var datval = date.toISOString().substring(0,10);return datval}
