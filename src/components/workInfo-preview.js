import ContactInfoPreview from "./contactPreview"

function WorkInfoPreview({myProps,arr}) {
    return (
       <>
        <ContactInfoPreview obj={myProps} />
        <p className="experience-title cv-title">Experience</p>
          {arr.map((item,index)=>{
            return(
              <div key={index} className="cv-experience">
                <div className="work-dependency">
                  <p>
                    <span className="work-title">{item.title}</span>
                    <span className="work-location">{item.company} {'|'} {item.town} {item.countryName}</span>
                  </p>
                  <p>
                    <span className="work-date">{item.startDate} - {item.endDate}</span>
                  </p>
                </div>
              </div>
            )
          })}
       </>
    )
}

export default WorkInfoPreview;