function Summary({handleChange,myProps,handleClick,myRef}) {
    return (
        <section className="hide" ref={myRef}>
          <div className="inputs-container">
            <label htmlFor="summary">Professional Summary</label>
            <textarea name="summary" id="summary" onChange={handleChange} value={myProps.summary}></textarea>
            <span></span>
          </div>
          <div className="submit-btn-container">
            <button type="button" onClick={handleClick}>Submit</button>
          </div>
        </section>
    )
}

export default Summary;