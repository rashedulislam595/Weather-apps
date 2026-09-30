
export const getGeoLocation = async (city) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    const res = await fetch(url)

    if(!res){
        throw new Error("Failed to fetch geolocation data");
    }

    const data = await res.json();
    const place = data.results[0];

    return {
        name: place.name,
        latitude: place.latitude,
        longitude: place.longitude,
    }
}