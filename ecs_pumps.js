function myf() {
    var data = new XMLHttpRequest();
    data.open("GET", "https://script.google.com/macros/s/AKfycbzaJ2RZkoPTP7Mp3GI48-44ogSwyjRW8tsDjFWuIeGllWCn0HRTQST2OcyRiIcvc_WSYw/exec", true);
    data.send();
    data.onload = function my() {
        var x = JSON.parse(data.responseText);
        var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
        var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
        function w() {
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
        }

        function m() {
            w();
            if (x[10][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("SHAFT_SEALING_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("SHAFT_SEALING_CHECK")[1].checked = true;
              };
        
              if (x[11][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("MOTOR_AND_PUMP_CONNECTION_LEAKAGE_CHECK")[1].checked = true;
              };
        
              if (x[12][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("ISOLATION_OF_ALL_VALVES_LEAKS_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("ISOLATION_OF_ALL_VALVES_LEAKS_CHECK")[1].checked = true;
              };
        }

        function q() {
            m();
            if (x[13][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("MOTOR_AND_PUMP_CASINGS_CLEAN_AND_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("MOTOR_AND_PUMP_CASINGS_CLEAN_AND_CHECK")[1].checked = true;
              };
        
              if (x[14][eq].toUpperCase() == "DONE") {
                document.getElementsByName("ALL_ELECTRCL_TERMNLS_CONDUITS_INSU_AND_CONN_CLEAN_AND_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("ALL_ELECTRCL_TERMNLS_CONDUITS_INSU_AND_CONN_CLEAN_AND_CHECK")[1].checked = true;
              };
        
              if (x[15][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("SEALS_AND_BEARINGS_LUBRICATION_CHECK")[0].checked = true;
              } else {
                document.getElementsByName("SEALS_AND_BEARINGS_LUBRICATION_CHECK")[1].checked = true;
              };
            
        }

        function hy() {
            q(); 
        }
        if (session == "WEEKLY") {
            document.getElementsByName("DONE_DATE")[0].value = x[17][eq];
            w();
            void (document.getElementById('spinner').style.display = 'none');
            if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
        }
        if (session == "MONTHLY") {
            document.getElementsByName("DONE_DATE")[0].value = x[18][eq];
            m();
            void (document.getElementById('spinner').style.display = 'none');
            if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
        }
        if (session == "QUARTERLY") {
            document.getElementsByName("DONE_DATE")[0].value = x[19][eq];
            q();
            void (document.getElementById('spinner').style.display = 'none');
            if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
        }

        if (session == "HALF-YEARLY") {
            document.getElementsByName("DONE_DATE")[0].value = x[20][eq];
            hy();
            void (document.getElementById('spinner').style.display = 'none');
            if (x[0].AS.toString().toUpperCase() == "TRUE"){$("#submit").click();}
    }
}};myf()
