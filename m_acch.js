function myf() {
  var data = new XMLHttpRequest();
  data.open("GET", "https://script.google.com/macros/s/AKfycbxaCjwHUadkBSA7Q7siJ-lcr926s_QSChjbatbJHZydX_2VOWWrC5sDeyTnQuXhvx1EaQ/exec", true);
  data.send();
  data.onload = function my() {
    var x = JSON.parse(data.responseText);
    var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
    var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
    if (session == "WEEKLY") {
      document.getElementsByName("DONE_DATE")[0].value = x[12][eq];
      $("#nextBtn").click();
      document.getElementsByName("VOLTAGE_VALUE_OF_R")[0].value = x[0][eq];
      document.getElementsByName("VOLTAGE_VALUE_OF_Y")[0].value = x[1][eq];
      document.getElementsByName("VOLTAGE_VALUE_OF_B")[0].value = x[2][eq];
      document.getElementsByName("CURRENT_VALUE_OF_R")[0].value = x[3][eq];
      document.getElementsByName("CURRENT_VALUE_OF_Y")[0].value = x[4][eq];
      document.getElementsByName("CURRENT_VALUE_OF_B")[0].value = x[5][eq];
      if (x[6][eq].toUpperCase() == "OK") {
        document.getElementsByName("ABNORMAL_NOISE_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("ABNORMAL_NOISE_CHECK")[1].checked = true;
      };
      document.getElementsByName("EVAPORATOR_AND_CONDENSER_TEMPERATURE")[0].value = x[7][eq];
      if (x[8][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("OIL_AND_REFRIGRANT_LEVEL_CHECK")[1].checked = true;
      };
      if (x[9][eq].toUpperCase() == "OK") {
        document.getElementsByName("VALVE_SIGHT_GLASS_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("VALVE_SIGHT_GLASS_CHECK")[1].checked = true;
      };
      if (x[10][eq].toUpperCase() == "CLEAN") {
        document.getElementsByName("CONDENSER_COIL_CLEAN")[0].checked = true;
      } else {
        document.getElementsByName("CONDENSER_COIL_CLEAN")[1].checked = true;
      };
      document.getElementsByName("REMARKS")[0].value = x[11][eq];
    } else if (session == "MONTHLY") {
      document.getElementsByName("DONE_DATE")[0].value = x[7][eq];
      $("#nextBtn").click();
      if (x[0][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[0].checked = true;
      } else {
        document.getElementsByName("CHECK_AND_NOTE_VOLTAGE_CURRENT_IMBLANCE")[1].checked = true;
      };

      if (x[1][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[0].checked = true;
      } else {
        document.getElementsByName("CHECK_FOR_ABNORMAL_NOISE_VIBRATION_DAMAGE")[1].checked = true;
      };

      if (x[2][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[0].checked = true;
      } else {
        document.getElementsByName("CLEAN_AIR_FILTER_AND_REPLACE_IF_REQUIRED")[1].checked = true;
      };
      document.getElementsByName("REMARKS")[0].value = x[6][eq];
    }
  }
};
myf();