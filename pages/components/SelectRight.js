import Image from "next/image";
// import style from '../../styles/select-right.module.scss';

export default function SelectRight() {
	return (
		<div className="select-right d-flex flex-column df-center">
			<div className="select-right-text d-flex flex-column df-center">
				<div className=" d-flex flex-column df-center" style={{width: '722px', gap: '20px'}}>
					<span className="heading2">Right Candidate for the Right Job!</span>
					<span className="text" style={{width: '672px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing, lorem. Lorem ipsum dolor sit amet, consedipiscing, lorem. Lorem ipsum dolor sior adipiscing, lorem. Lorem i aonsectetur adipiscing.</span>
				</div>
				<div className="d-flex flex-row flex-wrap df-center" style={{gap: '32px'}}>
					<div className="d-flex flex-row df-center" style={{gap: '10px', width: '40%'}}>
					<Image src='/bullet.svg' width="40" height="40" alt="bullet" />
					<span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
					</div>
					<div className="d-flex flex-row df-center" style={{gap: '10px', width: '40%'}}>
					<Image src='/bullet.svg' width="40" height="40" alt="bullet" />
					<span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
					</div>
					<div className="d-flex flex-row df-center" style={{gap: '10px', width: '40%'}}>
					<Image src='/bullet.svg' width="40" height="40" alt="bullet" />
					<span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
					</div>
					<div className="d-flex flex-row df-center" style={{gap: '10px', width: '40%'}}>
					<Image src='/bullet.svg' width="40" height="40" alt="bullet" />
					<span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
					</div>
				</div>
			</div>
			<div className="select-right-pic">
				<div className="header-ground">
					<div  className="earth-circle">
					<Image src='/Group13740.svg' width="269" height="337" alt="earth-circle" />
					</div>
					<div className="right-layer">
					<Image src='/Group13741.svg' width="289" height="213" alt="bottom-layer" />
					</div>
					<div className="bottom-layer">
					<Image src='/Group13745.svg' width="383" height="154" alt="bottom-layer" />
					</div>
					<div className="screen-pic w-100">
					<img src='/Group13747.svg' width= '75%' height='54%' alt="screen-pic"/>
					</div>
					<div className="left-tag">
					<Image src='/Group13742.svg' width="302" height="152" alt="left-tag" />
					</div>
					<div className="man-pic">
					<Image src='/Group13744.svg' width="168" height="405" alt="man-pic" />
					</div>
				</div>
			</div>
		</div>
	)
}
