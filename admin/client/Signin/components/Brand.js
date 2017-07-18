/**
 * Renders a logo, defaulting to the Keystone logo if no brand is specified in
 * the configuration
 */

import React from 'react';

const Brand = function (props) {
	// Default to the KeystoneJS logo
	let logo = { src: '/logo.png', width: 205 };
	if (props.logo) {
		logo = typeof props.logo === 'string' ? { src: props.logo } : props.logo;
	}
	return (
		<div className="auth-box__col">
			<div className="auth-box__brand">
				<a href="/" className="auth-box__brand__logo">
					<img
						src={logo.src}
						width={logo.width ? logo.width : null}
						height={logo.height ? logo.height : null}
						alt={props.brand}
					/>
				</a>
			</div>
		</div>
	);
};

module.exports = Brand;
