import html2pdf from 'html2pdf.js';

const convertToPdf = ()=>{
  console.log('295');
  const element = document.querySelector('.document');
  let opt = {
    filename:     'my-cv.pdf',
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}
export default convertToPdf;