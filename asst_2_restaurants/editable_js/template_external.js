
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
function showTable(data) {
  // Requirements:
  // - Show data using an external library, such as leaflet.js or chartsjs or similar.
  // - Make a filter on this page so your external library only shows useful data.

    /*
        javascript goes here! you can return it below
    */ 

    setTimeout(() => {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        var map = L.map('map').setView([38.9, -77.04], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        data.forEach(item => {
            const coordinate = item.geometry.coordinates;
            const name = item.properties.name;
            const address = item.properties.address_line_1;

            const [lng, lat] = coordinate;

            L.marker([lat, lng]).addTo(map).bindPopup(`<strong>${name}</strong><br>${address}`);
        });
    }, 0);

        /*html*/
    return `
        <h2 class="view-title">Library View</h2>
        <div id="map"></div>
        
    `;
}


export default showTable;