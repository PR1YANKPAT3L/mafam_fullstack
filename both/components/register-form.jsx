RegisterForm = React.createClass({
	validateRegistration(e) {
		e.preventDefault();
		let registerVals = {
			email: e.target.loginEmail.value,
			pass: e.target.loginPass.value,
			passRepeat: e.target.loginPassRepeat.value
		};
		if(registerVals.pass === registerVals.passRepeat) 
		{
			Accounts.createUser({
				email: registerVals.email,
				password: registerVals.pass
			});
		} else {
			console.log("Passwords don't match")
		}
	},
	render() {
		return (
			<form className="RegisterForm animated fadeIn" onSubmit={ this.validateRegistration }>
				<input type="email" name="loginEmail" className="email-address" placeholder="Email Address" required />
				<input type="password" name="loginPass" className="" placeholder="Password" required />
				<input type="password" name="loginPassRepeat" className="" placeholder="Password" required />
				<button>Submit</button>
			</form>
		);
	}
});