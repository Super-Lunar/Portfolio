import ContactCard from "./cards/ContactCard";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl"> Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Email : Sharmasaurabh4476@gmail.com</p>
      </div>
      <ContactCard />
    </div>
  );
};

export default Contact;
