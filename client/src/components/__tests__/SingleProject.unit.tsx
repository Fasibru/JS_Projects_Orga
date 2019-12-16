import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SingleProject, { ProjectItem, ProjectLink } from '../SingleProject';

describe('Test <SingleProject />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(<SingleProject
      title="Test Title"
      dateCreated="1574614461353"
      dateModified="1574614461353"
    />);
  });

  it('Snapshot is consistent', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Project title is rendered correctly', () => {
    const projectTitle = wrapper.find(ProjectLink);

    expect(projectTitle.text()).toEqual('Test Title');
  });

  it('Project creation date is rendered correctly', () => {
    const projectDateCreated = wrapper.find(ProjectItem).at(0);

    expect(projectDateCreated.text()).toEqual('2019-11-24');
  });

  it('Project modification date is rendered correctly', () => {
    const projectDateModified = wrapper.find(ProjectItem).at(0);

    expect(projectDateModified.text()).toEqual('2019-11-24');
  });
});
