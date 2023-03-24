const Footer = () => {
    return (
        <div className="footer d-flex flex-column align-items-center position-relative p-2">
            <div className="contacts mt-2">
                <div className="contact-container">
                    <div className="d-flex align-items-center gap-1">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="fw-bold m-0">Address:</p>
                    </div>
                    <p>07567 Ortiz Track, Suite 887, 22299, Lednertown, Texas, United States.</p>
                </div>
                <div className="contact-container">
                <div className="d-flex align-items-center gap-1">
                        <i className="fa-solid fa-phone"></i>
                        <p className="fw-bold m-0">Telephone:</p>
                    </div>
                    <p>804-993-0103</p>
                </div>
                <div className="contact-container">
                    <div className="d-flex align-items-center gap-1">
                        <i className="fa-solid fa-envelope"></i>
                        <p className="fw-bold m-0">Email:</p>
                    </div>
                    <p>contact.famealy@outlook.com</p>
                </div>
                <div className="contact-container">
                    <div className="d-flex align-items-center gap-1">
                        <i className="fa-solid fa-clock"></i>
                        <p className="fw-bold m-0">Working Hour:</p>
                    </div>
                    <p>Weekdays: 8 a.m. - 10 p.m</p>
                    <p>Weekends: 9 a.m. - 11:30 p.m</p>
                </div>
            </div>
            <a href="#" className="to-top-btn"><i className="fa-solid fa-arrow-up"></i></a>
            <div className="">&#169; Food Ordering Website 2023 by <span className="text-danger">Duy & Thuan</span></div>
        </div>
    )
}

export default Footer