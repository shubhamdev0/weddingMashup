/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import about from 'assets/images/about.webp';

const list = [
  'Medical and vision',
  'Life insurance',
  'HSAs and FSAs',
  'Commuter benefits',
];

const About = () => {
  return (
    <Box id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image src={about} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              About Us
            </Heading>
            <Text as="p" sx={styles.summary}>
              We are <strong>Wedding Mashup</strong>, we plan every wedding with our complete involvement~ heart and soul. We understand that planning a wedding requires expert assistance and organization. We offer a range of complete wedding planning services to deliver a one-of-a-kind wedding, whether you are planning an intimate gathering or a big fat Indian wedding!
            </Text>
            <br/>
            <Text as="p" sx={styles.summary}>
              Our complete wedding planning service takes care of each and every aspect of wedding planning and hand holds you through the entire process.
              We want to be a part of all aspects of your wedding planning process, assisting you in micromanagement throughout the complete duration of planning. We want to be able to offer our professional touch and advice all along the way. We make sure that our efforts will help you to have a better approach to the planning phase, help build a better vision of the event, make it entertaining and memorable and most certainly <strong>help you save cost as well</strong>.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'primary',
    fontWeight: 500,
    fontSize: 8,
    lineHeight: 2.5,
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'black',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'black',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
