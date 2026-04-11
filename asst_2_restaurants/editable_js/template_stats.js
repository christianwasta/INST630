/**
 * STATS VIEW
 * Show aggregate statistics and insights - good for understanding the big picture
 */
function showStats(data) {
  // Requirements:
  // Replace the below "task" description with the following:
  // - One meaningful statistic calculation from the supplied dataset
  // ===- percent of restaurants not passing hand-washing, for example
  // - Present insights visually
  // - Show distributions, averages, counts, etc.
  // - Help users understand patterns in the data

  /* Javascript calculations here */


  const totalRestaurants = data.length;
  const percentNotHandWashing = data.filter(item => item.properties.proper_hand_washing === "Out of Compliance").length / totalRestaurants * 100 || 0;

  const inspectionType = data.reduce((acc, item) => {
    const type = item.properties.inspection_type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const topInspectionType = Object.keys(inspectionType).reduce((a, b) => inspectionType[a] > inspectionType[b] ? a : b);
  const topInspectionTypePercent = inspectionType[topInspectionType] / totalRestaurants * 100 || 0;

  const missingInspectionResults = data.filter(item => item.properties.inspection_results === "------").length;
  const percentInspectionResultsFailed = data.filter(item => item.properties.inspection_results === "Critical Violations observed").length / totalRestaurants * 100 || 0;

  /* html return */
  return `
                <h2 class="view-title">Stats View</h2>

                <h2 class="view-title">Statistics Overview</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${totalRestaurants}</div>
                        <div class="stat-label">Total Restaurants</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${percentNotHandWashing.toFixed(2)}%</div>
                        <div class="stat-label">Restaurants Not Hand Washing</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${topInspectionType}</div>
                        <div class="stat-label">Top Inspection Type</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${topInspectionTypePercent.toFixed(2)}%</div>
                        <div class="stat-label">Top Inspection Type Percentage</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${missingInspectionResults}</div>
                        <div class="stat-label">Missing Inspection Results</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${percentInspectionResultsFailed.toFixed(2)}%</div>
                        <div class="stat-label">Failed Inspection Results</div>
                    </div>
                </div>
            `;
}

export default showStats