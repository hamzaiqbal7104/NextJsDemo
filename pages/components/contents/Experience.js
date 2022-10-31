import Image from "next/image";
// import style from '../../styles/experience.module.scss';

export default function Experience() {
	return (
		<div className="experience d-flex flex-row">
			<div className="experience-ground">
				<div  className="bottom">
					<Image src='/Bottom.svg' width="200" height="200" alt="experience-body" />
				</div>
				<div className="circle-right">
					<Image src='/mem_ot_circle.svg' width="200" height="200" alt="experience-body" />
				</div>
				<div className="circle-bottom">
					<Image src='/mem_ot_circle1.svg' width="200" height="200" alt="experience-body" />
				</div>
				<div className="dot-rectangle">
					<Image src='/mem_dots_rect2.svg' width="200" height="200" alt="experience-body" />
				</div>
				<div className="arrow">
					<Image src='/arrows.svg' width="100" height="100" alt="experience-body" />
				</div>
				<div className="circles">
					<Image src='/circle-con4.svg' width="200" height="200" alt="experience-body" />
				</div>
				<div className="circles-top-left">
					<Image src='/Group3720.svg' width="200" height="200" alt="experience-body" />
				</div>
			</div>
			<div className="experience-pic d-flex flex-row">
				<div className="experience-pics">
					<div style={{position: 'absolute', top: '-40px', left: '60px'}}>
						<Image src='/Rectangle9144.svg' width="315" height="388" alt="experience-body" />
					</div>
					<div style={{position: 'relative', bottom: '-190px', left: '400px'}}>
						<Image src='/Rectangle9145.svg' width="315" height="388" alt="experience-body" />
					</div>
				</div>
				<div style={{position: 'absolute', top: '150px', left: '190px'}}>
					<Image src='/Frame2608188.svg' width="348" height="354" alt="experience-body" />
				</div>
				<div className="experience-text d-flex flex-column">
					<span className="heading2">Best Candidate Experience</span>
					<span className="text" >Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, consectetur adipiscing, lorem </span>
					<ul>
					<li className="text">Lorem ipsum dolor sit amet.</li>
					<li className="text">Lorem ipsum dolor sit amet.</li>
					<li className="text">Lorem ipsum dolor sit amet.</li>
					<li className="text">Lorem ipsum dolor sit amet.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
