import userProfile from '../assets/user.png';
import robotProfile from '../assets/robot.png';

export function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div className={
            sender === 'user'
              ? 'chat-message-user'
              : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={robotProfile} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={userProfile} className="chat-message-profile" />
            )}
          </div>
        );
      }
