import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="container py-12 prose">
      <h1>Contact</h1>
      <p>Plan een demo of stel je vraag.</p>
      <ContactForm />
    </section>
  );
}
