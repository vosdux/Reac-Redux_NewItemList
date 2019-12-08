import React, { Component } from 'react';
import { Row, Col, Card, Modal, Table } from 'antd';
import './ItemList.css';

class ItemList extends Component {

    state = {
        columns: [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: 'label',
                dataIndex: 'label'
            }
        ]
    };

    componentDidMount() {
        this.props.itemsFetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        this.props.itemFail();
    };

    componentDidUpdate() {
        const { failed, errorText } = this.props;
        if (failed) {
            this.error(errorText);
        }
    };

    error = (errorText) => {
        Modal.error({
          title: errorText
        });
    };

    render() {
        const { columns } = this.state;
        const { loading, items } = this.props;
        return(
            <Row>
                <Col span={20} offset={2}>
                    <Card title='Список элементов'>
                        <Table 
                            dataSource={items}
                            columns={columns}
                            rowKey={(record) => record.id}
                            loading={loading}
                        />
                    </Card>
                </Col>
            </Row>
        );
    };
};

export default ItemList;
