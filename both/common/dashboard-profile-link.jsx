DashboardWrapperSubLink = React.createClass({
	goToProfileRoute(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/profile');
	},
	goToPasswordRoute(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/password');
	},
	goToNotificationRoute(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/notification');
	},
	goToActivityRoute(e) {
		e.preventDefault();
		FlowRouter.go('/dashboard/activity');
	},
	subNavRender() {
		return (
			<div className="ProfileNavLinks animated fadeIn">
				<ul>
					<li className={ FlowRouter.current().route.name == "profile" ? "active" : null } onClick={ this.goToProfileRoute }><a href="">Profile</a></li>
					<li className={ FlowRouter.current().route.name == "password" ? "active" : null } onClick={ this.goToPasswordRoute }><a href="">Password</a></li>
					<li className={ FlowRouter.current().route.name == "notification" ? "active" : null } onClick={ this.goToNotificationRoute }><a href="">Notifications</a></li>
					<li className={ FlowRouter.current().route.name == "activity" ? "active" : null } onClick={ this.goToActivityRoute }><a href="">Activites</a></li>
				</ul>
			</div>
		);	
	},
	render() {
		return FlowRouter.current().route.name == "home" ? null : this.subNavRender();
	}
});