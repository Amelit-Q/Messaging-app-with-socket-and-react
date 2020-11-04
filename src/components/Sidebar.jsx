import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

const CONVERSATION_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = React.useState(CONVERSATION_KEY);

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
      {console.log(activeKey)}
    </div>
  );
};
