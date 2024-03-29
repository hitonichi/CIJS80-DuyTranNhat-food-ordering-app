import { useState, useEffect } from "react";
import { BsFillTelephoneFill, BsFillHouseDoorFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const storeUrl = "http://localhost:3001/stores";

const StorePage = () => {
    const [stores, setStores] = useState([]);

    const fetchStore = async () => {
        try {
            const res = await fetch(storeUrl);
            const data = await res.json();
            setStores(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchStore();
    }, []);

    return (
        <div className="store-container">
            {stores.map(store => (
                <div className="store-card" key={store.id}>
                    <img src={store.img} alt={store.name} className="store-img" />
                    <h4 className="store-name">
                        <BsFillHouseDoorFill className="store-icon" />
                        {store.name}
                    </h4>
                    <p className="store-address">
                        <MdLocationPin className="store-icon" />
                        {store.address}
                    </p>
                    <p className="store-phone">
                        <BsFillTelephoneFill className="store-icon" />
                        {store.phone}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default StorePage;