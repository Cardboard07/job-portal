// Mock job data to use when API is unavailable
const mockJobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'We are looking for a skilled Frontend Developer to join our team.',
    postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Contract',
    salary: '$70 - $90 per hour',
    description: 'Join our design team to create amazing user experiences.',
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description: 'Looking for an experienced Backend Engineer to develop our core services.',
    postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'ProductLabs',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$100,000 - $140,000',
    description: 'Lead product development and work with cross-functional teams.',
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'Help us build and maintain our cloud infrastructure.',
    postedAt: new Date().toISOString()
  }
];

export async function fetchJobs() {
  try {
    const res = await fetch('https://jsonfakery.com/jobs');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    // Ensure array is returned, fallback to mock data if needed
    return Array.isArray(data) && data.length > 0 ? data : mockJobs;
  } catch (error) {
    console.warn('Using mock job data due to API error:', error.message);
    return mockJobs;
  }
}
