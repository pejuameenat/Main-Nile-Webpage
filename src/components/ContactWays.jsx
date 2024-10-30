const ContactWays = ({ icon, contact, name }) => {
  return (
    <a href="#" className="bg-myCustomColor-lighterGreen border w-full border-myCustomColor-light rounded-md p-6 lg:w-2/5 mx-auto lg:mx-0">
      <div >
        <img src={icon} className='block w-10 h-10 mx-auto'alt="" />
        <h5 className="font-bold">{name}</h5>
        <p className="py-2 lg:text-lg">{contact}</p>
      </div>
    </a>
  );
};

export default ContactWays;
