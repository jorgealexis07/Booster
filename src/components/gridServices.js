import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import imgBooster from "../assets/gridServices/booster.jpg";
import imgHidroB from "../assets/gridServices/hidrobooster.jpg";
import imgHidroM from "../assets/gridServices/hidromax.jpg";
import imgHidroV from "../assets/gridServices/hidrovac.jpg";

function GridServices() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={imgBooster} alt="booster de frenos"/>
          <Card.Body>
            <Card.Title>
              <h2>BOOSTER / SERVOFRENO</h2>
            </Card.Title>
            <Card.Text>
              <br /> Ofrecemos servicio especializado para solucionar problemas
              como: <br />
              🔹 Pedal de freno duro <br />
              🔹 Bajo rendimiento
              <br />
              🔹 Pérdida de presión, como silbidos y fugas de aire.
              <br />
              <br />
              Nuestro equipo técnico altamente capacitado y con experiencia te
              brindará la mejor atención y solución a tus necesidades.
              <br /> ¡Contáctanos hoy mismo!
              <a
                className="btn-agendarP"
                href="https://wa.link/aamgds"
                target={"_blank"}
              >
                <button className="btn-agendar" >Contáctar</button>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={imgHidroB} alt="hidrobooster" />
          <Card.Body>
            <Card.Title>
              <h2>HIDROBOOSTER</h2>
            </Card.Title>
            <Card.Text>
              <br />⚠ Si notas que tus frenos están duros o necesitas aplicar
              más fuerza de lo normal para detener el vehículo, es posible que
              tengas un problema con el hidrobooster ⚠. <br /> Otros síntomas de
              falla pueden incluir: <br />
              🔹 Ruidos extraños al frenar <br />
              🔹 Pérdida de presión en el pedal de freno <br />
              🔹 Fugas de aceite <br />
              🔹 Frenos que no responden de manera efectiva. <br /> <br />{" "}
              Nuestro equipo técnico altamente capacitado y con experiencia en
              la reparación de hidroboosters te brindará la mejor atención y
              solución a tus necesidades. ¡Contáctanos hoy mismo para programar
              una cita y devolverle a tu vehículo la seguridad y confiabilidad
              que necesitas en la carretera!
            </Card.Text>
            <a
              className="btn-agendarP"
              href="https://wa.link/aamgds"
              target={"_blank"}
            >
              <button className="btn-agendar">Contáctar</button>
            </a>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={imgHidroM} alt="Hydromax"/>
          <Card.Body>
            <Card.Title>
              <h2>HYDROMAX</h2>
            </Card.Title>
            <Card.Text>
              ⚠ Si estás experimentando problemas con tus frenos, como un pedal
              de freno duro o pérdida de presión, es posible que tu sistema
              Hydromax tenga una falla ⚠. <br />
              Otros síntomas incluyen:
              <br />
              🔹 Ruidos extraños al frenar <br />
              🔹 Vibraciones en el pedal de freno <br />
              🔹 Tiradera de aceite <br />
              🔹 Frenos que no responden de manera efectiva. <br />
              <br />
              <br />
              En nuestro taller especializado en reparaciones de sistemas
              Hydromax, nuestro equipo técnico altamente capacitado y con
              experiencia te brindará una solución rápida y eficaz. No
              arriesgues la seguridad en la carretera, ¡contáctanos hoy mismo
              para programar una cita y recuperar la confiabilidad de tus
              frenos!
            </Card.Text>
            <a
              className="btn-agendarP"
              href="https://wa.link/aamgds"
              target={"_blank"}
            >
              <button className="btn-agendar">Contáctar</button>
            </a>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={imgHidroV} alt="Hydrovac" style={{ width: "50%" }} />
          <Card.Body>
            <Card.Title>
              <h2>HYDROVAC</h2>
            </Card.Title>
            <Card.Text>
              ⚠ Si notas que tu pedal de freno está duro y requiere de mucho
              esfuerzo para detener el vehículo, es posible que tu Hydrovac
              tenga una falla ⚠. Otros síntomas incluyen:
              <br />
              🔹 Un ruido de soplido al presionar el pedal de freno <br />
              🔹 Una vibración en el pedal de freno
              <br /> 🔹 Una sensación de que los frenos no están respondiendo
              correctamente
              <br /> 🔹 Las ruedas se bloquean y el vehículo se desliza. <br />
              <br />
              En nuestro taller especializado en reparaciones de sistemas
              Hydrovac, nuestro equipo técnico altamente capacitado y con
              experiencia te brindará una solución rápida y eficaz. No
              arriesgues la seguridad en la carretera, ¡contáctanos hoy mismo
              para programar una cita y recuperar la confiabilidad de tus
              frenos!
            </Card.Text>
            <a
              className="btn-agendarP"
              href="https://wa.link/aamgds"
              target={"_blank"}
            >
              <button className="btn-agendar">Contáctar</button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GridServices;
