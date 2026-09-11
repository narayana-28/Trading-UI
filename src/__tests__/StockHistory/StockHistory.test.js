import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import StockHistory from '../../Components/StockHistory/StockHistory';

jest.mock('axios');

describe('when the home component is called', () => {
    let wrapper;

    beforeEach(() => {
        axios.get.mockResolvedValue({
            status: 200,
            data: {
                status: 'SUCCESS',
                data: []
            }
        });

        wrapper = shallow(<StockHistory />);
    });

    it('should render the render method', () => {
        expect(wrapper).toHaveLength(1);
    });
});
