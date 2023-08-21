/* eslint-disable max-len */
import {Heading, Text} from '@chakra-ui/react';
import Section from '../components/Section/Section';
import BoxCard from '../components/BoxCard/BoxCard';

const UserAgreement = () => {
  return (
    <Section>
      <BoxCard
        styleProps={{
          maxWidth: '100%',
        }}
      >
        <Heading
          as='h1'
          size='lg'
          pb='1rem'>
          {`Code Maestro User Agreement`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`Ahoy, Adventurous Coder! Before you embark on this byte-sized coding journey, let's lay down some ground rules in the realm of 1s and 0s. By continuing to use our platform, you agree to the following terms:`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`1. Enthusiastic Consent to Data Collection:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I, the Valiant User, consent to data collection, fully aware that my coding preferences, clicks, and coding quirks might be stored like prized code snippets in a vast digital treasure chest.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`2. Cookie Crusader:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I embrace the presence of cookies in my digital universe, accepting that they are designed to make my browsing experience smoother than well-optimized code.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`3. Jovial Sharing of Achievements:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I understand that my coding milestones and achievements may be shared with fellow developers in the spirit of camaraderie, and I welcome virtual high-fives in the form of congratulatory emails.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`4. Third-Party Debugging Banter:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I am ready for some third-party debuggers to poke around my data, and I trust they will treat it with the respect a master coder treats their most delicate algorithms.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`5. Encryption Enthusiast:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I'm all in for data security that's stronger than Fort Knox, and I trust that my data will be guarded with cryptographic prowess that even a cyborg hacker would admire.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`6. Groovy Opt-Out Moves:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`If I choose to opt out of this coding adventure, I'm willing to embark on a whimsical quest to discover the hidden "404 Not Found" dance, understanding that it's the ultimate easter egg.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`7. Version-Controlled Privacy Updates:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I acknowledge that privacy policy updates will be tracked using the sophisticated version control system of Git, and I'm welcome to contribute my insights via pull requests, all while keeping my coding humor intact.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`8. Good Vibes Disclaimer:`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`I understand that this user agreement is a playful blend of humor and tech, and I solemnly swear not to take it as seriously as a missing semicolon.`}
        </Text>

        <Text
          pb='3rem'
        >
          {`By continuing to use our platform, I agree to these terms with the zest of a developer who has just discovered a new framework. I'm ready to embrace the coding camaraderie, share a chuckle, and embark on a journey where code meets comedy.`}
        </Text>

        <Text
        >
          <Text
            as='strong'
            fontWeight='700'
          >
            {`Disclaimer: This user agreement is purely for fun and entertainment. For the actual terms and conditions, refer to our legitimate user agreement.`}
          </Text>
        </Text>

      </BoxCard>
    </Section>
  );
};

export default UserAgreement;
