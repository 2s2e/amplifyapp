import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react";

function App({ SignOut }) {
  return (
    <View>
      <Card>
        <Heading level={1}>Welcome to your Amplify app!</Heading>
        <Image src={logo} />
      </Card>
      <Button onClick={SignOut}>Sign out</Button>
    </View>
  );
}

export default withAuthenticator(App);