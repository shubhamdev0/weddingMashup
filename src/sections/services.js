/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/4.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/2.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';
import icon7 from 'assets/images/features/7.png';
import icon8 from 'assets/images/features/8.png';
import icon9 from 'assets/images/features/9.png';
import icon10 from 'assets/images/features/10.png';
import icon11 from 'assets/images/features/11.png';
import icon12 from 'assets/images/features/12.png';
import icon13 from 'assets/images/features/13.png';

const data = [
  {
    id: 2,
    icon: icon4,
    path: '#!',
    title: 'Wedding Invites',
    description: `Assisting in the design and coordination of every aspect of wedding-related print material in keeping with the event theme.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Wedding Venues & Locations',
    description: `Suggesting wedding and event venues, and location visits based on the client’s theme, budget and requirement.`,
  },
  {
    id: 4,
    icon: icon2,
    path: '#!',
    title: 'Wedding Menu Planning',
    description: `Food and beverage consulting and coordinating right up to offering menu design, styling, and managing the taste of everyone.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Traditional Wedding Ceremonies',
    description: `Making arrangements for the actual wedding ceremony and every wedding-related event, including but not limited to the Mehendi ceremony, Haldi, Mandvo, Baraat, community-specific priests and arrangements.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Design & Décor',
    description: `Conceptualising, designing and coordinating all aspects of wedding design and décor, including lighting, floral set-ups and execution of themes, after understanding your vision.`,
  },
  {
    id: 7,
    icon: icon7,
    path: '#!',
    title: 'Wedding Photography, Videography / Cinematography',
    description: `Arranging wedding photography specialists for every wedding-related event, pre-wedding shoot, engagement shoot and bridal shoot, diverse set of styles including traditional, documentary, quirky and Bollywood, in keeping with your vision and budget`,
  },{
    id: 8,
    icon: icon8,
    path: '#!',
    title: 'Entertainment',
    description: `Referring and coordinating a range of options relating to entertainment at the wedding and related functions, including live acts, live music, DJs, celebrity, performers, dancers, artists, pyrotechnic shows, audio requirements, lighting design & special effects design`,
  },
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Personalised Wedding Packages',
    description: `We at Wedding Mashup don’t offer set packages — that’s because we believe that complimentary consultation session that lets you choose from our list of extensive wedding planning services. Based on your budget, taste, vision and requirements, we then come up with a personalised wedding proposal that suits your needs and preferences.`,
  },
  {
    id: 10,
    icon: icon10,
    path: '#!',
    title: 'Pre-Wedding Photography / Videography',
    description: `Arranging for your pre-wedding photography shoot — be it on an exotic beach, on the romantic streets of Paris, or even in Rajasthan. We arrange for everything from a professional photography team, travel, accommodation, styling, and more.`,
  },{
    id: 11,
    icon: icon11,
    path: '#!',
    title: 'Bridal - Groom Styling: Makeup & Hair',
    description: `Consulting and coordinating with designers and professional stylists for hair, makeup, mehendi, accessories, wardrobe and sari draping as per your vision and budget, and in keeping with the latest trends and your body type`,
  },{
    id: 12,
    icon: icon12,
    path: '#!',
    title: 'Pre-Wedding Planning Services',
    description: `Our services also include planning all pre-wedding events like bridal showers, bachelor and Club parties.`,
  },{
    id: 13,
    icon: icon13,
    path: '#!',
    title: 'Favors & Gifts',
    description: `Ideating, sourcing and packaging themed giveaways or favours, event-related giveaways, gifts for Mehendi ceremony, and welcome hampers for guests.`,
  },
  {
    id: 9,
    icon: icon9,
    path: '#!',
    title: 'Wedding Choreography',
    description: `We have a team of Wedding Choreographers, each with their own special skill set to bring out the maximum energy. <br/> We are based in Jaipur but also ready to travel outstation to prepare you and your better half, along with your family and friends to dance and vibe on customized tunes that they will prepare especially for you. From perfectly choreographed dance numbers with Bollywood beats to breaking a leg on Punjabi music, the team will ensure that your every moment is well-rehearsed and equally precious and will make you have the greatest time in your life.`,
  },
];

const Services = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Services"
          title="High quality & reliable services, all in one place"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
