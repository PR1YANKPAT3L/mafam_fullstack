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
	render() {
		return (
			<div className="DashboardNavBar">
				<ul className="MainNav">
					<li><a href="">Dashboard</a></li>
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
									<p>priyankpatel4@hotmail.com</p>
									<a className="ViewProfile">View Profile</a>
								</div>
								<ul className="Nav">
									<li><a href=""><i className="bi_user-single-round"></i> account settings</a></li>
									<li><a href=""><i className="bi_setting-notification"></i> notification settings</a></li>
									<li><a href=""><i className="bi_web-logout"></i> logout</a></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>	
			</div>
		);
	}
});