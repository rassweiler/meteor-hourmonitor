Template.NewJob.events({
	'click .close-new-job':()=>{
		Session.set('new-job-toggle', '');
	}
});