function validate() {
    if( document.myForm.Yourname.value =="" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
          
    if( document.myForm.Address.value ==="")
         {
            alert( "Please provide your Address!" );
            document.myForm.Address.focus() ;
            return false;
         }
    if( document.myForm.Phone.value == "")
         {
            alert( "Please provide your Phone number!" );
            document.myForm.Phone.focus() ;
            return false;
         } 
    if( document.myForm.License.value == "")
         {
            alert( "Please provide your License number!" );
            document.myForm.License.focus() ;
            return false;
         }
    if( document.myForm.Engine.value == "")
         {
            alert( "Please provide your License number!" );
            document.myForm.Engine.focus() ;
            return false;
        }
    if( document.Date.Engine.value == "")
         {
            alert( "Please provide your License number!" );
            document.myForm.Date.focus() ;
            return false;
         }
    if( document.myForm.mechanic.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
    if( document.myForm.Pass.value == "" )
         {
            alert( "Please provide your Password!" );
            return false;
         }
         return( true );
}
