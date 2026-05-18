import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/utils/global_variables";
import { z } from "astro/zod";
import { contactEmailTemplate } from "./contact-email.template";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      _honey: z.string().max(0).nullable(),
      nombre: z.string().min(1).max(30),
      apellido: z.string().min(1).max(30),
      correo: z.string().email().max(50),
      telefono: z.string().min(7).max(16),
      empresa: z.string().min(1).max(25),
      cargo: z.string().max(30).optional(),
      industria: z.string().max(50).optional(),
      servicio_interes: z.string().optional(),
      descripcion: z.string().min(1).max(500),
    }),
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: "Formulario de contacto <contacto@rbc-proyectos.com>",
        to: [CONTACT_EMAIL],
        subject: `Nuevo contacto: ${input.nombre} ${input.apellido}`,
        html: contactEmailTemplate(input),
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
