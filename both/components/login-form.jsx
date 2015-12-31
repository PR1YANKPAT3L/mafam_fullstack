LoginForm = React.createClass({
	validiateLogin(e) {
		e.preventDefault();
		let loginVals = {
			email: e.target.loginEmail.value,
			pass: e.target.loginPass.value
		};
		Meteor.loginWithPassword(loginVals.email, loginVals.pass, function (error) {
			console.log("Initiated Login process");
			if(error)
				console.log("Error:" + error);
			else {
				Meteor.setTimeout(function () {
					FlowRouter.go('/dashboard/home');
				}, 1000);
			}
		});
	},
	render() {
		return (
			<form className="LoginForm animated fadeIn" onSubmit={ this.validiateLogin }>
				<input type="email" name="loginEmail" className="email-address" placeholder="Email Address" required />
				<input type="password" name="loginPass" className="" placeholder="Password" required />
				<button>Submit</button>
			</form>
		);
	}
});