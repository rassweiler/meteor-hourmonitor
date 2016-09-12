Template.Nav.events({
	'click .fa-bars':function(){
		Session.set('showMenu', !Session.get('showMenu'));
	},
	'click .login':()=>{
		if(Session.get('nav-toggle') == 'open'){
			Session.set('nav-toggle', '');
		}else{
			Session.set('nav-toggle', 'open');
		}
	},
	'click .logout':()=>{
		AccountsTemplates.logout();
	}
});