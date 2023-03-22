import "./css/App.css";
import CarouselApp from "./components/Capp/carouselApp";
import CarouselMarcas from "./components/Capp/carouselMarcas";
import img1 from "./assets/home/img7.jpg";
import GroupServices from "./components/groupServices";
import GridServices from "./components/gridServices";
import ImageGallery from "./components/imagegallery";
import PreguntasFrecuentes from "./components/preguntasFrecuentes";
import FormContacto from "./components/formContacto";
import Testimonios from "./components/testimonios";

function App() {
  return (
    <div className="App">
      <main>
        <div className="inicio" id="inicio">
          <div className="texto">
            <h1>
              <strong>Reparación de booster de frenos</strong>
            </h1>
            <h6>Taller Mecánico en estado de méxico, ecatepec de morelos.</h6>
            <br />
            <p>
              ¿Estás preocupado por el rendimiento de los frenos de tu vehículo?
              ¿Sientes que tienes que presionar demasiado el pedal del freno
              para detener el coche? Puede ser que el booster de frenos necesite
              ser revisado. El booster de frenos es un componente esencial en el
              sistema de frenos de tu automóvil. Ayuda a multiplicar la fuerza
              de frenado al presionar el pedal del freno, lo que permite detener
              el vehículo de manera más eficiente y segura. Si el booster no
              está funcionando correctamente, puede ser necesario aplicar más
              fuerza al pedal del freno para detener el vehículo, lo que puede
              ser peligroso en situaciones de emergencia. En nuestro taller de
              reparación de booster de frenos, ofrecemos servicios de alta
              calidad para asegurarnos de que tu vehículo esté en perfectas
              condiciones. Nuestros técnicos altamente cualificados tienen la
              experiencia y el conocimiento necesarios para diagnosticar y
              reparar cualquier problema con el booster de frenos. <br /> <br />
              <strong>
                ¿Preocupado por la seguridad de tu vehículo? <br />
              </strong>
              <br />
              En BOOSTER THE BOSSES, somos expertos en la reparación de booster,
              hidrobooster, hydromax, hidrovac de frenos y estamos aquí para
              garantizar que tu automóvil esté en las mejores condiciones
              posibles. No arriesgues tu seguridad y la de tus seres queridos,
              confía en nosotros para reparar tu booster de frenos de manera
              rápida, eficiente y a un precio justo. <br />
              <h6>
                <strong>
                  <br />
                  ¡Agenda una cita hoy mismo y conduce con tranquilidad!
                </strong>
              </h6>
            </p>
            <a
              className="btn-agendarP"
              href="https://wa.link/aamgds"
              target={"_blank"}
            >
              <button className="btn-agendar">Agendar</button>
            </a>
            <h6>O</h6>
            <a className="btn-agendarP" href="tel:+525583175742">
              <button className="btn-agendar">LLAMAR AHORA</button>
            </a>
            <img className="imagen" src={img1} alt="booster de frenos" />
          </div>
        </div>
        <CarouselMarcas />
        <div className="section2" id="servicios">
          <GroupServices />
          <br />
          <h3>
            <strong>Servicios de reparación para:</strong>
          </h3>
          <br />
          <GridServices />
          <br />
          <CarouselApp />
        </div>
        <div className="section3" id="quienes">
          <div className="texto">
            <h3>
              <strong>Quiénes somos</strong>
            </h3>
            <br />
            <p>
              En BOOSTER THE BOSSES, tenemos una historia de éxito en la
              industria automotriz que se remonta desde 1990. Desde entonces,
              nos hemos dedicado a brindar soluciones innovadoras y de calidad
              en el área de reparación de booster de frenos. Nuestra filosofía
              se basa en ofrecer a nuestros clientes un servicio excepcional a
              precios competitivos, lo cual nos ha llevado a ser líderes en el
              mercado y ganarnos la confianza de miles de clientes satisfechos.
              Nos enorgullece ser una empresa de servicios automotrices
              altamente reconocida por nuestra capacidad para resolver problemas
              y satisfacer las necesidades de nuestros clientes.
              <br />
              Tambien, estamos comprometidos con la excelencia en todo lo que
              hacemos. Nos enfocamos en la innovación, la eficiencia y la
              calidad en cada proyecto que emprendemos. Además, nuestro equipo
              de técnicos altamente capacitados está equipado con las últimas
              herramientas y tecnologías, lo que nos permite brindar una
              reparación de booster de frenos rápida y efectiva.
              <br />
              Nuestro objetivo es ofrecer un servicio al cliente personalizado y
              amigable. Creemos que la comunicación clara y abierta es esencial
              para satisfacer las necesidades de nuestros clientes, y estamos
              comprometidos a trabajar con ellos para garantizar que cada
              reparación de booster de frenos sea exitosa.
              <br />
              Nos enorgullecemos de ser la mejor opción en reparación de booster
              de frenos en Ecatepec de morelos, Estado de Mexico. <br /> No
              dudes en contactarnos para conocer más acerca de nuestros
              servicios o para programar una cita para tu vehículo. ¡Estamos
              aquí para ayudarte!
            </p>
            <a
              className="btn-agendarP"
              href="https://wa.link/aamgds"
              target={"_blank"}
            >
              <button className="btn-agendar">Agendar cita</button>
            </a>
            <br />
            <br />
            <Testimonios />
            <br />
          </div>
        </div>
        <div className="section4" id="galeria">
          <h3>
            <strong>Galería</strong>
          </h3>
          <ImageGallery />
        </div>
        <div className="section5" id="contacto">
          <h3>
            <strong>Contáctanos</strong>
          </h3>
          <FormContacto />
        </div>
        <div className="section6" id="preguntas">
          <h3>
            <strong>Preguntas frecuentes</strong>
          </h3>
          <PreguntasFrecuentes />
        </div>
      </main>
    </div>
  );
}

export default App;
