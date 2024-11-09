import { Footer, ContactWays, AllSliderComponent } from "../components";
import { contacts } from "../utils";
import { setFormMessage } from "../features/formSlicer/formSlice";
import { useSelector, useDispatch } from "react-redux";
const ContactPage = () => {
  const { formErrorMessage } = useSelector((store) => store.form);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    console.log(name);

    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    if (!name || !email || !subject || !message) {
      dispatch(setFormMessage(true));
    } else {
      dispatch(setFormMessage(false));
    }
  };
  return (
    <>
      <section className="section-spacing bg-pry2">
        <div className="w-5/6 max-w-xl mx-auto">
          <h1 className="section-headers text-center">
            Contact Our Friendly Team
          </h1>
          <strong className="block lg:text-[20px] py-3 text-pry3 text-center">
            We’re here to Assist With Any Questions, Partnerships Or Support.
          </strong>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="labels">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={formErrorMessage?'inputs outline-1 outline-red-600':"inputs"}
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="labels">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={formErrorMessage?'inputs outline-1 outline-red-600':"inputs"}
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="labels">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className={formErrorMessage?'inputs outline-1 outline-red-600':"inputs"}
                placeholder="Enter Your Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="labels">
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className={formErrorMessage?'inputs outline-1 outline-red-600':"inputs"}
                placeholder="Enter Your Message"
              />
            </div>
            {formErrorMessage && (
              <p className="text-red-600 font-semibold py-2">
                Input fields cannot be empty!
              </p>
            )}
            <button
              type="submit"
              className="mx-auto mt-14 block bg-slate-950 rounded-full font-semibold text-pry1 py-1 w-44 h-12 hover:bg-primary active:bg-primary transitions"
            >
              {" "}
              Send Message
            </button>
          </form>
          <div className="">
            <h3 className="section-headers mt-16 text-center">
              Other Ways to Contact us
            </h3>
            <article className="mt-12 flex flex-col lg:flex-row gap-4 lg:gap-32 text-center ">
              {contacts.map((item) => (
                <ContactWays key={item.id} {...item} />
              ))}
            </article>
          </div>
        </div>
      </section>
      <AllSliderComponent />
      <Footer />
    </>
  );
};

export default ContactPage;
