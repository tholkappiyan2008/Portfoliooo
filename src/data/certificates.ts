export interface Certificate {
  id: number;
  number: string;
  title: string;
  issuer: string;
  category: string;
  issueDate: string;
  imageUrl: string;
  fallbackUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    number: '01',
    title: 'Breaking into IoT Workshop',
    issuer: 'NxtWave Institute of Advanced Technologies (NIAT)',
    category: 'Internet of Things & Robotics',
    issueDate: '27th Sep, 2025',
    imageUrl: '/images/certificates/cert-01.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/innov_taku/V7N1NEUA31.png',
  },
  {
    id: 2,
    number: '02',
    title: 'Autonomous Vehicle Workshop',
    issuer: 'NxtWave Institute of Advanced Technologies (NIAT)',
    category: 'Autonomous Systems & Robotics',
    issueDate: '27th Nov, 2025',
    imageUrl: '/images/certificates/cert-02.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/auve/UN601Z2JKL.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Hack the Human Signal',
    issuer: 'Robotics & Advanced Technologies Team, NIAT',
    category: 'Biosignals & Neural Interfaces',
    issueDate: '13th Dec, 2025',
    imageUrl: '/images/certificates/cert-03.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/hths_tu/HUDVWYF8AY.png',
  },
  {
    id: 4,
    number: '04',
    title: 'AI Agents 201 Hands-On Workshop',
    issuer: 'NxtWave of Innovation in Advanced Technologies (NIAT)',
    category: 'AI Agents & LLM Solutions',
    issueDate: '13th Apr, 2026',
    imageUrl: '/images/certificates/cert-04.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/ai_tu/TO1EJGOZDH.png',
  },
  {
    id: 5,
    number: '05',
    title: 'AgriDrone Workshop',
    issuer: 'Robotics & Advanced Technologies Team, NIAT',
    category: 'Aerial Robotics & Precision Agriculture',
    issueDate: '12th Oct, 2026',
    imageUrl: '/images/certificates/cert-05.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/agri/0LHVRO09YG.png',
  },
  {
    id: 6,
    number: '06',
    title: 'Mobile Manipulators',
    issuer: 'Robotics & Advanced Technologies Team, NIAT',
    category: 'Mobile Robotics & Manipulators',
    issueDate: '14th Aug, 2026',
    imageUrl: '/images/certificates/cert-06.png',
    fallbackUrl:
      'https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/mobileinnovators/3WAW5WJMJW.png',
  },
];
