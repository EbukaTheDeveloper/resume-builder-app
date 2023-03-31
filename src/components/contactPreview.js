function ContactInfoPreview (props) {
    return (
      <div className="contact-details-container">
        <div className="cv-header">
            <div className="name-details">
              <p>
                {props.obj.name}
              </p>
            </div>
            <div className="contact-address">
              <p>
                <span>{props.obj.city}, {props.obj.country}</span>
                <span>{props.obj.tel}</span>
                <span>{props.obj.email}</span>
              </p>
            </div>
        </div>
    </div>
    )
}

export default ContactInfoPreview; 