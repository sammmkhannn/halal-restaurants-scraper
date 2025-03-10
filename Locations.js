let locations = [
  "Austin, TX, United States",
  "Anaheim, CA, United States",
  "Atlanta, GA, United States",
  "Arcadia, CA, United States",
  "Alhambra, CA, United States",
  "Santa Ana, CA, United States",
  "Palo Alto, CA, United States",
  "Los Angeles, CA, United States",
  "San Antonio, TX, United States",
  "Brea, CA, United States",
  "Boston, MA, United States",
  "Brooklyn, NY, United States",
  "Berkeley, CA, United States",
  "Bellevue, WA, United States",
  "Baltimore, MD, United States",
  "Buena Park, CA, United States",
  "Tampa Bay, FL, United States",
  "Santa Barbara, CA, United States",
  "Chicago, IL, United States",
  "Columbus, OH, United States",
  "Cerritos, CA, United States",
  "Charlotte, NC, United States",
  "Costa Mesa, CA, United States",
  "Santa Clara, CA, United States",
  "Oklahoma City, OK, United States",
  "Orange Country, CA, United States",
  "Salt Lake City, UT, United States",
  "Dallas, TX, United States",
  "Denver, CO, United States",
  "Dublin, CA, United States",
  "Downey, CA, United States",
  "Detroit, MI, United States",
  "San Diego, CA, United States",
  "Washington, DC, United States",
  "Eugene, OR, United States",
  "Edison, NJ, United States",
  "EI Paso, TX, United States",
  "Edmonton, Alberta, Canada",
  "EI Monte, CA, United States",
  "Encinitas, CA, United States",
  "EIk Grove, CA, United States",
  "Enterprise, NV, United States",
  "EI Segundo, CA, United States",
  "Fresno, CA, United States",
  "Fremont, CA, United States",
  "Fullerton, CA, United States",
  "Fort Worth, TX, United States",
  "Fort Lauderdale, FL, United States",
  "Fountain Valley, CA, United States",
  "San Francisco, CA, United States",
  "San Fernando Valley, CA, United States",
  "Gilbert, AZ, United States",
  "Glendale, CA, United States",
  "Glendora, CA, United States",
  "Greenville, SC, United States",
  "Greensboro, NC, United States",
  "Garden Grove, CA, United States",
  "Grand Rapids, MI, United States",
  "San Gabriel, CA, United States",
  "Nashville-Davidson metropolitan government(balance), TN, United States",
  "Houston, TX, United States",
  "Hayward, CA, United States",
  "Honululu, HI, United States",
  "Henderson, NV, United States",
  "Huntington Beach, CA, United States",
  "Chino Hills, CA, United States",
  "Beverly Hills, CA, United States",
  "Urban Honululu, HI, United States",
  "Rowland Heights, CA, United States",
  "Indio, CA, United States",
  "Irvine, CA, United States",
  "Irving, TX, United States",
  "Inglewood, CA, United States",
  "Indianapolis, IN, United States",
  "Long Island, NY, United States",
  "Staten Island, NY, United States",
  "City of Industry, CA, United States",
  "Hilton Head Island, SC, United States",
  "Juneau, AK, United States",
  "Jackson, MS, United States",
  "Jupiter, FL, United States",
  "Jersey City, NJ, United States",
  "Jacksonville, FL, United States",
  "Jurupa Valley, CA, United States",
  "Jefferson City, MO, United States",
  "San Jose, CA, United States",
  "San Juan, Puerto Rico",
  "La Jolla, San Diego, CA, United States",
  "Kona, HI, United States",
  "Katy, TX, United States",
  "Kent, WA, United States",
  "Kirkland, WA, United States",
  "Knoxville, TN, United States",
  "Kissimmee, FL, United States",
  "Kansas City, MO, United States",
  "Kuala Lumpur, 14, Malaysia",
  "Koreatown, Los Angeles, CA, United States",
  "London, United Kingdom",
  "Las Vegas, NV, United States",
  "Long Beach, CA, United States",
  "Louisville, KY, United States",
  "Los Angeles, CA, United States",
  "Saint Louis, MO, United States",
  "Salt Lake City, UT, United States",
  "Fort Lauderdale, FL, United States",
  "Mesa, AZ, United States",
  "Miami, FL, United States",
  "Montreal, Quebec, Canada",
  "Minneapolis, MN, United States",
  "San Mateo, CA, United States",
  "Costa Mesa, CA, United States",
  "Santa Monica, CA, United States",
  "Newark, CA 94560, United States",
  "Naples, FL, United States",
  "Nashville, TN, United States",
  "New Orleans, LA, United States",
  "Newport Beach, CA, United States",
  "Omaha, NE, United States",
  "Orange, CA, United States",
  "Oakland, CA, United States",
  "Oralndo, FL, United States",
  "Orlando, CA, United States",
  "Oklahoma City, OK, United States",
  "New Orleans, LA, United States",
  "Tthousand Oaks, CA, United States",
  "Phoenix, AZ, United States",
  "Portland, OR, United States",
  "Pesanda, CA, United States",
  "Pittsburgh, PA, United States",
  "Philadelphia, PA, United States",
  "Palm Springs, CA, United States",
  "Buena Park, CA, United States",
  "Queens, NY, United States",
  "Quincy, MA, United States",
  "Quebec City, Quebec, Canada",
  "Qeen Creek, AZ, United States",
  "Quezon City, Metro Manilla, Phillippines",
  "La Quinta, CA, United States",
  "Quezon City, Manila, Metro Manila, Philipines",
  "French Quarter, New Orleans, LA, United States",
  "Reno, NV, United States",
  "Raleigh, NC, United States",
  "Richmond, VA, United States",
  "Rosemead, CA, United States",
  "Riverside, CA, United States",
  "Roseville, CA, United States",
  "Redwood City, CA, United States",
  "Rowland Heights, CA, United States",
  "Rancho Cucamonga, CA,United States",
  "Boca Raton, FL, United States",
  "Seattle, WA, United States",
  "San Jose, CA, United States",
  "San Diego, CA, United States",
  "Sacramento, CA, United States",
  "San Francisco, CA, United States",
  "San Fernando Valley, CA, United States",
  "Tampa, FL, United States",
  "Tempe, AZ, United States",
  "Tucson, AZ, United States",
  "Tustin, CA, United States",
  "Tacoma, WA, United States",
  "Toronto, Ontario, Canada",
  "Torrance, CA, United States",
  "Tampa Bay, FL, United States",
  "Thousand Oaks, CA, United States",
  "Union, NJ, United States",
  "Utica, NY, United States",
  "Upland, CA, United States",
  "Union City, CA, United States",
  "Urban Honululu, HI, United States",
  "Universal City, CA, United States",
  "Upper East Side, Manhattan, NY, United States",
  "Upper West Side, Manhattan, NY, United States",
  "Union Square, San Francisco, CA, United States",
  "Authens-Clarke Country unified government (balance), GA, United States",
  "Vancouver, British Columbia, Canada",
  "Vancouver, WA, United States",
  "Virginia Beach, VA, United States",
  "Las Vegas, NY, United States",
  "Chula Vista, CA, United States",
  "Mountain View, CA, United States",
  "Fountain Valley, CA, United States",
  "Mission Viejo, CA, United States",
  "Fountain Valley, CA, United States",
  "San Fernando Valley, CA, United States",
  "Wichita, KS, United States",
  "Whittier, CA, United States",
  "Washington, DC, United States",
  "Wilmington, NC, United States",
  "Westminster, CA, United States",
  "West Covina, CA, United States",
  "Walnut Creek, CA, United States",
  "West Palm Beach, FL, United States",
  "Fort Worth, TX, United States",
  "Xenia, OH, United States",
  "Xativa, Valencia, Spain",
  "Xochimilco, Mexico City, CDMX, Mexico",
  "York, PA, United States",
  "Yuma, AZ, United States",
  "Yakima, WA, United States",
  "Yonkers, NY, United States",
  "Yuba City, CA, United States",
  "Youngstown, OH, United States",
  "Yorba Linda, CA, United States",
  "North York, Ontario, Cananda",
  "North York, Toronto, Ontario, Canada",
  "Zacatecas, TX, United States",
  "Zionsvelle, IN, United States",
  "Zephyhills, FL, United States",
  "Lake Zurich, IL, United States",
];

export default locations;
