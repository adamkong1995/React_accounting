import React from 'react';
import numeral from 'numeral';

import Card from 'react-bootstrap/Card';

const PanelItem = ({ bg, currency, fullname, acct_no, acct_code, price, type, tx_fee }) => {
    return (
        <Card border='light' bg={bg} text='white' className='mt-2'>
            <Card.Body>
                <Card.Text className='text-center mb-0'>{fullname}</Card.Text>
                <Card.Text className='text-center mb-0'>{acct_no}</Card.Text>
                <Card.Title>{type}: {acct_code}</Card.Title>
                <Card.Title>{numeral(`${price}`).format('$0,0.00')} {currency} {tx_fee? ` + ${numeral(tx_fee).format('$0,0.00')} Tx Fee`: '' } </Card.Title>
            </Card.Body>
        </Card>
    )
};

export default PanelItem;