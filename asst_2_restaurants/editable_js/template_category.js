/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
function showCategories(data) {
  // Requirements:
  // - Group data by a meaningful category (cuisine, neighborhood, price, etc.)
  // - Show items within each group
  // - Make relationships between groups clear
  // - Consider showing group statistics

  /* JavaScript Goes Here */

  const cityCount = data.reduce((acc, item) => {
    const city = item.properties.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const inspectionResults = data.reduce((acc, item) => {
    const city = item.properties.city;
    if (!acc[city]) {
      acc[city] = { total: 0, critical: 0 };
    }
    acc[city].total += 1;

    if (item.properties.inspection_results === "Critical Violations observed") {
      acc[city].critical += 1;
    }
    return acc;
  }, {});

  /* html */
  return `
                <div class="category-results">
                  <h3>Results by City</h3>
                  <div class="category-list">
                    ${Object.entries(cityCount)
                      .sort((a, b) => b[1] - a[1])
                      .map(([city, count]) => {
                        const lowerCaseCity = city.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
                        return `
                          <div class="category-item">
                            <span>${lowerCaseCity}</span>
                            <span>${count} restaurants</span>
                            <span>${inspectionResults[city] ? ((inspectionResults[city].critical / inspectionResults[city].total) * 100).toFixed(1) : 0}% in critical violation</span>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </div>

            `;
}


export default showCategories;