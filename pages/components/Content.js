import Image from "next/image";


export default function Content() {
  return (
    <div className="content-container d-flex flex-column">
      <div className="header d-flex flex-row">
        <div className="cost-effective-ground">
          <div className=" w-50 header-text d-flex flex-column" style={{gap: '32px', marginTop: '50px'}}>
            <span className="heading">Lorem ipsum do, lorem ipsum dolor sit amet, consectur </span>
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
        {/* <div className="header-text d-flex flex-column">
          <span className="heading">Lorem ipsum do, lore consectur </span>
          <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</span>
          <div className="btn d-flex flex-row">
            <button className="btn1">Try for free</button>
            <button className="btn3">Reques Demo</button>
          </div>
        </div>
        <div className="img">
          <Image src='/top.svg' width="1000" height="500" alt="Top Image" />
        </div> */}
      </div>
      <div className="client d-flex flex-column">
        <span className="heading">Our Clients</span>
        <div className="client-img d-flex flex-row">
          <Image src='/drive.svg' width="100" height="50" alt="drive" />
          <Image src='/slack.svg' width="100" height="50" alt="slack" />
          <Image src='/stripe.svg' width="100" height="50" alt="stripe" />
          <Image src='/jira.svg'  width="100" height="50" alt="jira" />
          <Image src='/github.svg' width="100" height="50" alt="github" />
          <Image src='/figma.svg' width="100" height="50" alt="figma" />
          <Image src='/cubejs.svg' width="100" height="50" alt="cubejs" />
        </div>
      </div>
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
      {/* <div className="how-work d-flex flex-column">
        <div className="how-work-head d-flex flex-column">
          <span className="heading">How it works</span>
          <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem. Lorem ipsum dolor sit amet, consectetur adipiscing, lorem </span>
          <div className="img d-flex flex-row">
            <Image src='/1.svg' width="50" height="50" alt="1 Image" />
            <Image src='/line.svg' width="300" height="50" alt="1 Image" />
            <Image src='/2.svg' width="50" height="50" alt="1 Image" />
            <Image src='/line.svg' width="300" height="50" alt="1 Image" />
            <Image src='/3.svg' width="50" height="50" alt="1 Image" />
          </div>
        </div>
        <div className="how-work-step d-flex flex-row">
          <div className="how-work-step-text d-flex flex-column">
            <span className="heading" style={{color: '#FFFFFF'}}>Set Entry Question(s)</span>
            <span className="text" style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet, consectetur adipiscing, lorem. Lorem ipsum dolor sit amet, consedipiscing, lorem. Lorem ipsum dolor sior adipiscing, lorem. Lorem i aonsectetur adipiscing, loremipsum dosit amet, consectetur adipiscing, lorem. Lorem. consectetu</span>
            <Image src='/arrows.svg' width="100" height="100" alt="1 Image" />
          </div>
          <div className="how-work-img-container">
            <div className="how-work-content">
              <div className="top-filled-box">
                <Image className="top-fill-box" src='/dots.svg' width="132" height="132" alt="1 Image" />
              </div>
              <Image className="top-fill-box" src='/dots.svg' width="132" height="132" alt="1 Image" /> 
              <div className="top-empty-box"></div>
              <div className="bottom-filled-box"></div>
              <div className="bottom-dotted-box"></div>
              <div className="qq-img">
                <Image src='/qq.svg' width="700" height="380" alt="1 Image" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="select-right d-flex flex-column df-center">
        <div className="select-right-text d-flex flex-column df-center">
          <span className="heading2">Right Candidate for the Right Job!</span>
          <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing, lorem. Lorem ipsum dolor sit amet, consedipiscing, lorem. Lorem ipsum dolor sior adipiscing, lorem. Lorem i aonsectetur adipiscing.</span>
        </div>
        <div className="d-flex flex-row df-center" style={{gap: '32px'}}>
          <div className="d-flex flex-row" style={{gap: '10px'}}>
            <Image src='/bullet.svg' width="40" height="40" alt="bullet" />
            <span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
          <div className="d-flex flex-row" style={{gap: '10px'}}>
            <Image src='/bullet.svg' width="40" height="40" alt="bullet" />
            <span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
        </div>
        <div className="d-flex flex-row df-center" style={{gap: '32px'}}>
          <div className="d-flex flex-row" style={{gap: '10px'}}>
            <Image src='/bullet.svg' width="40" height="40" alt="bullet" />
            <span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
          <div className="d-flex flex-row" >
            <Image src='/bullet.svg' width="40" height="40" alt="bullet" />
            <span className="text">Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
        </div>
        <div style={{width: '100%'}}>
          <Image src='/select-right.svg' width="2000" height="1000" alt="select-right" />
        </div>
      </div>
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
            <span className="graph-text" style={{width: '92px', position: 'absolute', top:'-332px', left: '1550px'}}>$11 - $16</span>
            <span className="graph-text" style={{width: '82px', position: 'absolute', top:'-160px', left: '1700px'}}>$6 - $10</span>
          </div>
        </div>
      </div>
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
            {/* <Image src='/vector.svg' width="9000" height="300" position='relative' alt="experience-body" /> */}
          </div>
          <div className="" style={{position: 'absolute', top:'0px', width: '100%', margin: '0px 190px'}}>
            <img src='/Group13762.svg' width= '75%' alt="experience-body"/>
          </div>
          {/* <Image src='/Group13762.svg' width="500px" height="100" position='absolute' alt="experience-body" /> */}
        </div>
      </div>
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
    </div>
  )
}
