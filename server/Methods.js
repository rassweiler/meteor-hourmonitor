Meteor.methods({
	'jobs.insert'(arg) {
		// Make sure the user is logged in before inserting a task
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		check(arg.name, String);
		check(arg.company, String);
		check(arg.rate, Number);
		var name = arg.name;
		var company = arg.company;
		var rate = arg.rate;

		Job.insert({
			name,
			company,
			rate
		});
	},
	'jobs.remove'(id) {
		check(id, String);
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		job = Job.findOne({_id:id});
		if(!job.owner == Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Job.remove(id);
	}
});