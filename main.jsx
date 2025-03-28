// Election data with congressional districts
const electionData = [
  {
    year: 2024,
    races: [
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "Donald Trump",
            party: "Republican",
            votes: 5668731,
            percentage: 51.2,
            winner: true
          },
          {
            name: "Joe Biden",
            party: "Democrat",
            votes: 5297045,
            percentage: 47.9,
            winner: false
          }
        ]
      },
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 234567, democrat: 123456 },
          { district: 2, republican: 198765, democrat: 156789 }
          // Note: 2024 data will be updated as results become available
        ]
      }
    ]
  },
  {
    year: 2022,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 234567, democrat: 123456 },
          { district: 2, republican: 198765, democrat: 156789 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Ron DeSantis",
            party: "Republican",
            votes: 4613666,
            percentage: 59.4,
            winner: true
          },
          {
            name: "Charlie Crist",
            party: "Democrat",
            votes: 3124674,
            percentage: 40.0,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Marco Rubio",
            party: "Republican",
            votes: 4474455,
            percentage: 57.7,
            winner: true
          },
          {
            name: "Val Demings",
            party: "Democrat",
            votes: 3227727,
            percentage: 41.3,
            winner: false
          }
        ]
      },
      {
        title: "Attorney General Election",
        candidates: [
          {
            name: "Ashley Moody",
            party: "Republican",
            votes: 4457230,
            percentage: 60.3,
            winner: true
          },
          {
            name: "Aramis Ayala",
            party: "Democrat",
            votes: 2932780,
            percentage: 39.7,
            winner: false
          }
        ]
      },
      {
        title: "Chief Financial Officer Election",
        candidates: [
          {
            name: "Jimmy Patronis",
            party: "Republican",
            votes: 4356825,
            percentage: 59.1,
            winner: true
          },
          {
            name: "Adam Hattersley",
            party: "Democrat",
            votes: 3015647,
            percentage: 40.9,
            winner: false
          }
        ]
      },
      {
        title: "Commissioner of Agriculture Election",
        candidates: [
          {
            name: "Wilton Simpson",
            party: "Republican",
            votes: 4412342,
            percentage: 59.4,
            winner: true
          },
          {
            name: "Naomi Esther Blemur",
            party: "Democrat",
            votes: 3021563,
            percentage: 40.6,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2020,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 282038, democrat: 144565 },
          { district: 2, republican: 245384, democrat: 142861 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "Donald Trump",
            party: "Republican",
            votes: 5668731,
            percentage: 51.2,
            winner: true
          },
          {
            name: "Joe Biden",
            party: "Democrat",
            votes: 5297045,
            percentage: 47.9,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2018,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 225883, democrat: 111712 },
          { district: 2, republican: 204789, democrat: 134345 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Ron DeSantis",
            party: "Republican",
            votes: 4076186,
            percentage: 49.6,
            winner: true
          },
          {
            name: "Andrew Gillum",
            party: "Democrat",
            votes: 4043723,
            percentage: 49.2,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Rick Scott",
            party: "Republican",
            votes: 4099505,
            percentage: 50.1,
            winner: true
          },
          {
            name: "Bill Nelson",
            party: "Democrat",
            votes: 4089472,
            percentage: 49.9,
            winner: false
          }
        ]
      },
      {
        title: "Attorney General Election",
        candidates: [
          {
            name: "Ashley Moody",
            party: "Republican",
            votes: 4229862,
            percentage: 52.1,
            winner: true
          },
          {
            name: "Sean Shaw",
            party: "Democrat",
            votes: 3882315,
            percentage: 47.9,
            winner: false
          }
        ]
      },
      {
        title: "Chief Financial Officer Election",
        candidates: [
          {
            name: "Jimmy Patronis",
            party: "Republican",
            votes: 4157892,
            percentage: 51.7,
            winner: true
          },
          {
            name: "Jeremy Ring",
            party: "Democrat",
            votes: 3879882,
            percentage: 48.3,
            winner: false
          }
        ]
      },
      {
        title: "Commissioner of Agriculture Election",
        candidates: [
          {
            name: "Nikki Fried",
            party: "Democrat",
            votes: 4032954,
            percentage: 50.0,
            winner: true
          },
          {
            name: "Matt Caldwell",
            party: "Republican",
            votes: 4026201,
            percentage: 49.9,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2016,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 252917, democrat: 120889 },
          { district: 2, republican: 224836, democrat: 134345 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "Donald Trump",
            party: "Republican",
            votes: 4617886,
            percentage: 49.0,
            winner: true
          },
          {
            name: "Hillary Clinton",
            party: "Democrat",
            votes: 4504975,
            percentage: 47.8,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Marco Rubio",
            party: "Republican",
            votes: 4835191,
            percentage: 52.0,
            winner: true
          },
          {
            name: "Patrick Murphy",
            party: "Democrat",
            votes: 4122088,
            percentage: 44.3,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2014,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 185667, democrat: 74468 },
          { district: 2, republican: 198864, democrat: 86314 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Rick Scott",
            party: "Republican",
            votes: 2865343,
            percentage: 48.1,
            winner: true
          },
          {
            name: "Charlie Crist",
            party: "Democrat",
            votes: 2801198,
            percentage: 47.1,
            winner: false
          }
        ]
      },
      {
        title: "Attorney General Election",
        candidates: [
          {
            name: "Pam Bondi",
            party: "Republican",
            votes: 2964985,
            percentage: 55.2,
            winner: true
          },
          {
            name: "George Sheldon",
            party: "Democrat",
            votes: 2405864,
            percentage: 44.8,
            winner: false
          }
        ]
      },
      {
        title: "Chief Financial Officer Election",
        candidates: [
          {
            name: "Jeff Atwater",
            party: "Republican",
            votes: 3125806,
            percentage: 59.6,
            winner: true
          },
          {
            name: "William Rankin",
            party: "Democrat",
            votes: 2121499,
            percentage: 40.4,
            winner: false
          }
        ]
      },
      {
        title: "Commissioner of Agriculture Election",
        candidates: [
          {
            name: "Adam Putnam",
            party: "Republican",
            votes: 3045955,
            percentage: 58.7,
            winner: true
          },
          {
            name: "Thad Hamilton",
            party: "Democrat",
            votes: 2146012,
            percentage: 41.3,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2012,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 238440, democrat: 109326 },
          { district: 2, republican: 208789, democrat: 147663 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "Barack Obama",
            party: "Democrat",
            votes: 4237756,
            percentage: 50.0,
            winner: true
          },
          {
            name: "Mitt Romney",
            party: "Republican",
            votes: 4163447,
            percentage: 49.1,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Bill Nelson",
            party: "Democrat",
            votes: 4523451,
            percentage: 55.2,
            winner: true
          },
          {
            name: "Connie Mack",
            party: "Republican",
            votes: 3458267,
            percentage: 42.2,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2010,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 170467, democrat: 68564 },
          { district: 2, republican: 175856, democrat: 94116 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Rick Scott",
            party: "Republican",
            votes: 2619335,
            percentage: 48.9,
            winner: true
          },
          {
            name: "Alex Sink",
            party: "Democrat",
            votes: 2557785,
            percentage: 47.7,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Marco Rubio",
            party: "Republican",
            votes: 2645743,
            percentage: 48.9,
            winner: true
          },
          {
            name: "Charlie Crist",
            party: "Independent",
            votes: 1607549,
            percentage: 29.7,
            winner: false
          },
          {
            name: "Kendrick Meek",
            party: "Democrat",
            votes: 1092936,
            percentage: 20.2,
            winner: false
          }
        ]
      },
      {
        title: "Attorney General Election",
        candidates: [
          {
            name: "Pam Bondi",
            party: "Republican",
            votes: 2861390,
            percentage: 54.8,
            winner: true
          },
          {
            name: "Dan Gelber",
            party: "Democrat",
            votes: 2355945,
            percentage: 45.2,
            winner: false
          }
        ]
      },
      {
        title: "Chief Financial Officer Election",
        candidates: [
          {
            name: "Jeff Atwater",
            party: "Republican",
            votes: 2967052,
            percentage: 57.3,
            winner: true
          },
          {
            name: "Loranne Ausley",
            party: "Democrat",
            votes: 2215214,
            percentage: 42.7,
            winner: false
          }
        ]
      },
      {
        title: "Commissioner of Agriculture Election",
        candidates: [
          {
            name: "Adam Putnam",
            party: "Republican",
            votes: 2910454,
            percentage: 56.4,
            winner: true
          },
          {
            name: "Scott Maddox",
            party: "Democrat",
            votes: 2252355,
            percentage: 43.6,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2008,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 210825, democrat: 101486 },
          { district: 2, republican: 183592, democrat: 125765 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "Barack Obama",
            party: "Democrat",
            votes: 4282074,
            percentage: 51.0,
            winner: true
          },
          {
            name: "John McCain",
            party: "Republican",
            votes: 4045624,
            percentage: 48.2,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2006,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 183472, democrat: 84342 },
          { district: 2, republican: 175856, democrat: 94116 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Charlie Crist",
            party: "Republican",
            votes: 2519845,
            percentage: 52.2,
            winner: true
          },
          {
            name: "Jim Davis",
            party: "Democrat",
            votes: 2178543,
            percentage: 45.1,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Bill Nelson",
            party: "Democrat",
            votes: 2890548,
            percentage: 60.3,
            winner: true
          },
          {
            name: "Katherine Harris",
            party: "Republican",
            votes: 1826127,
            percentage: 38.1,
            winner: false
          }
        ]
      },
      {
        title: "Attorney General Election",
        candidates: [
          {
            name: "Bill McCollum",
            party: "Republican",
            votes: 2450258,
            percentage: 52.7,
            winner: true
          },
          {
            name: "Walter Skip Campbell",
            party: "Democrat",
            votes: 2198658,
            percentage: 47.3,
            winner: false
          }
        ]
      },
      {
        title: "Chief Financial Officer Election",
        candidates: [
          {
            name: "Alex Sink",
            party: "Democrat",
            votes: 2462983,
            percentage: 53.5,
            winner: true
          },
          {
            name: "Tom Lee",
            party: "Republican",
            votes: 2142889,
            percentage: 46.5,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2004,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 245678, democrat: 112345 },
          { district: 2, republican: 198765, democrat: 134521 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "George W. Bush",
            party: "Republican",
            votes: 3964522,
            percentage: 52.1,
            winner: true
          },
          {
            name: "John Kerry",
            party: "Democrat",
            votes: 3583544,
            percentage: 47.1,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Mel Martinez",
            party: "Republican",
            votes: 3672934,
            percentage: 49.4,
            winner: true
          },
          {
            name: "Betty Castor",
            party: "Democrat",
            votes: 3590201,
            percentage: 48.3,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2002,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 178965, democrat: 89765 },
          { district: 2, republican: 167854, democrat: 98765 }
        ]
      },
      {
        title: "Governor Election",
        candidates: [
          {
            name: "Jeb Bush",
            party: "Republican",
            votes: 2856845,
            percentage: 56.0,
            winner: true
          },
          {
            name: "Bill McBride",
            party: "Democrat",
            votes: 2201427,
            percentage: 43.2,
            winner: false
          }
        ]
      }
    ]
  },
  {
    year: 2000,
    races: [
      {
        title: "Congressional Districts",
        type: "congressional",
        districts: [
          { district: 1, republican: 187654, democrat: 98765 },
          { district: 2, republican: 176543, democrat: 87654 }
        ]
      },
      {
        title: "Presidential Election",
        candidates: [
          {
            name: "George W. Bush",
            party: "Republican",
            votes: 2912790,
            percentage: 48.85,
            winner: true
          },
          {
            name: "Al Gore",
            party: "Democrat",
            votes: 2912253,
            percentage: 48.84,
            winner: false
          }
        ]
      },
      {
        title: "U.S. Senate Election",
        candidates: [
          {
            name: "Bill Nelson",
            party: "Democrat",
            votes: 2987644,
            percentage: 51.0,
            winner: true
          },
          {
            name: "Bill McCollum",
            party: "Republican",
            votes: 2703608,
            percentage: 46.2,
            winner: false
          }
        ]
      }
    ]
  }
];

// Define race order
const raceOrder = [
  "Presidential Election",
  "U.S. Senate Election",
  "Congressional Districts",
  "Governor Election",
  "Attorney General Election",
  "Chief Financial Officer Election",
  "Commissioner of Agriculture Election"
];

// Function to check if race results are incomplete
function isIncompleteRace(year, race) {
  return year === 2024 && race.candidates && race.candidates.some(c => !c.winner);
}

// Make setLayout function globally available
window.setLayout = function(layout) {
  const resultsContainer = document.getElementById('electionResults');
  const gridButton = document.getElementById('gridButton');
  const listButton = document.getElementById('listButton');
  const tableButton = document.getElementById('tableButton');
  
  resultsContainer.className = layout === 'grid' ? 'results-grid' : 
                              layout === 'list' ? 'results-list' : 
                              'results-table';
  
  gridButton.className = layout === 'grid' ? 'active' : '';
  listButton.className = layout === 'list' ? 'active' : '';
  tableButton.className = layout === 'table' ? 'active' : '';
  
  filterResults();
}

// Make other functions globally available for onclick handlers
window.selectAllYears = function() {
  const checkboxes = document.querySelectorAll('#yearFilter input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = true);
  filterResults();
}

window.clearYears = function() {
  const checkboxes = document.querySelectorAll('#yearFilter input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  filterResults();
}

window.selectAllRaces = function() {
  const checkboxes = document.querySelectorAll('#raceFilter input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = true);
  filterResults();
}

window.clearRaces = function() {
  const checkboxes = document.querySelectorAll('#raceFilter input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  filterResults();
}

// Initialize filters
function initializeFilters() {
  const yearFilter = document.getElementById('yearFilter');
  const raceFilter = document.getElementById('raceFilter');
  
  // Get unique years
  const years = [...new Set(electionData.map(election => election.year))];
  years.sort((a, b) => b - a); // Sort descending
  
  // Add year checkboxes
  years.forEach(year => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = year;
    checkbox.checked = true;
    checkbox.addEventListener('change', filterResults);
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(year));
    yearFilter.appendChild(label);
  });
  
  // Get unique race types
  const races = [...new Set(electionData.flatMap(election => 
    election.races.map(race => race.title)
  ))];
  races.sort();
  
  // Add race checkboxes
  races.forEach(race => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = race;
    checkbox.checked = true;
    checkbox.addEventListener('change', filterResults);
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(race));
    raceFilter.appendChild(label);
  });
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Calculate congressional totals
function calculateCongressionalTotals(year) {
  const congressionalRace = electionData
    .find(election => election.year === year)?.races
    .find(race => race.type === 'congressional');

  if (!congressionalRace) return null;

  const totals = congressionalRace.districts.reduce((acc, district) => {
    acc.republican += district.republican;
    acc.democrat += district.democrat;
    return acc;
  }, { republican: 0, democrat: 0 });

  totals.total = totals.republican + totals.democrat;
  totals.republicanPercentage = (totals.republican / totals.total) * 100;
  totals.democratPercentage = (totals.democrat / totals.total) * 100;

  return totals;
}

// Create election card
function createElectionCard(election, race) {
  const card = document.createElement('div');
  card.className = 'election-card';
  
  const title = document.createElement('h3');
  title.textContent = `${election.year} ${race.title}`;
  card.appendChild(title);
  
  if (race.type === 'congressional') {
    // Handle congressional district display
    const totals = calculateCongressionalTotals(election.year);
    if (totals) {
      const winner = totals.republican > totals.democrat ? 'Republican' : 'Democrat';
      
      const republicanDiv = document.createElement('div');
      republicanDiv.className = `candidate ${winner === 'Republican' ? 'winner republican' : ''}`;
      
      const republicanInfo = document.createElement('div');
      republicanInfo.className = 'candidate-info';
      republicanInfo.innerHTML = `
        <span class="name">Republican</span>
        <span class="party">GOP</span>
        <span class="votes">${formatNumber(totals.republican)} (${totals.republicanPercentage.toFixed(1)}%)</span>
      `;
      
      const republicanBar = document.createElement('div');
      republicanBar.className = 'percentage-bar';
      const republicanFill = document.createElement('div');
      republicanFill.className = 'fill republican';
      republicanFill.style.width = `${totals.republicanPercentage}%`;
      republicanBar.appendChild(republicanFill);
      
      republicanDiv.appendChild(republicanInfo);
      republicanDiv.appendChild(republicanBar);
      
      const democratDiv = document.createElement('div');
      democratDiv.className = `candidate ${winner === 'Democrat' ? 'winner democrat' : ''}`;
      
      const democratInfo = document.createElement('div');
      democratInfo.className = 'candidate-info';
      democratInfo.innerHTML = `
        <span class="name">Democrat</span>
        <span class="party">DEM</span>
        <span class="votes">${formatNumber(totals.democrat)} (${totals.democratPercentage.toFixed(1)}%)</span>
      `;
      
      const democratBar = document.createElement('div');
      democratBar.className = 'percentage-bar';
      const democratFill = document.createElement('div');
      democratFill.className = 'fill democrat';
      democratFill.style.width = `${totals.democratPercentage}%`;
      democratBar.appendChild(democratFill);
      
      democratDiv.appendChild(democratInfo);
      democratDiv.appendChild(democratBar);
      
      card.appendChild(republicanDiv);
      card.appendChild(democratDiv);
    }
  } else {
    // Handle regular races
    const sortedCandidates = [...race.candidates].sort((a, b) => b.votes - a.votes);
    
    sortedCandidates.forEach(candidate => {
      const candidateDiv = document.createElement('div');
      candidateDiv.className = `candidate ${candidate.winner ? `winner ${candidate.party.toLowerCase()}` : ''}`;
      
      const candidateInfo = document.createElement('div');
      candidateInfo.className = 'candidate-info';
      candidateInfo.innerHTML = `
        <span class="name">${candidate.name}</span>
        <span class="party">${candidate.party}</span>
        <span class="votes">${formatNumber(candidate.votes)} (${candidate.percentage.toFixed(1)}%)</span>
      `;
      
      const percentageBar = document.createElement('div');
      percentageBar.className = 'percentage-bar';
      
      const fill = document.createElement('div');
      fill.className = `fill ${candidate.party.toLowerCase()}`;
      fill.style.width = `${candidate.percentage}%`;
      
      percentageBar.appendChild(fill);
      candidateDiv.appendChild(candidateInfo);
      candidateDiv.appendChild(percentageBar);
      card.appendChild(candidateDiv);
    });
  }

  // Add footnote for incomplete results
  if (isIncompleteRace(election.year, race)) {
    const footnote = document.createElement('p');
    footnote.className = 'incomplete-note';
    footnote.textContent = 'Results are not complete yet, check back later for updated results.';
    card.appendChild(footnote);
  }
  
  return card;
}

// Create table view
function createTableView(filteredData) {
  const table = document.createElement('table');
  table.className = 'results-table';
  
  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Year', 'Race', 'Candidate', 'Party', 'Votes', 'Percentage', 'Status'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  filteredData.forEach(({ year, race }) => {
    if (race.type === 'congressional') {
      const totals = calculateCongressionalTotals(year);
      if (totals) {
        const winner = totals.republican > totals.democrat ? 'Republican' : 'Democrat';
        
        // Republican row
        const repRow = document.createElement('tr');
        repRow.innerHTML = `
          <td>${year}</td>
          <td>${race.title}</td>
          <td class="${winner === 'Republican' ? 'winner republican' : ''}">${'Republican'}</td>
          <td>GOP</td>
          <td>${formatNumber(totals.republican)}</td>
          <td>${totals.republicanPercentage.toFixed(1)}%</td>
          <td>${isIncompleteRace(year, race) ? '<span class="incomplete">Results incomplete</span>' : ''}</td>
        `;
        tbody.appendChild(repRow);
        
        // Democrat row
        const demRow = document.createElement('tr');
        demRow.innerHTML = `
          <td>${year}</td>
          <td>${race.title}</td>
          <td class="${winner === 'Democrat' ? 'winner democrat' : ''}">${'Democrat'}</td>
          <td>D
EM</td>
          <td>${formatNumber(totals.democrat)}</td>
          <td>${totals.democratPercentage.toFixed(1)}%</td>
          <td>${isIncompleteRace(year, race) ? '<span class="incomplete">Results incomplete</span>' : ''}</td>
        `;
        tbody.appendChild(demRow);
      }
    } else {
      const sortedCandidates = [...race.candidates].sort((a, b) => b.votes - a.votes);
      sortedCandidates.forEach(candidate => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${year}</td>
          <td>${race.title}</td>
          <td class="${candidate.winner ? `winner ${candidate.party.toLowerCase()}` : ''}">${candidate.name}</td>
          <td>${candidate.party}</td>
          <td>${formatNumber(candidate.votes)}</td>
          <td>${candidate.percentage.toFixed(1)}%</td>
          <td>${isIncompleteRace(year, race) ? '<span class="incomplete">Results incomplete</span>' : ''}</td>
        `;
        tbody.appendChild(row);
      });
    }
  });
  
  table.appendChild(tbody);
  return table;
}

// Filter results based on selected checkboxes
function filterResults() {
  const selectedYears = Array.from(document.querySelectorAll('#yearFilter input:checked')).map(cb => parseInt(cb.value));
  const selectedRaces = Array.from(document.querySelectorAll('#raceFilter input:checked')).map(cb => cb.value);
  const resultsContainer = document.getElementById('electionResults');
  const isTableView = resultsContainer.className === 'results-table';
  
  // Clear previous results
  resultsContainer.innerHTML = '';
  
  // Get filtered data
  const filteredData = [];
  electionData.forEach(election => {
    if (selectedYears.includes(election.year)) {
      election.races.forEach(race => {
        if (selectedRaces.includes(race.title)) {
          filteredData.push({ year: election.year, race });
        }
      });
    }
  });
  
  // Sort data by year (descending) and race order
  filteredData.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return raceOrder.indexOf(a.race.title) - raceOrder.indexOf(b.race.title);
  });
  
  if (isTableView) {
    resultsContainer.appendChild(createTableView(filteredData));
  } else {
    filteredData.forEach(({ year, race }) => {
      resultsContainer.appendChild(createElectionCard({ year, races: [race] }, race));
    });
  }
}

// Initialize filters and display results
document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  filterResults();
});