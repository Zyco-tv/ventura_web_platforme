$(function(){
    // populateDatasource();
   })
   
   // End user response.
   function populateDatasource(){
       $("#datasource_ul").empty();
   
   datasource_response.appaccounts.forEach((item,index)=>{
     
   $("#datasource_ul").append('<li onclick="populateDatasourceDetails(this,\''+item.app_name+'\')"<span>'+ item.app_name+'</span></li>');
   
      })
     $("#datasource_ul li:first-child").addClass("active");
     selectedDatasource = $("#datasource_ul li:first-child").text();
     populateDatasourceDetails("",selectedDatasource);
   }
   
   function populateDatasourceDetails(target,datasource_name){
     console.log(datasource_name)
       $("#org_id_checkboxes").empty();
       datasource_response.appaccounts.forEach((item,index)=>{
         if(item.app_name === datasource_name){
           console.log(item);
              $("#org_id_checkboxes").append('<div class="checkbox"><label><input type="checkbox" value="'+item.zaaid+'" >'+ item.zaaid+ '</label></div>');
         }
       });
   
   //    <div class="checkbox">
   //   <label><input type="checkbox" value="">Option 1</label>
   // </div>
   }
   
   function populateUserList(){
     $("#users_ul").empty();
     for(var prop in user_response.allusers){
       $("#users_ul").append('<li>                     <img class="user-profile" src="https://drive.google.com/uc?id=1sz6Dq32rpb_k1KYCu-CIkK8prHb8d8Fz" alt="user-profile" /><span>'+user_response.allusers[prop].first_name +'</span></li>');
     } 
     $("#users_ul li:nth-child(1)").addClass("active")
   }
   
   function openUserPane() {
     $("#userPane .profiledata").fadeIn();    document.getElementById("userPane").style.width = "250px";
   }
   
   function closeUserPane() {
      $("#userPane .profiledata").fadeOut(); document.getElementById("userPane").style.width = "0";
   }
   
   function openPane(name){
    $(".admin-panel-sidebar li.active").removeClass("active");
    switch(name){
       case "datasource":
           $("#admin-datasource").show();
           $("#admin-users").hide();
        $(".admin-panel-sidebar li:nth-child(1)").addClass("active");
        populateDatasource();
           break;
       case "users":
   
           $("#admin-datasource").hide();
           $("#admin-users").show(); 
        $(".admin-panel-sidebar li:nth-child(2)").addClass("active");
               populateUserList();
         break;
     }
     
   }