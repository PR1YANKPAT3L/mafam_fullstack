LoginPage = React.createClass({
	goToRegister(e) {
		e.preventDefault();
		FlowRouter.go('/auth/signup');
	},
	render() {
		return (
			<ContentWrapper>
				<div className="login-container">
					<div className="LoginHeader">
						<h1>Mafam Login</h1>
						<div className="Signup-fab" title="Register for Free!" onClick={ this.goToRegister }>
							<i className="bi_user-male-plus"></i>
						</div>
					</div>
					<LoginForm />
					<a href="" className="ForgotLink"><i className="bi_user-password"></i> Forgot Password</a>
				</div>
			</ContentWrapper>
		);
	}
});