import React, { useState, useEffect } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import "../App.css"; // Custom styling

const Tabs = () => {
    const [activeKey, setActiveKey] = useState("opulence");

    // Auto-switch tabs every 4 seconds
    useEffect(() => {
        const tabKeys = ["opulence", "discover", "explore"];
        let index = tabKeys.indexOf(activeKey);
        const interval = setInterval(() => {
            index = (index + 1) % tabKeys.length;
            setActiveKey(tabKeys[index]);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeKey]);

    return (

        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Row>
                {/* Left Side - Cards */}
                <div className="work-section-wrapper">
                    <div className="work-section-top">
                        <h1 className="primary-heading mb-0">My Personal Skills</h1>
                      
                    </div>

                </div>
                <Col sm={3} className="tab-nav">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="opulence">Strong Team Player</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="discover">Adaptability</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="explore">Problem-Solving Mindset</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                {/* Right Side - Tab Content */}
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="opulence">
                            <div className="tab-content-box opulence">
                                <h2>Strong Team Player</h2>
                                <p> I thrive in collaborative environments, actively contributing ideas, supporting team members, and ensuring seamless teamwork to achieve shared goals. I believe in open communication and fostering a positive work culture.</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="discover">
                            <div className="tab-content-box discover">
                                <h2> Adaptability & Continuous Learning</h2>
                                <p>I quickly adapt to new technologies, frameworks, and methodologies. I continuously upgrade my skills and stay updated with industry trends to remain competitive in the ever-evolving tech landscape.</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="explore">
                            <div className="tab-content-box explore">
                                <h2>Problem-Solving Mindset</h2>
                                <p>I enjoy tackling challenges and finding innovative solutions to complex coding issues. Debugging and optimizing performance are aspects of development that I approach strategically and systematically.</p>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Tabs;
