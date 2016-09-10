//TODO: Add proper checks -----------
Job.deny({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});

Payment.deny({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});

Meteor.publish('job', function(id){
	check(id,String);
	return Job.find({_id:id});
});

Meteor.publish('jobs', function(){
	return Job.find({});
});

Meteor.publish('pay', function(id){
	return Pay.find({_id:id});
});

Meteor.publish('pays', function(){
	return Pay.find({});
});