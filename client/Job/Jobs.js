Template.Jobs.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('jobs');
	});
});

Template.Jobs.helpers({
	jobs:()=>{
		return Job.find();
	}
});

Template.Jobs.events({
	'click .fa-plus-square':()=>{
		Session.set('new-job-toggle', 'open');
	}
});