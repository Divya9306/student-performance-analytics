import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportStudentsToPDF = (students) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Student Performance System", 14, 20);

    doc.setFontSize(12);
    doc.text("Student Report", 14, 30);

    const tableData = students.map(student => [
        student.student_id,
        student.name,
        student.email_ID,
        student.department,
        new Date(student.admission_date).toLocaleDateString()
    ]);

    autoTable(doc, {
        head: [[
            "ID",
            "Name",
            "Email",
            "Department",
            "Admission Date"
        ]],
        body: tableData,
        startY: 40,
        theme: "grid",
        headStyles: {
            fillColor: [37, 99, 235]
        }
    });

    doc.save("students.pdf");

};