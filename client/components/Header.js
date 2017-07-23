import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<header id="header">
			<div className="header_top">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="companyName">
								<a href=""><i className="fa fa-comments-o"></i>My Chat</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
