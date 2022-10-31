import Image from "next/image";
// import style from '../../styles/footer.module.scss';

export default function Footer() {
	return (
		<div className="footer">
			<div className="d-flex flex-row align-items-start justify-content-between" style={{width:'1370px', marginBottom: '100px'}}>
				<div className="d-flex flex-column align-items-start" style={{width:'370px', gap: '20px'}}>
					<Image src="/Logo.svg" width="144" height="32" alt="LogoImage" />
					<span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem Lorem ipsum dolor.</span>
					<div className="social d-flex flex-row justify-content-between" style={{width:'136.58px'}}>
						<Image src="/fb.svg" width="24" height="24" alt="LogoImage" />
						<Image src="/in.svg" width="24" height="24" alt="LogoImage" />
						<Image src="/tw.svg" width="24" height="24" alt="LogoImage" />
					</div>
				</div>
				<div className="d-flex flex-column align-items-start justify-content-between" style={{ gap: '20px'}}>
					<span className="footer-heading">Product</span>
					<span className="footer-text">How it works</span>
					<span className="footer-text">Multiple Test Types</span>
					<span className="footer-text">Integrations</span>
					<span className="footer-text">Testimonials</span>
				</div>
				<div className="d-flex flex-column align-items-start justify-content-between" style={{ gap: '20px'}}>
					<span className="footer-heading">Company</span>
					<span className="footer-text">About Us</span>
					<span className="footer-text">Try Now</span>
					<span className="footer-text">Contact Us</span>
				</div>
				<div className="d-flex flex-column align-items-start justify-content-between" style={{ gap: '20px'}}>
					<span className="footer-heading">Resources</span>
					<span className="footer-text">Test Directory</span>
					<span className="footer-text">Pricing</span>
					<span className="footer-text">Blogs</span>
					<span className="footer-text">FAQs</span>
				</div>
			</div>
			<div className="hr" />
			<div className=" footer-bottom d-flex flex-row justify-content-between">
				<div className="d-flex flex-row" style={{ gap: '20px'}}>
					<span className="footer-text">Privacy Policy</span>
					<span className="footer-text"> | </span>
					<span className="footer-text">Terms & Conditions</span>
				</div>
				<span className="footer-text" style={{color: '#392D69'}}>© Testfuse 2022</span>
			</div>
		</div>
	)
}
