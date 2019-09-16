import React from 'react';

import {Statistic, Card, Row, Col, Icon, Typography} from 'antd';
import './style.css';

const {Title} = Typography;

function Home() {
    return (
        <div style={{background: '#ECECEC', padding: '30px'}}>
            <Row gutter={24}>
                <Col span={6} style={{marginLeft: 5}}>
                    <Title level={4}>仪表盘</Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<Icon type="arrow-up"/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{color: '#cf1322'}}
                            prefix={<Icon type="arrow-down"/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<Icon type="arrow-up"/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{color: '#cf1322'}}
                            prefix={<Icon type="arrow-down"/>}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;