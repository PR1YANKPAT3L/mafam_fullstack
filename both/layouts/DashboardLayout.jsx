DashboardLayout = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			authInProgress: Meteor.loggingIn(),
			canShow: !!Meteor.user()
		};
	},
	render() {
		return (
			<div className="MainLayout">
				{this.props.content }
			</div>
		);
	}
});