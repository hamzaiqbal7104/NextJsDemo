import Image from "next/image";
// import style from '../../styles/compare.module.scss';

export default function Compare() {
	return (
		<div className="compare d-flex flex-column ">
			<div className="d-flex flex-column df-center" style={{margin: '0px 100px', gap: '20px'}}>
				<span className="heading2">Compare & Evaluate Candidates with Few Clicks</span>
				<span className="text" style={{margin: '0px 500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolosectetur adipiscing, lorem lorem. Lorem ipsum dolor sit amet, consedipiscing, lorem. Lorem ipsum dolor sior adipiscing, lorem. Lorem i aonsectetur adipiscing, loremipsum dosit amet, </span>
				<div className="d-flex flex-row" style={{ gap: '30px'}}>
					<button className="btn1">Try for free</button>
					<button className="btn3">Request Demo</button>
				</div>
			</div>
			<div style={{position: 'relative', width: '100%'}}>
				<div className="" style={{position: 'relative', width: '140%'}}>
					<img src='/vector.svg' width= '75%' alt="experience-body"/>
				</div>
				<div className="" style={{position: 'absolute', top:'0px', width: '100%', margin: '0px 190px'}}>
					<img src='/Group13762.svg' width= '75%' alt="experience-body"/>
				</div>
			</div>
		</div>
	)
}
