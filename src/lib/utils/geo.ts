import { distanceBetween, geohashForLocation } from 'geofire-common';

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export async function getZipCodeFromStateCounty(state: string, county: string): Promise<string> {
  try {
    const cleanCounty = county.replace(/\s+County$/i, '').toLowerCase();
    const response = await fetch(
      `https://api.zippopotam.us/us/${state.toLowerCase()}/${cleanCounty}`
    );
    
    if (!response.ok) {
      return getStateCapitalZipCode(state);
    }
    
    const data = await response.json();
    if (!data.places || data.places.length === 0) {
      return getStateCapitalZipCode(state);
    }

    const zipCode = data.places[0]['post code'];
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      return getStateCapitalZipCode(state);
    }

    return zipCode;
  } catch (error) {
    return getStateCapitalZipCode(state);
  }
}

function getStateCapitalZipCode(state: string): string {
  const stateCapitalZips: Record<string, string> = {
    'AL': '36104', 'AK': '99801', 'AZ': '85007', 'AR': '72201',
    'CA': '95814', 'CO': '80202', 'CT': '06103', 'DE': '19901',
    'FL': '32301', 'GA': '30303', 'HI': '96813', 'ID': '83702',
    'IL': '62701', 'IN': '46204', 'IA': '50309', 'KS': '66603',
    'KY': '40601', 'LA': '70802', 'ME': '04330', 'MD': '21401',
    'MA': '02201', 'MI': '48933', 'MN': '55102', 'MS': '39205',
    'MO': '65101', 'MT': '59601', 'NE': '68502', 'NV': '89701',
    'NH': '03301', 'NJ': '08608', 'NM': '87501', 'NY': '12207',
    'NC': '27601', 'ND': '58501', 'OH': '43215', 'OK': '73102',
    'OR': '97301', 'PA': '17101', 'RI': '02903', 'SC': '29217',
    'SD': '57501', 'TN': '37219', 'TX': '78701', 'UT': '84111',
    'VT': '05602', 'VA': '23219', 'WA': '98507', 'WV': '25301',
    'WI': '53703', 'WY': '82001'
  };

  return stateCapitalZips[state] || '00000';
}

export function calculateDistance(point1: GeoPoint, point2: GeoPoint): number {
  return distanceBetween(
    [point1.latitude, point1.longitude],
    [point2.latitude, point2.longitude]
  ) / 1.609344; // Convert km to miles
}

export function generateGeohash(point: GeoPoint): string {
  return geohashForLocation([point.latitude, point.longitude]);
}