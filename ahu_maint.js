function myf(){        
    var data = new XMLHttpRequest();        
    data.open("GET", "https://script.google.com/macros/s/AKfycbw_WPL9uSkenAxRb34vIafh281EoaonqdwH-Oq-mNRnxLAuSujH4e5R-zYpcCZUG9hP/exec", true);        
    data.send();
    data.onload= function my(){
      var x = JSON.parse(data.responseText); 
      var eq= document.getElementsByName("EQUIPMENT_ID")[0].value;
      var session= document.getElementsByName("MAINTENANCE_TYPE")[0].value;
      if(session== "MONTHLY") {    
        document.getElementsByName("DONE_DATE")[0].value=x[22][eq];
        $("#nextBtn").click();
          if (x[0][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("VOLTAGE_CURRENT_IMBALANCE_CHECK")[0].checked=true;
        } else{
          document.getElementsByName("VOLTAGE_CURRENT_IMBALANCE_CHECK")[1].checked=true;
        };
      
        if (x[1][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("ABNORMAL_NOISE_VIBRATION_CHECK")[0].checked=true;
        } else{
          document.getElementsByName("ABNORMAL_NOISE_VIBRATION_CHECK")[1].checked=true;
        };
      
        if (x[2][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("AIR_WATER_LEAKAGE_CHECK")[0].checked=true;
        } else{
          document.getElementsByName("AIR_WATER_LEAKAGE_CHECK")[1].checked=true;
        };
      
        if (x[3][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("DRAIN_PAN_CLEAN_DIRTY_CLOGGED_CHECK")[0].checked=true;
        } else{
          document.getElementsByName("DRAIN_PAN_CLEAN_DIRTY_CLOGGED_CHECK")[1].checked=true;
        };
      
        if (x[4][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CLEAN_FILTER_LOW_PRESSURE_AIR_WATER_DIRTY_REQUIRED")[0].checked=true;
        } else{
          document.getElementsByName("CLEAN_FILTER_LOW_PRESSURE_AIR_WATER_DIRTY_REQUIRED")[1].checked=true;
        };
      
        if (x[5][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CORRECT_TENSION_OF_FAN_BELTS_AND_ALIGNMENT_OF_MOTOR")[0].checked=true;
        } else{
          document.getElementsByName("CORRECT_TENSION_OF_FAN_BELTS_AND_ALIGNMENT_OF_MOTOR")[1].checked=true;
        };

        if (x[6][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("INSPECT_COIL_CLEANINESS_CLEAN_WITH_WATER_AIR_PRESSURE_REQUIRED")[0].checked=true;
        } else{
        document.getElementsByName("INSPECT_COIL_CLEANINESS_CLEAN_WITH_WATER_AIR_PRESSURE_REQUIRED")[1].checked=true;
        };

        if (x[7][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_DAMAGE_COIL_FILTER_REPLACE_BROKEN")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_DAMAGE_COIL_FILTER_REPLACE_BROKEN")[1].checked=true;
        };

        if (x[8][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CLEAN_BLOWER_SECTION_WHEEL_MOTOR")[0].checked=true;
        } else{
        document.getElementsByName("CLEAN_BLOWER_SECTION_WHEEL_MOTOR")[1].checked=true;
        };

        if (x[9][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CLEAN_MANUAL_DAMPER_CONNECTING_DUCT_RH_TEMP_SENSOR")[0].checked=true;
        } else{
        document.getElementsByName("CLEAN_MANUAL_DAMPER_CONNECTING_DUCT_RH_TEMP_SENSOR")[1].checked=true;
        };

        if (x[10][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_ACCESS_OF_DOORS_HINGES_EASY_OPERATION")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_ACCESS_OF_DOORS_HINGES_EASY_OPERATION")[1].checked=true;
        };

        if (x[11][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_OPERATION_OF_NRD")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_OPERATION_OF_NRD")[1].checked=true;
        };

        if (x[12][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_FUNCTION_OF_MARINE_LIGHT_LIMIT_SWITCH_INTERLOCK")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_FUNCTION_OF_MARINE_LIGHT_LIMIT_SWITCH_INTERLOCK")[1].checked=true;
        };

        if (x[13][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_FOR_BEARING_OF_MOTOR_AND_BLOWER_ENSURE_SCREW_TIGHTNESS")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_FOR_BEARING_OF_MOTOR_AND_BLOWER_ENSURE_SCREW_TIGHTNESS")[1].checked=true;
        };

        document.getElementsByName("CHW_IN")[0].value=x[14][eq];
        document.getElementsByName("CHW_OUT")[0].value=x[15][eq];
        document.getElementsByName("WATER_IN_PRESSURE")[0].value=x[16][eq];
        document.getElementsByName("WATER_OUT_PRESSURE")[0].value=x[17][eq];
        document.getElementsByName("MOTOR_CURRENT_RYB_AMPERE")[0].value=x[18][eq];
        document.getElementsByName("ABNORMAL_SOUND_IF_ANY")[0].value=x[19][eq];
        document.getElementsByName("REMARKS")[0].value=x[20][eq];
        }   
        else if(session== "WEEKLY") {    
          document.getElementsByName("DONE_DATE")[0].value=x[21][eq];
          $("#nextBtn").click();
            if (x[0][eq].toUpperCase()=="CHECKED") { 
          document.getElementsByName("VOLTAGE_CURRENT_IMBALANCE_CHECK")[0].checked=true;
          } else{
            document.getElementsByName("VOLTAGE_CURRENT_IMBALANCE_CHECK")[1].checked=true;
          };
        
          if (x[1][eq].toUpperCase()=="CHECKED") { 
          document.getElementsByName("ABNORMAL_NOISE_VIBRATION_CHECK")[0].checked=true;
          } else{
            document.getElementsByName("ABNORMAL_NOISE_VIBRATION_CHECK")[1].checked=true;
          };
        
          if (x[2][eq].toUpperCase()=="CHECKED") { 
          document.getElementsByName("AIR_WATER_LEAKAGE_CHECK")[0].checked=true;
          } else{
            document.getElementsByName("AIR_WATER_LEAKAGE_CHECK")[1].checked=true;
          };
        
          if (x[3][eq].toUpperCase()=="CHECKED") { 
          document.getElementsByName("DRAIN_PAN_CLEAN_DIRTY_CLOGGED_CHECK")[0].checked=true;
          } else{
            document.getElementsByName("DRAIN_PAN_CLEAN_DIRTY_CLOGGED_CHECK")[1].checked=true;
          };
        
          if (x[4][eq].toUpperCase()=="CHECKED") { 
          document.getElementsByName("CLEAN_FILTER_LOW_PRESSURE_AIR_WATER_DIRTY_REQUIRED")[0].checked=true;
          } else{
            document.getElementsByName("CLEAN_FILTER_LOW_PRESSURE_AIR_WATER_DIRTY_REQUIRED")[1].checked=true;
          };
          document.getElementsByName("REMARKS")[0].value=x[20][eq];
        }
        
    };    
}
myf();
                