import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store} />,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
