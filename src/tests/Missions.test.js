import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/missions/Missions';

describe('Mission Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
