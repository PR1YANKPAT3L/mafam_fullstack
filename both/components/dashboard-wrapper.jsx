DashboardWrapper = React.createClass({
	renderNotification() {
		return (
			<SysNotify messageType="SysNotify--Alert" icon="bi_com-email-cross" message="UH OH! Seems like you haven't verified your email address. Please check your email address for our validation instructions." />
		);
	},
	render() {
		return (
			<div className="DashboardContainer">
				<DashboardHeader title={ this.props.title } icon={ this.props.icon } />
				<div className="DashboardContent">
					{ Meteor.user().emails[0].verified ? null : this.renderNotification() }
				</div>
			</div>
		);
	}
});