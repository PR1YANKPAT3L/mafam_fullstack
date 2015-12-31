APP_TITLE = "Mafam";

SEO_INFO = {
	"Login": {
		title: "Login",
		description: "Login Page",
		keywords: "Mafam Login Page"
	},
	"Signup": {
		title: "Signup",
		description: "Signup Page",
		keywords: "Signup Login Page"
	}
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

GET_SEO_ATTR = function (_prop, type) {
	for(var key in SEO_INFO) {
		switch(type) {
			case "title":
				if(SEO_INFO.hasOwnProperty(_prop)) {
					return SEO_INFO[_prop].title;
				}
				break;

			case "description":
				if(SEO_INFO.hasOwnProperty(_prop)) {
					return SEO_INFO[_prop].description;
				}
				break;

			case "keywords":
				if(SEO_INFO.hasOwnProperty(_prop)) {
					return SEO_INFO[_prop].keywords;
				}
				break;
		}
	}
}