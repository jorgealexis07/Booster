import React, { useState } from 'react';
import '../css/terminos.css';

function TermsAndConditions() {
 

  return (
    <div className="terms-container">
        <div className="terms-content">
          <h2>Términos y condiciones</h2>
          <ol>
            <li>
              Aceptación de términos: Al hacer uso de nuestros servicios de reparación de booster de frenos, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones, no utilice nuestros servicios.
            </li>
            <li>
              Servicios ofrecidos: Ofrecemos servicios de reparación de booster de frenos para vehículos de diferentes marcas y modelos. Los servicios incluyen diagnóstico, reparación y reemplazo de piezas defectuosas en el booster de freno. No nos hacemos responsables por cualquier otro daño o problema que no esté directamente relacionado con el booster de freno.
            </li>
            <li>
              Precios y pagos: Los precios de nuestros servicios varían según la marca y modelo del vehículo, así como la magnitud de la reparación necesaria. El costo se discutirá con el cliente antes de comenzar cualquier trabajo. Los pagos se deben realizar en su totalidad antes de que se entregue el vehículo reparado.
            </li>
            <li>
              Garantía: Ofrecemos una garantía limitada en nuestros servicios de reparación de booster de frenos. La garantía cubre cualquier defecto de fabricación o mano de obra durante un período de tiempo limitado después de la reparación. La garantía no cubre cualquier problema que se haya producido debido al mal uso o desgaste normal.
            </li>
            <li>
              Responsabilidad: No nos hacemos responsables por ningún daño o perjuicio que resulte del uso de nuestros servicios, incluyendo cualquier daño o perjuicio que resulte de cualquier negligencia por nuestra parte. Usted asume todos los riesgos asociados con el uso de nuestros servicios.
            </li>
            <li>
              Confidencialidad: Nos comprometemos a proteger su privacidad y no compartir su información personal con terceros sin su consentimiento previo.
            </li>
            <li>
              Ley aplicable: Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país donde se presten los servicios de reparación de booster de frenos.
            </li>
          </ol>
        </div>
      
    </div>
  );
}

export default TermsAndConditions;
