import Image from "next/image";
// import style from '../../styles/testmonial.module.scss';

export default function TestMonial() {
	return (
		<div className="testimonial d-flex flex-column" style={{ gap: '30px'}}>
			<div className="d-flex flex-column" style={{ gap: '30px'}}>
				<span className="heading2"> Testimonials</span>
				<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem, Lorem ipsum dolor sit amet, consectetur adipiscing, lorem </span>
			</div>
			<div className="testimonial-card d-flex flex-row" style={{ gap: '30px'}}>
				<div className="card align-items-start">
					<Image src='/slack1.svg' width="50" height="50" alt="card" />
					<h2 className="heading2">Slack</h2>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consect adipiscing,</span>
				</div>
				<div className="card align-items-start">
					<Image src='/jira1.svg' width="50" height="50" alt="card" />
					<span className="heading2">Jira</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consect adipiscing,</span>
				</div>
				<div className="card1 d-flex flex-column align-items-start">
					<Image src='/cube.svg' width="50" height="50" alt="card" />
					<span className="heading2">Cube.Js</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, loremLorem ipsum dolor sit amet, consectetur adipiscing,</span>
				</div>
			</div>
		</div>
	)
}
