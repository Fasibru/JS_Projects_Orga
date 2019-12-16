import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Headers, { HeaderItem } from '../Headers';

describe('Test <Headers />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(<Headers />);
  });

  it('Snapshot is consistent', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Items are rendered correctly', () => {
    const title = wrapper.find(HeaderItem).at(0);
    const dateCreated = wrapper.find(HeaderItem).at(1);
    const dateModified = wrapper.find(HeaderItem).at(2);

    expect(title.text()).toEqual('Name');
    expect(dateCreated.text()).toEqual('Created');
    expect(dateModified.text()).toEqual('Last modified');
  });
});
