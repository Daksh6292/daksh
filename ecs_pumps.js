function myf() {
  var data = new XMLHttpRequest();
  data.open("GET", "https://script.google.com/macros/s/AKfycbzaJ2RZkoPTP7Mp3GI48-44ogSwyjRW8tsDjFWuIeGllWCn0HRTQST2OcyRiIcvc_WSYw/exec", true);
  data.send();
  data.onload = function my() {
    var x = JSON.parse(data.responseText);
    var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
    var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
    if (session == "WEEKLY") {
      document.getElementsByName("DONE_DATE")[0].value = x[17][eq];
      $("#nextBtn").click();
      document.getElementsByName("VOLTAGE_VALUE_OF_R")[0].value = x[0][eq];
      document.getElementsByName("VOLTAGE_VALUE_OF_Y")[0].value = x[1][eq];
      document.getElementsByName("VOLTAGE_VALUE_OF_B")[0].value = x[2][eq];
      document.getElementsByName("CURRENT_VALUE_OF_R")[0].value = x[3][eq];
      document.getElementsByName("CURRENT_VALUE_OF_Y")[0].value = x[4][eq];
      document.getElementsByName("CURRENT_VALUE_OF_B")[0].value = x[5][eq];
      if (x[6][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("MOTOR_ROTATION_WITH_DIRECTIONAL_ARROW_ON_PUMP_CASING_CHECK")[1].checked = true;
      };
         if (x[7][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("ABNORMAL_NOISE_AND_VIBRATION_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("ABNORMAL_NOISE_AND_VIBRATION_CHECK")[1].checked = true;
      };
      if (x[8][eq].toUpperCase() == "CHECKED") {
        document.getElementsByName("VISUALLY_LEAKAGE_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("VISUALLY_LEAKAGE_CHECK")[1].checked = true;
      };
      if (x[9][eq].toUpperCase() == "DONE") {
        document.getElementsByName("HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK")[0].checked = true;
      } else {
        document.getElementsByName("HIGH_TEMP_HAND_TEST_BEARING_HOUSING_CHECK")[1].checked = true;
      };
      document.getElementsByName("REMARKS")[0].value = x[16][eq];
      void (document.getElementById('spinner').style.display = 'none');


    } else if (session == "MONTHLY") {
      document.getElementsByName("DONE_DATE")[0].value = x[18][eq];
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
      document.getElementsByName("REMARKS")[0].value = x[16][eq];
      void (document.getElementById('spinner').style.display = 'none');
    }
  }
};
myf();
