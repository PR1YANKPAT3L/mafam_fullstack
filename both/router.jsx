// Contains all the components
AuthComponentRoute = FlowRouter.group({
	prefix: "/auth",
	name: "auth"
});

DashboardComponentRoute = FlowRouter.group({
	prefix: "/dashboard",
	name: "dashboard"
});

var AuthComponents = [
	"Login",
	"Signup"
];

var DashboardComponents = [
	"Home"
];

// For each route, grab the specific component
_.each(AuthComponents, function (label) {
	// Get Route Name
	var routeName = label.toLowerCase().replace(/\s+/g, '');

	// Get Component Name 
	var compName = label.replace(/\s+/g, '') + "Page";

	//console.log("[REQUEST] Route: " + routeName + " | " + compName);

	// Grab the Component requested by Route
	AuthComponentRoute.route('/' + routeName, {
		name: routeName,
		action: function(params) {
			DocHead.addMeta({
		  	  name: "viewport",
		  	  content: "width=device-width, initial-scale=1"
		  	});

		  	DocHead.setTitle(APP_TITLE + " - " + GET_SEO_ATTR(routeName.capitalize(), "title"));
		  	DocHead.addMeta({
		  		name: "description",
		  		content: GET_SEO_ATTR(routeName.capitalize(), "description")
		  	});
		  	DocHead.addMeta({
		  		name: "keywords",
		  		content: GET_SEO_ATTR(routeName.capitalize(), "keywords")
		  	});

			console.log("[DEBUG] Pre-Rendering Route " + routeName);
			// Render the component
			var content = React.createElement(eval(compName));
			ReactLayout.render(MainLayout, {
				content: content
			});
		}
	});
}); 

// For each route, grab the specific component
_.each(DashboardComponents, function (label) {
	// Get Route Name
	var routeName = label.toLowerCase().replace(/\s+/g, '');

	// Get Component Name 
	var compName = label.replace(/\s+/g, '') + "Page";

	//console.log("[REQUEST] Route: " + routeName + " | " + compName);

	// Grab the Component requested by Route
	DashboardComponentRoute.route('/' + routeName, {
		name: routeName,
		action: function(params) {
			DocHead.addMeta({
		  	  name: "viewport",
		  	  content: "width=device-width, initial-scale=1"
		  	});

		  	DocHead.setTitle(APP_TITLE + " - " + GET_SEO_ATTR(routeName.capitalize(), "title"));
		  	DocHead.addMeta({
		  		name: "description",
		  		content: GET_SEO_ATTR(routeName.capitalize(), "description")
		  	});
		  	DocHead.addMeta({
		  		name: "keywords",
		  		content: GET_SEO_ATTR(routeName.capitalize(), "keywords")
		  	});

			console.log("[DEBUG] Pre-Rendering Route " + routeName);
			// Render the component
			var content = React.createElement(eval(compName));
			ReactLayout.render(DashboardLayout, {
				content: content
			});
		}
	});
}); 
