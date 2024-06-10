import {
  Enquiry,
  SwipeableMenu,
  OnlinePaymentForm,
  ModelDrawingForm,
  SignupForm,
  CitizenSearchForm,
  RenewalForm,
} from "../components/components";
import signup from "../assets/signup.png";
import download from "../assets/download.png";
import citizens from "../assets/citizens.png";
import model from "../assets/model.png";
import payment from "../assets/payment.png";
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
      <div className="flex flex-col gap-10">
        <p className="text-center text-lg mx-72 font-normal">
          "Online Building Permission in Madhya Pradesh is done through ABPAS
          system,in which scrutiny of drawing is processed online transparently
          without any human intervention. "
        </p>
        <p className="text-center text-lg mx-80 font-normal">
          "मध्यप्रदेश के अंतर्गत भवन अनुज्ञा हेतु ऑनलाइन प्रक्रिया एबीपीएस
          (ABPAS) के माध्यम से संचालित है | जिसमें बिना किसी मानवीय हस्तक्षेप के
          ऑनलाइन ड्राइंग / मानचित्र की स्क्रूटनी पारदर्शी रूप से की जाती है | "
        </p>
      </div>
      <div className="my-12">
        <p className="text-center text-lg mx-52 text-[#ff1300] font-bold">
          "105 वर्गमीटर तक के आवासीय भूखंडो के लिए तुरंत/डीम्ड स्वीकृति के नए
          नियमों के अनुसार ऑनलाइन व्यवस्था लागू कर दी गई है, कृपया इस सुविधा का
          लाभ लेने के लिए ABPAS पोर्टल के माध्यम से ऑनलाइन अपना आवेदन दर्ज
          करें।"
        </p>
      </div>
      <div className="flex gap-2">
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
      <div className="flex flex-col items-end w-full pr-52">
        <div className="flex justify-end gap-10">
          <p>
            Toll Free Number/टोल फ्री नंबर :{" "}
            <span className="text-xl font-medium text-[#0288d1]">
              1800 120 2664
            </span>
          </p>
          <p>
            Email:{" "}
            <span className="text-xl font-medium text-[#0288d1]">
              abpashelpdesk@aksharags.com
            </span>
          </p>
        </div>
        <div>
          <p className="font-medium">
            T&CP Layout Approval for Bhopal,Jabalpur,Gwalior & Indore:
            Click---&#62;{" "}
            <a
              href="https://www.emptownplan.gov.in/#"
              className="text-xl font-medium text-[#0288d1]"
            >
              https://www.emptownplan.gov.in/#
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
