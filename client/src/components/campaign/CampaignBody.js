import React from "react";
import ContentEditable from "react-contenteditable";
import { connect } from 'react-redux';

class CampaignBody extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = {html: ''};
    }

    renderContent() {

        switch (this.props.html) {
            
            case null:
                return ;
            case '':
                return ;
            default:
                return(
                <div>
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.state} // innerHTML of the editable div
                        disabled={false} // use true to disable editing
                        onChange={this.handleChange} // handle innerHTML change
                        // tagName="article" // Use a custom HTML tag (uses a div by default)
                    />
                </div>
                );
        }
    }
    handleChange = (evt) => {
        // SETSTATE() WONT WORK!!
        // this.setState({ html: evt.target.value });
        this.state = evt.target.value;
        
    };

    render() {
        // console.log(this.props.html);
        if(this.props.html) {
            this.state = this.props.html;
        }
        return (
            <div>
            {this.renderContent()}
            </div>
            
        );
    };
}

function mapStateToProps(state) {
    
    if(state.template){
        return { html: state.template.template }
    }else{
        return { html: "" };
    }
    
}
export default connect(mapStateToProps)(CampaignBody);