import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types'
import styles from './Pager.css';

class Pager extends Component {
    setPage(offset, e) {
        e.preventDefault();
        //dispatch the setPageOffset event
        this.props.actions.setPageOffset(offset);
    }

    render() {
        const pages = [];
        const {friends} = this.props;
        const {size, offset} = this.props.pconfig;

        const noOfPages = Math.ceil(friends.length / size);

        for (let i = 0; i < noOfPages; i++) {
            pages.push({offset: i * size, name: i+1});
        }

        return (
            <ul className={styles.pager}>
                {pages.map((p)=>{

                    if (p.offset === offset) {
                        return <li className="active" key={p.offset}>{p.name}</li>
                    }

                    return (
                        <li key={p.offset}>
                            <a href="#" onClick={this.setPage.bind(this, p.offset)}>{p.name}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

Pager.propTypes = {
    pconfig: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default Pager