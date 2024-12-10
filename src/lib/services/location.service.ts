import { State, US_STATES } from '@/lib/data/us-states';
import { County } from '@/lib/types/location';

const CENSUS_API_BASE_URL = 'https://api.census.gov/data';
const CENSUS_YEAR = '2020';

export async function getCountiesByState(stateCode: string): Promise<County[]> {
  if (!stateCode) return [];
  
  try {
    const response = await fetch(
      `${CENSUS_API_BASE_URL}/${CENSUS_YEAR}/dec/pl?get=NAME&for=county:*&in=state:${getStateFips(stateCode)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch counties');
    }

    const data = await response.json();
    
    return data.slice(1)
      .map((row: string[]) => ({
        name: row[0].replace(' County', '').replace(' Parish', ''),
        state: stateCode
      }))
      .sort((a: County, b: County) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error fetching counties:', error);
    return [];
  }
}

function getStateFips(stateCode: string): string {
  const stateFips: Record<string, string> = {
    'AL': '01', 'AK': '02', 'AZ': '04', 'AR': '05', 'CA': '06',
    'CO': '08', 'CT': '09', 'DE': '10', 'FL': '12', 'GA': '13',
    'HI': '15', 'ID': '16', 'IL': '17', 'IN': '18', 'IA': '19',
    'KS': '20', 'KY': '21', 'LA': '22', 'ME': '23', 'MD': '24',
    'MA': '25', 'MI': '26', 'MN': '27', 'MS': '28', 'MO': '29',
    'MT': '30', 'NE': '31', 'NV': '32', 'NH': '33', 'NJ': '34',
    'NM': '35', 'NY': '36', 'NC': '37', 'ND': '38', 'OH': '39',
    'OK': '40', 'OR': '41', 'PA': '42', 'RI': '44', 'SC': '45',
    'SD': '46', 'TN': '47', 'TX': '48', 'UT': '49', 'VT': '50',
    'VA': '51', 'WA': '53', 'WV': '54', 'WI': '55', 'WY': '56'
  };

  return stateFips[stateCode] || '';
}

export function getStateByCode(stateCode: string): State | undefined {
  return US_STATES.find(state => state.abbreviation === stateCode);
}

export function getStateName(stateCode: string): string {
  const state = getStateByCode(stateCode);
  return state ? state.name : stateCode;
}