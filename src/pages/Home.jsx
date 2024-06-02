import Enquiry from "../components/Enquiry";
import signup from "../assets/signup.png";
import download from "../assets/download.png";
import citizens from "../assets/citizens.png";
import model from "../assets/model.png";
import payment from "../assets/payment.png";
import { useState } from "react";
import SwipeableMenu from "../components/SwipeableMenu";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  return (
    <div className="flex flex-col items-center gap-12 my-20">
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
      <div>
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
        />
        <Enquiry
          image={download}
          topHeading={"Downloads"}
          topSubheading={"User Manual, Checklist and forms"}
          bottomHeading={"SLA TimeLine"}
          handleOpenMenu={handleOpenMenu}
        />
        <SwipeableMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        <Enquiry
          image={payment}
          topHeading={"Online Payment"}
          topSubheading={"Think Smarter, Do online payment."}
          bottomHeading={"EoDBReport"}
        />
        <Enquiry
          image={citizens}
          topHeading={"Citizen Search"}
          topSubheading={"Track your Proposal File status."}
          bottomHeading={"FAQ"}
        />
        <Enquiry
          image={model}
          topHeading={"Model Drawing"}
          topSubheading={"Explore the concept of Model Drawing."}
          bottomHeading={"Layout Sketch"}
        />
      </div>
      <div>
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
          <p>
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
