function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface ContactEmailInput {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  empresa: string;
  cargo?: string;
  industria?: string;
  servicio_interes?: string;
  descripcion: string;
}

export function contactEmailTemplate(input: ContactEmailInput): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #222; background: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.1); }
          .header { background: #1a3a5c; padding: 24px 32px; }
          .header h1 { color: #fff; margin: 0; font-size: 20px; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #888; letter-spacing: .5px; margin-bottom: 4px; }
          .value { font-size: 15px; color: #222; border-left: 3px solid #1a3a5c; padding-left: 10px; }
          .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; color: #1a3a5c; border-bottom: 1px solid #e0e0e0; padding-bottom: 6px; margin: 28px 0 16px; }
          .footer { background: #f4f4f4; padding: 16px 32px; font-size: 12px; color: #aaa; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nuevo formulario de contacto</h1>
          </div>
          <div class="body">
            <div class="section-title">Datos personales</div>
            <div class="field">
              <div class="label">Nombre</div>
              <div class="value">${esc(input.nombre)} ${esc(input.apellido)}</div>
            </div>
            <div class="field">
              <div class="label">Correo electrónico</div>
              <div class="value">${esc(input.correo)}</div>
            </div>
            <div class="field">
              <div class="label">Teléfono</div>
              <div class="value">${esc(input.telefono)}</div>
            </div>

            <div class="section-title">Información profesional</div>
            <div class="field">
              <div class="label">Empresa</div>
              <div class="value">${esc(input.empresa)}</div>
            </div>
            ${
              input.cargo
                ? `
            <div class="field">
              <div class="label">Cargo</div>
              <div class="value">${esc(input.cargo!)}</div>
            </div>`
                : ""
            }
            ${
              input.industria
                ? `
            <div class="field">
              <div class="label">Industria</div>
              <div class="value">${esc(input.industria!)}</div>
            </div>`
                : ""
            }
            ${
              input.servicio_interes
                ? `
            <div class="field">
              <div class="label">Servicio de interés</div>
              <div class="value">${esc(input.servicio_interes!)}</div>
            </div>`
                : ""
            }

            ${
              input.descripcion
                ? `<div class="section-title">Mensaje</div>
              <div class="field">
                <div class="label">Descripción</div>
                <div class="value">${esc(input.descripcion!)}</div>
              </div>
            </div>`
                : ""
            }
          <div class="footer">Este mensaje fue enviado desde el formulario de contacto de rbc-proyectos.com</div>
        </div>
      </body>
    </html>
  `;
}
