$(function(){

  // Footer year
  $("#year, #year2").text(new Date().getFullYear());

  // Download PDF for resume — tuned to keep layout tight for A4
  $("#downloadPdfBtn").click(function() {
    const element = document.getElementById("resume");
    if (!element) return alert("Resume not found!");

    const opt = {
      margin: [6, 6, 6, 6], // mm top/right/bottom/left
      filename: "Milanraj_Resume_A4.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,            // increase for better quality
        useCORS: true,
        logging: false
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    // Temporarily increase font smoothing for canvas rendering if needed
    html2pdf().set(opt).from(element).save();
  });

  // Print biodata
  $("#printBtn").click(function(){
    window.print();
  });

});