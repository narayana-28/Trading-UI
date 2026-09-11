import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import ListStocks from '../../Components/ListStocks/ListStocks';

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

        wrapper = shallow(<ListStocks />);
    });

    it('should render the render method', () => {
        expect(wrapper).toHaveLength(1);
    });
});
