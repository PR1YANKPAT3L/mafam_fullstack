DashboardHeader = React.createClass({
	render() {
		return (
			<div className="DashboardHeader">
				<div className="DashboardHeader--Title">
					<h3 className="animated fadeInUp"><i className={ this.props.icon }></i> { this.props.title }</h3>
				</div>
			</div>
		);
	}
});