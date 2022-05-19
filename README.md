This is the API service for Pariksha App.It has 2 different use case for different roles student or Admin.

Student App services :

1. To get the Subject list
   URL (GET) ==> "https://hidden-taiga-57545.herokuapp.com/pariksha/subjectlist"

2. To get Questions of a Subject
   URL (GET)==> "https://hidden-taiga-57545.herokuapp.com/pariksha/questions"
   PARAMS ==> subId

3. To get the result
   URL (POST)==> "https://hidden-taiga-57545.herokuapp.com/pariksha/result"
   PARAMS ==> subId
   BODY ==> [
   {
   questionId:"",
   optId:""
   }
   .......
   ]

Admin App Services :

1.  To add subject in the Subject list
    URL (POST) ==> "https://hidden-taiga-57545.herokuapp.com/pariksha/admin/addsubject"
    BODY ==> {subject:""}

2.  To delete the subject from list
    URL (DELETE) ==> "https://hidden-taiga-57545.herokuapp.com/pariksha/admin/deletesubject"
    PARAMS ==> subId

3.  To add questions
    URL (POST) ==> "https://hidden-taiga-57545.herokuapp.com/pariksha/admin/addquestions"
    BODY ==> { subId, question, a, b, c, d, correctOpt }
