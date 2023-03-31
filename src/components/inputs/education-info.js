function EducationInfo({handleChange1,
  handleChange2,
  handleChange3,
  handleChange4,
  handleChange5,
  handleChange6,
  handleClick,
  myProps,
  myRef}) {
    return(
        <section className="hide" ref={myRef}>
          <div className="inputs-container">
            <label htmlFor="school-name">School Name</label>
            <input type="text" id="school-name" name="school_name" placeholder="New York University" onChange={handleChange1} value={myProps.schoolName}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="school_city">CityTown</label>
            <input type="text" id="school_city" name="school_city_name" placeholder="New York" onChange={handleChange2} value={myProps.schoolCity}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="school_country">Country</label>
            <input type="text" id="school_country" name="school_country_name" placeholder="United State" onChange={handleChange3} value={myProps.schoolCountry}/>
            <span></span>
          </div>
          <div className="inputs-container">
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" placeholder="Associate in Arts" onChange={handleChange4} value={myProps.degree}/>
            <span></span>
          </div>
          <div className="flex-row">
            <div className="inputs-container item">
              <label htmlFor="field-of-study">Field Of Study</label>
              <input type="text" id="field-of-study" name="field-of-study" placeholder="Business" onChange={handleChange5} value={myProps.fieldOfStudy} className="short"/>
              <span></span>
            </div>
            <div className="inputs-container item">
              <label htmlFor="grad-date">Graduation Date</label>
              <input type="text" id="grad-date" name="Grad_Date" placeholder="March, 2020" onChange={handleChange6} value={myProps.gradDate} className="short"/>
              <span></span>
            </div>
          </div>
          <div className="save-btn-container">
            <button type="button" onClick={handleClick}>Save and continue</button>
          </div>
        </section>
    )
}

export default EducationInfo;