import { useState, useRef } from "react";
import Intro from "./components/introduction";
import Overview from "./components/overview";
import ContactInfo from "./components/inputs/contact-info";
import ContactInfoPreview from "./components/contactPreview";
import WorkInfo from "./components/inputs/work-info";
import WorkInfoPreview from "./components/workInfo-preview";
import EducationInfo from "./components/inputs/education-info";
import SchoolInfoPreview from "./components/schoolInfo-preview";
import SkillInfo from "./components/inputs/skills-info";
import Summary from "./components/inputs/summary";
import SkillPreview from "./components/skill-preview";
import FinalPreview from "./components/final-preview";
import FormHeader from "./components/form-header";
import ContactSvg from "./icons/contact-Icon";
import WorkSvg from "./icons/work-icon";
import EducationSvg from "./icons/education-icon";
import SkillSvg from "./icons/skill-icon";
import ExportSection from "./components/export-section";
import { useReactToPrint } from 'react-to-print';

function App() {
  const contactRef = useRef(null);
  const contactPreviewRef = useRef(null);
  const workRef = useRef(null);
  const workPreviewRef = useRef(null);
  const schoolRef = useRef(null);
  const schoolPreviewRef = useRef(null);
  const skillPreviewRef = useRef(null);
  const skillRef = useRef(null);
  const summaryRef = useRef(null);
  const finalPreviewRef = useRef(null);
  const componentToPrintRef = useRef();
  const [WorkInfoArr, setWorkInfoArr] = useState([]);
  const [workPreviewbackBtnIsClicked, setWorkPreviewbackBtnIsClicked] = useState(false);
  const [educationPreviewBtnIsClicked, setEducationPreviewBtnIsClicked] = useState(false);
  const [educationInfoArr, setEducationInfoArr] = useState([]);
  const [visible, setVisible] = useState(true);
  const [component, setComponent] = useState(<ContactSvg />);
  const [text, setText] = useState('Contact Info');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    city: '',
    country: '',
    tel: '',
    email: ''
  });

  const [workInfo, setWorkInfo] = useState({
    title: '',
    company: '',
    town: '',
    countryName: '',
    startDate: '',
    endDate: '', 
  });

  const [schoolInfo, setSchoolInfo] = useState({
    schoolName: '',
    schoolCity: '',
    schoolCountry: '',
    degree: '',
    fieldOfStudy: '',
    gradDate: ''
  });

  const [skillInfo, setSkillInfo] = useState({
    skill_1: '',
    skill_2: '',
    skill_3: '',
    skill_4: ''
  });

  const [summaryInfo, setSummaryInfo] = useState({
    summary: '',
  })

  function handleClick () {
    setVisible(!visible);
    document.title = 'Contact Info';
  }

  function hideContactInputs() {
    contactRef.current.className = 'hide';
    contactPreviewRef.current.className = 'contactInfo-preview-container';
    setText('Contact Info Preview');
    document.title = 'Contact Info Preview';
  }
  function unHideContactInputs() {
    contactRef.current.className = 'contact-info info-container';
    contactPreviewRef.current.className = 'hide';
    setText('Contact Info');
    document.title = 'Contact Info'
  }
  function unHideWorkInputs() {
    workRef.current.className = 'work-info info-container';
    contactPreviewRef.current.className = 'hide';
    setText('Work Info');
    setComponent(<WorkSvg />);
    document.title = 'Work Info';
  }
  function displayWorkPreview() {
    if(workPreviewbackBtnIsClicked) {
      setWorkPreviewbackBtnIsClicked(false);
    }
    else if (!workPreviewbackBtnIsClicked) {
      setWorkInfoArr([...WorkInfoArr, workInfo]);
    }
    workPreviewRef.current.className = 'work-info-preview';
    workRef.current.className = 'hide';
    setText('Work Info Preview');
    document.title = text;
  }

  function goBackToWorkInput() {
    setWorkPreviewbackBtnIsClicked(true);
    workRef.current.className = 'work-info info-container';
    workPreviewRef.current.className = 'hide';
    setText('Work Info');
    document.title = 'Work Info';
  }
  function addMoreWorkInfo() {
    setWorkInfo({
      title: '',
      company: '',
      town: '',
      countryName: '',
      startDate: '',
      endDate: '',
    });
    workRef.current.className = 'work-info info-container';
    workPreviewRef.current.className = 'hide';
    setText('Work Info');
    document.title = 'Work Info';
  }

  function displayEducationInputs() {
    schoolRef.current.className = 'education-info info-container';
    workPreviewRef.current.className = 'hide';
    setComponent(<EducationSvg />);
    setText('Education Info');
    document.title = 'Education Info';
  }

  function displayEducationPreview() {
    if(educationPreviewBtnIsClicked) {
      setEducationPreviewBtnIsClicked(false);
    }
    else if(!educationPreviewBtnIsClicked) {
      setEducationInfoArr([...educationInfoArr, schoolInfo]);
    }
    schoolRef.current.className = 'hide';
    schoolPreviewRef.current.className = 'school-preview';
    setText('Education Info Preview');
    document.title = 'Education Info Preview';
  }

  function goBackToEducationInputs() {
    setEducationPreviewBtnIsClicked(true)
    schoolRef.current.className = 'education-info info-container';
    schoolPreviewRef.current.className = 'hide';
    setText('Education Info');
    document.title = 'Education Info';
  }

  function addMoreEducationInfo() {
    setSchoolInfo({
      schoolName: '',
      schoolCity: '',
      schoolCountry: '',
      degree: '',
      fieldOfStudy: '',
      gradDate: ''
    });
    schoolRef.current.className = 'education-info info-container';
    schoolPreviewRef.current.className = 'hide';
    setText('Education Info');
    document.title = 'Education Info';
  }

  function displaySkillsInputs() {
    skillRef.current.className = 'skill-info info-container';
    schoolPreviewRef.current.className = 'hide';
    setText('Skills Info');
    setComponent(<SkillSvg />);
    document.title = 'Skills Info';
  }

  function displaySkillPreview() {
    skillRef.current.className = 'hide';
    skillPreviewRef.current.className = 'skils-preview';
    setText('Skills Info Preview');
    document.title = 'Skills Info Preview';
  }

  function handleGoBackToSkillInputs() {
    skillRef.current.className = 'skill-info info-container';
    skillPreviewRef.current.className = 'hide';
    setText('Skill Info');
    document.title = 'Skills Info';
  }

  function displaySummaryInput() {
    skillPreviewRef.current.className = 'hide';
    summaryRef.current.className = 'summary-info info-container';
    setText('Summary');
    document.title = 'Summary';
  }

  function displayFinalPreview() {
    summaryRef.current.className = 'hide';
    finalPreviewRef.current.className = 'final-preview';
    setText('Final Preview');
    document.title = 'Final preview';
  }

  function handleNameChange (e) {
    setContactInfo({
      ...contactInfo,
      name: e.target.value
    })
  }

  function handleCityChange (e) {
    setContactInfo({
      ...contactInfo,
      city: e.target.value
    })
  }

  function handleCountryChange (e) {
    setContactInfo({
      ...contactInfo,
      country: e.target.value
    })
  }

  function handleTelChange (e) {
    setContactInfo({
      ...contactInfo,
      tel: e.target.value
    })
  }

  function handleEmailChange(e) {
    setContactInfo({
      ...contactInfo,
      email: e.target.value
    })
  }

  function handleWorkTitleChange(e) {
    setWorkInfo({
      ...workInfo,
      title: e.target.value
    })
  }

  function handleCompanyNameChange(e) {
    setWorkInfo({
      ...workInfo,
      company: e.target.value
    })
  }

  function handleTownNameChange(e) {
    setWorkInfo({
      ...workInfo,
      town: e.target.value
    })
  }

  function handleCountryNameChange(e) {
    setWorkInfo({
      ...workInfo,
      countryName: e.target.value
    })
  }

  function handleStartDateChange(e) {
    setWorkInfo({
      ...workInfo,
      startDate: e.target.value
    })
  }

  function handleEndDateChange(e) {
    setWorkInfo({
      ...workInfo,
      endDate: e.target.value
    })
  }

  function handleSchoolName(e) {
    setSchoolInfo({
      ...schoolInfo,
      schoolName: e.target.value
    })
  }

  function handleSchoolCityName(e) {
    setSchoolInfo({
      ...schoolInfo,
      schoolCity: e.target.value
    })
  }

  function handleSchoolCountryChange(e) {
    setSchoolInfo({
      ...schoolInfo,
      schoolCountry: e.target.value
    })
  }

  function handleSchoolDegree(e) {
    setSchoolInfo({
      ...schoolInfo,
      degree: e.target.value
    })
  }

  function handleFieldOfStudyChange(e) {
    setSchoolInfo({
      ...schoolInfo,
      fieldOfStudy: e.target.value
    })
  }

  function handleGradDateChange(e) {
    setSchoolInfo({
      ...schoolInfo,
      gradDate: e.target.value
    })
  }

  function handleSkill_1Change(e) {
    setSkillInfo({
      ...skillInfo,
      skill_1: e.target.value
    })
  }

  function handleSkill_2Change(e) {
    setSkillInfo({
      ...skillInfo,
      skill_2: e.target.value
    })
  }

  function handleSkill_3Change(e) {
    setSkillInfo({
      ...skillInfo,
      skill_3: e.target.value
    })
  }

  function handleSkill_4Change(e) {
    setSkillInfo({
      ...skillInfo,
      skill_4: e.target.value
    })
  }

  function handleSummaryChange(e) {
    setSummaryInfo({
      summary: e.target.value
    })
  }

  const handlePrint = useReactToPrint({
    content: () => componentToPrintRef.current,
  });

  function resetApp() {
    contactRef.current.className = 'contact-info info-container';
    finalPreviewRef.current.className = 'hide';
    setWorkInfoArr([]);
    setEducationInfoArr([]);
    setComponent(<ContactSvg />);
    setText('Contact Info');
    setContactInfo({
      name: '',
      city: '',
      country: '',
      tel: '',
      email: ''
    });
    setWorkInfo({
      title: '',
      company: '',
      town: '',
      countryName: '',
      startDate: '',
      endDate: '', 
    });
    setSchoolInfo({
      schoolName: '',
      schoolCity: '',
      schoolCountry: '',
      degree: '',
      fieldOfStudy: '',
      gradDate: ''
    });
    setSkillInfo({
      skill_1: '',
      skill_2: '',
      skill_3: '',
      skill_4: ''
    });
    setSummaryInfo({
      summary: '',
    })
  }

  return (
    <div className="App">
      <Intro />
      {visible ? (
        <Overview handleClick={handleClick}/>
      ) : (
      <div>
        <FormHeader myComponent={component} text={text}/>
        <form>
          <ContactInfo 
            handleChange1={handleNameChange} 
            handleChange2={handleCityChange}
            handleChange3={handleCountryChange}
            handleChange4={handleTelChange}
            handleChange5={handleEmailChange}
            obj={contactInfo}
            myRef={contactRef}
            handleClick={hideContactInputs}
            />
          <section className="hide" ref={contactPreviewRef}>
            <div className="cv-document">
              <ContactInfoPreview obj={contactInfo} />
            </div>
            <div className="preview-btn-container">
              <button type="button" onClick={unHideWorkInputs}>Next</button>
              <button type="button" onClick={unHideContactInputs}>{'<'} Back</button>
            </div>
          </section>
          <WorkInfo
            obj={workInfo}
            handleChange1={handleWorkTitleChange}
            handleChange2={handleCompanyNameChange}
            handleChange3={handleTownNameChange}
            handleChange4={handleCountryNameChange}
            handleChange5={handleStartDateChange}
            handleChange6={handleEndDateChange}
            handleClick={displayWorkPreview}
            myRef={workRef}
          />
          <section className="hide" ref={workPreviewRef}>
            <div className="cv-document">
              <WorkInfoPreview myProps={contactInfo} arr={WorkInfoArr} />
            </div>
            <div className="more-info-btn-container">
              <button type="button" onClick={addMoreWorkInfo}>+ Add more information</button>
            </div>
            <div className="preview-btn-container">
              <button type="button" onClick={displayEducationInputs}>Next</button>
              <button type="button" onClick={goBackToWorkInput}>{'<'} Back</button>
            </div>
          </section>
          <EducationInfo myProps={schoolInfo}
            handleChange1={handleSchoolName}
            handleChange2={handleSchoolCityName}
            handleChange3={handleSchoolCountryChange}
            handleChange4={handleSchoolDegree}
            handleChange5={handleFieldOfStudyChange}
            handleChange6={handleGradDateChange}
            handleClick={displayEducationPreview}
            myRef={schoolRef}
          />
          <section className="hide" ref={schoolPreviewRef}>
            <div className="cv-document">
              <SchoolInfoPreview obj={contactInfo} myArr={WorkInfoArr} infoArr={educationInfoArr} />
            </div>
            <div className="more-info-btn-container">
              <button type="button" onClick={addMoreEducationInfo}>+ Add more information</button>
            </div>
            <div className="preview-btn-container">
              <button type="button" onClick={displaySkillsInputs}>Next</button>
              <button type="button" onClick={goBackToEducationInputs}>{'<'} Back</button>
            </div>
          </section>
          <SkillInfo  myProps={skillInfo}
            handleChange1={handleSkill_1Change}
            handleChange2={handleSkill_2Change}
            handleChange3={handleSkill_3Change}
            handleChange4={handleSkill_4Change}
            handleClick={displaySkillPreview}
            myRef={skillRef}
          />
          <section className="hide" ref={skillPreviewRef}>
            <div className="cv-document">
              <SkillPreview skillInfoObj={skillInfo} contactObj={contactInfo} schoolArr={educationInfoArr} workArr={WorkInfoArr}/>
            </div>
            <div className="preview-btn-container">
              <button type="button" onClick={displaySummaryInput}>Next</button>
              <button type="button" onClick={handleGoBackToSkillInputs}>{'<'} Back</button>
            </div>
          </section>
          <Summary myProps={summaryInfo} handleChange={handleSummaryChange} myRef={summaryRef} handleClick={displayFinalPreview}/>
          <section className="hide" ref={finalPreviewRef}>
            <FinalPreview myRef={componentToPrintRef} obj1={contactInfo} obj2={summaryInfo} obj3={skillInfo} arr1={WorkInfoArr} arr2={educationInfoArr}/>
            <ExportSection handleClick={handlePrint} handleReset={resetApp}/>
          </section>
        </form>
      </div>
      )}
    </div>
  );
}

export default App;
