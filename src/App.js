
import { Cards, Chart, CountryPicker } from "./components/index.js";
import styles from "./App.module.css";

import { fethData } from "./api/index.js";
import { useEffect, useState } from "react";

import coronaImage from './images/image.png';

const App = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState("");

    const handleCountryChange = async (country) => {
        const fetchedData = await fethData(country);
        setData(fetchedData);
        setCountry(country);
        console.log(fetchedData);
    };

    useEffect(() => {
        const fetch = async () => {
            const data = await fethData();
            setData(data);
        }
        fetch();
    }, [])
    return (
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}

export default App;