import Image from "next/image";
// import style from '../../styles/whyus.module.scss';

export default function WhyUs() {
	return (
		<div className="why-us d-flex flex-column df-center">
			<div className="why-us-text d-flex flex-column">
				<span className="heading2"> Why choose us? </span>
				<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, consectetur adipiscing, lorem .</span>
			</div>
			<div className="why-us-cards d-flex flex-row df-center">
				<div className="card df-center">
					<Image src='/user-check.svg' width="100" height="100" alt="card" />
					<h2 className="card-heading">Value-fitness Test</h2>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consect adipiscing,</span>
				</div>
				<div className="card df-center">
					<Image src='/slash.svg' width="100" height="100" alt="card" />
					<span className="card-heading">60+ Coding Languages</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consect adipiscing,</span>
				</div>
				<div className="card df-center">
					<Image src='/ai.svg' width="100" height="100" alt="card" />
					<span className="card-heading">AI Driven Personality Assesments</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur adipiscing,</span>
				</div>
			</div>
		</div>
	)
}
