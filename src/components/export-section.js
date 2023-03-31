import convertToPdf from "../functionality/toPdf";

function ExportSection({handleClick,handleReset}) {
    return (
        <section className="export-section">
          <div>
            <p className="export-header">
              <span>Here's Your Resume </span>
              <span>What do you want to do next</span>
            </p>
            <span>Export Options</span>
            <button type="button" className="download-btn" onClick={convertToPdf}>Download as pdf</button>
            <button type="button" className="print-btn" onClick={handleClick}>Print</button>
            <button type="button" className="reset-cv" onClick={handleReset}>Reset</button>
          </div>
        </section>
    )
}

export default ExportSection;