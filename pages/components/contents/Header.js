import Image from "next/image";
// import style from '../../styles/header.module.scss';

export default function Header() {
	return (
		<div className="header d-flex flex-row">
			<div className="header-ground">
				<div className=" w-50 header-text d-flex flex-column" style={{gap: '32px', marginTop: '50px'}}>
					<span className="heading">Lorem ipsum dolor sit amet, consectur </span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</span>
					<div className="d-flex flex-row" style={{ gap: '30px'}}>
					<button className="btn1">Try for free</button>
					<button className="btn3">Reques Demo</button>
					</div>
				</div>
				<div  className="top-circle">
					<Image src='/circle-con5.svg' width="100" height="100" alt="top-circle" />
				</div>
				<div className="left-layer">
					<Image src='/Group13713.svg' width="100" height="100" alt="left-layer" />
				</div>
				<div className="left-square">
					<Image src='/mem_dots_f_square.svg' width="100" height="100" alt="left-square" />
				</div>
				<div className="right-triangle">
					<Image src='/mem_st_fill_triangle2.svg' width="70" height="70" alt="right-triangle" />
				</div>
				<div className="test-detail-pic">
					<Image src='/test-detail.svg' width="710" height="443" alt="test-detail-pic" />
				</div>
				<div className="header-pic">
					<Image src='/header.svg' width="343" height="115" alt="header-pic" />
				</div>
				<div className="header-card-pic">
					<Image src='/header-card.svg' width="330" height="50" alt="header-card-pic" />
				</div>
				<div className="right-card-pic">
					<Image src='/right-card.svg' width="205" height="272" alt="right-card-pic" />
				</div>
				<div className="eye-icon">
					<Image src='/eye.svg' width="24" height="24" alt="eye-icon" />
				</div>
			</div>
		</div>
	)
}
