import meraki from "../images/meraki.png";
import merakiBG from "../images/meraki.jpg";
import skillabhyudaya from "../images/skillabhyudaya.png";
import skillabhyudayaBG from "../images/skillabhyudaya.jpg";
import progothon from "../images/progothon.png";
import progothonBG from "../images/progothon.jpg";

const events = [
	{
		title: "Prog-o-thon",
		subtitle: "Explore Open Source",
		description: "For the students, by the students",
		link: "/event/progothon",
		image: progothon,
		background: progothonBG,
		color: "var(--indigo)",
	},
	{
		title: "Skillabhyudaya",
		subtitle: "Web Development and Design event of IIIT Una",
		description: "A 17 day event for garnishing the skills and teamwork",
		href: "https://skillabhyudaya.vercel.app/",
		image: skillabhyudaya,
		background: skillabhyudayaBG,
		color: "var(--indigo)",
		btnText: "Visit Website",
	},
	{
		title: "Meraki",
		subtitle: "TechFest of IIIT Una",
		description: "A fest of Creativity, Love and the Soul",
		href: "https://meraki-23.vercel.app/",
		image: meraki,
		background: merakiBG,
		color: "transparent",
		btnText: "Visit Website",
	},
];

export default events;
