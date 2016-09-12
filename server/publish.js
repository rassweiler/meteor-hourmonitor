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
	return Job.find({owner: this.userId,_id:id});
});

Meteor.publish('jobs', function(){
	if(Roles.userIsInRole(this.userId, 'admin2')){
		return Job.find();
	}else{
		return Job.find({owner: this.userId});
	}
});

Meteor.publish('pay', function(id){
	return Pay.find({owner:Meteor.userId,_id:id});
});

Meteor.publish('pays', function(){
	if(Roles.userIsInRole(Meteor.userId, 'admin')){
		return Pay.find();
	}else{
		return Pay.find({owner:Meteor.userId});
	}
});