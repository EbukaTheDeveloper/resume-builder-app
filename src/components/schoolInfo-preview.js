import WorkInfoPreview from "./workInfo-preview";

function SchoolInfoPreview({obj,myArr,infoArr}) {
    return (
        <>
          <WorkInfoPreview myProps={obj} arr={myArr} />
          <p className="education-title cv-title">Education</p>
          {infoArr.map((item,index)=>{
            return(
              <div key={index} className="education-dependency">
                <p>
                  <span className="degree-title">{item.degree} {'-'} {item.fieldOfStudy}</span>
                  <span className="school-location">{item.schoolName}{','} {item.schoolCity}{','} {item.schoolCountry}</span>
                </p>
                <p>
                  <span className="grad-date">{item.gradDate}</span>
                </p>
              </div>
            )
          })}
        </>
    )
}

export default SchoolInfoPreview