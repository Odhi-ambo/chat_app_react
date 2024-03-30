import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {

    return(

        <ChatEngine
        height = "100vh"
        projectID = "ce1609de-0c24-4461-81de-26d9624f1466"
        userName = "Mike"
        userSecret = "123123"
        renderChatFeed = {({chatAppProps}) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;