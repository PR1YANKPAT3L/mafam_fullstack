DashboardNavigation = React.createClass({
	getInitialState() {
		return {
			DDOpen: "DDClose"
		};
	},	
	toggleAccountDD(e) {
		if(this.state.DDOpen == "DDClose")
			this.setState({ DDOpen: "DDOpen" });
 		else
			this.setState({ DDOpen: "DDClose" });
	},
	goToDashboard(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/home');
	},
	goToProfile(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/profile');
	},

	goLogout(e) {
		e.preventDefault();
		Meteor.logout();
		FlowRouter.go('/auth/login');
	},
	render() {
		return (
			<div className="DashboardNavBar">
				<ul className="MainNav">
					<li><a href="" onClick={ this.goToDashboard }>Dashboard</a></li>
					<li><a href="">Library</a></li>
				</ul>
				<ul className="AccountNav">
					<li><a href=""><i className="bi_interface-bell-a"></i></a></li>
					<li><a href=""><i className=" bi_interface-thumbnail"></i></a></li>
					<li className={ this.state.DDOpen }>
						<a href="" onClick={ this.toggleAccountDD } className="AccountNav-User"><span>priyankpatel</span> <i className="bi_interface-bottom"></i></a>
						<div className="AccountNav-DropDown">
							<div className="content">
								<div className="AV">
									lol
								</div>
								<div className="Text">
									<h1>priyankpatel</h1>
									<p>{ Meteor.user().emails[0].address }</p>
									<a className="ViewProfile" onClick={ this.goToProfile }>View Profile</a>
								</div>
								<ul className="Nav">
									<li><a href=""><i className="bi_user-single-round"></i> account settings</a></li>
									<li><a href=""><i className="bi_setting-notification"></i> notification settings</a></li>
									<li><a href="" onClick={ this.goLogout }><i className="bi_web-logout"></i> logout</a></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>	
			</div>
		);
	}
});