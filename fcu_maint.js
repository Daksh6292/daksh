function myf(){        
    var data = new XMLHttpRequest();        
    data.open("GET", "https://script.google.com/macros/s/AKfycbyKBD3dFjLjitb4vgLpAhfgGiFzO-f43r5o036s5ke-DF7Ok2NE_04UpR0-7HGdBSKg/exec", true);        
    data.send();
    data.onload= function my(){
    var x = JSON.parse(data.responseText); 
    var eq= document.getElementsByName("EQUIPMENT_ID")[0].value;
    var session= document.getElementsByName("MAINTENANCE_TYPE")[0].value;
    if(session== "MONTHLY") {    
        document.getElementsByName("DONE_DATE")[0].value=x[11][eq];
        $("#nextBtn").click();
        if (x[0][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[1].checked=true;
        };

        if (x[1][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("ANY_LEAKAGE_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("ANY_LEAKAGE_CHECK")[1].checked=true;
        };

        if (x[2][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[1].checked=true;
        };

        if (x[3][eq].toUpperCase()=="DONE") { 
        document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[0].checked=true;
        } else{
        document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[1].checked=true;
        };

        if (x[4][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[0].checked=true;
        } else{
        document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[1].checked=true;
        };

        if (x[5][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE")[0].checked=true;
        } else{
        document.getElementsByName("CHECK_MOTOR_RUNNING_CURRENT_AND_COMPARE")[1].checked=true;
        };
        if (x[6][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("FAN_BELT_TENSION_CHECK_AND_REPAIR")[0].checked=true;
        } else{
        document.getElementsByName("FAN_BELT_TENSION_CHECK_AND_REPAIR")[1].checked=true;
        };

        if (x[7][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR")[0].checked=true;
        } else{
        document.getElementsByName("IN_OUT_ISOLATION_BALL_VALVES_CHECK_AND_REPAIR")[1].checked=true;
        };

        if (x[8][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("MOTOR_FAN_CASING_LOOSENESS_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("MOTOR_FAN_CASING_LOOSENESS_CHECK")[1].checked=true;
        };

      document.getElementsByName("REMARKS")[0].value=x[9][eq];
      void (document.getElementById('spinner').style.display = 'none');
    }
    else if(session== "WEEKLY"){     
        document.getElementsByName("DONE_DATE")[0].value=x[10][eq];
        $("#nextBtn").click();
        if (x[0][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("ABNORMAL_SOUND_VIBRN_CHECK")[1].checked=true;
        };

        if (x[1][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("ANY_LEAKAGE_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("ANY_LEAKAGE_CHECK")[1].checked=true;
        };

        if (x[2][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[0].checked=true;
        } else{
        document.getElementsByName("DRAIN_BLOCKAGE_CHECK")[1].checked=true;
        };

        if (x[3][eq].toUpperCase()=="DONE") { 
        document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[0].checked=true;
        } else{
        document.getElementsByName("AIR_FILTERS_CLEANING_IF_REQR")[1].checked=true;
        };

        if (x[4][eq].toUpperCase()=="CHECKED") { 
        document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[0].checked=true;
        } else{
        document.getElementsByName("THREE_SPEED_SWITCH_CHECK_AND_REPAIR")[1].checked=true;
        };
        document.getElementsByName("REMARKS")[0].value=x[9][eq];
        void (document.getElementById('spinner').style.display = 'none');
    }
    }   
   
    };    
    myf();
    
