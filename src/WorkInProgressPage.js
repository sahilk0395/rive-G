
import mobiletext from './Resources/mobiletext.png';
import mobile6 from './Resources/mobile6.png';
import mobile5 from './Resources/mobile5.png';
import mobile9 from './Resources/mobile9.png';
import Image1 from './Resources/Image1.png';

function WorkInProgressPage() {
    return (
        <>
    <div style={{width: "100%",height:"calc(100vh - 64px)"}} className="desktopView">
        <img src={mobile6} style={{width: "100%",height:"calc(100vh - 64px)",overflow: "hidden"}}/>
        <img src={mobile5} style={{position: "absolute", top: "46px",left: "37px"}}/>
        <img src={mobiletext} style={{position: "absolute", top: "387px",left: "1129px"}}/>
        <div style={{position: "absolute",textAlign:"left",top: "497px",fontFamily: "Helvetica Neue",letterSpacing: 0, color: "#FFFFFF",left:"1142px"}}>
            <span style={{fontSize: "28px"}}>RIVE GAUCHE,</span>
            <br></br>
            <span style={{fontSize: "24px"}}>Gate Village 3, 3rd Floor, DIFC, Dubai UAE  </span> 
        </div>
        <div style={{left: "0px",height: "64px",background: "#020202 0% 0% no-repeat padding-box",opacity: "1",paddingTop: "18px",paddingBottom: "18px",
            textAlign: "left",
            paddingLeft: "43px"}}>
            <span style={{left: "43px",letterSpacing: 0,color: "#F8F7F7",opacity: 1,position: "absolute",/* bottom: 0px; */fontSize: "24px",fontFamily: "Helvetica Neue, Regular"}}>
                THIS SITE IS UNDER CONSTRUCTION
            </span>
            <span style={{right: "52px",letterSpacing: 0,color: "#F8F7F7",opacity: 1,position: "absolute",/* bottom: 0px; */fontSize: "24px",fontFamily: "Helvetica Neue, Regular"}}>
            Designed by Elan Vital
            </span>
        </div>  
    </div>
    <div style={{height:"100vh"}} className="mobileView">
       
        <img src={mobile9} style={{height:"100vh",width:"100%",position:"relative",zIndex:"1",overflow: "hidden",left:0}}/>
        <div style={{position: "absolute", width: "100%",top: "31px",justifyContent:"center",zIndex:"2"}}>
            <img src={mobile5} style={{height: "62px", width:"262px"}}/>
        </div>
        <div style={{position: "absolute", width: "100%",top: "382px",justifyContent:"center",zIndex:"2"}}>
            <img src={mobiletext} style={{width: "364px",height: "41px"}}/>
        </div>
        <div style={{position: "absolute", width: "100%",top: "445px",justifyContent:"center",zIndex:"2"}}>
                <span style={{left: "43px",letterSpacing: 0,color: "#F8F7F7",opacity: 1,position: "absolute",/* bottom: 0px; */fontSize: "16px",fontFamily: "Helvetica Neue, Regular"}}>
                    THIS SITE IS UNDER CONSTRUCTION
                </span> 
        </div> 
        
        {/* <img src={Image1} style={{height:"540px",width:"100%",position:"relative",zIndex:"1",overflow: "hidden",left:0}}/> */}
        <div style={{height:"540px",position:"relative",zIndex:"1",overflow: "hidden",left:0}}>
        <iframe src="https://maps.google.com/maps?q=difc%20gate%20village%203%20,%203rd%20floor%20&t=&z=17&ie=UTF8&iwloc=&output=embed" 
        width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        {/* <div style={{zIndex:"2",left:"15px",position: "absolute",textAlign:"left",top: "100vh",fontFamily: "Helvetica Neue, medium",letterSpacing: 0, color: "#926021",}}>
<span style={{fontSize: "20px"}}>RIVE GAUCHE,</span>
<br></br>
 <span style={{fontSize: "18px",color:"#926021",fontFamily: "Helvetica Neue, normal"}}>Gate Village 3, 3rd Floor, DIFC, Dubai UAE  </span>

</div> */}
<div style={{left: "0px",display:"flex",alignItems: "center",justifyContent:"center",height: "50px",background: "#020202 0% 0% no-repeat padding-box",opacity: "1",paddingTop: "18px",paddingBottom: "18px"}}>
<span style={{letterSpacing: 0,color: "#F8F7F7",opacity: 1,position: "absolute",/* bottom: 0px; */fontSize: "14px",fontFamily: "Helvetica Neue, Normal"}}>
Designed by Elan Vital
</span> 
</div>
        
        
    </div>
    </>
    )
    
}

export default WorkInProgressPage;