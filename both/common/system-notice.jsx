SysNotify = React.createClass({
	render() {
		return (
			<div className={ this.props.messageType }>
				<i className={ this.props.icon }></i> <span>{ this.props.message }</span>
			</div>
		);
	}
});