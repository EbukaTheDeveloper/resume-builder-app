import SchoolInfoPreview from "./schoolInfo-preview";

function SkillPreview({skillInfoObj,contactObj,schoolArr,workArr}) {
  return (
    <>
     <SchoolInfoPreview obj={contactObj} myArr={workArr} infoArr={schoolArr} />
     <p className="skills-title cv-title">Skills</p>
      <ul>
        <li>{skillInfoObj.skill_1}</li>
        <li>{skillInfoObj.skill_2}</li>
        <li>{skillInfoObj.skill_3}</li>
        <li>{skillInfoObj.skill_4}</li>
      </ul>
    </>
  )
}

export default SkillPreview;