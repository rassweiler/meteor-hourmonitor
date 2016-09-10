// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("MainLayout", {main: "Home"}); //(Layout File, {main: partial file})
    }
});

// About Page
FlowRouter.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render("MainLayout", {main: "About"}); //(Layout File, {main: partial file})
    }
});

var JobRoutes = FlowRouter.group({
	prefix: '/job',
	name:'job'
});

JobRoutes.route('/', {
	name: 'jobs',
	action() {
		BlazeLayout.render("MainLayout", {main: "JobList"});
	}
});

JobRoutes.route('/:_id', {
	name: 'job',
	action() {
		BlazeLayout.render("MainLayout", {main: "Job"});
	}
});