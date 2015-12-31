ContentWrapper = React.createClass({
	render() {
		return (
			<div className="FullWrapper" style={ styles.ContentWrapper }>
				{ this.props.children }
			</div>
		);
	}
});