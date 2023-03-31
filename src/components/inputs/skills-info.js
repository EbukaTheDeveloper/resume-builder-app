function SkillInfo({handleChange1,handleChange2,handleChange3,handleChange4,myProps,myRef,handleClick}) {
    return (
        <section className="hide" ref={myRef}>
          <div className="inputs-container">
            <label htmlFor="skill_1">Skill #1</label>
            <input type="text" id="skill_1" name="skill_1" placeholder="Problem Solving" onChange={handleChange1} value={myProps.skill_1}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="skill_2">Skill #2</label>
            <input type="text" id="skill_2" name="skill_2" placeholder="Microsoft Word" onChange={handleChange2} value={myProps.skill_2}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="skill_3">Skill #3</label>
            <input type="text" id="skill_3" name="skill_3" placeholder="Time Management" onChange={handleChange3} value={myProps.skill_3}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="skill_4">Skill #4</label>
            <input type="text" id="skill_4" name="skill_4" placeholder="Task Priortization" onChange={handleChange4} value={myProps.skill_4}/>
            <span></span>
          </div>
          <div className="save-btn-container">
            <button type="button" onClick={handleClick}>Save And Continue</button>
          </div>
        </section>
    )
}

export default SkillInfo;