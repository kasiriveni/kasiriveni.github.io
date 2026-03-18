import React from 'react';

const Loading = () => {
	return (
		<div className="app-loading" role="status" aria-live="polite" aria-busy="true">
			<div className="app-loading-card">
				<div className="app-loading-orbit" aria-hidden="true">
					<div className="app-loading-core" />
					<div className="app-loading-ring app-loading-ring-1" />
					<div className="app-loading-ring app-loading-ring-2" />
				</div>
				<p className="app-loading-title">Loading portfolio</p>
				<p className="app-loading-caption">Bringing everything into focus&hellip;</p>
			</div>
		</div>
	);
};

export default Loading;
