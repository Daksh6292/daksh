function myf() {
    var data = new XMLHttpRequest();
    data.open("GET", "https://script.google.com/macros/s/AKfycbxLGIuMepv0KmkjffgkpCRrItgvfTis09tAUc-hAKo0FpStnVD0F4LJrjBjExywTbQ1Dw/exec", true);
    data.send();
    data.onload = function my() {
        var x = JSON.parse(data.responseText);
        var eq = document.getElementsByName("EQUIPMENT_ID")[0].value;
        var session = document.getElementsByName("MAINTENANCE_TYPE")[0].value;
        function w() {
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
        }

        function m() {
            w();
            if (x[3][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_LOOSENESS_OF_BOLT_FAN_CASING_MOTOR_BASE")[1].checked = true;
            };

            if (x[4][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[0].checked = true;
            } else {
                document.getElementsByName("EXAMINE_MOTOR_FAN_CANVAS_ANCILLARY_FITTINGS")[1].checked = true;
            };

            if (x[5][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_CLEANINESS_OF_FAN_BLADES_AND_PHY_DAMAGE")[1].checked = true;
            };
        }

        function q() {
            m();
            if (x[6][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_OPERATION_OF_DAMPERS")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_OPERATION_OF_DAMPERS")[1].checked = true;
            };

            if (x[7][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_ASSOCIATED_DAMPR_MOVMENT_AND_LUB_MOVING_PARTS")[1].checked = true;
            };

            if (x[8][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING")[0].checked = true;
            } else {
                document.getElementsByName("ADD_GREASE_TO_FAN_SHAFT_BEARING_AND_BLOWER_BEARING")[1].checked = true;
            };
            if (x[9][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_CONDITION_OF_FLEXIBLE_CANVAS")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_CONDITION_OF_FLEXIBLE_CANVAS")[1].checked = true;
            };
            if (x[10][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_PROPER_WORKING_EPB")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_PROPER_WORKING_EPB")[1].checked = true;
            };
        }

        function hy() {q();
            if (x[11][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_AND_RECORD_VIBRATION_VALUE_AND_COMPARE")[1].checked = true;
            };

            if (x[12][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_PROPER_WORKING_OF_DPS")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_PROPER_WORKING_OF_DPS")[1].checked = true;
            };
            if (x[13][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_THE_BELT_TENSION_ALIGNMENT_AND_WEAR_TEAR")[1].checked = true;
            };
            if (x[14][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_ELECTRICAL_CONNECTION_TERMINATION_OF_MOTOR_AND_STARTER")[1].checked = true;
            };
            if (x[15][eq].toUpperCase() == "CHECKED") {
                document.getElementsByName("CHECK_THE_EARTHING_CONNECTION")[0].checked = true;
            } else {
                document.getElementsByName("CHECK_THE_EARTHING_CONNECTION")[1].checked = true;
            }
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
