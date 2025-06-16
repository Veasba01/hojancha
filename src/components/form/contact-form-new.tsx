'use client'
import Link from "next/link";
import { IContactForm } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactInputField, ContactTextAreaField } from "./input-field";


export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>();
    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        try {
            console.log(data,'data');
            reset()
        } catch (error: unknown) {
            console.log(error, 'error in register');
        }
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ContactInputField
                        label="Nombre Completo"
                        id="fname"
                        type="text"
                        placeholder="Juan"
                        required
                        {...register("fname", { required: "El nombre completo es requerido" })}
                        error={errors.fname?.message}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Apellidos"
                            id="lname"
                            type="text"
                            placeholder="Pérez"
                            required
                            {...register("lname", { required: "Los apellidos son requeridos" })}
                            error={errors.lname?.message}                        
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Correo Electrónico"
                            id="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            required
                            {...register("email", { required: "El correo electrónico es requerido" })}
                            error={errors.email?.message}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Número de Teléfono"
                            id="phone"
                            type="text"
                            placeholder="8888-8888"
                            required
                            {...register("phone", { required: "El número de teléfono es requerido" })}
                            error={errors.phone?.message}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-input mb-25">
                        <ContactInputField
                            label="Asunto" 
                            id="subject"
                            type="text"
                            placeholder="Ingrese el asunto"
                            {...register("subject", { required: false})}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <ContactTextAreaField
                        label="Mensaje"
                        id="message"
                        placeholder="Déjanos tu mensaje..."
                        required
                        {...register("message", { required: "El mensaje es requerido" })}
                        error={errors.message?.message}
                    />
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-agree mb-30 d-flex align-items-start mb-25">
                        <input name="checkbox" className="tp-checkbox" type="checkbox" id="agree" />
                        <label className="tp-agree" htmlFor="agree">Acepto los <Link href="/privacy-policy">términos y condiciones</Link></label>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-comment-btn-wrap">
                        <button className="tp-btn-large w-100 text-center" type="submit">Enviar Mensaje</button>
                    </div>
                    <p className="ajax-response mt-20"></p>
                </div>
            </div>
        </form>
    )
}
