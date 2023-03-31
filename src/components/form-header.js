function FormHeader ({myComponent,text}) {
    return (
        <div className="info-header">
          <div className="icon-container-form">
            {myComponent}
          </div>
          <p>{text}</p>
        </div>
    )
}

export default FormHeader;

