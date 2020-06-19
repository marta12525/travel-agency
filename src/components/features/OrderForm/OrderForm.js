import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

import pricing from '../../../data/pricing.json';

import {Row, Col} from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, countryCode}) => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object, 
  setOrderOption: PropTypes.func,
  countryCode: PropTypes.string,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
};

export default OrderForm;
