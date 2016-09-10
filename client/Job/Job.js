Template.Job.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('_id');
		self.subscribe('job', id);
	});
});

Template.Job.helpers({
	job:()=>{
		var id = FlowRouter.getParam('_id');
		return Job.findOne({_id:id});
	}
});