import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../css/groupServices.css"
function GroupServices() {
  return (
    <CardGroup>
      <Card>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-clock"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
        <Card.Body className="text-center">
          

          <Card.Title>
            <strong>Boosters a cambío</strong>{" "}
          </Card.Title>
          <Card.Text>
            Sabemos lo importante que es tu auto, por eso entregamos a tiempo y
            rapidamente: sin demoras, sin excusas.
          </Card.Text>
        </Card.Body >
      </Card>
      <Card >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <Card.Body className="text-center">
          <Card.Title>
            <strong>Refacciones de calidad</strong>
          </Card.Title>
          <Card.Text>
            Tenemos convenios con los mejores proveedores de repuestos
            originales ¡Garantizados!{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-user-check"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11l2 2l4 -4" />
        </svg>
        <Card.Body className="text-center">
          <Card.Title>
            <strong>Técnicos Especializados</strong>{" "}
          </Card.Title>
          <Card.Text>¡Estás en manos de profesionales!</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-firetruck"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="5" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
          <path d="M12 18v-11h3" />
          <polyline points="3 17 3 12 12 12" />
          <line x1="3" y1="9" x2="21" y2="3" />
          <line x1="6" y1="12" x2="6" y2="8" />
        </svg>
        <Card.Body className="text-center">
          <Card.Title>
            <strong>Servicio a domicilio</strong>{" "}
          </Card.Title>
          <Card.Text>
            Si no puedes venir al Taller; el Taller va hasta donde tú estés.
            Seguridad y confort para ti y tu auto.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-award"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="9" r="6" />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(-30 12 9)"
          />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(30 12 9)"
          />
        </svg>
        <Card.Body className="text-center">
          <Card.Title>
            <strong>Garantia</strong>{" "}
          </Card.Title>
          <Card.Text>Te garantizamos todos nuestros productos</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-discount-2"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="9" y1="15" x2="15" y2="9" />
          <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
          <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
        </svg>
        <Card.Body className="text-center">
          <Card.Title>
            <strong>Descuentos</strong>{" "}
          </Card.Title>
          <Card.Text>Ofrecemos descuentos especiales a mecánicos.</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupServices;
