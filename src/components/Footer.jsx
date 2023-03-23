const Footer = () => {
    return (
        <div className="footer d-flex flex-column align-items-center position-relative p-2">
            <div className="contacts mt-2">
                <div className="contact-container">
                    <p className="fw-bold">Address:</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas!</p>
                </div>
                <div className="contact-container">
                    <p className="fw-bold">Telephone:</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas!</p>
                </div>
                <div className="contact-container">
                    <p className="fw-bold">Email:</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas!</p>
                </div>
                <div className="contact-container">
                    <p className="fw-bold">Working Hour:</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas!</p>
                </div>
            </div>
            <a href="#" className="to-top-btn"><i className="fa-solid fa-arrow-up"></i></a>
            <div className="">&#169; Food Ordering Website 2023 by <span className="text-danger">Duy & Thuan</span></div>
        </div>
    )
}

export default Footer