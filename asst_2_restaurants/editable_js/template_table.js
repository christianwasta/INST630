
/**
 * TABLE VIEW
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
  // Requirements:
  // - Show data in a table format
  // - Include all important fields
  // - Make it easy to scan and compare
  // - Consider adding sorting functionality
  //   https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/

    /*
        javascript goes here! you can return it below
    */
  const lowerCase = (value) => {
    return value.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  };
  const rows = data
    .map((item) => {
      const property = item.properties;
      return `
        <tr>
          <td>${lowerCase(property.name)}</td>
          <td>${lowerCase(property.category)}</td>
          <td>${lowerCase(property.address_line_1)}</td>
          <td>${lowerCase(property.city)}</td>
          <td>${property.state}</td>
          <td>${property.zip}</td>
        </tr>
      `;
    })
    .join("");
  /*html*/ 
  return `
                <div class="table-container">
                  <table class="restaurant-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows}
                    </tbody>
                  </table>
                </div>
            `;
}

export default showTable;