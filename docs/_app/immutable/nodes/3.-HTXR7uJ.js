import{b,d as y,f as _,a as x}from"../chunks/BMrxP1t7.js";import"../chunks/DbkVW926.js";import{B as w,h as p,H as v,I as E,J as k,f as h,K as R,M as A,O as M,P as S,Q as D,R as l,D as u,G as O,F as g}from"../chunks/Dpp1rAor.js";import{s as L}from"../chunks/DrXkjwgm.js";import{l as C}from"../chunks/Bd10G275.js";function I(c,s,e=!1,o=!1,f=!1){var d=c,i="";w(()=>{var r=E;if(i===(i=s()??"")){p&&v();return}if(r.nodes!==null&&(k(r.nodes.start,r.nodes.end),r.nodes=null),i!==""){if(p){h.data;for(var t=v(),m=t;t!==null&&(t.nodeType!==R||t.data!=="");)m=t,t=A(t);if(t===null)throw M(),S;b(h,m),d=D(t);return}var a=i+"";e?a=`<svg>${a}</svg>`:o&&(a=`<math>${a}</math>`);var n=y(a);if((e||o)&&(n=l(n)),b(l(n),n.lastChild),e||o)for(;l(n);)d.before(l(n));else d.before(n)}})}const H=`<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
	@font-face {
		font-display: block;
		font-family: Roboto;
		src:
			url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2)
				format('woff2'),
			url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff)
				format('woff');
	}

	@font-face {
		font-display: fallback;
		font-family: Roboto;
		font-weight: 600;
		src:
			url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2)
				format('woff2'),
			url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff)
				format('woff');
	}

	@font-face {
		font-display: fallback;
		font-family: Roboto;
		font-weight: 700;
		src:
			url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2)
				format('woff2'),
			url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff)
				format('woff');
	}

	#sib-container input:-ms-input-placeholder {
		text-align: left;
		font-family: Helvetica, sans-serif;
		color: #c0ccda;
	}

	#sib-container input::placeholder {
		text-align: left;
		font-family: Helvetica, sans-serif;
		color: #c0ccda;
	}

	#sib-container textarea::placeholder {
		text-align: left;
		font-family: Helvetica, sans-serif;
		color: #c0ccda;
	}

	#sib-container a {
		text-decoration: underline;
		color: #2bb2fc;
	}
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;width: 100%;">
	<div id="sib-form-container" class="sib-form-container rounded-xl">
		<div
			id="error-message"
			class="sib-form-message-panel"
			style="
				font-size: 16px;
				text-align: left;
				font-family: Helvetica, sans-serif;
				color: #661d1d;
				background-color: #ffeded;
				border-radius: 3px;
				border-color: #ff4949;
				max-width: 500px;
			"
		>
			<div class="sib-form-message-panel__text sib-form-message-panel__text--center">
				<svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
					<path
						d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
					/>
				</svg>
				<span class="sib-form-message-panel__inner-text">
					Your subscription could not be saved. Please try again.
				</span>
			</div>
		</div>
		<div></div>
		<div
			id="success-message"
			class="sib-form-message-panel"
			style="
				font-size: 16px;
				text-align: left;
				font-family: Helvetica, sans-serif;
				color: #085229;
				background-color: #e7faf0;
				border-radius: 3px;
				border-color: #13ce66;
				max-width: 500px;
			"
		>
			<div class="sib-form-message-panel__text sib-form-message-panel__text--center">
				<svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
					<path
						d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
					/>
				</svg>
				<span class="sib-form-message-panel__inner-text">
					Your subscription has been successful.
				</span>
			</div>
		</div>
		<div></div>
		<div
			id="sib-container"
			class="sib-container--medium sib-container--vertical"
			style="
				text-align: center;
				background-color: rgba(255, 255, 255, 1);
				max-width: 500px;
				border-radius: 15px;
				border-width: 1px;
				border-color: #c0ccd9;
				border-style: solid;
				direction: ltr;
			"
		>
			<form
				id="sib-form"
				method="POST"
				action="https://5f209d22.sibforms.com/serve/MUIFAAZlJNRepdN577ELRVRHk7JuMThb3OZCQFSYJC7coHrgOwJjGboOxqozDbgiwf0MJ0FP-6sMXFUwrHDZWW7g1OSDP0nM3kODO2BSD5MBQKc0LJ6mHWEOVMcsK8AE7Y6p-57yDF5EC9rrHs-n6WsePYDNPYUBat0zGhw57oaMCWDCXntav2sKSg7GmbZo4rgwZCISNHMZBkQONA=="
				data-type="subscription"
			>
				<div style="padding: 8px 0">
					<div class="sib-input sib-form-block">
						<div class="form__entry entry_block">
							<div class="form__label-row">
								<label
									class="entry__label"
									style="
										font-weight: 700;
										text-align: left;
										font-size: 16px;
										text-align: left;
										font-weight: 700;
										font-family: Helvetica, sans-serif;
										color: #3c4858;
									"
									for="EMAIL"
									data-required="*"
									>Join the waitlist.</label
								>

								<div class="entry__field">
									<input
										class="input"
										type="text"
										id="EMAIL"
										name="EMAIL"
										autocomplete="off"
										placeholder="Provide your email to join!"
										data-required="true"
										required
									/>
								</div>
							</div>

							<label
								class="entry__error entry__error--primary"
								style="
									font-size: 16px;
									text-align: left;
									font-family: Helvetica, sans-serif;
									color: #661d1d;
									background-color: #ffeded;
									border-radius: 3px;
									border-color: #ff4949;
								"
							>
							</label>
						</div>
					</div>
				</div>
				<div style="padding: 8px 0">
					<div
						class="g-recaptcha"
						data-sitekey="6LegWWksAAAAAI-j-SZM12hP-W6i3qftFo0KDcYO"
						data-callback="invisibleCaptchaCallback"
						data-size="invisible"
						onclick="executeCaptcha"
					></div>
				</div>
				<div style="padding: 8px 0">
					<div class="sib-form-block" style="text-align: center">
						<button
							class="sib-form-block__button sib-form-block__button-with-loader"
							style="
								font-size: 16px;
								text-align: center;
								font-weight: 700;
								font-family: Helvetica, sans-serif;
								color: #ffffff;
								background-color: #3e4857;
								border-radius: 3px;
								border-width: 0px;
							"
							form="sib-form"
							type="submit"
						>
							<svg
								class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
								viewBox="0 0 512 512"
								style=""
							>
								<path
									d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
								/>
							</svg>
							Subscribe
						</button>
					</div>
				</div>

				<input type="text" name="email_address_check" value="" class="input--hidden" />
				<input type="hidden" name="locale" value="en" />
			</form>
		</div>
	</div>
</div>
<!-- END - We recommend to place the above code where you want the form in your website html  -->

<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
	window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
	window.LOCALE = 'en';
	window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
		'The information provided is invalid. Please review the field format and try again.';

	window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';

	window.GENERIC_INVALID_MESSAGE =
		'The information provided is invalid. Please review the field format and try again.';

	window.translation = {
		common: {
			selectedList: '{quantity} list selected',
			selectedLists: '{quantity} lists selected',
			selectedOption: '{quantity} selected',
			selectedOptions: '{quantity} selected'
		}
	};

	var AUTOHIDE = Boolean(0);
<\/script>

<script defer src="https://sibforms.com/forms/end-form/build/main.js"><\/script>

<script src="https://www.google.com/recaptcha/api.js?hl=en"><\/script>

<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Brevo Form -->
`;var N=_('<div class="flex items-center justify-center h-screen"><div class="grid place-items-center"><img class="logo" alt="pokestockwuphf"/> <h1 class="text-5xl font-bold m-3">pokestockwuphf</h1> <div class="h-1 w-15 bg-gray-300 rounded-full m-3"></div> <p class="text-xl m-3 font-bold">Find your chase cards faster with coverage across 100+ UK TCG shops!</p> <p class="text-xl m-3 font-bold">Never miss a beat (or a box) with instant stock alerts!</p> <div class="h-1 w-15 bg-gray-300 rounded-full m-3"></div> <p class="text-xl m-3 italic">Comming Soon to a Discord Server near you...</p> <div class="h-1 w-15 bg-gray-300 rounded-full mt-3"></div> <!></div></div>');function F(c){var s=N(),e=u(s),o=u(e),f=O(o,16);I(f,()=>H),g(e),g(s),w(()=>L(o,"src",C)),x(c,s)}export{F as component};
