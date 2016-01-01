DashboardHeader = React.createClass({
	render() {
		return (
			<div className="DashboardHeader">
				<div className="DashboardHeader--Title">
					<h3 className={ FlowRouter.current().route.name == "home" || FlowRouter.current().route.name == "library" ? "animated fadeInUp lo" : "animated fadeInUp" }><i className={ this.props.icon }></i> { this.props.title }</h3>
				</div>
				<DashboardWrapperSubLink />
			</div>
		);
	}
});