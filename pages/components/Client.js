import Image from "next/image";
// import style from '../../styles/client.module.scss';

export default function Client() {
	return (
		<div className="client d-flex flex-column">
			<span className="heading">Our Clients</span>
			<div className="client-img d-flex flex-row">
				<Image src='/drive.svg' width="100" height="50" alt="drive" />
				<Image src='/slack.svg' width="100" height="50" alt="slack" />
				<Image src='/stripe.svg' width="100" height="50" alt="stripe" />
				<Image src='/jira.svg'  width="100" height="50" alt="jira" />
				<Image src='/github.svg' width="100" height="50" alt="github" />
				<Image src='/figma.svg' width="100" height="50" alt="figma" />
				<Image src='/cubejs.svg' width="100" height="50" alt="cubejs" />
			</div>
		</div>
	)
}
