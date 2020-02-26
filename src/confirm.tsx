import * as React from 'react';
import './confirm.css';

interface IProps {
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'Okay'
  };

  public render() {
    return (
      <div className='confirm-wrapper confirm-visible'>
        <div className='confirm-container'>
          <div className='confirm-title-container'>
            <span>{this.props.title}</span>
          </div>
          <div className='confirm-content-container'>
            <p>{this.props.content}</p>
          </div>
          <div className='confirm-buttons-container'>
            <button className='confirm-cancel' onClick={this.handleCancelClick}>
              {this.props.cancelCaption}
            </button>
            <button className='confirm-ok' onClick={this.handleOkClick}>
              {this.props.okCaption}
            </button>
          </div>
        </div>
      </div>
    );
  }
  private handleOkClick = () => {
    // console.log('clicked', this.props);
    this.props.onOkClick();
  };

  private handleCancelClick = () => {
    // console.log('cancelled', this.props);
    this.props.onCancelClick();
  };
}

export default Confirm;
