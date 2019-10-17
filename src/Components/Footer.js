import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    state = {
        footer: {
            name: 'Popenko Vladimir', number: '0554330134'
        }
    };
    render() {
        return (
            <div className="footer">
                <span className="name">{this.state.footer.name}</span>
                <span className="number">{this.state.footer.number}</span>

            </div>
        );
    }
}
export default Footer