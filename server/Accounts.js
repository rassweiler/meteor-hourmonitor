var postSignUp = function(userId, info){
	Roles.addUsersToRoles(userId,['general']);
}

AccountsTemplates.configure({
	privacyUrl: 'privacy',
	termsUrl: 'terms-of-use',
	postSignUpHook: postSignUp,
});