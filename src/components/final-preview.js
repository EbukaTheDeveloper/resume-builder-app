function FinalPreview({obj1,obj2,obj3,arr1,arr2,myRef}) {
    return (
        <section className="cv-document document" id="cv-document" ref={myRef}>
          <div className="cv-header">
            <div className="name-details">
              <p>{obj1.name}</p>
            </div>
            <div className="contact-address">
              <p>
                <span className="location-dependency">{obj1.city}, {obj1.country}</span>
                <span className="tel-dependency">{obj1.tel}</span>
                <span className="email-dependency">{obj1.email}</span>
              </p>
            </div>
          </div>
          <div className="cv-body">
            <div className="cv-summary">
              <p className="summary-title cv-title">PROFESSIONAL SUMMARY</p>
              <p className="summary-body">{obj2.summary}</p>
            </div>
            <div className="cv-skills">
              <p className="skills-title cv-title">SKILLS</p>
              <ul>
               <li>{obj3.skill_1}</li>
               <li>{obj3.skill_2}</li>
               <li>{obj3.skill_3}</li>
               <li>{obj3.skill_4}</li>
              </ul>
            </div>
            <div className="cv-experience">
              <p className="experience-title cv-title">EXPERIENCE</p>
              {arr1.map((item,index)=>{
                return(
                  <div key={index} className="work-dependency">
                    <p>
                      <span className="work-title">{item.title}</span>
                      <span className="work-location">{item.company} {'|'} {item.town} {item.countryName}</span>
                    </p>
                    <p>
                      <span className="work-date">{item.startDate} {'-'} {item.endDate}</span>
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="cv-education">
              <p className="education-title cv-title">EDUCATION</p>
              {arr2.map((item,index)=> {
                return(
                  <div key={index} className="education-dependency">
                    <p>
                      <span className="degree-title">{item.degree} {'-'} {item.fieldOfStudy}</span>
                      <span className="school-location">{item.schoolName}, {item.schoolCity}, {item.schoolCountry}</span>
                    </p>
                    <p>
                      <span className="grad-date">{item.gradDate}</span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
    )
}

export default FinalPreview;