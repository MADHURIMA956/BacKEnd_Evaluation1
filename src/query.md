Q.1)get all jobs in a particular city which matches a particular skill

=> db.jobs.find({$and: {'city' : 'Kolkata'} , {'skill_Id': {'name': 'Front End'}}}).pretty();

Q.2)find all the jobs that are available as Work from home.

=> db.jobs.find({'job_preference' : {$eq : 'work from home'}}).pretty();

Q.3)find all the jobs that will accept a notice period of 2 months.

=> db.jobs.find({'notice_period' : {$eq : '2 Months'}}).pretty();

Q.4)find all jobs by sorting the jobs as per their rating.

=> db.jobs.find({}).sort({rating: 1}).pretty();

Q.5)an api to get details of the company.

=> db.company.find({}).pretty();

Q.6)find the company that has the most open jobs.

=> db.company.find({'open_job' : true}).pretty();
