import Image from "next/image";
// import style from '../../styles/deigned.module.scss';

export default function Designed() {
	return (
		<div className="designed-by d-flex flex-row justify-content-between">
			<div className="designed-by-ground">
				<div  className="rectangle-top">
					<Image src='/dots_rect2.svg' width="100" height="100" alt="right-arrow" />
				</div>
				<div className="circle-left">
					<Image src='/mem_ot_circle1.svg' width="100" height="100" alt="triangle" />
				</div>
				<div className="layer-left">
					<Image src='/Group13713.svg' width="100" height="100" alt="square" />
				</div>
				<div className="img">
					<Image src='/Maskgroup.svg' width="1100" height="650" alt="card" />
				</div>
				<div className="w-50 d-flex flex-column" style={{position: 'relative', left: '880px', marginTop: '100px', marginRight: '50px'}}>
					<div style={{position: 'relative', left: '820px'}}>
						<Image src='/mem_arrows.svg' width="100" height="100" position='absolute' alt="experience-body" />
					</div>
					<span className="heading2">Designed by Subject Matter Experts</span>
					<span className="text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, cipiscing, lorem Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, cipiscing, lorem Lorem ipsum dolosectetur adipiscing, lorem Lorem ipsum dolor sit amet, consectipiscing, lorem Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, cipiscing, lorem Lorem ipsum dolosectetur adipiscing, lorem Lorem ipsum dolor sit amet, consectetur adipiscing, lorem </span>
				</div>
			</div>
		</div>
	)
}
