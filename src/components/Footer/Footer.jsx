import React, { useState } from "react";
import "./footer.css";
import banner from "../../images/banner2.jpg";
import socials from "../../utils/socials";
import navLinks from "../../utils/navigation";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((p) => ({ ...p, [name]: value }));
	};
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `linear-gradient(
			to top,
			rgba(46, 49, 65, 0.75),
			rgba(46, 49, 65, 0.75)
		),
		url(${banner})`,
			}}
		>
			<div className="footer-head">Get In Touch</div>
			<div className="footer-body">
				<div className="footer-body-left">
					<form
						name="contact"
						className="footer-form"
						data-netlify="true"
						method="POST"
						netlify
					>
						<input
							type="text"
							placeholder="Type your full name"
							required
							name="name"
							value={user.name}
							onChange={handleChange}
						/>
						<input
							type="email"
							placeholder="Email Address"
							required
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
						<textarea
							type="text"
							placeholder="Type your message here"
							required
							rows={5}
							name="message"
							value={user.message}
							onChange={handleChange}
						></textarea>
						<input type="hidden" name="form-name" value="contact" />
						<Button
							type="submit"
							text="Send Message"
							color="white"
						/>
					</form>
				</div>
				<div className="footer-body-right">
					{socials.map((social, id) => (
						<div className="footer-body-right-social" key={id}>
							<a
								href={social.link}
								target="_blank"
								rel="noreferrer"
							>
								<div className="footer-body-right-social__icon">
									{social.icon}
								</div>
								<span className="footer-body-right-social__linktext">
									{social.linkText}
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
			<div className="footer-foot">
				<div className="footer-foot-made">
					<span>
						Made with ❤ by{" "}
						<a
							href="https://akshatmittal61.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							Akshat Mittal
						</a>
					</span>
				</div>
				<div className="footer-foot-nav">
					<nav>
						{navLinks.map((nav, id) => (
							<Link to={nav.link} key={id}>
								{nav.text}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
