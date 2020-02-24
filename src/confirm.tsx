import * as React from 'react';

interface IProps {
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption: string;
}

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'Okay'
  };
  public render() {
    return <Confirm title='React and Typescript' content='Are you sure you want to...' />;
  }
}

export default Confirm;
