const ContactInfo = (props) => {
    return (
        <section className="contact-info info-container" ref={props.myRef}>
            <div className="inputs-container">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="John Doe" id="name" name="full_name" onChange={props.handleChange1} value={props.obj.name} />
                <span></span>
            </div>
            <div className="inputs-container">
                <label htmlFor="city">City</label>
                <input type="text" placeholder="New york" id="city" name="city_name" onChange={props.handleChange2} value={props.obj.city} />
                <span></span>
            </div>
            <div className="inputs-container">
                <label htmlFor="country">Country</label>
                <input type="text" placeholder="United States" id="country" name="country_name" onChange={props.handleChange3} value={props.obj.country} />
                <span></span>
            </div>
            <div className="inputs-container">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder="901-537-3986" id="phone" name="phone_no" onChange={props.handleChange4} value={props.obj.tel} />
                <span></span>
            </div>
            <div className="inputs-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="email" name="mail"  onChange={props.handleChange5}value={props.obj.email} />
                <span></span>
            </div>
            <div className="save-btn-container">
                <button type="button" onClick={props.handleClick}>Save And Continue</button>
            </div>
        </section>
    )
}

export default ContactInfo;