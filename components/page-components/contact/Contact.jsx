import { useContactContext } from "../../../context/ContactProvider";
import ClientPortal from "../../../utils/ClientPortal";
import Form from "./Form";

function Contact() {
  const [open, setOpen] = useContactContext();
  return (
    <ClientPortal selector="#portal-contact">
      {open && (
        <section className=" h-screen flex items-center justify-center fixed top-0 left-0 w-full p-4 ">
          <div
            className="absolute -top-4 left-0 w-[120%] h-[120%] cursor-pointer bg-darkblue/50 blurry transition-all"
            onClick={() => {
              setOpen(false);
            }}
          ></div>
          <div className="  max-w-xl w-full bg-gray-100 rounded-xl relative z-[4000]">
            <Form />
          </div>
        </section>
      )}
    </ClientPortal>
  );
}

export default Contact;
