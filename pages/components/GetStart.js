import Image from "next/image";
// import style from '../../styles/get-start.module.scss';

export default function GetStart() {
	return (
		<div className="get-start d-flex flex-row justify-content-between" style={{ gap: '30px', padding: '0px 40px'}}>
			<div className="get-start-ground">
				<div className="w-50 d-flex flex-column" style={{ gap: '30px', marginTop: '120px'}}>
					<span className="heading2">Ready to Get Started?</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem, Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing, lorem, Lorem ip. olor sit amet, consectetur adipiscing, lorem, Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
					<div className="d-flex flex-row" style={{ gap: '30px'}}>
						<button className="btn1">Try for free</button>
						<button className="btn3">View Pricing</button>
					</div>
				</div>
				<div  className="right-arrow">
					<Image src='/right-arrows.svg' width="100" height="100" alt="right-arrow" />
				</div>
				<div className="triangle-right">
					<Image src='/mem_st_fill_triangle2.svg' width="100" height="100" alt="triangle" />
				</div>
				<div className="square-left">
					<Image src='/mem_dots_f_square.svg' width="100" height="100" alt="square" />
				</div>
				<div className="img">
					<Image src='/Frame2608428.svg' width="500" height="400" alt="card" />
				</div>
			</div>
		</div>
	)
}
