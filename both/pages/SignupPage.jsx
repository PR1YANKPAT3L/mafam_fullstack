SignupPage = React.createClass({
	goToLogin(e) {
		e.preventDefault();
		FlowRouter.go('/auth/login');
	},
	render() {
		return (
			<ContentWrapper>
				<div className="register-container">
					<div className="RegisterHeader">
						<h1>Mafam Registration</h1>
						<div className="Login-fab" title="Member Login" onClick={ this.goToLogin }>
							<i className="bi_interface-login"></i>
						</div>
					</div>
					<RegisterForm />
				</div>
			</ContentWrapper>
		);
	}
});