import { createTransport } from '../config/nodemailer.js'

export async function sendEmailNewAppointment({date, time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    const info = await transporter.sendMail({
        from: 'AppSalon <citas@appsalon.com',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Nueva cita",
        text: "AppSalon - Nueva cita",
        html: `<p>Hola: Admin, tienes una nueva cita</p>
            <p>La cita será el día: ${date} a las ${time} horas</p>
        `
    })
}

export async function sendEmailUpdateAppointment({date, time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    const info = await transporter.sendMail({
        from: 'AppSalon <citas@appsalon.com',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Actualizada",
        text: "AppSalon - Cita Actualizada",
        html: `<p>Hola: Admin, Un usuario ha modificado una cita.</p>
            <p>La nueva cita será el día: ${date} a las ${time} horas</p>
        `
    })
}

export async function sendEmailCancelAppointment({date, time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    const info = await transporter.sendMail({
        from: 'AppSalon <citas@appsalon.com',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Cancelada",
        text: "AppSalon - Cita Cancelada",
        html: `<p>Hola: Admin, Un usuario ha cancelado una cita.</p>
            <p>La cita cancelada era el día: ${date} a las ${time} horas</p>
        `
    })
}