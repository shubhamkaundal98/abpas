import {
  Enquiry,
  SwipeableMenu,
  OnlinePaymentForm,
  ModelDrawingForm,
  SignupForm,
  CitizenSearchForm,
  RenewalForm,
} from "../components/components";
import signup from "../assets/images/signup.png";
import download from "../assets/images/download.png";
import citizens from "../assets/images/citizens.png";
import model from "../assets/images/model.png";
import circle from "../assets/images/circle.svg";
import pie from "../assets/images/pie.svg";
import tri from "../assets/images/tri.svg";

import payment from "../assets/images/payment.png";
import bannerBG from "../assets/images/blurry.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiModal from "../components/muiComponents/MuiModal";

function Home() {
  const navigate = useNavigate();

  // Sign Up Modal

  const [signupModal, setSignupModal] = useState(false);
  const handleOpenSignupModal = () => setSignupModal(true);
  const handleCloseSignupModal = () => setSignupModal(false);

  const [signupRenewalModal, setSignupRenewalModal] = useState(false);
  const handleOpenSignupRenewalModal = () => setSignupRenewalModal(true);
  const handleCloseSignupRenewalModal = () => setSignupRenewalModal(false);

  const [renewalModal, setRenewalModel] = useState(false);

  //Download Pdf Slider

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  // Online Payment Modal

  const [onlinePaymentModal, setOnlinePaymentModal] = useState(false);
  const handleOpenOnlinePaymentModal = () => setOnlinePaymentModal(true);
  const handleCloseOnlinePaymentModal = () => setOnlinePaymentModal(false);

  // Citizen Search Modal

  const [citizenSearchModal, setCitizenSearchModal] = useState(false);
  const handleOpenCitizenSearchModal = () => setCitizenSearchModal(true);
  const handleCloseCitizenSearchModal = () => setCitizenSearchModal(false);

  // Model Drawing Modal

  const [modelDrawingModal, setModelDrawingModal] = useState(false);
  const handleOpenModelDrawingModal = () => setModelDrawingModal(true);
  const handleCloseModelDrawingModal = () => setModelDrawingModal(false);

  return (
    <div>
      <section className="wrapper overflow-hidden !bg-[#f0f0f8] bg-nanner">
        <div className=" pt-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pb-[4.5rem] xl:pb-[4.5rem] lg:pb-[4.5rem] md:pt-[4.5rem] !text-center !relative">
          <div className="absolute" data-cue="fadeIn">
            <img className="!rounded-[0.8rem]" src={bannerBG} alt="image" />
          </div>
          <div className="flex flex-wrap mx-[-15px] !relative">
            <div className="rounded-lg bg-black p-5 bg-opacity-50 lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
              {/* <div
                className="absolute shape grape w-5 hidden xl:block lg:block"
                data-cue="fadeIn"
                data-delay="1500"
              >
                <img
                  src={pie}
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                />
              </div>
              <div
                className="absolute shape violet !w-[2.5rem] hidden xl:block lg:block"
                data-cue="fadeIn"
                data-delay="1500"
              >
                <img
                  src="assets/img/svg/scribble.svg"
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                />
              </div>
              <div
                className="absolute shape fuchsia w-6 hidden xl:block lg:block"
                data-cue="fadeIn"
                data-delay="1500"
              >
                <img
                  src={tri}
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                />
              </div>
              <div
                className="absolute shape yellow w-6 hidden xl:block lg:block"
                data-cue="fadeIn"
                data-delay="1500"
              >
                <img
                  src={circle}
                  className="svg-inject icon-svg !w-full !h-full"
                  alt="image"
                />
              </div> */}
              <div data-cues="slideInDown" data-group="page-title">
                <h1 className="text-white xl:text-[1.5rem] text-[calc(1.445rem_+_2.34vw)] font-semibold !leading-[1.15] mb-5 md:mx-10 lg:mx-0 xl:mx-0">
                  Online Building Permission in Madhya Pradesh is done through
                  <br />
                  <span className="rotator-fade text-[#4ebac6] ">
                    ABPAS system,in which scrutiny of drawing is processed
                    online transparently without any human intervention.
                  </span>
                </h1>
                <p className="lead !text-[1.2rem] !leading-[1.6] text-white !mb-8">
                  "मध्यप्रदेश के अंतर्गत भवन अनुज्ञा हेतु ऑनलाइन प्रक्रिया
                  एबीपीएस (ABPAS) के माध्यम से संचालित है | जिसमें बिना किसी
                  मानवीय हस्तक्षेप के ऑनलाइन ड्राइंग / मानचित्र की स्क्रूटनी
                  पारदर्शी रूप से की जाती है | "
                </p>
              </div>
              <div
                className="flex justify-center"
                data-cues="slideInDown"
                data-delay="600"
              >
                {/* <span>
                  <a className="p-2 btn btn-lg btn-grape text-white !bg-[#3a91c3] border-[#0e394c] hover:text-white hover:bg-[#605dba] hover:border-[#605dba] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem] mx-1">
                    Sign In
                  </a>
                </span> */}
                {/* <span>
                  <a className="p-2 btn btn-lg btn-fuchsia text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:border-[#e668b3] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] !rounded-[0.8rem] mx-1">
                    Sign In
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mt-20 mb-5">
        {/* Sign Up Modal */}
        <MuiModal
          open={signupModal}
          handleClose={handleCloseSignupModal}
          modelHeading={"Sign Up"}
          className={"w-1/4"}
        >
          <SignupForm
            handleCloseSignupModal={handleCloseSignupModal}
            handleOpenSignupRenewalModal={handleOpenSignupRenewalModal}
          />
        </MuiModal>
        <MuiModal
          open={signupRenewalModal}
          handleClose={handleCloseSignupRenewalModal}
          modelHeading={"Renewal"}
          className={"w-1/4"}
        >
          <RenewalForm />
        </MuiModal>
        {/* Download Pdf Slider */}
        <SwipeableMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        {/* Online Payment Modal */}
        <MuiModal
          open={onlinePaymentModal}
          handleClose={handleCloseOnlinePaymentModal}
          modelHeading={"ABPAS-II - Online Payment"}
          className={"w-2/5"}
        >
          <OnlinePaymentForm />
        </MuiModal>
        {/* Citizen Search Modal */}
        <MuiModal
          open={citizenSearchModal}
          handleClose={handleCloseCitizenSearchModal}
          modelHeading={"Citizen Search"}
          className={"w-1/4"}
        >
          <CitizenSearchForm />
        </MuiModal>
        {/* Model Drawing Modal */}
        <MuiModal
          open={modelDrawingModal}
          handleClose={handleCloseModelDrawingModal}
          modelHeading={"ABPAS-II - Model Drawing - Select ULB"}
          className={"w-[45%]"}
        >
          <ModelDrawingForm />
        </MuiModal>

        {/* <div className="flex flex-col gap-10">
          <p className="text-center text-lg mx-72 font-normal"></p>
          <p className="text-center text-lg mx-80 font-normal">
         
          </p>
        </div> */}
        {/* <div className="my-12">
        <p className="text-center text-sm mx-52 text-[#ff1300] font-bold">
          "105 वर्गमीटर तक के आवासीय भूखंडो के लिए तुरंत/डीम्ड स्वीकृति के नए
          नियमों के अनुसार ऑनलाइन व्यवस्था लागू कर दी गई है, कृपया इस सुविधा का
          लाभ लेने के लिए ABPAS पोर्टल के माध्यम से ऑनलाइन अपना आवेदन दर्ज
          करें।"
        </p>
      </div> */}
        <div className="flex gap-2 ">
          <Enquiry
            image={signup}
            topHeading={"Sign Up"}
            topSubheading={"New / Renewal Registration"}
            bottomHeading={"List of Consultants"}
            topOpenFunction={handleOpenSignupModal}
            bottomOpenFunction={() => navigate("/consultant")}
          />
          <Enquiry
            image={download}
            topHeading={"Downloads"}
            topSubheading={"User Manual, Checklist and forms"}
            bottomHeading={"SLA TimeLine"}
            topOpenFunction={handleOpenMenu}
            bottomOpenFunction={() => navigate("/SLADetails")}
          />

          <Enquiry
            image={payment}
            topHeading={"Online Payment"}
            topSubheading={"Think Smarter, Do online payment."}
            bottomHeading={"EoDBReport"}
            topOpenFunction={handleOpenOnlinePaymentModal}
            bottomOpenFunction={() => navigate("/EoDBReport")}
          />
          <Enquiry
            image={citizens}
            topHeading={"Citizen Search"}
            topSubheading={"Track your Proposal File status."}
            bottomHeading={"FAQ"}
            topOpenFunction={handleOpenCitizenSearchModal}
            bottomOpenFunction={() => navigate("/FAQDetails")}
          />
          <Enquiry
            image={model}
            topHeading={"Model Drawing"}
            topSubheading={"Explore the concept of Model Drawing."}
            topOpenFunction={handleOpenModelDrawingModal}
            bottomHeading={"Layout Sketch"}
            bottomOpenFunction={() => navigate("/LayoutSearch")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
