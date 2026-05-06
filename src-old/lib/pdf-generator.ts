import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generatePDF(elementId: string, filename: string = 'architecture-blueprint.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  try {
    // Temporarily override styles to use compatible colors
    const originalStyle = document.documentElement.getAttribute('style');
    const overrideStyles = `
      * {
        color: #000000 !important;
        background-color: #ffffff !important;
        border-color: #e2e8f0 !important;
      }
      .bg-navy-900 {
        background-color: #1e293b !important;
        color: #ffffff !important;
      }
      .bg-white {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      .text-navy-900 {
        color: #1e293b !important;
      }
      .text-white {
        color: #ffffff !important;
      }
      .text-slate-600, .text-slate-400 {
        color: #64748b !important;
      }
      .text-slate-700, .text-slate-300 {
        color: #475569 !important;
      }
      .border-slate-200 {
        border-color: #e2e8f0 !important;
      }
      .text-firefly {
        color: #f59e0b !important;
      }
      .bg-firefly\\/5 {
        background-color: rgba(245, 158, 11, 0.05) !important;
      }
      .border-firefly\\/20 {
        border-color: rgba(245, 158, 11, 0.2) !important;
      }
      .text-tosca {
        color: #14b8a6 !important;
      }
      .bg-tosca\\/10 {
        background-color: rgba(20, 184, 166, 0.1) !important;
      }
      .border-tosca\\/20 {
        border-color: rgba(20, 184, 166, 0.2) !important;
      }
    `;
    
    // Apply temporary styles
    document.documentElement.setAttribute('style', overrideStyles);
    
    // Create canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        // Ensure styles are applied to cloned document
        const styleElement = clonedDoc.createElement('style');
        styleElement.textContent = overrideStyles;
        clonedDoc.head.appendChild(styleElement);
      }
    });

    // Restore original styles
    if (originalStyle) {
      document.documentElement.setAttribute('style', originalStyle);
    } else {
      document.documentElement.removeAttribute('style');
    }

    // Get image dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    let position = 0;

    // Add first page
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
