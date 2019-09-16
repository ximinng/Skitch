import React, {Fragment} from 'react';
import {Breadcrumb, List, Icon, Row, Col, Tag} from 'antd';
import './style.css';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        // description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        labels: ['magenta', 'red', 'volcano'],
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

function Home() {
    return (
        <Fragment>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                <Row gutter={24}>
                    <Col xs={{span: 24}} sm={{span: 18}}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                                simple: true,
                                style: {float: "left"}
                            }}
                            dataSource={listData}
                            header={
                                <div>
                                    <b>文章列表</b> start
                                </div>
                            }
                            // footer={
                            //     <div>
                            //         <b>本页结束</b> end
                            //     </div>
                            // }
                            renderItem={item => (
                                <List.Item key={item.title}
                                           actions={[
                                               <IconText type="star-o" text="156" key="list-vertical-star-o"/>,
                                               <IconText type="like-o" text="156" key="list-vertical-like-o"/>,
                                               <IconText type="message" text="2" key="list-vertical-message"/>,
                                           ]}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        // description={item.description}
                                        description={
                                            <div>
                                                {item.labels.map(
                                                    (item, index) => {
                                                        return <Tag key={index} color={item}>{item}</Tag>
                                                    }
                                                )}
                                            </div>
                                        }
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col xs={{span: 0}} sm={{span: 6}}>
                        <div>
                            <h4 style={{margin: 16}}>标签：</h4>
                            <div style={{marginLeft: 26}}>
                                <Tag color="magenta">magenta</Tag>
                                <Tag color="red">red</Tag>
                                <Tag color="volcano">volcano</Tag>
                                <Tag color="orange">orange</Tag>
                                <Tag color="gold">gold</Tag>
                                <Tag color="lime">lime</Tag>
                                <Tag color="green">green</Tag>
                                <Tag color="cyan">cyan</Tag>
                                <Tag color="blue">blue</Tag>
                                <Tag color="geekblue">geekblue</Tag>
                                <Tag color="purple">purple</Tag>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{span: 0}} sm={{span: 6}}>
                        <div>
                            <h4 style={{margin: 16}}>分类：</h4>
                            <div style={{marginLeft: 26}}>
                                <Tag color="magenta">magenta</Tag>
                                <Tag color="red">red</Tag>
                                <Tag color="volcano">volcano</Tag>
                                <Tag color="orange">orange</Tag>
                                <Tag color="gold">gold</Tag>
                                <Tag color="lime">lime</Tag>
                                <Tag color="green">green</Tag>
                                <Tag color="cyan">cyan</Tag>
                                <Tag color="blue">blue</Tag>
                                <Tag color="geekblue">geekblue</Tag>
                                <Tag color="purple">purple</Tag>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}

export default Home;