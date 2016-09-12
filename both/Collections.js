Payment = new Mongo.Collection('payment');

PaymentSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Payment Name"
	},
	owner:{
		type:String,
		label:"Owner",
		autoValue: function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},
});

Payment.attachSchema(PaymentSchema);

Job = new Mongo.Collection('job');

JobSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Job Name"
	},
	company:{
		type: String,
		label: "Company Name"
	},
	rate:{
		type: Number,
		label: "Hourly Rate",
		decimal:true
	},
	payments:{
		type: [Payment],
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	owner:{
		type:String,
		label:"Owner",
		autoValue: function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();  // Prevent user from supplying their own value
			}
		},
		autoform:{
			type:"hidden"
		}
	},
	updatedAt: {
		type: Date,
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true,
		autoform:{
			type:"hidden"
		}
	}
});

Job.attachSchema(JobSchema);