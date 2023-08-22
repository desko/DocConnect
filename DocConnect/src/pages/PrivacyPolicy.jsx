/* eslint-disable max-len */
import {Heading, Text} from '@chakra-ui/react';
import Section from '../components/Section/Section';
import BoxCard from '../components/BoxCard/BoxCard';
const PrivacyPolicy = () => {
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
          {`Code-Infused Privacy and Policy`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`Ahoy, fellow code wranglers! Welcome to our top-secret privacy and policy page, where every bit and byte of your data is treated with the utmost debugging skills. Strap in for some programming humor:`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`1. Data Collection: Harvesting Code Snippets`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`We collect data like a programmer collects code snippets from Stack Overflow. Your preferences, clicks, and coding style might end up in our data silos, but don't worry, we promise not to use your coding errors against you.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`2. Cookies: Byte-Sized Cookies, No Crumbs`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`Our cookies are byte-sized, making them the perfect snack for your virtual developer journey. No crumbs left behind to clog your browser's keyboard.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`3. Sharing is Caring: Sharing Your "Hello World" Moments`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`We might share your data with fellow developers who have an insatiable curiosity about your "Hello World" milestones. Brace yourself for congratulatory emails filled with excessive exclamation marks!`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`4. Third-Party Debugging: Friends with Bugs`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`We've got some third-party pals who specialize in debugging and fixing quirks. They'll look at your data as if it were a complex codebase, but fear not, they won't refactor your life choices.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`5. Security: Fort Knox-Level Encryption (for Real)`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`Your data is protected with encryption so strong, it makes quantum computing feel like child's play. Rest assured, no hackers or devious coders will breach our defenses.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`6. Opt-Out: The "404 Not Found" Dance`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`If you choose to opt out, you'll embark on a quest for the legendary 404 Error page. Follow the clues, solve the riddles, and perform an interpretive dance of your favorite error messages to escape.`}
        </Text>

        <Heading
          as='h2'
          size='md'
          pb='1rem'>
          {`7. Privacy Updates: Git Commits for Changes`}
        </Heading>

        <Text
          pb='3rem'
        >
          {`When we update our privacy policy, we commit the changes to a public GitHub repository. Feel free to fork, clone, and suggest your own edits. Pull requests will be reviewed with extreme enthusiasm! By diving into our code-laden realm, you agree to our tongue-in-cheek privacy and policy terms. Remember, even in the world of privacy, a good laugh can be the best syntax error fix. Happy coding, and may your semicolons always be properly placed!`}
        </Text>

        <Text
        >
          <Text
            as='strong'
            fontWeight='700'
          >
            {`Disclaimer: This privacy policy is a delightful work of fiction, and any actual privacy concerns should be directed to our real privacy policy. No lines of code were harmed in the making of this text.`}
          </Text>
        </Text>

      </BoxCard>
    </Section>
  );
};

export default PrivacyPolicy;
