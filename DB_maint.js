function myf() {
    var data = new XMLHttpRequest();
    data.open("GET", "https://script.google.com/macros/s/AKfycbznQ4VW3F9_dMyQ94_8OK3HY48ZYZ8Z489Jk4hUiyWHqFyc1c7GbujOCQrmFn5uTEeB9A/exec", true);
    data.send();
    data.onload = function my() {
      var x = JSON.parse(data.responseText);
      var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
      var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
      if (session == "MONTHLY") {
        document.getElementsByName("DONE_DATE")[0].value = x[14][eq];
        $("#nextBtn").click();
        if (x[0][eq].toUpperCase() == "CHECKED") {
          document.getElementsByName("CHK_SELECTOR_SWITCH_LOCAL_REMOTE")[0].checked = true;
        } else {
          document.getElementsByName("CHK_SELECTOR_SWITCH_LOCAL_REMOTE")[1].checked = true;
        };
        if (x[1][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_INCOM_VOLT_THREE_PHASE")[0].checked = true;
          } else {
            document.getElementsByName("CHK_INCOM_VOLT_THREE_PHASE")[1].checked = true;
          };
          if (x[2][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_CONTROL_SUPPLY")[0].checked = true;
          } else {
            document.getElementsByName("CHK_CONTROL_SUPPLY")[1].checked = true;
          };
          if (x[3][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE")[0].checked = true;
          } else {
            document.getElementsByName("CHK_ACB_MCCB_TRIPPING_OR_FAULT_MESSAGE")[1].checked = true;
          };
          if (x[4][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_RELAY_STATUS")[0].checked = true;
          } else {
            document.getElementsByName("CHK_RELAY_STATUS")[1].checked = true;
          };
          if (x[5][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_ABNORMAL_NOISE")[0].checked = true;
          } else {
            document.getElementsByName("CHK_ABNORMAL_NOISE")[1].checked = true;
          };
          if (x[6][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("BURNING_SMELL_CHECK")[0].checked = true;
          } else {
            document.getElementsByName("BURNING_SMELL_CHECK")[1].checked = true;
          };
          if (x[7][eq].toUpperCase() == "DONE") {
            document.getElementsByName("KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED")[0].checked = true;
          } else {
            document.getElementsByName("KEEP_SERVICE_ZONE_CLEAN_LIT_VENTILATED")[1].checked = true;
          };
          if (x[8][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE")[0].checked = true;
          } else {
            document.getElementsByName("CHK_DB_FOR_PHYSICAL_MECHANICAL_DAMAGE")[1].checked = true;
          };
          if (x[9][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("INDICATION_LAMP_CHK")[0].checked = true;
          } else {
            document.getElementsByName("INDICATION_LAMP_CHK")[1].checked = true;
          };
          if (x[10][eq].toUpperCase() == "DONE") {
            document.getElementsByName("CLN_OUTSIDE_PANEL")[0].checked = true;
          } else {
            document.getElementsByName("CLN_OUTSIDE_PANEL")[1].checked = true;
          };
          if (x[11][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_FAN_THERMOSTATE_OPERATION")[0].checked = true;
          } else {
            document.getElementsByName("CHK_FAN_THERMOSTATE_OPERATION")[1].checked = true;
          };
          if (x[12][eq].toUpperCase() == "CHECKED") {
            document.getElementsByName("CHK_MEASURING_INSTRUMENT_ENERGY_METER")[0].checked = true;
          } else {
            document.getElementsByName("CHK_MEASURING_INSTRUMENT_ENERGY_METER")[1].checked = true;
          };
        document.getElementsByName("REMARKS")[0].value = x[13][eq];
        void (document.getElementById('spinner').style.display = 'none');
  
  
      } else if (session == "quartly") {
        
      }
    }
  };
  myf();
