import React from "react";

interface PatientDetailsProps {
  activeSection: string;
  rowData: any;
}

interface StructureProps {
  section: string;
  rowData: any;
}

const SectionStructure: React.FC<StructureProps> = ({ section, rowData }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{section}</h2>
      <p>Detalles de la paciente {rowData.patient.name}.</p>
    </div>
  );
};

const patientDetails: React.FC<PatientDetailsProps> = ({
  activeSection,
  rowData,
}) => {
  switch (activeSection) {
    case "Datos de Identificación":
      return (
        <div className="max-w-3xl rounded-xl shad-alert-dialog">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{activeSection}</h2>
            <p>Detalles de la paciente .</p>
          </div>
        </div>
      );
    case "Contacto":
      return (
        <div className="max-w-3xl rounded-xl shad-alert-dialog">
          <SectionStructure section={activeSection} rowData={rowData} />
        </div>
      );
    case "Dirección":
      return (
        <div className="max-w-3xl rounded-xl shad-alert-dialog">
          <SectionStructure section={activeSection} rowData={rowData} />
        </div>
      );
    case "Historia Clínica General":
      return (
        <div className="max-w-3xl rounded-xl shad-alert-dialog">
          <SectionStructure section={activeSection} rowData={rowData} />
        </div>
      );
  }
};

export default patientDetails;
