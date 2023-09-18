var result;

function check()

{

   var question;
   var value1;
   var value2;
   

   question = 1;
   value1 = 0;
   value2 = 0;
   
     
   result = "";

   var choice;

   for (question = 1; question <= 20; question++) {

      var q = document.forms['quiz'].elements['q'+question];

         for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
               choice = q[i].value;
            }
         }

         if (choice == "value1") {
            value1++;
         }

         if (choice == "value2") {
            value2++;
         }
         

      }

   if (value1 == 18 && value2 == 2 || value1 == 19 && value2 == 1 || value1 == 20 && value2 == 0 || value1 == 13 && value2 == 7 || value1 == 12 && value2 == 8) {


      window.location.href='http://proforientaciakdd.tilda.ws/chelovek5';

   }

   else if (value1 == 16 && value2 == 4 || value1 == 11 && value2 == 9 || value1 == 10 && value2 == 10 || value1 == 9 && value2 == 11) {


      window.location.href='http://proforientaciakdd.tilda.ws/chelovek2';

   }

   else if (value1 == 14 && value2 == 6 || value1 == 8 && value2 == 12 || value1 == 7 && value2 == 13 || value1 == 6 && value2 == 14) {


      window.location.href='http://proforientaciakdd.tilda.ws/chelovek3';

   }

   else if (value1 == 17 && value2 == 3 || value1 == 5 && value2 == 15 || value1 == 4 && value2 == 16) {


      window.location.href='http://proforientaciakdd.tilda.ws/chelovek1';

   }


   else if (value1 == 15 && value2 == 5 || value1 == 3 && value2 == 17 || value1 == 2 && value2 == 18 || value1 == 1 && value2 == 19 || value1 == 0 && value2 == 20) {


      window.location.href='http://proforientaciakdd.tilda.ws/chelovek4';

   }
   
   
}