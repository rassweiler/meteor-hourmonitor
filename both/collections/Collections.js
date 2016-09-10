Payment = new Mongo.Collection('payment');

PaymentSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Payment Name"
	}
});

Payment.attachSchema(PaymentSchema);

Job = new Mongo.Collection('job');

JobSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Job Name"
	},
	payments:{
		type: [Payment]
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
		optional: true
	}
});

Job.attachSchema(JobSchema);