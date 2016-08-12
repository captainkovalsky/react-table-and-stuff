import * as React from 'react';

export default class JsonEditor extends React.Component<{
  init?: string,
  onChange?: Function
}, any> {
  ctrl: {
    jsonInput?: HTMLTextAreaElement;
  } = {};

  constructor(props) {
    super(props);
    console.log('this.props.init ', this.props);
    this.state = {
      jsonText: JSON.stringify(this.props.init)
    };
  }

  updateJson(value: string): void {
    let jsonText: string = 'Parse Error';
    let obj = {};
    try {
      obj = JSON.parse(value);
      jsonText = JSON.stringify(obj, null, 3);
    } catch (e) {
      return;
    }

    this.setState({
      jsonText
    });

    this.props.onChange(obj);
  }


  render() {
    return (
      <div>
      <h1>editor</h1>
      <pre>{this.state.jsonText}</pre>
      <textarea ref={(input) => this.ctrl.jsonInput = input}
          onChange= {() => this.updateJson(this.ctrl.jsonInput.value) }>
          {this.state.jsonText}
      </textarea>
      </div>
    );
  }
}
