import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Download() {
  const downloadPage = () => {
    const input = document.getElementById('root');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save('download.pdf');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className='text-center'>
      <button className="order_now" onClick={downloadPage}>Download Page</button>
    </div>
  );
}

export default Download;
