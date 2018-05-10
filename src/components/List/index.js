import React, { Component } from 'react';
import ListItem from '../ListItem';

export default class List extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul className='list-group'>
                {
                    items.map((item) => {
                        return (
                            <ListItem
                                onRemove={() => { this.props.removeItem(item.id); }}
                                name={item.name}
                                key={item.id}
                            />
                        );
                    })
                }
            </ul>
        );
    }
}
