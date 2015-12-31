// Check if Meteor is running in server environment
if(Meteor.isServer) {
	// Defer script loading
	FlowRouter.setDeferScriptLoading(true);

	// Set page cache timeout
	var timeInMillis = 1000 * 10;
	FlowRouter.setPageCacheTimeout(timeInMillis);
}