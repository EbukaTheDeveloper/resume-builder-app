function WorkInfo (props) {
    return (
        <section className="hide" ref={props.myRef}>
            <div className="inputs-container">
              <label htmlFor="job-title">Job Title</label>
              <input type="text" id="job-title" name="job_title" placeholder="Software Engineer" onChange={props.handleChange1} value={props.obj.title}/>
              <span></span>
            </div>
            <div className="inputs-container">
              <label htmlFor="company">Company</label>
              <input type="text" onChange={props.handleChange2} id="company" name="company_name" placeholder="Spotify" value={props.obj.company}/>
              <span></span>
            </div>
            <div className="flex-row">
              <div className="inputs-container item">
                <label htmlFor="town">City/Town</label>
                <input type="text" onChange={props.handleChange3} id="town" name="city/town" placeholder="New York" value={props.obj.town} className="short"/>
                <span></span>
              </div>
              <div className="inputs-container item">
                <label htmlFor="country-name">Country</label>
                <input type="text" onChange={props.handleChange4} id="country-name" name="country-name" placeholder="United State" value={props.obj.countryName} className="short"/>
                <span></span>
              </div>
            </div>
            <div className="flex-row">
              <div className="inputs-container item">
                <label htmlFor="start-date">Start Date</label>
                <input type="text" onChange={props.handleChange5} id="start-date" name="start_date" placeholder="Jan,2015" value={props.obj.startDate} className="short"/>
                <span></span>
              </div>
              <div className="inputs-container item">
                <label htmlFor="end-date">End Date</label>
                <input type="text" onChange={props.handleChange6} id="end-date" name="end_date" placeholder="Feb, 2018" value={props.obj.endDate} className="short"/>
                <span></span>
              </div>
            </div>
            <div className="save-btn-container">
              <button type="button" onClick={props.handleClick}>Save And Continue</button>
            </div>
        </section>
    )
}

export default WorkInfo;