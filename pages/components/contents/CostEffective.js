import Image from "next/image";
// import style from '../../styles/cost-effective.module.scss';

export default function CostEffective() {
	return (
		<div className="cost-effective d-flex flex-row justify-content-between">
			<div className="cost-effective-ground">
				<div className="w-50 d-flex flex-column" style={{ gap: '20px'}}>
					<span className="heading2">Cost effective</span>
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor sit amet, cipiscing, lorem Lorem ipsum dolosectetur adipiscing, lorem Lorem ipsum dolor sit amet, consectetur adipiscing, lorem </span>
					<ul>
						<li className="bolt-text">Lorem ipsum dolor sit amet.</li>
						<li className="bolt-text">Lorem ipsum dolor sit amet.</li>
						<li className="bolt-text">Lorem ipsum dolor sit amet.</li>
					</ul>
					<div className="d-flex flex-row" style={{ gap: '30px'}}>
						<button className="btn1">Try for free</button>
						<button className="btn3">View Pricing</button>
					</div>
				</div>
				<div  className="graph-page">
					<Image src='/graph-page.svg' width="500" height="400" alt="graph-page" />
				</div>
				<div className="save-tag">
					<Image src='/save-tag.svg' width="100" height="100" alt="save-tage" />
				</div>
				<div className="dollar-bag">
					<Image src='/dollar-bag.svg' width="100" height="100" alt="dollar-bag" />
				</div>
				<div className="dollar">
					<Image src='/dollar.svg' width="100" height="100" alt="dollar" />
				</div>
				<div className="graph-line">
					<Image src='/graph-line.svg' width="600" height="100" alt="graph-line" />
				</div>
				<div className="graph">
					<Image src='/graph.svg' width="370" height="350" alt="graph" />
				</div>
				<div className="logo">
					<Image src='/Logo.svg' width="90" height="20" alt="logo" />
				</div>
				<div className="graph-description">
					<span className="description" style={{marginRight: '20px', width: '120px', position: 'absolute', left: '1540px'}}>Manual Assessment Methods</span>
					<span className="description" style={{width: '82px', position: 'absolute', left: '1690px'}}>Other digital Assessment Platforms</span>
				</div>
				<div className="graph-rate">
					<span className="graph-text" style={{marginRight: '20px', width: '10px', position: 'absolute', top:'-84px', left: '1450px'}}>$1</span>
					<span className="graph-text" style={{width: '102px', position: 'absolute', top:'-332px', left: '1550px'}}>$11 - $16</span>
					<span className="graph-text" style={{width: '97px', position: 'absolute', top:'-160px', left: '1700px'}}>$6 - $10</span>
				</div>
			</div>
		</div>
	)
}
