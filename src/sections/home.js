/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
import Image from 'components/image';
import SubscriptionForm from 'components/subscription-form';
import illustration from 'assets/images/bannerImage.png';
import facebook from 'assets/images/facebook.png';
import instagram from 'assets/images/instagram.png';
import linkedIn from 'assets/images/linkedIn.png';

const logos = [
  {
    name: 'Facebook',
    src: facebook,
    url:"https://www.facebook.com/weddingmashup",
  },
  {
    name: 'Instagram',
    src: instagram,
    url:"https://www.instagram.com/weddingmashup/",
  },
  // {
  //   name: 'LinkedIn',
  //   src: linkedIn,
  //   url:"",
  // },
];

const Home = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">
              We Create, You Celebrate
            </Heading>
            <Text as="p">
              Wedding Mashup is your one stop solution for all your wedding needs.
            </Text>
            {/*<SubscriptionForm sx={styles.subscriptionForm} />*/}
            <Flex sx={styles.sponsoredBy}>
              <Text as="span">Social Handle</Text>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <a href={logo.url} target="_blank">
                      <Image sx={styles.img} src={logo.src} alt={logo.name} />
                    </a>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

const styles = {
  section: {
    // background: ` url(${illustration}) no-repeat center top / cover`,
    background: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ),
    url(${illustration}) no-repeat center top / cover`,
    maxHeight: ['auto', null, null, null, '42vh', '81vh'],
    // opacity: 0.4,
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '100vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 14,
    },
  },
  bannerContent: {
    maxWidth: [null, null, 450, '100%', null, 'none'],
    m: [null, null, '0 auto', null, 0],
    textAlign: ['center', null, null, null, 'left'],
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [9, null, null, 10, 12, 45, 14],
      lineHeight: [1, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'heading',
    },
    p: {
      fontSize: [1, null, null, 2, 6, 8],
      lineHeight: [1, null, null, 2, null, 1.4],
      color: 'heading',
      maxWidth: [null, null, 370, 470, 670],
      m: ['20px auto 0', null, null, null, '25px auto 0'],
    },
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, 'none'],
    m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
    input: {
      backgroundColor: '#FFFFFF',
      border: '0 none',
      fontFamily: 'body',
      fontSize: [1, null, null, null, 2],
      px: [3, null, null, 5],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('#02073E', 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
      px: ['18px', null, null, null, 6],
    },
  },
  sponsoredBy: {
    alignItems: 'center',
    justifyContent: ['center', null, null, 'flex-start'],
    maxWidth: [null, null, null, 470, 'none'],
    m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: "heading",
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
  },
  img: {
    width:"40px",
    '@media only screen and (max-width:650px)': {
      width:"30px",
    },
  }
};
