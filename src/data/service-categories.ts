export interface ServiceCategory {
  id: string;
  name: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'asphalt',
    name: 'Asphalt Services',
    services: ['Seal coating', 'Crack repairs', 'Patching', 'Complete replacement'],
  },
  {
    id: 'pressure-washing',
    name: 'Pressure Washing',
    services: ['Driveway and sidewalk cleaning', 'Deck and patio washing', 'Building exterior cleaning', 'Surface restoration'],
  },
  {
    id: 'gutter',
    name: 'Gutter Services',
    services: ['Gutter cleaning', 'Downspout flushing', 'Gutter repair', 'Replacement services'],
  },
  {
    id: 'outdoor-lighting',
    name: 'Outdoor Lighting',
    services: ['Landscape lighting installation', 'Holiday lighting setup', 'Pathway lighting', 'Security lighting'],
  },
  {
    id: 'lawn-care',
    name: 'Lawn Care',
    services: ['Regular mowing', 'Edging & trimming', 'Weed control', 'Seasonal cleanup'],
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    services: ['Garden design', 'Hardscape installation', 'Mulching', 'Plant installation'],
  },
  {
    id: 'debris-removal',
    name: 'Debris Removal',
    services: ['Yard waste removal', 'Construction debris', 'Bulk trash pickup', 'Regular service'],
  },
  {
    id: 'playground',
    name: 'Playground Services',
    services: ['Equipment assembly', 'Safety surfacing', 'Regular inspection', 'Repairs'],
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    services: ['Mosquito treatment', 'Tick control', 'Wildlife management', 'Prevention'],
  },
  {
    id: 'outdoor-finishing',
    name: 'Outdoor Finishing',
    services: ['Fence and deck staining', 'Outdoor furniture refinishing', 'Touch-up painting', 'Surface preparation'],
  },
  {
    id: 'tree-care',
    name: 'Tree Care',
    services: ['Tree trimming', 'Disease treatment', 'Emergency removal', 'Stump grinding'],
  },
  {
    id: 'snow-removal',
    name: 'Snow Removal',
    services: ['Snow plowing', 'De-icing', 'Sidewalk clearing', '24/7 emergency'],
  },
];